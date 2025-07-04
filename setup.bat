@echo off
REM MakeCode NeoPixel Extension Setup Script for Windows
REM Run this script after restarting your machine to restore the development environment

echo 🚀 Setting up MakeCode NeoPixel Extension development environment...
echo.

REM Check if we're in the right directory
if not exist pxt.json (
    echo ❌ Error: pxt.json not found. Please run this script from the project root directory.
    pause
    exit /b 1
)

echo 📁 Current directory: %cd%
echo.

REM Step 1: Set MakeCode target
echo 🎯 Step 1: Setting MakeCode target to micro:bit...
pxt target microbit
if errorlevel 1 (
    echo ❌ Failed to set MakeCode target
    pause
    exit /b 1
)
echo ✅ MakeCode target set successfully
echo.

REM Step 2: Install dependencies
echo 📦 Step 2: Installing project dependencies...
pxt install
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✅ Dependencies installed successfully
echo.

REM Step 3: Test build
echo 🔨 Step 3: Testing build process...
pxt build
if errorlevel 1 (
    echo ❌ Build failed
    pause
    exit /b 1
)
echo ✅ Build completed successfully
echo.

REM Step 4: Check TypeScript types
echo 🔍 Step 4: Checking TypeScript configuration...
if exist types\makecode.d.ts (
    echo ✅ TypeScript definitions found
) else (
    echo ⚠️  Warning: TypeScript definitions not found
)

if exist tsconfig.json (
    echo ✅ TypeScript configuration found
) else (
    echo ⚠️  Warning: TypeScript configuration not found
)
echo.

echo 🎉 Setup completed successfully!
echo.
echo 📋 Available commands:
echo   pxt build    - Build the extension
echo   pxt serve    - Start development server
echo   pxt deploy   - Deploy to micro:bit device
echo.
echo 💡 Your development environment is ready!
pause
