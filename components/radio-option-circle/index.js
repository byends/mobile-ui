!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxRadioOptionCircle=t():e.vuxRadioOptionCircle=t()}(this,function(){return function(e){function t(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(8)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{required:{type:Boolean,"default":!0}},created:function(){this.uuid=Math.random().toString(36).substring(3,8),this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(e){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$dispatch("change",e)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),r=i(n),s=o(7),u=i(s);t["default"]={ready:function(){},mixins:[r["default"]],components:{InlineDesc:u["default"]},props:{optionText:{type:String,"default":""},optionInlineDesc:{type:String,"default":""},optionValue:{type:String,"default":""},value:{type:String,"default":"",twoWay:!0}},data:function(){return{}}}},function(e,t){},function(e,t){},function(e,t){e.exports="<span class=mui-label-desc><slot></slot></span>"},function(e,t){e.exports='<label class="mui-group-item mui-group-item-radio mui-check-label" for=radio-{{uuid}}> <div class=mui-group-item-hd> <input type=radio class=mui-radio-circle id=radio-{{uuid}} :value=optionValue v-model=value> <span class=weui-icon-radio-circle></span> </div> <div class="mui-group-item-bd mui-group-item-primary"> <slot> <p>{{ optionText }}</p> <inline-desc v-if=option.inlineDesc>{{ optionInlineDesc }}</inline-desc> </slot> </div> <div class=mui-group-item-ft> <slot name=ft> </slot> </div> </label>'},function(e,t,o){var i,n;o(4),n=o(5),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,o){var i,n;o(3),i=o(2),n=o(6),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}])});