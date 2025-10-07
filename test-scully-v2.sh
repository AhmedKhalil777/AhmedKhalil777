#!/bin/bash

# Test Scully v2.1.41 setup
echo "🧪 Testing Scully v2.1.41 setup..."

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
    echo ""
    echo "📋 Expected results:"
    echo "- Home: https://ahmedkhalil777.github.io/AhmedKhalil777/"
    echo "- Resume: https://ahmedkhalil777.github.io/AhmedKhalil777/resume/"
    echo "- Direct URL access works perfectly"
    echo "- Page refresh works correctly"
    echo "- No 404 errors for any routes"
else
    echo "❌ Scully build failed"
    echo "💡 Check Scully configuration in scully.config.ts"
    echo "💡 Make sure all dependencies are installed correctly"
fi
