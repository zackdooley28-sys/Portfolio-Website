@echo off
cd /d "%~dp0"
set HTTPS_URL=https://github.com/zackdooley28-sys/Personal-Portfolio-Site.git

if not exist .git (
  echo Initializing git...
  git init
  git add .
  git commit -m "Initial commit"
)

git remote remove origin 2>nul
git remote add origin %HTTPS_URL%
echo Pushing to %HTTPS_URL%
git push -u origin HEAD
pause
