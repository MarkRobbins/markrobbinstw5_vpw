


; msg, [tit], [sec]

$msg="Message";
$tit="Title";
$sec=3

if $CmdLine[0]==1 then
  $msg=$CmdLine[1];
endif

if $CmdLine[0]==2 then
  $msg=$CmdLine[1];
  $tit=$CmdLine[2];
endif

if $CmdLine[0]==3 then
  $msg=$CmdLine[1];
  $tit=$CmdLine[2];
  $sec=$CmdLine[3];
endif
;                       w    h    x   y  op  font    sz
SplashTextOn($tit,$msg, 700, 200, 10, 10, 0, "Arial", 10)
Sleep($sec*1000)
SplashOff()



