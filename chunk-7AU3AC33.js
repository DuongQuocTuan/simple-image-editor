import{$ as Ce,A as ci,B as ge,C as ui,D as _t,E as Ni,F as Ri,G as Hi,H as be,I as Ui,J as Ke,K as ji,L as Wi,M as At,N as di,O as qi,P as pi,Q as Gi,R as Qi,S as me,T as Xi,U as hi,V as Yi,W as Zi,X as Ki,Y as Ji,Z as te,_ as en,a as ot,aa as N,b as si,ba as _e,ca as rt,d as he,da as R,e as Ai,ea as tn,f as ae,g as ye,h as ve,i as ee,j as le,k as Oi,n as Ft,o as Bi,r as Pi,s as Oe,t as ai,u as zi,w as li,x as Ze,y as Ie,z as $e}from"./chunk-45EMG5NT.js";import{$a as Le,$b as Fe,Aa as Ti,Ab as gt,Ba as Ei,Bb as bt,Ca as ii,Cb as B,Da as l,Db as kt,Eb as se,Fa as Si,Fb as De,Gb as Vi,H as St,Ha as mt,Hb as Fi,I as Pe,Ia as W,Ib as $i,J as U,Jb as He,K as j,Ka as Mi,M as Ge,Mb as Vt,Na as L,Oa as q,P as k,Pa as X,Qa as D,Qb as x,Ra as f,Rb as z,Sb as Ue,Ta as Di,Tb as je,U as fe,Ub as Li,V as g,W as b,X as ne,Xa as y,Xb as Ye,Y as E,Ya as a,Yb as ke,Z as ht,Za as Me,_a as nt,_b as Ve,ab as F,ac as $t,ba as V,bb as oe,bc as Lt,ca as ze,cb as ni,db as oi,ea as Ne,eb as ri,f as Ci,fa as Qe,fb as p,ga as Xe,gb as h,hb as I,i as xi,ib as Y,jb as Z,ka as it,kb as K,lb as P,mb as T,n as wi,nb as u,ob as Re,pb as Ae,qb as A,rb as J,s as Ii,sb as S,tb as M,ub as Mt,vb as re,wb as we,xb as Dt,yb as ki,zb as ft}from"./chunk-B7W5A5WM.js";import{a as $,b as ue}from"./chunk-7CGTOI24.js";var un=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(W(mt),W(Qe))};static \u0275dir=X({type:t})}return t})(),fo=(()=>{class t extends un{static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275dir=X({type:t,features:[D]})}return t})(),ut=new Ge("");var go={provide:ut,useExisting:Pe(()=>Ut),multi:!0};function bo(){let t=si()?si().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var _o=new Ge(""),Ut=(()=>{class t extends un{_compositionMode;_composing=!1;constructor(e,i,n){super(e,i),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!bo())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(W(mt),W(Qe),W(_o,8))};static \u0275dir=X({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,n){i&1&&T("input",function(s){return n._handleInput(s.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(s){return n._compositionEnd(s.target.value)})},standalone:!1,features:[B([go]),D]})}return t})();var dn=new Ge(""),pn=new Ge("");function hn(t){return t!=null}function mn(t){return Di(t)?xi(t):t}function fn(t){let o={};return t.forEach(e=>{o=e!=null?$($({},o),e):o}),Object.keys(o).length===0?null:o}function gn(t,o){return o.map(e=>e(t))}function yo(t){return!t.validate}function bn(t){return t.map(o=>yo(o)?o:e=>o.validate(e))}function vo(t){if(!t)return null;let o=t.filter(hn);return o.length==0?null:function(e){return fn(gn(e,o))}}function fi(t){return t!=null?vo(bn(t)):null}function Co(t){if(!t)return null;let o=t.filter(hn);return o.length==0?null:function(e){let i=gn(e,o).map(mn);return Ii(i).pipe(wi(fn))}}function gi(t){return t!=null?Co(bn(t)):null}function nn(t,o){return t===null?[o]:Array.isArray(t)?[...t,o]:[t,o]}function xo(t){return t._rawValidators}function wo(t){return t._rawAsyncValidators}function mi(t){return t?Array.isArray(t)?t:[t]:[]}function Bt(t,o){return Array.isArray(t)?t.includes(o):t===o}function on(t,o){let e=mi(o);return mi(t).forEach(n=>{Bt(e,n)||e.push(n)}),e}function rn(t,o){return mi(o).filter(e=>!Bt(t,e))}var Pt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=fi(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=gi(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control&&this.control.reset(o)}hasError(o,e){return this.control?this.control.hasError(o,e):!1}getError(o,e){return this.control?this.control.getError(o,e):null}},lt=class extends Pt{name;get formDirective(){return null}get path(){return null}},Je=class extends Pt{_parent=null;name=null;valueAccessor=null},zt=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Io={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Nc=ue($({},Io),{"[class.ng-submitted]":"isSubmitted"}),_n=(()=>{class t extends zt{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(W(Je,2))};static \u0275dir=X({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,n){i&2&&nt("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[D]})}return t})(),yn=(()=>{class t extends zt{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(W(lt,10))};static \u0275dir=X({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,n){i&2&&nt("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},standalone:!1,features:[D]})}return t})();var yt="VALID",Ot="INVALID",st="PENDING",vt="DISABLED",ct=class{},Nt=class extends ct{value;source;constructor(o,e){super(),this.value=o,this.source=e}},xt=class extends ct{pristine;source;constructor(o,e){super(),this.pristine=o,this.source=e}},wt=class extends ct{touched;source;constructor(o,e){super(),this.touched=o,this.source=e}},at=class extends ct{status;source;constructor(o,e){super(),this.status=o,this.source=e}};function vn(t){return(jt(t)?t.validators:t)||null}function To(t){return Array.isArray(t)?fi(t):t||null}function Cn(t,o){return(jt(o)?o.asyncValidators:t)||null}function Eo(t){return Array.isArray(t)?gi(t):t||null}function jt(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function So(t,o,e){let i=t.controls;if(!(o?Object.keys(i):i).length)throw new St(1e3,"");if(!i[e])throw new St(1001,"")}function Mo(t,o,e){t._forEachChild((i,n)=>{if(e[n]===void 0)throw new St(1002,"")})}var Rt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,e){this._assignValidators(o),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return Ue(this.statusReactive)}set status(o){Ue(()=>this.statusReactive.set(o))}_status=je(()=>this.statusReactive());statusReactive=Xe(void 0);get valid(){return this.status===yt}get invalid(){return this.status===Ot}get pending(){return this.status==st}get disabled(){return this.status===vt}get enabled(){return this.status!==vt}errors;get pristine(){return Ue(this.pristineReactive)}set pristine(o){Ue(()=>this.pristineReactive.set(o))}_pristine=je(()=>this.pristineReactive());pristineReactive=Xe(!0);get dirty(){return!this.pristine}get touched(){return Ue(this.touchedReactive)}set touched(o){Ue(()=>this.touchedReactive.set(o))}_touched=je(()=>this.touchedReactive());touchedReactive=Xe(!1);get untouched(){return!this.touched}_events=new Ci;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(on(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(on(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(rn(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(rn(o,this._rawAsyncValidators))}hasValidator(o){return Bt(this._rawValidators,o)}hasAsyncValidator(o){return Bt(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let e=this.touched===!1;this.touched=!0;let i=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsTouched(ue($({},o),{sourceControl:i})),e&&o.emitEvent!==!1&&this._events.next(new wt(!0,i))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(o))}markAsUntouched(o={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=o.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:i})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,i),e&&o.emitEvent!==!1&&this._events.next(new wt(!1,i))}markAsDirty(o={}){let e=this.pristine===!0;this.pristine=!1;let i=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsDirty(ue($({},o),{sourceControl:i})),e&&o.emitEvent!==!1&&this._events.next(new xt(!1,i))}markAsPristine(o={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=o.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o,i),e&&o.emitEvent!==!1&&this._events.next(new xt(!0,i))}markAsPending(o={}){this.status=st;let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new at(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.markAsPending(ue($({},o),{sourceControl:e}))}disable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=vt,this.errors=null,this._forEachChild(n=>{n.disable(ue($({},o),{onlySelf:!0}))}),this._updateValue();let i=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Nt(this.value,i)),this._events.next(new at(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ue($({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=yt,this._forEachChild(i=>{i.enable(ue($({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(ue($({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(o,e){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===yt||this.status===st)&&this._runAsyncValidator(i,o.emitEvent)}let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Nt(this.value,e)),this._events.next(new at(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(ue($({},o),{sourceControl:e}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?vt:yt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,e){if(this.asyncValidator){this.status=st,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let i=mn(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:e,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(o){let e=o;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,n)=>i&&i._find(n),this)}getError(o,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,e,i){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||i)&&this._events.next(new at(this.status,e)),this._parent&&this._parent._updateControlsErrors(o,e,i)}_initObservables(){this.valueChanges=new V,this.statusChanges=new V}_calculateStatus(){return this._allControlsDisabled()?vt:this.errors?Ot:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(st)?st:this._anyControlsHaveStatus(Ot)?Ot:yt}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,e){let i=!this._anyControlsDirty(),n=this.pristine!==i;this.pristine=i,this._parent&&!o.onlySelf&&this._parent._updatePristine(o,e),n&&this._events.next(new xt(this.pristine,e))}_updateTouched(o={},e){this.touched=this._anyControlsTouched(),this._events.next(new wt(this.touched,e)),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,e)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){jt(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){let e=this._parent&&this._parent.dirty;return!o&&!!e&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=To(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=Eo(this._rawAsyncValidators)}},Ht=class extends Rt{constructor(o,e,i){super(vn(e),Cn(i,e)),this.controls=o,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(o,e){return this.controls[o]?this.controls[o]:(this.controls[o]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(o,e,i={}){this.registerControl(o,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(o,e={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(o,e,i={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],e&&this.registerControl(o,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(o){return this.controls.hasOwnProperty(o)&&this.controls[o].enabled}setValue(o,e={}){Mo(this,!0,o),Object.keys(o).forEach(i=>{So(this,!0,i),this.controls[i].setValue(o[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(o,e={}){o!=null&&(Object.keys(o).forEach(i=>{let n=this.controls[i];n&&n.patchValue(o[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(o={},e={}){this._forEachChild((i,n)=>{i.reset(o?o[n]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(o,e,i)=>(o[i]=e.getRawValue(),o))}_syncPendingControls(){let o=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&o(i,e)})}_setUpControls(){this._forEachChild(o=>{o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(o){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&o(i))return!0;return!1}_reduceValue(){let o={};return this._reduceChildren(o,(e,i,n)=>((i.enabled||this.disabled)&&(e[n]=i.value),e))}_reduceChildren(o,e){let i=o;return this._forEachChild((n,r)=>{i=e(i,n,r)}),i}_allControlsDisabled(){for(let o of Object.keys(this.controls))if(this.controls[o].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(o){return this.controls.hasOwnProperty(o)?this.controls[o]:null}};var Wt=new Ge("",{providedIn:"root",factory:()=>qt}),qt="always";function Do(t,o){return[...o.path,t]}function xn(t,o,e=qt){wn(t,o),o.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&o.valueAccessor.setDisabledState?.(t.disabled),Vo(t,o),$o(t,o),Fo(t,o),ko(t,o)}function sn(t,o){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function ko(t,o){if(o.valueAccessor.setDisabledState){let e=i=>{o.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),o._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function wn(t,o){let e=xo(t);o.validator!==null?t.setValidators(nn(e,o.validator)):typeof e=="function"&&t.setValidators([e]);let i=wo(t);o.asyncValidator!==null?t.setAsyncValidators(nn(i,o.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let n=()=>t.updateValueAndValidity();sn(o._rawValidators,n),sn(o._rawAsyncValidators,n)}function Vo(t,o){o.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&In(t,o)})}function Fo(t,o){o.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&In(t,o),t.updateOn!=="submit"&&t.markAsTouched()})}function In(t,o){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function $o(t,o){let e=(i,n)=>{o.valueAccessor.writeValue(i),n&&o.viewToModelUpdate(i)};t.registerOnChange(e),o._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Lo(t,o){t==null,wn(t,o)}function Ao(t,o){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(o,e.currentValue)}function Oo(t){return Object.getPrototypeOf(t.constructor)===fo}function Bo(t,o){t._syncPendingControls(),o.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Po(t,o){if(!o)return null;Array.isArray(o);let e,i,n;return o.forEach(r=>{r.constructor===Ut?e=r:Oo(r)?i=r:n=r}),n||i||e||null}var zo={provide:lt,useExisting:Pe(()=>bi)},Ct=Promise.resolve(),bi=(()=>{class t extends lt{callSetDisabledState;get submitted(){return Ue(this.submittedReactive)}_submitted=je(()=>this.submittedReactive());submittedReactive=Xe(!1);_directives=new Set;form;ngSubmit=new V;options;constructor(e,i,n){super(),this.callSetDisabledState=n,this.form=new Ht({},fi(e),gi(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ct.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),xn(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ct.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ct.then(()=>{let i=this._findContainer(e.path),n=new Ht({});Lo(n,e),i.registerControl(e.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ct.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Ct.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Bo(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(W(dn,10),W(pn,10),W(Wt,8))};static \u0275dir=X({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,n){i&1&&T("submit",function(s){return n.onSubmit(s)})("reset",function(){return n.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[B([zo]),D]})}return t})();function an(t,o){let e=t.indexOf(o);e>-1&&t.splice(e,1)}function ln(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var No=class extends Rt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,e,i){super(vn(e),Cn(i,e)),this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),jt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ln(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){an(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){an(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){ln(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var Ro={provide:Je,useExisting:Pe(()=>It)},cn=Promise.resolve(),It=(()=>{class t extends Je{_changeDetectorRef;callSetDisabledState;control=new No;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new V;constructor(e,i,n,r,s,c){super(),this._changeDetectorRef=s,this.callSetDisabledState=c,this._parent=e,this._setValidators(i),this._setAsyncValidators(n),this.valueAccessor=Po(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Ao(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){xn(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){cn.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,n=i!==0&&x(i);cn.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Do(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(W(lt,9),W(dn,10),W(pn,10),W(ut,10),W(Vt,8),W(Wt,8))};static \u0275dir=X({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[B([Ro]),D,fe]})}return t})();var Tn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=X({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Ho=new Ge("");var En=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({})}return t})();var Sn=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Wt,useValue:e.callSetDisabledState??qt}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[En]})}return t})(),Mn=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Ho,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Wt,useValue:e.callSetDisabledState??qt}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[En]})}return t})();var Tt={CHECK:"check",X:"x",FREE_TEXT:"free_text",DELETE:"delete",ELLIPSE:"ellipse",LINE:"line",ARROW:"arrow"};var et={FONT_FAMILY:"Arial",FONT_SIZE:24,FONT_UNIT:"pt"};var Gt={CHECK:"#00c70a",X:"#ff0000",SQUARE:"#ff0000",ELLIPSE:"#ff0000",LINE:"#ff0000",FREE_TEXT:"#ff0000",DEFAULT:"#000"};var kn={CHECK:"\u2713",X:"X"};var Vn=(()=>{class t extends R{name="common";static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),H=(()=>{class t{document=k(ot);platformId=k(it);el=k(Qe);injector=k(ht);cd=k(Vt);renderer=k(mt);config=k(tn);baseComponentStyle=k(Vn);baseStyle=k(R);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=te("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,i="",n={}){return zi(e,i,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Oi(this.platformId)){let{dt:i}=e;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>li.off("theme:change",e))}_loadStyles(){let e=()=>{rt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),rt.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!rt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),rt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Ze.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:n,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,$({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,$({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,$({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme($({name:"global-style"},this.styleOptions),r),Ze.setLoadedStyleName("common")}if(!Ze.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,$({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme($({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),Ze.setLoadedStyleName(this.componentStyle?.name)}if(!Ze.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,$({name:"layer-order",first:!0},this.styleOptions)),Ze.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:i}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(i,$({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){rt.clearLoadedStyleNames(),li.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,i){let n=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:e}sx(e){let i=this.componentStyle?.inlineStyles?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:$({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||t)};static \u0275dir=X({type:t,inputs:{dt:"dt"},features:[B([Vn,R]),fe]})}return t})();var Et=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,i){e&&i&&(e.classList?e.classList.add(i):e.className+=" "+i)}static addMultipleClasses(e,i){if(e&&i)if(e.classList){let n=i.trim().split(" ");for(let r=0;r<n.length;r++)e.classList.add(n[r])}else{let n=i.split(" ");for(let r=0;r<n.length;r++)e.className+=" "+n[r]}}static removeClass(e,i){e&&i&&(e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,i){e&&i&&[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,i){return e&&i?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(i){return i!==e})}static find(e,i){return Array.from(e.querySelectorAll(i))}static findSingle(e,i){return this.isElement(e)?e.querySelector(i):null}static index(e){let i=e.parentNode.childNodes,n=0;for(var r=0;r<i.length;r++){if(i[r]==e)return n;i[r].nodeType==1&&n++}return-1}static indexWithinGroup(e,i){let n=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<n.length;s++){if(n[s]==e)return r;n[s].attributes&&n[s].attributes[i]&&n[s].nodeType==1&&r++}return-1}static appendOverlay(e,i,n="self"){n!=="self"&&e&&i&&this.appendChild(e,i)}static alignOverlay(e,i,n="self",r=!0){e&&i&&(r&&(e.style.minWidth=`${t.getOuterWidth(i)}px`),n==="self"?this.relativePosition(e,i):this.absolutePosition(e,i))}static relativePosition(e,i,n=!0){let r=pe=>{if(pe)return getComputedStyle(pe).getPropertyValue("position")==="relative"?pe:r(pe.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),c=i.offsetHeight,d=i.getBoundingClientRect(),m=this.getWindowScrollTop(),_=this.getWindowScrollLeft(),v=this.getViewport(),C=r(e)?.getBoundingClientRect()||{top:-1*m,left:-1*_},O,Q;d.top+c+s.height>v.height?(O=d.top-C.top-s.height,e.style.transformOrigin="bottom",d.top+O<0&&(O=-1*d.top)):(O=c+d.top-C.top,e.style.transformOrigin="top");let de=d.left+s.width-v.width,ie=d.left-C.left;s.width>v.width?Q=(d.left-C.left)*-1:de>0?Q=ie-de:Q=d.left-C.left,e.style.top=O+"px",e.style.left=Q+"px",n&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,i,n=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,c=r.width,d=i.offsetHeight,m=i.offsetWidth,_=i.getBoundingClientRect(),v=this.getWindowScrollTop(),w=this.getWindowScrollLeft(),C=this.getViewport(),O,Q;_.top+d+s>C.height?(O=_.top+v-s,e.style.transformOrigin="bottom",O<0&&(O=v)):(O=d+_.top+v,e.style.transformOrigin="top"),_.left+c>C.width?Q=Math.max(0,_.left+w+m-c):Q=_.left+w,e.style.top=O+"px",e.style.left=Q+"px",n&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,i=[]){return e.parentNode===null?i:this.getParents(e.parentNode,i.concat([e.parentNode]))}static getScrollableParents(e){let i=[];if(e){let n=this.getParents(e),r=/(auto|scroll)/,s=c=>{let d=window.getComputedStyle(c,null);return r.test(d.getPropertyValue("overflow"))||r.test(d.getPropertyValue("overflowX"))||r.test(d.getPropertyValue("overflowY"))};for(let c of n){let d=c.nodeType===1&&c.dataset.scrollselectors;if(d){let m=d.split(",");for(let _ of m){let v=this.findSingle(c,_);v&&s(v)&&i.push(v)}}c.nodeType!==9&&s(c)&&i.push(c)}}return i}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementDimensions(e){let i={};return e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",i}static scrollInView(e,i){let n=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=n?parseFloat(n):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),c=s?parseFloat(s):0,d=e.getBoundingClientRect(),_=i.getBoundingClientRect().top+document.body.scrollTop-(d.top+document.body.scrollTop)-r-c,v=e.scrollTop,w=e.clientHeight,C=this.getOuterHeight(i);_<0?e.scrollTop=v+_:_+C>w&&(e.scrollTop=v+_-w+C)}static fadeIn(e,i){e.style.opacity=0;let n=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-n)/i,e.style.opacity=r,n=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,i){var n=1,r=50,s=i,c=r/s;let d=setInterval(()=>{n=n-c,n<=0&&(n=0,clearInterval(d)),e.style.opacity=n},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,i){var n=Element.prototype,r=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,i)}static getOuterWidth(e,i){let n=e.offsetWidth;if(i){let r=getComputedStyle(e);n+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return n}static getHorizontalPadding(e){let i=getComputedStyle(e);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(e){let i=getComputedStyle(e);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(e){let i=e.offsetWidth,n=getComputedStyle(e);return i+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static width(e){let i=e.offsetWidth,n=getComputedStyle(e);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static getInnerHeight(e){let i=e.offsetHeight,n=getComputedStyle(e);return i+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),i}static getOuterHeight(e,i){let n=e.offsetHeight;if(i){let r=getComputedStyle(e);n+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return n}static getHeight(e){let i=e.offsetHeight,n=getComputedStyle(e);return i-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),i}static getWidth(e){let i=e.offsetWidth,n=getComputedStyle(e);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),i}static getViewport(){let e=window,i=document,n=i.documentElement,r=i.getElementsByTagName("body")[0],s=e.innerWidth||n.clientWidth||r.clientWidth,c=e.innerHeight||n.clientHeight||r.clientHeight;return{width:s,height:c}}static getOffset(e){var i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,i){let n=e.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(i,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return!0;var n=e.indexOf("Trident/");if(n>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,i){if(this.isElement(i))i.appendChild(e);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(e);else throw"Cannot append "+i+" to "+e}static removeChild(e,i){if(this.isElement(i))i.removeChild(e);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+i}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let n=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(e,i,n){e[i].apply(e,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,i){e&&document.activeElement!==e&&e.focus(i)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,i=""){let n=this.find(e,this.getFocusableSelectorString(i)),r=[];for(let s of n){let c=getComputedStyle(s);this.isVisible(s)&&c.display!="none"&&c.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,i=""){let n=this.findSingle(e,this.getFocusableSelectorString(i));if(n){let r=getComputedStyle(n);if(this.isVisible(n)&&r.display!="none"&&r.visibility!="hidden")return n}return null}static getFirstFocusableElement(e,i=""){let n=this.getFocusableElements(e,i);return n.length>0?n[0]:null}static getLastFocusableElement(e,i){let n=this.getFocusableElements(e,i);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(e,i=!1){let n=t.getFocusableElements(e),r=0;if(n&&n.length>0){let s=n.indexOf(n[0].ownerDocument.activeElement);i?s==-1||s===0?r=n.length-1:r=s-1:s!=-1&&s!==n.length-1&&(r=s+1)}return n[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,i){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let n=typeof e;if(n==="string")return document.querySelector(e);if(n==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(c=>!!(c&&c.constructor&&c.call&&c.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,i){if(e){let n=e.getAttribute(i);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,i={},...n){if(e){let r=document.createElement(e);return this.setAttributes(r,i),r.append(...n),r}}static setAttribute(e,i="",n){this.isElement(e)&&n!==null&&n!==void 0&&e.setAttribute(i,n)}static setAttributes(e,i={}){if(this.isElement(e)){let n=(r,s)=>{let c=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((d,m)=>{if(m!=null){let _=typeof m;if(_==="string"||_==="number")d.push(m);else if(_==="object"){let v=Array.isArray(m)?n(r,m):Object.entries(m).map(([w,C])=>r==="style"&&(C||C===0)?`${w.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${C}`:C?w:void 0);d=v.length?d.concat(v.filter(w=>!!w)):d}}return d},c)};Object.entries(i).forEach(([r,s])=>{if(s!=null){let c=r.match(/^on(.+)/);c?e.addEventListener(c[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(n("class",s))].join(" ").trim():r==="style"?n("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,i=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return t})(),dt=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=Et.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var We=(()=>{class t extends H{autofocus=!1;_autofocus=!1;focused=!1;platformId=k(it);document=k(ot);host=k(Qe);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){le(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Et.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275dir=X({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",x],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[D]})}return t})(),Qt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({})}return t})();var Uo=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,jo={root:({props:t,instance:o})=>["p-badge p-component",{"p-badge-circle":ai(t.value)&&String(t.value).length===1,"p-badge-dot":Oe(t.value)&&!o.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},$n=(()=>{class t extends R{name="badge";theme=Uo;classes=jo;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var _i=(()=>{class t extends H{styleClass=Ne();style=Ne();badgeSize=Ne();size=Ne();severity=Ne();value=Ne();badgeDisabled=Ne(!1,{transform:x});_componentStyle=k($n);containerClass=je(()=>{let e="p-badge p-component";return ai(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),Oe(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,n){i&2&&(Le(n.style()),F(n.containerClass()),Me("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[B([$n]),D],decls:1,vars:1,template:function(i,n){i&1&&re(0),i&2&&we(n.value())},dependencies:[ee,N],encapsulation:2,changeDetection:0})}return t})(),Ln=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[_i,N,N]})}return t})();var qo=["*"],Go=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Qo=(()=>{class t extends R{name="baseicon";inlineStyles=Go;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var ce=(()=>{class t extends H{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=Oe(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",x],styleClass:"styleClass"},features:[B([Qo]),D],ngContentSelectors:qo,decls:1,vars:0,template:function(i,n){i&1&&(Re(),Ae(0))},encapsulation:2,changeDetection:0})}return t})();var An=(()=>{class t extends ce{static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["AngleDownIcon"]],features:[D],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(i,n){i&1&&(ne(),p(0,"svg",0),I(1,"path",1),h()),i&2&&(F(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var On=(()=>{class t extends ce{static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["AngleUpIcon"]],features:[D],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(i,n){i&1&&(ne(),p(0,"svg",0),I(1,"path",1),h()),i&2&&(F(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Bn=(()=>{class t extends ce{pathId;ngOnInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["PlusIcon"]],features:[D],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ne(),p(0,"svg",0)(1,"g"),I(2,"path",1),h(),p(3,"defs")(4,"clipPath",2),I(5,"rect",3),h()()()),i&2&&(F(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),l(),y("clip-path",n.pathId),l(3),a("id",n.pathId))},encapsulation:2})}return t})();var Pn=(()=>{class t extends ce{pathId;ngOnInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["SpinnerIcon"]],features:[D],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ne(),p(0,"svg",0)(1,"g"),I(2,"path",1),h(),p(3,"defs")(4,"clipPath",2),I(5,"rect",3),h()()()),i&2&&(F(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),l(),y("clip-path",n.pathId),l(3),a("id",n.pathId))},encapsulation:2})}return t})();var qe=(()=>{class t extends ce{static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["TimesIcon"]],features:[D],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,n){i&1&&(ne(),p(0,"svg",0),I(1,"path",1),h()),i&2&&(F(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var zn=(()=>{class t extends ce{pathId;ngOnInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["UploadIcon"]],features:[D],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ne(),p(0,"svg",0)(1,"g"),I(2,"path",1),h(),p(3,"defs")(4,"clipPath",2),I(5,"rect",3),h()()()),i&2&&(F(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),l(),y("clip-path",n.pathId),l(3),a("id",n.pathId))},encapsulation:2})}return t})();var Nn=(()=>{class t extends ce{pathId;ngOnInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["WindowMaximizeIcon"]],features:[D],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ne(),p(0,"svg",0)(1,"g"),I(2,"path",1),h(),p(3,"defs")(4,"clipPath",2),I(5,"rect",3),h()()()),i&2&&(F(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),l(),y("clip-path",n.pathId),l(3),a("id",n.pathId))},encapsulation:2})}return t})();var Rn=(()=>{class t extends ce{pathId;ngOnInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["WindowMinimizeIcon"]],features:[D],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ne(),p(0,"svg",0)(1,"g"),I(2,"path",1),h(),p(3,"defs")(4,"clipPath",2),I(5,"rect",3),h()()()),i&2&&(F(n.getClassNames()),y("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),l(),y("clip-path",n.pathId),l(3),a("id",n.pathId))},encapsulation:2})}return t})();var Xo=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Yo={root:"p-ink"},Hn=(()=>{class t extends R{name="ripple";theme=Xo;classes=Yo;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var Xt=(()=>{class t extends H{zone=k(ze);_componentStyle=k(Hn);animationListener;mouseDownListener;timeout;constructor(){super(),Li(()=>{le(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(ge(i,"p-ink-active"),!pi(i)&&!hi(i)){let c=Math.max(be(this.el.nativeElement),me(this.el.nativeElement));i.style.height=c+"px",i.style.width=c+"px"}let n=Qi(this.el.nativeElement),r=e.pageX-n.left+this.document.body.scrollTop-hi(i)/2,s=e.pageY-n.top+this.document.body.scrollLeft-pi(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",r+"px"),$e(i,"p-ink-active"),this.timeout=setTimeout(()=>{let c=this.getInk();c&&ge(c,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&ge(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),ge(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Zi(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=X({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[B([Hn]),D]})}return t})();var Zo=["content"],Ko=["loading"],Jo=["icon"],er=["*"],jn=t=>({class:t});function tr(t,o){t&1&&K(0)}function ir(t,o){if(t&1&&I(0,"span",8),t&2){let e=u(3);a("ngClass",e.iconClass()),y("aria-hidden",!0)("data-pc-section","loadingicon")}}function nr(t,o){if(t&1&&I(0,"SpinnerIcon",9),t&2){let e=u(3);a("styleClass",e.spinnerIconClass())("spin",!0),y("aria-hidden",!0)("data-pc-section","loadingicon")}}function or(t,o){if(t&1&&(Y(0),f(1,ir,1,3,"span",6)(2,nr,1,4,"SpinnerIcon",7),Z()),t&2){let e=u(2);l(),a("ngIf",e.loadingIcon),l(),a("ngIf",!e.loadingIcon)}}function rr(t,o){}function sr(t,o){if(t&1&&f(0,rr,0,0,"ng-template",10),t&2){let e=u(2);a("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function ar(t,o){if(t&1&&(Y(0),f(1,or,3,2,"ng-container",2)(2,sr,1,1,null,5),Z()),t&2){let e=u();l(),a("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),l(),a("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",se(3,jn,e.iconClass()))}}function lr(t,o){if(t&1&&I(0,"span",8),t&2){let e=u(2);F(e.icon),a("ngClass",e.iconClass()),y("data-pc-section","icon")}}function cr(t,o){}function ur(t,o){if(t&1&&f(0,cr,0,0,"ng-template",10),t&2){let e=u(2);a("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function dr(t,o){if(t&1&&(Y(0),f(1,lr,1,4,"span",11)(2,ur,1,1,null,5),Z()),t&2){let e=u();l(),a("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),l(),a("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",se(3,jn,e.iconClass()))}}function pr(t,o){if(t&1&&(p(0,"span",12),re(1),h()),t&2){let e=u();y("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),l(),we(e.label)}}function hr(t,o){if(t&1&&I(0,"p-badge",13),t&2){let e=u();a("value",e.badge)("severity",e.badgeSeverity)}}var mr=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,fr={root:({instance:t,props:o})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Un=(()=>{class t extends R{name="button";theme=mr;classes=fr;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var Be=(()=>{class t extends H{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new V;onFocus=new V;onBlur=new V;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return Oe(this.fluid)?!!i:this.fluid}_componentStyle=k(Un);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let n=i.currentValue;for(let r in n)this[r]=n[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[i])=>e+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-button"]],contentQueries:function(i,n,r){if(i&1&&(A(r,Zo,5),A(r,Ko,5),A(r,Jo,5),A(r,Ce,4)),i&2){let s;S(s=M())&&(n.contentTemplate=s.first),S(s=M())&&(n.loadingIconTemplate=s.first),S(s=M())&&(n.iconTemplate=s.first),S(s=M())&&(n.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",x],loading:[2,"loading","loading",x],loadingIcon:"loadingIcon",raised:[2,"raised","raised",x],rounded:[2,"rounded","rounded",x],text:[2,"text","text",x],plain:[2,"plain","plain",x],severity:"severity",outlined:[2,"outlined","outlined",x],link:[2,"link","link",x],tabindex:[2,"tabindex","tabindex",z],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",x],fluid:[2,"fluid","fluid",x],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[B([Un]),D,fe],ngContentSelectors:er,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,n){i&1&&(Re(),p(0,"button",0),T("click",function(s){return n.onClick.emit(s)})("focus",function(s){return n.onFocus.emit(s)})("blur",function(s){return n.onBlur.emit(s)}),Ae(1),f(2,tr,1,0,"ng-container",1)(3,ar,3,5,"ng-container",2)(4,dr,3,5,"ng-container",2)(5,pr,2,3,"span",3)(6,hr,1,2,"p-badge",4),h()),i&2&&(a("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),y("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),l(2),a("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),l(),a("ngIf",n.loading),l(),a("ngIf",!n.loading),l(),a("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),l(),a("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[ee,he,ae,ve,ye,Xt,We,Pn,Ln,_i,N],encapsulation:2,changeDetection:0})}return t})(),Yt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[ee,Be,N,N]})}return t})();var Zt=class t{saveButtonType="button";isSubmitting=!1;isDisabled=!1;saveButtonLabel="Save";cancelButtonLabel="Cancel";save=new V;cancel=new V;onSave(){this.save.emit()}onCancel(){this.cancel.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["app-save-cancel"]],inputs:{saveButtonType:"saveButtonType",isSubmitting:"isSubmitting",isDisabled:"isDisabled",saveButtonLabel:"saveButtonLabel",cancelButtonLabel:"cancelButtonLabel"},outputs:{save:"save",cancel:"cancel"},decls:2,vars:6,consts:[["icon","pi pi-times","variant","outlined","severity","danger",1,"center-cancel-button","mr-4",3,"click","label"],["icon","pi pi-check","severity","success",3,"click","disabled","type","label","raised","loading"]],template:function(e,i){e&1&&(p(0,"p-button",0),T("click",function(){return i.onCancel()}),h(),p(1,"p-button",1),T("click",function(){return i.onSave()}),h()),e&2&&(a("label",i.cancelButtonLabel),l(),a("disabled",i.isDisabled)("type",i.saveButtonType)("label",i.saveButtonLabel)("raised",!0)("loading",i.isSubmitting))},dependencies:[Yt,Be],styles:["[_nghost-%COMP%]{display:block}.center-cancel-button[_ngcontent-%COMP%]{position:relative;top:1px}"],changeDetection:0})};function br(){let t=[],o=(r,s)=>{let c=t.length>0?t[t.length-1]:{key:r,value:s},d=c.value+(c.key===r?0:s)+2;return t.push({key:r,value:d}),d},e=r=>{t=t.filter(s=>s.value!==r)},i=()=>t.length>0?t[t.length-1].value:0,n=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:n,set:(r,s,c)=>{s&&(s.style.zIndex=String(o(r,c)))},clear:r=>{r&&(e(n(r)),r.style.zIndex="")},getCurrent:()=>i(),generateZIndex:o,revertZIndex:e}}var Te=br();var _r=["container"],yr=["input"],vr=["colorSelector"],Cr=["colorHandle"],xr=["hue"],wr=["hueHandle"],Ir=(t,o)=>({"p-colorpicker p-component":!0,"p-colorpicker-overlay":t,"p-colorpicker-dragging":o}),Tr=t=>({"p-disabled":t}),Er=(t,o)=>({"p-colorpicker-panel":!0,"p-colorpicker-panel-inline":t,"p-disabled":o}),Sr=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),Mr=t=>({value:"visible",params:t});function Dr(t,o){if(t&1){let e=P();p(0,"input",9,1),T("click",function(){g(e);let n=u();return b(n.onInputClick())})("keydown",function(n){g(e);let r=u();return b(r.onInputKeydown(n))})("focus",function(){g(e);let n=u();return b(n.onInputFocus())}),h()}if(t&2){let e=u();Me("background-color",e.inputBgColor),a("ngClass",se(9,Tr,e.disabled))("disabled",e.disabled)("pAutoFocus",e.autofocus),y("tabindex",e.tabindex)("id",e.inputId)("data-pc-section","input")("aria-label",e.ariaLabel)}}function kr(t,o){if(t&1){let e=P();p(0,"div",10),T("click",function(n){g(e);let r=u();return b(r.onOverlayClick(n))})("@overlayAnimation.start",function(n){g(e);let r=u();return b(r.onOverlayAnimationStart(n))})("@overlayAnimation.done",function(n){g(e);let r=u();return b(r.onOverlayAnimationEnd(n))}),p(1,"div",11)(2,"div",12,2),T("touchstart",function(n){g(e);let r=u();return b(r.onColorDragStart(n))})("touchmove",function(n){g(e);let r=u();return b(r.onDrag(n))})("touchend",function(){g(e);let n=u();return b(n.onDragEnd())})("mousedown",function(n){g(e);let r=u();return b(r.onColorMousedown(n))}),p(4,"div",13),I(5,"div",14,3),h()(),p(7,"div",15,4),T("mousedown",function(n){g(e);let r=u();return b(r.onHueMousedown(n))})("touchstart",function(n){g(e);let r=u();return b(r.onHueDragStart(n))})("touchmove",function(n){g(e);let r=u();return b(r.onDrag(n))})("touchend",function(){g(e);let n=u();return b(n.onDragEnd())}),I(9,"div",16,5),h()()()}if(t&2){let e=u();a("ngClass",De(10,Er,e.inline,e.disabled))("@overlayAnimation",se(16,Mr,De(13,Sr,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.inline===!0),y("data-pc-section","panel"),l(),y("data-pc-section","content"),l(),y("data-pc-section","selector"),l(2),y("data-pc-section","color"),l(),y("data-pc-section","colorHandle"),l(2),y("data-pc-section","hue"),l(2),y("data-pc-section","hueHandle")}}var Vr=({dt:t})=>`
.p-colorpicker {
    display: inline-block;
    position: relative;
}

.p-colorpicker-dragging {
    cursor: pointer;
}

.p-colorpicker-preview {
    width: ${t("colorpicker.preview.width")};
    height: ${t("colorpicker.preview.height")};
    padding: 0;
    border: 0 none;
    border-radius: ${t("colorpicker.preview.border.radius")};
    transition: background ${t("colorpicker.transition.duration")}, color ${t("colorpicker.transition.duration")}, border-color ${t("colorpicker.transition.duration")}, outline-color ${t("colorpicker.transition.duration")}, box-shadow ${t("colorpicker.transition.duration")};
    outline-color: transparent;
    cursor: pointer;
}

.p-colorpicker-preview:enabled:focus-visible {
    border-color: ${t("colorpicker.preview.focus.border.color")};
    box-shadow: ${t("colorpicker.preview.focus.ring.shadow")};
    outline: ${t("colorpicker.preview.focus.ring.width")} ${t("colorpicker.preview.focus.ring.style")} ${t("colorpicker.preview.focus.ring.color")};
    outline-offset: ${t("colorpicker.preview.focus.ring.offset")};
}

.p-colorpicker-panel {
    background: ${t("colorpicker.panel.background")};
    border: 1px solid ${t("colorpicker.panel.border.color")};
    border-radius: ${t("colorpicker.panel.border.radius")};
    box-shadow: ${t("colorpicker.panel.shadow")};
    width: 193px;
    height: 166px;
    position: absolute;
    top: 0;
    left: 0;
}

.p-colorpicker-panel:dir(rtl) {
    left: auto;
    right: 0;
}

.p-colorpicker-panel-inline {
    box-shadow: none;
    position: static;
}

.p-colorpicker-content {
    position: relative;
}

.p-colorpicker-color-selector {
    width: 150px;
    height: 150px;
    top: 8px;
    left: 8px;
    position: absolute;
}

.p-colorpicker-color-selector:dir(rtl) {
    left: auto;
    right: 8px;
}

.p-colorpicker-color-background {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

.p-colorpicker-color-handle {
    position: absolute;
    top: 0px;
    left: 150px;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    border-width: 1px;
    border-style: solid;
    margin: -5px 0 0 -5px;
    cursor: pointer;
    opacity: 0.85;
    border-color: ${t("colorpicker.handle.color")};
}

.p-colorpicker-color-handle:dir(rtl) {
    left: auto;
    right: 150px;
    margin: -5px -5px 0 0;
}

.p-colorpicker-hue {
    width: 17px;
    height: 150px;
    top: 8px;
    left: 167px;
    position: absolute;
    opacity: 0.85;
    background: linear-gradient(0deg,
        red 0,
        #ff0 17%,
        #0f0 33%,
        #0ff 50%,
        #00f 67%,
        #f0f 83%,
        red);
}

.p-colorpicker-hue:dir(rtl) {
    left: auto;
    right: 167px;
}

.p-colorpicker-hue-handle {
    position: absolute;
    top: 150px;
    left: 0px;
    width: 21px;
    margin-left: -2px;
    margin-top: -5px;
    height: 10px;
    border-width: 2px;
    border-style: solid;
    opacity: 0.85;
    cursor: pointer;
    border-color: ${t("colorpicker.handle.color")};
}

.p-colorpicker-hue-handle:dir(rtl) {
    left: auto;
    right: 0px;
    margin-left: 0;
    margin-right: -2px;
}
`,Fr={root:"p-colorpicker p-component",preview:({props:t})=>["p-colorpicker-preview",{"p-disabled":t.disabled}],panel:({props:t})=>["p-colorpicker-panel",{"p-colorpicker-panel-inline":t.inline,"p-disabled":t.disabled}],content:"p-colorpicker-content",colorSelector:"p-colorpicker-color-selector",colorBackground:"p-colorpicker-color-background",colorHandle:"p-colorpicker-color-handle",hue:"p-colorpicker-hue",hueHandle:"p-colorpicker-hue-handle"},qn=(()=>{class t extends R{name="colorpicker";theme=Vr;classes=Fr;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var $r={provide:ut,useExisting:Pe(()=>Kt),multi:!0},Kt=(()=>{class t extends H{overlayService;style;styleClass;inline;format="hex";appendTo;disabled;tabindex;inputId;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;onChange=new V;onShow=new V;onHide=new V;containerViewChild;inputViewChild;value={h:0,s:100,b:100};inputBgColor;shown;overlayVisible;defaultColor="ff0000";onModelChange=()=>{};onModelTouched=()=>{};documentClickListener;documentResizeListener;documentMousemoveListener;documentMouseupListener;documentHueMoveListener;scrollHandler;selfClick;colorDragging;hueDragging;overlay;colorSelectorViewChild;colorHandleViewChild;hueViewChild;hueHandleViewChild;_componentStyle=k(qn);constructor(e){super(),this.overlayService=e}set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}get ariaLabel(){return this.config?.getTranslation(_e.ARIA)[_e.SELECT_COLOR]}onHueMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueDragStart(e){this.disabled||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorDragStart(e){this.disabled||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]))}pickHue(e,i){let n=i?i.pageY:e.pageY,r=this.hueViewChild?.nativeElement.getBoundingClientRect().top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,n-r)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onDrag(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,i){let n=i?i.pageX:e.pageX,r=i?i.pageY:e.pageY,s=this.colorSelectorViewChild?.nativeElement.getBoundingClientRect(),c=s.top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0),d=s.left+this.document.body.scrollLeft,m=Math.floor(100*Math.max(0,Math.min(150,n-d))/150),_=Math.floor(100*(150-Math.max(0,Math.min(150,r-c)))/150);this.value=this.validateHSB({h:this.value.h,s:m,b:_}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format){case"hex":e="#"+this.HSBtoHEX(this.value);break;case"rgb":e=this.HSBtoRGB(this.value);break;case"hsb":e=this.value;break}return e}updateModel(){this.onModelChange(this.getValueToUpdate()),this.cd.markForCheck()}writeValue(e){if(e)switch(this.format){case"hex":this.value=this.HEXtoHSB(e);break;case"rgb":this.value=this.RGBtoHSB(e);break;case"hsb":this.value=e;break}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){let e={};e.s=100,e.b=100,e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild?.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0,this.cd.markForCheck()}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.inline||(this.overlay=e.element,this.appendOverlay(),this.autoZIndex&&Te.set("overlay",this.overlay,this.config.zIndex.overlay),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.updateColorSelector(),this.updateUI());break;case"void":this.onOverlayHide();break}}onOverlayAnimationEnd(e){switch(e.toState){case"visible":this.inline||this.onShow.emit({});break;case"void":this.autoZIndex&&Te.clear(e.element),this.onHide.emit({});break}}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.overlay):Ke(this.appendTo,this.overlay))}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.overlay)}alignOverlay(){this.appendTo?Hi(this.overlay,this.inputViewChild?.nativeElement):Ui(this.overlay,this.inputViewChild?.nativeElement)}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.selfClick=!0,this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.code){case"Space":this.togglePanel(),e.preventDefault();break;case"Escape":case"Tab":this.hide();break;default:break}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}bindDocumentClickListener(){if(!this.documentClickListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",()=>{this.selfClick||(this.overlayVisible=!1,this.unbindDocumentClickListener()),this.selfClick=!1,this.cd.markForCheck()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentMousemoveListener(){if(!this.documentMousemoveListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMousemoveListener=this.renderer.listen(e,"mousemove",i=>{this.colorDragging&&this.pickColor(i),this.hueDragging&&this.pickHue(i)})}}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){if(!this.documentMouseupListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMouseupListener=this.renderer.listen(e,"mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()})}}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}bindDocumentResizeListener(){le(this.platformId)&&(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onWindowResize(){this.overlayVisible&&!Yi()&&this.hide()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new dt(this.containerViewChild?.nativeElement,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){var i=6-e.length;if(i>0){for(var n=[],r=0;r<i;r++)n.push("0");n.push(e),e=n.join("")}return e}HEXtoRGB(e){let i=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:i>>16,g:(i&65280)>>8,b:i&255}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){var i={h:0,s:0,b:0},n=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b),s=r-n;return i.b=r,i.s=r!=0?255*s/r:0,i.s!=0?e.r==r?i.h=(e.g-e.b)/s:e.g==r?i.h=2+(e.b-e.r)/s:i.h=4+(e.r-e.g)/s:i.h=-1,i.h*=60,i.h<0&&(i.h+=360),i.s*=100/255,i.b*=100/255,i}HSBtoRGB(e){var i={r:0,g:0,b:0};let n=e.h,r=e.s*255/100,s=e.b*255/100;if(r==0)i={r:s,g:s,b:s};else{let c=s,d=(255-r)*s/255,m=(c-d)*(n%60)/60;n==360&&(n=0),n<60?(i.r=c,i.b=d,i.g=d+m):n<120?(i.g=c,i.b=d,i.r=c-m):n<180?(i.g=c,i.r=d,i.b=d+m):n<240?(i.b=c,i.r=d,i.g=c-m):n<300?(i.b=c,i.g=d,i.r=d+m):n<360?(i.r=c,i.g=d,i.b=c-m):(i.r=0,i.g=0,i.b=0)}return{r:Math.round(i.r),g:Math.round(i.g),b:Math.round(i.b)}}RGBtoHEX(e){var i=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var n in i)i[n].length==1&&(i[n]="0"+i[n]);return i.join("")}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onOverlayHide(){this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.unbindDocumentClickListener(),this.overlay=null}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&this.autoZIndex&&Te.clear(this.overlay),this.restoreOverlayAppend(),this.onOverlayHide()}static \u0275fac=function(i){return new(i||t)(W(en))};static \u0275cmp=L({type:t,selectors:[["p-colorPicker"],["p-colorpicker"],["p-color-picker"]],viewQuery:function(i,n){if(i&1&&(J(_r,5),J(yr,5),J(vr,5),J(Cr,5),J(xr,5),J(wr,5)),i&2){let r;S(r=M())&&(n.containerViewChild=r.first),S(r=M())&&(n.inputViewChild=r.first),S(r=M())&&(n.colorSelector=r.first),S(r=M())&&(n.colorHandle=r.first),S(r=M())&&(n.hue=r.first),S(r=M())&&(n.hueHandle=r.first)}},inputs:{style:"style",styleClass:"styleClass",inline:[2,"inline","inline",x],format:"format",appendTo:"appendTo",disabled:[2,"disabled","disabled",x],tabindex:"tabindex",inputId:"inputId",autoZIndex:[2,"autoZIndex","autoZIndex",x],baseZIndex:[2,"baseZIndex","baseZIndex",z],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",x]},outputs:{onChange:"onChange",onShow:"onShow",onHide:"onHide"},features:[B([$r,qn]),D],decls:4,vars:11,consts:[["container",""],["input",""],["colorSelector",""],["colorHandle",""],["hue",""],["hueHandle",""],[3,"ngStyle","ngClass"],["type","text","class","p-colorpicker-preview","readonly","readonly",3,"ngClass","disabled","backgroundColor","pAutoFocus","click","keydown","focus",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["type","text","readonly","readonly",1,"p-colorpicker-preview",3,"click","keydown","focus","ngClass","disabled","pAutoFocus"],[3,"click","ngClass"],[1,"p-colorpicker-content"],[1,"p-colorpicker-color-selector",3,"touchstart","touchmove","touchend","mousedown"],[1,"p-colorpicker-color-background"],[1,"p-colorpicker-color-handle"],[1,"p-colorpicker-hue",3,"mousedown","touchstart","touchmove","touchend"],[1,"p-colorpicker-hue-handle"]],template:function(i,n){i&1&&(p(0,"div",6,0),f(2,Dr,2,11,"input",7)(3,kr,11,18,"div",8),h()),i&2&&(F(n.styleClass),a("ngStyle",n.style)("ngClass",De(8,Ir,!n.inline,n.colorDragging||n.hueDragging)),y("data-pc-name","colorpicker")("data-pc-section","root"),l(2),a("ngIf",!n.inline),l(),a("ngIf",n.inline||n.overlayVisible))},dependencies:[ee,he,ae,ye,Qt,We,N],encapsulation:2,data:{animation:[Ye("overlayAnimation",[Fe(":enter",[Ve({opacity:0,transform:"scaleY(0.8)"}),ke("{{showTransitionParams}}")]),Fe(":leave",[ke("{{hideTransitionParams}}",Ve({opacity:0}))])])]},changeDetection:0})}return t})(),Gn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[Kt,N,N]})}return t})();var Qn=(()=>{class t extends H{pFocusTrapDisabled=!1;platformId=k(it);document=k(ot);firstHiddenFocusableElement;lastHiddenFocusableElement;ngOnInit(){super.ngOnInit(),le(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}ngOnChanges(e){super.ngOnChanges(e),e.pFocusTrapDisabled&&le(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let e="0",i=n=>ji("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:e,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:n?.bind(this)});this.firstHiddenFocusableElement=i(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=i(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:i,relatedTarget:n}=e,r=n===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(n)?qi(i.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;di(r)}onLastHiddenElementFocus(e){let{currentTarget:i,relatedTarget:n}=e,r=n===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(n)?Gi(i.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;di(r)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275dir=X({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",x]},features:[D,fe]})}return t})();var Ar=["header"],Xn=["content"],Yn=["footer"],Or=["closeicon"],Br=["maximizeicon"],Pr=["minimizeicon"],zr=["headless"],Nr=["titlebar"],Rr=["*",[["p-footer"]]],Hr=["*","p-footer"],Ur=(t,o,e)=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex","justify-content":t,"align-items":o,"pointer-events":e}),jr=t=>({"p-dialog p-component":!0,"p-dialog-maximized":t}),Wr=()=>({display:"flex","flex-direction":"column","pointer-events":"auto"}),qr=(t,o)=>({transform:t,transition:o}),Gr=t=>({value:"visible",params:t});function Qr(t,o){t&1&&K(0)}function Xr(t,o){if(t&1&&(Y(0),f(1,Qr,1,0,"ng-container",11),Z()),t&2){let e=u(3);l(),a("ngTemplateOutlet",e._headlessTemplate||e.headlessTemplate||e.headlessT)}}function Yr(t,o){if(t&1){let e=P();p(0,"div",15),T("mousedown",function(n){g(e);let r=u(4);return b(r.initResize(n))}),h()}if(t&2){let e=u(4);a("ngClass",e.cx("resizeHandle"))}}function Zr(t,o){if(t&1&&(p(0,"span",21),re(1),h()),t&2){let e=u(5);a("id",e.ariaLabelledBy)("ngClass",e.cx("title")),l(),we(e.header)}}function Kr(t,o){t&1&&K(0)}function Jr(t,o){if(t&1&&I(0,"span",18),t&2){let e=u(6);a("ngClass",e.maximized?e.minimizeIcon:e.maximizeIcon)}}function es(t,o){t&1&&I(0,"WindowMaximizeIcon")}function ts(t,o){t&1&&I(0,"WindowMinimizeIcon")}function is(t,o){if(t&1&&(Y(0),f(1,es,1,0,"WindowMaximizeIcon",23)(2,ts,1,0,"WindowMinimizeIcon",23),Z()),t&2){let e=u(6);l(),a("ngIf",!e.maximized&&!e._maximizeiconTemplate&&!e.maximizeIconTemplate&&!e.maximizeIconT),l(),a("ngIf",e.maximized&&!e._minimizeiconTemplate&&!e.minimizeIconTemplate&&!e.minimizeIconT)}}function ns(t,o){}function os(t,o){t&1&&f(0,ns,0,0,"ng-template")}function rs(t,o){if(t&1&&(Y(0),f(1,os,1,0,null,11),Z()),t&2){let e=u(6);l(),a("ngTemplateOutlet",e._maximizeiconTemplate||e.maximizeIconTemplate||e.maximizeIconT)}}function ss(t,o){}function as(t,o){t&1&&f(0,ss,0,0,"ng-template")}function ls(t,o){if(t&1&&(Y(0),f(1,as,1,0,null,11),Z()),t&2){let e=u(6);l(),a("ngTemplateOutlet",e._minimizeiconTemplate||e.minimizeIconTemplate||e.minimizeIconT)}}function cs(t,o){if(t&1){let e=P();p(0,"p-button",22),T("onClick",function(){g(e);let n=u(5);return b(n.maximize())})("keydown.enter",function(){g(e);let n=u(5);return b(n.maximize())}),f(1,Jr,1,1,"span",14)(2,is,3,2,"ng-container",23)(3,rs,2,1,"ng-container",23)(4,ls,2,1,"ng-container",23),h()}if(t&2){let e=u(5);a("styleClass",e.cx("pcMaximizeButton"))("tabindex",e.maximizable?"0":"-1")("ariaLabel",e.maximizeLabel)("buttonProps",e.maximizeButtonProps),l(),a("ngIf",e.maximizeIcon&&!e._maximizeiconTemplate&&!e._minimizeiconTemplate),l(),a("ngIf",!e.maximizeIcon&&!(e.maximizeButtonProps!=null&&e.maximizeButtonProps.icon)),l(),a("ngIf",!e.maximized),l(),a("ngIf",e.maximized)}}function us(t,o){if(t&1&&I(0,"span",18),t&2){let e=u(8);a("ngClass",e.closeIcon)}}function ds(t,o){t&1&&I(0,"TimesIcon")}function ps(t,o){if(t&1&&(Y(0),f(1,us,1,1,"span",14)(2,ds,1,0,"TimesIcon",23),Z()),t&2){let e=u(7);l(),a("ngIf",e.closeIcon),l(),a("ngIf",!e.closeIcon)}}function hs(t,o){}function ms(t,o){t&1&&f(0,hs,0,0,"ng-template")}function fs(t,o){if(t&1&&(p(0,"span"),f(1,ms,1,0,null,11),h()),t&2){let e=u(7);l(),a("ngTemplateOutlet",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function gs(t,o){if(t&1&&f(0,ps,3,2,"ng-container",23)(1,fs,2,1,"span",23),t&2){let e=u(6);a("ngIf",!e._closeiconTemplate&&!e.closeIconTemplate&&!e.closeIconT&&!(e.closeButtonProps!=null&&e.closeButtonProps.icon)),l(),a("ngIf",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function bs(t,o){if(t&1){let e=P();p(0,"p-button",24),T("onClick",function(n){g(e);let r=u(5);return b(r.close(n))})("keydown.enter",function(n){g(e);let r=u(5);return b(r.close(n))}),f(1,gs,2,2,"ng-template",null,4,He),h()}if(t&2){let e=u(5);a("styleClass",e.cx("pcCloseButton"))("ariaLabel",e.closeAriaLabel)("tabindex",e.closeTabindex)("buttonProps",e.closeButtonProps)}}function _s(t,o){if(t&1){let e=P();p(0,"div",16,3),T("mousedown",function(n){g(e);let r=u(4);return b(r.initDrag(n))}),f(2,Zr,2,3,"span",17)(3,Kr,1,0,"ng-container",11),p(4,"div",18),f(5,cs,5,8,"p-button",19)(6,bs,3,4,"p-button",20),h()()}if(t&2){let e=u(4);a("ngClass",e.cx("header")),l(2),a("ngIf",!e._headerTemplate&&!e.headerTemplate&&!e.headerT),l(),a("ngTemplateOutlet",e._headerTemplate||e.headerTemplate||e.headerT),l(),a("ngClass",e.cx("headerActions")),l(),a("ngIf",e.maximizable),l(),a("ngIf",e.closable)}}function ys(t,o){t&1&&K(0)}function vs(t,o){t&1&&K(0)}function Cs(t,o){if(t&1&&(p(0,"div",18,5),Ae(2,1),f(3,vs,1,0,"ng-container",11),h()),t&2){let e=u(4);a("ngClass",e.cx("footer")),l(3),a("ngTemplateOutlet",e._footerTemplate||e.footerTemplate||e.footerT)}}function xs(t,o){if(t&1&&(f(0,Yr,1,1,"div",12)(1,_s,7,6,"div",13),p(2,"div",7,2),Ae(4),f(5,ys,1,0,"ng-container",11),h(),f(6,Cs,4,2,"div",14)),t&2){let e=u(3);a("ngIf",e.resizable),l(),a("ngIf",e.showHeader),l(),F(e.contentStyleClass),a("ngClass",e.cx("content"))("ngStyle",e.contentStyle),y("data-pc-section","content"),l(3),a("ngTemplateOutlet",e._contentTemplate||e.contentTemplate||e.contentT),l(),a("ngIf",e._footerTemplate||e.footerTemplate||e.footerT)}}function ws(t,o){if(t&1){let e=P();p(0,"div",9,0),T("@animation.start",function(n){g(e);let r=u(2);return b(r.onAnimationStart(n))})("@animation.done",function(n){g(e);let r=u(2);return b(r.onAnimationEnd(n))}),f(2,Xr,2,1,"ng-container",10)(3,xs,7,9,"ng-template",null,1,He),h()}if(t&2){let e=Mt(4),i=u(2);Le(i.style),F(i.styleClass),a("ngClass",se(13,jr,i.maximizable&&i.maximized))("ngStyle",kt(15,Wr))("pFocusTrapDisabled",i.focusTrap===!1)("@animation",se(19,Gr,De(16,qr,i.transformOptions,i.transitionOptions))),y("role",i.role)("aria-labelledby",i.ariaLabelledBy)("aria-modal",!0),l(2),a("ngIf",i._headlessTemplate||i.headlessTemplate||i.headlessT)("ngIfElse",e)}}function Is(t,o){if(t&1&&(p(0,"div",7),f(1,ws,5,21,"div",8),h()),t&2){let e=u();Le(e.maskStyle),F(e.maskStyleClass),a("ngClass",e.maskClass)("ngStyle",Vi(7,Ur,e.position==="left"||e.position==="topleft"||e.position==="bottomleft"?"flex-start":e.position==="right"||e.position==="topright"||e.position==="bottomright"?"flex-end":"center",e.position==="top"||e.position==="topleft"||e.position==="topright"?"flex-start":e.position==="bottom"||e.position==="bottomleft"||e.position==="bottomright"?"flex-end":"center",e.modal?"auto":"none")),l(),a("ngIf",e.visible)}}var Ts=({dt:t})=>`
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: ${t("dialog.border.radius")};
    box-shadow: ${t("dialog.shadow")};
    background: ${t("dialog.background")};
    border: 1px solid ${t("dialog.border.color")};
    color: ${t("dialog.color")};
    display: flex;
    flex-direction: column;
    pointer-events: auto
}

.p-dialog-content {
    overflow-y: auto;
    padding: ${t("dialog.content.padding")};
    flex-grow: 1;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${t("dialog.header.padding")};
}

.p-dialog-title {
    font-weight: ${t("dialog.title.font.weight")};
    font-size: ${t("dialog.title.font.size")};
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: ${t("dialog.footer.padding")};
    display: flex;
    justify-content: flex-end;
    gap: ${t("dialog.footer.gap")};
}

.p-dialog-header-actions {
    display: flex;
    align-items: center;
    gap: ${t("dialog.header.gap")};
}

.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-left:dir(rtl) .p-dialog-enter-from,
.p-dialog-left:dir(rtl) .p-dialog-leave-to,
.p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-right:dir(rtl) .p-dialog-enter-from,
.p-dialog-right:dir(rtl) .p-dialog-leave-to,
.p-dialog-topright:dir(rtl) .p-dialog-enter-from,
.p-dialog-topright:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

/* For PrimeNG */

.p-dialog .p-resizable-handle {
    position: absolute;
    font-size: 0.1px;
    display: block;
    cursor: se-resize;
    width: 12px;
    height: 12px;
    right: 1px;
    bottom: 1px;
}

.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`,Es={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"||t.position==="topleft"||t.position==="bottomleft"?"flex-start":t.position==="right"||t.position==="topright"||t.position==="bottomright"?"flex-end":"center",alignItems:t.position==="top"||t.position==="topleft"||t.position==="topright"?"flex-start":t.position==="bottom"||t.position==="bottomleft"||t.position==="bottomright"?"flex-end":"center",pointerEvents:t.modal?"auto":"none"}),root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},Ss={mask:({instance:t})=>{let e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===t.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":t.modal,[`p-dialog-${e}`]:e}},root:({instance:t})=>({"p-dialog p-component":!0,"p-dialog-maximized":t.maximizable&&t.maximized}),header:"p-dialog-header",title:"p-dialog-title",resizeHandle:"p-resizable-handle",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},Zn=(()=>{class t extends R{name="dialog";theme=Ts;classes=Ss;inlineStyles=Es;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var Ms=$t([Ve({transform:"{{transform}}",opacity:0}),ke("{{transition}}")]),Ds=$t([ke("{{transition}}",Ve({transform:"{{transform}}",opacity:0}))]),yi=(()=>{class t extends H{header;draggable=!0;resizable=!0;get positionLeft(){return 0}set positionLeft(e){console.log("positionLeft property is deprecated.")}get positionTop(){return 0}set positionTop(e){console.log("positionTop property is deprecated.")}contentStyle;contentStyleClass;modal=!1;closeOnEscape=!0;dismissableMask=!1;rtl=!1;closable=!0;get responsive(){return!1}set responsive(e){console.log("Responsive property is deprecated.")}appendTo;breakpoints;styleClass;maskStyleClass;maskStyle;showHeader=!0;get breakpoint(){return 649}set breakpoint(e){console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.")}blockScroll=!1;autoZIndex=!0;baseZIndex=0;minX=0;minY=0;focusOnShow=!0;maximizable=!1;keepInViewport=!0;focusTrap=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";closeIcon;closeAriaLabel;closeTabindex="0";minimizeIcon;maximizeIcon;closeButtonProps={severity:"secondary",text:!0,rounded:!0};maximizeButtonProps={severity:"secondary",text:!0,rounded:!0};get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}get style(){return this._style}set style(e){e&&(this._style=$({},e),this.originalStyle=e)}get position(){return this._position}set position(e){switch(this._position=e,e){case"topleft":case"bottomleft":case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"topright":case"bottomright":case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break;default:this.transformOptions="scale(0.7)";break}}role="dialog";onShow=new V;onHide=new V;visibleChange=new V;onResizeInit=new V;onResizeEnd=new V;onDragEnd=new V;onMaximize=new V;headerViewChild;contentViewChild;footerViewChild;headerTemplate;contentTemplate;footerTemplate;closeIconTemplate;maximizeIconTemplate;minimizeIconTemplate;headlessTemplate;_headerTemplate;_contentTemplate;_footerTemplate;_closeiconTemplate;_maximizeiconTemplate;_minimizeiconTemplate;_headlessTemplate;_visible=!1;maskVisible;container;wrapper;dragging;ariaLabelledBy=this.getAriaLabelledBy();documentDragListener;documentDragEndListener;resizing;documentResizeListener;documentResizeEndListener;documentEscapeListener;maskClickListener;lastPageX;lastPageY;preventVisibleChangePropagation;maximized;preMaximizeContentHeight;preMaximizeContainerWidth;preMaximizeContainerHeight;preMaximizePageX;preMaximizePageY;id=te("pn_id_");_style={};_position="center";originalStyle;transformOptions="scale(0.7)";styleElement;window;_componentStyle=k(Zn);headerT;contentT;footerT;closeIconT;maximizeIconT;minimizeIconT;headlessT;get maximizeLabel(){return this.config.getTranslation(_e.ARIA).maximizeLabel}zone=k(ze);get maskClass(){let i=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":this.modal||this.dismissableMask,[`p-dialog-${i}`]:i}}ngOnInit(){super.ngOnInit(),this.breakpoints&&this.createStyle()}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerT=e.template;break;case"content":this.contentT=e.template;break;case"footer":this.footerT=e.template;break;case"closeicon":this.closeIconT=e.template;break;case"maximizeicon":this.maximizeIconT=e.template;break;case"minimizeicon":this.minimizeIconT=e.template;break;case"headless":this.headlessT=e.template;break;default:this.contentT=e.template;break}})}getAriaLabelledBy(){return this.header!==null?te("pn_id_")+"_header":null}parseDurationToMilliseconds(e){let i=/([\d\.]+)(ms|s)\b/g,n=0,r;for(;(r=i.exec(e))!==null;){let s=parseFloat(r[1]),c=r[2];c==="ms"?n+=s:c==="s"&&(n+=s*1e3)}if(n!==0)return n}_focus(e){if(e){let i=this.parseDurationToMilliseconds(this.transitionOptions),n=Et.getFocusableElements(e);if(n&&n.length>0)return this.zone.runOutsideAngular(()=>{setTimeout(()=>n[0].focus(),i||5)}),!0}return!1}focus(e){let i=this._focus(e);i||(i=this._focus(this.footerViewChild?.nativeElement),i||(i=this._focus(this.headerViewChild?.nativeElement),i||this._focus(this.contentViewChild?.nativeElement)))}close(e){this.visibleChange.emit(!1),e.preventDefault()}enableModality(){this.closable&&this.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.close(e)})),this.modal&&ci()}disableModality(){if(this.wrapper){this.dismissableMask&&this.unbindMaskClickListener();let e=document.querySelectorAll(".p-dialog-mask-scrollblocker");this.modal&&e&&e.length==1&&ui(),this.cd.destroyed||this.cd.detectChanges()}}maximize(){this.maximized=!this.maximized,!this.modal&&!this.blockScroll&&(this.maximized?ci():ui()),this.onMaximize.emit({maximized:this.maximized})}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}moveOnTop(){this.autoZIndex&&(Te.set("modal",this.container,this.baseZIndex+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}createStyle(){if(le(this.platformId)&&!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let i in this.breakpoints)e+=`
                        @media screen and (max-width: ${i}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[i]} !important;
                            }
                        }
                    `;this.renderer.setProperty(this.styleElement,"innerHTML",e),Ji(this.styleElement,"nonce",this.config?.csp()?.nonce)}}initDrag(e){Ie(e.target,"p-dialog-maximize-icon")||Ie(e.target,"p-dialog-header-close-icon")||Ie(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",$e(this.document.body,"p-unselectable-text"))}onDrag(e){if(this.dragging){let i=be(this.container),n=me(this.container),r=e.pageX-this.lastPageX,s=e.pageY-this.lastPageY,c=this.container.getBoundingClientRect(),d=getComputedStyle(this.container),m=parseFloat(d.marginLeft),_=parseFloat(d.marginTop),v=c.left+r-m,w=c.top+s-_,C=_t();this.container.style.position="fixed",this.keepInViewport?(v>=this.minX&&v+i<C.width&&(this._style.left=`${v}px`,this.lastPageX=e.pageX,this.container.style.left=`${v}px`),w>=this.minY&&w+n<C.height&&(this._style.top=`${w}px`,this.lastPageY=e.pageY,this.container.style.top=`${w}px`)):(this.lastPageX=e.pageX,this.container.style.left=`${v}px`,this.lastPageY=e.pageY,this.container.style.top=`${w}px`)}}endDrag(e){this.dragging&&(this.dragging=!1,ge(this.document.body,"p-unselectable-text"),this.cd.detectChanges(),this.onDragEnd.emit(e))}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}center(){this.resetPosition()}initResize(e){this.resizable&&(this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,$e(this.document.body,"p-unselectable-text"),this.onResizeInit.emit(e))}onResize(e){if(this.resizing){let i=e.pageX-this.lastPageX,n=e.pageY-this.lastPageY,r=be(this.container),s=me(this.container),c=me(this.contentViewChild?.nativeElement),d=r+i,m=s+n,_=this.container.style.minWidth,v=this.container.style.minHeight,w=this.container.getBoundingClientRect(),C=_t();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(d+=i,m+=n),(!_||d>parseInt(_))&&w.left+d<C.width&&(this._style.width=d+"px",this.container.style.width=this._style.width),(!v||m>parseInt(v))&&w.top+m<C.height&&(this.contentViewChild.nativeElement.style.height=c+m-s+"px",this._style.height&&(this._style.height=m+"px",this.container.style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,ge(this.document.body,"p-unselectable-text"),this.onResizeEnd.emit(e))}bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable&&this.bindDocumentResizeListeners(),this.closeOnEscape&&this.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentEscapeListener()}bindDocumentDragListener(){this.documentDragListener||this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onDrag.bind(this))})}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentDragEndListener(){this.documentDragEndListener||this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.endDrag.bind(this))})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragEndListener=null)}bindDocumentResizeListeners(){!this.documentResizeListener&&!this.documentResizeEndListener&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.resizeEnd.bind(this))})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.key=="Escape"&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.wrapper):Ke(this.appendTo,this.wrapper))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.wrapper)}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container?.parentElement,this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.container?.setAttribute(this.id,""),this.modal&&this.enableModality(),this.focusOnShow&&this.focus();break;case"void":this.wrapper&&this.modal&&$e(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":this.onContainerDestroy(),this.onHide.emit({}),this.cd.markForCheck(),this.maskVisible!==this.visible&&(this.maskVisible=this.visible);break;case"visible":this.onShow.emit({});break}}onContainerDestroy(){this.unbindGlobalListeners(),this.dragging=!1,this.maskVisible=!1,this.maximized&&(this.document.body.style.removeProperty("--scrollbar;-width"),this.maximized=!1),this.modal&&this.disableModality(),Ie(this.document.body,"p-overflow-hidden")&&ge(this.document.body,"p-overflow-hidden"),this.container&&this.autoZIndex&&Te.clear(this.container),this.container=null,this.wrapper=null,this._style=this.originalStyle?$({},this.originalStyle):{}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-dialog"]],contentQueries:function(i,n,r){if(i&1&&(A(r,Ar,4),A(r,Xn,4),A(r,Yn,4),A(r,Or,4),A(r,Br,4),A(r,Pr,4),A(r,zr,4),A(r,Ce,4)),i&2){let s;S(s=M())&&(n._headerTemplate=s.first),S(s=M())&&(n._contentTemplate=s.first),S(s=M())&&(n._footerTemplate=s.first),S(s=M())&&(n._closeiconTemplate=s.first),S(s=M())&&(n._maximizeiconTemplate=s.first),S(s=M())&&(n._minimizeiconTemplate=s.first),S(s=M())&&(n._headlessTemplate=s.first),S(s=M())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&(J(Nr,5),J(Xn,5),J(Yn,5)),i&2){let r;S(r=M())&&(n.headerViewChild=r.first),S(r=M())&&(n.contentViewChild=r.first),S(r=M())&&(n.footerViewChild=r.first)}},inputs:{header:"header",draggable:[2,"draggable","draggable",x],resizable:[2,"resizable","resizable",x],positionLeft:"positionLeft",positionTop:"positionTop",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",modal:[2,"modal","modal",x],closeOnEscape:[2,"closeOnEscape","closeOnEscape",x],dismissableMask:[2,"dismissableMask","dismissableMask",x],rtl:[2,"rtl","rtl",x],closable:[2,"closable","closable",x],responsive:"responsive",appendTo:"appendTo",breakpoints:"breakpoints",styleClass:"styleClass",maskStyleClass:"maskStyleClass",maskStyle:"maskStyle",showHeader:[2,"showHeader","showHeader",x],breakpoint:"breakpoint",blockScroll:[2,"blockScroll","blockScroll",x],autoZIndex:[2,"autoZIndex","autoZIndex",x],baseZIndex:[2,"baseZIndex","baseZIndex",z],minX:[2,"minX","minX",z],minY:[2,"minY","minY",z],focusOnShow:[2,"focusOnShow","focusOnShow",x],maximizable:[2,"maximizable","maximizable",x],keepInViewport:[2,"keepInViewport","keepInViewport",x],focusTrap:[2,"focusTrap","focusTrap",x],transitionOptions:"transitionOptions",closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel",closeTabindex:"closeTabindex",minimizeIcon:"minimizeIcon",maximizeIcon:"maximizeIcon",closeButtonProps:"closeButtonProps",maximizeButtonProps:"maximizeButtonProps",visible:"visible",style:"style",position:"position",role:"role",headerTemplate:[0,"content","headerTemplate"],contentTemplate:"contentTemplate",footerTemplate:"footerTemplate",closeIconTemplate:"closeIconTemplate",maximizeIconTemplate:"maximizeIconTemplate",minimizeIconTemplate:"minimizeIconTemplate",headlessTemplate:"headlessTemplate"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange",onResizeInit:"onResizeInit",onResizeEnd:"onResizeEnd",onDragEnd:"onDragEnd",onMaximize:"onMaximize"},features:[B([Zn]),D],ngContentSelectors:Hr,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["content",""],["titlebar",""],["icon",""],["footer",""],[3,"ngClass","class","ngStyle","style",4,"ngIf"],[3,"ngClass","ngStyle"],["pFocusTrap","",3,"class","ngClass","ngStyle","style","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["style","z-index: 90;",3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass",4,"ngIf"],[2,"z-index","90",3,"mousedown","ngClass"],[3,"mousedown","ngClass"],[3,"id","ngClass",4,"ngIf"],[3,"ngClass"],[3,"styleClass","tabindex","ariaLabel","buttonProps","onClick","keydown.enter",4,"ngIf"],[3,"styleClass","ariaLabel","tabindex","buttonProps","onClick","keydown.enter",4,"ngIf"],[3,"id","ngClass"],[3,"onClick","keydown.enter","styleClass","tabindex","ariaLabel","buttonProps"],[4,"ngIf"],[3,"onClick","keydown.enter","styleClass","ariaLabel","tabindex","buttonProps"]],template:function(i,n){i&1&&(Re(Rr),f(0,Is,2,11,"div",6)),i&2&&a("ngIf",n.maskVisible)},dependencies:[ee,he,ae,ve,ye,Be,Qn,qe,Nn,Rn,N],encapsulation:2,data:{animation:[Ye("animation",[Fe("void => visible",[Lt(Ms)]),Fe("visible => void",[Lt(Ds)])])]},changeDetection:0})}return t})(),Kn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[yi,N,N]})}return t})();var Vs=["container"],Fs=["icon"],$s=["closeicon"],Ls=["*"],As=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),Os=t=>({value:"visible()",params:t}),Bs=t=>({closeCallback:t});function Ps(t,o){t&1&&K(0)}function zs(t,o){if(t&1&&f(0,Ps,1,0,"ng-container",7),t&2){let e=u(2);a("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function Ns(t,o){if(t&1&&I(0,"i",3),t&2){let e=u(2);a("ngClass",e.icon)}}function Rs(t,o){if(t&1&&I(0,"span",9),t&2){let e=u(3);a("ngClass",e.cx("text"))("innerHTML",e.text,Ti)}}function Hs(t,o){if(t&1&&(p(0,"div"),f(1,Rs,1,2,"span",8),h()),t&2){let e=u(2);l(),a("ngIf",!e.escape)}}function Us(t,o){if(t&1&&(p(0,"span",5),re(1),h()),t&2){let e=u(3);a("ngClass",e.cx("text")),l(),we(e.text)}}function js(t,o){if(t&1&&f(0,Us,2,2,"span",10),t&2){let e=u(2);a("ngIf",e.escape&&e.text)}}function Ws(t,o){t&1&&K(0)}function qs(t,o){if(t&1&&f(0,Ws,1,0,"ng-container",11),t&2){let e=u(2);a("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",se(2,Bs,e.close.bind(e)))}}function Gs(t,o){if(t&1&&(p(0,"span",5),Ae(1),h()),t&2){let e=u(2);a("ngClass",e.cx("text"))}}function Qs(t,o){if(t&1&&I(0,"i",13),t&2){let e=u(3);a("ngClass",e.closeIcon)}}function Xs(t,o){t&1&&K(0)}function Ys(t,o){if(t&1&&f(0,Xs,1,0,"ng-container",7),t&2){let e=u(3);a("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Zs(t,o){t&1&&I(0,"TimesIcon",14)}function Ks(t,o){if(t&1){let e=P();p(0,"button",12),T("click",function(n){g(e);let r=u(2);return b(r.close(n))}),f(1,Qs,1,1,"i",13)(2,Ys,1,1,"ng-container")(3,Zs,1,0,"TimesIcon",14),h()}if(t&2){let e=u(2);y("aria-label",e.closeAriaLabel),l(),oe(e.closeIcon?1:-1),l(),oe(e.closeIconTemplate||e._closeIconTemplate?2:-1),l(),oe(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function Js(t,o){if(t&1&&(p(0,"div",1)(1,"div",2),f(2,zs,1,1,"ng-container")(3,Ns,1,1,"i",3)(4,Hs,2,1,"div",4)(5,js,1,1,"ng-template",null,0,He)(7,qs,1,4,"ng-container")(8,Gs,2,1,"span",5)(9,Ks,4,4,"button",6),h()()),t&2){let e=Mt(6),i=u();a("ngClass",i.containerClass)("@messageAnimation",se(13,Os,De(10,As,i.showTransitionOptions,i.hideTransitionOptions))),y("aria-live","polite")("role","alert"),l(2),oe(i.iconTemplate||i._iconTemplate?2:-1),l(),oe(i.icon?3:-1),l(),a("ngIf",!i.escape)("ngIfElse",e),l(3),oe(i.containerTemplate||i._containerTemplate?7:8),l(2),oe(i.closable?9:-1)}}var ea=({dt:t})=>`
.p-message {
    border-radius: ${t("message.border.radius")};
    outline-width: ${t("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${t("message.content.padding")};
    gap: ${t("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${t("message.close.button.width")};
    height: ${t("message.close.button.height")};
    border-radius: ${t("message.close.button.border.radius")};
    background: transparent;
    transition: background ${t("message.transition.duration")}, color ${t("message.transition.duration")}, outline-color ${t("message.transition.duration")}, box-shadow ${t("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${t("message.close.icon.size")};
    width: ${t("message.close.icon.size")};
    height: ${t("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${t("message.close.button.focus.ring.width")};
    outline-style: ${t("message.close.button.focus.ring.style")};
    outline-offset: ${t("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${t("message.info.background")};
    outline-color: ${t("message.info.border.color")};
    color: ${t("message.info.color")};
    box-shadow: ${t("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${t("message.info.close.button.focus.ring.color")};
    box-shadow: ${t("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${t("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${t("message.info.outlined.color")};
    outline-color: ${t("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${t("message.info.simple.color")};
}

.p-message-success {
    background: ${t("message.success.background")};
    outline-color: ${t("message.success.border.color")};
    color: ${t("message.success.color")};
    box-shadow: ${t("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${t("message.success.close.button.focus.ring.color")};
    box-shadow: ${t("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${t("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${t("message.success.outlined.color")};
    outline-color: ${t("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${t("message.success.simple.color")};
}

.p-message-warn {
    background: ${t("message.warn.background")};
    outline-color: ${t("message.warn.border.color")};
    color: ${t("message.warn.color")};
    box-shadow: ${t("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${t("message.warn.close.button.focus.ring.color")};
    box-shadow: ${t("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${t("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${t("message.warn.outlined.color")};
    outline-color: ${t("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${t("message.warn.simple.color")};
}

.p-message-error {
    background: ${t("message.error.background")};
    outline-color: ${t("message.error.border.color")};
    color: ${t("message.error.color")};
    box-shadow: ${t("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${t("message.error.close.button.focus.ring.color")};
    box-shadow: ${t("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${t("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${t("message.error.outlined.color")};
    outline-color: ${t("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${t("message.error.simple.color")};
}

.p-message-secondary {
    background: ${t("message.secondary.background")};
    outline-color: ${t("message.secondary.border.color")};
    color: ${t("message.secondary.color")};
    box-shadow: ${t("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${t("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${t("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${t("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${t("message.secondary.outlined.color")};
    outline-color: ${t("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${t("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${t("message.contrast.background")};
    outline-color: ${t("message.contrast.border.color")};
    color: ${t("message.contrast.color")};
    box-shadow: ${t("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${t("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${t("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${t("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${t("message.contrast.outlined.color")};
    outline-color: ${t("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${t("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${t("message.text.font.size")};
    font-weight: ${t("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${t("message.icon.size")};
    width: ${t("message.icon.size")};
    height: ${t("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${t("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${t("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${t("message.icon.sm.size")};
    width: ${t("message.icon.sm.size")};
    height: ${t("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${t("message.close.icon.sm.size")};
    width: ${t("message.close.icon.sm.size")};
    height: ${t("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${t("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${t("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${t("message.icon.lg.size")};
    width: ${t("message.icon.lg.size")};
    height: ${t("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${t("message.close.icon.lg.size")};
    width: ${t("message.close.icon.lg.size")};
    height: ${t("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${t("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${t("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,ta={root:({props:t})=>["p-message p-component p-message-"+t.severity,{"p-message-simple":t.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Jn=(()=>{class t extends R{name="message";theme=ea;classes=ta;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var eo=(()=>{class t extends H{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new V;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let e=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",i=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${e} ${i}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=Xe(!0);_componentStyle=k(Jn);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-message"]],contentQueries:function(i,n,r){if(i&1&&(A(r,Vs,4),A(r,Fs,4),A(r,$s,4),A(r,Ce,4)),i&2){let s;S(s=M())&&(n.containerTemplate=s.first),S(s=M())&&(n.iconTemplate=s.first),S(s=M())&&(n.closeIconTemplate=s.first),S(s=M())&&(n.templates=s)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",x],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",x],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[B([Jn]),D],ngContentSelectors:Ls,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(i,n){i&1&&(Re(),f(0,Js,10,15,"div",1)),i&2&&oe(n.visible()?0:-1)},dependencies:[ee,he,ae,ve,qe,Xt,N],encapsulation:2,data:{animation:[Ye("messageAnimation",[Fe(":enter",[Ve({opacity:0,transform:"translateY(-25%)"}),ke("{{showTransitionParams}}")]),Fe(":leave",[ke("{{hideTransitionParams}}",Ve({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})();var ia=["content"],na=(t,o)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":t,"p-progressbar-indeterminate":o}),oa=t=>({$implicit:t});function ra(t,o){if(t&1&&(p(0,"div"),re(1),h()),t&2){let e=u(2);Me("display",e.value!=null&&e.value!==0?"flex":"none"),y("data-pc-section","label"),l(),ki("",e.value,"",e.unit,"")}}function sa(t,o){t&1&&K(0)}function aa(t,o){if(t&1&&(p(0,"div",3)(1,"div",4),f(2,ra,2,5,"div",5)(3,sa,1,0,"ng-container",6),h()()),t&2){let e=u();F(e.valueStyleClass),Me("width",e.value+"%")("background",e.color),a("ngClass","p-progressbar-value p-progressbar-value-animate"),y("data-pc-section","value"),l(2),a("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),l(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",se(11,oa,e.value))}}function la(t,o){if(t&1&&(p(0,"div",7),I(1,"div",8),h()),t&2){let e=u();F(e.valueStyleClass),a("ngClass","p-progressbar-indeterminate-container"),y("data-pc-section","container"),l(),Me("background",e.color),y("data-pc-section","value")}}var ca=({dt:t})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${t("progressbar.height")};
    background: ${t("progressbar.background")};
    border-radius: ${t("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${t("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${t("progressbar.label.color")};
    font-size: ${t("progressbar.label.font.size")};
    font-weight: ${t("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,ua={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},to=(()=>{class t extends R{name="progressbar";theme=ca;classes=ua;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var io=(()=>{class t extends H{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=k(to);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,r){if(i&1&&(A(r,ia,4),A(r,Ce,4)),i&2){let s;S(s=M())&&(n.contentTemplate=s.first),S(s=M())&&(n.templates=s)}},inputs:{value:[2,"value","value",z],showValue:[2,"showValue","showValue",x],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[B([to]),D],decls:3,vars:15,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(p(0,"div",0),f(1,aa,4,13,"div",1)(2,la,2,7,"div",2),h()),i&2&&(F(n.styleClass),a("ngStyle",n.style)("ngClass",De(12,na,n.mode==="determinate",n.mode==="indeterminate")),y("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-label",n.value+n.unit),l(),a("ngIf",n.mode==="determinate"),l(),a("ngIf",n.mode==="indeterminate"))},dependencies:[ee,he,ae,ve,ye,N],encapsulation:2,changeDetection:0})}return t})();var da=["file"],pa=["header"],no=["content"],ha=["toolbar"],ma=["chooseicon"],fa=["filelabel"],ga=["uploadicon"],ba=["cancelicon"],_a=["empty"],ya=["advancedfileinput"],va=["basicfileinput"],Ca=(t,o,e,i,n)=>({$implicit:t,uploadedFiles:o,chooseCallback:e,clearCallback:i,uploadCallback:n}),xa=(t,o,e,i,n,r,s,c)=>({$implicit:t,uploadedFiles:o,chooseCallback:e,clearCallback:i,removeUploadedFileCallback:n,removeFileCallback:r,progress:s,messages:c}),wa=t=>({$implicit:t});function Ia(t,o){if(t&1&&I(0,"span"),t&2){let e=u(3);F(e.chooseIcon),y("aria-label",!0)("data-pc-section","chooseicon")}}function Ta(t,o){t&1&&I(0,"PlusIcon"),t&2&&y("aria-label",!0)("data-pc-section","chooseicon")}function Ea(t,o){}function Sa(t,o){t&1&&f(0,Ea,0,0,"ng-template")}function Ma(t,o){if(t&1&&(p(0,"span"),f(1,Sa,1,0,null,11),h()),t&2){let e=u(4);y("aria-label",!0)("data-pc-section","chooseicon"),l(),a("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function Da(t,o){if(t&1&&(Y(0),f(1,Ta,1,2,"PlusIcon",9)(2,Ma,2,3,"span",9),Z()),t&2){let e=u(3);l(),a("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),l(),a("ngIf",e.chooseIconTemplate||e._chooseIconTemplate)}}function ka(t,o){if(t&1&&I(0,"span",21),t&2){let e=u(4);a("ngClass",e.uploadIcon),y("aria-hidden",!0)}}function Va(t,o){t&1&&I(0,"UploadIcon")}function Fa(t,o){}function $a(t,o){t&1&&f(0,Fa,0,0,"ng-template")}function La(t,o){if(t&1&&(p(0,"span"),f(1,$a,1,0,null,11),h()),t&2){let e=u(5);y("aria-hidden",!0),l(),a("ngTemplateOutlet",e.uploadIconTemplate||e._uploadIconTemplate)}}function Aa(t,o){if(t&1&&(Y(0),f(1,Va,1,0,"UploadIcon",9)(2,La,2,2,"span",9),Z()),t&2){let e=u(4);l(),a("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),l(),a("ngIf",e.uploadIconTemplate||e._uploadIconTemplate)}}function Oa(t,o){if(t&1){let e=P();p(0,"p-button",19),T("onClick",function(){g(e);let n=u(3);return b(n.upload())}),f(1,ka,1,2,"span",20)(2,Aa,3,2,"ng-container",9),h()}if(t&2){let e=u(3);a("label",e.uploadButtonLabel)("disabled",!e.hasFiles()||e.isFileLimitExceeded())("styleClass","p-fileupload-upload-button "+e.uploadStyleClass)("buttonProps",e.uploadButtonProps),l(),a("ngIf",e.uploadIcon),l(),a("ngIf",!e.uploadIcon)}}function Ba(t,o){if(t&1&&I(0,"span",21),t&2){let e=u(4);a("ngClass",e.cancelIcon)}}function Pa(t,o){t&1&&I(0,"TimesIcon"),t&2&&y("aria-hidden",!0)}function za(t,o){}function Na(t,o){t&1&&f(0,za,0,0,"ng-template")}function Ra(t,o){if(t&1&&(p(0,"span"),f(1,Na,1,0,null,11),h()),t&2){let e=u(5);y("aria-hidden",!0),l(),a("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function Ha(t,o){if(t&1&&(Y(0),f(1,Pa,1,1,"TimesIcon",9)(2,Ra,2,2,"span",9),Z()),t&2){let e=u(4);l(),a("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),l(),a("ngIf",e.cancelIconTemplate||e._cancelIconTemplate)}}function Ua(t,o){if(t&1){let e=P();p(0,"p-button",19),T("onClick",function(){g(e);let n=u(3);return b(n.clear())}),f(1,Ba,1,1,"span",20)(2,Ha,3,2,"ng-container",9),h()}if(t&2){let e=u(3);a("label",e.cancelButtonLabel)("disabled",!e.hasFiles()||e.uploading)("styleClass","p-fileupload-cancel-button "+e.cancelStyleClass)("buttonProps",e.cancelButtonProps),l(),a("ngIf",e.cancelIcon),l(),a("ngIf",!e.cancelIcon)}}function ja(t,o){if(t&1){let e=P();Y(0),p(1,"p-button",16),T("focus",function(){g(e);let n=u(2);return b(n.onFocus())})("blur",function(){g(e);let n=u(2);return b(n.onBlur())})("onClick",function(){g(e);let n=u(2);return b(n.choose())})("keydown.enter",function(){g(e);let n=u(2);return b(n.choose())}),p(2,"input",7,0),T("change",function(n){g(e);let r=u(2);return b(r.onFileSelect(n))}),h(),f(4,Ia,1,4,"span",17)(5,Da,3,2,"ng-container",9),h(),f(6,Oa,3,6,"p-button",18)(7,Ua,3,6,"p-button",18),Z()}if(t&2){let e=u(2);l(),a("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled||e.isChooseDisabled())("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),y("data-pc-section","choosebutton"),l(),a("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),y("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),l(2),a("ngIf",e.chooseIcon),l(),a("ngIf",!e.chooseIcon),l(),a("ngIf",!e.auto&&e.showUploadButton),l(),a("ngIf",!e.auto&&e.showCancelButton)}}function Wa(t,o){t&1&&K(0)}function qa(t,o){t&1&&K(0)}function Ga(t,o){if(t&1&&I(0,"p-progressbar",22),t&2){let e=u(2);a("value",e.progress)("showValue",!1)}}function Qa(t,o){if(t&1&&I(0,"p-message",14),t&2){let e=o.$implicit;a("severity",e.severity)("text",e.text)}}function Xa(t,o){if(t&1){let e=P();p(0,"img",33),T("error",function(n){g(e);let r=u(5);return b(r.imageError(n))}),h()}if(t&2){let e=u().$implicit,i=u(4);a("src",e.objectURL,Ei)("width",i.previewWidth)}}function Ya(t,o){t&1&&I(0,"TimesIcon")}function Za(t,o){}function Ka(t,o){t&1&&f(0,Za,0,0,"ng-template")}function Ja(t,o){if(t&1&&f(0,Ya,1,0,"TimesIcon",9)(1,Ka,1,0,null,11),t&2){let e=u(5);a("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),l(),a("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function el(t,o){if(t&1){let e=P();p(0,"div",24),f(1,Xa,1,2,"img",27),p(2,"div",28)(3,"div",29),re(4),h(),p(5,"span",30),re(6),h()(),p(7,"div",31)(8,"p-button",32),T("onClick",function(n){let r=g(e).index,s=u(4);return b(s.remove(n,r))}),f(9,Ja,2,2,"ng-template",null,2,He),h()()()}if(t&2){let e=o.$implicit,i=u(4);l(),a("ngIf",i.isImage(e)),l(3),we(e.name),l(2),we(i.formatSize(e.size)),l(2),a("disabled",i.uploading)("styleClass","p-fileupload-file-remove-button "+i.removeStyleClass)}}function tl(t,o){if(t&1&&f(0,el,11,5,"div",26),t&2){let e=u(3);a("ngForOf",e.files)}}function il(t,o){}function nl(t,o){if(t&1&&f(0,il,0,0,"ng-template",25),t&2){let e=u(3);a("ngForOf",e.files)("ngForTemplate",e.fileTemplate||e._fileTemplate)}}function ol(t,o){if(t&1&&(p(0,"div",23),f(1,tl,1,1,"div",24)(2,nl,1,2,null,25),h()),t&2){let e=u(2);l(),oe(!e.fileTemplate&&!e._fileTemplate?1:-1),l(),oe(e.fileTemplate||e._fileTemplate?2:-1)}}function rl(t,o){t&1&&K(0)}function sl(t,o){t&1&&K(0)}function al(t,o){if(t&1&&f(0,sl,1,0,"ng-container",11),t&2){let e=u(2);a("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function ll(t,o){if(t&1){let e=P();p(0,"div",6)(1,"input",7,0),T("change",function(n){g(e);let r=u();return b(r.onFileSelect(n))}),h(),p(3,"div",8),f(4,ja,8,15,"ng-container",9)(5,Wa,1,0,"ng-container",10)(6,qa,1,0,"ng-container",11),h(),p(7,"div",12,1),T("dragenter",function(n){g(e);let r=u();return b(r.onDragEnter(n))})("dragleave",function(n){g(e);let r=u();return b(r.onDragLeave(n))})("drop",function(n){g(e);let r=u();return b(r.onDrop(n))}),f(9,Ga,1,2,"p-progressbar",13),oi(10,Qa,1,2,"p-message",14,ni),f(12,ol,3,2,"div",15)(13,rl,1,0,"ng-container",10)(14,al,1,1,"ng-container"),h()()}if(t&2){let e=u();F(e.styleClass),a("ngClass","p-fileupload p-fileupload-advanced p-component")("ngStyle",e.style),y("data-pc-name","fileupload")("data-pc-section","root"),l(),Me("display","none"),a("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),y("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),l(3),a("ngIf",!e.headerTemplate&&!e._headerTemplate),l(),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)("ngTemplateOutletContext",Fi(24,Ca,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.upload.bind(e))),l(),a("ngTemplateOutlet",e.toolbarTemplate||e._toolbarTemplate),l(),y("data-pc-section","content"),l(2),a("ngIf",e.hasFiles()),l(),ri(e.msgs),l(2),a("ngIf",e.hasFiles()),l(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",$i(30,xa,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.removeUploadedFile.bind(e),e.remove.bind(e),e.progress,e.msgs)),l(),oe((e.emptyTemplate||e._emptyTemplate)&&!e.hasFiles()&&!e.hasUploadedFiles()?14:-1)}}function cl(t,o){if(t&1&&I(0,"p-message",14),t&2){let e=o.$implicit;a("severity",e.severity)("text",e.text)}}function ul(t,o){if(t&1&&I(0,"span",37),t&2){let e=u(4);a("ngClass",e.uploadIcon)}}function dl(t,o){t&1&&I(0,"UploadIcon",40),t&2&&a("styleClass","p-button-icon p-button-icon-left")}function pl(t,o){}function hl(t,o){t&1&&f(0,pl,0,0,"ng-template")}function ml(t,o){if(t&1&&(p(0,"span",41),f(1,hl,1,0,null,11),h()),t&2){let e=u(5);l(),a("ngTemplateOutlet",e._uploadIconTemplate||e.uploadIconTemplate)}}function fl(t,o){if(t&1&&(Y(0),f(1,dl,1,1,"UploadIcon",38)(2,ml,2,1,"span",39),Z()),t&2){let e=u(4);l(),a("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),l(),a("ngIf",e._uploadIconTemplate||e.uploadIconTemplate)}}function gl(t,o){if(t&1&&f(0,ul,1,1,"span",36)(1,fl,3,2,"ng-container",9),t&2){let e=u(3);a("ngIf",e.uploadIcon),l(),a("ngIf",!e.uploadIcon)}}function bl(t,o){if(t&1&&I(0,"span",43),t&2){let e=u(4);a("ngClass",e.chooseIcon)}}function _l(t,o){t&1&&I(0,"PlusIcon"),t&2&&y("data-pc-section","uploadicon")}function yl(t,o){}function vl(t,o){t&1&&f(0,yl,0,0,"ng-template")}function Cl(t,o){if(t&1&&(Y(0),f(1,_l,1,1,"PlusIcon",9)(2,vl,1,0,null,11),Z()),t&2){let e=u(4);l(),a("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),l(),a("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function xl(t,o){if(t&1&&f(0,bl,1,1,"span",42)(1,Cl,3,2,"ng-container",9),t&2){let e=u(3);a("ngIf",e.chooseIcon),l(),a("ngIf",!e.chooseIcon)}}function wl(t,o){if(t&1&&f(0,gl,2,2)(1,xl,2,2),t&2){let e=u(2);oe(e.hasFiles()&&!e.auto?0:1)}}function Il(t,o){if(t&1&&(p(0,"span"),re(1),h()),t&2){let e=u(3);F(e.cx("filelabel")),l(),Dt(" ",e.basicFileChosenLabel()," ")}}function Tl(t,o){t&1&&K(0)}function El(t,o){if(t&1&&f(0,Tl,1,0,"ng-container",10),t&2){let e=u(3);a("ngTemplateOutlet",e.fileLabelTemplate||e._fileLabelTemplate)("ngTemplateOutletContext",se(2,wa,e.files))}}function Sl(t,o){if(t&1&&f(0,Il,2,3,"span",44)(1,El,1,4,"ng-container"),t&2){let e=u(2);oe(!e.fileLabelTemplate&&!e._fileLabelTemplate?0:1)}}function Ml(t,o){if(t&1){let e=P();p(0,"div",21),oi(1,cl,1,2,"p-message",14,ni),p(3,"p-button",34),T("onClick",function(){g(e);let n=u();return b(n.onBasicUploaderClick())})("keydown",function(n){g(e);let r=u();return b(r.onBasicKeydown(n))}),f(4,wl,2,1,"ng-template",null,2,He),p(6,"input",35,3),T("change",function(n){g(e);let r=u();return b(r.onFileSelect(n))})("focus",function(){g(e);let n=u();return b(n.onFocus())})("blur",function(){g(e);let n=u();return b(n.onBlur())}),h()(),f(8,Sl,2,1),h()}if(t&2){let e=u();F(e.styleClass),a("ngClass","p-fileupload p-fileupload-basic p-component"),y("data-pc-name","fileupload"),l(),ri(e.msgs),l(2),Le(e.style),a("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled)("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),l(3),a("accept",e.accept)("multiple",e.multiple)("disabled",e.disabled),y("aria-label",e.browseFilesLabel)("data-pc-section","input"),l(2),oe(e.auto?-1:8)}}var Dl=({dt:t})=>`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid ${t("fileupload.border.color")};
    border-radius: ${t("fileupload.border.radius")};
    background: ${t("fileupload.background")};
    color: ${t("fileupload.color")};
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: ${t("fileupload.header.padding")};
    background: ${t("fileupload.header.background")};
    color: ${t("fileupload.header.color")};
    border-style: solid;
    border-width: ${t("fileupload.header.border.width")};
    border-color: ${t("fileupload.header.border.color")};
    border-radius: ${t("fileupload.header.border.radius")};
    gap: ${t("fileupload.header.gap")};
}

.p-fileupload-content {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.content.gap")};
    transition: border-color ${t("fileupload.transition.duration")};
    padding: ${t("fileupload.content.padding")};
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    height: ${t("fileupload.progressbar.height")};
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.filelist.gap")};
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: ${t("fileupload.file.padding")};
    border-bottom: 1px solid ${t("fileupload.file.border.color")};
    gap: ${t("fileupload.file.gap")};
}

.p-fileupload-file:last-child {
    border-bottom: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.file.info.gap")};
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed ${t("fileupload.content.highlight.border.color")};
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${t("fileupload.basic.gap")};
}
`,kl={root:({instance:t})=>`p-fileupload p-fileupload-${t.mode} p-component`,header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},oo=(()=>{class t extends R{name="fileupload";theme=Dl;classes=kl;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var vi=(()=>{class t extends H{name;url;method="post";multiple;accept;disabled;auto;withCredentials;maxFileSize;invalidFileSizeMessageSummary="{0}: Invalid file size, ";invalidFileSizeMessageDetail="maximum upload size is {0}.";invalidFileTypeMessageSummary="{0}: Invalid file type, ";invalidFileTypeMessageDetail="allowed file types: {0}.";invalidFileLimitMessageDetail="limit is {0} at most.";invalidFileLimitMessageSummary="Maximum number of files exceeded, ";style;styleClass;previewWidth=50;chooseLabel;uploadLabel;cancelLabel;chooseIcon;uploadIcon;cancelIcon;showUploadButton=!0;showCancelButton=!0;mode="advanced";headers;customUpload;fileLimit;uploadStyleClass;cancelStyleClass;removeStyleClass;chooseStyleClass;chooseButtonProps;uploadButtonProps={severity:"secondary"};cancelButtonProps={severity:"secondary"};onBeforeUpload=new V;onSend=new V;onUpload=new V;onError=new V;onClear=new V;onRemove=new V;onSelect=new V;onProgress=new V;uploadHandler=new V;onImageError=new V;onRemoveUploadedFile=new V;fileTemplate;headerTemplate;contentTemplate;toolbarTemplate;chooseIconTemplate;fileLabelTemplate;uploadIconTemplate;cancelIconTemplate;emptyTemplate;advancedFileInput;basicFileInput;content;set files(e){this._files=[];for(let i=0;i<e.length;i++){let n=e[i];this.validate(n)&&(this.isImage(n)&&(n.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(e[i]))),this._files.push(e[i]))}}get files(){return this._files}get basicButtonLabel(){return this.auto||!this.hasFiles()?this.chooseLabel:this.uploadLabel??this.files[0].name}_files=[];progress=0;dragHighlight;msgs;uploadedFileCount=0;focus;uploading;duplicateIEEvent;translationSubscription;dragOverListener;uploadedFiles=[];sanitizer=k(Pi);zone=k(ze);http=k(Bi);_componentStyle=k(oo);ngOnInit(){super.ngOnInit(),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()})}ngAfterViewInit(){super.ngAfterViewInit(),le(this.platformId)&&this.mode==="advanced"&&this.zone.runOutsideAngular(()=>{this.content&&(this.dragOverListener=this.renderer.listen(this.content.nativeElement,"dragover",this.onDragOver.bind(this)))})}_headerTemplate;_contentTemplate;_toolbarTemplate;_chooseIconTemplate;_uploadIconTemplate;_cancelIconTemplate;_emptyTemplate;_fileTemplate;_fileLabelTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"file":this._fileTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"toolbar":this._toolbarTemplate=e.template;break;case"chooseicon":this._chooseIconTemplate=e.template;break;case"uploadicon":this._uploadIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"filelabel":this._fileLabelTemplate=e.template;break;default:this._fileTemplate=e.template;break}})}basicFileChosenLabel(){return this.auto?this.chooseButtonLabel:this.hasFiles()?this.files&&this.files.length===1?this.files[0].name:this.config.getTranslation("fileChosenMessage")?.replace("{0}",this.files.length):this.config.getTranslation("noFileChosenMessage")||""}getTranslation(e){return this.config.getTranslation(e)}choose(){this.advancedFileInput?.nativeElement.click()}onFileSelect(e){if(e.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.msgs=[],this.multiple||(this.files=[]);let i=e.dataTransfer?e.dataTransfer.files:e.target.files;for(let n=0;n<i.length;n++){let r=i[n];this.isFileSelected(r)||this.validate(r)&&(this.isImage(r)&&(r.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(i[n]))),this.files.push(i[n]))}this.onSelect.emit({originalEvent:e,files:i,currentFiles:this.files}),this.checkFileLimit(i),this.hasFiles()&&this.auto&&(this.mode!=="advanced"||!this.isFileLimitExceeded())&&this.upload(),e.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()}isFileSelected(e){for(let i of this.files)if(i.name+i.type+i.size===e.name+e.type+e.size)return!0;return!1}isIE11(){if(le(this.platformId))return!!this.document.defaultView.MSInputMethodContext&&!!this.document.documentMode}validate(e){if(this.msgs=this.msgs||[],this.accept&&!this.isFileTypeValid(e)){let i=`${this.invalidFileTypeMessageSummary.replace("{0}",e.name)} ${this.invalidFileTypeMessageDetail.replace("{0}",this.accept)}`;return this.msgs.push({severity:"error",text:i}),!1}if(this.maxFileSize&&e.size>this.maxFileSize){let i=`${this.invalidFileSizeMessageSummary.replace("{0}",e.name)} ${this.invalidFileSizeMessageDetail.replace("{0}",this.formatSize(this.maxFileSize))}`;return this.msgs.push({severity:"error",text:i}),!1}return!0}isFileTypeValid(e){let i=this.accept?.split(",").map(n=>n.trim());for(let n of i)if(this.isWildcard(n)?this.getTypeClass(e.type)===this.getTypeClass(n):e.type==n||this.getFileExtension(e).toLowerCase()===n.toLowerCase())return!0;return!1}getTypeClass(e){return e.substring(0,e.indexOf("/"))}isWildcard(e){return e.indexOf("*")!==-1}getFileExtension(e){return"."+e.name.split(".").pop()}isImage(e){return/^image\//.test(e.type)}onImageLoad(e){window.URL.revokeObjectURL(e.src)}uploader(){if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.uploadHandler.emit({files:this.files}),this.cd.markForCheck();else{this.uploading=!0,this.msgs=[];let e=new FormData;this.onBeforeUpload.emit({formData:e});for(let i=0;i<this.files.length;i++)e.append(this.name,this.files[i],this.files[i].name);this.http.request(this.method,this.url,{body:e,headers:this.headers,reportProgress:!0,observe:"events",withCredentials:this.withCredentials}).subscribe(i=>{switch(i.type){case Ft.Sent:this.onSend.emit({originalEvent:i,formData:e});break;case Ft.Response:this.uploading=!1,this.progress=0,i.status>=200&&i.status<300?(this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.onUpload.emit({originalEvent:i,files:this.files})):this.onError.emit({files:this.files}),this.uploadedFiles.push(...this.files),this.clear();break;case Ft.UploadProgress:{i.loaded&&(this.progress=Math.round(i.loaded*100/i.total)),this.onProgress.emit({originalEvent:i,progress:this.progress});break}}this.cd.markForCheck()},i=>{this.uploading=!1,this.onError.emit({files:this.files,error:i})})}}clear(){this.files=[],this.uploadedFileCount=0,this.onClear.emit(),this.clearInputElement(),this.cd.markForCheck()}remove(e,i){this.clearInputElement(),this.onRemove.emit({originalEvent:e,file:this.files[i]}),this.files.splice(i,1),this.checkFileLimit(this.files)}removeUploadedFile(e){let i=this.uploadedFiles.splice(e,1)[0];this.uploadedFiles=[...this.uploadedFiles],this.onRemoveUploadedFile.emit({file:i,files:this.uploadedFiles})}isFileLimitExceeded(){let i=this.auto?this.files.length:this.files.length+this.uploadedFileCount;return this.fileLimit&&this.fileLimit<=i&&this.focus&&(this.focus=!1),this.fileLimit&&this.fileLimit<i}isChooseDisabled(){return this.auto?this.fileLimit&&this.fileLimit<=this.files.length:this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount}checkFileLimit(e){this.msgs??=[];let i=this.msgs.length>0&&this.fileLimit&&this.fileLimit<e.length;if(this.isFileLimitExceeded()||i){let n=`${this.invalidFileLimitMessageSummary.replace("{0}",this.fileLimit.toString())} ${this.invalidFileLimitMessageDetail.replace("{0}",this.fileLimit.toString())}`;this.msgs.push({severity:"error",text:n})}}clearInputElement(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.advancedFileInput.nativeElement.value=""),this.basicFileInput&&this.basicFileInput.nativeElement&&(this.basicFileInput.nativeElement.value="")}clearIEInput(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.duplicateIEEvent=!0,this.advancedFileInput.nativeElement.value="")}hasFiles(){return this.files&&this.files.length>0}hasUploadedFiles(){return this.uploadedFiles&&this.uploadedFiles.length>0}onDragEnter(e){this.disabled||(e.stopPropagation(),e.preventDefault())}onDragOver(e){this.disabled||($e(this.content?.nativeElement,"p-fileupload-highlight"),this.dragHighlight=!0,e.stopPropagation(),e.preventDefault())}onDragLeave(e){this.disabled||ge(this.content?.nativeElement,"p-fileupload-highlight")}onDrop(e){if(!this.disabled){ge(this.content?.nativeElement,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault();let i=e.dataTransfer?e.dataTransfer.files:e.target.files;(this.multiple||i&&i.length===1)&&this.onFileSelect(e)}}onFocus(){this.focus=!0}onBlur(){this.focus=!1}formatSize(e){let r=this.getTranslation(_e.FILE_SIZE_TYPES);if(e===0)return`0 ${r[0]}`;let s=Math.floor(Math.log(e)/Math.log(1024));return`${(e/Math.pow(1024,s)).toFixed(3)} ${r[s]}`}upload(){this.hasFiles()&&this.uploader()}onBasicUploaderClick(){this.basicFileInput?.nativeElement.click()}onBasicKeydown(e){switch(e.code){case"Space":case"Enter":this.onBasicUploaderClick(),e.preventDefault();break}}imageError(e){this.onImageError.emit(e)}getBlockableElement(){return this.el.nativeElement.children[0]}get chooseButtonLabel(){return this.chooseLabel||this.config.getTranslation(_e.CHOOSE)}get uploadButtonLabel(){return this.uploadLabel||this.config.getTranslation(_e.UPLOAD)}get cancelButtonLabel(){return this.cancelLabel||this.config.getTranslation(_e.CANCEL)}get browseFilesLabel(){return this.config.getTranslation(_e.ARIA)[_e.BROWSE_FILES]}get pendingLabel(){return this.config.getTranslation(_e.PENDING)}ngOnDestroy(){this.content&&this.content.nativeElement&&this.dragOverListener&&(this.dragOverListener(),this.dragOverListener=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-fileupload"],["p-fileUpload"]],contentQueries:function(i,n,r){if(i&1&&(A(r,da,4),A(r,pa,4),A(r,no,4),A(r,ha,4),A(r,ma,4),A(r,fa,4),A(r,ga,4),A(r,ba,4),A(r,_a,4),A(r,Ce,4)),i&2){let s;S(s=M())&&(n.fileTemplate=s.first),S(s=M())&&(n.headerTemplate=s.first),S(s=M())&&(n.contentTemplate=s.first),S(s=M())&&(n.toolbarTemplate=s.first),S(s=M())&&(n.chooseIconTemplate=s.first),S(s=M())&&(n.fileLabelTemplate=s.first),S(s=M())&&(n.uploadIconTemplate=s.first),S(s=M())&&(n.cancelIconTemplate=s.first),S(s=M())&&(n.emptyTemplate=s.first),S(s=M())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&(J(ya,5),J(va,5),J(no,5)),i&2){let r;S(r=M())&&(n.advancedFileInput=r.first),S(r=M())&&(n.basicFileInput=r.first),S(r=M())&&(n.content=r.first)}},inputs:{name:"name",url:"url",method:"method",multiple:[2,"multiple","multiple",x],accept:"accept",disabled:[2,"disabled","disabled",x],auto:[2,"auto","auto",x],withCredentials:[2,"withCredentials","withCredentials",x],maxFileSize:[2,"maxFileSize","maxFileSize",z],invalidFileSizeMessageSummary:"invalidFileSizeMessageSummary",invalidFileSizeMessageDetail:"invalidFileSizeMessageDetail",invalidFileTypeMessageSummary:"invalidFileTypeMessageSummary",invalidFileTypeMessageDetail:"invalidFileTypeMessageDetail",invalidFileLimitMessageDetail:"invalidFileLimitMessageDetail",invalidFileLimitMessageSummary:"invalidFileLimitMessageSummary",style:"style",styleClass:"styleClass",previewWidth:[2,"previewWidth","previewWidth",z],chooseLabel:"chooseLabel",uploadLabel:"uploadLabel",cancelLabel:"cancelLabel",chooseIcon:"chooseIcon",uploadIcon:"uploadIcon",cancelIcon:"cancelIcon",showUploadButton:[2,"showUploadButton","showUploadButton",x],showCancelButton:[2,"showCancelButton","showCancelButton",x],mode:"mode",headers:"headers",customUpload:[2,"customUpload","customUpload",x],fileLimit:[2,"fileLimit","fileLimit",e=>z(e,null)],uploadStyleClass:"uploadStyleClass",cancelStyleClass:"cancelStyleClass",removeStyleClass:"removeStyleClass",chooseStyleClass:"chooseStyleClass",chooseButtonProps:"chooseButtonProps",uploadButtonProps:"uploadButtonProps",cancelButtonProps:"cancelButtonProps",files:"files"},outputs:{onBeforeUpload:"onBeforeUpload",onSend:"onSend",onUpload:"onUpload",onError:"onError",onClear:"onClear",onRemove:"onRemove",onSelect:"onSelect",onProgress:"onProgress",uploadHandler:"uploadHandler",onImageError:"onImageError",onRemoveUploadedFile:"onRemoveUploadedFile"},features:[B([oo]),D],decls:2,vars:2,consts:[["advancedfileinput",""],["content",""],["icon",""],["basicfileinput",""],[3,"ngClass","ngStyle","class",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass","ngStyle"],["type","file",3,"change","multiple","accept","disabled"],[1,"p-fileupload-header"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],[1,"p-fileupload-content",3,"dragenter","dragleave","drop"],[3,"value","showValue",4,"ngIf"],[3,"severity","text"],["class","p-fileupload-file-list",4,"ngIf"],["tabindex","0",3,"focus","blur","onClick","keydown.enter","styleClass","disabled","label","buttonProps"],[3,"class",4,"ngIf"],[3,"label","disabled","styleClass","buttonProps","onClick",4,"ngIf"],[3,"onClick","label","disabled","styleClass","buttonProps"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"value","showValue"],[1,"p-fileupload-file-list"],[1,"p-fileupload-file"],["ngFor","",3,"ngForOf","ngForTemplate"],["class","p-fileupload-file",4,"ngFor","ngForOf"],["class","p-fileupload-file-thumbnail",3,"src","width","error",4,"ngIf"],[1,"p-fileupload-file-info"],[1,"p-fileupload-file-name"],[1,"p-fileupload-file-size"],[1,"p-fileupload-file-actions"],["text","","rounded","","severity","danger",3,"onClick","disabled","styleClass"],[1,"p-fileupload-file-thumbnail",3,"error","src","width"],["tabindex","0",3,"onClick","keydown","styleClass","disabled","label","buttonProps"],["type","file",3,"change","focus","blur","accept","multiple","disabled"],["class","p-button-icon p-button-icon-left",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left",3,"ngClass"],[3,"styleClass",4,"ngIf"],["class","p-button-icon p-button-icon-left",4,"ngIf"],[3,"styleClass"],[1,"p-button-icon","p-button-icon-left"],["class","p-button-icon p-button-icon-left pi",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left","pi",3,"ngClass"],[3,"class"]],template:function(i,n){i&1&&f(0,ll,15,39,"div",4)(1,Ml,9,16,"div",5),i&2&&(a("ngIf",n.mode==="advanced"),l(),a("ngIf",n.mode==="basic"))},dependencies:[ee,he,Ai,ae,ve,ye,Be,io,eo,Bn,zn,qe,N],encapsulation:2,changeDetection:0})}return t})(),ro=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[vi,N,N]})}return t})();var Fl=({dt:t})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("inputtext.color")};
    background: ${t("inputtext.background")};
    padding-block: ${t("inputtext.padding.y")};
    padding-inline: ${t("inputtext.padding.x")};
    border: 1px solid ${t("inputtext.border.color")};
    transition: background ${t("inputtext.transition.duration")}, color ${t("inputtext.transition.duration")}, border-color ${t("inputtext.transition.duration")}, outline-color ${t("inputtext.transition.duration")}, box-shadow ${t("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${t("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${t("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
    box-shadow: ${t("inputtext.focus.ring.shadow")};
    outline: ${t("inputtext.focus.ring.width")} ${t("inputtext.focus.ring.style")} ${t("inputtext.focus.ring.color")};
    outline-offset: ${t("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${t("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${t("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${t("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${t("inputtext.disabled.background")};
    color: ${t("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${t("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${t("inputtext.sm.font.size")};
    padding-block: ${t("inputtext.sm.padding.y")};
    padding-inline: ${t("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${t("inputtext.lg.font.size")};
    padding-block: ${t("inputtext.lg.padding.y")};
    padding-inline: ${t("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,$l={root:({instance:t,props:o})=>["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":o.size==="small","p-inputtext-lg":o.size==="large","p-invalid":o.invalid,"p-variant-filled":o.variant==="filled","p-inputtext-fluid":o.fluid}]},so=(()=>{class t extends R{name="inputtext";theme=Fl;classes=$l;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var Jt=(()=>{class t extends H{ngModel;variant;fluid;pSize;filled;_componentStyle=k(so);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return Oe(this.fluid)?!!i:this.fluid}constructor(e){super(),this.ngModel=e}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(i){return new(i||t)(W(It,8))};static \u0275dir=X({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(i,n){if(i&1&&T("input",function(s){return n.onInput(s)}),i&2){let r;nt("p-filled",n.filled)("p-variant-filled",((r=n.variant)!==null&&r!==void 0?r:n.config.inputStyle()||n.config.inputVariant())==="filled")("p-inputtext-fluid",n.hasFluid)("p-inputtext-sm",n.pSize==="small")("p-inputfield-sm",n.pSize==="small")("p-inputtext-lg",n.pSize==="large")("p-inputfield-lg",n.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",x],pSize:"pSize"},features:[B([so]),D]})}return t})(),ao=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({})}return t})();var Al=["clearicon"],Ol=["incrementbuttonicon"],Bl=["decrementbuttonicon"],Pl=["input"];function zl(t,o){if(t&1){let e=P();p(0,"TimesIcon",7),T("click",function(){g(e);let n=u(2);return b(n.clear())}),h()}t&2&&(a("ngClass","p-inputnumber-clear-icon"),y("data-pc-section","clearIcon"))}function Nl(t,o){}function Rl(t,o){t&1&&f(0,Nl,0,0,"ng-template")}function Hl(t,o){if(t&1){let e=P();p(0,"span",8),T("click",function(){g(e);let n=u(2);return b(n.clear())}),f(1,Rl,1,0,null,9),h()}if(t&2){let e=u(2);y("data-pc-section","clearIcon"),l(),a("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Ul(t,o){if(t&1&&(Y(0),f(1,zl,1,2,"TimesIcon",5)(2,Hl,2,2,"span",6),Z()),t&2){let e=u();l(),a("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),l(),a("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function jl(t,o){if(t&1&&I(0,"span",13),t&2){let e=u(2);a("ngClass",e.incrementButtonIcon),y("data-pc-section","incrementbuttonicon")}}function Wl(t,o){t&1&&I(0,"AngleUpIcon"),t&2&&y("data-pc-section","incrementbuttonicon")}function ql(t,o){}function Gl(t,o){t&1&&f(0,ql,0,0,"ng-template")}function Ql(t,o){if(t&1&&(Y(0),f(1,Wl,1,1,"AngleUpIcon",2)(2,Gl,1,0,null,9),Z()),t&2){let e=u(2);l(),a("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),l(),a("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Xl(t,o){if(t&1&&I(0,"span",13),t&2){let e=u(2);a("ngClass",e.decrementButtonIcon),y("data-pc-section","decrementbuttonicon")}}function Yl(t,o){t&1&&I(0,"AngleDownIcon"),t&2&&y("data-pc-section","decrementbuttonicon")}function Zl(t,o){}function Kl(t,o){t&1&&f(0,Zl,0,0,"ng-template")}function Jl(t,o){if(t&1&&(Y(0),f(1,Yl,1,1,"AngleDownIcon",2)(2,Kl,1,0,null,9),Z()),t&2){let e=u(2);l(),a("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),l(),a("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function ec(t,o){if(t&1){let e=P();p(0,"span",10)(1,"button",11),T("mousedown",function(n){g(e);let r=u();return b(r.onUpButtonMouseDown(n))})("mouseup",function(){g(e);let n=u();return b(n.onUpButtonMouseUp())})("mouseleave",function(){g(e);let n=u();return b(n.onUpButtonMouseLeave())})("keydown",function(n){g(e);let r=u();return b(r.onUpButtonKeyDown(n))})("keyup",function(){g(e);let n=u();return b(n.onUpButtonKeyUp())}),f(2,jl,1,2,"span",12)(3,Ql,3,2,"ng-container",2),h(),p(4,"button",11),T("mousedown",function(n){g(e);let r=u();return b(r.onDownButtonMouseDown(n))})("mouseup",function(){g(e);let n=u();return b(n.onDownButtonMouseUp())})("mouseleave",function(){g(e);let n=u();return b(n.onDownButtonMouseLeave())})("keydown",function(n){g(e);let r=u();return b(r.onDownButtonKeyDown(n))})("keyup",function(){g(e);let n=u();return b(n.onDownButtonKeyUp())}),f(5,Xl,1,2,"span",12)(6,Jl,3,2,"ng-container",2),h()()}if(t&2){let e=u();y("data-pc-section","buttonGroup"),l(),F(e.incrementButtonClass),a("ngClass",e._incrementButtonClass)("disabled",e.disabled),y("aria-hidden",!0)("data-pc-section","incrementbutton"),l(),a("ngIf",e.incrementButtonIcon),l(),a("ngIf",!e.incrementButtonIcon),l(),F(e.decrementButtonClass),a("ngClass",e._decrementButtonClass)("disabled",e.disabled),y("aria-hidden",!0)("data-pc-section","decrementbutton"),l(),a("ngIf",e.decrementButtonIcon),l(),a("ngIf",!e.decrementButtonIcon)}}function tc(t,o){if(t&1&&I(0,"span",13),t&2){let e=u(2);a("ngClass",e.incrementButtonIcon),y("data-pc-section","incrementbuttonicon")}}function ic(t,o){t&1&&I(0,"AngleUpIcon"),t&2&&y("data-pc-section","incrementbuttonicon")}function nc(t,o){}function oc(t,o){t&1&&f(0,nc,0,0,"ng-template")}function rc(t,o){if(t&1&&(Y(0),f(1,ic,1,1,"AngleUpIcon",2)(2,oc,1,0,null,9),Z()),t&2){let e=u(2);l(),a("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),l(),a("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function sc(t,o){if(t&1){let e=P();p(0,"button",11),T("mousedown",function(n){g(e);let r=u();return b(r.onUpButtonMouseDown(n))})("mouseup",function(){g(e);let n=u();return b(n.onUpButtonMouseUp())})("mouseleave",function(){g(e);let n=u();return b(n.onUpButtonMouseLeave())})("keydown",function(n){g(e);let r=u();return b(r.onUpButtonKeyDown(n))})("keyup",function(){g(e);let n=u();return b(n.onUpButtonKeyUp())}),f(1,tc,1,2,"span",12)(2,rc,3,2,"ng-container",2),h()}if(t&2){let e=u();F(e.incrementButtonClass),a("ngClass",e._incrementButtonClass)("disabled",e.disabled),y("aria-hidden",!0)("data-pc-section","incrementbutton"),l(),a("ngIf",e.incrementButtonIcon),l(),a("ngIf",!e.incrementButtonIcon)}}function ac(t,o){if(t&1&&I(0,"span",13),t&2){let e=u(2);a("ngClass",e.decrementButtonIcon),y("data-pc-section","decrementbuttonicon")}}function lc(t,o){t&1&&I(0,"AngleDownIcon"),t&2&&y("data-pc-section","decrementbuttonicon")}function cc(t,o){}function uc(t,o){t&1&&f(0,cc,0,0,"ng-template")}function dc(t,o){if(t&1&&(Y(0),f(1,lc,1,1,"AngleDownIcon",2)(2,uc,1,0,null,9),Z()),t&2){let e=u(2);l(),a("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),l(),a("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function pc(t,o){if(t&1){let e=P();p(0,"button",11),T("mousedown",function(n){g(e);let r=u();return b(r.onDownButtonMouseDown(n))})("mouseup",function(){g(e);let n=u();return b(n.onDownButtonMouseUp())})("mouseleave",function(){g(e);let n=u();return b(n.onDownButtonMouseLeave())})("keydown",function(n){g(e);let r=u();return b(r.onDownButtonKeyDown(n))})("keyup",function(){g(e);let n=u();return b(n.onDownButtonKeyUp())}),f(1,ac,1,2,"span",12)(2,dc,3,2,"ng-container",2),h()}if(t&2){let e=u();F(e.decrementButtonClass),a("ngClass",e._decrementButtonClass)("disabled",e.disabled),y("aria-hidden",!0)("data-pc-section","decrementbutton"),l(),a("ngIf",e.decrementButtonIcon),l(),a("ngIf",!e.decrementButtonIcon)}}var hc=({dt:t})=>`
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    cursor: pointer;
    background: ${t("inputnumber.button.background")};
    color: ${t("inputnumber.button.color")};
    width: ${t("inputnumber.button.width")};
    transition: background ${t("inputnumber.transition.duration")}, color ${t("inputnumber.transition.duration")}, border-color ${t("inputnumber.transition.duration")}, outline-color ${t("inputnumber.transition.duration")};
}

.p-inputnumber-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    right: 0.75rem;
    color: ${t("inputnumber.button.color")};
}

.p-inputnumber-button:hover {
    background: ${t("inputnumber.button.hover.background")};
    color: ${t("inputnumber.button.hover.color")};
}

.p-inputnumber-button:active {
    background: ${t("inputnumber.button.active.background")};
    color: ${t("inputnumber.button.active.color")};
}

.p-inputnumber-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    inset-block-start: 1px;
    inset-inline-end: 1px;
    height: calc(100% - 2px);
    z-index: 1;
}

.p-inputnumber-stacked .p-inputnumber-increment-button {
    padding: 0;
    border-start-end-radius: calc(${t("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-decrement-button {
    padding: 0;
    border-end-end-radius: calc(${t("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-button {
    border: 1px solid ${t("inputnumber.button.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:hover {
    border-color: ${t("inputnumber.button.hover.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:active {
    border-color: ${t("inputnumber.button.active.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-increment-button {
    order: 3;
    border-start-end-radius: ${t("inputnumber.button.border.radius")};
    border-end-end-radius: ${t("inputnumber.button.border.radius")};
    border-inline-start: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-horizontal .p-inputnumber-decrement-button {
    order: 1;
    border-start-start-radius: ${t("inputnumber.button.border.radius")};
    border-end-start-radius: ${t("inputnumber.button.border.radius")};
    border-inline-end: 0 none;
}

.p-floatlabel:has(.p-inputnumber-horizontal) label {
    margin-inline-start: ${t("inputnumber.button.width")};
}

.p-inputnumber-vertical {
    flex-direction: column;
}

.p-inputnumber-vertical .p-inputnumber-button {
    border: 1px solid ${t("inputnumber.button.border.color")};
    padding-block: ${t("inputnumber.button.vertical.padding")};
    padding-inline: 0;
}

.p-inputnumber-vertical .p-inputnumber-button:hover {
    border-color: ${t("inputnumber.button.hover.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-button:active {
    border-color: ${t("inputnumber.button.active.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-increment-button {
    order: 1;
    border-start-start-radius: ${t("inputnumber.button.border.radius")};
    border-start-end-radius: ${t("inputnumber.button.border.radius")};
    width: 100%;
    border-block-end: 0 none;
}

.p-inputnumber-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-vertical .p-inputnumber-decrement-button {
    order: 3;
    border-end-start-radius: ${t("inputnumber.button.border.radius")};
    border-end-end-radius: ${t("inputnumber.button.border.radius")};
    width: 100%;
    border-block-start: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-inputnumber-fluid {
    width: 100%;
}

.p-inputnumber-fluid .p-inputnumber-input {
    width: 1%;
}

.p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
    width: 100%;
}

.p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
}

.p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
}

p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
    border-color: ${t("inputtext.invalid.border.color")};
}

p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
}

p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}
`,mc={root:({instance:t})=>({"p-inputnumber p-component p-inputwrapper":!0,"p-inputwrapper-filled":t.filled||t.allowEmpty===!1,"p-inputwrapper-focus":t.focused,"p-inputnumber-stacked":t.showButtons&&t.buttonLayout==="stacked","p-inputnumber-horizontal":t.showButtons&&t.buttonLayout==="horizontal","p-inputnumber-vertical":t.showButtons&&t.buttonLayout==="vertical","p-inputnumber-fluid":t.hasFluid}),pcInput:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:t})=>({"p-inputnumber-button p-inputnumber-increment-button":!0,"p-disabled":t.showButtons&&t.max!==null&&t.maxlength}),decrementButton:({instance:t})=>({"p-inputnumber-button p-inputnumber-decrement-button":!0,"p-disabled":t.showButtons&&t.min!==null&&t.minlength})},lo=(()=>{class t extends R{name="inputnumber";theme=hc;classes=mc;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var fc={provide:ut,useExisting:Pe(()=>ei),multi:!0},ei=(()=>{class t extends H{injector;showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;style;placeholder;size;maxlength;tabindex;title;ariaLabelledBy;ariaLabel;ariaRequired;name;required;autocomplete;min;max;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly=!1;step=1;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;variant;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;get disabled(){return this._disabled}set disabled(e){e&&(this.focused=!1),this._disabled=e,this.timer&&this.clearTimer()}fluid=!1;onInput=new V;onFocus=new V;onBlur=new V;onKeyDown=new V;onClear=new V;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;onModelChange=()=>{};onModelTouched=()=>{};focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar;_group;_minusSign;_currency;_prefix;_suffix;_index;_disabled;_componentStyle=k(lo);ngControl=null;get _rootClass(){return this._componentStyle.classes.root({instance:this})}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}get _incrementButtonClass(){return this._componentStyle.classes.incrementButton({instance:this})}get _decrementButtonClass(){return this._componentStyle.classes.decrementButton({instance:this})}constructor(e){super(),this.injector=e}ngOnChanges(e){super.ngOnChanges(e),["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(n=>!!e[n])&&this.updateConstructParser()}get hostClasses(){return typeof this._rootClass=="string"?this._rootClass:Array.isArray(this._rootClass)?this._rootClass.join(" "):typeof this._rootClass=="object"?Object.keys(this._rootClass).filter(e=>this._rootClass[e]).join(" "):""}ngOnInit(){super.ngOnInit(),this.ngControl=this.injector.get(Je,null,{optional:!0}),this.constructParser(),this.initialized=!0}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits??void 0,maximumFractionDigits:this.maxFractionDigits??void 0}}constructParser(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());let e=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),i=new Map(e.map((n,r)=>[n,r]));this._numeral=new RegExp(`[${e.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=n=>i.get(n)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,ue($({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let n=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(n=this.prefix+n),this.suffix&&e!=this.suffix&&(n=n+this.suffix),n}return e.toString()}return""}parseValue(e){let i=new RegExp(this._suffix,""),n=new RegExp(this._prefix,""),r=new RegExp(this._currency,""),s=e.replace(i,"").replace(n,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(s){if(s==="-")return s;let c=+s;return isNaN(c)?null:c}return null}repeat(e,i,n){if(this.readonly)return;let r=i||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,n)},r),this.spin(e,n)}spin(e,i){let n=this.step*i,r=this.parseValue(this.input?.nativeElement.value)||0,s=this.validateValue(r+n);this.maxlength&&this.maxlength<this.formatValue(s).length||(this.updateInput(s,null,"spin",null),this.updateModel(e,s),this.handleOnInput(e,r,s))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.disabled||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.disabled||this.clearTimer()}onUpButtonMouseLeave(){this.disabled||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.disabled||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.disabled||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.disabled||this.clearTimer()}onDownButtonMouseLeave(){this.disabled||this.clearTimer()}onDownButtonKeyUp(){this.disabled||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let i=e.target.selectionStart,n=e.target.selectionEnd,r=e.target.value,s=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let c=i;c<=r.length;c++){let d=c===0?0:c-1;if(this.isNumeralChar(r.charAt(d))){this.input.nativeElement.setSelectionRange(c,c);break}}break;case"ArrowRight":for(let c=n;c>=0;c--)if(this.isNumeralChar(r.charAt(c))){this.input.nativeElement.setSelectionRange(c,c);break}break;case"Tab":case"Enter":s=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(s),this.input.nativeElement.setAttribute("aria-valuenow",s),this.updateModel(e,s);break;case"Backspace":{if(e.preventDefault(),i===n){if(i==1&&this.prefix||i==r.length&&this.suffix)break;let c=r.charAt(i-1),{decimalCharIndex:d,decimalCharIndexWithoutPrefix:m}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(c)){let _=this.getDecimalLength(r);if(this._group.test(c))this._group.lastIndex=0,s=r.slice(0,i-2)+r.slice(i-1);else if(this._decimal.test(c))this._decimal.lastIndex=0,_?this.input?.nativeElement.setSelectionRange(i-1,i-1):s=r.slice(0,i-1)+r.slice(i);else if(d>0&&i>d){let v=this.isDecimalMode()&&(this.minFractionDigits||0)<_?"":"0";s=r.slice(0,i-1)+v+r.slice(i)}else m===1?(s=r.slice(0,i-1)+"0"+r.slice(i),s=this.parseValue(s)>0?s:""):s=r.slice(0,i-1)+r.slice(i)}else this.mode==="currency"&&c.search(this._currency)!=-1&&(s=r.slice(1));this.updateValue(e,s,null,"delete-single")}else s=this.deleteRange(r,i,n),this.updateValue(e,s,null,"delete-range");break}case"Delete":if(e.preventDefault(),i===n){if(i==0&&this.prefix||i==r.length-1&&this.suffix)break;let c=r.charAt(i),{decimalCharIndex:d,decimalCharIndexWithoutPrefix:m}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(c)){let _=this.getDecimalLength(r);if(this._group.test(c))this._group.lastIndex=0,s=r.slice(0,i)+r.slice(i+2);else if(this._decimal.test(c))this._decimal.lastIndex=0,_?this.input?.nativeElement.setSelectionRange(i+1,i+1):s=r.slice(0,i)+r.slice(i+1);else if(d>0&&i>d){let v=this.isDecimalMode()&&(this.minFractionDigits||0)<_?"":"0";s=r.slice(0,i)+v+r.slice(i+1)}else m===1?(s=r.slice(0,i)+"0"+r.slice(i+1),s=this.parseValue(s)>0?s:""):s=r.slice(0,i)+r.slice(i+1)}this.updateValue(e,s,null,"delete-back-single")}else s=this.deleteRange(r,i,n),this.updateValue(e,s,null,"delete-range");break;case"Home":this.min&&(this.updateModel(e,this.min),e.preventDefault());break;case"End":this.max&&(this.updateModel(e,this.max),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let i=e.which||e.keyCode,n=String.fromCharCode(i),r=this.isDecimalSign(n),s=this.isMinusSign(n);i!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,n=this._decimalChar,i=n.charCodeAt(0));let{value:c,selectionStart:d,selectionEnd:m}=this.input.nativeElement,_=this.parseValue(c+n),v=_!=null?_.toString():"",w=c.substring(d,m),C=this.parseValue(w),O=C!=null?C.toString():"";if(d!==m&&O.length>0){this.insert(e,n,{isDecimalSign:r,isMinusSign:s});return}this.maxlength&&v.length>this.maxlength||(48<=i&&i<=57||s||r)&&this.insert(e,n,{isDecimalSign:r,isMinusSign:s})}onPaste(e){if(!this.disabled&&!this.readonly){e.preventDefault();let i=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(i){this.maxlength&&(i=i.toString().substring(0,this.maxlength));let n=this.parseValue(i);n!=null&&this.insert(e,n.toString())}}}allowMinusSign(){return this.min==null||this.min<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let i=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:i,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let i=e.search(this._decimal);this._decimal.lastIndex=0;let n=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let s=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:i,minusCharIndex:n,suffixCharIndex:r,currencyCharIndex:s}}insert(e,i,n={isDecimalSign:!1,isMinusSign:!1}){let r=i.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let s=this.input?.nativeElement.selectionStart,c=this.input?.nativeElement.selectionEnd,d=this.input?.nativeElement.value.trim(),{decimalCharIndex:m,minusCharIndex:_,suffixCharIndex:v,currencyCharIndex:w}=this.getCharIndexes(d),C;if(n.isMinusSign)s===0&&(C=d,(_===-1||c!==0)&&(C=this.insertText(d,i,0,c)),this.updateValue(e,C,i,"insert"));else if(n.isDecimalSign)m>0&&s===m?this.updateValue(e,d,i,"insert"):m>s&&m<c?(C=this.insertText(d,i,s,c),this.updateValue(e,C,i,"insert")):m===-1&&this.maxFractionDigits&&(C=this.insertText(d,i,s,c),this.updateValue(e,C,i,"insert"));else{let O=this.numberFormat.resolvedOptions().maximumFractionDigits,Q=s!==c?"range-insert":"insert";if(m>0&&s>m){if(s+i.length-(m+1)<=O){let de=w>=s?w-1:v>=s?v:d.length;C=d.slice(0,s)+i+d.slice(s+i.length,de)+d.slice(de),this.updateValue(e,C,i,Q)}}else C=this.insertText(d,i,s,c),this.updateValue(e,C,i,Q)}}insertText(e,i,n,r){if((i==="."?i:i.split(".")).length===2){let c=e.slice(n,r).search(this._decimal);return this._decimal.lastIndex=0,c>0?e.slice(0,n)+this.formatValue(i)+e.slice(r):e||this.formatValue(i)}else return r-n===e.length?this.formatValue(i):n===0?i+e.slice(r):r===e.length?e.slice(0,n)+i:e.slice(0,n)+i+e.slice(r)}deleteRange(e,i,n){let r;return n-i===e.length?r="":i===0?r=e.slice(n):n===e.length?r=e.slice(0,i):r=e.slice(0,i)+e.slice(n),r}initCursor(){let e=this.input?.nativeElement.selectionStart,i=this.input?.nativeElement.selectionEnd,n=this.input?.nativeElement.value,r=n.length,s=null,c=(this.prefixChar||"").length;n=n.replace(this._prefix,""),(e===i||e!==0||i<c)&&(e-=c);let d=n.charAt(e);if(this.isNumeralChar(d))return e+c;let m=e-1;for(;m>=0;)if(d=n.charAt(m),this.isNumeralChar(d)){s=m+c;break}else m--;if(s!==null)this.input?.nativeElement.setSelectionRange(s+1,s+1);else{for(m=e;m<r;)if(d=n.charAt(m),this.isNumeralChar(d)){s=m+c;break}else m++;s!==null&&this.input?.nativeElement.setSelectionRange(s,s)}return s||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==Xi()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,i,n,r){let s=this.input?.nativeElement.value,c=null;i!=null&&(c=this.parseValue(i),c=!c&&!this.allowEmpty?0:c,this.updateInput(c,n,r,i),this.handleOnInput(e,s,c))}handleOnInput(e,i,n){this.isValueChanged(i,n)&&(this.input.nativeElement.value=this.formatValue(n),this.input?.nativeElement.setAttribute("aria-valuenow",n),this.updateModel(e,n),this.onInput.emit({originalEvent:e,value:n,formattedValue:i}))}isValueChanged(e,i){if(i===null&&e!==null)return!0;if(i!=null){let n=typeof e=="string"?this.parseValue(e):e;return i!==n}return!1}validateValue(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e}updateInput(e,i,n,r){i=i||"";let s=this.input?.nativeElement.value,c=this.formatValue(e),d=s.length;if(c!==r&&(c=this.concatValues(c,r)),d===0){this.input.nativeElement.value=c,this.input.nativeElement.setSelectionRange(0,0);let _=this.initCursor()+i.length;this.input.nativeElement.setSelectionRange(_,_)}else{let m=this.input.nativeElement.selectionStart,_=this.input.nativeElement.selectionEnd;if(this.maxlength&&c.length>this.maxlength&&(c=c.slice(0,this.maxlength),m=Math.min(m,this.maxlength),_=Math.min(_,this.maxlength)),this.maxlength&&this.maxlength<c.length)return;this.input.nativeElement.value=c;let v=c.length;if(n==="range-insert"){let w=this.parseValue((s||"").slice(0,m)),O=(w!==null?w.toString():"").split("").join(`(${this.groupChar})?`),Q=new RegExp(O,"g");Q.test(c);let de=i.split("").join(`(${this.groupChar})?`),ie=new RegExp(de,"g");ie.test(c.slice(Q.lastIndex)),_=Q.lastIndex+ie.lastIndex,this.input.nativeElement.setSelectionRange(_,_)}else if(v===d)n==="insert"||n==="delete-back-single"?this.input.nativeElement.setSelectionRange(_+1,_+1):n==="delete-single"?this.input.nativeElement.setSelectionRange(_-1,_-1):(n==="delete-range"||n==="spin")&&this.input.nativeElement.setSelectionRange(_,_);else if(n==="delete-back-single"){let w=s.charAt(_-1),C=s.charAt(_),O=d-v,Q=this._group.test(C);Q&&O===1?_+=1:!Q&&this.isNumeralChar(w)&&(_+=-1*O+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(_,_)}else if(s==="-"&&n==="insert"){this.input.nativeElement.setSelectionRange(0,0);let C=this.initCursor()+i.length+1;this.input.nativeElement.setSelectionRange(C,C)}else _=_+(v-d),this.input.nativeElement.setSelectionRange(_,_)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,i){if(e&&i){let n=i.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?n!==-1?e:e.replace(this.suffixChar,"").split(this._decimal)[0]+i.replace(this.suffixChar,"").slice(n)+this.suffixChar:n!==-1?e.split(this._decimal)[0]+i.slice(n):e}return e}getDecimalLength(e){if(e){let i=e.split(this._decimal);if(i.length===2)return i[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let i=this.validateValue(this.parseValue(this.input.nativeElement.value)),n=i?.toString();this.input.nativeElement.value=this.formatValue(n),this.input.nativeElement.setAttribute("aria-valuenow",n),this.updateModel(e,i),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,i){let n=this.ngControl?.control?.updateOn==="blur";this.value!==i?(this.value=i,n&&this.focused||this.onModelChange(i)):n&&this.onModelChange(i),this.onModelTouched()}writeValue(e){this.value=e&&Number(e),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get filled(){return this.value!=null&&this.value.toString().length>0}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(i){return new(i||t)(W(ht))};static \u0275cmp=L({type:t,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(i,n,r){if(i&1&&(A(r,Al,4),A(r,Ol,4),A(r,Bl,4),A(r,Ce,4)),i&2){let s;S(s=M())&&(n.clearIconTemplate=s.first),S(s=M())&&(n.incrementButtonIconTemplate=s.first),S(s=M())&&(n.decrementButtonIconTemplate=s.first),S(s=M())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&J(Pl,5),i&2){let r;S(r=M())&&(n.input=r.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(y("data-pc-name","inputnumber")("data-pc-section","root"),F(n.hostClasses))},inputs:{showButtons:[2,"showButtons","showButtons",x],format:[2,"format","format",x],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",style:"style",placeholder:"placeholder",size:"size",maxlength:[2,"maxlength","maxlength",z],tabindex:[2,"tabindex","tabindex",z],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",x],name:"name",required:[2,"required","required",x],autocomplete:"autocomplete",min:[2,"min","min",z],max:[2,"max","max",z],incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",x],step:[2,"step","step",z],allowEmpty:[2,"allowEmpty","allowEmpty",x],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",x],variant:"variant",minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>z(e,null)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>z(e,null)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",x],autofocus:[2,"autofocus","autofocus",x],disabled:"disabled",fluid:[2,"fluid","fluid",x]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[B([fc,lo]),D,fe],decls:6,vars:32,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","ngClass","ngStyle","value","variant","disabled","readonly","pSize","pAutoFocus","fluid"],[4,"ngIf"],["class","p-inputnumber-button-group",4,"ngIf"],["type","button","tabindex","-1",3,"ngClass","class","disabled","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["class","p-inputnumber-clear-icon",3,"click",4,"ngIf"],[3,"click","ngClass"],[1,"p-inputnumber-clear-icon",3,"click"],[4,"ngTemplateOutlet"],[1,"p-inputnumber-button-group"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup","ngClass","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(i,n){if(i&1){let r=P();p(0,"input",1,0),T("input",function(c){return g(r),b(n.onUserInput(c))})("keydown",function(c){return g(r),b(n.onInputKeyDown(c))})("keypress",function(c){return g(r),b(n.onInputKeyPress(c))})("paste",function(c){return g(r),b(n.onPaste(c))})("click",function(){return g(r),b(n.onInputClick())})("focus",function(c){return g(r),b(n.onInputFocus(c))})("blur",function(c){return g(r),b(n.onInputBlur(c))}),h(),f(2,Ul,3,2,"ng-container",2)(3,ec,7,17,"span",3)(4,sc,3,8,"button",4)(5,pc,3,8,"button",4)}i&2&&(F(n.inputStyleClass),a("ngClass","p-inputnumber-input")("ngStyle",n.inputStyle)("value",n.formattedValue())("variant",n.variant)("disabled",n.disabled)("readonly",n.readonly)("pSize",n.size)("pAutoFocus",n.autofocus)("fluid",n.hasFluid),y("id",n.inputId)("aria-valuemin",n.min)("aria-valuemax",n.max)("aria-valuenow",n.value)("placeholder",n.placeholder)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy)("title",n.title)("name",n.name)("autocomplete",n.autocomplete)("maxlength",n.maxlength)("tabindex",n.tabindex)("aria-required",n.ariaRequired)("required",n.required)("min",n.min)("max",n.max)("data-pc-section","input"),l(2),a("ngIf",n.buttonLayout!="vertical"&&n.showClear&&n.value),l(),a("ngIf",n.showButtons&&n.buttonLayout==="stacked"),l(),a("ngIf",n.showButtons&&n.buttonLayout!=="stacked"),l(),a("ngIf",n.showButtons&&n.buttonLayout!=="stacked"))},dependencies:[ee,he,ae,ve,ye,Jt,We,qe,On,An,N],encapsulation:2,changeDetection:0})}return t})(),co=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[ei,N,N]})}return t})();var bc=({dt:t})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${t("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${t("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${t("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${t("tooltip.background")};
    color: ${t("tooltip.color")};
    padding: ${t("tooltip.padding")};
    box-shadow: ${t("tooltip.shadow")};
    border-radius: ${t("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0;
    border-right-color: ${t("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-left-color: ${t("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}
`,_c={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},uo=(()=>{class t extends R{name="tooltip";theme=bc;classes=_c;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var po=(()=>{class t extends H{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:te("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=k(uo);interactionInProgress=!1;constructor(e,i){super(),this.zone=e,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),le(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=$($({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(Ie(e.relatedTarget,"p-tooltip")||Ie(e.relatedTarget,"p-tooltip-text")||Ie(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Ke(this.container,this.el.nativeElement):Ke(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Wi(this.container,250),this.getOption("tooltipZIndex")==="auto"?Te.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Te.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof Si){let i=this.viewContainer.createEmbeddedView(e);i.detectChanges(),i.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[n,r]of i[e].entries())if(n===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),i=e.left+Ni(),n=e.top+Ri();return{left:i,top:n}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?At(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,i=be(e),n=(me(e)-me(this.container))/2;this.alignTooltip(i,n)}alignLeft(){this.preAlign("left");let e=be(this.container),i=(me(this.el.nativeElement)-me(this.container))/2;this.alignTooltip(-e,i)}alignTop(){this.preAlign("top");let e=(be(this.el.nativeElement)-be(this.container))/2,i=me(this.container);this.alignTooltip(e,-i)}alignBottom(){this.preAlign("bottom");let e=(be(this.el.nativeElement)-be(this.container))/2,i=me(this.el.nativeElement);this.alignTooltip(e,i)}alignTooltip(e,i){let n=this.getHostOffset(),r=n.left+e,s=n.top+i;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=$($({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return Ie(e,"p-inputwrapper")?At(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let e=this.container.getBoundingClientRect(),i=e.top,n=e.left,r=be(this.container),s=me(this.container),c=_t();return n+r>c.width||n<0||i<0||i+s>c.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new dt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Ki(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&Te.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||t)(W(ze),W(Mi))};static \u0275dir=X({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",x],showDelay:[2,"showDelay","showDelay",z],hideDelay:[2,"hideDelay","hideDelay",z],life:[2,"life","life",z],positionTop:[2,"positionTop","positionTop",z],positionLeft:[2,"positionLeft","positionLeft",z],autoHide:[2,"autoHide","autoHide",x],fitContent:[2,"fitContent","fitContent",x],hideOnEscape:[2,"hideOnEscape","hideOnEscape",x],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[B([uo]),D,fe]})}return t})(),ho=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=j({})}return t})();var vc=["canvas"],Cc=()=>({width:"400px"});function xc(t,o){if(t&1&&(p(0,"span",28),re(1),h()),t&2){let e=u();l(),Dt(" ",e.getDisplayFilename()," ")}}function wc(t,o){if(t&1){let e=P();p(0,"input",29),bt("ngModelChange",function(n){g(e);let r=u();return gt(r.customTextInput,n)||(r.customTextInput=n),b(n)}),h()}if(t&2){let e=u();ft("ngModel",e.customTextInput),a("pAutoFocus",!0)}}var mo=class t{canvasRef;deletionThreshold=100;context=null;image=null;selectedText=null;clickPosition=null;elements=[];history=[[]];historyIndex=0;textColorConst=Gt;textSymbolConst=kn;fontSettingConst=et;buttonTypeConst=ue($({},Tt),{SQUARE:"SQUARE",ELLIPSE:"ELLIPSE",ARROW:"ARROW"});isArrowMode=!1;arrowStartPosition=null;isSquareMode=!1;isEllipseMode=!1;isLineMode=!1;squareStartPosition=null;ellipseStartPosition=null;lineStartPosition=null;isColorPickerOpen=!1;wasSquareModeBeforeColorPicker=!1;wasEllipseModeBeforeColorPicker=!1;wasLineModeBeforeColorPicker=!1;wasArrowModeBeforeColorPicker=!1;originalFilename="";selectedColor=Gt.DEFAULT;fontSize=et.FONT_SIZE;showTextDialog=!1;customTextInput="";isCustomTextMode=!1;isDeleteMode=!1;activeButton=null;updateFontSize(){this.selectedText&&(this.selectedText.size=this.fontSize)}ngAfterViewInit(){this.context=this.canvasRef.nativeElement.getContext("2d")}onFileSelected(o){let e=o.files[0];if(!e)return;let i=new FileReader;this.originalFilename=e.name,this.elements=[],this.history=[[]],this.historyIndex=0,i.onload=n=>{this.image=new Image,this.image.onload=()=>this.drawImage(),this.image.src=n.target?.result},i.readAsDataURL(e)}selectText(o,e){this.selectedColor=e,this.selectedText={symbol:o,color:e,size:this.fontSize},this.isCustomTextMode=!1,this.isDeleteMode=!1,this.isSquareMode=!1,this.isEllipseMode=!1,this.isLineMode=!1,this.isArrowMode=!1,this.activeButton=o===this.textSymbolConst.CHECK?Tt.CHECK:Tt.X}exportImage(){if(!this.image)return;let o=this.canvasRef.nativeElement,e=document.createElement("a"),[i,n]=this.originalFilename.split("."),r=`${i}_edited.${n||"png"}`;e.download=r,e.href=o.toDataURL("image/png"),e.click()}onCanvasClick(o){if(this.isCustomTextMode){let i=this.canvasRef.nativeElement.getBoundingClientRect();this.clickPosition={x:o.clientX-i.left,y:o.clientY-i.top},this.showTextDialog=!0}else if(this.isDeleteMode){let e=this.findNearestElement(o);e&&(this.elements=this.elements.filter(i=>i!==e),this.saveToHistory(),this.redrawCanvas());return}else if(this.selectedText&&this.context){let i=this.canvasRef.nativeElement.getBoundingClientRect(),n=o.clientX-i.left,r=o.clientY-i.top;this.context.font=`${this.selectedText.size}${et.FONT_UNIT} ${et.FONT_FAMILY}`;let s=this.context.measureText(this.selectedText.symbol);n-=s.width/2,r+=10,this.elements.push({type:"text",text:this.selectedText.symbol,color:this.selectedText.color,x:n,y:r,size:this.selectedText.size}),this.saveToHistory(),this.redrawCanvas()}}undo(){this.historyIndex>0&&(this.historyIndex--,this.elements=[...this.history[this.historyIndex]],this.redrawCanvas())}redo(){this.historyIndex<this.history.length-1&&(this.historyIndex++,this.elements=[...this.history[this.historyIndex]],this.redrawCanvas())}updateColor(o){this.selectedColor=o,this.selectedText&&(this.selectedText.color=o)}onColorPickerOpen(){this.isColorPickerOpen=!0,this.wasSquareModeBeforeColorPicker=this.isSquareMode,this.wasEllipseModeBeforeColorPicker=this.isEllipseMode,this.wasLineModeBeforeColorPicker=this.isLineMode,this.wasArrowModeBeforeColorPicker=this.isArrowMode,this.isSquareMode&&(this.isSquareMode=!1,this.squareStartPosition=null),this.isEllipseMode&&(this.isEllipseMode=!1,this.ellipseStartPosition=null),this.isLineMode&&(this.isLineMode=!1,this.lineStartPosition=null),this.isArrowMode&&(this.isArrowMode=!1,this.arrowStartPosition=null)}onColorPickerClose(){this.isColorPickerOpen=!1,this.wasSquareModeBeforeColorPicker?(this.enableSquareMode(this.selectedColor),this.disableWasModeFlags()):this.wasEllipseModeBeforeColorPicker?(this.enableEllipseMode(this.selectedColor),this.disableWasModeFlags()):this.wasLineModeBeforeColorPicker?(this.enableLineMode(this.selectedColor),this.disableWasModeFlags()):this.wasArrowModeBeforeColorPicker&&(this.enableArrowMode(this.selectedColor),this.disableWasModeFlags())}enableArrowMode(o){this.selectedColor=o,this.isArrowMode=!0,this.isLineMode=!1,this.isSquareMode=!1,this.isEllipseMode=!1,this.isDeleteMode=!1,this.isCustomTextMode=!1,this.selectedText=null,this.activeButton=this.buttonTypeConst.ARROW}enableLineMode(o){this.selectedColor=o,this.isLineMode=!0,this.isSquareMode=!1,this.isEllipseMode=!1,this.isArrowMode=!1,this.isDeleteMode=!1,this.isCustomTextMode=!1,this.selectedText=null,this.activeButton=this.buttonTypeConst.LINE}enableCustomTextMode(){this.isCustomTextMode=!0,this.isDeleteMode=!1,this.isSquareMode=!1,this.isEllipseMode=!1,this.isLineMode=!1,this.isArrowMode=!1,this.selectedText=null,this.activeButton=Tt.FREE_TEXT,this.selectedColor=Gt.FREE_TEXT}confirmTextInput(){!this.clickPosition||!this.customTextInput.trim()||(this.elements.push({type:"text",text:this.customTextInput,color:this.selectedColor,x:this.clickPosition.x,y:this.clickPosition.y,size:this.fontSize}),this.saveToHistory(),this.redrawCanvas(),this.resetTextInput())}cancelTextInput(){this.resetTextInput()}getDisplayFilename(){if(!this.originalFilename)return"";let[o,e]=this.originalFilename.split(".");return o.length<=20?this.originalFilename:`${o.substring(0,20)}...${e?"."+e:""}`}toggleDeleteMode(){this.isDeleteMode=!this.isDeleteMode,this.activeButton=this.isDeleteMode?this.buttonTypeConst.DELETE:null,this.selectedText=null,this.isCustomTextMode=!1,this.isSquareMode=!1,this.isEllipseMode=!1,this.isLineMode=!1,this.isArrowMode=!1}enableSquareMode(o){this.selectedColor=o,this.isSquareMode=!0,this.isEllipseMode=!1,this.isLineMode=!1,this.isArrowMode=!1,this.isDeleteMode=!1,this.selectedText=null,this.isCustomTextMode=!1,this.activeButton=this.buttonTypeConst.SQUARE}enableEllipseMode(o){this.selectedColor=o,this.isEllipseMode=!0,this.isLineMode=!1,this.isSquareMode=!1,this.isArrowMode=!1,this.isDeleteMode=!1,this.selectedText=null,this.isCustomTextMode=!1,this.activeButton=this.buttonTypeConst.ELLIPSE}disableWasModeFlags(){this.wasSquareModeBeforeColorPicker=!1,this.wasEllipseModeBeforeColorPicker=!1,this.wasLineModeBeforeColorPicker=!1,this.wasArrowModeBeforeColorPicker=!1}drawImage(){if(!this.context||!this.image)return;let o=this.canvasRef.nativeElement;o.width=this.image.width,o.height=this.image.height,this.context.drawImage(this.image,0,0,this.image.width,this.image.height),this.redrawCanvas()}saveToHistory(){this.historyIndex<this.history.length-1&&(this.history=this.history.slice(0,this.historyIndex+1));let e=this.elements.map(r=>r.type==="square"?ue($({},r),{width:Math.abs(r.width),height:Math.abs(r.height)}):$({},r)).map(r=>$({},r)),i=this.history[this.historyIndex];if(this.history.length===1&&this.history[0].length===0){this.history.push(e),this.historyIndex=1;return}if(e.length!==i.length){this.history.push(e),this.historyIndex=this.history.length-1;return}e.some((r,s)=>JSON.stringify(r)!==JSON.stringify(i[s]))&&(this.history.push(e),this.historyIndex=this.history.length-1)}redrawCanvas(){if(!this.context||!this.image)return;let o=this.canvasRef.nativeElement;this.context.clearRect(0,0,o.width,o.height),this.context.drawImage(this.image,0,0,o.width,o.height),this.elements.forEach(e=>{if(this.context)switch(e.type){case"text":this.drawText(e);break;case"square":this.drawSquare(e);break;case"ellipse":this.drawEllipse(e);break;case"line":this.drawLine(e);break;case"arrow":this.drawArrow(e);break;default:break}})}drawText(o){this.context&&(this.context.font=`${o.size}${et.FONT_UNIT} ${et.FONT_FAMILY}`,this.context.fillStyle=o.color,this.context.fillText(o.text,o.x,o.y))}drawSquare(o){this.context&&(this.context.strokeStyle=o.color,this.context.lineWidth=2,this.context.strokeRect(o.x,o.y,o.width,o.height))}drawEllipse(o){this.context&&(this.context.strokeStyle=o.color,this.context.lineWidth=2,this.context.beginPath(),this.context.ellipse(o.x,o.y,o.radiusX,o.radiusY,0,0,2*Math.PI),this.context.stroke())}drawLine(o){this.context&&(this.context.strokeStyle=o.color,this.context.lineWidth=2,this.context.beginPath(),this.context.moveTo(o.startX,o.startY),this.context.lineTo(o.endX,o.endY),this.context.stroke())}drawArrow(o){if(!this.context)return;this.context.strokeStyle=o.color,this.context.lineWidth=2,this.context.beginPath(),this.context.moveTo(o.startX,o.startY),this.context.lineTo(o.endX,o.endY),this.context.stroke();let e=18,i=o.endX-o.startX,n=o.endY-o.startY,r=Math.atan2(n,i);for(let s of[Math.PI/7,-Math.PI/7])this.context.beginPath(),this.context.moveTo(o.endX,o.endY),this.context.lineTo(o.endX-e*Math.cos(r+s),o.endY-e*Math.sin(r+s)),this.context.stroke()}resetTextInput(){this.clickPosition=null,this.customTextInput="",this.showTextDialog=!1}findNearestElement(o){if(!this.context||!this.image)return null;let i=this.canvasRef.nativeElement.getBoundingClientRect(),n=o.clientX-i.left,r=o.clientY-i.top,s=null,c=1/0;return this.elements.forEach(d=>{let m=1/0,_=!1;if(d.type==="text")m=Math.sqrt(Math.pow(n-d.x,2)+Math.pow(r-d.y,2)),_=m<this.deletionThreshold;else if(d.type==="square"){if(n>=d.x&&n<=d.x+d.width&&r>=d.y&&r<=d.y+d.height){let w=d.x+d.width/2,C=d.y+d.height/2;m=Math.sqrt(Math.pow(n-w,2)+Math.pow(r-C,2)),_=!0}}else if(d.type==="ellipse"){let v=Math.pow(n-d.x,2)/Math.pow(d.radiusX,2)+Math.pow(r-d.y,2)/Math.pow(d.radiusY,2);m=Math.abs(v-1)*Math.max(d.radiusX,d.radiusY),_=v<=1.05}else if(d.type==="line"){let v=d.startX,w=d.startY,C=d.endX,O=d.endY,Q=n-v,de=r-w,ie=C-v,pe=O-w,ti=Q*ie+de*pe,pt=ie*ie+pe*pe,xe=-1;pt!==0&&(xe=ti/pt);let Ee,Se;xe<0?(Ee=v,Se=w):xe>1?(Ee=C,Se=O):(Ee=v+xe*ie,Se=w+xe*pe),m=Math.sqrt((n-Ee)*(n-Ee)+(r-Se)*(r-Se)),_=m<this.deletionThreshold}else if(d.type==="arrow"){let v=d.startX,w=d.startY,C=d.endX,O=d.endY,Q=n-v,de=r-w,ie=C-v,pe=O-w,ti=Q*ie+de*pe,pt=ie*ie+pe*pe,xe=-1;pt!==0&&(xe=ti/pt);let Ee,Se;xe<0?(Ee=v,Se=w):xe>1?(Ee=C,Se=O):(Ee=v+xe*ie,Se=w+xe*pe),m=Math.sqrt((n-Ee)**2+(r-Se)**2),_=m<this.deletionThreshold}else m=1/0;_&&m<c&&(c=m,s=d)}),s}onUndoKey(o){o.preventDefault(),this.undo()}onRedoKey(o){o.preventDefault(),this.redo()}onMouseDown(o){if(this.isColorPickerOpen)return;let i=this.canvasRef.nativeElement.getBoundingClientRect(),n=o.clientX>=i.left&&o.clientX<=i.right&&o.clientY>=i.top&&o.clientY<=i.bottom;this.isSquareMode&&this.context&&n&&!this.isColorPickerOpen&&(this.squareStartPosition={x:o.clientX-i.left,y:o.clientY-i.top}),this.isEllipseMode&&this.context&&n&&!this.isColorPickerOpen&&(this.ellipseStartPosition={x:o.clientX-i.left,y:o.clientY-i.top}),this.isLineMode&&this.context&&n&&!this.isColorPickerOpen&&(this.lineStartPosition={x:o.clientX-i.left,y:o.clientY-i.top}),this.isArrowMode&&this.context&&n&&!this.isColorPickerOpen&&(this.arrowStartPosition={x:o.clientX-i.left,y:o.clientY-i.top})}onMouseMove(o){if(this.isColorPickerOpen)return;let i=this.canvasRef.nativeElement.getBoundingClientRect(),n=o.clientX>=i.left&&o.clientX<=i.right&&o.clientY>=i.top&&o.clientY<=i.bottom;if(this.isSquareMode&&this.squareStartPosition&&this.context&&this.image&&n&&!this.isColorPickerOpen){let r=o.clientX-i.left,s=o.clientY-i.top,c=r-this.squareStartPosition.x,d=s-this.squareStartPosition.y,m=c,_=d;if(o.shiftKey){let v=Math.max(Math.abs(c),Math.abs(d));m=v*Math.sign(c||1),_=v*Math.sign(d||1)}this.redrawCanvas(),this.context.strokeStyle=this.selectedColor,this.context.lineWidth=2,this.context.strokeRect(this.squareStartPosition.x,this.squareStartPosition.y,m,_)}if(this.isEllipseMode&&this.ellipseStartPosition&&this.context&&this.image&&n&&!this.isColorPickerOpen){let r=o.clientX-i.left,s=o.clientY-i.top,c=r-this.ellipseStartPosition.x,d=s-this.ellipseStartPosition.y,m=this.ellipseStartPosition.x+c/2,_=this.ellipseStartPosition.y+d/2,v=Math.abs(c)/2,w=Math.abs(d)/2;if(o.shiftKey){let C=Math.max(v,w);v=C,w=C}this.redrawCanvas(),this.context.strokeStyle=this.selectedColor,this.context.lineWidth=2,this.context.beginPath(),this.context.ellipse(m,_,v,w,0,0,2*Math.PI),this.context.stroke()}if(this.isLineMode&&this.lineStartPosition&&this.context&&this.image&&n&&!this.isColorPickerOpen){let r=o.clientX-i.left,s=o.clientY-i.top;if(o.shiftKey){let c=this.lineStartPosition.x,d=this.lineStartPosition.y,m=r-c,_=s-d,v=Math.atan2(_,m),w=Math.round(v/(Math.PI/4))*(Math.PI/4),C=Math.sqrt(m*m+_*_);r=c+Math.cos(w)*C,s=d+Math.sin(w)*C}this.redrawCanvas(),this.context.strokeStyle=this.selectedColor,this.context.lineWidth=2,this.context.beginPath(),this.context.moveTo(this.lineStartPosition.x,this.lineStartPosition.y),this.context.lineTo(r,s),this.context.stroke()}if(this.isArrowMode&&this.arrowStartPosition&&this.context&&this.image&&n&&!this.isColorPickerOpen){let r=o.clientX-i.left,s=o.clientY-i.top;if(o.shiftKey){let v=this.arrowStartPosition.x,w=this.arrowStartPosition.y,C=r-v,O=s-w,Q=Math.atan2(O,C),de=Math.round(Q/(Math.PI/4))*(Math.PI/4),ie=Math.sqrt(C*C+O*O);r=v+Math.cos(de)*ie,s=w+Math.sin(de)*ie}this.redrawCanvas(),this.context.strokeStyle=this.selectedColor,this.context.lineWidth=2,this.context.beginPath(),this.context.moveTo(this.arrowStartPosition.x,this.arrowStartPosition.y),this.context.lineTo(r,s),this.context.stroke();let c=18,d=r-this.arrowStartPosition.x,m=s-this.arrowStartPosition.y,_=Math.atan2(m,d);for(let v of[Math.PI/7,-Math.PI/7])this.context.beginPath(),this.context.moveTo(r,s),this.context.lineTo(r-c*Math.cos(_+v),s-c*Math.sin(_+v)),this.context.stroke()}}onMouseUp(o){if(this.isColorPickerOpen)return;let i=this.canvasRef.nativeElement.getBoundingClientRect(),n=o.clientX>=i.left&&o.clientX<=i.right&&o.clientY>=i.top&&o.clientY<=i.bottom;if(this.isSquareMode&&this.squareStartPosition&&n){let r=o.clientX-i.left,s=o.clientY-i.top,c=r-this.squareStartPosition.x,d=s-this.squareStartPosition.y,m=c,_=d;if(o.shiftKey){let C=Math.max(Math.abs(c),Math.abs(d));m=C*Math.sign(c||1),_=C*Math.sign(d||1)}let v=this.squareStartPosition.x,w=this.squareStartPosition.y;m<0&&(v=v+m),_<0&&(w=w+_),Math.abs(m)>5&&Math.abs(_)>5&&(this.elements.push({type:"square",x:v,y:w,width:Math.abs(m),height:Math.abs(_),color:this.selectedColor}),this.saveToHistory()),this.redrawCanvas(),this.squareStartPosition=null}if(this.isEllipseMode&&this.ellipseStartPosition&&n){let r=o.clientX-i.left,s=o.clientY-i.top,c=r-this.ellipseStartPosition.x,d=s-this.ellipseStartPosition.y,m=this.ellipseStartPosition.x+c/2,_=this.ellipseStartPosition.y+d/2,v=Math.abs(c)/2,w=Math.abs(d)/2;if(o.shiftKey){let C=Math.max(v,w);v=C,w=C}v>5&&w>5&&(this.elements.push({type:"ellipse",x:m,y:_,radiusX:v,radiusY:w,color:this.selectedColor}),this.saveToHistory()),this.redrawCanvas(),this.ellipseStartPosition=null}if(this.isLineMode&&this.lineStartPosition&&n){let r=o.clientX-i.left,s=o.clientY-i.top;if(o.shiftKey){let c=this.lineStartPosition.x,d=this.lineStartPosition.y,m=r-c,_=s-d,v=Math.atan2(_,m),w=Math.round(v/(Math.PI/4))*(Math.PI/4),C=Math.sqrt(m*m+_*_);r=c+Math.cos(w)*C,s=d+Math.sin(w)*C}(Math.abs(r-this.lineStartPosition.x)>5||Math.abs(s-this.lineStartPosition.y)>5)&&(this.elements.push({type:"line",startX:this.lineStartPosition.x,startY:this.lineStartPosition.y,endX:r,endY:s,color:this.selectedColor}),this.saveToHistory()),this.redrawCanvas(),this.lineStartPosition=null}if(this.isArrowMode&&this.arrowStartPosition&&n){let r=o.clientX-i.left,s=o.clientY-i.top;if(o.shiftKey){let c=this.arrowStartPosition.x,d=this.arrowStartPosition.y,m=r-c,_=s-d,v=Math.atan2(_,m),w=Math.round(v/(Math.PI/4))*(Math.PI/4),C=Math.sqrt(m*m+_*_);r=c+Math.cos(w)*C,s=d+Math.sin(w)*C}(Math.abs(r-this.arrowStartPosition.x)>5||Math.abs(s-this.arrowStartPosition.y)>5)&&(this.elements.push({type:"arrow",startX:this.arrowStartPosition.x,startY:this.arrowStartPosition.y,endX:r,endY:s,color:this.selectedColor}),this.saveToHistory()),this.redrawCanvas(),this.arrowStartPosition=null}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["app-simple-image-editor"]],viewQuery:function(e,i){if(e&1&&J(vc,5),e&2){let n;S(n=M())&&(i.canvasRef=n.first)}},hostBindings:function(e,i){e&1&&T("keydown.control.z",function(r){return i.onUndoKey(r)},!1,ii)("keydown.control.y",function(r){return i.onRedoKey(r)},!1,ii)("mousedown",function(r){return i.onMouseDown(r)})("mousemove",function(r){return i.onMouseMove(r)})("mouseup",function(r){return i.onMouseUp(r)})},decls:29,vars:44,consts:[["canvas",""],[1,"custom-card","image-editor-container"],[1,"grid","grid-cols-12","mt-6"],[1,"flex","text-left","col-span-3"],["mode","basic","name","imageUpload","accept","image/*","chooseLabel","Upload Image",1,"file-input",3,"uploadHandler","maxFileSize","auto","customUpload"],["class","ml-2 text-gray-500 flex items-center",4,"ngIf"],[1,"text-center","col-span-6"],[1,"font-size-input","mr-2",3,"ngModelChange","suffix","ngModel","showButtons","min","max"],[1,"color-picker","mr-8",3,"ngModelChange","onChange","onShow","onHide","ngModel"],["icon","pi pi-check",1,"mr-2",3,"click","severity","raised","plain"],["icon","pi pi-times",1,"mr-2",3,"click","severity","raised","plain"],["icon","pi pi-pencil",1,"mr-8",3,"click","severity","raised","plain"],["icon","pi pi-stop","pTooltip","Draw Rectangle (Hold Shift for Square)","tooltipPosition","bottom",1,"mr-2",3,"click","severity","raised","plain"],["icon","pi pi-circle","pTooltip","Draw Ellipse (Hold Shift for Circle)","tooltipPosition","bottom",1,"mr-8",3,"click","severity","raised","plain"],["icon","pi pi-minus","pTooltip","Draw Line (Hold Shift for Straight/Diagonal)","tooltipPosition","bottom",1,"mr-2",3,"click","severity","raised","plain"],["icon","pi pi-arrow-right","pTooltip","Draw Arrow (Hold Shift for Straight/Diagonal)","tooltipPosition","bottom",1,"mr-8",3,"click","severity","raised","plain"],["icon","pi pi-chevron-left",1,"mr-2",3,"click","outlined"],["icon","pi pi-chevron-right",1,"mr-8",3,"click","outlined"],["icon","pi pi-trash","pTooltip","Click at the start of text to delete it - especially important for long text elements","tooltipPosition","right",3,"click","severity","raised","plain"],[1,"text-right","col-span-3"],["label","Export Image","icon","pi pi-download","severity","help",3,"click","raised"],[1,"editor-wrapper"],[1,"canvas-container"],[3,"click"],["header","Enter Custom Text",3,"visibleChange","closable","visible","modal"],["class","w-full","type","text","pInputText","","name","customTextInput","autocomplete","off","placeholder","Enter text to insert",3,"ngModel","pAutoFocus","ngModelChange",4,"ngIf"],[1,"flex","justify-end","gap-2","mt-6"],["saveButtonLabel","Insert","saveButtonType","submit",3,"save","cancel"],[1,"ml-2","text-gray-500","flex","items-center"],["type","text","pInputText","","name","customTextInput","autocomplete","off","placeholder","Enter text to insert",1,"w-full",3,"ngModelChange","ngModel","pAutoFocus"]],template:function(e,i){if(e&1){let n=P();p(0,"div",1)(1,"div",2)(2,"div",3)(3,"p-fileUpload",4),T("uploadHandler",function(s){return g(n),b(i.onFileSelected(s))}),h(),f(4,xc,2,1,"span",5),h(),p(5,"div",6)(6,"p-inputnumber",7),bt("ngModelChange",function(s){return g(n),gt(i.fontSize,s)||(i.fontSize=s),b(s)}),T("ngModelChange",function(){return g(n),b(i.updateFontSize())}),h(),p(7,"p-colorPicker",8),bt("ngModelChange",function(s){return g(n),gt(i.selectedColor,s)||(i.selectedColor=s),b(s)}),T("onChange",function(){return g(n),b(i.updateColor(i.selectedColor))})("onShow",function(){return g(n),b(i.onColorPickerOpen())})("onHide",function(){return g(n),b(i.onColorPickerClose())}),h(),p(8,"p-button",9),T("click",function(){return g(n),b(i.selectText(i.textSymbolConst.CHECK,i.textColorConst.CHECK))}),h(),p(9,"p-button",10),T("click",function(){return g(n),b(i.selectText(i.textSymbolConst.X,i.textColorConst.X))}),h(),p(10,"p-button",11),T("click",function(){return g(n),b(i.enableCustomTextMode())}),h(),p(11,"p-button",12),T("click",function(){return g(n),b(i.enableSquareMode(i.textColorConst.SQUARE))}),h(),p(12,"p-button",13),T("click",function(){return g(n),b(i.enableEllipseMode(i.textColorConst.ELLIPSE))}),h(),p(13,"p-button",14),T("click",function(){return g(n),b(i.enableLineMode(i.textColorConst.LINE))}),h(),p(14,"p-button",15),T("click",function(){return g(n),b(i.enableArrowMode(i.textColorConst.LINE))}),h(),p(15,"p-button",16),T("click",function(s){return g(n),i.undo(),b(s.stopPropagation())}),h(),p(16,"p-button",17),T("click",function(s){return g(n),i.redo(),b(s.stopPropagation())}),h(),p(17,"p-button",18),T("click",function(){return g(n),b(i.toggleDeleteMode())}),h()(),p(18,"div",19)(19,"p-button",20),T("click",function(){return g(n),b(i.exportImage())}),h()()(),p(20,"div",21)(21,"div",22)(22,"canvas",23,0),T("click",function(s){return g(n),b(i.onCanvasClick(s))}),h()()(),p(24,"p-dialog",24),bt("visibleChange",function(s){return g(n),gt(i.showTextDialog,s)||(i.showTextDialog=s),b(s)}),p(25,"form"),f(26,wc,1,2,"input",25),p(27,"div",26)(28,"app-save-cancel",27),T("save",function(){return g(n),b(i.confirmTextInput())})("cancel",function(){return g(n),b(i.cancelTextInput())}),h()()()()()}e&2&&(l(3),a("maxFileSize",5e6)("auto",!0)("customUpload",!0),l(),a("ngIf",i.originalFilename),l(2),a("suffix",i.fontSettingConst.FONT_UNIT),ft("ngModel",i.fontSize),a("showButtons",!0)("min",0)("max",100),l(),ft("ngModel",i.selectedColor),l(),a("severity",i.activeButton===i.buttonTypeConst.CHECK?"success":"secondary")("raised",i.activeButton===i.buttonTypeConst.CHECK)("plain",i.activeButton!==null&&i.activeButton!==i.buttonTypeConst.CHECK),l(),a("severity",i.activeButton===i.buttonTypeConst.X?"danger":"secondary")("raised",i.activeButton===i.buttonTypeConst.X)("plain",i.activeButton!==null&&i.activeButton!==i.buttonTypeConst.X),l(),a("severity",i.activeButton===i.buttonTypeConst.FREE_TEXT?"info":"secondary")("raised",i.activeButton===i.buttonTypeConst.FREE_TEXT)("plain",i.activeButton!==null&&i.activeButton!==i.buttonTypeConst.FREE_TEXT),l(),a("severity",i.activeButton===i.buttonTypeConst.SQUARE?"warn":"secondary")("raised",i.activeButton===i.buttonTypeConst.SQUARE)("plain",i.activeButton!==null&&i.activeButton!==i.buttonTypeConst.SQUARE),l(),a("severity",i.activeButton===i.buttonTypeConst.ELLIPSE?"warn":"secondary")("raised",i.activeButton===i.buttonTypeConst.ELLIPSE)("plain",i.activeButton!==null&&i.activeButton!==i.buttonTypeConst.ELLIPSE),l(),a("severity",i.activeButton===i.buttonTypeConst.LINE?"help":"secondary")("raised",i.activeButton===i.buttonTypeConst.LINE)("plain",i.activeButton!==null&&i.activeButton!==i.buttonTypeConst.LINE),l(),a("severity",i.activeButton===i.buttonTypeConst.ARROW?"help":"secondary")("raised",i.activeButton===i.buttonTypeConst.ARROW)("plain",i.activeButton!==null&&i.activeButton!==i.buttonTypeConst.ARROW),l(),a("outlined",!0),l(),a("outlined",!0),l(),a("severity",i.activeButton===i.buttonTypeConst.DELETE?"primary":"secondary")("raised",i.activeButton===i.buttonTypeConst.DELETE)("plain",i.activeButton!==null&&i.activeButton!==i.buttonTypeConst.DELETE),l(2),a("raised",!0),l(5),Le(kt(43,Cc)),a("closable",!1),ft("visible",i.showTextDialog),a("modal",!0),l(2),a("ngIf",i.showTextDialog))},dependencies:[ee,ae,Sn,Tn,Ut,_n,yn,It,bi,Mn,Yt,Be,ro,vi,Gn,Kt,co,ei,Kn,yi,ao,Jt,Zt,Qt,We,ho,po],styles:[".image-editor-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem;padding-left:1.5rem;padding-right:1.5rem;width:100%;height:100%;margin:0;background-color:#fff}.image-editor-container[_ngcontent-%COMP%]     .font-size-input .p-inputnumber-input{width:80px}.image-editor-container[_ngcontent-%COMP%]     .color-picker .p-colorpicker, .image-editor-container[_ngcontent-%COMP%]     .color-picker .p-colorpicker-preview{width:40px;height:40px}.editor-wrapper[_ngcontent-%COMP%]{display:flex;gap:1rem;height:calc(100vh - 120px)}.canvas-container[_ngcontent-%COMP%]{flex:1;justify-items:center;padding:1rem;background-color:#f8f9fa;border:1px dashed #ddd;overflow:auto}"],changeDetection:0})};export{mo as SimpleImageEditorComponent};
