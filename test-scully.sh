#!/bin/bash

# Test Scully setup
echo "🧪 Testing Scully setup..."

cd src/portfolio

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed"
    exit 1
fi

echo "🔨 Testing Angular build..."
npm run build -- --configuration=production --base-href="/AhmedKhalil777/"

if [ $? -ne 0 ]; then
    echo "❌ Angular build failed"
    exit 1
fi

echo "🚀 Testing Scully build..."
npm run build:scully

if [ $? -eq 0 ]; then
    echo "✅ Scully build successful!"
    echo "📁 Generated files:"
    ls -la dist/static/
    echo ""
    echo "🌐 Test locally:"
    echo "npm run scully:serve"
    echo ""
    echo "🚀 Deploy to GitHub Pages:"
    echo "npm run deploy"
    echo ""
    echo "🔗 Your portfolio will be at:"
    echo "https://ahmedkhalil777.github.io/AhmedKhalil777/"
else
    echo "❌ Scully build failed"
    echo "💡 Check Scully configuration in scully.config.ts"
fi
