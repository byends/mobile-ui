!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.vuxGroup=o():t.vuxGroup=o()}(this,function(){return function(t){function o(r){if(e[r])return e[r].exports;var s=e[r]={exports:{},id:r,loaded:!1};return t[r].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){t.exports=e(7)},function(t,o,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var s=e(6),i=r(s);o["default"]={components:{GroupTitle:i["default"]},props:{title:String,titleColor:String},events:{"group.class.add":function(t){this.$el.querySelector(".mui-group").classList.add(t)}}}},function(t,o){},function(t,o){},function(t,o){t.exports="<div class=mui-group-title> <slot></slot> </div>"},function(t,o){t.exports="<div> <div class=mui-group-title v-if=title :style={color:titleColor}>{{title}}</div> <div class=mui-group :class=\"{'no-group-title':!title}\"> <slot></slot> </div> </div>"},function(t,o,e){var r,s;e(2),s=e(4),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,o,e){var r,s;e(3),r=e(1),s=e(5),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}])});