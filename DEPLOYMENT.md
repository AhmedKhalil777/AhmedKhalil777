# 🚀 GitHub Pages Deployment Guide

This guide explains how to deploy your Angular portfolio to GitHub Pages using GitHub Actions.

## 📋 Prerequisites

- GitHub repository with your code
- Node.js and npm installed locally
- Git configured with your GitHub credentials

## 🔧 Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Configure Repository Settings

Make sure your repository has the following structure:
```
AhmedKhalil777/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   └── portfolio/
│       ├── package.json
│       ├── angular.json
│       └── ...
└── README.md
```

### 3. GitHub Actions Workflow

The workflow file (`.github/workflows/deploy.yml`) will automatically:
- ✅ Trigger on push to `main` or `master` branch
- ✅ Install Node.js and dependencies
- ✅ Build the Angular application
- ✅ Deploy to GitHub Pages

## 🚀 Deployment Methods

### Method 1: Automatic Deployment (Recommended)

Simply push your changes to the main branch:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The GitHub Action will automatically build and deploy your site.

### Method 2: Manual Deployment

#### Using npm scripts:

```bash
cd src/portfolio
npm run deploy
```

#### Using deployment scripts:

**Linux/Mac:**
```bash
cd src/portfolio
chmod +x deploy-gh-pages.sh
./deploy-gh-pages.sh
```

**Windows:**
```cmd
cd src/portfolio
deploy-gh-pages.bat
```

## 🔗 Accessing Your Site

After deployment, your portfolio will be available at:
- **GitHub Pages URL**: `https://ahmedkhalil777.github.io/AhmedKhalil777/`

## 🛠️ Configuration Options

### Environment Variables

You can customize the deployment by setting environment variables in your repository settings:

- `NODE_VERSION`: Node.js version (default: 18)
- `BASE_HREF`: Base href for the application (default: /AhmedKhalil777/)

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check that all dependencies are installed
   - Verify Angular CLI is up to date
   - Check for TypeScript errors

2. **Deployment Fails**
   - Ensure GitHub Pages is enabled in repository settings
   - Check that the workflow file is in the correct location
   - Verify the output directory path

3. **Assets Not Loading**
   - Check the `base-href` configuration
   - Ensure asset paths are correct
   - Verify the build output directory

### Debug Steps

1. **Check GitHub Actions Logs**:
   - Go to your repository → Actions tab
   - Click on the latest workflow run
   - Review the logs for errors

2. **Test Build Locally**:
   ```bash
   cd src/portfolio
   npm run build:gh-pages
   ```

3. **Verify Output Directory**:
   ```bash
   ls -la src/portfolio/dist/portfolio/
   ```

## 📊 Monitoring Deployment

### GitHub Actions Dashboard
- Go to your repository → **Actions** tab
- Monitor workflow runs and their status
- View detailed logs for each step

### GitHub Pages Settings
- Go to **Settings** → **Pages**
- Check deployment status
- View build logs

## 🔄 Continuous Deployment

The workflow is configured for continuous deployment:
- ✅ **Automatic triggers** on push to main branch
- ✅ **Build optimization** with caching
- ✅ **Error handling** with proper exit codes
- ✅ **Security** with GitHub token authentication

## 📝 Notes

- The deployment process typically takes 2-5 minutes
- GitHub Pages has a build limit of 10 minutes
- Custom domains may take up to 24 hours to propagate
- Always test locally before pushing to main branch

## 🆘 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your repository settings
3. Test the build process locally
4. Review the troubleshooting section above

---

**Happy Deploying! 🎉**
