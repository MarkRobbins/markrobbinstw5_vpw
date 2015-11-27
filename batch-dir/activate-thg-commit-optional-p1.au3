; #INDEX# =======================================================================================================================
 ; Title .........: Activate Tortoise GUI Commit v1.0.0.0
 ; AutoIt Version : 3.3
 ; Language ......: English (language independent)
 ; Description ...: Activate GUI or run
 ; Author(s) .....: MarkRobbins
 ; Copyright .....: Copyright (C) Mark C Robbins. All rights reserved.
 ; License .......: Artistic License 2.0, see Artistic.txt
 ;
 ; Activate Tortoise GUI Commit is free software; you can redistribute it and/or modify
 ; it under the terms of the Artistic License as published by Larry Wall,
 ; either version 2.0, or (at your option) any later version.
 ;
 ; This program is distributed in the hope that it will be useful,
 ; but WITHOUT ANY WARRANTY; without even the implied warranty of
 ; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 ; See the Artistic License for more details.
 ;
 ; You should have received a copy of the Artistic License with this Kit,
 ; in the file named "Artistic.txt".  If not, you can get a copy from
 ; <http://www.perlfoundation.org/artistic_license_2_0> OR
 ; <http://www.opensource.org/licenses/artistic-license-2.0.php>
 ;
 ; ===============================================================================================================================

; #OVERVIEW# ===========================================================================================================
 ; SOURCE_______________________________________________________________________________________________________________
  ; Organization ..: Mark Robbins and Associates
  ; Author ........: Mark Robbins
 ; LOG__________________________________________________________________________________________________________________
  ; Created .......: 2015.11.26.17.24.44
  ; Modified ......: 2015.11.26.17.24.44
  ; Entries........: yyyy.mm.dd.hh.mm.ss Comments
 ; HEADER_______________________________________________________________________________________________________________
  ; Type ..........: ActRun
  ; Subtype .......:
  ; Name ..........: Activate Tortoise GUI Commit
  ; Summary .......:
  ; Description ...: Activate GUI or run
  ;
  ; Remarks .......:
 ; DEVELOPMENT__________________________________________________________________________________________________________
  ; Issues ........:
  ; Status ........: [X] New
  ;                  [ ] Open
  ;                  [ ] InProgress
  ;                  [ ] Resolved
  ;                  [ ] Closed
 ; OTHER________________________________________________________________________________________________________________
  ; Related .......:
  ; Related Links .:
  ; Resources......:
 ; =====================================================================================================================
#NoTrayIcon

Global $thisfile="batch-dir\activate-thg-commit-optional-p1.au3"
Global $logg="logs\activate-thg-commit-optional-p1-log.txt";
Global $timestamp=@YEAR&"."&@MON&"."&@MDAY&"."&@HOUR&"."&@MIN&"."&@SEC&"."&@MSEC

Global $testing=True
$testing=False

If $CmdLine[0]<>0 Then
  $testing=False
EndIf

Global $p1=''

If Not $testing Then
  If $CmdLine[0]<>1 Then
    RunWait(@AutoItExe&' batch-dir\splash.au3 "Need 1 params - exiting" "'&$thisfile&'" "10"',""); ,@SW_NORMAL)
    Exit
  EndIf
EndIf


Local $cls='QWidget'
Local $ti=' - commit'
Local $tit='.*'&$ti

Local $ok=0

If $p1='' Then
  $ok=WinActivate('[CLASS:'&$cls&'; REGEXPTITLE:'&$tit&']')
Else
  $ok=WinActivate('[CLASS:'&$cls&'; TITLE:'&$p1&$ti&']')
EndIf
If $ok=0 Then
  Run('thg ci')
EndIf

Exit


;;;;;;functions
Func ts()
  Return @YEAR&"."&@MON&"."&@MDAY&"."&@HOUR&"."&@MIN&"."&@SEC&"."&@MSEC
EndFunc
Func logline($line)
  If Not FileExists('logs') Then
    DirCreate('logs');
  Else
    If StringInStr(FileGetAttrib ( "logs" ),"D")==0 Then
      Return;
    EndIf
  EndIf
  Local $fh1=FileOpen($logg,1);
  If $fh1<>-1 Then
    FileWriteLine($fh1,$line)
    FileClose($fh1)
  EndIf
EndFunc
Func snarl($i,$t,$s)
  $snarl="Snarl_CMD.exe";
  $s1=StringReplace($s,'"',"'")
  $t1=StringReplace($t,'"',"'")
  $cmd=$snarl&' snShowMessage '&$i&' "'&$t1&'" "'&$s1&'"';
  Run($cmd)
EndFunc

