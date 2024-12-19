var LS=Object.defineProperty,OS=Object.defineProperties;var FS=Object.getOwnPropertyDescriptors;var Ag=Object.getOwnPropertySymbols;var US=Object.prototype.hasOwnProperty,kS=Object.prototype.propertyIsEnumerable;var Ig=(n,e,t)=>e in n?LS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,xe=(n,e)=>{for(var t in e||={})US.call(e,t)&&Ig(n,t,e[t]);if(Ag)for(var t of Ag(e))kS.call(e,t)&&Ig(n,t,e[t]);return n},Mt=(n,e)=>OS(n,FS(e));var cs=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function Rg(n,e){return Object.is(n,e)}var Ot=null,hc=!1,Jd=1,ls=Symbol("SIGNAL");function ut(n){let e=Ot;return Ot=n,e}function Ng(){return Ot}var pc={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Pg(n){if(hc)throw new Error("");if(Ot===null)return;Ot.consumerOnSignalRead(n);let e=Ot.nextProducerIndex++;if(gc(Ot),e<Ot.producerNode.length&&Ot.producerNode[e]!==n&&Do(Ot)){let t=Ot.producerNode[e];mc(t,Ot.producerIndexOfThis[e])}Ot.producerNode[e]!==n&&(Ot.producerNode[e]=n,Ot.producerIndexOfThis[e]=Do(Ot)?Ug(n,Ot,e):0),Ot.producerLastReadVersion[e]=n.version}function BS(){Jd++}function Lg(n){if(!(Do(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Jd)){if(!n.producerMustRecompute(n)&&!Qd(n)){Zd(n);return}n.producerRecomputeValue(n),Zd(n)}}function Og(n){if(n.liveConsumerNode===void 0)return;let e=hc;hc=!0;try{for(let t of n.liveConsumerNode)t.dirty||zS(t)}finally{hc=e}}function VS(){return Ot?.consumerAllowSignalWrites!==!1}function zS(n){n.dirty=!0,Og(n),n.consumerMarkedDirty?.(n)}function Zd(n){n.dirty=!1,n.lastCleanEpoch=Jd}function Kd(n){return n&&(n.nextProducerIndex=0),ut(n)}function Fg(n,e){if(ut(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Do(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)mc(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Qd(n){gc(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Lg(t),i!==t.version))return!0}return!1}function ef(n){if(gc(n),Do(n))for(let e=0;e<n.producerNode.length;e++)mc(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Ug(n,e,t){if(kg(n),n.liveConsumerNode.length===0&&Bg(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=Ug(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function mc(n,e){if(kg(n),n.liveConsumerNode.length===1&&Bg(n))for(let i=0;i<n.producerNode.length;i++)mc(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];gc(r),r.producerIndexOfThis[i]=e}}function Do(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function gc(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function kg(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function Bg(n){return n.producerNode!==void 0}function HS(){throw new Error}var Vg=HS;function GS(){Vg()}function zg(n){Vg=n}var WS=null;function Hg(n,e){VS()||GS(),n.equal(n.value,e)||(n.value=e,jS(n))}var Gg=Mt(xe({},pc),{equal:Rg,value:void 0});function jS(n){n.version++,BS(),Og(n),WS?.()}function Ge(n){return typeof n=="function"}function us(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var vc=us(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Ao(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Nt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ge(i))try{i()}catch(s){e=s instanceof vc?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Wg(s)}catch(o){e=e??[],o instanceof vc?e=[...e,...o.errors]:e.push(o)}}if(e)throw new vc(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Wg(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Ao(t,e)}remove(e){let{_finalizers:t}=this;t&&Ao(t,e),e instanceof n&&e._removeParent(this)}};Nt.EMPTY=(()=>{let n=new Nt;return n.closed=!0,n})();var tf=Nt.EMPTY;function yc(n){return n instanceof Nt||n&&"closed"in n&&Ge(n.remove)&&Ge(n.add)&&Ge(n.unsubscribe)}function Wg(n){Ge(n)?n():n.unsubscribe()}var Fn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ds={setTimeout(n,e,...t){let{delegate:i}=ds;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ds;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function _c(n){ds.setTimeout(()=>{let{onUnhandledError:e}=Fn;if(e)e(n);else throw n})}function Io(){}var jg=nf("C",void 0,void 0);function $g(n){return nf("E",void 0,n)}function qg(n){return nf("N",n,void 0)}function nf(n,e,t){return{kind:n,value:e,error:t}}var hr=null;function fs(n){if(Fn.useDeprecatedSynchronousErrorHandling){let e=!hr;if(e&&(hr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=hr;if(hr=null,t)throw i}}else n()}function Xg(n){Fn.useDeprecatedSynchronousErrorHandling&&hr&&(hr.errorThrown=!0,hr.error=n)}var pr=class extends Nt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,yc(e)&&e.add(this)):this.destination=XS}static create(e,t,i){return new hs(e,t,i)}next(e){this.isStopped?sf(qg(e),this):this._next(e)}error(e){this.isStopped?sf($g(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?sf(jg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},$S=Function.prototype.bind;function rf(n,e){return $S.call(n,e)}var of=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){xc(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){xc(i)}else xc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){xc(t)}}},hs=class extends pr{constructor(e,t,i){super();let r;if(Ge(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Fn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&rf(e.next,s),error:e.error&&rf(e.error,s),complete:e.complete&&rf(e.complete,s)}):r=e}this.destination=new of(r)}};function xc(n){Fn.useDeprecatedSynchronousErrorHandling?Xg(n):_c(n)}function qS(n){throw n}function sf(n,e){let{onStoppedNotification:t}=Fn;t&&ds.setTimeout(()=>t(n,e))}var XS={closed:!0,next:Io,error:qS,complete:Io};var ps=typeof Symbol=="function"&&Symbol.observable||"@@observable";function an(n){return n}function af(...n){return cf(n)}function cf(n){return n.length===0?an:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var yt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=ZS(t)?t:new hs(t,i,r);return fs(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Yg(i),new i((r,s)=>{let o=new hs({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[ps](){return this}pipe(...t){return cf(t)(this)}toPromise(t){return t=Yg(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Yg(n){var e;return(e=n??Fn.Promise)!==null&&e!==void 0?e:Promise}function YS(n){return n&&Ge(n.next)&&Ge(n.error)&&Ge(n.complete)}function ZS(n){return n&&n instanceof pr||YS(n)&&yc(n)}function lf(n){return Ge(n?.lift)}function it(n){return e=>{if(lf(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function rt(n,e,t,i,r){return new uf(n,e,t,i,r)}var uf=class extends pr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function ms(){return it((n,e)=>{let t=null;n._refCount++;let i=rt(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var gs=class extends yt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,lf(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Nt;let t=this.getSubject();e.add(this.source.subscribe(rt(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Nt.EMPTY)}return e}refCount(){return ms()(this)}};var Zg=us(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Ht=(()=>{class n extends yt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Mc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Zg}next(t){fs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){fs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){fs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?tf:(this.currentObservers=null,s.push(t),new Nt(()=>{this.currentObservers=null,Ao(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new yt;return t.source=this,t}}return n.create=(e,t)=>new Mc(e,t),n})(),Mc=class extends Ht{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:tf}};var Gt=class extends Ht{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var cn=new yt(n=>n.complete());function Jg(n){return n&&Ge(n.schedule)}function Kg(n){return n[n.length-1]}function Qg(n){return Ge(Kg(n))?n.pop():void 0}function ki(n){return Jg(Kg(n))?n.pop():void 0}function tv(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function ev(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function mr(n){return this instanceof mr?(this.v=n,this):new mr(n)}function nv(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(v){return new Promise(function(m,p){s.push([h,v,m,p])>1||c(h,v)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(v){f(s[0][3],v)}}function l(h){h.value instanceof mr?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function iv(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof ev=="function"?ev(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Sc=n=>n&&typeof n.length=="number"&&typeof n!="function";function Ec(n){return Ge(n?.then)}function bc(n){return Ge(n[ps])}function wc(n){return Symbol.asyncIterator&&Ge(n?.[Symbol.asyncIterator])}function Cc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function JS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Tc=JS();function Dc(n){return Ge(n?.[Tc])}function Ac(n){return nv(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield mr(t.read());if(r)return yield mr(void 0);yield yield mr(i)}}finally{t.releaseLock()}})}function Ic(n){return Ge(n?.getReader)}function kt(n){if(n instanceof yt)return n;if(n!=null){if(bc(n))return KS(n);if(Sc(n))return QS(n);if(Ec(n))return eE(n);if(wc(n))return rv(n);if(Dc(n))return tE(n);if(Ic(n))return nE(n)}throw Cc(n)}function KS(n){return new yt(e=>{let t=n[ps]();if(Ge(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function QS(n){return new yt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function eE(n){return new yt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,_c)})}function tE(n){return new yt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function rv(n){return new yt(e=>{iE(n,e).catch(t=>e.error(t))})}function nE(n){return rv(Ac(n))}function iE(n,e){var t,i,r,s;return tv(this,void 0,void 0,function*(){try{for(t=iv(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function nn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Rc(n,e=0){return it((t,i)=>{t.subscribe(rt(i,r=>nn(i,n,()=>i.next(r),e),()=>nn(i,n,()=>i.complete(),e),r=>nn(i,n,()=>i.error(r),e)))})}function Nc(n,e=0){return it((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function sv(n,e){return kt(n).pipe(Nc(e),Rc(e))}function ov(n,e){return kt(n).pipe(Nc(e),Rc(e))}function av(n,e){return new yt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function cv(n,e){return new yt(t=>{let i;return nn(t,e,()=>{i=n[Tc](),nn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ge(i?.return)&&i.return()})}function Pc(n,e){if(!n)throw new Error("Iterable cannot be null");return new yt(t=>{nn(t,e,()=>{let i=n[Symbol.asyncIterator]();nn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function lv(n,e){return Pc(Ac(n),e)}function uv(n,e){if(n!=null){if(bc(n))return sv(n,e);if(Sc(n))return av(n,e);if(Ec(n))return ov(n,e);if(wc(n))return Pc(n,e);if(Dc(n))return cv(n,e);if(Ic(n))return lv(n,e)}throw Cc(n)}function Dt(n,e){return e?uv(n,e):kt(n)}function Fe(...n){let e=ki(n);return Dt(n,e)}function vs(n,e){let t=Ge(n)?n:()=>n,i=r=>r.error(t());return new yt(e?r=>e.schedule(i,0,r):i)}function df(n){return!!n&&(n instanceof yt||Ge(n.lift)&&Ge(n.subscribe))}var di=us(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function tt(n,e){return it((t,i)=>{let r=0;t.subscribe(rt(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:rE}=Array;function sE(n,e){return rE(e)?n(...e):n(e)}function dv(n){return tt(e=>sE(n,e))}var{isArray:oE}=Array,{getPrototypeOf:aE,prototype:cE,keys:lE}=Object;function fv(n){if(n.length===1){let e=n[0];if(oE(e))return{args:e,keys:null};if(uE(e)){let t=lE(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function uE(n){return n&&typeof n=="object"&&aE(n)===cE}function hv(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Ro(...n){let e=ki(n),t=Qg(n),{args:i,keys:r}=fv(n);if(i.length===0)return Dt([],e);let s=new yt(dE(i,e,r?o=>hv(r,o):an));return t?s.pipe(dv(t)):s}function dE(n,e,t=an){return i=>{pv(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)pv(e,()=>{let l=Dt(n[c],e),u=!1;l.subscribe(rt(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function pv(n,e,t){n?nn(t,n,e):e()}function mv(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let m=!1;kt(t(v,u++)).subscribe(rt(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?nn(e,o,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(rt(e,h,()=>{d=!0,f()})),()=>{a?.()}}function Pt(n,e,t=1/0){return Ge(e)?Pt((i,r)=>tt((s,o)=>e(i,s,r,o))(kt(n(i,r))),t):(typeof e=="number"&&(t=e),it((i,r)=>mv(i,r,n,t)))}function ys(n=1/0){return Pt(an,n)}function gv(){return ys(1)}function _s(...n){return gv()(Dt(n,ki(n)))}function Lc(n){return new yt(e=>{kt(n()).subscribe(e)})}function En(n,e){return it((t,i)=>{let r=0;t.subscribe(rt(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Bi(n){return it((e,t)=>{let i=null,r=!1,s;i=e.subscribe(rt(t,void 0,void 0,o=>{s=kt(n(o,Bi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function vv(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(rt(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function gr(n,e){return Ge(e)?Pt(n,e,1):Pt(n,1)}function Vi(n){return it((e,t)=>{let i=!1;e.subscribe(rt(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function fi(n){return n<=0?()=>cn:it((e,t)=>{let i=0;e.subscribe(rt(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function ff(n){return tt(()=>n)}function Oc(n=fE){return it((e,t)=>{let i=!1;e.subscribe(rt(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function fE(){return new di}function No(n){return it((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function hi(n,e){let t=arguments.length>=2;return i=>i.pipe(n?En((r,s)=>n(r,s,i)):an,fi(1),t?Vi(e):Oc(()=>new di))}function xs(n){return n<=0?()=>cn:it((e,t)=>{let i=[];e.subscribe(rt(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function hf(n,e){let t=arguments.length>=2;return i=>i.pipe(n?En((r,s)=>n(r,s,i)):an,xs(1),t?Vi(e):Oc(()=>new di))}function pf(n,e){return it(vv(n,e,arguments.length>=2,!0))}function mf(...n){let e=ki(n);return it((t,i)=>{(e?_s(n,t,e):_s(n,t)).subscribe(i)})}function bn(n,e){return it((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(rt(i,c=>{r?.unsubscribe();let l=0,u=s++;kt(n(c,u)).subscribe(r=rt(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function gf(n){return it((e,t)=>{kt(n).subscribe(rt(t,()=>t.complete(),Io)),!t.closed&&e.subscribe(t)})}function Wt(n,e,t){let i=Ge(n)||e||t?{next:n,error:e,complete:t}:n;return i?it((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(rt(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):an}var Le=class extends Error{code;constructor(e,t){super(ph(e,t)),this.code=e}};function ph(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var ty=Symbol("InputSignalNode#UNSET"),hE=Mt(xe({},Gg),{transformFn:void 0,applyValueToInputSignal(n,e){Hg(n,e)}});function ny(n,e){let t=Object.create(hE);t.value=n,t.transformFn=e?.transform;function i(){if(Pg(t),t.value===ty)throw new Le(-950,!1);return t.value}return i[ls]=t,i}function Go(n){return{toString:n}.toString()}var Fc="__parameters__";function pE(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function iy(n,e,t){return Go(()=>{let i=pE(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(Fc)?c[Fc]:Object.defineProperty(c,Fc,{value:[]})[Fc];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function _t(n){for(let e in n)if(n[e]===_t)return e;throw Error("Could not find renamed property on target object.")}function un(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(un).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function yv(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var mE=_t({__forward_ref__:_t});function ry(n){return n.__forward_ref__=ry,n.toString=function(){return un(this())},n}function Cn(n){return sy(n)?n():n}function sy(n){return typeof n=="function"&&n.hasOwnProperty(mE)&&n.__forward_ref__===ry}function Ne(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function ll(n){return{providers:n.providers||[],imports:n.imports||[]}}function ul(n){return _v(n,ay)||_v(n,cy)}function oy(n){return ul(n)!==null}function _v(n,e){return n.hasOwnProperty(e)?n[e]:null}function gE(n){let e=n&&(n[ay]||n[cy]);return e||null}function xv(n){return n&&(n.hasOwnProperty(Mv)||n.hasOwnProperty(vE))?n[Mv]:null}var ay=_t({\u0275prov:_t}),Mv=_t({\u0275inj:_t}),cy=_t({ngInjectableDef:_t}),vE=_t({ngInjectorDef:_t}),Ve=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ne({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function ly(n){return n&&!!n.\u0275providers}var yE=_t({\u0275cmp:_t}),_E=_t({\u0275dir:_t}),xE=_t({\u0275pipe:_t}),ME=_t({\u0275mod:_t}),Wc=_t({\u0275fac:_t}),Oo=_t({__NG_ELEMENT_ID__:_t}),Sv=_t({__NG_ENV_ID__:_t});function SE(n){return typeof n=="string"?n:n==null?"":String(n)}function EE(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():SE(n)}function bE(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Le(-200,n)}function mh(n,e){throw new Le(-201,!1)}var Je=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Je||{}),bf;function uy(){return bf}function wn(n){let e=bf;return bf=n,e}function dy(n,e,t){let i=ul(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Je.Optional)return null;if(e!==void 0)return e;mh(n,"Injector")}var wE={},Fo=wE,wf="__NG_DI_FLAG__",jc="ngTempTokenPath",CE="ngTokenPath",TE=/\n/gm,DE="\u0275",Ev="__source",ws;function AE(){return ws}function zi(n){let e=ws;return ws=n,e}function IE(n,e=Je.Default){if(ws===void 0)throw new Le(-203,!1);return ws===null?dy(n,void 0,e):ws.get(n,e&Je.Optional?null:void 0,e)}function We(n,e=Je.Default){return(uy()||IE)(Cn(n),e)}function re(n,e=Je.Default){return We(n,dl(e))}function dl(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Cf(n){let e=[];for(let t=0;t<n.length;t++){let i=Cn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Le(900,!1);let r,s=Je.Default;for(let o=0;o<i.length;o++){let a=i[o],c=RE(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(We(r,s))}else e.push(We(i))}return e}function fy(n,e){return n[wf]=e,n.prototype[wf]=e,n}function RE(n){return n[wf]}function NE(n,e,t,i){let r=n[jc];throw e[Ev]&&r.unshift(e[Ev]),n.message=PE(`
`+n.message,r,t,i),n[CE]=r,n[jc]=null,n}function PE(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==DE?n.slice(2):n;let r=un(e);if(Array.isArray(e))r=e.map(un).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):un(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(TE,`
  `)}`}var gh=fy(iy("Optional"),8);var hy=fy(iy("SkipSelf"),4);function Ts(n,e){let t=n.hasOwnProperty(Wc);return t?n[Wc]:null}function LE(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function OE(n){return n.flat(Number.POSITIVE_INFINITY)}function vh(n,e){n.forEach(t=>Array.isArray(t)?vh(t,e):e(t))}function py(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function $c(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var Uo={},qn=[],Ds=new Ve(""),my=new Ve("",-1),gy=new Ve(""),qc=class{get(e,t=Fo){if(t===Fo){let i=new Error(`NullInjectorError: No provider for ${un(e)}!`);throw i.name="NullInjectorError",i}return t}};function vy(n,e){let t=n[ME]||null;if(!t&&e===!0)throw new Error(`Type ${un(n)} does not have '\u0275mod' property.`);return t}function Gi(n){return n[yE]||null}function yy(n){return n[_E]||null}function _y(n){return n[xE]||null}function xy(n){let e=Gi(n)||yy(n)||_y(n);return e!==null?e.standalone:!1}function yh(n){return{\u0275providers:n}}function FE(...n){return{\u0275providers:My(!0,n),\u0275fromNgModule:!0}}function My(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return vh(e,o=>{let a=o;Tf(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Sy(r,s),t}function Sy(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];_h(r,s=>{e(s,i)})}}function Tf(n,e,t,i){if(n=Cn(n),!n)return!1;let r=null,s=xv(n),o=!s&&Gi(n);if(!s&&!o){let c=n.ngModule;if(s=xv(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Tf(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{vh(s.imports,u=>{Tf(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Sy(l,e)}if(!a){let l=Ts(r)||(()=>new r);e({provide:r,useFactory:l,deps:qn},r),e({provide:gy,useValue:r,multi:!0},r),e({provide:Ds,useValue:()=>We(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;_h(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function _h(n,e){for(let t of n)ly(t)&&(t=t.\u0275providers),Array.isArray(t)?_h(t,e):e(t)}var UE=_t({provide:String,useValue:_t});function Ey(n){return n!==null&&typeof n=="object"&&UE in n}function kE(n){return!!(n&&n.useExisting)}function BE(n){return!!(n&&n.useFactory)}function Df(n){return typeof n=="function"}var fl=new Ve(""),kc={},VE={},vf;function xh(){return vf===void 0&&(vf=new qc),vf}var hn=class{},ko=class extends hn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,If(e,o=>this.processProvider(o)),this.records.set(my,Ms(void 0,this)),r.has("environment")&&this.records.set(hn,Ms(void 0,this));let s=this.records.get(fl);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(gy,qn,Je.Self))}destroy(){Po(this),this._destroyed=!0;let e=ut(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ut(e)}}onDestroy(e){return Po(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Po(this);let t=zi(this),i=wn(void 0),r;try{return e()}finally{zi(t),wn(i)}}get(e,t=Fo,i=Je.Default){if(Po(this),e.hasOwnProperty(Sv))return e[Sv](this);i=dl(i);let r,s=zi(this),o=wn(void 0);try{if(!(i&Je.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=$E(e)&&ul(e);l&&this.injectableDefInScope(l)?c=Ms(Af(e),kc):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&Je.Self?xh():this.parent;return t=i&Je.Optional&&t===Fo?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[jc]=a[jc]||[]).unshift(un(e)),s)throw a;return NE(a,e,"R3InjectorError",this.source)}else throw a}finally{wn(o),zi(s)}}resolveInjectorInitializers(){let e=ut(null),t=zi(this),i=wn(void 0),r;try{let s=this.get(Ds,qn,Je.Self);for(let o of s)o()}finally{zi(t),wn(i),ut(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(un(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Cn(e);let t=Df(e)?e:Cn(e&&e.provide),i=HE(e);if(!Df(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Ms(void 0,kc,!0),r.factory=()=>Cf(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=ut(null);try{return t.value===kc&&(t.value=VE,t.value=t.factory()),typeof t.value=="object"&&t.value&&jE(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{ut(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Cn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Af(n){let e=ul(n),t=e!==null?e.factory:Ts(n);if(t!==null)return t;if(n instanceof Ve)throw new Le(204,!1);if(n instanceof Function)return zE(n);throw new Le(204,!1)}function zE(n){if(n.length>0)throw new Le(204,!1);let t=gE(n);return t!==null?()=>t.factory(n):()=>new n}function HE(n){if(Ey(n))return Ms(void 0,n.useValue);{let e=GE(n);return Ms(e,kc)}}function GE(n,e,t){let i;if(Df(n)){let r=Cn(n);return Ts(r)||Af(r)}else if(Ey(n))i=()=>Cn(n.useValue);else if(BE(n))i=()=>n.useFactory(...Cf(n.deps||[]));else if(kE(n))i=()=>We(Cn(n.useExisting));else{let r=Cn(n&&(n.useClass||n.provide));if(WE(n))i=()=>new r(...Cf(n.deps));else return Ts(r)||Af(r)}return i}function Po(n){if(n.destroyed)throw new Le(205,!1)}function Ms(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function WE(n){return!!n.deps}function jE(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function $E(n){return typeof n=="function"||typeof n=="object"&&n instanceof Ve}function If(n,e){for(let t of n)Array.isArray(t)?If(t,e):t&&ly(t)?If(t.\u0275providers,e):e(t)}function Tn(n,e){n instanceof ko&&Po(n);let t,i=zi(n),r=wn(void 0);try{return e()}finally{zi(i),wn(r)}}function by(){return uy()!==void 0||AE()!=null}function qE(n){if(!by())throw new Le(-203,!1)}function XE(n){return typeof n=="function"}var yi=0,Ke=1,Ue=2,$t=3,kn=4,Bn=5,Xc=6,Yc=7,pi=8,As=9,Wi=10,Zn=11,Bo=12,bv=13,Wo=14,Jn=15,_r=16,Ss=17,mi=18,hl=19,wy=20,Hi=21,yf=22,Zc=23,dn=24,Is=25,Cy=1;var xr=7,Jc=8,Rs=9,fn=10,Kc=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(Kc||{});function vr(n){return Array.isArray(n)&&typeof n[Cy]=="object"}function _i(n){return Array.isArray(n)&&n[Cy]===!0}function Ty(n){return(n.flags&4)!==0}function Mh(n){return n.componentOffset>-1}function Dy(n){return(n.flags&1)===1}function jo(n){return!!n.template}function Rf(n){return(n[Ue]&512)!==0}var Nf=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Ay(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var Sh=(()=>{let n=()=>Iy;return n.ngInherit=!0,n})();function Iy(n){return n.type.prototype.ngOnChanges&&(n.setInput=ZE),YE}function YE(){let n=Ny(this),e=n?.current;if(e){let t=n.previous;if(t===Uo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function ZE(n,e,t,i,r){let s=this.declaredInputs[i],o=Ny(n)||JE(n,{previous:Uo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Nf(l&&l.currentValue,t,c===Uo),Ay(n,e,r,t)}var Ry="__ngSimpleChanges__";function Ny(n){return n[Ry]||null}function JE(n,e){return n[Ry]=e}var wv=null;var Xn=function(n,e,t){wv?.(n,e,t)},KE="svg",QE="math";function gi(n){for(;Array.isArray(n);)n=n[yi];return n}function ei(n,e){return gi(e[n.index])}function eb(n,e){return n.data[e]}function ks(n,e){let t=e[n];return vr(t)?t:t[yi]}function tb(n){return(n[Ue]&4)===4}function Eh(n){return(n[Ue]&128)===128}function nb(n){return _i(n[$t])}function Cv(n,e){return e==null?null:n[e]}function Py(n){n[Ss]=0}function bh(n){n[Ue]&1024||(n[Ue]|=1024,Eh(n)&&ml(n))}function pl(n){return!!(n[Ue]&9216||n[dn]?.dirty)}function Pf(n){n[Wi].changeDetectionScheduler?.notify(9),n[Ue]&64&&(n[Ue]|=1024),pl(n)&&ml(n)}function ml(n){n[Wi].changeDetectionScheduler?.notify(0);let e=Mr(n);for(;e!==null&&!(e[Ue]&8192||(e[Ue]|=8192,!Eh(e)));)e=Mr(e)}function Ly(n,e){if((n[Ue]&256)===256)throw new Le(911,!1);n[Hi]===null&&(n[Hi]=[]),n[Hi].push(e)}function ib(n,e){if(n[Hi]===null)return;let t=n[Hi].indexOf(e);t!==-1&&n[Hi].splice(t,1)}function Mr(n){let e=n[$t];return _i(e)?e[$t]:e}var gt={lFrame:Hy(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Lf=!1;function rb(){return gt.lFrame.elementDepthCount}function sb(){gt.lFrame.elementDepthCount++}function ob(){gt.lFrame.elementDepthCount--}function Oy(){return gt.bindingsEnabled}function ab(){return gt.skipHydrationRootTNode!==null}function cb(n){return gt.skipHydrationRootTNode===n}function lb(){gt.skipHydrationRootTNode=null}function Kt(){return gt.lFrame.lView}function $o(){return gt.lFrame.tView}function Vn(){let n=Fy();for(;n!==null&&n.type===64;)n=n.parent;return n}function Fy(){return gt.lFrame.currentTNode}function ub(){let n=gt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function wh(n,e){let t=gt.lFrame;t.currentTNode=n,t.isParent=e}function Uy(){return gt.lFrame.isParent}function db(){gt.lFrame.isParent=!1}function ky(){return Lf}function Tv(n){let e=Lf;return Lf=n,e}function fb(n){return gt.lFrame.bindingIndex=n}function hb(){return gt.lFrame.inI18n}function pb(n,e){let t=gt.lFrame;t.bindingIndex=t.bindingRootIndex=n,Of(e)}function mb(){return gt.lFrame.currentDirectiveIndex}function Of(n){gt.lFrame.currentDirectiveIndex=n}function By(){return gt.lFrame.currentQueryIndex}function Ch(n){gt.lFrame.currentQueryIndex=n}function gb(n){let e=n[Ke];return e.type===2?e.declTNode:e.type===1?n[Bn]:null}function Vy(n,e,t){if(t&Je.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Je.Host);)if(r=gb(s),r===null||(s=s[Wo],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=gt.lFrame=zy();return i.currentTNode=e,i.lView=n,!0}function Th(n){let e=zy(),t=n[Ke];gt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function zy(){let n=gt.lFrame,e=n===null?null:n.child;return e===null?Hy(n):e}function Hy(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Gy(){let n=gt.lFrame;return gt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Wy=Gy;function Dh(){let n=Gy();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function vb(){return gt.lFrame.selectedIndex}function Sr(n){gt.lFrame.selectedIndex=n}function yb(){return gt.lFrame.currentNamespace}var jy=!0;function _b(){return jy}function xb(n){jy=n}function Mb(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Iy(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function $y(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Bc(n,e,t){qy(n,e,3,t)}function Vc(n,e,t,i){(n[Ue]&3)===t&&qy(n,e,t,i)}function _f(n,e){let t=n[Ue];(t&3)===e&&(t&=16383,t+=1,n[Ue]=t)}function qy(n,e,t,i){let r=i!==void 0?n[Ss]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Ss]+=65536),(a<s||s==-1)&&(Sb(n,t,e,c),n[Ss]=(n[Ss]&4294901760)+c+2),c++}function Dv(n,e){Xn(4,n,e);let t=ut(null);try{e.call(n)}finally{ut(t),Xn(5,n,e)}}function Sb(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ue]>>14<n[Ss]>>16&&(n[Ue]&3)===e&&(n[Ue]+=16384,Dv(a,s)):Dv(a,s)}var Cs=-1,Vo=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function Eb(n){return n instanceof Vo}function bb(n){return(n.flags&8)!==0}function wb(n){return(n.flags&16)!==0}function Ff(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];Tb(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function Cb(n){return n===3||n===4||n===6}function Tb(n){return n.charCodeAt(0)===64}function Ah(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Av(n,t,r,null,e[++i]):Av(n,t,r,null,null))}}return n}function Av(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var xf={},Uf=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=dl(i);let r=this.injector.get(e,xf,i);return r!==xf||t===xf?r:this.parentInjector.get(e,t,i)}};function Xy(n){return n!==Cs}function Qc(n){return n&32767}function Db(n){return n>>16}function el(n,e){let t=Db(n),i=e;for(;t>0;)i=i[Wo],t--;return i}var kf=!0;function Iv(n){let e=kf;return kf=n,e}var Ab=256,Yy=Ab-1,Zy=5,Ib=0,Yn={};function Rb(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Oo)&&(i=t[Oo]),i==null&&(i=t[Oo]=Ib++);let r=i&Yy,s=1<<r;e.data[n+(r>>Zy)]|=s}function Jy(n,e){let t=Ky(n,e);if(t!==-1)return t;let i=e[Ke];i.firstCreatePass&&(n.injectorIndex=e.length,Mf(i.data,n),Mf(e,null),Mf(i.blueprint,null));let r=Ih(n,e),s=n.injectorIndex;if(Xy(r)){let o=Qc(r),a=el(r,e),c=a[Ke].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Mf(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Ky(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Ih(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=i_(r),i===null)return Cs;if(t++,r=r[Wo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Cs}function Nb(n,e,t){Rb(n,e,t)}function Qy(n,e,t){if(t&Je.Optional||n!==void 0)return n;mh(e,"NodeInjector")}function e_(n,e,t,i){if(t&Je.Optional&&i===void 0&&(i=null),!(t&(Je.Self|Je.Host))){let r=n[As],s=wn(void 0);try{return r?r.get(e,i,t&Je.Optional):dy(e,i,t&Je.Optional)}finally{wn(s)}}return Qy(i,e,t)}function t_(n,e,t,i=Je.Default,r){if(n!==null){if(e[Ue]&2048&&!(i&Je.Self)){let o=Fb(n,e,t,i,Yn);if(o!==Yn)return o}let s=n_(n,e,t,i,Yn);if(s!==Yn)return s}return e_(e,t,i,r)}function n_(n,e,t,i,r){let s=Lb(t);if(typeof s=="function"){if(!Vy(e,n,i))return i&Je.Host?Qy(r,t,i):e_(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Je.Optional))mh(t);else return o}finally{Wy()}}else if(typeof s=="number"){let o=null,a=Ky(n,e),c=Cs,l=i&Je.Host?e[Jn][Bn]:null;for((a===-1||i&Je.SkipSelf)&&(c=a===-1?Ih(n,e):e[a+8],c===Cs||!Nv(i,!1)?a=-1:(o=e[Ke],a=Qc(c),e=el(c,e)));a!==-1;){let u=e[Ke];if(Rv(s,a,u.data)){let d=Pb(a,e,t,o,i,l);if(d!==Yn)return d}c=e[a+8],c!==Cs&&Nv(i,e[Ke].data[a+8]===l)&&Rv(s,a,e)?(o=u,a=Qc(c),e=el(c,e)):a=-1}}return r}function Pb(n,e,t,i,r,s){let o=e[Ke],a=o.data[n+8],c=i==null?Mh(a)&&kf:i!=o&&(a.type&3)!==0,l=r&Je.Host&&s===a,u=zc(a,o,t,c,l);return u!==null?Ns(e,o,u,a):Yn}function zc(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&jo(h)&&h.type===t)return c}return null}function Ns(n,e,t,i){let r=n[t],s=e.data;if(Eb(r)){let o=r;o.resolving&&bE(EE(s[t]));let a=Iv(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?wn(o.injectImpl):null,u=Vy(n,i,Je.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&Mb(t,s[t],e)}finally{l!==null&&wn(l),Iv(a),o.resolving=!1,Wy()}}return r}function Lb(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Oo)?n[Oo]:void 0;return typeof e=="number"?e>=0?e&Yy:Ob:e}function Rv(n,e,t){let i=1<<n;return!!(t[e+(n>>Zy)]&i)}function Nv(n,e){return!(n&Je.Self)&&!(n&Je.Host&&e)}var yr=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return t_(this._tNode,this._lView,e,dl(i),t)}};function Ob(){return new yr(Vn(),Kt())}function Rh(n){return Go(()=>{let e=n.prototype.constructor,t=e[Wc]||Bf(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Wc]||Bf(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Bf(n){return sy(n)?()=>{let e=Bf(Cn(n));return e&&e()}:Ts(n)}function Fb(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ue]&2048&&!(o[Ue]&512);){let a=n_(s,o,t,i|Je.Self,Yn);if(a!==Yn)return a;let c=s.parent;if(!c){let l=o[wy];if(l){let u=l.get(t,Yn,i);if(u!==Yn)return u}c=i_(o),o=o[Wo]}s=c}return r}function i_(n){let e=n[Ke],t=e.type;return t===2?e.declTNode:t===1?n[Bn]:null}function Pv(n,e=null,t=null,i){let r=r_(n,e,t,i);return r.resolveInjectorInitializers(),r}function r_(n,e=null,t=null,i,r=new Set){let s=[t||qn,FE(n)];return i=i||(typeof n=="object"?void 0:un(n)),new ko(s,e||xh(),i||null,r)}var Kn=class n{static THROW_IF_NOT_FOUND=Fo;static NULL=new qc;static create(e,t){if(Array.isArray(e))return Pv({name:""},t,e,"");{let i=e.name??"";return Pv({name:i},e.parent,e.providers,i)}}static \u0275prov=Ne({token:n,providedIn:"any",factory:()=>We(my)});static __NG_ELEMENT_ID__=-1};var Ub=new Ve("");Ub.__NG_ELEMENT_ID__=n=>{let e=Vn();if(e===null)throw new Le(204,!1);if(e.type&2)return e.value;if(n&Je.Optional)return null;throw new Le(204,!1)};var s_=!1,Nh=(()=>{class n{static __NG_ELEMENT_ID__=kb;static __NG_ENV_ID__=t=>t}return n})(),Vf=class extends Nh{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return Ly(this._lView,e),()=>ib(this._lView,e)}};function kb(){return new Vf(Kt())}var Ps=class{},Ph=new Ve("",{providedIn:"root",factory:()=>!1});var o_=new Ve(""),a_=new Ve(""),Bs=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new Gt(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=Ne({token:n,providedIn:"root",factory:()=>new n})}return n})();var zf=class extends Ht{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,by()&&(this.destroyRef=re(Nh,{optional:!0})??void 0,this.pendingTasks=re(Bs,{optional:!0})??void 0)}emit(e){let t=ut(null);try{super.next(e)}finally{ut(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Nt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},ln=zf;function tl(...n){}function c_(n){let e,t;function i(){n=tl;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function Lv(n){return queueMicrotask(()=>n()),()=>{n=tl}}var Lh="isAngularZone",nl=Lh+"_ID",Bb=0,At=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new ln(!1);onMicrotaskEmpty=new ln(!1);onStable=new ln(!1);onError=new ln(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=s_}=e;if(typeof Zone>"u")throw new Le(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,Hb(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Lh)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Le(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Le(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,Vb,tl,tl);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},Vb={};function Oh(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function zb(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){c_(()=>{n.callbackScheduled=!1,Hf(n),n.isCheckStableRunning=!0,Oh(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Hf(n)}function Hb(n){let e=()=>{zb(n)},t=Bb++;n._inner=n._inner.fork({name:"angular",properties:{[Lh]:!0,[nl]:t,[nl+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(Gb(c))return i.invokeTask(s,o,a,c);try{return Ov(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Fv(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return Ov(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!Wb(c)&&e(),Fv(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Hf(n),Oh(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Hf(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Ov(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Fv(n){n._nesting--,Oh(n)}var Gf=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new ln;onMicrotaskEmpty=new ln;onStable=new ln;onError=new ln;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function Gb(n){return l_(n,"__ignore_ng_zone__")}function Wb(n){return l_(n,"__scheduler_tick__")}function l_(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var vi=class{_console=console;handleError(e){this._console.error("ERROR",e)}},jb=new Ve("",{providedIn:"root",factory:()=>{let n=re(At),e=re(vi);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function Uv(n,e){return ny(n,e)}function $b(n){return ny(ty,n)}var u_=(Uv.required=$b,Uv);function qb(){return Vs(Vn(),Kt())}function Vs(n,e){return new br(ei(n,e))}var br=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=qb}return n})();function Xb(n){return n instanceof br?n.nativeElement:n}function Yb(){return this._results[Symbol.iterator]()}var Wf=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new Ht}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=OE(e);(this._changesDetected=!LE(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=Yb};function d_(n){return(n.flags&128)===128}var f_=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(f_||{}),h_=new Map,Zb=0;function Jb(){return Zb++}function Kb(n){h_.set(n[hl],n)}function jf(n){h_.delete(n[hl])}var kv="__ngContext__";function Ls(n,e){vr(e)?(n[kv]=e[hl],Kb(e)):n[kv]=e}function p_(n){return g_(n[Bo])}function m_(n){return g_(n[kn])}function g_(n){for(;n!==null&&!_i(n);)n=n[kn];return n}var $f;function v_(n){$f=n}function Qb(){if($f!==void 0)return $f;if(typeof document<"u")return document;throw new Le(210,!1)}var Fh=new Ve("",{providedIn:"root",factory:()=>ew}),ew="ng",Uh=new Ve(""),wr=new Ve("",{providedIn:"platform",factory:()=>"unknown"});var kh=new Ve("",{providedIn:"root",factory:()=>Qb().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var tw="h",nw="b";var y_=!1,iw=new Ve("",{providedIn:"root",factory:()=>y_});var Bh=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(Bh||{}),gl=new Ve(""),Bv=new Set;function Vh(n){Bv.has(n)||(Bv.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Es=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(Es||{}),__=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Ne({token:n,providedIn:"root",factory:()=>new n})}return n})(),rw=[Es.EarlyRead,Es.Write,Es.MixedReadWrite,Es.Read],sw=(()=>{class n{ngZone=re(At);scheduler=re(Ps);errorHandler=re(vi,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){re(gl,{optional:!0})}execute(){this.executing=!0;for(let t of rw)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[t]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>i.hooks[t](i.pipelinedValue),i.snapshot))}catch(r){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(r)}this.executing=!1;for(let t of this.sequences)t.afterRun(),t.once&&(this.sequences.delete(t),t.destroy());for(let t of this.deferredRegistrations)this.sequences.add(t);this.deferredRegistrations.size>0&&this.scheduler.notify(8),this.deferredRegistrations.clear()}register(t){this.executing?this.deferredRegistrations.add(t):(this.sequences.add(t),this.scheduler.notify(7))}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,i){return i?i.run(Bh.AFTER_NEXT_RENDER,t):t()}static \u0275prov=Ne({token:n,providedIn:"root",factory:()=>new n})}return n})(),qf=class{impl;hooks;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(e,t,i,r,s=null){this.impl=e,this.hooks=t,this.once=i,this.snapshot=s,this.unregisterOnDestroy=r?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.()}};function zh(n,e){!e?.injector&&qE(zh);let t=e?.injector??re(Kn);return Vh("NgAfterNextRender"),aw(n,t,e,!0)}function ow(n,e){if(n instanceof Function){let t=[void 0,void 0,void 0,void 0];return t[e]=n,t}else return[n.earlyRead,n.write,n.mixedReadWrite,n.read]}function aw(n,e,t,i){let r=e.get(__);r.impl??=e.get(sw);let s=e.get(gl,null,{optional:!0}),o=t?.phase??Es.MixedReadWrite,a=t?.manualCleanup!==!0?e.get(Nh):null,c=new qf(r.impl,ow(n,o),i,a,s?.snapshot(null));return r.impl.register(c),c}var cw=()=>null;function Hh(n,e,t=!1){return cw(n,e,t)}var Qn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Qn||{});function x_(n){return n.ownerDocument.defaultView}function M_(n){return n instanceof Function?n():n}var ji=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(ji||{}),Cr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Cr||{}),lw;function Gh(n,e){return lw(n,e)}function bs(n,e,t,i,r){if(i!=null){let s,o=!1;_i(i)?s=i:vr(i)&&(o=!0,i=i[yi]);let a=gi(i);n===0&&t!==null?r==null?C_(e,t,a):il(e,t,a,r||null,!0):n===1&&t!==null?il(e,t,a,r||null,!0):n===2?Ew(e,a,o):n===3&&e.destroyNode(a),s!=null&&ww(e,n,s,t,r)}}function S_(n,e,t){return n.createElement(e,t)}function uw(n,e){E_(n,e),e[yi]=null,e[Bn]=null}function dw(n,e,t,i,r,s){i[yi]=r,i[Bn]=e,vl(n,i,t,1,r,s)}function E_(n,e){e[Wi].changeDetectionScheduler?.notify(10),vl(n,e,e[Zn],2,null,null)}function fw(n){let e=n[Bo];if(!e)return Sf(n[Ke],n);for(;e;){let t=null;if(vr(e))t=e[Bo];else{let i=e[fn];i&&(t=i)}if(!t){for(;e&&!e[kn]&&e!==n;)vr(e)&&Sf(e[Ke],e),e=e[$t];e===null&&(e=n),vr(e)&&Sf(e[Ke],e),t=e&&e[kn]}e=t}}function hw(n,e,t,i){let r=fn+i,s=t.length;i>0&&(t[r-1][kn]=e),i<s-fn?(e[kn]=t[r],py(t,fn+i,e)):(t.push(e),e[kn]=null),e[$t]=t;let o=e[_r];o!==null&&t!==o&&b_(o,e);let a=e[mi];a!==null&&a.insertView(n),Pf(e),e[Ue]|=128}function b_(n,e){let t=n[Rs],i=e[$t];if(vr(i))n[Ue]|=Kc.HasTransplantedViews;else{let r=i[$t][Jn];e[Jn]!==r&&(n[Ue]|=Kc.HasTransplantedViews)}t===null?n[Rs]=[e]:t.push(e)}function Wh(n,e){let t=n[Rs],i=t.indexOf(e);t.splice(i,1)}function Xf(n,e){if(n.length<=fn)return;let t=fn+e,i=n[t];if(i){let r=i[_r];r!==null&&r!==n&&Wh(r,i),e>0&&(n[t-1][kn]=i[kn]);let s=$c(n,fn+e);uw(i[Ke],i);let o=s[mi];o!==null&&o.detachView(s[Ke]),i[$t]=null,i[kn]=null,i[Ue]&=-129}return i}function w_(n,e){if(!(e[Ue]&256)){let t=e[Zn];t.destroyNode&&vl(n,e,t,3,null,null),fw(e)}}function Sf(n,e){if(e[Ue]&256)return;let t=ut(null);try{e[Ue]&=-129,e[Ue]|=256,e[dn]&&ef(e[dn]),mw(n,e),pw(n,e),e[Ke].type===1&&e[Zn].destroy();let i=e[_r];if(i!==null&&_i(e[$t])){i!==e[$t]&&Wh(i,e);let r=e[mi];r!==null&&r.detachView(n)}jf(e)}finally{ut(t)}}function pw(n,e){let t=n.cleanup,i=e[Yc];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Yc]=null);let r=e[Hi];if(r!==null){e[Hi]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Zc];if(s!==null){e[Zc]=null;for(let o of s)o.destroy()}}function mw(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Vo)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Xn(4,a,c);try{c.call(a)}finally{Xn(5,a,c)}}else{Xn(4,r,s);try{s.call(r)}finally{Xn(5,r,s)}}}}}function gw(n,e,t){return vw(n,e.parent,t)}function vw(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[yi];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===Qn.None||s===Qn.Emulated)return null}return ei(i,t)}}function il(n,e,t,i,r){n.insertBefore(e,t,i,r)}function C_(n,e,t){n.appendChild(e,t)}function Vv(n,e,t,i,r){i!==null?il(n,e,t,i,r):C_(n,e,t)}function T_(n,e){return n.parentNode(e)}function yw(n,e){return n.nextSibling(e)}function _w(n,e,t){return Mw(n,e,t)}function xw(n,e,t){return n.type&40?ei(n,t):null}var Mw=xw,zv;function Sw(n,e,t,i){let r=gw(n,i,e),s=e[Zn],o=i.parent||e[Bn],a=_w(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Vv(s,r,t[c],a,!1);else Vv(s,r,t,a,!1);zv!==void 0&&zv(s,i,e,t,r)}function Lo(n,e){if(e!==null){let t=e.type;if(t&3)return ei(e,n);if(t&4)return Yf(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Lo(n,i);{let r=n[e.index];return _i(r)?Yf(-1,r):gi(r)}}else{if(t&128)return Lo(n,e.next);if(t&32)return Gh(e,n)()||gi(n[e.index]);{let i=D_(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Mr(n[Jn]);return Lo(r,i)}else return Lo(n,e.next)}}}return null}function D_(n,e){if(e!==null){let i=n[Jn][Bn],r=e.projection;return i.projection[r]}return null}function Yf(n,e){let t=fn+n+1;if(t<e.length){let i=e[t],r=i[Ke].firstChild;if(r!==null)return Lo(i,r)}return e[xr]}function Ew(n,e,t){n.removeChild(null,e,t)}function jh(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Ls(gi(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)jh(n,e,t.child,i,r,s,!1),bs(e,n,r,a,s);else if(c&32){let l=Gh(t,i),u;for(;u=l();)bs(e,n,r,u,s);bs(e,n,r,a,s)}else c&16?bw(n,e,i,t,r,s):bs(e,n,r,a,s);t=o?t.projectionNext:t.next}}function vl(n,e,t,i,r,s){jh(t,i,n.firstChild,e,r,s,!1)}function bw(n,e,t,i,r,s){let o=t[Jn],c=o[Bn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];bs(e,n,r,u,s)}else{let l=c,u=o[$t];d_(i)&&(l.flags|=128),jh(n,e,l,u,r,s,!0)}}function ww(n,e,t,i,r){let s=t[xr],o=gi(t);s!==o&&bs(e,n,i,s,r);for(let a=fn;a<t.length;a++){let c=t[a];vl(c[Ke],c,n,e,i,s)}}function Cw(n,e,t){n.setAttribute(e,"style",t)}function A_(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function I_(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Ff(n,e,i),r!==null&&A_(n,e,r),s!==null&&Cw(n,e,s)}function Tw(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var R_="ng-template";function Dw(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&Tw(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if($h(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function $h(n){return n.type===4&&n.value!==R_}function Aw(n,e,t){let i=n.type===4&&!t?R_:n.value;return e===i}function Iw(n,e,t){let i=4,r=n.attrs,s=r!==null?Pw(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Un(i)&&!Un(c))return!1;if(o&&Un(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Aw(n,c,t)||c===""&&e.length===1){if(Un(i))return!1;o=!0}}else if(i&8){if(r===null||!Dw(n,r,c,t)){if(Un(i))return!1;o=!0}}else{let l=e[++a],u=Rw(c,r,$h(n),t);if(u===-1){if(Un(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Un(i))return!1;o=!0}}}}return Un(i)||o}function Un(n){return(n&1)===0}function Rw(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Lw(e,n)}function Nw(n,e,t=!1){for(let i=0;i<e.length;i++)if(Iw(n,e[i],t))return!0;return!1}function Pw(n){for(let e=0;e<n.length;e++){let t=n[e];if(Cb(t))return e}return n.length}function Lw(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Hv(n,e){return n?":not("+e.trim()+")":e}function Ow(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Un(o)&&(e+=Hv(s,r),r=""),i=o,s=s||!Un(i);t++}return r!==""&&(e+=Hv(s,r)),e}function Fw(n){return n.map(Ow).join(",")}function Uw(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Un(r))break;r=s}i++}return{attrs:e,classes:t}}var N_={};function kw(n,e,t,i){if(!i)if((e[Ue]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Bc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Vc(e,s,0,t)}Sr(t)}function qo(n,e=Je.Default){let t=Kt();if(t===null)return We(n,e);let i=Vn();return t_(i,t,Cn(n),e)}function P_(){let n="invalid";throw new Error(n)}function L_(n,e,t,i,r,s){let o=ut(null);try{let a=null;r&ji.SignalBased&&(a=e[i][ls]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&ji.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):Ay(e,a,i,s)}finally{ut(o)}}function Bw(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Sr(~r);else{let s=r,o=t[++i],a=t[++i];pb(o,s);let c=e[s];a(2,c)}}}finally{Sr(-1)}}function yl(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[yi]=r,d[Ue]=i|4|128|8|64|1024,(l!==null||n&&n[Ue]&2048)&&(d[Ue]|=2048),Py(d),d[$t]=d[Wo]=n,d[pi]=t,d[Wi]=o||n&&n[Wi],d[Zn]=a||n&&n[Zn],d[As]=c||n&&n[As]||null,d[Bn]=s,d[hl]=Jb(),d[Xc]=u,d[wy]=l,d[Jn]=e.type==2?n[Jn]:d,d}function O_(n,e,t,i,r){let s=n.data[e];if(s===null)s=Vw(n,e,t,i,r),hb()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=ub();s.injectorIndex=o===null?-1:o.injectorIndex}return wh(s,!0),s}function Vw(n,e,t,i,r){let s=Fy(),o=Uy(),a=o?s:s&&s.parent,c=n.data[e]=Xw(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function F_(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function U_(n,e,t,i,r){let s=vb(),o=i&2;try{Sr(-1),o&&e.length>Is&&kw(n,e,Is,!1),Xn(o?2:0,r),t(i,r)}finally{Sr(s),Xn(o?3:1,r)}}function k_(n,e,t){if(Ty(e)){let i=ut(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{ut(i)}}}function zw(n,e,t){Oy()&&(Qw(n,e,t,ei(t,e)),(t.flags&64)===64&&H_(n,e,t))}function Hw(n,e,t=ei){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function B_(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=V_(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function V_(n,e,t,i,r,s,o,a,c,l,u){let d=Is+i,f=d+r,h=Gw(d,f),g=typeof l=="function"?l():l;return h[Ke]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function Gw(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:N_);return t}function Ww(n,e,t,i){let s=i.get(iw,y_)||t===Qn.ShadowDom,o=n.selectRootElement(e,s);return jw(o),o}function jw(n){$w(n)}var $w=()=>null;function qw(n,e,t,i){let r=j_(e);r.push(t),n.firstCreatePass&&$_(n).push(i,r.length-1)}function Xw(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return ab()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Gv(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=ji.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Wv(i,t,l,a,c):Wv(i,t,l,a)}return i}function Wv(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function Yw(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,h=f?f.inputs:null,g=f?f.outputs:null;c=Gv(0,d.inputs,u,c,h),l=Gv(1,d.outputs,u,l,g);let v=c!==null&&o!==null&&!$h(e)?cC(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function Zw(n,e,t,i){if(Oy()){let r=i===null?null:{"":-1},s=tC(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&z_(n,e,t,o,r,a),r&&nC(t,i,r)}t.mergedAttrs=Ah(t.mergedAttrs,t.attrs)}function z_(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Nb(Jy(t,e),n,i[l].type);rC(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=F_(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Ah(t.mergedAttrs,u.hostAttrs),sC(n,t,e,c,u),iC(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}Yw(n,t,s)}function Jw(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;Kw(o)!=a&&o.push(a),o.push(t,i,s)}}function Kw(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function Qw(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;Mh(t)&&oC(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Jy(t,e),Ls(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=Ns(e,n,a,t);if(Ls(l,e),o!==null&&aC(e,a-r,l,c,t,o),jo(c)){let u=ks(t.index,e);u[pi]=Ns(e,n,a,t)}}}function H_(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=mb();try{Sr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Of(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&eC(c,l)}}finally{Sr(-1),Of(o)}}function eC(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function tC(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(Nw(e,o.selectors,!1))if(i||(i=[]),jo(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;Zf(n,e,c)}else i.unshift(o),Zf(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function Zf(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function nC(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Le(-301,!1);i.push(e[r],s)}}}function iC(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;jo(e)&&(t[""]=n)}}function rC(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function sC(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Ts(r.type,!0)),o=new Vo(s,jo(r),qo);n.blueprint[i]=o,t[i]=o,Jw(n,e,i,F_(n,t,r.hostVars,N_),r)}function G_(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function oC(n,e,t){let i=ei(e,n),r=B_(t),s=n[Wi].rendererFactory,o=qh(n,yl(n,r,null,G_(t),i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=o}function aC(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];L_(i,t,c,l,u,d)}}function cC(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function lC(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function W_(n,e){let t=n.contentQueries;if(t!==null){let i=ut(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Ch(s),a.contentQueries(2,e[o],o)}}}finally{ut(i)}}}function qh(n,e){return n[Bo]?n[bv][kn]=e:n[Bo]=e,n[bv]=e,e}function Jf(n,e,t){Ch(0);let i=ut(null);try{e(n,t)}finally{ut(i)}}function j_(n){return n[Yc]??=[]}function $_(n){return n.cleanup??=[]}function q_(n,e){let t=n[As],i=t?t.get(vi,null):null;i&&i.handleError(e)}function X_(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];L_(u,l,i,a,c,r)}}function uC(n,e){let t=ks(e,n),i=t[Ke];dC(i,t);let r=t[yi];r!==null&&t[Xc]===null&&(t[Xc]=Hh(r,t[As])),Xh(i,t,t[pi])}function dC(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Xh(n,e,t){Th(e);try{let i=n.viewQuery;i!==null&&Jf(1,i,t);let r=n.template;r!==null&&U_(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[mi]?.finishViewCreation(n),n.staticContentQueries&&W_(n,e),n.staticViewQueries&&Jf(2,n.viewQuery,t);let s=n.components;s!==null&&fC(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ue]&=-5,Dh()}}function fC(n,e){for(let t=0;t<e.length;t++)uC(n,e[t])}function hC(n,e,t,i){let r=ut(null);try{let s=e.tView,a=n[Ue]&4096?4096:16,c=yl(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[_r]=l;let u=n[mi];return u!==null&&(c[mi]=u.createEmbeddedView(s)),Xh(s,c,t),c}finally{ut(r)}}function jv(n,e){return!e||e.firstChild===null||d_(n)}function pC(n,e,t,i=!0){let r=e[Ke];if(hw(r,e,n,t),i){let o=Yf(t,n),a=e[Zn],c=T_(a,n[xr]);c!==null&&dw(r,n[Bn],a,e,c,o)}let s=e[Xc];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function rl(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(gi(s)),_i(s)&&mC(s,i);let o=t.type;if(o&8)rl(n,e,t.child,i);else if(o&32){let a=Gh(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=D_(e,t);if(Array.isArray(a))i.push(...a);else{let c=Mr(e[Jn]);rl(c[Ke],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function mC(n,e){for(let t=fn;t<n.length;t++){let i=n[t],r=i[Ke].firstChild;r!==null&&rl(i[Ke],i,r,e)}n[xr]!==n[yi]&&e.push(n[xr])}var Y_=[];function gC(n){return n[dn]??vC(n)}function vC(n){let e=Y_.pop()??Object.create(_C);return e.lView=n,e}function yC(n){n.lView[dn]!==n&&(n.lView=null,Y_.push(n))}var _C=Mt(xe({},pc),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{ml(n.lView)},consumerOnSignalRead(){this.lView[dn]=this}});function xC(n){let e=n[dn]??Object.create(MC);return e.lView=n,e}var MC=Mt(xe({},pc),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{let e=Mr(n.lView);for(;e&&!Z_(e[Ke]);)e=Mr(e);e&&bh(e)},consumerOnSignalRead(){this.lView[dn]=this}});function Z_(n){return n.type!==2}function J_(n){if(n[Zc]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Zc])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Ue]&8192)}}var SC=100;function K_(n,e=!0,t=0){let r=n[Wi].rendererFactory,s=!1;s||r.begin?.();try{EC(n,t)}catch(o){throw e&&q_(n,o),o}finally{s||r.end?.()}}function EC(n,e){let t=ky();try{Tv(!0),Kf(n,e);let i=0;for(;pl(n);){if(i===SC)throw new Le(103,!1);i++,Kf(n,1)}}finally{Tv(t)}}function bC(n,e,t,i){let r=e[Ue];if((r&256)===256)return;let s=!1,o=!1;Th(e);let a=!0,c=null,l=null;s||(Z_(n)?(l=gC(e),c=Kd(l)):Ng()===null?(a=!1,l=xC(e),c=Kd(l)):e[dn]&&(ef(e[dn]),e[dn]=null));try{Py(e),fb(n.bindingStartIndex),t!==null&&U_(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&Bc(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Vc(e,h,0,null),_f(e,0)}if(o||wC(e),J_(e),Q_(e,0),n.contentQueries!==null&&W_(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&Bc(e,h)}else{let h=n.contentHooks;h!==null&&Vc(e,h,1),_f(e,1)}Bw(n,e);let d=n.components;d!==null&&t0(e,d,0);let f=n.viewQuery;if(f!==null&&Jf(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&Bc(e,h)}else{let h=n.viewHooks;h!==null&&Vc(e,h,2),_f(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[yf]){for(let h of e[yf])h();e[yf]=null}s||(e[Ue]&=-73)}catch(u){throw s||ml(e),u}finally{l!==null&&(Fg(l,c),a&&yC(l)),Dh()}}function Q_(n,e){for(let t=p_(n);t!==null;t=m_(t))for(let i=fn;i<t.length;i++){let r=t[i];e0(r,e)}}function wC(n){for(let e=p_(n);e!==null;e=m_(e)){if(!(e[Ue]&Kc.HasTransplantedViews))continue;let t=e[Rs];for(let i=0;i<t.length;i++){let r=t[i];bh(r)}}}function CC(n,e,t){let i=ks(e,n);e0(i,t)}function e0(n,e){Eh(n)&&Kf(n,e)}function Kf(n,e){let i=n[Ke],r=n[Ue],s=n[dn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Qd(s)),o||=!1,s&&(s.dirty=!1),n[Ue]&=-9217,o)bC(i,n,i.template,n[pi]);else if(r&8192){J_(n),Q_(n,1);let a=i.components;a!==null&&t0(n,a,1)}}function t0(n,e,t){for(let i=0;i<e.length;i++)CC(n,e[i],t)}function Yh(n,e){let t=ky()?64:1088;for(n[Wi].changeDetectionScheduler?.notify(e);n;){n[Ue]|=t;let i=Mr(n);if(Rf(n)&&!i)return n;n=i}return null}var Er=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[Ke];return rl(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[pi]}get dirty(){return!!(this._lView[Ue]&9280)||!!this._lView[dn]?.dirty}set context(e){this._lView[pi]=e}get destroyed(){return(this._lView[Ue]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[$t];if(_i(e)){let t=e[Jc],i=t?t.indexOf(this):-1;i>-1&&(Xf(e,i),$c(t,i))}this._attachedToViewContainer=!1}w_(this._lView[Ke],this._lView)}onDestroy(e){Ly(this._lView,e)}markForCheck(){Yh(this._cdRefInjectingView||this._lView,4)}markForRefresh(){bh(this._cdRefInjectingView||this._lView)}detach(){this._lView[Ue]&=-129}reattach(){Pf(this._lView),this._lView[Ue]|=128}detectChanges(){this._lView[Ue]|=1024,K_(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Le(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Rf(this._lView),t=this._lView[_r];t!==null&&!e&&Wh(t,this._lView),E_(this._lView[Ke],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Le(902,!1);this._appRef=e;let t=Rf(this._lView),i=this._lView[_r];i!==null&&!t&&b_(i,this._lView),Pf(this._lView)}},zo=(()=>{class n{static __NG_ELEMENT_ID__=AC}return n})(),TC=zo,DC=class extends TC{_declarationLView;_declarationTContainer;elementRef;constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=hC(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new Er(r)}};function AC(){return Zh(Vn(),Kt())}function Zh(n,e){return n.type&4?new DC(e,n,Vs(n,e)):null}var SB=new RegExp(`^(\\d+)*(${nw}|${tw})*(.*)`);var IC=()=>null;function $v(n,e){return IC(n,e)}var Qf=class{},sl=class{},eh=class{resolveComponentFactory(e){throw Error(`No component factory found for ${un(e)}.`)}},Os=class{static NULL=new eh},Fs=class{};var RC=(()=>{class n{static \u0275prov=Ne({token:n,providedIn:"root",factory:()=>null})}return n})();function th(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=yv(r,a);else if(s==2){let c=a,l=e[++o];i=yv(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var ol=class extends Os{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Gi(e);return new Us(t,this.ngModule)}};function qv(n,e){let t=[];for(let i in n){if(!n.hasOwnProperty(i))continue;let r=n[i];if(r===void 0)continue;let s=Array.isArray(r),o=s?r[0]:r,a=s?r[1]:ji.None;e?t.push({propName:o,templateName:i,isSignal:(a&ji.SignalBased)!==0}):t.push({propName:o,templateName:i})}return t}function NC(n){let e=n.toLowerCase();return e==="svg"?KE:e==="math"?QE:null}var Us=class extends sl{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;get inputs(){let e=this.componentDef,t=e.inputTransforms,i=qv(e.inputs,!0);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return qv(this.componentDef.outputs,!1)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Fw(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=ut(null);try{r=r||this.ngModule;let o=r instanceof hn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new Uf(e,o):e,c=a.get(Fs,null);if(c===null)throw new Le(407,!1);let l=a.get(RC,null),u=a.get(Ps,null),d={rendererFactory:c,sanitizer:l,changeDetectionScheduler:u},f=c.createRenderer(null,this.componentDef),h=this.componentDef.selectors[0][0]||"div",g=i?Ww(f,i,this.componentDef.encapsulation,a):S_(f,h,NC(h)),v=512;this.componentDef.signals?v|=4096:this.componentDef.onPush||(v|=16);let m=null;g!==null&&(m=Hh(g,a,!0));let p=V_(0,null,null,1,0,null,null,null,null,null,null),C=yl(null,p,null,v,null,null,d,f,a,null,m);Th(C);let S,M,I=null;try{let D=this.componentDef,T,R=null;D.findHostDirectiveDefs?(T=[],R=new Map,D.findHostDirectiveDefs(D,T,R),T.push(D)):T=[D];let b=PC(C,g);I=LC(b,g,D,T,C,d,f),M=eb(p,Is),g&&UC(f,D,g,i),t!==void 0&&kC(M,this.ngContentSelectors,t),S=FC(I,D,T,R,C,[BC]),Xh(p,C,null)}catch(D){throw I!==null&&jf(I),jf(C),D}finally{Dh()}return new nh(this.componentType,S,Vs(M,C),C,M)}finally{ut(s)}}},nh=class extends Qf{location;_rootLView;_tNode;instance;hostView;changeDetectorRef;componentType;previousInputValues=null;constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.instance=t,this.hostView=this.changeDetectorRef=new Er(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;X_(s[Ke],s,r,e,t),this.previousInputValues.set(e,t);let o=ks(this._tNode.index,s);Yh(o,1)}}get injector(){return new yr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function PC(n,e){let t=n[Ke],i=Is;return n[i]=e,O_(t,i,2,"#host",null)}function LC(n,e,t,i,r,s,o){let a=r[Ke];OC(i,n,e,o);let c=null;e!==null&&(c=Hh(e,r[As]));let l=s.rendererFactory.createRenderer(e,t),u=yl(r,B_(t),null,G_(t),r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&Zf(a,n,i.length-1),qh(r,u),r[n.index]=u}function OC(n,e,t,i){for(let r of n)e.mergedAttrs=Ah(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(th(e,e.mergedAttrs,!0),t!==null&&I_(i,t,e))}function FC(n,e,t,i,r,s){let o=Vn(),a=r[Ke],c=ei(o,r);z_(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,f=Ns(r,a,d,o);Ls(f,r)}H_(a,r,o),c&&Ls(c,r);let l=Ns(r,a,o.directiveStart+o.componentOffset,o);if(n[pi]=r[pi]=l,s!==null)for(let u of s)u(l,e);return k_(a,o,r),l}function UC(n,e,t,i){if(i)Ff(n,t,["ng-version","19.0.4"]);else{let{attrs:r,classes:s}=Uw(e.selectors[0]);r&&Ff(n,t,r),s&&s.length>0&&A_(n,t,s.join(" "))}}function kC(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}function BC(){let n=Vn();$y(Kt()[Ke],n)}var zs=(()=>{class n{static __NG_ELEMENT_ID__=VC}return n})();function VC(){let n=Vn();return i0(n,Kt())}var zC=zs,n0=class extends zC{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Vs(this._hostTNode,this._hostLView)}get injector(){return new yr(this._hostTNode,this._hostLView)}get parentInjector(){let e=Ih(this._hostTNode,this._hostLView);if(Xy(e)){let t=el(e,this._hostLView),i=Qc(e),r=t[Ke].data[i+8];return new yr(r,t)}else return new yr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Xv(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-fn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=$v(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,jv(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!XE(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new Us(Gi(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(o?l:this.parentInjector).get(hn,null);v&&(s=v)}let u=Gi(c.componentType??{}),d=$v(this._lContainer,u?.id??null),f=d?.firstChild??null,h=c.create(l,r,f,s);return this.insertImpl(h.hostView,a,jv(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(nb(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[$t],l=new n0(c,c[Bn],c[$t]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return pC(o,r,s,i),e.attachToViewContainerRef(),py(Ef(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Xv(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Xf(this._lContainer,t);i&&($c(Ef(this._lContainer),t),w_(i[Ke],i))}detach(e){let t=this._adjustIndex(e,-1),i=Xf(this._lContainer,t);return i&&$c(Ef(this._lContainer),t)!=null?new Er(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Xv(n){return n[Jc]}function Ef(n){return n[Jc]||(n[Jc]=[])}function i0(n,e){let t,i=e[n.index];return _i(i)?t=i:(t=lC(i,e,null,n),e[n.index]=t,qh(e,t)),GC(t,e,n,i),new n0(t,n,e)}function HC(n,e){let t=n[Zn],i=t.createComment(""),r=ei(e,n),s=T_(t,r);return il(t,s,i,yw(t,r),!1),i}var GC=WC;function WC(n,e,t,i){if(n[xr])return;let r;t.type&8?r=gi(i):r=HC(e,t),n[xr]=r}var ih=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},rh=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Jh(e,t).matches!==null&&this.queries[t].setDirty()}},sh=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=KC(e):this.predicate=e}},oh=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},ah=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,jC(t,s)),this.matchTNodeWithReadOption(e,t,zc(t,e,s,!1,!1))}else i===zo?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,zc(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===br||r===zs||r===zo&&t.type&4)this.addMatch(t.index,-2);else{let s=zc(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function jC(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function $C(n,e){return n.type&11?Vs(n,e):n.type&4?Zh(n,e):null}function qC(n,e,t,i){return t===-1?$C(e,n):t===-2?XC(n,e,i):Ns(n,n[Ke],t,e)}function XC(n,e,t){if(t===br)return Vs(e,n);if(t===zo)return Zh(e,n);if(t===zs)return i0(e,n)}function r0(n,e,t,i){let r=e[mi].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(qC(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function ch(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=r0(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=fn;d<u.length;d++){let f=u[d];f[_r]===f[$t]&&ch(f[Ke],f,l,i)}if(u[Rs]!==null){let d=u[Rs];for(let f=0;f<d.length;f++){let h=d[f];ch(h[Ke],h,l,i)}}}}}return i}function YC(n,e){return n[mi].queries[e].queryList}function ZC(n,e,t){let i=new Wf((t&4)===4);return qw(n,e,i,i.destroy),(e[mi]??=new rh).queries.push(new ih(i))-1}function JC(n,e,t){let i=$o();return i.firstCreatePass&&(QC(i,new sh(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),ZC(i,Kt(),e)}function KC(n){return n.split(",").map(e=>e.trim())}function QC(n,e,t){n.queries===null&&(n.queries=new oh),n.queries.track(new ah(e,t))}function Jh(n,e){return n.queries.getByIndex(e)}function eT(n,e){let t=n[Ke],i=Jh(t,e);return i.crossesNgTemplate?ch(t,n,e,[]):r0(t,n,i,e)}var $i=class{},Ho=class{};var lh=class extends $i{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new ol(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=vy(e);this._bootstrapComponents=M_(s.bootstrap),this._r3Injector=r_(e,t,[{provide:$i,useValue:this},{provide:Os,useValue:this.componentFactoryResolver},...i],un(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},uh=class extends Ho{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new lh(this.moduleType,e,[])}};var al=class extends $i{injector;componentFactoryResolver=new ol(this);instance=null;constructor(e){super();let t=new ko([...e.providers,{provide:$i,useValue:this},{provide:Os,useValue:this.componentFactoryResolver}],e.parent||xh(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function _l(n,e,t=null){return new al({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var tT=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=My(!1,t.type),r=i.length>0?_l([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Ne({token:n,providedIn:"environment",factory:()=>new n(We(hn))})}return n})();function xl(n){return Go(()=>{let e=s0(n),t=Mt(xe({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===f_.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(tT).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Qn.Emulated,styles:n.styles||qn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Vh("NgStandalone"),o0(t);let i=n.dependencies;return t.directiveDefs=Zv(i,!1),t.pipeDefs=Zv(i,!0),t.id=rT(t),t})}function nT(n){return Gi(n)||yy(n)}function iT(n){return n!==null}function Ml(n){return Go(()=>({type:n.type,bootstrap:n.bootstrap||qn,declarations:n.declarations||qn,imports:n.imports||qn,exports:n.exports||qn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function Yv(n,e){if(n==null)return Uo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=ji.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==ji.None?[i,a]:i,e[s]=o):t[s]=i}return t}function Kh(n){return Go(()=>{let e=s0(n);return o0(e),e})}function s0(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||Uo,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||qn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Yv(n.inputs,e),outputs:Yv(n.outputs),debugInfo:null}}function o0(n){n.features?.forEach(e=>e(n))}function Zv(n,e){if(!n)return null;let t=e?_y:nT;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(iT)}function rT(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function sT(n){return(n.flags&32)===32}var Sl=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var a0=new Ve("");function Xo(n){return!!n&&typeof n.then=="function"}function c0(n){return!!n&&typeof n.subscribe=="function"}var El=new Ve("");var l0=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=re(El,{optional:!0})??[];injector=re(Kn);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=Tn(this.injector,r);if(Xo(s))t.push(s);else if(c0(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),oT=(()=>{class n{static \u0275prov=Ne({token:n,providedIn:"root",factory:()=>new dh})}return n})(),dh=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}},bl=new Ve("");function aT(){zg(()=>{throw new Le(600,!1)})}function cT(n){return n.isBoundToModule}var lT=10;function uT(n,e,t){try{let i=t();return Xo(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Tr=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=re(jb);afterRenderManager=re(__);zonelessEnabled=re(Ph);rootEffectScheduler=re(oT);dirtyFlags=0;deferredDirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Ht;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=re(Bs).hasPendingTasks.pipe(tt(t=>!t));constructor(){re(gl,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=re(hn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){let r=t instanceof sl;if(!this._injector.get(l0).done){let f=!r&&xy(t),h=!1;throw new Le(405,h)}let o;r?o=t:o=this._injector.get(Os).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=cT(o)?void 0:this._injector.get($i),c=i||o.selector,l=o.create(Kn.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(a0,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),Hc(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick=()=>{if(this.tracingSnapshot!==null){let i=this.tracingSnapshot;this.tracingSnapshot=null,i.run(Bh.CHANGE_DETECTION,this._tick),i.dispose();return}if(this._runningTick)throw new Le(101,!1);let t=ut(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,ut(t),this.afterTick.next()}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Fs,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let t=0;for(;this.dirtyFlags!==0&&t++<lT;)this.synchronizeOnce()}synchronizeOnce(){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)dT(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>pl(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Hc(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(bl,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Hc(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Le(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Hc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function dT(n,e,t,i){if(!t&&!pl(n))return;K_(n,e,t&&!i?0:1)}function Jv(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";X_(n,t,s[o],o,i)}function fT(n,e,t,i,r,s){let o=e.consts,a=Cv(o,r),c=O_(e,n,2,i,a);return Zw(e,t,c,Cv(o,s)),c.attrs!==null&&th(c,c.attrs,!1),c.mergedAttrs!==null&&th(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function u0(n,e,t,i){let r=Kt(),s=$o(),o=Is+n,a=r[Zn],c=s.firstCreatePass?fT(o,s,r,e,t,i):s.data[o],l=hT(s,r,c,a,e,n);r[o]=l;let u=Dy(c);return wh(c,!0),I_(a,l,c),!sT(c)&&_b()&&Sw(s,r,l,c),rb()===0&&Ls(l,r),sb(),u&&(zw(s,r,c),k_(s,c,r)),i!==null&&Hw(r,c),u0}function d0(){let n=Vn();Uy()?db():(n=n.parent,wh(n,!1));let e=n;cb(e)&&lb(),ob();let t=$o();return t.firstCreatePass&&($y(t,n),Ty(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&bb(e)&&Jv(t,e,Kt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&wb(e)&&Jv(t,e,Kt(),e.stylesWithoutHost,!1),d0}function Yo(n,e,t,i){return u0(n,e,t,i),d0(),Yo}var hT=(n,e,t,i,r,s)=>(xb(!0),S_(i,r,yb()));var cl="en-US";var pT=cl;function mT(n){typeof n=="string"&&(pT=n.toLowerCase().replace(/_/g,"-"))}var gT=(n,e,t)=>{};function wl(n,e,t,i){let r=Kt(),s=$o(),o=Vn();return yT(s,r,r[Zn],o,n,e,i),wl}function vT(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Yc],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function yT(n,e,t,i,r,s,o){let a=Dy(i),l=n.firstCreatePass&&$_(n),u=e[pi],d=j_(e),f=!0;if(i.type&3||o){let v=ei(i,e),m=o?o(v):v,p=d.length,C=o?M=>o(gi(M[i.index])):i.index,S=null;if(!o&&a&&(S=vT(n,e,r,i.index)),S!==null){let M=S.__ngLastListenerFn__||S;M.__ngNextListenerFn__=s,S.__ngLastListenerFn__=s,f=!1}else{s=Qv(i,e,u,s),gT(v,r,s);let M=t.listen(m,r,s);d.push(s,M),l&&l.push(r,C,p,p+1)}}else s=Qv(i,e,u,s);let h=i.outputs,g;if(f&&h!==null&&(g=h[r])){let v=g.length;if(v)for(let m=0;m<v;m+=2){let p=g[m],C=g[m+1],I=e[p][C].subscribe(s),D=d.length;d.push(s,I),l&&l.push(r,i.index,D,-(D+1))}}}function Kv(n,e,t,i){let r=ut(null);try{return Xn(6,e,t),t(i)!==!1}catch(s){return q_(n,s),!1}finally{Xn(7,e,t),ut(r)}}function Qv(n,e,t,i){return function r(s){if(s===Function)return i;let o=n.componentOffset>-1?ks(n.index,e):e;Yh(o,5);let a=Kv(e,t,i,s),c=r.__ngNextListenerFn__;for(;c;)a=Kv(e,t,c,s)&&a,c=c.__ngNextListenerFn__;return a}}function f0(n,e,t){JC(n,e,t)}function Qh(n){let e=Kt(),t=$o(),i=By();Ch(i+1);let r=Jh(t,i);if(n.dirty&&tb(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=eT(e,i);n.reset(s,Xb),n.notifyOnChanges()}return!0}return!1}function ep(){return YC(Kt(),By())}var fh=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Cl=(()=>{class n{compileModuleSync(t){return new uh(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=vy(t),s=M_(r.declarations).reduce((o,a)=>{let c=Gi(a);return c&&o.push(new Us(c)),o},[]);return new fh(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _T=(()=>{class n{zone=re(At);changeDetectionScheduler=re(Ps);applicationRef=re(Tr);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xT({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new At(Mt(xe({},MT()),{scheduleInRootZone:t})),[{provide:At,useFactory:n},{provide:Ds,multi:!0,useFactory:()=>{let i=re(_T,{optional:!0});return()=>i.initialize()}},{provide:Ds,multi:!0,useFactory:()=>{let i=re(ST);return()=>{i.initialize()}}},e===!0?{provide:o_,useValue:!0}:[],{provide:a_,useValue:t??s_}]}function MT(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var ST=(()=>{class n{subscription=new Nt;initialized=!1;zone=re(At);pendingTasks=re(Bs);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{At.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{At.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ET=(()=>{class n{appRef=re(Tr);taskService=re(Bs);ngZone=re(At);zonelessEnabled=re(Ph);tracing=re(gl,{optional:!0});disableScheduling=re(o_,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Nt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(nl):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(re(a_,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Gf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 8:{this.appRef.deferredDirtyFlags|=8;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 13:{this.appRef.dirtyFlags|=16,i=!0;break}case 14:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{i=!0;break}case 10:case 9:case 7:case 11:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?Lv:c_;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(nl+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Lv(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function bT(){return typeof $localize<"u"&&$localize.locale||cl}var tp=new Ve("",{providedIn:"root",factory:()=>re(tp,Je.Optional|Je.SkipSelf)||bT()});var hh=new Ve("");function Uc(n){return!n.moduleRef}function wT(n){let e=Uc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(At);return t.run(()=>{Uc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(vi,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),Uc(n)){let s=()=>e.destroy(),o=n.platformInjector.get(hh);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(hh);o.add(s),n.moduleRef.onDestroy(()=>{Hc(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return uT(i,t,()=>{let s=e.get(l0);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(tp,cl);if(mT(o||cl),Uc(n)){let a=e.get(Tr);return n.rootComponent!==void 0&&a.bootstrap(n.rootComponent),a}else return CT(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function CT(n,e){let t=n.injector.get(Tr);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Le(-403,!1);e.push(n)}var Gc=null;function TT(n=[],e){return Kn.create({name:e,providers:[{provide:fl,useValue:"platform"},{provide:hh,useValue:new Set([()=>Gc=null])},...n]})}function DT(n=[]){if(Gc)return Gc;let e=TT(n);return Gc=e,aT(),AT(e),e}function AT(n){let e=n.get(Uh,null);Tn(n,()=>{e?.forEach(t=>t())})}var Dr=(()=>{class n{static __NG_ELEMENT_ID__=IT}return n})();function IT(n){return RT(Vn(),Kt(),(n&16)===16)}function RT(n,e,t){if(Mh(n)&&!t){let i=ks(n.index,e);return new Er(i,i)}else if(n.type&175){let i=e[Jn];return new Er(i,e)}return null}function h0(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=DT(i),s=[xT({}),{provide:Ps,useExisting:ET},...t||[]],o=new al({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return wT({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}}var ey=class{[ls];constructor(e){this[ls]=e}destroy(){this[ls].destroy()}};function p0(n){let e=Gi(n);if(!e)return null;let t=new Us(e);return{get selector(){return t.selector},get type(){return t.componentType},get inputs(){return t.inputs},get outputs(){return t.outputs},get ngContentSelectors(){return t.ngContentSelectors},get isStandalone(){return e.standalone},get isSignal(){return e.signals}}}var _0=null;function Hs(){return _0}function x0(n){_0??=n}var Dl=class{};var rn=new Ve(""),rp=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:()=>re(FT),providedIn:"platform"})}return n})(),M0=new Ve(""),FT=(()=>{class n extends rp{_location;_history;_doc=re(rn);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Hs().getBaseHref(this._doc)}onPopState(t){let i=Hs().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Hs().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function sp(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function m0(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function xi(n){return n&&n[0]!=="?"?"?"+n:n}var Ar=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:()=>re(op),providedIn:"root"})}return n})(),S0=new Ve(""),op=(()=>{class n extends Ar{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??re(rn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return sp(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+xi(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+xi(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+xi(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(We(rp),We(S0,8))};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),E0=(()=>{class n extends Ar{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(t){let i=sp(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+xi(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+xi(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(We(rp),We(S0,8))};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})(),Gs=(()=>{class n{_subject=new Ht;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=BT(m0(g0(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+xi(i))}normalize(t){return n.stripTrailingSlash(kT(this._basePath,g0(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+xi(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+xi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=xi;static joinWithSlash=sp;static stripTrailingSlash=m0;static \u0275fac=function(i){return new(i||n)(We(Ar))};static \u0275prov=Ne({token:n,factory:()=>UT(),providedIn:"root"})}return n})();function UT(){return new Gs(We(Ar))}function kT(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function g0(n){return n.replace(/\/index.html$/,"")}function BT(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function b0(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var ap="browser",VT="server";function zT(n){return n===ap}function cp(n){return n===VT}var w0=(()=>{class n{static \u0275prov=Ne({token:n,providedIn:"root",factory:()=>zT(re(wr))?new np(re(rn),window):new ip})}return n})(),np=class{document;window;offset=()=>[0,0];constructor(e,t){this.document=e,this.window=t}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let t=HT(this.document,e);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let t=e.getBoundingClientRect(),i=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(i-s[0],r-s[1])}};function HT(n,e){let t=n.getElementById(e)||n.getElementsByName(e)[0];if(t)return t;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}r=i.nextNode()}}return null}var ip=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},Al=class{};var up=class extends Dl{supportsDOMEvents=!0},dp=class n extends up{static makeCurrent(){x0(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=GT();return t==null?null:WT(t)}resetBaseElement(){Zo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return b0(document.cookie,e)}},Zo=null;function GT(){return Zo=Zo||document.querySelector("base"),Zo?Zo.getAttribute("href"):null}function WT(n){return new URL(n,document.baseURI).pathname}var jT=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})(),fp=new Ve(""),R0=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Le(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(We(fp),We(At))};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})(),Rl=class{_doc;constructor(e){this._doc=e}manager},Il="ng-app-id";function C0(n){for(let e of n)e.remove()}function T0(n,e){let t=e.createElement("style");return t.textContent=n,t}function $T(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Il}="${e}"],link[${Il}="${e}"]`);if(r)for(let s of r)s.removeAttribute(Il),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function hp(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var N0=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=cp(s),$T(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,T0);i?.forEach(r=>this.addUsage(r,this.external,hp))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(C0(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])C0(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,T0(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,hp(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(Il,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(We(rn),We(Fh),We(kh,8),We(wr))};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})(),lp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},mp=/%COMP%/g,P0="%COMP%",qT=`_nghost-${P0}`,XT=`_ngcontent-${P0}`,YT=!0,ZT=new Ve("",{providedIn:"root",factory:()=>YT});function JT(n){return XT.replace(mp,n)}function KT(n){return qT.replace(mp,n)}function L0(n,e){return e.map(t=>t.replace(mp,n))}var D0=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.platformIsServer=cp(a),this.defaultRenderer=new Jo(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===Qn.ShadowDom&&(i=Mt(xe({},i),{encapsulation:Qn.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Nl?r.applyToHost(t):r instanceof Ko&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(i.encapsulation){case Qn.Emulated:s=new Nl(c,l,i,this.appId,u,o,a,d);break;case Qn.ShadowDom:return new pp(c,l,t,i,o,a,this.nonce,d);default:s=new Ko(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(i){return new(i||n)(We(R0),We(N0),We(Fh),We(ZT),We(rn),We(wr),We(At),We(kh))};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})(),Jo=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(lp[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(A0(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(A0(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Le(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=lp[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=lp[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Cr.DashCase|Cr.Important)?e.style.setProperty(t,i,r&Cr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Cr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Hs().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function A0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var pp=class extends Jo{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=L0(r.id,r.styles);for(let d of l){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=d,this.shadowRoot.appendChild(f)}let u=r.getExternalStyles?.();if(u)for(let d of u){let f=hp(d,s);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Ko=class extends Jo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?L0(c,i.styles):i.styles,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Nl=class extends Ko{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=JT(l),this.hostAttr=KT(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},QT=(()=>{class n extends Rl{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static \u0275fac=function(i){return new(i||n)(We(rn))};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})(),I0=["alt","control","meta","shift"],eD={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},tD={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},nD=(()=>{class n extends Rl{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Hs().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),I0.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=eD[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),I0.forEach(o=>{if(o!==r){let a=tD[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(We(rn))};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})();function O0(n,e){return h0(xe({rootComponent:n},iD(e)))}function iD(n){return{appProviders:[...cD,...n?.providers??[]],platformProviders:aD}}function rD(){dp.makeCurrent()}function sD(){return new vi}function oD(){return v_(document),document}var aD=[{provide:wr,useValue:ap},{provide:Uh,useValue:rD,multi:!0},{provide:rn,useFactory:oD,deps:[]}];var cD=[{provide:fl,useValue:"root"},{provide:vi,useFactory:sD,deps:[]},{provide:fp,useClass:QT,multi:!0,deps:[rn,At,wr]},{provide:fp,useClass:nD,multi:!0,deps:[rn]},D0,N0,R0,{provide:Fs,useExisting:D0},{provide:Al,useClass:jT,deps:[]},[]];var F0=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(We(rn))};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Xe="primary",pa=Symbol("RouteTitle"),xp=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Ys(n){return new xp(n)}function uD(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function dD(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ti(n[t],e[t]))return!1;return!0}function ti(n,e){let t=n?Mp(n):void 0,i=e?Mp(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!q0(n[r],e[r]))return!1;return!0}function Mp(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function q0(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function X0(n){return n.length>0?n[n.length-1]:null}function Yi(n){return df(n)?n:Xo(n)?Dt(Promise.resolve(n)):Fe(n)}var fD={exact:Z0,subset:J0},Y0={exact:hD,subset:pD,ignored:()=>!0};function U0(n,e,t){return fD[t.paths](n.root,e.root,t.matrixParams)&&Y0[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function hD(n,e){return ti(n,e)}function Z0(n,e,t){if(!Rr(n.segments,e.segments)||!Ol(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Z0(n.children[i],e.children[i],t))return!1;return!0}function pD(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>q0(n[t],e[t]))}function J0(n,e,t){return K0(n,e,e.segments,t)}function K0(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Rr(r,t)||e.hasChildren()||!Ol(r,t,i))}else if(n.segments.length===t.length){if(!Rr(n.segments,t)||!Ol(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!J0(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Rr(n.segments,r)||!Ol(n.segments,r,i)||!n.children[Xe]?!1:K0(n.children[Xe],e,s,i)}}function Ol(n,e,t){return e.every((i,r)=>Y0[t](n[r].parameters,i.parameters))}var Si=class{root;queryParams;fragment;_queryParamMap;constructor(e=new pt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Ys(this.queryParams),this._queryParamMap}toString(){return vD.serialize(this)}},pt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Fl(this)}},Ir=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Ys(this.parameters),this._parameterMap}toString(){return ex(this)}};function mD(n,e){return Rr(n,e)&&n.every((t,i)=>ti(t.parameters,e[i].parameters))}function Rr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function gD(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Xe&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Xe&&(t=t.concat(e(r,i)))}),t}var ma=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:()=>new Zs,providedIn:"root"})}return n})(),Zs=class{parse(e){let t=new Ep(e);return new Si(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Qo(e.root,!0)}`,i=xD(e.queryParams),r=typeof e.fragment=="string"?`#${yD(e.fragment)}`:"";return`${t}${i}${r}`}},vD=new Zs;function Fl(n){return n.segments.map(e=>ex(e)).join("/")}function Qo(n,e){if(!n.hasChildren())return Fl(n);if(e){let t=n.children[Xe]?Qo(n.children[Xe],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Xe&&i.push(`${r}:${Qo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=gD(n,(i,r)=>r===Xe?[Qo(n.children[Xe],!1)]:[`${r}:${Qo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Xe]!=null?`${Fl(n)}/${t[0]}`:`${Fl(n)}/(${t.join("//")})`}}function Q0(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Pl(n){return Q0(n).replace(/%3B/gi,";")}function yD(n){return encodeURI(n)}function Sp(n){return Q0(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ul(n){return decodeURIComponent(n)}function k0(n){return Ul(n.replace(/\+/g,"%20"))}function ex(n){return`${Sp(n.path)}${_D(n.parameters)}`}function _D(n){return Object.entries(n).map(([e,t])=>`;${Sp(e)}=${Sp(t)}`).join("")}function xD(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Pl(t)}=${Pl(r)}`).join("&"):`${Pl(t)}=${Pl(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var MD=/^[^\/()?;#]+/;function gp(n){let e=n.match(MD);return e?e[0]:""}var SD=/^[^\/()?;=#]+/;function ED(n){let e=n.match(SD);return e?e[0]:""}var bD=/^[^=?&#]+/;function wD(n){let e=n.match(bD);return e?e[0]:""}var CD=/^[^&#]+/;function TD(n){let e=n.match(CD);return e?e[0]:""}var Ep=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new pt([],{}):new pt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Xe]=new pt(e,t)),i}parseSegment(){let e=gp(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Le(4009,!1);return this.capture(e),new Ir(Ul(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=ED(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=gp(this.remaining);r&&(i=r,this.capture(i))}e[Ul(t)]=Ul(i)}parseQueryParam(e){let t=wD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=TD(this.remaining);o&&(i=o,this.capture(i))}let r=k0(t),s=k0(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=gp(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Le(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Xe);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Xe]:new pt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Le(4011,!1)}};function tx(n){return n.segments.length>0?new pt([],{[Xe]:n}):n}function nx(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=nx(r);if(i===Xe&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new pt(n.segments,e);return DD(t)}function DD(n){if(n.numberOfChildren===1&&n.children[Xe]){let e=n.children[Xe];return new pt(n.segments.concat(e.segments),e.children)}return n}function sa(n){return n instanceof Si}function AD(n,e,t=null,i=null){let r=ix(n);return rx(r,e,t,i)}function ix(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new pt(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=tx(i);return e??r}function rx(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return vp(r,r,r,t,i);let s=ID(e);if(s.toRoot())return vp(r,r,new pt([],{}),t,i);let o=RD(s,r,n),a=o.processChildren?na(o.segmentGroup,o.index,s.commands):ox(o.segmentGroup,o.index,s.commands);return vp(r,o.segmentGroup,a,t,i)}function kl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function oa(n){return typeof n=="object"&&n!=null&&n.outlets}function vp(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=sx(n,e,t);let a=tx(nx(o));return new Si(a,s,r)}function sx(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=sx(s,e,t)}),new pt(n.segments,i)}var Bl=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&kl(i[0]))throw new Le(4003,!1);let r=i.find(oa);if(r&&r!==X0(i))throw new Le(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ID(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Bl(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Bl(t,e,i)}var $s=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function RD(n,e,t){if(n.isAbsolute)return new $s(e,!0,0);if(!t)return new $s(e,!1,NaN);if(t.parent===null)return new $s(t,!0,0);let i=kl(n.commands[0])?0:1,r=t.segments.length-1+i;return ND(t,r,n.numberOfDoubleDots)}function ND(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Le(4005,!1);r=i.segments.length}return new $s(i,!1,r-s)}function PD(n){return oa(n[0])?n[0].outlets:{[Xe]:n}}function ox(n,e,t){if(n??=new pt([],{}),n.segments.length===0&&n.hasChildren())return na(n,e,t);let i=LD(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new pt(n.segments.slice(0,i.pathIndex),{});return s.children[Xe]=new pt(n.segments.slice(i.pathIndex),n.children),na(s,0,r)}else return i.match&&r.length===0?new pt(n.segments,{}):i.match&&!n.hasChildren()?bp(n,e,t):i.match?na(n,0,r):bp(n,e,t)}function na(n,e,t){if(t.length===0)return new pt(n.segments,{});{let i=PD(t),r={};if(Object.keys(i).some(s=>s!==Xe)&&n.children[Xe]&&n.numberOfChildren===1&&n.children[Xe].segments.length===0){let s=na(n.children[Xe],e,t);return new pt(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=ox(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new pt(n.segments,r)}}function LD(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(oa(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!V0(c,l,o))return s;i+=2}else{if(!V0(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function bp(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(oa(s)){let c=OD(s.outlets);return new pt(i,c)}if(r===0&&kl(t[0])){let c=n.segments[e];i.push(new Ir(c.path,B0(t[0]))),r++;continue}let o=oa(s)?s.outlets[Xe]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&kl(a)?(i.push(new Ir(o,B0(a))),r+=2):(i.push(new Ir(o,{})),r++)}return new pt(i,{})}function OD(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=bp(new pt([],{}),0,i))}),e}function B0(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function V0(n,e,t){return n==t.path&&ti(e,t.parameters)}var ia="imperative",Bt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Bt||{}),Dn=class{id;url;constructor(e,t){this.id=e,this.url=t}},Js=class extends Dn{type=Bt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ei=class extends Dn{urlAfterRedirects;type=Bt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},mn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(mn||{}),Vl=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Vl||{}),Mi=class extends Dn{reason;code;type=Bt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},qi=class extends Dn{reason;code;type=Bt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},aa=class extends Dn{error;target;type=Bt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},zl=class extends Dn{urlAfterRedirects;state;type=Bt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wp=class extends Dn{urlAfterRedirects;state;type=Bt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Cp=class extends Dn{urlAfterRedirects;state;shouldActivate;type=Bt.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Tp=class extends Dn{urlAfterRedirects;state;type=Bt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dp=class extends Dn{urlAfterRedirects;state;type=Bt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ap=class{route;type=Bt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ip=class{route;type=Bt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Rp=class{snapshot;type=Bt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Np=class{snapshot;type=Bt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pp=class{snapshot;type=Bt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Lp=class{snapshot;type=Bt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Hl=class{routerEvent;position;anchor;type=Bt.Scroll;constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},ca=class{},Ks=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function FD(n,e){return n.providers&&!n._injector&&(n._injector=_l(n.providers,e,`Route: ${n.path}`)),n._injector??e}function zn(n){return n.outlet||Xe}function UD(n,e){let t=n.filter(i=>zn(i)===e);return t.push(...n.filter(i=>zn(i)!==e)),t}function ga(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Op=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return ga(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new va(this.rootInjector)}},va=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new Op(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(We(hn))};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gl=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Fp(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Fp(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Up(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Up(e,this._root).map(t=>t.value)}};function Fp(n,e){if(n===e.value)return e;for(let t of e.children){let i=Fp(n,t);if(i)return i}return null}function Up(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Up(n,t);if(i.length)return i.unshift(e),i}return[]}var pn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function js(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Wl=class extends Gl{snapshot;constructor(e,t){super(e),this.snapshot=t,$p(this,e)}toString(){return this.snapshot.toString()}};function ax(n){let e=kD(n),t=new Gt([new Ir("",{})]),i=new Gt({}),r=new Gt({}),s=new Gt({}),o=new Gt(""),a=new Nr(t,i,s,o,r,Xe,n,e.root);return a.snapshot=e.root,new Wl(new pn(a,[]),e)}function kD(n){let e={},t={},i={},r="",s=new qs([],e,i,r,t,Xe,n,null,{});return new $l("",new pn(s,[]))}var Nr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(tt(l=>l[pa]))??Fe(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(tt(e=>Ys(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(tt(e=>Ys(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function jl(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:xe(xe({},e.params),n.params),data:xe(xe({},e.data),n.data),resolve:xe(xe(xe(xe({},n.data),e.data),r?.data),n._resolvedData)}:i={params:xe({},n.params),data:xe({},n.data),resolve:xe(xe({},n.data),n._resolvedData??{})},r&&lx(r)&&(i.resolve[pa]=r.title),i}var qs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[pa]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ys(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ys(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},$l=class extends Gl{url;constructor(e,t){super(t),this.url=e,$p(this,t)}toString(){return cx(this._root)}};function $p(n,e){e.value._routerState=n,e.children.forEach(t=>$p(n,t))}function cx(n){let e=n.children.length>0?` { ${n.children.map(cx).join(", ")} } `:"";return`${n.value}${e}`}function yp(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ti(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ti(e.params,t.params)||n.paramsSubject.next(t.params),dD(e.url,t.url)||n.urlSubject.next(t.url),ti(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function kp(n,e){let t=ti(n.params,e.params)&&mD(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||kp(n.parent,e.parent))}function lx(n){return typeof n.title=="string"||n.title===null}var BD=new Ve(""),qp=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Xe;activateEvents=new ln;deactivateEvents=new ln;attachEvents=new ln;detachEvents=new ln;routerOutletData=u_(void 0);parentContexts=re(va);location=re(zs);changeDetector=re(Dr);inputBinder=re(Zl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Le(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Le(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Le(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Le(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Bp(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=Kh({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Sh]})}return n})(),Bp=class n{route;childContexts;parent;outletData;__ngOutletInjector(e){return new n(this.route,this.childContexts,e,this.outletData)}constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Nr?this.route:e===va?this.childContexts:e===BD?this.outletData:this.parent.get(e,t)}},Zl=new Ve(""),z0=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:i}=t,r=Ro([i.queryParams,i.params,i.data]).pipe(bn(([s,o,a],c)=>(a=xe(xe(xe({},s),o),a),c===0?Fe(a):Promise.resolve(a)))).subscribe(s=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(t);return}let o=p0(i.component);if(!o){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of o.inputs)t.activatedComponentRef.setInput(a,s[a])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})();function VD(n,e,t){let i=la(n,e._root,t?t._root:void 0);return new Wl(i,e)}function la(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=zD(n,e,t);return new pn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>la(n,a)),o}}let i=HD(e.value),r=e.children.map(s=>la(n,s));return new pn(i,r)}}function zD(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return la(n,i,r);return la(n,i)})}function HD(n){return new Nr(new Gt(n.url),new Gt(n.params),new Gt(n.queryParams),new Gt(n.fragment),new Gt(n.data),n.outlet,n.component,n)}var ua=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},ux="ngNavigationCancelingError";function ql(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=sa(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=dx(!1,mn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function dx(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[ux]=!0,t.cancellationCode=e,t}function GD(n){return fx(n)&&sa(n.url)}function fx(n){return!!n&&n[ux]}var WD=(n,e,t,i)=>tt(r=>(new Vp(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Vp=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),yp(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=js(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=js(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=js(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=js(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Lp(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Np(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(yp(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),yp(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Xl=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Xs=class{component;route;constructor(e,t){this.component=e,this.route=t}};function jD(n,e,t){let i=n._root,r=e?e._root:null;return ea(i,r,t,[i.value])}function $D(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function eo(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!oy(n)?n:e.get(n):i}function ea(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=js(e);return n.children.forEach(o=>{qD(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>ra(a,t.getContext(o),r)),r}function qD(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=XD(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Xl(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?ea(n,e,a?a.children:null,i,r):ea(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Xs(a.outlet.component,o))}else o&&ra(e,a,r),r.canActivateChecks.push(new Xl(i)),s.component?ea(n,null,a?a.children:null,i,r):ea(n,null,t,i,r);return r}function XD(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Rr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Rr(n.url,e.url)||!ti(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!kp(n,e)||!ti(n.queryParams,e.queryParams);case"paramsChange":default:return!kp(n,e)}}function ra(n,e,t){let i=js(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?ra(o,e.children.getContext(s),t):ra(o,null,t):ra(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Xs(e.outlet.component,r)):t.canDeactivateChecks.push(new Xs(null,r)):t.canDeactivateChecks.push(new Xs(null,r))}function ya(n){return typeof n=="function"}function YD(n){return typeof n=="boolean"}function ZD(n){return n&&ya(n.canLoad)}function JD(n){return n&&ya(n.canActivate)}function KD(n){return n&&ya(n.canActivateChild)}function QD(n){return n&&ya(n.canDeactivate)}function eA(n){return n&&ya(n.canMatch)}function hx(n){return n instanceof di||n?.name==="EmptyError"}var Ll=Symbol("INITIAL_VALUE");function Qs(){return bn(n=>Ro(n.map(e=>e.pipe(fi(1),mf(Ll)))).pipe(tt(e=>{for(let t of e)if(t!==!0){if(t===Ll)return Ll;if(t===!1||tA(t))return t}return!0}),En(e=>e!==Ll),fi(1)))}function tA(n){return sa(n)||n instanceof ua}function nA(n,e){return Pt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Fe(Mt(xe({},t),{guardsResult:!0})):iA(o,i,r,n).pipe(Pt(a=>a&&YD(a)?rA(i,s,n,e):Fe(a)),tt(a=>Mt(xe({},t),{guardsResult:a})))})}function iA(n,e,t,i){return Dt(n).pipe(Pt(r=>lA(r.component,r.route,t,e,i)),hi(r=>r!==!0,!0))}function rA(n,e,t,i){return Dt(e).pipe(gr(r=>_s(oA(r.route.parent,i),sA(r.route,i),cA(n,r.path,t),aA(n,r.route,t))),hi(r=>r!==!0,!0))}function sA(n,e){return n!==null&&e&&e(new Pp(n)),Fe(!0)}function oA(n,e){return n!==null&&e&&e(new Rp(n)),Fe(!0)}function aA(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Fe(!0);let r=i.map(s=>Lc(()=>{let o=ga(e)??t,a=eo(s,o),c=JD(a)?a.canActivate(e,n):Tn(o,()=>a(e,n));return Yi(c).pipe(hi())}));return Fe(r).pipe(Qs())}function cA(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>$D(o)).filter(o=>o!==null).map(o=>Lc(()=>{let a=o.guards.map(c=>{let l=ga(o.node)??t,u=eo(c,l),d=KD(u)?u.canActivateChild(i,n):Tn(l,()=>u(i,n));return Yi(d).pipe(hi())});return Fe(a).pipe(Qs())}));return Fe(s).pipe(Qs())}function lA(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Fe(!0);let o=s.map(a=>{let c=ga(e)??r,l=eo(a,c),u=QD(l)?l.canDeactivate(n,e,t,i):Tn(c,()=>l(n,e,t,i));return Yi(u).pipe(hi())});return Fe(o).pipe(Qs())}function uA(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Fe(!0);let s=r.map(o=>{let a=eo(o,n),c=ZD(a)?a.canLoad(e,t):Tn(n,()=>a(e,t));return Yi(c)});return Fe(s).pipe(Qs(),px(i))}function px(n){return af(Wt(e=>{if(typeof e!="boolean")throw ql(n,e)}),tt(e=>e===!0))}function dA(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Fe(!0);let s=r.map(o=>{let a=eo(o,n),c=eA(a)?a.canMatch(e,t):Tn(n,()=>a(e,t));return Yi(c)});return Fe(s).pipe(Qs(),px(i))}var da=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},fa=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Ws(n){return vs(new da(n))}function fA(n){return vs(new Le(4e3,!1))}function hA(n){return vs(dx(!1,mn.GuardRejected))}var zp=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Fe(i);if(r.numberOfChildren>1||!r.children[Xe])return fA(`${e.redirectTo}`);r=r.children[Xe]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:h,data:g,title:v}=r,m=Tn(s,()=>a({params:h,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:v}));if(m instanceof Si)throw new fa(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new fa(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Si(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new pt(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Le(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Hp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function pA(n,e,t,i,r){let s=mx(n,e,t);return s.matched?(i=FD(e,i),dA(i,e,t,r).pipe(tt(o=>o===!0?s:xe({},Hp)))):Fe(s)}function mx(n,e,t){if(e.path==="**")return mA(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?xe({},Hp):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||uD)(t,n,e);if(!r)return xe({},Hp);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?xe(xe({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function mA(n){return{matched:!0,parameters:n.length>0?X0(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function H0(n,e,t,i){return t.length>0&&yA(n,t,i)?{segmentGroup:new pt(e,vA(i,new pt(t,n.children))),slicedSegments:[]}:t.length===0&&_A(n,t,i)?{segmentGroup:new pt(n.segments,gA(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new pt(n.segments,n.children),slicedSegments:t}}function gA(n,e,t,i){let r={};for(let s of t)if(Jl(n,e,s)&&!i[zn(s)]){let o=new pt([],{});r[zn(s)]=o}return xe(xe({},i),r)}function vA(n,e){let t={};t[Xe]=e;for(let i of n)if(i.path===""&&zn(i)!==Xe){let r=new pt([],{});t[zn(i)]=r}return t}function yA(n,e,t){return t.some(i=>Jl(n,e,i)&&zn(i)!==Xe)}function _A(n,e,t){return t.some(i=>Jl(n,e,i))}function Jl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function xA(n,e,t){return e.length===0&&!n.children[t]}var Gp=class{};function MA(n,e,t,i,r,s,o="emptyOnly"){return new Wp(n,e,t,i,r,o,s).recognize()}var SA=31,Wp=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new zp(this.urlSerializer,this.urlTree)}noMatchError(e){return new Le(4002,`'${e.segmentGroup}'`)}recognize(){let e=H0(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(tt(({children:t,rootSnapshot:i})=>{let r=new pn(i,t),s=new $l("",r),o=AD(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new qs([],Object.freeze({}),Object.freeze(xe({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Xe,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Xe,t).pipe(tt(i=>({children:i,rootSnapshot:t})),Bi(i=>{if(i instanceof fa)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof da?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(tt(o=>o instanceof pn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Dt(s).pipe(gr(o=>{let a=i.children[o],c=UD(t,o);return this.processSegmentGroup(e,c,a,o,r)}),pf((o,a)=>(o.push(...a),o)),Vi(null),hf(),Pt(o=>{if(o===null)return Ws(i);let a=gx(o);return EA(a),Fe(a)}))}processSegment(e,t,i,r,s,o,a){return Dt(t).pipe(gr(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(Bi(l=>{if(l instanceof da)return Fe(null);throw l}))),hi(c=>!!c),Bi(c=>{if(hx(c))return xA(i,r,s)?Fe(new Gp):Ws(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return zn(i)!==o&&(o===Xe||!Jl(r,s,i))?Ws(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):Ws(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=mx(t,r,s);if(!c)return Ws(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>SA&&(this.allowRedirects=!1));let h=new qs(s,l,Object.freeze(xe({},this.urlTree.queryParams)),this.urlTree.fragment,G0(r),zn(r),r.component??r._loadedComponent??null,r,W0(r)),g=jl(h,a,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let v=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e);return this.applyRedirects.lineralizeSegments(r,v).pipe(Pt(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=pA(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(bn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(bn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=new qs(f,d,Object.freeze(xe({},this.urlTree.queryParams)),this.urlTree.fragment,G0(i),zn(i),i.component??i._loadedComponent??null,i,W0(i)),v=jl(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(v.params),g.data=Object.freeze(v.data);let{segmentGroup:m,slicedSegments:p}=H0(t,f,h,l);if(p.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(tt(S=>new pn(g,S)));if(l.length===0&&p.length===0)return Fe(new pn(g,[]));let C=zn(i)===s;return this.processSegment(u,l,m,p,C?Xe:s,!0,g).pipe(tt(S=>new pn(g,S instanceof pn?[S]:[])))}))):Ws(t)))}getChildConfig(e,t,i){return t.children?Fe({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Fe({routes:t._loadedRoutes,injector:t._loadedInjector}):uA(e,t,i,this.urlSerializer).pipe(Pt(r=>r?this.configLoader.loadChildren(e,t).pipe(Wt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):hA(t))):Fe({routes:[],injector:e})}};function EA(n){n.sort((e,t)=>e.value.outlet===Xe?-1:t.value.outlet===Xe?1:e.value.outlet.localeCompare(t.value.outlet))}function bA(n){let e=n.value.routeConfig;return e&&e.path===""}function gx(n){let e=[],t=new Set;for(let i of n){if(!bA(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=gx(i.children);e.push(new pn(i.value,r))}return e.filter(i=>!t.has(i))}function G0(n){return n.data||{}}function W0(n){return n.resolve||{}}function wA(n,e,t,i,r,s){return Pt(o=>MA(n,e,t,i,o.extractedUrl,r,s).pipe(tt(({state:a,tree:c})=>Mt(xe({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function CA(n,e){return Pt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Fe(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of vx(c))o.add(l);let a=0;return Dt(o).pipe(gr(c=>s.has(c)?TA(c,i,n,e):(c.data=jl(c,c.parent,n).resolve,Fe(void 0))),Wt(()=>a++),xs(1),Pt(c=>a===o.size?Fe(t):cn))})}function vx(n){let e=n.children.map(t=>vx(t)).flat();return[n,...e]}function TA(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!lx(r)&&(s[pa]=r.title),DA(s,n,e,i).pipe(tt(o=>(n._resolvedData=o,n.data=jl(n,n.parent,t).resolve,null)))}function DA(n,e,t,i){let r=Mp(n);if(r.length===0)return Fe({});let s={};return Dt(r).pipe(Pt(o=>AA(n[o],e,t,i).pipe(hi(),Wt(a=>{if(a instanceof ua)throw ql(new Zs,a);s[o]=a}))),xs(1),ff(s),Bi(o=>hx(o)?cn:vs(o)))}function AA(n,e,t,i){let r=ga(e)??i,s=eo(n,r),o=s.resolve?s.resolve(e,t):Tn(r,()=>s(e,t));return Yi(o)}function _p(n){return bn(e=>{let t=n(e);return t?Dt(t).pipe(tt(()=>e)):Fe(e)})}var yx=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Xe);return i}getResolvedTitleForRoute(t){return t.data[pa]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:()=>re(IA),providedIn:"root"})}return n})(),IA=(()=>{class n extends yx{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(We(F0))};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_a=new Ve("",{providedIn:"root",factory:()=>({})}),RA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=xl({type:n,selectors:[["ng-component"]],decls:1,vars:0,template:function(i,r){i&1&&Yo(0,"router-outlet")},dependencies:[qp],encapsulation:2})}return n})();function Xp(n){let e=n.children&&n.children.map(Xp),t=e?Mt(xe({},n),{children:e}):xe({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Xe&&(t.component=RA),t}var ha=new Ve(""),Yp=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=re(Cl);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Fe(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=Yi(t.loadComponent()).pipe(tt(_x),Wt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),No(()=>{this.componentLoaders.delete(t)})),r=new gs(i,()=>new Ht).pipe(ms());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Fe({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=NA(i,this.compiler,t,this.onLoadEndListener).pipe(No(()=>{this.childrenLoaders.delete(i)})),o=new gs(s,()=>new Ht).pipe(ms());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function NA(n,e,t,i){return Yi(n.loadChildren()).pipe(tt(_x),Pt(r=>r instanceof Ho||Array.isArray(r)?Fe(r):Dt(e.compileModuleAsync(r))),tt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(ha,[],{optional:!0,self:!0}).flat()),{routes:o.map(Xp),injector:s}}))}function PA(n){return n&&typeof n=="object"&&"default"in n}function _x(n){return PA(n)?n.default:n}var Zp=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:()=>re(LA),providedIn:"root"})}return n})(),LA=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),xx=new Ve(""),Mx=new Ve("");function OA(n,e,t){let i=n.get(Mx),r=n.get(rn);return n.get(At).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let s,o=new Promise(l=>{s=l}),a=r.startViewTransition(()=>(s(),FA(n))),{onViewTransitionCreated:c}=i;return c&&Tn(n,()=>c({transition:a,from:e,to:t})),o})}function FA(n){return new Promise(e=>{zh({read:()=>setTimeout(e)},{injector:n})})}var Sx=new Ve(""),Jp=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Ht;transitionAbortSubject=new Ht;configLoader=re(Yp);environmentInjector=re(hn);urlSerializer=re(ma);rootContexts=re(va);location=re(Gs);inputBindingEnabled=re(Zl,{optional:!0})!==null;titleStrategy=re(yx);options=re(_a,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=re(Zp);createViewTransition=re(xx,{optional:!0});navigationErrorHandler=re(Sx,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Fe(void 0);rootComponentType=null;constructor(){let t=r=>this.events.next(new Ap(r)),i=r=>this.events.next(new Ip(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(Mt(xe(xe({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new Gt({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:ia,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(En(s=>s.id!==0),tt(s=>Mt(xe({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),bn(s=>{let o=!1,a=!1;return Fe(s).pipe(bn(c=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",mn.SupersededByNewNavigation),cn;this.currentTransition=s,this.currentNavigation={id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:this.lastSuccessfulNavigation?Mt(xe({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload"){let d="";return this.events.next(new qi(c.id,this.urlSerializer.serialize(c.rawUrl),d,Vl.IgnoredSameUrlNavigation)),c.resolve(!1),cn}if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return Fe(c).pipe(bn(d=>{let f=this.transitions?.getValue();return this.events.next(new Js(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions?.getValue()?cn:Promise.resolve(d)}),wA(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Wt(d=>{s.targetSnapshot=d.targetSnapshot,s.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=Mt(xe({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let f=new zl(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:d,extractedUrl:f,source:h,restoredState:g,extras:v}=c,m=new Js(d,this.urlSerializer.serialize(f),h,g);this.events.next(m);let p=ax(this.rootComponentType).snapshot;return this.currentTransition=s=Mt(xe({},c),{targetSnapshot:p,urlAfterRedirects:f,extras:Mt(xe({},v),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,Fe(s)}else{let d="";return this.events.next(new qi(c.id,this.urlSerializer.serialize(c.extractedUrl),d,Vl.IgnoredByUrlHandlingStrategy)),c.resolve(!1),cn}}),Wt(c=>{let l=new wp(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),tt(c=>(this.currentTransition=s=Mt(xe({},c),{guards:jD(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),s)),nA(this.environmentInjector,c=>this.events.next(c)),Wt(c=>{if(s.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw ql(this.urlSerializer,c.guardsResult);let l=new Cp(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);this.events.next(l)}),En(c=>c.guardsResult?!0:(this.cancelNavigationTransition(c,"",mn.GuardRejected),!1)),_p(c=>{if(c.guards.canActivateChecks.length)return Fe(c).pipe(Wt(l=>{let u=new Tp(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),bn(l=>{let u=!1;return Fe(l).pipe(CA(this.paramsInheritanceStrategy,this.environmentInjector),Wt({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(l,"",mn.NoDataFromResolver)}}))}),Wt(l=>{let u=new Dp(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}))}),_p(c=>{let l=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(Wt(f=>{u.component=f}),tt(()=>{})));for(let f of u.children)d.push(...l(f));return d};return Ro(l(c.targetSnapshot.root)).pipe(Vi(null),fi(1))}),_p(()=>this.afterPreactivation()),bn(()=>{let{currentSnapshot:c,targetSnapshot:l}=s,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?Dt(u).pipe(tt(()=>s)):Fe(s)}),tt(c=>{let l=VD(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=s=Mt(xe({},c),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,s}),Wt(()=>{this.events.next(new ca)}),WD(this.rootContexts,t.routeReuseStrategy,c=>this.events.next(c),this.inputBindingEnabled),fi(1),Wt({next:c=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ei(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)},complete:()=>{o=!0}}),gf(this.transitionAbortSubject.pipe(Wt(c=>{throw c}))),No(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",mn.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),Bi(c=>{if(a=!0,fx(c))this.events.next(new Mi(s.id,this.urlSerializer.serialize(s.extractedUrl),c.message,c.cancellationCode)),GD(c)?this.events.next(new Ks(c.url,c.navigationBehaviorOptions)):s.resolve(!1);else{let l=new aa(s.id,this.urlSerializer.serialize(s.extractedUrl),c,s.targetSnapshot??void 0);try{let u=Tn(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof ua){let{message:d,cancellationCode:f}=ql(this.urlSerializer,u);this.events.next(new Mi(s.id,this.urlSerializer.serialize(s.extractedUrl),d,f)),this.events.next(new Ks(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(u){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(u)}}return cn}))}))}cancelNavigationTransition(t,i,r){let s=new Mi(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function UA(n){return n!==ia}var kA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:()=>re(BA),providedIn:"root"})}return n})(),jp=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},BA=(()=>{class n extends jp{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Rh(n)))(r||n)}})();static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ex=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:()=>re(VA),providedIn:"root"})}return n})(),VA=(()=>{class n extends Ex{location=re(Gs);urlSerializer=re(ma);options=re(_a,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=re(Zp);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Si;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=ax(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof Js)this.stateMemento=this.createStateMemento();else if(t instanceof qi)this.rawUrlTree=i.initialUrl;else if(t instanceof zl){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof ca?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof Mi&&(t.code===mn.GuardRejected||t.code===mn.NoDataFromResolver)?this.restoreHistory(i):t instanceof aa?this.restoreHistory(i,!0):t instanceof Ei&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof Si?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=xe(xe({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=xe(xe({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Rh(n)))(r||n)}})();static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ta=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(ta||{});function bx(n,e){n.events.pipe(En(t=>t instanceof Ei||t instanceof Mi||t instanceof aa||t instanceof qi),tt(t=>t instanceof Ei||t instanceof qi?ta.COMPLETE:(t instanceof Mi?t.code===mn.Redirect||t.code===mn.SupersededByNewNavigation:!1)?ta.REDIRECTING:ta.FAILED),En(t=>t!==ta.REDIRECTING),fi(1)).subscribe(()=>{e()})}var zA={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},HA={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Xi=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=re(Sl);stateManager=re(Ex);options=re(_a,{optional:!0})||{};pendingTasks=re(Bs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=re(Jp);urlSerializer=re(ma);location=re(Gs);urlHandlingStrategy=re(Zp);_events=new Ht;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=re(kA);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=re(ha,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!re(Zl,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Nt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof Mi&&i.code!==mn.Redirect&&i.code!==mn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ei)this.navigated=!0;else if(i instanceof Ks){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=xe({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||UA(r.source)},o);this.scheduleNavigation(a,ia,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}WA(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ia,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=xe({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Xp),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=xe(xe({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=ix(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return rx(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=sa(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,ia,null,i)}navigate(t,i={skipLocationChange:!1}){return GA(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=xe({},zA):i===!1?r=xe({},HA):r=i,sa(t))return U0(this.currentUrlTree,t,r);let s=this.parseUrl(t);return U0(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return bx(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function GA(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Le(4008,!1)}function WA(n){return!(n instanceof ca)&&!(n instanceof Ks)}var Yl=class{};var jA=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(t,i,r,s,o){this.router=t,this.injector=r,this.preloadingStrategy=s,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(En(t=>t instanceof Ei),gr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,i){let r=[];for(let s of i){s.providers&&!s._injector&&(s._injector=_l(s.providers,t,`Route: ${s.path}`));let o=s._injector??t,a=s._loadedInjector??o;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&r.push(this.preloadConfig(o,s)),(s.children||s._loadedRoutes)&&r.push(this.processRoutes(a,s.children??s._loadedRoutes))}return Dt(r).pipe(ys())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{let r;i.loadChildren&&i.canLoad===void 0?r=this.loader.loadChildren(t,i):r=Fe(null);let s=r.pipe(Pt(o=>o===null?Fe(void 0):(i._loadedRoutes=o.routes,i._loadedInjector=o.injector,this.processRoutes(o.injector??t,o.routes))));if(i.loadComponent&&!i._loadedComponent){let o=this.loader.loadComponent(i);return Dt([s,o]).pipe(ys())}else return s})}static \u0275fac=function(i){return new(i||n)(We(Xi),We(Cl),We(hn),We(Yl),We(Yp))};static \u0275prov=Ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),wx=new Ve(""),$A=(()=>{class n{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,i,r,s,o={}){this.urlSerializer=t,this.transitions=i,this.viewportScroller=r,this.zone=s,this.options=o,o.scrollPositionRestoration||="disabled",o.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Js?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof Ei?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof qi&&t.code===Vl.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Hl&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,i){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Hl(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){P_()};static \u0275prov=Ne({token:n,factory:n.\u0275fac})}return n})();function Cx(n,...e){return yh([{provide:ha,multi:!0,useValue:n},[],{provide:Nr,useFactory:Tx,deps:[Xi]},{provide:bl,multi:!0,useFactory:Dx},e.map(t=>t.\u0275providers)])}function Tx(n){return n.routerState.root}function xa(n,e){return{\u0275kind:n,\u0275providers:e}}function Dx(){let n=re(Kn);return e=>{let t=n.get(Tr);if(e!==t.components[0])return;let i=n.get(Xi),r=n.get(Ax);n.get(Kp)===1&&i.initialNavigation(),n.get(Ix,null,Je.Optional)?.setUpPreloading(),n.get(wx,null,Je.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Ax=new Ve("",{factory:()=>new Ht}),Kp=new Ve("",{providedIn:"root",factory:()=>1});function qA(){return xa(2,[{provide:Kp,useValue:0},{provide:El,multi:!0,deps:[Kn],useFactory:e=>{let t=e.get(M0,Promise.resolve());return()=>t.then(()=>new Promise(i=>{let r=e.get(Xi),s=e.get(Ax);bx(r,()=>{i(!0)}),e.get(Jp).afterPreactivation=()=>(i(!0),s.closed?Fe(void 0):s),r.initialNavigation()}))}}])}function XA(){return xa(3,[{provide:El,multi:!0,useFactory:()=>{let e=re(Xi);return()=>{e.setUpLocationChangeListener()}}},{provide:Kp,useValue:2}])}var Ix=new Ve("");function YA(n){return xa(0,[{provide:Ix,useExisting:jA},{provide:Yl,useExisting:n}])}function ZA(){return xa(8,[z0,{provide:Zl,useExisting:z0}])}function JA(n){let e=[{provide:xx,useValue:OA},{provide:Mx,useValue:xe({skipNextTransition:!!n?.skipInitialTransition},n)}];return xa(9,e)}var j0=new Ve("ROUTER_FORROOT_GUARD"),KA=[Gs,{provide:ma,useClass:Zs},Xi,va,{provide:Nr,useFactory:Tx,deps:[Xi]},Yp,[]],Rx=(()=>{class n{constructor(t){}static forRoot(t,i){return{ngModule:n,providers:[KA,[],{provide:ha,multi:!0,useValue:t},{provide:j0,useFactory:nI,deps:[[Xi,new gh,new hy]]},i?.errorHandler?{provide:Sx,useValue:i.errorHandler}:[],{provide:_a,useValue:i||{}},i?.useHash?eI():tI(),QA(),i?.preloadingStrategy?YA(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?iI(i):[],i?.bindToComponentInputs?ZA().\u0275providers:[],i?.enableViewTransitions?JA().\u0275providers:[],rI()]}}static forChild(t){return{ngModule:n,providers:[{provide:ha,multi:!0,useValue:t}]}}static \u0275fac=function(i){return new(i||n)(We(j0,8))};static \u0275mod=Ml({type:n});static \u0275inj=ll({})}return n})();function QA(){return{provide:wx,useFactory:()=>{let n=re(w0),e=re(At),t=re(_a),i=re(Jp),r=re(ma);return t.scrollOffset&&n.setOffset(t.scrollOffset),new $A(r,i,n,e,t)}}}function eI(){return{provide:Ar,useClass:E0}}function tI(){return{provide:Ar,useClass:op}}function nI(n){return"guarded"}function iI(n){return[n.initialNavigation==="disabled"?XA().\u0275providers:[],n.initialNavigation==="enabledBlocking"?qA().\u0275providers:[]]}var $0=new Ve("");function rI(){return[{provide:$0,useFactory:Dx},{provide:bl,multi:!0,useExisting:$0}]}var Nx=[];var Px={providers:[Cx(Nx)]};var Zu="171";var nM=0,Fm=1,iM=2;var Um=1,rM=2,si=3,Ri=0,en=1,oi=2,Oi=0,zr=1,km=2,Bm=3,Vm=4,sM=5,rr=100,oM=101,aM=102,cM=103,lM=104,uM=200,dM=201,fM=202,hM=203,xu=204,Mu=205,pM=206,mM=207,gM=208,vM=209,yM=210,_M=211,xM=212,MM=213,SM=214,Ju=0,Ku=1,Qu=2,Hr=3,ed=4,td=5,nd=6,id=7,zm=0,EM=1,bM=2,Fi=0,wM=1,CM=2,TM=3,DM=4,AM=5,IM=6,RM=7;var bm=300,Jr=301,Kr=302,rd=303,sd=304,tc=306,Su=1e3,ir=1001,Eu=1002,Rn=1003,NM=1004;var nc=1005;var jn=1006,od=1007;var cr=1008;var ai=1009,Hm=1010,Gm=1011,xo=1012,ad=1013,lr=1014,ci=1015,Mo=1016,cd=1017,ld=1018,Qr=1020,Wm=35902,jm=1021,$m=1022,Pn=1023,qm=1024,Xm=1025,kr=1026,Gr=1027,Ym=1028,ud=1029,Zm=1030,dd=1031;var fd=1033,ic=33776,rc=33777,sc=33778,oc=33779,hd=35840,pd=35841,md=35842,gd=35843,vd=36196,yd=37492,_d=37496,xd=37808,Md=37809,Sd=37810,Ed=37811,bd=37812,wd=37813,Cd=37814,Td=37815,Dd=37816,Ad=37817,Id=37818,Rd=37819,Nd=37820,Pd=37821,ac=36492,Ld=36494,Od=36495,Jm=36283,Fd=36284,Ud=36285,kd=36286;var Da=2300,bu=2301,_u=2302,wm=2400,Cm=2401,Tm=2402;var PM=3200,LM=3201;var OM=0,FM=1,Ui="",yn="srgb",Wr="srgb-linear",Aa="linear",vt="srgb";var Ur=7680;var Dm=519,UM=512,kM=513,BM=514,Km=515,VM=516,zM=517,HM=518,GM=519,Am=35044;var Qm="300 es",ii=2e3,Ia=2001,Ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qp=Math.PI/180,wu=180/Math.PI;function So(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function oI(n,e){return(n%e+e)%e}function em(n,e,t){return(1-t)*n+t*e}function Ma(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var me=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],C=r[1],S=r[4],M=r[7],I=r[2],D=r[5],T=r[8];return s[0]=o*v+a*C+c*I,s[3]=o*m+a*S+c*D,s[6]=o*p+a*M+c*T,s[1]=l*v+u*C+d*I,s[4]=l*m+u*S+d*D,s[7]=l*p+u*M+d*T,s[2]=f*v+h*C+g*I,s[5]=f*m+h*S+g*D,s[8]=f*p+h*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tm.makeScale(e,t)),this}rotate(e){return this.premultiply(tm.makeRotation(-e)),this}translate(e,t){return this.premultiply(tm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tm=new $e;function eg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function WM(){let n=Ra("canvas");return n.style.display="block",n}var Lx={};function es(n){n in Lx||(Lx[n]=!0,console.warn(n))}function jM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function $M(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qM(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ox=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fx=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aI(){let n={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(r.r=mo(r.r),r.g=mo(r.g),r.b=mo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ui?Aa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wr]:{primaries:e,whitePoint:i,transfer:Aa,toXYZ:Ox,fromXYZ:Fx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Ox,fromXYZ:Fx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}var at=aI();function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var to,Cu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{to===void 0&&(to=Ra("canvas")),to.width=e.width,to.height=e.height;let i=to.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=to}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ra("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ii(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ii(t[i]/255)*255):t[i]=Ii(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cI=0,Na=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cI++}),this.uuid=So(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nm(r[o].image)):s.push(nm(r[o]))}else s=nm(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function nm(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lI=0,ur=(()=>{class n extends Ni{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=ir,s=ir,o=jn,a=cr,c=Pn,l=ai,u=n.DEFAULT_ANISOTROPY,d=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lI++}),this.uuid=So(),this.name="",this.source=new Na(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Su:t.x=t.x-Math.floor(t.x);break;case ir:t.x=t.x<0?0:1;break;case Eu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Su:t.y=t.y-Math.floor(t.y);break;case ir:t.y=t.y<0?0:1;break;case Eu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=bm,n.DEFAULT_ANISOTROPY=1,n})(),Tt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,M=(h+1)/2,I=(p+1)/2,D=(u+f)/4,T=(d+v)/4,R=(g+m)/4;return S>M&&S>I?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=D/i,s=T/i):M>I?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=D/r,s=R/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=T/s,r=R/s),this.set(i,r,s,t),this}let C=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(d-v)/C,this.z=(f-u)/C,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tu=class extends Ni{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new ur(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Na(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends Tu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Pa=class extends ur{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Du=class extends ur{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*v,C=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let I=Math.sqrt(S),D=Math.atan2(I,p*C);m=Math.sin(m*D)/I,a=Math.sin(a*D)/I}let M=a*C;if(c=c*m+f*M,l=l*m+h*M,u=u*m+g*M,d=d*m+v*M,m===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ux.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ux.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return im.copy(this).projectOnVector(e),this.sub(im)}reflect(e){return this.sub(im.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},im=new O,Ux=new Pi,sr=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kl.copy(i.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Ql.subVectors(this.max,Sa),no.subVectors(e.a,Sa),io.subVectors(e.b,Sa),ro.subVectors(e.c,Sa),Zi.subVectors(io,no),Ji.subVectors(ro,io),Pr.subVectors(no,ro);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Pr.z,Pr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Pr.z,0,-Pr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Pr.y,Pr.x,0];return!rm(t,no,io,ro,Ql)||(t=[1,0,0,0,1,0,0,0,1],!rm(t,no,io,ro,Ql))?!1:(eu.crossVectors(Zi,Ji),t=[eu.x,eu.y,eu.z],rm(t,no,io,ro,Ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},bi=[new O,new O,new O,new O,new O,new O,new O,new O],Hn=new O,Kl=new sr,no=new O,io=new O,ro=new O,Zi=new O,Ji=new O,Pr=new O,Sa=new O,Ql=new O,eu=new O,Lr=new O;function rm(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Lr.fromArray(n,s);let a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),c=e.dot(Lr),l=t.dot(Lr),u=i.dot(Lr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var uI=new sr,Ea=new O,sm=new O,go=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):uI.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);let t=Ea.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(sm)),this.expandByPoint(Ea.copy(e.center).sub(sm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},wi=new O,om=new O,tu=new O,Ki=new O,am=new O,nu=new O,cm=new O,Au=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){om.copy(e).add(t).multiplyScalar(.5),tu.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(om);let s=e.distanceTo(t)*.5,o=-this.direction.dot(tu),a=Ki.dot(this.direction),c=-Ki.dot(tu),l=Ki.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(om).addScaledVector(tu,f),h}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,r,s){am.subVectors(t,e),nu.subVectors(i,e),cm.crossVectors(am,nu);let o=this.direction.dot(cm),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let c=a*this.direction.dot(nu.crossVectors(Ki,nu));if(c<0)return null;let l=a*this.direction.dot(am.cross(Ki));if(l<0||c+l>o)return null;let u=-a*Ki.dot(cm);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/so.setFromMatrixColumn(e,0).length(),s=1/so.setFromMatrixColumn(e,1).length(),o=1/so.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f+v*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dI,e,fI)}lookAt(e,t,i){let r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Qi.crossVectors(i,gn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Qi.crossVectors(i,gn)),Qi.normalize(),iu.crossVectors(gn,Qi),r[0]=Qi.x,r[4]=iu.x,r[8]=gn.x,r[1]=Qi.y,r[5]=iu.y,r[9]=gn.y,r[2]=Qi.z,r[6]=iu.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],C=i[3],S=i[7],M=i[11],I=i[15],D=r[0],T=r[4],R=r[8],b=r[12],x=r[1],A=r[5],$=r[9],B=r[13],q=r[2],X=r[6],H=r[10],J=r[14],V=r[3],ae=r[7],ge=r[11],Ee=r[15];return s[0]=o*D+a*x+c*q+l*V,s[4]=o*T+a*A+c*X+l*ae,s[8]=o*R+a*$+c*H+l*ge,s[12]=o*b+a*B+c*J+l*Ee,s[1]=u*D+d*x+f*q+h*V,s[5]=u*T+d*A+f*X+h*ae,s[9]=u*R+d*$+f*H+h*ge,s[13]=u*b+d*B+f*J+h*Ee,s[2]=g*D+v*x+m*q+p*V,s[6]=g*T+v*A+m*X+p*ae,s[10]=g*R+v*$+m*H+p*ge,s[14]=g*b+v*B+m*J+p*Ee,s[3]=C*D+S*x+M*q+I*V,s[7]=C*T+S*A+M*X+I*ae,s[11]=C*R+S*$+M*H+I*ge,s[15]=C*b+S*B+M*J+I*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+v*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],C=d*m*l-v*f*l+v*c*h-a*m*h-d*c*p+a*f*p,S=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,M=u*v*l-g*d*l+g*a*h-o*v*h-u*a*p+o*d*p,I=g*d*c-u*v*c-g*a*f+o*v*f+u*a*m-o*d*m,D=t*C+i*S+r*M+s*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/D;return e[0]=C*T,e[1]=(v*f*s-d*m*s-v*r*h+i*m*h+d*r*p-i*f*p)*T,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*T,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*T,e[4]=S*T,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*T,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*T,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*T,e[8]=M*T,e[9]=(g*d*s-u*v*s-g*i*h+t*v*h+u*i*p-t*d*p)*T,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*p+t*a*p)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*T,e[12]=I*T,e[13]=(u*v*r-g*d*r+g*i*f-t*v*f-u*i*m+t*d*m)*T,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,v=o*u,m=o*d,p=a*d,C=c*l,S=c*u,M=c*d,I=i.x,D=i.y,T=i.z;return r[0]=(1-(v+p))*I,r[1]=(h+M)*I,r[2]=(g-S)*I,r[3]=0,r[4]=(h-M)*D,r[5]=(1-(f+p))*D,r[6]=(m+C)*D,r[7]=0,r[8]=(g+S)*T,r[9]=(m-C)*T,r[10]=(1-(f+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=so.set(r[0],r[1],r[2]).length(),o=so.set(r[4],r[5],r[6]).length(),a=so.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);let l=1/s,u=1/o,d=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ii){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===ii)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ia)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ii){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u,g,v;if(a===ii)g=(o+s)*d,v=-2*d;else if(a===Ia)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},so=new O,Gn=new It,dI=new O(0,0,0),fI=new O(1,1,1),Qi=new O,iu=new O,gn=new O,kx=new It,Bx=new Pi,jr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return kx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Bx.setFromEuler(this),this.setFromQuaternion(Bx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),La=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hI=0,Vx=new O,oo=new Pi,Ci=new It,ru=new O,ba=new O,pI=new O,mI=new Pi,zx=new O(1,0,0),Hx=new O(0,1,0),Gx=new O(0,0,1),Wx={type:"added"},gI={type:"removed"},ao={type:"childadded",child:null},lm={type:"childremoved",child:null},ts=(()=>{class n extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hI++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,i=new jr,r=new Pi,s=new O(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new $e}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return oo.setFromAxisAngle(t,i),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,i){return oo.setFromAxisAngle(t,i),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(zx,t)}rotateY(t){return this.rotateOnAxis(Hx,t)}rotateZ(t){return this.rotateOnAxis(Gx,t)}translateOnAxis(t,i){return Vx.copy(t).applyQuaternion(this.quaternion),this.position.add(Vx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(zx,t)}translateY(t){return this.translateOnAxis(Hx,t)}translateZ(t){return this.translateOnAxis(Gx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ru.copy(t):ru.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(ba,ru,this.up):Ci.lookAt(ru,ba,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),oo.setFromRotationMatrix(Ci),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wx),ao.child=t,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(gI),lm.child=t,this.dispatchEvent(lm),lm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wx),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,t,pI),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,mI,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new O(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Wn=new O,Ti=new O,um=new O,Di=new O,co=new O,lo=new O,jx=new O,dm=new O,fm=new O,hm=new O,pm=new Tt,mm=new Tt,gm=new Tt,nr=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),Ti.subVectors(i,t),um.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(Ti),c=Wn.dot(um),l=Ti.dot(Ti),u=Ti.dot(um),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return pm.setScalar(0),mm.setScalar(0),gm.setScalar(0),pm.fromBufferAttribute(e,t),mm.fromBufferAttribute(e,i),gm.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pm,s.x),o.addScaledVector(mm,s.y),o.addScaledVector(gm,s.z),o}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),Ti.subVectors(e,t),Wn.cross(Ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Wn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;co.subVectors(r,i),lo.subVectors(s,i),dm.subVectors(e,i);let c=co.dot(dm),l=lo.dot(dm);if(c<=0&&l<=0)return t.copy(i);fm.subVectors(e,r);let u=co.dot(fm),d=lo.dot(fm);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(co,o);hm.subVectors(e,s);let h=co.dot(hm),g=lo.dot(hm);if(g>=0&&h<=g)return t.copy(s);let v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(lo,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return jx.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(jx,a);let p=1/(m+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(co,o).addScaledVector(lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},XM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},su={h:0,s:0,l:0};function vm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var lt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=oI(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=vm(o,s,e+1/3),this.g=vm(o,s,e),this.b=vm(o,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){let i=XM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return at.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Qe(Xt.r*255,0,255))*65536+Math.round(Qe(Xt.g*255,0,255))*256+Math.round(Qe(Xt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Xt.copy(this),t);let i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=yn){at.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,r=Xt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(su);let i=em(er.h,su.h,t),r=em(er.s,su.s,t),s=em(er.l,su.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new lt;lt.NAMES=XM;var vI=0,$r=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vI++}),this.uuid=So(),this.name="",this.type="Material",this.blending=zr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=Mu,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xu&&(i.blendSrc=this.blendSrc),this.blendDst!==Mu&&(i.blendDst=this.blendDst),this.blendEquation!==rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qr=class extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Lt=new O,ou=new me,_n=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Am,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ou.fromBufferAttribute(this,t),ou.applyMatrix3(e),this.setXY(t,ou.x,ou.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ma(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),e}};var Oa=class extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fa=class extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var In=class extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}},yI=0,An=new It,ym=new ts,uo=new O,vn=new sr,wa=new sr,Vt=new O,Li=class n extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yI++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eg(e)?Fa:Oa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return ym.lookAt(e),ym.updateMatrix(),this.applyMatrix4(ym.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new In(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];wa.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(vn.min,wa.min),vn.expandByPoint(Vt),Vt.addVectors(vn.max,wa.max),vn.expandByPoint(Vt)):(vn.expandByPoint(wa.min),vn.expandByPoint(wa.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Vt.fromBufferAttribute(a,l),c&&(uo.fromBufferAttribute(e,l),Vt.add(uo)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new O,c[R]=new O;let l=new O,u=new O,d=new O,f=new me,h=new me,g=new me,v=new O,m=new O;function p(R,b,x){l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,R),h.fromBufferAttribute(s,b),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let A=1/(h.x*g.y-g.x*h.y);isFinite(A)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(A),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(A),a[R].add(v),a[b].add(v),a[x].add(v),c[R].add(m),c[b].add(m),c[x].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let R=0,b=C.length;R<b;++R){let x=C[R],A=x.start,$=x.count;for(let B=A,q=A+$;B<q;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let S=new O,M=new O,I=new O,D=new O;function T(R){I.fromBufferAttribute(r,R),D.copy(I);let b=a[R];S.copy(b),S.sub(I.multiplyScalar(I.dot(b))).normalize(),M.crossVectors(D,b);let A=M.dot(c[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,A)}for(let R=0,b=C.length;R<b;++R){let x=C[R],A=x.start,$=x.count;for(let B=A,q=A+$;B<q;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,u=new O,d=new O;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new _n(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$x=new It,Or=new Au,au=new go,qx=new O,cu=new O,lu=new O,uu=new O,_m=new O,du=new O,Xx=new O,fu=new O,Qt=class extends ts{constructor(e=new Li,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){du.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(_m.fromBufferAttribute(d,e),o?du.addScaledVector(_m,u):du.addScaledVector(_m.sub(t),u))}t.add(du)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),au.copy(i.boundingSphere),au.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(au.containsPoint(Or.origin)===!1&&(Or.intersectSphere(au,qx)===null||Or.origin.distanceToSquared(qx)>(e.far-e.near)**2))&&($x.copy(s).invert(),Or.copy(e.ray).applyMatrix4($x),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],C=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let M=C,I=S;M<I;M+=3){let D=a.getX(M),T=a.getX(M+1),R=a.getX(M+2);r=hu(this,p,e,i,l,u,d,D,T,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let C=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);r=hu(this,o,e,i,l,u,d,C,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],C=Math.max(m.start,h.start),S=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let M=C,I=S;M<I;M+=3){let D=M,T=M+1,R=M+2;r=hu(this,p,e,i,l,u,d,D,T,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let C=m,S=m+1,M=m+2;r=hu(this,o,e,i,l,u,d,C,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function _I(n,e,t,i,r,s,o,a){let c;if(e.side===en?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ri,a),c===null)return null;fu.copy(a),fu.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(fu);return l<t.near||l>t.far?null:{distance:l,point:fu.clone(),object:n}}function hu(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,cu),n.getVertexPosition(c,lu),n.getVertexPosition(l,uu);let u=_I(n,e,t,i,cu,lu,uu,Xx);if(u){let d=new O;nr.getBarycoord(Xx,cu,lu,uu,d),r&&(u.uv=nr.getInterpolatedAttribute(r,a,c,l,d,new me)),s&&(u.uv1=nr.getInterpolatedAttribute(s,a,c,l,d,new me)),o&&(u.normal=nr.getInterpolatedAttribute(o,a,c,l,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};nr.getNormal(cu,lu,uu,f.normal),u.face=f,u.barycoord=d}return u}var vo=class n extends Li{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new In(l,3)),this.setAttribute("normal",new In(u,3)),this.setAttribute("uv",new In(d,2));function g(v,m,p,C,S,M,I,D,T,R,b){let x=M/T,A=I/R,$=M/2,B=I/2,q=D/2,X=T+1,H=R+1,J=0,V=0,ae=new O;for(let ge=0;ge<H;ge++){let Ee=ge*A-B;for(let je=0;je<X;je++){let dt=je*x-$;ae[v]=dt*C,ae[m]=Ee*S,ae[p]=q,l.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[p]=D>0?1:-1,u.push(ae.x,ae.y,ae.z),d.push(je/T),d.push(1-ge/R),J+=1}}for(let ge=0;ge<R;ge++)for(let Ee=0;Ee<T;Ee++){let je=f+Ee+X*ge,dt=f+Ee+X*(ge+1),j=f+(Ee+1)+X*(ge+1),ie=f+(Ee+1)+X*ge;c.push(je,dt,ie),c.push(dt,j,ie),V+=6}a.addGroup(h,V,b),h+=V,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ns(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zt(n){let e={};for(let t=0;t<n.length;t++){let i=ns(n[t]);for(let r in i)e[r]=i[r]}return e}function xI(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tg(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var YM={clone:ns,merge:Zt},MI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MI,this.fragmentShader=SI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=xI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ua=class extends ts{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tr=new O,Yx=new me,Zx=new me,Yt=class extends Ua{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wu*2*Math.atan(Math.tan(Qp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,Yx,Zx),t.subVectors(Zx,Yx)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qp*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fo=-90,ho=1,Iu=class extends ts{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(fo,ho,e,t);r.layers=this.layers,this.add(r);let s=new Yt(fo,ho,e,t);s.layers=this.layers,this.add(s);let o=new Yt(fo,ho,e,t);o.layers=this.layers,this.add(o);let a=new Yt(fo,ho,e,t);a.layers=this.layers,this.add(a);let c=new Yt(fo,ho,e,t);c.layers=this.layers,this.add(c);let l=new Yt(fo,ho,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ka=class extends ur{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Jr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ru=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ka(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vo(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Oi});s.uniforms.tEquirect.value=t;let o=new Qt(r,s),a=t.minFilter;return t.minFilter===cr&&(t.minFilter=jn),new Iu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};var Ba=class extends ts{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var xm=new O,EI=new O,bI=new $e,ni=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=xm.subVectors(i,t).cross(EI.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(xm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||bI.getNormalMatrix(e),r=this.coplanarPoint(xm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fr=new go,pu=new O,Va=class{constructor(e=new ni,t=new ni,i=new ni,r=new ni,s=new ni,o=new ni){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],v=r[10],m=r[11],p=r[12],C=r[13],S=r[14],M=r[15];if(i[0].setComponents(c-s,f-l,m-h,M-p).normalize(),i[1].setComponents(c+s,f+l,m+h,M+p).normalize(),i[2].setComponents(c+o,f+u,m+g,M+C).normalize(),i[3].setComponents(c-o,f-u,m-g,M-C).normalize(),i[4].setComponents(c-a,f-d,m-v,M-S).normalize(),t===ii)i[5].setComponents(c+a,f+d,m+v,M+S).normalize();else if(t===Ia)i[5].setComponents(a,d,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(pu.x=r.normal.x>0?e.max.x:e.min.x,pu.y=r.normal.y>0?e.max.y:e.min.y,pu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xr=class extends ts{constructor(){super(),this.isGroup=!0,this.type="Group"}};var za=class extends ur{constructor(e,t,i,r,s,o,a,c,l,u=kr){if(u!==kr&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===kr&&(i=lr),i===void 0&&u===Gr&&(i=Qr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rn,this.minFilter=c!==void 0?c:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,h=(o-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new me:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new O,r=[],s=[],o=[],a=new O,c=new It;for(let h=0;h<=e;h++){let g=h/e;r[h]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Qe(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Qe(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yo=class extends xn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new me){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Nu=class extends yo{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ng(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,h*=u,r(o,a,f,h)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var mu=new O,Mm=new ng,Sm=new ng,Em=new ng,Pu=class extends xn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new O){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(mu.subVectors(r[0],r[1]).add(r[0]),l=mu);let d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(mu.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=mu),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),h),v=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Mm.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,v,m),Sm.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,v,m),Em.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Mm.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),Sm.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Em.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return i.set(Mm.calc(c),Sm.calc(c),Em.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jx(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function wI(n,e){let t=1-n;return t*t*e}function CI(n,e){return 2*(1-n)*n*e}function TI(n,e){return n*n*e}function Ca(n,e,t,i){return wI(n,e)+CI(n,t)+TI(n,i)}function DI(n,e){let t=1-n;return t*t*t*e}function AI(n,e){let t=1-n;return 3*t*t*n*e}function II(n,e){return 3*(1-n)*n*n*e}function RI(n,e){return n*n*n*e}function Ta(n,e,t,i,r){return DI(n,e)+AI(n,t)+II(n,i)+RI(n,r)}var Ha=class extends xn{constructor(e=new me,t=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new me){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ta(e,r.x,s.x,o.x,a.x),Ta(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lu=class extends xn{constructor(e=new O,t=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new O){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ta(e,r.x,s.x,o.x,a.x),Ta(e,r.y,s.y,o.y,a.y),Ta(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ga=class extends xn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ou=class extends xn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends xn{constructor(e=new me,t=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new me){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ca(e,r.x,s.x,o.x),Ca(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fu=class extends xn{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ca(e,r.x,s.x,o.x),Ca(e,r.y,s.y,o.y),Ca(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Jx(a,c.x,l.x,u.x,d.x),Jx(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new me().fromArray(r))}return this}},Im=Object.freeze({__proto__:null,ArcCurve:Nu,CatmullRomCurve3:Pu,CubicBezierCurve:Ha,CubicBezierCurve3:Lu,EllipseCurve:yo,LineCurve:Ga,LineCurve3:Ou,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:Fu,SplineCurve:ja}),Uu=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Im[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Im[r.type]().fromJSON(r))}return this}},_o=class extends Uu{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ga(this.currentPoint.clone(),new me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Wa(this.currentPoint.clone(),new me(e,t),new me(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Ha(this.currentPoint.clone(),new me(e,t),new me(i,r),new me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ja(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){let l=new yo(e,t,i,r,s,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Br=class extends _o{constructor(e){super(e),this.uuid=So(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new _o().fromJSON(r))}return this}},NI={triangulate:function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=ZM(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,d,f,h;if(i&&(s=UI(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let g=t;g<r;g+=t)d=n[g],f=n[g+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);h=Math.max(l-a,u-c),h=h!==0?32767/h:0}return $a(s,o,t,a,c,h,0),o}};function ZM(n,e,t,i,r){let s,o;if(r===XI(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Kx(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Kx(s,n[s],n[s+1],o);return o&&Bd(o,o.next)&&(Xa(o),o=o.next),o}function Yr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Bd(t,t.next)||Et(t.prev,t,t.next)===0)){if(Xa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function $a(n,e,t,i,r,s,o){if(!n)return;!o&&s&&HI(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?LI(n,i,r,s):PI(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Xa(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=OI(Yr(n),e,t),$a(n,e,t,i,r,s,2)):o===2&&FI(n,e,t,i,r,s):$a(Yr(n),e,t,i,r,s,1);break}}}function PI(n){let e=n.prev,t=n,i=n.next;if(Et(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<c?a<l?a:l:c<l?c:l,f=r>s?r>o?r:o:s>o?s:o,h=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=h&&po(r,a,s,c,o,l,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function LI(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Et(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,u=r.y,d=s.y,f=o.y,h=a<c?a<l?a:l:c<l?c:l,g=u<d?u<f?u:f:d<f?d:f,v=a>c?a>l?a:l:c>l?c:l,m=u>d?u>f?u:f:d>f?d:f,p=Rm(h,g,e,t,i),C=Rm(v,m,e,t,i),S=n.prevZ,M=n.nextZ;for(;S&&S.z>=p&&M&&M.z<=C;){if(S.x>=h&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&po(a,u,c,d,l,f,S.x,S.y)&&Et(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=h&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&po(a,u,c,d,l,f,M.x,M.y)&&Et(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=p;){if(S.x>=h&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&po(a,u,c,d,l,f,S.x,S.y)&&Et(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=C;){if(M.x>=h&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&po(a,u,c,d,l,f,M.x,M.y)&&Et(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function OI(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!Bd(r,s)&&JM(r,i,i.next,s)&&qa(r,s)&&qa(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Xa(i),Xa(i.next),i=n=s),i=i.next}while(i!==n);return Yr(i)}function FI(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jI(o,a)){let c=KM(o,a);o=Yr(o,o.next),c=Yr(c,c.next),$a(o,e,t,i,r,s,0),$a(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function UI(n,e,t,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=ZM(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(WI(l));for(r.sort(kI),s=0;s<r.length;s++)t=BI(r[s],t);return t}function kI(n,e){return n.x-e.x}function BI(n,e){let t=VI(n,e);if(!t)return e;let i=KM(t,n);return Yr(i,i.next),Yr(t,t.next)}function VI(n,e){let t=e,i=-1/0,r,s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,c=r.x,l=r.y,u=1/0,d;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&po(o<l?s:i,o,c,l,o<l?i:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),qa(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&zI(r,t)))&&(r=t,u=d)),t=t.next;while(t!==a);return r}function zI(n,e){return Et(n.prev,n,e.prev)<0&&Et(e.next,n,n.next)<0}function HI(n,e,t,i){let r=n;do r.z===0&&(r.z=Rm(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,GI(r)}function GI(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function Rm(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function WI(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function po(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function jI(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!$I(n,e)&&(qa(n,e)&&qa(e,n)&&qI(n,e)&&(Et(n.prev,n,e.prev)||Et(n,e.prev,e))||Bd(n,e)&&Et(n.prev,n,n.next)>0&&Et(e.prev,e,e.next)>0)}function Et(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Bd(n,e){return n.x===e.x&&n.y===e.y}function JM(n,e,t,i){let r=vu(Et(n,e,t)),s=vu(Et(n,e,i)),o=vu(Et(t,i,n)),a=vu(Et(t,i,e));return!!(r!==s&&o!==a||r===0&&gu(n,t,e)||s===0&&gu(n,i,e)||o===0&&gu(t,n,i)||a===0&&gu(t,e,i))}function gu(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function vu(n){return n>0?1:n<0?-1:0}function $I(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&JM(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function qa(n,e){return Et(n.prev,n,n.next)<0?Et(n,e,n.next)>=0&&Et(n,n.prev,e)>=0:Et(n,e,n.prev)<0||Et(n,n.next,e)<0}function qI(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function KM(n,e){let t=new Nm(n.i,n.x,n.y),i=new Nm(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Kx(n,e,t,i){let r=new Nm(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Xa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nm(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function XI(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Vr=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Qx(e),eM(i,e);let o=e.length;t.forEach(Qx);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,eM(i,t[c]);let a=NI.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function Qx(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function eM(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ya=class n extends Li{constructor(e=new Br([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new In(r,3)),this.setAttribute("uv",new In(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:h-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:YI,S,M=!1,I,D,T,R;p&&(S=p.getSpacedPoints(u),M=!0,f=!1,I=p.computeFrenetFrames(u,!1),D=new O,T=new O,R=new O),f||(m=0,h=0,g=0,v=0);let b=a.extractPoints(l),x=b.shape,A=b.holes;if(!Vr.isClockWise(x)){x=x.reverse();for(let Z=0,ne=A.length;Z<ne;Z++){let w=A[Z];Vr.isClockWise(w)&&(A[Z]=w.reverse())}}let B=Vr.triangulateShape(x,A),q=x;for(let Z=0,ne=A.length;Z<ne;Z++){let w=A[Z];x=x.concat(w)}function X(Z,ne,w){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(ne,w)}let H=x.length,J=B.length;function V(Z,ne,w){let Te,Q,ye,se=Z.x-ne.x,Pe=Z.y-ne.y,he=w.x-Z.x,E=w.y-Z.y,y=se*se+Pe*Pe,F=se*E-Pe*he;if(Math.abs(F)>Number.EPSILON){let G=Math.sqrt(y),K=Math.sqrt(he*he+E*E),W=ne.x-Pe/G,Ce=ne.y+se/G,le=w.x-E/K,ve=w.y+he/K,et=((le-W)*E-(ve-Ce)*he)/(se*E-Pe*he);Te=W+se*et-Z.x,Q=Ce+Pe*et-Z.y;let te=Te*Te+Q*Q;if(te<=2)return new me(Te,Q);ye=Math.sqrt(te/2)}else{let G=!1;se>Number.EPSILON?he>Number.EPSILON&&(G=!0):se<-Number.EPSILON?he<-Number.EPSILON&&(G=!0):Math.sign(Pe)===Math.sign(E)&&(G=!0),G?(Te=-Pe,Q=se,ye=Math.sqrt(y)):(Te=se,Q=Pe,ye=Math.sqrt(y/2))}return new me(Te/ye,Q/ye)}let ae=[];for(let Z=0,ne=q.length,w=ne-1,Te=Z+1;Z<ne;Z++,w++,Te++)w===ne&&(w=0),Te===ne&&(Te=0),ae[Z]=V(q[Z],q[w],q[Te]);let ge=[],Ee,je=ae.concat();for(let Z=0,ne=A.length;Z<ne;Z++){let w=A[Z];Ee=[];for(let Te=0,Q=w.length,ye=Q-1,se=Te+1;Te<Q;Te++,ye++,se++)ye===Q&&(ye=0),se===Q&&(se=0),Ee[Te]=V(w[Te],w[ye],w[se]);ge.push(Ee),je=je.concat(Ee)}for(let Z=0;Z<m;Z++){let ne=Z/m,w=h*Math.cos(ne*Math.PI/2),Te=g*Math.sin(ne*Math.PI/2)+v;for(let Q=0,ye=q.length;Q<ye;Q++){let se=X(q[Q],ae[Q],Te);oe(se.x,se.y,-w)}for(let Q=0,ye=A.length;Q<ye;Q++){let se=A[Q];Ee=ge[Q];for(let Pe=0,he=se.length;Pe<he;Pe++){let E=X(se[Pe],Ee[Pe],Te);oe(E.x,E.y,-w)}}}let dt=g+v;for(let Z=0;Z<H;Z++){let ne=f?X(x[Z],je[Z],dt):x[Z];M?(T.copy(I.normals[0]).multiplyScalar(ne.x),D.copy(I.binormals[0]).multiplyScalar(ne.y),R.copy(S[0]).add(T).add(D),oe(R.x,R.y,R.z)):oe(ne.x,ne.y,0)}for(let Z=1;Z<=u;Z++)for(let ne=0;ne<H;ne++){let w=f?X(x[ne],je[ne],dt):x[ne];M?(T.copy(I.normals[Z]).multiplyScalar(w.x),D.copy(I.binormals[Z]).multiplyScalar(w.y),R.copy(S[Z]).add(T).add(D),oe(R.x,R.y,R.z)):oe(w.x,w.y,d/u*Z)}for(let Z=m-1;Z>=0;Z--){let ne=Z/m,w=h*Math.cos(ne*Math.PI/2),Te=g*Math.sin(ne*Math.PI/2)+v;for(let Q=0,ye=q.length;Q<ye;Q++){let se=X(q[Q],ae[Q],Te);oe(se.x,se.y,d+w)}for(let Q=0,ye=A.length;Q<ye;Q++){let se=A[Q];Ee=ge[Q];for(let Pe=0,he=se.length;Pe<he;Pe++){let E=X(se[Pe],Ee[Pe],Te);M?oe(E.x,E.y+S[u-1].y,S[u-1].x+w):oe(E.x,E.y,d+w)}}}j(),ie();function j(){let Z=r.length/3;if(f){let ne=0,w=H*ne;for(let Te=0;Te<J;Te++){let Q=B[Te];De(Q[2]+w,Q[1]+w,Q[0]+w)}ne=u+m*2,w=H*ne;for(let Te=0;Te<J;Te++){let Q=B[Te];De(Q[0]+w,Q[1]+w,Q[2]+w)}}else{for(let ne=0;ne<J;ne++){let w=B[ne];De(w[2],w[1],w[0])}for(let ne=0;ne<J;ne++){let w=B[ne];De(w[0]+H*u,w[1]+H*u,w[2]+H*u)}}i.addGroup(Z,r.length/3-Z,0)}function ie(){let Z=r.length/3,ne=0;we(q,ne),ne+=q.length;for(let w=0,Te=A.length;w<Te;w++){let Q=A[w];we(Q,ne),ne+=Q.length}i.addGroup(Z,r.length/3-Z,1)}function we(Z,ne){let w=Z.length;for(;--w>=0;){let Te=w,Q=w-1;Q<0&&(Q=Z.length-1);for(let ye=0,se=u+m*2;ye<se;ye++){let Pe=H*ye,he=H*(ye+1),E=ne+Te+Pe,y=ne+Q+Pe,F=ne+Q+he,G=ne+Te+he;ze(E,y,F,G)}}}function oe(Z,ne,w){c.push(Z),c.push(ne),c.push(w)}function De(Z,ne,w){Oe(Z),Oe(ne),Oe(w);let Te=r.length/3,Q=C.generateTopUV(i,r,Te-3,Te-2,Te-1);st(Q[0]),st(Q[1]),st(Q[2])}function ze(Z,ne,w,Te){Oe(Z),Oe(ne),Oe(Te),Oe(ne),Oe(w),Oe(Te);let Q=r.length/3,ye=C.generateSideWallUV(i,r,Q-6,Q-3,Q-2,Q-1);st(ye[0]),st(ye[1]),st(ye[3]),st(ye[1]),st(ye[2]),st(ye[3])}function Oe(Z){r.push(c[Z*3+0]),r.push(c[Z*3+1]),r.push(c[Z*3+2])}function st(Z){s.push(Z.x),s.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ZI(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Im[r.type]().fromJSON(r)),new n(i,e.options)}},YI={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new me(s,o),new me(a,c),new me(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],h=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new me(o,1-c),new me(l,1-d),new me(f,1-g),new me(v,1-p)]:[new me(a,1-c),new me(u,1-d),new me(h,1-g),new me(m,1-p)]}};function ZI(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Za=class n extends Li{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let C=p*f-o;for(let S=0;S<l;S++){let M=S*d-s;g.push(M,-C,0),v.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let C=0;C<a;C++){let S=C+l*p,M=C+l*(p+1),I=C+1+l*(p+1),D=C+1+l*p;h.push(S,M,D),h.push(M,I,D)}this.setIndex(h),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(v,3)),this.setAttribute("uv",new In(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ku=class extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bu=class extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yu(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function JI(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Zr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vu=class extends Zr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wm,endingEnd:wm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cm:s=e,a=2*t-i;break;case Tm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Cm:o=e,c=2*i-t;break;case Tm:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,C=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,S=(-1-h)*m+(1.5+h)*v+.5*g,M=h*m-h*v;for(let I=0;I!==a;++I)s[I]=p*o[u+I]+C*o[l+I]+S*o[c+I]+M*o[d+I];return s}},zu=class extends Zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},Hu=class extends Zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Nn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yu(t,this.TimeBufferType),this.values=yu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:yu(e.times,Array),values:yu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Da:t=this.InterpolantFactoryMethodDiscrete;break;case bu:t=this.InterpolantFactoryMethodLinear;break;case _u:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return bu;case this.InterpolantFactoryMethodSmooth:return _u}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&JI(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===_u,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=bu;var or=class extends Nn{constructor(e,t,i){super(e,t,i)}};or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Da;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var Gu=class extends Nn{};Gu.prototype.ValueTypeName="color";var Wu=class extends Nn{};Wu.prototype.ValueTypeName="number";var ju=class extends Zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Pi.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ja=class extends Nn{InterpolantFactoryMethodLinear(e){return new ju(this.times,this.values,this.getValueSize(),e)}};Ja.prototype.ValueTypeName="quaternion";Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends Nn{constructor(e,t,i){super(e,t,i)}};ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Da;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var $u=class extends Nn{};$u.prototype.ValueTypeName="vector";var Pm={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},qu=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let h=l[d],g=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}},QM=new qu,Vd=(()=>{class n{constructor(t){this.manager=t!==void 0?t:QM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),Ai={},Lm=class extends Error{constructor(e,t){super(e),this.response=t}},Ka=class extends Vd{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Pm.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:i,onError:r});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ai[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0,v=0,m=new ReadableStream({start(p){C();function C(){d.read().then(({done:S,value:M})=>{if(S)p.close();else{v+=M.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:h});for(let D=0,T=u.length;D<T;D++){let R=u[D];R.onProgress&&R.onProgress(I)}p.enqueue(M),C()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Lm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{Pm.add(e,l);let u=Ai[e];delete Ai[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onLoad&&h.onLoad(l)}}).catch(l=>{let u=Ai[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ai[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Xu=class extends Ua{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Yu=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Qa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tM(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=tM();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function tM(){return performance.now()}var ig="\\[\\]\\.:\\/",KI=new RegExp("["+ig+"]","g"),rg="[^"+ig+"]",QI="[^"+ig.replace("\\.","")+"]",eR=/((?:WC+[\/:])*)/.source.replace("WC",rg),tR=/(WCOD+)?/.source.replace("WCOD",QI),nR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rg),iR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rg),rR=new RegExp("^"+eR+tR+nR+iR+"$"),sR=["material","materials","bones","map"],Om=class{constructor(e,t,i){let r=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(KI,"")}static parseTrackName(t){let i=rR.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);sR.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Om,n})();Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tV=new Float32Array(1);var ec=class{constructor(){this.type="ShapePath",this.color=new lt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new _o,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let C=[];for(let S=0,M=p.length;S<M;S++){let I=p[S],D=new Br;D.curves=I.curves,C.push(D)}return C}function i(p,C){let S=C.length,M=!1;for(let I=S-1,D=0;D<S;I=D++){let T=C[I],R=C[D],b=R.x-T.x,x=R.y-T.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(T=C[D],b=-b,R=C[I],x=-x),p.y<T.y||p.y>R.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{let A=x*(p.x-T.x)-b*(p.y-T.y);if(A===0)return!0;if(A<0)continue;M=!M}}else{if(p.y!==T.y)continue;if(R.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=R.x)return!0}}return M}let r=Vr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c,l=[];if(s.length===1)return a=s[0],c=new Br,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;let d=[],f=[],h=[],g=0,v;f[g]=void 0,h[g]=[];for(let p=0,C=s.length;p<C;p++)a=s[p],v=a.getPoints(),o=r(v),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Br,p:v},f[g].s.curves=a.curves,u&&g++,h[g]=[]):h[g].push({h:a,p:v[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,C=0;for(let S=0,M=f.length;S<M;S++)d[S]=[];for(let S=0,M=f.length;S<M;S++){let I=h[S];for(let D=0;D<I.length;D++){let T=I[D],R=!0;for(let b=0;b<f.length;b++)i(T.p,f[b].p)&&(S!==b&&C++,R?(R=!1,d[b].push(T)):p=!0);R&&d[S].push(T)}}C>0&&p===!1&&(h=d)}let m;for(let p=0,C=f.length;p<C;p++){c=f[p].s,l.push(c),m=h[p];for(let S=0,M=m.length;S<M;S++)c.holes.push(m[S].h)}return l}};function sg(n,e,t,i){let r=oR(i);switch(t){case jm:return n*e;case qm:return n*e;case Xm:return n*e*2;case Ym:return n*e/r.components*r.byteLength;case ud:return n*e/r.components*r.byteLength;case Zm:return n*e*2/r.components*r.byteLength;case dd:return n*e*2/r.components*r.byteLength;case $m:return n*e*3/r.components*r.byteLength;case Pn:return n*e*4/r.components*r.byteLength;case fd:return n*e*4/r.components*r.byteLength;case ic:case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sc:case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pd:case gd:return Math.max(n,16)*Math.max(e,8)/4;case hd:case md:return Math.max(n,8)*Math.max(e,8)/2;case vd:case yd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _d:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Id:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ac:case Ld:case Od:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jm:case Fd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ud:case kd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oR(n){switch(n){case ai:case Hm:return{byteLength:1,components:1};case xo:case Gm:case Mo:return{byteLength:2,components:1};case cd:case ld:return{byteLength:2,components:4};case lr:case ad:case ci:return{byteLength:4,components:1};case Wm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zu);function ES(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function aR(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let v=d[h];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var cR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lR=`#ifdef USE_ALPHAHASH
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
#endif`,uR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pR=`#ifdef USE_AOMAP
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
#endif`,mR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gR=`#ifdef USE_BATCHING
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
#endif`,vR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_R=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MR=`#ifdef USE_IRIDESCENCE
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
#endif`,SR=`#ifdef USE_BUMPMAP
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
#endif`,ER=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,RR=`#define PI 3.141592653589793
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
} // validated`,NR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PR=`vec3 transformedNormal = objectNormal;
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
#endif`,LR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kR="gl_FragColor = linearToOutputTexel( gl_FragColor );",BR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VR=`#ifdef USE_ENVMAP
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
#endif`,zR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HR=`#ifdef USE_ENVMAP
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
#endif`,GR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WR=`#ifdef USE_ENVMAP
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
#endif`,jR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$R=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YR=`#ifdef USE_GRADIENTMAP
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
}`,ZR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QR=`uniform bool receiveShadow;
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
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s1=`PhysicalMaterial material;
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
#endif`,o1=`struct PhysicalMaterial {
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
}`,a1=`
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
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
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v1=`#if defined( USE_POINTS_UV )
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
#endif`,y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`#ifdef USE_MORPHTARGETS
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
#endif`,b1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I1=`#ifdef USE_NORMALMAP
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
#endif`,R1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$1=`float getShadowMask() {
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
}`,q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,Y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,J1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tN=`#ifdef USE_TRANSMISSION
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
#endif`,nN=`#ifdef USE_TRANSMISSION
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
#endif`,iN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,aN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cN=`uniform sampler2D t2D;
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
}`,lN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hN=`#include <common>
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
}`,pN=`#if DEPTH_PACKING == 3200
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
}`,mN=`#define DISTANCE
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
}`,gN=`#define DISTANCE
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
}`,vN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_N=`uniform float scale;
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
}`,xN=`uniform vec3 diffuse;
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
}`,MN=`#include <common>
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
}`,SN=`uniform vec3 diffuse;
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
}`,EN=`#define LAMBERT
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
}`,bN=`#define LAMBERT
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
}`,wN=`#define MATCAP
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
}`,CN=`#define MATCAP
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
}`,TN=`#define NORMAL
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
}`,DN=`#define NORMAL
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
}`,AN=`#define PHONG
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
}`,IN=`#define PHONG
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
}`,RN=`#define STANDARD
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
}`,NN=`#define STANDARD
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
}`,PN=`#define TOON
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
}`,LN=`#define TOON
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
}`,ON=`uniform float size;
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
}`,FN=`uniform vec3 diffuse;
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
}`,UN=`#include <common>
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
}`,kN=`uniform vec3 color;
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
}`,BN=`uniform float rotation;
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
}`,VN=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:cR,alphahash_pars_fragment:lR,alphamap_fragment:uR,alphamap_pars_fragment:dR,alphatest_fragment:fR,alphatest_pars_fragment:hR,aomap_fragment:pR,aomap_pars_fragment:mR,batching_pars_vertex:gR,batching_vertex:vR,begin_vertex:yR,beginnormal_vertex:_R,bsdfs:xR,iridescence_fragment:MR,bumpmap_pars_fragment:SR,clipping_planes_fragment:ER,clipping_planes_pars_fragment:bR,clipping_planes_pars_vertex:wR,clipping_planes_vertex:CR,color_fragment:TR,color_pars_fragment:DR,color_pars_vertex:AR,color_vertex:IR,common:RR,cube_uv_reflection_fragment:NR,defaultnormal_vertex:PR,displacementmap_pars_vertex:LR,displacementmap_vertex:OR,emissivemap_fragment:FR,emissivemap_pars_fragment:UR,colorspace_fragment:kR,colorspace_pars_fragment:BR,envmap_fragment:VR,envmap_common_pars_fragment:zR,envmap_pars_fragment:HR,envmap_pars_vertex:GR,envmap_physical_pars_fragment:e1,envmap_vertex:WR,fog_vertex:jR,fog_pars_vertex:$R,fog_fragment:qR,fog_pars_fragment:XR,gradientmap_pars_fragment:YR,lightmap_pars_fragment:ZR,lights_lambert_fragment:JR,lights_lambert_pars_fragment:KR,lights_pars_begin:QR,lights_toon_fragment:t1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:r1,lights_physical_fragment:s1,lights_physical_pars_fragment:o1,lights_fragment_begin:a1,lights_fragment_maps:c1,lights_fragment_end:l1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:d1,logdepthbuf_pars_vertex:f1,logdepthbuf_vertex:h1,map_fragment:p1,map_pars_fragment:m1,map_particle_fragment:g1,map_particle_pars_fragment:v1,metalnessmap_fragment:y1,metalnessmap_pars_fragment:_1,morphinstance_vertex:x1,morphcolor_vertex:M1,morphnormal_vertex:S1,morphtarget_pars_vertex:E1,morphtarget_vertex:b1,normal_fragment_begin:w1,normal_fragment_maps:C1,normal_pars_fragment:T1,normal_pars_vertex:D1,normal_vertex:A1,normalmap_pars_fragment:I1,clearcoat_normal_fragment_begin:R1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:P1,iridescence_pars_fragment:L1,opaque_fragment:O1,packing:F1,premultiplied_alpha_fragment:U1,project_vertex:k1,dithering_fragment:B1,dithering_pars_fragment:V1,roughnessmap_fragment:z1,roughnessmap_pars_fragment:H1,shadowmap_pars_fragment:G1,shadowmap_pars_vertex:W1,shadowmap_vertex:j1,shadowmask_pars_fragment:$1,skinbase_vertex:q1,skinning_pars_vertex:X1,skinning_vertex:Y1,skinnormal_vertex:Z1,specularmap_fragment:J1,specularmap_pars_fragment:K1,tonemapping_fragment:Q1,tonemapping_pars_fragment:eN,transmission_fragment:tN,transmission_pars_fragment:nN,uv_pars_fragment:iN,uv_pars_vertex:rN,uv_vertex:sN,worldpos_vertex:oN,background_vert:aN,background_frag:cN,backgroundCube_vert:lN,backgroundCube_frag:uN,cube_vert:dN,cube_frag:fN,depth_vert:hN,depth_frag:pN,distanceRGBA_vert:mN,distanceRGBA_frag:gN,equirect_vert:vN,equirect_frag:yN,linedashed_vert:_N,linedashed_frag:xN,meshbasic_vert:MN,meshbasic_frag:SN,meshlambert_vert:EN,meshlambert_frag:bN,meshmatcap_vert:wN,meshmatcap_frag:CN,meshnormal_vert:TN,meshnormal_frag:DN,meshphong_vert:AN,meshphong_frag:IN,meshphysical_vert:RN,meshphysical_frag:NN,meshtoon_vert:PN,meshtoon_frag:LN,points_vert:ON,points_frag:FN,shadow_vert:UN,shadow_frag:kN,sprite_vert:BN,sprite_frag:VN},ce={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},li={basic:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Zt([ce.points,ce.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Zt([ce.common,ce.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Zt([ce.sprite,ce.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Zt([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Zt([ce.lights,ce.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};li.physical={uniforms:Zt([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var zd={r:0,b:0,g:0},is=new jr,zN=new It;function HN(n,e,t,i,r,s,o){let a=new lt(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function v(S){let M=!1,I=g(S);I===null?p(a,c):I&&I.isColor&&(p(I,1),M=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,M){let I=g(M);I&&(I.isCubeTexture||I.mapping===tc)?(u===void 0&&(u=new Qt(new vo(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:ns(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),is.copy(M.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zN.makeRotationFromEuler(is)),u.material.toneMapped=at.getTransfer(I.colorSpace)!==vt,(d!==I||f!==I.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=I,f=I.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Qt(new Za(2,2),new $n({name:"BackgroundMaterial",uniforms:ns(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=at.getTransfer(I.colorSpace)!==vt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||f!==I.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=I,f=I.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,M){S.getRGB(zd,tg(n)),i.buffers.color.setClear(zd.r,zd.g,zd.b,M,o)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:v,addToRenderList:m,dispose:C}}function GN(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(x,A,$,B,q){let X=!1,H=d(B,$,A);s!==H&&(s=H,l(s.object)),X=h(x,B,$,q),X&&g(x,B,$,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(x,A,$,B),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,A,$){let B=$.wireframe===!0,q=i[x.id];q===void 0&&(q={},i[x.id]=q);let X=q[A.id];X===void 0&&(X={},q[A.id]=X);let H=X[B];return H===void 0&&(H=f(c()),X[B]=H),H}function f(x){let A=[],$=[],B=[];for(let q=0;q<t;q++)A[q]=0,$[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:$,attributeDivisors:B,object:x,attributes:{},index:null}}function h(x,A,$,B){let q=s.attributes,X=A.attributes,H=0,J=$.getAttributes();for(let V in J)if(J[V].location>=0){let ge=q[V],Ee=X[V];if(Ee===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor)),ge===void 0||ge.attribute!==Ee||Ee&&ge.data!==Ee.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(x,A,$,B){let q={},X=A.attributes,H=0,J=$.getAttributes();for(let V in J)if(J[V].location>=0){let ge=X[V];ge===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor));let Ee={};Ee.attribute=ge,ge&&ge.data&&(Ee.data=ge.data),q[V]=Ee,H++}s.attributes=q,s.attributesNum=H,s.index=B}function v(){let x=s.newAttributes;for(let A=0,$=x.length;A<$;A++)x[A]=0}function m(x){p(x,0)}function p(x,A){let $=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;$[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),q[x]!==A&&(n.vertexAttribDivisor(x,A),q[x]=A)}function C(){let x=s.newAttributes,A=s.enabledAttributes;for(let $=0,B=A.length;$<B;$++)A[$]!==x[$]&&(n.disableVertexAttribArray($),A[$]=0)}function S(x,A,$,B,q,X,H){H===!0?n.vertexAttribIPointer(x,A,$,q,X):n.vertexAttribPointer(x,A,$,B,q,X)}function M(x,A,$,B){v();let q=B.attributes,X=$.getAttributes(),H=A.defaultAttributeValues;for(let J in X){let V=X[J];if(V.location>=0){let ae=q[J];if(ae===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ae!==void 0){let ge=ae.normalized,Ee=ae.itemSize,je=e.get(ae);if(je===void 0)continue;let dt=je.buffer,j=je.type,ie=je.bytesPerElement,we=j===n.INT||j===n.UNSIGNED_INT||ae.gpuType===ad;if(ae.isInterleavedBufferAttribute){let oe=ae.data,De=oe.stride,ze=ae.offset;if(oe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)p(V.location+Oe,oe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)m(V.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let Oe=0;Oe<V.locationSize;Oe++)S(V.location+Oe,Ee/V.locationSize,j,ge,De*ie,(ze+Ee/V.locationSize*Oe)*ie,we)}else{if(ae.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,ae.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let oe=0;oe<V.locationSize;oe++)S(V.location+oe,Ee/V.locationSize,j,ge,Ee*ie,Ee/V.locationSize*oe*ie,we)}}else if(H!==void 0){let ge=H[J];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(V.location,ge);break;case 3:n.vertexAttrib3fv(V.location,ge);break;case 4:n.vertexAttrib4fv(V.location,ge);break;default:n.vertexAttrib1fv(V.location,ge)}}}}C()}function I(){R();for(let x in i){let A=i[x];for(let $ in A){let B=A[$];for(let q in B)u(B[q].object),delete B[q];delete A[$]}delete i[x]}}function D(x){if(i[x.id]===void 0)return;let A=i[x.id];for(let $ in A){let B=A[$];for(let q in B)u(B[q].object),delete B[q];delete A[$]}delete i[x.id]}function T(x){for(let A in i){let $=i[A];if($[x.id]===void 0)continue;let B=$[x.id];for(let q in B)u(B[q].object),delete B[q];delete $[x.id]}}function R(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:C}}function WN(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jN(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Pn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===Mo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ai&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ci&&!R)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:I,maxSamples:D}}function $N(n){let e=this,t=null,i=0,r=!1,s=!1,o=new ni,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let C=s?0:i,S=C*4,M=p.clippingState||null;c.value=M,M=u(g,f,S,h);for(let I=0;I!==S;++I)M[I]=t[I];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=h+v*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=h;S!==v;++S,M+=4)o.copy(d[S]).applyMatrix4(C,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function qN(n){let e=new WeakMap;function t(o,a){return a===rd?o.mapping=Jr:a===sd&&(o.mapping=Kr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===rd||a===sd)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ru(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var bo=4,eS=[.125,.215,.35,.446,.526,.582],os=20,og=new Xu,tS=new lt,ag=null,cg=0,lg=0,ug=!1,ss=(1+Math.sqrt(5))/2,Eo=1/ss,nS=[new O(-ss,Eo,0),new O(ss,Eo,0),new O(-Eo,0,ss),new O(Eo,0,ss),new O(0,ss,-Eo),new O(0,ss,Eo),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Wd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ag=this._renderer.getRenderTarget(),cg=this._renderer.getActiveCubeFace(),lg=this._renderer.getActiveMipmapLevel(),ug=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ag,cg,lg),this._renderer.xr.enabled=ug,e.scissorTest=!1,Hd(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ag=this._renderer.getRenderTarget(),cg=this._renderer.getActiveCubeFace(),lg=this._renderer.getActiveMipmapLevel(),ug=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Mo,format:Pn,colorSpace:Wr,depthBuffer:!1},r=iS(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iS(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XN(s)),this._blurMaterial=YN(s,e,t)}return r}_compileMaterial(e){let t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,og)}_sceneToCubeUV(e,t,i,r){let a=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(tS),u.toneMapping=Fi,u.autoClear=!1;let h=new qr({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Qt(new vo,h),v=!1,m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,v=!0):(h.color.copy(tS),v=!0);for(let p=0;p<6;p++){let C=p%3;C===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):C===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let S=this._cubeSize;Hd(r,C*S,p>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Jr||e.mapping===Kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rS());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Hd(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,og)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=nS[(r-s-1)%nS.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Qt(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*os-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):os;m>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);let p=[],C=0;for(let T=0;T<os;++T){let R=T/v,b=Math.exp(-R*R/2);p.push(b),T===0?C+=b:T<m&&(C+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let M=this._sizeLods[r],I=3*M*(r>S-bo?r-S+bo:0),D=4*(this._cubeSize-M);Hd(t,I,D,3*M,2*M),c.setRenderTarget(t),c.render(d,og)}};function XN(n){let e=[],t=[],i=[],r=n,s=n-bo+1+eS.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-bo?c=eS[o-n+bo-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,m=2,p=1,C=new Float32Array(v*g*h),S=new Float32Array(m*g*h),M=new Float32Array(p*g*h);for(let D=0;D<h;D++){let T=D%3*2/3-1,R=D>2?0:-1,b=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];C.set(b,v*g*D),S.set(f,m*g*D);let x=[D,D,D,D,D,D];M.set(x,p*g*D)}let I=new Li;I.setAttribute("position",new _n(C,v)),I.setAttribute("uv",new _n(S,m)),I.setAttribute("faceIndex",new _n(M,p)),e.push(I),r>bo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function iS(n,e,t){let i=new ri(n,e,t);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hd(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function YN(n,e,t){let i=new Float32Array(os),r=new O(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xg(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function rS(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xg(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function sS(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function xg(){return`

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
	`}function ZN(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===rd||c===sd,u=c===Jr||c===Kr;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Wd(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Wd(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function JN(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&es("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function KN(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,v=0;if(h!==null){let C=h.array;v=h.version;for(let S=0,M=C.length;S<M;S+=3){let I=C[S+0],D=C[S+1],T=C[S+2];f.push(I,D,D,T,T,I)}}else if(g!==void 0){let C=g.array;v=g.version;for(let S=0,M=C.length/3-1;S<M;S+=3){let I=S+0,D=S+1,T=S+2;f.push(I,D,D,T,T,I)}}else return;let m=new(eg(f)?Fa:Oa)(f,1);m.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function QN(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,v,0,g);let p=0;for(let C=0;C<g;C++)p+=h[C]*v[C];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function eP(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tP(n,e,t){let i=new WeakMap,r=new Tt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let I=a.attributes.position.count*M,D=1;I>e.maxTextureSize&&(D=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let T=new Float32Array(I*D*4*d),R=new Pa(T,I,D,d);R.type=ci,R.needsUpdate=!0;let b=M*4;for(let A=0;A<d;A++){let $=p[A],B=C[A],q=S[A],X=I*D*4*A;for(let H=0;H<$.count;H++){let J=H*b;g===!0&&(r.fromBufferAttribute($,H),T[X+J+0]=r.x,T[X+J+1]=r.y,T[X+J+2]=r.z,T[X+J+3]=0),v===!0&&(r.fromBufferAttribute(B,H),T[X+J+4]=r.x,T[X+J+5]=r.y,T[X+J+6]=r.z,T[X+J+7]=0),m===!0&&(r.fromBufferAttribute(q,H),T[X+J+8]=r.x,T[X+J+9]=r.y,T[X+J+10]=r.z,T[X+J+11]=q.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new me(I,D)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function nP(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var bS=new ur,oS=new za(1,1),wS=new Pa,CS=new Du,TS=new ka,aS=[],cS=[],lS=new Float32Array(16),uS=new Float32Array(9),dS=new Float32Array(4);function Co(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=aS[r];if(s===void 0&&(s=new Float32Array(r),aS[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $d(n,e){let t=cS[e];t===void 0&&(t=new Int32Array(e),cS[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function sP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function oP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function aP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;dS.set(i),n.uniformMatrix2fv(this.addr,!1,dS),Ut(t,i)}}function cP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;uS.set(i),n.uniformMatrix3fv(this.addr,!1,uS),Ut(t,i)}}function lP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;lS.set(i),n.uniformMatrix4fv(this.addr,!1,lS),Ut(t,i)}}function uP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function fP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function hP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function pP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function gP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function vP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function yP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(oS.compareFunction=Km,s=oS):s=bS,t.setTexture2D(e||s,r)}function _P(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||CS,r)}function xP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||TS,r)}function MP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wS,r)}function SP(n){switch(n){case 5126:return iP;case 35664:return rP;case 35665:return sP;case 35666:return oP;case 35674:return aP;case 35675:return cP;case 35676:return lP;case 5124:case 35670:return uP;case 35667:case 35671:return dP;case 35668:case 35672:return fP;case 35669:case 35673:return hP;case 5125:return pP;case 36294:return mP;case 36295:return gP;case 36296:return vP;case 35678:case 36198:case 36298:case 36306:case 35682:return yP;case 35679:case 36299:case 36307:return _P;case 35680:case 36300:case 36308:case 36293:return xP;case 36289:case 36303:case 36311:case 36292:return MP}}function EP(n,e){n.uniform1fv(this.addr,e)}function bP(n,e){let t=Co(e,this.size,2);n.uniform2fv(this.addr,t)}function wP(n,e){let t=Co(e,this.size,3);n.uniform3fv(this.addr,t)}function CP(n,e){let t=Co(e,this.size,4);n.uniform4fv(this.addr,t)}function TP(n,e){let t=Co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function DP(n,e){let t=Co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function AP(n,e){let t=Co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function IP(n,e){n.uniform1iv(this.addr,e)}function RP(n,e){n.uniform2iv(this.addr,e)}function NP(n,e){n.uniform3iv(this.addr,e)}function PP(n,e){n.uniform4iv(this.addr,e)}function LP(n,e){n.uniform1uiv(this.addr,e)}function OP(n,e){n.uniform2uiv(this.addr,e)}function FP(n,e){n.uniform3uiv(this.addr,e)}function UP(n,e){n.uniform4uiv(this.addr,e)}function kP(n,e,t){let i=this.cache,r=e.length,s=$d(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||bS,s[o])}function BP(n,e,t){let i=this.cache,r=e.length,s=$d(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||CS,s[o])}function VP(n,e,t){let i=this.cache,r=e.length,s=$d(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||TS,s[o])}function zP(n,e,t){let i=this.cache,r=e.length,s=$d(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wS,s[o])}function HP(n){switch(n){case 5126:return EP;case 35664:return bP;case 35665:return wP;case 35666:return CP;case 35674:return TP;case 35675:return DP;case 35676:return AP;case 5124:case 35670:return IP;case 35667:case 35671:return RP;case 35668:case 35672:return NP;case 35669:case 35673:return PP;case 5125:return LP;case 36294:return OP;case 36295:return FP;case 36296:return UP;case 35678:case 36198:case 36298:case 36306:case 35682:return kP;case 35679:case 36299:case 36307:return BP;case 35680:case 36300:case 36308:case 36293:return VP;case 36289:case 36303:case 36311:case 36292:return zP}}var fg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SP(t.type)}},hg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HP(t.type)}},pg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},dg=/(\w+)(\])?(\[|\.)?/g;function fS(n,e){n.seq.push(e),n.map[e.id]=e}function GP(n,e,t){let i=n.name,r=i.length;for(dg.lastIndex=0;;){let s=dg.exec(i),o=dg.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){fS(t,l===void 0?new fg(a,n,e):new hg(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new pg(a),fS(t,d)),t=d}}}var wo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);GP(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function hS(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var WP=37297,jP=0;function $P(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var pS=new $e;function qP(n){at._getMatrix(pS,at.workingColorSpace,n);let e=`mat3( ${pS.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case Aa:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mS(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$P(n.getShaderSource(e),o)}else return r}function XP(n,e){let t=qP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function YP(n,e){let t;switch(e){case wM:t="Linear";break;case CM:t="Reinhard";break;case TM:t="Cineon";break;case DM:t="ACESFilmic";break;case IM:t="AgX";break;case RM:t="Neutral";break;case AM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gd=new O;function ZP(){at.getLuminanceCoefficients(Gd);let n=Gd.x.toFixed(4),e=Gd.y.toFixed(4),t=Gd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cc).join(`
`)}function KP(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QP(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function cc(n){return n!==""}function gS(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vS(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var eL=/^[ \t]*#include +<([\w\d./]+)>/gm;function mg(n){return n.replace(eL,nL)}var tL=new Map;function nL(n,e){let t=Ze[e];if(t===void 0){let i=tL.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mg(t)}var iL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yS(n){return n.replace(iL,rL)}function rL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _S(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function sL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function oL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Jr:case Kr:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Kr:e="ENVMAP_MODE_REFRACTION";break}return e}function cL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zm:e="ENVMAP_BLENDING_MULTIPLY";break;case EM:e="ENVMAP_BLENDING_MIX";break;case bM:e="ENVMAP_BLENDING_ADD";break}return e}function lL(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function uL(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=sL(t),l=oL(t),u=aL(t),d=cL(t),f=lL(t),h=JP(t),g=KP(s),v=r.createProgram(),m,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cc).join(`
`),p.length>0&&(p+=`
`)):(m=[_S(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cc).join(`
`),p=[_S(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Fi?YP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,XP("linearToOutputTexel",t.outputColorSpace),ZP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cc).join(`
`)),o=mg(o),o=gS(o,t),o=vS(o,t),a=mg(a),a=gS(a,t),a=vS(a,t),o=yS(o),a=yS(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=C+m+o,M=C+p+a,I=hS(r,r.VERTEX_SHADER,S),D=hS(r,r.FRAGMENT_SHADER,M);r.attachShader(v,I),r.attachShader(v,D),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(A){if(n.debug.checkShaderErrors){let $=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(I).trim(),q=r.getShaderInfoLog(D).trim(),X=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,I,D);else{let J=mS(r,I,"vertex"),V=mS(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+$+`
`+J+`
`+V)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(B===""||q==="")&&(H=!1);H&&(A.diagnostics={runnable:X,programLog:$,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(I),r.deleteShader(D),R=new wo(r,v),b=QP(r,v)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,WP)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jP++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=D,this}var dL=0,gg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new vg(e),t.set(e,i)),i}},vg=class{constructor(e){this.id=dL++,this.code=e,this.usedTimes=0}};function fL(n,e,t,i,r,s,o){let a=new La,c=new gg,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,A,$,B){let q=$.fog,X=B.geometry,H=b.isMeshStandardMaterial?$.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),V=J&&J.mapping===tc?J.image.height:null,ae=g[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ee=ge!==void 0?ge.length:0,je=0;X.morphAttributes.position!==void 0&&(je=1),X.morphAttributes.normal!==void 0&&(je=2),X.morphAttributes.color!==void 0&&(je=3);let dt,j,ie,we;if(ae){let mt=li[ae];dt=mt.vertexShader,j=mt.fragmentShader}else dt=b.vertexShader,j=b.fragmentShader,c.update(b),ie=c.getVertexShaderID(b),we=c.getFragmentShaderID(b);let oe=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),ze=B.isInstancedMesh===!0,Oe=B.isBatchedMesh===!0,st=!!b.map,Z=!!b.matcap,ne=!!J,w=!!b.aoMap,Te=!!b.lightMap,Q=!!b.bumpMap,ye=!!b.normalMap,se=!!b.displacementMap,Pe=!!b.emissiveMap,he=!!b.metalnessMap,E=!!b.roughnessMap,y=b.anisotropy>0,F=b.clearcoat>0,G=b.dispersion>0,K=b.iridescence>0,W=b.sheen>0,Ce=b.transmission>0,le=y&&!!b.anisotropyMap,ve=F&&!!b.clearcoatMap,et=F&&!!b.clearcoatNormalMap,te=F&&!!b.clearcoatRoughnessMap,Me=K&&!!b.iridescenceMap,Re=K&&!!b.iridescenceThicknessMap,ke=W&&!!b.sheenColorMap,Se=W&&!!b.sheenRoughnessMap,nt=!!b.specularMap,Ye=!!b.specularColorMap,xt=!!b.specularIntensityMap,N=Ce&&!!b.transmissionMap,ue=Ce&&!!b.thicknessMap,z=!!b.gradientMap,Y=!!b.alphaMap,pe=b.alphaTest>0,fe=!!b.alphaHash,qe=!!b.extensions,bt=Fi;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(bt=n.toneMapping);let jt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:dt,fragmentShader:j,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&B._colorsTexture!==null,instancing:ze,instancingColor:ze&&B.instanceColor!==null,instancingMorph:ze&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Wr,alphaToCoverage:!!b.alphaToCoverage,map:st,matcap:Z,envMap:ne,envMapMode:ne&&J.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:Te,bumpMap:Q,normalMap:ye,displacementMap:f&&se,emissiveMap:Pe,normalMapObjectSpace:ye&&b.normalMapType===FM,normalMapTangentSpace:ye&&b.normalMapType===OM,metalnessMap:he,roughnessMap:E,anisotropy:y,anisotropyMap:le,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:et,clearcoatRoughnessMap:te,dispersion:G,iridescence:K,iridescenceMap:Me,iridescenceThicknessMap:Re,sheen:W,sheenColorMap:ke,sheenRoughnessMap:Se,specularMap:nt,specularColorMap:Ye,specularIntensityMap:xt,transmission:Ce,transmissionMap:N,thicknessMap:ue,gradientMap:z,opaque:b.transparent===!1&&b.blending===zr&&b.alphaToCoverage===!1,alphaMap:Y,alphaTest:pe,alphaHash:fe,combine:b.combine,mapUv:st&&v(b.map.channel),aoMapUv:w&&v(b.aoMap.channel),lightMapUv:Te&&v(b.lightMap.channel),bumpMapUv:Q&&v(b.bumpMap.channel),normalMapUv:ye&&v(b.normalMap.channel),displacementMapUv:se&&v(b.displacementMap.channel),emissiveMapUv:Pe&&v(b.emissiveMap.channel),metalnessMapUv:he&&v(b.metalnessMap.channel),roughnessMapUv:E&&v(b.roughnessMap.channel),anisotropyMapUv:le&&v(b.anisotropyMap.channel),clearcoatMapUv:ve&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:et&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(b.sheenRoughnessMap.channel),specularMapUv:nt&&v(b.specularMap.channel),specularColorMapUv:Ye&&v(b.specularColorMap.channel),specularIntensityMapUv:xt&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:ue&&v(b.thicknessMap.channel),alphaMapUv:Y&&v(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ye||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(st||Y),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:De,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:je,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:st&&b.map.isVideoTexture===!0&&at.getTransfer(b.map.colorSpace)===vt,decodeVideoTextureEmissive:Pe&&b.emissiveMap.isVideoTexture===!0&&at.getTransfer(b.emissiveMap.colorSpace)===vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===oi,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&b.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function p(b){let x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)x.push(A),x.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(C(x,b),S(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function C(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function S(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){let x=g[b.type],A;if(x){let $=li[x];A=YM.clone($.uniforms)}else A=b.uniforms;return A}function I(b,x){let A;for(let $=0,B=u.length;$<B;$++){let q=u[$];if(q.cacheKey===x){A=q,++A.usedTimes;break}}return A===void 0&&(A=new uL(n,x,b,s),u.push(A)),A}function D(b){if(--b.usedTimes===0){let x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function T(b){c.remove(b)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:I,releaseProgram:D,releaseShaderCache:T,programs:u,dispose:R}}function hL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function pL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function MS(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,f,h,g,v,m){let p=o(d,f,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,v,m){let p=o(d,f,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||pL),i.length>1&&i.sort(f||xS),r.length>1&&r.sort(f||xS)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function mL(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new MS,n.set(i,[o])):r>=s.length?(o=new MS,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function gL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new lt};break;case"SpotLight":t={position:new O,direction:new O,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function vL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var yL=0;function _L(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function xL(n){let e=new gL,t=vL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let r=new O,s=new It,o=new It;function a(l){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,C=0,S=0,M=0,I=0,D=0,T=0;l.sort(_L);for(let b=0,x=l.length;b<x;b++){let A=l[b],$=A.color,B=A.intensity,q=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=$.r*B,d+=$.g*B,f+=$.b*B;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],B);T++}else if(A.isDirectionalLight){let H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let J=A.shadow,V=t.get(A);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=X,i.directionalShadowMatrix[h]=A.shadow.matrix,C++}i.directional[h]=H,h++}else if(A.isSpotLight){let H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy($).multiplyScalar(B),H.distance=q,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[v]=H;let J=A.shadow;if(A.map&&(i.spotLightMap[I]=A.map,I++,J.updateMatrices(A),A.castShadow&&D++),i.spotLightMatrix[v]=J.matrix,A.castShadow){let V=t.get(A);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=X,M++}v++}else if(A.isRectAreaLight){let H=e.get(A);H.color.copy($).multiplyScalar(B),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=H,m++}else if(A.isPointLight){let H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){let J=A.shadow,V=t.get(A);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=A.shadow.matrix,S++}i.point[g]=H,g++}else if(A.isHemisphereLight){let H=e.get(A);H.skyColor.copy(A.color).multiplyScalar(B),H.groundColor.copy(A.groundColor).multiplyScalar(B),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==C||R.numPointShadows!==S||R.numSpotShadows!==M||R.numSpotMaps!==I||R.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+I-D,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=T,R.directionalLength=h,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=C,R.numPointShadows=S,R.numSpotShadows=M,R.numSpotMaps=I,R.numLightProbes=T,i.version=yL++)}function c(l,u){let d=0,f=0,h=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,C=l.length;p<C;p++){let S=l[p];if(S.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(S.isSpotLight){let M=i.spot[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let M=i.hemi[v];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function SS(n){let e=new xL(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function ML(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new SS(n),e.set(r,[a])):s>=o.length?(a=new SS(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var SL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EL=`uniform sampler2D shadow_pass;
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
}`;function bL(n,e,t){let i=new Va,r=new me,s=new me,o=new Tt,a=new ku({depthPacking:LM}),c=new Bu,l={},u=t.maxTextureSize,d={[Ri]:en,[en]:Ri,[oi]:oi},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:SL,fragmentShader:EL}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Li;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Um;let p=this.type;this.render=function(D,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let b=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Oi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let B=p!==si&&this.type===si,q=p===si&&this.type!==si;for(let X=0,H=D.length;X<H;X++){let J=D[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let ae=V.getFrameExtents();if(r.multiply(ae),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,V.mapSize.y=s.y)),V.map===null||B===!0||q===!0){let Ee=this.type!==si?{minFilter:Rn,magFilter:Rn}:{};V.map!==null&&V.map.dispose(),V.map=new ri(r.x,r.y,Ee),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let ge=V.getViewportCount();for(let Ee=0;Ee<ge;Ee++){let je=V.getViewport(Ee);o.set(s.x*je.x,s.y*je.y,s.x*je.z,s.y*je.w),$.viewport(o),V.updateMatrices(J,Ee),i=V.getFrustum(),M(T,R,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===si&&C(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,x,A)};function C(D,T){let R=e.update(v);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,h.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ri(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(T,null,R,f,v,null),h.uniforms.shadow_pass.value=D.mapPass.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(T,null,R,h,v,null)}function S(D,T,R,b){let x=null,A=R.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(A!==void 0)x=A;else if(x=R.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let $=x.uuid,B=T.uuid,q=l[$];q===void 0&&(q={},l[$]=q);let X=q[B];X===void 0&&(X=x.clone(),q[B]=X,T.addEventListener("dispose",I)),x=X}if(x.visible=T.visible,x.wireframe=T.wireframe,b===si?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let $=n.properties.get(x);$.light=R}return x}function M(D,T,R,b,x){if(D.visible===!1)return;if(D.layers.test(T.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===si)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,D.matrixWorld);let B=e.update(D),q=D.material;if(Array.isArray(q)){let X=B.groups;for(let H=0,J=X.length;H<J;H++){let V=X[H],ae=q[V.materialIndex];if(ae&&ae.visible){let ge=S(D,ae,b,x);D.onBeforeShadow(n,D,T,R,B,ge,V),n.renderBufferDirect(R,null,B,ge,D,V),D.onAfterShadow(n,D,T,R,B,ge,V)}}}else if(q.visible){let X=S(D,q,b,x);D.onBeforeShadow(n,D,T,R,B,X,null),n.renderBufferDirect(R,null,B,X,D,null),D.onAfterShadow(n,D,T,R,B,X,null)}}let $=D.children;for(let B=0,q=$.length;B<q;B++)M($[B],T,R,b,x)}function I(D){D.target.removeEventListener("dispose",I);for(let R in l){let b=l[R],x=D.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}var wL={[Ju]:Ku,[Qu]:nd,[ed]:id,[Hr]:td,[Ku]:Ju,[nd]:Qu,[id]:ed,[td]:Hr};function CL(n,e){function t(){let N=!1,ue=new Tt,z=null,Y=new Tt(0,0,0,0);return{setMask:function(pe){z!==pe&&!N&&(n.colorMask(pe,pe,pe,pe),z=pe)},setLocked:function(pe){N=pe},setClear:function(pe,fe,qe,bt,jt){jt===!0&&(pe*=bt,fe*=bt,qe*=bt),ue.set(pe,fe,qe,bt),Y.equals(ue)===!1&&(n.clearColor(pe,fe,qe,bt),Y.copy(ue))},reset:function(){N=!1,z=null,Y.set(-1,0,0,0)}}}function i(){let N=!1,ue=!1,z=null,Y=null,pe=null;return{setReversed:function(fe){if(ue!==fe){let qe=e.get("EXT_clip_control");ue?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);let bt=pe;pe=null,this.setClear(bt)}ue=fe},getReversed:function(){return ue},setTest:function(fe){fe?oe(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(fe){z!==fe&&!N&&(n.depthMask(fe),z=fe)},setFunc:function(fe){if(ue&&(fe=wL[fe]),Y!==fe){switch(fe){case Ju:n.depthFunc(n.NEVER);break;case Ku:n.depthFunc(n.ALWAYS);break;case Qu:n.depthFunc(n.LESS);break;case Hr:n.depthFunc(n.LEQUAL);break;case ed:n.depthFunc(n.EQUAL);break;case td:n.depthFunc(n.GEQUAL);break;case nd:n.depthFunc(n.GREATER);break;case id:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=fe}},setLocked:function(fe){N=fe},setClear:function(fe){pe!==fe&&(ue&&(fe=1-fe),n.clearDepth(fe),pe=fe)},reset:function(){N=!1,z=null,Y=null,pe=null,ue=!1}}}function r(){let N=!1,ue=null,z=null,Y=null,pe=null,fe=null,qe=null,bt=null,jt=null;return{setTest:function(mt){N||(mt?oe(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(mt){ue!==mt&&!N&&(n.stencilMask(mt),ue=mt)},setFunc:function(mt,Ln,ui){(z!==mt||Y!==Ln||pe!==ui)&&(n.stencilFunc(mt,Ln,ui),z=mt,Y=Ln,pe=ui)},setOp:function(mt,Ln,ui){(fe!==mt||qe!==Ln||bt!==ui)&&(n.stencilOp(mt,Ln,ui),fe=mt,qe=Ln,bt=ui)},setLocked:function(mt){N=mt},setClear:function(mt){jt!==mt&&(n.clearStencil(mt),jt=mt)},reset:function(){N=!1,ue=null,z=null,Y=null,pe=null,fe=null,qe=null,bt=null,jt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,C=null,S=null,M=null,I=null,D=null,T=new lt(0,0,0),R=0,b=!1,x=null,A=null,$=null,B=null,q=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=J>=2);let ae=null,ge={},Ee=n.getParameter(n.SCISSOR_BOX),je=n.getParameter(n.VIEWPORT),dt=new Tt().fromArray(Ee),j=new Tt().fromArray(je);function ie(N,ue,z,Y){let pe=new Uint8Array(4),fe=n.createTexture();n.bindTexture(N,fe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<z;qe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(ue+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return fe}let we={};we[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Hr),Q(!1),ye(Fm),oe(n.CULL_FACE),w(Oi);function oe(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function De(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function ze(N,ue){return d[N]!==ue?(n.bindFramebuffer(N,ue),d[N]=ue,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Oe(N,ue){let z=h,Y=!1;if(N){z=f.get(ue),z===void 0&&(z=[],f.set(ue,z));let pe=N.textures;if(z.length!==pe.length||z[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,qe=pe.length;fe<qe;fe++)z[fe]=n.COLOR_ATTACHMENT0+fe;z.length=pe.length,Y=!0}}else z[0]!==n.BACK&&(z[0]=n.BACK,Y=!0);Y&&n.drawBuffers(z)}function st(N){return g!==N?(n.useProgram(N),g=N,!0):!1}let Z={[rr]:n.FUNC_ADD,[oM]:n.FUNC_SUBTRACT,[aM]:n.FUNC_REVERSE_SUBTRACT};Z[cM]=n.MIN,Z[lM]=n.MAX;let ne={[uM]:n.ZERO,[dM]:n.ONE,[fM]:n.SRC_COLOR,[xu]:n.SRC_ALPHA,[yM]:n.SRC_ALPHA_SATURATE,[gM]:n.DST_COLOR,[pM]:n.DST_ALPHA,[hM]:n.ONE_MINUS_SRC_COLOR,[Mu]:n.ONE_MINUS_SRC_ALPHA,[vM]:n.ONE_MINUS_DST_COLOR,[mM]:n.ONE_MINUS_DST_ALPHA,[_M]:n.CONSTANT_COLOR,[xM]:n.ONE_MINUS_CONSTANT_COLOR,[MM]:n.CONSTANT_ALPHA,[SM]:n.ONE_MINUS_CONSTANT_ALPHA};function w(N,ue,z,Y,pe,fe,qe,bt,jt,mt){if(N===Oi){v===!0&&(De(n.BLEND),v=!1);return}if(v===!1&&(oe(n.BLEND),v=!0),N!==sM){if(N!==m||mt!==b){if((p!==rr||M!==rr)&&(n.blendEquation(n.FUNC_ADD),p=rr,M=rr),mt)switch(N){case zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case km:n.blendFunc(n.ONE,n.ONE);break;case Bm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case km:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}C=null,S=null,I=null,D=null,T.set(0,0,0),R=0,m=N,b=mt}return}pe=pe||ue,fe=fe||z,qe=qe||Y,(ue!==p||pe!==M)&&(n.blendEquationSeparate(Z[ue],Z[pe]),p=ue,M=pe),(z!==C||Y!==S||fe!==I||qe!==D)&&(n.blendFuncSeparate(ne[z],ne[Y],ne[fe],ne[qe]),C=z,S=Y,I=fe,D=qe),(bt.equals(T)===!1||jt!==R)&&(n.blendColor(bt.r,bt.g,bt.b,jt),T.copy(bt),R=jt),m=N,b=!1}function Te(N,ue){N.side===oi?De(n.CULL_FACE):oe(n.CULL_FACE);let z=N.side===en;ue&&(z=!z),Q(z),N.blending===zr&&N.transparent===!1?w(Oi):w(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let Y=N.stencilWrite;a.setTest(Y),Y&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Pe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(N){x!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),x=N)}function ye(N){N!==nM?(oe(n.CULL_FACE),N!==A&&(N===Fm?n.cullFace(n.BACK):N===iM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),A=N}function se(N){N!==$&&(H&&n.lineWidth(N),$=N)}function Pe(N,ue,z){N?(oe(n.POLYGON_OFFSET_FILL),(B!==ue||q!==z)&&(n.polygonOffset(ue,z),B=ue,q=z)):De(n.POLYGON_OFFSET_FILL)}function he(N){N?oe(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function E(N){N===void 0&&(N=n.TEXTURE0+X-1),ae!==N&&(n.activeTexture(N),ae=N)}function y(N,ue,z){z===void 0&&(ae===null?z=n.TEXTURE0+X-1:z=ae);let Y=ge[z];Y===void 0&&(Y={type:void 0,texture:void 0},ge[z]=Y),(Y.type!==N||Y.texture!==ue)&&(ae!==z&&(n.activeTexture(z),ae=z),n.bindTexture(N,ue||we[N]),Y.type=N,Y.texture=ue)}function F(){let N=ge[ae];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(N){dt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),dt.copy(N))}function Se(N){j.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function nt(N,ue){let z=l.get(ue);z===void 0&&(z=new WeakMap,l.set(ue,z));let Y=z.get(N);Y===void 0&&(Y=n.getUniformBlockIndex(ue,N.name),z.set(N,Y))}function Ye(N,ue){let Y=l.get(ue).get(N);c.get(ue)!==Y&&(n.uniformBlockBinding(ue,Y,N.__bindingPointIndex),c.set(ue,Y))}function xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ae=null,ge={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,C=null,S=null,M=null,I=null,D=null,T=new lt(0,0,0),R=0,b=!1,x=null,A=null,$=null,B=null,q=null,dt.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:De,bindFramebuffer:ze,drawBuffers:Oe,useProgram:st,setBlending:w,setMaterial:Te,setFlipSided:Q,setCullFace:ye,setLineWidth:se,setPolygonOffset:Pe,setScissorTest:he,activeTexture:E,bindTexture:y,unbindTexture:F,compressedTexImage2D:G,compressedTexImage3D:K,texImage2D:Me,texImage3D:Re,updateUBOMapping:nt,uniformBlockBinding:Ye,texStorage2D:et,texStorage3D:te,texSubImage2D:W,texSubImage3D:Ce,compressedTexSubImage2D:le,compressedTexSubImage3D:ve,scissor:ke,viewport:Se,reset:xt}}function TL(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return h?new OffscreenCanvas(E,y):Ra("canvas")}function v(E,y,F){let G=1,K=he(E);if((K.width>F||K.height>F)&&(G=F/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let W=Math.floor(G*K.width),Ce=Math.floor(G*K.height);d===void 0&&(d=g(W,Ce));let le=y?g(W,Ce):d;return le.width=W,le.height=Ce,le.getContext("2d").drawImage(E,0,0,W,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+Ce+")."),le}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(E,y,F,G,K=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=y;if(y===n.RED&&(F===n.FLOAT&&(W=n.R32F),F===n.HALF_FLOAT&&(W=n.R16F),F===n.UNSIGNED_BYTE&&(W=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.R8UI),F===n.UNSIGNED_SHORT&&(W=n.R16UI),F===n.UNSIGNED_INT&&(W=n.R32UI),F===n.BYTE&&(W=n.R8I),F===n.SHORT&&(W=n.R16I),F===n.INT&&(W=n.R32I)),y===n.RG&&(F===n.FLOAT&&(W=n.RG32F),F===n.HALF_FLOAT&&(W=n.RG16F),F===n.UNSIGNED_BYTE&&(W=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RG8UI),F===n.UNSIGNED_SHORT&&(W=n.RG16UI),F===n.UNSIGNED_INT&&(W=n.RG32UI),F===n.BYTE&&(W=n.RG8I),F===n.SHORT&&(W=n.RG16I),F===n.INT&&(W=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGB8UI),F===n.UNSIGNED_SHORT&&(W=n.RGB16UI),F===n.UNSIGNED_INT&&(W=n.RGB32UI),F===n.BYTE&&(W=n.RGB8I),F===n.SHORT&&(W=n.RGB16I),F===n.INT&&(W=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),F===n.UNSIGNED_INT&&(W=n.RGBA32UI),F===n.BYTE&&(W=n.RGBA8I),F===n.SHORT&&(W=n.RGBA16I),F===n.INT&&(W=n.RGBA32I)),y===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),y===n.RGBA){let Ce=K?Aa:at.getTransfer(G);F===n.FLOAT&&(W=n.RGBA32F),F===n.HALF_FLOAT&&(W=n.RGBA16F),F===n.UNSIGNED_BYTE&&(W=Ce===vt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(E,y){let F;return E?y===null||y===lr||y===Qr?F=n.DEPTH24_STENCIL8:y===ci?F=n.DEPTH32F_STENCIL8:y===xo&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===lr||y===Qr?F=n.DEPTH_COMPONENT24:y===ci?F=n.DEPTH_COMPONENT32F:y===xo&&(F=n.DEPTH_COMPONENT16),F}function I(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Rn&&E.minFilter!==jn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function D(E){let y=E.target;y.removeEventListener("dispose",D),R(y),y.isVideoTexture&&u.delete(y)}function T(E){let y=E.target;y.removeEventListener("dispose",T),x(y)}function R(E){let y=i.get(E);if(y.__webglInit===void 0)return;let F=E.source,G=f.get(F);if(G){let K=G[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(E),Object.keys(G).length===0&&f.delete(F)}i.remove(E)}function b(E){let y=i.get(E);n.deleteTexture(y.__webglTexture);let F=E.source,G=f.get(F);delete G[y.__cacheKey],o.memory.textures--}function x(E){let y=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let K=0;K<y.__webglFramebuffer[G].length;K++)n.deleteFramebuffer(y.__webglFramebuffer[G][K]);else n.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)n.deleteFramebuffer(y.__webglFramebuffer[G]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let F=E.textures;for(let G=0,K=F.length;G<K;G++){let W=i.get(F[G]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(F[G])}i.remove(E)}let A=0;function $(){A=0}function B(){let E=A;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),A+=1,E}function q(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function X(E,y){let F=i.get(E);if(E.isVideoTexture&&se(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,E,y);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function H(E,y){let F=i.get(E);if(E.version>0&&F.__version!==E.version){j(F,E,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function J(E,y){let F=i.get(E);if(E.version>0&&F.__version!==E.version){j(F,E,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function V(E,y){let F=i.get(E);if(E.version>0&&F.__version!==E.version){ie(F,E,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}let ae={[Su]:n.REPEAT,[ir]:n.CLAMP_TO_EDGE,[Eu]:n.MIRRORED_REPEAT},ge={[Rn]:n.NEAREST,[NM]:n.NEAREST_MIPMAP_NEAREST,[nc]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[od]:n.LINEAR_MIPMAP_NEAREST,[cr]:n.LINEAR_MIPMAP_LINEAR},Ee={[UM]:n.NEVER,[GM]:n.ALWAYS,[kM]:n.LESS,[Km]:n.LEQUAL,[BM]:n.EQUAL,[HM]:n.GEQUAL,[VM]:n.GREATER,[zM]:n.NOTEQUAL};function je(E,y){if(y.type===ci&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===jn||y.magFilter===od||y.magFilter===nc||y.magFilter===cr||y.minFilter===jn||y.minFilter===od||y.minFilter===nc||y.minFilter===cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ae[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ae[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ae[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ge[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Rn||y.minFilter!==nc&&y.minFilter!==cr||y.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function dt(E,y){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",D));let G=y.source,K=f.get(G);K===void 0&&(K={},f.set(G,K));let W=q(y);if(W!==E.__cacheKey){K[W]===void 0&&(K[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[W].usedTimes++;let Ce=K[E.__cacheKey];Ce!==void 0&&(K[E.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(y)),E.__cacheKey=W,E.__webglTexture=K[W].texture}return F}function j(E,y,F){let G=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=n.TEXTURE_3D);let K=dt(E,y),W=y.source;t.bindTexture(G,E.__webglTexture,n.TEXTURE0+F);let Ce=i.get(W);if(W.version!==Ce.__version||K===!0){t.activeTexture(n.TEXTURE0+F);let le=at.getPrimaries(at.workingColorSpace),ve=y.colorSpace===Ui?null:at.getPrimaries(y.colorSpace),et=y.colorSpace===Ui||le===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let te=v(y.image,!1,r.maxTextureSize);te=Pe(y,te);let Me=s.convert(y.format,y.colorSpace),Re=s.convert(y.type),ke=S(y.internalFormat,Me,Re,y.colorSpace,y.isVideoTexture);je(G,y);let Se,nt=y.mipmaps,Ye=y.isVideoTexture!==!0,xt=Ce.__version===void 0||K===!0,N=W.dataReady,ue=I(y,te);if(y.isDepthTexture)ke=M(y.format===Gr,y.type),xt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,ke,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ke,te.width,te.height,0,Me,Re,null));else if(y.isDataTexture)if(nt.length>0){Ye&&xt&&t.texStorage2D(n.TEXTURE_2D,ue,ke,nt[0].width,nt[0].height);for(let z=0,Y=nt.length;z<Y;z++)Se=nt[z],Ye?N&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,Se.width,Se.height,Me,Re,Se.data):t.texImage2D(n.TEXTURE_2D,z,ke,Se.width,Se.height,0,Me,Re,Se.data);y.generateMipmaps=!1}else Ye?(xt&&t.texStorage2D(n.TEXTURE_2D,ue,ke,te.width,te.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,Me,Re,te.data)):t.texImage2D(n.TEXTURE_2D,0,ke,te.width,te.height,0,Me,Re,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ye&&xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ke,nt[0].width,nt[0].height,te.depth);for(let z=0,Y=nt.length;z<Y;z++)if(Se=nt[z],y.format!==Pn)if(Me!==null)if(Ye){if(N)if(y.layerUpdates.size>0){let pe=sg(Se.width,Se.height,y.format,y.type);for(let fe of y.layerUpdates){let qe=Se.data.subarray(fe*pe/Se.data.BYTES_PER_ELEMENT,(fe+1)*pe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,fe,Se.width,Se.height,1,Me,qe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,Se.width,Se.height,te.depth,Me,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,ke,Se.width,Se.height,te.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,Se.width,Se.height,te.depth,Me,Re,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,z,ke,Se.width,Se.height,te.depth,0,Me,Re,Se.data)}else{Ye&&xt&&t.texStorage2D(n.TEXTURE_2D,ue,ke,nt[0].width,nt[0].height);for(let z=0,Y=nt.length;z<Y;z++)Se=nt[z],y.format!==Pn?Me!==null?Ye?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,z,ke,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?N&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,Se.width,Se.height,Me,Re,Se.data):t.texImage2D(n.TEXTURE_2D,z,ke,Se.width,Se.height,0,Me,Re,Se.data)}else if(y.isDataArrayTexture)if(Ye){if(xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ke,te.width,te.height,te.depth),N)if(y.layerUpdates.size>0){let z=sg(te.width,te.height,y.format,y.type);for(let Y of y.layerUpdates){let pe=te.data.subarray(Y*z/te.data.BYTES_PER_ELEMENT,(Y+1)*z/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,Me,Re,pe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Me,Re,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,te.width,te.height,te.depth,0,Me,Re,te.data);else if(y.isData3DTexture)Ye?(xt&&t.texStorage3D(n.TEXTURE_3D,ue,ke,te.width,te.height,te.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Me,Re,te.data)):t.texImage3D(n.TEXTURE_3D,0,ke,te.width,te.height,te.depth,0,Me,Re,te.data);else if(y.isFramebufferTexture){if(xt)if(Ye)t.texStorage2D(n.TEXTURE_2D,ue,ke,te.width,te.height);else{let z=te.width,Y=te.height;for(let pe=0;pe<ue;pe++)t.texImage2D(n.TEXTURE_2D,pe,ke,z,Y,0,Me,Re,null),z>>=1,Y>>=1}}else if(nt.length>0){if(Ye&&xt){let z=he(nt[0]);t.texStorage2D(n.TEXTURE_2D,ue,ke,z.width,z.height)}for(let z=0,Y=nt.length;z<Y;z++)Se=nt[z],Ye?N&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,Me,Re,Se):t.texImage2D(n.TEXTURE_2D,z,ke,Me,Re,Se);y.generateMipmaps=!1}else if(Ye){if(xt){let z=he(te);t.texStorage2D(n.TEXTURE_2D,ue,ke,z.width,z.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Re,te)}else t.texImage2D(n.TEXTURE_2D,0,ke,Me,Re,te);m(y)&&p(G),Ce.__version=W.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ie(E,y,F){if(y.image.length!==6)return;let G=dt(E,y),K=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);let W=i.get(K);if(K.version!==W.__version||G===!0){t.activeTexture(n.TEXTURE0+F);let Ce=at.getPrimaries(at.workingColorSpace),le=y.colorSpace===Ui?null:at.getPrimaries(y.colorSpace),ve=y.colorSpace===Ui||Ce===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let et=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let Y=0;Y<6;Y++)!et&&!te?Me[Y]=v(y.image[Y],!0,r.maxCubemapSize):Me[Y]=te?y.image[Y].image:y.image[Y],Me[Y]=Pe(y,Me[Y]);let Re=Me[0],ke=s.convert(y.format,y.colorSpace),Se=s.convert(y.type),nt=S(y.internalFormat,ke,Se,y.colorSpace),Ye=y.isVideoTexture!==!0,xt=W.__version===void 0||G===!0,N=K.dataReady,ue=I(y,Re);je(n.TEXTURE_CUBE_MAP,y);let z;if(et){Ye&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,nt,Re.width,Re.height);for(let Y=0;Y<6;Y++){z=Me[Y].mipmaps;for(let pe=0;pe<z.length;pe++){let fe=z[pe];y.format!==Pn?ke!==null?Ye?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,fe.width,fe.height,ke,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,nt,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,fe.width,fe.height,ke,Se,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,nt,fe.width,fe.height,0,ke,Se,fe.data)}}}else{if(z=y.mipmaps,Ye&&xt){z.length>0&&ue++;let Y=he(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,nt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){Ye?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Me[Y].width,Me[Y].height,ke,Se,Me[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,nt,Me[Y].width,Me[Y].height,0,ke,Se,Me[Y].data);for(let pe=0;pe<z.length;pe++){let qe=z[pe].image[Y].image;Ye?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,qe.width,qe.height,ke,Se,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,nt,qe.width,qe.height,0,ke,Se,qe.data)}}else{Ye?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ke,Se,Me[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,nt,ke,Se,Me[Y]);for(let pe=0;pe<z.length;pe++){let fe=z[pe];Ye?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,ke,Se,fe.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,nt,ke,Se,fe.image[Y])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),W.__version=K.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function we(E,y,F,G,K,W){let Ce=s.convert(F.format,F.colorSpace),le=s.convert(F.type),ve=S(F.internalFormat,Ce,le,F.colorSpace),et=i.get(y),te=i.get(F);if(te.__renderTarget=y,!et.__hasExternalTextures){let Me=Math.max(1,y.width>>W),Re=Math.max(1,y.height>>W);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,W,ve,Me,Re,y.depth,0,Ce,le,null):t.texImage2D(K,W,ve,Me,Re,0,Ce,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,K,te.__webglTexture,0,Q(y)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,K,te.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(E,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer){let G=y.depthTexture,K=G&&G.isDepthTexture?G.type:null,W=M(y.stencilBuffer,K),Ce=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Q(y);ye(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,W,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,W,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,W,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,E)}else{let G=y.textures;for(let K=0;K<G.length;K++){let W=G[K],Ce=s.convert(W.format,W.colorSpace),le=s.convert(W.type),ve=S(W.internalFormat,Ce,le,W.colorSpace),et=Q(y);F&&ye(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,ve,y.width,y.height):ye(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,ve,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ve,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let G=i.get(y.depthTexture);G.__renderTarget=y,(!G.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let K=G.__webglTexture,W=Q(y);if(y.depthTexture.format===kr)ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(y.depthTexture.format===Gr)ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ze(E){let y=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=G}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");De(y.__webglFramebuffer,E)}else if(F){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=n.createRenderbuffer(),oe(y.__webglDepthbuffer[G],E,!1);else{let K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),oe(y.__webglDepthbuffer,E,!1);else{let G=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,K)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(E,y,F){let G=i.get(E);y!==void 0&&we(G.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ze(E)}function st(E){let y=E.texture,F=i.get(E),G=i.get(y);E.addEventListener("dispose",T);let K=E.textures,W=E.isWebGLCubeRenderTarget===!0,Ce=K.length>1;if(Ce||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=y.version,o.memory.textures++),W){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let ve=0;ve<y.mipmaps.length;ve++)F.__webglFramebuffer[le][ve]=n.createFramebuffer()}else F.__webglFramebuffer[le]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)F.__webglFramebuffer[le]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let le=0,ve=K.length;le<ve;le++){let et=i.get(K[le]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&ye(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<K.length;le++){let ve=K[le];F.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[le]);let et=s.convert(ve.format,ve.colorSpace),te=s.convert(ve.type),Me=S(ve.internalFormat,et,te,ve.colorSpace,E.isXRRenderTarget===!0),Re=Q(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,F.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),je(n.TEXTURE_CUBE_MAP,y);for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)we(F.__webglFramebuffer[le][ve],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve);else we(F.__webglFramebuffer[le],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let le=0,ve=K.length;le<ve;le++){let et=K[le],te=i.get(et);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),je(n.TEXTURE_2D,et),we(F.__webglFramebuffer,E,et,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(et)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,G.__webglTexture),je(le,y),y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)we(F.__webglFramebuffer[ve],E,y,n.COLOR_ATTACHMENT0,le,ve);else we(F.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,le,0);m(y)&&p(le),t.unbindTexture()}E.depthBuffer&&ze(E)}function Z(E){let y=E.textures;for(let F=0,G=y.length;F<G;F++){let K=y[F];if(m(K)){let W=C(E),Ce=i.get(K).__webglTexture;t.bindTexture(W,Ce),p(W),t.unbindTexture()}}}let ne=[],w=[];function Te(E){if(E.samples>0){if(ye(E)===!1){let y=E.textures,F=E.width,G=E.height,K=n.COLOR_BUFFER_BIT,W=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(E),le=y.length>1;if(le)for(let ve=0;ve<y.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[ve]);let et=i.get(y[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,K,n.NEAREST),c===!0&&(ne.length=0,w.length=0,ne.push(n.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ne.push(W),w.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ve=0;ve<y.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[ve]);let et=i.get(y[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Q(E){return Math.min(r.maxSamples,E.samples)}function ye(E){let y=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function se(E){let y=o.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function Pe(E,y){let F=E.colorSpace,G=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Wr&&F!==Ui&&(at.getTransfer(F)===vt?(G!==Pn||K!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function he(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=$,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Oe,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ye}function DL(n,e){function t(i,r=Ui){let s,o=at.getTransfer(r);if(i===ai)return n.UNSIGNED_BYTE;if(i===cd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ld)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hm)return n.BYTE;if(i===Gm)return n.SHORT;if(i===xo)return n.UNSIGNED_SHORT;if(i===ad)return n.INT;if(i===lr)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===Mo)return n.HALF_FLOAT;if(i===jm)return n.ALPHA;if(i===$m)return n.RGB;if(i===Pn)return n.RGBA;if(i===qm)return n.LUMINANCE;if(i===Xm)return n.LUMINANCE_ALPHA;if(i===kr)return n.DEPTH_COMPONENT;if(i===Gr)return n.DEPTH_STENCIL;if(i===Ym)return n.RED;if(i===ud)return n.RED_INTEGER;if(i===Zm)return n.RG;if(i===dd)return n.RG_INTEGER;if(i===fd)return n.RGBA_INTEGER;if(i===ic||i===rc||i===sc||i===oc)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ic)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ic)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hd||i===pd||i===md||i===gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===md)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vd||i===yd||i===_d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vd||i===yd)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_d)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xd||i===Md||i===Sd||i===Ed||i===bd||i===wd||i===Cd||i===Td||i===Dd||i===Ad||i===Id||i===Rd||i===Nd||i===Pd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xd)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Md)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sd)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ed)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bd)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wd)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cd)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Td)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dd)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ad)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Id)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rd)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nd)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pd)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===Ld||i===Od)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ac)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ld)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Od)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jm||i===Fd||i===Ud||i===kd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ud)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var AL={type:"move"},lc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AL)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Xr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},IL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RL=`
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

}`,yg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new ur,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new $n({vertexShader:IL,fragmentShader:RL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_g=class extends Ni{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,v=new yg,m=t.getContextAttributes(),p=null,C=null,S=[],M=[],I=new me,D=null,T=new Yt;T.viewport=new Tt;let R=new Yt;R.viewport=new Tt;let b=[T,R],x=new Yu,A=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=S[j];return ie===void 0&&(ie=new lc,S[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=S[j];return ie===void 0&&(ie=new lc,S[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=S[j];return ie===void 0&&(ie=new lc,S[j]=ie),ie.getHandSpace()};function B(j){let ie=M.indexOf(j.inputSource);if(ie===-1)return;let we=S[ie];we!==void 0&&(we.update(j.inputSource,j.frame,l||o),we.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",X);for(let j=0;j<S.length;j++){let ie=M[j];ie!==null&&(M[j]=null,S[j].disconnect(ie))}A=null,$=null,v.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,C=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(j){return cs(this,null,function*(){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),D=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),C=new ri(h.framebufferWidth,h.framebufferHeight,{format:Pn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,we=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Gr:kr,we=m.stencil?Qr:lr);let De={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new ri(f.textureWidth,f.textureHeight,{format:Pn,type:ai,depthTexture:new za(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(j){for(let ie=0;ie<j.removed.length;ie++){let we=j.removed[ie],oe=M.indexOf(we);oe>=0&&(M[oe]=null,S[oe].disconnect(we))}for(let ie=0;ie<j.added.length;ie++){let we=j.added[ie],oe=M.indexOf(we);if(oe===-1){for(let ze=0;ze<S.length;ze++)if(ze>=M.length){M.push(we),oe=ze;break}else if(M[ze]===null){M[ze]=we,oe=ze;break}if(oe===-1)break}let De=S[oe];De&&De.connect(we)}}let H=new O,J=new O;function V(j,ie,we){H.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(we.matrixWorld);let oe=H.distanceTo(J),De=ie.projectionMatrix.elements,ze=we.projectionMatrix.elements,Oe=De[14]/(De[10]-1),st=De[14]/(De[10]+1),Z=(De[9]+1)/De[5],ne=(De[9]-1)/De[5],w=(De[8]-1)/De[0],Te=(ze[8]+1)/ze[0],Q=Oe*w,ye=Oe*Te,se=oe/(-w+Te),Pe=se*-w;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Pe),j.translateZ(se),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),De[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let he=Oe+se,E=st+se,y=Q-Pe,F=ye+(oe-Pe),G=Z*st/E*he,K=ne*st/E*he;j.projectionMatrix.makePerspective(y,F,G,K,he,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ae(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,we=j.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(we=v.depthFar)),x.near=R.near=T.near=ie,x.far=R.far=T.far=we,(A!==x.near||$!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,$=x.far),T.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,x.layers.mask=T.layers.mask|R.layers.mask;let oe=j.parent,De=x.cameras;ae(x,oe);for(let ze=0;ze<De.length;ze++)ae(De[ze],oe);De.length===2?V(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),ge(j,x,oe)};function ge(j,ie,we){we===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(we.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=wu*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Ee=null;function je(j,ie){if(u=ie.getViewerPose(l||o),g=ie,u!==null){let we=u.views;h!==null&&(e.setRenderTargetFramebuffer(C,h.framebuffer),e.setRenderTarget(C));let oe=!1;we.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let ze=0;ze<we.length;ze++){let Oe=we[ze],st=null;if(h!==null)st=h.getViewport(Oe);else{let ne=d.getViewSubImage(f,Oe);st=ne.viewport,ze===0&&(e.setRenderTargetTextures(C,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),e.setRenderTarget(C))}let Z=b[ze];Z===void 0&&(Z=new Yt,Z.layers.enable(ze),Z.viewport=new Tt,b[ze]=Z),Z.matrix.fromArray(Oe.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Oe.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(st.x,st.y,st.width,st.height),ze===0&&(x.matrix.copy(Z.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(Z)}let De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){let ze=d.getDepthInformation(we[0]);ze&&ze.isValid&&ze.texture&&v.init(e,ze,r.renderState)}}for(let we=0;we<S.length;we++){let oe=M[we],De=S[we];oe!==null&&De!==void 0&&De.update(oe,ie,l||o)}Ee&&Ee(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}let dt=new ES;dt.setAnimationLoop(je),this.setAnimationLoop=function(j){Ee=j},this.dispose=function(){}}},rs=new jr,NL=new It;function PL(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,tg(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,C,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,C,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let C=e.get(p),S=C.envMap,M=C.envMapRotation;S&&(m.envMap.value=S,rs.copy(M),rs.x*=-1,rs.y*=-1,rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(NL.makeRotationFromEuler(rs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,C,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LL(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,S){let M=S.program;i.uniformBlockBinding(C,M)}function l(C,S){let M=r[C.id];M===void 0&&(g(C),M=u(C),r[C.id]=M,C.addEventListener("dispose",m));let I=S.program;i.updateUBOMapping(C,I);let D=e.render.frame;s[C.id]!==D&&(f(C),s[C.id]=D)}function u(C){let S=d();C.__bindingPointIndex=S;let M=n.createBuffer(),I=C.__size,D=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,M),M}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){let S=r[C.id],M=C.uniforms,I=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let D=0,T=M.length;D<T;D++){let R=Array.isArray(M[D])?M[D]:[M[D]];for(let b=0,x=R.length;b<x;b++){let A=R[b];if(h(A,D,b,I)===!0){let $=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],q=0;for(let X=0;X<B.length;X++){let H=B[X],J=v(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,$+q,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(C,S,M,I){let D=C.value,T=S+"_"+M;if(I[T]===void 0)return typeof D=="number"||typeof D=="boolean"?I[T]=D:I[T]=D.clone(),!0;{let R=I[T];if(typeof D=="number"||typeof D=="boolean"){if(R!==D)return I[T]=D,!0}else if(R.equals(D)===!1)return R.copy(D),!0}return!1}function g(C){let S=C.uniforms,M=0,I=16;for(let T=0,R=S.length;T<R;T++){let b=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,A=b.length;x<A;x++){let $=b[x],B=Array.isArray($.value)?$.value:[$.value];for(let q=0,X=B.length;q<X;q++){let H=B[q],J=v(H),V=M%I,ae=V%J.boundary,ge=V+ae;M+=ae,ge!==0&&I-ge<J.storage&&(M+=I-ge),$.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=J.storage}}}let D=M%I;return D>0&&(M+=I-D),C.__size=M,C.__cache={},this}function v(C){let S={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(S.boundary=4,S.storage=4):C.isVector2?(S.boundary=8,S.storage=8):C.isVector3||C.isColor?(S.boundary=16,S.storage=12):C.isVector4?(S.boundary=16,S.storage=16):C.isMatrix3?(S.boundary=48,S.storage=48):C.isMatrix4?(S.boundary=64,S.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),S}function m(C){let S=C.target;S.removeEventListener("dispose",m);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let C in r)n.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var jd=class{constructor(e={}){let{canvas:t=WM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,C=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=Fi,this.toneMappingExposure=1;let M=this,I=!1,D=0,T=0,R=null,b=-1,x=null,A=new Tt,$=new Tt,B=null,q=new lt(0),X=0,H=t.width,J=t.height,V=1,ae=null,ge=null,Ee=new Tt(0,0,H,J),je=new Tt(0,0,H,J),dt=!1,j=new Va,ie=!1,we=!1,oe=new It,De=new It,ze=new O,Oe=new Tt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function ne(){return R===null?V:1}let w=i;function Te(_,P){return t.getContext(_,P)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zu}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",fe,!1),w===null){let P="webgl2";if(w=Te(P,_),w===null)throw Te(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Q,ye,se,Pe,he,E,y,F,G,K,W,Ce,le,ve,et,te,Me,Re,ke,Se,nt,Ye,xt,N;function ue(){Q=new JN(w),Q.init(),Ye=new DL(w,Q),ye=new jN(w,Q,e,Ye),se=new CL(w,Q),ye.reverseDepthBuffer&&f&&se.buffers.depth.setReversed(!0),Pe=new eP(w),he=new hL,E=new TL(w,Q,se,he,ye,Ye,Pe),y=new qN(M),F=new ZN(M),G=new aR(w),xt=new GN(w,G),K=new KN(w,G,Pe,xt),W=new nP(w,K,G,Pe),ke=new tP(w,ye,E),te=new $N(he),Ce=new fL(M,y,F,Q,ye,xt,te),le=new PL(M,he),ve=new mL,et=new ML(Q),Re=new HN(M,y,F,se,W,h,c),Me=new bL(M,W,ye),N=new LL(w,Pe,ye,se),Se=new WN(w,Q,Pe),nt=new QN(w,Q,Pe),Pe.programs=Ce.programs,M.capabilities=ye,M.extensions=Q,M.properties=he,M.renderLists=ve,M.shadowMap=Me,M.state=se,M.info=Pe}ue();let z=new _g(M,w);this.xr=z,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let _=Q.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Q.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(_){_!==void 0&&(V=_,this.setSize(H,J,!1))},this.getSize=function(_){return _.set(H,J)},this.setSize=function(_,P,U=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=_,J=P,t.width=Math.floor(_*V),t.height=Math.floor(P*V),U===!0&&(t.style.width=_+"px",t.style.height=P+"px"),this.setViewport(0,0,_,P)},this.getDrawingBufferSize=function(_){return _.set(H*V,J*V).floor()},this.setDrawingBufferSize=function(_,P,U){H=_,J=P,V=U,t.width=Math.floor(_*U),t.height=Math.floor(P*U),this.setViewport(0,0,_,P)},this.getCurrentViewport=function(_){return _.copy(A)},this.getViewport=function(_){return _.copy(Ee)},this.setViewport=function(_,P,U,k){_.isVector4?Ee.set(_.x,_.y,_.z,_.w):Ee.set(_,P,U,k),se.viewport(A.copy(Ee).multiplyScalar(V).round())},this.getScissor=function(_){return _.copy(je)},this.setScissor=function(_,P,U,k){_.isVector4?je.set(_.x,_.y,_.z,_.w):je.set(_,P,U,k),se.scissor($.copy(je).multiplyScalar(V).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(_){se.setScissorTest(dt=_)},this.setOpaqueSort=function(_){ae=_},this.setTransparentSort=function(_){ge=_},this.getClearColor=function(_){return _.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(_=!0,P=!0,U=!0){let k=0;if(_){let L=!1;if(R!==null){let ee=R.texture.format;L=ee===fd||ee===dd||ee===ud}if(L){let ee=R.texture.type,de=ee===ai||ee===lr||ee===xo||ee===Qr||ee===cd||ee===ld,_e=Re.getClearColor(),be=Re.getClearAlpha(),Be=_e.r,He=_e.g,Ae=_e.b;de?(g[0]=Be,g[1]=He,g[2]=Ae,g[3]=be,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=Be,v[1]=He,v[2]=Ae,v[3]=be,w.clearBufferiv(w.COLOR,0,v))}else k|=w.COLOR_BUFFER_BIT}P&&(k|=w.DEPTH_BUFFER_BIT),U&&(k|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Re.dispose(),ve.dispose(),et.dispose(),he.dispose(),y.dispose(),F.dispose(),W.dispose(),xt.dispose(),N.dispose(),Ce.dispose(),z.dispose(),z.removeEventListener("sessionstart",Sg),z.removeEventListener("sessionend",Eg),dr.stop()};function Y(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let _=Pe.autoReset,P=Me.enabled,U=Me.autoUpdate,k=Me.needsUpdate,L=Me.type;ue(),Pe.autoReset=_,Me.enabled=P,Me.autoUpdate=U,Me.needsUpdate=k,Me.type=L}function fe(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function qe(_){let P=_.target;P.removeEventListener("dispose",qe),bt(P)}function bt(_){jt(_),he.remove(_)}function jt(_){let P=he.get(_).programs;P!==void 0&&(P.forEach(function(U){Ce.releaseProgram(U)}),_.isShaderMaterial&&Ce.releaseShaderCache(_))}this.renderBufferDirect=function(_,P,U,k,L,ee){P===null&&(P=st);let de=L.isMesh&&L.matrixWorld.determinant()<0,_e=AS(_,P,U,k,L);se.setMaterial(k,de);let be=U.index,Be=1;if(k.wireframe===!0){if(be=K.getWireframeAttribute(U),be===void 0)return;Be=2}let He=U.drawRange,Ae=U.attributes.position,ot=He.start*Be,ft=(He.start+He.count)*Be;ee!==null&&(ot=Math.max(ot,ee.start*Be),ft=Math.min(ft,(ee.start+ee.count)*Be)),be!==null?(ot=Math.max(ot,0),ft=Math.min(ft,be.count)):Ae!=null&&(ot=Math.max(ot,0),ft=Math.min(ft,Ae.count));let Rt=ft-ot;if(Rt<0||Rt===1/0)return;xt.setup(L,k,_e,U,be);let wt,ct=Se;if(be!==null&&(wt=G.get(be),ct=nt,ct.setIndex(wt)),L.isMesh)k.wireframe===!0?(se.setLineWidth(k.wireframeLinewidth*ne()),ct.setMode(w.LINES)):ct.setMode(w.TRIANGLES);else if(L.isLine){let Ie=k.linewidth;Ie===void 0&&(Ie=1),se.setLineWidth(Ie*ne()),L.isLineSegments?ct.setMode(w.LINES):L.isLineLoop?ct.setMode(w.LINE_LOOP):ct.setMode(w.LINE_STRIP)}else L.isPoints?ct.setMode(w.POINTS):L.isSprite&&ct.setMode(w.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)ct.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ct.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Ie=L._multiDrawStarts,zt=L._multiDrawCounts,ht=L._multiDrawCount,On=be?G.get(be).bytesPerElement:1,as=he.get(k).currentProgram.getUniforms();for(let on=0;on<ht;on++)as.setValue(w,"_gl_DrawID",on),ct.render(Ie[on]/On,zt[on])}else if(L.isInstancedMesh)ct.renderInstances(ot,Rt,L.count);else if(U.isInstancedBufferGeometry){let Ie=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,zt=Math.min(U.instanceCount,Ie);ct.renderInstances(ot,Rt,zt)}else ct.render(ot,Rt)};function mt(_,P,U){_.transparent===!0&&_.side===oi&&_.forceSinglePass===!1?(_.side=en,_.needsUpdate=!0,fc(_,P,U),_.side=Ri,_.needsUpdate=!0,fc(_,P,U),_.side=oi):fc(_,P,U)}this.compile=function(_,P,U=null){U===null&&(U=_),p=et.get(U),p.init(P),S.push(p),U.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),_!==U&&_.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();let k=new Set;return _.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let ee=L.material;if(ee)if(Array.isArray(ee))for(let de=0;de<ee.length;de++){let _e=ee[de];mt(_e,U,L),k.add(_e)}else mt(ee,U,L),k.add(ee)}),S.pop(),p=null,k},this.compileAsync=function(_,P,U=null){let k=this.compile(_,P,U);return new Promise(L=>{function ee(){if(k.forEach(function(de){he.get(de).currentProgram.isReady()&&k.delete(de)}),k.size===0){L(_);return}setTimeout(ee,10)}Q.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ln=null;function ui(_){Ln&&Ln(_)}function Sg(){dr.stop()}function Eg(){dr.start()}let dr=new ES;dr.setAnimationLoop(ui),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(_){Ln=_,z.setAnimationLoop(_),_===null?dr.stop():dr.start()},z.addEventListener("sessionstart",Sg),z.addEventListener("sessionend",Eg),this.render=function(_,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(P),P=z.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,P,R),p=et.get(_,S.length),p.init(P),S.push(p),De.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),j.setFromProjectionMatrix(De),we=this.localClippingEnabled,ie=te.init(this.clippingPlanes,we),m=ve.get(_,C.length),m.init(),C.push(m),z.enabled===!0&&z.isPresenting===!0){let ee=M.xr.getDepthSensingMesh();ee!==null&&Xd(ee,P,-1/0,M.sortObjects)}Xd(_,P,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ae,ge),Z=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Z&&Re.addToRenderList(m,_),this.info.render.frame++,ie===!0&&te.beginShadows();let U=p.state.shadowsArray;Me.render(U,_,P),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,L=m.transmissive;if(p.setupLights(),P.isArrayCamera){let ee=P.cameras;if(L.length>0)for(let de=0,_e=ee.length;de<_e;de++){let be=ee[de];wg(k,L,_,be)}Z&&Re.render(_);for(let de=0,_e=ee.length;de<_e;de++){let be=ee[de];bg(m,_,be,be.viewport)}}else L.length>0&&wg(k,L,_,P),Z&&Re.render(_),bg(m,_,P);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),_.isScene===!0&&_.onAfterRender(M,_,P),xt.resetDefaultState(),b=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],ie===!0&&te.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Xd(_,P,U,k){if(_.visible===!1)return;if(_.layers.test(P.layers)){if(_.isGroup)U=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(P);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||j.intersectsSprite(_)){k&&Oe.setFromMatrixPosition(_.matrixWorld).applyMatrix4(De);let de=W.update(_),_e=_.material;_e.visible&&m.push(_,de,_e,U,Oe.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||j.intersectsObject(_))){let de=W.update(_),_e=_.material;if(k&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Oe.copy(_.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Oe.copy(de.boundingSphere.center)),Oe.applyMatrix4(_.matrixWorld).applyMatrix4(De)),Array.isArray(_e)){let be=de.groups;for(let Be=0,He=be.length;Be<He;Be++){let Ae=be[Be],ot=_e[Ae.materialIndex];ot&&ot.visible&&m.push(_,de,ot,U,Oe.z,Ae)}}else _e.visible&&m.push(_,de,_e,U,Oe.z,null)}}let ee=_.children;for(let de=0,_e=ee.length;de<_e;de++)Xd(ee[de],P,U,k)}function bg(_,P,U,k){let L=_.opaque,ee=_.transmissive,de=_.transparent;p.setupLightsView(U),ie===!0&&te.setGlobalState(M.clippingPlanes,U),k&&se.viewport(A.copy(k)),L.length>0&&dc(L,P,U),ee.length>0&&dc(ee,P,U),de.length>0&&dc(de,P,U),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function wg(_,P,U,k){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ri(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Mo:ai,minFilter:cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let ee=p.state.transmissionRenderTarget[k.id],de=k.viewport||A;ee.setSize(de.z,de.w);let _e=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(q),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Z&&Re.render(U);let be=M.toneMapping;M.toneMapping=Fi;let Be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),ie===!0&&te.setGlobalState(M.clippingPlanes,k),dc(_,U,k),E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee),Q.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ae=0,ot=P.length;Ae<ot;Ae++){let ft=P[Ae],Rt=ft.object,wt=ft.geometry,ct=ft.material,Ie=ft.group;if(ct.side===oi&&Rt.layers.test(k.layers)){let zt=ct.side;ct.side=en,ct.needsUpdate=!0,Cg(Rt,U,k,wt,ct,Ie),ct.side=zt,ct.needsUpdate=!0,He=!0}}He===!0&&(E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee))}M.setRenderTarget(_e),M.setClearColor(q,X),Be!==void 0&&(k.viewport=Be),M.toneMapping=be}function dc(_,P,U){let k=P.isScene===!0?P.overrideMaterial:null;for(let L=0,ee=_.length;L<ee;L++){let de=_[L],_e=de.object,be=de.geometry,Be=k===null?de.material:k,He=de.group;_e.layers.test(U.layers)&&Cg(_e,P,U,be,Be,He)}}function Cg(_,P,U,k,L,ee){_.onBeforeRender(M,P,U,k,L,ee),_.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),L.onBeforeRender(M,P,U,k,_,ee),L.transparent===!0&&L.side===oi&&L.forceSinglePass===!1?(L.side=en,L.needsUpdate=!0,M.renderBufferDirect(U,P,k,L,_,ee),L.side=Ri,L.needsUpdate=!0,M.renderBufferDirect(U,P,k,L,_,ee),L.side=oi):M.renderBufferDirect(U,P,k,L,_,ee),_.onAfterRender(M,P,U,k,L,ee)}function fc(_,P,U){P.isScene!==!0&&(P=st);let k=he.get(_),L=p.state.lights,ee=p.state.shadowsArray,de=L.state.version,_e=Ce.getParameters(_,L.state,ee,P,U),be=Ce.getProgramCacheKey(_e),Be=k.programs;k.environment=_.isMeshStandardMaterial?P.environment:null,k.fog=P.fog,k.envMap=(_.isMeshStandardMaterial?F:y).get(_.envMap||k.environment),k.envMapRotation=k.environment!==null&&_.envMap===null?P.environmentRotation:_.envMapRotation,Be===void 0&&(_.addEventListener("dispose",qe),Be=new Map,k.programs=Be);let He=Be.get(be);if(He!==void 0){if(k.currentProgram===He&&k.lightsStateVersion===de)return Dg(_,_e),He}else _e.uniforms=Ce.getUniforms(_),_.onBeforeCompile(_e,M),He=Ce.acquireProgram(_e,be),Be.set(be,He),k.uniforms=_e.uniforms;let Ae=k.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ae.clippingPlanes=te.uniform),Dg(_,_e),k.needsLights=RS(_),k.lightsStateVersion=de,k.needsLights&&(Ae.ambientLightColor.value=L.state.ambient,Ae.lightProbe.value=L.state.probe,Ae.directionalLights.value=L.state.directional,Ae.directionalLightShadows.value=L.state.directionalShadow,Ae.spotLights.value=L.state.spot,Ae.spotLightShadows.value=L.state.spotShadow,Ae.rectAreaLights.value=L.state.rectArea,Ae.ltc_1.value=L.state.rectAreaLTC1,Ae.ltc_2.value=L.state.rectAreaLTC2,Ae.pointLights.value=L.state.point,Ae.pointLightShadows.value=L.state.pointShadow,Ae.hemisphereLights.value=L.state.hemi,Ae.directionalShadowMap.value=L.state.directionalShadowMap,Ae.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ae.spotShadowMap.value=L.state.spotShadowMap,Ae.spotLightMatrix.value=L.state.spotLightMatrix,Ae.spotLightMap.value=L.state.spotLightMap,Ae.pointShadowMap.value=L.state.pointShadowMap,Ae.pointShadowMatrix.value=L.state.pointShadowMatrix),k.currentProgram=He,k.uniformsList=null,He}function Tg(_){if(_.uniformsList===null){let P=_.currentProgram.getUniforms();_.uniformsList=wo.seqWithValue(P.seq,_.uniforms)}return _.uniformsList}function Dg(_,P){let U=he.get(_);U.outputColorSpace=P.outputColorSpace,U.batching=P.batching,U.batchingColor=P.batchingColor,U.instancing=P.instancing,U.instancingColor=P.instancingColor,U.instancingMorph=P.instancingMorph,U.skinning=P.skinning,U.morphTargets=P.morphTargets,U.morphNormals=P.morphNormals,U.morphColors=P.morphColors,U.morphTargetsCount=P.morphTargetsCount,U.numClippingPlanes=P.numClippingPlanes,U.numIntersection=P.numClipIntersection,U.vertexAlphas=P.vertexAlphas,U.vertexTangents=P.vertexTangents,U.toneMapping=P.toneMapping}function AS(_,P,U,k,L){P.isScene!==!0&&(P=st),E.resetTextureUnits();let ee=P.fog,de=k.isMeshStandardMaterial?P.environment:null,_e=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wr,be=(k.isMeshStandardMaterial?F:y).get(k.envMap||de),Be=k.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,He=!!U.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!U.morphAttributes.position,ot=!!U.morphAttributes.normal,ft=!!U.morphAttributes.color,Rt=Fi;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Rt=M.toneMapping);let wt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ct=wt!==void 0?wt.length:0,Ie=he.get(k),zt=p.state.lights;if(ie===!0&&(we===!0||_!==x)){let Jt=_===x&&k.id===b;te.setState(k,_,Jt)}let ht=!1;k.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==zt.state.version||Ie.outputColorSpace!==_e||L.isBatchedMesh&&Ie.batching===!1||!L.isBatchedMesh&&Ie.batching===!0||L.isBatchedMesh&&Ie.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ie.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ie.instancing===!1||!L.isInstancedMesh&&Ie.instancing===!0||L.isSkinnedMesh&&Ie.skinning===!1||!L.isSkinnedMesh&&Ie.skinning===!0||L.isInstancedMesh&&Ie.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ie.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ie.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ie.instancingMorph===!1&&L.morphTexture!==null||Ie.envMap!==be||k.fog===!0&&Ie.fog!==ee||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==te.numPlanes||Ie.numIntersection!==te.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==He||Ie.morphTargets!==Ae||Ie.morphNormals!==ot||Ie.morphColors!==ft||Ie.toneMapping!==Rt||Ie.morphTargetsCount!==ct)&&(ht=!0):(ht=!0,Ie.__version=k.version);let On=Ie.currentProgram;ht===!0&&(On=fc(k,P,L));let as=!1,on=!1,To=!1,St=On.getUniforms(),Mn=Ie.uniforms;if(se.useProgram(On.program)&&(as=!0,on=!0,To=!0),k.id!==b&&(b=k.id,on=!0),as||x!==_){se.buffers.depth.getReversed()?(oe.copy(_.projectionMatrix),$M(oe),qM(oe),St.setValue(w,"projectionMatrix",oe)):St.setValue(w,"projectionMatrix",_.projectionMatrix),St.setValue(w,"viewMatrix",_.matrixWorldInverse);let tn=St.map.cameraPosition;tn!==void 0&&tn.setValue(w,ze.setFromMatrixPosition(_.matrixWorld)),ye.logarithmicDepthBuffer&&St.setValue(w,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&St.setValue(w,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,on=!0,To=!0)}if(L.isSkinnedMesh){St.setOptional(w,L,"bindMatrix"),St.setOptional(w,L,"bindMatrixInverse");let Jt=L.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),St.setValue(w,"boneTexture",Jt.boneTexture,E))}L.isBatchedMesh&&(St.setOptional(w,L,"batchingTexture"),St.setValue(w,"batchingTexture",L._matricesTexture,E),St.setOptional(w,L,"batchingIdTexture"),St.setValue(w,"batchingIdTexture",L._indirectTexture,E),St.setOptional(w,L,"batchingColorTexture"),L._colorsTexture!==null&&St.setValue(w,"batchingColorTexture",L._colorsTexture,E));let Sn=U.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&ke.update(L,U,On),(on||Ie.receiveShadow!==L.receiveShadow)&&(Ie.receiveShadow=L.receiveShadow,St.setValue(w,"receiveShadow",L.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Mn.envMap.value=be,Mn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&P.environment!==null&&(Mn.envMapIntensity.value=P.environmentIntensity),on&&(St.setValue(w,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&IS(Mn,To),ee&&k.fog===!0&&le.refreshFogUniforms(Mn,ee),le.refreshMaterialUniforms(Mn,k,V,J,p.state.transmissionRenderTarget[_.id]),wo.upload(w,Tg(Ie),Mn,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(wo.upload(w,Tg(Ie),Mn,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&St.setValue(w,"center",L.center),St.setValue(w,"modelViewMatrix",L.modelViewMatrix),St.setValue(w,"normalMatrix",L.normalMatrix),St.setValue(w,"modelMatrix",L.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Jt=k.uniformsGroups;for(let tn=0,Yd=Jt.length;tn<Yd;tn++){let fr=Jt[tn];N.update(fr,On),N.bind(fr,On)}}return On}function IS(_,P){_.ambientLightColor.needsUpdate=P,_.lightProbe.needsUpdate=P,_.directionalLights.needsUpdate=P,_.directionalLightShadows.needsUpdate=P,_.pointLights.needsUpdate=P,_.pointLightShadows.needsUpdate=P,_.spotLights.needsUpdate=P,_.spotLightShadows.needsUpdate=P,_.rectAreaLights.needsUpdate=P,_.hemisphereLights.needsUpdate=P}function RS(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(_,P,U){he.get(_.texture).__webglTexture=P,he.get(_.depthTexture).__webglTexture=U;let k=he.get(_);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=U===void 0,k.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,P){let U=he.get(_);U.__webglFramebuffer=P,U.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(_,P=0,U=0){R=_,D=P,T=U;let k=!0,L=null,ee=!1,de=!1;if(_){let be=he.get(_);if(be.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(w.FRAMEBUFFER,null),k=!1;else if(be.__webglFramebuffer===void 0)E.setupRenderTarget(_);else if(be.__hasExternalTextures)E.rebindTextures(_,he.get(_.texture).__webglTexture,he.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ae=_.depthTexture;if(be.__boundDepthTexture!==Ae){if(Ae!==null&&he.has(Ae)&&(_.width!==Ae.image.width||_.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(_)}}let Be=_.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(de=!0);let He=he.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(He[P])?L=He[P][U]:L=He[P],ee=!0):_.samples>0&&E.useMultisampledRTT(_)===!1?L=he.get(_).__webglMultisampledFramebuffer:Array.isArray(He)?L=He[U]:L=He,A.copy(_.viewport),$.copy(_.scissor),B=_.scissorTest}else A.copy(Ee).multiplyScalar(V).floor(),$.copy(je).multiplyScalar(V).floor(),B=dt;if(se.bindFramebuffer(w.FRAMEBUFFER,L)&&k&&se.drawBuffers(_,L),se.viewport(A),se.scissor($),se.setScissorTest(B),ee){let be=he.get(_.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+P,be.__webglTexture,U)}else if(de){let be=he.get(_.texture),Be=P||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,be.__webglTexture,U||0,Be)}b=-1},this.readRenderTargetPixels=function(_,P,U,k,L,ee,de){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=he.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){se.bindFramebuffer(w.FRAMEBUFFER,_e);try{let be=_.texture,Be=be.format,He=be.type;if(!ye.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=_.width-k&&U>=0&&U<=_.height-L&&w.readPixels(P,U,k,L,Ye.convert(Be),Ye.convert(He),ee)}finally{let be=R!==null?he.get(R).__webglFramebuffer:null;se.bindFramebuffer(w.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=function(_,P,U,k,L,ee,de){return cs(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=he.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){let be=_.texture,Be=be.format,He=be.type;if(!ye.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=_.width-k&&U>=0&&U<=_.height-L){se.bindFramebuffer(w.FRAMEBUFFER,_e);let Ae=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ae),w.bufferData(w.PIXEL_PACK_BUFFER,ee.byteLength,w.STREAM_READ),w.readPixels(P,U,k,L,Ye.convert(Be),Ye.convert(He),0);let ot=R!==null?he.get(R).__webglFramebuffer:null;se.bindFramebuffer(w.FRAMEBUFFER,ot);let ft=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),yield jM(w,ft,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ae),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ee),w.deleteBuffer(Ae),w.deleteSync(ft),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(_,P=null,U=0){_.isTexture!==!0&&(es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,_=arguments[1]);let k=Math.pow(2,-U),L=Math.floor(_.image.width*k),ee=Math.floor(_.image.height*k),de=P!==null?P.x:0,_e=P!==null?P.y:0;E.setTexture2D(_,0),w.copyTexSubImage2D(w.TEXTURE_2D,U,0,0,de,_e,L,ee),se.unbindTexture()};let NS=w.createFramebuffer(),PS=w.createFramebuffer();this.copyTextureToTexture=function(_,P,U=null,k=null,L=0,ee=null){_.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,_=arguments[1],P=arguments[2],ee=arguments[3]||0,U=null),ee===null&&(L!==0?(es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=L,L=0):ee=0);let de,_e,be,Be,He,Ae,ot,ft,Rt,wt=_.isCompressedTexture?_.mipmaps[ee]:_.image;if(U!==null)de=U.max.x-U.min.x,_e=U.max.y-U.min.y,be=U.isBox3?U.max.z-U.min.z:1,Be=U.min.x,He=U.min.y,Ae=U.isBox3?U.min.z:0;else{let Sn=Math.pow(2,-L);de=Math.floor(wt.width*Sn),_e=Math.floor(wt.height*Sn),_.isDataArrayTexture?be=wt.depth:_.isData3DTexture?be=Math.floor(wt.depth*Sn):be=1,Be=0,He=0,Ae=0}k!==null?(ot=k.x,ft=k.y,Rt=k.z):(ot=0,ft=0,Rt=0);let ct=Ye.convert(P.format),Ie=Ye.convert(P.type),zt;P.isData3DTexture?(E.setTexture3D(P,0),zt=w.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(E.setTexture2DArray(P,0),zt=w.TEXTURE_2D_ARRAY):(E.setTexture2D(P,0),zt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,P.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,P.unpackAlignment);let ht=w.getParameter(w.UNPACK_ROW_LENGTH),On=w.getParameter(w.UNPACK_IMAGE_HEIGHT),as=w.getParameter(w.UNPACK_SKIP_PIXELS),on=w.getParameter(w.UNPACK_SKIP_ROWS),To=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,wt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,wt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Be),w.pixelStorei(w.UNPACK_SKIP_ROWS,He),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ae);let St=_.isDataArrayTexture||_.isData3DTexture,Mn=P.isDataArrayTexture||P.isData3DTexture;if(_.isDepthTexture){let Sn=he.get(_),Jt=he.get(P),tn=he.get(Sn.__renderTarget),Yd=he.get(Jt.__renderTarget);se.bindFramebuffer(w.READ_FRAMEBUFFER,tn.__webglFramebuffer),se.bindFramebuffer(w.DRAW_FRAMEBUFFER,Yd.__webglFramebuffer);for(let fr=0;fr<be;fr++)St&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,he.get(_).__webglTexture,L,Ae+fr),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,he.get(P).__webglTexture,ee,Rt+fr)),w.blitFramebuffer(Be,He,de,_e,ot,ft,de,_e,w.DEPTH_BUFFER_BIT,w.NEAREST);se.bindFramebuffer(w.READ_FRAMEBUFFER,null),se.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(L!==0||_.isRenderTargetTexture||he.has(_)){let Sn=he.get(_),Jt=he.get(P);se.bindFramebuffer(w.READ_FRAMEBUFFER,NS),se.bindFramebuffer(w.DRAW_FRAMEBUFFER,PS);for(let tn=0;tn<be;tn++)St?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Sn.__webglTexture,L,Ae+tn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Sn.__webglTexture,L),Mn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Jt.__webglTexture,ee,Rt+tn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Jt.__webglTexture,ee),L!==0?w.blitFramebuffer(Be,He,de,_e,ot,ft,de,_e,w.COLOR_BUFFER_BIT,w.NEAREST):Mn?w.copyTexSubImage3D(zt,ee,ot,ft,Rt+tn,Be,He,de,_e):w.copyTexSubImage2D(zt,ee,ot,ft,Be,He,de,_e);se.bindFramebuffer(w.READ_FRAMEBUFFER,null),se.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Mn?_.isDataTexture||_.isData3DTexture?w.texSubImage3D(zt,ee,ot,ft,Rt,de,_e,be,ct,Ie,wt.data):P.isCompressedArrayTexture?w.compressedTexSubImage3D(zt,ee,ot,ft,Rt,de,_e,be,ct,wt.data):w.texSubImage3D(zt,ee,ot,ft,Rt,de,_e,be,ct,Ie,wt):_.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ee,ot,ft,de,_e,ct,Ie,wt.data):_.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ee,ot,ft,wt.width,wt.height,ct,wt.data):w.texSubImage2D(w.TEXTURE_2D,ee,ot,ft,de,_e,ct,Ie,wt);w.pixelStorei(w.UNPACK_ROW_LENGTH,ht),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,On),w.pixelStorei(w.UNPACK_SKIP_PIXELS,as),w.pixelStorei(w.UNPACK_SKIP_ROWS,on),w.pixelStorei(w.UNPACK_SKIP_IMAGES,To),ee===0&&P.generateMipmaps&&w.generateMipmap(zt),se.unbindTexture()},this.copyTextureToTexture3D=function(_,P,U=null,k=null,L=0){return _.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,k=arguments[1]||null,_=arguments[2],P=arguments[3],L=arguments[4]||0),es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,P,U,k,L)},this.initRenderTarget=function(_){he.get(_).__webglFramebuffer===void 0&&E.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?E.setTextureCube(_,0):_.isData3DTexture?E.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?E.setTexture2DArray(_,0):E.setTexture2D(_,0),se.unbindTexture()},this.resetState=function(){D=0,T=0,R=null,se.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var qd=class extends Vd{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new Ka(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){let c=s.parse(JSON.parse(a));t&&t(c)},i,r)}parse(e){return new Mg(e)}},Mg=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){let i=[],r=OL(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}};function OL(n,e,t){let i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[],a=0,c=0;for(let l=0;l<i.length;l++){let u=i[l];if(u===`
`)a=0,c-=s;else{let d=FL(u,r,a,c,t);a+=d.offsetX,o.push(d.path)}}return o}function FL(n,e,t,i,r){let s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}let o=new ec,a,c,l,u,d,f,h,g;if(s.o){let v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=v.length;m<p;)switch(v[m++]){case"m":a=v[m++]*e+t,c=v[m++]*e+i,o.moveTo(a,c);break;case"l":a=v[m++]*e+t,c=v[m++]*e+i,o.lineTo(a,c);break;case"q":l=v[m++]*e+t,u=v[m++]*e+i,d=v[m++]*e+t,f=v[m++]*e+i,o.quadraticCurveTo(d,f,l,u);break;case"b":l=v[m++]*e+t,u=v[m++]*e+i,d=v[m++]*e+t,f=v[m++]*e+i,h=v[m++]*e+t,g=v[m++]*e+i,o.bezierCurveTo(d,f,h,g,l,u);break}}return{offsetX:s.ha*e,path:o}}var uc=class extends Ya{constructor(e,t={}){let i=t.font;if(i===void 0)super();else{let r=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}};var UL=["myCanvas"],DS=(()=>{class n{constructor(t){this.cdr=t,this.scene=new Ba,this.material=new qr({color:"green",wireframe:!0}),this.size={width:window.innerWidth,height:window.innerHeight},this.cursor={x:0,y:0},this.camera=new Yt(75,this.size.width/this.size.height),this.fontLoader=new qd,this.clock=new Qa,this.tick=()=>{let i=this.clock.getElapsedTime();this.camera.position.x=Math.sin(this.cursor.x*Math.PI)*3,this.camera.position.z=Math.cos(this.cursor.x*Math.PI)*3,this.camera.position.y=-this.cursor.y*5,this.mesh&&this.camera.lookAt(this.mesh.position),this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(this.tick)}}ngAfterViewInit(){this.camera.position.z=6,this.scene.add(this.camera),this.renderer=new jd({canvas:this.canvas.nativeElement}),this.renderer.setSize(this.size.width,this.size.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.loadFont(),this.tick()}loadFont(){this.fontLoader.load("/assets/helvetiker_regular.typeface.json",t=>{let i=new uc("wins.software",{font:t,size:.5,depth:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5}),r=new uc("are under construction",{font:t,size:.5,depth:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});i.center(),r.center(),this.mesh=new Qt(i,this.material);let s=new Qt(r,this.material);s.position.y=-.7,this.scene.add(this.mesh),this.scene.add(s)})}handleTouchEvent(t){this.cursor.x=t.touches[0].clientX/this.size.width-.5,this.cursor.y=t.touches[0].clientY/this.size.height-.5,this.camera.position.x=t.touches[0].clientX,this.camera.position.y=t.touches[0].clientY}onMousemove(t){this.cursor.x=t.x/this.size.width-.5,this.cursor.y=t.y/this.size.height-.5,this.camera.position.x=t.x,this.camera.position.y=t.y}onResize(t,i){this.size={width:t,height:i},this.size.width=t,this.size.height=i,this.camera.aspect=this.size.width/this.size.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.size.width,this.size.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}static{this.\u0275fac=function(i){return new(i||n)(qo(Dr))}}static{this.\u0275cmp=xl({type:n,selectors:[["app-root"]],viewQuery:function(i,r){if(i&1&&f0(UL,5),i&2){let s;Qh(s=ep())&&(r.canvas=s.first)}},hostBindings:function(i,r){i&1&&wl("touchmove",function(o){return r.handleTouchEvent(o)})("mousemove",function(o){return r.onMousemove(o)})("resize",function(o){return r.onResize(o.target.innerWidth,o.target.innerHeight)},!1,x_)},decls:3,vars:0,consts:[["myCanvas",""],["touch-action","none","id","myCanvas"]],template:function(i,r){i&1&&Yo(0,"canvas",1,0)(2,"router-outlet")},dependencies:[Rx,qp],encapsulation:2})}}return n})();O0(DS,Px).catch(n=>console.error(n));
