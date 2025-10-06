@echo off
REM Ahmed Khalil Portfolio Deployment Script for Windows
REM This script builds and deploys the portfolio to GitHub Pages

echo 🚀 Starting deployment process...

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Please run this script from the portfolio directory.
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Build the project for production
echo 🔨 Building project for production...
npm run build:gh-pages

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Build completed successfully!
    
    REM Deploy to GitHub Pages
    echo 🚀 Deploying to GitHub Pages...
    npx angular-cli-ghpages --dir=dist/ahmed-khalil-portfolio
    
    if %errorlevel% equ 0 (
        echo 🎉 Deployment completed successfully!
        echo 🌐 Your portfolio is now live at: https://ahmedkhalil777.github.io/AhmedKhalil777/
    ) else (
        echo ❌ Deployment failed. Please check the error messages above.
        pause
        exit /b 1
    )
) else (
    echo ❌ Build failed. Please check the error messages above.
    pause
    exit /b 1
)

pause

