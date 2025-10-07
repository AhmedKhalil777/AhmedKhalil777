#!/bin/bash

# Test build script for GitHub Pages deployment
echo "🧪 Testing GitHub Pages build process..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Test production build
echo "🔨 Testing production build..."
npm run build:gh-pages

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build test completed successfully!"
    echo "📁 Build output:"
    ls -la dist/portfolio/
    
    # Test local server (optional)
    echo "🌐 Starting local server to test..."
    echo "Visit: http://localhost:8080"
    echo "Press Ctrl+C to stop the server"
    
    # Use Python's built-in server if available
    if command -v python3 &> /dev/null; then
        cd dist/portfolio && python3 -m http.server 8080
    elif command -v python &> /dev/null; then
        cd dist/portfolio && python -m http.server 8080
    else
        echo "⚠️  Python not found. Install a local server to test the build."
    fi
else
    echo "❌ Build test failed!"
    exit 1
fi
