function C(){}function z(t,e){for(const n in e)t[n]=e[n];return t}function F(t){return t&&typeof t=="object"&&typeof t.then=="function"}function B(t){return t()}function M(){return Object.create(null)}function b(t){t.forEach(B)}function H(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e}function W(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t,e,n){t.$$.on_destroy.push(G(e,n))}function dt(t,e,n,c){if(t){const r=D(t,e,n,c);return t[0](r)}}function D(t,e,n,c){return t[1]&&c?z(n.ctx.slice(),t[1](c(e))):n.ctx}function ht(t,e,n,c){if(t[2]&&c){const r=t[2](c(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],l=Math.max(e.dirty.length,r.length);for(let o=0;o<l;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function mt(t,e,n,c,r,s){if(r){const l=D(e,n,c,s);t.p(l,r)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let c=0;c<n;c++)e[c]=-1;return e}return-1}let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,e,n,c){for(;t<e;){const r=t+(e-t>>1);n(r)<=c?t=r+1:e=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),c=new Int32Array(e.length);n[0]=-1;let r=0;for(let i=0;i<e.length;i++){const u=e[i].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:Q(1,r,d=>e[n[d]].claim_order,u))-1;c[i]=n[f]+1;const a=f+1;n[a]=i,r=Math.max(a,r)}const s=[],l=[];let o=e.length-1;for(let i=n[r]+1;i!=0;i=c[i-1]){for(s.push(e[i-1]);o>=i;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);s.reverse(),l.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<l.length;i++){for(;u<s.length&&l[i].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(l[i],f)}}function U(t,e){if(v){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){v&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function gt(){return N(" ")}function xt(){return N("")}function $t(t,e,n,c){return t.addEventListener(e,n,c),()=>t.removeEventListener(e,n,c)}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return t===""?null:+t}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,c,r=!1){Z(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const i=n(o);return i===void 0?t.splice(l,1):t[l]=i,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const i=n(o);return i===void 0?t.splice(l,1):t[l]=i,r?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return c()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function tt(t,e,n,c){return L(t,r=>r.nodeName===e,r=>{const s=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];n[o.name]||s.push(o.name)}s.forEach(l=>r.removeAttribute(l))},()=>c(e))}function Et(t,e,n){return tt(t,e,n,X)}function et(t,e){return L(t,n=>n.nodeType===3,n=>{const c=""+e;if(n.data.startsWith(c)){if(n.data.length!==c.length)return n.splitText(c.length)}else n.data=c},()=>N(e),!0)}function wt(t){return et(t," ")}function Ct(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Nt(t,e){t.value=e==null?"":e}function St(t,e,n,c){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,c?"important":"")}function jt(t,e){for(let n=0;n<t.options.length;n+=1){const c=t.options[n];if(c.__value===e){c.selected=!0;return}}t.selectedIndex=-1}function At(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function nt(t,e,n=!1){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,!1,e),c}let y;function _(t){y=t}function m(){if(!y)throw new Error("Function called outside component initialization");return y}function Mt(t){m().$$.on_mount.push(t)}function Tt(t){m().$$.after_update.push(t)}function qt(t){m().$$.on_destroy.push(t)}function Bt(){const t=m();return(e,n)=>{const c=t.$$.callbacks[e];if(c){const r=nt(e,n);c.slice().forEach(s=>{s.call(t,r)})}}}function Dt(t,e){m().$$.context.set(t,e)}function Lt(t){return m().$$.context.get(t)}const p=[],T=[],x=[],q=[],O=Promise.resolve();let E=!1;function P(){E||(E=!0,O.then(S))}function Ot(){return P(),O}function w(t){x.push(t)}const k=new Set;let g=0;function S(){const t=y;do{for(;g<p.length;){const e=p[g];g++,_(e),ct(e.$$)}for(_(null),p.length=0,g=0;T.length;)T.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];k.has(n)||(k.add(n),n())}x.length=0}while(p.length);for(;q.length;)q.pop()();E=!1,k.clear(),_(t)}function ct(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const $=new Set;let h;function rt(){h={r:0,c:[],p:h}}function it(){h.r||b(h.c),h=h.p}function I(t,e){t&&t.i&&($.delete(t),t.i(e))}function lt(t,e,n,c){if(t&&t.o){if($.has(t))return;$.add(t),h.c.push(()=>{$.delete(t),c&&(n&&t.d(1),c())}),t.o(e)}}function Pt(t,e){const n=e.token={};function c(r,s,l,o){if(e.token!==n)return;e.resolved=o;let i=e.ctx;l!==void 0&&(i=i.slice(),i[l]=o);const u=r&&(e.current=r)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==s&&a&&(rt(),lt(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),it())}):e.block.d(1),u.c(),I(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[s]=u),f&&S()}if(F(t)){const r=m();if(t.then(s=>{_(r),c(e.then,1,e.value,s),_(null)},s=>{if(_(r),c(e.catch,2,e.error,s),_(null),!e.hasCatch)throw s}),e.current!==e.pending)return c(e.pending,0),!0}else{if(e.current!==e.then)return c(e.then,1,e.value,t),!0;e.resolved=t}}function It(t,e,n){const c=e.slice(),{resolved:r}=t;t.current===t.then&&(c[t.value]=r),t.current===t.catch&&(c[t.error]=r),t.block.p(c,n)}function zt(t){t&&t.c()}function Ft(t,e){t&&t.l(e)}function ut(t,e,n,c){const{fragment:r,on_mount:s,on_destroy:l,after_update:o}=t.$$;r&&r.m(e,n),c||w(()=>{const i=s.map(B).filter(H);l?l.push(...i):b(i),t.$$.on_mount=[]}),o.forEach(w)}function st(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&(p.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,c,r,s,l,o=[-1]){const i=y;_(t);const u=t.$$={fragment:null,ctx:null,props:s,update:C,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:e.target||i.$$.root};l&&l(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,d,...j)=>{const A=j.length?j[0]:d;return u.ctx&&r(u.ctx[a],u.ctx[a]=A)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](A),f&&ot(t,a)),d}):[],u.update(),f=!0,b(u.before_update),u.fragment=c?c(u.ctx):!1,e.target){if(e.hydrate){J();const a=Y(e.target);u.fragment&&u.fragment.l(a),a.forEach(V)}else u.fragment&&u.fragment.c();e.intro&&I(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),K(),S()}_(i)}class Wt{$destroy(){st(this,1),this.$destroy=C}$on(e,n){const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(n),()=>{const r=c.indexOf(n);r!==-1&&c.splice(r,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{C as A,dt as B,mt as C,pt as D,ht as E,U as F,_t as G,w as H,Nt as I,jt as J,$t as K,kt as L,b as M,At as N,Bt as O,Dt as P,qt as Q,ft as R,Wt as S,Pt as T,It as U,Lt as V,bt as W,T as X,gt as a,yt as b,wt as c,it as d,xt as e,I as f,rt as g,V as h,Ht as i,Tt as j,X as k,Et as l,Y as m,vt as n,Mt as o,St as p,N as q,et as r,at as s,lt as t,Ct as u,zt as v,Ft as w,ut as x,st as y,Ot as z};
