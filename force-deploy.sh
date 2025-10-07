#!/bin/bash

# Force trigger GitHub Actions deployment
echo "🚀 Force triggering GitHub Actions deployment..."

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check if we're on main or master
if [[ "$CURRENT_BRANCH" != "main" && "$CURRENT_BRANCH" != "master" ]]; then
    echo "⚠️  Warning: You're not on main/master branch"
    echo "The workflow only triggers on main/master branches"
    echo ""
    echo "To fix this:"
    echo "  git checkout main"
    echo "  git merge $CURRENT_BRANCH"
    echo "  git push origin main"
    exit 1
fi

# Check if workflow file exists
if [ ! -f ".github/workflows/deploy.yml" ]; then
    echo "❌ Workflow file not found at .github/workflows/deploy.yml"
    exit 1
fi

echo "✅ Workflow file found"

# Make a small change to trigger the workflow
echo "📝 Making a small change to trigger deployment..."
echo "# Deployment trigger - $(date)" >> README.md

# Commit and push
echo "💾 Committing changes..."
git add README.md
git commit -m "Trigger deployment - $(date)"

echo "🚀 Pushing to trigger GitHub Actions..."
git push origin $CURRENT_BRANCH

echo "✅ Deployment triggered!"
echo "🔗 Check your repository's Actions tab to monitor progress"
echo "🌐 Your site will be available at: https://ahmedkhalil777.github.io/AhmedKhalil777/"
echo ""
echo "📊 If the workflow still doesn't start:"
echo "1. Check Settings → Actions → General"
echo "2. Ensure 'Allow all actions' is enabled"
echo "3. Try manual trigger in Actions tab"
