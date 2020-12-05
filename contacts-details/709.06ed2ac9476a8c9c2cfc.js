/*! For license information please see 709.06ed2ac9476a8c9c2cfc.js.LICENSE.txt */
(globalThis.webpackChunkangular_module_federation=globalThis.webpackChunkangular_module_federation||[]).push([[709],{2174:(r,t,n)=>{"use strict";n.d(t,{c:()=>i});var e=n(150),s=n(1644),i={closed:!0,next:function(r){},error:function(r){if(e.v.useDeprecatedSynchronousErrorHandling)throw r;(0,s.z)(r)},complete:function(){}}},979:(r,t,n)=>{"use strict";n.d(t,{L:()=>h});var e=n(5987),s=n(4156),i=n(2174),o=n(3884),c=n(3142),u=n(150),a=n(1644),h=function(r){function t(n,e,s){var o=r.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=i.c;break;case 1:if(!n){o.destination=i.c;break}if("object"==typeof n){n instanceof t?(o.syncErrorThrowable=n.syncErrorThrowable,o.destination=n,n.add(o)):(o.syncErrorThrowable=!0,o.destination=new p(o,n));break}default:o.syncErrorThrowable=!0,o.destination=new p(o,n,e,s)}return o}return e.ZT(t,r),t.prototype[c.b]=function(){return this},t.create=function(r,n,e){var s=new t(r,n,e);return s.syncErrorThrowable=!1,s},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this))},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){this.destination.error(r),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var r=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=r,this},t}(o.w),p=function(r){function t(t,n,e,o){var c,u=r.call(this)||this;u._parentSubscriber=t;var a=u;return(0,s.m)(n)?c=n:n&&(c=n.next,e=n.error,o=n.complete,n!==i.c&&(a=Object.create(n),(0,s.m)(a.unsubscribe)&&u.add(a.unsubscribe.bind(a)),a.unsubscribe=u.unsubscribe.bind(u))),u._context=a,u._next=c,u._error=e,u._complete=o,u}return e.ZT(t,r),t.prototype.next=function(r){if(!this.isStopped&&this._next){var t=this._parentSubscriber;u.v.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,r)&&this.unsubscribe():this.__tryOrUnsub(this._next,r)}},t.prototype.error=function(r){if(!this.isStopped){var t=this._parentSubscriber,n=u.v.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,r),this.unsubscribe()):(this.__tryOrUnsub(this._error,r),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=r,t.syncErrorThrown=!0):(0,a.z)(r),this.unsubscribe();else{if(this.unsubscribe(),n)throw r;(0,a.z)(r)}}},t.prototype.complete=function(){var r=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return r._complete.call(r._context)};u.v.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(r,t){try{r.call(this._context,t)}catch(r){if(this.unsubscribe(),u.v.useDeprecatedSynchronousErrorHandling)throw r;(0,a.z)(r)}},t.prototype.__tryOrSetError=function(r,t,n){if(!u.v.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return u.v.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=t,r.syncErrorThrown=!0,!0):((0,a.z)(t),!0)}return!1},t.prototype._unsubscribe=function(){var r=this._parentSubscriber;this._context=null,this._parentSubscriber=null,r.unsubscribe()},t}(h)},3884:(r,t,n)=>{"use strict";n.d(t,{w:()=>c});var e=n(9026),s=n(2009),i=n(4156),o=function(){function r(r){return Error.call(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(r,t){return t+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r,this}return r.prototype=Object.create(Error.prototype),r}(),c=function(){function r(r){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,r&&(this._ctorUnsubscribe=!0,this._unsubscribe=r)}var t;return r.prototype.unsubscribe=function(){var t;if(!this.closed){var n=this,c=n._parentOrParents,a=n._ctorUnsubscribe,h=n._unsubscribe,p=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,c instanceof r)c.remove(this);else if(null!==c)for(var b=0;b<c.length;++b)c[b].remove(this);if((0,i.m)(h)){a&&(this._unsubscribe=void 0);try{h.call(this)}catch(r){t=r instanceof o?u(r.errors):[r]}}if((0,e.k)(p)){b=-1;for(var l=p.length;++b<l;){var f=p[b];if((0,s.K)(f))try{f.unsubscribe()}catch(r){t=t||[],r instanceof o?t=t.concat(u(r.errors)):t.push(r)}}}if(t)throw new o(t)}},r.prototype.add=function(t){var n=t;if(!t)return r.EMPTY;switch(typeof t){case"function":n=new r(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof r)){var e=n;(n=new r)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var s=n._parentOrParents;if(null===s)n._parentOrParents=this;else if(s instanceof r){if(s===this)return n;n._parentOrParents=[s,this]}else{if(-1!==s.indexOf(this))return n;s.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},r.prototype.remove=function(r){var t=this._subscriptions;if(t){var n=t.indexOf(r);-1!==n&&t.splice(n,1)}},r.EMPTY=((t=new r).closed=!0,t),r}();function u(r){return r.reduce((function(r,t){return r.concat(t instanceof o?t.errors:t)}),[])}},150:(r,t,n)=>{"use strict";n.d(t,{v:()=>s});var e=!1,s={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){r&&(new Error).stack,e=r},get useDeprecatedSynchronousErrorHandling(){return e}}},5709:(r,t,n)=>{"use strict";n.d(t,{U:()=>i});var e=n(5987),s=n(979);function i(r,t){return function(n){if("function"!=typeof r)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new o(r,t))}}var o=function(){function r(r,t){this.project=r,this.thisArg=t}return r.prototype.call=function(r,t){return t.subscribe(new c(r,this.project,this.thisArg))},r}(),c=function(r){function t(t,n,e){var s=r.call(this,t)||this;return s.project=n,s.count=0,s.thisArg=e||s,s}return e.ZT(t,r),t.prototype._next=function(r){var t;try{t=this.project.call(this.thisArg,r,this.count++)}catch(r){return void this.destination.error(r)}this.destination.next(t)},t}(s.L)},3142:(r,t,n)=>{"use strict";n.d(t,{b:()=>e});var e=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}()},1644:(r,t,n)=>{"use strict";function e(r){setTimeout((function(){throw r}),0)}n.d(t,{z:()=>e})},9026:(r,t,n)=>{"use strict";n.d(t,{k:()=>e});var e=function(){return Array.isArray||function(r){return r&&"number"==typeof r.length}}()},4156:(r,t,n)=>{"use strict";function e(r){return"function"==typeof r}n.d(t,{m:()=>e})},2009:(r,t,n)=>{"use strict";function e(r){return null!==r&&"object"==typeof r}n.d(t,{K:()=>e})},5987:(r,t,n)=>{"use strict";n.d(t,{ZT:()=>s});var e=function(r,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n])})(r,t)};function s(r,t){function n(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}}]);