@echo off
cd /d "%~dp0"

echo Staging all changes...
git add .

echo.
echo Committing...
git commit -m "Update portfolio: README, favicon, and improvements"

echo.
echo Pushing to master...
git push -u origin master

echo.
echo Done.
pause
