@echo off
net session >nul 2>&1
echo discord.gg/confighub
echo credits to : maybsomeday
if %errorlevel% neq 0 (
    echo This requires admin perm
    powershell -Command "Start-Process '%~f0' -Verb RunAs"
    exit /b
)

set LINE=104.18.53.160 foodbyte.cc

::yes guys I used chatgpt for this, I'm retarded. But if you are reading this you should probably subscribe to @rado-hy on youtube and join discord.gg/confighub
:: Append the line if it's not already there
findstr /C:"%LINE%" C:\Windows\System32\drivers\etc\hosts >nul
if %errorlevel%==0 (
    echo You already patched Myau auth : %LINE%
) else (
    echo Fixing Auth: %LINE%
    echo %LINE% >> C:\Windows\System32\drivers\etc\hosts
)

echo Done.
pause
