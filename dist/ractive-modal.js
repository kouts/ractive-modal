(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RactiveModal"] = factory();
	else
		root["RactiveModal"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
Ractive.sharedSet({'rm.animating': undefined, 'rm.delay': 0});
/* harmony default export */ __webpack_exports__["default"] = (Ractive.extend({
    template: {v:4,t:[{t:4,f:[{t:7,e:"div",m:[{n:"class",f:["rm-backdrop ",{t:2,r:"bg_class"}," ",{t:2,r:"base_anim_class"}," ",{t:2,r:"bg_anim_class"}," backdrop-",{t:2,r:"modal_id"}],t:13},{n:"style",f:["z-index: ",{t:2,x:{r:["zindex"],s:"_0-1"}},";"],t:13}]}],n:50,r:"showbackdrop"},{t:4,f:[{t:7,e:"div",m:[{n:"class",f:["rm-wrapper ",{t:2,r:"base_anim_class"}," ",{t:2,r:"anim_class"}," ",{t:2,r:"modal_id"}],t:13},{n:"role",f:"dialog",t:13},{n:"aria-label",f:[{t:2,r:"title"}],t:13},{n:"tabindex",f:"0",t:13},{n:"style",f:["opacity: ",{t:2,r:"opacity"},"; display: ",{t:2,r:"display"},"; z-index: ",{t:2,r:"zindex"},"; cursor: ",{t:2,x:{r:["enableclose"],s:"_0?\"pointer\":\"default\""}}],t:13},{n:["click"],t:70,f:"clickoutside"},{n:["keydown"],t:70,f:"keydown"}],f:[{t:7,e:"div",m:[{n:"class",f:["rm ",{t:2,r:"class"}],t:13},{n:"style",f:[{t:2,r:"style"}],t:13}],f:[{t:4,f:[{t:7,e:"div",m:[{n:"class",f:"rm-titlebar",t:13}],f:[{t:7,e:"h3",m:[{n:"class",f:"rm-title",t:13}],f:[{t:2,r:"title"}]}," ",{t:4,f:[{t:7,e:"button",m:[{n:"type",f:"button",t:13},{n:"class",f:"rm-btn-close",t:13},{n:["click"],t:70,f:"close"}],f:["×"]}],n:50,r:"enableclose"}]}],n:50,x:{r:["title","enableclose"],s:"_0||_1"}}," ",{t:7,e:"div",m:[{n:"class",f:"rm-content",t:13}],f:[{t:16}]}]}]}],n:50,r:"showmodal"}],e:{"_0-1":function (_0){return(_0-1);},"_0?\"pointer\":\"default\"":function (_0){return(_0?"pointer":"default");},"_0||_1":function (_0,_1){return(_0||_1);}}},
    css: ".rm-backdrop {position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.5);} .rm-wrapper {position: fixed; text-align: center; top: 0; right: 0; bottom: 0; left: 0; overflow-x: hidden; overflow-y: auto; display: none; outline: 0;} .rm {position: relative; display: inline-block; width:100%; text-align: left; color: #333333; background-color: #fff; top:30px; cursor: default; min-width: 110px; max-width: 500px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);} .rm-titlebar {padding:15px; color: #333; overflow: auto; border-bottom: 1px solid #e5e5e5;} .rm-title {margin-top:2px; margin-bottom: 0px; display: inline-block; font-size:1.25rem;} .rm-btn-close {padding: 0px 4px 0px 4px; cursor: pointer; background: 0 0; border: 0; font-weight:700; float: right; font-size: 1.5rem; line-height: 1; margin-right: -5px; color:#ccc;} .rm-btn-close:hover, .rm-btn-close:focus:hover{color:#6f6f6f; border-color: transparent; background-color: transparent;} .rm-btn-close:focus {color:#939393; border-color: transparent; background-color: transparent;} .rm-content {padding:15px 15px 15px 15px;} .rm-content .full-hr {width: auto; border: 0; border-top: 1px solid #e0e0e0; margin-top:15px; margin-bottom:15px; margin-left:-14px; margin-right:-14px;} .rm-fadeIn {-webkit-animation-name: rm-fadeIn; animation-name: rm-fadeIn;} @-webkit-keyframes rm-fadeIn {0% {opacity: 0} 100% {opacity: 1}} @keyframes rm-fadeIn {0% {opacity: 0} 100% {opacity: 1}} .rm-fadeOut {-webkit-animation-name: rm-fadeOut; animation-name: rm-fadeOut;} @-webkit-keyframes rm-fadeOut {0% {opacity: 1} 100% {opacity: 0}} @keyframes rm-fadeOut {0% {opacity: 1} 100% {opacity: 0}} .rm-fadeIn, .rm-fadeOut {-webkit-animation-duration: .25s; animation-duration: .25s; -webkit-animation-fill-mode: both; animation-fill-mode: both;}",
    data: function() {
        return {
            showmodal: false,
            showbackdrop: false,
            basedon: false,
            live: false,
            appendto: '',
            class: '',
            bg_class: '',
            base_anim_class: '',
            anim_class: '',
            bg_anim_class: '',
            bg_in_class: 'rm-fadeIn',
            bg_out_class: 'rm-fadeOut',
            in_class: 'rm-fadeIn',
            out_class: 'rm-fadeOut',
            style: '',
            title: '',
            modal_id: this._guid + '_rm',
            enableclose: true,
            base_zindex: 1051,
            opacity: 0,
            display: 'none',
            zindex: 0
        }
    },
    delegate: false,
    on: {
        close: function(ctx){
            ctx.original.preventDefault();
            if(this.get('enableclose')){
                this.set('basedon', false);
            }
        },
        clickoutside: function(ctx){
            if(ctx.original.target === ctx.node){
                this.fire('close', ctx);
            }
        },
        keydown: function(ctx){
            var e = ctx.original;
            if(e.which === 27){
                this.fire('close', ctx);
            }
            if(e.which === 9){
                // Get only visible elements
                var all = this.findAll('input, select, textarea, button, a').filter(function(el){
                    return !!( el.offsetWidth || el.offsetHeight || el.getClientRects().length );
                });
                if(e.shiftKey){
                    if(e.target === all[0] || e.target === this.find('.rm-wrapper')){
                        e.preventDefault();
                        all[all.length-1].focus();
                    }
                }else{
                    if(e.target === all[all.length-1]){
                        e.preventDefault();
                        all[0].focus();
                    }
                }
            }
        }
    },
    onconfig: function(){
        if(this.get('live')){
            this.set('showmodal', true);
        }
    },
    onrender: function(){
        var modal_id = this.get('modal_id');
        this.observe_basedon = this.observe('basedon', function(newValue, oldValue, keypath){
            var live = this.get('live');
            if(newValue === true){
                if(document.querySelector('.'+modal_id) && document.querySelector('.'+modal_id).style.display === 'block'){
                    return;
                }
                this.elToFocus = document.activeElement;
                this.fire('beforeOpen');
                var lastZindex = this.getTopZindex();
                var zindex = (lastZindex === 0) ? this.get('base_zindex') : lastZindex+2;
                if(!live){
                    this.set('showmodal', true);
                }
                this.insert(this.get('appendto') ? document.querySelector(this.get('appendto')) : this.root.el);
                this.set({'display': 'block', 'zindex': zindex});
                this.animateModal('in').then(function(){
                    this.find('[autofocus]') ? this.find('[autofocus]').focus() : this.find('.rm-wrapper').focus();
                    this.fire('afterOpen');
                }.bind(this));
            }else{
                if(!document.querySelector('.'+modal_id) || document.querySelector('.'+modal_id).style.display !== 'block'){
                    return;
                }
                this.fire('beforeClose');
                this.animateModal('out').then(function(){
                    this.set({'display': 'none', 'zindex': 0});
                    if(!live){
                        this.set('showmodal', false);
                    }
                    this.fire('afterClose');
                    var lastZindex = this.getTopZindex();
                    if(lastZindex > 0){
                        var all = document.querySelectorAll('.rm-wrapper');
                        for (var i = 0; i < all.length; i++) {
                            if(all[i].style.zIndex == lastZindex){
                                var r = Ractive.getContext(all[i]).ractive;
                                if(r.find('.rm-wrapper').contains(this.elToFocus)){
                                    this.elToFocus.focus();
                                }else{
                                    r.find('[autofocus]') ? r.find('[autofocus]').focus() : r.find('.rm-wrapper').focus();
                                }
                                break;
                            }
                        };
                    }else{
                        if(document.body.contains(this.elToFocus)){
                            this.elToFocus.focus();
                        }
                    }
                }.bind(this));
            }
        }, {
            defer: true
        });
    },
    onunrender: function(){
        this.observe_basedon.cancel();
    },
    animateModal: function(dir){
        return new Promise(function(resolve, reject){
            var handler = function(e) {
                this.find('.rm-wrapper').removeEventListener('animationend', handler);
                this.set({
                    'anim_class': '',
                    'bg_anim_class': '',
                    '@shared.rm.animating': undefined,
                    '@shared.rm.delay': 0
                });
                if(dir == 'out'){
                    this.set({showbackdrop: false, opacity: 0});
                }
                resolve();
            }.bind(this);
            this.find('.rm-wrapper').addEventListener('animationend', handler);
            if(typeof this.get('@shared.rm.animating') === 'object'){
                this.set('@shared.rm.delay', this.get('@shared.rm.delay') + this.getAnimationDuration(this.get('@shared.rm.animating').find('.rm-wrapper')) + 100);
            }
            this.set('@shared.rm.animating', this);
            setTimeout(function(){
                if(dir == 'in'){
                    this.set({showbackdrop: true, opacity: 1});
                }
                this.set({'anim_class': this.get(dir+'_class'), 'bg_anim_class': this.get('bg_'+dir+'_class')});
            }.bind(this), this.get('@shared.rm.delay'));
        }.bind(this));
    },
    getTopZindex: function(){
        var toret = 0;
        var all = document.querySelectorAll('.rm-wrapper');
        for (var i = 0; i < all.length; i++) {
            toret = parseInt(all[i].style.zIndex) > toret ? parseInt(all[i].style.zIndex) : toret;
        };
        return toret;
    },
    getAnimationDuration: function(el){
        var duration = window.getComputedStyle(el, null)['animation-duration'];
        return (duration.indexOf('ms') !== -1) ? parseFloat(duration.replace('ms', '')) : parseFloat(duration.replace('s', '')) * 1000;
    }
}));

/***/ })
/******/ ])["default"];
});