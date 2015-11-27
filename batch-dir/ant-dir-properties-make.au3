; #INDEX# =======================================================================================================================
 ; Title .........: Ant Dir Properties Make v1.0.0.0
 ; AutoIt Version : 3.3
 ; Language ......: English (language independent)
 ; Description ...: Makes special identifiers for ant builds
 ; Author(s) .....: MarkRobbins
 ; Copyright .....: Copyright (C) Mark C Robbins. All rights reserved.
 ; License .......: Artistic License 2.0, see Artistic.txt
 ;
 ; Ant Dir Properties Make is free software; you can redistribute it and/or modify
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
  ; Created .......: 2015.11.26.17.30.38
  ; Modified ......: 2015.11.26.17.30.38
  ; Entries........: yyyy.mm.dd.hh.mm.ss Comments
 ; HEADER_______________________________________________________________________________________________________________
  ; Type ..........: Property Maker
  ; Subtype .......:
  ; Name ..........: Ant Dir Properties Make
  ; Summary .......:
  ; Description ...: Makes special identifiers for ant builds
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
#include <Array.au3>
#include <Constants.au3>

Global $thisfile="batch-dir\ant-dir-properties-make.au3"
Global $logg="logs\ant-dir-properties-make-log.txt";
Global $timestamp=@YEAR&"."&@MON&"."&@MDAY&"."&@HOUR&"."&@MIN&"."&@SEC&"."&@MSEC

Global $testing=True

If $CmdLine[0]<>0 Then
  $testing=False
EndIf


If Not $testing Then
  If $CmdLine[0]<>0 Then
    RunWait(@AutoItExe&' batch-dir\splash.au3 "Need 0 params - exiting" "'&$thisfile&'" "10"',""); ,@SW_NORMAL)
    Exit
  EndIf
EndIf

makeRoot()
Exit


Func makeRoot()
  Global $wd=@WorkingDir
  Global $ps='\'
  Global $of='ant\dir.properties'
  FileDelete($of)
  Global $a=StringSplit($wd,$ps,2);
  ;_ArrayDisplay($a)
  Local $x
  For $x=0 to UBound($a)-1
    CallWrite(''&$x&'._='&$a[$x])
  Next
EndFunc

;e "C:\Program Files (x86)\Autoit3\include\Array.au3"

Func CallWrite($s)
  ;MsgBox(0,$thisfile,$s)
  FileWriteLine($of,$s)
EndFunc




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


