@echo off
echo 🔧 Fixing npm dependencies locally...

cd src/portfolio

echo 🧹 Cleaning npm cache...
npm cache clean --force

echo 🗑️  Removing existing dependencies...
rmdir /s /q node_modules
del package-lock.json

echo 📦 Installing dependencies fresh...
npm install

echo 🔨 Testing build...
npm run build:gh-pages

if %errorlevel% equ 0 (
    echo ✅ Build successful! Dependencies are fixed.
    echo 🚀 You can now push your changes to trigger GitHub Actions
    echo.
    echo Next steps:
    echo 1. git add .
    echo 2. git commit -m "Fix dependencies"
    echo 3. git push origin main
    echo.
    echo 🔗 Your portfolio will be available at:
    echo    https://ahmedkhalil777.github.io/AhmedKhalil777/
) else (
    echo ❌ Build failed. Check for errors above.
    echo 💡 Common issues:
    echo    - TypeScript errors in your code
    echo    - Missing assets or files
    echo    - Angular CLI configuration issues
)
