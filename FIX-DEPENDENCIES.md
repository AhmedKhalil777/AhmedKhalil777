# 🔧 Fixing npm Dependencies

## Problem
The `npm ci` command is failing because the package-lock.json file is out of sync with package.json after adding new dependencies.

## Solution

### Method 1: Quick Fix (Recommended)

Run the dependency fix script:

**Linux/Mac:**
```bash
cd src/portfolio
chmod +x fix-dependencies.sh
./fix-dependencies.sh
```

**Windows:**
```cmd
cd src/portfolio
fix-dependencies.bat
```

### Method 2: Manual Fix

1. **Remove existing lock file and node_modules:**
   ```bash
   cd src/portfolio
   rm -rf node_modules/
   rm -f package-lock.json
   ```

2. **Install dependencies fresh:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   npm list --depth=0
   ```

### Method 3: Update GitHub Actions

The GitHub Actions workflow has been updated to use `npm install` instead of `npm ci` to handle dependency resolution automatically.

## What Was Fixed

1. **Downgraded gh-pages** from `^6.1.1` to `^3.2.3` for compatibility
2. **Updated GitHub Actions** to use `npm install` instead of `npm ci`
3. **Updated deployment scripts** to use specific gh-pages version
4. **Created fix scripts** for easy dependency resolution

## Testing the Fix

After running the fix, test the build:

```bash
cd src/portfolio
npm run build:gh-pages
```

If successful, you can deploy:

```bash
npm run deploy
```

## GitHub Actions

The GitHub Actions workflow will now work correctly with the updated configuration. The workflow:
- Uses `npm install` instead of `npm ci`
- Handles dependency resolution automatically
- Deploys to GitHub Pages successfully

## Troubleshooting

If you still encounter issues:

1. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

2. **Use specific Node.js version:**
   ```bash
   nvm use 18
   npm install
   ```

3. **Check for conflicting global packages:**
   ```bash
   npm list -g --depth=0
   ```

## Next Steps

1. Run the fix script
2. Test the build locally
3. Push your changes to trigger GitHub Actions
4. Monitor the deployment in the Actions tab

Your portfolio will be available at: **https://ahmedkhalil777.github.io/AhmedKhalil777/**

The deployment should now work without dependency conflicts! 🎉
