!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxMButton=t():e.vuxMButton=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:{required:!1,"default":"default"},disabled:{type:Boolean,required:!1,"default":!1},mini:{type:Boolean,required:!1,"default":!1},text:{type:String,required:!1}}}},function(e,t){},function(e,t){e.exports="<a href=javascript: class=mui-btn :class=\"{\n	'mui-btn-disabled':disabled,\n	'mui-btn-mini': mini,\n	'mui-btn-brand':type==='brand',\n	'mui-btn-primary':type==='primary',\n	'mui-btn-warn':type==='warn',\n	'mui-btn-a-blue':type==='a-blue',\n	'mui-btn-a-red':type==='a-red',\n	'mui-btn-a-white':type==='a-white',\n	'mui-btn-a-green':type==='a-green',\n	'mui-btn-b-white':type==='b-white',\n	'mui-btn-c-white':type==='c-white',\n	'mui-btn-c-blue':type==='c-blue',\n	'mui-btn-c-green':type==='c-green',\n	'mui-btn-c-orange':type==='c-orange',\n	'mui-btn-d-white':type==='d-white',\n	'mui-btn-e-white':type==='e-white',\n	'mui-btn-f-orange':type==='f-orange',\n	'mui-btn-default':type==='default'}\"> {{text}} <slot></slot> </a>"},function(e,t,n){var i,r;n(2),i=n(1),r=n(3),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)}])});