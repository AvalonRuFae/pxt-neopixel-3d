# Setup Instructions

This document explains how to set up your development environment after restarting your machine.

## Quick Setup (Recommended)

After restarting your machine, simply run the setup script:

### On macOS/Linux:
```bash
./setup.sh
```

### On Windows:
```cmd
setup.bat
```

The script will automatically:
1. Set the MakeCode target to micro:bit
2. Install all project dependencies
3. Test the build process
4. Verify TypeScript configuration

## Manual Setup (Alternative)

If you prefer to run commands manually:

```bash
# 1. Navigate to project directory
cd /Users/terakomari/Documents/GitHub/pxt-neopixel-3d

# 2. Set MakeCode target
pxt target microbit

# 3. Install dependencies
pxt install

# 4. Test build
pxt build
```

## Available Commands

After setup, you can use these commands:

- `pxt build` - Build the extension
- `pxt serve` - Start development server for testing
- `pxt deploy` - Deploy to connected micro:bit device

## Troubleshooting

### Script Permission Error (macOS/Linux)
If you get a permission error, make the script executable:
```bash
chmod +x setup.sh
```

### pxt Command Not Found
If `pxt` command is not found, you may need to install it globally:
```bash
npm install -g pxt
```

### Build Errors
If you encounter build errors:
1. Make sure you're in the correct directory (contains `pxt.json`)
2. Try running the setup script again
3. Check that all files are present and unchanged

## Files Created by Setup

The setup process creates/uses these important files:
- `node_modules/` - MakeCode toolchain and dependencies
- `pxt_modules/` - Project-specific dependencies
- `built/` - Compiled output (created during build)
- `types/makecode.d.ts` - TypeScript definitions (already exists)
- `tsconfig.json` - TypeScript configuration (already exists)
