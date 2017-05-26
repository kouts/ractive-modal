"use-strict";
(function(Ractive){

    Ractive.events.animend = function(node, fire){
        var Handler = function(event){
            fire({
              node: node,
              original: event
            });
        };
        ['animationend', 'webkitAnimationEnd', 'MSAnimationEnd', 'oAnimationEnd'].forEach(function(e){
            node.addEventListener(e, Handler);
        });
        return {
            teardown:function(){
                ['animationend', 'webkitAnimationEnd', 'MSAnimationEnd', 'oAnimationEnd'].forEach(function(e){
                    node.removeEventListener(e, Handler);
                });
            }
        }
    }

    Ractive.components.popup = Ractive.extend({
        isolated: false,
        template:   '{{#if showpopup}}'+
                        '<div class="popup-wrapper {{popup_id}} {{enableclose ? \'cursor-pointer\' : \'\'}}" on-click="@this.fire(\'close\', event, enableclose)" on-animend="@this.fire(\'anim_end\', event)">'+
                            '<div class="popup round-corners {{cssclass}}" on-click="@this.fire(\'popup_click\', event)">'+
                                '<div class="titlebar round-corners">'+
                                    '<div class="title">{{#if toplink}}<a href="{{toplink}}" target="_blank">{{title}}</a>{{else}}{{title}}{{/if}}</div>'+
                                    '{{#if enableclose}}<i class="fa fa-times pull-right b-close round-corners" on-click="@this.fire(\'close\', event, enableclose)"></i>{{/if}}'+
                                '</div>'+
                                '<div class="content">{{yield}}</div>'+
                            '</div>'+
                        '</div>'+
                    '{{/if}}',
        css:    '.popup {background-color: #fff; color: #333333; display: none; min-width: 110px; -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);}'+
                '.popup .titlebar {padding:15px; color: #333; overflow: auto; border-bottom: 1px solid #e5e5e5;}'+
                '.popup .titlebar .title {margin-top:2px; display: inline-block; font-size:15px; font-weight: bold;}'+
                '.popup .titlebar .b-close {cursor: pointer; font-size: 14px; padding:0px 0px 2px 3px; margin-top: -2px; margin-right: -2px; color:#ccc;}'+
                '.popup .titlebar .b-close:hover {color:#6f6f6f; background-color: #fff;}'+
                '.popup .content {padding:15px 15px 15px 15px;}'+
                '.popup .content .full-hr {border: 0; border-top: 1px solid #e0e0e0; margin-top:15px; margin-bottom:15px; margin-left:-14px; margin-right:-14px;}'+
                '.popup.round-corners {-webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;}'+
                '.popup .popup-buttons-top {margin-top:-5px;}'+
                '.popup-wrapper {position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1050; overflow: auto; display:none; opacity:0; background-color: rgba(0, 0, 0, 0.5);}'+
                '.popup-wrapper.cursor-pointer {cursor: pointer;}'+
                '.popup-wrapper .popup {position: relative; float: left; top:30px; left: 50%; transform: translate(-50%,0); cursor: default; display: block;}'+
                '@keyframes popup-fade-in {0% {opacity: 0;} 100% {opacity: 1;}}'+
                '.popup-fade-in {display:block !important; animation-name: popup-fade-in; animation-duration: .25s; animation-fill-mode: both;}'+
                '@keyframes popup-fade-out {0% {opacity: 1;} 100% {opacity: 0;}}'+
                '.popup-fade-out {animation-name: popup-fade-out; animation-duration: .25s; animation-fill-mode: both;}',
        data: function(){
            return {showpopup: false, basedon: false, cssclass: '', title: '', toplink: '', popup_id: this._guid+'_popup', enableclose: true}
        },
        findLastZindex: function(){
            var toret = 0;
            var all = document.querySelectorAll('.popup-wrapper');
            for (var i = 0; i < all.length; i++) {
                toret = parseInt(all[i].style.zIndex) > toret ? parseInt(all[i].style.zIndex) : toret;
            };
            return toret;
        },
        onrender: function(){
            var self = this;
            var basedon = typeof self.get('basedon') === 'string' ? self.get('basedon') : 'basedon';
            var popup_id = self.get('popup_id');
            var enableclose = self.get('enableclose');

            self.on('close', function(event, enable){
                event.original.preventDefault();
                if(enable){
                    self.set(basedon, false);
                }
            });
            
            self.on('popup_click', function(event){
                event.original.stopPropagation();
            });

            self.on('anim_end', function(event){
                if(event.original.animationName === 'popup-fade-in'){
                    self.fire('afterOpen');
                }else{
                    self.set('showpopup', false);
                    self.fire('afterClose');
                }
            });

            self.keydownCallback = function(e){
                if(e.which === 27 && document.querySelector('.'+popup_id).style.zIndex == self.findLastZindex() && enableclose){
                    self.set(basedon, false);
                    window.removeEventListener('keydown', self.keydownCallback);
                }
            }

            self.observe_basedon = self.observe(basedon, function (newValue, oldValue, keypath){
                if(newValue === true){
                    if(document.querySelector('.'+popup_id)){
                        return;
                    }
                    self.fire('beforeOpen');
                    var zindex = document.querySelectorAll('.popup-wrapper').length > 0 ? self.findLastZindex()+1 : 1050;
                    self.set('showpopup', true);
                    var el = self.find('.popup-wrapper');
                    el.style.zIndex = zindex;
                    window.addEventListener('keydown', self.keydownCallback);
                    el.classList.add('popup-fade-in');
                }else{
                    window.removeEventListener('keydown', self.keydownCallback);
                    if(document.querySelector('.'+popup_id) === null){
                        return;
                    }
                    self.fire('beforeClose');
                    self.find('.popup-wrapper').classList.add('popup-fade-out');
                }
            }, {
                defer: true
            });
        },
        onunrender: function(){
            var self = this;
            window.removeEventListener('keydown', self.keydownCallback);
            self.observe_basedon.cancel();
        }
    });

})(Ractive);
