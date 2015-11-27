@echo off
echo --------------------------------------------------------------------------
@echo ant-build.bat running1....
echo ==========================================================================
rem yyyymmddhhmmssbat.exe "C:\batch\ant-build-two.bat %*"

@echo off
for /F "usebackq tokens=1,2 delims==" %%i in (`wmic os get LocalDateTime /VALUE 2^>NUL`) do if '.%%i.'=='.LocalDateTime.' set ldt=%%j
rem set ldt=%ldt:~0,4%-%ldt:~4,2%-%ldt:~6,2% %ldt:~8,2%:%ldt:~10,2%:%ldt:~12,6%
rem echo Local date is [%ldt%]
set yyyy=%ldt:~0,4%
set mm=%ldt:~4,2%
set dd=%ldt:~6,2%
set hh=%ldt:~8,2%
set nn=%ldt:~10,2%
set ss=%ldt:~12,2%
set ii=%ldt:~15,3%
rem echo Local date is [%ldt%]
goto thecall

echo yyyy:%yyyy%
echo mm:%mm%
echo dd:%dd%

echo hh:%hh%
echo nn:%nn%
echo ss:%ss%
echo ii:%ii%

:thecall
rem call C:\batch\ant-build-two.bat %*
echo current directory:
cd
echo -------------------------------------------------------------------------->>build-log.txt
echo    START BUILD >>build-log.txt
echo -------------------------------------------------------------------------->>build-log.txt
call %ANT_HOME%\bin\ant.bat -q writehist.text.buildstart > nul
IF EXIST build-logs GOTO HasDir
echo create directory "build-logs"
md build-logs
:HasDir
echo main build........
call batch-dir\ant-builder.bat %* |WTEE build-logs\build-log-%yyyy%%mm%%dd%.%hh%%nn%%ss%.txt
type build-logs\build-log-%yyyy%%mm%%dd%.%hh%%nn%%ss%.txt >>build-log.txt
type build-logs\build-log-%yyyy%%mm%%dd%.%hh%%nn%%ss%.txt >build-logs\build-log-last.txt

rem C:\batch\Snarl_CMD.exe snShowMessage 10 "Build" "Ok"

goto endd


rem call C:\ant\bin\ant.bat writehist.text.buildstart
rem call C:\ant\bin\ant.bat %*

rem call C:\ant\bin\ant.bat -l build-log.txt %*
rem C:\batch\ant-build-two.bat
goto endd



@echo ant-build.bat running1....
rem call preprocess.bat
rem if errorlevel 1 exit
echo ERRORLEVEL %ERRORLEVEL%

call C:\ant\bin\ant.bat %*

goto endd

rem copy build0.xml build.xml /y
rem echo 1:%1
rem echo 2:%2
rem echo -:%*
rem pause
rem exit
rem echo %*
echo cd...
cd
rem type build.xml

rem e C:\ant\bin\ant.bat
rem exit
rem +call C:\ant\bin\ant.bat writehist.text.buildstart
call C:\ant\bin\ant.bat %* |TEE build-log-tmp.txt
rem e C:\ant\bin\ant.bat
rem type build-log-tmp.txt |T ins 1 ' | '>>build-log.txt

rem +
type build-log-tmp.txt |T ins 1 '???'|T repl '???' '   ' >>build-log.txt
rem +
call C:\ant\bin\ant.bat writehist.text.buildend

rem e C:\ant\bin\ant.bat
rem

:endd
