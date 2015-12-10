/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/27/15
 * Time: 4:25 PM
 * To change this template use File | Settings | File Templates.
 */

// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

// load timeout solutions?
// http://saumya.github.io/ray/articles/44/
requirejs.config({
  //baseUrl: 'http://mrobbinsassoc.com/tw5/tw5-app/lib',
  baseUrl: 'http://localhost/tw5/tw5/tw5-app/lib',
  waitSeconds: 0,
  paths: {
    app: '../app'
    ,clipboards: '../app/clipboards'
    ,qtips:'../app/qtips'
    ,qtipitem:'../app/qtipitem'
    ,qtipmaps:'../app/qtipmaps'
    ,qtipspecs:'../app/qtipspecs'
    ,qtipoptions:'../app/qtipoptions'
    ,squishy:'../app/squishy'
    ,timebar:'../app/timebar'
    ,factory:'../app/factory'
    ,protos: 'inits/protos'
    ,jquery_plugins:'inits/jquery_plugins'
    ,jdenticon:'jdenticon-1.1.0'
  },
  shim:{
  }
});
console.log('working Yes!');

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main'],function(main){},function(error){
            console.error('Custom ERROR handler',error);
            //error.requireModules : is Array of all failed modules
            var failedId = error.requireModules && error.requireModules[0];
            console.error(failedId);
            console.error(error.message);
        });
