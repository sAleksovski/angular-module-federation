/*! For license information please see 8.c49982b69d0fbf14c955.js.LICENSE.txt */
(globalThis.webpackChunkangular_module_federation=globalThis.webpackChunkangular_module_federation||[]).push([[8],{4379:(t,r,n)=>{"use strict";n.d(r,{y:()=>h});var e=n(979),o=n(3142),i=n(2174),s=n(5050),u=n(3608);function c(t){return 0===t.length?u.y:1===t.length?t[0]:function(r){return t.reduce((function(t,r){return r(t)}),r)}}var a=n(150),h=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(r){var n=new t;return n.source=this,n.operator=r,n},t.prototype.subscribe=function(t,r,n){var s=this.operator,u=function(t,r,n){if(t){if(t instanceof e.L)return t;if(t[o.b])return t[o.b]()}return t||r||n?new e.L(t,r,n):new e.L(i.c)}(t,r,n);if(s?u.add(s.call(u,this.source)):u.add(this.source||a.v.useDeprecatedSynchronousErrorHandling&&!u.syncErrorThrowable?this._subscribe(u):this._trySubscribe(u)),a.v.useDeprecatedSynchronousErrorHandling&&u.syncErrorThrowable&&(u.syncErrorThrowable=!1,u.syncErrorThrown))throw u.syncErrorValue;return u},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){a.v.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=r),function(t){for(;t;){var r=t,n=r.closed,o=r.destination,i=r.isStopped;if(n||i)return!1;t=o&&o instanceof e.L?o:null}return!0}(t)?t.error(r):console.warn(r)}},t.prototype.forEach=function(t,r){var n=this;return new(r=f(r))((function(r,e){var o;o=n.subscribe((function(r){try{t(r)}catch(t){e(t),o&&o.unsubscribe()}}),e,r)}))},t.prototype._subscribe=function(t){var r=this.source;return r&&r.subscribe(t)},t.prototype[s.L]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:c(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=f(t))((function(t,n){var e;r.subscribe((function(t){return e=t}),(function(t){return n(t)}),(function(){return t(e)}))}))},t.create=function(r){return new t(r)},t}();function f(t){if(t||(t=a.v.Promise||Promise),!t)throw new Error("no Promise impl found");return t}},2174:(t,r,n)=>{"use strict";n.d(r,{c:()=>i});var e=n(150),o=n(1644),i={closed:!0,next:function(t){},error:function(t){if(e.v.useDeprecatedSynchronousErrorHandling)throw t;(0,o.z)(t)},complete:function(){}}},5244:(t,r,n)=>{"use strict";n.d(r,{xQ:()=>f,Yc:()=>h});var e=n(5987),o=n(4379),i=n(979),s=n(3884),u=n(1016),c=function(t){function r(r,n){var e=t.call(this)||this;return e.subject=r,e.subscriber=n,e.closed=!1,e}return e.ZT(r,t),r.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,r=t.observers;if(this.subject=null,r&&0!==r.length&&!t.isStopped&&!t.closed){var n=r.indexOf(this.subscriber);-1!==n&&r.splice(n,1)}}},r}(s.w),a=n(3142),h=function(t){function r(r){var n=t.call(this,r)||this;return n.destination=r,n}return e.ZT(r,t),r}(i.L),f=function(t){function r(){var r=t.call(this)||this;return r.observers=[],r.closed=!1,r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return e.ZT(r,t),r.prototype[a.b]=function(){return new h(this)},r.prototype.lift=function(t){var r=new p(this,this);return r.operator=t,r},r.prototype.next=function(t){if(this.closed)throw new u.N;if(!this.isStopped)for(var r=this.observers,n=r.length,e=r.slice(),o=0;o<n;o++)e[o].next(t)},r.prototype.error=function(t){if(this.closed)throw new u.N;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var r=this.observers,n=r.length,e=r.slice(),o=0;o<n;o++)e[o].error(t);this.observers.length=0},r.prototype.complete=function(){if(this.closed)throw new u.N;this.isStopped=!0;for(var t=this.observers,r=t.length,n=t.slice(),e=0;e<r;e++)n[e].complete();this.observers.length=0},r.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},r.prototype._trySubscribe=function(r){if(this.closed)throw new u.N;return t.prototype._trySubscribe.call(this,r)},r.prototype._subscribe=function(t){if(this.closed)throw new u.N;return this.hasError?(t.error(this.thrownError),s.w.EMPTY):this.isStopped?(t.complete(),s.w.EMPTY):(this.observers.push(t),new c(this,t))},r.prototype.asObservable=function(){var t=new o.y;return t.source=this,t},r.create=function(t,r){return new p(t,r)},r}(o.y),p=function(t){function r(r,n){var e=t.call(this)||this;return e.destination=r,e.source=n,e}return e.ZT(r,t),r.prototype.next=function(t){var r=this.destination;r&&r.next&&r.next(t)},r.prototype.error=function(t){var r=this.destination;r&&r.error&&this.destination.error(t)},r.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},r.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):s.w.EMPTY},r}(f)},979:(t,r,n)=>{"use strict";n.d(r,{L:()=>h});var e=n(5987),o=n(4156),i=n(2174),s=n(3884),u=n(3142),c=n(150),a=n(1644),h=function(t){function r(n,e,o){var s=t.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=i.c;break;case 1:if(!n){s.destination=i.c;break}if("object"==typeof n){n instanceof r?(s.syncErrorThrowable=n.syncErrorThrowable,s.destination=n,n.add(s)):(s.syncErrorThrowable=!0,s.destination=new f(s,n));break}default:s.syncErrorThrowable=!0,s.destination=new f(s,n,e,o)}return s}return e.ZT(r,t),r.prototype[u.b]=function(){return this},r.create=function(t,n,e){var o=new r(t,n,e);return o.syncErrorThrowable=!1,o},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},r}(s.w),f=function(t){function r(r,n,e,s){var u,c=t.call(this)||this;c._parentSubscriber=r;var a=c;return(0,o.m)(n)?u=n:n&&(u=n.next,e=n.error,s=n.complete,n!==i.c&&(a=Object.create(n),(0,o.m)(a.unsubscribe)&&c.add(a.unsubscribe.bind(a)),a.unsubscribe=c.unsubscribe.bind(c))),c._context=a,c._next=u,c._error=e,c._complete=s,c}return e.ZT(r,t),r.prototype.next=function(t){if(!this.isStopped&&this._next){var r=this._parentSubscriber;c.v.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?this.__tryOrSetError(r,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},r.prototype.error=function(t){if(!this.isStopped){var r=this._parentSubscriber,n=c.v.useDeprecatedSynchronousErrorHandling;if(this._error)n&&r.syncErrorThrowable?(this.__tryOrSetError(r,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(r.syncErrorThrowable)n?(r.syncErrorValue=t,r.syncErrorThrown=!0):(0,a.z)(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;(0,a.z)(t)}}},r.prototype.complete=function(){var t=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};c.v.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?(this.__tryOrSetError(r,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},r.prototype.__tryOrUnsub=function(t,r){try{t.call(this._context,r)}catch(t){if(this.unsubscribe(),c.v.useDeprecatedSynchronousErrorHandling)throw t;(0,a.z)(t)}},r.prototype.__tryOrSetError=function(t,r,n){if(!c.v.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{r.call(this._context,n)}catch(r){return c.v.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):((0,a.z)(r),!0)}return!1},r.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},r}(h)},3884:(t,r,n)=>{"use strict";n.d(r,{w:()=>u});var e=n(9026),o=n(2009),i=n(4156),s=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),u=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}var r;return t.prototype.unsubscribe=function(){var r;if(!this.closed){var n=this,u=n._parentOrParents,a=n._ctorUnsubscribe,h=n._unsubscribe,f=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,u instanceof t)u.remove(this);else if(null!==u)for(var p=0;p<u.length;++p)u[p].remove(this);if((0,i.m)(h)){a&&(this._unsubscribe=void 0);try{h.call(this)}catch(t){r=t instanceof s?c(t.errors):[t]}}if((0,e.k)(f)){p=-1;for(var l=f.length;++p<l;){var b=f[p];if((0,o.K)(b))try{b.unsubscribe()}catch(t){r=r||[],t instanceof s?r=r.concat(c(t.errors)):r.push(t)}}}if(r)throw new s(r)}},t.prototype.add=function(r){var n=r;if(!r)return t.EMPTY;switch(typeof r){case"function":n=new t(r);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var e=n;(n=new t)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof t){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},t.prototype.remove=function(t){var r=this._subscriptions;if(r){var n=r.indexOf(t);-1!==n&&r.splice(n,1)}},t.EMPTY=((r=new t).closed=!0,r),t}();function c(t){return t.reduce((function(t,r){return t.concat(r instanceof s?r.errors:r)}),[])}},150:(t,r,n)=>{"use strict";n.d(r,{v:()=>o});var e=!1,o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack,e=t},get useDeprecatedSynchronousErrorHandling(){return e}}},7604:(t,r,n)=>{"use strict";n.d(r,{IY:()=>u,Ds:()=>c,ft:()=>a});var e=n(5987),o=n(979),i=n(4379),s=n(7843),u=function(t){function r(r){var n=t.call(this)||this;return n.parent=r,n}return e.ZT(r,t),r.prototype._next=function(t){this.parent.notifyNext(t)},r.prototype._error=function(t){this.parent.notifyError(t),this.unsubscribe()},r.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},r}(o.L),c=(o.L,function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e.ZT(r,t),r.prototype.notifyNext=function(t){this.destination.next(t)},r.prototype.notifyError=function(t){this.destination.error(t)},r.prototype.notifyComplete=function(){this.destination.complete()},r}(o.L));function a(t,r){if(!r.closed)return t instanceof i.y?t.subscribe(r):(0,s.s)(t)(r)}o.L},4072:(t,r,n)=>{"use strict";n.d(r,{D:()=>f});var e=n(4379),o=n(7843),i=n(3884),s=n(5050),u=n(3109),c=n(999),a=n(336),h=n(9217);function f(t,r){return r?function(t,r){if(null!=t){if(function(t){return t&&"function"==typeof t[s.L]}(t))return function(t,r){return new e.y((function(n){var e=new i.w;return e.add(r.schedule((function(){var o=t[s.L]();e.add(o.subscribe({next:function(t){e.add(r.schedule((function(){return n.next(t)})))},error:function(t){e.add(r.schedule((function(){return n.error(t)})))},complete:function(){e.add(r.schedule((function(){return n.complete()})))}}))}))),e}))}(t,r);if((0,a.t)(t))return function(t,r){return new e.y((function(n){var e=new i.w;return e.add(r.schedule((function(){return t.then((function(t){e.add(r.schedule((function(){n.next(t),e.add(r.schedule((function(){return n.complete()})))})))}),(function(t){e.add(r.schedule((function(){return n.error(t)})))}))}))),e}))}(t,r);if((0,h.z)(t))return(0,u.r)(t,r);if(function(t){return t&&"function"==typeof t[c.hZ]}(t)||"string"==typeof t)return function(t,r){if(!t)throw new Error("Iterable cannot be null");return new e.y((function(n){var e,o=new i.w;return o.add((function(){e&&"function"==typeof e.return&&e.return()})),o.add(r.schedule((function(){e=t[c.hZ](),o.add(r.schedule((function(){if(!n.closed){var t,r;try{var o=e.next();t=o.value,r=o.done}catch(t){return void n.error(t)}r?n.complete():(n.next(t),this.schedule())}})))}))),o}))}(t,r)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}(t,r):t instanceof e.y?t:new e.y((0,o.s)(t))}},3375:(t,r,n)=>{"use strict";n.d(r,{n:()=>s});var e=n(4379),o=n(6900),i=n(3109);function s(t,r){return r?(0,i.r)(t,r):new e.y((0,o.V)(t))}},5709:(t,r,n)=>{"use strict";n.d(r,{U:()=>i});var e=n(5987),o=n(979);function i(t,r){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new s(t,r))}}var s=function(){function t(t,r){this.project=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new u(t,this.project,this.thisArg))},t}(),u=function(t){function r(r,n,e){var o=t.call(this,r)||this;return o.project=n,o.count=0,o.thisArg=e||o,o}return e.ZT(r,t),r.prototype._next=function(t){var r;try{r=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(r)},r}(o.L)},2556:(t,r,n)=>{"use strict";n.d(r,{J:()=>i});var e=n(7746),o=n(3608);function i(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),(0,e.zg)(o.y,t)}},7746:(t,r,n)=>{"use strict";n.d(r,{zg:()=>u});var e=n(5987),o=n(5709),i=n(4072),s=n(7604);function u(t,r,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),"function"==typeof r?function(e){return e.pipe(u((function(n,e){return(0,i.D)(t(n,e)).pipe((0,o.U)((function(t,o){return r(n,t,e,o)})))}),n))}:("number"==typeof r&&(n=r),function(r){return r.lift(new c(t,n))})}var c=function(){function t(t,r){void 0===r&&(r=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=r}return t.prototype.call=function(t,r){return r.subscribe(new a(t,this.project,this.concurrent))},t}(),a=function(t){function r(r,n,e){void 0===e&&(e=Number.POSITIVE_INFINITY);var o=t.call(this,r)||this;return o.project=n,o.concurrent=e,o.hasCompleted=!1,o.buffer=[],o.active=0,o.index=0,o}return e.ZT(r,t),r.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},r.prototype._tryNext=function(t){var r,n=this.index++;try{r=this.project(t,n)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(r)},r.prototype._innerSub=function(t){var r=new s.IY(this),n=this.destination;n.add(r);var e=(0,s.ft)(t,r);e!==r&&n.add(e)},r.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},r.prototype.notifyNext=function(t){this.destination.next(t)},r.prototype.notifyComplete=function(){var t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},r}(s.Ds)},3109:(t,r,n)=>{"use strict";n.d(r,{r:()=>i});var e=n(4379),o=n(3884);function i(t,r){return new e.y((function(n){var e=new o.w,i=0;return e.add(r.schedule((function(){i!==t.length?(n.next(t[i++]),n.closed||e.add(this.schedule())):n.complete()}))),e}))}},999:(t,r,n)=>{"use strict";function e(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}n.d(r,{hZ:()=>o});var o=e()},5050:(t,r,n)=>{"use strict";n.d(r,{L:()=>e});var e=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}()},3142:(t,r,n)=>{"use strict";n.d(r,{b:()=>e});var e=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}()},1016:(t,r,n)=>{"use strict";n.d(r,{N:()=>e});var e=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}()},1644:(t,r,n)=>{"use strict";function e(t){setTimeout((function(){throw t}),0)}n.d(r,{z:()=>e})},3608:(t,r,n)=>{"use strict";function e(t){return t}n.d(r,{y:()=>e})},9026:(t,r,n)=>{"use strict";n.d(r,{k:()=>e});var e=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}()},9217:(t,r,n)=>{"use strict";n.d(r,{z:()=>e});var e=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t}},4156:(t,r,n)=>{"use strict";function e(t){return"function"==typeof t}n.d(r,{m:()=>e})},2009:(t,r,n)=>{"use strict";function e(t){return null!==t&&"object"==typeof t}n.d(r,{K:()=>e})},336:(t,r,n)=>{"use strict";function e(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}n.d(r,{t:()=>e})},7507:(t,r,n)=>{"use strict";function e(t){return t&&"function"==typeof t.schedule}n.d(r,{K:()=>e})},7843:(t,r,n)=>{"use strict";n.d(r,{s:()=>h});var e=n(6900),o=n(1644),i=n(999),s=n(5050),u=n(9217),c=n(336),a=n(2009),h=function(t){if(t&&"function"==typeof t[s.L])return h=t,function(t){var r=h[s.L]();if("function"!=typeof r.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return r.subscribe(t)};if((0,u.z)(t))return(0,e.V)(t);if((0,c.t)(t))return n=t,function(t){return n.then((function(r){t.closed||(t.next(r),t.complete())}),(function(r){return t.error(r)})).then(null,o.z),t};if(t&&"function"==typeof t[i.hZ])return r=t,function(t){for(var n=r[i.hZ]();;){var e=void 0;try{e=n.next()}catch(r){return t.error(r),t}if(e.done){t.complete();break}if(t.next(e.value),t.closed)break}return"function"==typeof n.return&&t.add((function(){n.return&&n.return()})),t};var r,n,h,f=(0,a.K)(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+f+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}},6900:(t,r,n)=>{"use strict";n.d(r,{V:()=>e});var e=function(t){return function(r){for(var n=0,e=t.length;n<e&&!r.closed;n++)r.next(t[n]);r.complete()}}},5987:(t,r,n)=>{"use strict";n.d(r,{ZT:()=>o});var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(t,r)};function o(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}}]);