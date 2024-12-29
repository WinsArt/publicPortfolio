var pw=Object.defineProperty,mw=Object.defineProperties;var gw=Object.getOwnPropertyDescriptors;var ov=Object.getOwnPropertySymbols;var vw=Object.prototype.hasOwnProperty,yw=Object.prototype.propertyIsEnumerable;var av=(n,e,t)=>e in n?pw(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Le=(n,e)=>{for(var t in e||={})vw.call(e,t)&&av(n,t,e[t]);if(ov)for(var t of ov(e))yw.call(e,t)&&av(n,t,e[t]);return n},Pt=(n,e)=>mw(n,gw(e));var Ss=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function cv(n,e){return Object.is(n,e)}var qt=null,jc=!1,If=1,ws=Symbol("SIGNAL");function wt(n){let e=qt;return qt=n,e}function lv(){return qt}var $c={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function uv(n){if(jc)throw new Error("");if(qt===null)return;qt.consumerOnSignalRead(n);let e=qt.nextProducerIndex++;if(Xc(qt),e<qt.producerNode.length&&qt.producerNode[e]!==n&&Xo(qt)){let t=qt.producerNode[e];qc(t,qt.producerIndexOfThis[e])}qt.producerNode[e]!==n&&(qt.producerNode[e]=n,qt.producerIndexOfThis[e]=Xo(qt)?pv(n,qt,e):0),qt.producerLastReadVersion[e]=n.version}function _w(){If++}function dv(n){if(!(Xo(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===If)){if(!n.producerMustRecompute(n)&&!Nf(n)){Af(n);return}n.producerRecomputeValue(n),Af(n)}}function fv(n){if(n.liveConsumerNode===void 0)return;let e=jc;jc=!0;try{for(let t of n.liveConsumerNode)t.dirty||Mw(t)}finally{jc=e}}function xw(){return qt?.consumerAllowSignalWrites!==!1}function Mw(n){n.dirty=!0,fv(n),n.consumerMarkedDirty?.(n)}function Af(n){n.dirty=!1,n.lastCleanEpoch=If}function Rf(n){return n&&(n.nextProducerIndex=0),wt(n)}function hv(n,e){if(wt(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Xo(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)qc(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Nf(n){Xc(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(dv(t),i!==t.version))return!0}return!1}function Pf(n){if(Xc(n),Xo(n))for(let e=0;e<n.producerNode.length;e++)qc(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function pv(n,e,t){if(mv(n),n.liveConsumerNode.length===0&&gv(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=pv(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function qc(n,e){if(mv(n),n.liveConsumerNode.length===1&&gv(n))for(let i=0;i<n.producerNode.length;i++)qc(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Xc(r),r.producerIndexOfThis[i]=e}}function Xo(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Xc(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function mv(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function gv(n){return n.producerNode!==void 0}function Sw(){throw new Error}var vv=Sw;function ww(){vv()}function yv(n){vv=n}var Ew=null;function _v(n,e){xw()||ww(),n.equal(n.value,e)||(n.value=e,bw(n))}var xv=Pt(Le({},$c),{equal:cv,value:void 0});function bw(n){n.version++,_w(),fv(n),Ew?.()}function rt(n){return typeof n=="function"}function Es(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Zc=Es(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Zo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Wt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(rt(i))try{i()}catch(s){e=s instanceof Zc?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Mv(s)}catch(o){e=e??[],o instanceof Zc?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Zc(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Mv(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Zo(t,e)}remove(e){let{_finalizers:t}=this;t&&Zo(t,e),e instanceof n&&e._removeParent(this)}};Wt.EMPTY=(()=>{let n=new Wt;return n.closed=!0,n})();var Of=Wt.EMPTY;function Yc(n){return n instanceof Wt||n&&"closed"in n&&rt(n.remove)&&rt(n.add)&&rt(n.unsubscribe)}function Mv(n){rt(n)?n():n.unsubscribe()}var jn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var bs={setTimeout(n,e,...t){let{delegate:i}=bs;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=bs;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Jc(n){bs.setTimeout(()=>{let{onUnhandledError:e}=jn;if(e)e(n);else throw n})}function Yo(){}var Sv=Lf("C",void 0,void 0);function wv(n){return Lf("E",void 0,n)}function Ev(n){return Lf("N",n,void 0)}function Lf(n,e,t){return{kind:n,value:e,error:t}}var Rr=null;function Cs(n){if(jn.useDeprecatedSynchronousErrorHandling){let e=!Rr;if(e&&(Rr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Rr;if(Rr=null,t)throw i}}else n()}function bv(n){jn.useDeprecatedSynchronousErrorHandling&&Rr&&(Rr.errorThrown=!0,Rr.error=n)}var Nr=class extends Wt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Yc(e)&&e.add(this)):this.destination=Dw}static create(e,t,i){return new Ts(e,t,i)}next(e){this.isStopped?Uf(Ev(e),this):this._next(e)}error(e){this.isStopped?Uf(wv(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Uf(Sv,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Cw=Function.prototype.bind;function Ff(n,e){return Cw.call(n,e)}var kf=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Kc(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Kc(i)}else Kc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Kc(t)}}},Ts=class extends Nr{constructor(e,t,i){super();let r;if(rt(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&jn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Ff(e.next,s),error:e.error&&Ff(e.error,s),complete:e.complete&&Ff(e.complete,s)}):r=e}this.destination=new kf(r)}};function Kc(n){jn.useDeprecatedSynchronousErrorHandling?bv(n):Jc(n)}function Tw(n){throw n}function Uf(n,e){let{onStoppedNotification:t}=jn;t&&bs.setTimeout(()=>t(n,e))}var Dw={closed:!0,next:Yo,error:Tw,complete:Yo};var Ds=typeof Symbol=="function"&&Symbol.observable||"@@observable";function xn(n){return n}function Bf(...n){return Vf(n)}function Vf(n){return n.length===0?xn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var Dt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=Iw(t)?t:new Ts(t,i,r);return Cs(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Cv(i),new i((r,s)=>{let o=new Ts({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Ds](){return this}pipe(...t){return Vf(t)(this)}toPromise(t){return t=Cv(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Cv(n){var e;return(e=n??jn.Promise)!==null&&e!==void 0?e:Promise}function Aw(n){return n&&rt(n.next)&&rt(n.error)&&rt(n.complete)}function Iw(n){return n&&n instanceof Nr||Aw(n)&&Yc(n)}function zf(n){return rt(n?.lift)}function yt(n){return e=>{if(zf(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function _t(n,e,t,i,r){return new Hf(n,e,t,i,r)}var Hf=class extends Nr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function As(){return yt((n,e)=>{let t=null;n._refCount++;let i=_t(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var Is=class extends Dt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,zf(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Wt;let t=this.getSubject();e.add(this.source.subscribe(_t(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Wt.EMPTY)}return e}refCount(){return As()(this)}};var Tv=Es(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var en=(()=>{class n extends Dt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Qc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Tv}next(t){Cs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Cs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Cs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Of:(this.currentObservers=null,s.push(t),new Wt(()=>{this.currentObservers=null,Zo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new Dt;return t.source=this,t}}return n.create=(e,t)=>new Qc(e,t),n})(),Qc=class extends en{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Of}};var tn=class extends en{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Mn=new Dt(n=>n.complete());function Dv(n){return n&&rt(n.schedule)}function Av(n){return n[n.length-1]}function Iv(n){return rt(Av(n))?n.pop():void 0}function rr(n){return Dv(Av(n))?n.pop():void 0}function Nv(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Rv(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Pr(n){return this instanceof Pr?(this.v=n,this):new Pr(n)}function Pv(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(y){return Promise.resolve(y).then(p,d)}}function a(p,y){i[p]&&(r[p]=function(_){return new Promise(function(v,m){s.push([p,_,v,m])>1||c(p,_)})},y&&(r[p]=y(r[p])))}function c(p,y){try{l(i[p](y))}catch(_){f(s[0][3],_)}}function l(p){p.value instanceof Pr?Promise.resolve(p.value.v).then(u,d):f(s[0][2],p)}function u(p){c("next",p)}function d(p){c("throw",p)}function f(p,y){p(y),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Ov(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Rv=="function"?Rv(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var el=n=>n&&typeof n.length=="number"&&typeof n!="function";function tl(n){return rt(n?.then)}function nl(n){return rt(n[Ds])}function il(n){return Symbol.asyncIterator&&rt(n?.[Symbol.asyncIterator])}function rl(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Rw(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var sl=Rw();function ol(n){return rt(n?.[sl])}function al(n){return Pv(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Pr(t.read());if(r)return yield Pr(void 0);yield yield Pr(i)}}finally{t.releaseLock()}})}function cl(n){return rt(n?.getReader)}function Jt(n){if(n instanceof Dt)return n;if(n!=null){if(nl(n))return Nw(n);if(el(n))return Pw(n);if(tl(n))return Ow(n);if(il(n))return Lv(n);if(ol(n))return Lw(n);if(cl(n))return Fw(n)}throw rl(n)}function Nw(n){return new Dt(e=>{let t=n[Ds]();if(rt(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Pw(n){return new Dt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function Ow(n){return new Dt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Jc)})}function Lw(n){return new Dt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Lv(n){return new Dt(e=>{Uw(n,e).catch(t=>e.error(t))})}function Fw(n){return Lv(al(n))}function Uw(n,e){var t,i,r,s;return Nv(this,void 0,void 0,function*(){try{for(t=Ov(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function hn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function ll(n,e=0){return yt((t,i)=>{t.subscribe(_t(i,r=>hn(i,n,()=>i.next(r),e),()=>hn(i,n,()=>i.complete(),e),r=>hn(i,n,()=>i.error(r),e)))})}function ul(n,e=0){return yt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Fv(n,e){return Jt(n).pipe(ul(e),ll(e))}function Uv(n,e){return Jt(n).pipe(ul(e),ll(e))}function kv(n,e){return new Dt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Bv(n,e){return new Dt(t=>{let i;return hn(t,e,()=>{i=n[sl](),hn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>rt(i?.return)&&i.return()})}function dl(n,e){if(!n)throw new Error("Iterable cannot be null");return new Dt(t=>{hn(t,e,()=>{let i=n[Symbol.asyncIterator]();hn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Vv(n,e){return dl(al(n),e)}function zv(n,e){if(n!=null){if(nl(n))return Fv(n,e);if(el(n))return kv(n,e);if(tl(n))return Uv(n,e);if(il(n))return dl(n,e);if(ol(n))return Bv(n,e);if(cl(n))return Vv(n,e)}throw rl(n)}function Ht(n,e){return e?zv(n,e):Jt(n)}function Je(...n){let e=rr(n);return Ht(n,e)}function Rs(n,e){let t=rt(n)?n:()=>n,i=r=>r.error(t());return new Dt(e?r=>e.schedule(i,0,r):i)}function Gf(n){return!!n&&(n instanceof Dt||rt(n.lift)&&rt(n.subscribe))}var Ci=Es(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function vt(n,e){return yt((t,i)=>{let r=0;t.subscribe(_t(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:kw}=Array;function Bw(n,e){return kw(e)?n(...e):n(e)}function Hv(n){return vt(e=>Bw(n,e))}var{isArray:Vw}=Array,{getPrototypeOf:zw,prototype:Hw,keys:Gw}=Object;function Gv(n){if(n.length===1){let e=n[0];if(Vw(e))return{args:e,keys:null};if(Ww(e)){let t=Gw(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function Ww(n){return n&&typeof n=="object"&&zw(n)===Hw}function Wv(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Jo(...n){let e=rr(n),t=Iv(n),{args:i,keys:r}=Gv(n);if(i.length===0)return Ht([],e);let s=new Dt(jw(i,e,r?o=>Wv(r,o):xn));return t?s.pipe(Hv(t)):s}function jw(n,e,t=xn){return i=>{jv(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)jv(e,()=>{let l=Ht(n[c],e),u=!1;l.subscribe(_t(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function jv(n,e,t){n?hn(t,n,e):e()}function $v(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},p=_=>l<i?y(_):c.push(_),y=_=>{s&&e.next(_),l++;let v=!1;Jt(t(_,u++)).subscribe(_t(e,m=>{r?.(m),s?p(m):e.next(m)},()=>{v=!0},void 0,()=>{if(v)try{for(l--;c.length&&l<i;){let m=c.shift();o?hn(e,o,()=>y(m)):y(m)}f()}catch(m){e.error(m)}}))};return n.subscribe(_t(e,p,()=>{d=!0,f()})),()=>{a?.()}}function jt(n,e,t=1/0){return rt(e)?jt((i,r)=>vt((s,o)=>e(i,s,r,o))(Jt(n(i,r))),t):(typeof e=="number"&&(t=e),yt((i,r)=>$v(i,r,n,t)))}function Ns(n=1/0){return jt(xn,n)}function qv(){return Ns(1)}function Ps(...n){return qv()(Ht(n,rr(n)))}function fl(n){return new Dt(e=>{Jt(n()).subscribe(e)})}function On(n,e){return yt((t,i)=>{let r=0;t.subscribe(_t(i,s=>n.call(e,s,r++)&&i.next(s)))})}function sr(n){return yt((e,t)=>{let i=null,r=!1,s;i=e.subscribe(_t(t,void 0,void 0,o=>{s=Jt(n(o,sr(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Xv(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(_t(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function Or(n,e){return rt(e)?jt(n,e,1):jt(n,1)}function or(n){return yt((e,t)=>{let i=!1;e.subscribe(_t(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Ti(n){return n<=0?()=>Mn:yt((e,t)=>{let i=0;e.subscribe(_t(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Wf(n){return vt(()=>n)}function hl(n=$w){return yt((e,t)=>{let i=!1;e.subscribe(_t(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function $w(){return new Ci}function Ko(n){return yt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Di(n,e){let t=arguments.length>=2;return i=>i.pipe(n?On((r,s)=>n(r,s,i)):xn,Ti(1),t?or(e):hl(()=>new Ci))}function Os(n){return n<=0?()=>Mn:yt((e,t)=>{let i=[];e.subscribe(_t(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function jf(n,e){let t=arguments.length>=2;return i=>i.pipe(n?On((r,s)=>n(r,s,i)):xn,Os(1),t?or(e):hl(()=>new Ci))}function $f(n,e){return yt(Xv(n,e,arguments.length>=2,!0))}function qf(...n){let e=rr(n);return yt((t,i)=>{(e?Ps(n,t,e):Ps(n,t)).subscribe(i)})}function Ln(n,e){return yt((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(_t(i,c=>{r?.unsubscribe();let l=0,u=s++;Jt(n(c,u)).subscribe(r=_t(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Xf(n){return yt((e,t)=>{Jt(n).subscribe(_t(t,()=>t.complete(),Yo)),!t.closed&&e.subscribe(t)})}function nn(n,e,t){let i=rt(n)||e||t?{next:n,error:e,complete:t}:n;return i?yt((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(_t(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):xn}var Ye=class extends Error{code;constructor(e,t){super($h(e,t)),this.code=e}};function $h(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var Ny=Symbol("InputSignalNode#UNSET"),qw=Pt(Le({},xv),{transformFn:void 0,applyValueToInputSignal(n,e){_v(n,e)}});function Py(n,e){let t=Object.create(qw);t.value=n,t.transformFn=e?.transform;function i(){if(uv(t),t.value===Ny)throw new Ye(-950,!1);return t.value}return i[ws]=t,i}function la(n){return{toString:n}.toString()}var pl="__parameters__";function Xw(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function Oy(n,e,t){return la(()=>{let i=Xw(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(pl)?c[pl]:Object.defineProperty(c,pl,{value:[]})[pl];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function At(n){for(let e in n)if(n[e]===At)return e;throw Error("Could not find renamed property on target object.")}function wn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(wn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Zv(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var Zw=At({__forward_ref__:At});function Ly(n){return n.__forward_ref__=Ly,n.toString=function(){return wn(this())},n}function Un(n){return Fy(n)?n():n}function Fy(n){return typeof n=="function"&&n.hasOwnProperty(Zw)&&n.__forward_ref__===Ly}function Ze(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function zl(n){return{providers:n.providers||[],imports:n.imports||[]}}function Hl(n){return Yv(n,ky)||Yv(n,By)}function Uy(n){return Hl(n)!==null}function Yv(n,e){return n.hasOwnProperty(e)?n[e]:null}function Yw(n){let e=n&&(n[ky]||n[By]);return e||null}function Jv(n){return n&&(n.hasOwnProperty(Kv)||n.hasOwnProperty(Jw))?n[Kv]:null}var ky=At({\u0275prov:At}),Kv=At({\u0275inj:At}),By=At({ngInjectableDef:At}),Jw=At({ngInjectorDef:At}),et=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ze({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Vy(n){return n&&!!n.\u0275providers}var Kw=At({\u0275cmp:At}),Qw=At({\u0275dir:At}),eE=At({\u0275pipe:At}),tE=At({\u0275mod:At}),Sl=At({\u0275fac:At}),ta=At({__NG_ELEMENT_ID__:At}),Qv=At({__NG_ENV_ID__:At});function nE(n){return typeof n=="string"?n:n==null?"":String(n)}function iE(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():nE(n)}function rE(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Ye(-200,n)}function qh(n,e){throw new Ye(-201,!1)}var ft=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(ft||{}),nh;function zy(){return nh}function Fn(n){let e=nh;return nh=n,e}function Hy(n,e,t){let i=Hl(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&ft.Optional)return null;if(e!==void 0)return e;qh(n,"Injector")}var sE={},na=sE,ih="__NG_DI_FLAG__",wl="ngTempTokenPath",oE="ngTokenPath",aE=/\n/gm,cE="\u0275",ey="__source",Bs;function lE(){return Bs}function ar(n){let e=Bs;return Bs=n,e}function uE(n,e=ft.Default){if(Bs===void 0)throw new Ye(-203,!1);return Bs===null?Hy(n,void 0,e):Bs.get(n,e&ft.Optional?null:void 0,e)}function st(n,e=ft.Default){return(zy()||uE)(Un(n),e)}function _e(n,e=ft.Default){return st(n,Gl(e))}function Gl(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function rh(n){let e=[];for(let t=0;t<n.length;t++){let i=Un(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ye(900,!1);let r,s=ft.Default;for(let o=0;o<i.length;o++){let a=i[o],c=dE(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(st(r,s))}else e.push(st(i))}return e}function Gy(n,e){return n[ih]=e,n.prototype[ih]=e,n}function dE(n){return n[ih]}function fE(n,e,t,i){let r=n[wl];throw e[ey]&&r.unshift(e[ey]),n.message=hE(`
`+n.message,r,t,i),n[oE]=r,n[wl]=null,n}function hE(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==cE?n.slice(2):n;let r=wn(e);if(Array.isArray(e))r=e.map(wn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):wn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(aE,`
  `)}`}var Xh=Gy(Oy("Optional"),8);var Wy=Gy(Oy("SkipSelf"),4);function zs(n,e){let t=n.hasOwnProperty(Sl);return t?n[Sl]:null}function pE(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function mE(n){return n.flat(Number.POSITIVE_INFINITY)}function Zh(n,e){n.forEach(t=>Array.isArray(t)?Zh(t,e):e(t))}function jy(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function El(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var ia={},si=[],Hs=new et(""),$y=new et("",-1),qy=new et(""),bl=class{get(e,t=na){if(t===na){let i=new Error(`NullInjectorError: No provider for ${wn(e)}!`);throw i.name="NullInjectorError",i}return t}};function Xy(n,e){let t=n[tE]||null;if(!t&&e===!0)throw new Error(`Type ${wn(n)} does not have '\u0275mod' property.`);return t}function lr(n){return n[Kw]||null}function Zy(n){return n[Qw]||null}function Yy(n){return n[eE]||null}function Jy(n){let e=lr(n)||Zy(n)||Yy(n);return e!==null?e.standalone:!1}function Yh(n){return{\u0275providers:n}}function gE(...n){return{\u0275providers:Ky(!0,n),\u0275fromNgModule:!0}}function Ky(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Zh(e,o=>{let a=o;sh(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Qy(r,s),t}function Qy(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Jh(r,s=>{e(s,i)})}}function sh(n,e,t,i){if(n=Un(n),!n)return!1;let r=null,s=Jv(n),o=!s&&lr(n);if(!s&&!o){let c=n.ngModule;if(s=Jv(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)sh(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Zh(s.imports,u=>{sh(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Qy(l,e)}if(!a){let l=zs(r)||(()=>new r);e({provide:r,useFactory:l,deps:si},r),e({provide:qy,useValue:r,multi:!0},r),e({provide:Hs,useValue:()=>st(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Jh(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Jh(n,e){for(let t of n)Vy(t)&&(t=t.\u0275providers),Array.isArray(t)?Jh(t,e):e(t)}var vE=At({provide:String,useValue:At});function e0(n){return n!==null&&typeof n=="object"&&vE in n}function yE(n){return!!(n&&n.useExisting)}function _E(n){return!!(n&&n.useFactory)}function oh(n){return typeof n=="function"}var Wl=new et(""),gl={},xE={},Zf;function Kh(){return Zf===void 0&&(Zf=new bl),Zf}var Cn=class{},ra=class extends Cn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,ch(e,o=>this.processProvider(o)),this.records.set($y,Ls(void 0,this)),r.has("environment")&&this.records.set(Cn,Ls(void 0,this));let s=this.records.get(Wl);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(qy,si,ft.Self))}destroy(){Qo(this),this._destroyed=!0;let e=wt(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),wt(e)}}onDestroy(e){return Qo(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Qo(this);let t=ar(this),i=Fn(void 0),r;try{return e()}finally{ar(t),Fn(i)}}get(e,t=na,i=ft.Default){if(Qo(this),e.hasOwnProperty(Qv))return e[Qv](this);i=Gl(i);let r,s=ar(this),o=Fn(void 0);try{if(!(i&ft.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=CE(e)&&Hl(e);l&&this.injectableDefInScope(l)?c=Ls(ah(e),gl):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&ft.Self?Kh():this.parent;return t=i&ft.Optional&&t===na?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[wl]=a[wl]||[]).unshift(wn(e)),s)throw a;return fE(a,e,"R3InjectorError",this.source)}else throw a}finally{Fn(o),ar(s)}}resolveInjectorInitializers(){let e=wt(null),t=ar(this),i=Fn(void 0),r;try{let s=this.get(Hs,si,ft.Self);for(let o of s)o()}finally{ar(t),Fn(i),wt(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(wn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Un(e);let t=oh(e)?e:Un(e&&e.provide),i=SE(e);if(!oh(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Ls(void 0,gl,!0),r.factory=()=>rh(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=wt(null);try{return t.value===gl&&(t.value=xE,t.value=t.factory()),typeof t.value=="object"&&t.value&&bE(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{wt(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Un(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function ah(n){let e=Hl(n),t=e!==null?e.factory:zs(n);if(t!==null)return t;if(n instanceof et)throw new Ye(204,!1);if(n instanceof Function)return ME(n);throw new Ye(204,!1)}function ME(n){if(n.length>0)throw new Ye(204,!1);let t=Yw(n);return t!==null?()=>t.factory(n):()=>new n}function SE(n){if(e0(n))return Ls(void 0,n.useValue);{let e=wE(n);return Ls(e,gl)}}function wE(n,e,t){let i;if(oh(n)){let r=Un(n);return zs(r)||ah(r)}else if(e0(n))i=()=>Un(n.useValue);else if(_E(n))i=()=>n.useFactory(...rh(n.deps||[]));else if(yE(n))i=()=>st(Un(n.useExisting));else{let r=Un(n&&(n.useClass||n.provide));if(EE(n))i=()=>new r(...rh(n.deps));else return zs(r)||ah(r)}return i}function Qo(n){if(n.destroyed)throw new Ye(205,!1)}function Ls(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function EE(n){return!!n.deps}function bE(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function CE(n){return typeof n=="function"||typeof n=="object"&&n instanceof et}function ch(n,e){for(let t of n)Array.isArray(t)?ch(t,e):t&&Vy(t)?ch(t.\u0275providers,e):e(t)}function kn(n,e){n instanceof ra&&Qo(n);let t,i=ar(n),r=Fn(void 0);try{return e()}finally{ar(i),Fn(r)}}function t0(){return zy()!==void 0||lE()!=null}function TE(n){if(!t0())throw new Ye(-203,!1)}function DE(n){return typeof n=="function"}var Pi=0,ht=1,Ke=2,on=3,qn=4,Xn=5,Cl=6,Tl=7,Ai=8,Gs=9,ur=10,ci=11,sa=12,ty=13,ua=14,li=15,Ur=16,Fs=17,Ii=18,jl=19,n0=20,cr=21,Yf=22,Dl=23,En=24,Ws=25,i0=1;var kr=7,Al=8,js=9,bn=10,Il=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(Il||{});function Lr(n){return Array.isArray(n)&&typeof n[i0]=="object"}function Oi(n){return Array.isArray(n)&&n[i0]===!0}function r0(n){return(n.flags&4)!==0}function Qh(n){return n.componentOffset>-1}function s0(n){return(n.flags&1)===1}function da(n){return!!n.template}function lh(n){return(n[Ke]&512)!==0}var uh=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function o0(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var ep=(()=>{let n=()=>a0;return n.ngInherit=!0,n})();function a0(n){return n.type.prototype.ngOnChanges&&(n.setInput=IE),AE}function AE(){let n=l0(this),e=n?.current;if(e){let t=n.previous;if(t===ia)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function IE(n,e,t,i,r){let s=this.declaredInputs[i],o=l0(n)||RE(n,{previous:ia,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new uh(l&&l.currentValue,t,c===ia),o0(n,e,r,t)}var c0="__ngSimpleChanges__";function l0(n){return n[c0]||null}function RE(n,e){return n[c0]=e}var ny=null;var oi=function(n,e,t){ny?.(n,e,t)},NE="svg",PE="math";function Ri(n){for(;Array.isArray(n);)n=n[Pi];return n}function fi(n,e){return Ri(e[n.index])}function OE(n,e){return n.data[e]}function Ks(n,e){let t=e[n];return Lr(t)?t:t[Pi]}function LE(n){return(n[Ke]&4)===4}function tp(n){return(n[Ke]&128)===128}function FE(n){return Oi(n[on])}function iy(n,e){return e==null?null:n[e]}function u0(n){n[Fs]=0}function np(n){n[Ke]&1024||(n[Ke]|=1024,tp(n)&&ql(n))}function $l(n){return!!(n[Ke]&9216||n[En]?.dirty)}function dh(n){n[ur].changeDetectionScheduler?.notify(9),n[Ke]&64&&(n[Ke]|=1024),$l(n)&&ql(n)}function ql(n){n[ur].changeDetectionScheduler?.notify(0);let e=Br(n);for(;e!==null&&!(e[Ke]&8192||(e[Ke]|=8192,!tp(e)));)e=Br(e)}function d0(n,e){if((n[Ke]&256)===256)throw new Ye(911,!1);n[cr]===null&&(n[cr]=[]),n[cr].push(e)}function UE(n,e){if(n[cr]===null)return;let t=n[cr].indexOf(e);t!==-1&&n[cr].splice(t,1)}function Br(n){let e=n[on];return Oi(e)?e[on]:e}var Ct={lFrame:_0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var fh=!1;function kE(){return Ct.lFrame.elementDepthCount}function BE(){Ct.lFrame.elementDepthCount++}function VE(){Ct.lFrame.elementDepthCount--}function f0(){return Ct.bindingsEnabled}function zE(){return Ct.skipHydrationRootTNode!==null}function HE(n){return Ct.skipHydrationRootTNode===n}function GE(){Ct.skipHydrationRootTNode=null}function un(){return Ct.lFrame.lView}function fa(){return Ct.lFrame.tView}function Zn(){let n=h0();for(;n!==null&&n.type===64;)n=n.parent;return n}function h0(){return Ct.lFrame.currentTNode}function WE(){let n=Ct.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function ip(n,e){let t=Ct.lFrame;t.currentTNode=n,t.isParent=e}function p0(){return Ct.lFrame.isParent}function jE(){Ct.lFrame.isParent=!1}function m0(){return fh}function ry(n){let e=fh;return fh=n,e}function $E(n){return Ct.lFrame.bindingIndex=n}function qE(){return Ct.lFrame.inI18n}function XE(n,e){let t=Ct.lFrame;t.bindingIndex=t.bindingRootIndex=n,hh(e)}function ZE(){return Ct.lFrame.currentDirectiveIndex}function hh(n){Ct.lFrame.currentDirectiveIndex=n}function g0(){return Ct.lFrame.currentQueryIndex}function rp(n){Ct.lFrame.currentQueryIndex=n}function YE(n){let e=n[ht];return e.type===2?e.declTNode:e.type===1?n[Xn]:null}function v0(n,e,t){if(t&ft.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&ft.Host);)if(r=YE(s),r===null||(s=s[ua],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Ct.lFrame=y0();return i.currentTNode=e,i.lView=n,!0}function sp(n){let e=y0(),t=n[ht];Ct.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function y0(){let n=Ct.lFrame,e=n===null?null:n.child;return e===null?_0(n):e}function _0(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function x0(){let n=Ct.lFrame;return Ct.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var M0=x0;function op(){let n=x0();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function JE(){return Ct.lFrame.selectedIndex}function Vr(n){Ct.lFrame.selectedIndex=n}function KE(){return Ct.lFrame.currentNamespace}var S0=!0;function QE(){return S0}function eb(n){S0=n}function tb(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=a0(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function w0(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function vl(n,e,t){E0(n,e,3,t)}function yl(n,e,t,i){(n[Ke]&3)===t&&E0(n,e,t,i)}function Jf(n,e){let t=n[Ke];(t&3)===e&&(t&=16383,t+=1,n[Ke]=t)}function E0(n,e,t,i){let r=i!==void 0?n[Fs]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Fs]+=65536),(a<s||s==-1)&&(nb(n,t,e,c),n[Fs]=(n[Fs]&4294901760)+c+2),c++}function sy(n,e){oi(4,n,e);let t=wt(null);try{e.call(n)}finally{wt(t),oi(5,n,e)}}function nb(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ke]>>14<n[Fs]>>16&&(n[Ke]&3)===e&&(n[Ke]+=16384,sy(a,s)):sy(a,s)}var Vs=-1,oa=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function ib(n){return n instanceof oa}function rb(n){return(n.flags&8)!==0}function sb(n){return(n.flags&16)!==0}function ph(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];ab(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function ob(n){return n===3||n===4||n===6}function ab(n){return n.charCodeAt(0)===64}function ap(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?oy(n,t,r,null,e[++i]):oy(n,t,r,null,null))}}return n}function oy(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Kf={},mh=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Gl(i);let r=this.injector.get(e,Kf,i);return r!==Kf||t===Kf?r:this.parentInjector.get(e,t,i)}};function b0(n){return n!==Vs}function Rl(n){return n&32767}function cb(n){return n>>16}function Nl(n,e){let t=cb(n),i=e;for(;t>0;)i=i[ua],t--;return i}var gh=!0;function ay(n){let e=gh;return gh=n,e}var lb=256,C0=lb-1,T0=5,ub=0,ai={};function db(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(ta)&&(i=t[ta]),i==null&&(i=t[ta]=ub++);let r=i&C0,s=1<<r;e.data[n+(r>>T0)]|=s}function D0(n,e){let t=A0(n,e);if(t!==-1)return t;let i=e[ht];i.firstCreatePass&&(n.injectorIndex=e.length,Qf(i.data,n),Qf(e,null),Qf(i.blueprint,null));let r=cp(n,e),s=n.injectorIndex;if(b0(r)){let o=Rl(r),a=Nl(r,e),c=a[ht].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Qf(n,e){n.push(0,0,0,0,0,0,0,0,e)}function A0(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function cp(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=O0(r),i===null)return Vs;if(t++,r=r[ua],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Vs}function fb(n,e,t){db(n,e,t)}function I0(n,e,t){if(t&ft.Optional||n!==void 0)return n;qh(e,"NodeInjector")}function R0(n,e,t,i){if(t&ft.Optional&&i===void 0&&(i=null),!(t&(ft.Self|ft.Host))){let r=n[Gs],s=Fn(void 0);try{return r?r.get(e,i,t&ft.Optional):Hy(e,i,t&ft.Optional)}finally{Fn(s)}}return I0(i,e,t)}function N0(n,e,t,i=ft.Default,r){if(n!==null){if(e[Ke]&2048&&!(i&ft.Self)){let o=gb(n,e,t,i,ai);if(o!==ai)return o}let s=P0(n,e,t,i,ai);if(s!==ai)return s}return R0(e,t,i,r)}function P0(n,e,t,i,r){let s=pb(t);if(typeof s=="function"){if(!v0(e,n,i))return i&ft.Host?I0(r,t,i):R0(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&ft.Optional))qh(t);else return o}finally{M0()}}else if(typeof s=="number"){let o=null,a=A0(n,e),c=Vs,l=i&ft.Host?e[li][Xn]:null;for((a===-1||i&ft.SkipSelf)&&(c=a===-1?cp(n,e):e[a+8],c===Vs||!ly(i,!1)?a=-1:(o=e[ht],a=Rl(c),e=Nl(c,e)));a!==-1;){let u=e[ht];if(cy(s,a,u.data)){let d=hb(a,e,t,o,i,l);if(d!==ai)return d}c=e[a+8],c!==Vs&&ly(i,e[ht].data[a+8]===l)&&cy(s,a,e)?(o=u,a=Rl(c),e=Nl(c,e)):a=-1}}return r}function hb(n,e,t,i,r,s){let o=e[ht],a=o.data[n+8],c=i==null?Qh(a)&&gh:i!=o&&(a.type&3)!==0,l=r&ft.Host&&s===a,u=_l(a,o,t,c,l);return u!==null?$s(e,o,u,a):ai}function _l(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let p=d;p<f;p++){let y=o[p];if(p<c&&t===y||p>=c&&y.type===t)return p}if(r){let p=o[c];if(p&&da(p)&&p.type===t)return c}return null}function $s(n,e,t,i){let r=n[t],s=e.data;if(ib(r)){let o=r;o.resolving&&rE(iE(s[t]));let a=ay(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Fn(o.injectImpl):null,u=v0(n,i,ft.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&tb(t,s[t],e)}finally{l!==null&&Fn(l),ay(a),o.resolving=!1,M0()}}return r}function pb(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(ta)?n[ta]:void 0;return typeof e=="number"?e>=0?e&C0:mb:e}function cy(n,e,t){let i=1<<n;return!!(t[e+(n>>T0)]&i)}function ly(n,e){return!(n&ft.Self)&&!(n&ft.Host&&e)}var Fr=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return N0(this._tNode,this._lView,e,Gl(i),t)}};function mb(){return new Fr(Zn(),un())}function lp(n){return la(()=>{let e=n.prototype.constructor,t=e[Sl]||vh(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Sl]||vh(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function vh(n){return Fy(n)?()=>{let e=vh(Un(n));return e&&e()}:zs(n)}function gb(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ke]&2048&&!(o[Ke]&512);){let a=P0(s,o,t,i|ft.Self,ai);if(a!==ai)return a;let c=s.parent;if(!c){let l=o[n0];if(l){let u=l.get(t,ai,i);if(u!==ai)return u}c=O0(o),o=o[ua]}s=c}return r}function O0(n){let e=n[ht],t=e.type;return t===2?e.declTNode:t===1?n[Xn]:null}function uy(n,e=null,t=null,i){let r=L0(n,e,t,i);return r.resolveInjectorInitializers(),r}function L0(n,e=null,t=null,i,r=new Set){let s=[t||si,gE(n)];return i=i||(typeof n=="object"?void 0:wn(n)),new ra(s,e||Kh(),i||null,r)}var ui=class n{static THROW_IF_NOT_FOUND=na;static NULL=new bl;static create(e,t){if(Array.isArray(e))return uy({name:""},t,e,"");{let i=e.name??"";return uy({name:i},e.parent,e.providers,i)}}static \u0275prov=Ze({token:n,providedIn:"any",factory:()=>st($y)});static __NG_ELEMENT_ID__=-1};var vb=new et("");vb.__NG_ELEMENT_ID__=n=>{let e=Zn();if(e===null)throw new Ye(204,!1);if(e.type&2)return e.value;if(n&ft.Optional)return null;throw new Ye(204,!1)};var F0=!1,up=(()=>{class n{static __NG_ELEMENT_ID__=yb;static __NG_ENV_ID__=t=>t}return n})(),yh=class extends up{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return d0(this._lView,e),()=>UE(this._lView,e)}};function yb(){return new yh(un())}var qs=class{},dp=new et("",{providedIn:"root",factory:()=>!1});var U0=new et(""),k0=new et(""),Qs=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new tn(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=Ze({token:n,providedIn:"root",factory:()=>new n})}return n})();var _h=class extends en{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,t0()&&(this.destroyRef=_e(up,{optional:!0})??void 0,this.pendingTasks=_e(Qs,{optional:!0})??void 0)}emit(e){let t=wt(null);try{super.next(e)}finally{wt(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Wt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},Sn=_h;function Pl(...n){}function B0(n){let e,t;function i(){n=Pl;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function dy(n){return queueMicrotask(()=>n()),()=>{n=Pl}}var fp="isAngularZone",Ol=fp+"_ID",_b=0,Gt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Sn(!1);onMicrotaskEmpty=new Sn(!1);onStable=new Sn(!1);onError=new Sn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=F0}=e;if(typeof Zone>"u")throw new Ye(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,Sb(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(fp)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ye(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ye(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,xb,Pl,Pl);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},xb={};function hp(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function Mb(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){B0(()=>{n.callbackScheduled=!1,xh(n),n.isCheckStableRunning=!0,hp(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),xh(n)}function Sb(n){let e=()=>{Mb(n)},t=_b++;n._inner=n._inner.fork({name:"angular",properties:{[fp]:!0,[Ol]:t,[Ol+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(wb(c))return i.invokeTask(s,o,a,c);try{return fy(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),hy(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return fy(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!Eb(c)&&e(),hy(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,xh(n),hp(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function xh(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function fy(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function hy(n){n._nesting--,hp(n)}var Mh=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Sn;onMicrotaskEmpty=new Sn;onStable=new Sn;onError=new Sn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function wb(n){return V0(n,"__ignore_ng_zone__")}function Eb(n){return V0(n,"__scheduler_tick__")}function V0(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Ni=class{_console=console;handleError(e){this._console.error("ERROR",e)}},bb=new et("",{providedIn:"root",factory:()=>{let n=_e(Gt),e=_e(Ni);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function py(n,e){return Py(n,e)}function Cb(n){return Py(Ny,n)}var z0=(py.required=Cb,py);function Tb(){return eo(Zn(),un())}function eo(n,e){return new Hr(fi(n,e))}var Hr=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=Tb}return n})();function Db(n){return n instanceof Hr?n.nativeElement:n}function Ab(){return this._results[Symbol.iterator]()}var Sh=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new en}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=mE(e);(this._changesDetected=!pE(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=Ab};function H0(n){return(n.flags&128)===128}var G0=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(G0||{}),W0=new Map,Ib=0;function Rb(){return Ib++}function Nb(n){W0.set(n[jl],n)}function wh(n){W0.delete(n[jl])}var my="__ngContext__";function Xs(n,e){Lr(e)?(n[my]=e[jl],Nb(e)):n[my]=e}function j0(n){return q0(n[sa])}function $0(n){return q0(n[qn])}function q0(n){for(;n!==null&&!Oi(n);)n=n[qn];return n}var Eh;function X0(n){Eh=n}function Pb(){if(Eh!==void 0)return Eh;if(typeof document<"u")return document;throw new Ye(210,!1)}var pp=new et("",{providedIn:"root",factory:()=>Ob}),Ob="ng",mp=new et(""),Gr=new et("",{providedIn:"platform",factory:()=>"unknown"});var gp=new et("",{providedIn:"root",factory:()=>Pb().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Lb="h",Fb="b";var Z0=!1,Ub=new et("",{providedIn:"root",factory:()=>Z0});var vp=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(vp||{}),Xl=new et(""),gy=new Set;function yp(n){gy.has(n)||(gy.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Us=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(Us||{}),Y0=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Ze({token:n,providedIn:"root",factory:()=>new n})}return n})(),kb=[Us.EarlyRead,Us.Write,Us.MixedReadWrite,Us.Read],Bb=(()=>{class n{ngZone=_e(Gt);scheduler=_e(qs);errorHandler=_e(Ni,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){_e(Xl,{optional:!0})}execute(){this.executing=!0;for(let t of kb)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[t]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>i.hooks[t](i.pipelinedValue),i.snapshot))}catch(r){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(r)}this.executing=!1;for(let t of this.sequences)t.afterRun(),t.once&&(this.sequences.delete(t),t.destroy());for(let t of this.deferredRegistrations)this.sequences.add(t);this.deferredRegistrations.size>0&&this.scheduler.notify(8),this.deferredRegistrations.clear()}register(t){this.executing?this.deferredRegistrations.add(t):(this.sequences.add(t),this.scheduler.notify(7))}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,i){return i?i.run(vp.AFTER_NEXT_RENDER,t):t()}static \u0275prov=Ze({token:n,providedIn:"root",factory:()=>new n})}return n})(),bh=class{impl;hooks;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(e,t,i,r,s=null){this.impl=e,this.hooks=t,this.once=i,this.snapshot=s,this.unregisterOnDestroy=r?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.()}};function _p(n,e){!e?.injector&&TE(_p);let t=e?.injector??_e(ui);return yp("NgAfterNextRender"),zb(n,t,e,!0)}function Vb(n,e){if(n instanceof Function){let t=[void 0,void 0,void 0,void 0];return t[e]=n,t}else return[n.earlyRead,n.write,n.mixedReadWrite,n.read]}function zb(n,e,t,i){let r=e.get(Y0);r.impl??=e.get(Bb);let s=e.get(Xl,null,{optional:!0}),o=t?.phase??Us.MixedReadWrite,a=t?.manualCleanup!==!0?e.get(up):null,c=new bh(r.impl,Vb(n,o),i,a,s?.snapshot(null));return r.impl.register(c),c}var Hb=()=>null;function xp(n,e,t=!1){return Hb(n,e,t)}var di=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(di||{});function J0(n){return n.ownerDocument.defaultView}function K0(n){return n instanceof Function?n():n}var dr=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(dr||{}),Wr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Wr||{}),Gb;function Mp(n,e){return Gb(n,e)}function ks(n,e,t,i,r){if(i!=null){let s,o=!1;Oi(i)?s=i:Lr(i)&&(o=!0,i=i[Pi]);let a=Ri(i);n===0&&t!==null?r==null?i_(e,t,a):Ll(e,t,a,r||null,!0):n===1&&t!==null?Ll(e,t,a,r||null,!0):n===2?iC(e,a,o):n===3&&e.destroyNode(a),s!=null&&sC(e,n,s,t,r)}}function Q0(n,e,t){return n.createElement(e,t)}function Wb(n,e){e_(n,e),e[Pi]=null,e[Xn]=null}function jb(n,e,t,i,r,s){i[Pi]=r,i[Xn]=e,Zl(n,i,t,1,r,s)}function e_(n,e){e[ur].changeDetectionScheduler?.notify(10),Zl(n,e,e[ci],2,null,null)}function $b(n){let e=n[sa];if(!e)return eh(n[ht],n);for(;e;){let t=null;if(Lr(e))t=e[sa];else{let i=e[bn];i&&(t=i)}if(!t){for(;e&&!e[qn]&&e!==n;)Lr(e)&&eh(e[ht],e),e=e[on];e===null&&(e=n),Lr(e)&&eh(e[ht],e),t=e&&e[qn]}e=t}}function qb(n,e,t,i){let r=bn+i,s=t.length;i>0&&(t[r-1][qn]=e),i<s-bn?(e[qn]=t[r],jy(t,bn+i,e)):(t.push(e),e[qn]=null),e[on]=t;let o=e[Ur];o!==null&&t!==o&&t_(o,e);let a=e[Ii];a!==null&&a.insertView(n),dh(e),e[Ke]|=128}function t_(n,e){let t=n[js],i=e[on];if(Lr(i))n[Ke]|=Il.HasTransplantedViews;else{let r=i[on][li];e[li]!==r&&(n[Ke]|=Il.HasTransplantedViews)}t===null?n[js]=[e]:t.push(e)}function Sp(n,e){let t=n[js],i=t.indexOf(e);t.splice(i,1)}function Ch(n,e){if(n.length<=bn)return;let t=bn+e,i=n[t];if(i){let r=i[Ur];r!==null&&r!==n&&Sp(r,i),e>0&&(n[t-1][qn]=i[qn]);let s=El(n,bn+e);Wb(i[ht],i);let o=s[Ii];o!==null&&o.detachView(s[ht]),i[on]=null,i[qn]=null,i[Ke]&=-129}return i}function n_(n,e){if(!(e[Ke]&256)){let t=e[ci];t.destroyNode&&Zl(n,e,t,3,null,null),$b(e)}}function eh(n,e){if(e[Ke]&256)return;let t=wt(null);try{e[Ke]&=-129,e[Ke]|=256,e[En]&&Pf(e[En]),Zb(n,e),Xb(n,e),e[ht].type===1&&e[ci].destroy();let i=e[Ur];if(i!==null&&Oi(e[on])){i!==e[on]&&Sp(i,e);let r=e[Ii];r!==null&&r.detachView(n)}wh(e)}finally{wt(t)}}function Xb(n,e){let t=n.cleanup,i=e[Tl];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Tl]=null);let r=e[cr];if(r!==null){e[cr]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Dl];if(s!==null){e[Dl]=null;for(let o of s)o.destroy()}}function Zb(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof oa)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];oi(4,a,c);try{c.call(a)}finally{oi(5,a,c)}}else{oi(4,r,s);try{s.call(r)}finally{oi(5,r,s)}}}}}function Yb(n,e,t){return Jb(n,e.parent,t)}function Jb(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[Pi];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===di.None||s===di.Emulated)return null}return fi(i,t)}}function Ll(n,e,t,i,r){n.insertBefore(e,t,i,r)}function i_(n,e,t){n.appendChild(e,t)}function vy(n,e,t,i,r){i!==null?Ll(n,e,t,i,r):i_(n,e,t)}function r_(n,e){return n.parentNode(e)}function Kb(n,e){return n.nextSibling(e)}function Qb(n,e,t){return tC(n,e,t)}function eC(n,e,t){return n.type&40?fi(n,t):null}var tC=eC,yy;function nC(n,e,t,i){let r=Yb(n,i,e),s=e[ci],o=i.parent||e[Xn],a=Qb(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)vy(s,r,t[c],a,!1);else vy(s,r,t,a,!1);yy!==void 0&&yy(s,i,e,t,r)}function ea(n,e){if(e!==null){let t=e.type;if(t&3)return fi(e,n);if(t&4)return Th(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return ea(n,i);{let r=n[e.index];return Oi(r)?Th(-1,r):Ri(r)}}else{if(t&128)return ea(n,e.next);if(t&32)return Mp(e,n)()||Ri(n[e.index]);{let i=s_(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Br(n[li]);return ea(r,i)}else return ea(n,e.next)}}}return null}function s_(n,e){if(e!==null){let i=n[li][Xn],r=e.projection;return i.projection[r]}return null}function Th(n,e){let t=bn+n+1;if(t<e.length){let i=e[t],r=i[ht].firstChild;if(r!==null)return ea(i,r)}return e[kr]}function iC(n,e,t){n.removeChild(null,e,t)}function wp(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Xs(Ri(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)wp(n,e,t.child,i,r,s,!1),ks(e,n,r,a,s);else if(c&32){let l=Mp(t,i),u;for(;u=l();)ks(e,n,r,u,s);ks(e,n,r,a,s)}else c&16?rC(n,e,i,t,r,s):ks(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Zl(n,e,t,i,r,s){wp(t,i,n.firstChild,e,r,s,!1)}function rC(n,e,t,i,r,s){let o=t[li],c=o[Xn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];ks(e,n,r,u,s)}else{let l=c,u=o[on];H0(i)&&(l.flags|=128),wp(n,e,l,u,r,s,!0)}}function sC(n,e,t,i,r){let s=t[kr],o=Ri(t);s!==o&&ks(e,n,i,s,r);for(let a=bn;a<t.length;a++){let c=t[a];Zl(c[ht],c,n,e,i,s)}}function oC(n,e,t){n.setAttribute(e,"style",t)}function o_(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function a_(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&ph(n,e,i),r!==null&&o_(n,e,r),s!==null&&oC(n,e,s)}function aC(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var c_="ng-template";function cC(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&aC(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Ep(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Ep(n){return n.type===4&&n.value!==c_}function lC(n,e,t){let i=n.type===4&&!t?c_:n.value;return e===i}function uC(n,e,t){let i=4,r=n.attrs,s=r!==null?hC(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!$n(i)&&!$n(c))return!1;if(o&&$n(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!lC(n,c,t)||c===""&&e.length===1){if($n(i))return!1;o=!0}}else if(i&8){if(r===null||!cC(n,r,c,t)){if($n(i))return!1;o=!0}}else{let l=e[++a],u=dC(c,r,Ep(n),t);if(u===-1){if($n(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if($n(i))return!1;o=!0}}}}return $n(i)||o}function $n(n){return(n&1)===0}function dC(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return pC(e,n)}function fC(n,e,t=!1){for(let i=0;i<e.length;i++)if(uC(n,e[i],t))return!0;return!1}function hC(n){for(let e=0;e<n.length;e++){let t=n[e];if(ob(t))return e}return n.length}function pC(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function _y(n,e){return n?":not("+e.trim()+")":e}function mC(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!$n(o)&&(e+=_y(s,r),r=""),i=o,s=s||!$n(i);t++}return r!==""&&(e+=_y(s,r)),e}function gC(n){return n.map(mC).join(",")}function vC(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!$n(r))break;r=s}i++}return{attrs:e,classes:t}}var l_={};function yC(n,e,t,i){if(!i)if((e[Ke]&3)===3){let s=n.preOrderCheckHooks;s!==null&&vl(e,s,t)}else{let s=n.preOrderHooks;s!==null&&yl(e,s,0,t)}Vr(t)}function ha(n,e=ft.Default){let t=un();if(t===null)return st(n,e);let i=Zn();return N0(i,t,Un(n),e)}function u_(){let n="invalid";throw new Error(n)}function d_(n,e,t,i,r,s){let o=wt(null);try{let a=null;r&dr.SignalBased&&(a=e[i][ws]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&dr.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):o0(e,a,i,s)}finally{wt(o)}}function _C(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Vr(~r);else{let s=r,o=t[++i],a=t[++i];XE(o,s);let c=e[s];a(2,c)}}}finally{Vr(-1)}}function Yl(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[Pi]=r,d[Ke]=i|4|128|8|64|1024,(l!==null||n&&n[Ke]&2048)&&(d[Ke]|=2048),u0(d),d[on]=d[ua]=n,d[Ai]=t,d[ur]=o||n&&n[ur],d[ci]=a||n&&n[ci],d[Gs]=c||n&&n[Gs]||null,d[Xn]=s,d[jl]=Rb(),d[Cl]=u,d[n0]=l,d[li]=e.type==2?n[li]:d,d}function f_(n,e,t,i,r){let s=n.data[e];if(s===null)s=xC(n,e,t,i,r),qE()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=WE();s.injectorIndex=o===null?-1:o.injectorIndex}return ip(s,!0),s}function xC(n,e,t,i,r){let s=h0(),o=p0(),a=o?s:s&&s.parent,c=n.data[e]=DC(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function h_(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function p_(n,e,t,i,r){let s=JE(),o=i&2;try{Vr(-1),o&&e.length>Ws&&yC(n,e,Ws,!1),oi(o?2:0,r),t(i,r)}finally{Vr(s),oi(o?3:1,r)}}function m_(n,e,t){if(r0(e)){let i=wt(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{wt(i)}}}function MC(n,e,t){f0()&&(PC(n,e,t,fi(t,e)),(t.flags&64)===64&&__(n,e,t))}function SC(n,e,t=fi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function g_(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=v_(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function v_(n,e,t,i,r,s,o,a,c,l,u){let d=Ws+i,f=d+r,p=wC(d,f),y=typeof l=="function"?l():l;return p[ht]={type:n,blueprint:p,template:t,queries:null,viewQuery:a,declTNode:e,data:p.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:y,incompleteFirstPass:!1,ssrId:u}}function wC(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:l_);return t}function EC(n,e,t,i){let s=i.get(Ub,Z0)||t===di.ShadowDom,o=n.selectRootElement(e,s);return bC(o),o}function bC(n){CC(n)}var CC=()=>null;function TC(n,e,t,i){let r=S_(e);r.push(t),n.firstCreatePass&&w_(n).push(i,r.length-1)}function DC(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return zE()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function xy(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=dr.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?My(i,t,l,a,c):My(i,t,l,a)}return i}function My(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function AC(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,p=f?f.inputs:null,y=f?f.outputs:null;c=xy(0,d.inputs,u,c,p),l=xy(1,d.outputs,u,l,y);let _=c!==null&&o!==null&&!Ep(e)?HC(c,u,o):null;a.push(_)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function IC(n,e,t,i){if(f0()){let r=i===null?null:{"":-1},s=LC(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&y_(n,e,t,o,r,a),r&&FC(t,i,r)}t.mergedAttrs=ap(t.mergedAttrs,t.attrs)}function y_(n,e,t,i,r,s){for(let l=0;l<i.length;l++)fb(D0(t,e),n,i[l].type);kC(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=h_(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=ap(t.mergedAttrs,u.hostAttrs),BC(n,t,e,c,u),UC(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}AC(n,t,s)}function RC(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;NC(o)!=a&&o.push(a),o.push(t,i,s)}}function NC(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function PC(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;Qh(t)&&VC(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||D0(t,e),Xs(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=$s(e,n,a,t);if(Xs(l,e),o!==null&&zC(e,a-r,l,c,t,o),da(c)){let u=Ks(t.index,e);u[Ai]=$s(e,n,a,t)}}}function __(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=ZE();try{Vr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];hh(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&OC(c,l)}}finally{Vr(-1),hh(o)}}function OC(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function LC(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(fC(e,o.selectors,!1))if(i||(i=[]),da(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;Dh(n,e,c)}else i.unshift(o),Dh(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function Dh(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function FC(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ye(-301,!1);i.push(e[r],s)}}}function UC(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;da(e)&&(t[""]=n)}}function kC(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function BC(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=zs(r.type,!0)),o=new oa(s,da(r),ha);n.blueprint[i]=o,t[i]=o,RC(n,e,i,h_(n,t,r.hostVars,l_),r)}function x_(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function VC(n,e,t){let i=fi(e,n),r=g_(t),s=n[ur].rendererFactory,o=bp(n,Yl(n,r,null,x_(t),i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=o}function zC(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];d_(i,t,c,l,u,d)}}function HC(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function GC(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function M_(n,e){let t=n.contentQueries;if(t!==null){let i=wt(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];rp(s),a.contentQueries(2,e[o],o)}}}finally{wt(i)}}}function bp(n,e){return n[sa]?n[ty][qn]=e:n[sa]=e,n[ty]=e,e}function Ah(n,e,t){rp(0);let i=wt(null);try{e(n,t)}finally{wt(i)}}function S_(n){return n[Tl]??=[]}function w_(n){return n.cleanup??=[]}function E_(n,e){let t=n[Gs],i=t?t.get(Ni,null):null;i&&i.handleError(e)}function b_(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];d_(u,l,i,a,c,r)}}function WC(n,e){let t=Ks(e,n),i=t[ht];jC(i,t);let r=t[Pi];r!==null&&t[Cl]===null&&(t[Cl]=xp(r,t[Gs])),Cp(i,t,t[Ai])}function jC(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Cp(n,e,t){sp(e);try{let i=n.viewQuery;i!==null&&Ah(1,i,t);let r=n.template;r!==null&&p_(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Ii]?.finishViewCreation(n),n.staticContentQueries&&M_(n,e),n.staticViewQueries&&Ah(2,n.viewQuery,t);let s=n.components;s!==null&&$C(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ke]&=-5,op()}}function $C(n,e){for(let t=0;t<e.length;t++)WC(n,e[t])}function qC(n,e,t,i){let r=wt(null);try{let s=e.tView,a=n[Ke]&4096?4096:16,c=Yl(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Ur]=l;let u=n[Ii];return u!==null&&(c[Ii]=u.createEmbeddedView(s)),Cp(s,c,t),c}finally{wt(r)}}function Sy(n,e){return!e||e.firstChild===null||H0(n)}function XC(n,e,t,i=!0){let r=e[ht];if(qb(r,e,n,t),i){let o=Th(t,n),a=e[ci],c=r_(a,n[kr]);c!==null&&jb(r,n[Xn],a,e,c,o)}let s=e[Cl];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Fl(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Ri(s)),Oi(s)&&ZC(s,i);let o=t.type;if(o&8)Fl(n,e,t.child,i);else if(o&32){let a=Mp(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=s_(e,t);if(Array.isArray(a))i.push(...a);else{let c=Br(e[li]);Fl(c[ht],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function ZC(n,e){for(let t=bn;t<n.length;t++){let i=n[t],r=i[ht].firstChild;r!==null&&Fl(i[ht],i,r,e)}n[kr]!==n[Pi]&&e.push(n[kr])}var C_=[];function YC(n){return n[En]??JC(n)}function JC(n){let e=C_.pop()??Object.create(QC);return e.lView=n,e}function KC(n){n.lView[En]!==n&&(n.lView=null,C_.push(n))}var QC=Pt(Le({},$c),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{ql(n.lView)},consumerOnSignalRead(){this.lView[En]=this}});function eT(n){let e=n[En]??Object.create(tT);return e.lView=n,e}var tT=Pt(Le({},$c),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{let e=Br(n.lView);for(;e&&!T_(e[ht]);)e=Br(e);e&&np(e)},consumerOnSignalRead(){this.lView[En]=this}});function T_(n){return n.type!==2}function D_(n){if(n[Dl]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Dl])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Ke]&8192)}}var nT=100;function A_(n,e=!0,t=0){let r=n[ur].rendererFactory,s=!1;s||r.begin?.();try{iT(n,t)}catch(o){throw e&&E_(n,o),o}finally{s||r.end?.()}}function iT(n,e){let t=m0();try{ry(!0),Ih(n,e);let i=0;for(;$l(n);){if(i===nT)throw new Ye(103,!1);i++,Ih(n,1)}}finally{ry(t)}}function rT(n,e,t,i){let r=e[Ke];if((r&256)===256)return;let s=!1,o=!1;sp(e);let a=!0,c=null,l=null;s||(T_(n)?(l=YC(e),c=Rf(l)):lv()===null?(a=!1,l=eT(e),c=Rf(l)):e[En]&&(Pf(e[En]),e[En]=null));try{u0(e),$E(n.bindingStartIndex),t!==null&&p_(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let p=n.preOrderCheckHooks;p!==null&&vl(e,p,null)}else{let p=n.preOrderHooks;p!==null&&yl(e,p,0,null),Jf(e,0)}if(o||sT(e),D_(e),I_(e,0),n.contentQueries!==null&&M_(n,e),!s)if(u){let p=n.contentCheckHooks;p!==null&&vl(e,p)}else{let p=n.contentHooks;p!==null&&yl(e,p,1),Jf(e,1)}_C(n,e);let d=n.components;d!==null&&N_(e,d,0);let f=n.viewQuery;if(f!==null&&Ah(2,f,i),!s)if(u){let p=n.viewCheckHooks;p!==null&&vl(e,p)}else{let p=n.viewHooks;p!==null&&yl(e,p,2),Jf(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Yf]){for(let p of e[Yf])p();e[Yf]=null}s||(e[Ke]&=-73)}catch(u){throw s||ql(e),u}finally{l!==null&&(hv(l,c),a&&KC(l)),op()}}function I_(n,e){for(let t=j0(n);t!==null;t=$0(t))for(let i=bn;i<t.length;i++){let r=t[i];R_(r,e)}}function sT(n){for(let e=j0(n);e!==null;e=$0(e)){if(!(e[Ke]&Il.HasTransplantedViews))continue;let t=e[js];for(let i=0;i<t.length;i++){let r=t[i];np(r)}}}function oT(n,e,t){let i=Ks(e,n);R_(i,t)}function R_(n,e){tp(n)&&Ih(n,e)}function Ih(n,e){let i=n[ht],r=n[Ke],s=n[En],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Nf(s)),o||=!1,s&&(s.dirty=!1),n[Ke]&=-9217,o)rT(i,n,i.template,n[Ai]);else if(r&8192){D_(n),I_(n,1);let a=i.components;a!==null&&N_(n,a,1)}}function N_(n,e,t){for(let i=0;i<e.length;i++)oT(n,e[i],t)}function Tp(n,e){let t=m0()?64:1088;for(n[ur].changeDetectionScheduler?.notify(e);n;){n[Ke]|=t;let i=Br(n);if(lh(n)&&!i)return n;n=i}return null}var zr=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[ht];return Fl(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[Ai]}get dirty(){return!!(this._lView[Ke]&9280)||!!this._lView[En]?.dirty}set context(e){this._lView[Ai]=e}get destroyed(){return(this._lView[Ke]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[on];if(Oi(e)){let t=e[Al],i=t?t.indexOf(this):-1;i>-1&&(Ch(e,i),El(t,i))}this._attachedToViewContainer=!1}n_(this._lView[ht],this._lView)}onDestroy(e){d0(this._lView,e)}markForCheck(){Tp(this._cdRefInjectingView||this._lView,4)}markForRefresh(){np(this._cdRefInjectingView||this._lView)}detach(){this._lView[Ke]&=-129}reattach(){dh(this._lView),this._lView[Ke]|=128}detectChanges(){this._lView[Ke]|=1024,A_(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ye(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=lh(this._lView),t=this._lView[Ur];t!==null&&!e&&Sp(t,this._lView),e_(this._lView[ht],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ye(902,!1);this._appRef=e;let t=lh(this._lView),i=this._lView[Ur];i!==null&&!t&&t_(i,this._lView),dh(this._lView)}},aa=(()=>{class n{static __NG_ELEMENT_ID__=lT}return n})(),aT=aa,cT=class extends aT{_declarationLView;_declarationTContainer;elementRef;constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=qC(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new zr(r)}};function lT(){return Dp(Zn(),un())}function Dp(n,e){return n.type&4?new cT(e,n,eo(n,e)):null}var xB=new RegExp(`^(\\d+)*(${Fb}|${Lb})*(.*)`);var uT=()=>null;function wy(n,e){return uT(n,e)}var Rh=class{},Ul=class{},Nh=class{resolveComponentFactory(e){throw Error(`No component factory found for ${wn(e)}.`)}},Zs=class{static NULL=new Nh},Ys=class{};var dT=(()=>{class n{static \u0275prov=Ze({token:n,providedIn:"root",factory:()=>null})}return n})();function Ph(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Zv(r,a);else if(s==2){let c=a,l=e[++o];i=Zv(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var kl=class extends Zs{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=lr(e);return new Js(t,this.ngModule)}};function Ey(n,e){let t=[];for(let i in n){if(!n.hasOwnProperty(i))continue;let r=n[i];if(r===void 0)continue;let s=Array.isArray(r),o=s?r[0]:r,a=s?r[1]:dr.None;e?t.push({propName:o,templateName:i,isSignal:(a&dr.SignalBased)!==0}):t.push({propName:o,templateName:i})}return t}function fT(n){let e=n.toLowerCase();return e==="svg"?NE:e==="math"?PE:null}var Js=class extends Ul{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Ey(e.inputs,!0);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Ey(this.componentDef.outputs,!1)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=gC(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=wt(null);try{r=r||this.ngModule;let o=r instanceof Cn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new mh(e,o):e,c=a.get(Ys,null);if(c===null)throw new Ye(407,!1);let l=a.get(dT,null),u=a.get(qs,null),d={rendererFactory:c,sanitizer:l,changeDetectionScheduler:u},f=c.createRenderer(null,this.componentDef),p=this.componentDef.selectors[0][0]||"div",y=i?EC(f,i,this.componentDef.encapsulation,a):Q0(f,p,fT(p)),_=512;this.componentDef.signals?_|=4096:this.componentDef.onPush||(_|=16);let v=null;y!==null&&(v=xp(y,a,!0));let m=v_(0,null,null,1,0,null,null,null,null,null,null),N=Yl(null,m,null,_,null,null,d,f,a,null,v);sp(N);let b,E,F=null;try{let L=this.componentDef,P,U=null;L.findHostDirectiveDefs?(P=[],U=new Map,L.findHostDirectiveDefs(L,P,U),P.push(L)):P=[L];let T=hT(N,y);F=pT(T,y,L,P,N,d,f),E=OE(m,Ws),y&&vT(f,L,y,i),t!==void 0&&yT(E,this.ngContentSelectors,t),b=gT(F,L,P,U,N,[_T]),Cp(m,N,null)}catch(L){throw F!==null&&wh(F),wh(N),L}finally{op()}return new Oh(this.componentType,b,eo(E,N),N,E)}finally{wt(s)}}},Oh=class extends Rh{location;_rootLView;_tNode;instance;hostView;changeDetectorRef;componentType;previousInputValues=null;constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.instance=t,this.hostView=this.changeDetectorRef=new zr(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;b_(s[ht],s,r,e,t),this.previousInputValues.set(e,t);let o=Ks(this._tNode.index,s);Tp(o,1)}}get injector(){return new Fr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function hT(n,e){let t=n[ht],i=Ws;return n[i]=e,f_(t,i,2,"#host",null)}function pT(n,e,t,i,r,s,o){let a=r[ht];mT(i,n,e,o);let c=null;e!==null&&(c=xp(e,r[Gs]));let l=s.rendererFactory.createRenderer(e,t),u=Yl(r,g_(t),null,x_(t),r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&Dh(a,n,i.length-1),bp(r,u),r[n.index]=u}function mT(n,e,t,i){for(let r of n)e.mergedAttrs=ap(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Ph(e,e.mergedAttrs,!0),t!==null&&a_(i,t,e))}function gT(n,e,t,i,r,s){let o=Zn(),a=r[ht],c=fi(o,r);y_(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,f=$s(r,a,d,o);Xs(f,r)}__(a,r,o),c&&Xs(c,r);let l=$s(r,a,o.directiveStart+o.componentOffset,o);if(n[Ai]=r[Ai]=l,s!==null)for(let u of s)u(l,e);return m_(a,o,r),l}function vT(n,e,t,i){if(i)ph(n,t,["ng-version","19.0.4"]);else{let{attrs:r,classes:s}=vC(e.selectors[0]);r&&ph(n,t,r),s&&s.length>0&&o_(n,t,s.join(" "))}}function yT(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}function _T(){let n=Zn();w0(un()[ht],n)}var to=(()=>{class n{static __NG_ELEMENT_ID__=xT}return n})();function xT(){let n=Zn();return O_(n,un())}var MT=to,P_=class extends MT{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return eo(this._hostTNode,this._hostLView)}get injector(){return new Fr(this._hostTNode,this._hostLView)}get parentInjector(){let e=cp(this._hostTNode,this._hostLView);if(b0(e)){let t=Nl(e,this._hostLView),i=Rl(e),r=t[ht].data[i+8];return new Fr(r,t)}else return new Fr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=by(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-bn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=wy(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Sy(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!DE(e),a;if(o)a=t;else{let y=t||{};a=y.index,i=y.injector,r=y.projectableNodes,s=y.environmentInjector||y.ngModuleRef}let c=o?e:new Js(lr(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let _=(o?l:this.parentInjector).get(Cn,null);_&&(s=_)}let u=lr(c.componentType??{}),d=wy(this._lContainer,u?.id??null),f=d?.firstChild??null,p=c.create(l,r,f,s);return this.insertImpl(p.hostView,a,Sy(this._hostTNode,d)),p}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(FE(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[on],l=new P_(c,c[Xn],c[on]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return XC(o,r,s,i),e.attachToViewContainerRef(),jy(th(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=by(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Ch(this._lContainer,t);i&&(El(th(this._lContainer),t),n_(i[ht],i))}detach(e){let t=this._adjustIndex(e,-1),i=Ch(this._lContainer,t);return i&&El(th(this._lContainer),t)!=null?new zr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function by(n){return n[Al]}function th(n){return n[Al]||(n[Al]=[])}function O_(n,e){let t,i=e[n.index];return Oi(i)?t=i:(t=GC(i,e,null,n),e[n.index]=t,bp(e,t)),wT(t,e,n,i),new P_(t,n,e)}function ST(n,e){let t=n[ci],i=t.createComment(""),r=fi(e,n),s=r_(t,r);return Ll(t,s,i,Kb(t,r),!1),i}var wT=ET;function ET(n,e,t,i){if(n[kr])return;let r;t.type&8?r=Ri(i):r=ST(e,t),n[kr]=r}var Lh=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Fh=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Ap(e,t).matches!==null&&this.queries[t].setDirty()}},Uh=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=NT(e):this.predicate=e}},kh=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Bh=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,bT(t,s)),this.matchTNodeWithReadOption(e,t,_l(t,e,s,!1,!1))}else i===aa?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,_l(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Hr||r===to||r===aa&&t.type&4)this.addMatch(t.index,-2);else{let s=_l(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function bT(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function CT(n,e){return n.type&11?eo(n,e):n.type&4?Dp(n,e):null}function TT(n,e,t,i){return t===-1?CT(e,n):t===-2?DT(n,e,i):$s(n,n[ht],t,e)}function DT(n,e,t){if(t===Hr)return eo(e,n);if(t===aa)return Dp(e,n);if(t===to)return O_(e,n)}function L_(n,e,t,i){let r=e[Ii].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(TT(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Vh(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=L_(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=bn;d<u.length;d++){let f=u[d];f[Ur]===f[on]&&Vh(f[ht],f,l,i)}if(u[js]!==null){let d=u[js];for(let f=0;f<d.length;f++){let p=d[f];Vh(p[ht],p,l,i)}}}}}return i}function AT(n,e){return n[Ii].queries[e].queryList}function IT(n,e,t){let i=new Sh((t&4)===4);return TC(n,e,i,i.destroy),(e[Ii]??=new Fh).queries.push(new Lh(i))-1}function RT(n,e,t){let i=fa();return i.firstCreatePass&&(PT(i,new Uh(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),IT(i,un(),e)}function NT(n){return n.split(",").map(e=>e.trim())}function PT(n,e,t){n.queries===null&&(n.queries=new kh),n.queries.track(new Bh(e,t))}function Ap(n,e){return n.queries.getByIndex(e)}function OT(n,e){let t=n[ht],i=Ap(t,e);return i.crossesNgTemplate?Vh(t,n,e,[]):L_(t,n,i,e)}var fr=class{},ca=class{};var zh=class extends fr{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new kl(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Xy(e);this._bootstrapComponents=K0(s.bootstrap),this._r3Injector=L0(e,t,[{provide:fr,useValue:this},{provide:Zs,useValue:this.componentFactoryResolver},...i],wn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Hh=class extends ca{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new zh(this.moduleType,e,[])}};var Bl=class extends fr{injector;componentFactoryResolver=new kl(this);instance=null;constructor(e){super();let t=new ra([...e.providers,{provide:fr,useValue:this},{provide:Zs,useValue:this.componentFactoryResolver}],e.parent||Kh(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Jl(n,e,t=null){return new Bl({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var LT=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Ky(!1,t.type),r=i.length>0?Jl([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Ze({token:n,providedIn:"environment",factory:()=>new n(st(Cn))})}return n})();function Kl(n){return la(()=>{let e=F_(n),t=Pt(Le({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===G0.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(LT).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||di.Emulated,styles:n.styles||si,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&yp("NgStandalone"),U_(t);let i=n.dependencies;return t.directiveDefs=Ty(i,!1),t.pipeDefs=Ty(i,!0),t.id=kT(t),t})}function FT(n){return lr(n)||Zy(n)}function UT(n){return n!==null}function Ql(n){return la(()=>({type:n.type,bootstrap:n.bootstrap||si,declarations:n.declarations||si,imports:n.imports||si,exports:n.exports||si,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function Cy(n,e){if(n==null)return ia;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=dr.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==dr.None?[i,a]:i,e[s]=o):t[s]=i}return t}function Ip(n){return la(()=>{let e=F_(n);return U_(e),e})}function F_(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||ia,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||si,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Cy(n.inputs,e),outputs:Cy(n.outputs),debugInfo:null}}function U_(n){n.features?.forEach(e=>e(n))}function Ty(n,e){if(!n)return null;let t=e?Yy:FT;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(UT)}function kT(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function BT(n){return(n.flags&32)===32}var eu=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var k_=new et("");function pa(n){return!!n&&typeof n.then=="function"}function B_(n){return!!n&&typeof n.subscribe=="function"}var tu=new et("");var V_=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=_e(tu,{optional:!0})??[];injector=_e(ui);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=kn(this.injector,r);if(pa(s))t.push(s);else if(B_(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),VT=(()=>{class n{static \u0275prov=Ze({token:n,providedIn:"root",factory:()=>new Gh})}return n})(),Gh=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}},nu=new et("");function zT(){yv(()=>{throw new Ye(600,!1)})}function HT(n){return n.isBoundToModule}var GT=10;function WT(n,e,t){try{let i=t();return pa(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var jr=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=_e(bb);afterRenderManager=_e(Y0);zonelessEnabled=_e(dp);rootEffectScheduler=_e(VT);dirtyFlags=0;deferredDirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new en;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=_e(Qs).hasPendingTasks.pipe(vt(t=>!t));constructor(){_e(Xl,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=_e(Cn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){let r=t instanceof Ul;if(!this._injector.get(V_).done){let f=!r&&Jy(t),p=!1;throw new Ye(405,p)}let o;r?o=t:o=this._injector.get(Zs).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=HT(o)?void 0:this._injector.get(fr),c=i||o.selector,l=o.create(ui.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(k_,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),xl(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick=()=>{if(this.tracingSnapshot!==null){let i=this.tracingSnapshot;this.tracingSnapshot=null,i.run(vp.CHANGE_DETECTION,this._tick),i.dispose();return}if(this._runningTick)throw new Ye(101,!1);let t=wt(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,wt(t),this.afterTick.next()}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ys,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let t=0;for(;this.dirtyFlags!==0&&t++<GT;)this.synchronizeOnce()}synchronizeOnce(){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)jT(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>$l(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;xl(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(nu,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>xl(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ye(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xl(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function jT(n,e,t,i){if(!t&&!$l(n))return;A_(n,e,t&&!i?0:1)}function Dy(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";b_(n,t,s[o],o,i)}function $T(n,e,t,i,r,s){let o=e.consts,a=iy(o,r),c=f_(e,n,2,i,a);return IC(e,t,c,iy(o,s)),c.attrs!==null&&Ph(c,c.attrs,!1),c.mergedAttrs!==null&&Ph(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function z_(n,e,t,i){let r=un(),s=fa(),o=Ws+n,a=r[ci],c=s.firstCreatePass?$T(o,s,r,e,t,i):s.data[o],l=qT(s,r,c,a,e,n);r[o]=l;let u=s0(c);return ip(c,!0),a_(a,l,c),!BT(c)&&QE()&&nC(s,r,l,c),kE()===0&&Xs(l,r),BE(),u&&(MC(s,r,c),m_(s,c,r)),i!==null&&SC(r,c),z_}function H_(){let n=Zn();p0()?jE():(n=n.parent,ip(n,!1));let e=n;HE(e)&&GE(),VE();let t=fa();return t.firstCreatePass&&(w0(t,n),r0(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&rb(e)&&Dy(t,e,un(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&sb(e)&&Dy(t,e,un(),e.stylesWithoutHost,!1),H_}function ma(n,e,t,i){return z_(n,e,t,i),H_(),ma}var qT=(n,e,t,i,r,s)=>(eb(!0),Q0(i,r,KE()));var Vl="en-US";var XT=Vl;function ZT(n){typeof n=="string"&&(XT=n.toLowerCase().replace(/_/g,"-"))}var YT=(n,e,t)=>{};function iu(n,e,t,i){let r=un(),s=fa(),o=Zn();return KT(s,r,r[ci],o,n,e,i),iu}function JT(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Tl],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function KT(n,e,t,i,r,s,o){let a=s0(i),l=n.firstCreatePass&&w_(n),u=e[Ai],d=S_(e),f=!0;if(i.type&3||o){let _=fi(i,e),v=o?o(_):_,m=d.length,N=o?E=>o(Ri(E[i.index])):i.index,b=null;if(!o&&a&&(b=JT(n,e,r,i.index)),b!==null){let E=b.__ngLastListenerFn__||b;E.__ngNextListenerFn__=s,b.__ngLastListenerFn__=s,f=!1}else{s=Iy(i,e,u,s),YT(_,r,s);let E=t.listen(v,r,s);d.push(s,E),l&&l.push(r,N,m,m+1)}}else s=Iy(i,e,u,s);let p=i.outputs,y;if(f&&p!==null&&(y=p[r])){let _=y.length;if(_)for(let v=0;v<_;v+=2){let m=y[v],N=y[v+1],F=e[m][N].subscribe(s),L=d.length;d.push(s,F),l&&l.push(r,i.index,L,-(L+1))}}}function Ay(n,e,t,i){let r=wt(null);try{return oi(6,e,t),t(i)!==!1}catch(s){return E_(n,s),!1}finally{oi(7,e,t),wt(r)}}function Iy(n,e,t,i){return function r(s){if(s===Function)return i;let o=n.componentOffset>-1?Ks(n.index,e):e;Tp(o,5);let a=Ay(e,t,i,s),c=r.__ngNextListenerFn__;for(;c;)a=Ay(e,t,c,s)&&a,c=c.__ngNextListenerFn__;return a}}function G_(n,e,t){RT(n,e,t)}function Rp(n){let e=un(),t=fa(),i=g0();rp(i+1);let r=Ap(t,i);if(n.dirty&&LE(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=OT(e,i);n.reset(s,Db),n.notifyOnChanges()}return!0}return!1}function Np(){return AT(un(),g0())}var Wh=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},ru=(()=>{class n{compileModuleSync(t){return new Hh(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Xy(t),s=K0(r.declarations).reduce((o,a)=>{let c=lr(a);return c&&o.push(new Js(c)),o},[]);return new Wh(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var QT=(()=>{class n{zone=_e(Gt);changeDetectionScheduler=_e(qs);applicationRef=_e(jr);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function eD({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Gt(Pt(Le({},tD()),{scheduleInRootZone:t})),[{provide:Gt,useFactory:n},{provide:Hs,multi:!0,useFactory:()=>{let i=_e(QT,{optional:!0});return()=>i.initialize()}},{provide:Hs,multi:!0,useFactory:()=>{let i=_e(nD);return()=>{i.initialize()}}},e===!0?{provide:U0,useValue:!0}:[],{provide:k0,useValue:t??F0}]}function tD(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var nD=(()=>{class n{subscription=new Wt;initialized=!1;zone=_e(Gt);pendingTasks=_e(Qs);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Gt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Gt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var iD=(()=>{class n{appRef=_e(jr);taskService=_e(Qs);ngZone=_e(Gt);zonelessEnabled=_e(dp);tracing=_e(Xl,{optional:!0});disableScheduling=_e(U0,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Wt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ol):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(_e(k0,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Mh||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 8:{this.appRef.deferredDirtyFlags|=8;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 13:{this.appRef.dirtyFlags|=16,i=!0;break}case 14:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{i=!0;break}case 10:case 9:case 7:case 11:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?dy:B0;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ol+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,dy(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function rD(){return typeof $localize<"u"&&$localize.locale||Vl}var Pp=new et("",{providedIn:"root",factory:()=>_e(Pp,ft.Optional|ft.SkipSelf)||rD()});var jh=new et("");function ml(n){return!n.moduleRef}function sD(n){let e=ml(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Gt);return t.run(()=>{ml(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Ni,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),ml(n)){let s=()=>e.destroy(),o=n.platformInjector.get(jh);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(jh);o.add(s),n.moduleRef.onDestroy(()=>{xl(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return WT(i,t,()=>{let s=e.get(V_);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(Pp,Vl);if(ZT(o||Vl),ml(n)){let a=e.get(jr);return n.rootComponent!==void 0&&a.bootstrap(n.rootComponent),a}else return oD(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function oD(n,e){let t=n.injector.get(jr);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Ye(-403,!1);e.push(n)}var Ml=null;function aD(n=[],e){return ui.create({name:e,providers:[{provide:Wl,useValue:"platform"},{provide:jh,useValue:new Set([()=>Ml=null])},...n]})}function cD(n=[]){if(Ml)return Ml;let e=aD(n);return Ml=e,zT(),lD(e),e}function lD(n){let e=n.get(mp,null);kn(n,()=>{e?.forEach(t=>t())})}var $r=(()=>{class n{static __NG_ELEMENT_ID__=uD}return n})();function uD(n){return dD(Zn(),un(),(n&16)===16)}function dD(n,e,t){if(Qh(n)&&!t){let i=Ks(n.index,e);return new zr(i,i)}else if(n.type&175){let i=e[li];return new zr(i,e)}return null}function W_(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=cD(i),s=[eD({}),{provide:qs,useExisting:iD},...t||[]],o=new Bl({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return sD({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}}var Ry=class{[ws];constructor(e){this[ws]=e}destroy(){this[ws].destroy()}};function j_(n){let e=lr(n);if(!e)return null;let t=new Js(e);return{get selector(){return t.selector},get type(){return t.componentType},get inputs(){return t.inputs},get outputs(){return t.outputs},get ngContentSelectors(){return t.ngContentSelectors},get isStandalone(){return e.standalone},get isSignal(){return e.signals}}}var Y_=null;function no(){return Y_}function J_(n){Y_??=n}var ou=class{};var pn=new et(""),Fp=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:()=>_e(gD),providedIn:"platform"})}return n})(),K_=new et(""),gD=(()=>{class n extends Fp{_location;_history;_doc=_e(pn);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return no().getBaseHref(this._doc)}onPopState(t){let i=no().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=no().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Up(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function $_(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function Li(n){return n&&n[0]!=="?"?"?"+n:n}var qr=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:()=>_e(kp),providedIn:"root"})}return n})(),Q_=new et(""),kp=(()=>{class n extends qr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??_e(pn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Up(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Li(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Li(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Li(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(st(Fp),st(Q_,8))};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ex=(()=>{class n extends qr{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(t){let i=Up(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Li(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Li(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(st(Fp),st(Q_,8))};static \u0275prov=Ze({token:n,factory:n.\u0275fac})}return n})(),io=(()=>{class n{_subject=new en;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=_D($_(q_(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Li(i))}normalize(t){return n.stripTrailingSlash(yD(this._basePath,q_(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Li(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Li(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Li;static joinWithSlash=Up;static stripTrailingSlash=$_;static \u0275fac=function(i){return new(i||n)(st(qr))};static \u0275prov=Ze({token:n,factory:()=>vD(),providedIn:"root"})}return n})();function vD(){return new io(st(qr))}function yD(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function q_(n){return n.replace(/\/index.html$/,"")}function _D(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function tx(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Bp="browser",xD="server";function MD(n){return n===Bp}function Vp(n){return n===xD}var nx=(()=>{class n{static \u0275prov=Ze({token:n,providedIn:"root",factory:()=>MD(_e(Gr))?new Op(_e(pn),window):new Lp})}return n})(),Op=class{document;window;offset=()=>[0,0];constructor(e,t){this.document=e,this.window=t}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let t=SD(this.document,e);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let t=e.getBoundingClientRect(),i=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(i-s[0],r-s[1])}};function SD(n,e){let t=n.getElementById(e)||n.getElementsByName(e)[0];if(t)return t;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}r=i.nextNode()}}return null}var Lp=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},au=class{};var Hp=class extends ou{supportsDOMEvents=!0},Gp=class n extends Hp{static makeCurrent(){J_(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=wD();return t==null?null:ED(t)}resetBaseElement(){ga=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return tx(document.cookie,e)}},ga=null;function wD(){return ga=ga||document.querySelector("base"),ga?ga.getAttribute("href"):null}function ED(n){return new URL(n,document.baseURI).pathname}var bD=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac})}return n})(),Wp=new et(""),cx=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Ye(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(st(Wp),st(Gt))};static \u0275prov=Ze({token:n,factory:n.\u0275fac})}return n})(),lu=class{_doc;constructor(e){this._doc=e}manager},cu="ng-app-id";function ix(n){for(let e of n)e.remove()}function rx(n,e){let t=e.createElement("style");return t.textContent=n,t}function CD(n,e,t,i){let r=n.head?.querySelectorAll(`style[${cu}="${e}"],link[${cu}="${e}"]`);if(r)for(let s of r)s.removeAttribute(cu),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function jp(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var lx=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=Vp(s),CD(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,rx);i?.forEach(r=>this.addUsage(r,this.external,jp))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(ix(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])ix(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,rx(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,jp(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(cu,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(st(pn),st(pp),st(gp,8),st(Gr))};static \u0275prov=Ze({token:n,factory:n.\u0275fac})}return n})(),zp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},qp=/%COMP%/g,ux="%COMP%",TD=`_nghost-${ux}`,DD=`_ngcontent-${ux}`,AD=!0,ID=new et("",{providedIn:"root",factory:()=>AD});function RD(n){return DD.replace(qp,n)}function ND(n){return TD.replace(qp,n)}function dx(n,e){return e.map(t=>t.replace(qp,n))}var sx=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.platformIsServer=Vp(a),this.defaultRenderer=new va(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===di.ShadowDom&&(i=Pt(Le({},i),{encapsulation:di.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof uu?r.applyToHost(t):r instanceof ya&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(i.encapsulation){case di.Emulated:s=new uu(c,l,i,this.appId,u,o,a,d);break;case di.ShadowDom:return new $p(c,l,t,i,o,a,this.nonce,d);default:s=new ya(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(i){return new(i||n)(st(cx),st(lx),st(pp),st(ID),st(pn),st(Gr),st(Gt),st(gp))};static \u0275prov=Ze({token:n,factory:n.\u0275fac})}return n})(),va=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(zp[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(ox(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(ox(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ye(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=zp[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=zp[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Wr.DashCase|Wr.Important)?e.style.setProperty(t,i,r&Wr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Wr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=no().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function ox(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var $p=class extends va{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=dx(r.id,r.styles);for(let d of l){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=d,this.shadowRoot.appendChild(f)}let u=r.getExternalStyles?.();if(u)for(let d of u){let f=jp(d,s);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ya=class extends va{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?dx(c,i.styles):i.styles,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},uu=class extends ya{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=RD(l),this.hostAttr=ND(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},PD=(()=>{class n extends lu{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static \u0275fac=function(i){return new(i||n)(st(pn))};static \u0275prov=Ze({token:n,factory:n.\u0275fac})}return n})(),ax=["alt","control","meta","shift"],OD={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},LD={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},FD=(()=>{class n extends lu{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>no().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),ax.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=OD[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ax.forEach(o=>{if(o!==r){let a=LD[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(st(pn))};static \u0275prov=Ze({token:n,factory:n.\u0275fac})}return n})();function fx(n,e){return W_(Le({rootComponent:n},UD(e)))}function UD(n){return{appProviders:[...HD,...n?.providers??[]],platformProviders:zD}}function kD(){Gp.makeCurrent()}function BD(){return new Ni}function VD(){return X0(document),document}var zD=[{provide:Gr,useValue:Bp},{provide:mp,useValue:kD,multi:!0},{provide:pn,useFactory:VD,deps:[]}];var HD=[{provide:Wl,useValue:"root"},{provide:Ni,useFactory:BD,deps:[]},{provide:Wp,useClass:PD,multi:!0,deps:[pn,Gt,Gr]},{provide:Wp,useClass:FD,multi:!0,deps:[pn]},sx,lx,cx,{provide:Ys,useExisting:sx},{provide:au,useClass:bD,deps:[]},[]];var hx=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(st(pn))};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ct="primary",Oa=Symbol("RouteTitle"),Kp=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function lo(n){return new Kp(n)}function WD(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function jD(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!hi(n[t],e[t]))return!1;return!0}function hi(n,e){let t=n?Qp(n):void 0,i=e?Qp(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Ex(n[r],e[r]))return!1;return!0}function Qp(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Ex(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function bx(n){return n.length>0?n[n.length-1]:null}function mr(n){return Gf(n)?n:pa(n)?Ht(Promise.resolve(n)):Je(n)}var $D={exact:Tx,subset:Dx},Cx={exact:qD,subset:XD,ignored:()=>!0};function px(n,e,t){return $D[t.paths](n.root,e.root,t.matrixParams)&&Cx[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function qD(n,e){return hi(n,e)}function Tx(n,e,t){if(!Zr(n.segments,e.segments)||!hu(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Tx(n.children[i],e.children[i],t))return!1;return!0}function XD(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>Ex(n[t],e[t]))}function Dx(n,e,t){return Ax(n,e,e.segments,t)}function Ax(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Zr(r,t)||e.hasChildren()||!hu(r,t,i))}else if(n.segments.length===t.length){if(!Zr(n.segments,t)||!hu(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!Dx(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Zr(n.segments,r)||!hu(n.segments,r,i)||!n.children[ct]?!1:Ax(n.children[ct],e,s,i)}}function hu(n,e,t){return e.every((i,r)=>Cx[t](n[r].parameters,i.parameters))}var Ui=class{root;queryParams;fragment;_queryParamMap;constructor(e=new bt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=lo(this.queryParams),this._queryParamMap}toString(){return JD.serialize(this)}},bt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return pu(this)}},Xr=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=lo(this.parameters),this._parameterMap}toString(){return Rx(this)}};function ZD(n,e){return Zr(n,e)&&n.every((t,i)=>hi(t.parameters,e[i].parameters))}function Zr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function YD(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===ct&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==ct&&(t=t.concat(e(r,i)))}),t}var La=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:()=>new uo,providedIn:"root"})}return n})(),uo=class{parse(e){let t=new tm(e);return new Ui(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${_a(e.root,!0)}`,i=eA(e.queryParams),r=typeof e.fragment=="string"?`#${KD(e.fragment)}`:"";return`${t}${i}${r}`}},JD=new uo;function pu(n){return n.segments.map(e=>Rx(e)).join("/")}function _a(n,e){if(!n.hasChildren())return pu(n);if(e){let t=n.children[ct]?_a(n.children[ct],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==ct&&i.push(`${r}:${_a(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=YD(n,(i,r)=>r===ct?[_a(n.children[ct],!1)]:[`${r}:${_a(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[ct]!=null?`${pu(n)}/${t[0]}`:`${pu(n)}/(${t.join("//")})`}}function Ix(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function du(n){return Ix(n).replace(/%3B/gi,";")}function KD(n){return encodeURI(n)}function em(n){return Ix(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function mu(n){return decodeURIComponent(n)}function mx(n){return mu(n.replace(/\+/g,"%20"))}function Rx(n){return`${em(n.path)}${QD(n.parameters)}`}function QD(n){return Object.entries(n).map(([e,t])=>`;${em(e)}=${em(t)}`).join("")}function eA(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${du(t)}=${du(r)}`).join("&"):`${du(t)}=${du(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var tA=/^[^\/()?;#]+/;function Xp(n){let e=n.match(tA);return e?e[0]:""}var nA=/^[^\/()?;=#]+/;function iA(n){let e=n.match(nA);return e?e[0]:""}var rA=/^[^=?&#]+/;function sA(n){let e=n.match(rA);return e?e[0]:""}var oA=/^[^&#]+/;function aA(n){let e=n.match(oA);return e?e[0]:""}var tm=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new bt([],{}):new bt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[ct]=new bt(e,t)),i}parseSegment(){let e=Xp(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ye(4009,!1);return this.capture(e),new Xr(mu(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=iA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Xp(this.remaining);r&&(i=r,this.capture(i))}e[mu(t)]=mu(i)}parseQueryParam(e){let t=sA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=aA(this.remaining);o&&(i=o,this.capture(i))}let r=mx(t),s=mx(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Xp(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ye(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=ct);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[ct]:new bt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ye(4011,!1)}};function Nx(n){return n.segments.length>0?new bt([],{[ct]:n}):n}function Px(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=Px(r);if(i===ct&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new bt(n.segments,e);return cA(t)}function cA(n){if(n.numberOfChildren===1&&n.children[ct]){let e=n.children[ct];return new bt(n.segments.concat(e.segments),e.children)}return n}function ba(n){return n instanceof Ui}function lA(n,e,t=null,i=null){let r=Ox(n);return Lx(r,e,t,i)}function Ox(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new bt(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=Nx(i);return e??r}function Lx(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Zp(r,r,r,t,i);let s=uA(e);if(s.toRoot())return Zp(r,r,new bt([],{}),t,i);let o=dA(s,r,n),a=o.processChildren?Sa(o.segmentGroup,o.index,s.commands):Ux(o.segmentGroup,o.index,s.commands);return Zp(r,o.segmentGroup,a,t,i)}function gu(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Ca(n){return typeof n=="object"&&n!=null&&n.outlets}function Zp(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=Fx(n,e,t);let a=Nx(Px(o));return new Ui(a,s,r)}function Fx(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=Fx(s,e,t)}),new bt(n.segments,i)}var vu=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&gu(i[0]))throw new Ye(4003,!1);let r=i.find(Ca);if(r&&r!==bx(i))throw new Ye(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function uA(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new vu(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new vu(t,e,i)}var oo=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function dA(n,e,t){if(n.isAbsolute)return new oo(e,!0,0);if(!t)return new oo(e,!1,NaN);if(t.parent===null)return new oo(t,!0,0);let i=gu(n.commands[0])?0:1,r=t.segments.length-1+i;return fA(t,r,n.numberOfDoubleDots)}function fA(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Ye(4005,!1);r=i.segments.length}return new oo(i,!1,r-s)}function hA(n){return Ca(n[0])?n[0].outlets:{[ct]:n}}function Ux(n,e,t){if(n??=new bt([],{}),n.segments.length===0&&n.hasChildren())return Sa(n,e,t);let i=pA(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new bt(n.segments.slice(0,i.pathIndex),{});return s.children[ct]=new bt(n.segments.slice(i.pathIndex),n.children),Sa(s,0,r)}else return i.match&&r.length===0?new bt(n.segments,{}):i.match&&!n.hasChildren()?nm(n,e,t):i.match?Sa(n,0,r):nm(n,e,t)}function Sa(n,e,t){if(t.length===0)return new bt(n.segments,{});{let i=hA(t),r={};if(Object.keys(i).some(s=>s!==ct)&&n.children[ct]&&n.numberOfChildren===1&&n.children[ct].segments.length===0){let s=Sa(n.children[ct],e,t);return new bt(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Ux(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new bt(n.segments,r)}}function pA(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Ca(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!vx(c,l,o))return s;i+=2}else{if(!vx(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function nm(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Ca(s)){let c=mA(s.outlets);return new bt(i,c)}if(r===0&&gu(t[0])){let c=n.segments[e];i.push(new Xr(c.path,gx(t[0]))),r++;continue}let o=Ca(s)?s.outlets[ct]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&gu(a)?(i.push(new Xr(o,gx(a))),r+=2):(i.push(new Xr(o,{})),r++)}return new bt(i,{})}function mA(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=nm(new bt([],{}),0,i))}),e}function gx(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function vx(n,e,t){return n==t.path&&hi(e,t.parameters)}var wa="imperative",Kt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Kt||{}),Bn=class{id;url;constructor(e,t){this.id=e,this.url=t}},fo=class extends Bn{type=Kt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ki=class extends Bn{urlAfterRedirects;type=Kt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Dn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(Dn||{}),yu=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(yu||{}),Fi=class extends Bn{reason;code;type=Kt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},hr=class extends Bn{reason;code;type=Kt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},Ta=class extends Bn{error;target;type=Kt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},_u=class extends Bn{urlAfterRedirects;state;type=Kt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},im=class extends Bn{urlAfterRedirects;state;type=Kt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},rm=class extends Bn{urlAfterRedirects;state;shouldActivate;type=Kt.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},sm=class extends Bn{urlAfterRedirects;state;type=Kt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},om=class extends Bn{urlAfterRedirects;state;type=Kt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},am=class{route;type=Kt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},cm=class{route;type=Kt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},lm=class{snapshot;type=Kt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},um=class{snapshot;type=Kt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},dm=class{snapshot;type=Kt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fm=class{snapshot;type=Kt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xu=class{routerEvent;position;anchor;type=Kt.Scroll;constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},Da=class{},ho=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function gA(n,e){return n.providers&&!n._injector&&(n._injector=Jl(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Yn(n){return n.outlet||ct}function vA(n,e){let t=n.filter(i=>Yn(i)===e);return t.push(...n.filter(i=>Yn(i)!==e)),t}function Fa(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var hm=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Fa(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Ua(this.rootInjector)}},Ua=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new hm(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(st(Cn))};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Mu=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=pm(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=pm(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=mm(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return mm(e,this._root).map(t=>t.value)}};function pm(n,e){if(n===e.value)return e;for(let t of e.children){let i=pm(n,t);if(i)return i}return null}function mm(n,e){if(n===e.value)return[e];for(let t of e.children){let i=mm(n,t);if(i.length)return i.unshift(e),i}return[]}var Tn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function so(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Su=class extends Mu{snapshot;constructor(e,t){super(e),this.snapshot=t,Em(this,e)}toString(){return this.snapshot.toString()}};function kx(n){let e=yA(n),t=new tn([new Xr("",{})]),i=new tn({}),r=new tn({}),s=new tn({}),o=new tn(""),a=new Yr(t,i,s,o,r,ct,n,e.root);return a.snapshot=e.root,new Su(new Tn(a,[]),e)}function yA(n){let e={},t={},i={},r="",s=new ao([],e,i,r,t,ct,n,null,{});return new Eu("",new Tn(s,[]))}var Yr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(vt(l=>l[Oa]))??Je(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(vt(e=>lo(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(vt(e=>lo(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function wu(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:Le(Le({},e.params),n.params),data:Le(Le({},e.data),n.data),resolve:Le(Le(Le(Le({},n.data),e.data),r?.data),n._resolvedData)}:i={params:Le({},n.params),data:Le({},n.data),resolve:Le(Le({},n.data),n._resolvedData??{})},r&&Vx(r)&&(i.resolve[Oa]=r.title),i}var ao=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Oa]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=lo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=lo(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Eu=class extends Mu{url;constructor(e,t){super(t),this.url=e,Em(this,t)}toString(){return Bx(this._root)}};function Em(n,e){e.value._routerState=n,e.children.forEach(t=>Em(n,t))}function Bx(n){let e=n.children.length>0?` { ${n.children.map(Bx).join(", ")} } `:"";return`${n.value}${e}`}function Yp(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,hi(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),hi(e.params,t.params)||n.paramsSubject.next(t.params),jD(e.url,t.url)||n.urlSubject.next(t.url),hi(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function gm(n,e){let t=hi(n.params,e.params)&&ZD(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||gm(n.parent,e.parent))}function Vx(n){return typeof n.title=="string"||n.title===null}var _A=new et(""),bm=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ct;activateEvents=new Sn;deactivateEvents=new Sn;attachEvents=new Sn;detachEvents=new Sn;routerOutletData=z0(void 0);parentContexts=_e(Ua);location=_e(to);changeDetector=_e($r);inputBinder=_e(Du,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ye(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ye(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ye(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Ye(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new vm(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=Ip({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ep]})}return n})(),vm=class n{route;childContexts;parent;outletData;__ngOutletInjector(e){return new n(this.route,this.childContexts,e,this.outletData)}constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Yr?this.route:e===Ua?this.childContexts:e===_A?this.outletData:this.parent.get(e,t)}},Du=new et(""),yx=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:i}=t,r=Jo([i.queryParams,i.params,i.data]).pipe(Ln(([s,o,a],c)=>(a=Le(Le(Le({},s),o),a),c===0?Je(a):Promise.resolve(a)))).subscribe(s=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(t);return}let o=j_(i.component);if(!o){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of o.inputs)t.activatedComponentRef.setInput(a,s[a])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac})}return n})();function xA(n,e,t){let i=Aa(n,e._root,t?t._root:void 0);return new Su(i,e)}function Aa(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=MA(n,e,t);return new Tn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Aa(n,a)),o}}let i=SA(e.value),r=e.children.map(s=>Aa(n,s));return new Tn(i,r)}}function MA(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Aa(n,i,r);return Aa(n,i)})}function SA(n){return new Yr(new tn(n.url),new tn(n.params),new tn(n.queryParams),new tn(n.fragment),new tn(n.data),n.outlet,n.component,n)}var Ia=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},zx="ngNavigationCancelingError";function bu(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=ba(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Hx(!1,Dn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function Hx(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[zx]=!0,t.cancellationCode=e,t}function wA(n){return Gx(n)&&ba(n.url)}function Gx(n){return!!n&&n[zx]}var EA=(n,e,t,i)=>vt(r=>(new ym(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),ym=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Yp(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=so(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=so(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=so(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=so(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new fm(s.value.snapshot))}),e.children.length&&this.forwardEvent(new um(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Yp(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Yp(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Cu=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},co=class{component;route;constructor(e,t){this.component=e,this.route=t}};function bA(n,e,t){let i=n._root,r=e?e._root:null;return xa(i,r,t,[i.value])}function CA(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function mo(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Uy(n)?n:e.get(n):i}function xa(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=so(e);return n.children.forEach(o=>{TA(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Ea(a,t.getContext(o),r)),r}function TA(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=DA(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Cu(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?xa(n,e,a?a.children:null,i,r):xa(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new co(a.outlet.component,o))}else o&&Ea(e,a,r),r.canActivateChecks.push(new Cu(i)),s.component?xa(n,null,a?a.children:null,i,r):xa(n,null,t,i,r);return r}function DA(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Zr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Zr(n.url,e.url)||!hi(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!gm(n,e)||!hi(n.queryParams,e.queryParams);case"paramsChange":default:return!gm(n,e)}}function Ea(n,e,t){let i=so(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Ea(o,e.children.getContext(s),t):Ea(o,null,t):Ea(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new co(e.outlet.component,r)):t.canDeactivateChecks.push(new co(null,r)):t.canDeactivateChecks.push(new co(null,r))}function ka(n){return typeof n=="function"}function AA(n){return typeof n=="boolean"}function IA(n){return n&&ka(n.canLoad)}function RA(n){return n&&ka(n.canActivate)}function NA(n){return n&&ka(n.canActivateChild)}function PA(n){return n&&ka(n.canDeactivate)}function OA(n){return n&&ka(n.canMatch)}function Wx(n){return n instanceof Ci||n?.name==="EmptyError"}var fu=Symbol("INITIAL_VALUE");function po(){return Ln(n=>Jo(n.map(e=>e.pipe(Ti(1),qf(fu)))).pipe(vt(e=>{for(let t of e)if(t!==!0){if(t===fu)return fu;if(t===!1||LA(t))return t}return!0}),On(e=>e!==fu),Ti(1)))}function LA(n){return ba(n)||n instanceof Ia}function FA(n,e){return jt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Je(Pt(Le({},t),{guardsResult:!0})):UA(o,i,r,n).pipe(jt(a=>a&&AA(a)?kA(i,s,n,e):Je(a)),vt(a=>Pt(Le({},t),{guardsResult:a})))})}function UA(n,e,t,i){return Ht(n).pipe(jt(r=>GA(r.component,r.route,t,e,i)),Di(r=>r!==!0,!0))}function kA(n,e,t,i){return Ht(e).pipe(Or(r=>Ps(VA(r.route.parent,i),BA(r.route,i),HA(n,r.path,t),zA(n,r.route,t))),Di(r=>r!==!0,!0))}function BA(n,e){return n!==null&&e&&e(new dm(n)),Je(!0)}function VA(n,e){return n!==null&&e&&e(new lm(n)),Je(!0)}function zA(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Je(!0);let r=i.map(s=>fl(()=>{let o=Fa(e)??t,a=mo(s,o),c=RA(a)?a.canActivate(e,n):kn(o,()=>a(e,n));return mr(c).pipe(Di())}));return Je(r).pipe(po())}function HA(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>CA(o)).filter(o=>o!==null).map(o=>fl(()=>{let a=o.guards.map(c=>{let l=Fa(o.node)??t,u=mo(c,l),d=NA(u)?u.canActivateChild(i,n):kn(l,()=>u(i,n));return mr(d).pipe(Di())});return Je(a).pipe(po())}));return Je(s).pipe(po())}function GA(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Je(!0);let o=s.map(a=>{let c=Fa(e)??r,l=mo(a,c),u=PA(l)?l.canDeactivate(n,e,t,i):kn(c,()=>l(n,e,t,i));return mr(u).pipe(Di())});return Je(o).pipe(po())}function WA(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Je(!0);let s=r.map(o=>{let a=mo(o,n),c=IA(a)?a.canLoad(e,t):kn(n,()=>a(e,t));return mr(c)});return Je(s).pipe(po(),jx(i))}function jx(n){return Bf(nn(e=>{if(typeof e!="boolean")throw bu(n,e)}),vt(e=>e===!0))}function jA(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Je(!0);let s=r.map(o=>{let a=mo(o,n),c=OA(a)?a.canMatch(e,t):kn(n,()=>a(e,t));return mr(c)});return Je(s).pipe(po(),jx(i))}var Ra=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},Na=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function ro(n){return Rs(new Ra(n))}function $A(n){return Rs(new Ye(4e3,!1))}function qA(n){return Rs(Hx(!1,Dn.GuardRejected))}var _m=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Je(i);if(r.numberOfChildren>1||!r.children[ct])return $A(`${e.redirectTo}`);r=r.children[ct]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:p,data:y,title:_}=r,v=kn(s,()=>a({params:p,data:y,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:_}));if(v instanceof Ui)throw new Na(v);t=v}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new Na(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Ui(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new bt(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ye(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},xm={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function XA(n,e,t,i,r){let s=$x(n,e,t);return s.matched?(i=gA(e,i),jA(i,e,t,r).pipe(vt(o=>o===!0?s:Le({},xm)))):Je(s)}function $x(n,e,t){if(e.path==="**")return ZA(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?Le({},xm):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||WD)(t,n,e);if(!r)return Le({},xm);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?Le(Le({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function ZA(n){return{matched:!0,parameters:n.length>0?bx(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function _x(n,e,t,i){return t.length>0&&KA(n,t,i)?{segmentGroup:new bt(e,JA(i,new bt(t,n.children))),slicedSegments:[]}:t.length===0&&QA(n,t,i)?{segmentGroup:new bt(n.segments,YA(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new bt(n.segments,n.children),slicedSegments:t}}function YA(n,e,t,i){let r={};for(let s of t)if(Au(n,e,s)&&!i[Yn(s)]){let o=new bt([],{});r[Yn(s)]=o}return Le(Le({},i),r)}function JA(n,e){let t={};t[ct]=e;for(let i of n)if(i.path===""&&Yn(i)!==ct){let r=new bt([],{});t[Yn(i)]=r}return t}function KA(n,e,t){return t.some(i=>Au(n,e,i)&&Yn(i)!==ct)}function QA(n,e,t){return t.some(i=>Au(n,e,i))}function Au(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function eI(n,e,t){return e.length===0&&!n.children[t]}var Mm=class{};function tI(n,e,t,i,r,s,o="emptyOnly"){return new Sm(n,e,t,i,r,o,s).recognize()}var nI=31,Sm=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new _m(this.urlSerializer,this.urlTree)}noMatchError(e){return new Ye(4002,`'${e.segmentGroup}'`)}recognize(){let e=_x(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(vt(({children:t,rootSnapshot:i})=>{let r=new Tn(i,t),s=new Eu("",r),o=lA(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new ao([],Object.freeze({}),Object.freeze(Le({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ct,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,ct,t).pipe(vt(i=>({children:i,rootSnapshot:t})),sr(i=>{if(i instanceof Na)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Ra?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(vt(o=>o instanceof Tn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Ht(s).pipe(Or(o=>{let a=i.children[o],c=vA(t,o);return this.processSegmentGroup(e,c,a,o,r)}),$f((o,a)=>(o.push(...a),o)),or(null),jf(),jt(o=>{if(o===null)return ro(i);let a=qx(o);return iI(a),Je(a)}))}processSegment(e,t,i,r,s,o,a){return Ht(t).pipe(Or(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(sr(l=>{if(l instanceof Ra)return Je(null);throw l}))),Di(c=>!!c),sr(c=>{if(Wx(c))return eI(i,r,s)?Je(new Mm):ro(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return Yn(i)!==o&&(o===ct||!Au(r,s,i))?ro(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):ro(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=$x(t,r,s);if(!c)return ro(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>nI&&(this.allowRedirects=!1));let p=new ao(s,l,Object.freeze(Le({},this.urlTree.queryParams)),this.urlTree.fragment,xx(r),Yn(r),r.component??r._loadedComponent??null,r,Mx(r)),y=wu(p,a,this.paramsInheritanceStrategy);p.params=Object.freeze(y.params),p.data=Object.freeze(y.data);let _=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,p,e);return this.applyRedirects.lineralizeSegments(r,_).pipe(jt(v=>this.processSegment(e,i,t,v.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=XA(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Ln(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Ln(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:p}=c,y=new ao(f,d,Object.freeze(Le({},this.urlTree.queryParams)),this.urlTree.fragment,xx(i),Yn(i),i.component??i._loadedComponent??null,i,Mx(i)),_=wu(y,o,this.paramsInheritanceStrategy);y.params=Object.freeze(_.params),y.data=Object.freeze(_.data);let{segmentGroup:v,slicedSegments:m}=_x(t,f,p,l);if(m.length===0&&v.hasChildren())return this.processChildren(u,l,v,y).pipe(vt(b=>new Tn(y,b)));if(l.length===0&&m.length===0)return Je(new Tn(y,[]));let N=Yn(i)===s;return this.processSegment(u,l,v,m,N?ct:s,!0,y).pipe(vt(b=>new Tn(y,b instanceof Tn?[b]:[])))}))):ro(t)))}getChildConfig(e,t,i){return t.children?Je({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Je({routes:t._loadedRoutes,injector:t._loadedInjector}):WA(e,t,i,this.urlSerializer).pipe(jt(r=>r?this.configLoader.loadChildren(e,t).pipe(nn(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):qA(t))):Je({routes:[],injector:e})}};function iI(n){n.sort((e,t)=>e.value.outlet===ct?-1:t.value.outlet===ct?1:e.value.outlet.localeCompare(t.value.outlet))}function rI(n){let e=n.value.routeConfig;return e&&e.path===""}function qx(n){let e=[],t=new Set;for(let i of n){if(!rI(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=qx(i.children);e.push(new Tn(i.value,r))}return e.filter(i=>!t.has(i))}function xx(n){return n.data||{}}function Mx(n){return n.resolve||{}}function sI(n,e,t,i,r,s){return jt(o=>tI(n,e,t,i,o.extractedUrl,r,s).pipe(vt(({state:a,tree:c})=>Pt(Le({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function oI(n,e){return jt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Je(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of Xx(c))o.add(l);let a=0;return Ht(o).pipe(Or(c=>s.has(c)?aI(c,i,n,e):(c.data=wu(c,c.parent,n).resolve,Je(void 0))),nn(()=>a++),Os(1),jt(c=>a===o.size?Je(t):Mn))})}function Xx(n){let e=n.children.map(t=>Xx(t)).flat();return[n,...e]}function aI(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!Vx(r)&&(s[Oa]=r.title),cI(s,n,e,i).pipe(vt(o=>(n._resolvedData=o,n.data=wu(n,n.parent,t).resolve,null)))}function cI(n,e,t,i){let r=Qp(n);if(r.length===0)return Je({});let s={};return Ht(r).pipe(jt(o=>lI(n[o],e,t,i).pipe(Di(),nn(a=>{if(a instanceof Ia)throw bu(new uo,a);s[o]=a}))),Os(1),Wf(s),sr(o=>Wx(o)?Mn:Rs(o)))}function lI(n,e,t,i){let r=Fa(e)??i,s=mo(n,r),o=s.resolve?s.resolve(e,t):kn(r,()=>s(e,t));return mr(o)}function Jp(n){return Ln(e=>{let t=n(e);return t?Ht(t).pipe(vt(()=>e)):Je(e)})}var Zx=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===ct);return i}getResolvedTitleForRoute(t){return t.data[Oa]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:()=>_e(uI),providedIn:"root"})}return n})(),uI=(()=>{class n extends Zx{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(st(hx))};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ba=new et("",{providedIn:"root",factory:()=>({})}),dI=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Kl({type:n,selectors:[["ng-component"]],decls:1,vars:0,template:function(i,r){i&1&&ma(0,"router-outlet")},dependencies:[bm],encapsulation:2})}return n})();function Cm(n){let e=n.children&&n.children.map(Cm),t=e?Pt(Le({},n),{children:e}):Le({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==ct&&(t.component=dI),t}var Pa=new et(""),Tm=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=_e(ru);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Je(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=mr(t.loadComponent()).pipe(vt(Yx),nn(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),Ko(()=>{this.componentLoaders.delete(t)})),r=new Is(i,()=>new en).pipe(As());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Je({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=fI(i,this.compiler,t,this.onLoadEndListener).pipe(Ko(()=>{this.childrenLoaders.delete(i)})),o=new Is(s,()=>new en).pipe(As());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function fI(n,e,t,i){return mr(n.loadChildren()).pipe(vt(Yx),jt(r=>r instanceof ca||Array.isArray(r)?Je(r):Ht(e.compileModuleAsync(r))),vt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Pa,[],{optional:!0,self:!0}).flat()),{routes:o.map(Cm),injector:s}}))}function hI(n){return n&&typeof n=="object"&&"default"in n}function Yx(n){return hI(n)?n.default:n}var Dm=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:()=>_e(pI),providedIn:"root"})}return n})(),pI=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Jx=new et(""),Kx=new et("");function mI(n,e,t){let i=n.get(Kx),r=n.get(pn);return n.get(Gt).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let s,o=new Promise(l=>{s=l}),a=r.startViewTransition(()=>(s(),gI(n))),{onViewTransitionCreated:c}=i;return c&&kn(n,()=>c({transition:a,from:e,to:t})),o})}function gI(n){return new Promise(e=>{_p({read:()=>setTimeout(e)},{injector:n})})}var Qx=new et(""),Am=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new en;transitionAbortSubject=new en;configLoader=_e(Tm);environmentInjector=_e(Cn);urlSerializer=_e(La);rootContexts=_e(Ua);location=_e(io);inputBindingEnabled=_e(Du,{optional:!0})!==null;titleStrategy=_e(Zx);options=_e(Ba,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=_e(Dm);createViewTransition=_e(Jx,{optional:!0});navigationErrorHandler=_e(Qx,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Je(void 0);rootComponentType=null;constructor(){let t=r=>this.events.next(new am(r)),i=r=>this.events.next(new cm(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(Pt(Le(Le({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new tn({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:wa,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(On(s=>s.id!==0),vt(s=>Pt(Le({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Ln(s=>{let o=!1,a=!1;return Je(s).pipe(Ln(c=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",Dn.SupersededByNewNavigation),Mn;this.currentTransition=s,this.currentNavigation={id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:this.lastSuccessfulNavigation?Pt(Le({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload"){let d="";return this.events.next(new hr(c.id,this.urlSerializer.serialize(c.rawUrl),d,yu.IgnoredSameUrlNavigation)),c.resolve(!1),Mn}if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return Je(c).pipe(Ln(d=>{let f=this.transitions?.getValue();return this.events.next(new fo(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions?.getValue()?Mn:Promise.resolve(d)}),sI(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),nn(d=>{s.targetSnapshot=d.targetSnapshot,s.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=Pt(Le({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let f=new _u(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:d,extractedUrl:f,source:p,restoredState:y,extras:_}=c,v=new fo(d,this.urlSerializer.serialize(f),p,y);this.events.next(v);let m=kx(this.rootComponentType).snapshot;return this.currentTransition=s=Pt(Le({},c),{targetSnapshot:m,urlAfterRedirects:f,extras:Pt(Le({},_),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,Je(s)}else{let d="";return this.events.next(new hr(c.id,this.urlSerializer.serialize(c.extractedUrl),d,yu.IgnoredByUrlHandlingStrategy)),c.resolve(!1),Mn}}),nn(c=>{let l=new im(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),vt(c=>(this.currentTransition=s=Pt(Le({},c),{guards:bA(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),s)),FA(this.environmentInjector,c=>this.events.next(c)),nn(c=>{if(s.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw bu(this.urlSerializer,c.guardsResult);let l=new rm(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);this.events.next(l)}),On(c=>c.guardsResult?!0:(this.cancelNavigationTransition(c,"",Dn.GuardRejected),!1)),Jp(c=>{if(c.guards.canActivateChecks.length)return Je(c).pipe(nn(l=>{let u=new sm(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Ln(l=>{let u=!1;return Je(l).pipe(oI(this.paramsInheritanceStrategy,this.environmentInjector),nn({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(l,"",Dn.NoDataFromResolver)}}))}),nn(l=>{let u=new om(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}))}),Jp(c=>{let l=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(nn(f=>{u.component=f}),vt(()=>{})));for(let f of u.children)d.push(...l(f));return d};return Jo(l(c.targetSnapshot.root)).pipe(or(null),Ti(1))}),Jp(()=>this.afterPreactivation()),Ln(()=>{let{currentSnapshot:c,targetSnapshot:l}=s,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?Ht(u).pipe(vt(()=>s)):Je(s)}),vt(c=>{let l=xA(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=s=Pt(Le({},c),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,s}),nn(()=>{this.events.next(new Da)}),EA(this.rootContexts,t.routeReuseStrategy,c=>this.events.next(c),this.inputBindingEnabled),Ti(1),nn({next:c=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new ki(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)},complete:()=>{o=!0}}),Xf(this.transitionAbortSubject.pipe(nn(c=>{throw c}))),Ko(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",Dn.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),sr(c=>{if(a=!0,Gx(c))this.events.next(new Fi(s.id,this.urlSerializer.serialize(s.extractedUrl),c.message,c.cancellationCode)),wA(c)?this.events.next(new ho(c.url,c.navigationBehaviorOptions)):s.resolve(!1);else{let l=new Ta(s.id,this.urlSerializer.serialize(s.extractedUrl),c,s.targetSnapshot??void 0);try{let u=kn(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof Ia){let{message:d,cancellationCode:f}=bu(this.urlSerializer,u);this.events.next(new Fi(s.id,this.urlSerializer.serialize(s.extractedUrl),d,f)),this.events.next(new ho(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(u){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(u)}}return Mn}))}))}cancelNavigationTransition(t,i,r){let s=new Fi(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function vI(n){return n!==wa}var yI=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:()=>_e(_I),providedIn:"root"})}return n})(),wm=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},_I=(()=>{class n extends wm{static \u0275fac=(()=>{let t;return function(r){return(t||(t=lp(n)))(r||n)}})();static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),eM=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:()=>_e(xI),providedIn:"root"})}return n})(),xI=(()=>{class n extends eM{location=_e(io);urlSerializer=_e(La);options=_e(Ba,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=_e(Dm);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ui;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=kx(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof fo)this.stateMemento=this.createStateMemento();else if(t instanceof hr)this.rawUrlTree=i.initialUrl;else if(t instanceof _u){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof Da?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof Fi&&(t.code===Dn.GuardRejected||t.code===Dn.NoDataFromResolver)?this.restoreHistory(i):t instanceof Ta?this.restoreHistory(i,!0):t instanceof ki&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof Ui?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=Le(Le({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=Le(Le({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=lp(n)))(r||n)}})();static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ma=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Ma||{});function tM(n,e){n.events.pipe(On(t=>t instanceof ki||t instanceof Fi||t instanceof Ta||t instanceof hr),vt(t=>t instanceof ki||t instanceof hr?Ma.COMPLETE:(t instanceof Fi?t.code===Dn.Redirect||t.code===Dn.SupersededByNewNavigation:!1)?Ma.REDIRECTING:Ma.FAILED),On(t=>t!==Ma.REDIRECTING),Ti(1)).subscribe(()=>{e()})}var MI={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},SI={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},pr=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=_e(eu);stateManager=_e(eM);options=_e(Ba,{optional:!0})||{};pendingTasks=_e(Qs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=_e(Am);urlSerializer=_e(La);location=_e(io);urlHandlingStrategy=_e(Dm);_events=new en;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=_e(yI);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=_e(Pa,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!_e(Du,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Wt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof Fi&&i.code!==Dn.Redirect&&i.code!==Dn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof ki)this.navigated=!0;else if(i instanceof ho){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=Le({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||vI(r.source)},o);this.scheduleNavigation(a,wa,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}EI(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),wa,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=Le({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Cm),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=Le(Le({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=Ox(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return Lx(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=ba(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,wa,null,i)}navigate(t,i={skipLocationChange:!1}){return wI(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=Le({},MI):i===!1?r=Le({},SI):r=i,ba(t))return px(this.currentUrlTree,t,r);let s=this.parseUrl(t);return px(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return tM(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function wI(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ye(4008,!1)}function EI(n){return!(n instanceof Da)&&!(n instanceof ho)}var Tu=class{};var bI=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(t,i,r,s,o){this.router=t,this.injector=r,this.preloadingStrategy=s,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(On(t=>t instanceof ki),Or(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,i){let r=[];for(let s of i){s.providers&&!s._injector&&(s._injector=Jl(s.providers,t,`Route: ${s.path}`));let o=s._injector??t,a=s._loadedInjector??o;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&r.push(this.preloadConfig(o,s)),(s.children||s._loadedRoutes)&&r.push(this.processRoutes(a,s.children??s._loadedRoutes))}return Ht(r).pipe(Ns())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{let r;i.loadChildren&&i.canLoad===void 0?r=this.loader.loadChildren(t,i):r=Je(null);let s=r.pipe(jt(o=>o===null?Je(void 0):(i._loadedRoutes=o.routes,i._loadedInjector=o.injector,this.processRoutes(o.injector??t,o.routes))));if(i.loadComponent&&!i._loadedComponent){let o=this.loader.loadComponent(i);return Ht([s,o]).pipe(Ns())}else return s})}static \u0275fac=function(i){return new(i||n)(st(pr),st(ru),st(Cn),st(Tu),st(Tm))};static \u0275prov=Ze({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),nM=new et(""),CI=(()=>{class n{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,i,r,s,o={}){this.urlSerializer=t,this.transitions=i,this.viewportScroller=r,this.zone=s,this.options=o,o.scrollPositionRestoration||="disabled",o.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof fo?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof ki?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof hr&&t.code===yu.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof xu&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,i){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new xu(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){u_()};static \u0275prov=Ze({token:n,factory:n.\u0275fac})}return n})();function iM(n,...e){return Yh([{provide:Pa,multi:!0,useValue:n},[],{provide:Yr,useFactory:rM,deps:[pr]},{provide:nu,multi:!0,useFactory:sM},e.map(t=>t.\u0275providers)])}function rM(n){return n.routerState.root}function Va(n,e){return{\u0275kind:n,\u0275providers:e}}function sM(){let n=_e(ui);return e=>{let t=n.get(jr);if(e!==t.components[0])return;let i=n.get(pr),r=n.get(oM);n.get(Im)===1&&i.initialNavigation(),n.get(aM,null,ft.Optional)?.setUpPreloading(),n.get(nM,null,ft.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var oM=new et("",{factory:()=>new en}),Im=new et("",{providedIn:"root",factory:()=>1});function TI(){return Va(2,[{provide:Im,useValue:0},{provide:tu,multi:!0,deps:[ui],useFactory:e=>{let t=e.get(K_,Promise.resolve());return()=>t.then(()=>new Promise(i=>{let r=e.get(pr),s=e.get(oM);tM(r,()=>{i(!0)}),e.get(Am).afterPreactivation=()=>(i(!0),s.closed?Je(void 0):s),r.initialNavigation()}))}}])}function DI(){return Va(3,[{provide:tu,multi:!0,useFactory:()=>{let e=_e(pr);return()=>{e.setUpLocationChangeListener()}}},{provide:Im,useValue:2}])}var aM=new et("");function AI(n){return Va(0,[{provide:aM,useExisting:bI},{provide:Tu,useExisting:n}])}function II(){return Va(8,[yx,{provide:Du,useExisting:yx}])}function RI(n){let e=[{provide:Jx,useValue:mI},{provide:Kx,useValue:Le({skipNextTransition:!!n?.skipInitialTransition},n)}];return Va(9,e)}var Sx=new et("ROUTER_FORROOT_GUARD"),NI=[io,{provide:La,useClass:uo},pr,Ua,{provide:Yr,useFactory:rM,deps:[pr]},Tm,[]],cM=(()=>{class n{constructor(t){}static forRoot(t,i){return{ngModule:n,providers:[NI,[],{provide:Pa,multi:!0,useValue:t},{provide:Sx,useFactory:FI,deps:[[pr,new Xh,new Wy]]},i?.errorHandler?{provide:Qx,useValue:i.errorHandler}:[],{provide:Ba,useValue:i||{}},i?.useHash?OI():LI(),PI(),i?.preloadingStrategy?AI(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?UI(i):[],i?.bindToComponentInputs?II().\u0275providers:[],i?.enableViewTransitions?RI().\u0275providers:[],kI()]}}static forChild(t){return{ngModule:n,providers:[{provide:Pa,multi:!0,useValue:t}]}}static \u0275fac=function(i){return new(i||n)(st(Sx,8))};static \u0275mod=Ql({type:n});static \u0275inj=zl({})}return n})();function PI(){return{provide:nM,useFactory:()=>{let n=_e(nx),e=_e(Gt),t=_e(Ba),i=_e(Am),r=_e(La);return t.scrollOffset&&n.setOffset(t.scrollOffset),new CI(r,i,n,e,t)}}}function OI(){return{provide:qr,useClass:ex}}function LI(){return{provide:qr,useClass:kp}}function FI(n){return"guarded"}function UI(n){return[n.initialNavigation==="disabled"?DI().\u0275providers:[],n.initialNavigation==="enabledBlocking"?TI().\u0275providers:[]]}var wx=new et("");function kI(){return[{provide:wx,useFactory:sM},{provide:nu,multi:!0,useExisting:wx}]}var lM=[];var uM={providers:[iM(lM)]};var Ad="171";var LM=0,vg=1,FM=2;var yg=1,UM=2,xi=3,qi=0,fn=1,Mi=2,Ji=0,ss=1,_g=2,xg=3,Mg=4,kM=5,wr=100,BM=101,VM=102,zM=103,HM=104,GM=200,WM=201,jM=202,$M=203,Ku=204,Qu=205,qM=206,XM=207,ZM=208,YM=209,JM=210,KM=211,QM=212,eS=213,tS=214,Id=0,Rd=1,Nd=2,os=3,Pd=4,Od=5,Ld=6,Fd=7,Sg=0,nS=1,iS=2,Ki=0,rS=1,sS=2,oS=3,aS=4,cS=5,lS=6,uS=7;var ig=300,ds=301,fs=302,Fo=303,Ud=304,Cc=306,ed=1e3,mi=1001,td=1002,gn=1003,dS=1004;var Tc=1005;var sn=1006,kd=1007;var Qi=1008;var Si=1009,wg=1010,Eg=1011,Uo=1012,Bd=1013,Ar=1014,vn=1015,ti=1016,Vd=1017,zd=1018,hs=1020,bg=35902,Cg=1021,Tg=1022,yn=1023,Dg=1024,Ag=1025,ns=1026,as=1027,Dc=1028,Hd=1029,Ig=1030,Gd=1031;var Wd=1033,Ac=33776,Ic=33777,Rc=33778,Nc=33779,jd=35840,$d=35841,qd=35842,Xd=35843,Zd=36196,Yd=37492,Jd=37496,Kd=37808,Qd=37809,ef=37810,tf=37811,nf=37812,rf=37813,sf=37814,of=37815,af=37816,cf=37817,lf=37818,uf=37819,df=37820,ff=37821,Pc=36492,hf=36494,pf=36495,Rg=36283,mf=36284,gf=36285,vf=36286;var Xa=2300,nd=2301,Ju=2302,rg=2400,sg=2401,og=2402;var fS=3200,hS=3201;var Ng=0,pS=1,ni="",Rn="srgb",vi="srgb-linear",Za="linear",Tt="srgb";var ts=7680;var ag=519,mS=512,gS=513,vS=514,Pg=515,yS=516,_S=517,xS=518,MS=519,cg=35044;var Og="300 es",gi=2e3,Ya=2001,Xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rm=Math.PI/180,Ja=180/Math.PI;function ko(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function pt(n,e,t){return Math.max(e,Math.min(t,n))}function VI(n,e){return(n%e+e)%e}function Nm(n,e,t){return(1-t)*n+t*e}function za(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var be=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],y=i[8],_=r[0],v=r[3],m=r[6],N=r[1],b=r[4],E=r[7],F=r[2],L=r[5],P=r[8];return s[0]=o*_+a*N+c*F,s[3]=o*v+a*b+c*L,s[6]=o*m+a*E+c*P,s[1]=l*_+u*N+d*F,s[4]=l*v+u*b+d*L,s[7]=l*m+u*E+d*P,s[2]=f*_+p*N+y*F,s[5]=f*v+p*b+y*L,s[8]=f*m+p*E+y*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,p=l*s-o*c,y=t*d+i*f+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/y;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pm.makeScale(e,t)),this}rotate(e){return this.premultiply(Pm.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pm=new ot;function Lg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function SS(){let n=Ka("canvas");return n.style.display="block",n}var dM={};function ps(n){n in dM||(dM[n]=!0,console.warn(n))}function wS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ES(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bS(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var fM=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hM=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zI(){let n={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Tt&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(r.r=Ao(r.r),r.g=Ao(r.g),r.b=Ao(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?Za:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vi]:{primaries:e,whitePoint:i,transfer:Za,toXYZ:fM,fromXYZ:hM,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:fM,fromXYZ:hM,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),n}var xt=zI();function $i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var go,id=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{go===void 0&&(go=Ka("canvas")),go.width=e.width,go.height=e.height;let i=go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=go}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ka("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$i(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($i(t[i]/255)*255):t[i]=$i(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},HI=0,Qa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HI++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Om(r[o].image)):s.push(Om(r[o]))}else s=Om(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Om(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?id.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var GI=0,er=(()=>{class n extends Xi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=mi,s=mi,o=sn,a=Qi,c=yn,l=Si,u=n.DEFAULT_ANISOTROPY,d=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GI++}),this.uuid=ko(),this.name="",this.source=new Qa(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ig)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ed:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ed:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=ig,n.DEFAULT_ANISOTROPY=1,n})(),kt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],y=c[9],_=c[2],v=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(y-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(y+v)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,E=(p+1)/2,F=(m+1)/2,L=(u+f)/4,P=(d+_)/4,U=(y+v)/4;return b>E&&b>F?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=L/i,s=P/i):E>F?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=L/r,s=U/r):F<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),i=P/s,r=U/s),this.set(i,r,s,t),this}let N=Math.sqrt((v-y)*(v-y)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(N)<.001&&(N=1),this.x=(v-y)/N,this.y=(d-_)/N,this.z=(f-u)/N,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rd=class extends Xi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new er(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Qa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends rd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ec=class extends er{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sd=class extends er{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],y=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=y,e[t+3]=_;return}if(d!==_||c!==f||l!==p||u!==y){let v=1-a,m=c*f+l*p+u*y+d*_,N=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let F=Math.sqrt(b),L=Math.atan2(F,m*N);v=Math.sin(v*L)/F,a=Math.sin(a*L)/F}let E=a*N;if(c=c*v+f*E,l=l*v+p*E,u=u*v+y*E,d=d*v+_*E,v===1-a){let F=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=F,l*=F,u*=F,d*=F}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],y=s[o+3];return e[t]=a*y+u*d+c*p-l*f,e[t+1]=c*y+u*f+l*d-a*p,e[t+2]=l*y+u*p+a*f-c*d,e[t+3]=u*y-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),p=c(r/2),y=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*p*y,this._y=l*p*d-f*u*y,this._z=l*u*y+f*p*d,this._w=l*u*d-f*p*y;break;case"YXZ":this._x=f*u*d+l*p*y,this._y=l*p*d-f*u*y,this._z=l*u*y-f*p*d,this._w=l*u*d+f*p*y;break;case"ZXY":this._x=f*u*d-l*p*y,this._y=l*p*d+f*u*y,this._z=l*u*y+f*p*d,this._w=l*u*d-f*p*y;break;case"ZYX":this._x=f*u*d-l*p*y,this._y=l*p*d+f*u*y,this._z=l*u*y-f*p*d,this._w=l*u*d+f*p*y;break;case"YZX":this._x=f*u*d+l*p*y,this._y=l*p*d+f*u*y,this._z=l*u*y-f*p*d,this._w=l*u*d-f*p*y;break;case"XZY":this._x=f*u*d-l*p*y,this._y=l*p*d-f*u*y,this._z=l*u*y+f*p*d,this._w=l*u*d+f*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pM.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pM.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lm.copy(this).projectOnVector(e),this.sub(Lm)}reflect(e){return this.sub(Lm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lm=new G,pM=new Zi,Er=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Iu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Iu.copy(i.boundingBox)),Iu.applyMatrix4(e.matrixWorld),this.union(Iu)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),Ru.subVectors(this.max,Ha),vo.subVectors(e.a,Ha),yo.subVectors(e.b,Ha),_o.subVectors(e.c,Ha),gr.subVectors(yo,vo),vr.subVectors(_o,yo),Jr.subVectors(vo,_o);let t=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-Jr.z,Jr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,Jr.z,0,-Jr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-Jr.y,Jr.x,0];return!Fm(t,vo,yo,_o,Ru)||(t=[1,0,0,0,1,0,0,0,1],!Fm(t,vo,yo,_o,Ru))?!1:(Nu.crossVectors(gr,vr),t=[Nu.x,Nu.y,Nu.z],Fm(t,vo,yo,_o,Ru))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new G,new G,new G,new G,new G,new G,new G,new G],Jn=new G,Iu=new Er,vo=new G,yo=new G,_o=new G,gr=new G,vr=new G,Jr=new G,Ha=new G,Ru=new G,Nu=new G,Kr=new G;function Fm(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Kr.fromArray(n,s);let a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),c=e.dot(Kr),l=t.dot(Kr),u=i.dot(Kr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var WI=new Er,Ga=new G,Um=new G,Io=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):WI.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);let t=Ga.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Um.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(Um)),this.expandByPoint(Ga.copy(e.center).sub(Um))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vi=new G,km=new G,Pu=new G,yr=new G,Bm=new G,Ou=new G,Vm=new G,od=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){km.copy(e).add(t).multiplyScalar(.5),Pu.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(km);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Pu),a=yr.dot(this.direction),c=-yr.dot(Pu),l=yr.lengthSq(),u=Math.abs(1-o*o),d,f,p,y;if(u>0)if(d=o*c-a,f=o*a-c,y=s*u,d>=0)if(f>=-y)if(f<=y){let _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-y?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=y?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(km).addScaledVector(Pu,f),p}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);let i=Vi.dot(this.direction),r=Vi.dot(Vi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,r,s){Bm.subVectors(t,e),Ou.subVectors(i,e),Vm.crossVectors(Bm,Ou);let o=this.direction.dot(Vm),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yr.subVectors(this.origin,e);let c=a*this.direction.dot(Ou.crossVectors(yr,Ou));if(c<0)return null;let l=a*this.direction.dot(Bm.cross(yr));if(l<0||c+l>o)return null;let u=-a*yr.dot(Vm);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,p,y,_,v){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,p,y,_,v)}set(e,t,i,r,s,o,a,c,l,u,d,f,p,y,_,v){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=y,m[11]=_,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/xo.setFromMatrixColumn(e,0).length(),s=1/xo.setFromMatrixColumn(e,1).length(),o=1/xo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,p=o*d,y=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+y*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=y+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*d,y=l*u,_=l*d;t[0]=f+_*a,t[4]=y*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-y,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*d,y=l*u,_=l*d;t[0]=f-_*a,t[4]=-o*d,t[8]=y+p*a,t[1]=p+y*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*d,y=a*u,_=a*d;t[0]=c*u,t[4]=y*l-p,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=p*l-y,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,y=a*c,_=a*l;t[0]=c*u,t[4]=_-f*d,t[8]=y*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+y,t[10]=f-_*d}else if(e.order==="XZY"){let f=o*c,p=o*l,y=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=o*u,t[9]=p*d-y,t[2]=y*d-p,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jI,e,$I)}lookAt(e,t,i){let r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),_r.crossVectors(i,An),_r.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),_r.crossVectors(i,An)),_r.normalize(),Lu.crossVectors(An,_r),r[0]=_r.x,r[4]=Lu.x,r[8]=An.x,r[1]=_r.y,r[5]=Lu.y,r[9]=An.y,r[2]=_r.z,r[6]=Lu.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],y=i[2],_=i[6],v=i[10],m=i[14],N=i[3],b=i[7],E=i[11],F=i[15],L=r[0],P=r[4],U=r[8],T=r[12],w=r[1],O=r[5],Y=r[9],j=r[13],J=r[2],ie=r[6],Z=r[10],se=r[14],q=r[3],ge=r[7],Me=r[11],Ie=r[15];return s[0]=o*L+a*w+c*J+l*q,s[4]=o*P+a*O+c*ie+l*ge,s[8]=o*U+a*Y+c*Z+l*Me,s[12]=o*T+a*j+c*se+l*Ie,s[1]=u*L+d*w+f*J+p*q,s[5]=u*P+d*O+f*ie+p*ge,s[9]=u*U+d*Y+f*Z+p*Me,s[13]=u*T+d*j+f*se+p*Ie,s[2]=y*L+_*w+v*J+m*q,s[6]=y*P+_*O+v*ie+m*ge,s[10]=y*U+_*Y+v*Z+m*Me,s[14]=y*T+_*j+v*se+m*Ie,s[3]=N*L+b*w+E*J+F*q,s[7]=N*P+b*O+E*ie+F*ge,s[11]=N*U+b*Y+E*Z+F*Me,s[15]=N*T+b*j+E*se+F*Ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],y=e[3],_=e[7],v=e[11],m=e[15];return y*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*p-i*c*p)+_*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+v*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+m*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],y=e[12],_=e[13],v=e[14],m=e[15],N=d*v*l-_*f*l+_*c*p-a*v*p-d*c*m+a*f*m,b=y*f*l-u*v*l-y*c*p+o*v*p+u*c*m-o*f*m,E=u*_*l-y*d*l+y*a*p-o*_*p-u*a*m+o*d*m,F=y*d*c-u*_*c-y*a*f+o*_*f+u*a*v-o*d*v,L=t*N+i*b+r*E+s*F;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/L;return e[0]=N*P,e[1]=(_*f*s-d*v*s-_*r*p+i*v*p+d*r*m-i*f*m)*P,e[2]=(a*v*s-_*c*s+_*r*l-i*v*l-a*r*m+i*c*m)*P,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*p-i*c*p)*P,e[4]=b*P,e[5]=(u*v*s-y*f*s+y*r*p-t*v*p-u*r*m+t*f*m)*P,e[6]=(y*c*s-o*v*s-y*r*l+t*v*l+o*r*m-t*c*m)*P,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*p+t*c*p)*P,e[8]=E*P,e[9]=(y*d*s-u*_*s-y*i*p+t*_*p+u*i*m-t*d*m)*P,e[10]=(o*_*s-y*a*s+y*i*l-t*_*l-o*i*m+t*a*m)*P,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*p-t*a*p)*P,e[12]=F*P,e[13]=(u*_*r-y*d*r+y*i*f-t*_*f-u*i*v+t*d*v)*P,e[14]=(y*a*r-o*_*r-y*i*c+t*_*c+o*i*v-t*a*v)*P,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*P,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,p=s*u,y=s*d,_=o*u,v=o*d,m=a*d,N=c*l,b=c*u,E=c*d,F=i.x,L=i.y,P=i.z;return r[0]=(1-(_+m))*F,r[1]=(p+E)*F,r[2]=(y-b)*F,r[3]=0,r[4]=(p-E)*L,r[5]=(1-(f+m))*L,r[6]=(v+N)*L,r[7]=0,r[8]=(y+b)*P,r[9]=(v-N)*P,r[10]=(1-(f+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=xo.set(r[0],r[1],r[2]).length(),o=xo.set(r[4],r[5],r[6]).length(),a=xo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);let l=1/s,u=1/o,d=1/a;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,t.setFromRotationMatrix(Kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=gi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),p,y;if(a===gi)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ya)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=gi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,p=(i+r)*u,y,_;if(a===gi)y=(o+s)*d,_=-2*d;else if(a===Ya)y=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},xo=new G,Kn=new Ut,jI=new G(0,0,0),$I=new G(1,1,1),_r=new G,Lu=new G,An=new G,mM=new Ut,gM=new Zi,br=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],p=s[6],y=s[10];switch(i){case"XYZ":this._y=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,y),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,y),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,y),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return mM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mM,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return gM.setFromEuler(this),this.setFromQuaternion(gM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),tc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qI=0,vM=new G,Mo=new Zi,zi=new Ut,Fu=new G,Wa=new G,XI=new G,ZI=new Zi,yM=new G(1,0,0),_M=new G(0,1,0),xM=new G(0,0,1),MM={type:"added"},YI={type:"removed"},So={type:"childadded",child:null},zm={type:"childremoved",child:null},_i=(()=>{class n extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qI++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new G,i=new br,r=new Zi,s=new G(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new ot}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Mo.setFromAxisAngle(t,i),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(t,i){return Mo.setFromAxisAngle(t,i),this.quaternion.premultiply(Mo),this}rotateX(t){return this.rotateOnAxis(yM,t)}rotateY(t){return this.rotateOnAxis(_M,t)}rotateZ(t){return this.rotateOnAxis(xM,t)}translateOnAxis(t,i){return vM.copy(t).applyQuaternion(this.quaternion),this.position.add(vM.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(yM,t)}translateY(t){return this.translateOnAxis(_M,t)}translateZ(t){return this.translateOnAxis(xM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Fu.copy(t):Fu.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Wa,Fu,this.up):zi.lookAt(Fu,Wa,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),Mo.setFromRotationMatrix(zi),this.quaternion.premultiply(Mo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(MM),So.child=t,this.dispatchEvent(So),So.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(YI),zm.child=t,this.dispatchEvent(zm),zm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(MM),So.child=t,this.dispatchEvent(So),So.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,t,XI),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,ZI,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),p=a(t.skeletons),y=a(t.animations),_=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),y.length>0&&(r.animations=y),_.length>0&&(r.nodes=_)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new G(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Qn=new G,Hi=new G,Hm=new G,Gi=new G,wo=new G,Eo=new G,SM=new G,Gm=new G,Wm=new G,jm=new G,$m=new kt,qm=new kt,Xm=new kt,Sr=class n{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qn.subVectors(e,t),r.cross(Qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qn.subVectors(r,t),Hi.subVectors(i,t),Hm.subVectors(e,t);let o=Qn.dot(Qn),a=Qn.dot(Hi),c=Qn.dot(Hm),l=Hi.dot(Hi),u=Hi.dot(Hm),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,p=(l*c-a*u)*f,y=(o*u-a*c)*f;return s.set(1-p-y,y,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gi.x),c.addScaledVector(o,Gi.y),c.addScaledVector(a,Gi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return $m.setScalar(0),qm.setScalar(0),Xm.setScalar(0),$m.fromBufferAttribute(e,t),qm.fromBufferAttribute(e,i),Xm.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector($m,s.x),o.addScaledVector(qm,s.y),o.addScaledVector(Xm,s.z),o}static isFrontFacing(e,t,i,r){return Qn.subVectors(i,t),Hi.subVectors(e,t),Qn.cross(Hi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),Qn.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;wo.subVectors(r,i),Eo.subVectors(s,i),Gm.subVectors(e,i);let c=wo.dot(Gm),l=Eo.dot(Gm);if(c<=0&&l<=0)return t.copy(i);Wm.subVectors(e,r);let u=wo.dot(Wm),d=Eo.dot(Wm);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(wo,o);jm.subVectors(e,s);let p=wo.dot(jm),y=Eo.dot(jm);if(y>=0&&p<=y)return t.copy(s);let _=p*l-c*y;if(_<=0&&l>=0&&y<=0)return a=l/(l-y),t.copy(i).addScaledVector(Eo,a);let v=u*y-p*d;if(v<=0&&d-u>=0&&p-y>=0)return SM.subVectors(s,r),a=(d-u)/(d-u+(p-y)),t.copy(r).addScaledVector(SM,a);let m=1/(v+_+f);return o=_*m,a=f*m,t.copy(i).addScaledVector(wo,o).addScaledVector(Eo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},CS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Uu={h:0,s:0,l:0};function Zm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var gt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=VI(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Zm(o,s,e+1/3),this.g=Zm(o,s,e),this.b=Zm(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){let i=CS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return xt.fromWorkingColorSpace(cn.copy(this),e),Math.round(pt(cn.r*255,0,255))*65536+Math.round(pt(cn.g*255,0,255))*256+Math.round(pt(cn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(cn.copy(this),t);let i=cn.r,r=cn.g,s=cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Rn){xt.fromWorkingColorSpace(cn.copy(this),e);let t=cn.r,i=cn.g,r=cn.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(Uu);let i=Nm(xr.h,Uu.h,t),r=Nm(xr.s,Uu.s,t),s=Nm(xr.l,Uu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new gt;gt.NAMES=CS;var JI=0,Cr=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JI++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=ss,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Qu,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ku&&(i.blendSrc=this.blendSrc),this.blendDst!==Qu&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ag&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},nc=class extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=Sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ji=KI();function KI(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function QI(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=pt(n,-65504,65504),ji.floatView[0]=n;let e=ji.uint32View[0],t=e>>23&511;return ji.baseTable[t]+((e&8388607)>>ji.shiftTable[t])}function e1(n){let e=n>>10;return ji.uint32View[0]=ji.mantissaTable[ji.offsetTable[e]+(n&1023)]+ji.exponentTable[e],ji.floatView[0]}var yf={toHalfFloat:QI,fromHalfFloat:e1},$t=new G,ku=new be,Nn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cg,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ku.fromBufferAttribute(this,t),ku.applyMatrix3(e),this.setXY(t,ku.x,ku.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=za(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=za(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=za(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=za(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=za(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cg&&(e.usage=this.usage),e}};var ic=class extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var rc=class extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var zn=class extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}},t1=0,Vn=new Ut,Ym=new _i,bo=new G,In=new Er,ja=new Er,Qt=new G,Yi=class n extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lg(e)?rc:ic)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return Ym.lookAt(e),Ym.updateMatrix(),this.applyMatrix4(Ym.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Io);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ja.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(In.min,ja.min),In.expandByPoint(Qt),Qt.addVectors(In.max,ja.max),In.expandByPoint(Qt)):(In.expandByPoint(ja.min),In.expandByPoint(ja.max))}In.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Qt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Qt.fromBufferAttribute(a,l),c&&(bo.fromBufferAttribute(e,l),Qt.add(bo)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new G,c[U]=new G;let l=new G,u=new G,d=new G,f=new be,p=new be,y=new be,_=new G,v=new G;function m(U,T,w){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,w),f.fromBufferAttribute(s,U),p.fromBufferAttribute(s,T),y.fromBufferAttribute(s,w),u.sub(l),d.sub(l),p.sub(f),y.sub(f);let O=1/(p.x*y.y-y.x*p.y);isFinite(O)&&(_.copy(u).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(O),v.copy(d).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(O),a[U].add(_),a[T].add(_),a[w].add(_),c[U].add(v),c[T].add(v),c[w].add(v))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let U=0,T=N.length;U<T;++U){let w=N[U],O=w.start,Y=w.count;for(let j=O,J=O+Y;j<J;j+=3)m(e.getX(j+0),e.getX(j+1),e.getX(j+2))}let b=new G,E=new G,F=new G,L=new G;function P(U){F.fromBufferAttribute(r,U),L.copy(F);let T=a[U];b.copy(T),b.sub(F.multiplyScalar(F.dot(T))).normalize(),E.crossVectors(L,T);let O=E.dot(c[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,O)}for(let U=0,T=N.length;U<T;++U){let w=N[U],O=w.start,Y=w.count;for(let j=O,J=O+Y;j<J;j+=3)P(e.getX(j+0)),P(e.getX(j+1)),P(e.getX(j+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new G,s=new G,o=new G,a=new G,c=new G,l=new G,u=new G,d=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){let y=e.getX(f+0),_=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,y),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),a.add(u),c.add(u),l.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),p=0,y=0;for(let _=0,v=c.length;_<v;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let m=0;m<u;m++)f[y++]=l[p++]}return new Nn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wM=new Ut,Qr=new od,Bu=new Io,EM=new G,Vu=new G,zu=new G,Hu=new G,Jm=new G,Gu=new G,bM=new G,Wu=new G,dn=class extends _i{constructor(e=new Yi,t=new nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Gu.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Jm.fromBufferAttribute(d,e),o?Gu.addScaledVector(Jm,u):Gu.addScaledVector(Jm.sub(t),u))}t.add(Gu)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bu.copy(i.boundingSphere),Bu.applyMatrix4(s),Qr.copy(e.ray).recast(e.near),!(Bu.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Bu,EM)===null||Qr.origin.distanceToSquared(EM)>(e.far-e.near)**2))&&(wM.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(wM),!(i.boundingBox!==null&&Qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=f.length;y<_;y++){let v=f[y],m=o[v.materialIndex],N=Math.max(v.start,p.start),b=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let E=N,F=b;E<F;E+=3){let L=a.getX(E),P=a.getX(E+1),U=a.getX(E+2);r=ju(this,m,e,i,l,u,d,L,P,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let y=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let v=y,m=_;v<m;v+=3){let N=a.getX(v),b=a.getX(v+1),E=a.getX(v+2);r=ju(this,o,e,i,l,u,d,N,b,E),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,_=f.length;y<_;y++){let v=f[y],m=o[v.materialIndex],N=Math.max(v.start,p.start),b=Math.min(c.count,Math.min(v.start+v.count,p.start+p.count));for(let E=N,F=b;E<F;E+=3){let L=E,P=E+1,U=E+2;r=ju(this,m,e,i,l,u,d,L,P,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let y=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let v=y,m=_;v<m;v+=3){let N=v,b=v+1,E=v+2;r=ju(this,o,e,i,l,u,d,N,b,E),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function n1(n,e,t,i,r,s,o,a){let c;if(e.side===fn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===qi,a),c===null)return null;Wu.copy(a),Wu.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Wu);return l<t.near||l>t.far?null:{distance:l,point:Wu.clone(),object:n}}function ju(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Vu),n.getVertexPosition(c,zu),n.getVertexPosition(l,Hu);let u=n1(n,e,t,i,Vu,zu,Hu,bM);if(u){let d=new G;Sr.getBarycoord(bM,Vu,zu,Hu,d),r&&(u.uv=Sr.getInterpolatedAttribute(r,a,c,l,d,new be)),s&&(u.uv1=Sr.getInterpolatedAttribute(s,a,c,l,d,new be)),o&&(u.normal=Sr.getInterpolatedAttribute(o,a,c,l,d,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new G,materialIndex:0};Sr.getNormal(Vu,zu,Hu,f.normal),u.face=f,u.barycoord=d}return u}var Ro=class n extends Yi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new zn(l,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(d,2));function y(_,v,m,N,b,E,F,L,P,U,T){let w=E/P,O=F/U,Y=E/2,j=F/2,J=L/2,ie=P+1,Z=U+1,se=0,q=0,ge=new G;for(let Me=0;Me<Z;Me++){let Ie=Me*O-j;for(let Ge=0;Ge<ie;Ge++){let at=Ge*w-Y;ge[_]=at*N,ge[v]=Ie*b,ge[m]=J,l.push(ge.x,ge.y,ge.z),ge[_]=0,ge[v]=0,ge[m]=L>0?1:-1,u.push(ge.x,ge.y,ge.z),d.push(Ge/P),d.push(1-Me/U),se+=1}}for(let Me=0;Me<U;Me++)for(let Ie=0;Ie<P;Ie++){let Ge=f+Ie+ie*Me,at=f+Ie+ie*(Me+1),K=f+(Ie+1)+ie*(Me+1),ue=f+(Ie+1)+ie*Me;c.push(Ge,at,ue),c.push(at,K,ue),q+=6}a.addGroup(p,q,T),p+=q,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ms(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){let e={};for(let t=0;t<n.length;t++){let i=ms(n[t]);for(let r in i)e[r]=i[r]}return e}function i1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fg(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var TS={clone:ms,merge:ln},r1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r1,this.fragmentShader=s1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=i1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},sc=class extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mr=new G,CM=new be,TM=new be,rn=class extends sc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Rm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,CM,TM),t.subVectors(TM,CM)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rm*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Co=-90,To=1,ad=class extends _i{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rn(Co,To,e,t);r.layers=this.layers,this.add(r);let s=new rn(Co,To,e,t);s.layers=this.layers,this.add(s);let o=new rn(Co,To,e,t);o.layers=this.layers,this.add(o);let a=new rn(Co,To,e,t);a.layers=this.layers,this.add(a);let c=new rn(Co,To,e,t);c.layers=this.layers,this.add(c);let l=new rn(Co,To,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},oc=class extends er{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ds,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cd=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new oc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ro(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Ji});s.uniforms.tEquirect.value=t;let o=new dn(r,s),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=sn),new ad(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};var ac=class extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ld=class extends er{constructor(e=null,t=1,i=1,r,s,o,a,c,l=gn,u=gn,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Km=new G,o1=new G,a1=new ot,pi=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Km.subVectors(i,t).cross(o1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Km),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||a1.getNormalMatrix(e),r=this.coplanarPoint(Km).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new Io,$u=new G,No=class{constructor(e=new pi,t=new pi,i=new pi,r=new pi,s=new pi,o=new pi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],p=r[8],y=r[9],_=r[10],v=r[11],m=r[12],N=r[13],b=r[14],E=r[15];if(i[0].setComponents(c-s,f-l,v-p,E-m).normalize(),i[1].setComponents(c+s,f+l,v+p,E+m).normalize(),i[2].setComponents(c+o,f+u,v+y,E+N).normalize(),i[3].setComponents(c-o,f-u,v-y,E-N).normalize(),i[4].setComponents(c-a,f-d,v-_,E-b).normalize(),t===gi)i[5].setComponents(c+a,f+d,v+_,E+b).normalize();else if(t===Ya)i[5].setComponents(a,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if($u.x=r.normal.x>0?e.max.x:e.min.x,$u.y=r.normal.y>0?e.max.y:e.min.y,$u.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($u)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cs=class extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}};var cc=class extends er{constructor(e,t,i,r,s,o,a,c,l,u=ns){if(u!==ns&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ns&&(i=Ar),i===void 0&&u===as&&(i=hs),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=c!==void 0?c:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new be:new G);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new G,r=[],s=[],o=[],a=new G,c=new Ut;for(let p=0;p<=e;p++){let y=p/e;r[p]=this.getTangentAt(y,new G)}s[0]=new G,o[0]=new G;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(pt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,y))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(pt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let y=1;y<=e;y++)s[y].applyMatrix4(c.makeRotationAxis(r[y],p*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Po=class extends Pn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new be){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*d+this.aX,l=f*d+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ud=class extends Po{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ug(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var qu=new G,Qm=new Ug,eg=new Ug,tg=new Ug,dd=class extends Pn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new G){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(qu.subVectors(r[0],r[1]).add(r[0]),l=qu);let d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(qu.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=qu),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,y=Math.pow(l.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),y<1e-4&&(y=_),v<1e-4&&(v=_),Qm.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,y,_,v),eg.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,y,_,v),tg.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,y,_,v)}else this.curveType==="catmullrom"&&(Qm.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),eg.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),tg.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return i.set(Qm.calc(c),eg.calc(c),tg.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new G().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function DM(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function c1(n,e){let t=1-n;return t*t*e}function l1(n,e){return 2*(1-n)*n*e}function u1(n,e){return n*n*e}function $a(n,e,t,i){return c1(n,e)+l1(n,t)+u1(n,i)}function d1(n,e){let t=1-n;return t*t*t*e}function f1(n,e){let t=1-n;return 3*t*t*n*e}function h1(n,e){return 3*(1-n)*n*n*e}function p1(n,e){return n*n*n*e}function qa(n,e,t,i,r){return d1(n,e)+f1(n,t)+h1(n,i)+p1(n,r)}var lc=class extends Pn{constructor(e=new be,t=new be,i=new be,r=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new be){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(qa(e,r.x,s.x,o.x,a.x),qa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fd=class extends Pn{constructor(e=new G,t=new G,i=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new G){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(qa(e,r.x,s.x,o.x,a.x),qa(e,r.y,s.y,o.y,a.y),qa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uc=class extends Pn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hd=class extends Pn{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dc=class extends Pn{constructor(e=new be,t=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new be){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set($a(e,r.x,s.x,o.x),$a(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pd=class extends Pn{constructor(e=new G,t=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new G){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set($a(e,r.x,s.x,o.x),$a(e,r.y,s.y,o.y),$a(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fc=class extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(DM(a,c.x,l.x,u.x,d.x),DM(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new be().fromArray(r))}return this}},lg=Object.freeze({__proto__:null,ArcCurve:ud,CatmullRomCurve3:dd,CubicBezierCurve:lc,CubicBezierCurve3:fd,EllipseCurve:Po,LineCurve:uc,LineCurve3:hd,QuadraticBezierCurve:dc,QuadraticBezierCurve3:pd,SplineCurve:fc}),md=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lg[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new lg[r.type]().fromJSON(r))}return this}},Oo=class extends md{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new uc(this.currentPoint.clone(),new be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new dc(this.currentPoint.clone(),new be(e,t),new be(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new lc(this.currentPoint.clone(),new be(e,t),new be(i,r),new be(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new fc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){let l=new Po(e,t,i,r,s,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var is=class extends Oo{constructor(e){super(e),this.uuid=ko(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Oo().fromJSON(r))}return this}},m1={triangulate:function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=DS(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,d,f,p;if(i&&(s=x1(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let y=t;y<r;y+=t)d=n[y],f=n[y+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-a,u-c),p=p!==0?32767/p:0}return hc(s,o,t,a,c,p,0),o}};function DS(n,e,t,i,r){let s,o;if(r===R1(n,e,t,i)>0)for(s=e;s<t;s+=i)o=AM(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=AM(s,n[s],n[s+1],o);return o&&_f(o,o.next)&&(mc(o),o=o.next),o}function ls(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(_f(t,t.next)||Ft(t.prev,t,t.next)===0)){if(mc(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function hc(n,e,t,i,r,s,o){if(!n)return;!o&&s&&b1(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?v1(n,i,r,s):g1(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),mc(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=y1(ls(n),e,t),hc(n,e,t,i,r,s,2)):o===2&&_1(n,e,t,i,r,s):hc(ls(n),e,t,i,r,s,1);break}}}function g1(n){let e=n.prev,t=n,i=n.next;if(Ft(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<c?a<l?a:l:c<l?c:l,f=r>s?r>o?r:o:s>o?s:o,p=a>c?a>l?a:l:c>l?c:l,y=i.next;for(;y!==e;){if(y.x>=u&&y.x<=f&&y.y>=d&&y.y<=p&&Do(r,a,s,c,o,l,y.x,y.y)&&Ft(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function v1(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Ft(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,u=r.y,d=s.y,f=o.y,p=a<c?a<l?a:l:c<l?c:l,y=u<d?u<f?u:f:d<f?d:f,_=a>c?a>l?a:l:c>l?c:l,v=u>d?u>f?u:f:d>f?d:f,m=ug(p,y,e,t,i),N=ug(_,v,e,t,i),b=n.prevZ,E=n.nextZ;for(;b&&b.z>=m&&E&&E.z<=N;){if(b.x>=p&&b.x<=_&&b.y>=y&&b.y<=v&&b!==r&&b!==o&&Do(a,u,c,d,l,f,b.x,b.y)&&Ft(b.prev,b,b.next)>=0||(b=b.prevZ,E.x>=p&&E.x<=_&&E.y>=y&&E.y<=v&&E!==r&&E!==o&&Do(a,u,c,d,l,f,E.x,E.y)&&Ft(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;b&&b.z>=m;){if(b.x>=p&&b.x<=_&&b.y>=y&&b.y<=v&&b!==r&&b!==o&&Do(a,u,c,d,l,f,b.x,b.y)&&Ft(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;E&&E.z<=N;){if(E.x>=p&&E.x<=_&&E.y>=y&&E.y<=v&&E!==r&&E!==o&&Do(a,u,c,d,l,f,E.x,E.y)&&Ft(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function y1(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!_f(r,s)&&AS(r,i,i.next,s)&&pc(r,s)&&pc(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),mc(i),mc(i.next),i=n=s),i=i.next}while(i!==n);return ls(i)}function _1(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&D1(o,a)){let c=IS(o,a);o=ls(o,o.next),c=ls(c,c.next),hc(o,e,t,i,r,s,0),hc(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function x1(n,e,t,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=DS(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(T1(l));for(r.sort(M1),s=0;s<r.length;s++)t=S1(r[s],t);return t}function M1(n,e){return n.x-e.x}function S1(n,e){let t=w1(n,e);if(!t)return e;let i=IS(t,n);return ls(i,i.next),ls(t,t.next)}function w1(n,e){let t=e,i=-1/0,r,s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,c=r.x,l=r.y,u=1/0,d;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&Do(o<l?s:i,o,c,l,o<l?i:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),pc(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&E1(r,t)))&&(r=t,u=d)),t=t.next;while(t!==a);return r}function E1(n,e){return Ft(n.prev,n,e.prev)<0&&Ft(e.next,n,n.next)<0}function b1(n,e,t,i){let r=n;do r.z===0&&(r.z=ug(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,C1(r)}function C1(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function ug(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function T1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Do(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function D1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!A1(n,e)&&(pc(n,e)&&pc(e,n)&&I1(n,e)&&(Ft(n.prev,n,e.prev)||Ft(n,e.prev,e))||_f(n,e)&&Ft(n.prev,n,n.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function _f(n,e){return n.x===e.x&&n.y===e.y}function AS(n,e,t,i){let r=Zu(Ft(n,e,t)),s=Zu(Ft(n,e,i)),o=Zu(Ft(t,i,n)),a=Zu(Ft(t,i,e));return!!(r!==s&&o!==a||r===0&&Xu(n,t,e)||s===0&&Xu(n,i,e)||o===0&&Xu(t,n,i)||a===0&&Xu(t,e,i))}function Xu(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Zu(n){return n>0?1:n<0?-1:0}function A1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&AS(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function pc(n,e){return Ft(n.prev,n,n.next)<0?Ft(n,e,n.next)>=0&&Ft(n,n.prev,e)>=0:Ft(n,e,n.prev)<0||Ft(n,n.next,e)<0}function I1(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function IS(n,e){let t=new dg(n.i,n.x,n.y),i=new dg(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function AM(n,e,t,i){let r=new dg(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function mc(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function dg(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function R1(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var rs=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];IM(e),RM(i,e);let o=e.length;t.forEach(IM);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,RM(i,t[c]);let a=m1.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function IM(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function RM(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var gc=class n extends Yi{constructor(e=new is([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new zn(r,3)),this.setAttribute("uv",new zn(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,N=t.UVGenerator!==void 0?t.UVGenerator:N1,b,E=!1,F,L,P,U;m&&(b=m.getSpacedPoints(u),E=!0,f=!1,F=m.computeFrenetFrames(u,!1),L=new G,P=new G,U=new G),f||(v=0,p=0,y=0,_=0);let T=a.extractPoints(l),w=T.shape,O=T.holes;if(!rs.isClockWise(w)){w=w.reverse();for(let oe=0,he=O.length;oe<he;oe++){let R=O[oe];rs.isClockWise(R)&&(O[oe]=R.reverse())}}let j=rs.triangulateShape(w,O),J=w;for(let oe=0,he=O.length;oe<he;oe++){let R=O[oe];w=w.concat(R)}function ie(oe,he,R){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(he,R)}let Z=w.length,se=j.length;function q(oe,he,R){let Ve,de,Re,ye=oe.x-he.x,qe=oe.y-he.y,Te=R.x-oe.x,D=R.y-oe.y,M=ye*ye+qe*qe,W=ye*D-qe*Te;if(Math.abs(W)>Number.EPSILON){let ee=Math.sqrt(M),ce=Math.sqrt(Te*Te+D*D),ne=he.x-qe/ee,ke=he.y+ye/ee,Se=R.x-D/ce,De=R.y+Te/ce,mt=((Se-ne)*D-(De-ke)*Te)/(ye*D-qe*Te);Ve=ne+ye*mt-oe.x,de=ke+qe*mt-oe.y;let pe=Ve*Ve+de*de;if(pe<=2)return new be(Ve,de);Re=Math.sqrt(pe/2)}else{let ee=!1;ye>Number.EPSILON?Te>Number.EPSILON&&(ee=!0):ye<-Number.EPSILON?Te<-Number.EPSILON&&(ee=!0):Math.sign(qe)===Math.sign(D)&&(ee=!0),ee?(Ve=-qe,de=ye,Re=Math.sqrt(M)):(Ve=ye,de=qe,Re=Math.sqrt(M/2))}return new be(Ve/Re,de/Re)}let ge=[];for(let oe=0,he=J.length,R=he-1,Ve=oe+1;oe<he;oe++,R++,Ve++)R===he&&(R=0),Ve===he&&(Ve=0),ge[oe]=q(J[oe],J[R],J[Ve]);let Me=[],Ie,Ge=ge.concat();for(let oe=0,he=O.length;oe<he;oe++){let R=O[oe];Ie=[];for(let Ve=0,de=R.length,Re=de-1,ye=Ve+1;Ve<de;Ve++,Re++,ye++)Re===de&&(Re=0),ye===de&&(ye=0),Ie[Ve]=q(R[Ve],R[Re],R[ye]);Me.push(Ie),Ge=Ge.concat(Ie)}for(let oe=0;oe<v;oe++){let he=oe/v,R=p*Math.cos(he*Math.PI/2),Ve=y*Math.sin(he*Math.PI/2)+_;for(let de=0,Re=J.length;de<Re;de++){let ye=ie(J[de],ge[de],Ve);fe(ye.x,ye.y,-R)}for(let de=0,Re=O.length;de<Re;de++){let ye=O[de];Ie=Me[de];for(let qe=0,Te=ye.length;qe<Te;qe++){let D=ie(ye[qe],Ie[qe],Ve);fe(D.x,D.y,-R)}}}let at=y+_;for(let oe=0;oe<Z;oe++){let he=f?ie(w[oe],Ge[oe],at):w[oe];E?(P.copy(F.normals[0]).multiplyScalar(he.x),L.copy(F.binormals[0]).multiplyScalar(he.y),U.copy(b[0]).add(P).add(L),fe(U.x,U.y,U.z)):fe(he.x,he.y,0)}for(let oe=1;oe<=u;oe++)for(let he=0;he<Z;he++){let R=f?ie(w[he],Ge[he],at):w[he];E?(P.copy(F.normals[oe]).multiplyScalar(R.x),L.copy(F.binormals[oe]).multiplyScalar(R.y),U.copy(b[oe]).add(P).add(L),fe(U.x,U.y,U.z)):fe(R.x,R.y,d/u*oe)}for(let oe=v-1;oe>=0;oe--){let he=oe/v,R=p*Math.cos(he*Math.PI/2),Ve=y*Math.sin(he*Math.PI/2)+_;for(let de=0,Re=J.length;de<Re;de++){let ye=ie(J[de],ge[de],Ve);fe(ye.x,ye.y,d+R)}for(let de=0,Re=O.length;de<Re;de++){let ye=O[de];Ie=Me[de];for(let qe=0,Te=ye.length;qe<Te;qe++){let D=ie(ye[qe],Ie[qe],Ve);E?fe(D.x,D.y+b[u-1].y,b[u-1].x+R):fe(D.x,D.y,d+R)}}}K(),ue();function K(){let oe=r.length/3;if(f){let he=0,R=Z*he;for(let Ve=0;Ve<se;Ve++){let de=j[Ve];Fe(de[2]+R,de[1]+R,de[0]+R)}he=u+v*2,R=Z*he;for(let Ve=0;Ve<se;Ve++){let de=j[Ve];Fe(de[0]+R,de[1]+R,de[2]+R)}}else{for(let he=0;he<se;he++){let R=j[he];Fe(R[2],R[1],R[0])}for(let he=0;he<se;he++){let R=j[he];Fe(R[0]+Z*u,R[1]+Z*u,R[2]+Z*u)}}i.addGroup(oe,r.length/3-oe,0)}function ue(){let oe=r.length/3,he=0;me(J,he),he+=J.length;for(let R=0,Ve=O.length;R<Ve;R++){let de=O[R];me(de,he),he+=de.length}i.addGroup(oe,r.length/3-oe,1)}function me(oe,he){let R=oe.length;for(;--R>=0;){let Ve=R,de=R-1;de<0&&(de=oe.length-1);for(let Re=0,ye=u+v*2;Re<ye;Re++){let qe=Z*Re,Te=Z*(Re+1),D=he+Ve+qe,M=he+de+qe,W=he+de+Te,ee=he+Ve+Te;Xe(D,M,W,ee)}}}function fe(oe,he,R){c.push(oe),c.push(he),c.push(R)}function Fe(oe,he,R){$e(oe),$e(he),$e(R);let Ve=r.length/3,de=N.generateTopUV(i,r,Ve-3,Ve-2,Ve-1);ut(de[0]),ut(de[1]),ut(de[2])}function Xe(oe,he,R,Ve){$e(oe),$e(he),$e(Ve),$e(he),$e(R),$e(Ve);let de=r.length/3,Re=N.generateSideWallUV(i,r,de-6,de-3,de-2,de-1);ut(Re[0]),ut(Re[1]),ut(Re[3]),ut(Re[1]),ut(Re[2]),ut(Re[3])}function $e(oe){r.push(c[oe*3+0]),r.push(c[oe*3+1]),r.push(c[oe*3+2])}function ut(oe){s.push(oe.x),s.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return P1(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new lg[r.type]().fromJSON(r)),new n(i,e.options)}},N1={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new be(s,o),new be(a,c),new be(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],p=e[r*3+1],y=e[r*3+2],_=e[s*3],v=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new be(o,1-c),new be(l,1-d),new be(f,1-y),new be(_,1-m)]:[new be(a,1-c),new be(u,1-d),new be(p,1-y),new be(v,1-m)]}};function P1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var vc=class n extends Yi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,p=[],y=[],_=[],v=[];for(let m=0;m<u;m++){let N=m*f-o;for(let b=0;b<l;b++){let E=b*d-s;y.push(E,-N,0),_.push(0,0,1),v.push(b/a),v.push(1-m/c)}}for(let m=0;m<c;m++)for(let N=0;N<a;N++){let b=N+l*m,E=N+l*(m+1),F=N+1+l*(m+1),L=N+1+l*m;p.push(b,E,L),p.push(E,F,L)}this.setIndex(p),this.setAttribute("position",new zn(y,3)),this.setAttribute("normal",new zn(_,3)),this.setAttribute("uv",new zn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var gd=class extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ng,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yc=class extends gd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var vd=class extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yd=class extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yu(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function O1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var us=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_d=class extends us{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rg,endingEnd:rg}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case sg:s=e,a=2*t-i;break;case og:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case sg:o=e,c=2*i-t;break;case og:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,y=(i-t)/(r-t),_=y*y,v=_*y,m=-f*v+2*f*_-f*y,N=(1+f)*v+(-1.5-2*f)*_+(-.5+f)*y+1,b=(-1-p)*v+(1.5+p)*_+.5*y,E=p*v-p*_;for(let F=0;F!==a;++F)s[F]=m*o[u+F]+N*o[l+F]+b*o[c+F]+E*o[d+F];return s}},xd=class extends us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},Md=class extends us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yu(t,this.TimeBufferType),this.values=Yu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Yu(e.times,Array),values:Yu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Md(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _d(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xa:t=this.InterpolantFactoryMethodDiscrete;break;case nd:t=this.InterpolantFactoryMethodLinear;break;case Ju:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xa;case this.InterpolantFactoryMethodLinear:return nd;case this.InterpolantFactoryMethodSmooth:return Ju}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&O1(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ju,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,p=d+i;for(let y=0;y!==i;++y){let _=t[d+y];if(_!==t[f+y]||_!==t[p+y]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=nd;var Tr=class extends Hn{constructor(e,t,i){super(e,t,i)}};Tr.prototype.ValueTypeName="bool";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=Xa;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Sd=class extends Hn{};Sd.prototype.ValueTypeName="color";var wd=class extends Hn{};wd.prototype.ValueTypeName="number";var Ed=class extends us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Zi.slerpFlat(s,0,o,l-a,o,l,c);return s}},_c=class extends Hn{InterpolantFactoryMethodLinear(e){return new Ed(this.times,this.values,this.getValueSize(),e)}};_c.prototype.ValueTypeName="quaternion";_c.prototype.InterpolantFactoryMethodSmooth=void 0;var Dr=class extends Hn{constructor(e,t,i){super(e,t,i)}};Dr.prototype.ValueTypeName="string";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=Xa;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var bd=class extends Hn{};bd.prototype.ValueTypeName="vector";var fg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Cd=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],y=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return y}return null}}},RS=new Cd,Oc=(()=>{class n{constructor(t){this.manager=t!==void 0?t:RS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),Wi={},hg=class extends Error{constructor(e,t){super(e),this.response=t}},Lo=class extends Oc{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=fg.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:i,onError:r});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Wi[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,y=p!==0,_=0,v=new ReadableStream({start(m){N();function N(){d.read().then(({done:b,value:E})=>{if(b)m.close();else{_+=E.byteLength;let F=new ProgressEvent("progress",{lengthComputable:y,loaded:_,total:p});for(let L=0,P=u.length;L<P;L++){let U=u[L];U.onProgress&&U.onProgress(F)}m.enqueue(E),N()}},b=>{m.error(b)})}}});return new Response(v)}else throw new hg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(y=>p.decode(y))}}}).then(l=>{fg.add(e,l);let u=Wi[e];delete Wi[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Wi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Wi[e];for(let d=0,f=u.length;d<f;d++){let p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var xc=class extends Oc{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new ld,a=new Lo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:mi,o.wrapT=l.wrapT!==void 0?l.wrapT:mi,o.magFilter=l.magFilter!==void 0?l.magFilter:sn,o.minFilter=l.minFilter!==void 0?l.minFilter:sn,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Qi),l.mipmapCount===1&&(o.minFilter=sn),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},i,r),o}};var Mc=class extends _i{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var ng=new Ut,NM=new G,PM=new G,pg=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;NM.setFromMatrixPosition(e.matrixWorld),t.position.copy(NM),PM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(PM),t.updateMatrixWorld(),ng.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ng),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ng)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mg=class extends pg{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Ja*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Sc=class extends Mc{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_i.DEFAULT_UP),this.updateMatrix(),this.target=new _i,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new mg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Td=class extends sc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var wc=class extends Mc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Dd=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ec=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=OM(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=OM();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function OM(){return performance.now()}var kg="\\[\\]\\.:\\/",L1=new RegExp("["+kg+"]","g"),Bg="[^"+kg+"]",F1="[^"+kg.replace("\\.","")+"]",U1=/((?:WC+[\/:])*)/.source.replace("WC",Bg),k1=/(WCOD+)?/.source.replace("WCOD",F1),B1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bg),V1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bg),z1=new RegExp("^"+U1+k1+B1+V1+"$"),H1=["material","materials","bones","map"],gg=class{constructor(e,t,i){let r=i||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Vt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L1,"")}static parseTrackName(t){let i=z1.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);H1.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=gg,n})();Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QV=new Float32Array(1);var bc=class{constructor(){this.type="ShapePath",this.color=new gt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Oo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){let N=[];for(let b=0,E=m.length;b<E;b++){let F=m[b],L=new is;L.curves=F.curves,N.push(L)}return N}function i(m,N){let b=N.length,E=!1;for(let F=b-1,L=0;L<b;F=L++){let P=N[F],U=N[L],T=U.x-P.x,w=U.y-P.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(P=N[L],T=-T,U=N[F],w=-w),m.y<P.y||m.y>U.y)continue;if(m.y===P.y){if(m.x===P.x)return!0}else{let O=w*(m.x-P.x)-T*(m.y-P.y);if(O===0)return!0;if(O<0)continue;E=!E}}else{if(m.y!==P.y)continue;if(U.x<=m.x&&m.x<=P.x||P.x<=m.x&&m.x<=U.x)return!0}}return E}let r=rs.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c,l=[];if(s.length===1)return a=s[0],c=new is,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;let d=[],f=[],p=[],y=0,_;f[y]=void 0,p[y]=[];for(let m=0,N=s.length;m<N;m++)a=s[m],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!u&&f[y]&&y++,f[y]={s:new is,p:_},f[y].s.curves=a.curves,u&&y++,p[y]=[]):p[y].push({h:a,p:_[0]});if(!f[0])return t(s);if(f.length>1){let m=!1,N=0;for(let b=0,E=f.length;b<E;b++)d[b]=[];for(let b=0,E=f.length;b<E;b++){let F=p[b];for(let L=0;L<F.length;L++){let P=F[L],U=!0;for(let T=0;T<f.length;T++)i(P.p,f[T].p)&&(b!==T&&N++,U?(U=!1,d[T].push(P)):m=!0);U&&d[b].push(P)}}N>0&&m===!1&&(p=d)}let v;for(let m=0,N=f.length;m<N;m++){c=f[m].s,l.push(c),v=p[m];for(let b=0,E=v.length;b<E;b++)c.holes.push(v[b].h)}return l}};function Vg(n,e,t,i){let r=G1(i);switch(t){case Cg:return n*e;case Dg:return n*e;case Ag:return n*e*2;case Dc:return n*e/r.components*r.byteLength;case Hd:return n*e/r.components*r.byteLength;case Ig:return n*e*2/r.components*r.byteLength;case Gd:return n*e*2/r.components*r.byteLength;case Tg:return n*e*3/r.components*r.byteLength;case yn:return n*e*4/r.components*r.byteLength;case Wd:return n*e*4/r.components*r.byteLength;case Ac:case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $d:case Xd:return Math.max(n,16)*Math.max(e,8)/4;case jd:case qd:return Math.max(n,8)*Math.max(e,8)/2;case Zd:case Yd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ef:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case sf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case of:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case af:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case lf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case df:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ff:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pc:case hf:case pf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rg:case mf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gf:case vf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G1(n){switch(n){case Si:case wg:return{byteLength:1,components:1};case Uo:case Eg:case ti:return{byteLength:2,components:1};case Vd:case zd:return{byteLength:2,components:4};case Ar:case Bd:case vn:return{byteLength:4,components:1};case bg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ad);function tw(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function W1(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,y)=>p.start-y.start);let f=0;for(let p=1;p<d.length;p++){let y=d[f],_=d[p];_.start<=y.start+y.count+1?y.count=Math.max(y.count,_.start+_.count-y.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,y=d.length;p<y;p++){let _=d[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var j1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_R=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MR="gl_FragColor = linearToOutputTexel( gl_FragColor );",SR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ER=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,UR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$R=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eN=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oN=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lN=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hN=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_N=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,TN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ON=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,WN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$N=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_P=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:j1,alphahash_pars_fragment:$1,alphamap_fragment:q1,alphamap_pars_fragment:X1,alphatest_fragment:Z1,alphatest_pars_fragment:Y1,aomap_fragment:J1,aomap_pars_fragment:K1,batching_pars_vertex:Q1,batching_vertex:eR,begin_vertex:tR,beginnormal_vertex:nR,bsdfs:iR,iridescence_fragment:rR,bumpmap_pars_fragment:sR,clipping_planes_fragment:oR,clipping_planes_pars_fragment:aR,clipping_planes_pars_vertex:cR,clipping_planes_vertex:lR,color_fragment:uR,color_pars_fragment:dR,color_pars_vertex:fR,color_vertex:hR,common:pR,cube_uv_reflection_fragment:mR,defaultnormal_vertex:gR,displacementmap_pars_vertex:vR,displacementmap_vertex:yR,emissivemap_fragment:_R,emissivemap_pars_fragment:xR,colorspace_fragment:MR,colorspace_pars_fragment:SR,envmap_fragment:wR,envmap_common_pars_fragment:ER,envmap_pars_fragment:bR,envmap_pars_vertex:CR,envmap_physical_pars_fragment:UR,envmap_vertex:TR,fog_vertex:DR,fog_pars_vertex:AR,fog_fragment:IR,fog_pars_fragment:RR,gradientmap_pars_fragment:NR,lightmap_pars_fragment:PR,lights_lambert_fragment:OR,lights_lambert_pars_fragment:LR,lights_pars_begin:FR,lights_toon_fragment:kR,lights_toon_pars_fragment:BR,lights_phong_fragment:VR,lights_phong_pars_fragment:zR,lights_physical_fragment:HR,lights_physical_pars_fragment:GR,lights_fragment_begin:WR,lights_fragment_maps:jR,lights_fragment_end:$R,logdepthbuf_fragment:qR,logdepthbuf_pars_fragment:XR,logdepthbuf_pars_vertex:ZR,logdepthbuf_vertex:YR,map_fragment:JR,map_pars_fragment:KR,map_particle_fragment:QR,map_particle_pars_fragment:eN,metalnessmap_fragment:tN,metalnessmap_pars_fragment:nN,morphinstance_vertex:iN,morphcolor_vertex:rN,morphnormal_vertex:sN,morphtarget_pars_vertex:oN,morphtarget_vertex:aN,normal_fragment_begin:cN,normal_fragment_maps:lN,normal_pars_fragment:uN,normal_pars_vertex:dN,normal_vertex:fN,normalmap_pars_fragment:hN,clearcoat_normal_fragment_begin:pN,clearcoat_normal_fragment_maps:mN,clearcoat_pars_fragment:gN,iridescence_pars_fragment:vN,opaque_fragment:yN,packing:_N,premultiplied_alpha_fragment:xN,project_vertex:MN,dithering_fragment:SN,dithering_pars_fragment:wN,roughnessmap_fragment:EN,roughnessmap_pars_fragment:bN,shadowmap_pars_fragment:CN,shadowmap_pars_vertex:TN,shadowmap_vertex:DN,shadowmask_pars_fragment:AN,skinbase_vertex:IN,skinning_pars_vertex:RN,skinning_vertex:NN,skinnormal_vertex:PN,specularmap_fragment:ON,specularmap_pars_fragment:LN,tonemapping_fragment:FN,tonemapping_pars_fragment:UN,transmission_fragment:kN,transmission_pars_fragment:BN,uv_pars_fragment:VN,uv_pars_vertex:zN,uv_vertex:HN,worldpos_vertex:GN,background_vert:WN,background_frag:jN,backgroundCube_vert:$N,backgroundCube_frag:qN,cube_vert:XN,cube_frag:ZN,depth_vert:YN,depth_frag:JN,distanceRGBA_vert:KN,distanceRGBA_frag:QN,equirect_vert:eP,equirect_frag:tP,linedashed_vert:nP,linedashed_frag:iP,meshbasic_vert:rP,meshbasic_frag:sP,meshlambert_vert:oP,meshlambert_frag:aP,meshmatcap_vert:cP,meshmatcap_frag:lP,meshnormal_vert:uP,meshnormal_frag:dP,meshphong_vert:fP,meshphong_frag:hP,meshphysical_vert:pP,meshphysical_frag:mP,meshtoon_vert:gP,meshtoon_frag:vP,points_vert:yP,points_frag:_P,shadow_vert:xP,shadow_frag:MP,sprite_vert:SP,sprite_frag:wP},Ee={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},wi={basic:{uniforms:ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new gt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:ln([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:ln([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new gt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:ln([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:ln([Ee.points,Ee.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:ln([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:ln([Ee.common,Ee.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:ln([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:ln([Ee.sprite,Ee.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:ln([Ee.common,Ee.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:ln([Ee.lights,Ee.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};wi.physical={uniforms:ln([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var xf={r:0,b:0,g:0},gs=new br,EP=new Ut;function bP(n,e,t,i,r,s,o){let a=new gt(0),c=s===!0?0:1,l,u,d=null,f=0,p=null;function y(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function _(b){let E=!1,F=y(b);F===null?m(a,c):F&&F.isColor&&(m(F,1),E=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(b,E){let F=y(E);F&&(F.isCubeTexture||F.mapping===Cc)?(u===void 0&&(u=new dn(new Ro(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ms(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),gs.copy(E.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),u.material.uniforms.envMap.value=F,u.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(EP.makeRotationFromEuler(gs)),u.material.toneMapped=xt.getTransfer(F.colorSpace)!==Tt,(d!==F||f!==F.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=F,f=F.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):F&&F.isTexture&&(l===void 0&&(l=new dn(new vc(2,2),new ei({name:"BackgroundMaterial",uniforms:ms(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=F,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=xt.getTransfer(F.colorSpace)!==Tt,F.matrixAutoUpdate===!0&&F.updateMatrix(),l.material.uniforms.uvTransform.value.copy(F.matrix),(d!==F||f!==F.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=F,f=F.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,E){b.getRGB(xf,Fg(n)),i.buffers.color.setClear(xf.r,xf.g,xf.b,E,o)}function N(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),c=E,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:_,addToRenderList:v,dispose:N}}function CP(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(w,O,Y,j,J){let ie=!1,Z=d(j,Y,O);s!==Z&&(s=Z,l(s.object)),ie=p(w,j,Y,J),ie&&y(w,j,Y,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,E(w,O,Y,j),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,O,Y){let j=Y.wireframe===!0,J=i[w.id];J===void 0&&(J={},i[w.id]=J);let ie=J[O.id];ie===void 0&&(ie={},J[O.id]=ie);let Z=ie[j];return Z===void 0&&(Z=f(c()),ie[j]=Z),Z}function f(w){let O=[],Y=[],j=[];for(let J=0;J<t;J++)O[J]=0,Y[J]=0,j[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:j,object:w,attributes:{},index:null}}function p(w,O,Y,j){let J=s.attributes,ie=O.attributes,Z=0,se=Y.getAttributes();for(let q in se)if(se[q].location>=0){let Me=J[q],Ie=ie[q];if(Ie===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(Ie=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(Ie=w.instanceColor)),Me===void 0||Me.attribute!==Ie||Ie&&Me.data!==Ie.data)return!0;Z++}return s.attributesNum!==Z||s.index!==j}function y(w,O,Y,j){let J={},ie=O.attributes,Z=0,se=Y.getAttributes();for(let q in se)if(se[q].location>=0){let Me=ie[q];Me===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor));let Ie={};Ie.attribute=Me,Me&&Me.data&&(Ie.data=Me.data),J[q]=Ie,Z++}s.attributes=J,s.attributesNum=Z,s.index=j}function _(){let w=s.newAttributes;for(let O=0,Y=w.length;O<Y;O++)w[O]=0}function v(w){m(w,0)}function m(w,O){let Y=s.newAttributes,j=s.enabledAttributes,J=s.attributeDivisors;Y[w]=1,j[w]===0&&(n.enableVertexAttribArray(w),j[w]=1),J[w]!==O&&(n.vertexAttribDivisor(w,O),J[w]=O)}function N(){let w=s.newAttributes,O=s.enabledAttributes;for(let Y=0,j=O.length;Y<j;Y++)O[Y]!==w[Y]&&(n.disableVertexAttribArray(Y),O[Y]=0)}function b(w,O,Y,j,J,ie,Z){Z===!0?n.vertexAttribIPointer(w,O,Y,J,ie):n.vertexAttribPointer(w,O,Y,j,J,ie)}function E(w,O,Y,j){_();let J=j.attributes,ie=Y.getAttributes(),Z=O.defaultAttributeValues;for(let se in ie){let q=ie[se];if(q.location>=0){let ge=J[se];if(ge===void 0&&(se==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),se==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),ge!==void 0){let Me=ge.normalized,Ie=ge.itemSize,Ge=e.get(ge);if(Ge===void 0)continue;let at=Ge.buffer,K=Ge.type,ue=Ge.bytesPerElement,me=K===n.INT||K===n.UNSIGNED_INT||ge.gpuType===Bd;if(ge.isInterleavedBufferAttribute){let fe=ge.data,Fe=fe.stride,Xe=ge.offset;if(fe.isInstancedInterleavedBuffer){for(let $e=0;$e<q.locationSize;$e++)m(q.location+$e,fe.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let $e=0;$e<q.locationSize;$e++)v(q.location+$e);n.bindBuffer(n.ARRAY_BUFFER,at);for(let $e=0;$e<q.locationSize;$e++)b(q.location+$e,Ie/q.locationSize,K,Me,Fe*ue,(Xe+Ie/q.locationSize*$e)*ue,me)}else{if(ge.isInstancedBufferAttribute){for(let fe=0;fe<q.locationSize;fe++)m(q.location+fe,ge.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let fe=0;fe<q.locationSize;fe++)v(q.location+fe);n.bindBuffer(n.ARRAY_BUFFER,at);for(let fe=0;fe<q.locationSize;fe++)b(q.location+fe,Ie/q.locationSize,K,Me,Ie*ue,Ie/q.locationSize*fe*ue,me)}}else if(Z!==void 0){let Me=Z[se];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(q.location,Me);break;case 3:n.vertexAttrib3fv(q.location,Me);break;case 4:n.vertexAttrib4fv(q.location,Me);break;default:n.vertexAttrib1fv(q.location,Me)}}}}N()}function F(){U();for(let w in i){let O=i[w];for(let Y in O){let j=O[Y];for(let J in j)u(j[J].object),delete j[J];delete O[Y]}delete i[w]}}function L(w){if(i[w.id]===void 0)return;let O=i[w.id];for(let Y in O){let j=O[Y];for(let J in j)u(j[J].object),delete j[J];delete O[Y]}delete i[w.id]}function P(w){for(let O in i){let Y=i[O];if(Y[w.id]===void 0)continue;let j=Y[w.id];for(let J in j)u(j[J].object),delete j[J];delete Y[w.id]}}function U(){T(),o=!0,s!==r&&(s=r,l(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:v,disableUnusedAttributes:N}}function TP(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let y=0;y<d;y++)p+=u[y];t.update(p,i,1)}function c(l,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<l.length;y++)o(l[y],u[y],f[y]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let y=0;for(let _=0;_<d;_++)y+=u[_]*f[_];t.update(y,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function DP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==yn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let U=P===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Si&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==vn&&!U)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),N=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=y>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:N,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:F,maxSamples:L}}function AP(n){let e=this,t=null,i=0,r=!1,s=!1,o=new pi,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let y=d.clippingPlanes,_=d.clipIntersection,v=d.clipShadows,m=n.get(d);if(!r||y===null||y.length===0||s&&!v)s?u(null):l();else{let N=s?0:i,b=N*4,E=m.clippingState||null;c.value=E,E=u(y,f,b,p);for(let F=0;F!==b;++F)E[F]=t[F];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=N}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,y){let _=d!==null?d.length:0,v=null;if(_!==0){if(v=c.value,y!==!0||v===null){let m=p+_*4,N=f.matrixWorldInverse;a.getNormalMatrix(N),(v===null||v.length<m)&&(v=new Float32Array(m));for(let b=0,E=p;b!==_;++b,E+=4)o.copy(d[b]).applyMatrix4(N,a),o.normal.toArray(v,E),v[E+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function IP(n){let e=new WeakMap;function t(o,a){return a===Fo?o.mapping=ds:a===Ud&&(o.mapping=fs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Fo||a===Ud)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new cd(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Vo=4,NS=[.125,.215,.35,.446,.526,.582],_s=20,zg=new Td,PS=new gt,Hg=null,Gg=0,Wg=0,jg=!1,ys=(1+Math.sqrt(5))/2,Bo=1/ys,OS=[new G(-ys,Bo,0),new G(ys,Bo,0),new G(-Bo,0,ys),new G(Bo,0,ys),new G(0,ys,-Bo),new G(0,ys,Bo),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],wf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Hg=this._renderer.getRenderTarget(),Gg=this._renderer.getActiveCubeFace(),Wg=this._renderer.getActiveMipmapLevel(),jg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=US(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=FS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hg,Gg,Wg),this._renderer.xr.enabled=jg,e.scissorTest=!1,Mf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hg=this._renderer.getRenderTarget(),Gg=this._renderer.getActiveCubeFace(),Wg=this._renderer.getActiveMipmapLevel(),jg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ti,format:yn,colorSpace:vi,depthBuffer:!1},r=LS(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=LS(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RP(s)),this._blurMaterial=NP(s,e,t)}return r}_compileMaterial(e){let t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,zg)}_sceneToCubeUV(e,t,i,r){let a=new rn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(PS),u.toneMapping=Ki,u.autoClear=!1;let p=new nc({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),y=new dn(new Ro,p),_=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,_=!0):(p.color.copy(PS),_=!0);for(let m=0;m<6;m++){let N=m%3;N===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):N===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let b=this._cubeSize;Mf(r,N*b,m>2?b:0,b,b),u.setRenderTarget(r),_&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ds||e.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=US()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=FS());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Mf(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,zg)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=OS[(r-s-1)%OS.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new dn(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_s-1),_=s/y,v=isFinite(s)?1+Math.floor(u*_):_s;v>_s&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${_s}`);let m=[],N=0;for(let P=0;P<_s;++P){let U=P/_,T=Math.exp(-U*U/2);m.push(T),P===0?N+=T:P<v&&(N+=2*T)}for(let P=0;P<m.length;P++)m[P]=m[P]/N;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=y,f.mipInt.value=b-i;let E=this._sizeLods[r],F=3*E*(r>b-Vo?r-b+Vo:0),L=4*(this._cubeSize-E);Mf(t,F,L,3*E,2*E),c.setRenderTarget(t),c.render(d,zg)}};function RP(n){let e=[],t=[],i=[],r=n,s=n-Vo+1+NS.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Vo?c=NS[o-n+Vo-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,y=6,_=3,v=2,m=1,N=new Float32Array(_*y*p),b=new Float32Array(v*y*p),E=new Float32Array(m*y*p);for(let L=0;L<p;L++){let P=L%3*2/3-1,U=L>2?0:-1,T=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];N.set(T,_*y*L),b.set(f,v*y*L);let w=[L,L,L,L,L,L];E.set(w,m*y*L)}let F=new Yi;F.setAttribute("position",new Nn(N,_)),F.setAttribute("uv",new Nn(b,v)),F.setAttribute("faceIndex",new Nn(E,m)),e.push(F),r>Vo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function LS(n,e,t){let i=new yi(n,e,t);return i.texture.mapping=Cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mf(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function NP(n,e,t){let i=new Float32Array(_s),r=new G(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function FS(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function US(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function tv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Fo||c===Ud,u=c===ds||c===fs;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new wf(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new wf(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function OP(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ps("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function LP(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(d){let f=[],p=d.index,y=d.attributes.position,_=0;if(p!==null){let N=p.array;_=p.version;for(let b=0,E=N.length;b<E;b+=3){let F=N[b+0],L=N[b+1],P=N[b+2];f.push(F,L,L,P,P,F)}}else if(y!==void 0){let N=y.array;_=y.version;for(let b=0,E=N.length/3-1;b<E;b+=3){let F=b+0,L=b+1,P=b+2;f.push(F,L,L,P,P,F)}}else return;let v=new(Lg(f)?rc:ic)(f,1);v.version=_;let m=s.get(d);m&&e.remove(m),s.set(d,v)}function u(d){let f=s.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function FP(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function l(f,p,y){y!==0&&(n.drawElementsInstanced(i,p,s,f*o,y),t.update(p,i,y))}function u(f,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,y);let v=0;for(let m=0;m<y;m++)v+=p[m];t.update(v,i,1)}function d(f,p,y,_){if(y===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<f.length;m++)l(f[m]/o,p[m],_[m]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,y);let m=0;for(let N=0;N<y;N++)m+=p[N]*_[N];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function UP(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kP(n,e,t){let i=new WeakMap,r=new kt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let w=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var p=w;f!==void 0&&f.texture.dispose();let y=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],N=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;y===!0&&(E=1),_===!0&&(E=2),v===!0&&(E=3);let F=a.attributes.position.count*E,L=1;F>e.maxTextureSize&&(L=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);let P=new Float32Array(F*L*4*d),U=new ec(P,F,L,d);U.type=vn,U.needsUpdate=!0;let T=E*4;for(let O=0;O<d;O++){let Y=m[O],j=N[O],J=b[O],ie=F*L*4*O;for(let Z=0;Z<Y.count;Z++){let se=Z*T;y===!0&&(r.fromBufferAttribute(Y,Z),P[ie+se+0]=r.x,P[ie+se+1]=r.y,P[ie+se+2]=r.z,P[ie+se+3]=0),_===!0&&(r.fromBufferAttribute(j,Z),P[ie+se+4]=r.x,P[ie+se+5]=r.y,P[ie+se+6]=r.z,P[ie+se+7]=0),v===!0&&(r.fromBufferAttribute(J,Z),P[ie+se+8]=r.x,P[ie+se+9]=r.y,P[ie+se+10]=r.z,P[ie+se+11]=J.itemSize===4?r.w:1)}}f={count:d,texture:U,size:new be(F,L)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let y=0;for(let v=0;v<l.length;v++)y+=l[v];let _=a.morphTargetsRelative?1:1-y;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function BP(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var nw=new er,kS=new cc(1,1),iw=new ec,rw=new sd,sw=new oc,BS=[],VS=[],zS=new Float32Array(16),HS=new Float32Array(9),GS=new Float32Array(4);function Ho(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=BS[r];if(s===void 0&&(s=new Float32Array(r),BS[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bf(n,e){let t=VS[e];t===void 0&&(t=new Int32Array(e),VS[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function VP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function HP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function GP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function WP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Xt(t,i))return;GS.set(i),n.uniformMatrix2fv(this.addr,!1,GS),Zt(t,i)}}function jP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Xt(t,i))return;HS.set(i),n.uniformMatrix3fv(this.addr,!1,HS),Zt(t,i)}}function $P(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Xt(t,i))return;zS.set(i),n.uniformMatrix4fv(this.addr,!1,zS),Zt(t,i)}}function qP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function XP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function ZP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function YP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function JP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function KP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function QP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function eO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function tO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(kS.compareFunction=Pg,s=kS):s=nw,t.setTexture2D(e||s,r)}function nO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||rw,r)}function iO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||sw,r)}function rO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||iw,r)}function sO(n){switch(n){case 5126:return VP;case 35664:return zP;case 35665:return HP;case 35666:return GP;case 35674:return WP;case 35675:return jP;case 35676:return $P;case 5124:case 35670:return qP;case 35667:case 35671:return XP;case 35668:case 35672:return ZP;case 35669:case 35673:return YP;case 5125:return JP;case 36294:return KP;case 36295:return QP;case 36296:return eO;case 35678:case 36198:case 36298:case 36306:case 35682:return tO;case 35679:case 36299:case 36307:return nO;case 35680:case 36300:case 36308:case 36293:return iO;case 36289:case 36303:case 36311:case 36292:return rO}}function oO(n,e){n.uniform1fv(this.addr,e)}function aO(n,e){let t=Ho(e,this.size,2);n.uniform2fv(this.addr,t)}function cO(n,e){let t=Ho(e,this.size,3);n.uniform3fv(this.addr,t)}function lO(n,e){let t=Ho(e,this.size,4);n.uniform4fv(this.addr,t)}function uO(n,e){let t=Ho(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dO(n,e){let t=Ho(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fO(n,e){let t=Ho(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hO(n,e){n.uniform1iv(this.addr,e)}function pO(n,e){n.uniform2iv(this.addr,e)}function mO(n,e){n.uniform3iv(this.addr,e)}function gO(n,e){n.uniform4iv(this.addr,e)}function vO(n,e){n.uniform1uiv(this.addr,e)}function yO(n,e){n.uniform2uiv(this.addr,e)}function _O(n,e){n.uniform3uiv(this.addr,e)}function xO(n,e){n.uniform4uiv(this.addr,e)}function MO(n,e,t){let i=this.cache,r=e.length,s=bf(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||nw,s[o])}function SO(n,e,t){let i=this.cache,r=e.length,s=bf(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||rw,s[o])}function wO(n,e,t){let i=this.cache,r=e.length,s=bf(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||sw,s[o])}function EO(n,e,t){let i=this.cache,r=e.length,s=bf(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||iw,s[o])}function bO(n){switch(n){case 5126:return oO;case 35664:return aO;case 35665:return cO;case 35666:return lO;case 35674:return uO;case 35675:return dO;case 35676:return fO;case 5124:case 35670:return hO;case 35667:case 35671:return pO;case 35668:case 35672:return mO;case 35669:case 35673:return gO;case 5125:return vO;case 36294:return yO;case 36295:return _O;case 36296:return xO;case 35678:case 36198:case 36298:case 36306:case 35682:return MO;case 35679:case 36299:case 36307:return SO;case 35680:case 36300:case 36308:case 36293:return wO;case 36289:case 36303:case 36311:case 36292:return EO}}var qg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sO(t.type)}},Xg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bO(t.type)}},Zg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},$g=/(\w+)(\])?(\[|\.)?/g;function WS(n,e){n.seq.push(e),n.map[e.id]=e}function CO(n,e,t){let i=n.name,r=i.length;for($g.lastIndex=0;;){let s=$g.exec(i),o=$g.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){WS(t,l===void 0?new qg(a,n,e):new Xg(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Zg(a),WS(t,d)),t=d}}}var zo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);CO(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function jS(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var TO=37297,DO=0;function AO(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var $S=new ot;function IO(n){xt._getMatrix($S,xt.workingColorSpace,n);let e=`mat3( ${$S.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case Za:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function qS(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+AO(n.getShaderSource(e),o)}else return r}function RO(n,e){let t=IO(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function NO(n,e){let t;switch(e){case rS:t="Linear";break;case sS:t="Reinhard";break;case oS:t="Cineon";break;case aS:t="ACESFilmic";break;case lS:t="AgX";break;case uS:t="Neutral";break;case cS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sf=new G;function PO(){xt.getLuminanceCoefficients(Sf);let n=Sf.x.toFixed(4),e=Sf.y.toFixed(4),t=Sf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OO(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lc).join(`
`)}function LO(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function FO(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Lc(n){return n!==""}function XS(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ZS(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var UO=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yg(n){return n.replace(UO,BO)}var kO=new Map;function BO(n,e){let t=lt[e];if(t===void 0){let i=kO.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yg(t)}var VO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function YS(n){return n.replace(VO,zO)}function zO(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function JS(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HO(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===UM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function GO(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ds:case fs:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WO(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function jO(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sg:e="ENVMAP_BLENDING_MULTIPLY";break;case nS:e="ENVMAP_BLENDING_MIX";break;case iS:e="ENVMAP_BLENDING_ADD";break}return e}function $O(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function qO(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=HO(t),l=GO(t),u=WO(t),d=jO(t),f=$O(t),p=OO(t),y=LO(s),_=r.createProgram(),v,m,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Lc).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Lc).join(`
`),m.length>0&&(m+=`
`)):(v=[JS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lc).join(`
`),m=[JS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?NO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,RO("linearToOutputTexel",t.outputColorSpace),PO(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lc).join(`
`)),o=Yg(o),o=XS(o,t),o=ZS(o,t),a=Yg(a),a=XS(a,t),a=ZS(a,t),o=YS(o),a=YS(a),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Og?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Og?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=N+v+o,E=N+m+a,F=jS(r,r.VERTEX_SHADER,b),L=jS(r,r.FRAGMENT_SHADER,E);r.attachShader(_,F),r.attachShader(_,L),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(O){if(n.debug.checkShaderErrors){let Y=r.getProgramInfoLog(_).trim(),j=r.getShaderInfoLog(F).trim(),J=r.getShaderInfoLog(L).trim(),ie=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,F,L);else{let se=qS(r,F,"vertex"),q=qS(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Y+`
`+se+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(j===""||J==="")&&(Z=!1);Z&&(O.diagnostics={runnable:ie,programLog:Y,vertexShader:{log:j,prefix:v},fragmentShader:{log:J,prefix:m}})}r.deleteShader(F),r.deleteShader(L),U=new zo(r,_),T=FO(r,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,TO)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DO++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=L,this}var XO=0,Jg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Kg(e),t.set(e,i)),i}},Kg=class{constructor(e){this.id=XO++,this.code=e,this.usedTimes=0}};function ZO(n,e,t,i,r,s,o){let a=new tc,c=new Jg,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function v(T,w,O,Y,j){let J=Y.fog,ie=j.geometry,Z=T.isMeshStandardMaterial?Y.environment:null,se=(T.isMeshStandardMaterial?t:e).get(T.envMap||Z),q=se&&se.mapping===Cc?se.image.height:null,ge=y[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let Me=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ie=Me!==void 0?Me.length:0,Ge=0;ie.morphAttributes.position!==void 0&&(Ge=1),ie.morphAttributes.normal!==void 0&&(Ge=2),ie.morphAttributes.color!==void 0&&(Ge=3);let at,K,ue,me;if(ge){let Mt=wi[ge];at=Mt.vertexShader,K=Mt.fragmentShader}else at=T.vertexShader,K=T.fragmentShader,c.update(T),ue=c.getVertexShaderID(T),me=c.getFragmentShaderID(T);let fe=n.getRenderTarget(),Fe=n.state.buffers.depth.getReversed(),Xe=j.isInstancedMesh===!0,$e=j.isBatchedMesh===!0,ut=!!T.map,oe=!!T.matcap,he=!!se,R=!!T.aoMap,Ve=!!T.lightMap,de=!!T.bumpMap,Re=!!T.normalMap,ye=!!T.displacementMap,qe=!!T.emissiveMap,Te=!!T.metalnessMap,D=!!T.roughnessMap,M=T.anisotropy>0,W=T.clearcoat>0,ee=T.dispersion>0,ce=T.iridescence>0,ne=T.sheen>0,ke=T.transmission>0,Se=M&&!!T.anisotropyMap,De=W&&!!T.clearcoatMap,mt=W&&!!T.clearcoatNormalMap,pe=W&&!!T.clearcoatRoughnessMap,Oe=ce&&!!T.iridescenceMap,Ue=ce&&!!T.iridescenceThicknessMap,ze=ne&&!!T.sheenColorMap,Ne=ne&&!!T.sheenRoughnessMap,tt=!!T.specularMap,We=!!T.specularColorMap,nt=!!T.specularIntensityMap,k=ke&&!!T.transmissionMap,$=ke&&!!T.thicknessMap,X=!!T.gradientMap,ae=!!T.alphaMap,Ae=T.alphaTest>0,Ce=!!T.alphaHash,it=!!T.extensions,Ot=Ki;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ot=n.toneMapping);let Yt={shaderID:ge,shaderType:T.type,shaderName:T.name,vertexShader:at,fragmentShader:K,defines:T.defines,customVertexShaderID:ue,customFragmentShaderID:me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:$e,batchingColor:$e&&j._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&j.instanceColor!==null,instancingMorph:Xe&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:vi,alphaToCoverage:!!T.alphaToCoverage,map:ut,matcap:oe,envMap:he,envMapMode:he&&se.mapping,envMapCubeUVHeight:q,aoMap:R,lightMap:Ve,bumpMap:de,normalMap:Re,displacementMap:f&&ye,emissiveMap:qe,normalMapObjectSpace:Re&&T.normalMapType===pS,normalMapTangentSpace:Re&&T.normalMapType===Ng,metalnessMap:Te,roughnessMap:D,anisotropy:M,anisotropyMap:Se,clearcoat:W,clearcoatMap:De,clearcoatNormalMap:mt,clearcoatRoughnessMap:pe,dispersion:ee,iridescence:ce,iridescenceMap:Oe,iridescenceThicknessMap:Ue,sheen:ne,sheenColorMap:ze,sheenRoughnessMap:Ne,specularMap:tt,specularColorMap:We,specularIntensityMap:nt,transmission:ke,transmissionMap:k,thicknessMap:$,gradientMap:X,opaque:T.transparent===!1&&T.blending===ss&&T.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ae,alphaHash:Ce,combine:T.combine,mapUv:ut&&_(T.map.channel),aoMapUv:R&&_(T.aoMap.channel),lightMapUv:Ve&&_(T.lightMap.channel),bumpMapUv:de&&_(T.bumpMap.channel),normalMapUv:Re&&_(T.normalMap.channel),displacementMapUv:ye&&_(T.displacementMap.channel),emissiveMapUv:qe&&_(T.emissiveMap.channel),metalnessMapUv:Te&&_(T.metalnessMap.channel),roughnessMapUv:D&&_(T.roughnessMap.channel),anisotropyMapUv:Se&&_(T.anisotropyMap.channel),clearcoatMapUv:De&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:mt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(T.sheenRoughnessMap.channel),specularMapUv:tt&&_(T.specularMap.channel),specularColorMapUv:We&&_(T.specularColorMap.channel),specularIntensityMapUv:nt&&_(T.specularIntensityMap.channel),transmissionMapUv:k&&_(T.transmissionMap.channel),thicknessMapUv:$&&_(T.thicknessMap.channel),alphaMapUv:ae&&_(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Re||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ie.attributes.uv&&(ut||ae),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Fe,skinning:j.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ge,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:ut&&T.map.isVideoTexture===!0&&xt.getTransfer(T.map.colorSpace)===Tt,decodeVideoTextureEmissive:qe&&T.emissiveMap.isVideoTexture===!0&&xt.getTransfer(T.emissiveMap.colorSpace)===Tt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Mi,flipSided:T.side===fn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:it&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&T.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function m(T){let w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(let O in T.defines)w.push(O),w.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(N(w,T),b(w,T),w.push(n.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function N(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function b(T,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),T.push(a.mask)}function E(T){let w=y[T.type],O;if(w){let Y=wi[w];O=TS.clone(Y.uniforms)}else O=T.uniforms;return O}function F(T,w){let O;for(let Y=0,j=u.length;Y<j;Y++){let J=u[Y];if(J.cacheKey===w){O=J,++O.usedTimes;break}}return O===void 0&&(O=new qO(n,w,T,s),u.push(O)),O}function L(T){if(--T.usedTimes===0){let w=u.indexOf(T);u[w]=u[u.length-1],u.pop(),T.destroy()}}function P(T){c.remove(T)}function U(){c.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:F,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:U}}function YO(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function JO(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function KS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function QS(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,y,_,v){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:y,renderOrder:d.renderOrder,z:_,group:v},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=_,m.group=v),e++,m}function a(d,f,p,y,_,v){let m=o(d,f,p,y,_,v);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):t.push(m)}function c(d,f,p,y,_,v){let m=o(d,f,p,y,_,v);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function l(d,f){t.length>1&&t.sort(d||JO),i.length>1&&i.sort(f||KS),r.length>1&&r.sort(f||KS)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function KO(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new QS,n.set(i,[o])):r>=s.length?(o=new QS,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function QO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new gt};break;case"SpotLight":t={position:new G,direction:new G,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function eL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var tL=0;function nL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iL(n){let e=new QO,t=eL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new G);let r=new G,s=new Ut,o=new Ut;function a(l){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,y=0,_=0,v=0,m=0,N=0,b=0,E=0,F=0,L=0,P=0;l.sort(nL);for(let T=0,w=l.length;T<w;T++){let O=l[T],Y=O.color,j=O.intensity,J=O.distance,ie=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=Y.r*j,d+=Y.g*j,f+=Y.b*j;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(O.sh.coefficients[Z],j);P++}else if(O.isDirectionalLight){let Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let se=O.shadow,q=t.get(O);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=O.shadow.matrix,N++}i.directional[p]=Z,p++}else if(O.isSpotLight){let Z=e.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(Y).multiplyScalar(j),Z.distance=J,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,i.spot[_]=Z;let se=O.shadow;if(O.map&&(i.spotLightMap[F]=O.map,F++,se.updateMatrices(O),O.castShadow&&L++),i.spotLightMatrix[_]=se.matrix,O.castShadow){let q=t.get(O);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=ie,E++}_++}else if(O.isRectAreaLight){let Z=e.get(O);Z.color.copy(Y).multiplyScalar(j),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),i.rectArea[v]=Z,v++}else if(O.isPointLight){let Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){let se=O.shadow,q=t.get(O);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,q.shadowCameraNear=se.camera.near,q.shadowCameraFar=se.camera.far,i.pointShadow[y]=q,i.pointShadowMap[y]=ie,i.pointShadowMatrix[y]=O.shadow.matrix,b++}i.point[y]=Z,y++}else if(O.isHemisphereLight){let Z=e.get(O);Z.skyColor.copy(O.color).multiplyScalar(j),Z.groundColor.copy(O.groundColor).multiplyScalar(j),i.hemi[m]=Z,m++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==p||U.pointLength!==y||U.spotLength!==_||U.rectAreaLength!==v||U.hemiLength!==m||U.numDirectionalShadows!==N||U.numPointShadows!==b||U.numSpotShadows!==E||U.numSpotMaps!==F||U.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=v,i.point.length=y,i.hemi.length=m,i.directionalShadow.length=N,i.directionalShadowMap.length=N,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=N,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+F-L,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,U.directionalLength=p,U.pointLength=y,U.spotLength=_,U.rectAreaLength=v,U.hemiLength=m,U.numDirectionalShadows=N,U.numPointShadows=b,U.numSpotShadows=E,U.numSpotMaps=F,U.numLightProbes=P,i.version=tL++)}function c(l,u){let d=0,f=0,p=0,y=0,_=0,v=u.matrixWorldInverse;for(let m=0,N=l.length;m<N;m++){let b=l[m];if(b.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(v),d++}else if(b.isSpotLight){let E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(v),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(v),p++}else if(b.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(v),o.identity(),s.copy(b.matrixWorld),s.premultiply(v),o.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(v),f++}else if(b.isHemisphereLight){let E=i.hemi[_];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(v),_++}}}return{setup:a,setupView:c,state:i}}function ew(n){let e=new iL(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function rL(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new ew(n),e.set(r,[a])):s>=o.length?(a=new ew(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var sL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aL(n,e,t){let i=new No,r=new be,s=new be,o=new kt,a=new vd({depthPacking:hS}),c=new yd,l={},u=t.maxTextureSize,d={[qi]:fn,[fn]:qi,[Mi]:Mi},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:sL,fragmentShader:oL}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let y=new Yi;y.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new dn(y,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yg;let m=this.type;this.render=function(L,P,U){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||L.length===0)return;let T=n.getRenderTarget(),w=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Ji),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let j=m!==xi&&this.type===xi,J=m===xi&&this.type!==xi;for(let ie=0,Z=L.length;ie<Z;ie++){let se=L[ie],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let ge=q.getFrameExtents();if(r.multiply(ge),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,q.mapSize.y=s.y)),q.map===null||j===!0||J===!0){let Ie=this.type!==xi?{minFilter:gn,magFilter:gn}:{};q.map!==null&&q.map.dispose(),q.map=new yi(r.x,r.y,Ie),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let Me=q.getViewportCount();for(let Ie=0;Ie<Me;Ie++){let Ge=q.getViewport(Ie);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),Y.viewport(o),q.updateMatrices(se,Ie),i=q.getFrustum(),E(P,U,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===xi&&N(q,U),q.needsUpdate=!1}m=this.type,v.needsUpdate=!1,n.setRenderTarget(T,w,O)};function N(L,P){let U=e.update(_);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new yi(r.x,r.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,U,f,_,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,U,p,_,null)}function b(L,P,U,T){let w=null,O=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(O!==void 0)w=O;else if(w=U.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let Y=w.uuid,j=P.uuid,J=l[Y];J===void 0&&(J={},l[Y]=J);let ie=J[j];ie===void 0&&(ie=w.clone(),J[j]=ie,P.addEventListener("dispose",F)),w=ie}if(w.visible=P.visible,w.wireframe=P.wireframe,T===xi?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:d[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let Y=n.properties.get(w);Y.light=U}return w}function E(L,P,U,T,w){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===xi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);let j=e.update(L),J=L.material;if(Array.isArray(J)){let ie=j.groups;for(let Z=0,se=ie.length;Z<se;Z++){let q=ie[Z],ge=J[q.materialIndex];if(ge&&ge.visible){let Me=b(L,ge,T,w);L.onBeforeShadow(n,L,P,U,j,Me,q),n.renderBufferDirect(U,null,j,Me,L,q),L.onAfterShadow(n,L,P,U,j,Me,q)}}}else if(J.visible){let ie=b(L,J,T,w);L.onBeforeShadow(n,L,P,U,j,ie,null),n.renderBufferDirect(U,null,j,ie,L,null),L.onAfterShadow(n,L,P,U,j,ie,null)}}let Y=L.children;for(let j=0,J=Y.length;j<J;j++)E(Y[j],P,U,T,w)}function F(L){L.target.removeEventListener("dispose",F);for(let U in l){let T=l[U],w=L.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}var cL={[Id]:Rd,[Nd]:Ld,[Pd]:Fd,[os]:Od,[Rd]:Id,[Ld]:Nd,[Fd]:Pd,[Od]:os};function lL(n,e){function t(){let k=!1,$=new kt,X=null,ae=new kt(0,0,0,0);return{setMask:function(Ae){X!==Ae&&!k&&(n.colorMask(Ae,Ae,Ae,Ae),X=Ae)},setLocked:function(Ae){k=Ae},setClear:function(Ae,Ce,it,Ot,Yt){Yt===!0&&(Ae*=Ot,Ce*=Ot,it*=Ot),$.set(Ae,Ce,it,Ot),ae.equals($)===!1&&(n.clearColor(Ae,Ce,it,Ot),ae.copy($))},reset:function(){k=!1,X=null,ae.set(-1,0,0,0)}}}function i(){let k=!1,$=!1,X=null,ae=null,Ae=null;return{setReversed:function(Ce){if($!==Ce){let it=e.get("EXT_clip_control");$?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);let Ot=Ae;Ae=null,this.setClear(Ot)}$=Ce},getReversed:function(){return $},setTest:function(Ce){Ce?fe(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(Ce){X!==Ce&&!k&&(n.depthMask(Ce),X=Ce)},setFunc:function(Ce){if($&&(Ce=cL[Ce]),ae!==Ce){switch(Ce){case Id:n.depthFunc(n.NEVER);break;case Rd:n.depthFunc(n.ALWAYS);break;case Nd:n.depthFunc(n.LESS);break;case os:n.depthFunc(n.LEQUAL);break;case Pd:n.depthFunc(n.EQUAL);break;case Od:n.depthFunc(n.GEQUAL);break;case Ld:n.depthFunc(n.GREATER);break;case Fd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Ce}},setLocked:function(Ce){k=Ce},setClear:function(Ce){Ae!==Ce&&($&&(Ce=1-Ce),n.clearDepth(Ce),Ae=Ce)},reset:function(){k=!1,X=null,ae=null,Ae=null,$=!1}}}function r(){let k=!1,$=null,X=null,ae=null,Ae=null,Ce=null,it=null,Ot=null,Yt=null;return{setTest:function(Mt){k||(Mt?fe(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(Mt){$!==Mt&&!k&&(n.stencilMask(Mt),$=Mt)},setFunc:function(Mt,_n,Wn){(X!==Mt||ae!==_n||Ae!==Wn)&&(n.stencilFunc(Mt,_n,Wn),X=Mt,ae=_n,Ae=Wn)},setOp:function(Mt,_n,Wn){(Ce!==Mt||it!==_n||Ot!==Wn)&&(n.stencilOp(Mt,_n,Wn),Ce=Mt,it=_n,Ot=Wn)},setLocked:function(Mt){k=Mt},setClear:function(Mt){Yt!==Mt&&(n.clearStencil(Mt),Yt=Mt)},reset:function(){k=!1,$=null,X=null,ae=null,Ae=null,Ce=null,it=null,Ot=null,Yt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],y=null,_=!1,v=null,m=null,N=null,b=null,E=null,F=null,L=null,P=new gt(0,0,0),U=0,T=!1,w=null,O=null,Y=null,j=null,J=null,ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,se=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=se>=1):q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=se>=2);let ge=null,Me={},Ie=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),at=new kt().fromArray(Ie),K=new kt().fromArray(Ge);function ue(k,$,X,ae){let Ae=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(k,Ce),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<X;it++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D($,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D($+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Ce}let me={};me[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(os),de(!1),Re(vg),fe(n.CULL_FACE),R(Ji);function fe(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function Fe(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function Xe(k,$){return d[k]!==$?(n.bindFramebuffer(k,$),d[k]=$,k===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=$),k===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=$),!0):!1}function $e(k,$){let X=p,ae=!1;if(k){X=f.get($),X===void 0&&(X=[],f.set($,X));let Ae=k.textures;if(X.length!==Ae.length||X[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,it=Ae.length;Ce<it;Ce++)X[Ce]=n.COLOR_ATTACHMENT0+Ce;X.length=Ae.length,ae=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,ae=!0);ae&&n.drawBuffers(X)}function ut(k){return y!==k?(n.useProgram(k),y=k,!0):!1}let oe={[wr]:n.FUNC_ADD,[BM]:n.FUNC_SUBTRACT,[VM]:n.FUNC_REVERSE_SUBTRACT};oe[zM]=n.MIN,oe[HM]=n.MAX;let he={[GM]:n.ZERO,[WM]:n.ONE,[jM]:n.SRC_COLOR,[Ku]:n.SRC_ALPHA,[JM]:n.SRC_ALPHA_SATURATE,[ZM]:n.DST_COLOR,[qM]:n.DST_ALPHA,[$M]:n.ONE_MINUS_SRC_COLOR,[Qu]:n.ONE_MINUS_SRC_ALPHA,[YM]:n.ONE_MINUS_DST_COLOR,[XM]:n.ONE_MINUS_DST_ALPHA,[KM]:n.CONSTANT_COLOR,[QM]:n.ONE_MINUS_CONSTANT_COLOR,[eS]:n.CONSTANT_ALPHA,[tS]:n.ONE_MINUS_CONSTANT_ALPHA};function R(k,$,X,ae,Ae,Ce,it,Ot,Yt,Mt){if(k===Ji){_===!0&&(Fe(n.BLEND),_=!1);return}if(_===!1&&(fe(n.BLEND),_=!0),k!==kM){if(k!==v||Mt!==T){if((m!==wr||E!==wr)&&(n.blendEquation(n.FUNC_ADD),m=wr,E=wr),Mt)switch(k){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _g:n.blendFunc(n.ONE,n.ONE);break;case xg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _g:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,b=null,F=null,L=null,P.set(0,0,0),U=0,v=k,T=Mt}return}Ae=Ae||$,Ce=Ce||X,it=it||ae,($!==m||Ae!==E)&&(n.blendEquationSeparate(oe[$],oe[Ae]),m=$,E=Ae),(X!==N||ae!==b||Ce!==F||it!==L)&&(n.blendFuncSeparate(he[X],he[ae],he[Ce],he[it]),N=X,b=ae,F=Ce,L=it),(Ot.equals(P)===!1||Yt!==U)&&(n.blendColor(Ot.r,Ot.g,Ot.b,Yt),P.copy(Ot),U=Yt),v=k,T=!1}function Ve(k,$){k.side===Mi?Fe(n.CULL_FACE):fe(n.CULL_FACE);let X=k.side===fn;$&&(X=!X),de(X),k.blending===ss&&k.transparent===!1?R(Ji):R(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);let ae=k.stencilWrite;a.setTest(ae),ae&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),qe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(k){w!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),w=k)}function Re(k){k!==LM?(fe(n.CULL_FACE),k!==O&&(k===vg?n.cullFace(n.BACK):k===FM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),O=k}function ye(k){k!==Y&&(Z&&n.lineWidth(k),Y=k)}function qe(k,$,X){k?(fe(n.POLYGON_OFFSET_FILL),(j!==$||J!==X)&&(n.polygonOffset($,X),j=$,J=X)):Fe(n.POLYGON_OFFSET_FILL)}function Te(k){k?fe(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function D(k){k===void 0&&(k=n.TEXTURE0+ie-1),ge!==k&&(n.activeTexture(k),ge=k)}function M(k,$,X){X===void 0&&(ge===null?X=n.TEXTURE0+ie-1:X=ge);let ae=Me[X];ae===void 0&&(ae={type:void 0,texture:void 0},Me[X]=ae),(ae.type!==k||ae.texture!==$)&&(ge!==X&&(n.activeTexture(X),ge=X),n.bindTexture(k,$||me[k]),ae.type=k,ae.texture=$)}function W(){let k=Me[ge];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(k){at.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),at.copy(k))}function Ne(k){K.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function tt(k,$){let X=l.get($);X===void 0&&(X=new WeakMap,l.set($,X));let ae=X.get(k);ae===void 0&&(ae=n.getUniformBlockIndex($,k.name),X.set(k,ae))}function We(k,$){let ae=l.get($).get(k);c.get($)!==ae&&(n.uniformBlockBinding($,ae,k.__bindingPointIndex),c.set($,ae))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,Me={},d={},f=new WeakMap,p=[],y=null,_=!1,v=null,m=null,N=null,b=null,E=null,F=null,L=null,P=new gt(0,0,0),U=0,T=!1,w=null,O=null,Y=null,j=null,J=null,at.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:Fe,bindFramebuffer:Xe,drawBuffers:$e,useProgram:ut,setBlending:R,setMaterial:Ve,setFlipSided:de,setCullFace:Re,setLineWidth:ye,setPolygonOffset:qe,setScissorTest:Te,activeTexture:D,bindTexture:M,unbindTexture:W,compressedTexImage2D:ee,compressedTexImage3D:ce,texImage2D:Oe,texImage3D:Ue,updateUBOMapping:tt,uniformBlockBinding:We,texStorage2D:mt,texStorage3D:pe,texSubImage2D:ne,texSubImage3D:ke,compressedTexSubImage2D:Se,compressedTexSubImage3D:De,scissor:ze,viewport:Ne,reset:nt}}function uL(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new be,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,M){return p?new OffscreenCanvas(D,M):Ka("canvas")}function _(D,M,W){let ee=1,ce=Te(D);if((ce.width>W||ce.height>W)&&(ee=W/Math.max(ce.width,ce.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ne=Math.floor(ee*ce.width),ke=Math.floor(ee*ce.height);d===void 0&&(d=y(ne,ke));let Se=M?y(ne,ke):d;return Se.width=ne,Se.height=ke,Se.getContext("2d").drawImage(D,0,0,ne,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ne+"x"+ke+")."),Se}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),D;return D}function v(D){return D.generateMipmaps}function m(D){n.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,M,W,ee,ce=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ne=M;if(M===n.RED&&(W===n.FLOAT&&(ne=n.R32F),W===n.HALF_FLOAT&&(ne=n.R16F),W===n.UNSIGNED_BYTE&&(ne=n.R8)),M===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.R8UI),W===n.UNSIGNED_SHORT&&(ne=n.R16UI),W===n.UNSIGNED_INT&&(ne=n.R32UI),W===n.BYTE&&(ne=n.R8I),W===n.SHORT&&(ne=n.R16I),W===n.INT&&(ne=n.R32I)),M===n.RG&&(W===n.FLOAT&&(ne=n.RG32F),W===n.HALF_FLOAT&&(ne=n.RG16F),W===n.UNSIGNED_BYTE&&(ne=n.RG8)),M===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.RG8UI),W===n.UNSIGNED_SHORT&&(ne=n.RG16UI),W===n.UNSIGNED_INT&&(ne=n.RG32UI),W===n.BYTE&&(ne=n.RG8I),W===n.SHORT&&(ne=n.RG16I),W===n.INT&&(ne=n.RG32I)),M===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),W===n.UNSIGNED_INT&&(ne=n.RGB32UI),W===n.BYTE&&(ne=n.RGB8I),W===n.SHORT&&(ne=n.RGB16I),W===n.INT&&(ne=n.RGB32I)),M===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),W===n.UNSIGNED_INT&&(ne=n.RGBA32UI),W===n.BYTE&&(ne=n.RGBA8I),W===n.SHORT&&(ne=n.RGBA16I),W===n.INT&&(ne=n.RGBA32I)),M===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),M===n.RGBA){let ke=ce?Za:xt.getTransfer(ee);W===n.FLOAT&&(ne=n.RGBA32F),W===n.HALF_FLOAT&&(ne=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ne=ke===Tt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(D,M){let W;return D?M===null||M===Ar||M===hs?W=n.DEPTH24_STENCIL8:M===vn?W=n.DEPTH32F_STENCIL8:M===Uo&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ar||M===hs?W=n.DEPTH_COMPONENT24:M===vn?W=n.DEPTH_COMPONENT32F:M===Uo&&(W=n.DEPTH_COMPONENT16),W}function F(D,M){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==gn&&D.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function L(D){let M=D.target;M.removeEventListener("dispose",L),U(M),M.isVideoTexture&&u.delete(M)}function P(D){let M=D.target;M.removeEventListener("dispose",P),w(M)}function U(D){let M=i.get(D);if(M.__webglInit===void 0)return;let W=D.source,ee=f.get(W);if(ee){let ce=ee[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&T(D),Object.keys(ee).length===0&&f.delete(W)}i.remove(D)}function T(D){let M=i.get(D);n.deleteTexture(M.__webglTexture);let W=D.source,ee=f.get(W);delete ee[M.__cacheKey],o.memory.textures--}function w(D){let M=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ce=0;ce<M.__webglFramebuffer[ee].length;ce++)n.deleteFramebuffer(M.__webglFramebuffer[ee][ce]);else n.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[ee]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let W=D.textures;for(let ee=0,ce=W.length;ee<ce;ee++){let ne=i.get(W[ee]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(W[ee])}i.remove(D)}let O=0;function Y(){O=0}function j(){let D=O;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),O+=1,D}function J(D){let M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function ie(D,M){let W=i.get(D);if(D.isVideoTexture&&ye(D),D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){let ee=D.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(W,D,M);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+M)}function Z(D,M){let W=i.get(D);if(D.version>0&&W.__version!==D.version){K(W,D,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+M)}function se(D,M){let W=i.get(D);if(D.version>0&&W.__version!==D.version){K(W,D,M);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+M)}function q(D,M){let W=i.get(D);if(D.version>0&&W.__version!==D.version){ue(W,D,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+M)}let ge={[ed]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[td]:n.MIRRORED_REPEAT},Me={[gn]:n.NEAREST,[dS]:n.NEAREST_MIPMAP_NEAREST,[Tc]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[kd]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},Ie={[mS]:n.NEVER,[MS]:n.ALWAYS,[gS]:n.LESS,[Pg]:n.LEQUAL,[vS]:n.EQUAL,[xS]:n.GEQUAL,[yS]:n.GREATER,[_S]:n.NOTEQUAL};function Ge(D,M){if(M.type===vn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===kd||M.magFilter===Tc||M.magFilter===Qi||M.minFilter===sn||M.minFilter===kd||M.minFilter===Tc||M.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ge[M.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ge[M.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ge[M.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Me[M.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gn||M.minFilter!==Tc&&M.minFilter!==Qi||M.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function at(D,M){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",L));let ee=M.source,ce=f.get(ee);ce===void 0&&(ce={},f.set(ee,ce));let ne=J(M);if(ne!==D.__cacheKey){ce[ne]===void 0&&(ce[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ce[ne].usedTimes++;let ke=ce[D.__cacheKey];ke!==void 0&&(ce[D.__cacheKey].usedTimes--,ke.usedTimes===0&&T(M)),D.__cacheKey=ne,D.__webglTexture=ce[ne].texture}return W}function K(D,M,W){let ee=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=n.TEXTURE_3D);let ce=at(D,M),ne=M.source;t.bindTexture(ee,D.__webglTexture,n.TEXTURE0+W);let ke=i.get(ne);if(ne.version!==ke.__version||ce===!0){t.activeTexture(n.TEXTURE0+W);let Se=xt.getPrimaries(xt.workingColorSpace),De=M.colorSpace===ni?null:xt.getPrimaries(M.colorSpace),mt=M.colorSpace===ni||Se===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let pe=_(M.image,!1,r.maxTextureSize);pe=qe(M,pe);let Oe=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type),ze=b(M.internalFormat,Oe,Ue,M.colorSpace,M.isVideoTexture);Ge(ee,M);let Ne,tt=M.mipmaps,We=M.isVideoTexture!==!0,nt=ke.__version===void 0||ce===!0,k=ne.dataReady,$=F(M,pe);if(M.isDepthTexture)ze=E(M.format===as,M.type),nt&&(We?t.texStorage2D(n.TEXTURE_2D,1,ze,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,ze,pe.width,pe.height,0,Oe,Ue,null));else if(M.isDataTexture)if(tt.length>0){We&&nt&&t.texStorage2D(n.TEXTURE_2D,$,ze,tt[0].width,tt[0].height);for(let X=0,ae=tt.length;X<ae;X++)Ne=tt[X],We?k&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Ne.width,Ne.height,Oe,Ue,Ne.data):t.texImage2D(n.TEXTURE_2D,X,ze,Ne.width,Ne.height,0,Oe,Ue,Ne.data);M.generateMipmaps=!1}else We?(nt&&t.texStorage2D(n.TEXTURE_2D,$,ze,pe.width,pe.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,Oe,Ue,pe.data)):t.texImage2D(n.TEXTURE_2D,0,ze,pe.width,pe.height,0,Oe,Ue,pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$,ze,tt[0].width,tt[0].height,pe.depth);for(let X=0,ae=tt.length;X<ae;X++)if(Ne=tt[X],M.format!==yn)if(Oe!==null)if(We){if(k)if(M.layerUpdates.size>0){let Ae=Vg(Ne.width,Ne.height,M.format,M.type);for(let Ce of M.layerUpdates){let it=Ne.data.subarray(Ce*Ae/Ne.data.BYTES_PER_ELEMENT,(Ce+1)*Ae/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,Ce,Ne.width,Ne.height,1,Oe,it)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Ne.width,Ne.height,pe.depth,Oe,Ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,ze,Ne.width,Ne.height,pe.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Ne.width,Ne.height,pe.depth,Oe,Ue,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,ze,Ne.width,Ne.height,pe.depth,0,Oe,Ue,Ne.data)}else{We&&nt&&t.texStorage2D(n.TEXTURE_2D,$,ze,tt[0].width,tt[0].height);for(let X=0,ae=tt.length;X<ae;X++)Ne=tt[X],M.format!==yn?Oe!==null?We?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Ne.width,Ne.height,Oe,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,X,ze,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?k&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Ne.width,Ne.height,Oe,Ue,Ne.data):t.texImage2D(n.TEXTURE_2D,X,ze,Ne.width,Ne.height,0,Oe,Ue,Ne.data)}else if(M.isDataArrayTexture)if(We){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$,ze,pe.width,pe.height,pe.depth),k)if(M.layerUpdates.size>0){let X=Vg(pe.width,pe.height,M.format,M.type);for(let ae of M.layerUpdates){let Ae=pe.data.subarray(ae*X/pe.data.BYTES_PER_ELEMENT,(ae+1)*X/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,pe.width,pe.height,1,Oe,Ue,Ae)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Oe,Ue,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,pe.width,pe.height,pe.depth,0,Oe,Ue,pe.data);else if(M.isData3DTexture)We?(nt&&t.texStorage3D(n.TEXTURE_3D,$,ze,pe.width,pe.height,pe.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Oe,Ue,pe.data)):t.texImage3D(n.TEXTURE_3D,0,ze,pe.width,pe.height,pe.depth,0,Oe,Ue,pe.data);else if(M.isFramebufferTexture){if(nt)if(We)t.texStorage2D(n.TEXTURE_2D,$,ze,pe.width,pe.height);else{let X=pe.width,ae=pe.height;for(let Ae=0;Ae<$;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,ze,X,ae,0,Oe,Ue,null),X>>=1,ae>>=1}}else if(tt.length>0){if(We&&nt){let X=Te(tt[0]);t.texStorage2D(n.TEXTURE_2D,$,ze,X.width,X.height)}for(let X=0,ae=tt.length;X<ae;X++)Ne=tt[X],We?k&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Oe,Ue,Ne):t.texImage2D(n.TEXTURE_2D,X,ze,Oe,Ue,Ne);M.generateMipmaps=!1}else if(We){if(nt){let X=Te(pe);t.texStorage2D(n.TEXTURE_2D,$,ze,X.width,X.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Oe,Ue,pe)}else t.texImage2D(n.TEXTURE_2D,0,ze,Oe,Ue,pe);v(M)&&m(ee),ke.__version=ne.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ue(D,M,W){if(M.image.length!==6)return;let ee=at(D,M),ce=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+W);let ne=i.get(ce);if(ce.version!==ne.__version||ee===!0){t.activeTexture(n.TEXTURE0+W);let ke=xt.getPrimaries(xt.workingColorSpace),Se=M.colorSpace===ni?null:xt.getPrimaries(M.colorSpace),De=M.colorSpace===ni||ke===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let mt=M.isCompressedTexture||M.image[0].isCompressedTexture,pe=M.image[0]&&M.image[0].isDataTexture,Oe=[];for(let ae=0;ae<6;ae++)!mt&&!pe?Oe[ae]=_(M.image[ae],!0,r.maxCubemapSize):Oe[ae]=pe?M.image[ae].image:M.image[ae],Oe[ae]=qe(M,Oe[ae]);let Ue=Oe[0],ze=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type),tt=b(M.internalFormat,ze,Ne,M.colorSpace),We=M.isVideoTexture!==!0,nt=ne.__version===void 0||ee===!0,k=ce.dataReady,$=F(M,Ue);Ge(n.TEXTURE_CUBE_MAP,M);let X;if(mt){We&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$,tt,Ue.width,Ue.height);for(let ae=0;ae<6;ae++){X=Oe[ae].mipmaps;for(let Ae=0;Ae<X.length;Ae++){let Ce=X[Ae];M.format!==yn?ze!==null?We?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,Ce.width,Ce.height,ze,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,tt,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,Ce.width,Ce.height,ze,Ne,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,tt,Ce.width,Ce.height,0,ze,Ne,Ce.data)}}}else{if(X=M.mipmaps,We&&nt){X.length>0&&$++;let ae=Te(Oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,$,tt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(pe){We?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Oe[ae].width,Oe[ae].height,ze,Ne,Oe[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,tt,Oe[ae].width,Oe[ae].height,0,ze,Ne,Oe[ae].data);for(let Ae=0;Ae<X.length;Ae++){let it=X[Ae].image[ae].image;We?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,it.width,it.height,ze,Ne,it.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,tt,it.width,it.height,0,ze,Ne,it.data)}}else{We?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ze,Ne,Oe[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,tt,ze,Ne,Oe[ae]);for(let Ae=0;Ae<X.length;Ae++){let Ce=X[Ae];We?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,ze,Ne,Ce.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,tt,ze,Ne,Ce.image[ae])}}}v(M)&&m(n.TEXTURE_CUBE_MAP),ne.__version=ce.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function me(D,M,W,ee,ce,ne){let ke=s.convert(W.format,W.colorSpace),Se=s.convert(W.type),De=b(W.internalFormat,ke,Se,W.colorSpace),mt=i.get(M),pe=i.get(W);if(pe.__renderTarget=M,!mt.__hasExternalTextures){let Oe=Math.max(1,M.width>>ne),Ue=Math.max(1,M.height>>ne);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ne,De,Oe,Ue,M.depth,0,ke,Se,null):t.texImage2D(ce,ne,De,Oe,Ue,0,ke,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Re(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ce,pe.__webglTexture,0,de(M)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ce,pe.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(D,M,W){if(n.bindRenderbuffer(n.RENDERBUFFER,D),M.depthBuffer){let ee=M.depthTexture,ce=ee&&ee.isDepthTexture?ee.type:null,ne=E(M.stencilBuffer,ce),ke=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=de(M);Re(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ne,M.width,M.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ne,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ne,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ke,n.RENDERBUFFER,D)}else{let ee=M.textures;for(let ce=0;ce<ee.length;ce++){let ne=ee[ce],ke=s.convert(ne.format,ne.colorSpace),Se=s.convert(ne.type),De=b(ne.internalFormat,ke,Se,ne.colorSpace),mt=de(M);W&&Re(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,De,M.width,M.height):Re(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt,De,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,De,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(M.depthTexture);ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ie(M.depthTexture,0);let ce=ee.__webglTexture,ne=de(M);if(M.depthTexture.format===ns)Re(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(M.depthTexture.format===as)Re(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Xe(D){let M=i.get(D),W=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){let ee=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){let ce=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ce)};ee.addEventListener("dispose",ce),M.__depthDisposeCallback=ce}M.__boundDepthTexture=ee}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Fe(M.__webglFramebuffer,D)}else if(W){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=n.createRenderbuffer(),fe(M.__webglDepthbuffer[ee],D,!1);else{let ce=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),fe(M.__webglDepthbuffer,D,!1);else{let ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(D,M,W){let ee=i.get(D);M!==void 0&&me(ee.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Xe(D)}function ut(D){let M=D.texture,W=i.get(D),ee=i.get(M);D.addEventListener("dispose",P);let ce=D.textures,ne=D.isWebGLCubeRenderTarget===!0,ke=ce.length>1;if(ke||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=M.version,o.memory.textures++),ne){W.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Se]=[];for(let De=0;De<M.mipmaps.length;De++)W.__webglFramebuffer[Se][De]=n.createFramebuffer()}else W.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Se=0;Se<M.mipmaps.length;Se++)W.__webglFramebuffer[Se]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ke)for(let Se=0,De=ce.length;Se<De;Se++){let mt=i.get(ce[Se]);mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Re(D)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Se=0;Se<ce.length;Se++){let De=ce[Se];W.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Se]);let mt=s.convert(De.format,De.colorSpace),pe=s.convert(De.type),Oe=b(De.internalFormat,mt,pe,De.colorSpace,D.isXRRenderTarget===!0),Ue=de(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Oe,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,W.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(W.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,M);for(let Se=0;Se<6;Se++)if(M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)me(W.__webglFramebuffer[Se][De],D,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De);else me(W.__webglFramebuffer[Se],D,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);v(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Se=0,De=ce.length;Se<De;Se++){let mt=ce[Se],pe=i.get(mt);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),Ge(n.TEXTURE_2D,mt),me(W.__webglFramebuffer,D,mt,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),v(mt)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Se=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,ee.__webglTexture),Ge(Se,M),M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)me(W.__webglFramebuffer[De],D,M,n.COLOR_ATTACHMENT0,Se,De);else me(W.__webglFramebuffer,D,M,n.COLOR_ATTACHMENT0,Se,0);v(M)&&m(Se),t.unbindTexture()}D.depthBuffer&&Xe(D)}function oe(D){let M=D.textures;for(let W=0,ee=M.length;W<ee;W++){let ce=M[W];if(v(ce)){let ne=N(D),ke=i.get(ce).__webglTexture;t.bindTexture(ne,ke),m(ne),t.unbindTexture()}}}let he=[],R=[];function Ve(D){if(D.samples>0){if(Re(D)===!1){let M=D.textures,W=D.width,ee=D.height,ce=n.COLOR_BUFFER_BIT,ne=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=i.get(D),Se=M.length>1;if(Se)for(let De=0;De<M.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let De=0;De<M.length;De++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ke.__webglColorRenderbuffer[De]);let mt=i.get(M[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,mt,0)}n.blitFramebuffer(0,0,W,ee,0,0,W,ee,ce,n.NEAREST),c===!0&&(he.length=0,R.length=0,he.push(n.COLOR_ATTACHMENT0+De),D.depthBuffer&&D.resolveDepthBuffer===!1&&(he.push(ne),R.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let De=0;De<M.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,ke.__webglColorRenderbuffer[De]);let mt=i.get(M[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,mt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let M=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function de(D){return Math.min(r.maxSamples,D.samples)}function Re(D){let M=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ye(D){let M=o.render.frame;u.get(D)!==M&&(u.set(D,M),D.update())}function qe(D,M){let W=D.colorSpace,ee=D.format,ce=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==vi&&W!==ni&&(xt.getTransfer(W)===Tt?(ee!==yn||ce!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function Te(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=Y,this.setTexture2D=ie,this.setTexture2DArray=Z,this.setTexture3D=se,this.setTextureCube=q,this.rebindTextures=$e,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Re}function dL(n,e){function t(i,r=ni){let s,o=xt.getTransfer(r);if(i===Si)return n.UNSIGNED_BYTE;if(i===Vd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wg)return n.BYTE;if(i===Eg)return n.SHORT;if(i===Uo)return n.UNSIGNED_SHORT;if(i===Bd)return n.INT;if(i===Ar)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===ti)return n.HALF_FLOAT;if(i===Cg)return n.ALPHA;if(i===Tg)return n.RGB;if(i===yn)return n.RGBA;if(i===Dg)return n.LUMINANCE;if(i===Ag)return n.LUMINANCE_ALPHA;if(i===ns)return n.DEPTH_COMPONENT;if(i===as)return n.DEPTH_STENCIL;if(i===Dc)return n.RED;if(i===Hd)return n.RED_INTEGER;if(i===Ig)return n.RG;if(i===Gd)return n.RG_INTEGER;if(i===Wd)return n.RGBA_INTEGER;if(i===Ac||i===Ic||i===Rc||i===Nc)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ic)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jd||i===$d||i===qd||i===Xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zd||i===Yd||i===Jd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zd||i===Yd)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kd||i===Qd||i===ef||i===tf||i===nf||i===rf||i===sf||i===of||i===af||i===cf||i===lf||i===uf||i===df||i===ff)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ef)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tf)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nf)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rf)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sf)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===of)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===af)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cf)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lf)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uf)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===df)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ff)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pc||i===hf||i===pf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pc)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rg||i===mf||i===gf||i===vf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Pc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var fL={type:"move"},Fc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let v=t.getJointPose(_,i),m=this._getHandJoint(l,_);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,y=.005;l.inputState.pinching&&f>p+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fL)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new cs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},hL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new er,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ei({vertexShader:hL,fragmentShader:pL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new vc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ev=class extends Xi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,y=null,_=new Qg,v=t.getContextAttributes(),m=null,N=null,b=[],E=[],F=new be,L=null,P=new rn;P.viewport=new kt;let U=new rn;U.viewport=new kt;let T=[P,U],w=new Dd,O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=b[K];return ue===void 0&&(ue=new Fc,b[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=b[K];return ue===void 0&&(ue=new Fc,b[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=b[K];return ue===void 0&&(ue=new Fc,b[K]=ue),ue.getHandSpace()};function j(K){let ue=E.indexOf(K.inputSource);if(ue===-1)return;let me=b[ue];me!==void 0&&(me.update(K.inputSource,K.frame,l||o),me.dispatchEvent({type:K.type,data:K.inputSource}))}function J(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ie);for(let K=0;K<b.length;K++){let ue=E[K];ue!==null&&(E[K]=null,b[K].disconnect(ue))}O=null,Y=null,_.reset(),e.setRenderTarget(m),p=null,f=null,d=null,r=null,N=null,at.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=function(K){return Ss(this,null,function*(){if(r=K,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ie),v.xrCompatible!==!0&&(yield t.makeXRCompatible()),L=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),N=new yi(p.framebufferWidth,p.framebufferHeight,{format:yn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,me=null,fe=null;v.depth&&(fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?as:ns,me=v.stencil?hs:Ar);let Fe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),N=new yi(f.textureWidth,f.textureHeight,{format:yn,type:Si,depthTexture:new cc(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),at.setContext(r),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(K){for(let ue=0;ue<K.removed.length;ue++){let me=K.removed[ue],fe=E.indexOf(me);fe>=0&&(E[fe]=null,b[fe].disconnect(me))}for(let ue=0;ue<K.added.length;ue++){let me=K.added[ue],fe=E.indexOf(me);if(fe===-1){for(let Xe=0;Xe<b.length;Xe++)if(Xe>=E.length){E.push(me),fe=Xe;break}else if(E[Xe]===null){E[Xe]=me,fe=Xe;break}if(fe===-1)break}let Fe=b[fe];Fe&&Fe.connect(me)}}let Z=new G,se=new G;function q(K,ue,me){Z.setFromMatrixPosition(ue.matrixWorld),se.setFromMatrixPosition(me.matrixWorld);let fe=Z.distanceTo(se),Fe=ue.projectionMatrix.elements,Xe=me.projectionMatrix.elements,$e=Fe[14]/(Fe[10]-1),ut=Fe[14]/(Fe[10]+1),oe=(Fe[9]+1)/Fe[5],he=(Fe[9]-1)/Fe[5],R=(Fe[8]-1)/Fe[0],Ve=(Xe[8]+1)/Xe[0],de=$e*R,Re=$e*Ve,ye=fe/(-R+Ve),qe=ye*-R;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(qe),K.translateZ(ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Fe[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let Te=$e+ye,D=ut+ye,M=de-qe,W=Re+(fe-qe),ee=oe*ut/D*Te,ce=he*ut/D*Te;K.projectionMatrix.makePerspective(M,W,ee,ce,Te,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ge(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ue=K.near,me=K.far;_.texture!==null&&(_.depthNear>0&&(ue=_.depthNear),_.depthFar>0&&(me=_.depthFar)),w.near=U.near=P.near=ue,w.far=U.far=P.far=me,(O!==w.near||Y!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),O=w.near,Y=w.far),P.layers.mask=K.layers.mask|2,U.layers.mask=K.layers.mask|4,w.layers.mask=P.layers.mask|U.layers.mask;let fe=K.parent,Fe=w.cameras;ge(w,fe);for(let Xe=0;Xe<Fe.length;Xe++)ge(Fe[Xe],fe);Fe.length===2?q(w,P,U):w.projectionMatrix.copy(P.projectionMatrix),Me(K,w,fe)};function Me(K,ue,me){me===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ja*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let Ie=null;function Ge(K,ue){if(u=ue.getViewerPose(l||o),y=ue,u!==null){let me=u.views;p!==null&&(e.setRenderTargetFramebuffer(N,p.framebuffer),e.setRenderTarget(N));let fe=!1;me.length!==w.cameras.length&&(w.cameras.length=0,fe=!0);for(let Xe=0;Xe<me.length;Xe++){let $e=me[Xe],ut=null;if(p!==null)ut=p.getViewport($e);else{let he=d.getViewSubImage(f,$e);ut=he.viewport,Xe===0&&(e.setRenderTargetTextures(N,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(N))}let oe=T[Xe];oe===void 0&&(oe=new rn,oe.layers.enable(Xe),oe.viewport=new kt,T[Xe]=oe),oe.matrix.fromArray($e.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray($e.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ut.x,ut.y,ut.width,ut.height),Xe===0&&(w.matrix.copy(oe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),fe===!0&&w.cameras.push(oe)}let Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){let Xe=d.getDepthInformation(me[0]);Xe&&Xe.isValid&&Xe.texture&&_.init(e,Xe,r.renderState)}}for(let me=0;me<b.length;me++){let fe=E[me],Fe=b[me];fe!==null&&Fe!==void 0&&Fe.update(fe,ue,l||o)}Ie&&Ie(K,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),y=null}let at=new tw;at.setAnimationLoop(Ge),this.setAnimationLoop=function(K){Ie=K},this.dispose=function(){}}},vs=new br,mL=new Ut;function gL(n,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,Fg(n)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,N,b,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(v,m):m.isMeshToonMaterial?(s(v,m),d(v,m)):m.isMeshPhongMaterial?(s(v,m),u(v,m)):m.isMeshStandardMaterial?(s(v,m),f(v,m),m.isMeshPhysicalMaterial&&p(v,m,E)):m.isMeshMatcapMaterial?(s(v,m),y(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),_(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?c(v,m,N,b):m.isSpriteMaterial?l(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===fn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===fn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let N=e.get(m),b=N.envMap,E=N.envMapRotation;b&&(v.envMap.value=b,vs.copy(E),vs.x*=-1,vs.y*=-1,vs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),v.envMapRotation.value.setFromMatrix4(mL.makeRotationFromEuler(vs)),v.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function c(v,m,N,b){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*N,v.scale.value=b*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function l(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function d(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function f(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function p(v,m,N){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=N.texture,v.transmissionSamplerSize.value.set(N.width,N.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,m){m.matcap&&(v.matcap.value=m.matcap)}function _(v,m){let N=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(N.matrixWorld),v.nearDistance.value=N.shadow.camera.near,v.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vL(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(N,b){let E=b.program;i.uniformBlockBinding(N,E)}function l(N,b){let E=r[N.id];E===void 0&&(y(N),E=u(N),r[N.id]=E,N.addEventListener("dispose",v));let F=b.program;i.updateUBOMapping(N,F);let L=e.render.frame;s[N.id]!==L&&(f(N),s[N.id]=L)}function u(N){let b=d();N.__bindingPointIndex=b;let E=n.createBuffer(),F=N.__size,L=N.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,F,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function d(){for(let N=0;N<a;N++)if(o.indexOf(N)===-1)return o.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(N){let b=r[N.id],E=N.uniforms,F=N.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let L=0,P=E.length;L<P;L++){let U=Array.isArray(E[L])?E[L]:[E[L]];for(let T=0,w=U.length;T<w;T++){let O=U[T];if(p(O,L,T,F)===!0){let Y=O.__offset,j=Array.isArray(O.value)?O.value:[O.value],J=0;for(let ie=0;ie<j.length;ie++){let Z=j[ie],se=_(Z);typeof Z=="number"||typeof Z=="boolean"?(O.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,Y+J,O.__data)):Z.isMatrix3?(O.__data[0]=Z.elements[0],O.__data[1]=Z.elements[1],O.__data[2]=Z.elements[2],O.__data[3]=0,O.__data[4]=Z.elements[3],O.__data[5]=Z.elements[4],O.__data[6]=Z.elements[5],O.__data[7]=0,O.__data[8]=Z.elements[6],O.__data[9]=Z.elements[7],O.__data[10]=Z.elements[8],O.__data[11]=0):(Z.toArray(O.__data,J),J+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(N,b,E,F){let L=N.value,P=b+"_"+E;if(F[P]===void 0)return typeof L=="number"||typeof L=="boolean"?F[P]=L:F[P]=L.clone(),!0;{let U=F[P];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return F[P]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function y(N){let b=N.uniforms,E=0,F=16;for(let P=0,U=b.length;P<U;P++){let T=Array.isArray(b[P])?b[P]:[b[P]];for(let w=0,O=T.length;w<O;w++){let Y=T[w],j=Array.isArray(Y.value)?Y.value:[Y.value];for(let J=0,ie=j.length;J<ie;J++){let Z=j[J],se=_(Z),q=E%F,ge=q%se.boundary,Me=q+ge;E+=ge,Me!==0&&F-Me<se.storage&&(E+=F-Me),Y.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=se.storage}}}let L=E%F;return L>0&&(E+=F-L),N.__size=E,N.__cache={},this}function _(N){let b={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(b.boundary=4,b.storage=4):N.isVector2?(b.boundary=8,b.storage=8):N.isVector3||N.isColor?(b.boundary=16,b.storage=12):N.isVector4?(b.boundary=16,b.storage=16):N.isMatrix3?(b.boundary=48,b.storage=48):N.isMatrix4?(b.boundary=64,b.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),b}function v(N){let b=N.target;b.removeEventListener("dispose",v);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function m(){for(let N in r)n.deleteBuffer(r[N]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}var Ef=class{constructor(e={}){let{canvas:t=SS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let y=new Uint32Array(4),_=new Int32Array(4),v=null,m=null,N=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=Ki,this.toneMappingExposure=1;let E=this,F=!1,L=0,P=0,U=null,T=-1,w=null,O=new kt,Y=new kt,j=null,J=new gt(0),ie=0,Z=t.width,se=t.height,q=1,ge=null,Me=null,Ie=new kt(0,0,Z,se),Ge=new kt(0,0,Z,se),at=!1,K=new No,ue=!1,me=!1,fe=new Ut,Fe=new Ut,Xe=new G,$e=new kt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function he(){return U===null?q:1}let R=i;function Ve(h,x){return t.getContext(h,x)}try{let h={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ad}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),R===null){let x="webgl2";if(R=Ve(x,h),R===null)throw Ve(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let de,Re,ye,qe,Te,D,M,W,ee,ce,ne,ke,Se,De,mt,pe,Oe,Ue,ze,Ne,tt,We,nt,k;function $(){de=new OP(R),de.init(),We=new dL(R,de),Re=new DP(R,de,e,We),ye=new lL(R,de),Re.reverseDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),qe=new UP(R),Te=new YO,D=new uL(R,de,ye,Te,Re,We,qe),M=new IP(E),W=new PP(E),ee=new W1(R),nt=new CP(R,ee),ce=new LP(R,ee,qe,nt),ne=new BP(R,ce,ee,qe),ze=new kP(R,Re,D),pe=new AP(Te),ke=new ZO(E,M,W,de,Re,nt,pe),Se=new gL(E,Te),De=new KO,mt=new rL(de),Ue=new bP(E,M,W,ye,ne,p,c),Oe=new aL(E,ne,Re),k=new vL(R,qe,Re,ye),Ne=new TP(R,de,qe),tt=new FP(R,de,qe),qe.programs=ke.programs,E.capabilities=Re,E.extensions=de,E.properties=Te,E.renderLists=De,E.shadowMap=Oe,E.state=ye,E.info=qe}$();let X=new ev(E,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let h=de.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){let h=de.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(h){h!==void 0&&(q=h,this.setSize(Z,se,!1))},this.getSize=function(h){return h.set(Z,se)},this.setSize=function(h,x,I=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=h,se=x,t.width=Math.floor(h*q),t.height=Math.floor(x*q),I===!0&&(t.style.width=h+"px",t.style.height=x+"px"),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(Z*q,se*q).floor()},this.setDrawingBufferSize=function(h,x,I){Z=h,se=x,q=I,t.width=Math.floor(h*I),t.height=Math.floor(x*I),this.setViewport(0,0,h,x)},this.getCurrentViewport=function(h){return h.copy(O)},this.getViewport=function(h){return h.copy(Ie)},this.setViewport=function(h,x,I,C){h.isVector4?Ie.set(h.x,h.y,h.z,h.w):Ie.set(h,x,I,C),ye.viewport(O.copy(Ie).multiplyScalar(q).round())},this.getScissor=function(h){return h.copy(Ge)},this.setScissor=function(h,x,I,C){h.isVector4?Ge.set(h.x,h.y,h.z,h.w):Ge.set(h,x,I,C),ye.scissor(Y.copy(Ge).multiplyScalar(q).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(h){ye.setScissorTest(at=h)},this.setOpaqueSort=function(h){ge=h},this.setTransparentSort=function(h){Me=h},this.getClearColor=function(h){return h.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(h=!0,x=!0,I=!0){let C=0;if(h){let A=!1;if(U!==null){let V=U.texture.format;A=V===Wd||V===Gd||V===Hd}if(A){let V=U.texture.type,B=V===Si||V===Ar||V===Uo||V===hs||V===Vd||V===zd,z=Ue.getClearColor(),H=Ue.getClearAlpha(),te=z.r,re=z.g,Q=z.b;B?(y[0]=te,y[1]=re,y[2]=Q,y[3]=H,R.clearBufferuiv(R.COLOR,0,y)):(_[0]=te,_[1]=re,_[2]=Q,_[3]=H,R.clearBufferiv(R.COLOR,0,_))}else C|=R.COLOR_BUFFER_BIT}x&&(C|=R.DEPTH_BUFFER_BIT),I&&(C|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ue.dispose(),De.dispose(),mt.dispose(),Te.dispose(),M.dispose(),W.dispose(),ne.dispose(),nt.dispose(),k.dispose(),ke.dispose(),X.dispose(),X.removeEventListener("sessionstart",zc),X.removeEventListener("sessionend",Hc),Ei.stop()};function ae(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;let h=qe.autoReset,x=Oe.enabled,I=Oe.autoUpdate,C=Oe.needsUpdate,A=Oe.type;$(),qe.autoReset=h,Oe.enabled=x,Oe.autoUpdate=I,Oe.needsUpdate=C,Oe.type=A}function Ce(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function it(h){let x=h.target;x.removeEventListener("dispose",it),Ot(x)}function Ot(h){Yt(h),Te.remove(h)}function Yt(h){let x=Te.get(h).programs;x!==void 0&&(x.forEach(function(I){ke.releaseProgram(I)}),h.isShaderMaterial&&ke.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,I,C,A,V){x===null&&(x=ut);let B=A.isMesh&&A.matrixWorld.determinant()<0,z=Df(h,x,I,C,A);ye.setMaterial(C,B);let H=I.index,te=1;if(C.wireframe===!0){if(H=ce.getWireframeAttribute(I),H===void 0)return;te=2}let re=I.drawRange,Q=I.attributes.position,ve=re.start*te,le=(re.start+re.count)*te;V!==null&&(ve=Math.max(ve,V.start*te),le=Math.min(le,(V.start+V.count)*te)),H!==null?(ve=Math.max(ve,0),le=Math.min(le,H.count)):Q!=null&&(ve=Math.max(ve,0),le=Math.min(le,Q.count));let xe=le-ve;if(xe<0||xe===1/0)return;nt.setup(A,C,z,I,H);let Pe,Be=Ne;if(H!==null&&(Pe=ee.get(H),Be=tt,Be.setIndex(Pe)),A.isMesh)C.wireframe===!0?(ye.setLineWidth(C.wireframeLinewidth*he()),Be.setMode(R.LINES)):Be.setMode(R.TRIANGLES);else if(A.isLine){let we=C.linewidth;we===void 0&&(we=1),ye.setLineWidth(we*he()),A.isLineSegments?Be.setMode(R.LINES):A.isLineLoop?Be.setMode(R.LINE_LOOP):Be.setMode(R.LINE_STRIP)}else A.isPoints?Be.setMode(R.POINTS):A.isSprite&&Be.setMode(R.TRIANGLES);if(A.isBatchedMesh)if(A._multiDrawInstances!==null)Be.renderMultiDrawInstances(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount,A._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))Be.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{let we=A._multiDrawStarts,St=A._multiDrawCounts,He=A._multiDrawCount,Qe=H?ee.get(H).bytesPerElement:1,It=Te.get(C).currentProgram.getUniforms();for(let Rt=0;Rt<He;Rt++)It.setValue(R,"_gl_DrawID",Rt),Be.render(we[Rt]/Qe,St[Rt])}else if(A.isInstancedMesh)Be.renderInstances(ve,xe,A.count);else if(I.isInstancedBufferGeometry){let we=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,St=Math.min(I.instanceCount,we);Be.renderInstances(ve,xe,St)}else Be.render(ve,xe)};function Mt(h,x,I){h.transparent===!0&&h.side===Mi&&h.forceSinglePass===!1?(h.side=fn,h.needsUpdate=!0,Ms(h,x,I),h.side=qi,h.needsUpdate=!0,Ms(h,x,I),h.side=Mi):Ms(h,x,I)}this.compile=function(h,x,I=null){I===null&&(I=h),m=mt.get(I),m.init(x),b.push(m),I.traverseVisible(function(A){A.isLight&&A.layers.test(x.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),h!==I&&h.traverseVisible(function(A){A.isLight&&A.layers.test(x.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),m.setupLights();let C=new Set;return h.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;let V=A.material;if(V)if(Array.isArray(V))for(let B=0;B<V.length;B++){let z=V[B];Mt(z,I,A),C.add(z)}else Mt(V,I,A),C.add(V)}),b.pop(),m=null,C},this.compileAsync=function(h,x,I=null){let C=this.compile(h,x,I);return new Promise(A=>{function V(){if(C.forEach(function(B){Te.get(B).currentProgram.isReady()&&C.delete(B)}),C.size===0){A(h);return}setTimeout(V,10)}de.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let _n=null;function Wn(h){_n&&_n(h)}function zc(){Ei.stop()}function Hc(){Ei.start()}let Ei=new tw;Ei.setAnimationLoop(Wn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(h){_n=h,X.setAnimationLoop(h),h===null?Ei.stop():Ei.start()},X.addEventListener("sessionstart",zc),X.addEventListener("sessionend",Hc),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(x),x=X.getCamera()),h.isScene===!0&&h.onBeforeRender(E,h,x,U),m=mt.get(h,b.length),m.init(x),b.push(m),Fe.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),K.setFromProjectionMatrix(Fe),me=this.localClippingEnabled,ue=pe.init(this.clippingPlanes,me),v=De.get(h,N.length),v.init(),N.push(v),X.enabled===!0&&X.isPresenting===!0){let V=E.xr.getDepthSensingMesh();V!==null&&Wo(V,x,-1/0,E.sortObjects)}Wo(h,x,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(ge,Me),oe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,oe&&Ue.addToRenderList(v,h),this.info.render.frame++,ue===!0&&pe.beginShadows();let I=m.state.shadowsArray;Oe.render(I,h,x),ue===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let C=v.opaque,A=v.transmissive;if(m.setupLights(),x.isArrayCamera){let V=x.cameras;if(A.length>0)for(let B=0,z=V.length;B<z;B++){let H=V[B];Gc(C,A,h,H)}oe&&Ue.render(h);for(let B=0,z=V.length;B<z;B++){let H=V[B];jo(v,h,H,H.viewport)}}else A.length>0&&Gc(C,A,h,x),oe&&Ue.render(h),jo(v,h,x);U!==null&&(D.updateMultisampleRenderTarget(U),D.updateRenderTargetMipmap(U)),h.isScene===!0&&h.onAfterRender(E,h,x),nt.resetDefaultState(),T=-1,w=null,b.pop(),b.length>0?(m=b[b.length-1],ue===!0&&pe.setGlobalState(E.clippingPlanes,m.state.camera)):m=null,N.pop(),N.length>0?v=N[N.length-1]:v=null};function Wo(h,x,I,C){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)I=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)m.pushLight(h),h.castShadow&&m.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||K.intersectsSprite(h)){C&&$e.setFromMatrixPosition(h.matrixWorld).applyMatrix4(Fe);let B=ne.update(h),z=h.material;z.visible&&v.push(h,B,z,I,$e.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||K.intersectsObject(h))){let B=ne.update(h),z=h.material;if(C&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),$e.copy(h.boundingSphere.center)):(B.boundingSphere===null&&B.computeBoundingSphere(),$e.copy(B.boundingSphere.center)),$e.applyMatrix4(h.matrixWorld).applyMatrix4(Fe)),Array.isArray(z)){let H=B.groups;for(let te=0,re=H.length;te<re;te++){let Q=H[te],ve=z[Q.materialIndex];ve&&ve.visible&&v.push(h,B,ve,I,$e.z,Q)}}else z.visible&&v.push(h,B,z,I,$e.z,null)}}let V=h.children;for(let B=0,z=V.length;B<z;B++)Wo(V[B],x,I,C)}function jo(h,x,I,C){let A=h.opaque,V=h.transmissive,B=h.transparent;m.setupLightsView(I),ue===!0&&pe.setGlobalState(E.clippingPlanes,I),C&&ye.viewport(O.copy(C)),A.length>0&&xs(A,x,I),V.length>0&&xs(V,x,I),B.length>0&&xs(B,x,I),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Gc(h,x,I,C){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[C.id]===void 0&&(m.state.transmissionRenderTarget[C.id]=new yi(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?ti:Si,minFilter:Qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));let V=m.state.transmissionRenderTarget[C.id],B=C.viewport||O;V.setSize(B.z,B.w);let z=E.getRenderTarget();E.setRenderTarget(V),E.getClearColor(J),ie=E.getClearAlpha(),ie<1&&E.setClearColor(16777215,.5),E.clear(),oe&&Ue.render(I);let H=E.toneMapping;E.toneMapping=Ki;let te=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),m.setupLightsView(C),ue===!0&&pe.setGlobalState(E.clippingPlanes,C),xs(h,I,C),D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V),de.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Q=0,ve=x.length;Q<ve;Q++){let le=x[Q],xe=le.object,Pe=le.geometry,Be=le.material,we=le.group;if(Be.side===Mi&&xe.layers.test(C.layers)){let St=Be.side;Be.side=fn,Be.needsUpdate=!0,Wc(xe,I,C,Pe,Be,we),Be.side=St,Be.needsUpdate=!0,re=!0}}re===!0&&(D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V))}E.setRenderTarget(z),E.setClearColor(J,ie),te!==void 0&&(C.viewport=te),E.toneMapping=H}function xs(h,x,I){let C=x.isScene===!0?x.overrideMaterial:null;for(let A=0,V=h.length;A<V;A++){let B=h[A],z=B.object,H=B.geometry,te=C===null?B.material:C,re=B.group;z.layers.test(I.layers)&&Wc(z,x,I,H,te,re)}}function Wc(h,x,I,C,A,V){h.onBeforeRender(E,x,I,C,A,V),h.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),A.onBeforeRender(E,x,I,C,h,V),A.transparent===!0&&A.side===Mi&&A.forceSinglePass===!1?(A.side=fn,A.needsUpdate=!0,E.renderBufferDirect(I,x,C,A,h,V),A.side=qi,A.needsUpdate=!0,E.renderBufferDirect(I,x,C,A,h,V),A.side=Mi):E.renderBufferDirect(I,x,C,A,h,V),h.onAfterRender(E,x,I,C,A,V)}function Ms(h,x,I){x.isScene!==!0&&(x=ut);let C=Te.get(h),A=m.state.lights,V=m.state.shadowsArray,B=A.state.version,z=ke.getParameters(h,A.state,V,x,I),H=ke.getProgramCacheKey(z),te=C.programs;C.environment=h.isMeshStandardMaterial?x.environment:null,C.fog=x.fog,C.envMap=(h.isMeshStandardMaterial?W:M).get(h.envMap||C.environment),C.envMapRotation=C.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,te===void 0&&(h.addEventListener("dispose",it),te=new Map,C.programs=te);let re=te.get(H);if(re!==void 0){if(C.currentProgram===re&&C.lightsStateVersion===B)return qo(h,z),re}else z.uniforms=ke.getUniforms(h),h.onBeforeCompile(z,E),re=ke.acquireProgram(z,H),te.set(H,re),C.uniforms=z.uniforms;let Q=C.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(Q.clippingPlanes=pe.uniform),qo(h,z),C.needsLights=nr(h),C.lightsStateVersion=B,C.needsLights&&(Q.ambientLightColor.value=A.state.ambient,Q.lightProbe.value=A.state.probe,Q.directionalLights.value=A.state.directional,Q.directionalLightShadows.value=A.state.directionalShadow,Q.spotLights.value=A.state.spot,Q.spotLightShadows.value=A.state.spotShadow,Q.rectAreaLights.value=A.state.rectArea,Q.ltc_1.value=A.state.rectAreaLTC1,Q.ltc_2.value=A.state.rectAreaLTC2,Q.pointLights.value=A.state.point,Q.pointLightShadows.value=A.state.pointShadow,Q.hemisphereLights.value=A.state.hemi,Q.directionalShadowMap.value=A.state.directionalShadowMap,Q.directionalShadowMatrix.value=A.state.directionalShadowMatrix,Q.spotShadowMap.value=A.state.spotShadowMap,Q.spotLightMatrix.value=A.state.spotLightMatrix,Q.spotLightMap.value=A.state.spotLightMap,Q.pointShadowMap.value=A.state.pointShadowMap,Q.pointShadowMatrix.value=A.state.pointShadowMatrix),C.currentProgram=re,C.uniformsList=null,re}function $o(h){if(h.uniformsList===null){let x=h.currentProgram.getUniforms();h.uniformsList=zo.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function qo(h,x){let I=Te.get(h);I.outputColorSpace=x.outputColorSpace,I.batching=x.batching,I.batchingColor=x.batchingColor,I.instancing=x.instancing,I.instancingColor=x.instancingColor,I.instancingMorph=x.instancingMorph,I.skinning=x.skinning,I.morphTargets=x.morphTargets,I.morphNormals=x.morphNormals,I.morphColors=x.morphColors,I.morphTargetsCount=x.morphTargetsCount,I.numClippingPlanes=x.numClippingPlanes,I.numIntersection=x.numClipIntersection,I.vertexAlphas=x.vertexAlphas,I.vertexTangents=x.vertexTangents,I.toneMapping=x.toneMapping}function Df(h,x,I,C,A){x.isScene!==!0&&(x=ut),D.resetTextureUnits();let V=x.fog,B=C.isMeshStandardMaterial?x.environment:null,z=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:vi,H=(C.isMeshStandardMaterial?W:M).get(C.envMap||B),te=C.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,re=!!I.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),Q=!!I.morphAttributes.position,ve=!!I.morphAttributes.normal,le=!!I.morphAttributes.color,xe=Ki;C.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(xe=E.toneMapping);let Pe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Be=Pe!==void 0?Pe.length:0,we=Te.get(C),St=m.state.lights;if(ue===!0&&(me===!0||h!==w)){let zt=h===w&&C.id===T;pe.setState(C,h,zt)}let He=!1;C.version===we.__version?(we.needsLights&&we.lightsStateVersion!==St.state.version||we.outputColorSpace!==z||A.isBatchedMesh&&we.batching===!1||!A.isBatchedMesh&&we.batching===!0||A.isBatchedMesh&&we.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&we.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&we.instancing===!1||!A.isInstancedMesh&&we.instancing===!0||A.isSkinnedMesh&&we.skinning===!1||!A.isSkinnedMesh&&we.skinning===!0||A.isInstancedMesh&&we.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&we.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&we.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&we.instancingMorph===!1&&A.morphTexture!==null||we.envMap!==H||C.fog===!0&&we.fog!==V||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==pe.numPlanes||we.numIntersection!==pe.numIntersection)||we.vertexAlphas!==te||we.vertexTangents!==re||we.morphTargets!==Q||we.morphNormals!==ve||we.morphColors!==le||we.toneMapping!==xe||we.morphTargetsCount!==Be)&&(He=!0):(He=!0,we.__version=C.version);let Qe=we.currentProgram;He===!0&&(Qe=Ms(C,x,A));let It=!1,Rt=!1,Lt=!1,je=Qe.getUniforms(),dt=we.uniforms;if(ye.useProgram(Qe.program)&&(It=!0,Rt=!0,Lt=!0),C.id!==T&&(T=C.id,Rt=!0),It||w!==h){ye.buffers.depth.getReversed()?(fe.copy(h.projectionMatrix),ES(fe),bS(fe),je.setValue(R,"projectionMatrix",fe)):je.setValue(R,"projectionMatrix",h.projectionMatrix),je.setValue(R,"viewMatrix",h.matrixWorldInverse);let Nt=je.map.cameraPosition;Nt!==void 0&&Nt.setValue(R,Xe.setFromMatrixPosition(h.matrixWorld)),Re.logarithmicDepthBuffer&&je.setValue(R,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&je.setValue(R,"isOrthographic",h.isOrthographicCamera===!0),w!==h&&(w=h,Rt=!0,Lt=!0)}if(A.isSkinnedMesh){je.setOptional(R,A,"bindMatrix"),je.setOptional(R,A,"bindMatrixInverse");let zt=A.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),je.setValue(R,"boneTexture",zt.boneTexture,D))}A.isBatchedMesh&&(je.setOptional(R,A,"batchingTexture"),je.setValue(R,"batchingTexture",A._matricesTexture,D),je.setOptional(R,A,"batchingIdTexture"),je.setValue(R,"batchingIdTexture",A._indirectTexture,D),je.setOptional(R,A,"batchingColorTexture"),A._colorsTexture!==null&&je.setValue(R,"batchingColorTexture",A._colorsTexture,D));let Bt=I.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&ze.update(A,I,Qe),(Rt||we.receiveShadow!==A.receiveShadow)&&(we.receiveShadow=A.receiveShadow,je.setValue(R,"receiveShadow",A.receiveShadow)),C.isMeshGouraudMaterial&&C.envMap!==null&&(dt.envMap.value=H,dt.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1),C.isMeshStandardMaterial&&C.envMap===null&&x.environment!==null&&(dt.envMapIntensity.value=x.environmentIntensity),Rt&&(je.setValue(R,"toneMappingExposure",E.toneMappingExposure),we.needsLights&&bi(dt,Lt),V&&C.fog===!0&&Se.refreshFogUniforms(dt,V),Se.refreshMaterialUniforms(dt,C,q,se,m.state.transmissionRenderTarget[h.id]),zo.upload(R,$o(we),dt,D)),C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(zo.upload(R,$o(we),dt,D),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&je.setValue(R,"center",A.center),je.setValue(R,"modelViewMatrix",A.modelViewMatrix),je.setValue(R,"normalMatrix",A.normalMatrix),je.setValue(R,"modelMatrix",A.matrixWorld),C.isShaderMaterial||C.isRawShaderMaterial){let zt=C.uniformsGroups;for(let Nt=0,ir=zt.length;Nt<ir;Nt++){let Ir=zt[Nt];k.update(Ir,Qe),k.bind(Ir,Qe)}}return Qe}function bi(h,x){h.ambientLightColor.needsUpdate=x,h.lightProbe.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function nr(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(h,x,I){Te.get(h.texture).__webglTexture=x,Te.get(h.depthTexture).__webglTexture=I;let C=Te.get(h);C.__hasExternalTextures=!0,C.__autoAllocateDepthBuffer=I===void 0,C.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),C.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,x){let I=Te.get(h);I.__webglFramebuffer=x,I.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,I=0){U=h,L=x,P=I;let C=!0,A=null,V=!1,B=!1;if(h){let H=Te.get(h);if(H.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(R.FRAMEBUFFER,null),C=!1;else if(H.__webglFramebuffer===void 0)D.setupRenderTarget(h);else if(H.__hasExternalTextures)D.rebindTextures(h,Te.get(h.texture).__webglTexture,Te.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){let Q=h.depthTexture;if(H.__boundDepthTexture!==Q){if(Q!==null&&Te.has(Q)&&(h.width!==Q.image.width||h.height!==Q.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(h)}}let te=h.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(B=!0);let re=Te.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(re[x])?A=re[x][I]:A=re[x],V=!0):h.samples>0&&D.useMultisampledRTT(h)===!1?A=Te.get(h).__webglMultisampledFramebuffer:Array.isArray(re)?A=re[I]:A=re,O.copy(h.viewport),Y.copy(h.scissor),j=h.scissorTest}else O.copy(Ie).multiplyScalar(q).floor(),Y.copy(Ge).multiplyScalar(q).floor(),j=at;if(ye.bindFramebuffer(R.FRAMEBUFFER,A)&&C&&ye.drawBuffers(h,A),ye.viewport(O),ye.scissor(Y),ye.setScissorTest(j),V){let H=Te.get(h.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+x,H.__webglTexture,I)}else if(B){let H=Te.get(h.texture),te=x||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.__webglTexture,I||0,te)}T=-1},this.readRenderTargetPixels=function(h,x,I,C,A,V,B){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let z=Te.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&B!==void 0&&(z=z[B]),z){ye.bindFramebuffer(R.FRAMEBUFFER,z);try{let H=h.texture,te=H.format,re=H.type;if(!Re.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-C&&I>=0&&I<=h.height-A&&R.readPixels(x,I,C,A,We.convert(te),We.convert(re),V)}finally{let H=U!==null?Te.get(U).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,H)}}},this.readRenderTargetPixelsAsync=function(h,x,I,C,A,V,B){return Ss(this,null,function*(){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let z=Te.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&B!==void 0&&(z=z[B]),z){let H=h.texture,te=H.format,re=H.type;if(!Re.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=h.width-C&&I>=0&&I<=h.height-A){ye.bindFramebuffer(R.FRAMEBUFFER,z);let Q=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Q),R.bufferData(R.PIXEL_PACK_BUFFER,V.byteLength,R.STREAM_READ),R.readPixels(x,I,C,A,We.convert(te),We.convert(re),0);let ve=U!==null?Te.get(U).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,ve);let le=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),yield wS(R,le,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Q),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,V),R.deleteBuffer(Q),R.deleteSync(le),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(h,x=null,I=0){h.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,h=arguments[1]);let C=Math.pow(2,-I),A=Math.floor(h.image.width*C),V=Math.floor(h.image.height*C),B=x!==null?x.x:0,z=x!==null?x.y:0;D.setTexture2D(h,0),R.copyTexSubImage2D(R.TEXTURE_2D,I,0,0,B,z,A,V),ye.unbindTexture()};let g=R.createFramebuffer(),S=R.createFramebuffer();this.copyTextureToTexture=function(h,x,I=null,C=null,A=0,V=null){h.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),C=arguments[0]||null,h=arguments[1],x=arguments[2],V=arguments[3]||0,I=null),V===null&&(A!==0?(ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),V=A,A=0):V=0);let B,z,H,te,re,Q,ve,le,xe,Pe=h.isCompressedTexture?h.mipmaps[V]:h.image;if(I!==null)B=I.max.x-I.min.x,z=I.max.y-I.min.y,H=I.isBox3?I.max.z-I.min.z:1,te=I.min.x,re=I.min.y,Q=I.isBox3?I.min.z:0;else{let Bt=Math.pow(2,-A);B=Math.floor(Pe.width*Bt),z=Math.floor(Pe.height*Bt),h.isDataArrayTexture?H=Pe.depth:h.isData3DTexture?H=Math.floor(Pe.depth*Bt):H=1,te=0,re=0,Q=0}C!==null?(ve=C.x,le=C.y,xe=C.z):(ve=0,le=0,xe=0);let Be=We.convert(x.format),we=We.convert(x.type),St;x.isData3DTexture?(D.setTexture3D(x,0),St=R.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(D.setTexture2DArray(x,0),St=R.TEXTURE_2D_ARRAY):(D.setTexture2D(x,0),St=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,x.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,x.unpackAlignment);let He=R.getParameter(R.UNPACK_ROW_LENGTH),Qe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),It=R.getParameter(R.UNPACK_SKIP_PIXELS),Rt=R.getParameter(R.UNPACK_SKIP_ROWS),Lt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Pe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Pe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,te),R.pixelStorei(R.UNPACK_SKIP_ROWS,re),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Q);let je=h.isDataArrayTexture||h.isData3DTexture,dt=x.isDataArrayTexture||x.isData3DTexture;if(h.isDepthTexture){let Bt=Te.get(h),zt=Te.get(x),Nt=Te.get(Bt.__renderTarget),ir=Te.get(zt.__renderTarget);ye.bindFramebuffer(R.READ_FRAMEBUFFER,Nt.__webglFramebuffer),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let Ir=0;Ir<H;Ir++)je&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Te.get(h).__webglTexture,A,Q+Ir),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Te.get(x).__webglTexture,V,xe+Ir)),R.blitFramebuffer(te,re,B,z,ve,le,B,z,R.DEPTH_BUFFER_BIT,R.NEAREST);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(A!==0||h.isRenderTargetTexture||Te.has(h)){let Bt=Te.get(h),zt=Te.get(x);ye.bindFramebuffer(R.READ_FRAMEBUFFER,g),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,S);for(let Nt=0;Nt<H;Nt++)je?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Bt.__webglTexture,A,Q+Nt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Bt.__webglTexture,A),dt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zt.__webglTexture,V,xe+Nt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,zt.__webglTexture,V),A!==0?R.blitFramebuffer(te,re,B,z,ve,le,B,z,R.COLOR_BUFFER_BIT,R.NEAREST):dt?R.copyTexSubImage3D(St,V,ve,le,xe+Nt,te,re,B,z):R.copyTexSubImage2D(St,V,ve,le,te,re,B,z);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else dt?h.isDataTexture||h.isData3DTexture?R.texSubImage3D(St,V,ve,le,xe,B,z,H,Be,we,Pe.data):x.isCompressedArrayTexture?R.compressedTexSubImage3D(St,V,ve,le,xe,B,z,H,Be,Pe.data):R.texSubImage3D(St,V,ve,le,xe,B,z,H,Be,we,Pe):h.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,V,ve,le,B,z,Be,we,Pe.data):h.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,V,ve,le,Pe.width,Pe.height,Be,Pe.data):R.texSubImage2D(R.TEXTURE_2D,V,ve,le,B,z,Be,we,Pe);R.pixelStorei(R.UNPACK_ROW_LENGTH,He),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,It),R.pixelStorei(R.UNPACK_SKIP_ROWS,Rt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Lt),V===0&&x.generateMipmaps&&R.generateMipmap(St),ye.unbindTexture()},this.copyTextureToTexture3D=function(h,x,I=null,C=null,A=0){return h.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),I=arguments[0]||null,C=arguments[1]||null,h=arguments[2],x=arguments[3],A=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,x,I,C,A)},this.initRenderTarget=function(h){Te.get(h).__webglFramebuffer===void 0&&D.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?D.setTextureCube(h,0):h.isData3DTexture?D.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?D.setTexture2DArray(h,0):D.setTexture2D(h,0),ye.unbindTexture()},this.resetState=function(){L=0,P=0,U=null,ye.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var Cf=class extends Oc{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new Lo(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){let c=s.parse(JSON.parse(a));t&&t(c)},i,r)}parse(e){return new nv(e)}},nv=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){let i=[],r=yL(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}};function yL(n,e,t){let i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[],a=0,c=0;for(let l=0;l<i.length;l++){let u=i[l];if(u===`
`)a=0,c-=s;else{let d=_L(u,r,a,c,t);a+=d.offsetX,o.push(d.path)}}return o}function _L(n,e,t,i,r){let s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}let o=new bc,a,c,l,u,d,f,p,y;if(s.o){let _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let v=0,m=_.length;v<m;)switch(_[v++]){case"m":a=_[v++]*e+t,c=_[v++]*e+i,o.moveTo(a,c);break;case"l":a=_[v++]*e+t,c=_[v++]*e+i,o.lineTo(a,c);break;case"q":l=_[v++]*e+t,u=_[v++]*e+i,d=_[v++]*e+t,f=_[v++]*e+i,o.quadraticCurveTo(d,f,l,u);break;case"b":l=_[v++]*e+t,u=_[v++]*e+i,d=_[v++]*e+t,f=_[v++]*e+i,p=_[v++]*e+t,y=_[v++]*e+i,o.bezierCurveTo(d,f,p,y,l,u);break}}return{offsetX:s.ha*e,path:o}}var Uc=class extends gc{constructor(e,t={}){let i=t.font;if(i===void 0)super();else{let r=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}};var Gn=Uint8Array,Go=Uint16Array,xL=Int32Array,ow=new Gn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),aw=new Gn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ML=new Gn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),cw=function(n,e){for(var t=new Go(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new xL(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},lw=cw(ow,2),uw=lw.b,SL=lw.r;uw[28]=258,SL[258]=28;var dw=cw(aw,0),wL=dw.b,cG=dw.r,sv=new Go(32768);for(Et=0;Et<32768;++Et)tr=(Et&43690)>>1|(Et&21845)<<1,tr=(tr&52428)>>2|(tr&13107)<<2,tr=(tr&61680)>>4|(tr&3855)<<4,sv[Et]=((tr&65280)>>8|(tr&255)<<8)>>1;var tr,Et,kc=function(n,e,t){for(var i=n.length,r=0,s=new Go(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new Go(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Go(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var l=r<<4|n[r],u=e-n[r],d=o[n[r]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[sv[d]>>c]=l}else for(a=new Go(i),r=0;r<i;++r)n[r]&&(a[r]=sv[o[n[r]-1]++]>>15-n[r]);return a},Bc=new Gn(288);for(Et=0;Et<144;++Et)Bc[Et]=8;var Et;for(Et=144;Et<256;++Et)Bc[Et]=9;var Et;for(Et=256;Et<280;++Et)Bc[Et]=7;var Et;for(Et=280;Et<288;++Et)Bc[Et]=8;var Et,fw=new Gn(32);for(Et=0;Et<32;++Et)fw[Et]=5;var Et;var EL=kc(Bc,9,1);var bL=kc(fw,5,1),iv=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},ii=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},rv=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},CL=function(n){return(n+7)/8|0},TL=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Gn(n.subarray(e,t))};var DL=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ri=function(n,e,t){var i=new Error(e||DL[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,ri),!t)throw i;return i},AL=function(n,e,t,i){var r=n.length,s=i?i.length:0;if(!r||e.f&&!e.l)return t||new Gn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new Gn(r*3));var l=function(ut){var oe=t.length;if(ut>oe){var he=new Gn(Math.max(oe*2,ut));he.set(t),t=he}},u=e.f||0,d=e.p||0,f=e.b||0,p=e.l,y=e.d,_=e.m,v=e.n,m=r*8;do{if(!p){u=ii(n,d,1);var N=ii(n,d+1,3);if(d+=3,N)if(N==1)p=EL,y=bL,_=9,v=5;else if(N==2){var L=ii(n,d,31)+257,P=ii(n,d+10,15)+4,U=L+ii(n,d+5,31)+1;d+=14;for(var T=new Gn(U),w=new Gn(19),O=0;O<P;++O)w[ML[O]]=ii(n,d+O*3,7);d+=P*3;for(var Y=iv(w),j=(1<<Y)-1,J=kc(w,Y,1),O=0;O<U;){var ie=J[ii(n,d,j)];d+=ie&15;var b=ie>>4;if(b<16)T[O++]=b;else{var Z=0,se=0;for(b==16?(se=3+ii(n,d,3),d+=2,Z=T[O-1]):b==17?(se=3+ii(n,d,7),d+=3):b==18&&(se=11+ii(n,d,127),d+=7);se--;)T[O++]=Z}}var q=T.subarray(0,L),ge=T.subarray(L);_=iv(q),v=iv(ge),p=kc(q,_,1),y=kc(ge,v,1)}else ri(1);else{var b=CL(d)+4,E=n[b-4]|n[b-3]<<8,F=b+E;if(F>r){c&&ri(0);break}a&&l(f+E),t.set(n.subarray(b,F),f),e.b=f+=E,e.p=d=F*8,e.f=u;continue}if(d>m){c&&ri(0);break}}a&&l(f+131072);for(var Me=(1<<_)-1,Ie=(1<<v)-1,Ge=d;;Ge=d){var Z=p[rv(n,d)&Me],at=Z>>4;if(d+=Z&15,d>m){c&&ri(0);break}if(Z||ri(2),at<256)t[f++]=at;else if(at==256){Ge=d,p=null;break}else{var K=at-254;if(at>264){var O=at-257,ue=ow[O];K=ii(n,d,(1<<ue)-1)+uw[O],d+=ue}var me=y[rv(n,d)&Ie],fe=me>>4;me||ri(3),d+=me&15;var ge=wL[fe];if(fe>3){var ue=aw[fe];ge+=rv(n,d)&(1<<ue)-1,d+=ue}if(d>m){c&&ri(0);break}a&&l(f+131072);var Fe=f+K;if(f<ge){var Xe=s-ge,$e=Math.min(ge,Fe);for(Xe+f<0&&ri(3);f<$e;++f)t[f]=i[Xe+f]}for(;f<Fe;++f)t[f]=t[f-ge]}}e.l=p,e.p=Ge,e.b=f,e.f=u,p&&(u=1,e.m=_,e.d=y,e.n=v)}while(!u);return f!=t.length&&o?TL(t,0,f):t.subarray(0,f)};var IL=new Gn(0);var RL=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&ri(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&ri(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function Vc(n,e){return AL(n.subarray(RL(n,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var NL=typeof TextDecoder<"u"&&new TextDecoder,PL=0;try{NL.decode(IL,{stream:!0}),PL=1}catch{}var Tf=class extends xc{constructor(e){super(e),this.type=ti}parse(e){let T=Math.pow(2.7182818,2.2);function w(g,S){let h=0;for(let I=0;I<65536;++I)(I==0||g[I>>3]&1<<(I&7))&&(S[h++]=I);let x=h-1;for(;h<65536;)S[h++]=0;return x}function O(g){for(let S=0;S<16384;S++)g[S]={},g[S].len=0,g[S].lit=0,g[S].p=null}let Y={l:0,c:0,lc:0};function j(g,S,h,x,I){for(;h<g;)S=S<<8|Ne(x,I),h+=8;h-=g,Y.l=S>>h&(1<<g)-1,Y.c=S,Y.lc=h}let J=new Array(59);function ie(g){for(let h=0;h<=58;++h)J[h]=0;for(let h=0;h<65537;++h)J[g[h]]+=1;let S=0;for(let h=58;h>0;--h){let x=S+J[h]>>1;J[h]=S,S=x}for(let h=0;h<65537;++h){let x=g[h];x>0&&(g[h]=x|J[x]++<<6)}}function Z(g,S,h,x,I,C){let A=S,V=0,B=0;for(;x<=I;x++){if(A.value-S.value>h)return!1;j(6,V,B,g,A);let z=Y.l;if(V=Y.c,B=Y.lc,C[x]=z,z==63){if(A.value-S.value>h)throw new Error("Something wrong with hufUnpackEncTable");j(8,V,B,g,A);let H=Y.l+6;if(V=Y.c,B=Y.lc,x+H>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;H--;)C[x++]=0;x--}else if(z>=59){let H=z-59+2;if(x+H>I+1)throw new Error("Something wrong with hufUnpackEncTable");for(;H--;)C[x++]=0;x--}}ie(C)}function se(g){return g&63}function q(g){return g>>6}function ge(g,S,h,x){for(;S<=h;S++){let I=q(g[S]),C=se(g[S]);if(I>>C)throw new Error("Invalid table entry");if(C>14){let A=x[I>>C-14];if(A.len)throw new Error("Invalid table entry");if(A.lit++,A.p){let V=A.p;A.p=new Array(A.lit);for(let B=0;B<A.lit-1;++B)A.p[B]=V[B]}else A.p=new Array(1);A.p[A.lit-1]=S}else if(C){let A=0;for(let V=1<<14-C;V>0;V--){let B=x[(I<<14-C)+A];if(B.len||B.p)throw new Error("Invalid table entry");B.len=C,B.lit=S,A++}}}return!0}let Me={c:0,lc:0};function Ie(g,S,h,x){g=g<<8|Ne(h,x),S+=8,Me.c=g,Me.lc=S}let Ge={c:0,lc:0};function at(g,S,h,x,I,C,A,V,B){if(g==S){x<8&&(Ie(h,x,I,C),h=Me.c,x=Me.lc),x-=8;let z=h>>x;if(z=new Uint8Array([z])[0],V.value+z>B)return!1;let H=A[V.value-1];for(;z-- >0;)A[V.value++]=H}else if(V.value<B)A[V.value++]=g;else return!1;Ge.c=h,Ge.lc=x}function K(g){return g&65535}function ue(g){let S=K(g);return S>32767?S-65536:S}let me={a:0,b:0};function fe(g,S){let h=ue(g),I=ue(S),C=h+(I&1)+(I>>1),A=C,V=C-I;me.a=A,me.b=V}function Fe(g,S){let h=K(g),x=K(S),I=h-(x>>1)&65535,C=x+I-32768&65535;me.a=C,me.b=I}function Xe(g,S,h,x,I,C,A){let V=A<16384,B=h>I?I:h,z=1,H,te;for(;z<=B;)z<<=1;for(z>>=1,H=z,z>>=1;z>=1;){te=0;let re=te+C*(I-H),Q=C*z,ve=C*H,le=x*z,xe=x*H,Pe,Be,we,St;for(;te<=re;te+=ve){let He=te,Qe=te+x*(h-H);for(;He<=Qe;He+=xe){let It=He+le,Rt=He+Q,Lt=Rt+le;V?(fe(g[He+S],g[Rt+S]),Pe=me.a,we=me.b,fe(g[It+S],g[Lt+S]),Be=me.a,St=me.b,fe(Pe,Be),g[He+S]=me.a,g[It+S]=me.b,fe(we,St),g[Rt+S]=me.a,g[Lt+S]=me.b):(Fe(g[He+S],g[Rt+S]),Pe=me.a,we=me.b,Fe(g[It+S],g[Lt+S]),Be=me.a,St=me.b,Fe(Pe,Be),g[He+S]=me.a,g[It+S]=me.b,Fe(we,St),g[Rt+S]=me.a,g[Lt+S]=me.b)}if(h&z){let It=He+Q;V?fe(g[He+S],g[It+S]):Fe(g[He+S],g[It+S]),Pe=me.a,g[It+S]=me.b,g[He+S]=Pe}}if(I&z){let He=te,Qe=te+x*(h-H);for(;He<=Qe;He+=xe){let It=He+le;V?fe(g[He+S],g[It+S]):Fe(g[He+S],g[It+S]),Pe=me.a,g[It+S]=me.b,g[He+S]=Pe}}H=z,z>>=1}return te}function $e(g,S,h,x,I,C,A,V,B){let z=0,H=0,te=A,re=Math.trunc(x.value+(I+7)/8);for(;x.value<re;)for(Ie(z,H,h,x),z=Me.c,H=Me.lc;H>=14;){let ve=z>>H-14&16383,le=S[ve];if(le.len)H-=le.len,at(le.lit,C,z,H,h,x,V,B,te),z=Ge.c,H=Ge.lc;else{if(!le.p)throw new Error("hufDecode issues");let xe;for(xe=0;xe<le.lit;xe++){let Pe=se(g[le.p[xe]]);for(;H<Pe&&x.value<re;)Ie(z,H,h,x),z=Me.c,H=Me.lc;if(H>=Pe&&q(g[le.p[xe]])==(z>>H-Pe&(1<<Pe)-1)){H-=Pe,at(le.p[xe],C,z,H,h,x,V,B,te),z=Ge.c,H=Ge.lc;break}}if(xe==le.lit)throw new Error("hufDecode issues")}}let Q=8-I&7;for(z>>=Q,H-=Q;H>0;){let ve=S[z<<14-H&16383];if(ve.len)H-=ve.len,at(ve.lit,C,z,H,h,x,V,B,te),z=Ge.c,H=Ge.lc;else throw new Error("hufDecode issues")}return!0}function ut(g,S,h,x,I,C){let A={value:0},V=h.value,B=ze(S,h),z=ze(S,h);h.value+=4;let H=ze(S,h);if(h.value+=4,B<0||B>=65537||z<0||z>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let te=new Array(65537),re=new Array(16384);O(re);let Q=x-(h.value-V);if(Z(g,h,Q,B,z,te),H>8*(x-(h.value-V)))throw new Error("Something wrong with hufUncompress");ge(te,B,z,re),$e(te,re,g,h,H,z,C,I,A)}function oe(g,S,h){for(let x=0;x<h;++x)S[x]=g[S[x]]}function he(g){for(let S=1;S<g.length;S++){let h=g[S-1]+g[S]-128;g[S]=h}}function R(g,S){let h=0,x=Math.floor((g.length+1)/2),I=0,C=g.length-1;for(;!(I>C||(S[I++]=g[h++],I>C));)S[I++]=g[x++]}function Ve(g){let S=g.byteLength,h=new Array,x=0,I=new DataView(g);for(;S>0;){let C=I.getInt8(x++);if(C<0){let A=-C;S-=A+1;for(let V=0;V<A;V++)h.push(I.getUint8(x++))}else{let A=C;S-=2;let V=I.getUint8(x++);for(let B=0;B<A+1;B++)h.push(V)}}return h}function de(g,S,h,x,I,C){let A=new DataView(C.buffer),V=h[g.idx[0]].width,B=h[g.idx[0]].height,z=3,H=Math.floor(V/8),te=Math.ceil(V/8),re=Math.ceil(B/8),Q=V-(te-1)*8,ve=B-(re-1)*8,le={value:0},xe=new Array(z),Pe=new Array(z),Be=new Array(z),we=new Array(z),St=new Array(z);for(let Qe=0;Qe<z;++Qe)St[Qe]=S[g.idx[Qe]],xe[Qe]=Qe<1?0:xe[Qe-1]+te*re,Pe[Qe]=new Float32Array(64),Be[Qe]=new Uint16Array(64),we[Qe]=new Uint16Array(te*64);for(let Qe=0;Qe<re;++Qe){let It=8;Qe==re-1&&(It=ve);let Rt=8;for(let je=0;je<te;++je){je==te-1&&(Rt=Q);for(let dt=0;dt<z;++dt)Be[dt].fill(0),Be[dt][0]=I[xe[dt]++],Re(le,x,Be[dt]),ye(Be[dt],Pe[dt]),qe(Pe[dt]);z==3&&Te(Pe);for(let dt=0;dt<z;++dt)D(Pe[dt],we[dt],je*64)}let Lt=0;for(let je=0;je<z;++je){let dt=h[g.idx[je]].type;for(let Bt=8*Qe;Bt<8*Qe+It;++Bt){Lt=St[je][Bt];for(let zt=0;zt<H;++zt){let Nt=zt*64+(Bt&7)*8;A.setUint16(Lt+0*2*dt,we[je][Nt+0],!0),A.setUint16(Lt+1*2*dt,we[je][Nt+1],!0),A.setUint16(Lt+2*2*dt,we[je][Nt+2],!0),A.setUint16(Lt+3*2*dt,we[je][Nt+3],!0),A.setUint16(Lt+4*2*dt,we[je][Nt+4],!0),A.setUint16(Lt+5*2*dt,we[je][Nt+5],!0),A.setUint16(Lt+6*2*dt,we[je][Nt+6],!0),A.setUint16(Lt+7*2*dt,we[je][Nt+7],!0),Lt+=8*2*dt}}if(H!=te)for(let Bt=8*Qe;Bt<8*Qe+It;++Bt){let zt=St[je][Bt]+8*H*2*dt,Nt=H*64+(Bt&7)*8;for(let ir=0;ir<Rt;++ir)A.setUint16(zt+ir*2*dt,we[je][Nt+ir],!0)}}}let He=new Uint16Array(V);A=new DataView(C.buffer);for(let Qe=0;Qe<z;++Qe){h[g.idx[Qe]].decoded=!0;let It=h[g.idx[Qe]].type;if(h[Qe].type==2)for(let Rt=0;Rt<B;++Rt){let Lt=St[Qe][Rt];for(let je=0;je<V;++je)He[je]=A.getUint16(Lt+je*2*It,!0);for(let je=0;je<V;++je)A.setFloat32(Lt+je*2*It,$(He[je]),!0)}}}function Re(g,S,h){let x,I=1;for(;I<64;)x=S[g.value],x==65280?I=64:x>>8==255?I+=x&255:(h[I]=x,I++),g.value++}function ye(g,S){S[0]=$(g[0]),S[1]=$(g[1]),S[2]=$(g[5]),S[3]=$(g[6]),S[4]=$(g[14]),S[5]=$(g[15]),S[6]=$(g[27]),S[7]=$(g[28]),S[8]=$(g[2]),S[9]=$(g[4]),S[10]=$(g[7]),S[11]=$(g[13]),S[12]=$(g[16]),S[13]=$(g[26]),S[14]=$(g[29]),S[15]=$(g[42]),S[16]=$(g[3]),S[17]=$(g[8]),S[18]=$(g[12]),S[19]=$(g[17]),S[20]=$(g[25]),S[21]=$(g[30]),S[22]=$(g[41]),S[23]=$(g[43]),S[24]=$(g[9]),S[25]=$(g[11]),S[26]=$(g[18]),S[27]=$(g[24]),S[28]=$(g[31]),S[29]=$(g[40]),S[30]=$(g[44]),S[31]=$(g[53]),S[32]=$(g[10]),S[33]=$(g[19]),S[34]=$(g[23]),S[35]=$(g[32]),S[36]=$(g[39]),S[37]=$(g[45]),S[38]=$(g[52]),S[39]=$(g[54]),S[40]=$(g[20]),S[41]=$(g[22]),S[42]=$(g[33]),S[43]=$(g[38]),S[44]=$(g[46]),S[45]=$(g[51]),S[46]=$(g[55]),S[47]=$(g[60]),S[48]=$(g[21]),S[49]=$(g[34]),S[50]=$(g[37]),S[51]=$(g[47]),S[52]=$(g[50]),S[53]=$(g[56]),S[54]=$(g[59]),S[55]=$(g[61]),S[56]=$(g[35]),S[57]=$(g[36]),S[58]=$(g[48]),S[59]=$(g[49]),S[60]=$(g[57]),S[61]=$(g[58]),S[62]=$(g[62]),S[63]=$(g[63])}function qe(g){let S=.5*Math.cos(.7853975),h=.5*Math.cos(3.14159/16),x=.5*Math.cos(3.14159/8),I=.5*Math.cos(3*3.14159/16),C=.5*Math.cos(5*3.14159/16),A=.5*Math.cos(3*3.14159/8),V=.5*Math.cos(7*3.14159/16),B=new Array(4),z=new Array(4),H=new Array(4),te=new Array(4);for(let re=0;re<8;++re){let Q=re*8;B[0]=x*g[Q+2],B[1]=A*g[Q+2],B[2]=x*g[Q+6],B[3]=A*g[Q+6],z[0]=h*g[Q+1]+I*g[Q+3]+C*g[Q+5]+V*g[Q+7],z[1]=I*g[Q+1]-V*g[Q+3]-h*g[Q+5]-C*g[Q+7],z[2]=C*g[Q+1]-h*g[Q+3]+V*g[Q+5]+I*g[Q+7],z[3]=V*g[Q+1]-C*g[Q+3]+I*g[Q+5]-h*g[Q+7],H[0]=S*(g[Q+0]+g[Q+4]),H[3]=S*(g[Q+0]-g[Q+4]),H[1]=B[0]+B[3],H[2]=B[1]-B[2],te[0]=H[0]+H[1],te[1]=H[3]+H[2],te[2]=H[3]-H[2],te[3]=H[0]-H[1],g[Q+0]=te[0]+z[0],g[Q+1]=te[1]+z[1],g[Q+2]=te[2]+z[2],g[Q+3]=te[3]+z[3],g[Q+4]=te[3]-z[3],g[Q+5]=te[2]-z[2],g[Q+6]=te[1]-z[1],g[Q+7]=te[0]-z[0]}for(let re=0;re<8;++re)B[0]=x*g[16+re],B[1]=A*g[16+re],B[2]=x*g[48+re],B[3]=A*g[48+re],z[0]=h*g[8+re]+I*g[24+re]+C*g[40+re]+V*g[56+re],z[1]=I*g[8+re]-V*g[24+re]-h*g[40+re]-C*g[56+re],z[2]=C*g[8+re]-h*g[24+re]+V*g[40+re]+I*g[56+re],z[3]=V*g[8+re]-C*g[24+re]+I*g[40+re]-h*g[56+re],H[0]=S*(g[re]+g[32+re]),H[3]=S*(g[re]-g[32+re]),H[1]=B[0]+B[3],H[2]=B[1]-B[2],te[0]=H[0]+H[1],te[1]=H[3]+H[2],te[2]=H[3]-H[2],te[3]=H[0]-H[1],g[0+re]=te[0]+z[0],g[8+re]=te[1]+z[1],g[16+re]=te[2]+z[2],g[24+re]=te[3]+z[3],g[32+re]=te[3]-z[3],g[40+re]=te[2]-z[2],g[48+re]=te[1]-z[1],g[56+re]=te[0]-z[0]}function Te(g){for(let S=0;S<64;++S){let h=g[0][S],x=g[1][S],I=g[2][S];g[0][S]=h+1.5747*I,g[1][S]=h-.1873*x-.4682*I,g[2][S]=h+1.8556*x}}function D(g,S,h){for(let x=0;x<64;++x)S[h+x]=yf.toHalfFloat(M(g[x]))}function M(g){return g<=1?Math.sign(g)*Math.pow(Math.abs(g),2.2):Math.sign(g)*Math.pow(T,Math.abs(g)-1)}function W(g){return new DataView(g.array.buffer,g.offset.value,g.size)}function ee(g){let S=g.viewer.buffer.slice(g.offset.value,g.offset.value+g.size),h=new Uint8Array(Ve(S)),x=new Uint8Array(h.length);return he(h),R(h,x),new DataView(x.buffer)}function ce(g){let S=g.array.slice(g.offset.value,g.offset.value+g.size),h=Vc(S),x=new Uint8Array(h.length);return he(h),R(h,x),new DataView(x.buffer)}function ne(g){let S=g.viewer,h={value:g.offset.value},x=new Uint16Array(g.columns*g.lines*(g.inputChannels.length*g.type)),I=new Uint8Array(8192),C=0,A=new Array(g.inputChannels.length);for(let ve=0,le=g.inputChannels.length;ve<le;ve++)A[ve]={},A[ve].start=C,A[ve].end=A[ve].start,A[ve].nx=g.columns,A[ve].ny=g.lines,A[ve].size=g.type,C+=A[ve].nx*A[ve].ny*A[ve].size;let V=X(S,h),B=X(S,h);if(B>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(V<=B)for(let ve=0;ve<B-V+1;ve++)I[ve+V]=tt(S,h);let z=new Uint16Array(65536),H=w(I,z),te=ze(S,h);ut(g.array,S,h,te,x,C);for(let ve=0;ve<g.inputChannels.length;++ve){let le=A[ve];for(let xe=0;xe<A[ve].size;++xe)Xe(x,le.start+xe,le.nx,le.size,le.ny,le.nx*le.size,H)}oe(z,x,C);let re=0,Q=new Uint8Array(x.buffer.byteLength);for(let ve=0;ve<g.lines;ve++)for(let le=0;le<g.inputChannels.length;le++){let xe=A[le],Pe=xe.nx*xe.size,Be=new Uint8Array(x.buffer,xe.end*2,Pe*2);Q.set(Be,re),re+=Pe*2,xe.end+=Pe}return new DataView(Q.buffer)}function ke(g){let S=g.array.slice(g.offset.value,g.offset.value+g.size),h=Vc(S),x=g.inputChannels.length*g.lines*g.columns*g.totalBytes,I=new ArrayBuffer(x),C=new DataView(I),A=0,V=0,B=new Array(4);for(let z=0;z<g.lines;z++)for(let H=0;H<g.inputChannels.length;H++){let te=0;switch(g.inputChannels[H].pixelType){case 1:B[0]=A,B[1]=B[0]+g.columns,A=B[1]+g.columns;for(let Q=0;Q<g.columns;++Q){let ve=h[B[0]++]<<8|h[B[1]++];te+=ve,C.setUint16(V,te,!0),V+=2}break;case 2:B[0]=A,B[1]=B[0]+g.columns,B[2]=B[1]+g.columns,A=B[2]+g.columns;for(let Q=0;Q<g.columns;++Q){let ve=h[B[0]++]<<24|h[B[1]++]<<16|h[B[2]++]<<8;te+=ve,C.setUint32(V,te,!0),V+=4}break}}return C}function Se(g){let S=g.viewer,h={value:g.offset.value},x=new Uint8Array(g.columns*g.lines*(g.inputChannels.length*g.type*2)),I={version:We(S,h),unknownUncompressedSize:We(S,h),unknownCompressedSize:We(S,h),acCompressedSize:We(S,h),dcCompressedSize:We(S,h),rleCompressedSize:We(S,h),rleUncompressedSize:We(S,h),rleRawSize:We(S,h),totalAcUncompressedCount:We(S,h),totalDcUncompressedCount:We(S,h),acCompression:We(S,h)};if(I.version<2)throw new Error("EXRLoader.parse: "+bi.compression+" version "+I.version+" is unsupported");let C=new Array,A=X(S,h)-2;for(;A>0;){let le=De(S.buffer,h),xe=tt(S,h),Pe=xe>>2&3,Be=(xe>>4)-1,we=new Int8Array([Be])[0],St=tt(S,h);C.push({name:le,index:we,type:St,compression:Pe}),A-=le.length+3}let V=bi.channels,B=new Array(g.inputChannels.length);for(let le=0;le<g.inputChannels.length;++le){let xe=B[le]={},Pe=V[le];xe.name=Pe.name,xe.compression=0,xe.decoded=!1,xe.type=Pe.pixelType,xe.pLinear=Pe.pLinear,xe.width=g.columns,xe.height=g.lines}let z={idx:new Array(3)};for(let le=0;le<g.inputChannels.length;++le){let xe=B[le];for(let Pe=0;Pe<C.length;++Pe){let Be=C[Pe];xe.name==Be.name&&(xe.compression=Be.compression,Be.index>=0&&(z.idx[Be.index]=le),xe.offset=le)}}let H,te,re;if(I.acCompressedSize>0)switch(I.acCompression){case 0:H=new Uint16Array(I.totalAcUncompressedCount),ut(g.array,S,h,I.acCompressedSize,H,I.totalAcUncompressedCount);break;case 1:let le=g.array.slice(h.value,h.value+I.totalAcUncompressedCount),xe=Vc(le);H=new Uint16Array(xe.buffer),h.value+=I.totalAcUncompressedCount;break}if(I.dcCompressedSize>0){let le={array:g.array,offset:h,size:I.dcCompressedSize};te=new Uint16Array(ce(le).buffer),h.value+=I.dcCompressedSize}if(I.rleRawSize>0){let le=g.array.slice(h.value,h.value+I.rleCompressedSize),xe=Vc(le);re=Ve(xe.buffer),h.value+=I.rleCompressedSize}let Q=0,ve=new Array(B.length);for(let le=0;le<ve.length;++le)ve[le]=new Array;for(let le=0;le<g.lines;++le)for(let xe=0;xe<B.length;++xe)ve[xe].push(Q),Q+=B[xe].width*g.type*2;de(z,ve,B,H,te,x);for(let le=0;le<B.length;++le){let xe=B[le];if(!xe.decoded)switch(xe.compression){case 2:let Pe=0,Be=0;for(let we=0;we<g.lines;++we){let St=ve[le][Pe];for(let He=0;He<xe.width;++He){for(let Qe=0;Qe<2*xe.type;++Qe)x[St++]=re[Be+Qe*xe.width*xe.height];Be++}Pe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(x.buffer)}function De(g,S){let h=new Uint8Array(g),x=0;for(;h[S.value+x]!=0;)x+=1;let I=new TextDecoder().decode(h.slice(S.value,S.value+x));return S.value=S.value+x+1,I}function mt(g,S,h){let x=new TextDecoder().decode(new Uint8Array(g).slice(S.value,S.value+h));return S.value=S.value+h,x}function pe(g,S){let h=Ue(g,S),x=ze(g,S);return[h,x]}function Oe(g,S){let h=ze(g,S),x=ze(g,S);return[h,x]}function Ue(g,S){let h=g.getInt32(S.value,!0);return S.value=S.value+4,h}function ze(g,S){let h=g.getUint32(S.value,!0);return S.value=S.value+4,h}function Ne(g,S){let h=g[S.value];return S.value=S.value+1,h}function tt(g,S){let h=g.getUint8(S.value);return S.value=S.value+1,h}let We=function(g,S){let h;return"getBigInt64"in DataView.prototype?h=Number(g.getBigInt64(S.value,!0)):h=g.getUint32(S.value+4,!0)+Number(g.getUint32(S.value,!0)<<32),S.value+=8,h};function nt(g,S){let h=g.getFloat32(S.value,!0);return S.value+=4,h}function k(g,S){return yf.toHalfFloat(nt(g,S))}function $(g){let S=(g&31744)>>10,h=g&1023;return(g>>15?-1:1)*(S?S===31?h?NaN:1/0:Math.pow(2,S-15)*(1+h/1024):6103515625e-14*(h/1024))}function X(g,S){let h=g.getUint16(S.value,!0);return S.value+=2,h}function ae(g,S){return $(X(g,S))}function Ae(g,S,h,x){let I=h.value,C=[];for(;h.value<I+x-1;){let A=De(S,h),V=Ue(g,h),B=tt(g,h);h.value+=3;let z=Ue(g,h),H=Ue(g,h);C.push({name:A,pixelType:V,pLinear:B,xSampling:z,ySampling:H})}return h.value+=1,C}function Ce(g,S){let h=nt(g,S),x=nt(g,S),I=nt(g,S),C=nt(g,S),A=nt(g,S),V=nt(g,S),B=nt(g,S),z=nt(g,S);return{redX:h,redY:x,greenX:I,greenY:C,blueX:A,blueY:V,whiteX:B,whiteY:z}}function it(g,S){let h=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],x=tt(g,S);return h[x]}function Ot(g,S){let h=Ue(g,S),x=Ue(g,S),I=Ue(g,S),C=Ue(g,S);return{xMin:h,yMin:x,xMax:I,yMax:C}}function Yt(g,S){let h=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],x=tt(g,S);return h[x]}function Mt(g,S){let h=["ENVMAP_LATLONG","ENVMAP_CUBE"],x=tt(g,S);return h[x]}function _n(g,S){let h=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],x=["ROUND_DOWN","ROUND_UP"],I=ze(g,S),C=ze(g,S),A=tt(g,S);return{xSize:I,ySize:C,levelMode:h[A&15],roundingMode:x[A>>4]}}function Wn(g,S){let h=nt(g,S),x=nt(g,S);return[h,x]}function zc(g,S){let h=nt(g,S),x=nt(g,S),I=nt(g,S);return[h,x,I]}function Hc(g,S,h,x,I){if(x==="string"||x==="stringvector"||x==="iccProfile")return mt(S,h,I);if(x==="chlist")return Ae(g,S,h,I);if(x==="chromaticities")return Ce(g,h);if(x==="compression")return it(g,h);if(x==="box2i")return Ot(g,h);if(x==="envmap")return Mt(g,h);if(x==="tiledesc")return _n(g,h);if(x==="lineOrder")return Yt(g,h);if(x==="float")return nt(g,h);if(x==="v2f")return Wn(g,h);if(x==="v3f")return zc(g,h);if(x==="int")return Ue(g,h);if(x==="rational")return pe(g,h);if(x==="timecode")return Oe(g,h);if(x==="preview")return h.value+=I,"skipped";h.value+=I}function Ei(g,S){let h=Math.log2(g);return S=="ROUND_DOWN"?Math.floor(h):Math.ceil(h)}function Wo(g,S,h){let x=0;switch(g.levelMode){case"ONE_LEVEL":x=1;break;case"MIPMAP_LEVELS":x=Ei(Math.max(S,h),g.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return x}function jo(g,S,h,x){let I=new Array(g);for(let C=0;C<g;C++){let A=1<<C,V=S/A|0;x=="ROUND_UP"&&V*A<S&&(V+=1);let B=Math.max(V,1);I[C]=(B+h-1)/h|0}return I}function Gc(){let g=this,S=g.offset,h={value:0};for(let x=0;x<g.tileCount;x++){let I=Ue(g.viewer,S),C=Ue(g.viewer,S);S.value+=8,g.size=ze(g.viewer,S);let A=I*g.blockWidth,V=C*g.blockHeight;g.columns=A+g.blockWidth>g.width?g.width-A:g.blockWidth,g.lines=V+g.blockHeight>g.height?g.height-V:g.blockHeight;let B=g.columns*g.totalBytes,H=g.size<g.lines*B?g.uncompress(g):W(g);S.value+=g.size;for(let te=0;te<g.lines;te++){let re=te*g.columns*g.totalBytes;for(let Q=0;Q<g.inputChannels.length;Q++){let ve=bi.channels[Q].name,le=g.channelByteOffsets[ve]*g.columns,xe=g.decodeChannels[ve];if(xe===void 0)continue;h.value=re+le;let Pe=(g.height-(1+V+te))*g.outLineWidth;for(let Be=0;Be<g.columns;Be++){let we=Pe+(Be+A)*g.outputChannels+xe;g.byteArray[we]=g.getter(H,h)}}}}}function xs(){let g=this,S=g.offset,h={value:0};for(let x=0;x<g.height/g.blockHeight;x++){let I=Ue(g.viewer,S)-bi.dataWindow.yMin;g.size=ze(g.viewer,S),g.lines=I+g.blockHeight>g.height?g.height-I:g.blockHeight;let C=g.columns*g.totalBytes,V=g.size<g.lines*C?g.uncompress(g):W(g);S.value+=g.size;for(let B=0;B<g.blockHeight;B++){let z=x*g.blockHeight,H=B+g.scanOrder(z);if(H>=g.height)continue;let te=B*C,re=(g.height-1-H)*g.outLineWidth;for(let Q=0;Q<g.inputChannels.length;Q++){let ve=bi.channels[Q].name,le=g.channelByteOffsets[ve]*g.columns,xe=g.decodeChannels[ve];if(xe!==void 0){h.value=te+le;for(let Pe=0;Pe<g.columns;Pe++){let Be=re+Pe*g.outputChannels+xe;g.byteArray[Be]=g.getter(V,h)}}}}}}function Wc(g,S,h){let x={};if(g.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");x.version=g.getUint8(4);let I=g.getUint8(5);x.spec={singleTile:!!(I&2),longName:!!(I&4),deepFormat:!!(I&8),multiPart:!!(I&16)},h.value=8;let C=!0;for(;C;){let A=De(S,h);if(A==0)C=!1;else{let V=De(S,h),B=ze(g,h),z=Hc(g,S,h,V,B);z===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${V}'.`):x[A]=z}}if(I&-7)throw console.error("THREE.EXRHeader:",x),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return x}function Ms(g,S,h,x,I){let C={size:0,viewer:S,array:h,offset:x,width:g.dataWindow.xMax-g.dataWindow.xMin+1,height:g.dataWindow.yMax-g.dataWindow.yMin+1,inputChannels:g.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:vi};switch(g.compression){case"NO_COMPRESSION":C.blockHeight=1,C.uncompress=W;break;case"RLE_COMPRESSION":C.blockHeight=1,C.uncompress=ee;break;case"ZIPS_COMPRESSION":C.blockHeight=1,C.uncompress=ce;break;case"ZIP_COMPRESSION":C.blockHeight=16,C.uncompress=ce;break;case"PIZ_COMPRESSION":C.blockHeight=32,C.uncompress=ne;break;case"PXR24_COMPRESSION":C.blockHeight=16,C.uncompress=ke;break;case"DWAA_COMPRESSION":C.blockHeight=32,C.uncompress=Se;break;case"DWAB_COMPRESSION":C.blockHeight=256,C.uncompress=Se;break;default:throw new Error("EXRLoader.parse: "+g.compression+" is unsupported")}let A={};for(let H of g.channels)switch(H.name){case"Y":case"R":case"G":case"B":case"A":A[H.name]=!0,C.type=H.pixelType}let V=!1;if(A.R&&A.G&&A.B)V=!A.A,C.outputChannels=4,C.decodeChannels={R:0,G:1,B:2,A:3};else if(A.Y)C.outputChannels=1,C.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(C.type==1)switch(I){case vn:C.getter=ae;break;case ti:C.getter=X;break}else if(C.type==2)switch(I){case vn:C.getter=nt;break;case ti:C.getter=k}else throw new Error("EXRLoader.parse: unsupported pixelType "+C.type+" for "+g.compression+".");C.columns=C.width;let B=C.width*C.height*C.outputChannels;switch(I){case vn:C.byteArray=new Float32Array(B),V&&C.byteArray.fill(1,0,B);break;case ti:C.byteArray=new Uint16Array(B),V&&C.byteArray.fill(15360,0,B);break;default:console.error("THREE.EXRLoader: unsupported type: ",I);break}let z=0;for(let H of g.channels)C.decodeChannels[H.name]!==void 0&&(C.channelByteOffsets[H.name]=z),z+=H.pixelType*2;if(C.totalBytes=z,C.outLineWidth=C.width*C.outputChannels,g.lineOrder==="INCREASING_Y"?C.scanOrder=H=>H:C.scanOrder=H=>C.height-1-H,C.outputChannels==4?(C.format=yn,C.colorSpace=vi):(C.format=Dc,C.colorSpace=ni),g.spec.singleTile){C.blockHeight=g.tiles.ySize,C.blockWidth=g.tiles.xSize;let H=Wo(g.tiles,C.width,C.height),te=jo(H,C.width,g.tiles.xSize,g.tiles.roundingMode),re=jo(H,C.height,g.tiles.ySize,g.tiles.roundingMode);C.tileCount=te[0]*re[0];for(let Q=0;Q<H;Q++)for(let ve=0;ve<re[Q];ve++)for(let le=0;le<te[Q];le++)We(S,x);C.decode=Gc.bind(C)}else{C.blockWidth=C.width;let H=Math.ceil(C.height/C.blockHeight);for(let te=0;te<H;te++)We(S,x);C.decode=xs.bind(C)}return C}let $o={value:0},qo=new DataView(e),Df=new Uint8Array(e),bi=Wc(qo,e,$o),nr=Ms(bi,qo,Df,$o,this.type);return nr.decode(),{header:bi,width:nr.width,height:nr.height,data:nr.byteArray,format:nr.format,colorSpace:nr.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=sn,o.magFilter=sn,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,i,r)}};var LL=["myCanvas"],hw=(()=>{class n{constructor(t){this.cdr=t,this.ambientLight=new wc(16777215,1),this.spotLight=new Sc(16777215,30),this.scene=new ac,this.material=new yc({color:"green",wireframe:!1,metalness:.7,roughness:.07,transparent:!0,opacity:.8,ior:1.5,thickness:.5,transmission:1}),this.size={width:window.innerWidth,height:window.innerHeight},this.cursor={x:0,y:0},this.camera=new rn(75,this.size.width/this.size.height),this.fontLoader=new Cf,this.clock=new Ec,this.tick=()=>{let i=this.clock.getElapsedTime();this.camera.position.x=Math.sin(this.cursor.x*Math.PI)*3,this.camera.position.z=Math.cos(this.cursor.x*Math.PI)*3,this.camera.position.y=-this.cursor.y*5,this.mesh&&this.camera.lookAt(this.mesh.position),this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(this.tick)},this.EXRLoader=new Tf,this.EXRLoader.load("/assets/burnt_warehouse_4k.exr",i=>{i.mapping=Fo,this.scene.background=i,this.scene.environment=i})}ngAfterViewInit(){this.camera.position.z=6,this.spotLight.position.x=2,this.spotLight.position.y=3,this.spotLight.position.z=4,this.scene.add(this.camera),this.scene.add(this.ambientLight),this.scene.add(this.spotLight),this.renderer=new Ef({canvas:this.canvas.nativeElement}),this.renderer.setSize(this.size.width,this.size.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.loadFont(),this.tick()}loadFont(){this.fontLoader.load("/assets/helvetiker_regular.typeface.json",t=>{let i=new Uc("wins.software",{font:t,size:.5,depth:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5}),r=new Uc("are under construction",{font:t,size:.5,depth:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});i.center(),r.center(),this.mesh=new dn(i,this.material);let s=new dn(r,this.material);s.position.y=-.7,this.scene.add(this.mesh),this.scene.add(s)})}handleTouchEvent(t){this.cursor.x=t.touches[0].clientX/this.size.width-.5,this.cursor.y=t.touches[0].clientY/this.size.height-.5,this.camera.position.x=t.touches[0].clientX,this.camera.position.y=t.touches[0].clientY}onMousemove(t){this.cursor.x=t.x/this.size.width-.5,this.cursor.y=t.y/this.size.height-.5,this.camera.position.x=t.x,this.camera.position.y=t.y}onResize(t,i){this.size={width:t,height:i},this.size.width=t,this.size.height=i,this.camera.aspect=this.size.width/this.size.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.size.width,this.size.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}static{this.\u0275fac=function(i){return new(i||n)(ha($r))}}static{this.\u0275cmp=Kl({type:n,selectors:[["app-root"]],viewQuery:function(i,r){if(i&1&&G_(LL,5),i&2){let s;Rp(s=Np())&&(r.canvas=s.first)}},hostBindings:function(i,r){i&1&&iu("touchmove",function(o){return r.handleTouchEvent(o)})("mousemove",function(o){return r.onMousemove(o)})("resize",function(o){return r.onResize(o.target.innerWidth,o.target.innerHeight)},!1,J0)},decls:3,vars:0,consts:[["myCanvas",""],["touch-action","none","id","myCanvas"]],template:function(i,r){i&1&&ma(0,"canvas",1,0)(2,"router-outlet")},dependencies:[cM,bm],encapsulation:2})}}return n})();fx(hw,uM).catch(n=>console.error(n));
