#!/bin/bash

# Fix npm dependencies and regenerate lock file
echo "🔧 Fixing npm dependencies..."

# Remove existing lock file and node_modules
echo "🧹 Cleaning existing dependencies..."
rm -rf node_modules/
rm -f package-lock.json

# Install dependencies fresh
echo "📦 Installing dependencies..."
npm install

# Verify installation
echo "✅ Verifying installation..."
npm list --depth=0

echo "🎉 Dependencies fixed! You can now run:"
echo "  npm run build:gh-pages"
echo "  npm run deploy"
