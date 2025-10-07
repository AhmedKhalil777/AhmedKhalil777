#!/bin/bash

# Deploy Angular Portfolio to GitHub Pages
echo "🚀 Starting deployment to GitHub Pages..."

# Build the project for production
echo "📦 Building Angular application..."
ng build --configuration=production --base-href="/AhmedKhalil777/"

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    # Deploy to GitHub Pages using gh-pages
    echo "🌐 Deploying to GitHub Pages..."
    npx gh-pages -d dist/portfolio
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment completed successfully!"
        echo "🔗 Your portfolio is now live at: https://ahmedkhalil777.github.io/AhmedKhalil777/"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
