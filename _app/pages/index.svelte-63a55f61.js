import{S as qe,i as We,s as ze,w as Be,x as Fe,y as Ge,q as Ee,o as be,B as Ve,e as p,k as F,t as c,l as Re,c as _,a as f,m as G,h,d as u,b as d,L as ve,g as q,J as o,M as W,N as V,O as $,P as le,j as Ue,Q as Oe,R as Ce,T as Ae,U as ge}from"../chunks/vendor-e2a2a348.js";import{b as ke}from"../chunks/preload-helper-8d739a92.js";import{D as He,P as Je,p as je}from"../chunks/index-edb5e20a.js";function Me(n){let e,l,s;return{c(){e=p("input"),this.h()},l(t){e=_(t,"INPUT",{type:!0,min:!0,max:!0,step:!0}),this.h()},h(){d(e,"type","range"),d(e,"min","0.5"),d(e,"max","4"),d(e,"step","0.25")},m(t,a){q(t,e,a),W(e,n[0]),l||(s=[$(e,"change",n[13]),$(e,"input",n[13])],l=!0)},p(t,a){a&1&&W(e,t[0])},d(t){t&&u(e),l=!1,Oe(s)}}}function Qe(n){let e,l,s;return{c(){e=p("input"),this.h()},l(t){e=_(t,"INPUT",{type:!0,min:!0,max:!0,step:!0}),this.h()},h(){d(e,"type","range"),d(e,"min","200"),d(e,"max","700"),d(e,"step","50")},m(t,a){q(t,e,a),W(e,n[5]),l||(s=[$(e,"change",n[12]),$(e,"input",n[12])],l=!0)},p(t,a){a&32&&W(e,t[5])},d(t){t&&u(e),l=!1,Oe(s)}}}function Ke(n){let e,l;return e=new He({props:{file:ke+"/"+n[2],loadOptions:{docBaseUrl:ke},$$slots:{default:[Xe]},$$scope:{ctx:n}}}),e.$on("loadsuccess",n[15]),e.$on("loaderror",console.log),{c(){Be(e.$$.fragment)},l(s){Fe(e.$$.fragment,s)},m(s,t){Ge(e,s,t),l=!0},p(s,t){const a={};t&4&&(a.file=ke+"/"+s[2]),t&131315&&(a.$$scope={dirty:t,ctx:s}),e.$set(a)},i(s){l||(Ee(e.$$.fragment,s),l=!0)},o(s){be(e.$$.fragment,s),l=!1},d(s){Ve(e,s)}}}function Xe(n){let e,l,s;return l=new Je({props:{scale:n[0],num:n[1],renderTextLayer:n[4],rotation:n[6],getViewport:n[7]===1?void 0:je(n[5])}}),{c(){e=p("div"),Be(l.$$.fragment),this.h()},l(t){e=_(t,"DIV",{class:!0});var a=f(e);Fe(l.$$.fragment,a),a.forEach(u),this.h()},h(){d(e,"class","svelte-spykhl")},m(t,a){q(t,e,a),Ge(l,e,null),s=!0},p(t,a){const v={};a&1&&(v.scale=t[0]),a&2&&(v.num=t[1]),a&16&&(v.renderTextLayer=t[4]),a&64&&(v.rotation=t[6]),a&160&&(v.getViewport=t[7]===1?void 0:je(t[5])),l.$set(v)},i(t){s||(Ee(l.$$.fragment,t),s=!0)},o(t){be(l.$$.fragment,t),s=!1},d(t){t&&u(e),Ve(l)}}}function Ye(n){let e,l,s,t,a,v,g,R,k,U,z,N,A,m,C,H,J,O,E,oe,Q,ae,I,se,K,ie,re,X,B,ue,b,w,pe,L,_e,S,fe,y,ce,Y,Z,j,he,Te;function Pe(i,r){return i[7]===2?Qe:Me}let x=Pe(n),T=x(n),P=Ke(n);return{c(){e=p("section"),l=p("input"),s=F(),t=p("select"),a=p("option"),v=c("tackling-ts-preview-book.pdf"),g=p("option"),R=c("impatient-js-preview-book.pdf"),k=p("option"),U=c("non existent file"),z=F(),N=p("input"),A=c(` Render text layer

	`),m=p("fieldset"),C=p("legend"),H=c("Dimensions"),J=F(),O=p("select"),E=p("option"),oe=c("Scale: "),Q=c(n[0]),ae=c("x"),I=p("option"),se=c("Fixed height: "),K=c(n[5]),ie=c("px"),re=F(),T.c(),X=F(),B=p("label"),ue=c(`Rotation
			`),b=p("select"),w=p("option"),pe=c("0"),L=p("option"),_e=c("90"),S=p("option"),fe=c("180"),y=p("option"),ce=c("270"),Y=F(),P&&P.c(),Z=Re(),this.h()},l(i){e=_(i,"SECTION",{class:!0});var r=f(e);l=_(r,"INPUT",{type:!0,step:!0,min:!0,max:!0}),s=G(r),t=_(r,"SELECT",{});var ee=f(t);a=_(ee,"OPTION",{});var Ie=f(a);v=h(Ie,"tackling-ts-preview-book.pdf"),Ie.forEach(u),g=_(ee,"OPTION",{});var Ne=f(g);R=h(Ne,"impatient-js-preview-book.pdf"),Ne.forEach(u),k=_(ee,"OPTION",{});var $e=f(k);U=h($e,"non existent file"),$e.forEach(u),ee.forEach(u),z=G(r),N=_(r,"INPUT",{type:!0}),A=h(r,` Render text layer

	`),m=_(r,"FIELDSET",{});var D=f(m);C=_(D,"LEGEND",{});var we=f(C);H=h(we,"Dimensions"),we.forEach(u),J=G(D),O=_(D,"SELECT",{});var de=f(O);E=_(de,"OPTION",{});var te=f(E);oe=h(te,"Scale: "),Q=h(te,n[0]),ae=h(te,"x"),te.forEach(u),I=_(de,"OPTION",{});var ne=f(I);se=h(ne,"Fixed height: "),K=h(ne,n[5]),ie=h(ne,"px"),ne.forEach(u),de.forEach(u),re=G(D),T.l(D),X=G(D),B=_(D,"LABEL",{});var me=f(B);ue=h(me,`Rotation
			`),b=_(me,"SELECT",{});var M=f(b);w=_(M,"OPTION",{});var Le=f(w);pe=h(Le,"0"),Le.forEach(u),L=_(M,"OPTION",{});var Se=f(L);_e=h(Se,"90"),Se.forEach(u),S=_(M,"OPTION",{});var ye=f(S);fe=h(ye,"180"),ye.forEach(u),y=_(M,"OPTION",{});var De=f(y);ce=h(De,"270"),De.forEach(u),M.forEach(u),me.forEach(u),D.forEach(u),r.forEach(u),Y=G(i),P&&P.l(i),Z=Re(),this.h()},h(){d(l,"type","number"),d(l,"step","1"),d(l,"min","1"),d(l,"max",n[3]),a.__value="tackling-ts-preview-book.pdf",a.value=a.__value,g.__value="impatient-js-preview-book.pdf",g.value=g.__value,k.__value="a.pdf",k.value=k.__value,n[2]===void 0&&ve(()=>n[9].call(t)),d(N,"type","checkbox"),E.__value=1,E.value=E.__value,I.__value=2,I.value=I.__value,n[7]===void 0&&ve(()=>n[11].call(O)),w.__value="0",w.value=w.__value,L.__value="90",L.value=L.__value,S.__value="180",S.value=S.__value,y.__value="270",y.value=y.__value,n[6]===void 0&&ve(()=>n[14].call(b)),d(e,"class","settings")},m(i,r){q(i,e,r),o(e,l),W(l,n[1]),o(e,s),o(e,t),o(t,a),o(a,v),o(t,g),o(g,R),o(t,k),o(k,U),V(t,n[2]),o(e,z),o(e,N),N.checked=n[4],o(e,A),o(e,m),o(m,C),o(C,H),o(m,J),o(m,O),o(O,E),o(E,oe),o(E,Q),o(E,ae),o(O,I),o(I,se),o(I,K),o(I,ie),V(O,n[7]),o(m,re),T.m(m,null),o(m,X),o(m,B),o(B,ue),o(B,b),o(b,w),o(w,pe),o(b,L),o(L,_e),o(b,S),o(S,fe),o(b,y),o(y,ce),V(b,n[6]),q(i,Y,r),P&&P.m(i,r),q(i,Z,r),j=!0,he||(Te=[$(l,"input",n[8]),$(t,"change",n[9]),$(N,"change",n[10]),$(O,"change",n[11]),$(b,"change",n[14])],he=!0)},p(i,[r]){(!j||r&8)&&d(l,"max",i[3]),r&2&&le(l.value)!==i[1]&&W(l,i[1]),r&4&&V(t,i[2]),r&16&&(N.checked=i[4]),(!j||r&1)&&Ue(Q,i[0]),(!j||r&32)&&Ue(K,i[5]),r&128&&V(O,i[7]),x===(x=Pe(i))&&T?T.p(i,r):(T.d(1),T=x(i),T&&(T.c(),T.m(m,X))),r&64&&V(b,i[6]),P.p(i,r)},i(i){j||(Ee(P),j=!0)},o(i){be(P),j=!1},d(i){i&&u(e),T.d(),i&&u(Y),P&&P.d(i),i&&u(Z),he=!1,Oe(Te)}}}function Ze(n,e,l){Ce.exports.GlobalWorkerOptions&&(Ce.exports.GlobalWorkerOptions.workerSrc=Ae);let s=1,t=1,a="/tackling-ts-preview-book.pdf",v=1,g=!1,R=500,k=0,U=1;function z(){t=le(this.value),l(1,t)}function N(){a=ge(this),l(2,a)}function A(){g=this.checked,l(4,g)}function m(){U=ge(this),l(7,U)}function C(){R=le(this.value),l(5,R)}function H(){s=le(this.value),l(0,s)}function J(){k=ge(this),l(6,k)}return[s,t,a,v,g,R,k,U,z,N,A,m,C,H,J,E=>console.log(l(3,v=E.detail.numPages))]}class nt extends qe{constructor(e){super();We(this,e,Ze,Ye,ze,{})}}export{nt as default};
