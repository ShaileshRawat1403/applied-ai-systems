#!/bin/bash

# Move to the script's directory
cd "$(dirname "$0")"

clear
echo "================================================================="
echo "        Applied AI Systems Course Portal Launcher"
echo "================================================================="
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js was not found on your system."
    echo "This interactive portal requires Node.js to run locally."
    echo ""
    echo "Please download and install Node.js from the official site:"
    echo "👉 https://nodejs.org/"
    echo ""
    echo "After installing, double-click this start.command file again."
    echo "================================================================="
    read -p "Press Enter to exit..."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "ERROR: npm was not found, which should be installed with Node.js."
    echo "Please reinstall Node.js."
    read -p "Press Enter to exit..."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Preparing workspace dependencies. This may take a minute..."
    echo "Running 'npm install'..."
    npm install
    echo "Workspace initialized successfully!"
    echo ""
fi

echo "Starting the interactive course dashboard..."
echo "Please wait a moment..."
echo ""

# Start the dev server
npm run dev
