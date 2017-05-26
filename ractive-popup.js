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
                            '<div class="popup pg round-corners {{cssclass}}" on-click="@this.fire(\'popup_click\', event)">'+
                                '<div class="titlebar round-corners">'+
                                    '<div class="title">{{#if toplink}}<a href="{{toplink}}" target="_blank">{{title}}</a>{{else}}{{title}}{{/if}}</div>'+
                                    '{{#if enableclose}}<i class="fa fa-times pull-right b-close round-corners" on-click="@this.fire(\'close\', event, enableclose)"></i>{{/if}}'+
                                '</div>'+
                                '<div class="content">{{yield}}</div>'+
                            '</div>'+
                        '</div>'+
                    '{{/if}}',
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