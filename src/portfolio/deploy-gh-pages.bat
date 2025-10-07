@echo off
echo 🚀 Starting deployment to GitHub Pages...

echo 📦 Building Angular application...
ng build --configuration=production --base-href="/AhmedKhalil777/"

if %errorlevel% equ 0 (
    echo ✅ Build completed successfully!
    
    echo 🌐 Deploying to GitHub Pages...
    npx gh-pages@3.2.3 -d dist/portfolio
    
    if %errorlevel% equ 0 (
        echo 🎉 Deployment completed successfully!
        echo 🔗 Your portfolio is now live at: https://ahmedkhalil777.github.io/AhmedKhalil777/
    ) else (
        echo ❌ Deployment failed!
        exit /b 1
    )
) else (
    echo ❌ Build failed!
    exit /b 1
)
