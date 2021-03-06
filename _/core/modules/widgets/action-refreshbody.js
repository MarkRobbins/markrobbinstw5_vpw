/*\
title: $:/core/modules/widgets/action-refreshbody.js
type: application/javascript
module-type: widget

Action widget to set body.style.display to none to accomplish scrollbar refresh on Chome.

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var RefreshBodyWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
};

/*
Inherit from the base widget class
*/
RefreshBodyWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/
RefreshBodyWidget.prototype.render = function(parent,nextSibling) {
	this.computeAttributes();
	this.execute();
};

/*
Compute the internal state of the widget
*/
RefreshBodyWidget.prototype.execute = function() {
};

/*
Refresh the widget by ensuring our attributes are up to date
*/
RefreshBodyWidget.prototype.refresh = function(changedTiddlers) {
	return this.refreshChildren(changedTiddlers);
};

/*
Invoke the action associated with this widget
*/
RefreshBodyWidget.prototype.invokeAction = function(triggeringWidget,event) {
	var self = this;
	var od=document.querySelector('body').style.display;
	document.querySelector('body').style.display='none';
	setTimeout(function(){
		document.querySelector('body').style.display=od;
	},50);
	return true; // Action was invoked
};

exports["action-refreshbody"] = RefreshBodyWidget;

})();


