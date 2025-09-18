
### Creating a Netlify Account

- Search for "Netlify" in your web browser
- Click on the first link that appears
- Click on "Sign up" button in top right corner
- Choose "Sign in with Google" (or other options)
- Select your Gmail account and click "Continue"
- Fill in your first name and last name
- Select "Personal" for plans
- Choose "Web app" for project type
- Select your role (e.g., "Senior web developer")
- Give a name to your team (e.g., "stackseekers")
- Click "Continue" to proceed

### Deploying Your Application

- Choose "Deploy using GitHub" (or skip to dashboard)
- Click "Authorize" to grant GitHub access
- Choose repository access (recommend "All repositories")
- Click "Install" to complete GitHub integration
- Select the repository you want to deploy (e.g., "notion-stack")
- Click "Deploy [repo name] to Netlify"

### Configuration and Deployment Process

- Netlify reads `netlify.toml` for configuration
- Monitor deployment progress in deployment logs
- Navigate to project configuration section
- View your deployed link (e.g., `something.netlify.app`)
- Click on the link to verify your app is running
- Click "Add a variable" followed by "Import from .env file"

### Setting Up Environment Variables

- Set `SMTP_user` to your Gmail ID
- Set `SMTP_pass` to your 16-character SMTP password
- Set `NOTION_API_KEY` to your Notion API key
- Set `NOTION_DATABASE_ID` to your Notion database ID
- Keep all values in the env file text box
- Scroll down and click "Import variables"
- Verify all four variables are listed
- Edit individually if needed by expanding and clicking edit

### Final Configuration and Testing

- Test your app by clicking "Retry loading issue types"
- Go to logs section and then functions
- Click "Functions settings" then "Configure"
- Ensure build command, publish directory, and function directory are set
- Click "Save" to apply settings
- Return to logs and functions to see all functions listed
- First function is typically email scheduler (runs every 2 minutes)
- View scheduler logs if needed
- Go to deploys section for manual deploy if required
- Return to project configuration for project management
- View thumbnail of deployed application
- Click team name logo then "Domains" for custom domain setup
