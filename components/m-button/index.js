!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxMButton=e():t.vuxMButton=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{type:{required:!1,"default":"default"},disabled:{type:Boolean,required:!1,"default":!1},mini:{type:Boolean,required:!1,"default":!1},text:{type:String,required:!1}}}},function(t,e){},function(t,e){t.exports="<a href=javascript: class=mui-btn :class=\"{\n	'mui-btn-disabled':disabled,\n	'mui-btn-mini': mini,\n	'mui-btn-brand':type==='brand',\n	'mui-btn-primary':type==='primary',\n	'mui-btn-warn':type==='warn',\n	'mui-btn-default':type==='default'}\"> {{text}} <slot></slot> </a>"},function(t,e,o){var n,r;o(2),n=o(1),r=o(3),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});