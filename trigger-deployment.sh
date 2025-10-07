#!/bin/bash

# Trigger GitHub Actions deployment
echo "🚀 Triggering GitHub Actions deployment..."

# Check current branch
echo "📍 Current branch:"
git branch --show-current

# Check if we're on main or master
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" != "main" && "$CURRENT_BRANCH" != "master" ]]; then
    echo "⚠️  Warning: You're not on main/master branch"
    echo "The workflow only triggers on main/master branches"
    echo "Current branch: $CURRENT_BRANCH"
    echo ""
    echo "To fix this:"
    echo "  git checkout main"
    echo "  git merge $CURRENT_BRANCH"
    echo "  git push origin main"
    exit 1
fi

# Make a small change to trigger the workflow
echo "📝 Making a small change to trigger deployment..."
echo "# Last deployment: $(date)" >> README.md

# Commit and push
echo "💾 Committing changes..."
git add README.md
git commit -m "Trigger deployment - $(date)"

echo "🚀 Pushing to trigger GitHub Actions..."
git push origin $CURRENT_BRANCH

echo "✅ Deployment triggered!"
echo "🔗 Check your repository's Actions tab to monitor progress"
echo "🌐 Your site will be available at: https://ahmedkhalil777.github.io/AhmedKhalil777/"
