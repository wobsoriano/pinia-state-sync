import{B as g,w as b,s as v,d as S,a as O,c as C,b as d,t as k,u,o as w,e as N,f as B}from"./vendor.eee139eb.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};L();function $(s,n,{initialize:l,type:o="native"}){let e=`${n.$id}-${s.toString()}`,t=new g(e,{type:o}),i=!1,r=0;b(()=>n[s],a=>{i||(r=Date.now(),t.postMessage({timestamp:r,state:JSON.parse(v(a))})),i=!1},{deep:!0}),t.onmessage=a=>{if(a===void 0){t.postMessage({timestamp:r,state:JSON.parse(v(n[s]))});return}a.timestamp<=r||(i=!0,r=a.timestamp,n[s]=a.state)};let c=()=>t.postMessage(void 0),p=()=>t.close();return l&&c(),{sync:c,unshare:p}}var x=(s,n)=>Object.keys(n).includes(s),z=({initialize:s=!0,enable:n=!0,type:l="native"})=>({store:o,options:e})=>{var t,i,r,c;let p=(i=(t=e==null?void 0:e.share)==null?void 0:t.enable)!=null?i:n,a=(c=(r=e==null?void 0:e.share)==null?void 0:r.omit)!=null?c:[];!p||Object.keys(o.$state).forEach(f=>{var m,y;a.includes(f)||!x(f,o.$state)||$(f,o,{initialize:(y=(m=e==null?void 0:e.share)==null?void 0:m.initialize)!=null?y:s,type:l})})};const M=S({id:"counter",state(){return{count:0}},actions:{increment(){this.count++},decrement(){!this.count||this.count--}},share:{enable:!0}});const A={class:"counter"},E=["textContent"],P={class:"button__wrapper"},j=O({setup(s){const n=M();return(l,o)=>(w(),C("div",A,[d("h1",{class:"count",textContent:k(u(n).count)},null,8,E),d("div",P,[d("button",{onClick:o[0]||(o[0]=(...e)=>u(n).decrement&&u(n).decrement(...e))}," - "),d("button",{onClick:o[1]||(o[1]=(...e)=>u(n).increment&&u(n).increment(...e))}," + ")])]))}}),h=N(j),_=B();_.use(z({enable:!1,type:"native"}));h.use(_);h.mount("#app");