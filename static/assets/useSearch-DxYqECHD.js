import{u as e,i as a,F as s}from"./useForm-B8JuboV-.js";import{d as o,aq as t,l as n,y as l,o as i,c as r,i as c,w as d,z as u,t as h,a as m,j as p,F as f,r as w,a7 as g,aW as b,bC as v,e as y,O as x,H as S,aH as E,bD as F,bE as L,by as R,ai as k}from"./index-KRGk12nW.js";import{u as j}from"./useIcon-C2iD-PC_.js";const O=o({__name:"ActionButton",props:{showSearch:t.bool.def(!0),showReset:t.bool.def(!0),showExpand:t.bool.def(!1),visible:t.bool.def(!0),searchLoading:t.bool.def(!1),resetLoading:t.bool.def(!1)},emits:["search","reset","expand"],setup(e,{emit:a}){const s=a,{t:o}=n(),t=()=>{s("search")},w=()=>{s("reset")},g=()=>{s("expand")};return(a,s)=>{const n=l("BaseButton");return i(),r(f,null,[e.showSearch?(i(),c(n,{key:0,type:"primary",loading:e.searchLoading,icon:m(j)({icon:"ep:search"}),onClick:t},{default:d((()=>[u(h(m(o)("common.query")),1)])),_:1},8,["loading","icon"])):p("",!0),e.showReset?(i(),c(n,{key:1,loading:e.resetLoading,plain:"",icon:m(j)({icon:"ep:refresh-right"}),onClick:w},{default:d((()=>[u(h(m(o)("common.reset")),1)])),_:1},8,["loading","icon"])):p("",!0),e.showExpand?(i(),c(n,{key:2,icon:m(j)({icon:e.visible?"ep:arrow-up":"ep:arrow-down"}),text:"",onClick:g},{default:d((()=>[u(h(m(o)(e.visible?"common.shrink":"common.expand")),1)])),_:1},8,["icon"])):p("",!0)],64)}}}),V=o({__name:"Search",props:{schema:{type:Array,default:()=>[]},isCol:t.bool.def(!1),labelWidth:t.oneOfType([String,Number]).def("auto"),layout:t.string.validate((e=>["inline","bottom"].includes(e))).def("inline"),buttonPosition:t.string.validate((e=>["left","center","right"].includes(e))).def("center"),showSearch:t.bool.def(!0),showReset:t.bool.def(!0),showExpand:t.bool.def(!1),expandField:t.string.def(""),inline:t.bool.def(!0),removeNoValueItem:t.bool.def(!0),model:{type:Object,default:()=>({})},searchLoading:t.bool.def(!1),resetLoading:t.bool.def(!1)},emits:["search","reset","register","validate"],setup(o,{expose:t,emit:n}){const l=o,c=n,d=w(!0),h=w(l.model),k=g((()=>{const e=m(q);let a=b(e.schema);if(e.showExpand&&e.expandField&&!m(d)){const s=v(a,(a=>a.field===e.expandField));a.map(((e,a)=>(e.hidden=a>=s,e)))}return"inline"===e.layout&&(a=a.concat([{field:"action",formItemProps:{labelWidth:"0px",slots:{default:()=>y("div",null,[y(O,{showSearch:e.showSearch,showReset:e.showReset,showExpand:e.showExpand,searchLoading:e.searchLoading,resetLoading:e.resetLoading,visible:d.value,onExpand:H,onReset:M,onSearch:D},null)]),label:()=>y("span",null,[u(" ")])}}}])),a})),{formRegister:j,formMethods:V}=e(),{getElFormExpose:_,getFormData:C,getFormExpose:P}=V,I=w({}),W=w({}),q=g((()=>{const e={...l};return Object.assign(e,m(W)),e})),A=w([]);x((()=>m(k)),(async(e=[])=>{h.value=a(e,m(h)),A.value=e}),{immediate:!0,deep:!0});const B=async()=>{const e=await C();return m(q).removeNoValueItem?Object.keys(e).reduce(((a,s)=>{const o=e[s];return F(o)||(L(o)?Object.keys(o).length>0&&(a[s]=o):a[s]=o),a}),{}):e},D=async()=>{const e=await _();await(null==e?void 0:e.validate((async e=>{if(e){const e=await B();c("search",e)}})))},M=async()=>{const e=await _();null==e||e.resetFields();const a=await B();c("reset",a)},N=g((()=>({textAlign:m(q).buttonPosition}))),H=async()=>{d.value=!m(d)},z={getElFormExpose:_,setProps:(e={})=>{W.value=Object.assign(m(W),e),I.value=e},setSchema:e=>{const{schema:a}=m(q);for(const s of a)for(const a of e)s.field===a.field&&R(s,a.path,a.value)},setValues:async(e={})=>{h.value=Object.assign(l.model,m(h),e);const a=await P();null==a||a.setValues(e)},delSchema:e=>{const{schema:a}=m(q),s=v(a,(a=>a.field===e));s>-1&&a.splice(s,1)},addSchema:(e,a)=>{const{schema:s}=m(q);void 0===a?s.push(e):s.splice(a,0,e)}};S((()=>{c("register",z)})),t(z);const T=(e,a,s)=>{c("validate",e,a,s)};return(e,a)=>(i(),r(f,null,[y(m(s),{model:h.value,"is-custom":!1,"label-width":q.value.labelWidth,"hide-required-asterisk":"",inline:q.value.inline,"is-col":q.value.isCol,schema:A.value,onRegister:m(j),onValidate:T},null,8,["model","label-width","inline","is-col","schema","onRegister"]),"bottom"===o.layout?(i(),r("div",{key:0,style:E(N.value)},[y(O,{"show-reset":q.value.showReset,"show-search":q.value.showSearch,"show-expand":q.value.showExpand,"search-loading":q.value.searchLoading,"reset-loading":q.value.resetLoading,onExpand:H,onReset:M,onSearch:D},null,8,["show-reset","show-search","show-expand","search-loading","reset-loading"])],4)):p("",!0)],64))}}),_=()=>{const e=w(),a=async()=>{await k();const a=m(e);return a};return{searchRegister:a=>{e.value=a},searchMethods:{setProps:async(e={})=>{const s=await a();null==s||s.setProps(e),e.model&&(null==s||s.setValues(e.model))},setValues:async e=>{const s=await a();null==s||s.setValues(e)},setSchema:async e=>{const s=await a();null==s||s.setSchema(e)},addSchema:async(e,s)=>{const o=await a();null==o||o.addSchema(e,s)},delSchema:async e=>{const s=await a();null==s||s.delSchema(e)},getFormData:async()=>{const e=await a();return null==e?void 0:e.formModel}}}};export{V as _,_ as u};
