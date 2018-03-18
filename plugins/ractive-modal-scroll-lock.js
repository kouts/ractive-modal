(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['RactiveModal'], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory(require('RactiveModal'));
	} else {
		// Browser globals (root is window)
		root.returnExports = factory(root.RactiveModal);
	}
}(typeof self !== 'undefined' ? self : this, function (RactiveModal) {

	this.RactiveModal = this.RactiveModal.extend({
		data: function(){
			return {
				body_style: null,
				body_lock_scroll: true
			}
		},
		on: {
			beforeOpen: function(){
				if(this.get('body_lock_scroll')){
					this.lockBodyScroll();
				}
			},
			afterClose: function(ctx){
				var all = document.querySelectorAll('.rm-wrapper');
				// We cannot release scroll unless we make sure that there is not another visible modal with the body_lock_scroll turned on
				var found_locked = false;
				for (var i = 0; i < all.length; i++) {
						var r = Ractive.getContext(all[i]).ractive;
						if(r.get('body_lock_scroll') && r.get('zindex') > 0){
							found_locked = true;
							break;
						}
				};
				if(!found_locked){
					this.unlockBodyScroll();
				}
			}
		},
		lockBodyScroll: function(){
			this.set('body_style', document.body.getAttribute('style'));
			document.body.style.overflow = 'hidden';
		},
		unlockBodyScroll: function(){
			if(this.get('body_style')){
				document.body.style = this.get('body_style');
			}else{
				document.body.removeAttribute('style');
			}
		}
	});

}));