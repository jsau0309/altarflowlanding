# Sanity Studio Setup Guide

This guide will help you set up Sanity Studio for the AltarFlow blog.

## Prerequisites

1. A Sanity account (free at https://www.sanity.io)
2. Bun installed on your system

## Step 1: Create a Sanity Project

1. Go to https://www.sanity.io/manage
2. Click "Create project"
3. Choose a name for your project (e.g., "AltarFlow Blog")
4. Note down your **Project ID**
5. Create a dataset called `production`

## Step 2: Configure Environment Variables

### For the Studio (`apps/studio`)

1. Copy the example env file:
   ```bash
   cp apps/studio/.env.example apps/studio/.env.local
   ```

2. Edit `apps/studio/.env.local` and add your project details:
   ```
   SANITY_STUDIO_PROJECT_ID=your-project-id-here
   SANITY_STUDIO_DATASET=production
   ```

### For the Web App (`apps/web`)

1. Copy the example env file:
   ```bash
   cp apps/web/.env.example apps/web/.env.local
   ```

2. Edit `apps/web/.env.local` and add your project details:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

## Step 3: Configure CORS in Sanity

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to **API** → **CORS Origins**
4. Add the following origins:
   - `http://localhost:3000` (for your web app)
   - `http://localhost:3333` (for Sanity Studio)
   - Your production domains when ready:
     - `https://altarflow.com`
     - `https://studio.altarflow.com`

## Step 4: Deploy Sanity Studio

### Option A: Deploy to Sanity's hosting (recommended for studio.altarflow.com)

1. Run the deploy command:
   ```bash
   cd apps/studio
   bun run deploy
   ```

2. Follow the prompts to deploy
3. Your studio will be available at: `https://your-project-name.sanity.studio`

### Option B: Set up custom domain (studio.altarflow.com)

1. After deploying with Option A, go to your Sanity project settings
2. Go to **Studio** → **Custom domain**
3. Add `studio.altarflow.com`
4. Follow the DNS configuration instructions
5. Add a CNAME record pointing to Sanity's hosting

## Step 5: Create Your First Content

1. Start the studio locally:
   ```bash
   bun run dev:studio
   ```

2. Open http://localhost:3333 in your browser
3. Log in with your Sanity credentials
4. Create content:
   - **Author**: Add an author profile
   - **Category**: Create blog categories (e.g., "Church Management", "Technology", "Best Practices")
   - **Blog Post**: Create your first blog post

## Running the Applications

### Run both web and studio:
```bash
bun run dev
```

### Run only the web app:
```bash
bun run dev:web
```

### Run only the studio:
```bash
bun run dev:studio
```

## Blog Pages

Once you have content in Sanity:

- Blog listing: http://localhost:3000/blog
- Individual posts: http://localhost:3000/blog/[slug]

## Deployment

### Web App (Vercel/Your hosting)

Make sure to add these environment variables to your hosting platform:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

### Studio (studio.altarflow.com)

Use the Sanity CLI to deploy:
```bash
cd apps/studio
bun run deploy
```

Then configure your custom domain in the Sanity dashboard.

## Troubleshooting

### "Project ID not found" error
- Make sure your `.env.local` files are created and contain the correct project ID
- Restart your dev server after adding environment variables

### CORS errors
- Verify your origins are added in the Sanity dashboard
- Make sure to include the protocol (http:// or https://)

### Studio won't start
- Run `bun install` from the root directory
- Check that `apps/studio/package.json` exists

## Next Steps

1. Customize the blog schema in `apps/studio/schemas/` to match your needs
2. Style the blog pages in `apps/web/app/blog/` to match your design
3. Add more content types (case studies, resources, etc.)
4. Set up webhooks for automatic revalidation when content changes
