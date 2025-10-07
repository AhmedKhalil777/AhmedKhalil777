# 🔍 GitHub Actions Deployment Troubleshooting

## Why Deployment Didn't Start

Here are the most common reasons and solutions:

### 1. Check GitHub Pages Settings

**Go to your repository → Settings → Pages**

Make sure:
- ✅ **Source** is set to **"GitHub Actions"** (not "Deploy from a branch")
- ✅ **Branch** is set to **"gh-pages"** (if using branch deployment)

### 2. Check Repository Permissions

**Go to your repository → Settings → Actions → General**

Make sure:
- ✅ **Actions permissions** is set to **"Allow all actions and reusable workflows"**
- ✅ **Workflow permissions** is set to **"Read and write permissions"**

### 3. Check Branch Name

The workflow triggers on `main` or `master` branches. Check your current branch:

```bash
git branch
```

If you're on a different branch, either:
- **Switch to main**: `git checkout main`
- **Or update the workflow** to trigger on your branch

### 4. Check Workflow File Location

Make sure the workflow file is in the correct location:
```
.github/workflows/deploy.yml
```

### 5. Manual Trigger

To manually trigger the workflow:

1. Go to your repository → **Actions** tab
2. Click on **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button
4. Select the branch and click **"Run workflow"**

### 6. Check Recent Commits

The workflow only triggers on **push** to main/master. Make sure you've pushed recent changes:

```bash
git add .
git commit -m "Trigger deployment"
git push origin main
```

### 7. Verify Workflow Syntax

Check if there are any YAML syntax errors:

1. Go to **Actions** tab
2. Look for any red X marks
3. Click on failed workflows to see error details

### 8. Check Dependencies

If the workflow starts but fails, run locally first:

```bash
cd src/portfolio
npm install
npm run build:gh-pages
```

## Quick Fixes

### Fix 1: Enable GitHub Pages
```bash
# Go to repository settings and enable GitHub Pages
# Settings → Pages → Source: GitHub Actions
```

### Fix 2: Update Permissions
```bash
# Repository → Settings → Actions → General
# Set "Allow all actions" and "Read and write permissions"
```

### Fix 3: Manual Trigger
```bash
# Push a small change to trigger the workflow
echo "# Trigger deployment" >> README.md
git add README.md
git commit -m "Trigger deployment"
git push origin main
```

## Common Error Messages

### "Workflow not found"
- Check if `.github/workflows/deploy.yml` exists
- Verify the file is committed and pushed

### "Permission denied"
- Check repository permissions in Settings → Actions
- Ensure GitHub Pages is enabled

### "Build failed"
- Run `npm install` and `npm run build:gh-pages` locally first
- Check for TypeScript or dependency errors

### "No such file or directory"
- Verify the `src/portfolio/` directory exists
- Check the `publish_dir` path in the workflow

## Still Not Working?

1. **Check the Actions tab** for any error messages
2. **Run the build locally** to catch errors early
3. **Verify all file paths** are correct
4. **Check GitHub Pages settings** are properly configured

## Test Deployment Locally

Before pushing, test the build:

```bash
cd src/portfolio
npm install
npm run build:gh-pages
ls -la dist/portfolio/
```

If this works, the GitHub Action should work too!

---

**Need more help?** Check the GitHub Actions logs in your repository's Actions tab for specific error messages.
