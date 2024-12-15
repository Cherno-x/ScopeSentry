import{d as e,aq as t,o as s,c as a,e as l,w as i,f as r,a8 as o,n,a as d,k as p,u as c,l as u,dC as f,s as m,v,S as h,E as b,r as y,y as j,P as x,Q as g,i as w,z as S,t as D}from"./index-KRGk12nW.js";import{E as _}from"./el-card-DCxCGAT-.js";import{D as B}from"./Descriptions-CLXj06gA.js";import{s as H}from"./index-D-1xv8kk.js";import{a as L,E as k}from"./el-col-BAGtjXmv.js";import{E}from"./el-tag-C8hPWVQo.js";import{E as P}from"./el-text-CzHloMOA.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-wh2PzFWh.js";import"./index-uE42CrcE.js";import"./index-Jp-pEfyE.js";const R={class:"mb-20px pb-20px",style:{"border-bottom":"1px solid var(--el-border-color)"}},C=e({__name:"ContentDetailWrap",props:{title:t.string.def(""),message:t.string.def("")},setup(e){const{getPrefixCls:t}=p(),c=t("content-detail-wrap");return(e,t)=>(s(),a("div",{class:n([`${d(c)}-container`,"relative"])},[l(d(_),{class:n([`${d(c)}-body`,"mb-20px"]),shadow:"never"},{default:i((()=>[r("div",R,[o(e.$slots,"header")]),o(e.$slots,"default")])),_:3},8,["class"])],2))}}),$=e({__name:"AssetDetail",setup(e){const{push:t,go:a}=c(),{t:r}=u(),{query:o}=f(),n=m([{field:"host",label:r("asset.domain"),slots:{default:e=>{const t=e.host;return""==t?v("div","-"):v("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"IP",label:r("asset.IP"),slots:{default:e=>{const t=e.IP;return""==t?v("div","-"):v("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"URL",label:"URL",slots:{default:e=>{const t=e.URL;return""==t?v("div","-"):v("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"port",label:r("asset.port"),slots:{default:e=>{const t=e.port;return v("div",""==t?"-":[v(E,t)])}}},{field:"service",label:r("asset.service"),slots:{default:e=>{const t=e.service;return v("div",""==t?"-":[v(E,{type:"info",effect:"light",round:!0},t)])}}},{field:"title",label:r("asset.title"),slots:{default:e=>{const t=e.title;return v("div",""==t?"-":t)}}},{field:"status",label:r("asset.status"),slots:{default:e=>{const t=e.status;if(""==t)return v("div","-");const s=t<300?"#2eb98a":"#ff5252";return v("div",[v(L,{gutter:2},[v(k,{span:.99999},[v(h,{icon:"clarity:circle-solid",color:s,size:6,style:{transform:"translateY(-35%)"}})]),v(k,{span:2},[v(P,t)])])])}}},{field:"FaviconHash",label:"Favicon Hash",slots:{default:e=>{const t=e.FaviconHash;return""==t?v("div","-"):v("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"jarm",label:"Jarm",slots:{default:e=>{const t=e.jarm;return""==t?v("div","-"):v("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"time",label:r("asset.time"),slots:{default:e=>{const t=e.time;return""==t?v("div","-"):v("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"products",label:r("asset.products"),span:12,slots:{default:e=>{const t=e.products;if(!Array.isArray(t)||0===t.length)return v("div","-");const s=[];for(let l=0;l<t.length;l+=6){const e=l,a=l+6,i=t.slice(e,a);s.push(i)}const a=s.map(((e,t)=>{const s=e.map(((e,s)=>v(k,{span:3},v(E,{key:6*t+s,type:"success"},e))));return v(L,{gutter:1},s)}));return v("div",a)}}},{field:"project",label:r("project.projectName"),span:12,slots:{default:e=>{const t=e.project;return v("div",""==t?"-":[v(E,t)])}}},{field:"TLSData",label:"TLS",span:24,slots:{default:e=>{const t=e.TLSData;return""==t?v("div","-"):v(b,{maxHeight:"100px"},{default:()=>v("div",{style:{whiteSpace:"pre-line"}},t)})}}},{field:"hash",label:"Hash",span:24,slots:{default:e=>{const t=e.hash;return""==t?v("div","-"):v("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"banner",label:"Banner",span:24,slots:{default:e=>{const t=e.banner;return""==t?v("div","-"):v("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"ResponseBody",label:r("asset.responseBody"),span:24,slots:{default:e=>{const t=e.ResponseBody;return""==t?v("div","-"):v(b,{maxHeight:"100px"},{default:()=>v("div",{style:{whiteSpace:"pre-line"}},t)})}}}]),p=y(!0);let _=m({});return(async()=>{const e=await H(o.id);e&&(_=Object.assign(_,(null==e?void 0:e.data)||{}),p.value=!1)})(),(e,o)=>{const c=j("BaseButton"),u=x("loading");return g((s(),w(d(C),{title:d(r)("exampleDemo.detail"),onBack:o[1]||(o[1]=e=>d(t)("/asset-information/index"))},{header:i((()=>[l(c,{onClick:o[0]||(o[0]=e=>d(a)(-1))},{default:i((()=>[S(D(d(r)("common.back")),1)])),_:1})])),default:i((()=>[l(d(B),{title:d(r)("asset.assetDetail"),schema:n,data:d(_),collapse:!1},null,8,["title","schema","data"])])),_:1},8,["title"])),[[u,p.value]])}}});export{$ as default};
