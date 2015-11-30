; #INDEX# =======================================================================================================================
 ; Title .........: TiddlyWiki Disperse v1.0.0.0
 ; AutoIt Version : 3.3
 ; Language ......: English (language independent)
 ; Description ...: Spit out tiddlers according to thier titles
 ; Author(s) .....: MarkRobbins
 ; Copyright .....: Copyright (C) Mark C Robbins. All rights reserved.
 ; License .......: Artistic License 2.0, see Artistic.txt
 ;
 ; TiddlyWiki Disperse is free software; you can redistribute it and/or modify
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
  ; Created .......: 2015.11.09.21.34.36
  ; Modified ......: 2015.11.09.21.34.36
  ; Entries........: yyyy.mm.dd.hh.mm.ss Comments
 ; HEADER_______________________________________________________________________________________________________________
  ; Type ..........: File Mover
  ; Subtype .......:
  ; Name ..........: TiddlyWiki Disperse
  ; Summary .......: Move tid files into directories
  ; Description ...: Split out tiddlers according to thier titles, splitting on backslash and forward slash
  ;
  ; Remarks .......: Uses working directory *.tid files or directory in parameter 1
 ; DEVELOPMENT__________________________________________________________________________________________________________
  ; Issues ........: double slashes get turned into a single slash and and escaped slash -- kinda sucks
  ;                  but collapsing the slashes could lead to collisions -- may still have issues
  ; Status ........: [X] New
  ;                  [ ] Open
  ;                  [ ] InProgress
  ;                  [ ] Resolved
  ;                  [ ] Closed
 ; OTHER________________________________________________________________________________________________________________
  ; Example command: "C:\Program Files (x86)\AutoIt3\AutoIt3.exe" tiddlywiki-disperse.au3 C:\output\tid-files
  ; Related .......:
  ; Related Links .:
  ; Resources......:
 ; =====================================================================================================================
#NoTrayIcon
#include <File.au3>

Global $thisfile="batch-dir\tiddlywiki-disperse.au3"
Global $logg="logs\tiddlywiki-disperse-log.txt";
Global $timestamp=@YEAR&"."&@MON&"."&@MDAY&"."&@HOUR&"."&@MIN&"."&@SEC&"."&@MSEC

Global $testing=True

If $CmdLine[0]<>0 Then
  $testing=False
EndIf

Global $p1

If Not $testing Then
  If $CmdLine[0]>1 Then
    MsgBox(48,'Error','Need 1 or 0 params - exiting',)
    Exit
  EndIf
  If $CmdLine[0]=1 Then
    $p1=$CmdLine[1]
    If StringRight($p1,1)=='\' Or StringRight($p1,1)=='/' Then
      $p1=StringLeft($p1,StringLen($p1)-1)
    EndIf
    If Not FileExists($p1) Then
      MsgBox(48,'Error','Path does not exist, exiting'&@CRLF&'"'&$p1&'"')
      Exit
    EndIf
  Else
    $p1=@WorkingDir
  EndIf
EndIf


doit()
Exit

Func doit()
  Local $wd=@WorkingDir
  Local $d=$p1;
  Local $m=$d&'\*.tid'
  Local $l=FileList($m)
  Local $a=StringSplit($l,@TAB,2)
  Local $x
  Local $s=''
  For $x=0 To UBound($a)-1
    Local $i=$a[$x]
    Local $ii=$d&'\'&$i
    $i=filenamePath($ii)
    Local $dd=$d&'\'&$i;
    If StringInStr(FileGetAttrib($ii),'D')==0 Then
      FileMove($ii,$dd,9)
    EndIf
  Next
EndFunc

Func FileList($m)
  Local $search = FileFindFirstFile($m)
  Local $s=''
  If $search = -1 Then
    Return ''
  EndIf
  While 1
    Local $file = FileFindNextFile($search)
    If @error Then
      FileClose($search)
      Return $s
    EndIf
    If $s=='' Then
      $s=$file
    Else
      $s=$s&@TAB&$file
    EndIf
  WEnd
  FileClose($search)
  Return $s
EndFunc


Func filenamePath($fn)
  Local $fnn=FilePart($fn,'ne');
  Local $f=$fnn;
  ; double slash hacks - else collisions, dont know if this is resolved
  $f=StringReplace($f,'%2F%2F','\'&@TAB) ; hack
  $f=StringReplace($f,'%2F%5C','\'&@CR) ; hack
  $f=StringReplace($f,'%2F','\')
  $f=StringReplace($f,'%5C%5C','\'&@CR)  ;hack
  $f=StringReplace($f,'%5C%2F','\'&@TAB) ;hack
  $f=StringReplace($f,'%5C','\')
  $f=StringReplace($f,@TAB,'%2F') ;hack
  $f=StringReplace($f,@CR,'%5C') ;hack
  Return $f;
EndFunc



Func FilePart($f,$n)
  local $drive, $dir, $fn, $ext
  _PathSplit($f, $drive, $dir, $fn, $ext)
  if $n=='dl' Then Return StringLeft($drive,1)
  if $n=='d' Then Return $drive
  if $n=='drive' Then Return $drive
  if $n=='dir' Then Return $dir
  if $n=='n' Then Return $fn
  if $n=='name' Then Return $fn
  if $n=='e' Then Return StringRight($ext,StringLen($ext)-1)
  if $n=='ext' Then Return $ext
  if $n=='p' Then Return $drive&$path
  if $n=='path' Then Return $drive&$path
  if $n=='dp' Then Return $drive&$path&"\"
  if $n=='p_' Then Return $drive&$path&"\"
  if $n=='path_' Then Return $drive&$path&"\"
  if $n=='ne' Then Return $fn&$ext
  if $n=='nameext' Then Return $fn&$ext
  if $n=='pn' Then Return $path&"\"&$fn
  if $n=='dpn' Then Return $drive&$path&"\"&$fn
  return SetError(-1,0,"")
EndFunc


;;;;;;functions
Func ts()
  Return @YEAR&"."&@MON&"."&@MDAY&"."&@HOUR&"."&@MIN&"."&@SEC&"."&@MSEC
EndFunc
Func logline($line)
  Local $fh1=FileOpen($logg,1);
  If $fh1<>-1 Then
    FileWriteLine($fh1,$line)
    FileClose($fh1)
  EndIf
EndFunc
Func snarl($i,$t,$s)
  $snarl="C:\batch\Snarl_CMD.exe";
  $s1=StringReplace($s,'"',"'")
  $t1=StringReplace($t,'"',"'")
  $cmd=$snarl&' snShowMessage '&$i&' "'&$t1&'" "'&$s1&'"';
  Run($cmd)
EndFunc

