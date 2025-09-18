# Multi CRUD web app using Notion (FREE!  & NO CODING REQUIRED)
A powerful, dynamic CRUD application that automatically adapts to your Notion database schema. Perfect for managing talent pools, job boards, and any other structured data in Notion.

# Notion Web App - Simple Setup Guide

Turn your Notion database into a professional website in just a few steps!

## What This Does

Imagine you have a Notion database with information about people, jobs, contacts, or anything else. This tool takes that database and creates a beautiful website that anyone can use to view, add, edit, and search through your information - without needing to know how to use Notion.

## What You Get

✅ **A professional-looking website** that works on phones, tablets, and computers  
✅ **Easy forms** that automatically match your Notion database  
✅ **Search and filter** through all your information  
✅ **File uploads** for documents, photos, and other files  
✅ **Privacy protection** for sensitive information  
✅ **No monthly fees** - runs completely free

## What You Need

1. **A Notion account** (free)
2. **A Netlify account** (free)
3. **Your Notion database** (the one you want to turn into a website)

## Step-by-Step Setup

### Step 1: Get Your Notion Database

**Option A: If you have a database link to duplicate:**

1. **Click the database link** you received
2. **Look for "Duplicate" button** in the top right corner of the page
3. **Click "Duplicate"** to copy it to your workspace
4. **Choose your workspace** where you want to save it
5. **Click "Duplicate"** to confirm
6. **You now have your own copy** - this is the database you'll use

**Option B: If you already have your own database:**

1. **Open your existing Notion database** (the one you want to turn into a website)

**For both options, continue with these steps:**

7. **Make sure it has the columns you want** (Name, Email, Phone, etc.)
8. **Optional**: If you have sensitive information, add "(Private)" to the column name
   - Example: "Email (Private)" will hide the actual email addresses
9. **Copy the database ID** from the URL:
   - Look at your Notion database URL
   - Copy the long string of letters and numbers after the last slash
   - Example: `https://notion.so/workspace/a1b2c3d4-e5f6-7890-...`
   - The ID is: `a1b2c3d4-e5f6-7890-...`

**Note**: If you don't see a "Duplicate" button on a shared link, ask the owner to share the database with you first.

### Step 2: Create a Notion Connection

1. **Go to**: https://www.notion.so/my-integrations
2. **Click**: "New integration"
3. **Fill out the form**:
   - Name: "My Website App" (or whatever you want)
   - Workspace: Select your workspace
4. **Click**: "Submit"
5. **Copy the token** (it starts with `secret_`)
6. **Share your database** with this connection:
   - Go back to your Notion database
   - Click "Share" in the top right
   - Click "Invite"
   - Search for "My Website App" (or whatever you named it)
   - Click "Invite"

### Step 3: Deploy Your Website

1. **Go to**: https://app.netlify.com
2. **Sign up** for a free account (if you don't have one)
3. **Click**: "New site from Git"
4. **Choose**: "GitHub" (you'll need to connect your GitHub account)
5. **Select**: This repository (the one you downloaded)
6. **Click**: "Deploy site"
7. **Wait** for it to finish (usually 2-3 minutes)

### Step 4: Connect Your Notion Database

1. **In Netlify**, go to your new website
2. **Click**: "Site settings"
3. **Click**: "Environment variables"
4. **Add these two variables**:
   - **Name**: `NOTION_API_KEY`  
     **Value**: `secret_your_token_here` (paste the token from Step 2)
   - **Name**: `NOTION_DATABASE_ID`  
     **Value**: `your_database_id_here` (paste the ID from Step 1)
5. **Click**: "Save"
6. **Go back** to your website
7. **Click**: "Trigger deploy" → "Deploy site"

### Step 5: Enable File Uploads (Optional)

If you want people to upload files:

1. **Wait** for the deployment to finish
2. **Go to**: Site settings → Functions
3. **Scroll down** to "Netlify Blobs"
4. **Click**: "Enable" (if it's not already enabled)
5. **Redeploy** your site

## You're Done! 🎉

Your website is now live! You can:

- **Share the URL** with anyone
- **Add new entries** through the website
- **Edit existing entries**
- **Search and filter** your data
- **Upload files** (if you enabled it)

## How It Works

- **Your Notion database** stores all the information
- **The website** reads from your Notion database
- **Changes on the website** automatically update your Notion database
- **Changes in Notion** automatically appear on the website

## Common Questions

**Q: Do I need to pay anything?**  
A: No! Both Notion and Netlify have free plans that work perfectly.

**Q: Can I change my database later?**  
A: Yes! Add new columns in Notion and they'll automatically appear on your website.

**Q: Is my data safe?**  
A: Yes! Your data stays in your Notion account. The website just reads and writes to it.

**Q: Can I customize how it looks?**  
A: The website automatically adapts to your database structure. You can change colors and logos if needed.

**Q: What if something goes wrong?**  
A: Check the troubleshooting section below, or contact support.

## Troubleshooting

### "Notion API key missing" Error

- Make sure you added the environment variables correctly
- Check that the token starts with `secret_`
- Redeploy your site after adding the variables

### "Database not found" Error

- Make sure you copied the correct database ID
- Check that you shared the database with your integration
- The database ID should be from the URL, not the page title

### File uploads not working

- Enable Netlify Blobs in your site settings
- Redeploy after enabling Blobs
- Check that the function is enabled

### Website looks broken

- Wait a few minutes for the deployment to complete
- Check that all environment variables are set
- Try redeploying the site

## What Happens Next

Once your website is running:

1. **Test it** by adding some entries
2. **Share the URL** with your team or clients
3. **Update your Notion database** and watch the website update automatically
4. **Enjoy** having a professional website without any coding!

## Need Help?

- **Check the logs** in Netlify to see what's happening
- **Test your Notion connection** by visiting the Notion API documentation
- **Make sure** your environment variables are set correctly
- **Try redeploying** if something seems wrong

---

**That's it!** You now have a professional website that automatically syncs with your Notion database. No coding required, no monthly fees, and it works on any device!
