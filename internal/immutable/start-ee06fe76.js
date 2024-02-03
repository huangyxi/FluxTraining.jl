import{S as Ge,i as He,s as We,a as Me,e as F,c as Xe,b as W,g as ie,t as J,d as le,f as K,h as x,j as Ye,o as be,k as Qe,l as Ze,m as et,n as ge,p as C,q as tt,r as nt,u as rt,v as M,w as Re,x as X,y as Y,z as Ne}from"./chunks/index-af87de52.js";import{g as Ce,f as Ve,s as G,a as ve,i as at}from"./chunks/singletons-acdc697d.js";import{R as qe,H as we}from"./chunks/control-e337d4cc.js";import{s as ot}from"./chunks/paths-846459bd.js";const st=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),it=function(r,e){return new URL(r,e).href},Be={},H=function(e,t,c){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=it(s,c),s in Be)return;Be[s]=!0;const d=s.endsWith(".css"),n=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":st,d||(f.as="script",f.crossOrigin=""),f.href=s,document.head.appendChild(f),d)return new Promise((w,_)=>{f.addEventListener("load",w),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const t=new URL(r);for(const c of ft){let s=t[c];Object.defineProperty(t,c,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,s,d)=>d(r,s),dt(t),t}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function pt(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Se=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;se.delete(c)}return Se(r,e)};const se=new Map;function ht(r,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(s+=`[data-hash="${pt(t.body)}"]`);const d=document.querySelector(s);if(d!=null&&d.textContent){const{body:n,...f}=JSON.parse(d.textContent),w=d.getAttribute("data-ttl");return w&&se.set(e,{body:n,init:f,ttl:1e3*Number(w)}),Promise.resolve(new Response(n,f))}return Se(r,t)}function mt(r,e){const t=se.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);se.delete(r)}return Se(r,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function gt(r){const e=[],t=[];let c=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(wt).map((d,n,f)=>{const w=decodeURIComponent(d),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(_)return e.push(_[1]),t.push(_[2]),"(?:/(.*))?";const b=n===f.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map((L,R)=>{if(R%2){const T=_t.exec(L);if(!T)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,O,D,V]=T;return e.push(D),t.push(V),O?"(.*?)":"([^/]+?)"}return b&&L.includes(".")&&(c=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function wt(r){return!/^\([^)]+\)$/.test(r)}function yt(r,e,t,c){const s={};for(let d=0;d<e.length;d+=1){const n=e[d],f=t[d],w=r[d+1]||"";if(f){const _=c[f];if(!_)throw new Error(`Missing "${f}" param matcher`);if(!_(w))return}s[n]=w}return s}function bt(r,e,t,c){const s=new Set(e);return Object.entries(t).map(([f,[w,_,b]])=>{const{pattern:L,names:R,types:T}=gt(f),O={id:f,exec:D=>{const V=L.exec(D);if(V)return yt(V,R,T,c)},errors:[1,...b||[]].map(D=>r[D]),layouts:[0,..._||[]].map(n),leaf:d(w)};return O.errors.length=O.layouts.length=Math.max(O.errors.length,O.layouts.length),O});function d(f){const w=f<0;return w&&(f=~f),[w,r[f]]}function n(f){return f===void 0?f:[s.has(f),r[f]]}}function vt(r){let e,t,c;var s=r[0][0];function d(n){return{props:{data:n[2],form:n[1]}}}return s&&(e=new s(d(r))),{c(){e&&M(e.$$.fragment),t=F()},l(n){e&&Re(e.$$.fragment,n),t=F()},m(n,f){e&&X(e,n,f),W(n,t,f),c=!0},p(n,f){const w={};if(f&4&&(w.data=n[2]),f&2&&(w.form=n[1]),s!==(s=n[0][0])){if(e){ie();const _=e;J(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}s?(e=new s(d(n)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(w)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&J(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&Y(e,n)}}}function kt(r){let e,t,c;var s=r[0][0];function d(n){return{props:{data:n[2],$$slots:{default:[Et]},$$scope:{ctx:n}}}}return s&&(e=new s(d(r))),{c(){e&&M(e.$$.fragment),t=F()},l(n){e&&Re(e.$$.fragment,n),t=F()},m(n,f){e&&X(e,n,f),W(n,t,f),c=!0},p(n,f){const w={};if(f&4&&(w.data=n[2]),f&523&&(w.$$scope={dirty:f,ctx:n}),s!==(s=n[0][0])){if(e){ie();const _=e;J(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}s?(e=new s(d(n)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(w)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&J(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&Y(e,n)}}}function Et(r){let e,t,c;var s=r[0][1];function d(n){return{props:{data:n[3],form:n[1]}}}return s&&(e=new s(d(r))),{c(){e&&M(e.$$.fragment),t=F()},l(n){e&&Re(e.$$.fragment,n),t=F()},m(n,f){e&&X(e,n,f),W(n,t,f),c=!0},p(n,f){const w={};if(f&8&&(w.data=n[3]),f&2&&(w.form=n[1]),s!==(s=n[0][1])){if(e){ie();const _=e;J(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}s?(e=new s(d(n)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(w)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&J(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&Y(e,n)}}}function ze(r){let e,t=r[5]&&Fe(r);return{c(){e=Qe("div"),t&&t.c(),this.h()},l(c){e=Ze(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=et(e);t&&t.l(s),s.forEach(x),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(c,s){W(c,e,s),t&&t.m(e,null)},p(c,s){c[5]?t?t.p(c,s):(t=Fe(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&x(e),t&&t.d()}}}function Fe(r){let e;return{c(){e=tt(r[6])},l(t){e=nt(t,r[6])},m(t,c){W(t,e,c)},p(t,c){c&64&&rt(e,t[6])},d(t){t&&x(e)}}}function Rt(r){let e,t,c,s,d;const n=[kt,vt],f=[];function w(b,L){return b[0][1]?0:1}e=w(r),t=f[e]=n[e](r);let _=r[4]&&ze(r);return{c(){t.c(),c=Me(),_&&_.c(),s=F()},l(b){t.l(b),c=Xe(b),_&&_.l(b),s=F()},m(b,L){f[e].m(b,L),W(b,c,L),_&&_.m(b,L),W(b,s,L),d=!0},p(b,[L]){let R=e;e=w(b),e===R?f[e].p(b,L):(ie(),J(f[R],1,1,()=>{f[R]=null}),le(),t=f[e],t?t.p(b,L):(t=f[e]=n[e](b),t.c()),K(t,1),t.m(c.parentNode,c)),b[4]?_?_.p(b,L):(_=ze(b),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(b){d||(K(t),d=!0)},o(b){J(t),d=!1},d(b){f[e].d(b),b&&x(c),_&&_.d(b),b&&x(s)}}}function St(r,e,t){let{stores:c}=e,{page:s}=e,{components:d}=e,{form:n}=e,{data_0:f=null}=e,{data_1:w=null}=e;Ye(c.page.notify);let _=!1,b=!1,L=null;return be(()=>{const R=c.page.subscribe(()=>{_&&(t(5,b=!0),t(6,L=document.title||"untitled page"))});return t(4,_=!0),R}),r.$$set=R=>{"stores"in R&&t(7,c=R.stores),"page"in R&&t(8,s=R.page),"components"in R&&t(0,d=R.components),"form"in R&&t(1,n=R.form),"data_0"in R&&t(2,f=R.data_0),"data_1"in R&&t(3,w=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&c.page.set(s)},[d,n,f,w,_,b,L,c,s]}class Lt extends Ge{constructor(e){super(),He(this,e,St,Rt,We,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const $t={},ce=[()=>H(()=>import("./chunks/0-5de203df.js"),["chunks/0-5de203df.js","components/pages/_layout.svelte-646217a1.js","assets/app-9be9397c.css","chunks/index-af87de52.js","chunks/TypographyProvider.styles-82fbd465.js","assets/TypographyProvider-eca7ac57.css"],import.meta.url),()=>H(()=>import("./chunks/1-4d22cff0.js"),["chunks/1-4d22cff0.js","components/error.svelte-045081a2.js","chunks/index-af87de52.js","chunks/stores-a6ffb7a0.js","chunks/singletons-acdc697d.js","chunks/paths-846459bd.js"],import.meta.url),()=>H(()=>import("./chunks/2-1a7c9807.js"),["chunks/2-1a7c9807.js","components/pages/_version_/_error.svelte-3d9cc0e5.js","assets/app-9be9397c.css","chunks/index-af87de52.js","chunks/stores-a6ffb7a0.js","chunks/singletons-acdc697d.js","chunks/paths-846459bd.js"],import.meta.url),()=>H(()=>import("./chunks/3-afb453d7.js"),["chunks/3-afb453d7.js","chunks/_page-3a199688.js","chunks/api-41b79f33.js","chunks/control-e337d4cc.js","chunks/paths-846459bd.js"],import.meta.url),()=>H(()=>import("./chunks/4-bc20eb2a.js"),["chunks/4-bc20eb2a.js","chunks/_page-218bd737.js","chunks/api-41b79f33.js","chunks/control-e337d4cc.js","chunks/paths-846459bd.js"],import.meta.url),()=>H(()=>import("./chunks/5-8cace6e1.js"),["chunks/5-8cace6e1.js","chunks/_page-9dff7c3e.js","chunks/paths-846459bd.js","chunks/api-41b79f33.js","chunks/control-e337d4cc.js","chunks/config-7ea89616.js","assets/config-829b72cd.css","chunks/index-af87de52.js","chunks/TypographyProvider.styles-82fbd465.js","assets/TypographyProvider-eca7ac57.css","chunks/singletons-acdc697d.js","components/pages/_version_/_...documentId_.html/_page.svelte-22b77883.js","assets/_page-1d6f5b25.css"],import.meta.url)],Pt=[],It={"":[3],"[version]":[4,[],[2]],"[version]/[...documentId].html":[5,[],[2]]},Ot={handleError:({error:r})=>(console.error(r),{message:"Internal Error"})},jt="/__data.js",xe="sveltekit:scroll",z="sveltekit:index",re=bt(ce,Pt,It,$t),ke=ce[0],Ee=ce[1];ke();Ee();let te={};try{te=JSON.parse(sessionStorage[xe])}catch{}function ye(r){te[r]=ve()}function Ut({target:r,base:e,trailing_slash:t}){var Te;const c=[],s={id:null,promise:null},d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},f=!1,w=!0,_=!1,b=1,L=null,R=!1,T,O=(Te=history.state)==null?void 0:Te[z];O||(O=Date.now(),history.replaceState({...history.state,[z]:O},"",location.href));const D=te[O];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let V=!1,q,Le;function $e(){if(!L){const a=new URL(location.href);L=Promise.resolve().then(async()=>{const i=pe(a,!0);await Ie(i,a,[]),L=null,R=!1})}return L}async function fe(a,{noscroll:i=!1,replaceState:p=!1,keepfocus:o=!1,state:l={}},h){return typeof a=="string"&&(a=new URL(a,Ce(document))),he({url:a,scroll:i?ve():null,keepfocus:o,redirect_chain:h,details:{state:l,replaceState:p},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(a){const i=pe(a,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s.promise=Ue(i),s.id=i.id,s.promise}async function Ie(a,i,p,o,l){var v,k;const h=Le={};let m=a&&await Ue(a);if(!m&&i.origin===location.origin&&i.pathname===location.pathname&&(m=await ne({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!m)return await Z(i),!1;if(i=(a==null?void 0:a.url)||i,Le!==h)return!1;if(c.length=0,m.type==="redirect")if(p.length>10||p.includes(i.pathname))m=await ne({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return fe(new URL(m.location,i).href,{},[...p,i.pathname]),!1;else((k=(v=m.props)==null?void 0:v.page)==null?void 0:k.status)>=400&&await G.updated.check()&&await Z(i);if(_=!0,o&&o.details){const{details:y}=o,g=y.replaceState?0:1;y.state[z]=O+=g,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(f){n=m.state,m.props.page&&(m.props.page.url=i);const y=oe();T.$set(m.props),y()}else Oe(m);if(o){const{scroll:y,keepfocus:g}=o;if(!g){const E=document.body,j=E.getAttribute("tabindex");E.tabIndex=-1,E.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),j!==null?E.setAttribute("tabindex",j):E.removeAttribute("tabindex")}if(await Ne(),w){const E=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):E?E.scrollIntoView():scrollTo(0,0)}}else await Ne();s.promise=null,s.id=null,w=!0,m.props.page&&(q=m.props.page),l&&l(),_=!1}function Oe(a){var l,h;n=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),q=a.props.page;const p=oe();T=new Lt({target:r,props:{...a.props,stores:G},hydrate:!0}),p();const o={from:null,to:ae("to",{params:n.params,routeId:(h=(l=n.route)==null?void 0:l.id)!=null?h:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(m=>m(o)),f=!0}async function Q({url:a,params:i,branch:p,status:o,error:l,route:h,form:m}){var j;const v=p.filter(Boolean),k={type:"loaded",state:{url:a,params:i,branch:p,error:l,route:h,session_id:b},props:{components:v.map($=>$.node.component)}};m!==void 0&&(k.props.form=m);let y={},g=!q;for(let $=0;$<v.length;$+=1){const U=v[$];y={...y,...U.data},(g||!n.branch.some(A=>A===U))&&(k.props[`data_${$}`]=y,g=g||Object.keys((j=U.data)!=null?j:{}).length>0)}if(g||(g=Object.keys(q.data).length!==Object.keys(y).length),!n.url||a.href!==n.url.href||n.error!==l||g){k.props.page={error:l,params:i,routeId:h&&h.id,status:o,url:a,data:g?y:q.data};const $=(U,A)=>{Object.defineProperty(k.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${A}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return k}async function ue({loader:a,parent:i,url:p,params:o,routeId:l,server_data_node:h}){var y,g,E,j,$;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((y=k.shared)!=null&&y.load){let U=function(...u){for(const S of u){const{href:I}=new URL(S,p);v.dependencies.add(I)}};const A={};for(const u in o)Object.defineProperty(A,u,{get(){return v.params.add(u),o[u]},enumerable:!0});const B={routeId:l,params:A,data:(g=h==null?void 0:h.data)!=null?g:null,url:ut(p,()=>{v.url=!0}),async fetch(u,S){let I;typeof u=="string"?I=u:(I=u.url,S={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...S});const P=new URL(I,p).href;return U(P),f?mt(P,S):ht(I,P,S)},setHeaders:()=>{},depends:U,parent(){return v.parent=!0,i()}};Object.defineProperties(B,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(E=await k.shared.load.call(null,B))!=null?E:null}return{node:k,loader:a,server:h,shared:(j=k.shared)!=null&&j.load?{type:"data",data:m,uses:v}:null,data:($=m!=null?m:h==null?void 0:h.data)!=null?$:null}}function je(a,i,p){if(R)return!0;if(!p)return!1;if(p.parent&&i||a.url&&p.url)return!0;for(const o of a.params)if(p.params.has(o))return!0;for(const o of p.dependencies)if(c.some(l=>l(new URL(o))))return!0;return!1}function de(a,i){var p,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function Ue({id:a,invalidating:i,url:p,params:o,route:l}){var B;if(s.id===a&&s.promise)return s.promise;const{errors:h,layouts:m,leaf:v}=l,k=n.url&&{url:a!==n.url.pathname+n.url.search,params:Object.keys(o).filter(u=>n.params[u]!==o[u])},y=[...m,v];h.forEach(u=>u==null?void 0:u().catch(()=>{})),y.forEach(u=>u==null?void 0:u[1]().catch(()=>{}));let g=null;const E=y.reduce((u,S,I)=>{var N;const P=n.branch[I],ee=!!(S!=null&&S[0])&&((P==null?void 0:P.loader)!==S[1]||je(k,u.some(Boolean),(N=P.server)==null?void 0:N.uses));return u.push(ee),u},[]);if(E.some(Boolean)){try{g=await Je(p,E)}catch(u){return ne({status:500,error:u,url:p,routeId:l.id})}if(g.type==="redirect")return g}const j=g==null?void 0:g.nodes;let $=!1;const U=y.map(async(u,S)=>{var N;if(!u)return;const I=n.branch[S],P=j==null?void 0:j[S];if((!P||P.type==="skip")&&u[1]===(I==null?void 0:I.loader)&&!je(k,$,(N=I.shared)==null?void 0:N.uses))return I;if($=!0,(P==null?void 0:P.type)==="error")throw P;return ue({loader:u[1],url:p,params:o,routeId:l.id,parent:async()=>{var De;const me={};for(let _e=0;_e<S;_e+=1)Object.assign(me,(De=await U[_e])==null?void 0:De.data);return me},server_data_node:de(P===void 0&&u[0]?{type:"skip"}:P!=null?P:null,I==null?void 0:I.server)})});for(const u of U)u.catch(()=>{});const A=[];for(let u=0;u<y.length;u+=1)if(y[u])try{A.push(await U[u])}catch(S){if(S instanceof qe)return{type:"redirect",location:S.location};let I=500,P;for(j!=null&&j.includes(S)?(I=(B=S.status)!=null?B:I,P=S.error):S instanceof we?(I=S.status,P=S.body):P=Ke(S,{params:o,url:p,routeId:l.id});u--;)if(h[u]){let ee,N=u;for(;!A[N];)N-=1;try{return ee={node:await h[u](),loader:h[u],data:{},server:null,shared:null},await Q({url:p,params:o,branch:A.slice(0,N+1).concat(ee),status:I,error:P,route:l})}catch{continue}}await Z(p);return}else A.push(void 0);return await Q({url:p,params:o,branch:A,status:200,error:null,route:l,form:i?void 0:null})}async function ne({status:a,error:i,url:p,routeId:o}){var y;const l={},h=await ke();let m=null;if(h.server)try{const g=await Je(p,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;m=(y=g.nodes[0])!=null?y:null}catch{await Z(p);return}const v=await ue({loader:ke,url:p,params:l,routeId:o,parent:()=>Promise.resolve({}),server_data_node:de(m)}),k={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await Q({url:p,params:l,branch:[v,k],status:a,error:i instanceof we?i.body:Ke(i,{url:p,params:l,routeId:null}),route:null})}function pe(a,i){if(Ae(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const o of re){const l=o.exec(p);if(l){const h=new URL(a.origin+lt(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:i,route:o,params:ct(l),url:h}}}}function Ae(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function he({url:a,scroll:i,keepfocus:p,redirect_chain:o,details:l,type:h,delta:m,accepted:v,blocked:k}){var $,U,A,B;let y=!1;const g=pe(a,!1),E={from:ae("from",{params:n.params,routeId:(U=($=n.route)==null?void 0:$.id)!=null?U:null,url:n.url}),to:ae("to",{params:(A=g==null?void 0:g.params)!=null?A:null,routeId:(B=g==null?void 0:g.route.id)!=null?B:null,url:a}),type:h};m!==void 0&&(E.delta=m);const j={...E,cancel:()=>{y=!0}};if(d.before_navigate.forEach(u=>u(j)),y){k();return}ye(O),v(),f&&G.navigating.set(E),await Ie(g,a,o,{scroll:i,keepfocus:p,details:l},()=>{d.after_navigate.forEach(u=>u(E)),G.navigating.set(null)})}function Z(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{be(()=>(d.after_navigate.push(a),()=>{const i=d.after_navigate.indexOf(a);d.after_navigate.splice(i,1)}))},before_navigate:a=>{be(()=>(d.before_navigate.push(a),()=>{const i=d.before_navigate.indexOf(a);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(_||!f)&&(w=!1)},goto:(a,i={})=>fe(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")c.push(a);else{const{href:i}=new URL(a,location.href);c.push(p=>p.href===i)}return $e()},invalidateAll:()=>(R=!0,$e()),prefetch:async a=>{const i=new URL(a,Ce(document));await Pe(i)},prefetch_routes:async a=>{const p=(a?re.filter(o=>a.some(l=>o.exec(l))):re).map(o=>Promise.all([...o.layouts,o.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:p,route:o}=n;if(!o)return;let l=n.branch.length;for(;l--;)if(o.errors[l]){let h,m=l;for(;!p[m];)m-=1;try{h={node:await o.errors[l](),loader:o.errors[l],data:{},server:null,shared:null};const v=await Q({url:i,params:n.params,branch:p.slice(0,m+1).concat(h),status:500,error:a.error,route:o});n=v.state;const k=oe();T.$set(v.props),k();return}catch{continue}}}else if(a.type==="redirect")fe(a.location,{},[]);else{const i={form:a.data};a.status!==q.status&&(i.page={...q,status:a.status});const p=oe();T.$set(i),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var m,v;let l=!1;const h={from:ae("from",{params:n.params,routeId:(v=(m=n.route)==null?void 0:m.id)!=null?v:null,url:n.url}),to:null,type:"unload",cancel:()=>l=!0};d.before_navigate.forEach(k=>k(h)),l?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(O);try{sessionStorage[xe]=JSON.stringify(te)}catch{}}});const a=o=>{const{url:l,options:h}=Ve(o);if(l&&h.prefetch){if(Ae(l))return;Pe(l)}};let i;const p=o=>{clearTimeout(i),i=setTimeout(()=>{var l;(l=o.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:l,url:h,options:m}=Ve(o);if(!l||!h)return;const v=l instanceof SVGAElement;if(!v&&!(h.protocol==="https:"||h.protocol==="http:"))return;const k=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||k.includes("external")||m.reload||(v?l.target.baseVal:l.target))return;const[y,g]=h.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){V=!0,ye(O),n.url=h,G.page.set({...q,url:h}),G.page.notify();return}he({url:h,scroll:m.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[z]===O)return;const l=o.state[z]-O;he({url:new URL(location.href),scroll:te[o.state[z]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=o.state[z]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[z]:++O},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&G.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:p,params:o,routeId:l,data:h,form:m})=>{var y;const v=new URL(location.href);let k;try{const g=p.map(async(E,j)=>{const $=h[j];return ue({loader:ce[E],url:v,params:o,routeId:l,parent:async()=>{const U={};for(let A=0;A<j;A+=1)Object.assign(U,(await g[A]).data);return U},server_data_node:de($)})});k=await Q({url:v,params:o,branch:await Promise.all(g),status:a,error:i,form:m,route:(y=re.find(E=>E.id===l))!=null?y:null})}catch(g){const E=g;if(E instanceof qe){await Z(new URL(g.location,location.href));return}k=await ne({status:E instanceof we?E.status:500,error:E,url:v,routeId:l})}Oe(k)}}}let At=1;async function Je(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+jt,t.searchParams.set("__invalid",e.map(s=>s?"y":"n").join("")),t.searchParams.set("__id",String(At++)),await H(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}function Ke(r,e){var t;return(t=Ot.handleError({error:r,event:e}))!=null?t:{message:e.routeId?"Internal Error":"Not Found"}}const Tt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ae(r,e){for(const t of Tt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function oe(){return()=>{}}async function qt({env:r,hydrate:e,paths:t,target:c,trailing_slash:s}){ot(t);const d=Ut({target:c,base:t.base,trailing_slash:s});at({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{qt as start};
