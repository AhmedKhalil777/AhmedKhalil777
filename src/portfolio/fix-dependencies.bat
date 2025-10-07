@echo off
echo 🔧 Fixing npm dependencies...

echo 🧹 Cleaning existing dependencies...
rmdir /s /q node_modules
del package-lock.json

echo 📦 Installing dependencies...
npm install

echo ✅ Verifying installation...
npm list --depth=0

echo 🎉 Dependencies fixed! You can now run:
echo   npm run build:gh-pages
echo   npm run deploy
