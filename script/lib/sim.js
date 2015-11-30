/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/29/15
 * Time: 8:36 AM
 * To change this template use File | Settings | File Templates.
 */
define([],function(){
  "use strict";
  var sim={
    _name:'sim'
    ,tryClick:function(q){
      var ss;
      if (q.hasClass('clickable')) {
        q.simulate('click');
        return;
      }
      if (q.prop('tagName')=='BUTTON') {
        q.click();
        return;
      }
      ss=q.find('>a');
      if (ss.length==1) {
        ss.simulate('click');
        return;
      }
      ss=q.find('>span>span');
      if (ss.length==1) {
        ss.simulate('click');
        return;
      }
      ss=q.find('>span');
      if (ss.length==1) {
        ss.simulate('click');
        return;
      }
      ss=q.find('>div>div');
      if (ss.length==1) {
        ss.simulate('click');
        return;
      }
      if (0) {
        ss=q.find(' div.tooltip');
        if (ss.length>0) {
          ss.eq(0).simulate('click');
          return;
        }
      }
      ss=q.find(' .bd');
      if (ss.length==1) {
        ss.simulate('click');
        return;
      }
      ss=q.find('>div');
      if (ss.length==1) {
        ss.simulate('click');
        return;
      }
      ss=q.find('>div.img');
      if (ss.length==1) {
        ss.simulate('click');
        return;
      }
      q.simulate('click');
    }
    ,init:function(){

    }
  };
  return sim;
});
