#!/bin/bash

# Check deployment status and configuration
echo "🔍 Checking deployment configuration..."

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
echo "🔧 To trigger deployment:"
echo "1. Make sure you're on main/master branch"
echo "2. Run: ./force-deploy.sh"
echo "3. Or manually:"
echo "   echo '# Trigger' >> README.md"
echo "   git add README.md"
echo "   git commit -m 'Trigger deployment'"
echo "   git push origin main"

echo ""
echo "📊 Check your repository's Actions tab after pushing"
echo "🌐 Your site will be at: https://ahmedkhalil777.github.io/AhmedKhalil777/"
