/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 4:24 AM
 * To change this template use File | Settings | File Templates.
 */

define([],function(){
  "use strict";
  var vizcolors=[
    ,{c:'#f0f8ff',n:'aliceblue'}
    ,{c:'#faebd7',n:'antiquewhite'}
    ,{c:'#ffefdb',n:'antiquewhite1'}
    ,{c:'#eedfcc',n:'antiquewhite2'}
    ,{c:'#cdc0b0',n:'antiquewhite3'}
    ,{c:'#8b8378',n:'antiquewhite4'}
    ,{c:'#7fffd4',n:'aquamarine'}
    ,{c:'#7fffd4',n:'aquamarine1'}
    ,{c:'#76eec6',n:'aquamarine2'}
    ,{c:'#66cdaa',n:'aquamarine3'}
    ,{c:'#458b74',n:'aquamarine4'}
    ,{c:'#f0ffff',n:'azure'}
    ,{c:'#f0ffff',n:'azure1'}
    ,{c:'#e0eeee',n:'azure2'}
    ,{c:'#c1cdcd',n:'azure3'}
    ,{c:'#838b8b',n:'azure4'}
    ,{c:'#f5f5dc',n:'beige'}
    ,{c:'#ffe4c4',n:'bisque'}
    ,{c:'#ffe4c4',n:'bisque1'}
    ,{c:'#eed5b7',n:'bisque2'}
    ,{c:'#cdb79e',n:'bisque3'}
    ,{c:'#8b7d6b',n:'bisque4'}
    ,{c:'#000000',n:'black'}
    ,{c:'#ffebcd',n:'blanchedalmond'}
    ,{c:'#0000ff',n:'blue'}
    ,{c:'#0000ff',n:'blue1'}
    ,{c:'#0000ee',n:'blue2'}
    ,{c:'#0000cd',n:'blue3'}
    ,{c:'#00008b',n:'blue4'}
    ,{c:'#8a2be2',n:'blueviolet'}
    ,{c:'#a52a2a',n:'brown'}
    ,{c:'#ff4040',n:'brown1'}
    ,{c:'#ee3b3b',n:'brown2'}
    ,{c:'#cd3333',n:'brown3'}
    ,{c:'#8b2323',n:'brown4'}
    ,{c:'#deb887',n:'burlywood'}
    ,{c:'#ffd39b',n:'burlywood1'}
    ,{c:'#eec591',n:'burlywood2'}
    ,{c:'#cdaa7d',n:'burlywood3'}
    ,{c:'#8b7355',n:'burlywood4'}
    ,{c:'#5f9ea0',n:'cadetblue'}
    ,{c:'#98f5ff',n:'cadetblue1'}
    ,{c:'#8ee5ee',n:'cadetblue2'}
    ,{c:'#7ac5cd',n:'cadetblue3'}
    ,{c:'#53868b',n:'cadetblue4'}
    ,{c:'#7fff00',n:'chartreuse'}
    ,{c:'#7fff00',n:'chartreuse1'}
    ,{c:'#76ee00',n:'chartreuse2'}
    ,{c:'#66cd00',n:'chartreuse3'}
    ,{c:'#458b00',n:'chartreuse4'}
    ,{c:'#d2691e',n:'chocolate'}
    ,{c:'#ff7f24',n:'chocolate1'}
    ,{c:'#ee7621',n:'chocolate2'}
    ,{c:'#cd661d',n:'chocolate3'}
    ,{c:'#8b4513',n:'chocolate4'}
    ,{c:'#ff7f50',n:'coral'}
    ,{c:'#ff7256',n:'coral1'}
    ,{c:'#ee6a50',n:'coral2'}
    ,{c:'#cd5b45',n:'coral3'}
    ,{c:'#8b3e2f',n:'coral4'}
    ,{c:'#6495ed',n:'cornflowerblue'}
    ,{c:'#fff8dc',n:'cornsilk'}
    ,{c:'#fff8dc',n:'cornsilk1'}
    ,{c:'#eee8cd',n:'cornsilk2'}
    ,{c:'#cdc8b1',n:'cornsilk3'}
    ,{c:'#8b8878',n:'cornsilk4'}
    ,{c:'#dc143c',n:'crimson'}
    ,{c:'#00ffff',n:'cyan'}
    ,{c:'#00ffff',n:'cyan1'}
    ,{c:'#00eeee',n:'cyan2'}
    ,{c:'#00cdcd',n:'cyan3'}
    ,{c:'#008b8b',n:'cyan4'}
    ,{c:'#b8860b',n:'darkgoldenrod'}
    ,{c:'#ffb90f',n:'darkgoldenrod1'}
    ,{c:'#eead0e',n:'darkgoldenrod2'}
    ,{c:'#cd950c',n:'darkgoldenrod3'}
    ,{c:'#8b6508',n:'darkgoldenrod4'}
    ,{c:'#006400',n:'darkgreen'}
    ,{c:'#bdb76b',n:'darkkhaki'}
    ,{c:'#556b2f',n:'darkolivegreen'}
    ,{c:'#caff70',n:'darkolivegreen1'}
    ,{c:'#bcee68',n:'darkolivegreen2'}
    ,{c:'#a2cd5a',n:'darkolivegreen3'}
    ,{c:'#6e8b3d',n:'darkolivegreen4'}
    ,{c:'#ff8c00',n:'darkorange'}
    ,{c:'#ff7f00',n:'darkorange1'}
    ,{c:'#ee7600',n:'darkorange2'}
    ,{c:'#cd6600',n:'darkorange3'}
    ,{c:'#8b4500',n:'darkorange4'}
    ,{c:'#9932cc',n:'darkorchid'}
    ,{c:'#bf3eff',n:'darkorchid1'}
    ,{c:'#b23aee',n:'darkorchid2'}
    ,{c:'#9a32cd',n:'darkorchid3'}
    ,{c:'#68228b',n:'darkorchid4'}
    ,{c:'#e9967a',n:'darksalmon'}
    ,{c:'#8fbc8f',n:'darkseagreen'}
    ,{c:'#c1ffc1',n:'darkseagreen1'}
    ,{c:'#b4eeb4',n:'darkseagreen2'}
    ,{c:'#9bcd9b',n:'darkseagreen3'}
    ,{c:'#698b69',n:'darkseagreen4'}
    ,{c:'#483d8b',n:'darkslateblue'}
    ,{c:'#2f4f4f',n:'darkslategray'}
    ,{c:'#97ffff',n:'darkslategray1'}
    ,{c:'#8deeee',n:'darkslategray2'}
    ,{c:'#79cdcd',n:'darkslategray3'}
    ,{c:'#528b8b',n:'darkslategray4'}
    ,{c:'#2f4f4f',n:'darkslategrey'}
    ,{c:'#00ced1',n:'darkturquoise'}
    ,{c:'#9400d3',n:'darkviolet'}
    ,{c:'#ff1493',n:'deeppink'}
    ,{c:'#ff1493',n:'deeppink1'}
    ,{c:'#ee1289',n:'deeppink2'}
    ,{c:'#cd1076',n:'deeppink3'}
    ,{c:'#8b0a50',n:'deeppink4'}
    ,{c:'#00bfff',n:'deepskyblue'}
    ,{c:'#00bfff',n:'deepskyblue1'}
    ,{c:'#00b2ee',n:'deepskyblue2'}
    ,{c:'#009acd',n:'deepskyblue3'}
    ,{c:'#00688b',n:'deepskyblue4'}
    ,{c:'#696969',n:'dimgray'}
    ,{c:'#696969',n:'dimgrey'}
    ,{c:'#1e90ff',n:'dodgerblue'}
    ,{c:'#1e90ff',n:'dodgerblue1'}
    ,{c:'#1c86ee',n:'dodgerblue2'}
    ,{c:'#1874cd',n:'dodgerblue3'}
    ,{c:'#104e8b',n:'dodgerblue4'}
    ,{c:'#b22222',n:'firebrick'}
    ,{c:'#ff3030',n:'firebrick1'}
    ,{c:'#ee2c2c',n:'firebrick2'}
    ,{c:'#cd2626',n:'firebrick3'}
    ,{c:'#8b1a1a',n:'firebrick4'}
    ,{c:'#fffaf0',n:'floralwhite'}
    ,{c:'#228b22',n:'forestgreen'}
    ,{c:'#dcdcdc',n:'gainsboro'}
    ,{c:'#f8f8ff',n:'ghostwhite'}
    ,{c:'#ffd700',n:'gold'}
    ,{c:'#ffd700',n:'gold1'}
    ,{c:'#eec900',n:'gold2'}
    ,{c:'#cdad00',n:'gold3'}
    ,{c:'#8b7500',n:'gold4'}
    ,{c:'#daa520',n:'goldenrod'}
    ,{c:'#ffc125',n:'goldenrod1'}
    ,{c:'#eeb422',n:'goldenrod2'}
    ,{c:'#cd9b1d',n:'goldenrod3'}
    ,{c:'#8b6914',n:'goldenrod4'}
    ,{c:'#c0c0c0',n:'gray'}
    ,{c:'#000000',n:'gray0'}
    ,{c:'#030303',n:'gray1'}
    ,{c:'#1a1a1a',n:'gray10'}
    ,{c:'#ffffff',n:'gray100'}
    ,{c:'#1c1c1c',n:'gray11'}
    ,{c:'#1f1f1f',n:'gray12'}
    ,{c:'#212121',n:'gray13'}
    ,{c:'#242424',n:'gray14'}
    ,{c:'#262626',n:'gray15'}
    ,{c:'#292929',n:'gray16'}
    ,{c:'#2b2b2b',n:'gray17'}
    ,{c:'#2e2e2e',n:'gray18'}
    ,{c:'#303030',n:'gray19'}
    ,{c:'#050505',n:'gray2'}
    ,{c:'#333333',n:'gray20'}
    ,{c:'#363636',n:'gray21'}
    ,{c:'#383838',n:'gray22'}
    ,{c:'#3b3b3b',n:'gray23'}
    ,{c:'#3d3d3d',n:'gray24'}
    ,{c:'#404040',n:'gray25'}
    ,{c:'#424242',n:'gray26'}
    ,{c:'#454545',n:'gray27'}
    ,{c:'#474747',n:'gray28'}
    ,{c:'#4a4a4a',n:'gray29'}
    ,{c:'#080808',n:'gray3'}
    ,{c:'#4d4d4d',n:'gray30'}
    ,{c:'#4f4f4f',n:'gray31'}
    ,{c:'#525252',n:'gray32'}
    ,{c:'#545454',n:'gray33'}
    ,{c:'#575757',n:'gray34'}
    ,{c:'#595959',n:'gray35'}
    ,{c:'#5c5c5c',n:'gray36'}
    ,{c:'#5e5e5e',n:'gray37'}
    ,{c:'#616161',n:'gray38'}
    ,{c:'#636363',n:'gray39'}
    ,{c:'#0a0a0a',n:'gray4'}
    ,{c:'#666666',n:'gray40'}
    ,{c:'#696969',n:'gray41'}
    ,{c:'#6b6b6b',n:'gray42'}
    ,{c:'#6e6e6e',n:'gray43'}
    ,{c:'#707070',n:'gray44'}
    ,{c:'#737373',n:'gray45'}
    ,{c:'#757575',n:'gray46'}
    ,{c:'#787878',n:'gray47'}
    ,{c:'#7a7a7a',n:'gray48'}
    ,{c:'#7d7d7d',n:'gray49'}
    ,{c:'#0d0d0d',n:'gray5'}
    ,{c:'#7f7f7f',n:'gray50'}
    ,{c:'#828282',n:'gray51'}
    ,{c:'#858585',n:'gray52'}
    ,{c:'#878787',n:'gray53'}
    ,{c:'#8a8a8a',n:'gray54'}
    ,{c:'#8c8c8c',n:'gray55'}
    ,{c:'#8f8f8f',n:'gray56'}
    ,{c:'#919191',n:'gray57'}
    ,{c:'#949494',n:'gray58'}
    ,{c:'#969696',n:'gray59'}
    ,{c:'#0f0f0f',n:'gray6'}
    ,{c:'#999999',n:'gray60'}
    ,{c:'#9c9c9c',n:'gray61'}
    ,{c:'#9e9e9e',n:'gray62'}
    ,{c:'#a1a1a1',n:'gray63'}
    ,{c:'#a3a3a3',n:'gray64'}
    ,{c:'#a6a6a6',n:'gray65'}
    ,{c:'#a8a8a8',n:'gray66'}
    ,{c:'#ababab',n:'gray67'}
    ,{c:'#adadad',n:'gray68'}
    ,{c:'#b0b0b0',n:'gray69'}
    ,{c:'#121212',n:'gray7'}
    ,{c:'#b3b3b3',n:'gray70'}
    ,{c:'#b5b5b5',n:'gray71'}
    ,{c:'#b8b8b8',n:'gray72'}
    ,{c:'#bababa',n:'gray73'}
    ,{c:'#bdbdbd',n:'gray74'}
    ,{c:'#bfbfbf',n:'gray75'}
    ,{c:'#c2c2c2',n:'gray76'}
    ,{c:'#c4c4c4',n:'gray77'}
    ,{c:'#c7c7c7',n:'gray78'}
    ,{c:'#c9c9c9',n:'gray79'}
    ,{c:'#141414',n:'gray8'}
    ,{c:'#cccccc',n:'gray80'}
    ,{c:'#cfcfcf',n:'gray81'}
    ,{c:'#d1d1d1',n:'gray82'}
    ,{c:'#d4d4d4',n:'gray83'}
    ,{c:'#d6d6d6',n:'gray84'}
    ,{c:'#d9d9d9',n:'gray85'}
    ,{c:'#dbdbdb',n:'gray86'}
    ,{c:'#dedede',n:'gray87'}
    ,{c:'#e0e0e0',n:'gray88'}
    ,{c:'#e3e3e3',n:'gray89'}
    ,{c:'#171717',n:'gray9'}
    ,{c:'#e5e5e5',n:'gray90'}
    ,{c:'#e8e8e8',n:'gray91'}
    ,{c:'#ebebeb',n:'gray92'}
    ,{c:'#ededed',n:'gray93'}
    ,{c:'#f0f0f0',n:'gray94'}
    ,{c:'#f2f2f2',n:'gray95'}
    ,{c:'#f5f5f5',n:'gray96'}
    ,{c:'#f7f7f7',n:'gray97'}
    ,{c:'#fafafa',n:'gray98'}
    ,{c:'#fcfcfc',n:'gray99'}
    ,{c:'#00ff00',n:'green'}
    ,{c:'#00ff00',n:'green1'}
    ,{c:'#00ee00',n:'green2'}
    ,{c:'#00cd00',n:'green3'}
    ,{c:'#008b00',n:'green4'}
    ,{c:'#adff2f',n:'greenyellow'}
    ,{c:'#c0c0c0',n:'grey'}
    ,{c:'#000000',n:'grey0'}
    ,{c:'#030303',n:'grey1'}
    ,{c:'#1a1a1a',n:'grey10'}
    ,{c:'#ffffff',n:'grey100'}
    ,{c:'#1c1c1c',n:'grey11'}
    ,{c:'#1f1f1f',n:'grey12'}
    ,{c:'#212121',n:'grey13'}
    ,{c:'#242424',n:'grey14'}
    ,{c:'#262626',n:'grey15'}
    ,{c:'#292929',n:'grey16'}
    ,{c:'#2b2b2b',n:'grey17'}
    ,{c:'#2e2e2e',n:'grey18'}
    ,{c:'#303030',n:'grey19'}
    ,{c:'#050505',n:'grey2'}
    ,{c:'#333333',n:'grey20'}
    ,{c:'#363636',n:'grey21'}
    ,{c:'#383838',n:'grey22'}
    ,{c:'#3b3b3b',n:'grey23'}
    ,{c:'#3d3d3d',n:'grey24'}
    ,{c:'#404040',n:'grey25'}
    ,{c:'#424242',n:'grey26'}
    ,{c:'#454545',n:'grey27'}
    ,{c:'#474747',n:'grey28'}
    ,{c:'#4a4a4a',n:'grey29'}
    ,{c:'#080808',n:'grey3'}
    ,{c:'#4d4d4d',n:'grey30'}
    ,{c:'#4f4f4f',n:'grey31'}
    ,{c:'#525252',n:'grey32'}
    ,{c:'#545454',n:'grey33'}
    ,{c:'#575757',n:'grey34'}
    ,{c:'#595959',n:'grey35'}
    ,{c:'#5c5c5c',n:'grey36'}
    ,{c:'#5e5e5e',n:'grey37'}
    ,{c:'#616161',n:'grey38'}
    ,{c:'#636363',n:'grey39'}
    ,{c:'#0a0a0a',n:'grey4'}
    ,{c:'#666666',n:'grey40'}
    ,{c:'#696969',n:'grey41'}
    ,{c:'#6b6b6b',n:'grey42'}
    ,{c:'#6e6e6e',n:'grey43'}
    ,{c:'#707070',n:'grey44'}
    ,{c:'#737373',n:'grey45'}
    ,{c:'#757575',n:'grey46'}
    ,{c:'#787878',n:'grey47'}
    ,{c:'#7a7a7a',n:'grey48'}
    ,{c:'#7d7d7d',n:'grey49'}
    ,{c:'#0d0d0d',n:'grey5'}
    ,{c:'#7f7f7f',n:'grey50'}
    ,{c:'#828282',n:'grey51'}
    ,{c:'#858585',n:'grey52'}
    ,{c:'#878787',n:'grey53'}
    ,{c:'#8a8a8a',n:'grey54'}
    ,{c:'#8c8c8c',n:'grey55'}
    ,{c:'#8f8f8f',n:'grey56'}
    ,{c:'#919191',n:'grey57'}
    ,{c:'#949494',n:'grey58'}
    ,{c:'#969696',n:'grey59'}
    ,{c:'#0f0f0f',n:'grey6'}
    ,{c:'#999999',n:'grey60'}
    ,{c:'#9c9c9c',n:'grey61'}
    ,{c:'#9e9e9e',n:'grey62'}
    ,{c:'#a1a1a1',n:'grey63'}
    ,{c:'#a3a3a3',n:'grey64'}
    ,{c:'#a6a6a6',n:'grey65'}
    ,{c:'#a8a8a8',n:'grey66'}
    ,{c:'#ababab',n:'grey67'}
    ,{c:'#adadad',n:'grey68'}
    ,{c:'#b0b0b0',n:'grey69'}
    ,{c:'#121212',n:'grey7'}
    ,{c:'#b3b3b3',n:'grey70'}
    ,{c:'#b5b5b5',n:'grey71'}
    ,{c:'#b8b8b8',n:'grey72'}
    ,{c:'#bababa',n:'grey73'}
    ,{c:'#bdbdbd',n:'grey74'}
    ,{c:'#bfbfbf',n:'grey75'}
    ,{c:'#c2c2c2',n:'grey76'}
    ,{c:'#c4c4c4',n:'grey77'}
    ,{c:'#c7c7c7',n:'grey78'}
    ,{c:'#c9c9c9',n:'grey79'}
    ,{c:'#141414',n:'grey8'}
    ,{c:'#cccccc',n:'grey80'}
    ,{c:'#cfcfcf',n:'grey81'}
    ,{c:'#d1d1d1',n:'grey82'}
    ,{c:'#d4d4d4',n:'grey83'}
    ,{c:'#d6d6d6',n:'grey84'}
    ,{c:'#d9d9d9',n:'grey85'}
    ,{c:'#dbdbdb',n:'grey86'}
    ,{c:'#dedede',n:'grey87'}
    ,{c:'#e0e0e0',n:'grey88'}
    ,{c:'#e3e3e3',n:'grey89'}
    ,{c:'#171717',n:'grey9'}
    ,{c:'#e5e5e5',n:'grey90'}
    ,{c:'#e8e8e8',n:'grey91'}
    ,{c:'#ebebeb',n:'grey92'}
    ,{c:'#ededed',n:'grey93'}
    ,{c:'#f0f0f0',n:'grey94'}
    ,{c:'#f2f2f2',n:'grey95'}
    ,{c:'#f5f5f5',n:'grey96'}
    ,{c:'#f7f7f7',n:'grey97'}
    ,{c:'#fafafa',n:'grey98'}
    ,{c:'#fcfcfc',n:'grey99'}
    ,{c:'#f0fff0',n:'honeydew'}
    ,{c:'#f0fff0',n:'honeydew1'}
    ,{c:'#e0eee0',n:'honeydew2'}
    ,{c:'#c1cdc1',n:'honeydew3'}
    ,{c:'#838b83',n:'honeydew4'}
    ,{c:'#ff69b4',n:'hotpink'}
    ,{c:'#ff6eb4',n:'hotpink1'}
    ,{c:'#ee6aa7',n:'hotpink2'}
    ,{c:'#cd6090',n:'hotpink3'}
    ,{c:'#8b3a62',n:'hotpink4'}
    ,{c:'#cd5c5c',n:'indianred'}
    ,{c:'#ff6a6a',n:'indianred1'}
    ,{c:'#ee6363',n:'indianred2'}
    ,{c:'#cd5555',n:'indianred3'}
    ,{c:'#8b3a3a',n:'indianred4'}
    ,{c:'#4b0082',n:'indigo'}
    ,{c:'#fffffe',n:'invis'}
    ,{c:'#fffff0',n:'ivory'}
    ,{c:'#fffff0',n:'ivory1'}
    ,{c:'#eeeee0',n:'ivory2'}
    ,{c:'#cdcdc1',n:'ivory3'}
    ,{c:'#8b8b83',n:'ivory4'}
    ,{c:'#f0e68c',n:'khaki'}
    ,{c:'#fff68f',n:'khaki1'}
    ,{c:'#eee685',n:'khaki2'}
    ,{c:'#cdc673',n:'khaki3'}
    ,{c:'#8b864e',n:'khaki4'}
    ,{c:'#e6e6fa',n:'lavender'}
    ,{c:'#fff0f5',n:'lavenderblush'}
    ,{c:'#fff0f5',n:'lavenderblush1'}
    ,{c:'#eee0e5',n:'lavenderblush2'}
    ,{c:'#cdc1c5',n:'lavenderblush3'}
    ,{c:'#8b8386',n:'lavenderblush4'}
    ,{c:'#7cfc00',n:'lawngreen'}
    ,{c:'#fffacd',n:'lemonchiffon'}
    ,{c:'#fffacd',n:'lemonchiffon1'}
    ,{c:'#eee9bf',n:'lemonchiffon2'}
    ,{c:'#cdc9a5',n:'lemonchiffon3'}
    ,{c:'#8b8970',n:'lemonchiffon4'}
    ,{c:'#add8e6',n:'lightblue'}
    ,{c:'#bfefff',n:'lightblue1'}
    ,{c:'#b2dfee',n:'lightblue2'}
    ,{c:'#9ac0cd',n:'lightblue3'}
    ,{c:'#68838b',n:'lightblue4'}
    ,{c:'#f08080',n:'lightcoral'}
    ,{c:'#e0ffff',n:'lightcyan'}
    ,{c:'#e0ffff',n:'lightcyan1'}
    ,{c:'#d1eeee',n:'lightcyan2'}
    ,{c:'#b4cdcd',n:'lightcyan3'}
    ,{c:'#7a8b8b',n:'lightcyan4'}
    ,{c:'#eedd82',n:'lightgoldenrod'}
    ,{c:'#ffec8b',n:'lightgoldenrod1'}
    ,{c:'#eedc82',n:'lightgoldenrod2'}
    ,{c:'#cdbe70',n:'lightgoldenrod3'}
    ,{c:'#8b814c',n:'lightgoldenrod4'}
    ,{c:'#fafad2',n:'lightgoldenrodyellow'}
    ,{c:'#d3d3d3',n:'lightgray'}
    ,{c:'#d3d3d3',n:'lightgrey'}
    ,{c:'#ffb6c1',n:'lightpink'}
    ,{c:'#ffaeb9',n:'lightpink1'}
    ,{c:'#eea2ad',n:'lightpink2'}
    ,{c:'#cd8c95',n:'lightpink3'}
    ,{c:'#8b5f65',n:'lightpink4'}
    ,{c:'#ffa07a',n:'lightsalmon'}
    ,{c:'#ffa07a',n:'lightsalmon1'}
    ,{c:'#ee9572',n:'lightsalmon2'}
    ,{c:'#cd8162',n:'lightsalmon3'}
    ,{c:'#8b5742',n:'lightsalmon4'}
    ,{c:'#20b2aa',n:'lightseagreen'}
    ,{c:'#87cefa',n:'lightskyblue'}
    ,{c:'#b0e2ff',n:'lightskyblue1'}
    ,{c:'#a4d3ee',n:'lightskyblue2'}
    ,{c:'#8db6cd',n:'lightskyblue3'}
    ,{c:'#607b8b',n:'lightskyblue4'}
    ,{c:'#8470ff',n:'lightslateblue'}
    ,{c:'#778899',n:'lightslategray'}
    ,{c:'#778899',n:'lightslategrey'}
    ,{c:'#b0c4de',n:'lightsteelblue'}
    ,{c:'#cae1ff',n:'lightsteelblue1'}
    ,{c:'#bcd2ee',n:'lightsteelblue2'}
    ,{c:'#a2b5cd',n:'lightsteelblue3'}
    ,{c:'#6e7b8b',n:'lightsteelblue4'}
    ,{c:'#ffffe0',n:'lightyellow'}
    ,{c:'#ffffe0',n:'lightyellow1'}
    ,{c:'#eeeed1',n:'lightyellow2'}
    ,{c:'#cdcdb4',n:'lightyellow3'}
    ,{c:'#8b8b7a',n:'lightyellow4'}
    ,{c:'#32cd32',n:'limegreen'}
    ,{c:'#faf0e6',n:'linen'}
    ,{c:'#ff00ff',n:'magenta'}
    ,{c:'#ff00ff',n:'magenta1'}
    ,{c:'#ee00ee',n:'magenta2'}
    ,{c:'#cd00cd',n:'magenta3'}
    ,{c:'#8b008b',n:'magenta4'}
    ,{c:'#b03060',n:'maroon'}
    ,{c:'#ff34b3',n:'maroon1'}
    ,{c:'#ee30a7',n:'maroon2'}
    ,{c:'#cd2990',n:'maroon3'}
    ,{c:'#8b1c62',n:'maroon4'}
    ,{c:'#66cdaa',n:'mediumaquamarine'}
    ,{c:'#0000cd',n:'mediumblue'}
    ,{c:'#ba55d3',n:'mediumorchid'}
    ,{c:'#e066ff',n:'mediumorchid1'}
    ,{c:'#d15fee',n:'mediumorchid2'}
    ,{c:'#b452cd',n:'mediumorchid3'}
    ,{c:'#7a378b',n:'mediumorchid4'}
    ,{c:'#9370db',n:'mediumpurple'}
    ,{c:'#ab82ff',n:'mediumpurple1'}
    ,{c:'#9f79ee',n:'mediumpurple2'}
    ,{c:'#8968cd',n:'mediumpurple3'}
    ,{c:'#5d478b',n:'mediumpurple4'}
    ,{c:'#3cb371',n:'mediumseagreen'}
    ,{c:'#7b68ee',n:'mediumslateblue'}
    ,{c:'#00fa9a',n:'mediumspringgreen'}
    ,{c:'#48d1cc',n:'mediumturquoise'}
    ,{c:'#c71585',n:'mediumvioletred'}
    ,{c:'#191970',n:'midnightblue'}
    ,{c:'#f5fffa',n:'mintcream'}
    ,{c:'#ffe4e1',n:'mistyrose'}
    ,{c:'#ffe4e1',n:'mistyrose1'}
    ,{c:'#eed5d2',n:'mistyrose2'}
    ,{c:'#cdb7b5',n:'mistyrose3'}
    ,{c:'#8b7d7b',n:'mistyrose4'}
    ,{c:'#ffe4b5',n:'moccasin'}
    ,{c:'#ffdead',n:'navajowhite'}
    ,{c:'#ffdead',n:'navajowhite1'}
    ,{c:'#eecfa1',n:'navajowhite2'}
    ,{c:'#cdb38b',n:'navajowhite3'}
    ,{c:'#8b795e',n:'navajowhite4'}
    ,{c:'#000080',n:'navy'}
    ,{c:'#000080',n:'navyblue'}
    ,{c:'#fffffe',n:'none'}
    ,{c:'#fdf5e6',n:'oldlace'}
    ,{c:'#6b8e23',n:'olivedrab'}
    ,{c:'#c0ff3e',n:'olivedrab1'}
    ,{c:'#b3ee3a',n:'olivedrab2'}
    ,{c:'#9acd32',n:'olivedrab3'}
    ,{c:'#698b22',n:'olivedrab4'}
    ,{c:'#ffa500',n:'orange'}
    ,{c:'#ffa500',n:'orange1'}
    ,{c:'#ee9a00',n:'orange2'}
    ,{c:'#cd8500',n:'orange3'}
    ,{c:'#8b5a00',n:'orange4'}
    ,{c:'#ff4500',n:'orangered'}
    ,{c:'#ff4500',n:'orangered1'}
    ,{c:'#ee4000',n:'orangered2'}
    ,{c:'#cd3700',n:'orangered3'}
    ,{c:'#8b2500',n:'orangered4'}
    ,{c:'#da70d6',n:'orchid'}
    ,{c:'#ff83fa',n:'orchid1'}
    ,{c:'#ee7ae9',n:'orchid2'}
    ,{c:'#cd69c9',n:'orchid3'}
    ,{c:'#8b4789',n:'orchid4'}
    ,{c:'#eee8aa',n:'palegoldenrod'}
    ,{c:'#98fb98',n:'palegreen'}
    ,{c:'#9aff9a',n:'palegreen1'}
    ,{c:'#90ee90',n:'palegreen2'}
    ,{c:'#7ccd7c',n:'palegreen3'}
    ,{c:'#548b54',n:'palegreen4'}
    ,{c:'#afeeee',n:'paleturquoise'}
    ,{c:'#bbffff',n:'paleturquoise1'}
    ,{c:'#aeeeee',n:'paleturquoise2'}
    ,{c:'#96cdcd',n:'paleturquoise3'}
    ,{c:'#668b8b',n:'paleturquoise4'}
    ,{c:'#db7093',n:'palevioletred'}
    ,{c:'#ff82ab',n:'palevioletred1'}
    ,{c:'#ee799f',n:'palevioletred2'}
    ,{c:'#cd6889',n:'palevioletred3'}
    ,{c:'#8b475d',n:'palevioletred4'}
    ,{c:'#ffefd5',n:'papayawhip'}
    ,{c:'#ffdab9',n:'peachpuff'}
    ,{c:'#ffdab9',n:'peachpuff1'}
    ,{c:'#eecbad',n:'peachpuff2'}
    ,{c:'#cdaf95',n:'peachpuff3'}
    ,{c:'#8b7765',n:'peachpuff4'}
    ,{c:'#cd853f',n:'peru'}
    ,{c:'#ffc0cb',n:'pink'}
    ,{c:'#ffb5c5',n:'pink1'}
    ,{c:'#eea9b8',n:'pink2'}
    ,{c:'#cd919e',n:'pink3'}
    ,{c:'#8b636c',n:'pink4'}
    ,{c:'#dda0dd',n:'plum'}
    ,{c:'#ffbbff',n:'plum1'}
    ,{c:'#eeaeee',n:'plum2'}
    ,{c:'#cd96cd',n:'plum3'}
    ,{c:'#8b668b',n:'plum4'}
    ,{c:'#b0e0e6',n:'powderblue'}
    ,{c:'#a020f0',n:'purple'}
    ,{c:'#9b30ff',n:'purple1'}
    ,{c:'#912cee',n:'purple2'}
    ,{c:'#7d26cd',n:'purple3'}
    ,{c:'#551a8b',n:'purple4'}
    ,{c:'#ff0000',n:'red'}
    ,{c:'#ff0000',n:'red1'}
    ,{c:'#ee0000',n:'red2'}
    ,{c:'#cd0000',n:'red3'}
    ,{c:'#8b0000',n:'red4'}
    ,{c:'#bc8f8f',n:'rosybrown'}
    ,{c:'#ffc1c1',n:'rosybrown1'}
    ,{c:'#eeb4b4',n:'rosybrown2'}
    ,{c:'#cd9b9b',n:'rosybrown3'}
    ,{c:'#8b6969',n:'rosybrown4'}
    ,{c:'#4169e1',n:'royalblue'}
    ,{c:'#4876ff',n:'royalblue1'}
    ,{c:'#436eee',n:'royalblue2'}
    ,{c:'#3a5fcd',n:'royalblue3'}
    ,{c:'#27408b',n:'royalblue4'}
    ,{c:'#8b4513',n:'saddlebrown'}
    ,{c:'#fa8072',n:'salmon'}
    ,{c:'#ff8c69',n:'salmon1'}
    ,{c:'#ee8262',n:'salmon2'}
    ,{c:'#cd7054',n:'salmon3'}
    ,{c:'#8b4c39',n:'salmon4'}
    ,{c:'#f4a460',n:'sandybrown'}
    ,{c:'#2e8b57',n:'seagreen'}
    ,{c:'#54ff9f',n:'seagreen1'}
    ,{c:'#4eee94',n:'seagreen2'}
    ,{c:'#43cd80',n:'seagreen3'}
    ,{c:'#2e8b57',n:'seagreen4'}
    ,{c:'#fff5ee',n:'seashell'}
    ,{c:'#fff5ee',n:'seashell1'}
    ,{c:'#eee5de',n:'seashell2'}
    ,{c:'#cdc5bf',n:'seashell3'}
    ,{c:'#8b8682',n:'seashell4'}
    ,{c:'#a0522d',n:'sienna'}
    ,{c:'#ff8247',n:'sienna1'}
    ,{c:'#ee7942',n:'sienna2'}
    ,{c:'#cd6839',n:'sienna3'}
    ,{c:'#8b4726',n:'sienna4'}
    ,{c:'#87ceeb',n:'skyblue'}
    ,{c:'#87ceff',n:'skyblue1'}
    ,{c:'#7ec0ee',n:'skyblue2'}
    ,{c:'#6ca6cd',n:'skyblue3'}
    ,{c:'#4a708b',n:'skyblue4'}
    ,{c:'#6a5acd',n:'slateblue'}
    ,{c:'#836fff',n:'slateblue1'}
    ,{c:'#7a67ee',n:'slateblue2'}
    ,{c:'#6959cd',n:'slateblue3'}
    ,{c:'#473c8b',n:'slateblue4'}
    ,{c:'#708090',n:'slategray'}
    ,{c:'#c6e2ff',n:'slategray1'}
    ,{c:'#b9d3ee',n:'slategray2'}
    ,{c:'#9fb6cd',n:'slategray3'}
    ,{c:'#6c7b8b',n:'slategray4'}
    ,{c:'#708090',n:'slategrey'}
    ,{c:'#fffafa',n:'snow'}
    ,{c:'#fffafa',n:'snow1'}
    ,{c:'#eee9e9',n:'snow2'}
    ,{c:'#cdc9c9',n:'snow3'}
    ,{c:'#8b8989',n:'snow4'}
    ,{c:'#00ff7f',n:'springgreen'}
    ,{c:'#00ff7f',n:'springgreen1'}
    ,{c:'#00ee76',n:'springgreen2'}
    ,{c:'#00cd66',n:'springgreen3'}
    ,{c:'#008b45',n:'springgreen4'}
    ,{c:'#4682b4',n:'steelblue'}
    ,{c:'#63b8ff',n:'steelblue1'}
    ,{c:'#5cacee',n:'steelblue2'}
    ,{c:'#4f94cd',n:'steelblue3'}
    ,{c:'#36648b',n:'steelblue4'}
    ,{c:'#d2b48c',n:'tan'}
    ,{c:'#ffa54f',n:'tan1'}
    ,{c:'#ee9a49',n:'tan2'}
    ,{c:'#cd853f',n:'tan3'}
    ,{c:'#8b5a2b',n:'tan4'}
    ,{c:'#d8bfd8',n:'thistle'}
    ,{c:'#ffe1ff',n:'thistle1'}
    ,{c:'#eed2ee',n:'thistle2'}
    ,{c:'#cdb5cd',n:'thistle3'}
    ,{c:'#8b7b8b',n:'thistle4'}
    ,{c:'#ff6347',n:'tomato'}
    ,{c:'#ff6347',n:'tomato1'}
    ,{c:'#ee5c42',n:'tomato2'}
    ,{c:'#cd4f39',n:'tomato3'}
    ,{c:'#8b3626',n:'tomato4'}
    ,{c:'#fffffe',n:'transparent'}
    ,{c:'#40e0d0',n:'turquoise'}
    ,{c:'#00f5ff',n:'turquoise1'}
    ,{c:'#00e5ee',n:'turquoise2'}
    ,{c:'#00c5cd',n:'turquoise3'}
    ,{c:'#00868b',n:'turquoise4'}
    ,{c:'#ee82ee',n:'violet'}
    ,{c:'#d02090',n:'violetred'}
    ,{c:'#ff3e96',n:'violetred1'}
    ,{c:'#ee3a8c',n:'violetred2'}
    ,{c:'#cd3278',n:'violetred3'}
    ,{c:'#8b2252',n:'violetred4'}
    ,{c:'#f5deb3',n:'wheat'}
    ,{c:'#ffe7ba',n:'wheat1'}
    ,{c:'#eed8ae',n:'wheat2'}
    ,{c:'#cdba96',n:'wheat3'}
    ,{c:'#8b7e66',n:'wheat4'}
    ,{c:'#ffffff',n:'white'}
    ,{c:'#f5f5f5',n:'whitesmoke'}
    ,{c:'#ffff00',n:'yellow'}
    ,{c:'#ffff00',n:'yellow1'}
    ,{c:'#eeee00',n:'yellow2'}
    ,{c:'#cdcd00',n:'yellow3'}
    ,{c:'#8b8b00',n:'yellow4'}
    ,{c:'#9acd32',n:'yellowgreen'}
  ];
  return vizcolors;
})