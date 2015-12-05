/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/29/15
 * Time: 4:20 PM
 * To change this template use File | Settings | File Templates.
 */
define(['vizcolors','jdenticon','md5','color-thief'],function(vizcolors,jdenticon,CryptoJS,ColorThief){
  "use strict";
  function __lib(dummy){return dummy;}
  //noinspection JSUnresolvedVariable
  var $=window.$;
  var identicon={
    _name:'identicon'
    ,_canvasQ:null
    ,getIdenticonImageData:function(ident){
      if(this._canvasQ===null){
        $('body').append('<canvas id="identicon-canvas" width="64" height="64" style="display:none;"/>');
        this._canvasQ=$('#identicon-canvas');
      }
      var sc=this._canvasQ;
      var hash=CryptoJS.MD5(ident).toString();
      sc.jdenticon(hash);
      var rv=sc[0].toDataURL();
      var colorThief = new ColorThief();
      var clr=colorThief.getPalette(sc[0],4,10);
      var c0=tinycolor({r:clr[0][0],g:clr[0][1],b:clr[0][2]});
      var c1=tinycolor({r:clr[1][0],g:clr[1][1],b:clr[1][2]});
      var c2=tinycolor({r:clr[2][0],g:clr[2][1],b:clr[2][2]});
      var c3=tinycolor({r:clr[3][0],g:clr[3][1],b:clr[3][2]});
      return {png:rv,c0:c0,c1:c1,c2:c2,c3:c3,ident:ident,hash:hash};
    }
    ,init:function(){

    }
  };
  __lib(identicon.getIdenticonImageData);
  return identicon;
});
