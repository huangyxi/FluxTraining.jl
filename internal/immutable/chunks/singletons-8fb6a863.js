import{A as u}from"./index-af87de52.js";import{a as d}from"./paths-846459bd.js";function g(s){let e=s.baseURI;if(!e){const t=s.getElementsByTagName("base");e=t.length?t[0].href:s.URL}return e}function _(){return{x:pageXOffset,y:pageYOffset}}function k(s){let e,t=null,r=null,a=null;for(const n of s.composedPath())n instanceof Element&&(!e&&n.nodeName.toUpperCase()==="A"&&(e=n),t===null&&(t=l(n,"data-sveltekit-noscroll")),r===null&&(r=l(n,"data-sveltekit-prefetch")),a===null&&(a=l(n,"data-sveltekit-reload")));const o=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:o,options:{noscroll:t,prefetch:r,reload:a}}}function l(s,e){const t=s.getAttribute(e);return t===null?t:t===""?!0:(t==="off",!1)}function f(s){const e=u(s);let t=!0;function r(){t=!0,e.update(n=>n)}function a(n){t=!1,e.set(n)}function o(n){let i;return e.subscribe(c=>{(i===void 0||t&&c!==i)&&n(i=c)})}return{notify:r,set:a,subscribe:o}}function p(){const{set:s,subscribe:e}=u(!1);let t;async function r(){clearTimeout(t);const a=await fetch(`${d}/internal/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:o}=await a.json(),n=o!=="1677604509737";return n&&(s(!0),clearTimeout(t)),n}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:r}}let b;function v(s){b=s.client}const U={url:f({}),page:f({}),navigating:u(null),updated:p()};export{_ as a,b as c,k as f,g,v as i,U as s};
