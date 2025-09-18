// Blob File Server
// Serves files from Netlify Blob storage

import { getStore } from "@netlify/blobs";

export const config = {
  method: ["GET", "OPTIONS"],
};

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

export default async function handler(request, context) {
  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new Response("", { status: 200, headers: corsHeaders });
  }

  try {
    const url = new URL(request.url);
    const fileName = url.pathname.split("/").pop();

    if (!fileName) {
      return new Response("File not found", { status: 404 });
    }

    // Get the blob store
    const store = getStore("notion-files");

    // Get the file from blob storage
    const file = await store.get(fileName, { type: "blob" });

    if (!file) {
      return new Response("File not found", { status: 404 });
    }

    // Determine content type
    const fileExtension = fileName.split(".").pop().toLowerCase();
    const contentTypes = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      gif: "image/gif",
      webp: "image/webp",
      svg: "image/svg+xml",
      pdf: "application/pdf",
      txt: "text/plain",
      doc: "application/msword",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      xls: "application/vnd.ms-excel",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };

    const contentType =
      contentTypes[fileExtension] || "application/octet-stream";

    return new Response(file, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000", // Cache for 1 year
        "Content-Disposition": `inline; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error("File serve error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
