import{S as b,i as w,s as x,e as u,b as p,f as i,t as f,h as _,w as $,x as k,y as v,z as y,g as P,d as B,X as D,k as A,a as I,l as S,m as T,c as V,n as q,I as z,B as C}from"../../../chunks/index-a6950131.js";import{b as d}from"../../../chunks/paths-78c5b0f1.js";import{D as E,P as L,a as N}from"../../../chunks/target_dimension-8ce9a7c6.js";function h(c,o,l){const t=c.slice();return t[2]=o[l],t[4]=l,t}function O(c){let o,l;return o=new E({props:{file:d+"/tackling-ts-preview-book.pdf",loadOptions:{docBaseUrl:d},$$slots:{default:[U]},$$scope:{ctx:c}}}),o.$on("loadsuccess",c[1]),o.$on("loaderror",console.log),{c(){$(o.$$.fragment)},l(t){k(o.$$.fragment,t)},m(t,e){v(o,t,e),l=!0},p(t,e){const n={};e&33&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){l||(i(o.$$.fragment,t),l=!0)},o(t){f(o.$$.fragment,t),l=!1},d(t){y(o,t)}}}function g(c){let o,l,t,e;return l=new L({props:{num:c[4]+1,getViewport:N(500),renderTextLayer:!0}}),{c(){o=A("div"),$(l.$$.fragment),t=I(),this.h()},l(n){o=S(n,"DIV",{class:!0});var a=T(o);k(l.$$.fragment,a),t=V(a),a.forEach(_),this.h()},h(){q(o,"class","svelte-spykhl")},m(n,a){p(n,o,a),v(l,o,null),z(o,t),e=!0},p:C,i(n){e||(i(l.$$.fragment,n),e=!0)},o(n){f(l.$$.fragment,n),e=!1},d(n){n&&_(o),y(l)}}}function U(c){let o,l,t=Array(c[0]),e=[];for(let a=0;a<t.length;a+=1)e[a]=g(h(c,t,a));const n=a=>f(e[a],1,1,()=>{e[a]=null});return{c(){for(let a=0;a<e.length;a+=1)e[a].c();o=u()},l(a){for(let s=0;s<e.length;s+=1)e[s].l(a);o=u()},m(a,s){for(let r=0;r<e.length;r+=1)e[r].m(a,s);p(a,o,s),l=!0},p(a,s){if(s&1){t=Array(a[0]);let r;for(r=0;r<t.length;r+=1){const m=h(a,t,r);e[r]?(e[r].p(m,s),i(e[r],1)):(e[r]=g(m),e[r].c(),i(e[r],1),e[r].m(o.parentNode,o))}for(P(),r=t.length;r<e.length;r+=1)n(r);B()}},i(a){if(!l){for(let s=0;s<t.length;s+=1)i(e[s]);l=!0}},o(a){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)f(e[s]);l=!1},d(a){D(e,a),a&&_(o)}}}function W(c){let o,l,t=O(c);return{c(){t&&t.c(),o=u()},l(e){t&&t.l(e),o=u()},m(e,n){t&&t.m(e,n),p(e,o,n),l=!0},p(e,[n]){t.p(e,n)},i(e){l||(i(t),l=!0)},o(e){f(t),l=!1},d(e){t&&t.d(e),e&&_(o)}}}function X(c,o,l){let t=0;return[t,n=>console.log(l(0,t=n.detail.numPages))]}class H extends b{constructor(o){super(),w(this,o,X,W,x,{})}}export{H as default};
