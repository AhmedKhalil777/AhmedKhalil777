#!/bin/bash

# Manual deployment to GitHub Pages
echo "🚀 Manual deployment to GitHub Pages..."

cd src/portfolio

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed"
    exit 1
fi

echo "🔨 Building Angular application..."
npm run build:gh-pages

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "🌐 Deploying to GitHub Pages..."
npx gh-pages@3.2.3 -d dist/portfolio

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🔗 Your portfolio is now live at:"
    echo "   https://ahmedkhalil777.github.io/AhmedKhalil777/"
    echo ""
    echo "📊 Check your repository:"
    echo "1. Go to your repository on GitHub"
    echo "2. Check if 'gh-pages' branch was created"
    echo "3. Go to Settings → Pages"
    echo "4. Set Source to 'Deploy from a branch'"
    echo "5. Set Branch to 'gh-pages' and '/ (root)'"
    echo "6. Save settings"
else
    echo "❌ Deployment failed"
    echo "💡 Make sure you have:"
    echo "   - Git configured with your credentials"
    echo "   - Repository permissions to push"
    echo "   - GitHub Pages enabled in repository settings"
fi
