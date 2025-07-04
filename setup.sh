#!/bin/bash

# MakeCode NeoPixel Extension Setup Script
# Run this script after restarting your machine to restore the development environment

set -e  # Exit on any error

echo "🚀 Setting up MakeCode NeoPixel Extension development environment..."
echo ""

# Check if we're in the right directory
if [ ! -f "pxt.json" ]; then
    echo "❌ Error: pxt.json not found. Please run this script from the project root directory."
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo ""

# Step 1: Set MakeCode target
echo "🎯 Step 1: Setting MakeCode target to micro:bit..."
pxt target microbit
if [ $? -eq 0 ]; then
    echo "✅ MakeCode target set successfully"
else
    echo "❌ Failed to set MakeCode target"
    exit 1
fi
echo ""

# Step 2: Install dependencies
echo "📦 Step 2: Installing project dependencies..."
pxt install
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo ""

# Step 3: Test build
echo "🔨 Step 3: Testing build process..."
pxt build
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully"
else
    echo "❌ Build failed"
    exit 1
fi
echo ""

# Step 4: Check TypeScript types
echo "🔍 Step 4: Checking TypeScript configuration..."
if [ -f "types/makecode.d.ts" ]; then
    echo "✅ TypeScript definitions found"
else
    echo "⚠️  Warning: TypeScript definitions not found"
fi

if [ -f "tsconfig.json" ]; then
    echo "✅ TypeScript configuration found"
else
    echo "⚠️  Warning: TypeScript configuration not found"
fi
echo ""

echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Available commands:"
echo "  pxt build    - Build the extension"
echo "  pxt serve    - Start development server"
echo "  pxt deploy   - Deploy to micro:bit device"
echo ""
echo "💡 Your development environment is ready!"
