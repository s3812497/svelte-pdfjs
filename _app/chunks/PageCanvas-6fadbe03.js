import{S as y,i as C,s as b,e as g,c as v,a as p,d as u,b as _,g as x,K as d,a2 as T,R as k,w as q,x as E,y as S,q as h,o as m,B as L,J as V,n as A,p as D,E as I}from"./vendor-e2a2a348.js";function P(r){let e;return{c(){e=g("div"),this.h()},l(n){e=v(n,"DIV",{class:!0}),p(e).forEach(u),this.h()},h(){_(e,"class","svelte-1d0eva")},m(n,a){x(n,e,a),r[3](e)},p:d,i:d,o:d,d(n){n&&u(e),r[3](null)}}}function R(r,e,n){let{page:a}=e,{viewport:s}=e,l,t;function i(){for(l==null||l.cancel();t.firstChild;)t.firstChild.remove();l=k.exports.renderTextLayer({container:t,textContentStream:a.streamTextContent(),viewport:s})}function o(c){T[c?"unshift":"push"](()=>{t=c,n(0,t)})}return r.$$set=c=>{"page"in c&&n(1,a=c.page),"viewport"in c&&n(2,s=c.viewport)},r.$$.update=()=>{r.$$.dirty&5&&t&&s&&i()},[t,a,s,o]}class B extends y{constructor(e){super();C(this,e,R,P,b,{page:1,viewport:2})}}function w(r){let e,n;return e=new B({props:{page:r[0],viewport:r[1]}}),{c(){q(e.$$.fragment)},l(a){E(e.$$.fragment,a)},m(a,s){S(e,a,s),n=!0},p(a,s){const l={};s&1&&(l.page=a[0]),s&2&&(l.viewport=a[1]),e.$set(l)},i(a){n||(h(e.$$.fragment,a),n=!0)},o(a){m(e.$$.fragment,a),n=!1},d(a){L(e,a)}}}function J(r){let e,n,a,s,l,t=r[2]&&w(r);return{c(){e=g("div"),n=g("canvas"),t&&t.c(),this.h()},l(i){e=v(i,"DIV",{class:!0});var o=p(e);n=v(o,"CANVAS",{width:!0,height:!0,class:!0}),p(n).forEach(u),t&&t.l(o),o.forEach(u),this.h()},h(){var i,o;_(n,"width",a=(i=r[1])==null?void 0:i.width),_(n,"height",s=(o=r[1])==null?void 0:o.height),_(n,"class","svelte-oqog55"),_(e,"class","svelte-oqog55")},m(i,o){x(i,e,o),V(e,n),r[4](n),t&&t.m(e,null),l=!0},p(i,[o]){var c,f;(!l||o&2&&a!==(a=(c=i[1])==null?void 0:c.width))&&_(n,"width",a),(!l||o&2&&s!==(s=(f=i[1])==null?void 0:f.height))&&_(n,"height",s),i[2]?t?(t.p(i,o),o&4&&h(t,1)):(t=w(i),t.c(),h(t,1),t.m(e,null)):t&&(A(),m(t,1,1,()=>{t=null}),D())},i(i){l||(h(t),l=!0)},o(i){m(t),l=!1},d(i){i&&u(e),r[4](null),t&&t.d()}}}function K(r,e,n){let{page:a}=e,{viewport:s}=e,{render_text_layer:l}=e,t,i;function o(){i!=null&&i._internalRenderTask.running&&i.cancel(),i=a.render({canvasContext:t.getContext("2d"),viewport:s})}function c(f){T[f?"unshift":"push"](()=>{t=f,n(3,t)})}return r.$$set=f=>{"page"in f&&n(0,a=f.page),"viewport"in f&&n(1,s=f.viewport),"render_text_layer"in f&&n(2,l=f.render_text_layer)},r.$$.update=()=>{r.$$.dirty&10&&s&&t&&I().then(o)},[a,s,l,t,c]}class j extends y{constructor(e){super();C(this,e,K,J,b,{page:0,viewport:1,render_text_layer:2})}}export{j as default};
