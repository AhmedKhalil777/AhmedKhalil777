# GitHub Pages Deployment Guide

This portfolio is configured to deploy to GitHub Pages without Scully. The deployment uses standard Angular build with GitHub Actions workflow.

## 🚀 Deployment Methods

### Method 1: Automatic Deployment (Recommended)

The GitHub Actions workflow automatically deploys your portfolio when you push to the main/master branch.

**How it works:**
1. Push your changes to main/master branch
2. GitHub Actions automatically triggers the workflow
3. The workflow builds your Angular app with `npm run build:gh-pages`
4. Built files are deployed to GitHub Pages
5. Your portfolio is live at: https://ahmedkhalil777.github.io/AhmedKhalil777/

**Workflow file:** `.github/workflows/deploy.yml`

### Method 2: Manual Deployment Scripts

You can deploy manually using the provided scripts:

#### Windows (PowerShell/Command Prompt):
```bash
cd src/portfolio
.\deploy.bat
```
or
```bash
cd src/portfolio
.\deploy-gh-pages.bat
```

#### Linux/Mac (Bash):
```bash
cd src/portfolio
./deploy.sh
```
or
```bash
cd src/portfolio
./deploy-gh-pages.sh
```

#### Using npm:
```bash
cd src/portfolio
npm run deploy
```

## 📦 Build Scripts

The following npm scripts are available in `package.json`:

| Script | Command | Description |
|--------|---------|-------------|
| `build` | `ng build` | Standard build |
| `build:prod` | `ng build --configuration production` | Production build |
| `build:gh-pages` | `ng build --configuration production --base-href /AhmedKhalil777/` | GitHub Pages build |
| `deploy` | `npm run build:gh-pages && npx gh-pages@3.2.3 -d dist/portfolio` | Build and deploy |
| `deploy:preview` | `npm run build:gh-pages && npx gh-pages@3.2.3 -d dist/portfolio --dotfiles` | Deploy with dotfiles |

## 🔧 Configuration

### GitHub Pages Settings

1. Go to your repository settings
2. Navigate to "Pages" section
3. Source: Deploy from a branch
4. Branch: `gh-pages` (automatically created by deployment)
5. Folder: `/ (root)`

### Base Href

The base href is set to `/AhmedKhalil777/` in the build configuration. This must match your GitHub repository name.

**If you fork this repository**, update the base href in:
- `package.json` (line 12-14): Change `/AhmedKhalil777/` to `/your-repo-name/`
- `404.html` (line 6, 21, 31): Change `/AhmedKhalil777/` to `/your-repo-name/`
- `deploy.sh` and `deploy.bat` scripts
- `.github/workflows/deploy.yml`

## 📋 Deployment Checklist

Before deploying, ensure:

- [ ] All changes are committed to Git
- [ ] Base href is correctly set in all files
- [ ] `node_modules` are installed (`npm install`)
- [ ] Build completes successfully (`npm run build:gh-pages`)
- [ ] GitHub repository settings allow GitHub Pages
- [ ] GitHub Actions have write permissions (Settings → Actions → General → Workflow permissions)

## 🔍 Troubleshooting

### Build Fails

**Issue:** Build fails with errors

**Solutions:**
1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
2. Check for TypeScript or linting errors
3. Ensure Angular version is compatible (v18)

### Deployment Succeeds but Site Shows 404

**Issue:** GitHub Pages shows 404 error

**Solutions:**
1. Check that base href matches repository name
2. Verify GitHub Pages is enabled in repository settings
3. Wait a few minutes for DNS propagation
4. Check that `gh-pages` branch exists and has content

### GitHub Actions Workflow Fails

**Issue:** Workflow fails with permission errors

**Solutions:**
1. Go to Settings → Actions → General
2. Under "Workflow permissions", select "Read and write permissions"
3. Save and re-run the workflow

### Assets Not Loading

**Issue:** Images or other assets return 404

**Solutions:**
1. Ensure assets are in `src/assets/` directory
2. Reference assets with relative paths: `assets/images/...`
3. Don't use absolute paths starting with `/`

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in `src/` with your domain:
   ```
   www.yourdomain.com
   ```

2. Add CNAME file to assets in `angular.json`:
   ```json
   "assets": [
     "src/favicon.ico",
     "src/assets",
     "src/CNAME"
   ]
   ```

3. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `ahmedkhalil777.github.io`
   - Or add A records pointing to GitHub Pages IPs

4. Update base href to `/` in build scripts

## 📊 Monitoring Deployments

### View Deployment Status

1. Go to the "Actions" tab in your GitHub repository
2. View the latest workflow run
3. Check logs for any errors or warnings

### Verify Deployment

After deployment, verify:
- [ ] Site is accessible at the GitHub Pages URL
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Images and assets load
- [ ] Responsive design works on mobile
- [ ] Dark mode toggle works (if implemented)

## 🔄 Rollback Deployment

If you need to rollback to a previous version:

1. Find the previous successful commit hash
2. Checkout that commit:
   ```bash
   git checkout <commit-hash>
   ```
3. Deploy manually:
   ```bash
   npm run deploy
   ```
4. Return to main branch:
   ```bash
   git checkout main
   ```

## 🚀 Performance Tips

### Optimize Build Size

1. **Lazy Loading:** Already implemented for route components
2. **Tree Shaking:** Automatically enabled in production build
3. **Compression:** GitHub Pages automatically serves with gzip

### Image Optimization

1. Compress images before adding to `src/assets/images/`
2. Use WebP format for better compression
3. Implement lazy loading for images:
   ```html
   <img loading="lazy" src="..." alt="...">
   ```

### Bundle Analysis

Analyze bundle size:
```bash
npm run build:gh-pages -- --stats-json
npx webpack-bundle-analyzer dist/portfolio/stats.json
```

## 📝 Deployment History

The portfolio is deployed using GitHub Actions workflow that:
1. ✅ Builds Angular application for production
2. ✅ Sets correct base href for GitHub Pages
3. ✅ Copies 404.html for SPA routing support
4. ✅ Uploads build artifacts
5. ✅ Deploys to GitHub Pages

**Previous Setup:** Scully (static site generator) - Removed ✅
**Current Setup:** Standard Angular build with GitHub Pages - Active ✅

## 🆘 Support

If you encounter issues:

1. Check GitHub Actions logs for detailed error messages
2. Verify all configuration files match your repository name
3. Ensure GitHub Pages is enabled in repository settings
4. Check that workflow has proper permissions

---

**Live URL:** https://ahmedkhalil777.github.io/AhmedKhalil777/

**Last Updated:** October 8, 2025

