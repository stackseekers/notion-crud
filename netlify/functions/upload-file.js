// File Upload Handler using Netlify Blob
// Handles file uploads and returns URLs for Notion integration

import { getStore } from "@netlify/blobs";

export const config = {
  method: ["POST", "OPTIONS"],
};

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

export default async function handler(request, context) {
  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new Response("", { status: 200, headers: corsHeaders });
  }

  try {
    // Get the blob store
    const store = getStore("notion-files");

    // Parse the multipart form data
    const formData = await request.formData();

    // Try to get files with different possible keys
    let files = formData.getAll("files");

    // If no files found with "files" key, try other common keys
    if (!files || files.length === 0) {
      files = formData.getAll("null"); // PrimeVue sometimes sends with "null" key
    }

    // If still no files, try to get any file from FormData
    if (!files || files.length === 0) {
      const allEntries = Array.from(formData.entries());
      files = allEntries
        .filter(([key, value]) => value instanceof File)
        .map(([key, value]) => value);
    }

    // Files found for upload

    if (!files || files.length === 0) {
      return createErrorResponse("No files provided", 400);
    }

    const uploadedFiles = [];

    // Process each file
    for (const file of files) {
      if (file.size === 0) continue;

      // Generate unique filename
      const timestamp = Date.now();
      const randomId = Math.random().toString(36).substring(2, 15);
      const fileExtension = file.name.split(".").pop();
      const fileName = `${timestamp}-${randomId}.${fileExtension}`;

      // Upload to Netlify Blob
      await store.set(fileName, file);

      // Get the public URL
      const fileUrl = `${context.site.url}/.netlify/functions/blob/${fileName}`;

      uploadedFiles.push({
        name: file.name,
        url: fileUrl,
        type: file.type,
        size: file.size,
        blobKey: fileName,
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        files: uploadedFiles,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("File upload error:", error);
    return createErrorResponse("File upload failed", 500);
  }
}

function createErrorResponse(message, status) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}
