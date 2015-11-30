(function(){
  if (window.extras) {
    return;
  }
  window.extras=true;
function g(s){console.log('get '+s);return document.querySelector(s);}
function z(o){o.style.backgroundColor='transparent';o.style.color='#cccccc';}
function q(o){o.style.backgroundColor='#000000';o.style.color='#cccccc';}
function m(o){o.style.webkitFilter='invert(1) hue-rotate(180deg)';o.style.opacity='0.8';}
var b=g('body');b.style.backgroundColor='transparent';b.style.color='#aaaaaa';
g('.GGD0W3FBAJ + div').style.backgroundColor='rgba(0,0,0,0.5';
g('.GGD0W3FBAJ + div').style.color='#cccccc';
g('.GGD0W3FBAJ').style.webkitFilter='invert(1) hue-rotate(180deg)';
g('.GGD0W3FBAJ').style.filter='invert(1) hue-rotate(180deg)';
g('.GGD0W3FBAJ').style.opacity='0.5';
q(g('.searchBoxInput'));
g('.searchBoxInput').style.border='1px solid #444';
g('.searchBoxInput').style.width='400px';
q(g('.searchBox .gwt-Button'));
g('.searchBox .gwt-Button').style.border='1px solid #444';
m(g('.stationaryClickMenu:nth-of-type(2)'));
m(g('.stationaryClickMenu:nth-of-type(1)'));
m(g('.stationaryClickMenu:nth-of-type(3)'));
var mm=document.querySelectorAll('.clickMenu');
var x;
for(x=0;x!=mm.length;x++){m(mm[x]);}
g('canvas:nth-of-type(4)+div+div div:nth-of-type(1)').style.background='linear-gradient(to bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.8))';
g('canvas:nth-of-type(4)+div+div div:nth-of-type(1)').style.backgroundColor='rgba(0,0,0,0.2)';
g('canvas:nth-of-type(4)+div+div div:nth-of-type(2)').style.background='linear-gradient(to top,rgba(0,0,0,0.3),rgba(0,0,0,0.8))';
g('canvas:nth-of-type(4)+div+div div:nth-of-type(2)').style.backgroundColor='rgba(0,0,0,0.2)';
g('canvas:nth-of-type(4)+div+div').style.backgroundColor='rgba(0,0,0,0.0)';
g('#topBar').style.opacity='0';
g('#topBar').style.pointerEvents='none';
g('#topBar').style.display='none';
var style = document.createElement('style');
style.appendChild(document.createTextNode(''));
style.type = 'text/css';
style.rel = 'stylesheet';
style.media = 'screen';
style.title = 'dynamicSheet';
function trans(n){
  var s='';
  s+='transition:border-color '+n+'ms,box-shadow '+n+'ms;-webkit-filter: '+n+'ms;filter: '+n+'ms;';
  return s;
}
var a=[];
var c34=String.fromCharCode(34);
a.push('@keyframes fadeInLoad {from {opacity:0;}to {opacity:1;}}');
a.push('@keyframes fadeInLoadSpark {0% {opacity:0;} 80%{-webkit-filter:brightness(1);} 90%{-webkit-filter:brightness(2);} 100% {opacity:1;-webkit-filter:brightness(1);}}');
a.push('@keyframes pulsatedropbox {0%  {box-shadow: 0px 0px 5px 1px #F00;}16% {box-shadow: 0px 0px 5px 1px #FF0;}33% {box-shadow: 0px 0px 5px 1px #0F0;}50% {box-shadow: 0px 0px 5px 1px #0FF;}66% {box-shadow: 0px 0px 5px 1px #00F;}83% {box-shadow: 0px 0px 5px 1px #F0F;}100%{box-shadow: 0px 0px 5px 1px #F00;}}');
a.push('@keyframes pulsatedropbox0 {0% {box-shadow: 0px 0px 5px 1px #F00}33% {box-shadow: 0px 0px 5px 1px  #0F0}66% {box-shadow: 0px 0px 5px 1px  #f00}100% {box-shadow: 0px 0px 5px 1px #ff0}}');
a.push('img[src^='+c34+'http://mrobbinsassoc.com/markrobbins-tiddlyspot/icons/'+c34+']{animation:fadeInLoadSpark 1500ms;}');
a.push('.thought:after{content:'+String.fromCharCode(34)+'\\00a0\\00a0'+String.fromCharCode(34)+';}');
a.push('.popupContent .gwt-Image{transform:animation:fadeInLoad 1500ms;}');
a.push('.thought.hover{box-shadow:0px 0px 10px 1px #005500;'+trans('250')+';-webkit-filter:brightness(1.2);filter:brightness(1.2);}');
a.push('.thought.active{animation: pulsatedropbox 4s;animation-iteration-count: infinite;}');
a.push('.thought.link{box-shadow:0px 0px 10px 1px #555500;'+trans('250')+'}');
a.push('.thought{text-indent:10px;'+trans('1250')+'text-shadow:1px 1px 1px #000000;background-position:7px 2px;}');
a.push('.thoughtLabel{border:0px solid transparent;background:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.4));animation:fadeInLoad 1s;padding-left:5px;padding-right:5px;box-shadow:2px 2px 2px #000000;}');
a.push('.gwt-PopupPanel[style*=clip]{transform:translate(-84px,-52px);}');
a.push('canvas:nth-of-type(4)+div table{opacity:0.4;}');
a.push('.brainPopup{-webkit-filter:invert(1) hue-rotate(180deg);filter:invert(1) hue-rotate(180deg);}');
a.push('.gwt-ListBox{background-color:transparent;color:#cccccc;}');
a.push('select{background-color:transparent;color:#cccccc;}');
a.push('select:-internal-list-box option{background-color:rgba(40,40,40,0.4);color:#cccccc;}');
a.push('.gwt-Button{background-color:#000000;color:#cccccc;}');
a.push('::-webkit-scrollbar              { background-color:#222; }');
a.push('::-webkit-scrollbar-track:vertical { background-color:#0a0a0a;background:linear-gradient(to bottom,#0a0a0a,#000,#0a0a0a); }');
a.push('::-webkit-scrollbar-track-piece  { background-color:#000; }');
a.push('::-webkit-scrollbar-track-piece:vertical { background-color:#0a0a0a;background:linear-gradient(to bottom,#0a0a0a,#000,#0a0a0a); }');
a.push('::-webkit-scrollbar-track-piece:vertical:hover { background-color:#112;background:linear-gradient(to bottom,#112,#000,#112); }');
a.push('::-webkit-scrollbar-track-piece:horizontal { background-color:#0a0a0a;background:linear-gradient(to right,#0a0a0a,#000,#0a0a0a); }');
a.push('::-webkit-scrollbar-track-piece:horizontal:hover { background-color:#112;background:linear-gradient(to right,#112,#000,#112); }');
a.push('::-webkit-scrollbar-button:vertical,');
a.push('::-webkit-scrollbar-thumb:vertical        { background-color:#111;background:linear-gradient(to right,#000,#111,#000);}');
a.push('::-webkit-scrollbar-button:vertical:hover,');
a.push('::-webkit-scrollbar-thumb:vertical:hover  { background-color:#334;background:linear-gradient(to right,#222,#334,#222);}');
a.push('::-webkit-scrollbar-button:horizontal,');
a.push('::-webkit-scrollbar-thumb:horizontal      { background-color:#111;background:linear-gradient(to bottom,#000,#111,#000)}');
a.push('::-webkit-scrollbar-button:horizontal:hover,');
a.push('::-webkit-scrollbar-thumb:horizontal:hover{ background-color:#334;background:linear-gradient(to bottom,#222,#334,#222)}');
a.push('::-webkit-scrollbar-corner       { background-color:#000; }');
a.push('::-webkit-resizer                { background-color:#000; }');
style.innerHTML=a.join('');
document.head.appendChild(style);
})();


@-webkit-keyframes pulsatedropbox {0% {box-shadow: inset 0px 0px 25px 5px #F00}33% {box-shadow: inset 0px 0px 153px 40px  #0F0}66% {box-shadow: inset 0px 0px 25px 5px  #f00}100% {box-shadow: inset 0px 0px 25px 15px #ff0}}

