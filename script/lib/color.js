/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/29/15
 * Time: 4:16 PM
 * To change this template use File | Settings | File Templates.
 */
define(['tinycolor','vizcolors'],function(tinycolor,vizcolors){
  "use strict";
  function __lib(dummy){return dummy;}
  var colors={
    _name:'colors'
    ,fixLuminocity:function(c,h,l){
      h=h||0.4;
      l=l||0.2;
      var cc=tinycolor(c);
      var ct=0;
      while (true) {
        ct=ct+1;
        var lum=cc.getLuminance();
        if (lum>h) {cc=cc.darken(1);}
        if (lum<l) {cc=cc.brighten(1);}
        lum=cc.getLuminance();
        if ((lum<h&&lum>l)||ct>100) {
          break;
        }
      }
      return cc;
    } //-fixLuminocity
    ,matchVizColor:function(s){
      function comp(s){
        var co=tinycolor(s);
        var hsl=co.toHsl();
        var c=1;
        var a=0.5;
        var b=0.5;
        var v=Math.sqrt(a*hsl.h*a*hsl.h + b*hsl.s*b*hsl.s + c*hsl.l*c*hsl.l);
        return v;
      }
      var v0=comp(s);
      var at=10000;//Number.Infinity;
      var found=null;
      vizcolors.forEach(function(cc){
        var v=comp(cc.c);
        //console.log('v',v);
        var dif=Math.abs(v0-v);
        //console.log('dif',dif);
        if (dif<at) {
          //console.log('found..',cc);
          at=dif;
          found=cc;
        }
      });
      return found;
    } //-matchVizColor
    ,init:function(){

    }
  };
  __lib(colors.fixLuminocity);
  __lib(colors.matchVizColor);
  return colors;

});
