define([],function(){
  "use strict";
  return {
    tidTitles:{
      type:'std'
      ,selector:'.tc-story-river .tc-tiddler-view-frame .tc-tiddler-title .tc-title'
    }
    ,tiddlerTitleButtons:{
      type:'std'
      ,selector:'.tc-titlebar .tc-tiddler-controls .tc-btn-invisible'
    }
    ,pageControls:{
      type:'std'
      ,selector:'.tc-sidebar-header .tc-page-controls .tc-btn-invisible'
    }
    ,sidebarResolves:{
      type:'std'
      ,selector:'.tc-sidebar-lists .tc-tiddlylink-resolves,.tc-sidebar-lists .tc-tiddlylink-shadow'
    }
    ,sidebarFindVerticalTabs:{
      type:'std'
      ,selector:'.tc-sidebar-lists .find-wrapper .tc-vertical>button,.tc-sidebar-lists .more-wrapper .tc-vertical>button'
    }
  };
});
