define([],function(){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  function $tw(){return window.$tw;}
  unused($tw);
  unused(__lib);
  function Timebar(d1,d2,options){
    this.d1=d1;
    this.d2=d2;
    this.options=$.extend(true,{},options);
    this.options.width=this.options.width||200;
    this.options.height=this.options.height||10;
    this.options.palette=this.options.palette||Timebar.palette;
  }
  Timebar.prototype={
    html:function(){
      var widthInt=this.options.width;
      var heightInt=this.options.height;
      var dd=Timebar._dateDiffObject(this.d1,this.d2);
      var c0=this.options.palette;
      var zi={
        y:10
        ,m:9
        ,w:8
        ,d:7
        ,h:6
        ,n:5
      };
      var delta=widthInt/200;
      var br0=2;
      var br=parseInt((heightInt/4),10);
      if (br<br0) {br=br0;}
      br=br.toString()+'px';
      function style_for(n,v){
        var s='';
        s+='height:'+heightInt+'px;';
        s+='width:'+parseInt(c0[n].f*v*delta,10)+'px;';
        s+='background:'+c0[n].c0+';';
        s+='border-top-right-radius:'+br+';';
        s+='border-bottom-right-radius:'+br+';';
        s+='border-width:1px;';
        s+='border-style:solid;';
        s+='border-left-width:0px;';
        s+='border-color:'+c0[n].c+';';
        s+='position:relative;';
        s+='z-index:'+zi[n];
        return s;
      }
      function div_for(n){
        var s;
        if (dd[n]===0) {return '';}
        s='<div';
        s+=' style="';
        s+='float:left;';
        s+='font-size:0px;';
        s+=style_for(n,dd[n]);
        s+=';';
        s+='margin-left:-'+br+';';
        s+='"';
        s+=' class="time-bar-item time-bar-item-'+n+'"';
        s+='>';
        s+='</div>';
        return s;
      }
      var s='';
      var ds='<div';
      ds+=' style="';
      ds+='height:'+heightInt+'px;';
      ds+='width:'+widthInt+'px;';
      ds+='"';
      ds+=' title="'+dd.ss+'"';
      ds+=' class="time-bar"';
      ds+='>';
      s+=ds;
      s+=div_for('y');
      s+=div_for('m');
      s+=div_for('w');
      s+=div_for('d');
      s+=div_for('h');
      s+=div_for('n');
      s+='</div>';
      //console.log(s);
      return s;
    }
  };
  Timebar.palette={
    y:{c0:'#aa0000',c:'#ff0000',f:2}
   ,m:{c0:'#aaaa00',c:'#ffff00',f:4}
   ,w:{c0:'#aa44aa',c:'#ff88ff',f:4}
   ,d:{c0:'#00aa00',c:'#00ff00',f:2}
   ,h:{c0:'#00aaaa',c:'#00ffff',f:1}
   ,n:{c0:'#0000aa',c:'#0000ff',f:1}
  };
  Timebar._dateDiffObject=function(d1,d2){
    var t1=d2.valueOf() - d1.valueOf();
    var s='';
    var os={};
    function sep(s){
      if(s.length!==0){return ' ';}
      return '';
    }
    var nYears= parseInt(t1/(1000*60*60*24*365.25),10);
    t1-=nYears*(1000*60*60*24*365.25);
    if (nYears!==0) {s+=nYears+'y';}
    os.y=nYears.toString()+' years';
    var nMonths=parseInt(t1/(1000*60*60*24)/(365.25/12),10);
    if (nMonths!==0) {s+=sep(s)+nMonths+'m';}
    os.m=nMonths.toString()+' months';
    t1-=nMonths*1000*60*60*24*(365.25/12);
    var nWeeks=parseInt(t1/(1000*60*60*24*7),10);
    if (nWeeks!==0) {s+=sep(s)+nWeeks+'w';}
    os.w=nWeeks.toString()+' weeks';
    t1-=nWeeks*(1000*60*60*24*7);
    var nDays=parseInt(t1/(1000*60*60*24),10);
    if (nDays!==0) {s+=sep(s)+nDays+'d';}
    os.d=nDays.toString()+' days';
    t1-=nDays*(1000*60*60*24);
    var nHours=parseInt(t1/(1000*60*60),10);
    if (nHours!==0) {s+=sep(s)+nHours+'h';}
    os.h=nHours.toString()+' hours';
    t1-=nHours*(1000*60*60);
    var nMinutes=parseInt(t1/(1000*60),10);
    if (nMinutes!==0) {s+=sep(s)+nMinutes+'n';}
    os.n=nMinutes.toString()+' minutes';
    var nSeconds=d2.getSeconds()-d1.getSeconds();
    //var nMilliseconds=d2.getMilliseconds()-d1.getMilliseconds();
    //s+=' '+nMilliseconds+'ms';
    return {y:nYears,m:nMonths,w:nWeeks,d:nDays,h:nHours,n:nMinutes,s:nSeconds,ss:s,os:os};
  };
  return Timebar;

});
