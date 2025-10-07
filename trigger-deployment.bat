@echo off
echo 🚀 Triggering GitHub Actions deployment...

echo 📍 Current branch:
git branch --show-current

echo 📝 Making a small change to trigger deployment...
echo # Last deployment: %date% %time% >> README.md

echo 💾 Committing changes...
git add README.md
git commit -m "Trigger deployment - %date%"

echo 🚀 Pushing to trigger GitHub Actions...
git push origin main

echo ✅ Deployment triggered!
echo 🔗 Check your repository's Actions tab to monitor progress
echo 🌐 Your site will be available at: https://ahmedkhalil777.github.io/AhmedKhalil777/
