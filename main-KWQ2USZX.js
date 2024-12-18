var wM=Object.defineProperty,CM=Object.defineProperties;var TM=Object.getOwnPropertyDescriptors;var Om=Object.getOwnPropertySymbols;var DM=Object.prototype.hasOwnProperty,AM=Object.prototype.propertyIsEnumerable;var Fm=(n,e,t)=>e in n?wM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,he=(n,e)=>{for(var t in e||={})DM.call(e,t)&&Fm(n,t,e[t]);if(Om)for(var t of Om(e))AM.call(e,t)&&Fm(n,t,e[t]);return n},yt=(n,e)=>CM(n,TM(e));var ns=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function Um(n,e){return Object.is(n,e)}var Pt=null,Ha=!1,fd=1,is=Symbol("SIGNAL");function lt(n){let e=Pt;return Pt=n,e}function km(){return Pt}var Ga={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Bm(n){if(Ha)throw new Error("");if(Pt===null)return;Pt.consumerOnSignalRead(n);let e=Pt.nextProducerIndex++;if(ja(Pt),e<Pt.producerNode.length&&Pt.producerNode[e]!==n&&go(Pt)){let t=Pt.producerNode[e];Wa(t,Pt.producerIndexOfThis[e])}Pt.producerNode[e]!==n&&(Pt.producerNode[e]=n,Pt.producerIndexOfThis[e]=go(Pt)?Gm(n,Pt,e):0),Pt.producerLastReadVersion[e]=n.version}function IM(){fd++}function Vm(n){if(!(go(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===fd)){if(!n.producerMustRecompute(n)&&!pd(n)){dd(n);return}n.producerRecomputeValue(n),dd(n)}}function zm(n){if(n.liveConsumerNode===void 0)return;let e=Ha;Ha=!0;try{for(let t of n.liveConsumerNode)t.dirty||NM(t)}finally{Ha=e}}function RM(){return Pt?.consumerAllowSignalWrites!==!1}function NM(n){n.dirty=!0,zm(n),n.consumerMarkedDirty?.(n)}function dd(n){n.dirty=!1,n.lastCleanEpoch=fd}function hd(n){return n&&(n.nextProducerIndex=0),lt(n)}function Hm(n,e){if(lt(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(go(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Wa(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function pd(n){ja(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Vm(t),i!==t.version))return!0}return!1}function md(n){if(ja(n),go(n))for(let e=0;e<n.producerNode.length;e++)Wa(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Gm(n,e,t){if(Wm(n),n.liveConsumerNode.length===0&&jm(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=Gm(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function Wa(n,e){if(Wm(n),n.liveConsumerNode.length===1&&jm(n))for(let i=0;i<n.producerNode.length;i++)Wa(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];ja(r),r.producerIndexOfThis[i]=e}}function go(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function ja(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Wm(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function jm(n){return n.producerNode!==void 0}function PM(){throw new Error}var $m=PM;function LM(){$m()}function qm(n){$m=n}var OM=null;function Xm(n,e){RM()||LM(),n.equal(n.value,e)||(n.value=e,FM(n))}var Ym=yt(he({},Ga),{equal:Um,value:void 0});function FM(n){n.version++,IM(),zm(n),OM?.()}function Le(n){return typeof n=="function"}function rs(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var $a=rs(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function vo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var At=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Le(i))try{i()}catch(s){e=s instanceof $a?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Zm(s)}catch(o){e=e??[],o instanceof $a?e=[...e,...o.errors]:e.push(o)}}if(e)throw new $a(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Zm(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&vo(t,e)}remove(e){let{_finalizers:t}=this;t&&vo(t,e),e instanceof n&&e._removeParent(this)}};At.EMPTY=(()=>{let n=new At;return n.closed=!0,n})();var gd=At.EMPTY;function qa(n){return n instanceof At||n&&"closed"in n&&Le(n.remove)&&Le(n.add)&&Le(n.unsubscribe)}function Zm(n){Le(n)?n():n.unsubscribe()}var Pn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ss={setTimeout(n,e,...t){let{delegate:i}=ss;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ss;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Xa(n){ss.setTimeout(()=>{let{onUnhandledError:e}=Pn;if(e)e(n);else throw n})}function yo(){}var Jm=vd("C",void 0,void 0);function Km(n){return vd("E",void 0,n)}function Qm(n){return vd("N",n,void 0)}function vd(n,e,t){return{kind:n,value:e,error:t}}var dr=null;function os(n){if(Pn.useDeprecatedSynchronousErrorHandling){let e=!dr;if(e&&(dr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=dr;if(dr=null,t)throw i}}else n()}function eg(n){Pn.useDeprecatedSynchronousErrorHandling&&dr&&(dr.errorThrown=!0,dr.error=n)}var fr=class extends At{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,qa(e)&&e.add(this)):this.destination=BM}static create(e,t,i){return new as(e,t,i)}next(e){this.isStopped?_d(Qm(e),this):this._next(e)}error(e){this.isStopped?_d(Km(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?_d(Jm,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},UM=Function.prototype.bind;function yd(n,e){return UM.call(n,e)}var xd=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Ya(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Ya(i)}else Ya(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Ya(t)}}},as=class extends fr{constructor(e,t,i){super();let r;if(Le(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Pn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&yd(e.next,s),error:e.error&&yd(e.error,s),complete:e.complete&&yd(e.complete,s)}):r=e}this.destination=new xd(r)}};function Ya(n){Pn.useDeprecatedSynchronousErrorHandling?eg(n):Xa(n)}function kM(n){throw n}function _d(n,e){let{onStoppedNotification:t}=Pn;t&&ss.setTimeout(()=>t(n,e))}var BM={closed:!0,next:yo,error:kM,complete:yo};var cs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function sn(n){return n}function Md(...n){return Sd(n)}function Sd(n){return n.length===0?sn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ft=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=zM(t)?t:new as(t,i,r);return os(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=tg(i),new i((r,s)=>{let o=new as({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[cs](){return this}pipe(...t){return Sd(t)(this)}toPromise(t){return t=tg(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function tg(n){var e;return(e=n??Pn.Promise)!==null&&e!==void 0?e:Promise}function VM(n){return n&&Le(n.next)&&Le(n.error)&&Le(n.complete)}function zM(n){return n&&n instanceof fr||VM(n)&&qa(n)}function Ed(n){return Le(n?.lift)}function Je(n){return e=>{if(Ed(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ke(n,e,t,i,r){return new bd(n,e,t,i,r)}var bd=class extends fr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function ls(){return Je((n,e)=>{let t=null;n._refCount++;let i=Ke(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var us=class extends ft{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Ed(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new At;let t=this.getSubject();e.add(this.source.subscribe(Ke(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=At.EMPTY)}return e}refCount(){return ls()(this)}};var ng=rs(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Vt=(()=>{class n extends ft{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Za(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new ng}next(t){os(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){os(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){os(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?gd:(this.currentObservers=null,s.push(t),new At(()=>{this.currentObservers=null,vo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new ft;return t.source=this,t}}return n.create=(e,t)=>new Za(e,t),n})(),Za=class extends Vt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:gd}};var zt=class extends Vt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var on=new ft(n=>n.complete());function ig(n){return n&&Le(n.schedule)}function rg(n){return n[n.length-1]}function sg(n){return Le(rg(n))?n.pop():void 0}function Ri(n){return ig(rg(n))?n.pop():void 0}function ag(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function og(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function hr(n){return this instanceof hr?(this.v=n,this):new hr(n)}function cg(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(g){return Promise.resolve(g).then(p,d)}}function a(p,g){i[p]&&(r[p]=function(_){return new Promise(function(m,h){s.push([p,_,m,h])>1||c(p,_)})},g&&(r[p]=g(r[p])))}function c(p,g){try{l(i[p](g))}catch(_){f(s[0][3],_)}}function l(p){p.value instanceof hr?Promise.resolve(p.value.v).then(u,d):f(s[0][2],p)}function u(p){c("next",p)}function d(p){c("throw",p)}function f(p,g){p(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function lg(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof og=="function"?og(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Ja=n=>n&&typeof n.length=="number"&&typeof n!="function";function Ka(n){return Le(n?.then)}function Qa(n){return Le(n[cs])}function ec(n){return Symbol.asyncIterator&&Le(n?.[Symbol.asyncIterator])}function tc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function HM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var nc=HM();function ic(n){return Le(n?.[nc])}function rc(n){return cg(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield hr(t.read());if(r)return yield hr(void 0);yield yield hr(i)}}finally{t.releaseLock()}})}function sc(n){return Le(n?.getReader)}function Ft(n){if(n instanceof ft)return n;if(n!=null){if(Qa(n))return GM(n);if(Ja(n))return WM(n);if(Ka(n))return jM(n);if(ec(n))return ug(n);if(ic(n))return $M(n);if(sc(n))return qM(n)}throw tc(n)}function GM(n){return new ft(e=>{let t=n[cs]();if(Le(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function WM(n){return new ft(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function jM(n){return new ft(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Xa)})}function $M(n){return new ft(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function ug(n){return new ft(e=>{XM(n,e).catch(t=>e.error(t))})}function qM(n){return ug(rc(n))}function XM(n,e){var t,i,r,s;return ag(this,void 0,void 0,function*(){try{for(t=lg(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Kt(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function oc(n,e=0){return Je((t,i)=>{t.subscribe(Ke(i,r=>Kt(i,n,()=>i.next(r),e),()=>Kt(i,n,()=>i.complete(),e),r=>Kt(i,n,()=>i.error(r),e)))})}function ac(n,e=0){return Je((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function dg(n,e){return Ft(n).pipe(ac(e),oc(e))}function fg(n,e){return Ft(n).pipe(ac(e),oc(e))}function hg(n,e){return new ft(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function pg(n,e){return new ft(t=>{let i;return Kt(t,e,()=>{i=n[nc](),Kt(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Le(i?.return)&&i.return()})}function cc(n,e){if(!n)throw new Error("Iterable cannot be null");return new ft(t=>{Kt(t,e,()=>{let i=n[Symbol.asyncIterator]();Kt(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function mg(n,e){return cc(rc(n),e)}function gg(n,e){if(n!=null){if(Qa(n))return dg(n,e);if(Ja(n))return hg(n,e);if(Ka(n))return fg(n,e);if(ec(n))return cc(n,e);if(ic(n))return pg(n,e);if(sc(n))return mg(n,e)}throw tc(n)}function Ct(n,e){return e?gg(n,e):Ft(n)}function De(...n){let e=Ri(n);return Ct(n,e)}function ds(n,e){let t=Le(n)?n:()=>n,i=r=>r.error(t());return new ft(e?r=>e.schedule(i,0,r):i)}function wd(n){return!!n&&(n instanceof ft||Le(n.lift)&&Le(n.subscribe))}var oi=rs(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function $e(n,e){return Je((t,i)=>{let r=0;t.subscribe(Ke(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:YM}=Array;function ZM(n,e){return YM(e)?n(...e):n(e)}function vg(n){return $e(e=>ZM(n,e))}var{isArray:JM}=Array,{getPrototypeOf:KM,prototype:QM,keys:eS}=Object;function yg(n){if(n.length===1){let e=n[0];if(JM(e))return{args:e,keys:null};if(tS(e)){let t=eS(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function tS(n){return n&&typeof n=="object"&&KM(n)===QM}function _g(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function _o(...n){let e=Ri(n),t=sg(n),{args:i,keys:r}=yg(n);if(i.length===0)return Ct([],e);let s=new ft(nS(i,e,r?o=>_g(r,o):sn));return t?s.pipe(vg(t)):s}function nS(n,e,t=sn){return i=>{xg(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)xg(e,()=>{let l=Ct(n[c],e),u=!1;l.subscribe(Ke(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function xg(n,e,t){n?Kt(t,n,e):e()}function Mg(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},p=_=>l<i?g(_):c.push(_),g=_=>{s&&e.next(_),l++;let m=!1;Ft(t(_,u++)).subscribe(Ke(e,h=>{r?.(h),s?p(h):e.next(h)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let h=c.shift();o?Kt(e,o,()=>g(h)):g(h)}f()}catch(h){e.error(h)}}))};return n.subscribe(Ke(e,p,()=>{d=!0,f()})),()=>{a?.()}}function It(n,e,t=1/0){return Le(e)?It((i,r)=>$e((s,o)=>e(i,s,r,o))(Ft(n(i,r))),t):(typeof e=="number"&&(t=e),Je((i,r)=>Mg(i,r,n,t)))}function fs(n=1/0){return It(sn,n)}function Sg(){return fs(1)}function hs(...n){return Sg()(Ct(n,Ri(n)))}function lc(n){return new ft(e=>{Ft(n()).subscribe(e)})}function Mn(n,e){return Je((t,i)=>{let r=0;t.subscribe(Ke(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Ni(n){return Je((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Ke(t,void 0,void 0,o=>{s=Ft(n(o,Ni(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Eg(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Ke(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function pr(n,e){return Le(e)?It(n,e,1):It(n,1)}function Pi(n){return Je((e,t)=>{let i=!1;e.subscribe(Ke(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function ai(n){return n<=0?()=>on:Je((e,t)=>{let i=0;e.subscribe(Ke(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Cd(n){return $e(()=>n)}function uc(n=iS){return Je((e,t)=>{let i=!1;e.subscribe(Ke(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function iS(){return new oi}function xo(n){return Je((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function ci(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Mn((r,s)=>n(r,s,i)):sn,ai(1),t?Pi(e):uc(()=>new oi))}function ps(n){return n<=0?()=>on:Je((e,t)=>{let i=[];e.subscribe(Ke(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Td(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Mn((r,s)=>n(r,s,i)):sn,ps(1),t?Pi(e):uc(()=>new oi))}function Dd(n,e){return Je(Eg(n,e,arguments.length>=2,!0))}function Ad(...n){let e=Ri(n);return Je((t,i)=>{(e?hs(n,t,e):hs(n,t)).subscribe(i)})}function Sn(n,e){return Je((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Ke(i,c=>{r?.unsubscribe();let l=0,u=s++;Ft(n(c,u)).subscribe(r=Ke(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Id(n){return Je((e,t)=>{Ft(n).subscribe(Ke(t,()=>t.complete(),yo)),!t.closed&&e.subscribe(t)})}function Ht(n,e,t){let i=Le(n)||e||t?{next:n,error:e,complete:t}:n;return i?Je((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Ke(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):sn}var Ce=class extends Error{code;constructor(e,t){super(If(e,t)),this.code=e}};function If(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var sv=Symbol("InputSignalNode#UNSET"),rS=yt(he({},Ym),{transformFn:void 0,applyValueToInputSignal(n,e){Xm(n,e)}});function ov(n,e){let t=Object.create(rS);t.value=n,t.transformFn=e?.transform;function i(){if(Bm(t),t.value===sv)throw new Ce(-950,!1);return t.value}return i[is]=t,i}function Ro(n){return{toString:n}.toString()}var dc="__parameters__";function sS(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function av(n,e,t){return Ro(()=>{let i=sS(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(dc)?c[dc]:Object.defineProperty(c,dc,{value:[]})[dc];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function mt(n){for(let e in n)if(n[e]===mt)return e;throw Error("Could not find renamed property on target object.")}function cn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(cn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function bg(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var oS=mt({__forward_ref__:mt});function cv(n){return n.__forward_ref__=cv,n.toString=function(){return cn(this())},n}function bn(n){return lv(n)?n():n}function lv(n){return typeof n=="function"&&n.hasOwnProperty(oS)&&n.__forward_ref__===cv}function we(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Uc(n){return{providers:n.providers||[],imports:n.imports||[]}}function kc(n){return wg(n,dv)||wg(n,fv)}function uv(n){return kc(n)!==null}function wg(n,e){return n.hasOwnProperty(e)?n[e]:null}function aS(n){let e=n&&(n[dv]||n[fv]);return e||null}function Cg(n){return n&&(n.hasOwnProperty(Tg)||n.hasOwnProperty(cS))?n[Tg]:null}var dv=mt({\u0275prov:mt}),Tg=mt({\u0275inj:mt}),fv=mt({ngInjectableDef:mt}),cS=mt({ngInjectorDef:mt}),Ne=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=we({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function hv(n){return n&&!!n.\u0275providers}var lS=mt({\u0275cmp:mt}),uS=mt({\u0275dir:mt}),dS=mt({\u0275pipe:mt}),fS=mt({\u0275mod:mt}),_c=mt({\u0275fac:mt}),Eo=mt({__NG_ELEMENT_ID__:mt}),Dg=mt({__NG_ENV_ID__:mt});function hS(n){return typeof n=="string"?n:n==null?"":String(n)}function pS(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():hS(n)}function mS(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Ce(-200,n)}function Rf(n,e){throw new Ce(-201,!1)}var He=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(He||{}),kd;function pv(){return kd}function En(n){let e=kd;return kd=n,e}function mv(n,e,t){let i=kc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&He.Optional)return null;if(e!==void 0)return e;Rf(n,"Injector")}var gS={},bo=gS,Bd="__NG_DI_FLAG__",xc="ngTempTokenPath",vS="ngTokenPath",yS=/\n/gm,_S="\u0275",Ag="__source",_s;function xS(){return _s}function Li(n){let e=_s;return _s=n,e}function MS(n,e=He.Default){if(_s===void 0)throw new Ce(-203,!1);return _s===null?mv(n,void 0,e):_s.get(n,e&He.Optional?null:void 0,e)}function Oe(n,e=He.Default){return(pv()||MS)(bn(n),e)}function ee(n,e=He.Default){return Oe(n,Bc(e))}function Bc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Vd(n){let e=[];for(let t=0;t<n.length;t++){let i=bn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ce(900,!1);let r,s=He.Default;for(let o=0;o<i.length;o++){let a=i[o],c=SS(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Oe(r,s))}else e.push(Oe(i))}return e}function gv(n,e){return n[Bd]=e,n.prototype[Bd]=e,n}function SS(n){return n[Bd]}function ES(n,e,t,i){let r=n[xc];throw e[Ag]&&r.unshift(e[Ag]),n.message=bS(`
`+n.message,r,t,i),n[vS]=r,n[xc]=null,n}function bS(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==_S?n.slice(2):n;let r=cn(e);if(Array.isArray(e))r=e.map(cn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):cn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(yS,`
  `)}`}var Nf=gv(av("Optional"),8);var vv=gv(av("SkipSelf"),4);function Ms(n,e){let t=n.hasOwnProperty(_c);return t?n[_c]:null}function wS(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function CS(n){return n.flat(Number.POSITIVE_INFINITY)}function Pf(n,e){n.forEach(t=>Array.isArray(t)?Pf(t,e):e(t))}function yv(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Mc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var wo={},Gn=[],Ss=new Ne(""),_v=new Ne("",-1),xv=new Ne(""),Sc=class{get(e,t=bo){if(t===bo){let i=new Error(`NullInjectorError: No provider for ${cn(e)}!`);throw i.name="NullInjectorError",i}return t}};function Mv(n,e){let t=n[fS]||null;if(!t&&e===!0)throw new Error(`Type ${cn(n)} does not have '\u0275mod' property.`);return t}function Ui(n){return n[lS]||null}function Sv(n){return n[uS]||null}function Ev(n){return n[dS]||null}function bv(n){let e=Ui(n)||Sv(n)||Ev(n);return e!==null?e.standalone:!1}function Lf(n){return{\u0275providers:n}}function TS(...n){return{\u0275providers:wv(!0,n),\u0275fromNgModule:!0}}function wv(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Pf(e,o=>{let a=o;zd(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Cv(r,s),t}function Cv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Of(r,s=>{e(s,i)})}}function zd(n,e,t,i){if(n=bn(n),!n)return!1;let r=null,s=Cg(n),o=!s&&Ui(n);if(!s&&!o){let c=n.ngModule;if(s=Cg(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)zd(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Pf(s.imports,u=>{zd(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Cv(l,e)}if(!a){let l=Ms(r)||(()=>new r);e({provide:r,useFactory:l,deps:Gn},r),e({provide:xv,useValue:r,multi:!0},r),e({provide:Ss,useValue:()=>Oe(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Of(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Of(n,e){for(let t of n)hv(t)&&(t=t.\u0275providers),Array.isArray(t)?Of(t,e):e(t)}var DS=mt({provide:String,useValue:mt});function Tv(n){return n!==null&&typeof n=="object"&&DS in n}function AS(n){return!!(n&&n.useExisting)}function IS(n){return!!(n&&n.useFactory)}function Hd(n){return typeof n=="function"}var Vc=new Ne(""),hc={},RS={},Rd;function Ff(){return Rd===void 0&&(Rd=new Sc),Rd}var dn=class{},Co=class extends dn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,Wd(e,o=>this.processProvider(o)),this.records.set(_v,ms(void 0,this)),r.has("environment")&&this.records.set(dn,ms(void 0,this));let s=this.records.get(Vc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(xv,Gn,He.Self))}destroy(){Mo(this),this._destroyed=!0;let e=lt(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),lt(e)}}onDestroy(e){return Mo(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Mo(this);let t=Li(this),i=En(void 0),r;try{return e()}finally{Li(t),En(i)}}get(e,t=bo,i=He.Default){if(Mo(this),e.hasOwnProperty(Dg))return e[Dg](this);i=Bc(i);let r,s=Li(this),o=En(void 0);try{if(!(i&He.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=US(e)&&kc(e);l&&this.injectableDefInScope(l)?c=ms(Gd(e),hc):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&He.Self?Ff():this.parent;return t=i&He.Optional&&t===bo?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[xc]=a[xc]||[]).unshift(cn(e)),s)throw a;return ES(a,e,"R3InjectorError",this.source)}else throw a}finally{En(o),Li(s)}}resolveInjectorInitializers(){let e=lt(null),t=Li(this),i=En(void 0),r;try{let s=this.get(Ss,Gn,He.Self);for(let o of s)o()}finally{Li(t),En(i),lt(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(cn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=bn(e);let t=Hd(e)?e:bn(e&&e.provide),i=PS(e);if(!Hd(e)&&e.multi===!0){let r=this.records.get(t);r||(r=ms(void 0,hc,!0),r.factory=()=>Vd(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=lt(null);try{return t.value===hc&&(t.value=RS,t.value=t.factory()),typeof t.value=="object"&&t.value&&FS(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{lt(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=bn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Gd(n){let e=kc(n),t=e!==null?e.factory:Ms(n);if(t!==null)return t;if(n instanceof Ne)throw new Ce(204,!1);if(n instanceof Function)return NS(n);throw new Ce(204,!1)}function NS(n){if(n.length>0)throw new Ce(204,!1);let t=aS(n);return t!==null?()=>t.factory(n):()=>new n}function PS(n){if(Tv(n))return ms(void 0,n.useValue);{let e=LS(n);return ms(e,hc)}}function LS(n,e,t){let i;if(Hd(n)){let r=bn(n);return Ms(r)||Gd(r)}else if(Tv(n))i=()=>bn(n.useValue);else if(IS(n))i=()=>n.useFactory(...Vd(n.deps||[]));else if(AS(n))i=()=>Oe(bn(n.useExisting));else{let r=bn(n&&(n.useClass||n.provide));if(OS(n))i=()=>new r(...Vd(n.deps));else return Ms(r)||Gd(r)}return i}function Mo(n){if(n.destroyed)throw new Ce(205,!1)}function ms(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function OS(n){return!!n.deps}function FS(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function US(n){return typeof n=="function"||typeof n=="object"&&n instanceof Ne}function Wd(n,e){for(let t of n)Array.isArray(t)?Wd(t,e):t&&hv(t)?Wd(t.\u0275providers,e):e(t)}function wn(n,e){n instanceof Co&&Mo(n);let t,i=Li(n),r=En(void 0);try{return e()}finally{Li(i),En(r)}}function Dv(){return pv()!==void 0||xS()!=null}function kS(n){if(!Dv())throw new Ce(-203,!1)}function BS(n){return typeof n=="function"}var fi=0,Ge=1,Ae=2,Wt=3,On=4,Fn=5,Ec=6,jd=7,ki=8,Es=9,Bi=10,li=11,To=12,Ig=13,No=14,jn=15,vr=16,gs=17,ui=18,zc=19,Av=20,Fi=21,Nd=22,bc=23,ln=24,bs=25,Iv=1;var yr=7,wc=8,ws=9,un=10,Cc=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(Cc||{});function mr(n){return Array.isArray(n)&&typeof n[Iv]=="object"}function hi(n){return Array.isArray(n)&&n[Iv]===!0}function Rv(n){return(n.flags&4)!==0}function Uf(n){return n.componentOffset>-1}function VS(n){return(n.flags&1)===1}function Po(n){return!!n.template}function $d(n){return(n[Ae]&512)!==0}var qd=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Nv(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var kf=(()=>{let n=()=>Pv;return n.ngInherit=!0,n})();function Pv(n){return n.type.prototype.ngOnChanges&&(n.setInput=HS),zS}function zS(){let n=Ov(this),e=n?.current;if(e){let t=n.previous;if(t===wo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function HS(n,e,t,i,r){let s=this.declaredInputs[i],o=Ov(n)||GS(n,{previous:wo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new qd(l&&l.currentValue,t,c===wo),Nv(n,e,r,t)}var Lv="__ngSimpleChanges__";function Ov(n){return n[Lv]||null}function GS(n,e){return n[Lv]=e}var Rg=null;var Oi=function(n,e,t){Rg?.(n,e,t)},WS="svg",jS="math";function Vi(n){for(;Array.isArray(n);)n=n[fi];return n}function pi(n,e){return Vi(e[n.index])}function $S(n,e){return n.data[e]}function Lo(n,e){let t=e[n];return mr(t)?t:t[fi]}function qS(n){return(n[Ae]&4)===4}function Bf(n){return(n[Ae]&128)===128}function XS(n){return hi(n[Wt])}function Ng(n,e){return e==null?null:n[e]}function Fv(n){n[gs]=0}function Vf(n){n[Ae]&1024||(n[Ae]|=1024,Bf(n)&&Gc(n))}function Hc(n){return!!(n[Ae]&9216||n[ln]?.dirty)}function Xd(n){n[Bi].changeDetectionScheduler?.notify(9),n[Ae]&64&&(n[Ae]|=1024),Hc(n)&&Gc(n)}function Gc(n){n[Bi].changeDetectionScheduler?.notify(0);let e=_r(n);for(;e!==null&&!(e[Ae]&8192||(e[Ae]|=8192,!Bf(e)));)e=_r(e)}function Uv(n,e){if((n[Ae]&256)===256)throw new Ce(911,!1);n[Fi]===null&&(n[Fi]=[]),n[Fi].push(e)}function YS(n,e){if(n[Fi]===null)return;let t=n[Fi].indexOf(e);t!==-1&&n[Fi].splice(t,1)}function _r(n){let e=n[Wt];return hi(e)?e[Wt]:e}var ut={lFrame:jv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Yd=!1;function ZS(){return ut.lFrame.elementDepthCount}function JS(){ut.lFrame.elementDepthCount++}function KS(){ut.lFrame.elementDepthCount--}function kv(){return ut.bindingsEnabled}function QS(){return ut.skipHydrationRootTNode!==null}function eE(n){return ut.skipHydrationRootTNode===n}function tE(){ut.skipHydrationRootTNode=null}function Qt(){return ut.lFrame.lView}function Wc(){return ut.lFrame.tView}function Xn(){let n=Bv();for(;n!==null&&n.type===64;)n=n.parent;return n}function Bv(){return ut.lFrame.currentTNode}function nE(){let n=ut.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function zf(n,e){let t=ut.lFrame;t.currentTNode=n,t.isParent=e}function Vv(){return ut.lFrame.isParent}function iE(){ut.lFrame.isParent=!1}function zv(){return Yd}function Pg(n){let e=Yd;return Yd=n,e}function rE(n){return ut.lFrame.bindingIndex=n}function sE(){return ut.lFrame.inI18n}function oE(n,e){let t=ut.lFrame;t.bindingIndex=t.bindingRootIndex=n,Zd(e)}function aE(){return ut.lFrame.currentDirectiveIndex}function Zd(n){ut.lFrame.currentDirectiveIndex=n}function Hv(){return ut.lFrame.currentQueryIndex}function Hf(n){ut.lFrame.currentQueryIndex=n}function cE(n){let e=n[Ge];return e.type===2?e.declTNode:e.type===1?n[Fn]:null}function Gv(n,e,t){if(t&He.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&He.Host);)if(r=cE(s),r===null||(s=s[No],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=ut.lFrame=Wv();return i.currentTNode=e,i.lView=n,!0}function Gf(n){let e=Wv(),t=n[Ge];ut.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Wv(){let n=ut.lFrame,e=n===null?null:n.child;return e===null?jv(n):e}function jv(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function $v(){let n=ut.lFrame;return ut.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var qv=$v;function Wf(){let n=$v();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function lE(){return ut.lFrame.selectedIndex}function xr(n){ut.lFrame.selectedIndex=n}function uE(){return ut.lFrame.currentNamespace}var Xv=!0;function dE(){return Xv}function fE(n){Xv=n}function hE(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Pv(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Yv(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function pc(n,e,t){Zv(n,e,3,t)}function mc(n,e,t,i){(n[Ae]&3)===t&&Zv(n,e,t,i)}function Pd(n,e){let t=n[Ae];(t&3)===e&&(t&=16383,t+=1,n[Ae]=t)}function Zv(n,e,t,i){let r=i!==void 0?n[gs]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[gs]+=65536),(a<s||s==-1)&&(pE(n,t,e,c),n[gs]=(n[gs]&4294901760)+c+2),c++}function Lg(n,e){Oi(4,n,e);let t=lt(null);try{e.call(n)}finally{lt(t),Oi(5,n,e)}}function pE(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ae]>>14<n[gs]>>16&&(n[Ae]&3)===e&&(n[Ae]+=16384,Lg(a,s)):Lg(a,s)}var xs=-1,Do=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function mE(n){return n instanceof Do}function gE(n){return(n.flags&8)!==0}function vE(n){return(n.flags&16)!==0}function Jd(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];_E(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function yE(n){return n===3||n===4||n===6}function _E(n){return n.charCodeAt(0)===64}function jf(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Og(n,t,r,null,e[++i]):Og(n,t,r,null,null))}}return n}function Og(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Ld={},Kd=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Bc(i);let r=this.injector.get(e,Ld,i);return r!==Ld||t===Ld?r:this.parentInjector.get(e,t,i)}};function Jv(n){return n!==xs}function Tc(n){return n&32767}function xE(n){return n>>16}function Dc(n,e){let t=xE(n),i=e;for(;t>0;)i=i[No],t--;return i}var Qd=!0;function Fg(n){let e=Qd;return Qd=n,e}var ME=256,Kv=ME-1,Qv=5,SE=0,Wn={};function EE(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Eo)&&(i=t[Eo]),i==null&&(i=t[Eo]=SE++);let r=i&Kv,s=1<<r;e.data[n+(r>>Qv)]|=s}function ey(n,e){let t=ty(n,e);if(t!==-1)return t;let i=e[Ge];i.firstCreatePass&&(n.injectorIndex=e.length,Od(i.data,n),Od(e,null),Od(i.blueprint,null));let r=$f(n,e),s=n.injectorIndex;if(Jv(r)){let o=Tc(r),a=Dc(r,e),c=a[Ge].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Od(n,e){n.push(0,0,0,0,0,0,0,0,e)}function ty(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function $f(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=oy(r),i===null)return xs;if(t++,r=r[No],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return xs}function bE(n,e,t){EE(n,e,t)}function ny(n,e,t){if(t&He.Optional||n!==void 0)return n;Rf(e,"NodeInjector")}function iy(n,e,t,i){if(t&He.Optional&&i===void 0&&(i=null),!(t&(He.Self|He.Host))){let r=n[Es],s=En(void 0);try{return r?r.get(e,i,t&He.Optional):mv(e,i,t&He.Optional)}finally{En(s)}}return ny(i,e,t)}function ry(n,e,t,i=He.Default,r){if(n!==null){if(e[Ae]&2048&&!(i&He.Self)){let o=DE(n,e,t,i,Wn);if(o!==Wn)return o}let s=sy(n,e,t,i,Wn);if(s!==Wn)return s}return iy(e,t,i,r)}function sy(n,e,t,i,r){let s=CE(t);if(typeof s=="function"){if(!Gv(e,n,i))return i&He.Host?ny(r,t,i):iy(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&He.Optional))Rf(t);else return o}finally{qv()}}else if(typeof s=="number"){let o=null,a=ty(n,e),c=xs,l=i&He.Host?e[jn][Fn]:null;for((a===-1||i&He.SkipSelf)&&(c=a===-1?$f(n,e):e[a+8],c===xs||!kg(i,!1)?a=-1:(o=e[Ge],a=Tc(c),e=Dc(c,e)));a!==-1;){let u=e[Ge];if(Ug(s,a,u.data)){let d=wE(a,e,t,o,i,l);if(d!==Wn)return d}c=e[a+8],c!==xs&&kg(i,e[Ge].data[a+8]===l)&&Ug(s,a,e)?(o=u,a=Tc(c),e=Dc(c,e)):a=-1}}return r}function wE(n,e,t,i,r,s){let o=e[Ge],a=o.data[n+8],c=i==null?Uf(a)&&Qd:i!=o&&(a.type&3)!==0,l=r&He.Host&&s===a,u=gc(a,o,t,c,l);return u!==null?Cs(e,o,u,a):Wn}function gc(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let p=d;p<f;p++){let g=o[p];if(p<c&&t===g||p>=c&&g.type===t)return p}if(r){let p=o[c];if(p&&Po(p)&&p.type===t)return c}return null}function Cs(n,e,t,i){let r=n[t],s=e.data;if(mE(r)){let o=r;o.resolving&&mS(pS(s[t]));let a=Fg(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?En(o.injectImpl):null,u=Gv(n,i,He.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&hE(t,s[t],e)}finally{l!==null&&En(l),Fg(a),o.resolving=!1,qv()}}return r}function CE(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Eo)?n[Eo]:void 0;return typeof e=="number"?e>=0?e&Kv:TE:e}function Ug(n,e,t){let i=1<<n;return!!(t[e+(n>>Qv)]&i)}function kg(n,e){return!(n&He.Self)&&!(n&He.Host&&e)}var gr=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return ry(this._tNode,this._lView,e,Bc(i),t)}};function TE(){return new gr(Xn(),Qt())}function qf(n){return Ro(()=>{let e=n.prototype.constructor,t=e[_c]||ef(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[_c]||ef(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function ef(n){return lv(n)?()=>{let e=ef(bn(n));return e&&e()}:Ms(n)}function DE(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ae]&2048&&!(o[Ae]&512);){let a=sy(s,o,t,i|He.Self,Wn);if(a!==Wn)return a;let c=s.parent;if(!c){let l=o[Av];if(l){let u=l.get(t,Wn,i);if(u!==Wn)return u}c=oy(o),o=o[No]}s=c}return r}function oy(n){let e=n[Ge],t=e.type;return t===2?e.declTNode:t===1?n[Fn]:null}function Bg(n,e=null,t=null,i){let r=ay(n,e,t,i);return r.resolveInjectorInitializers(),r}function ay(n,e=null,t=null,i,r=new Set){let s=[t||Gn,TS(n)];return i=i||(typeof n=="object"?void 0:cn(n)),new Co(s,e||Ff(),i||null,r)}var $n=class n{static THROW_IF_NOT_FOUND=bo;static NULL=new Sc;static create(e,t){if(Array.isArray(e))return Bg({name:""},t,e,"");{let i=e.name??"";return Bg({name:i},e.parent,e.providers,i)}}static \u0275prov=we({token:n,providedIn:"any",factory:()=>Oe(_v)});static __NG_ELEMENT_ID__=-1};var AE=new Ne("");AE.__NG_ELEMENT_ID__=n=>{let e=Xn();if(e===null)throw new Ce(204,!1);if(e.type&2)return e.value;if(n&He.Optional)return null;throw new Ce(204,!1)};var cy=!1,Xf=(()=>{class n{static __NG_ELEMENT_ID__=IE;static __NG_ENV_ID__=t=>t}return n})(),tf=class extends Xf{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return Uv(this._lView,e),()=>YS(this._lView,e)}};function IE(){return new tf(Qt())}var Ts=class{},Yf=new Ne("",{providedIn:"root",factory:()=>!1});var ly=new Ne(""),uy=new Ne(""),Ns=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new zt(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=we({token:n,providedIn:"root",factory:()=>new n})}return n})();var nf=class extends Vt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,Dv()&&(this.destroyRef=ee(Xf,{optional:!0})??void 0,this.pendingTasks=ee(Ns,{optional:!0})??void 0)}emit(e){let t=lt(null);try{super.next(e)}finally{lt(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof At&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},an=nf;function Ac(...n){}function dy(n){let e,t;function i(){n=Ac;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function Vg(n){return queueMicrotask(()=>n()),()=>{n=Ac}}var Zf="isAngularZone",Ic=Zf+"_ID",RE=0,Tt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new an(!1);onMicrotaskEmpty=new an(!1);onStable=new an(!1);onError=new an(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=cy}=e;if(typeof Zone>"u")throw new Ce(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,LE(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Zf)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ce(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ce(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,NE,Ac,Ac);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},NE={};function Jf(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function PE(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){dy(()=>{n.callbackScheduled=!1,rf(n),n.isCheckStableRunning=!0,Jf(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),rf(n)}function LE(n){let e=()=>{PE(n)},t=RE++;n._inner=n._inner.fork({name:"angular",properties:{[Zf]:!0,[Ic]:t,[Ic+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(OE(c))return i.invokeTask(s,o,a,c);try{return zg(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Hg(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return zg(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!FE(c)&&e(),Hg(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,rf(n),Jf(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function rf(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function zg(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Hg(n){n._nesting--,Jf(n)}var sf=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new an;onMicrotaskEmpty=new an;onStable=new an;onError=new an;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function OE(n){return fy(n,"__ignore_ng_zone__")}function FE(n){return fy(n,"__scheduler_tick__")}function fy(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var di=class{_console=console;handleError(e){this._console.error("ERROR",e)}},UE=new Ne("",{providedIn:"root",factory:()=>{let n=ee(Tt),e=ee(di);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function Gg(n,e){return ov(n,e)}function kE(n){return ov(sv,n)}var hy=(Gg.required=kE,Gg);function BE(){return Ps(Xn(),Qt())}function Ps(n,e){return new Sr(pi(n,e))}var Sr=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=BE}return n})();function VE(n){return n instanceof Sr?n.nativeElement:n}function zE(){return this._results[Symbol.iterator]()}var of=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new Vt}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=CS(e);(this._changesDetected=!wS(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=zE};function py(n){return(n.flags&128)===128}var my=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(my||{}),gy=new Map,HE=0;function GE(){return HE++}function WE(n){gy.set(n[zc],n)}function af(n){gy.delete(n[zc])}var Wg="__ngContext__";function Ds(n,e){mr(e)?(n[Wg]=e[zc],WE(e)):n[Wg]=e}function vy(n){return _y(n[To])}function yy(n){return _y(n[On])}function _y(n){for(;n!==null&&!hi(n);)n=n[On];return n}var cf;function xy(n){cf=n}function jE(){if(cf!==void 0)return cf;if(typeof document<"u")return document;throw new Ce(210,!1)}var Kf=new Ne("",{providedIn:"root",factory:()=>$E}),$E="ng",Qf=new Ne(""),Er=new Ne("",{providedIn:"platform",factory:()=>"unknown"});var eh=new Ne("",{providedIn:"root",factory:()=>jE().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var qE="h",XE="b";var My=!1,YE=new Ne("",{providedIn:"root",factory:()=>My});var th=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(th||{}),jc=new Ne(""),jg=new Set;function nh(n){jg.has(n)||(jg.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var vs=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(vs||{}),Sy=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=we({token:n,providedIn:"root",factory:()=>new n})}return n})(),ZE=[vs.EarlyRead,vs.Write,vs.MixedReadWrite,vs.Read],JE=(()=>{class n{ngZone=ee(Tt);scheduler=ee(Ts);errorHandler=ee(di,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){ee(jc,{optional:!0})}execute(){this.executing=!0;for(let t of ZE)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[t]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>i.hooks[t](i.pipelinedValue),i.snapshot))}catch(r){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(r)}this.executing=!1;for(let t of this.sequences)t.afterRun(),t.once&&(this.sequences.delete(t),t.destroy());for(let t of this.deferredRegistrations)this.sequences.add(t);this.deferredRegistrations.size>0&&this.scheduler.notify(8),this.deferredRegistrations.clear()}register(t){this.executing?this.deferredRegistrations.add(t):(this.sequences.add(t),this.scheduler.notify(7))}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,i){return i?i.run(th.AFTER_NEXT_RENDER,t):t()}static \u0275prov=we({token:n,providedIn:"root",factory:()=>new n})}return n})(),lf=class{impl;hooks;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(e,t,i,r,s=null){this.impl=e,this.hooks=t,this.once=i,this.snapshot=s,this.unregisterOnDestroy=r?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.()}};function ih(n,e){!e?.injector&&kS(ih);let t=e?.injector??ee($n);return nh("NgAfterNextRender"),QE(n,t,e,!0)}function KE(n,e){if(n instanceof Function){let t=[void 0,void 0,void 0,void 0];return t[e]=n,t}else return[n.earlyRead,n.write,n.mixedReadWrite,n.read]}function QE(n,e,t,i){let r=e.get(Sy);r.impl??=e.get(JE);let s=e.get(jc,null,{optional:!0}),o=t?.phase??vs.MixedReadWrite,a=t?.manualCleanup!==!0?e.get(Xf):null,c=new lf(r.impl,KE(n,o),i,a,s?.snapshot(null));return r.impl.register(c),c}var eb=()=>null;function rh(n,e,t=!1){return eb(n,e,t)}var qn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(qn||{});function Ey(n){return n instanceof Function?n():n}var zi=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(zi||{}),br=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(br||{}),tb;function sh(n,e){return tb(n,e)}function ys(n,e,t,i,r){if(i!=null){let s,o=!1;hi(i)?s=i:mr(i)&&(o=!0,i=i[fi]);let a=Vi(i);n===0&&t!==null?r==null?Dy(e,t,a):Rc(e,t,a,r||null,!0):n===1&&t!==null?Rc(e,t,a,r||null,!0):n===2?mb(e,a,o):n===3&&e.destroyNode(a),s!=null&&vb(e,n,s,t,r)}}function by(n,e,t){return n.createElement(e,t)}function nb(n,e){wy(n,e),e[fi]=null,e[Fn]=null}function ib(n,e,t,i,r,s){i[fi]=r,i[Fn]=e,$c(n,i,t,1,r,s)}function wy(n,e){e[Bi].changeDetectionScheduler?.notify(10),$c(n,e,e[li],2,null,null)}function rb(n){let e=n[To];if(!e)return Fd(n[Ge],n);for(;e;){let t=null;if(mr(e))t=e[To];else{let i=e[un];i&&(t=i)}if(!t){for(;e&&!e[On]&&e!==n;)mr(e)&&Fd(e[Ge],e),e=e[Wt];e===null&&(e=n),mr(e)&&Fd(e[Ge],e),t=e&&e[On]}e=t}}function sb(n,e,t,i){let r=un+i,s=t.length;i>0&&(t[r-1][On]=e),i<s-un?(e[On]=t[r],yv(t,un+i,e)):(t.push(e),e[On]=null),e[Wt]=t;let o=e[vr];o!==null&&t!==o&&Cy(o,e);let a=e[ui];a!==null&&a.insertView(n),Xd(e),e[Ae]|=128}function Cy(n,e){let t=n[ws],i=e[Wt];if(mr(i))n[Ae]|=Cc.HasTransplantedViews;else{let r=i[Wt][jn];e[jn]!==r&&(n[Ae]|=Cc.HasTransplantedViews)}t===null?n[ws]=[e]:t.push(e)}function oh(n,e){let t=n[ws],i=t.indexOf(e);t.splice(i,1)}function uf(n,e){if(n.length<=un)return;let t=un+e,i=n[t];if(i){let r=i[vr];r!==null&&r!==n&&oh(r,i),e>0&&(n[t-1][On]=i[On]);let s=Mc(n,un+e);nb(i[Ge],i);let o=s[ui];o!==null&&o.detachView(s[Ge]),i[Wt]=null,i[On]=null,i[Ae]&=-129}return i}function Ty(n,e){if(!(e[Ae]&256)){let t=e[li];t.destroyNode&&$c(n,e,t,3,null,null),rb(e)}}function Fd(n,e){if(e[Ae]&256)return;let t=lt(null);try{e[Ae]&=-129,e[Ae]|=256,e[ln]&&md(e[ln]),ab(n,e),ob(n,e),e[Ge].type===1&&e[li].destroy();let i=e[vr];if(i!==null&&hi(e[Wt])){i!==e[Wt]&&oh(i,e);let r=e[ui];r!==null&&r.detachView(n)}af(e)}finally{lt(t)}}function ob(n,e){let t=n.cleanup,i=e[jd];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[jd]=null);let r=e[Fi];if(r!==null){e[Fi]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[bc];if(s!==null){e[bc]=null;for(let o of s)o.destroy()}}function ab(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Do)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Oi(4,a,c);try{c.call(a)}finally{Oi(5,a,c)}}else{Oi(4,r,s);try{s.call(r)}finally{Oi(5,r,s)}}}}}function cb(n,e,t){return lb(n,e.parent,t)}function lb(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[fi];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===qn.None||s===qn.Emulated)return null}return pi(i,t)}}function Rc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Dy(n,e,t){n.appendChild(e,t)}function $g(n,e,t,i,r){i!==null?Rc(n,e,t,i,r):Dy(n,e,t)}function Ay(n,e){return n.parentNode(e)}function ub(n,e){return n.nextSibling(e)}function db(n,e,t){return hb(n,e,t)}function fb(n,e,t){return n.type&40?pi(n,t):null}var hb=fb,qg;function pb(n,e,t,i){let r=cb(n,i,e),s=e[li],o=i.parent||e[Fn],a=db(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)$g(s,r,t[c],a,!1);else $g(s,r,t,a,!1);qg!==void 0&&qg(s,i,e,t,r)}function So(n,e){if(e!==null){let t=e.type;if(t&3)return pi(e,n);if(t&4)return df(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return So(n,i);{let r=n[e.index];return hi(r)?df(-1,r):Vi(r)}}else{if(t&128)return So(n,e.next);if(t&32)return sh(e,n)()||Vi(n[e.index]);{let i=Iy(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=_r(n[jn]);return So(r,i)}else return So(n,e.next)}}}return null}function Iy(n,e){if(e!==null){let i=n[jn][Fn],r=e.projection;return i.projection[r]}return null}function df(n,e){let t=un+n+1;if(t<e.length){let i=e[t],r=i[Ge].firstChild;if(r!==null)return So(i,r)}return e[yr]}function mb(n,e,t){n.removeChild(null,e,t)}function ah(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Ds(Vi(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)ah(n,e,t.child,i,r,s,!1),ys(e,n,r,a,s);else if(c&32){let l=sh(t,i),u;for(;u=l();)ys(e,n,r,u,s);ys(e,n,r,a,s)}else c&16?gb(n,e,i,t,r,s):ys(e,n,r,a,s);t=o?t.projectionNext:t.next}}function $c(n,e,t,i,r,s){ah(t,i,n.firstChild,e,r,s,!1)}function gb(n,e,t,i,r,s){let o=t[jn],c=o[Fn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];ys(e,n,r,u,s)}else{let l=c,u=o[Wt];py(i)&&(l.flags|=128),ah(n,e,l,u,r,s,!0)}}function vb(n,e,t,i,r){let s=t[yr],o=Vi(t);s!==o&&ys(e,n,i,s,r);for(let a=un;a<t.length;a++){let c=t[a];$c(c[Ge],c,n,e,i,s)}}function yb(n,e,t){n.setAttribute(e,"style",t)}function Ry(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Ny(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Jd(n,e,i),r!==null&&Ry(n,e,r),s!==null&&yb(n,e,s)}function _b(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var Py="ng-template";function xb(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&_b(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(ch(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function ch(n){return n.type===4&&n.value!==Py}function Mb(n,e,t){let i=n.type===4&&!t?Py:n.value;return e===i}function Sb(n,e,t){let i=4,r=n.attrs,s=r!==null?wb(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Ln(i)&&!Ln(c))return!1;if(o&&Ln(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Mb(n,c,t)||c===""&&e.length===1){if(Ln(i))return!1;o=!0}}else if(i&8){if(r===null||!xb(n,r,c,t)){if(Ln(i))return!1;o=!0}}else{let l=e[++a],u=Eb(c,r,ch(n),t);if(u===-1){if(Ln(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Ln(i))return!1;o=!0}}}}return Ln(i)||o}function Ln(n){return(n&1)===0}function Eb(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Cb(e,n)}function bb(n,e,t=!1){for(let i=0;i<e.length;i++)if(Sb(n,e[i],t))return!0;return!1}function wb(n){for(let e=0;e<n.length;e++){let t=n[e];if(yE(t))return e}return n.length}function Cb(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Xg(n,e){return n?":not("+e.trim()+")":e}function Tb(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Ln(o)&&(e+=Xg(s,r),r=""),i=o,s=s||!Ln(i);t++}return r!==""&&(e+=Xg(s,r)),e}function Db(n){return n.map(Tb).join(",")}function Ab(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Ln(r))break;r=s}i++}return{attrs:e,classes:t}}var Ly={};function Ib(n,e,t,i){if(!i)if((e[Ae]&3)===3){let s=n.preOrderCheckHooks;s!==null&&pc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&mc(e,s,0,t)}xr(t)}function lh(n,e=He.Default){let t=Qt();if(t===null)return Oe(n,e);let i=Xn();return ry(i,t,bn(n),e)}function Oy(){let n="invalid";throw new Error(n)}function Fy(n,e,t,i,r,s){let o=lt(null);try{let a=null;r&zi.SignalBased&&(a=e[i][is]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&zi.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):Nv(e,a,i,s)}finally{lt(o)}}function Rb(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)xr(~r);else{let s=r,o=t[++i],a=t[++i];oE(o,s);let c=e[s];a(2,c)}}}finally{xr(-1)}}function qc(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[fi]=r,d[Ae]=i|4|128|8|64|1024,(l!==null||n&&n[Ae]&2048)&&(d[Ae]|=2048),Fv(d),d[Wt]=d[No]=n,d[ki]=t,d[Bi]=o||n&&n[Bi],d[li]=a||n&&n[li],d[Es]=c||n&&n[Es]||null,d[Fn]=s,d[zc]=GE(),d[Ec]=u,d[Av]=l,d[jn]=e.type==2?n[jn]:d,d}function Uy(n,e,t,i,r){let s=n.data[e];if(s===null)s=Nb(n,e,t,i,r),sE()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=nE();s.injectorIndex=o===null?-1:o.injectorIndex}return zf(s,!0),s}function Nb(n,e,t,i,r){let s=Bv(),o=Vv(),a=o?s:s&&s.parent,c=n.data[e]=Vb(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function ky(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function By(n,e,t,i,r){let s=lE(),o=i&2;try{xr(-1),o&&e.length>bs&&Ib(n,e,bs,!1),Oi(o?2:0,r),t(i,r)}finally{xr(s),Oi(o?3:1,r)}}function Vy(n,e,t){if(Rv(e)){let i=lt(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{lt(i)}}}function Pb(n,e,t){kv()&&(jb(n,e,t,pi(t,e)),(t.flags&64)===64&&Wy(n,e,t))}function Lb(n,e,t=pi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function zy(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Hy(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Hy(n,e,t,i,r,s,o,a,c,l,u){let d=bs+i,f=d+r,p=Ob(d,f),g=typeof l=="function"?l():l;return p[Ge]={type:n,blueprint:p,template:t,queries:null,viewQuery:a,declTNode:e,data:p.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function Ob(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Ly);return t}function Fb(n,e,t,i){let s=i.get(YE,My)||t===qn.ShadowDom,o=n.selectRootElement(e,s);return Ub(o),o}function Ub(n){kb(n)}var kb=()=>null;function Bb(n,e,t,i){let r=nw(e);r.push(t),n.firstCreatePass&&iw(n).push(i,r.length-1)}function Vb(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return QS()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Yg(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=zi.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Zg(i,t,l,a,c):Zg(i,t,l,a)}return i}function Zg(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function zb(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,p=f?f.inputs:null,g=f?f.outputs:null;c=Yg(0,d.inputs,u,c,p),l=Yg(1,d.outputs,u,l,g);let _=c!==null&&o!==null&&!ch(e)?ew(c,u,o):null;a.push(_)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function Hb(n,e,t,i){if(kv()){let r=i===null?null:{"":-1},s=qb(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&Gy(n,e,t,o,r,a),r&&Xb(t,i,r)}t.mergedAttrs=jf(t.mergedAttrs,t.attrs)}function Gy(n,e,t,i,r,s){for(let l=0;l<i.length;l++)bE(ey(t,e),n,i[l].type);Zb(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=ky(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=jf(t.mergedAttrs,u.hostAttrs),Jb(n,t,e,c,u),Yb(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}zb(n,t,s)}function Gb(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;Wb(o)!=a&&o.push(a),o.push(t,i,s)}}function Wb(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function jb(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;Uf(t)&&Kb(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||ey(t,e),Ds(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=Cs(e,n,a,t);if(Ds(l,e),o!==null&&Qb(e,a-r,l,c,t,o),Po(c)){let u=Lo(t.index,e);u[ki]=Cs(e,n,a,t)}}}function Wy(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=aE();try{xr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Zd(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&$b(c,l)}}finally{xr(-1),Zd(o)}}function $b(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function qb(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(bb(e,o.selectors,!1))if(i||(i=[]),Po(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;ff(n,e,c)}else i.unshift(o),ff(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function ff(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function Xb(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ce(-301,!1);i.push(e[r],s)}}}function Yb(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Po(e)&&(t[""]=n)}}function Zb(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Jb(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Ms(r.type,!0)),o=new Do(s,Po(r),lh);n.blueprint[i]=o,t[i]=o,Gb(n,e,i,ky(n,t,r.hostVars,Ly),r)}function jy(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function Kb(n,e,t){let i=pi(e,n),r=zy(t),s=n[Bi].rendererFactory,o=uh(n,qc(n,r,null,jy(t),i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=o}function Qb(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];Fy(i,t,c,l,u,d)}}function ew(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function tw(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function $y(n,e){let t=n.contentQueries;if(t!==null){let i=lt(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Hf(s),a.contentQueries(2,e[o],o)}}}finally{lt(i)}}}function uh(n,e){return n[To]?n[Ig][On]=e:n[To]=e,n[Ig]=e,e}function hf(n,e,t){Hf(0);let i=lt(null);try{e(n,t)}finally{lt(i)}}function nw(n){return n[jd]??=[]}function iw(n){return n.cleanup??=[]}function rw(n,e){let t=n[Es],i=t?t.get(di,null):null;i&&i.handleError(e)}function qy(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];Fy(u,l,i,a,c,r)}}function sw(n,e){let t=Lo(e,n),i=t[Ge];ow(i,t);let r=t[fi];r!==null&&t[Ec]===null&&(t[Ec]=rh(r,t[Es])),dh(i,t,t[ki])}function ow(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function dh(n,e,t){Gf(e);try{let i=n.viewQuery;i!==null&&hf(1,i,t);let r=n.template;r!==null&&By(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[ui]?.finishViewCreation(n),n.staticContentQueries&&$y(n,e),n.staticViewQueries&&hf(2,n.viewQuery,t);let s=n.components;s!==null&&aw(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ae]&=-5,Wf()}}function aw(n,e){for(let t=0;t<e.length;t++)sw(n,e[t])}function cw(n,e,t,i){let r=lt(null);try{let s=e.tView,a=n[Ae]&4096?4096:16,c=qc(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[vr]=l;let u=n[ui];return u!==null&&(c[ui]=u.createEmbeddedView(s)),dh(s,c,t),c}finally{lt(r)}}function Jg(n,e){return!e||e.firstChild===null||py(n)}function lw(n,e,t,i=!0){let r=e[Ge];if(sb(r,e,n,t),i){let o=df(t,n),a=e[li],c=Ay(a,n[yr]);c!==null&&ib(r,n[Fn],a,e,c,o)}let s=e[Ec];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Nc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Vi(s)),hi(s)&&uw(s,i);let o=t.type;if(o&8)Nc(n,e,t.child,i);else if(o&32){let a=sh(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=Iy(e,t);if(Array.isArray(a))i.push(...a);else{let c=_r(e[jn]);Nc(c[Ge],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function uw(n,e){for(let t=un;t<n.length;t++){let i=n[t],r=i[Ge].firstChild;r!==null&&Nc(i[Ge],i,r,e)}n[yr]!==n[fi]&&e.push(n[yr])}var Xy=[];function dw(n){return n[ln]??fw(n)}function fw(n){let e=Xy.pop()??Object.create(pw);return e.lView=n,e}function hw(n){n.lView[ln]!==n&&(n.lView=null,Xy.push(n))}var pw=yt(he({},Ga),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{Gc(n.lView)},consumerOnSignalRead(){this.lView[ln]=this}});function mw(n){let e=n[ln]??Object.create(gw);return e.lView=n,e}var gw=yt(he({},Ga),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{let e=_r(n.lView);for(;e&&!Yy(e[Ge]);)e=_r(e);e&&Vf(e)},consumerOnSignalRead(){this.lView[ln]=this}});function Yy(n){return n.type!==2}function Zy(n){if(n[bc]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[bc])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Ae]&8192)}}var vw=100;function Jy(n,e=!0,t=0){let r=n[Bi].rendererFactory,s=!1;s||r.begin?.();try{yw(n,t)}catch(o){throw e&&rw(n,o),o}finally{s||r.end?.()}}function yw(n,e){let t=zv();try{Pg(!0),pf(n,e);let i=0;for(;Hc(n);){if(i===vw)throw new Ce(103,!1);i++,pf(n,1)}}finally{Pg(t)}}function _w(n,e,t,i){let r=e[Ae];if((r&256)===256)return;let s=!1,o=!1;Gf(e);let a=!0,c=null,l=null;s||(Yy(n)?(l=dw(e),c=hd(l)):km()===null?(a=!1,l=mw(e),c=hd(l)):e[ln]&&(md(e[ln]),e[ln]=null));try{Fv(e),rE(n.bindingStartIndex),t!==null&&By(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let p=n.preOrderCheckHooks;p!==null&&pc(e,p,null)}else{let p=n.preOrderHooks;p!==null&&mc(e,p,0,null),Pd(e,0)}if(o||xw(e),Zy(e),Ky(e,0),n.contentQueries!==null&&$y(n,e),!s)if(u){let p=n.contentCheckHooks;p!==null&&pc(e,p)}else{let p=n.contentHooks;p!==null&&mc(e,p,1),Pd(e,1)}Rb(n,e);let d=n.components;d!==null&&e_(e,d,0);let f=n.viewQuery;if(f!==null&&hf(2,f,i),!s)if(u){let p=n.viewCheckHooks;p!==null&&pc(e,p)}else{let p=n.viewHooks;p!==null&&mc(e,p,2),Pd(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Nd]){for(let p of e[Nd])p();e[Nd]=null}s||(e[Ae]&=-73)}catch(u){throw s||Gc(e),u}finally{l!==null&&(Hm(l,c),a&&hw(l)),Wf()}}function Ky(n,e){for(let t=vy(n);t!==null;t=yy(t))for(let i=un;i<t.length;i++){let r=t[i];Qy(r,e)}}function xw(n){for(let e=vy(n);e!==null;e=yy(e)){if(!(e[Ae]&Cc.HasTransplantedViews))continue;let t=e[ws];for(let i=0;i<t.length;i++){let r=t[i];Vf(r)}}}function Mw(n,e,t){let i=Lo(e,n);Qy(i,t)}function Qy(n,e){Bf(n)&&pf(n,e)}function pf(n,e){let i=n[Ge],r=n[Ae],s=n[ln],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&pd(s)),o||=!1,s&&(s.dirty=!1),n[Ae]&=-9217,o)_w(i,n,i.template,n[ki]);else if(r&8192){Zy(n),Ky(n,1);let a=i.components;a!==null&&e_(n,a,1)}}function e_(n,e,t){for(let i=0;i<e.length;i++)Mw(n,e[i],t)}function t_(n,e){let t=zv()?64:1088;for(n[Bi].changeDetectionScheduler?.notify(e);n;){n[Ae]|=t;let i=_r(n);if($d(n)&&!i)return n;n=i}return null}var Mr=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[Ge];return Nc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[ki]}get dirty(){return!!(this._lView[Ae]&9280)||!!this._lView[ln]?.dirty}set context(e){this._lView[ki]=e}get destroyed(){return(this._lView[Ae]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Wt];if(hi(e)){let t=e[wc],i=t?t.indexOf(this):-1;i>-1&&(uf(e,i),Mc(t,i))}this._attachedToViewContainer=!1}Ty(this._lView[Ge],this._lView)}onDestroy(e){Uv(this._lView,e)}markForCheck(){t_(this._cdRefInjectingView||this._lView,4)}markForRefresh(){Vf(this._cdRefInjectingView||this._lView)}detach(){this._lView[Ae]&=-129}reattach(){Xd(this._lView),this._lView[Ae]|=128}detectChanges(){this._lView[Ae]|=1024,Jy(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ce(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=$d(this._lView),t=this._lView[vr];t!==null&&!e&&oh(t,this._lView),wy(this._lView[Ge],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ce(902,!1);this._appRef=e;let t=$d(this._lView),i=this._lView[vr];i!==null&&!t&&Cy(i,this._lView),Xd(this._lView)}},Ao=(()=>{class n{static __NG_ELEMENT_ID__=bw}return n})(),Sw=Ao,Ew=class extends Sw{_declarationLView;_declarationTContainer;elementRef;constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=cw(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new Mr(r)}};function bw(){return fh(Xn(),Qt())}function fh(n,e){return n.type&4?new Ew(e,n,Ps(n,e)):null}var VU=new RegExp(`^(\\d+)*(${XE}|${qE})*(.*)`);var ww=()=>null;function Kg(n,e){return ww(n,e)}var mf=class{},Pc=class{},gf=class{resolveComponentFactory(e){throw Error(`No component factory found for ${cn(e)}.`)}},As=class{static NULL=new gf},Is=class{};var Cw=(()=>{class n{static \u0275prov=we({token:n,providedIn:"root",factory:()=>null})}return n})();function vf(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=bg(r,a);else if(s==2){let c=a,l=e[++o];i=bg(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var Lc=class extends As{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Ui(e);return new Rs(t,this.ngModule)}};function Qg(n,e){let t=[];for(let i in n){if(!n.hasOwnProperty(i))continue;let r=n[i];if(r===void 0)continue;let s=Array.isArray(r),o=s?r[0]:r,a=s?r[1]:zi.None;e?t.push({propName:o,templateName:i,isSignal:(a&zi.SignalBased)!==0}):t.push({propName:o,templateName:i})}return t}function Tw(n){let e=n.toLowerCase();return e==="svg"?WS:e==="math"?jS:null}var Rs=class extends Pc{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Qg(e.inputs,!0);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Qg(this.componentDef.outputs,!1)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Db(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=lt(null);try{r=r||this.ngModule;let o=r instanceof dn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new Kd(e,o):e,c=a.get(Is,null);if(c===null)throw new Ce(407,!1);let l=a.get(Cw,null),u=a.get(Ts,null),d={rendererFactory:c,sanitizer:l,changeDetectionScheduler:u},f=c.createRenderer(null,this.componentDef),p=this.componentDef.selectors[0][0]||"div",g=i?Fb(f,i,this.componentDef.encapsulation,a):by(f,p,Tw(p)),_=512;this.componentDef.signals?_|=4096:this.componentDef.onPush||(_|=16);let m=null;g!==null&&(m=rh(g,a,!0));let h=Hy(0,null,null,1,0,null,null,null,null,null,null),w=qc(null,h,null,_,null,null,d,f,a,null,m);Gf(w);let b,E,P=null;try{let D=this.componentDef,C,L=null;D.findHostDirectiveDefs?(C=[],L=new Map,D.findHostDirectiveDefs(D,C,L),C.push(D)):C=[D];let M=Dw(w,g);P=Aw(M,g,D,C,w,d,f),E=$S(h,bs),g&&Nw(f,D,g,i),t!==void 0&&Pw(E,this.ngContentSelectors,t),b=Rw(P,D,C,L,w,[Lw]),dh(h,w,null)}catch(D){throw P!==null&&af(P),af(w),D}finally{Wf()}return new yf(this.componentType,b,Ps(E,w),w,E)}finally{lt(s)}}},yf=class extends mf{location;_rootLView;_tNode;instance;hostView;changeDetectorRef;componentType;previousInputValues=null;constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.instance=t,this.hostView=this.changeDetectorRef=new Mr(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;qy(s[Ge],s,r,e,t),this.previousInputValues.set(e,t);let o=Lo(this._tNode.index,s);t_(o,1)}}get injector(){return new gr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function Dw(n,e){let t=n[Ge],i=bs;return n[i]=e,Uy(t,i,2,"#host",null)}function Aw(n,e,t,i,r,s,o){let a=r[Ge];Iw(i,n,e,o);let c=null;e!==null&&(c=rh(e,r[Es]));let l=s.rendererFactory.createRenderer(e,t),u=qc(r,zy(t),null,jy(t),r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&ff(a,n,i.length-1),uh(r,u),r[n.index]=u}function Iw(n,e,t,i){for(let r of n)e.mergedAttrs=jf(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(vf(e,e.mergedAttrs,!0),t!==null&&Ny(i,t,e))}function Rw(n,e,t,i,r,s){let o=Xn(),a=r[Ge],c=pi(o,r);Gy(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,f=Cs(r,a,d,o);Ds(f,r)}Wy(a,r,o),c&&Ds(c,r);let l=Cs(r,a,o.directiveStart+o.componentOffset,o);if(n[ki]=r[ki]=l,s!==null)for(let u of s)u(l,e);return Vy(a,o,r),l}function Nw(n,e,t,i){if(i)Jd(n,t,["ng-version","19.0.4"]);else{let{attrs:r,classes:s}=Ab(e.selectors[0]);r&&Jd(n,t,r),s&&s.length>0&&Ry(n,t,s.join(" "))}}function Pw(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}function Lw(){let n=Xn();Yv(Qt()[Ge],n)}var Ls=(()=>{class n{static __NG_ELEMENT_ID__=Ow}return n})();function Ow(){let n=Xn();return i_(n,Qt())}var Fw=Ls,n_=class extends Fw{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Ps(this._hostTNode,this._hostLView)}get injector(){return new gr(this._hostTNode,this._hostLView)}get parentInjector(){let e=$f(this._hostTNode,this._hostLView);if(Jv(e)){let t=Dc(e,this._hostLView),i=Tc(e),r=t[Ge].data[i+8];return new gr(r,t)}else return new gr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=ev(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-un}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Kg(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Jg(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!BS(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new Rs(Ui(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let _=(o?l:this.parentInjector).get(dn,null);_&&(s=_)}let u=Ui(c.componentType??{}),d=Kg(this._lContainer,u?.id??null),f=d?.firstChild??null,p=c.create(l,r,f,s);return this.insertImpl(p.hostView,a,Jg(this._hostTNode,d)),p}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(XS(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Wt],l=new n_(c,c[Fn],c[Wt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return lw(o,r,s,i),e.attachToViewContainerRef(),yv(Ud(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=ev(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=uf(this._lContainer,t);i&&(Mc(Ud(this._lContainer),t),Ty(i[Ge],i))}detach(e){let t=this._adjustIndex(e,-1),i=uf(this._lContainer,t);return i&&Mc(Ud(this._lContainer),t)!=null?new Mr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function ev(n){return n[wc]}function Ud(n){return n[wc]||(n[wc]=[])}function i_(n,e){let t,i=e[n.index];return hi(i)?t=i:(t=tw(i,e,null,n),e[n.index]=t,uh(e,t)),kw(t,e,n,i),new n_(t,n,e)}function Uw(n,e){let t=n[li],i=t.createComment(""),r=pi(e,n),s=Ay(t,r);return Rc(t,s,i,ub(t,r),!1),i}var kw=Bw;function Bw(n,e,t,i){if(n[yr])return;let r;t.type&8?r=Vi(i):r=Uw(e,t),n[yr]=r}var _f=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},xf=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)hh(e,t).matches!==null&&this.queries[t].setDirty()}},Mf=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=qw(e):this.predicate=e}},Sf=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Ef=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,Vw(t,s)),this.matchTNodeWithReadOption(e,t,gc(t,e,s,!1,!1))}else i===Ao?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,gc(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Sr||r===Ls||r===Ao&&t.type&4)this.addMatch(t.index,-2);else{let s=gc(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function Vw(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function zw(n,e){return n.type&11?Ps(n,e):n.type&4?fh(n,e):null}function Hw(n,e,t,i){return t===-1?zw(e,n):t===-2?Gw(n,e,i):Cs(n,n[Ge],t,e)}function Gw(n,e,t){if(t===Sr)return Ps(e,n);if(t===Ao)return fh(e,n);if(t===Ls)return i_(e,n)}function r_(n,e,t,i){let r=e[ui].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(Hw(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function bf(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=r_(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=un;d<u.length;d++){let f=u[d];f[vr]===f[Wt]&&bf(f[Ge],f,l,i)}if(u[ws]!==null){let d=u[ws];for(let f=0;f<d.length;f++){let p=d[f];bf(p[Ge],p,l,i)}}}}}return i}function Ww(n,e){return n[ui].queries[e].queryList}function jw(n,e,t){let i=new of((t&4)===4);return Bb(n,e,i,i.destroy),(e[ui]??=new xf).queries.push(new _f(i))-1}function $w(n,e,t){let i=Wc();return i.firstCreatePass&&(Xw(i,new Mf(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),jw(i,Qt(),e)}function qw(n){return n.split(",").map(e=>e.trim())}function Xw(n,e,t){n.queries===null&&(n.queries=new Sf),n.queries.track(new Ef(e,t))}function hh(n,e){return n.queries.getByIndex(e)}function Yw(n,e){let t=n[Ge],i=hh(t,e);return i.crossesNgTemplate?bf(t,n,e,[]):r_(t,n,i,e)}var Hi=class{},Io=class{};var wf=class extends Hi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Lc(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Mv(e);this._bootstrapComponents=Ey(s.bootstrap),this._r3Injector=ay(e,t,[{provide:Hi,useValue:this},{provide:As,useValue:this.componentFactoryResolver},...i],cn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Cf=class extends Io{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new wf(this.moduleType,e,[])}};var Oc=class extends Hi{injector;componentFactoryResolver=new Lc(this);instance=null;constructor(e){super();let t=new Co([...e.providers,{provide:Hi,useValue:this},{provide:As,useValue:this.componentFactoryResolver}],e.parent||Ff(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Xc(n,e,t=null){return new Oc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var Zw=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=wv(!1,t.type),r=i.length>0?Xc([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=we({token:n,providedIn:"environment",factory:()=>new n(Oe(dn))})}return n})();function Yc(n){return Ro(()=>{let e=s_(n),t=yt(he({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===my.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(Zw).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||qn.Emulated,styles:n.styles||Gn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&nh("NgStandalone"),o_(t);let i=n.dependencies;return t.directiveDefs=nv(i,!1),t.pipeDefs=nv(i,!0),t.id=Qw(t),t})}function Jw(n){return Ui(n)||Sv(n)}function Kw(n){return n!==null}function Zc(n){return Ro(()=>({type:n.type,bootstrap:n.bootstrap||Gn,declarations:n.declarations||Gn,imports:n.imports||Gn,exports:n.exports||Gn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function tv(n,e){if(n==null)return wo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=zi.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==zi.None?[i,a]:i,e[s]=o):t[s]=i}return t}function ph(n){return Ro(()=>{let e=s_(n);return o_(e),e})}function s_(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||wo,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Gn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:tv(n.inputs,e),outputs:tv(n.outputs),debugInfo:null}}function o_(n){n.features?.forEach(e=>e(n))}function nv(n,e){if(!n)return null;let t=e?Ev:Jw;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(Kw)}function Qw(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function eC(n){return(n.flags&32)===32}var Jc=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var a_=new Ne("");function Oo(n){return!!n&&typeof n.then=="function"}function c_(n){return!!n&&typeof n.subscribe=="function"}var Kc=new Ne("");var l_=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=ee(Kc,{optional:!0})??[];injector=ee($n);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=wn(this.injector,r);if(Oo(s))t.push(s);else if(c_(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),tC=(()=>{class n{static \u0275prov=we({token:n,providedIn:"root",factory:()=>new Tf})}return n})(),Tf=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}},Qc=new Ne("");function nC(){qm(()=>{throw new Ce(600,!1)})}function iC(n){return n.isBoundToModule}var rC=10;function sC(n,e,t){try{let i=t();return Oo(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var wr=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ee(UE);afterRenderManager=ee(Sy);zonelessEnabled=ee(Yf);rootEffectScheduler=ee(tC);dirtyFlags=0;deferredDirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Vt;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=ee(Ns).hasPendingTasks.pipe($e(t=>!t));constructor(){ee(jc,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=ee(dn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){let r=t instanceof Pc;if(!this._injector.get(l_).done){let f=!r&&bv(t),p=!1;throw new Ce(405,p)}let o;r?o=t:o=this._injector.get(As).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=iC(o)?void 0:this._injector.get(Hi),c=i||o.selector,l=o.create($n.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(a_,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),vc(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick=()=>{if(this.tracingSnapshot!==null){let i=this.tracingSnapshot;this.tracingSnapshot=null,i.run(th.CHANGE_DETECTION,this._tick),i.dispose();return}if(this._runningTick)throw new Ce(101,!1);let t=lt(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,lt(t),this.afterTick.next()}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Is,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let t=0;for(;this.dirtyFlags!==0&&t++<rC;)this.synchronizeOnce()}synchronizeOnce(){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)oC(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Hc(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;vc(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(Qc,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>vc(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ce(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function vc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function oC(n,e,t,i){if(!t&&!Hc(n))return;Jy(n,e,t&&!i?0:1)}function iv(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";qy(n,t,s[o],o,i)}function aC(n,e,t,i,r,s){let o=e.consts,a=Ng(o,r),c=Uy(e,n,2,i,a);return Hb(e,t,c,Ng(o,s)),c.attrs!==null&&vf(c,c.attrs,!1),c.mergedAttrs!==null&&vf(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function u_(n,e,t,i){let r=Qt(),s=Wc(),o=bs+n,a=r[li],c=s.firstCreatePass?aC(o,s,r,e,t,i):s.data[o],l=cC(s,r,c,a,e,n);r[o]=l;let u=VS(c);return zf(c,!0),Ny(a,l,c),!eC(c)&&dE()&&pb(s,r,l,c),ZS()===0&&Ds(l,r),JS(),u&&(Pb(s,r,c),Vy(s,c,r)),i!==null&&Lb(r,c),u_}function d_(){let n=Xn();Vv()?iE():(n=n.parent,zf(n,!1));let e=n;eE(e)&&tE(),KS();let t=Wc();return t.firstCreatePass&&(Yv(t,n),Rv(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&gE(e)&&iv(t,e,Qt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&vE(e)&&iv(t,e,Qt(),e.stylesWithoutHost,!1),d_}function Fo(n,e,t,i){return u_(n,e,t,i),d_(),Fo}var cC=(n,e,t,i,r,s)=>(fE(!0),by(i,r,uE()));var Fc="en-US";var lC=Fc;function uC(n){typeof n=="string"&&(lC=n.toLowerCase().replace(/_/g,"-"))}function f_(n,e,t){$w(n,e,t)}function mh(n){let e=Qt(),t=Wc(),i=Hv();Hf(i+1);let r=hh(t,i);if(n.dirty&&qS(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=Yw(e,i);n.reset(s,VE),n.notifyOnChanges()}return!0}return!1}function gh(){return Ww(Qt(),Hv())}var Df=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},el=(()=>{class n{compileModuleSync(t){return new Cf(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Mv(t),s=Ey(r.declarations).reduce((o,a)=>{let c=Ui(a);return c&&o.push(new Rs(c)),o},[]);return new Df(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var dC=(()=>{class n{zone=ee(Tt);changeDetectionScheduler=ee(Ts);applicationRef=ee(wr);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function fC({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Tt(yt(he({},hC()),{scheduleInRootZone:t})),[{provide:Tt,useFactory:n},{provide:Ss,multi:!0,useFactory:()=>{let i=ee(dC,{optional:!0});return()=>i.initialize()}},{provide:Ss,multi:!0,useFactory:()=>{let i=ee(pC);return()=>{i.initialize()}}},e===!0?{provide:ly,useValue:!0}:[],{provide:uy,useValue:t??cy}]}function hC(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var pC=(()=>{class n{subscription=new At;initialized=!1;zone=ee(Tt);pendingTasks=ee(Ns);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Tt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Tt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var mC=(()=>{class n{appRef=ee(wr);taskService=ee(Ns);ngZone=ee(Tt);zonelessEnabled=ee(Yf);tracing=ee(jc,{optional:!0});disableScheduling=ee(ly,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new At;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ic):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ee(uy,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof sf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 8:{this.appRef.deferredDirtyFlags|=8;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 13:{this.appRef.dirtyFlags|=16,i=!0;break}case 14:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{i=!0;break}case 10:case 9:case 7:case 11:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?Vg:dy;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ic+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Vg(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function gC(){return typeof $localize<"u"&&$localize.locale||Fc}var vh=new Ne("",{providedIn:"root",factory:()=>ee(vh,He.Optional|He.SkipSelf)||gC()});var Af=new Ne("");function fc(n){return!n.moduleRef}function vC(n){let e=fc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Tt);return t.run(()=>{fc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(di,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),fc(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Af);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Af);o.add(s),n.moduleRef.onDestroy(()=>{vc(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return sC(i,t,()=>{let s=e.get(l_);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(vh,Fc);if(uC(o||Fc),fc(n)){let a=e.get(wr);return n.rootComponent!==void 0&&a.bootstrap(n.rootComponent),a}else return yC(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function yC(n,e){let t=n.injector.get(wr);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Ce(-403,!1);e.push(n)}var yc=null;function _C(n=[],e){return $n.create({name:e,providers:[{provide:Vc,useValue:"platform"},{provide:Af,useValue:new Set([()=>yc=null])},...n]})}function xC(n=[]){if(yc)return yc;let e=_C(n);return yc=e,nC(),MC(e),e}function MC(n){let e=n.get(Qf,null);wn(n,()=>{e?.forEach(t=>t())})}var Uo=(()=>{class n{static __NG_ELEMENT_ID__=SC}return n})();function SC(n){return EC(Xn(),Qt(),(n&16)===16)}function EC(n,e,t){if(Uf(n)&&!t){let i=Lo(n.index,e);return new Mr(i,i)}else if(n.type&175){let i=e[jn];return new Mr(i,e)}return null}function h_(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=xC(i),s=[fC({}),{provide:Ts,useExisting:mC},...t||[]],o=new Oc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return vC({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}}var rv=class{[is];constructor(e){this[is]=e}destroy(){this[is].destroy()}};function p_(n){let e=Ui(n);if(!e)return null;let t=new Rs(e);return{get selector(){return t.selector},get type(){return t.componentType},get inputs(){return t.inputs},get outputs(){return t.outputs},get ngContentSelectors(){return t.ngContentSelectors},get isStandalone(){return e.standalone},get isSignal(){return e.signals}}}var __=null;function Os(){return __}function x_(n){__??=n}var nl=class{};var en=new Ne(""),xh=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>ee(DC),providedIn:"platform"})}return n})(),M_=new Ne(""),DC=(()=>{class n extends xh{_location;_history;_doc=ee(en);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Os().getBaseHref(this._doc)}onPopState(t){let i=Os().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Os().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Mh(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function m_(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function mi(n){return n&&n[0]!=="?"?"?"+n:n}var Cr=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>ee(Sh),providedIn:"root"})}return n})(),S_=new Ne(""),Sh=(()=>{class n extends Cr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??ee(en).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Mh(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+mi(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+mi(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+mi(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Oe(xh),Oe(S_,8))};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),E_=(()=>{class n extends Cr{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(t){let i=Mh(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+mi(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+mi(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Oe(xh),Oe(S_,8))};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})(),Fs=(()=>{class n{_subject=new Vt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=RC(m_(g_(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+mi(i))}normalize(t){return n.stripTrailingSlash(IC(this._basePath,g_(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+mi(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+mi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=mi;static joinWithSlash=Mh;static stripTrailingSlash=m_;static \u0275fac=function(i){return new(i||n)(Oe(Cr))};static \u0275prov=we({token:n,factory:()=>AC(),providedIn:"root"})}return n})();function AC(){return new Fs(Oe(Cr))}function IC(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function g_(n){return n.replace(/\/index.html$/,"")}function RC(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function b_(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Eh="browser",NC="server";function PC(n){return n===Eh}function bh(n){return n===NC}var w_=(()=>{class n{static \u0275prov=we({token:n,providedIn:"root",factory:()=>PC(ee(Er))?new yh(ee(en),window):new _h})}return n})(),yh=class{document;window;offset=()=>[0,0];constructor(e,t){this.document=e,this.window=t}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let t=LC(this.document,e);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let t=e.getBoundingClientRect(),i=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(i-s[0],r-s[1])}};function LC(n,e){let t=n.getElementById(e)||n.getElementsByName(e)[0];if(t)return t;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}r=i.nextNode()}}return null}var _h=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},il=class{};var Ch=class extends nl{supportsDOMEvents=!0},Th=class n extends Ch{static makeCurrent(){x_(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=OC();return t==null?null:FC(t)}resetBaseElement(){ko=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return b_(document.cookie,e)}},ko=null;function OC(){return ko=ko||document.querySelector("base"),ko?ko.getAttribute("href"):null}function FC(n){return new URL(n,document.baseURI).pathname}var UC=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})(),Dh=new Ne(""),R_=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Ce(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Oe(Dh),Oe(Tt))};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})(),sl=class{_doc;constructor(e){this._doc=e}manager},rl="ng-app-id";function C_(n){for(let e of n)e.remove()}function T_(n,e){let t=e.createElement("style");return t.textContent=n,t}function kC(n,e,t,i){let r=n.head?.querySelectorAll(`style[${rl}="${e}"],link[${rl}="${e}"]`);if(r)for(let s of r)s.removeAttribute(rl),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Ah(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var N_=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=bh(s),kC(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,T_);i?.forEach(r=>this.addUsage(r,this.external,Ah))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(C_(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])C_(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,T_(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Ah(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(rl,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Oe(en),Oe(Kf),Oe(eh,8),Oe(Er))};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})(),wh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Rh=/%COMP%/g,P_="%COMP%",BC=`_nghost-${P_}`,VC=`_ngcontent-${P_}`,zC=!0,HC=new Ne("",{providedIn:"root",factory:()=>zC});function GC(n){return VC.replace(Rh,n)}function WC(n){return BC.replace(Rh,n)}function L_(n,e){return e.map(t=>t.replace(Rh,n))}var D_=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.platformIsServer=bh(a),this.defaultRenderer=new Bo(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===qn.ShadowDom&&(i=yt(he({},i),{encapsulation:qn.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof ol?r.applyToHost(t):r instanceof Vo&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(i.encapsulation){case qn.Emulated:s=new ol(c,l,i,this.appId,u,o,a,d);break;case qn.ShadowDom:return new Ih(c,l,t,i,o,a,this.nonce,d);default:s=new Vo(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(i){return new(i||n)(Oe(R_),Oe(N_),Oe(Kf),Oe(HC),Oe(en),Oe(Er),Oe(Tt),Oe(eh))};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})(),Bo=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(wh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(A_(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(A_(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ce(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=wh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=wh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(br.DashCase|br.Important)?e.style.setProperty(t,i,r&br.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&br.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Os().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function A_(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ih=class extends Bo{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=L_(r.id,r.styles);for(let d of l){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=d,this.shadowRoot.appendChild(f)}let u=r.getExternalStyles?.();if(u)for(let d of u){let f=Ah(d,s);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Vo=class extends Bo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?L_(c,i.styles):i.styles,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ol=class extends Vo{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=GC(l),this.hostAttr=WC(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},jC=(()=>{class n extends sl{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static \u0275fac=function(i){return new(i||n)(Oe(en))};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})(),I_=["alt","control","meta","shift"],$C={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},qC={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},XC=(()=>{class n extends sl{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Os().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),I_.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=$C[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),I_.forEach(o=>{if(o!==r){let a=qC[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Oe(en))};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})();function O_(n,e){return h_(he({rootComponent:n},YC(e)))}function YC(n){return{appProviders:[...eT,...n?.providers??[]],platformProviders:QC}}function ZC(){Th.makeCurrent()}function JC(){return new di}function KC(){return xy(document),document}var QC=[{provide:Er,useValue:Eh},{provide:Qf,useValue:ZC,multi:!0},{provide:en,useFactory:KC,deps:[]}];var eT=[{provide:Vc,useValue:"root"},{provide:di,useFactory:JC,deps:[]},{provide:Dh,useClass:jC,multi:!0,deps:[en,Tt,Er]},{provide:Dh,useClass:XC,multi:!0,deps:[en]},D_,N_,R_,{provide:Is,useExisting:D_},{provide:il,useClass:UC,deps:[]},[]];var F_=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(Oe(en))};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Be="primary",na=Symbol("RouteTitle"),Fh=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Hs(n){return new Fh(n)}function nT(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function iT(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Yn(n[t],e[t]))return!1;return!0}function Yn(n,e){let t=n?Uh(n):void 0,i=e?Uh(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!q_(n[r],e[r]))return!1;return!0}function Uh(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function q_(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function X_(n){return n.length>0?n[n.length-1]:null}function ji(n){return wd(n)?n:Oo(n)?Ct(Promise.resolve(n)):De(n)}var rT={exact:Z_,subset:J_},Y_={exact:sT,subset:oT,ignored:()=>!0};function U_(n,e,t){return rT[t.paths](n.root,e.root,t.matrixParams)&&Y_[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function sT(n,e){return Yn(n,e)}function Z_(n,e,t){if(!Dr(n.segments,e.segments)||!ll(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Z_(n.children[i],e.children[i],t))return!1;return!0}function oT(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>q_(n[t],e[t]))}function J_(n,e,t){return K_(n,e,e.segments,t)}function K_(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Dr(r,t)||e.hasChildren()||!ll(r,t,i))}else if(n.segments.length===t.length){if(!Dr(n.segments,t)||!ll(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!J_(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Dr(n.segments,r)||!ll(n.segments,r,i)||!n.children[Be]?!1:K_(n.children[Be],e,s,i)}}function ll(n,e,t){return e.every((i,r)=>Y_[t](n[r].parameters,i.parameters))}var vi=class{root;queryParams;fragment;_queryParamMap;constructor(e=new at([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Hs(this.queryParams),this._queryParamMap}toString(){return lT.serialize(this)}},at=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ul(this)}},Tr=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Hs(this.parameters),this._parameterMap}toString(){return e0(this)}};function aT(n,e){return Dr(n,e)&&n.every((t,i)=>Yn(t.parameters,e[i].parameters))}function Dr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function cT(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Be&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Be&&(t=t.concat(e(r,i)))}),t}var ia=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>new Gs,providedIn:"root"})}return n})(),Gs=class{parse(e){let t=new Bh(e);return new vi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${zo(e.root,!0)}`,i=fT(e.queryParams),r=typeof e.fragment=="string"?`#${uT(e.fragment)}`:"";return`${t}${i}${r}`}},lT=new Gs;function ul(n){return n.segments.map(e=>e0(e)).join("/")}function zo(n,e){if(!n.hasChildren())return ul(n);if(e){let t=n.children[Be]?zo(n.children[Be],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Be&&i.push(`${r}:${zo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=cT(n,(i,r)=>r===Be?[zo(n.children[Be],!1)]:[`${r}:${zo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Be]!=null?`${ul(n)}/${t[0]}`:`${ul(n)}/(${t.join("//")})`}}function Q_(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function al(n){return Q_(n).replace(/%3B/gi,";")}function uT(n){return encodeURI(n)}function kh(n){return Q_(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function dl(n){return decodeURIComponent(n)}function k_(n){return dl(n.replace(/\+/g,"%20"))}function e0(n){return`${kh(n.path)}${dT(n.parameters)}`}function dT(n){return Object.entries(n).map(([e,t])=>`;${kh(e)}=${kh(t)}`).join("")}function fT(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${al(t)}=${al(r)}`).join("&"):`${al(t)}=${al(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var hT=/^[^\/()?;#]+/;function Nh(n){let e=n.match(hT);return e?e[0]:""}var pT=/^[^\/()?;=#]+/;function mT(n){let e=n.match(pT);return e?e[0]:""}var gT=/^[^=?&#]+/;function vT(n){let e=n.match(gT);return e?e[0]:""}var yT=/^[^&#]+/;function _T(n){let e=n.match(yT);return e?e[0]:""}var Bh=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new at([],{}):new at([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Be]=new at(e,t)),i}parseSegment(){let e=Nh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ce(4009,!1);return this.capture(e),new Tr(dl(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=mT(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Nh(this.remaining);r&&(i=r,this.capture(i))}e[dl(t)]=dl(i)}parseQueryParam(e){let t=vT(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=_T(this.remaining);o&&(i=o,this.capture(i))}let r=k_(t),s=k_(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Nh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ce(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Be);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Be]:new at([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ce(4011,!1)}};function t0(n){return n.segments.length>0?new at([],{[Be]:n}):n}function n0(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=n0(r);if(i===Be&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new at(n.segments,e);return xT(t)}function xT(n){if(n.numberOfChildren===1&&n.children[Be]){let e=n.children[Be];return new at(n.segments.concat(e.segments),e.children)}return n}function qo(n){return n instanceof vi}function MT(n,e,t=null,i=null){let r=i0(n);return r0(r,e,t,i)}function i0(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new at(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=t0(i);return e??r}function r0(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Ph(r,r,r,t,i);let s=ST(e);if(s.toRoot())return Ph(r,r,new at([],{}),t,i);let o=ET(s,r,n),a=o.processChildren?Wo(o.segmentGroup,o.index,s.commands):o0(o.segmentGroup,o.index,s.commands);return Ph(r,o.segmentGroup,a,t,i)}function fl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Xo(n){return typeof n=="object"&&n!=null&&n.outlets}function Ph(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=s0(n,e,t);let a=t0(n0(o));return new vi(a,s,r)}function s0(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=s0(s,e,t)}),new at(n.segments,i)}var hl=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&fl(i[0]))throw new Ce(4003,!1);let r=i.find(Xo);if(r&&r!==X_(i))throw new Ce(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ST(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new hl(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new hl(t,e,i)}var Bs=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function ET(n,e,t){if(n.isAbsolute)return new Bs(e,!0,0);if(!t)return new Bs(e,!1,NaN);if(t.parent===null)return new Bs(t,!0,0);let i=fl(n.commands[0])?0:1,r=t.segments.length-1+i;return bT(t,r,n.numberOfDoubleDots)}function bT(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Ce(4005,!1);r=i.segments.length}return new Bs(i,!1,r-s)}function wT(n){return Xo(n[0])?n[0].outlets:{[Be]:n}}function o0(n,e,t){if(n??=new at([],{}),n.segments.length===0&&n.hasChildren())return Wo(n,e,t);let i=CT(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new at(n.segments.slice(0,i.pathIndex),{});return s.children[Be]=new at(n.segments.slice(i.pathIndex),n.children),Wo(s,0,r)}else return i.match&&r.length===0?new at(n.segments,{}):i.match&&!n.hasChildren()?Vh(n,e,t):i.match?Wo(n,0,r):Vh(n,e,t)}function Wo(n,e,t){if(t.length===0)return new at(n.segments,{});{let i=wT(t),r={};if(Object.keys(i).some(s=>s!==Be)&&n.children[Be]&&n.numberOfChildren===1&&n.children[Be].segments.length===0){let s=Wo(n.children[Be],e,t);return new at(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=o0(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new at(n.segments,r)}}function CT(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Xo(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!V_(c,l,o))return s;i+=2}else{if(!V_(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Vh(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Xo(s)){let c=TT(s.outlets);return new at(i,c)}if(r===0&&fl(t[0])){let c=n.segments[e];i.push(new Tr(c.path,B_(t[0]))),r++;continue}let o=Xo(s)?s.outlets[Be]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&fl(a)?(i.push(new Tr(o,B_(a))),r+=2):(i.push(new Tr(o,{})),r++)}return new at(i,{})}function TT(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Vh(new at([],{}),0,i))}),e}function B_(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function V_(n,e,t){return n==t.path&&Yn(e,t.parameters)}var jo="imperative",Ut=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Ut||{}),Cn=class{id;url;constructor(e,t){this.id=e,this.url=t}},Ws=class extends Cn{type=Ut.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},yi=class extends Cn{urlAfterRedirects;type=Ut.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},hn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(hn||{}),pl=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(pl||{}),gi=class extends Cn{reason;code;type=Ut.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Gi=class extends Cn{reason;code;type=Ut.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},Yo=class extends Cn{error;target;type=Ut.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ml=class extends Cn{urlAfterRedirects;state;type=Ut.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},zh=class extends Cn{urlAfterRedirects;state;type=Ut.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hh=class extends Cn{urlAfterRedirects;state;shouldActivate;type=Ut.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Gh=class extends Cn{urlAfterRedirects;state;type=Ut.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wh=class extends Cn{urlAfterRedirects;state;type=Ut.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jh=class{route;type=Ut.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},$h=class{route;type=Ut.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},qh=class{snapshot;type=Ut.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xh=class{snapshot;type=Ut.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Yh=class{snapshot;type=Ut.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zh=class{snapshot;type=Ut.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gl=class{routerEvent;position;anchor;type=Ut.Scroll;constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},Zo=class{},js=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function DT(n,e){return n.providers&&!n._injector&&(n._injector=Xc(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Un(n){return n.outlet||Be}function AT(n,e){let t=n.filter(i=>Un(i)===e);return t.push(...n.filter(i=>Un(i)!==e)),t}function ra(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Jh=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return ra(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new sa(this.rootInjector)}},sa=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new Jh(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(Oe(dn))};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vl=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Kh(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Kh(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Qh(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Qh(e,this._root).map(t=>t.value)}};function Kh(n,e){if(n===e.value)return e;for(let t of e.children){let i=Kh(n,t);if(i)return i}return null}function Qh(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Qh(n,t);if(i.length)return i.unshift(e),i}return[]}var fn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function ks(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var yl=class extends vl{snapshot;constructor(e,t){super(e),this.snapshot=t,cp(this,e)}toString(){return this.snapshot.toString()}};function a0(n){let e=IT(n),t=new zt([new Tr("",{})]),i=new zt({}),r=new zt({}),s=new zt({}),o=new zt(""),a=new Ar(t,i,s,o,r,Be,n,e.root);return a.snapshot=e.root,new yl(new fn(a,[]),e)}function IT(n){let e={},t={},i={},r="",s=new Vs([],e,i,r,t,Be,n,null,{});return new xl("",new fn(s,[]))}var Ar=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe($e(l=>l[na]))??De(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe($e(e=>Hs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe($e(e=>Hs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function _l(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:he(he({},e.params),n.params),data:he(he({},e.data),n.data),resolve:he(he(he(he({},n.data),e.data),r?.data),n._resolvedData)}:i={params:he({},n.params),data:he({},n.data),resolve:he(he({},n.data),n._resolvedData??{})},r&&l0(r)&&(i.resolve[na]=r.title),i}var Vs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[na]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Hs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Hs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},xl=class extends vl{url;constructor(e,t){super(t),this.url=e,cp(this,t)}toString(){return c0(this._root)}};function cp(n,e){e.value._routerState=n,e.children.forEach(t=>cp(n,t))}function c0(n){let e=n.children.length>0?` { ${n.children.map(c0).join(", ")} } `:"";return`${n.value}${e}`}function Lh(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Yn(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Yn(e.params,t.params)||n.paramsSubject.next(t.params),iT(e.url,t.url)||n.urlSubject.next(t.url),Yn(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function ep(n,e){let t=Yn(n.params,e.params)&&aT(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||ep(n.parent,e.parent))}function l0(n){return typeof n.title=="string"||n.title===null}var RT=new Ne(""),lp=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Be;activateEvents=new an;deactivateEvents=new an;attachEvents=new an;detachEvents=new an;routerOutletData=hy(void 0);parentContexts=ee(sa);location=ee(Ls);changeDetector=ee(Uo);inputBinder=ee(bl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ce(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ce(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ce(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Ce(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new tp(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=ph({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[kf]})}return n})(),tp=class n{route;childContexts;parent;outletData;__ngOutletInjector(e){return new n(this.route,this.childContexts,e,this.outletData)}constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Ar?this.route:e===sa?this.childContexts:e===RT?this.outletData:this.parent.get(e,t)}},bl=new Ne(""),z_=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:i}=t,r=_o([i.queryParams,i.params,i.data]).pipe(Sn(([s,o,a],c)=>(a=he(he(he({},s),o),a),c===0?De(a):Promise.resolve(a)))).subscribe(s=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(t);return}let o=p_(i.component);if(!o){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of o.inputs)t.activatedComponentRef.setInput(a,s[a])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})();function NT(n,e,t){let i=Jo(n,e._root,t?t._root:void 0);return new yl(i,e)}function Jo(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=PT(n,e,t);return new fn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Jo(n,a)),o}}let i=LT(e.value),r=e.children.map(s=>Jo(n,s));return new fn(i,r)}}function PT(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Jo(n,i,r);return Jo(n,i)})}function LT(n){return new Ar(new zt(n.url),new zt(n.params),new zt(n.queryParams),new zt(n.fragment),new zt(n.data),n.outlet,n.component,n)}var Ko=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},u0="ngNavigationCancelingError";function Ml(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=qo(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=d0(!1,hn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function d0(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[u0]=!0,t.cancellationCode=e,t}function OT(n){return f0(n)&&qo(n.url)}function f0(n){return!!n&&n[u0]}var FT=(n,e,t,i)=>$e(r=>(new np(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),np=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Lh(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=ks(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ks(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ks(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=ks(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Zh(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Xh(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Lh(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Lh(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Sl=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},zs=class{component;route;constructor(e,t){this.component=e,this.route=t}};function UT(n,e,t){let i=n._root,r=e?e._root:null;return Ho(i,r,t,[i.value])}function kT(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function qs(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!uv(n)?n:e.get(n):i}function Ho(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=ks(e);return n.children.forEach(o=>{BT(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>$o(a,t.getContext(o),r)),r}function BT(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=VT(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Sl(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ho(n,e,a?a.children:null,i,r):Ho(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new zs(a.outlet.component,o))}else o&&$o(e,a,r),r.canActivateChecks.push(new Sl(i)),s.component?Ho(n,null,a?a.children:null,i,r):Ho(n,null,t,i,r);return r}function VT(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Dr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Dr(n.url,e.url)||!Yn(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ep(n,e)||!Yn(n.queryParams,e.queryParams);case"paramsChange":default:return!ep(n,e)}}function $o(n,e,t){let i=ks(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?$o(o,e.children.getContext(s),t):$o(o,null,t):$o(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new zs(e.outlet.component,r)):t.canDeactivateChecks.push(new zs(null,r)):t.canDeactivateChecks.push(new zs(null,r))}function oa(n){return typeof n=="function"}function zT(n){return typeof n=="boolean"}function HT(n){return n&&oa(n.canLoad)}function GT(n){return n&&oa(n.canActivate)}function WT(n){return n&&oa(n.canActivateChild)}function jT(n){return n&&oa(n.canDeactivate)}function $T(n){return n&&oa(n.canMatch)}function h0(n){return n instanceof oi||n?.name==="EmptyError"}var cl=Symbol("INITIAL_VALUE");function $s(){return Sn(n=>_o(n.map(e=>e.pipe(ai(1),Ad(cl)))).pipe($e(e=>{for(let t of e)if(t!==!0){if(t===cl)return cl;if(t===!1||qT(t))return t}return!0}),Mn(e=>e!==cl),ai(1)))}function qT(n){return qo(n)||n instanceof Ko}function XT(n,e){return It(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?De(yt(he({},t),{guardsResult:!0})):YT(o,i,r,n).pipe(It(a=>a&&zT(a)?ZT(i,s,n,e):De(a)),$e(a=>yt(he({},t),{guardsResult:a})))})}function YT(n,e,t,i){return Ct(n).pipe(It(r=>tD(r.component,r.route,t,e,i)),ci(r=>r!==!0,!0))}function ZT(n,e,t,i){return Ct(e).pipe(pr(r=>hs(KT(r.route.parent,i),JT(r.route,i),eD(n,r.path,t),QT(n,r.route,t))),ci(r=>r!==!0,!0))}function JT(n,e){return n!==null&&e&&e(new Yh(n)),De(!0)}function KT(n,e){return n!==null&&e&&e(new qh(n)),De(!0)}function QT(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return De(!0);let r=i.map(s=>lc(()=>{let o=ra(e)??t,a=qs(s,o),c=GT(a)?a.canActivate(e,n):wn(o,()=>a(e,n));return ji(c).pipe(ci())}));return De(r).pipe($s())}function eD(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>kT(o)).filter(o=>o!==null).map(o=>lc(()=>{let a=o.guards.map(c=>{let l=ra(o.node)??t,u=qs(c,l),d=WT(u)?u.canActivateChild(i,n):wn(l,()=>u(i,n));return ji(d).pipe(ci())});return De(a).pipe($s())}));return De(s).pipe($s())}function tD(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return De(!0);let o=s.map(a=>{let c=ra(e)??r,l=qs(a,c),u=jT(l)?l.canDeactivate(n,e,t,i):wn(c,()=>l(n,e,t,i));return ji(u).pipe(ci())});return De(o).pipe($s())}function nD(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return De(!0);let s=r.map(o=>{let a=qs(o,n),c=HT(a)?a.canLoad(e,t):wn(n,()=>a(e,t));return ji(c)});return De(s).pipe($s(),p0(i))}function p0(n){return Md(Ht(e=>{if(typeof e!="boolean")throw Ml(n,e)}),$e(e=>e===!0))}function iD(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return De(!0);let s=r.map(o=>{let a=qs(o,n),c=$T(a)?a.canMatch(e,t):wn(n,()=>a(e,t));return ji(c)});return De(s).pipe($s(),p0(i))}var Qo=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},ea=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Us(n){return ds(new Qo(n))}function rD(n){return ds(new Ce(4e3,!1))}function sD(n){return ds(d0(!1,hn.GuardRejected))}var ip=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return De(i);if(r.numberOfChildren>1||!r.children[Be])return rD(`${e.redirectTo}`);r=r.children[Be]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:p,data:g,title:_}=r,m=wn(s,()=>a({params:p,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:_}));if(m instanceof vi)throw new ea(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new ea(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new vi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new at(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ce(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},rp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function oD(n,e,t,i,r){let s=m0(n,e,t);return s.matched?(i=DT(e,i),iD(i,e,t,r).pipe($e(o=>o===!0?s:he({},rp)))):De(s)}function m0(n,e,t){if(e.path==="**")return aD(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?he({},rp):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||nT)(t,n,e);if(!r)return he({},rp);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?he(he({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function aD(n){return{matched:!0,parameters:n.length>0?X_(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function H_(n,e,t,i){return t.length>0&&uD(n,t,i)?{segmentGroup:new at(e,lD(i,new at(t,n.children))),slicedSegments:[]}:t.length===0&&dD(n,t,i)?{segmentGroup:new at(n.segments,cD(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new at(n.segments,n.children),slicedSegments:t}}function cD(n,e,t,i){let r={};for(let s of t)if(wl(n,e,s)&&!i[Un(s)]){let o=new at([],{});r[Un(s)]=o}return he(he({},i),r)}function lD(n,e){let t={};t[Be]=e;for(let i of n)if(i.path===""&&Un(i)!==Be){let r=new at([],{});t[Un(i)]=r}return t}function uD(n,e,t){return t.some(i=>wl(n,e,i)&&Un(i)!==Be)}function dD(n,e,t){return t.some(i=>wl(n,e,i))}function wl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function fD(n,e,t){return e.length===0&&!n.children[t]}var sp=class{};function hD(n,e,t,i,r,s,o="emptyOnly"){return new op(n,e,t,i,r,o,s).recognize()}var pD=31,op=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new ip(this.urlSerializer,this.urlTree)}noMatchError(e){return new Ce(4002,`'${e.segmentGroup}'`)}recognize(){let e=H_(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe($e(({children:t,rootSnapshot:i})=>{let r=new fn(i,t),s=new xl("",r),o=MT(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Vs([],Object.freeze({}),Object.freeze(he({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Be,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Be,t).pipe($e(i=>({children:i,rootSnapshot:t})),Ni(i=>{if(i instanceof ea)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Qo?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe($e(o=>o instanceof fn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Ct(s).pipe(pr(o=>{let a=i.children[o],c=AT(t,o);return this.processSegmentGroup(e,c,a,o,r)}),Dd((o,a)=>(o.push(...a),o)),Pi(null),Td(),It(o=>{if(o===null)return Us(i);let a=g0(o);return mD(a),De(a)}))}processSegment(e,t,i,r,s,o,a){return Ct(t).pipe(pr(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(Ni(l=>{if(l instanceof Qo)return De(null);throw l}))),ci(c=>!!c),Ni(c=>{if(h0(c))return fD(i,r,s)?De(new sp):Us(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return Un(i)!==o&&(o===Be||!wl(r,s,i))?Us(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):Us(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=m0(t,r,s);if(!c)return Us(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>pD&&(this.allowRedirects=!1));let p=new Vs(s,l,Object.freeze(he({},this.urlTree.queryParams)),this.urlTree.fragment,G_(r),Un(r),r.component??r._loadedComponent??null,r,W_(r)),g=_l(p,a,this.paramsInheritanceStrategy);p.params=Object.freeze(g.params),p.data=Object.freeze(g.data);let _=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,p,e);return this.applyRedirects.lineralizeSegments(r,_).pipe(It(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=oD(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Sn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Sn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:p}=c,g=new Vs(f,d,Object.freeze(he({},this.urlTree.queryParams)),this.urlTree.fragment,G_(i),Un(i),i.component??i._loadedComponent??null,i,W_(i)),_=_l(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(_.params),g.data=Object.freeze(_.data);let{segmentGroup:m,slicedSegments:h}=H_(t,f,p,l);if(h.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe($e(b=>new fn(g,b)));if(l.length===0&&h.length===0)return De(new fn(g,[]));let w=Un(i)===s;return this.processSegment(u,l,m,h,w?Be:s,!0,g).pipe($e(b=>new fn(g,b instanceof fn?[b]:[])))}))):Us(t)))}getChildConfig(e,t,i){return t.children?De({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?De({routes:t._loadedRoutes,injector:t._loadedInjector}):nD(e,t,i,this.urlSerializer).pipe(It(r=>r?this.configLoader.loadChildren(e,t).pipe(Ht(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):sD(t))):De({routes:[],injector:e})}};function mD(n){n.sort((e,t)=>e.value.outlet===Be?-1:t.value.outlet===Be?1:e.value.outlet.localeCompare(t.value.outlet))}function gD(n){let e=n.value.routeConfig;return e&&e.path===""}function g0(n){let e=[],t=new Set;for(let i of n){if(!gD(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=g0(i.children);e.push(new fn(i.value,r))}return e.filter(i=>!t.has(i))}function G_(n){return n.data||{}}function W_(n){return n.resolve||{}}function vD(n,e,t,i,r,s){return It(o=>hD(n,e,t,i,o.extractedUrl,r,s).pipe($e(({state:a,tree:c})=>yt(he({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function yD(n,e){return It(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return De(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of v0(c))o.add(l);let a=0;return Ct(o).pipe(pr(c=>s.has(c)?_D(c,i,n,e):(c.data=_l(c,c.parent,n).resolve,De(void 0))),Ht(()=>a++),ps(1),It(c=>a===o.size?De(t):on))})}function v0(n){let e=n.children.map(t=>v0(t)).flat();return[n,...e]}function _D(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!l0(r)&&(s[na]=r.title),xD(s,n,e,i).pipe($e(o=>(n._resolvedData=o,n.data=_l(n,n.parent,t).resolve,null)))}function xD(n,e,t,i){let r=Uh(n);if(r.length===0)return De({});let s={};return Ct(r).pipe(It(o=>MD(n[o],e,t,i).pipe(ci(),Ht(a=>{if(a instanceof Ko)throw Ml(new Gs,a);s[o]=a}))),ps(1),Cd(s),Ni(o=>h0(o)?on:ds(o)))}function MD(n,e,t,i){let r=ra(e)??i,s=qs(n,r),o=s.resolve?s.resolve(e,t):wn(r,()=>s(e,t));return ji(o)}function Oh(n){return Sn(e=>{let t=n(e);return t?Ct(t).pipe($e(()=>e)):De(e)})}var y0=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Be);return i}getResolvedTitleForRoute(t){return t.data[na]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>ee(SD),providedIn:"root"})}return n})(),SD=(()=>{class n extends y0{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Oe(F_))};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),aa=new Ne("",{providedIn:"root",factory:()=>({})}),ED=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Yc({type:n,selectors:[["ng-component"]],decls:1,vars:0,template:function(i,r){i&1&&Fo(0,"router-outlet")},dependencies:[lp],encapsulation:2})}return n})();function up(n){let e=n.children&&n.children.map(up),t=e?yt(he({},n),{children:e}):he({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Be&&(t.component=ED),t}var ta=new Ne(""),dp=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=ee(el);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return De(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=ji(t.loadComponent()).pipe($e(_0),Ht(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),xo(()=>{this.componentLoaders.delete(t)})),r=new us(i,()=>new Vt).pipe(ls());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return De({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=bD(i,this.compiler,t,this.onLoadEndListener).pipe(xo(()=>{this.childrenLoaders.delete(i)})),o=new us(s,()=>new Vt).pipe(ls());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function bD(n,e,t,i){return ji(n.loadChildren()).pipe($e(_0),It(r=>r instanceof Io||Array.isArray(r)?De(r):Ct(e.compileModuleAsync(r))),$e(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(ta,[],{optional:!0,self:!0}).flat()),{routes:o.map(up),injector:s}}))}function wD(n){return n&&typeof n=="object"&&"default"in n}function _0(n){return wD(n)?n.default:n}var fp=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>ee(CD),providedIn:"root"})}return n})(),CD=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),x0=new Ne(""),M0=new Ne("");function TD(n,e,t){let i=n.get(M0),r=n.get(en);return n.get(Tt).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let s,o=new Promise(l=>{s=l}),a=r.startViewTransition(()=>(s(),DD(n))),{onViewTransitionCreated:c}=i;return c&&wn(n,()=>c({transition:a,from:e,to:t})),o})}function DD(n){return new Promise(e=>{ih({read:()=>setTimeout(e)},{injector:n})})}var S0=new Ne(""),hp=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Vt;transitionAbortSubject=new Vt;configLoader=ee(dp);environmentInjector=ee(dn);urlSerializer=ee(ia);rootContexts=ee(sa);location=ee(Fs);inputBindingEnabled=ee(bl,{optional:!0})!==null;titleStrategy=ee(y0);options=ee(aa,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=ee(fp);createViewTransition=ee(x0,{optional:!0});navigationErrorHandler=ee(S0,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>De(void 0);rootComponentType=null;constructor(){let t=r=>this.events.next(new jh(r)),i=r=>this.events.next(new $h(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(yt(he(he({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new zt({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:jo,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Mn(s=>s.id!==0),$e(s=>yt(he({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Sn(s=>{let o=!1,a=!1;return De(s).pipe(Sn(c=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",hn.SupersededByNewNavigation),on;this.currentTransition=s,this.currentNavigation={id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:this.lastSuccessfulNavigation?yt(he({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload"){let d="";return this.events.next(new Gi(c.id,this.urlSerializer.serialize(c.rawUrl),d,pl.IgnoredSameUrlNavigation)),c.resolve(!1),on}if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return De(c).pipe(Sn(d=>{let f=this.transitions?.getValue();return this.events.next(new Ws(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions?.getValue()?on:Promise.resolve(d)}),vD(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Ht(d=>{s.targetSnapshot=d.targetSnapshot,s.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=yt(he({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let f=new ml(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:d,extractedUrl:f,source:p,restoredState:g,extras:_}=c,m=new Ws(d,this.urlSerializer.serialize(f),p,g);this.events.next(m);let h=a0(this.rootComponentType).snapshot;return this.currentTransition=s=yt(he({},c),{targetSnapshot:h,urlAfterRedirects:f,extras:yt(he({},_),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,De(s)}else{let d="";return this.events.next(new Gi(c.id,this.urlSerializer.serialize(c.extractedUrl),d,pl.IgnoredByUrlHandlingStrategy)),c.resolve(!1),on}}),Ht(c=>{let l=new zh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),$e(c=>(this.currentTransition=s=yt(he({},c),{guards:UT(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),s)),XT(this.environmentInjector,c=>this.events.next(c)),Ht(c=>{if(s.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw Ml(this.urlSerializer,c.guardsResult);let l=new Hh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);this.events.next(l)}),Mn(c=>c.guardsResult?!0:(this.cancelNavigationTransition(c,"",hn.GuardRejected),!1)),Oh(c=>{if(c.guards.canActivateChecks.length)return De(c).pipe(Ht(l=>{let u=new Gh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Sn(l=>{let u=!1;return De(l).pipe(yD(this.paramsInheritanceStrategy,this.environmentInjector),Ht({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(l,"",hn.NoDataFromResolver)}}))}),Ht(l=>{let u=new Wh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}))}),Oh(c=>{let l=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(Ht(f=>{u.component=f}),$e(()=>{})));for(let f of u.children)d.push(...l(f));return d};return _o(l(c.targetSnapshot.root)).pipe(Pi(null),ai(1))}),Oh(()=>this.afterPreactivation()),Sn(()=>{let{currentSnapshot:c,targetSnapshot:l}=s,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?Ct(u).pipe($e(()=>s)):De(s)}),$e(c=>{let l=NT(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=s=yt(he({},c),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,s}),Ht(()=>{this.events.next(new Zo)}),FT(this.rootContexts,t.routeReuseStrategy,c=>this.events.next(c),this.inputBindingEnabled),ai(1),Ht({next:c=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new yi(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)},complete:()=>{o=!0}}),Id(this.transitionAbortSubject.pipe(Ht(c=>{throw c}))),xo(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",hn.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ni(c=>{if(a=!0,f0(c))this.events.next(new gi(s.id,this.urlSerializer.serialize(s.extractedUrl),c.message,c.cancellationCode)),OT(c)?this.events.next(new js(c.url,c.navigationBehaviorOptions)):s.resolve(!1);else{let l=new Yo(s.id,this.urlSerializer.serialize(s.extractedUrl),c,s.targetSnapshot??void 0);try{let u=wn(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(u instanceof Ko){let{message:d,cancellationCode:f}=Ml(this.urlSerializer,u);this.events.next(new gi(s.id,this.urlSerializer.serialize(s.extractedUrl),d,f)),this.events.next(new js(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(u){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(u)}}return on}))}))}cancelNavigationTransition(t,i,r){let s=new gi(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function AD(n){return n!==jo}var ID=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>ee(RD),providedIn:"root"})}return n})(),ap=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},RD=(()=>{class n extends ap{static \u0275fac=(()=>{let t;return function(r){return(t||(t=qf(n)))(r||n)}})();static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),E0=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:()=>ee(ND),providedIn:"root"})}return n})(),ND=(()=>{class n extends E0{location=ee(Fs);urlSerializer=ee(ia);options=ee(aa,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=ee(fp);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new vi;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=a0(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof Ws)this.stateMemento=this.createStateMemento();else if(t instanceof Gi)this.rawUrlTree=i.initialUrl;else if(t instanceof ml){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof Zo?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof gi&&(t.code===hn.GuardRejected||t.code===hn.NoDataFromResolver)?this.restoreHistory(i):t instanceof Yo?this.restoreHistory(i,!0):t instanceof yi&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof vi?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=he(he({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=he(he({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=qf(n)))(r||n)}})();static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Go=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Go||{});function b0(n,e){n.events.pipe(Mn(t=>t instanceof yi||t instanceof gi||t instanceof Yo||t instanceof Gi),$e(t=>t instanceof yi||t instanceof Gi?Go.COMPLETE:(t instanceof gi?t.code===hn.Redirect||t.code===hn.SupersededByNewNavigation:!1)?Go.REDIRECTING:Go.FAILED),Mn(t=>t!==Go.REDIRECTING),ai(1)).subscribe(()=>{e()})}var PD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},LD={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Wi=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=ee(Jc);stateManager=ee(E0);options=ee(aa,{optional:!0})||{};pendingTasks=ee(Ns);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=ee(hp);urlSerializer=ee(ia);location=ee(Fs);urlHandlingStrategy=ee(fp);_events=new Vt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=ee(ID);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=ee(ta,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!ee(bl,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new At;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof gi&&i.code!==hn.Redirect&&i.code!==hn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof yi)this.navigated=!0;else if(i instanceof js){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=he({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||AD(r.source)},o);this.scheduleNavigation(a,jo,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}FD(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),jo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=he({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(up),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=he(he({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=i0(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return r0(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=qo(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,jo,null,i)}navigate(t,i={skipLocationChange:!1}){return OD(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=he({},PD):i===!1?r=he({},LD):r=i,qo(t))return U_(this.currentUrlTree,t,r);let s=this.parseUrl(t);return U_(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return b0(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function OD(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ce(4008,!1)}function FD(n){return!(n instanceof Zo)&&!(n instanceof js)}var El=class{};var UD=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(t,i,r,s,o){this.router=t,this.injector=r,this.preloadingStrategy=s,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Mn(t=>t instanceof yi),pr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,i){let r=[];for(let s of i){s.providers&&!s._injector&&(s._injector=Xc(s.providers,t,`Route: ${s.path}`));let o=s._injector??t,a=s._loadedInjector??o;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&r.push(this.preloadConfig(o,s)),(s.children||s._loadedRoutes)&&r.push(this.processRoutes(a,s.children??s._loadedRoutes))}return Ct(r).pipe(fs())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{let r;i.loadChildren&&i.canLoad===void 0?r=this.loader.loadChildren(t,i):r=De(null);let s=r.pipe(It(o=>o===null?De(void 0):(i._loadedRoutes=o.routes,i._loadedInjector=o.injector,this.processRoutes(o.injector??t,o.routes))));if(i.loadComponent&&!i._loadedComponent){let o=this.loader.loadComponent(i);return Ct([s,o]).pipe(fs())}else return s})}static \u0275fac=function(i){return new(i||n)(Oe(Wi),Oe(el),Oe(dn),Oe(El),Oe(dp))};static \u0275prov=we({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),w0=new Ne(""),kD=(()=>{class n{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,i,r,s,o={}){this.urlSerializer=t,this.transitions=i,this.viewportScroller=r,this.zone=s,this.options=o,o.scrollPositionRestoration||="disabled",o.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Ws?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof yi?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof Gi&&t.code===pl.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof gl&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,i){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new gl(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Oy()};static \u0275prov=we({token:n,factory:n.\u0275fac})}return n})();function C0(n,...e){return Lf([{provide:ta,multi:!0,useValue:n},[],{provide:Ar,useFactory:T0,deps:[Wi]},{provide:Qc,multi:!0,useFactory:D0},e.map(t=>t.\u0275providers)])}function T0(n){return n.routerState.root}function ca(n,e){return{\u0275kind:n,\u0275providers:e}}function D0(){let n=ee($n);return e=>{let t=n.get(wr);if(e!==t.components[0])return;let i=n.get(Wi),r=n.get(A0);n.get(pp)===1&&i.initialNavigation(),n.get(I0,null,He.Optional)?.setUpPreloading(),n.get(w0,null,He.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var A0=new Ne("",{factory:()=>new Vt}),pp=new Ne("",{providedIn:"root",factory:()=>1});function BD(){return ca(2,[{provide:pp,useValue:0},{provide:Kc,multi:!0,deps:[$n],useFactory:e=>{let t=e.get(M_,Promise.resolve());return()=>t.then(()=>new Promise(i=>{let r=e.get(Wi),s=e.get(A0);b0(r,()=>{i(!0)}),e.get(hp).afterPreactivation=()=>(i(!0),s.closed?De(void 0):s),r.initialNavigation()}))}}])}function VD(){return ca(3,[{provide:Kc,multi:!0,useFactory:()=>{let e=ee(Wi);return()=>{e.setUpLocationChangeListener()}}},{provide:pp,useValue:2}])}var I0=new Ne("");function zD(n){return ca(0,[{provide:I0,useExisting:UD},{provide:El,useExisting:n}])}function HD(){return ca(8,[z_,{provide:bl,useExisting:z_}])}function GD(n){let e=[{provide:x0,useValue:TD},{provide:M0,useValue:he({skipNextTransition:!!n?.skipInitialTransition},n)}];return ca(9,e)}var j_=new Ne("ROUTER_FORROOT_GUARD"),WD=[Fs,{provide:ia,useClass:Gs},Wi,sa,{provide:Ar,useFactory:T0,deps:[Wi]},dp,[]],R0=(()=>{class n{constructor(t){}static forRoot(t,i){return{ngModule:n,providers:[WD,[],{provide:ta,multi:!0,useValue:t},{provide:j_,useFactory:XD,deps:[[Wi,new Nf,new vv]]},i?.errorHandler?{provide:S0,useValue:i.errorHandler}:[],{provide:aa,useValue:i||{}},i?.useHash?$D():qD(),jD(),i?.preloadingStrategy?zD(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?YD(i):[],i?.bindToComponentInputs?HD().\u0275providers:[],i?.enableViewTransitions?GD().\u0275providers:[],ZD()]}}static forChild(t){return{ngModule:n,providers:[{provide:ta,multi:!0,useValue:t}]}}static \u0275fac=function(i){return new(i||n)(Oe(j_,8))};static \u0275mod=Zc({type:n});static \u0275inj=Uc({})}return n})();function jD(){return{provide:w0,useFactory:()=>{let n=ee(w_),e=ee(Tt),t=ee(aa),i=ee(hp),r=ee(ia);return t.scrollOffset&&n.setOffset(t.scrollOffset),new kD(r,i,n,e,t)}}}function $D(){return{provide:Cr,useClass:E_}}function qD(){return{provide:Cr,useClass:Sh}}function XD(n){return"guarded"}function YD(n){return[n.initialNavigation==="disabled"?VD().\u0275providers:[],n.initialNavigation==="enabledBlocking"?BD().\u0275providers:[]]}var $_=new Ne("");function ZD(){return[{provide:$_,useFactory:D0},{provide:Qc,multi:!0,useExisting:$_}]}var N0=[];var P0={providers:[C0(N0)]};var pu="171";var J0=0,Wp=1,K0=2;var jp=1,Q0=2,ei=3,wi=0,Zt=1,ti=2,Di=0,Fr=1,$p=2,qp=3,Xp=4,ex=5,er=100,tx=101,nx=102,ix=103,rx=104,sx=200,ox=201,ax=202,cx=203,jl=204,$l=205,lx=206,ux=207,dx=208,fx=209,hx=210,px=211,mx=212,gx=213,vx=214,mu=0,gu=1,vu=2,Ur=3,yu=4,_u=5,xu=6,Mu=7,Yp=0,yx=1,_x=2,Ai=0,xx=1,Mx=2,Sx=3,Ex=4,bx=5,wx=6,Cx=7;var Up=300,jr=301,$r=302,Su=303,Eu=304,Ia=306,ql=1e3,Qi=1001,Xl=1002,Dn=1003,Tx=1004;var Ra=1005;var zn=1006,bu=1007;var or=1008;var ni=1009,Zp=1010,Jp=1011,co=1012,wu=1013,ar=1014,ii=1015,lo=1016,Cu=1017,Tu=1018,qr=1020,Kp=35902,Qp=1021,em=1022,In=1023,tm=1024,nm=1025,Or=1026,kr=1027,im=1028,Du=1029,rm=1030,Au=1031;var Iu=1033,Na=33776,Pa=33777,La=33778,Oa=33779,Ru=35840,Nu=35841,Pu=35842,Lu=35843,Ou=36196,Fu=37492,Uu=37496,ku=37808,Bu=37809,Vu=37810,zu=37811,Hu=37812,Gu=37813,Wu=37814,ju=37815,$u=37816,qu=37817,Xu=37818,Yu=37819,Zu=37820,Ju=37821,Fa=36492,Ku=36494,Qu=36495,sm=36283,ed=36284,td=36285,nd=36286;var pa=2300,Yl=2301,Wl=2302,kp=2400,Bp=2401,Vp=2402;var Dx=3200,Ax=3201;var Ix=0,Rx=1,Ii="",gn="srgb",Br="srgb-linear",ma="linear",dt="srgb";var Lr=7680;var zp=519,Nx=512,Px=513,Lx=514,om=515,Ox=516,Fx=517,Ux=518,kx=519,Hp=35044;var am="300 es",Jn=2e3,ga=2001,Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mp=Math.PI/180,Zl=180/Math.PI;function Ua(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function KD(n,e){return(n%e+e)%e}function gp(n,e,t){return(1-t)*n+t*e}function la(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ht=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ue=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],w=r[1],b=r[4],E=r[7],P=r[2],D=r[5],C=r[8];return s[0]=o*_+a*w+c*P,s[3]=o*m+a*b+c*D,s[6]=o*h+a*E+c*C,s[1]=l*_+u*w+d*P,s[4]=l*m+u*b+d*D,s[7]=l*h+u*E+d*C,s[2]=f*_+p*w+g*P,s[5]=f*m+p*b+g*D,s[8]=f*h+p*E+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vp.makeScale(e,t)),this}rotate(e){return this.premultiply(vp.makeRotation(-e)),this}translate(e,t){return this.premultiply(vp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vp=new Ue;function cm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bx(){let n=va("canvas");return n.style.display="block",n}var L0={};function Xr(n){n in L0||(L0[n]=!0,console.warn(n))}function Vx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function zx(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hx(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var O0=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F0=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QD(){let n={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=oo(r.r),r.g=oo(r.g),r.b=oo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?ma:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Br]:{primaries:e,whitePoint:i,transfer:ma,toXYZ:O0,fromXYZ:F0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:O0,fromXYZ:F0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),n}var nt=QD();function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function oo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xs,Jl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=va("canvas")),Xs.width=e.width,Xs.height=e.height;let i=Xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=va("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bi(t[i]/255)*255):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},eA=0,ya=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eA++}),this.uuid=Ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yp(r[o].image)):s.push(yp(r[o]))}else s=yp(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function yp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tA=0,cr=(()=>{class n extends Ci{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Qi,s=Qi,o=zn,a=or,c=In,l=ni,u=n.DEFAULT_ANISOTROPY,d=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tA++}),this.uuid=Ua(),this.name="",this.source=new ya(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Up)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ql:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case Xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ql:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case Xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Up,n.DEFAULT_ANISOTROPY=1,n})(),bt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,E=(p+1)/2,P=(h+1)/2,D=(u+f)/4,C=(d+_)/4,L=(g+m)/4;return b>E&&b>P?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=D/i,s=C/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=D/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=L/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-_)/w,this.z=(f-u)/w,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kl=class extends Ci{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new cr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends Kl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_a=class extends cr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ql=class extends cr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==p||u!==g){let m=1-a,h=c*f+l*p+u*g+d*_,w=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){let P=Math.sqrt(b),D=Math.atan2(P,h*w);m=Math.sin(m*D)/P,a=Math.sin(a*D)/P}let E=a*w;if(c=c*m+f*E,l=l*m+p*E,u=u*m+g*E,d=d*m+_*E,m===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=P,l*=P,u*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*p-l*f,e[t+1]=c*g+u*f+l*d-a*p,e[t+2]=l*g+u*p+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(U0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(U0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _p.copy(this).projectOnVector(e),this.sub(_p)}reflect(e){return this.sub(_p.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_p=new k,U0=new Ti,tr=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Tl.subVectors(this.max,ua),Ys.subVectors(e.a,ua),Zs.subVectors(e.b,ua),Js.subVectors(e.c,ua),$i.subVectors(Zs,Ys),qi.subVectors(Js,Zs),Ir.subVectors(Ys,Js);let t=[0,-$i.z,$i.y,0,-qi.z,qi.y,0,-Ir.z,Ir.y,$i.z,0,-$i.x,qi.z,0,-qi.x,Ir.z,0,-Ir.x,-$i.y,$i.x,0,-qi.y,qi.x,0,-Ir.y,Ir.x,0];return!xp(t,Ys,Zs,Js,Tl)||(t=[1,0,0,0,1,0,0,0,1],!xp(t,Ys,Zs,Js,Tl))?!1:(Dl.crossVectors($i,qi),t=[Dl.x,Dl.y,Dl.z],xp(t,Ys,Zs,Js,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_i=[new k,new k,new k,new k,new k,new k,new k,new k],kn=new k,Cl=new tr,Ys=new k,Zs=new k,Js=new k,$i=new k,qi=new k,Ir=new k,ua=new k,Tl=new k,Dl=new k,Rr=new k;function xp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Rr.fromArray(n,s);let a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),c=e.dot(Rr),l=t.dot(Rr),u=i.dot(Rr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var nA=new tr,da=new k,Mp=new k,ao=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):nA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);let t=da.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Mp)),this.expandByPoint(da.copy(e.center).sub(Mp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new k,Sp=new k,Al=new k,Xi=new k,Ep=new k,Il=new k,bp=new k,eu=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sp.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Sp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Al),a=Xi.dot(this.direction),c=-Xi.dot(Al),l=Xi.lengthSq(),u=Math.abs(1-o*o),d,f,p,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Sp).addScaledVector(Al,f),p}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,r,s){Ep.subVectors(t,e),Il.subVectors(i,e),bp.crossVectors(Ep,Il);let o=this.direction.dot(bp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);let c=a*this.direction.dot(Il.crossVectors(Xi,Il));if(c<0)return null;let l=a*this.direction.dot(Ep.cross(Xi));if(l<0||c+l>o)return null;let u=-a*Xi.dot(bp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,_,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,_,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ks.setFromMatrixColumn(e,0).length(),s=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*d,g=l*u,_=l*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*d,g=l*u,_=l*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iA,e,rA)}lookAt(e,t,i){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Yi.crossVectors(i,pn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Yi.crossVectors(i,pn)),Yi.normalize(),Rl.crossVectors(pn,Yi),r[0]=Yi.x,r[4]=Rl.x,r[8]=pn.x,r[1]=Yi.y,r[5]=Rl.y,r[9]=pn.y,r[2]=Yi.z,r[6]=Rl.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],w=i[3],b=i[7],E=i[11],P=i[15],D=r[0],C=r[4],L=r[8],M=r[12],x=r[1],A=r[5],G=r[9],B=r[13],X=r[2],Y=r[6],j=r[10],J=r[14],z=r[3],se=r[7],de=r[11],_e=r[15];return s[0]=o*D+a*x+c*X+l*z,s[4]=o*C+a*A+c*Y+l*se,s[8]=o*L+a*G+c*j+l*de,s[12]=o*M+a*B+c*J+l*_e,s[1]=u*D+d*x+f*X+p*z,s[5]=u*C+d*A+f*Y+p*se,s[9]=u*L+d*G+f*j+p*de,s[13]=u*M+d*B+f*J+p*_e,s[2]=g*D+_*x+m*X+h*z,s[6]=g*C+_*A+m*Y+h*se,s[10]=g*L+_*G+m*j+h*de,s[14]=g*M+_*B+m*J+h*_e,s[3]=w*D+b*x+E*X+P*z,s[7]=w*C+b*A+E*Y+P*se,s[11]=w*L+b*G+E*j+P*de,s[15]=w*M+b*B+E*J+P*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*p-i*c*p)+_*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+m*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+h*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],w=d*m*l-_*f*l+_*c*p-a*m*p-d*c*h+a*f*h,b=g*f*l-u*m*l-g*c*p+o*m*p+u*c*h-o*f*h,E=u*_*l-g*d*l+g*a*p-o*_*p-u*a*h+o*d*h,P=g*d*c-u*_*c-g*a*f+o*_*f+u*a*m-o*d*m,D=t*w+i*b+r*E+s*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/D;return e[0]=w*C,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*C,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*h+i*c*h)*C,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*p-i*c*p)*C,e[4]=b*C,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*C,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*h-t*c*h)*C,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*p+t*c*p)*C,e[8]=E*C,e[9]=(g*d*s-u*_*s-g*i*p+t*_*p+u*i*h-t*d*h)*C,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*h+t*a*h)*C,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*p-t*a*p)*C,e[12]=P*C,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*m+t*d*m)*C,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,p=s*u,g=s*d,_=o*u,m=o*d,h=a*d,w=c*l,b=c*u,E=c*d,P=i.x,D=i.y,C=i.z;return r[0]=(1-(_+h))*P,r[1]=(p+E)*P,r[2]=(g-b)*P,r[3]=0,r[4]=(p-E)*D,r[5]=(1-(f+h))*D,r[6]=(m+w)*D,r[7]=0,r[8]=(g+b)*C,r[9]=(m-w)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ks.set(r[0],r[1],r[2]).length(),o=Ks.set(r[4],r[5],r[6]).length(),a=Ks.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);let l=1/s,u=1/o,d=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,t.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Jn){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),p,g;if(a===Jn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ga)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Jn){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,p=(i+r)*u,g,_;if(a===Jn)g=(o+s)*d,_=-2*d;else if(a===ga)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ks=new k,Bn=new Nt,iA=new k(0,0,0),rA=new k(1,1,1),Yi=new k,Rl=new k,pn=new k,k0=new Nt,B0=new Ti,Vr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],p=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return k0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(k0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return B0.setFromEuler(this),this.setFromQuaternion(B0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sA=0,V0=new k,Qs=new Ti,Mi=new Nt,Nl=new k,fa=new k,oA=new k,aA=new Ti,z0=new k(1,0,0),H0=new k(0,1,0),G0=new k(0,0,1),W0={type:"added"},cA={type:"removed"},eo={type:"childadded",child:null},wp={type:"childremoved",child:null},Yr=(()=>{class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sA++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,i=new Vr,r=new Ti,s=new k(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Ue}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Qs.setFromAxisAngle(t,i),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,i){return Qs.setFromAxisAngle(t,i),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(z0,t)}rotateY(t){return this.rotateOnAxis(H0,t)}rotateZ(t){return this.rotateOnAxis(G0,t)}translateOnAxis(t,i){return V0.copy(t).applyQuaternion(this.quaternion),this.position.add(V0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(z0,t)}translateY(t){return this.translateOnAxis(H0,t)}translateZ(t){return this.translateOnAxis(G0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Nl.copy(t):Nl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(fa,Nl,this.up):Mi.lookAt(Nl,fa,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(Mi),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(W0),eo.child=t,this.dispatchEvent(eo),eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(cA),wp.child=t,this.dispatchEvent(wp),wp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(W0),eo.child=t,this.dispatchEvent(eo),eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,t,oA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,aA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),_=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),_.length>0&&(r.nodes=_)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new k(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Vn=new k,Si=new k,Cp=new k,Ei=new k,to=new k,no=new k,j0=new k,Tp=new k,Dp=new k,Ap=new k,Ip=new bt,Rp=new bt,Np=new bt,Ki=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vn.subVectors(e,t),r.cross(Vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vn.subVectors(r,t),Si.subVectors(i,t),Cp.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(Si),c=Vn.dot(Cp),l=Si.dot(Si),u=Si.dot(Cp),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ei.x),c.addScaledVector(o,Ei.y),c.addScaledVector(a,Ei.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ip.setScalar(0),Rp.setScalar(0),Np.setScalar(0),Ip.fromBufferAttribute(e,t),Rp.fromBufferAttribute(e,i),Np.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ip,s.x),o.addScaledVector(Rp,s.y),o.addScaledVector(Np,s.z),o}static isFrontFacing(e,t,i,r){return Vn.subVectors(i,t),Si.subVectors(e,t),Vn.cross(Si).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Vn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;to.subVectors(r,i),no.subVectors(s,i),Tp.subVectors(e,i);let c=to.dot(Tp),l=no.dot(Tp);if(c<=0&&l<=0)return t.copy(i);Dp.subVectors(e,r);let u=to.dot(Dp),d=no.dot(Dp);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(to,o);Ap.subVectors(e,s);let p=to.dot(Ap),g=no.dot(Ap);if(g>=0&&p<=g)return t.copy(s);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(no,a);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return j0.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(j0,a);let h=1/(m+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(to,o).addScaledVector(no,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function Pp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var rt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=KD(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Pp(o,s,e+1/3),this.g=Pp(o,s,e),this.b=Pp(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){let i=Gx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return nt.fromWorkingColorSpace($t.copy(this),e),Math.round(qe($t.r*255,0,255))*65536+Math.round(qe($t.g*255,0,255))*256+Math.round(qe($t.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace($t.copy(this),t);let i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=gn){nt.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,i=$t.g,r=$t.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(Pl);let i=gp(Zi.h,Pl.h,t),r=gp(Zi.s,Pl.s,t),s=gp(Zi.l,Pl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new rt;rt.NAMES=Gx;var lA=0,zr=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lA++}),this.uuid=Ua(),this.name="",this.type="Material",this.blending=Fr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=$l,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jl&&(i.blendSrc=this.blendSrc),this.blendDst!==$l&&(i.blendDst=this.blendDst),this.blendEquation!==er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Hr=class extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=Yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Rt=new k,Ll=new ht,vn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hp,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=la(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=la(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=la(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=la(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=la(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hp&&(e.usage=this.usage),e}};var Ma=class extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Sa=class extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Kn=class extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}},uA=0,Tn=new Nt,Lp=new Yr,io=new k,mn=new tr,ha=new tr,kt=new k,nr=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uA++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cm(e)?Sa:Ma)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return Lp.lookAt(e),Lp.updateMatrix(),this.applyMatrix4(Lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ao);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ha.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(mn.min,ha.min),mn.expandByPoint(kt),kt.addVectors(mn.max,ha.max),mn.expandByPoint(kt)):(mn.expandByPoint(ha.min),mn.expandByPoint(ha.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)kt.fromBufferAttribute(a,l),c&&(io.fromBufferAttribute(e,l),kt.add(io)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new k,c[L]=new k;let l=new k,u=new k,d=new k,f=new ht,p=new ht,g=new ht,_=new k,m=new k;function h(L,M,x){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,L),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),p.sub(f),g.sub(f);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(A),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),a[L].add(_),a[M].add(_),a[x].add(_),c[L].add(m),c[M].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,M=w.length;L<M;++L){let x=w[L],A=x.start,G=x.count;for(let B=A,X=A+G;B<X;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new k,E=new k,P=new k,D=new k;function C(L){P.fromBufferAttribute(r,L),D.copy(P);let M=a[L];b.copy(M),b.sub(P.multiplyScalar(P.dot(M))).normalize(),E.crossVectors(D,M);let A=E.dot(c[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,A)}for(let L=0,M=w.length;L<M;++L){let x=w[L],A=x.start,G=x.count;for(let B=A,X=A+G;B<X;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new k,s=new k,o=new k,a=new k,c=new k,l=new k,u=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let h=0;h<u;h++)f[g++]=l[p++]}return new vn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$0=new Nt,Nr=new eu,Ol=new ao,q0=new k,Fl=new k,Ul=new k,kl=new k,Op=new k,Bl=new k,X0=new k,Vl=new k,nn=class extends Yr{constructor(e=new nr,t=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Bl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Op.fromBufferAttribute(d,e),o?Bl.addScaledVector(Op,u):Bl.addScaledVector(Op.sub(t),u))}t.add(Bl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(s),Nr.copy(e.ray).recast(e.near),!(Ol.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Ol,q0)===null||Nr.origin.distanceToSquared(q0)>(e.far-e.near)**2))&&($0.copy(s).invert(),Nr.copy(e.ray).applyMatrix4($0),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Nr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,P=b;E<P;E+=3){let D=a.getX(E),C=a.getX(E+1),L=a.getX(E+2);r=zl(this,h,e,i,l,u,d,D,C,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let w=a.getX(m),b=a.getX(m+1),E=a.getX(m+2);r=zl(this,o,e,i,l,u,d,w,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,P=b;E<P;E+=3){let D=E,C=E+1,L=E+2;r=zl(this,h,e,i,l,u,d,D,C,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let w=m,b=m+1,E=m+2;r=zl(this,o,e,i,l,u,d,w,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function dA(n,e,t,i,r,s,o,a){let c;if(e.side===Zt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===wi,a),c===null)return null;Vl.copy(a),Vl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Vl);return l<t.near||l>t.far?null:{distance:l,point:Vl.clone(),object:n}}function zl(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Fl),n.getVertexPosition(c,Ul),n.getVertexPosition(l,kl);let u=dA(n,e,t,i,Fl,Ul,kl,X0);if(u){let d=new k;Ki.getBarycoord(X0,Fl,Ul,kl,d),r&&(u.uv=Ki.getInterpolatedAttribute(r,a,c,l,d,new ht)),s&&(u.uv1=Ki.getInterpolatedAttribute(s,a,c,l,d,new ht)),o&&(u.normal=Ki.getInterpolatedAttribute(o,a,c,l,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new k,materialIndex:0};Ki.getNormal(Fl,Ul,kl,f.normal),u.face=f,u.barycoord=d}return u}var ir=class n extends nr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Kn(l,3)),this.setAttribute("normal",new Kn(u,3)),this.setAttribute("uv",new Kn(d,2));function g(_,m,h,w,b,E,P,D,C,L,M){let x=E/C,A=P/L,G=E/2,B=P/2,X=D/2,Y=C+1,j=L+1,J=0,z=0,se=new k;for(let de=0;de<j;de++){let _e=de*A-B;for(let We=0;We<Y;We++){let pt=We*x-G;se[_]=pt*w,se[m]=_e*b,se[h]=X,l.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[h]=D>0?1:-1,u.push(se.x,se.y,se.z),d.push(We/C),d.push(1-de/L),J+=1}}for(let de=0;de<L;de++)for(let _e=0;_e<C;_e++){let We=f+_e+Y*de,pt=f+_e+Y*(de+1),W=f+(_e+1)+Y*(de+1),te=f+(_e+1)+Y*de;c.push(We,pt,te),c.push(pt,W,te),z+=6}a.addGroup(p,z,M),p+=z,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){let e={};for(let t=0;t<n.length;t++){let i=Zr(n[t]);for(let r in i)e[r]=i[r]}return e}function fA(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Wx={clone:Zr,merge:Xt},hA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hA,this.fragmentShader=pA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=fA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ea=class extends Yr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ji=new k,Y0=new ht,Z0=new ht,qt=class extends Ea{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(mp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,Y0,Z0),t.subVectors(Z0,Y0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mp*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ro=-90,so=1,tu=class extends Yr{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(ro,so,e,t);r.layers=this.layers,this.add(r);let s=new qt(ro,so,e,t);s.layers=this.layers,this.add(s);let o=new qt(ro,so,e,t);o.layers=this.layers,this.add(o);let a=new qt(ro,so,e,t);a.layers=this.layers,this.add(a);let c=new qt(ro,so,e,t);c.layers=this.layers,this.add(c);let l=new qt(ro,so,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ba=class extends cr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nu=class extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ba(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ir(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Di});s.uniforms.tEquirect.value=t;let o=new nn(r,s),a=t.minFilter;return t.minFilter===or&&(t.minFilter=zn),new tu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};var wa=class extends Yr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Fp=new k,mA=new k,gA=new Ue,Zn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Fp.subVectors(i,t).cross(mA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Fp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||gA.getNormalMatrix(e),r=this.coplanarPoint(Fp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pr=new ao,Hl=new k,Ca=class{constructor(e=new Zn,t=new Zn,i=new Zn,r=new Zn,s=new Zn,o=new Zn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],w=r[13],b=r[14],E=r[15];if(i[0].setComponents(c-s,f-l,m-p,E-h).normalize(),i[1].setComponents(c+s,f+l,m+p,E+h).normalize(),i[2].setComponents(c+o,f+u,m+g,E+w).normalize(),i[3].setComponents(c-o,f-u,m-g,E-w).normalize(),i[4].setComponents(c-a,f-d,m-_,E-b).normalize(),t===Jn)i[5].setComponents(c+a,f+d,m+_,E+b).normalize();else if(t===ga)i[5].setComponents(a,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Hl.x=r.normal.x>0?e.max.x:e.min.x,Hl.y=r.normal.y>0?e.max.y:e.min.y,Hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gr=class extends Yr{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Ta=class extends cr{constructor(e,t,i,r,s,o,a,c,l,u=Or){if(u!==Or&&u!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Or&&(i=ar),i===void 0&&u===kr&&(i=qr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dn,this.minFilter=c!==void 0?c:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Da=class n extends nr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){let w=h*f-o;for(let b=0;b<l;b++){let E=b*d-s;g.push(E,-w,0),_.push(0,0,1),m.push(b/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let w=0;w<a;w++){let b=w+l*h,E=w+l*(h+1),P=w+1+l*(h+1),D=w+1+l*h;p.push(b,E,D),p.push(E,P,D)}this.setIndex(p),this.setAttribute("position",new Kn(g,3)),this.setAttribute("normal",new Kn(_,3)),this.setAttribute("uv",new Kn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var iu=class extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ru=class extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function vA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Wr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},su=class extends Wr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kp,endingEnd:kp}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bp:s=e,a=2*t-i;break;case Vp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Bp:o=e,c=2*i-t;break;case Vp:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,h=-f*m+2*f*_-f*g,w=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-p)*m+(1.5+p)*_+.5*g,E=p*m-p*_;for(let P=0;P!==a;++P)s[P]=h*o[u+P]+w*o[l+P]+b*o[c+P]+E*o[d+P];return s}},ou=class extends Wr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},au=class extends Wr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},An=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gl(t,this.TimeBufferType),this.values=Gl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Gl(e.times,Array),values:Gl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new su(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case Yl:t=this.InterpolantFactoryMethodLinear;break;case Wl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return Yl;case this.InterpolantFactoryMethodSmooth:return Wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&vA(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Wl,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[f+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Yl;var rr=class extends An{constructor(e,t,i){super(e,t,i)}};rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=pa;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var cu=class extends An{};cu.prototype.ValueTypeName="color";var lu=class extends An{};lu.prototype.ValueTypeName="number";var uu=class extends Wr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Ti.slerpFlat(s,0,o,l-a,o,l,c);return s}},Aa=class extends An{InterpolantFactoryMethodLinear(e){return new uu(this.times,this.values,this.getValueSize(),e)}};Aa.prototype.ValueTypeName="quaternion";Aa.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends An{constructor(e,t,i){super(e,t,i)}};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=pa;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var du=class extends An{};du.prototype.ValueTypeName="vector";var fu=class extends Ea{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var hu=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var um="\\[\\]\\.:\\/",yA=new RegExp("["+um+"]","g"),dm="[^"+um+"]",_A="[^"+um.replace("\\.","")+"]",xA=/((?:WC+[\/:])*)/.source.replace("WC",dm),MA=/(WCOD+)?/.source.replace("WCOD",_A),SA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dm),EA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dm),bA=new RegExp("^"+xA+MA+SA+EA+"$"),wA=["material","materials","bones","map"],Gp=class{constructor(e,t,i){let r=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yA,"")}static parseTrackName(t){let i=bA.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);wA.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Gp,n})();Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xB=new Float32Array(1);function fm(n,e,t,i){let r=CA(i);switch(t){case Qp:return n*e;case tm:return n*e;case nm:return n*e*2;case im:return n*e/r.components*r.byteLength;case Du:return n*e/r.components*r.byteLength;case rm:return n*e*2/r.components*r.byteLength;case Au:return n*e*2/r.components*r.byteLength;case em:return n*e*3/r.components*r.byteLength;case In:return n*e*4/r.components*r.byteLength;case Iu:return n*e*4/r.components*r.byteLength;case Na:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case La:case Oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nu:case Lu:return Math.max(n,16)*Math.max(e,8)/4;case Ru:case Pu:return Math.max(n,8)*Math.max(e,8)/2;case Ou:case Fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ju:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $u:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fa:case Ku:case Qu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sm:case ed:return Math.ceil(n/4)*Math.ceil(e/4)*8;case td:case nd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function CA(n){switch(n){case ni:case Zp:return{byteLength:1,components:1};case co:case Jp:case lo:return{byteLength:2,components:1};case Cu:case Tu:return{byteLength:2,components:4};case ar:case wu:case ii:return{byteLength:4,components:1};case Kp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pu);function pM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function TA(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var DA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AA=`#ifdef USE_ALPHAHASH
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
#endif`,IA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LA=`#ifdef USE_AOMAP
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
#endif`,OA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FA=`#ifdef USE_BATCHING
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
#endif`,UA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zA=`#ifdef USE_IRIDESCENCE
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
#endif`,HA=`#ifdef USE_BUMPMAP
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
#endif`,GA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,JA=`#define PI 3.141592653589793
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
} // validated`,KA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,QA=`vec3 transformedNormal = objectNormal;
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
#endif`,eI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rI="gl_FragColor = linearToOutputTexel( gl_FragColor );",sI=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oI=`#ifdef USE_ENVMAP
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
#endif`,aI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cI=`#ifdef USE_ENVMAP
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
#endif`,lI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uI=`#ifdef USE_ENVMAP
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
#endif`,dI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mI=`#ifdef USE_GRADIENTMAP
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
}`,gI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_I=`uniform bool receiveShadow;
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
#endif`,xI=`#ifdef USE_ENVMAP
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
#endif`,MI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wI=`PhysicalMaterial material;
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
#endif`,CI=`struct PhysicalMaterial {
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
}`,TI=`
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
#endif`,DI=`#if defined( RE_IndirectDiffuse )
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
#endif`,AI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,II=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RI=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NI=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PI=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UI=`#if defined( USE_POINTS_UV )
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
#endif`,kI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zI=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GI=`#ifdef USE_MORPHTARGETS
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
#endif`,WI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$I=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZI=`#ifdef USE_NORMALMAP
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
#endif`,JI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fR=`float getShadowMask() {
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
}`,hR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pR=`#ifdef USE_SKINNING
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
#endif`,mR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gR=`#ifdef USE_SKINNING
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
#endif`,vR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_R=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MR=`#ifdef USE_TRANSMISSION
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
#endif`,SR=`#ifdef USE_TRANSMISSION
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
#endif`,ER=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,TR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DR=`uniform sampler2D t2D;
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
}`,AR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PR=`#include <common>
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
}`,LR=`#if DEPTH_PACKING == 3200
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
}`,OR=`#define DISTANCE
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
}`,FR=`#define DISTANCE
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
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BR=`uniform float scale;
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
}`,VR=`uniform vec3 diffuse;
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
}`,zR=`#include <common>
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
}`,HR=`uniform vec3 diffuse;
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
}`,GR=`#define LAMBERT
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
}`,WR=`#define LAMBERT
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
}`,jR=`#define MATCAP
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
}`,$R=`#define MATCAP
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
}`,qR=`#define NORMAL
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
}`,XR=`#define NORMAL
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
}`,YR=`#define PHONG
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
}`,ZR=`#define PHONG
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
}`,JR=`#define STANDARD
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
}`,KR=`#define STANDARD
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
}`,QR=`#define TOON
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
}`,e1=`#define TOON
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
}`,t1=`uniform float size;
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#include <common>
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
}`,r1=`uniform vec3 color;
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
}`,s1=`uniform float rotation;
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
}`,o1=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:DA,alphahash_pars_fragment:AA,alphamap_fragment:IA,alphamap_pars_fragment:RA,alphatest_fragment:NA,alphatest_pars_fragment:PA,aomap_fragment:LA,aomap_pars_fragment:OA,batching_pars_vertex:FA,batching_vertex:UA,begin_vertex:kA,beginnormal_vertex:BA,bsdfs:VA,iridescence_fragment:zA,bumpmap_pars_fragment:HA,clipping_planes_fragment:GA,clipping_planes_pars_fragment:WA,clipping_planes_pars_vertex:jA,clipping_planes_vertex:$A,color_fragment:qA,color_pars_fragment:XA,color_pars_vertex:YA,color_vertex:ZA,common:JA,cube_uv_reflection_fragment:KA,defaultnormal_vertex:QA,displacementmap_pars_vertex:eI,displacementmap_vertex:tI,emissivemap_fragment:nI,emissivemap_pars_fragment:iI,colorspace_fragment:rI,colorspace_pars_fragment:sI,envmap_fragment:oI,envmap_common_pars_fragment:aI,envmap_pars_fragment:cI,envmap_pars_vertex:lI,envmap_physical_pars_fragment:xI,envmap_vertex:uI,fog_vertex:dI,fog_pars_vertex:fI,fog_fragment:hI,fog_pars_fragment:pI,gradientmap_pars_fragment:mI,lightmap_pars_fragment:gI,lights_lambert_fragment:vI,lights_lambert_pars_fragment:yI,lights_pars_begin:_I,lights_toon_fragment:MI,lights_toon_pars_fragment:SI,lights_phong_fragment:EI,lights_phong_pars_fragment:bI,lights_physical_fragment:wI,lights_physical_pars_fragment:CI,lights_fragment_begin:TI,lights_fragment_maps:DI,lights_fragment_end:AI,logdepthbuf_fragment:II,logdepthbuf_pars_fragment:RI,logdepthbuf_pars_vertex:NI,logdepthbuf_vertex:PI,map_fragment:LI,map_pars_fragment:OI,map_particle_fragment:FI,map_particle_pars_fragment:UI,metalnessmap_fragment:kI,metalnessmap_pars_fragment:BI,morphinstance_vertex:VI,morphcolor_vertex:zI,morphnormal_vertex:HI,morphtarget_pars_vertex:GI,morphtarget_vertex:WI,normal_fragment_begin:jI,normal_fragment_maps:$I,normal_pars_fragment:qI,normal_pars_vertex:XI,normal_vertex:YI,normalmap_pars_fragment:ZI,clearcoat_normal_fragment_begin:JI,clearcoat_normal_fragment_maps:KI,clearcoat_pars_fragment:QI,iridescence_pars_fragment:eR,opaque_fragment:tR,packing:nR,premultiplied_alpha_fragment:iR,project_vertex:rR,dithering_fragment:sR,dithering_pars_fragment:oR,roughnessmap_fragment:aR,roughnessmap_pars_fragment:cR,shadowmap_pars_fragment:lR,shadowmap_pars_vertex:uR,shadowmap_vertex:dR,shadowmask_pars_fragment:fR,skinbase_vertex:hR,skinning_pars_vertex:pR,skinning_vertex:mR,skinnormal_vertex:gR,specularmap_fragment:vR,specularmap_pars_fragment:yR,tonemapping_fragment:_R,tonemapping_pars_fragment:xR,transmission_fragment:MR,transmission_pars_fragment:SR,uv_pars_fragment:ER,uv_pars_vertex:bR,uv_vertex:wR,worldpos_vertex:CR,background_vert:TR,background_frag:DR,backgroundCube_vert:AR,backgroundCube_frag:IR,cube_vert:RR,cube_frag:NR,depth_vert:PR,depth_frag:LR,distanceRGBA_vert:OR,distanceRGBA_frag:FR,equirect_vert:UR,equirect_frag:kR,linedashed_vert:BR,linedashed_frag:VR,meshbasic_vert:zR,meshbasic_frag:HR,meshlambert_vert:GR,meshlambert_frag:WR,meshmatcap_vert:jR,meshmatcap_frag:$R,meshnormal_vert:qR,meshnormal_frag:XR,meshphong_vert:YR,meshphong_frag:ZR,meshphysical_vert:JR,meshphysical_frag:KR,meshtoon_vert:QR,meshtoon_frag:e1,points_vert:t1,points_frag:n1,shadow_vert:i1,shadow_frag:r1,sprite_vert:s1,sprite_frag:o1},ne={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ri={basic:{uniforms:Xt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Xt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new rt(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Xt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Xt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Xt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new rt(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Xt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Xt([ne.points,ne.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Xt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Xt([ne.common,ne.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Xt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Xt([ne.sprite,ne.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Xt([ne.common,ne.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Xt([ne.lights,ne.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ri.physical={uniforms:Xt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var id={r:0,b:0,g:0},Jr=new Vr,a1=new Nt;function c1(n,e,t,i,r,s,o){let a=new rt(0),c=s===!0?0:1,l,u,d=null,f=0,p=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function _(b){let E=!1,P=g(b);P===null?h(a,c):P&&P.isColor&&(h(P,1),E=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){let P=g(E);P&&(P.isCubeTexture||P.mapping===Ia)?(u===void 0&&(u=new nn(new ir(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Zr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Jr.copy(E.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(a1.makeRotationFromEuler(Jr)),u.material.toneMapped=nt.getTransfer(P.colorSpace)!==dt,(d!==P||f!==P.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=P,f=P.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new nn(new Da(2,2),new Hn({name:"BackgroundMaterial",uniforms:Zr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=nt.getTransfer(P.colorSpace)!==dt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=P,f=P.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,E){b.getRGB(id,lm(n)),i.buffers.color.setClear(id.r,id.g,id.b,E,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),c=E,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(a,c)},render:_,addToRenderList:m,dispose:w}}function l1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(x,A,G,B,X){let Y=!1,j=d(B,G,A);s!==j&&(s=j,l(s.object)),Y=p(x,B,G,X),Y&&g(x,B,G,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,E(x,A,G,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,A,G){let B=G.wireframe===!0,X=i[x.id];X===void 0&&(X={},i[x.id]=X);let Y=X[A.id];Y===void 0&&(Y={},X[A.id]=Y);let j=Y[B];return j===void 0&&(j=f(c()),Y[B]=j),j}function f(x){let A=[],G=[],B=[];for(let X=0;X<t;X++)A[X]=0,G[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:G,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,A,G,B){let X=s.attributes,Y=A.attributes,j=0,J=G.getAttributes();for(let z in J)if(J[z].location>=0){let de=X[z],_e=Y[z];if(_e===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor)),de===void 0||de.attribute!==_e||_e&&de.data!==_e.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function g(x,A,G,B){let X={},Y=A.attributes,j=0,J=G.getAttributes();for(let z in J)if(J[z].location>=0){let de=Y[z];de===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));let _e={};_e.attribute=de,de&&de.data&&(_e.data=de.data),X[z]=_e,j++}s.attributes=X,s.attributesNum=j,s.index=B}function _(){let x=s.newAttributes;for(let A=0,G=x.length;A<G;A++)x[A]=0}function m(x){h(x,0)}function h(x,A){let G=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;G[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),X[x]!==A&&(n.vertexAttribDivisor(x,A),X[x]=A)}function w(){let x=s.newAttributes,A=s.enabledAttributes;for(let G=0,B=A.length;G<B;G++)A[G]!==x[G]&&(n.disableVertexAttribArray(G),A[G]=0)}function b(x,A,G,B,X,Y,j){j===!0?n.vertexAttribIPointer(x,A,G,X,Y):n.vertexAttribPointer(x,A,G,B,X,Y)}function E(x,A,G,B){_();let X=B.attributes,Y=G.getAttributes(),j=A.defaultAttributeValues;for(let J in Y){let z=Y[J];if(z.location>=0){let se=X[J];if(se===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){let de=se.normalized,_e=se.itemSize,We=e.get(se);if(We===void 0)continue;let pt=We.buffer,W=We.type,te=We.bytesPerElement,ve=W===n.INT||W===n.UNSIGNED_INT||se.gpuType===wu;if(se.isInterleavedBufferAttribute){let oe=se.data,Te=oe.stride,Fe=se.offset;if(oe.isInstancedInterleavedBuffer){for(let je=0;je<z.locationSize;je++)h(z.location+je,oe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let je=0;je<z.locationSize;je++)m(z.location+je);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let je=0;je<z.locationSize;je++)b(z.location+je,_e/z.locationSize,W,de,Te*te,(Fe+_e/z.locationSize*je)*te,ve)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<z.locationSize;oe++)h(z.location+oe,se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<z.locationSize;oe++)m(z.location+oe);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let oe=0;oe<z.locationSize;oe++)b(z.location+oe,_e/z.locationSize,W,de,_e*te,_e/z.locationSize*oe*te,ve)}}else if(j!==void 0){let de=j[J];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(z.location,de);break;case 3:n.vertexAttrib3fv(z.location,de);break;case 4:n.vertexAttrib4fv(z.location,de);break;default:n.vertexAttrib1fv(z.location,de)}}}}w()}function P(){L();for(let x in i){let A=i[x];for(let G in A){let B=A[G];for(let X in B)u(B[X].object),delete B[X];delete A[G]}delete i[x]}}function D(x){if(i[x.id]===void 0)return;let A=i[x.id];for(let G in A){let B=A[G];for(let X in B)u(B[X].object),delete B[X];delete A[G]}delete i[x.id]}function C(x){for(let A in i){let G=i[A];if(G[x.id]===void 0)continue;let B=G[x.id];for(let X in B)u(B[X].object),delete B[X];delete G[x.id]}}function L(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function u1(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(l,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function d1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==In&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ni&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ii&&!L)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:P,maxSamples:D}}function f1(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Zn,a=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let w=s?0:i,b=w*4,E=h.clippingState||null;c.value=E,E=u(g,f,b,p);for(let P=0;P!==b;++P)E[P]=t[P];h.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let h=p+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,E=p;b!==_;++b,E+=4)o.copy(d[b]).applyMatrix4(w,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function h1(n){let e=new WeakMap;function t(o,a){return a===Su?o.mapping=jr:a===Eu&&(o.mapping=$r),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Su||a===Eu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new nu(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var fo=4,jx=[.125,.215,.35,.446,.526,.582],es=20,hm=new fu,$x=new rt,pm=null,mm=0,gm=0,vm=!1,Qr=(1+Math.sqrt(5))/2,uo=1/Qr,qx=[new k(-Qr,uo,0),new k(Qr,uo,0),new k(-uo,0,Qr),new k(uo,0,Qr),new k(0,Qr,-uo),new k(0,Qr,uo),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],od=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){pm=this._renderer.getRenderTarget(),mm=this._renderer.getActiveCubeFace(),gm=this._renderer.getActiveMipmapLevel(),vm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pm,mm,gm),this._renderer.xr.enabled=vm,e.scissorTest=!1,rd(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pm=this._renderer.getRenderTarget(),mm=this._renderer.getActiveCubeFace(),gm=this._renderer.getActiveMipmapLevel(),vm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:lo,format:In,colorSpace:Br,depthBuffer:!1},r=Xx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xx(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p1(s)),this._blurMaterial=m1(s,e,t)}return r}_compileMaterial(e){let t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,hm)}_sceneToCubeUV(e,t,i,r){let a=new qt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor($x),u.toneMapping=Ai,u.autoClear=!1;let p=new Hr({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new nn(new ir,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy($x),_=!0);for(let h=0;h<6;h++){let w=h%3;w===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):w===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));let b=this._cubeSize;rd(r,w*b,h>2?b:0,b,b),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===jr||e.mapping===$r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yx());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;rd(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,hm)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qx[(r-s-1)%qx.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new nn(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*es-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):es;m>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);let h=[],w=0;for(let C=0;C<es;++C){let L=C/_,M=Math.exp(-L*L/2);h.push(M),C===0?w+=M:C<m&&(w+=2*M)}for(let C=0;C<h.length;C++)h[C]=h[C]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let E=this._sizeLods[r],P=3*E*(r>b-fo?r-b+fo:0),D=4*(this._cubeSize-E);rd(t,P,D,3*E,2*E),c.setRenderTarget(t),c.render(d,hm)}};function p1(n){let e=[],t=[],i=[],r=n,s=n-fo+1+jx.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-fo?c=jx[o-n+fo-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,w=new Float32Array(_*g*p),b=new Float32Array(m*g*p),E=new Float32Array(h*g*p);for(let D=0;D<p;D++){let C=D%3*2/3-1,L=D>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(M,_*g*D),b.set(f,m*g*D);let x=[D,D,D,D,D,D];E.set(x,h*g*D)}let P=new nr;P.setAttribute("position",new vn(w,_)),P.setAttribute("uv",new vn(b,m)),P.setAttribute("faceIndex",new vn(E,h)),e.push(P),r>fo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xx(n,e,t){let i=new Qn(n,e,t);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rd(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function m1(n,e,t){let i=new Float32Array(es),r=new k(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tm(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Yx(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tm(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Zx(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Tm(){return`

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
	`}function g1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Su||c===Eu,u=c===jr||c===$r;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new od(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new od(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function v1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Xr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function y1(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(d){let f=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let w=p.array;_=p.version;for(let b=0,E=w.length;b<E;b+=3){let P=w[b+0],D=w[b+1],C=w[b+2];f.push(P,D,D,C,C,P)}}else if(g!==void 0){let w=g.array;_=g.version;for(let b=0,E=w.length/3-1;b<E;b+=3){let P=b+0,D=b+1,C=b+2;f.push(P,D,D,C,C,P)}}else return;let m=new(cm(f)?Sa:Ma)(f,1);m.version=_;let h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){let f=s.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function _1(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function d(f,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let h=0;for(let w=0;w<g;w++)h+=p[w]*_[w];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function x1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function M1(n,e,t){let i=new WeakMap,r=new bt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let P=a.attributes.position.count*E,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let C=new Float32Array(P*D*4*d),L=new _a(C,P,D,d);L.type=ii,L.needsUpdate=!0;let M=E*4;for(let A=0;A<d;A++){let G=h[A],B=w[A],X=b[A],Y=P*D*4*A;for(let j=0;j<G.count;j++){let J=j*M;g===!0&&(r.fromBufferAttribute(G,j),C[Y+J+0]=r.x,C[Y+J+1]=r.y,C[Y+J+2]=r.z,C[Y+J+3]=0),_===!0&&(r.fromBufferAttribute(B,j),C[Y+J+4]=r.x,C[Y+J+5]=r.y,C[Y+J+6]=r.z,C[Y+J+7]=0),m===!0&&(r.fromBufferAttribute(X,j),C[Y+J+8]=r.x,C[Y+J+9]=r.y,C[Y+J+10]=r.z,C[Y+J+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new ht(P,D)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function S1(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var mM=new cr,Jx=new Ta(1,1),gM=new _a,vM=new Ql,yM=new ba,Kx=[],Qx=[],eM=new Float32Array(16),tM=new Float32Array(9),nM=new Float32Array(4);function po(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Kx[r];if(s===void 0&&(s=new Float32Array(r),Kx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cd(n,e){let t=Qx[e];t===void 0&&(t=new Int32Array(e),Qx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function E1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function b1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function w1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function C1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function T1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,i))return;nM.set(i),n.uniformMatrix2fv(this.addr,!1,nM),Ot(t,i)}}function D1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,i))return;tM.set(i),n.uniformMatrix3fv(this.addr,!1,tM),Ot(t,i)}}function A1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,i))return;eM.set(i),n.uniformMatrix4fv(this.addr,!1,eM),Ot(t,i)}}function I1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function R1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function N1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function P1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function L1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function O1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function F1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function U1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function k1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Jx.compareFunction=om,s=Jx):s=mM,t.setTexture2D(e||s,r)}function B1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vM,r)}function V1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yM,r)}function z1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gM,r)}function H1(n){switch(n){case 5126:return E1;case 35664:return b1;case 35665:return w1;case 35666:return C1;case 35674:return T1;case 35675:return D1;case 35676:return A1;case 5124:case 35670:return I1;case 35667:case 35671:return R1;case 35668:case 35672:return N1;case 35669:case 35673:return P1;case 5125:return L1;case 36294:return O1;case 36295:return F1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return z1}}function G1(n,e){n.uniform1fv(this.addr,e)}function W1(n,e){let t=po(e,this.size,2);n.uniform2fv(this.addr,t)}function j1(n,e){let t=po(e,this.size,3);n.uniform3fv(this.addr,t)}function $1(n,e){let t=po(e,this.size,4);n.uniform4fv(this.addr,t)}function q1(n,e){let t=po(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function X1(n,e){let t=po(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Y1(n,e){let t=po(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Z1(n,e){n.uniform1iv(this.addr,e)}function J1(n,e){n.uniform2iv(this.addr,e)}function K1(n,e){n.uniform3iv(this.addr,e)}function Q1(n,e){n.uniform4iv(this.addr,e)}function eN(n,e){n.uniform1uiv(this.addr,e)}function tN(n,e){n.uniform2uiv(this.addr,e)}function nN(n,e){n.uniform3uiv(this.addr,e)}function iN(n,e){n.uniform4uiv(this.addr,e)}function rN(n,e,t){let i=this.cache,r=e.length,s=cd(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||mM,s[o])}function sN(n,e,t){let i=this.cache,r=e.length,s=cd(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vM,s[o])}function oN(n,e,t){let i=this.cache,r=e.length,s=cd(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yM,s[o])}function aN(n,e,t){let i=this.cache,r=e.length,s=cd(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gM,s[o])}function cN(n){switch(n){case 5126:return G1;case 35664:return W1;case 35665:return j1;case 35666:return $1;case 35674:return q1;case 35675:return X1;case 35676:return Y1;case 5124:case 35670:return Z1;case 35667:case 35671:return J1;case 35668:case 35672:return K1;case 35669:case 35673:return Q1;case 5125:return eN;case 36294:return tN;case 36295:return nN;case 36296:return iN;case 35678:case 36198:case 36298:case 36306:case 35682:return rN;case 35679:case 36299:case 36307:return sN;case 35680:case 36300:case 36308:case 36293:return oN;case 36289:case 36303:case 36311:case 36292:return aN}}var _m=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=H1(t.type)}},xm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cN(t.type)}},Mm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},ym=/(\w+)(\])?(\[|\.)?/g;function iM(n,e){n.seq.push(e),n.map[e.id]=e}function lN(n,e,t){let i=n.name,r=i.length;for(ym.lastIndex=0;;){let s=ym.exec(i),o=ym.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){iM(t,l===void 0?new _m(a,n,e):new xm(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Mm(a),iM(t,d)),t=d}}}var ho=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);lN(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function rM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var uN=37297,dN=0;function fN(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var sM=new Ue;function hN(n){nt._getMatrix(sM,nt.workingColorSpace,n);let e=`mat3( ${sM.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case ma:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function oM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fN(n.getShaderSource(e),o)}else return r}function pN(n,e){let t=hN(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mN(n,e){let t;switch(e){case xx:t="Linear";break;case Mx:t="Reinhard";break;case Sx:t="Cineon";break;case Ex:t="ACESFilmic";break;case wx:t="AgX";break;case Cx:t="Neutral";break;case bx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sd=new k;function gN(){nt.getLuminanceCoefficients(sd);let n=sd.x.toFixed(4),e=sd.y.toFixed(4),t=sd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vN(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function yN(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _N(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ka(n){return n!==""}function aM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sm(n){return n.replace(xN,SN)}var MN=new Map;function SN(n,e){let t=ze[e];if(t===void 0){let i=MN.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sm(t)}var EN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lM(n){return n.replace(EN,bN)}function bN(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uM(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function wN(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Q0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function CN(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jr:case $r:e="ENVMAP_TYPE_CUBE";break;case Ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TN(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function DN(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yp:e="ENVMAP_BLENDING_MULTIPLY";break;case yx:e="ENVMAP_BLENDING_MIX";break;case _x:e="ENVMAP_BLENDING_ADD";break}return e}function AN(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function IN(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=wN(t),l=CN(t),u=TN(t),d=DN(t),f=AN(t),p=vN(t),g=yN(s),_=r.createProgram(),m,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ka).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ka).join(`
`),h.length>0&&(h+=`
`)):(m=[uM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),h=[uM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ai?mN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,pN("linearToOutputTexel",t.outputColorSpace),gN(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),o=Sm(o),o=aM(o,t),o=cM(o,t),a=Sm(a),a=aM(a,t),a=cM(a,t),o=lM(o),a=lM(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===am?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let b=w+m+o,E=w+h+a,P=rM(r,r.VERTEX_SHADER,b),D=rM(r,r.FRAGMENT_SHADER,E);r.attachShader(_,P),r.attachShader(_,D),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(A){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(P).trim(),X=r.getShaderInfoLog(D).trim(),Y=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,D);else{let J=oM(r,P,"vertex"),z=oM(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+G+`
`+J+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||X==="")&&(j=!1);j&&(A.diagnostics={runnable:Y,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(P),r.deleteShader(D),L=new ho(r,_),M=_N(r,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,uN)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dN++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=D,this}var RN=0,Em=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new bm(e),t.set(e,i)),i}},bm=class{constructor(e){this.id=RN++,this.code=e,this.usedTimes=0}};function NN(n,e,t,i,r,s,o){let a=new xa,c=new Em,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,A,G,B){let X=G.fog,Y=B.geometry,j=M.isMeshStandardMaterial?G.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),z=J&&J.mapping===Ia?J.image.height:null,se=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_e=de!==void 0?de.length:0,We=0;Y.morphAttributes.position!==void 0&&(We=1),Y.morphAttributes.normal!==void 0&&(We=2),Y.morphAttributes.color!==void 0&&(We=3);let pt,W,te,ve;if(se){let ct=ri[se];pt=ct.vertexShader,W=ct.fragmentShader}else pt=M.vertexShader,W=M.fragmentShader,c.update(M),te=c.getVertexShaderID(M),ve=c.getFragmentShaderID(M);let oe=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,je=B.isBatchedMesh===!0,xt=!!M.map,Qe=!!M.matcap,wt=!!J,T=!!M.aoMap,yn=!!M.lightMap,Xe=!!M.bumpMap,Ye=!!M.normalMap,xe=!!M.displacementMap,vt=!!M.emissiveMap,Me=!!M.metalnessMap,S=!!M.roughnessMap,v=M.anisotropy>0,O=M.clearcoat>0,$=M.dispersion>0,Z=M.iridescence>0,H=M.sheen>0,ye=M.transmission>0,ae=v&&!!M.anisotropyMap,fe=O&&!!M.clearcoatMap,et=O&&!!M.clearcoatNormalMap,Q=O&&!!M.clearcoatRoughnessMap,pe=Z&&!!M.iridescenceMap,be=Z&&!!M.iridescenceThicknessMap,Ie=H&&!!M.sheenColorMap,me=H&&!!M.sheenRoughnessMap,Ze=!!M.specularMap,Ve=!!M.specularColorMap,gt=!!M.specularIntensityMap,I=ye&&!!M.transmissionMap,ie=ye&&!!M.thicknessMap,V=!!M.gradientMap,q=!!M.alphaMap,le=M.alphaTest>0,ce=!!M.alphaHash,ke=!!M.extensions,Mt=Ai;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Mt=n.toneMapping);let Gt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:pt,fragmentShader:W,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:je,batchingColor:je&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Br,alphaToCoverage:!!M.alphaToCoverage,map:xt,matcap:Qe,envMap:wt,envMapMode:wt&&J.mapping,envMapCubeUVHeight:z,aoMap:T,lightMap:yn,bumpMap:Xe,normalMap:Ye,displacementMap:f&&xe,emissiveMap:vt,normalMapObjectSpace:Ye&&M.normalMapType===Rx,normalMapTangentSpace:Ye&&M.normalMapType===Ix,metalnessMap:Me,roughnessMap:S,anisotropy:v,anisotropyMap:ae,clearcoat:O,clearcoatMap:fe,clearcoatNormalMap:et,clearcoatRoughnessMap:Q,dispersion:$,iridescence:Z,iridescenceMap:pe,iridescenceThicknessMap:be,sheen:H,sheenColorMap:Ie,sheenRoughnessMap:me,specularMap:Ze,specularColorMap:Ve,specularIntensityMap:gt,transmission:ye,transmissionMap:I,thicknessMap:ie,gradientMap:V,opaque:M.transparent===!1&&M.blending===Fr&&M.alphaToCoverage===!1,alphaMap:q,alphaTest:le,alphaHash:ce,combine:M.combine,mapUv:xt&&_(M.map.channel),aoMapUv:T&&_(M.aoMap.channel),lightMapUv:yn&&_(M.lightMap.channel),bumpMapUv:Xe&&_(M.bumpMap.channel),normalMapUv:Ye&&_(M.normalMap.channel),displacementMapUv:xe&&_(M.displacementMap.channel),emissiveMapUv:vt&&_(M.emissiveMap.channel),metalnessMapUv:Me&&_(M.metalnessMap.channel),roughnessMapUv:S&&_(M.roughnessMap.channel),anisotropyMapUv:ae&&_(M.anisotropyMap.channel),clearcoatMapUv:fe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(M.sheenRoughnessMap.channel),specularMapUv:Ze&&_(M.specularMap.channel),specularColorMapUv:Ve&&_(M.specularColorMap.channel),specularIntensityMapUv:gt&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ie&&_(M.thicknessMap.channel),alphaMapUv:q&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ye||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(xt||q),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:We,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mt,decodeVideoTexture:xt&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===dt,decodeVideoTextureEmissive:vt&&M.emissiveMap.isVideoTexture===!0&&nt.getTransfer(M.emissiveMap.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ti,flipSided:M.side===Zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function h(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)x.push(A),x.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(w(x,M),b(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function w(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function b(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function E(M){let x=g[M.type],A;if(x){let G=ri[x];A=Wx.clone(G.uniforms)}else A=M.uniforms;return A}function P(M,x){let A;for(let G=0,B=u.length;G<B;G++){let X=u[G];if(X.cacheKey===x){A=X,++A.usedTimes;break}}return A===void 0&&(A=new IN(n,x,M,s),u.push(A)),A}function D(M){if(--M.usedTimes===0){let x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function C(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:P,releaseProgram:D,releaseShaderCache:C,programs:u,dispose:L}}function PN(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function LN(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){let h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(d,f,p,g,_,m){let h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||LN),i.length>1&&i.sort(f||dM),r.length>1&&r.sort(f||dM)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function ON(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new fM,n.set(i,[o])):r>=s.length?(o=new fM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function FN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new rt};break;case"SpotLight":t={position:new k,direction:new k,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function UN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var kN=0;function BN(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VN(n){let e=new FN,t=UN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let r=new k,s=new Nt,o=new Nt;function a(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,w=0,b=0,E=0,P=0,D=0,C=0;l.sort(BN);for(let M=0,x=l.length;M<x;M++){let A=l[M],G=A.color,B=A.intensity,X=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=G.r*B,d+=G.g*B,f+=G.b*B;else if(A.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(A.sh.coefficients[j],B);C++}else if(A.isDirectionalLight){let j=e.get(A);if(j.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let J=A.shadow,z=t.get(A);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=A.shadow.matrix,w++}i.directional[p]=j,p++}else if(A.isSpotLight){let j=e.get(A);j.position.setFromMatrixPosition(A.matrixWorld),j.color.copy(G).multiplyScalar(B),j.distance=X,j.coneCos=Math.cos(A.angle),j.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),j.decay=A.decay,i.spot[_]=j;let J=A.shadow;if(A.map&&(i.spotLightMap[P]=A.map,P++,J.updateMatrices(A),A.castShadow&&D++),i.spotLightMatrix[_]=J.matrix,A.castShadow){let z=t.get(A);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=Y,E++}_++}else if(A.isRectAreaLight){let j=e.get(A);j.color.copy(G).multiplyScalar(B),j.halfWidth.set(A.width*.5,0,0),j.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=j,m++}else if(A.isPointLight){let j=e.get(A);if(j.color.copy(A.color).multiplyScalar(A.intensity),j.distance=A.distance,j.decay=A.decay,A.castShadow){let J=A.shadow,z=t.get(A);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=A.shadow.matrix,b++}i.point[g]=j,g++}else if(A.isHemisphereLight){let j=e.get(A);j.skyColor.copy(A.color).multiplyScalar(B),j.groundColor.copy(A.groundColor).multiplyScalar(B),i.hemi[h]=j,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==h||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==E||L.numSpotMaps!==P||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=h,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=E,L.numSpotMaps=P,L.numLightProbes=C,i.version=kN++)}function c(l,u){let d=0,f=0,p=0,g=0,_=0,m=u.matrixWorldInverse;for(let h=0,w=l.length;h<w;h++){let b=l[h];if(b.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(b.isSpotLight){let E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let E=i.hemi[_];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function hM(n){let e=new VN(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function zN(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new hM(n),e.set(r,[a])):s>=o.length?(a=new hM(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var HN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GN=`uniform sampler2D shadow_pass;
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
}`;function WN(n,e,t){let i=new Ca,r=new ht,s=new ht,o=new bt,a=new iu({depthPacking:Ax}),c=new ru,l={},u=t.maxTextureSize,d={[wi]:Zt,[Zt]:wi,[ti]:ti},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:HN,fragmentShader:GN}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new nr;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new nn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jp;let h=this.type;this.render=function(D,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let M=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Di),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=h!==ei&&this.type===ei,X=h===ei&&this.type!==ei;for(let Y=0,j=D.length;Y<j;Y++){let J=D[Y],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let se=z.getFrameExtents();if(r.multiply(se),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,z.mapSize.y=s.y)),z.map===null||B===!0||X===!0){let _e=this.type!==ei?{minFilter:Dn,magFilter:Dn}:{};z.map!==null&&z.map.dispose(),z.map=new Qn(r.x,r.y,_e),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let de=z.getViewportCount();for(let _e=0;_e<de;_e++){let We=z.getViewport(_e);o.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),G.viewport(o),z.updateMatrices(J,_e),i=z.getFrustum(),E(C,L,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===ei&&w(z,L),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,x,A)};function w(D,C){let L=e.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Qn(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(C,null,L,f,_,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(C,null,L,p,_,null)}function b(D,C,L,M){let x=null,A=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(A!==void 0)x=A;else if(x=L.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let G=x.uuid,B=C.uuid,X=l[G];X===void 0&&(X={},l[G]=X);let Y=X[B];Y===void 0&&(Y=x.clone(),X[B]=Y,C.addEventListener("dispose",P)),x=Y}if(x.visible=C.visible,x.wireframe=C.wireframe,M===ei?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let G=n.properties.get(x);G.light=L}return x}function E(D,C,L,M,x){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===ei)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);let B=e.update(D),X=D.material;if(Array.isArray(X)){let Y=B.groups;for(let j=0,J=Y.length;j<J;j++){let z=Y[j],se=X[z.materialIndex];if(se&&se.visible){let de=b(D,se,M,x);D.onBeforeShadow(n,D,C,L,B,de,z),n.renderBufferDirect(L,null,B,de,D,z),D.onAfterShadow(n,D,C,L,B,de,z)}}}else if(X.visible){let Y=b(D,X,M,x);D.onBeforeShadow(n,D,C,L,B,Y,null),n.renderBufferDirect(L,null,B,Y,D,null),D.onAfterShadow(n,D,C,L,B,Y,null)}}let G=D.children;for(let B=0,X=G.length;B<X;B++)E(G[B],C,L,M,x)}function P(D){D.target.removeEventListener("dispose",P);for(let L in l){let M=l[L],x=D.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var jN={[mu]:gu,[vu]:xu,[yu]:Mu,[Ur]:_u,[gu]:mu,[xu]:vu,[Mu]:yu,[_u]:Ur};function $N(n,e){function t(){let I=!1,ie=new bt,V=null,q=new bt(0,0,0,0);return{setMask:function(le){V!==le&&!I&&(n.colorMask(le,le,le,le),V=le)},setLocked:function(le){I=le},setClear:function(le,ce,ke,Mt,Gt){Gt===!0&&(le*=Mt,ce*=Mt,ke*=Mt),ie.set(le,ce,ke,Mt),q.equals(ie)===!1&&(n.clearColor(le,ce,ke,Mt),q.copy(ie))},reset:function(){I=!1,V=null,q.set(-1,0,0,0)}}}function i(){let I=!1,ie=!1,V=null,q=null,le=null;return{setReversed:function(ce){if(ie!==ce){let ke=e.get("EXT_clip_control");ie?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);let Mt=le;le=null,this.setClear(Mt)}ie=ce},getReversed:function(){return ie},setTest:function(ce){ce?oe(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(ce){V!==ce&&!I&&(n.depthMask(ce),V=ce)},setFunc:function(ce){if(ie&&(ce=jN[ce]),q!==ce){switch(ce){case mu:n.depthFunc(n.NEVER);break;case gu:n.depthFunc(n.ALWAYS);break;case vu:n.depthFunc(n.LESS);break;case Ur:n.depthFunc(n.LEQUAL);break;case yu:n.depthFunc(n.EQUAL);break;case _u:n.depthFunc(n.GEQUAL);break;case xu:n.depthFunc(n.GREATER);break;case Mu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=ce}},setLocked:function(ce){I=ce},setClear:function(ce){le!==ce&&(ie&&(ce=1-ce),n.clearDepth(ce),le=ce)},reset:function(){I=!1,V=null,q=null,le=null,ie=!1}}}function r(){let I=!1,ie=null,V=null,q=null,le=null,ce=null,ke=null,Mt=null,Gt=null;return{setTest:function(ct){I||(ct?oe(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(ct){ie!==ct&&!I&&(n.stencilMask(ct),ie=ct)},setFunc:function(ct,Rn,si){(V!==ct||q!==Rn||le!==si)&&(n.stencilFunc(ct,Rn,si),V=ct,q=Rn,le=si)},setOp:function(ct,Rn,si){(ce!==ct||ke!==Rn||Mt!==si)&&(n.stencilOp(ct,Rn,si),ce=ct,ke=Rn,Mt=si)},setLocked:function(ct){I=ct},setClear:function(ct){Gt!==ct&&(n.clearStencil(ct),Gt=ct)},reset:function(){I=!1,ie=null,V=null,q=null,le=null,ce=null,ke=null,Mt=null,Gt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,w=null,b=null,E=null,P=null,D=null,C=new rt(0,0,0),L=0,M=!1,x=null,A=null,G=null,B=null,X=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,J=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),j=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),j=J>=2);let se=null,de={},_e=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),pt=new bt().fromArray(_e),W=new bt().fromArray(We);function te(I,ie,V,q){let le=new Uint8Array(4),ce=n.createTexture();n.bindTexture(I,ce),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<V;ke++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ie+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ce}let ve={};ve[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Ur),Xe(!1),Ye(Wp),oe(n.CULL_FACE),T(Di);function oe(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Te(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Fe(I,ie){return d[I]!==ie?(n.bindFramebuffer(I,ie),d[I]=ie,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ie),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function je(I,ie){let V=p,q=!1;if(I){V=f.get(ie),V===void 0&&(V=[],f.set(ie,V));let le=I.textures;if(V.length!==le.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,ke=le.length;ce<ke;ce++)V[ce]=n.COLOR_ATTACHMENT0+ce;V.length=le.length,q=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,q=!0);q&&n.drawBuffers(V)}function xt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let Qe={[er]:n.FUNC_ADD,[tx]:n.FUNC_SUBTRACT,[nx]:n.FUNC_REVERSE_SUBTRACT};Qe[ix]=n.MIN,Qe[rx]=n.MAX;let wt={[sx]:n.ZERO,[ox]:n.ONE,[ax]:n.SRC_COLOR,[jl]:n.SRC_ALPHA,[hx]:n.SRC_ALPHA_SATURATE,[dx]:n.DST_COLOR,[lx]:n.DST_ALPHA,[cx]:n.ONE_MINUS_SRC_COLOR,[$l]:n.ONE_MINUS_SRC_ALPHA,[fx]:n.ONE_MINUS_DST_COLOR,[ux]:n.ONE_MINUS_DST_ALPHA,[px]:n.CONSTANT_COLOR,[mx]:n.ONE_MINUS_CONSTANT_COLOR,[gx]:n.CONSTANT_ALPHA,[vx]:n.ONE_MINUS_CONSTANT_ALPHA};function T(I,ie,V,q,le,ce,ke,Mt,Gt,ct){if(I===Di){_===!0&&(Te(n.BLEND),_=!1);return}if(_===!1&&(oe(n.BLEND),_=!0),I!==ex){if(I!==m||ct!==M){if((h!==er||E!==er)&&(n.blendEquation(n.FUNC_ADD),h=er,E=er),ct)switch(I){case Fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $p:n.blendFunc(n.ONE,n.ONE);break;case qp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $p:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,b=null,P=null,D=null,C.set(0,0,0),L=0,m=I,M=ct}return}le=le||ie,ce=ce||V,ke=ke||q,(ie!==h||le!==E)&&(n.blendEquationSeparate(Qe[ie],Qe[le]),h=ie,E=le),(V!==w||q!==b||ce!==P||ke!==D)&&(n.blendFuncSeparate(wt[V],wt[q],wt[ce],wt[ke]),w=V,b=q,P=ce,D=ke),(Mt.equals(C)===!1||Gt!==L)&&(n.blendColor(Mt.r,Mt.g,Mt.b,Gt),C.copy(Mt),L=Gt),m=I,M=!1}function yn(I,ie){I.side===ti?Te(n.CULL_FACE):oe(n.CULL_FACE);let V=I.side===Zt;ie&&(V=!V),Xe(V),I.blending===Fr&&I.transparent===!1?T(Di):T(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let q=I.stencilWrite;a.setTest(q),q&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){x!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),x=I)}function Ye(I){I!==J0?(oe(n.CULL_FACE),I!==A&&(I===Wp?n.cullFace(n.BACK):I===K0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),A=I}function xe(I){I!==G&&(j&&n.lineWidth(I),G=I)}function vt(I,ie,V){I?(oe(n.POLYGON_OFFSET_FILL),(B!==ie||X!==V)&&(n.polygonOffset(ie,V),B=ie,X=V)):Te(n.POLYGON_OFFSET_FILL)}function Me(I){I?oe(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function S(I){I===void 0&&(I=n.TEXTURE0+Y-1),se!==I&&(n.activeTexture(I),se=I)}function v(I,ie,V){V===void 0&&(se===null?V=n.TEXTURE0+Y-1:V=se);let q=de[V];q===void 0&&(q={type:void 0,texture:void 0},de[V]=q),(q.type!==I||q.texture!==ie)&&(se!==V&&(n.activeTexture(V),se=V),n.bindTexture(I,ie||ve[I]),q.type=I,q.texture=ie)}function O(){let I=de[se];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){pt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),pt.copy(I))}function me(I){W.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),W.copy(I))}function Ze(I,ie){let V=l.get(ie);V===void 0&&(V=new WeakMap,l.set(ie,V));let q=V.get(I);q===void 0&&(q=n.getUniformBlockIndex(ie,I.name),V.set(I,q))}function Ve(I,ie){let q=l.get(ie).get(I);c.get(ie)!==q&&(n.uniformBlockBinding(ie,q,I.__bindingPointIndex),c.set(ie,q))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,de={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,w=null,b=null,E=null,P=null,D=null,C=new rt(0,0,0),L=0,M=!1,x=null,A=null,G=null,B=null,X=null,pt.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Te,bindFramebuffer:Fe,drawBuffers:je,useProgram:xt,setBlending:T,setMaterial:yn,setFlipSided:Xe,setCullFace:Ye,setLineWidth:xe,setPolygonOffset:vt,setScissorTest:Me,activeTexture:S,bindTexture:v,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:pe,texImage3D:be,updateUBOMapping:Ze,uniformBlockBinding:Ve,texStorage2D:et,texStorage3D:Q,texSubImage2D:H,texSubImage3D:ye,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:Ie,viewport:me,reset:gt}}function qN(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return p?new OffscreenCanvas(S,v):va("canvas")}function _(S,v,O){let $=1,Z=Me(S);if((Z.width>O||Z.height>O)&&($=O/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let H=Math.floor($*Z.width),ye=Math.floor($*Z.height);d===void 0&&(d=g(H,ye));let ae=v?g(H,ye):d;return ae.width=H,ae.height=ye,ae.getContext("2d").drawImage(S,0,0,H,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+H+"x"+ye+")."),ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){n.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(S,v,O,$,Z=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let H=v;if(v===n.RED&&(O===n.FLOAT&&(H=n.R32F),O===n.HALF_FLOAT&&(H=n.R16F),O===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(H=n.R8UI),O===n.UNSIGNED_SHORT&&(H=n.R16UI),O===n.UNSIGNED_INT&&(H=n.R32UI),O===n.BYTE&&(H=n.R8I),O===n.SHORT&&(H=n.R16I),O===n.INT&&(H=n.R32I)),v===n.RG&&(O===n.FLOAT&&(H=n.RG32F),O===n.HALF_FLOAT&&(H=n.RG16F),O===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(H=n.RG8UI),O===n.UNSIGNED_SHORT&&(H=n.RG16UI),O===n.UNSIGNED_INT&&(H=n.RG32UI),O===n.BYTE&&(H=n.RG8I),O===n.SHORT&&(H=n.RG16I),O===n.INT&&(H=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(H=n.RGB8UI),O===n.UNSIGNED_SHORT&&(H=n.RGB16UI),O===n.UNSIGNED_INT&&(H=n.RGB32UI),O===n.BYTE&&(H=n.RGB8I),O===n.SHORT&&(H=n.RGB16I),O===n.INT&&(H=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),O===n.UNSIGNED_INT&&(H=n.RGBA32UI),O===n.BYTE&&(H=n.RGBA8I),O===n.SHORT&&(H=n.RGBA16I),O===n.INT&&(H=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),v===n.RGBA){let ye=Z?ma:nt.getTransfer($);O===n.FLOAT&&(H=n.RGBA32F),O===n.HALF_FLOAT&&(H=n.RGBA16F),O===n.UNSIGNED_BYTE&&(H=ye===dt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function E(S,v){let O;return S?v===null||v===ar||v===qr?O=n.DEPTH24_STENCIL8:v===ii?O=n.DEPTH32F_STENCIL8:v===co&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ar||v===qr?O=n.DEPTH_COMPONENT24:v===ii?O=n.DEPTH_COMPONENT32F:v===co&&(O=n.DEPTH_COMPONENT16),O}function P(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Dn&&S.minFilter!==zn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function D(S){let v=S.target;v.removeEventListener("dispose",D),L(v),v.isVideoTexture&&u.delete(v)}function C(S){let v=S.target;v.removeEventListener("dispose",C),x(v)}function L(S){let v=i.get(S);if(v.__webglInit===void 0)return;let O=S.source,$=f.get(O);if($){let Z=$[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(S),Object.keys($).length===0&&f.delete(O)}i.remove(S)}function M(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let O=S.source,$=f.get(O);delete $[v.__cacheKey],o.memory.textures--}function x(S){let v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Z=0;Z<v.__webglFramebuffer[$].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[$][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=S.textures;for(let $=0,Z=O.length;$<Z;$++){let H=i.get(O[$]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(O[$])}i.remove(S)}let A=0;function G(){A=0}function B(){let S=A;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),A+=1,S}function X(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function Y(S,v){let O=i.get(S);if(S.isVideoTexture&&xe(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,S,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function j(S,v){let O=i.get(S);if(S.version>0&&O.__version!==S.version){W(O,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function J(S,v){let O=i.get(S);if(S.version>0&&O.__version!==S.version){W(O,S,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function z(S,v){let O=i.get(S);if(S.version>0&&O.__version!==S.version){te(O,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let se={[ql]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[Xl]:n.MIRRORED_REPEAT},de={[Dn]:n.NEAREST,[Tx]:n.NEAREST_MIPMAP_NEAREST,[Ra]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[bu]:n.LINEAR_MIPMAP_NEAREST,[or]:n.LINEAR_MIPMAP_LINEAR},_e={[Nx]:n.NEVER,[kx]:n.ALWAYS,[Px]:n.LESS,[om]:n.LEQUAL,[Lx]:n.EQUAL,[Ux]:n.GEQUAL,[Ox]:n.GREATER,[Fx]:n.NOTEQUAL};function We(S,v){if(v.type===ii&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===zn||v.magFilter===bu||v.magFilter===Ra||v.magFilter===or||v.minFilter===zn||v.minFilter===bu||v.minFilter===Ra||v.minFilter===or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,se[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,se[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,se[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,_e[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Dn||v.minFilter!==Ra&&v.minFilter!==or||v.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function pt(S,v){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",D));let $=v.source,Z=f.get($);Z===void 0&&(Z={},f.set($,Z));let H=X(v);if(H!==S.__cacheKey){Z[H]===void 0&&(Z[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[H].usedTimes++;let ye=Z[S.__cacheKey];ye!==void 0&&(Z[S.__cacheKey].usedTimes--,ye.usedTimes===0&&M(v)),S.__cacheKey=H,S.__webglTexture=Z[H].texture}return O}function W(S,v,O){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);let Z=pt(S,v),H=v.source;t.bindTexture($,S.__webglTexture,n.TEXTURE0+O);let ye=i.get(H);if(H.version!==ye.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);let ae=nt.getPrimaries(nt.workingColorSpace),fe=v.colorSpace===Ii?null:nt.getPrimaries(v.colorSpace),et=v.colorSpace===Ii||ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Q=_(v.image,!1,r.maxTextureSize);Q=vt(v,Q);let pe=s.convert(v.format,v.colorSpace),be=s.convert(v.type),Ie=b(v.internalFormat,pe,be,v.colorSpace,v.isVideoTexture);We($,v);let me,Ze=v.mipmaps,Ve=v.isVideoTexture!==!0,gt=ye.__version===void 0||Z===!0,I=H.dataReady,ie=P(v,Q);if(v.isDepthTexture)Ie=E(v.format===kr,v.type),gt&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ie,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ie,Q.width,Q.height,0,pe,be,null));else if(v.isDataTexture)if(Ze.length>0){Ve&&gt&&t.texStorage2D(n.TEXTURE_2D,ie,Ie,Ze[0].width,Ze[0].height);for(let V=0,q=Ze.length;V<q;V++)me=Ze[V],Ve?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,me.width,me.height,pe,be,me.data):t.texImage2D(n.TEXTURE_2D,V,Ie,me.width,me.height,0,pe,be,me.data);v.generateMipmaps=!1}else Ve?(gt&&t.texStorage2D(n.TEXTURE_2D,ie,Ie,Q.width,Q.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,pe,be,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,Q.width,Q.height,0,pe,be,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ie,Ze[0].width,Ze[0].height,Q.depth);for(let V=0,q=Ze.length;V<q;V++)if(me=Ze[V],v.format!==In)if(pe!==null)if(Ve){if(I)if(v.layerUpdates.size>0){let le=fm(me.width,me.height,v.format,v.type);for(let ce of v.layerUpdates){let ke=me.data.subarray(ce*le/me.data.BYTES_PER_ELEMENT,(ce+1)*le/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ce,me.width,me.height,1,pe,ke)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,Q.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Ie,me.width,me.height,Q.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,Q.depth,pe,be,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Ie,me.width,me.height,Q.depth,0,pe,be,me.data)}else{Ve&&gt&&t.texStorage2D(n.TEXTURE_2D,ie,Ie,Ze[0].width,Ze[0].height);for(let V=0,q=Ze.length;V<q;V++)me=Ze[V],v.format!==In?pe!==null?Ve?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Ie,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,me.width,me.height,pe,be,me.data):t.texImage2D(n.TEXTURE_2D,V,Ie,me.width,me.height,0,pe,be,me.data)}else if(v.isDataArrayTexture)if(Ve){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ie,Q.width,Q.height,Q.depth),I)if(v.layerUpdates.size>0){let V=fm(Q.width,Q.height,v.format,v.type);for(let q of v.layerUpdates){let le=Q.data.subarray(q*V/Q.data.BYTES_PER_ELEMENT,(q+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,pe,be,le)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,be,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,Q.width,Q.height,Q.depth,0,pe,be,Q.data);else if(v.isData3DTexture)Ve?(gt&&t.texStorage3D(n.TEXTURE_3D,ie,Ie,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,be,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,Q.width,Q.height,Q.depth,0,pe,be,Q.data);else if(v.isFramebufferTexture){if(gt)if(Ve)t.texStorage2D(n.TEXTURE_2D,ie,Ie,Q.width,Q.height);else{let V=Q.width,q=Q.height;for(let le=0;le<ie;le++)t.texImage2D(n.TEXTURE_2D,le,Ie,V,q,0,pe,be,null),V>>=1,q>>=1}}else if(Ze.length>0){if(Ve&&gt){let V=Me(Ze[0]);t.texStorage2D(n.TEXTURE_2D,ie,Ie,V.width,V.height)}for(let V=0,q=Ze.length;V<q;V++)me=Ze[V],Ve?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe,be,me):t.texImage2D(n.TEXTURE_2D,V,Ie,pe,be,me);v.generateMipmaps=!1}else if(Ve){if(gt){let V=Me(Q);t.texStorage2D(n.TEXTURE_2D,ie,Ie,V.width,V.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,be,Q)}else t.texImage2D(n.TEXTURE_2D,0,Ie,pe,be,Q);m(v)&&h($),ye.__version=H.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function te(S,v,O){if(v.image.length!==6)return;let $=pt(S,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);let H=i.get(Z);if(Z.version!==H.__version||$===!0){t.activeTexture(n.TEXTURE0+O);let ye=nt.getPrimaries(nt.workingColorSpace),ae=v.colorSpace===Ii?null:nt.getPrimaries(v.colorSpace),fe=v.colorSpace===Ii||ye===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let et=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let q=0;q<6;q++)!et&&!Q?pe[q]=_(v.image[q],!0,r.maxCubemapSize):pe[q]=Q?v.image[q].image:v.image[q],pe[q]=vt(v,pe[q]);let be=pe[0],Ie=s.convert(v.format,v.colorSpace),me=s.convert(v.type),Ze=b(v.internalFormat,Ie,me,v.colorSpace),Ve=v.isVideoTexture!==!0,gt=H.__version===void 0||$===!0,I=Z.dataReady,ie=P(v,be);We(n.TEXTURE_CUBE_MAP,v);let V;if(et){Ve&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Ze,be.width,be.height);for(let q=0;q<6;q++){V=pe[q].mipmaps;for(let le=0;le<V.length;le++){let ce=V[le];v.format!==In?Ie!==null?Ve?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ce.width,ce.height,Ie,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Ze,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ce.width,ce.height,Ie,me,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Ze,ce.width,ce.height,0,Ie,me,ce.data)}}}else{if(V=v.mipmaps,Ve&&gt){V.length>0&&ie++;let q=Me(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Ze,q.width,q.height)}for(let q=0;q<6;q++)if(Q){Ve?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,pe[q].width,pe[q].height,Ie,me,pe[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ze,pe[q].width,pe[q].height,0,Ie,me,pe[q].data);for(let le=0;le<V.length;le++){let ke=V[le].image[q].image;Ve?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,ke.width,ke.height,Ie,me,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Ze,ke.width,ke.height,0,Ie,me,ke.data)}}else{Ve?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ie,me,pe[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ze,Ie,me,pe[q]);for(let le=0;le<V.length;le++){let ce=V[le];Ve?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,Ie,me,ce.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Ze,Ie,me,ce.image[q])}}}m(v)&&h(n.TEXTURE_CUBE_MAP),H.__version=Z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ve(S,v,O,$,Z,H){let ye=s.convert(O.format,O.colorSpace),ae=s.convert(O.type),fe=b(O.internalFormat,ye,ae,O.colorSpace),et=i.get(v),Q=i.get(O);if(Q.__renderTarget=v,!et.__hasExternalTextures){let pe=Math.max(1,v.width>>H),be=Math.max(1,v.height>>H);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,H,fe,pe,be,v.depth,0,ye,ae,null):t.texImage2D(Z,H,fe,pe,be,0,ye,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Ye(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Z,Q.__webglTexture,0,Xe(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Z,Q.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(S,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){let $=v.depthTexture,Z=$&&$.isDepthTexture?$.type:null,H=E(v.stencilBuffer,Z),ye=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Xe(v);Ye(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,H,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,H,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,H,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,S)}else{let $=v.textures;for(let Z=0;Z<$.length;Z++){let H=$[Z],ye=s.convert(H.format,H.colorSpace),ae=s.convert(H.type),fe=b(H.internalFormat,ye,ae,H.colorSpace),et=Xe(v);O&&Ye(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,fe,v.width,v.height):Ye(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let Z=$.__webglTexture,H=Xe(v);if(v.depthTexture.format===Or)Ye(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===kr)Ye(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Fe(S){let v=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let $=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=$}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Te(v.__webglFramebuffer,S)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),oe(v.__webglDepthbuffer[$],S,!1);else{let Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,H)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),oe(v.__webglDepthbuffer,S,!1);else{let $=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(S,v,O){let $=i.get(S);v!==void 0&&ve($.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Fe(S)}function xt(S){let v=S.texture,O=i.get(S),$=i.get(v);S.addEventListener("dispose",C);let Z=S.textures,H=S.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,o.memory.textures++),H){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let fe=0;fe<v.mipmaps.length;fe++)O.__webglFramebuffer[ae][fe]=n.createFramebuffer()}else O.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)O.__webglFramebuffer[ae]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ae=0,fe=Z.length;ae<fe;ae++){let et=i.get(Z[ae]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&Ye(S)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){let fe=Z[ae];O.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);let et=s.convert(fe.format,fe.colorSpace),Q=s.convert(fe.type),pe=b(fe.internalFormat,et,Q,fe.colorSpace,S.isXRRenderTarget===!0),be=Xe(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,pe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),We(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(O.__webglFramebuffer[ae][fe],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else ve(O.__webglFramebuffer[ae],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ae=0,fe=Z.length;ae<fe;ae++){let et=Z[ae],Q=i.get(et);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),We(n.TEXTURE_2D,et),ve(O.__webglFramebuffer,S,et,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(et)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),We(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(O.__webglFramebuffer[fe],S,v,n.COLOR_ATTACHMENT0,ae,fe);else ve(O.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,ae,0);m(v)&&h(ae),t.unbindTexture()}S.depthBuffer&&Fe(S)}function Qe(S){let v=S.textures;for(let O=0,$=v.length;O<$;O++){let Z=v[O];if(m(Z)){let H=w(S),ye=i.get(Z).__webglTexture;t.bindTexture(H,ye),h(H),t.unbindTexture()}}}let wt=[],T=[];function yn(S){if(S.samples>0){if(Ye(S)===!1){let v=S.textures,O=S.width,$=S.height,Z=n.COLOR_BUFFER_BIT,H=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(S),ae=v.length>1;if(ae)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let et=i.get(v[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,O,$,0,0,O,$,Z,n.NEAREST),c===!0&&(wt.length=0,T.length=0,wt.push(n.COLOR_ATTACHMENT0+fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(wt.push(H),T.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let et=i.get(v[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Xe(S){return Math.min(r.maxSamples,S.samples)}function Ye(S){let v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function xe(S){let v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function vt(S,v){let O=S.colorSpace,$=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==Br&&O!==Ii&&(nt.getTransfer(O)===dt?($!==In||Z!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Me(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=je,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ye}function XN(n,e){function t(i,r=Ii){let s,o=nt.getTransfer(r);if(i===ni)return n.UNSIGNED_BYTE;if(i===Cu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zp)return n.BYTE;if(i===Jp)return n.SHORT;if(i===co)return n.UNSIGNED_SHORT;if(i===wu)return n.INT;if(i===ar)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===lo)return n.HALF_FLOAT;if(i===Qp)return n.ALPHA;if(i===em)return n.RGB;if(i===In)return n.RGBA;if(i===tm)return n.LUMINANCE;if(i===nm)return n.LUMINANCE_ALPHA;if(i===Or)return n.DEPTH_COMPONENT;if(i===kr)return n.DEPTH_STENCIL;if(i===im)return n.RED;if(i===Du)return n.RED_INTEGER;if(i===rm)return n.RG;if(i===Au)return n.RG_INTEGER;if(i===Iu)return n.RGBA_INTEGER;if(i===Na||i===Pa||i===La||i===Oa)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===La)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ru||i===Nu||i===Pu||i===Lu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ou||i===Fu||i===Uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ou||i===Fu)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Uu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ku||i===Bu||i===Vu||i===zu||i===Hu||i===Gu||i===Wu||i===ju||i===$u||i===qu||i===Xu||i===Yu||i===Zu||i===Ju)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ku)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ju)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$u)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zu)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ju)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===Ku||i===Qu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fa)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ku)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sm||i===ed||i===td||i===nd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ed)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===td)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var YN={type:"move"},Ba=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YN)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Gr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ZN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JN=`
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

}`,wm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new cr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Hn({vertexShader:ZN,fragmentShader:JN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new Da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cm=class extends Ci{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null,_=new wm,m=t.getContextAttributes(),h=null,w=null,b=[],E=[],P=new ht,D=null,C=new qt;C.viewport=new bt;let L=new qt;L.viewport=new bt;let M=[C,L],x=new hu,A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=b[W];return te===void 0&&(te=new Ba,b[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=b[W];return te===void 0&&(te=new Ba,b[W]=te),te.getGripSpace()},this.getHand=function(W){let te=b[W];return te===void 0&&(te=new Ba,b[W]=te),te.getHandSpace()};function B(W){let te=E.indexOf(W.inputSource);if(te===-1)return;let ve=b[te];ve!==void 0&&(ve.update(W.inputSource,W.frame,l||o),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<b.length;W++){let te=E[W];te!==null&&(E[W]=null,b[W].disconnect(te))}A=null,G=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,w=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(W){return ns(this,null,function*(){if(r=W,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),D=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Qn(p.framebufferWidth,p.framebufferHeight,{format:In,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ve=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?kr:Or,ve=m.stencil?qr:ar);let Te={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Te),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Qn(f.textureWidth,f.textureHeight,{format:In,type:ni,depthTexture:new Ta(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),pt.setContext(r),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(W){for(let te=0;te<W.removed.length;te++){let ve=W.removed[te],oe=E.indexOf(ve);oe>=0&&(E[oe]=null,b[oe].disconnect(ve))}for(let te=0;te<W.added.length;te++){let ve=W.added[te],oe=E.indexOf(ve);if(oe===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=E.length){E.push(ve),oe=Fe;break}else if(E[Fe]===null){E[Fe]=ve,oe=Fe;break}if(oe===-1)break}let Te=b[oe];Te&&Te.connect(ve)}}let j=new k,J=new k;function z(W,te,ve){j.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);let oe=j.distanceTo(J),Te=te.projectionMatrix.elements,Fe=ve.projectionMatrix.elements,je=Te[14]/(Te[10]-1),xt=Te[14]/(Te[10]+1),Qe=(Te[9]+1)/Te[5],wt=(Te[9]-1)/Te[5],T=(Te[8]-1)/Te[0],yn=(Fe[8]+1)/Fe[0],Xe=je*T,Ye=je*yn,xe=oe/(-T+yn),vt=xe*-T;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(vt),W.translateZ(xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Te[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Me=je+xe,S=xt+xe,v=Xe-vt,O=Ye+(oe-vt),$=Qe*xt/S*Me,Z=wt*xt/S*Me;W.projectionMatrix.makePerspective(v,O,$,Z,Me,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function se(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let te=W.near,ve=W.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),x.near=L.near=C.near=te,x.far=L.far=C.far=ve,(A!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,G=x.far),C.layers.mask=W.layers.mask|2,L.layers.mask=W.layers.mask|4,x.layers.mask=C.layers.mask|L.layers.mask;let oe=W.parent,Te=x.cameras;se(x,oe);for(let Fe=0;Fe<Te.length;Fe++)se(Te[Fe],oe);Te.length===2?z(x,C,L):x.projectionMatrix.copy(C.projectionMatrix),de(W,x,oe)};function de(W,te,ve){ve===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Zl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let _e=null;function We(W,te){if(u=te.getViewerPose(l||o),g=te,u!==null){let ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let oe=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Fe=0;Fe<ve.length;Fe++){let je=ve[Fe],xt=null;if(p!==null)xt=p.getViewport(je);else{let wt=d.getViewSubImage(f,je);xt=wt.viewport,Fe===0&&(e.setRenderTargetTextures(w,wt.colorTexture,f.ignoreDepthValues?void 0:wt.depthStencilTexture),e.setRenderTarget(w))}let Qe=M[Fe];Qe===void 0&&(Qe=new qt,Qe.layers.enable(Fe),Qe.viewport=new bt,M[Fe]=Qe),Qe.matrix.fromArray(je.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(je.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(xt.x,xt.y,xt.width,xt.height),Fe===0&&(x.matrix.copy(Qe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(Qe)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){let Fe=d.getDepthInformation(ve[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,r.renderState)}}for(let ve=0;ve<b.length;ve++){let oe=E[ve],Te=b[ve];oe!==null&&Te!==void 0&&Te.update(oe,te,l||o)}_e&&_e(W,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let pt=new pM;pt.setAnimationLoop(We),this.setAnimationLoop=function(W){_e=W},this.dispose=function(){}}},Kr=new Vr,KN=new Nt;function QN(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,lm(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,w,b,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,w,b):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Zt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Zt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let w=e.get(h),b=w.envMap,E=w.envMapRotation;b&&(m.envMap.value=b,Kr.copy(E),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),m.envMapRotation.value.setFromMatrix4(KN.makeRotationFromEuler(Kr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,w,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Zt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){let w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eP(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){let E=b.program;i.uniformBlockBinding(w,E)}function l(w,b){let E=r[w.id];E===void 0&&(g(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",m));let P=b.program;i.updateUBOMapping(w,P);let D=e.render.frame;s[w.id]!==D&&(f(w),s[w.id]=D)}function u(w){let b=d();w.__bindingPointIndex=b;let E=n.createBuffer(),P=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let b=r[w.id],E=w.uniforms,P=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,C=E.length;D<C;D++){let L=Array.isArray(E[D])?E[D]:[E[D]];for(let M=0,x=L.length;M<x;M++){let A=L[M];if(p(A,D,M,P)===!0){let G=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],X=0;for(let Y=0;Y<B.length;Y++){let j=B[Y],J=_(j);typeof j=="number"||typeof j=="boolean"?(A.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,G+X,A.__data)):j.isMatrix3?(A.__data[0]=j.elements[0],A.__data[1]=j.elements[1],A.__data[2]=j.elements[2],A.__data[3]=0,A.__data[4]=j.elements[3],A.__data[5]=j.elements[4],A.__data[6]=j.elements[5],A.__data[7]=0,A.__data[8]=j.elements[6],A.__data[9]=j.elements[7],A.__data[10]=j.elements[8],A.__data[11]=0):(j.toArray(A.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,b,E,P){let D=w.value,C=b+"_"+E;if(P[C]===void 0)return typeof D=="number"||typeof D=="boolean"?P[C]=D:P[C]=D.clone(),!0;{let L=P[C];if(typeof D=="number"||typeof D=="boolean"){if(L!==D)return P[C]=D,!0}else if(L.equals(D)===!1)return L.copy(D),!0}return!1}function g(w){let b=w.uniforms,E=0,P=16;for(let C=0,L=b.length;C<L;C++){let M=Array.isArray(b[C])?b[C]:[b[C]];for(let x=0,A=M.length;x<A;x++){let G=M[x],B=Array.isArray(G.value)?G.value:[G.value];for(let X=0,Y=B.length;X<Y;X++){let j=B[X],J=_(j),z=E%P,se=z%J.boundary,de=z+se;E+=se,de!==0&&P-de<J.storage&&(E+=P-de),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=J.storage}}}let D=E%P;return D>0&&(E+=P-D),w.__size=E,w.__cache={},this}function _(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){let b=w.target;b.removeEventListener("dispose",m);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(let w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}var ad=class{constructor(e={}){let{canvas:t=Bx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,h=null,w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=Ai,this.toneMappingExposure=1;let E=this,P=!1,D=0,C=0,L=null,M=-1,x=null,A=new bt,G=new bt,B=null,X=new rt(0),Y=0,j=t.width,J=t.height,z=1,se=null,de=null,_e=new bt(0,0,j,J),We=new bt(0,0,j,J),pt=!1,W=new Ca,te=!1,ve=!1,oe=new Nt,Te=new Nt,Fe=new k,je=new bt,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function wt(){return L===null?z:1}let T=i;function yn(y,R){return t.getContext(y,R)}try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pu}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),T===null){let R="webgl2";if(T=yn(R,y),T===null)throw yn(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Xe,Ye,xe,vt,Me,S,v,O,$,Z,H,ye,ae,fe,et,Q,pe,be,Ie,me,Ze,Ve,gt,I;function ie(){Xe=new v1(T),Xe.init(),Ve=new XN(T,Xe),Ye=new d1(T,Xe,e,Ve),xe=new $N(T,Xe),Ye.reverseDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),vt=new x1(T),Me=new PN,S=new qN(T,Xe,xe,Me,Ye,Ve,vt),v=new h1(E),O=new g1(E),$=new TA(T),gt=new l1(T,$),Z=new y1(T,$,vt,gt),H=new S1(T,Z,$,vt),Ie=new M1(T,Ye,S),Q=new f1(Me),ye=new NN(E,v,O,Xe,Ye,gt,Q),ae=new QN(E,Me),fe=new ON,et=new zN(Xe),be=new c1(E,v,O,xe,H,p,c),pe=new WN(E,H,Ye),I=new eP(T,vt,Ye,xe),me=new u1(T,Xe,vt),Ze=new _1(T,Xe,vt),vt.programs=ye.programs,E.capabilities=Ye,E.extensions=Xe,E.properties=Me,E.renderLists=fe,E.shadowMap=pe,E.state=xe,E.info=vt}ie();let V=new Cm(E,T);this.xr=V,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let y=Xe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Xe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(j,J,!1))},this.getSize=function(y){return y.set(j,J)},this.setSize=function(y,R,F=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,J=R,t.width=Math.floor(y*z),t.height=Math.floor(R*z),F===!0&&(t.style.width=y+"px",t.style.height=R+"px"),this.setViewport(0,0,y,R)},this.getDrawingBufferSize=function(y){return y.set(j*z,J*z).floor()},this.setDrawingBufferSize=function(y,R,F){j=y,J=R,z=F,t.width=Math.floor(y*F),t.height=Math.floor(R*F),this.setViewport(0,0,y,R)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(_e)},this.setViewport=function(y,R,F,U){y.isVector4?_e.set(y.x,y.y,y.z,y.w):_e.set(y,R,F,U),xe.viewport(A.copy(_e).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(We)},this.setScissor=function(y,R,F,U){y.isVector4?We.set(y.x,y.y,y.z,y.w):We.set(y,R,F,U),xe.scissor(G.copy(We).multiplyScalar(z).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(y){xe.setScissorTest(pt=y)},this.setOpaqueSort=function(y){se=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(y=!0,R=!0,F=!0){let U=0;if(y){let N=!1;if(L!==null){let K=L.texture.format;N=K===Iu||K===Au||K===Du}if(N){let K=L.texture.type,re=K===ni||K===ar||K===co||K===qr||K===Cu||K===Tu,ue=be.getClearColor(),ge=be.getClearAlpha(),Re=ue.r,Pe=ue.g,Se=ue.b;re?(g[0]=Re,g[1]=Pe,g[2]=Se,g[3]=ge,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=Re,_[1]=Pe,_[2]=Se,_[3]=ge,T.clearBufferiv(T.COLOR,0,_))}else U|=T.COLOR_BUFFER_BIT}R&&(U|=T.DEPTH_BUFFER_BIT),F&&(U|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),be.dispose(),fe.dispose(),et.dispose(),Me.dispose(),v.dispose(),O.dispose(),H.dispose(),gt.dispose(),I.dispose(),ye.dispose(),V.dispose(),V.removeEventListener("sessionstart",Dm),V.removeEventListener("sessionend",Am),lr.stop()};function q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let y=vt.autoReset,R=pe.enabled,F=pe.autoUpdate,U=pe.needsUpdate,N=pe.type;ie(),vt.autoReset=y,pe.enabled=R,pe.autoUpdate=F,pe.needsUpdate=U,pe.type=N}function ce(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ke(y){let R=y.target;R.removeEventListener("dispose",ke),Mt(R)}function Mt(y){Gt(y),Me.remove(y)}function Gt(y){let R=Me.get(y).programs;R!==void 0&&(R.forEach(function(F){ye.releaseProgram(F)}),y.isShaderMaterial&&ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,R,F,U,N,K){R===null&&(R=xt);let re=N.isMesh&&N.matrixWorld.determinant()<0,ue=xM(y,R,F,U,N);xe.setMaterial(U,re);let ge=F.index,Re=1;if(U.wireframe===!0){if(ge=Z.getWireframeAttribute(F),ge===void 0)return;Re=2}let Pe=F.drawRange,Se=F.attributes.position,tt=Pe.start*Re,st=(Pe.start+Pe.count)*Re;K!==null&&(tt=Math.max(tt,K.start*Re),st=Math.min(st,(K.start+K.count)*Re)),ge!==null?(tt=Math.max(tt,0),st=Math.min(st,ge.count)):Se!=null&&(tt=Math.max(tt,0),st=Math.min(st,Se.count));let Dt=st-tt;if(Dt<0||Dt===1/0)return;gt.setup(N,U,ue,F,ge);let St,it=me;if(ge!==null&&(St=$.get(ge),it=Ze,it.setIndex(St)),N.isMesh)U.wireframe===!0?(xe.setLineWidth(U.wireframeLinewidth*wt()),it.setMode(T.LINES)):it.setMode(T.TRIANGLES);else if(N.isLine){let Ee=U.linewidth;Ee===void 0&&(Ee=1),xe.setLineWidth(Ee*wt()),N.isLineSegments?it.setMode(T.LINES):N.isLineLoop?it.setMode(T.LINE_LOOP):it.setMode(T.LINE_STRIP)}else N.isPoints?it.setMode(T.POINTS):N.isSprite&&it.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ee=N._multiDrawStarts,Bt=N._multiDrawCounts,ot=N._multiDrawCount,Nn=ge?$.get(ge).bytesPerElement:1,ts=Me.get(U).currentProgram.getUniforms();for(let rn=0;rn<ot;rn++)ts.setValue(T,"_gl_DrawID",rn),it.render(Ee[rn]/Nn,Bt[rn])}else if(N.isInstancedMesh)it.renderInstances(tt,Dt,N.count);else if(F.isInstancedBufferGeometry){let Ee=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Bt=Math.min(F.instanceCount,Ee);it.renderInstances(tt,Dt,Bt)}else it.render(tt,Dt)};function ct(y,R,F){y.transparent===!0&&y.side===ti&&y.forceSinglePass===!1?(y.side=Zt,y.needsUpdate=!0,za(y,R,F),y.side=wi,y.needsUpdate=!0,za(y,R,F),y.side=ti):za(y,R,F)}this.compile=function(y,R,F=null){F===null&&(F=y),h=et.get(F),h.init(R),b.push(h),F.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),y!==F&&y.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();let U=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let K=N.material;if(K)if(Array.isArray(K))for(let re=0;re<K.length;re++){let ue=K[re];ct(ue,F,N),U.add(ue)}else ct(K,F,N),U.add(K)}),b.pop(),h=null,U},this.compileAsync=function(y,R,F=null){let U=this.compile(y,R,F);return new Promise(N=>{function K(){if(U.forEach(function(re){Me.get(re).currentProgram.isReady()&&U.delete(re)}),U.size===0){N(y);return}setTimeout(K,10)}Xe.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let Rn=null;function si(y){Rn&&Rn(y)}function Dm(){lr.stop()}function Am(){lr.start()}let lr=new pM;lr.setAnimationLoop(si),typeof self<"u"&&lr.setContext(self),this.setAnimationLoop=function(y){Rn=y,V.setAnimationLoop(y),y===null?lr.stop():lr.start()},V.addEventListener("sessionstart",Dm),V.addEventListener("sessionend",Am),this.render=function(y,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(R),R=V.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,R,L),h=et.get(y,b.length),h.init(R),b.push(h),Te.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),W.setFromProjectionMatrix(Te),ve=this.localClippingEnabled,te=Q.init(this.clippingPlanes,ve),m=fe.get(y,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){let K=E.xr.getDepthSensingMesh();K!==null&&ld(K,R,-1/0,E.sortObjects)}ld(y,R,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(se,de),Qe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Qe&&be.addToRenderList(m,y),this.info.render.frame++,te===!0&&Q.beginShadows();let F=h.state.shadowsArray;pe.render(F,y,R),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let U=m.opaque,N=m.transmissive;if(h.setupLights(),R.isArrayCamera){let K=R.cameras;if(N.length>0)for(let re=0,ue=K.length;re<ue;re++){let ge=K[re];Rm(U,N,y,ge)}Qe&&be.render(y);for(let re=0,ue=K.length;re<ue;re++){let ge=K[re];Im(m,y,ge,ge.viewport)}}else N.length>0&&Rm(U,N,y,R),Qe&&be.render(y),Im(m,y,R);L!==null&&(S.updateMultisampleRenderTarget(L),S.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(E,y,R),gt.resetDefaultState(),M=-1,x=null,b.pop(),b.length>0?(h=b[b.length-1],te===!0&&Q.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ld(y,R,F,U){if(y.visible===!1)return;if(y.layers.test(R.layers)){if(y.isGroup)F=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(R);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){U&&je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Te);let re=H.update(y),ue=y.material;ue.visible&&m.push(y,re,ue,F,je.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){let re=H.update(y),ue=y.material;if(U&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),je.copy(y.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),je.copy(re.boundingSphere.center)),je.applyMatrix4(y.matrixWorld).applyMatrix4(Te)),Array.isArray(ue)){let ge=re.groups;for(let Re=0,Pe=ge.length;Re<Pe;Re++){let Se=ge[Re],tt=ue[Se.materialIndex];tt&&tt.visible&&m.push(y,re,tt,F,je.z,Se)}}else ue.visible&&m.push(y,re,ue,F,je.z,null)}}let K=y.children;for(let re=0,ue=K.length;re<ue;re++)ld(K[re],R,F,U)}function Im(y,R,F,U){let N=y.opaque,K=y.transmissive,re=y.transparent;h.setupLightsView(F),te===!0&&Q.setGlobalState(E.clippingPlanes,F),U&&xe.viewport(A.copy(U)),N.length>0&&Va(N,R,F),K.length>0&&Va(K,R,F),re.length>0&&Va(re,R,F),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Rm(y,R,F,U){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[U.id]===void 0&&(h.state.transmissionRenderTarget[U.id]=new Qn(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?lo:ni,minFilter:or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let K=h.state.transmissionRenderTarget[U.id],re=U.viewport||A;K.setSize(re.z,re.w);let ue=E.getRenderTarget();E.setRenderTarget(K),E.getClearColor(X),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),Qe&&be.render(F);let ge=E.toneMapping;E.toneMapping=Ai;let Re=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),h.setupLightsView(U),te===!0&&Q.setGlobalState(E.clippingPlanes,U),Va(y,F,U),S.updateMultisampleRenderTarget(K),S.updateRenderTargetMipmap(K),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Se=0,tt=R.length;Se<tt;Se++){let st=R[Se],Dt=st.object,St=st.geometry,it=st.material,Ee=st.group;if(it.side===ti&&Dt.layers.test(U.layers)){let Bt=it.side;it.side=Zt,it.needsUpdate=!0,Nm(Dt,F,U,St,it,Ee),it.side=Bt,it.needsUpdate=!0,Pe=!0}}Pe===!0&&(S.updateMultisampleRenderTarget(K),S.updateRenderTargetMipmap(K))}E.setRenderTarget(ue),E.setClearColor(X,Y),Re!==void 0&&(U.viewport=Re),E.toneMapping=ge}function Va(y,R,F){let U=R.isScene===!0?R.overrideMaterial:null;for(let N=0,K=y.length;N<K;N++){let re=y[N],ue=re.object,ge=re.geometry,Re=U===null?re.material:U,Pe=re.group;ue.layers.test(F.layers)&&Nm(ue,R,F,ge,Re,Pe)}}function Nm(y,R,F,U,N,K){y.onBeforeRender(E,R,F,U,N,K),y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(E,R,F,U,y,K),N.transparent===!0&&N.side===ti&&N.forceSinglePass===!1?(N.side=Zt,N.needsUpdate=!0,E.renderBufferDirect(F,R,U,N,y,K),N.side=wi,N.needsUpdate=!0,E.renderBufferDirect(F,R,U,N,y,K),N.side=ti):E.renderBufferDirect(F,R,U,N,y,K),y.onAfterRender(E,R,F,U,N,K)}function za(y,R,F){R.isScene!==!0&&(R=xt);let U=Me.get(y),N=h.state.lights,K=h.state.shadowsArray,re=N.state.version,ue=ye.getParameters(y,N.state,K,R,F),ge=ye.getProgramCacheKey(ue),Re=U.programs;U.environment=y.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(y.isMeshStandardMaterial?O:v).get(y.envMap||U.environment),U.envMapRotation=U.environment!==null&&y.envMap===null?R.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",ke),Re=new Map,U.programs=Re);let Pe=Re.get(ge);if(Pe!==void 0){if(U.currentProgram===Pe&&U.lightsStateVersion===re)return Lm(y,ue),Pe}else ue.uniforms=ye.getUniforms(y),y.onBeforeCompile(ue,E),Pe=ye.acquireProgram(ue,ge),Re.set(ge,Pe),U.uniforms=ue.uniforms;let Se=U.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Se.clippingPlanes=Q.uniform),Lm(y,ue),U.needsLights=SM(y),U.lightsStateVersion=re,U.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),U.currentProgram=Pe,U.uniformsList=null,Pe}function Pm(y){if(y.uniformsList===null){let R=y.currentProgram.getUniforms();y.uniformsList=ho.seqWithValue(R.seq,y.uniforms)}return y.uniformsList}function Lm(y,R){let F=Me.get(y);F.outputColorSpace=R.outputColorSpace,F.batching=R.batching,F.batchingColor=R.batchingColor,F.instancing=R.instancing,F.instancingColor=R.instancingColor,F.instancingMorph=R.instancingMorph,F.skinning=R.skinning,F.morphTargets=R.morphTargets,F.morphNormals=R.morphNormals,F.morphColors=R.morphColors,F.morphTargetsCount=R.morphTargetsCount,F.numClippingPlanes=R.numClippingPlanes,F.numIntersection=R.numClipIntersection,F.vertexAlphas=R.vertexAlphas,F.vertexTangents=R.vertexTangents,F.toneMapping=R.toneMapping}function xM(y,R,F,U,N){R.isScene!==!0&&(R=xt),S.resetTextureUnits();let K=R.fog,re=U.isMeshStandardMaterial?R.environment:null,ue=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Br,ge=(U.isMeshStandardMaterial?O:v).get(U.envMap||re),Re=U.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pe=!!F.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Se=!!F.morphAttributes.position,tt=!!F.morphAttributes.normal,st=!!F.morphAttributes.color,Dt=Ai;U.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Dt=E.toneMapping);let St=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=St!==void 0?St.length:0,Ee=Me.get(U),Bt=h.state.lights;if(te===!0&&(ve===!0||y!==x)){let Yt=y===x&&U.id===M;Q.setState(U,y,Yt)}let ot=!1;U.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Bt.state.version||Ee.outputColorSpace!==ue||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==ge||U.fog===!0&&Ee.fog!==K||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Q.numPlanes||Ee.numIntersection!==Q.numIntersection)||Ee.vertexAlphas!==Re||Ee.vertexTangents!==Pe||Ee.morphTargets!==Se||Ee.morphNormals!==tt||Ee.morphColors!==st||Ee.toneMapping!==Dt||Ee.morphTargetsCount!==it)&&(ot=!0):(ot=!0,Ee.__version=U.version);let Nn=Ee.currentProgram;ot===!0&&(Nn=za(U,R,N));let ts=!1,rn=!1,mo=!1,_t=Nn.getUniforms(),_n=Ee.uniforms;if(xe.useProgram(Nn.program)&&(ts=!0,rn=!0,mo=!0),U.id!==M&&(M=U.id,rn=!0),ts||x!==y){xe.buffers.depth.getReversed()?(oe.copy(y.projectionMatrix),zx(oe),Hx(oe),_t.setValue(T,"projectionMatrix",oe)):_t.setValue(T,"projectionMatrix",y.projectionMatrix),_t.setValue(T,"viewMatrix",y.matrixWorldInverse);let Jt=_t.map.cameraPosition;Jt!==void 0&&Jt.setValue(T,Fe.setFromMatrixPosition(y.matrixWorld)),Ye.logarithmicDepthBuffer&&_t.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&_t.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,rn=!0,mo=!0)}if(N.isSkinnedMesh){_t.setOptional(T,N,"bindMatrix"),_t.setOptional(T,N,"bindMatrixInverse");let Yt=N.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),_t.setValue(T,"boneTexture",Yt.boneTexture,S))}N.isBatchedMesh&&(_t.setOptional(T,N,"batchingTexture"),_t.setValue(T,"batchingTexture",N._matricesTexture,S),_t.setOptional(T,N,"batchingIdTexture"),_t.setValue(T,"batchingIdTexture",N._indirectTexture,S),_t.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&_t.setValue(T,"batchingColorTexture",N._colorsTexture,S));let xn=F.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Ie.update(N,F,Nn),(rn||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,_t.setValue(T,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(_n.envMap.value=ge,_n.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&R.environment!==null&&(_n.envMapIntensity.value=R.environmentIntensity),rn&&(_t.setValue(T,"toneMappingExposure",E.toneMappingExposure),Ee.needsLights&&MM(_n,mo),K&&U.fog===!0&&ae.refreshFogUniforms(_n,K),ae.refreshMaterialUniforms(_n,U,z,J,h.state.transmissionRenderTarget[y.id]),ho.upload(T,Pm(Ee),_n,S)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ho.upload(T,Pm(Ee),_n,S),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&_t.setValue(T,"center",N.center),_t.setValue(T,"modelViewMatrix",N.modelViewMatrix),_t.setValue(T,"normalMatrix",N.normalMatrix),_t.setValue(T,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let Yt=U.uniformsGroups;for(let Jt=0,ud=Yt.length;Jt<ud;Jt++){let ur=Yt[Jt];I.update(ur,Nn),I.bind(ur,Nn)}}return Nn}function MM(y,R){y.ambientLightColor.needsUpdate=R,y.lightProbe.needsUpdate=R,y.directionalLights.needsUpdate=R,y.directionalLightShadows.needsUpdate=R,y.pointLights.needsUpdate=R,y.pointLightShadows.needsUpdate=R,y.spotLights.needsUpdate=R,y.spotLightShadows.needsUpdate=R,y.rectAreaLights.needsUpdate=R,y.hemisphereLights.needsUpdate=R}function SM(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,R,F){Me.get(y.texture).__webglTexture=R,Me.get(y.depthTexture).__webglTexture=F;let U=Me.get(y);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=F===void 0,U.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,R){let F=Me.get(y);F.__webglFramebuffer=R,F.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(y,R=0,F=0){L=y,D=R,C=F;let U=!0,N=null,K=!1,re=!1;if(y){let ge=Me.get(y);if(ge.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(T.FRAMEBUFFER,null),U=!1;else if(ge.__webglFramebuffer===void 0)S.setupRenderTarget(y);else if(ge.__hasExternalTextures)S.rebindTextures(y,Me.get(y.texture).__webglTexture,Me.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Se=y.depthTexture;if(ge.__boundDepthTexture!==Se){if(Se!==null&&Me.has(Se)&&(y.width!==Se.image.width||y.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(y)}}let Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(re=!0);let Pe=Me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[R])?N=Pe[R][F]:N=Pe[R],K=!0):y.samples>0&&S.useMultisampledRTT(y)===!1?N=Me.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?N=Pe[F]:N=Pe,A.copy(y.viewport),G.copy(y.scissor),B=y.scissorTest}else A.copy(_e).multiplyScalar(z).floor(),G.copy(We).multiplyScalar(z).floor(),B=pt;if(xe.bindFramebuffer(T.FRAMEBUFFER,N)&&U&&xe.drawBuffers(y,N),xe.viewport(A),xe.scissor(G),xe.setScissorTest(B),K){let ge=Me.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+R,ge.__webglTexture,F)}else if(re){let ge=Me.get(y.texture),Re=R||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ge.__webglTexture,F||0,Re)}M=-1},this.readRenderTargetPixels=function(y,R,F,U,N,K,re){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){xe.bindFramebuffer(T.FRAMEBUFFER,ue);try{let ge=y.texture,Re=ge.format,Pe=ge.type;if(!Ye.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=y.width-U&&F>=0&&F<=y.height-N&&T.readPixels(R,F,U,N,Ve.convert(Re),Ve.convert(Pe),K)}finally{let ge=L!==null?Me.get(L).__webglFramebuffer:null;xe.bindFramebuffer(T.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=function(y,R,F,U,N,K,re){return ns(this,null,function*(){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){let ge=y.texture,Re=ge.format,Pe=ge.type;if(!Ye.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=y.width-U&&F>=0&&F<=y.height-N){xe.bindFramebuffer(T.FRAMEBUFFER,ue);let Se=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Se),T.bufferData(T.PIXEL_PACK_BUFFER,K.byteLength,T.STREAM_READ),T.readPixels(R,F,U,N,Ve.convert(Re),Ve.convert(Pe),0);let tt=L!==null?Me.get(L).__webglFramebuffer:null;xe.bindFramebuffer(T.FRAMEBUFFER,tt);let st=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),yield Vx(T,st,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Se),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,K),T.deleteBuffer(Se),T.deleteSync(st),K}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(y,R=null,F=0){y.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,y=arguments[1]);let U=Math.pow(2,-F),N=Math.floor(y.image.width*U),K=Math.floor(y.image.height*U),re=R!==null?R.x:0,ue=R!==null?R.y:0;S.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,F,0,0,re,ue,N,K),xe.unbindTexture()};let EM=T.createFramebuffer(),bM=T.createFramebuffer();this.copyTextureToTexture=function(y,R,F=null,U=null,N=0,K=null){y.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1],R=arguments[2],K=arguments[3]||0,F=null),K===null&&(N!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),K=N,N=0):K=0);let re,ue,ge,Re,Pe,Se,tt,st,Dt,St=y.isCompressedTexture?y.mipmaps[K]:y.image;if(F!==null)re=F.max.x-F.min.x,ue=F.max.y-F.min.y,ge=F.isBox3?F.max.z-F.min.z:1,Re=F.min.x,Pe=F.min.y,Se=F.isBox3?F.min.z:0;else{let xn=Math.pow(2,-N);re=Math.floor(St.width*xn),ue=Math.floor(St.height*xn),y.isDataArrayTexture?ge=St.depth:y.isData3DTexture?ge=Math.floor(St.depth*xn):ge=1,Re=0,Pe=0,Se=0}U!==null?(tt=U.x,st=U.y,Dt=U.z):(tt=0,st=0,Dt=0);let it=Ve.convert(R.format),Ee=Ve.convert(R.type),Bt;R.isData3DTexture?(S.setTexture3D(R,0),Bt=T.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(S.setTexture2DArray(R,0),Bt=T.TEXTURE_2D_ARRAY):(S.setTexture2D(R,0),Bt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,R.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,R.unpackAlignment);let ot=T.getParameter(T.UNPACK_ROW_LENGTH),Nn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ts=T.getParameter(T.UNPACK_SKIP_PIXELS),rn=T.getParameter(T.UNPACK_SKIP_ROWS),mo=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,St.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,St.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Re),T.pixelStorei(T.UNPACK_SKIP_ROWS,Pe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Se);let _t=y.isDataArrayTexture||y.isData3DTexture,_n=R.isDataArrayTexture||R.isData3DTexture;if(y.isDepthTexture){let xn=Me.get(y),Yt=Me.get(R),Jt=Me.get(xn.__renderTarget),ud=Me.get(Yt.__renderTarget);xe.bindFramebuffer(T.READ_FRAMEBUFFER,Jt.__webglFramebuffer),xe.bindFramebuffer(T.DRAW_FRAMEBUFFER,ud.__webglFramebuffer);for(let ur=0;ur<ge;ur++)_t&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Me.get(y).__webglTexture,N,Se+ur),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Me.get(R).__webglTexture,K,Dt+ur)),T.blitFramebuffer(Re,Pe,re,ue,tt,st,re,ue,T.DEPTH_BUFFER_BIT,T.NEAREST);xe.bindFramebuffer(T.READ_FRAMEBUFFER,null),xe.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||Me.has(y)){let xn=Me.get(y),Yt=Me.get(R);xe.bindFramebuffer(T.READ_FRAMEBUFFER,EM),xe.bindFramebuffer(T.DRAW_FRAMEBUFFER,bM);for(let Jt=0;Jt<ge;Jt++)_t?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xn.__webglTexture,N,Se+Jt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,xn.__webglTexture,N),_n?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Yt.__webglTexture,K,Dt+Jt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Yt.__webglTexture,K),N!==0?T.blitFramebuffer(Re,Pe,re,ue,tt,st,re,ue,T.COLOR_BUFFER_BIT,T.NEAREST):_n?T.copyTexSubImage3D(Bt,K,tt,st,Dt+Jt,Re,Pe,re,ue):T.copyTexSubImage2D(Bt,K,tt,st,Re,Pe,re,ue);xe.bindFramebuffer(T.READ_FRAMEBUFFER,null),xe.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else _n?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(Bt,K,tt,st,Dt,re,ue,ge,it,Ee,St.data):R.isCompressedArrayTexture?T.compressedTexSubImage3D(Bt,K,tt,st,Dt,re,ue,ge,it,St.data):T.texSubImage3D(Bt,K,tt,st,Dt,re,ue,ge,it,Ee,St):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,K,tt,st,re,ue,it,Ee,St.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,K,tt,st,St.width,St.height,it,St.data):T.texSubImage2D(T.TEXTURE_2D,K,tt,st,re,ue,it,Ee,St);T.pixelStorei(T.UNPACK_ROW_LENGTH,ot),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Nn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ts),T.pixelStorei(T.UNPACK_SKIP_ROWS,rn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,mo),K===0&&R.generateMipmaps&&T.generateMipmap(Bt),xe.unbindTexture()},this.copyTextureToTexture3D=function(y,R,F=null,U=null,N=0){return y.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,U=arguments[1]||null,y=arguments[2],R=arguments[3],N=arguments[4]||0),Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,R,F,U,N)},this.initRenderTarget=function(y){Me.get(y).__webglFramebuffer===void 0&&S.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),xe.unbindTexture()},this.resetState=function(){D=0,C=0,L=null,xe.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var tP=["myCanvas"],_M=(()=>{class n{constructor(){this.scene=new wa,this.box=new ir(1,1,1),this.material=new Hr({color:"red"}),this.mesh=new nn(this.box,this.material),this.size={width:800,height:600},this.camera=new qt(75,this.size.width/this.size.height)}ngAfterViewInit(){this.camera.position.z=3,this.scene.add(this.mesh),this.scene.add(this.camera),this.renderer=new ad({canvas:this.canvas.nativeElement}),this.renderer.setSize(this.size.width,this.size.height),this.renderer.render(this.scene,this.camera)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Yc({type:n,selectors:[["app-root"]],viewQuery:function(i,r){if(i&1&&f_(tP,5),i&2){let s;mh(s=gh())&&(r.canvas=s.first)}},decls:3,vars:0,consts:[["myCanvas",""],["touch-action","none","id","myCanvas"]],template:function(i,r){i&1&&Fo(0,"canvas",1,0)(2,"router-outlet")},dependencies:[R0,lp],encapsulation:2})}}return n})();O_(_M,P0).catch(n=>console.error(n));
