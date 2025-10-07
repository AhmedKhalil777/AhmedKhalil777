# 🔧 GitHub Pages Setup Guide

## Fix for Permission Error

The error you encountered is because the GitHub Actions bot doesn't have permission to push to the repository. I've updated the workflow to use the official GitHub Pages deployment action that handles permissions automatically.

## Required Setup Steps

### 1. Enable GitHub Pages Environment

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. Save the settings

### 2. Create GitHub Pages Environment

1. Go to **Settings** → **Environments**
2. Click **"New environment"**
3. Name it: `github-pages`
4. Click **"Configure environment"**
5. Under **Environment protection rules**, you can leave it empty for now
6. Click **"Save protection rules"**

### 3. Verify Repository Settings

Go to **Settings** → **Actions** → **General**:

- ✅ **Actions permissions**: "Allow all actions and reusable workflows"
- ✅ **Workflow permissions**: "Read and write permissions"
- ✅ **Allow GitHub Actions to create and approve pull requests**: Checked

## What Changed in the Workflow

### ✅ **Updated to Official GitHub Pages Actions**
- **`actions/configure-pages@v4`** - Sets up GitHub Pages
- **`actions/upload-pages-artifact@v3`** - Uploads build artifacts
- **`actions/deploy-pages@v4`** - Deploys to GitHub Pages

### ✅ **Separated Build and Deploy Jobs**
- **Build job**: Compiles your Angular app
- **Deploy job**: Handles the actual deployment with proper permissions

### ✅ **Added Concurrency Control**
- Prevents multiple deployments from running simultaneously
- Cancels previous deployments when new ones start

## Test the Fix

### 1. Push the Updated Workflow
```bash
git add .github/workflows/deploy.yml
git commit -m "Fix GitHub Pages deployment permissions"
git push origin main
```

### 2. Monitor the Deployment
1. Go to your repository → **Actions** tab
2. Look for the "Deploy to GitHub Pages" workflow
3. Click on it to see the progress
4. Check both "build" and "deploy" jobs

### 3. Check GitHub Pages Settings
After successful deployment:
1. Go to **Settings** → **Pages**
2. You should see "Your site is live at https://ahmedkhalil777.github.io/AhmedKhalil777/"

## Troubleshooting

### If Deployment Still Fails

1. **Check Environment**: Make sure the `github-pages` environment exists
2. **Check Permissions**: Verify repository permissions are set correctly
3. **Check Actions Logs**: Look for specific error messages in the Actions tab

### Common Issues

**"Environment not found"**
- Create the `github-pages` environment in Settings → Environments

**"Permission denied"**
- Check that GitHub Pages is enabled in Settings → Pages
- Verify Actions permissions in Settings → Actions → General

**"Build failed"**
- Test the build locally first:
  ```bash
  cd src/portfolio
  npm install
  npm run build:gh-pages
  ```

## Manual Deployment (Alternative)

If the GitHub Actions still don't work, you can deploy manually:

```bash
cd src/portfolio
npm install
npm run build:gh-pages
npx gh-pages@3.2.3 -d dist/portfolio
```

This will deploy directly to the `gh-pages` branch.

## Success Indicators

✅ **Workflow runs successfully** in Actions tab
✅ **Both build and deploy jobs complete** without errors
✅ **GitHub Pages shows "Your site is live"** in Settings → Pages
✅ **Your portfolio loads** at https://ahmedkhalil777.github.io/AhmedKhalil777/

---

**The updated workflow should now work without permission errors!** 🎉
