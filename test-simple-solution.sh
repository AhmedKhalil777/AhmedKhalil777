#!/bin/bash

# Test simple Angular deployment solution
echo "🧪 Testing simple Angular deployment solution..."

cd src/portfolio

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed"
    exit 1
fi

echo "🔨 Testing Angular build with hash routing..."
npm run build:gh-pages

if [ $? -eq 0 ]; then
    echo "✅ Angular build successful!"
    echo "📁 Build output:"
    ls -la dist/portfolio/
    echo ""
    echo "🌐 Test locally:"
    echo "cd dist/portfolio && python3 -m http.server 8080"
    echo "Then visit: http://localhost:8080"
    echo ""
    echo "🚀 Deploy to GitHub Pages:"
    echo "npm run deploy"
    echo ""
    echo "🔗 Your portfolio will be at:"
    echo "https://ahmedkhalil777.github.io/AhmedKhalil777/"
    echo ""
    echo "📋 Expected URL format:"
    echo "- Home: /#/ or just /"
    echo "- Resume: /#/resume"
    echo "- Any other routes: /#/route-name"
else
    echo "❌ Angular build failed"
    echo "💡 Check for TypeScript errors or missing dependencies"
fi
