@echo off
echo ========================================
echo    BESTFLIX DEPLOYMENT SCRIPT
echo ========================================
echo.
echo This script will prepare your app for deployment
echo.
echo Step 1: Building production version...
call npm run build
echo.
echo Step 2: Build complete! 
echo.
echo Step 3: Your dist folder is ready for upload
echo.
echo NEXT STEPS:
echo 1. Go to https://vercel.com
echo 2. Sign up/Login (30 seconds)
echo 3. Click "Add New..." → "Project"
echo 4. Upload your entire Bestflix folder
echo 5. Click "Deploy"
echo.
echo Total time: ~5 minutes
echo.
pause
