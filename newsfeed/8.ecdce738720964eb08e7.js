(globalThis.webpackChunkangular_module_federation=globalThis.webpackChunkangular_module_federation||[]).push([[8],{4379:(t,r,e)=>{"use strict";e.d(r,{y:()=>h});var n=e(979),o=e(3142),i=e(2174),u=e(5050),s=e(3608);function c(t){return 0===t.length?s.y:1===t.length?t[0]:function(r){return t.reduce((function(t,r){return r(t)}),r)}}var f=e(150),h=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(t,r,e){var u=this.operator,s=function(t,r,e){if(t){if(t instanceof n.L)return t;if(t[o.b])return t[o.b]()}return t||r||e?new n.L(t,r,e):new n.L(i.c)}(t,r,e);if(u?s.add(u.call(s,this.source)):s.add(this.source||f.v.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),f.v.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){f.v.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=r),function(t){for(;t;){var r=t,e=r.closed,o=r.destination,i=r.isStopped;if(e||i)return!1;t=o&&o instanceof n.L?o:null}return!0}(t)?t.error(r):console.warn(r)}},t.prototype.forEach=function(t,r){var e=this;return new(r=a(r))((function(r,n){var o;o=e.subscribe((function(r){try{t(r)}catch(t){n(t),o&&o.unsubscribe()}}),n,r)}))},t.prototype._subscribe=function(t){var r=this.source;return r&&r.subscribe(t)},t.prototype[u.L]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:c(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=a(t))((function(t,e){var n;r.subscribe((function(t){return n=t}),(function(t){return e(t)}),(function(){return t(n)}))}))},t.create=function(r){return new t(r)},t}();function a(t){if(t||(t=f.v.Promise||Promise),!t)throw new Error("no Promise impl found");return t}},5244:(t,r,e)=>{"use strict";e.d(r,{xQ:()=>a,Yc:()=>h});var n=e(5987),o=e(4379),i=e(979),u=e(3884),s=e(1016),c=function(t){function r(r,e){var n=t.call(this)||this;return n.subject=r,n.subscriber=e,n.closed=!1,n}return n.ZT(r,t),r.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,r=t.observers;if(this.subject=null,r&&0!==r.length&&!t.isStopped&&!t.closed){var e=r.indexOf(this.subscriber);-1!==e&&r.splice(e,1)}}},r}(u.w),f=e(3142),h=function(t){function r(r){var e=t.call(this,r)||this;return e.destination=r,e}return n.ZT(r,t),r}(i.L),a=function(t){function r(){var r=t.call(this)||this;return r.observers=[],r.closed=!1,r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return n.ZT(r,t),r.prototype[f.b]=function(){return new h(this)},r.prototype.lift=function(t){var r=new p(this,this);return r.operator=t,r},r.prototype.next=function(t){if(this.closed)throw new s.N;if(!this.isStopped)for(var r=this.observers,e=r.length,n=r.slice(),o=0;o<e;o++)n[o].next(t)},r.prototype.error=function(t){if(this.closed)throw new s.N;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var r=this.observers,e=r.length,n=r.slice(),o=0;o<e;o++)n[o].error(t);this.observers.length=0},r.prototype.complete=function(){if(this.closed)throw new s.N;this.isStopped=!0;for(var t=this.observers,r=t.length,e=t.slice(),n=0;n<r;n++)e[n].complete();this.observers.length=0},r.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},r.prototype._trySubscribe=function(r){if(this.closed)throw new s.N;return t.prototype._trySubscribe.call(this,r)},r.prototype._subscribe=function(t){if(this.closed)throw new s.N;return this.hasError?(t.error(this.thrownError),u.w.EMPTY):this.isStopped?(t.complete(),u.w.EMPTY):(this.observers.push(t),new c(this,t))},r.prototype.asObservable=function(){var t=new o.y;return t.source=this,t},r.create=function(t,r){return new p(t,r)},r}(o.y),p=function(t){function r(r,e){var n=t.call(this)||this;return n.destination=r,n.source=e,n}return n.ZT(r,t),r.prototype.next=function(t){var r=this.destination;r&&r.next&&r.next(t)},r.prototype.error=function(t){var r=this.destination;r&&r.error&&this.destination.error(t)},r.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},r.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):u.w.EMPTY},r}(a)},7604:(t,r,e)=>{"use strict";e.d(r,{IY:()=>s,Ds:()=>c,ft:()=>f});var n=e(5987),o=e(979),i=e(4379),u=e(7843),s=function(t){function r(r){var e=t.call(this)||this;return e.parent=r,e}return n.ZT(r,t),r.prototype._next=function(t){this.parent.notifyNext(t)},r.prototype._error=function(t){this.parent.notifyError(t),this.unsubscribe()},r.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},r}(o.L),c=(o.L,function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return n.ZT(r,t),r.prototype.notifyNext=function(t){this.destination.next(t)},r.prototype.notifyError=function(t){this.destination.error(t)},r.prototype.notifyComplete=function(){this.destination.complete()},r}(o.L));function f(t,r){if(!r.closed)return t instanceof i.y?t.subscribe(r):(0,u.s)(t)(r)}o.L},4072:(t,r,e)=>{"use strict";e.d(r,{D:()=>a});var n=e(4379),o=e(7843),i=e(3884),u=e(5050),s=e(3109),c=e(999),f=e(336),h=e(9217);function a(t,r){return r?function(t,r){if(null!=t){if(function(t){return t&&"function"==typeof t[u.L]}(t))return function(t,r){return new n.y((function(e){var n=new i.w;return n.add(r.schedule((function(){var o=t[u.L]();n.add(o.subscribe({next:function(t){n.add(r.schedule((function(){return e.next(t)})))},error:function(t){n.add(r.schedule((function(){return e.error(t)})))},complete:function(){n.add(r.schedule((function(){return e.complete()})))}}))}))),n}))}(t,r);if((0,f.t)(t))return function(t,r){return new n.y((function(e){var n=new i.w;return n.add(r.schedule((function(){return t.then((function(t){n.add(r.schedule((function(){e.next(t),n.add(r.schedule((function(){return e.complete()})))})))}),(function(t){n.add(r.schedule((function(){return e.error(t)})))}))}))),n}))}(t,r);if((0,h.z)(t))return(0,s.r)(t,r);if(function(t){return t&&"function"==typeof t[c.hZ]}(t)||"string"==typeof t)return function(t,r){if(!t)throw new Error("Iterable cannot be null");return new n.y((function(e){var n,o=new i.w;return o.add((function(){n&&"function"==typeof n.return&&n.return()})),o.add(r.schedule((function(){n=t[c.hZ](),o.add(r.schedule((function(){if(!e.closed){var t,r;try{var o=n.next();t=o.value,r=o.done}catch(t){return void e.error(t)}r?e.complete():(e.next(t),this.schedule())}})))}))),o}))}(t,r)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}(t,r):t instanceof n.y?t:new n.y((0,o.s)(t))}},3375:(t,r,e)=>{"use strict";e.d(r,{n:()=>u});var n=e(4379),o=e(6900),i=e(3109);function u(t,r){return r?(0,i.r)(t,r):new n.y((0,o.V)(t))}},2556:(t,r,e)=>{"use strict";e.d(r,{J:()=>i});var n=e(7746),o=e(3608);function i(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),(0,n.zg)(o.y,t)}},7746:(t,r,e)=>{"use strict";e.d(r,{zg:()=>s});var n=e(5987),o=e(5709),i=e(4072),u=e(7604);function s(t,r,e){return void 0===e&&(e=Number.POSITIVE_INFINITY),"function"==typeof r?function(n){return n.pipe(s((function(e,n){return(0,i.D)(t(e,n)).pipe((0,o.U)((function(t,o){return r(e,t,n,o)})))}),e))}:("number"==typeof r&&(e=r),function(r){return r.lift(new c(t,e))})}var c=function(){function t(t,r){void 0===r&&(r=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=r}return t.prototype.call=function(t,r){return r.subscribe(new f(t,this.project,this.concurrent))},t}(),f=function(t){function r(r,e,n){void 0===n&&(n=Number.POSITIVE_INFINITY);var o=t.call(this,r)||this;return o.project=e,o.concurrent=n,o.hasCompleted=!1,o.buffer=[],o.active=0,o.index=0,o}return n.ZT(r,t),r.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},r.prototype._tryNext=function(t){var r,e=this.index++;try{r=this.project(t,e)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(r)},r.prototype._innerSub=function(t){var r=new u.IY(this),e=this.destination;e.add(r);var n=(0,u.ft)(t,r);n!==r&&e.add(n)},r.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},r.prototype.notifyNext=function(t){this.destination.next(t)},r.prototype.notifyComplete=function(){var t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},r}(u.Ds)},3109:(t,r,e)=>{"use strict";e.d(r,{r:()=>i});var n=e(4379),o=e(3884);function i(t,r){return new n.y((function(e){var n=new o.w,i=0;return n.add(r.schedule((function(){i!==t.length?(e.next(t[i++]),e.closed||n.add(this.schedule())):e.complete()}))),n}))}},999:(t,r,e)=>{"use strict";function n(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}e.d(r,{hZ:()=>o});var o=n()},5050:(t,r,e)=>{"use strict";e.d(r,{L:()=>n});var n=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}()},1016:(t,r,e)=>{"use strict";e.d(r,{N:()=>n});var n=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}()},3608:(t,r,e)=>{"use strict";function n(t){return t}e.d(r,{y:()=>n})},9217:(t,r,e)=>{"use strict";e.d(r,{z:()=>n});var n=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t}},336:(t,r,e)=>{"use strict";function n(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}e.d(r,{t:()=>n})},7507:(t,r,e)=>{"use strict";function n(t){return t&&"function"==typeof t.schedule}e.d(r,{K:()=>n})},7843:(t,r,e)=>{"use strict";e.d(r,{s:()=>h});var n=e(6900),o=e(1644),i=e(999),u=e(5050),s=e(9217),c=e(336),f=e(2009),h=function(t){if(t&&"function"==typeof t[u.L])return h=t,function(t){var r=h[u.L]();if("function"!=typeof r.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return r.subscribe(t)};if((0,s.z)(t))return(0,n.V)(t);if((0,c.t)(t))return e=t,function(t){return e.then((function(r){t.closed||(t.next(r),t.complete())}),(function(r){return t.error(r)})).then(null,o.z),t};if(t&&"function"==typeof t[i.hZ])return r=t,function(t){for(var e=r[i.hZ]();;){var n=void 0;try{n=e.next()}catch(r){return t.error(r),t}if(n.done){t.complete();break}if(t.next(n.value),t.closed)break}return"function"==typeof e.return&&t.add((function(){e.return&&e.return()})),t};var r,e,h,a=(0,f.K)(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+a+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}},6900:(t,r,e)=>{"use strict";e.d(r,{V:()=>n});var n=function(t){return function(r){for(var e=0,n=t.length;e<n&&!r.closed;e++)r.next(t[e]);r.complete()}}}}]);