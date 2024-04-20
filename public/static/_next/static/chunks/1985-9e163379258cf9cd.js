"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1985],{18569:function(e,t,n){n.d(t,{v:function(){return en}});var r,u,i,o,l,a,s,c,d,f,m,p=n(2265),v=n(60597),h=n(11931),g=n(27442),b=n(82769),E=n(32600),y=n(46618),w=n(48957),I=n(52057);let S=null!=(m=p.useId)?m:function(){let e=(0,w.H)(),[t,n]=p.useState(e?()=>I.O.nextId():null);return(0,E.e)(()=>{null===t&&n(I.O.nextId())},[t]),null!=t?""+t:void 0};var x=((r=x||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r),F=((u=F||{})[u.First=0]="First",u[u.Previous=1]="Previous",u[u.Next=2]="Next",u[u.Last=3]="Last",u[u.Specific=4]="Specific",u[u.Nothing=5]="Nothing",u);function T(e){return I.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let R=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var N=((i=N||{})[i.First=1]="First",i[i.Previous=2]="Previous",i[i.Next=4]="Next",i[i.Last=8]="Last",i[i.WrapAround=16]="WrapAround",i[i.NoScroll=32]="NoScroll",i),M=((o=M||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),P=((l=P||{})[l.Previous=-1]="Previous",l[l.Next=1]="Next",l);function O(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(R)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var A=((a=A||{})[a.Strict=0]="Strict",a[a.Loose=1]="Loose",a);function C(e,t=0){var n;return e!==(null==(n=T(e))?void 0:n.body)&&(0,v.E)(t,{0:()=>e.matches(R),1(){let t=e;for(;null!==t;){if(t.matches(R))return!0;t=t.parentElement}return!1}})}function L(e){let t=T(e);(0,g.k)().nextFrame(()=>{t&&!C(t.activeElement,0)&&(null==e||e.focus({preventScroll:!0}))})}var D=((s=D||{})[s.Keyboard=0]="Keyboard",s[s.Mouse=1]="Mouse",s);function k(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),u=t(n);if(null===r||null===u)return 0;let i=r.compareDocumentPosition(u);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));var j=n(61858);function H(e,t,n){let r=(0,j.E)(t);(0,p.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}var _=n(25306);function z(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var U=n(12950);function V(e){return[e.screenX,e.screenY]}let Z=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function B(e){var t,n;let r=null!=(t=e.innerText)?t:"",u=e.cloneNode(!0);if(!(u instanceof HTMLElement))return r;let i=!1;for(let e of u.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))e.remove(),i=!0;let o=i?null!=(n=u.innerText)?n:"":r;return Z.test(o)&&(o=o.replace(Z,"")),o}var G=((c=G||{})[c.Open=0]="Open",c[c.Closed=1]="Closed",c),K=((d=K||{})[d.Pointer=0]="Pointer",d[d.Other=1]="Other",d),$=((f=$||{})[f.OpenMenu=0]="OpenMenu",f[f.CloseMenu=1]="CloseMenu",f[f.GoToItem=2]="GoToItem",f[f.Search=3]="Search",f[f.ClearSearch=4]="ClearSearch",f[f.RegisterItem=5]="RegisterItem",f[f.UnregisterItem=6]="UnregisterItem",f);function q(e,t=e=>e){let n=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,r=k(t(e.items.slice()),e=>e.dataRef.current.domRef.current),u=n?r.indexOf(n):null;return -1===u&&(u=null),{items:r,activeItemIndex:u}}let Q={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,__demoMode:!1,menuState:0},2:(e,t)=>{var n;let r=q(e),u=function(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),u=null!=r?r:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=n.slice().reverse().findIndex((e,n,r)=>(-1===u||!(r.length-n-1>=u))&&!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 2:return n.findIndex((e,n)=>!(n<=u)&&!t.resolveDisabled(e));case 3:{let e=n.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 4:return n.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===i?r:i}(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:u,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),u=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))&&!e.dataRef.current.disabled}),i=u?e.items.indexOf(u):-1;return -1===i||i===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:i,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let n=q(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=q(e,e=>{let n=e.findIndex(e=>e.id===t.id);return -1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}}},Y=(0,p.createContext)(null);function W(e){let t=(0,p.useContext)(Y);if(null===t){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,W),t}return t}function J(e,t){return(0,v.E)(t.type,Q,e,t)}Y.displayName="MenuContext";let X=p.Fragment,ee=h.AN.RenderStrategy|h.AN.Static,et=p.Fragment,en=Object.assign((0,h.yV)(function(e,t){let{__demoMode:n=!1,...r}=e,u=(0,p.useReducer)(J,{__demoMode:n,menuState:n?0:1,buttonRef:(0,p.createRef)(),itemsRef:(0,p.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:i,itemsRef:o,buttonRef:l},a]=u,s=(0,y.T)(t);!function(e,t,n=!0){var r;let u,i=(0,p.useRef)(!1);function o(n,r){if(!i.current||n.defaultPrevented)return;let u=r(n);if(null!==u&&u.getRootNode().contains(u)&&u.isConnected){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(u)||n.composed&&n.composedPath().includes(e))return}return C(u,A.Loose)||-1===u.tabIndex||n.preventDefault(),t(n,u)}}(0,p.useEffect)(()=>{requestAnimationFrame(()=>{i.current=n})},[n]);let l=(0,p.useRef)(null);H("pointerdown",e=>{var t,n;i.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),H("mousedown",e=>{var t,n;i.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),H("click",e=>{l.current&&(o(e,()=>l.current),l.current=null)},!0),H("touchend",e=>o(e,()=>e.target instanceof HTMLElement?e.target:null),!0),r="blur",u=(0,j.E)(e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null)),(0,p.useEffect)(()=>{function e(e){u.current(e)}return window.addEventListener(r,e,!0),()=>window.removeEventListener(r,e,!0)},[r,!0])}([l,o],(e,t)=>{var n;a({type:1}),C(t,A.Loose)||(e.preventDefault(),null==(n=l.current)||n.focus())},0===i);let c=(0,U.z)(()=>{a({type:1})}),d=(0,p.useMemo)(()=>({open:0===i,close:c}),[i,c]);return p.createElement(Y.Provider,{value:u},p.createElement(_.up,{value:(0,v.E)(i,{0:_.ZM.Open,1:_.ZM.Closed})},(0,h.sY)({ourProps:{ref:s},theirProps:r,slot:d,defaultTag:X,name:"Menu"})))}),{Button:(0,h.yV)(function(e,t){var n;let r=S(),{id:u=`headlessui-menu-button-${r}`,...i}=e,[o,l]=W("Menu.Button"),a=(0,y.T)(o.buttonRef,t),s=(0,b.G)(),c=(0,U.z)(e=>{switch(e.key){case x.Space:case x.Enter:case x.ArrowDown:e.preventDefault(),e.stopPropagation(),l({type:0}),s.nextFrame(()=>l({type:2,focus:F.First}));break;case x.ArrowUp:e.preventDefault(),e.stopPropagation(),l({type:0}),s.nextFrame(()=>l({type:2,focus:F.Last}))}}),d=(0,U.z)(e=>{e.key===x.Space&&e.preventDefault()}),f=(0,U.z)(t=>{if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(t.currentTarget))return t.preventDefault();e.disabled||(0===o.menuState?(l({type:1}),s.nextFrame(()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),l({type:0})))}),m=(0,p.useMemo)(()=>({open:0===o.menuState}),[o]),v={ref:a,id:u,type:function(e,t){let[n,r]=(0,p.useState)(()=>z(e));return(0,E.e)(()=>{r(z(e))},[e.type,e.as]),(0,E.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,o.buttonRef),"aria-haspopup":"menu","aria-controls":null==(n=o.itemsRef.current)?void 0:n.id,"aria-expanded":0===o.menuState,onKeyDown:c,onKeyUp:d,onClick:f};return(0,h.sY)({ourProps:v,theirProps:i,slot:m,defaultTag:"button",name:"Menu.Button"})}),Items:(0,h.yV)(function(e,t){var n,r;let u=S(),{id:i=`headlessui-menu-items-${u}`,...o}=e,[l,a]=W("Menu.Items"),s=(0,y.T)(l.itemsRef,t),c=function(...e){return(0,p.useMemo)(()=>T(...e),[...e])}(l.itemsRef),d=(0,b.G)(),f=(0,_.oJ)(),m=null!==f?(f&_.ZM.Open)===_.ZM.Open:0===l.menuState;(0,p.useEffect)(()=>{let e=l.itemsRef.current;e&&0===l.menuState&&e!==(null==c?void 0:c.activeElement)&&e.focus({preventScroll:!0})},[l.menuState,l.itemsRef,c]),function({container:e,accept:t,walk:n,enabled:r=!0}){let u=(0,p.useRef)(t),i=(0,p.useRef)(n);(0,p.useEffect)(()=>{u.current=t,i.current=n},[t,n]),(0,E.e)(()=>{if(!e||!r)return;let t=T(e);if(!t)return;let n=u.current,o=i.current,l=Object.assign(e=>n(e),{acceptNode:n}),a=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,l,!1);for(;a.nextNode();)o(a.currentNode)},[e,r,u,i])}({container:l.itemsRef.current,enabled:0===l.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let v=(0,U.z)(e=>{var t,n;switch(d.dispose(),e.key){case x.Space:if(""!==l.searchQuery)return e.preventDefault(),e.stopPropagation(),a({type:3,value:e.key});case x.Enter:if(e.preventDefault(),e.stopPropagation(),a({type:1}),null!==l.activeItemIndex){let{dataRef:e}=l.items[l.activeItemIndex];null==(n=null==(t=e.current)?void 0:t.domRef.current)||n.click()}L(l.buttonRef.current);break;case x.ArrowDown:return e.preventDefault(),e.stopPropagation(),a({type:2,focus:F.Next});case x.ArrowUp:return e.preventDefault(),e.stopPropagation(),a({type:2,focus:F.Previous});case x.Home:case x.PageUp:return e.preventDefault(),e.stopPropagation(),a({type:2,focus:F.First});case x.End:case x.PageDown:return e.preventDefault(),e.stopPropagation(),a({type:2,focus:F.Last});case x.Escape:e.preventDefault(),e.stopPropagation(),a({type:1}),(0,g.k)().nextFrame(()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case x.Tab:e.preventDefault(),e.stopPropagation(),a({type:1}),(0,g.k)().nextFrame(()=>{var t,n;t=l.buttonRef.current,n=e.shiftKey?N.Previous:N.Next,function(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:u=[]}={}){var i,o,l;let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?k(e):e:O(e);u.length>0&&s.length>1&&(s=s.filter(e=>!u.includes(e))),r=null!=r?r:a.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},m=0,p=s.length,v;do{if(m>=p||m+p<=0)return 0;let e=d+m;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}null==(v=s[e])||v.focus(f),m+=c}while(v!==a.activeElement);6&t&&null!=(l=null==(o=null==(i=v)?void 0:i.matches)?void 0:o.call(i,"textarea,input"))&&l&&v.select()}(O(),n,{relativeTo:t})});break;default:1===e.key.length&&(a({type:3,value:e.key}),d.setTimeout(()=>a({type:4}),350))}}),w=(0,U.z)(e=>{e.key===x.Space&&e.preventDefault()}),I=(0,p.useMemo)(()=>({open:0===l.menuState}),[l]),R={"aria-activedescendant":null===l.activeItemIndex||null==(n=l.items[l.activeItemIndex])?void 0:n.id,"aria-labelledby":null==(r=l.buttonRef.current)?void 0:r.id,id:i,onKeyDown:v,onKeyUp:w,role:"menu",tabIndex:0,ref:s};return(0,h.sY)({ourProps:R,theirProps:o,slot:I,defaultTag:"div",features:ee,visible:m,name:"Menu.Items"})}),Item:(0,h.yV)(function(e,t){let n,r,u,i=S(),{id:o=`headlessui-menu-item-${i}`,disabled:l=!1,...a}=e,[s,c]=W("Menu.Item"),d=null!==s.activeItemIndex&&s.items[s.activeItemIndex].id===o,f=(0,p.useRef)(null),m=(0,y.T)(t,f);(0,E.e)(()=>{if(s.__demoMode||0!==s.menuState||!d||0===s.activationTrigger)return;let e=(0,g.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=f.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[s.__demoMode,f,d,s.menuState,s.activationTrigger,s.activeItemIndex]);let v=(n=(0,p.useRef)(""),r=(0,p.useRef)(""),(0,U.z)(()=>{let e=f.current;if(!e)return"";let t=e.innerText;if(n.current===t)return r.current;let u=(function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let e=n.split(" ").map(e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():B(t).trim()}return null}).filter(Boolean);if(e.length>0)return e.join(", ")}return B(e).trim()})(e).trim().toLowerCase();return n.current=t,r.current=u,u})),b=(0,p.useRef)({disabled:l,domRef:f,get textValue(){return v()}});(0,E.e)(()=>{b.current.disabled=l},[b,l]),(0,E.e)(()=>(c({type:5,id:o,dataRef:b}),()=>c({type:6,id:o})),[b,o]);let w=(0,U.z)(()=>{c({type:1})}),I=(0,U.z)(e=>{if(l)return e.preventDefault();c({type:1}),L(s.buttonRef.current)}),x=(0,U.z)(()=>{if(l)return c({type:2,focus:F.Nothing});c({type:2,focus:F.Specific,id:o})}),T=(u=(0,p.useRef)([-1,-1]),{wasMoved(e){let t=V(e);return(u.current[0]!==t[0]||u.current[1]!==t[1])&&(u.current=t,!0)},update(e){u.current=V(e)}}),R=(0,U.z)(e=>T.update(e)),N=(0,U.z)(e=>{T.wasMoved(e)&&(l||d||c({type:2,focus:F.Specific,id:o,trigger:0}))}),M=(0,U.z)(e=>{T.wasMoved(e)&&(l||d&&c({type:2,focus:F.Nothing}))}),P=(0,p.useMemo)(()=>({active:d,disabled:l,close:w}),[d,l,w]);return(0,h.sY)({ourProps:{id:o,ref:m,role:"menuitem",tabIndex:!0===l?void 0:-1,"aria-disabled":!0===l||void 0,disabled:void 0,onClick:I,onFocus:x,onPointerEnter:R,onMouseEnter:R,onPointerMove:N,onMouseMove:N,onPointerLeave:M,onMouseLeave:M},theirProps:a,slot:P,defaultTag:et,name:"Menu.Item"})})})},993:function(e,t,n){n.d(t,{u:function(){return A}});var r,u=n(2265),i=n(11931),o=n(25306),l=n(60597),a=n(32600);function s(){let e=(0,u.useRef)(!1);return(0,a.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var c=n(61858),d=n(48957),f=n(46618),m=n(27442);function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function v(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h=n(82769),g=n(12950),b=n(63960);function E(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let y=(0,u.createContext)(null);y.displayName="TransitionContext";var w=((r=w||{}).Visible="visible",r.Hidden="hidden",r);let I=(0,u.createContext)(null);function S(e){return"children"in e?S(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function x(e,t){let n=(0,c.E)(e),r=(0,u.useRef)([]),o=s(),a=(0,h.G)(),d=(0,g.z)((e,t=i.l4.Hidden)=>{let u=r.current.findIndex(({el:t})=>t===e);-1!==u&&((0,l.E)(t,{[i.l4.Unmount](){r.current.splice(u,1)},[i.l4.Hidden](){r.current[u].state="hidden"}}),a.microTask(()=>{var e;!S(r)&&o.current&&(null==(e=n.current)||e.call(n))}))}),f=(0,g.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>d(e,i.l4.Unmount)}),m=(0,u.useRef)([]),p=(0,u.useRef)(Promise.resolve()),v=(0,u.useRef)({enter:[],leave:[],idle:[]}),b=(0,g.z)((e,n,r)=>{m.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{m.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(v.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?p.current=p.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),E=(0,g.z)((e,t,n)=>{Promise.all(v.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=m.current.shift())||e()}).then(()=>n(t))});return(0,u.useMemo)(()=>({children:r,register:f,unregister:d,onStart:b,onStop:E,wait:p,chains:v}),[f,d,r,b,E,v,p])}function F(){}I.displayName="NestingContext";let T=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function R(e){var t;let n={};for(let r of T)n[r]=null!=(t=e[r])?t:F;return n}let N=i.AN.RenderStrategy,M=(0,i.yV)(function(e,t){let{show:n,appear:r=!1,unmount:l=!0,...s}=e,c=(0,u.useRef)(null),m=(0,f.T)(c,t);(0,d.H)();let p=(0,o.oJ)();if(void 0===n&&null!==p&&(n=(p&o.ZM.Open)===o.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,u.useState)(n?"visible":"hidden"),b=x(()=>{h("hidden")}),[E,w]=(0,u.useState)(!0),F=(0,u.useRef)([n]);(0,a.e)(()=>{!1!==E&&F.current[F.current.length-1]!==n&&(F.current.push(n),w(!1))},[F,n]);let T=(0,u.useMemo)(()=>({show:n,appear:r,initial:E}),[n,r,E]);(0,u.useEffect)(()=>{if(n)h("visible");else if(S(b)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[n,b]);let R={unmount:l},M=(0,g.z)(()=>{var t;E&&w(!1),null==(t=e.beforeEnter)||t.call(e)}),O=(0,g.z)(()=>{var t;E&&w(!1),null==(t=e.beforeLeave)||t.call(e)});return u.createElement(I.Provider,{value:b},u.createElement(y.Provider,{value:T},(0,i.sY)({ourProps:{...R,as:u.Fragment,children:u.createElement(P,{ref:m,...R,...s,beforeEnter:M,beforeLeave:O})},theirProps:{},defaultTag:u.Fragment,features:N,visible:"visible"===v,name:"Transition"})))}),P=(0,i.yV)(function(e,t){var n,r,w;let F;let{beforeEnter:T,afterEnter:M,beforeLeave:P,afterLeave:O,enter:A,enterFrom:C,enterTo:L,entered:D,leave:k,leaveFrom:j,leaveTo:H,..._}=e,z=(0,u.useRef)(null),U=(0,f.T)(z,t),V=null==(n=_.unmount)||n?i.l4.Unmount:i.l4.Hidden,{show:Z,appear:B,initial:G}=function(){let e=(0,u.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[K,$]=(0,u.useState)(Z?"visible":"hidden"),q=function(){let e=(0,u.useContext)(I);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:Q,unregister:Y}=q;(0,u.useEffect)(()=>Q(z),[Q,z]),(0,u.useEffect)(()=>{if(V===i.l4.Hidden&&z.current){if(Z&&"visible"!==K){$("visible");return}return(0,l.E)(K,{hidden:()=>Y(z),visible:()=>Q(z)})}},[K,z,Q,Y,Z,V]);let W=(0,c.E)({base:E(_.className),enter:E(A),enterFrom:E(C),enterTo:E(L),entered:E(D),leave:E(k),leaveFrom:E(j),leaveTo:E(H)}),J=(w={beforeEnter:T,afterEnter:M,beforeLeave:P,afterLeave:O},F=(0,u.useRef)(R(w)),(0,u.useEffect)(()=>{F.current=R(w)},[w]),F),X=(0,d.H)();(0,u.useEffect)(()=>{if(X&&"visible"===K&&null===z.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[z,K,X]);let ee=B&&Z&&G,et=X&&(!G||B)?Z?"enter":"leave":"idle",en=function(e=0){let[t,n]=(0,u.useState)(e),r=s(),i=(0,u.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),o=(0,u.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:i,hasFlag:o,removeFlag:(0,u.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,u.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),er=(0,g.z)(e=>(0,l.E)(e,{enter:()=>{en.addFlag(o.ZM.Opening),J.current.beforeEnter()},leave:()=>{en.addFlag(o.ZM.Closing),J.current.beforeLeave()},idle:()=>{}})),eu=(0,g.z)(e=>(0,l.E)(e,{enter:()=>{en.removeFlag(o.ZM.Opening),J.current.afterEnter()},leave:()=>{en.removeFlag(o.ZM.Closing),J.current.afterLeave()},idle:()=>{}})),ei=x(()=>{$("hidden"),Y(z)},q);!function({immediate:e,container:t,direction:n,classes:r,onStart:u,onStop:i}){let o=s(),d=(0,h.G)(),f=(0,c.E)(n);(0,a.e)(()=>{e&&(f.current="enter")},[e]),(0,a.e)(()=>{let e=(0,m.k)();d.add(e.dispose);let n=t.current;if(n&&"idle"!==f.current&&o.current){var a,s,c;let t,o,d,h,g,b,E;return e.dispose(),u.current(f.current),e.add((a=r.current,s="enter"===f.current,c=()=>{e.dispose(),i.current(f.current)},o=s?"enter":"leave",d=(0,m.k)(),h=void 0!==c?(t={called:!1},(...e)=>{if(!t.called)return t.called=!0,c(...e)}):()=>{},"enter"===o&&(n.removeAttribute("hidden"),n.style.display=""),g=(0,l.E)(o,{enter:()=>a.enter,leave:()=>a.leave}),b=(0,l.E)(o,{enter:()=>a.enterTo,leave:()=>a.leaveTo}),E=(0,l.E)(o,{enter:()=>a.enterFrom,leave:()=>a.leaveFrom}),v(n,...a.base,...a.enter,...a.enterTo,...a.enterFrom,...a.leave,...a.leaveFrom,...a.leaveTo,...a.entered),p(n,...a.base,...g,...E),d.nextFrame(()=>{v(n,...a.base,...g,...E),p(n,...a.base,...g,...b),function(e,t){let n=(0,m.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:u}=getComputedStyle(e),[i,o]=[r,u].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),l=i+o;if(0!==l){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},l),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(n,()=>(v(n,...a.base,...g),p(n,...a.base,...a.entered),h()))}),d.dispose)),e.dispose}},[n])}({immediate:ee,container:z,classes:W,direction:et,onStart:(0,c.E)(e=>{ei.onStart(z,e,er)}),onStop:(0,c.E)(e=>{ei.onStop(z,e,eu),"leave"!==e||S(ei)||($("hidden"),Y(z))})});let eo=_;return ee?eo={...eo,className:(0,b.A)(_.className,...W.current.enter,...W.current.enterFrom)}:(eo.className=(0,b.A)(_.className,null==(r=z.current)?void 0:r.className),""===eo.className&&delete eo.className),u.createElement(I.Provider,{value:ei},u.createElement(o.up,{value:(0,l.E)(K,{visible:o.ZM.Open,hidden:o.ZM.Closed})|en.flags},(0,i.sY)({ourProps:{ref:U},theirProps:eo,defaultTag:"div",features:N,visible:"visible"===K,name:"Transition.Child"})))}),O=(0,i.yV)(function(e,t){let n=null!==(0,u.useContext)(y),r=null!==(0,o.oJ)();return u.createElement(u.Fragment,null,!n&&r?u.createElement(M,{ref:t,...e}):u.createElement(P,{ref:t,...e}))}),A=Object.assign(M,{Child:O,Root:M})},82769:function(e,t,n){n.d(t,{G:function(){return i}});var r=n(2265),u=n(27442);function i(){let[e]=(0,r.useState)(u.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},12950:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(2265),u=n(61858);let i=function(e){let t=(0,u.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},32600:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(2265),u=n(52057);let i=(e,t)=>{u.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},61858:function(e,t,n){n.d(t,{E:function(){return i}});var r=n(2265),u=n(32600);function i(e){let t=(0,r.useRef)(e);return(0,u.e)(()=>{t.current=e},[e]),t}},48957:function(e,t,n){n.d(t,{H:function(){return o}});var r,u=n(2265),i=n(52057);function o(){let e;let t=(e="undefined"==typeof document,(0,(r||(r=n.t(u,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[o,l]=u.useState(i.O.isHandoffComplete);return o&&!1===i.O.isHandoffComplete&&l(!1),u.useEffect(()=>{!0!==o&&l(!0)},[o]),u.useEffect(()=>i.O.handoff(),[]),!t&&o}},46618:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(2265),u=n(12950);let i=Symbol();function o(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,u.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[i]))?void 0:n}},25306:function(e,t,n){n.d(t,{ZM:function(){return o},oJ:function(){return l},up:function(){return a}});var r,u=n(2265);let i=(0,u.createContext)(null);i.displayName="OpenClosedContext";var o=((r=o||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function l(){return(0,u.useContext)(i)}function a({value:e,children:t}){return u.createElement(i.Provider,{value:e},t)}},63960:function(e,t,n){n.d(t,{A:function(){return r}});function r(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}},27442:function(e,t,n){n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,u)=>(e.addEventListener(t,r,u),n.add(()=>e.removeEventListener(t,r,u))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){var t;let r={current:!0};return t=()=>{r.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e})),n.add(()=>{r.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}})},52057:function(e,t,n){n.d(t,{O:function(){return o}});var r=Object.defineProperty,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i=(e,t,n)=>(u(e,"symbol"!=typeof t?t+"":t,n),n);let o=new class{constructor(){i(this,"current",this.detect()),i(this,"handoffState","pending"),i(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},60597:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let u=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}},11931:function(e,t,n){n.d(t,{AN:function(){return a},l4:function(){return s},sY:function(){return c},yV:function(){return m}});var r,u,i=n(2265),o=n(63960),l=n(60597),a=((r=a||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((u=s||{})[u.Unmount=0]="Unmount",u[u.Hidden=1]="Hidden",u);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:u,visible:i=!0,name:o}){let a=f(t,e);if(i)return d(a,n,r,o);let s=null!=u?u:0;if(2&s){let{static:e=!1,...t}=a;if(e)return d(t,n,r,o)}if(1&s){let{unmount:e=!0,...t}=a;return(0,l.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,o)})}return d(a,n,r,o)}function d(e,t={},n,r){let{as:u=n,children:l,refName:a="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[a]:e.ref}:{},d="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let m={};if(t){let e=!1,n=[];for(let[r,u]of Object.entries(t))"boolean"==typeof u&&(e=!0),!0===u&&n.push(r);e&&(m["data-headlessui-state"]=n.join(" "))}if(u===i.Fragment&&Object.keys(p(s)).length>0){if(!(0,i.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,o.A)(null==e?void 0:e.className(...t),s.className):(0,o.A)(null==e?void 0:e.className,s.className),n=t?{className:t}:{};return(0,i.cloneElement)(d,Object.assign({},f(d.props,p(v(s,["ref"]))),m,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),n))}return(0,i.createElement)(u,Object.assign({},v(s,["ref"]),u!==i.Fragment&&c,u!==i.Fragment&&m),d)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let u of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;u(t,...r)}}});return t}function m(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function v(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},17550:function(e,t,n){var r=n(2265);let u=r.forwardRef(function({title:e,titleId:t,...n},u){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:u,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"}))});t.Z=u}}]);