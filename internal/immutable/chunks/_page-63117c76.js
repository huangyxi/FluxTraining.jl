import{D as i,r as c,t as l,A as d}from"./api-184ef58a.js";import{b as t}from"./paths-846459bd.js";const f=!0;async function p({params:a,fetch:s}){const{version:o}=a,n=`${t}/data`,r=new d(n,o,s);await r.loadVersions();const e=await r.loadVersionConfig(o);if(i.guard(e))throw c(301,`${t}/${o}/${e.defaultDocument}.html`);l(e)}const g=Object.freeze(Object.defineProperty({__proto__:null,prerender:f,load:p},Symbol.toStringTag,{value:"Module"}));export{g as _,p as l,f as p};
