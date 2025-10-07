#!/bin/bash

# Check deployment status
echo "🔍 Checking deployment status..."

echo "📍 Current branch:"
git branch --show-current

echo ""
echo "📁 Workflow file exists:"
if [ -f ".github/workflows/deploy.yml" ]; then
    echo "✅ .github/workflows/deploy.yml found"
else
    echo "❌ .github/workflows/deploy.yml not found"
fi

echo ""
echo "📦 Portfolio directory exists:"
if [ -d "src/portfolio" ]; then
    echo "✅ src/portfolio/ found"
else
    echo "❌ src/portfolio/ not found"
fi

echo ""
echo "📋 Recent commits:"
git log --oneline -3

echo ""
echo "🚀 To trigger deployment:"
echo "1. Go to your repository on GitHub"
echo "2. Check Actions tab for workflow status"
echo "3. If no workflow, check Settings → Actions → General"
echo "4. Try manual trigger:"
echo "   echo '# Trigger' >> README.md"
echo "   git add README.md"
echo "   git commit -m 'Trigger deployment'"
echo "   git push origin main"
echo ""
echo "🔧 If workflow fails:"
echo "1. Check error logs in Actions tab"
echo "2. Verify GitHub Pages settings"
echo "3. Try manual deployment:"
echo "   cd src/portfolio"
echo "   npm install"
echo "   npm run build:gh-pages"
echo "   npx gh-pages@3.2.3 -d dist/portfolio"
echo ""
echo "🌐 Your site should be at: https://ahmedkhalil777.github.io/AhmedKhalil777/"