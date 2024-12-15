import{d as e,s as t,v as a,S as o,G as i,r as l,o as n,c as m,e as d,w as s,a as c,f as u,t as r,z as p,B as f,A as v,i as b,j as _,F as y,l as h,_ as x}from"./index-KRGk12nW.js";import{E as N,a as g}from"./el-col-BAGtjXmv.js";import{E as w,a as V}from"./el-form-wZC2EpEv.js";import{a as j,E as T}from"./el-radio-group-DHEVoG2t.js";import{E as S}from"./el-text-CzHloMOA.js";import{E as k}from"./el-switch-74D2zXON.js";import{E as U}from"./el-divider-ClRUh_tN.js";import{E as I}from"./el-card-DCxCGAT-.js";import{_ as A}from"./Dialog.vue_vue_type_style_index_0_lang-DWirc3I4.js";import{_ as E}from"./Table.vue_vue_type_script_lang-DpFssv_i.js";import{u as C}from"./useTable-F7zxLGkE.js";import{e as M,f as D,h as R,u as O,i as P,j as W}from"./index-a2PKpn6G.js";import"./castArray-Bwuex2cE.js";import"./refs-BWFENJSL.js";import"./el-popper-wh2PzFWh.js";import"./el-table-column-iXo-_pHO.js";import"./index-DW-ADnkR.js";import"./debounce-DQE3XwSh.js";import"./el-checkbox-Bm2BCHMT.js";import"./isArrayLikeObject-TVjqJchl.js";import"./raf-1T_Q1bCh.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-tag-C8hPWVQo.js";import"./el-pagination-BY5d0Jzg.js";import"./el-select-zTb78GhE.js";import"./strings-B5LAS_4L.js";import"./useInput-8TO2ocnj.js";import"./el-image-viewer-DAaUOm0A.js";import"./el-empty-CnGYcRUe.js";import"./tsxHelper-C8UKL7NZ.js";import"./el-dropdown-item-DmNiz-ql.js";import"./index-BhDrzngV.js";import"./index-Jp-pEfyE.js";const F={class:"mb-10px"},H={style:{position:"relative",top:"12px"}},L=x(e({__name:"notification",setup(e){const{t:x}=h(),L=t([{field:"selection",type:"selection",width:"55"},{field:"name",label:"Name",minWidth:20},{field:"method",label:"Method",minWidth:20},{field:"url",label:"URL"},{field:"contentType",label:"Content Type",minWidth:25},{field:"data",label:"POST DATA"},{field:"state",label:x("common.state"),minWidth:25,formatter:(e,t,i)=>{let l="",n="";return 1==i?(l="#2eb98a",n=x("common.on")):(l="red",n=x("common.off")),a(g,{gutter:20},[a(N,{span:1},[a(o,{icon:"clarity:circle-solid",color:l,size:10})]),a(N,{span:5},[a(S,{type:"info"},n)])])}},{field:"action",label:x("tableDemo.action"),formatter:(e,t,o)=>a("div",[a(i,{type:"primary",onClick:()=>te(e)},x("common.edit")),a(i,{type:"danger",onClick:()=>oe(e)},x("common.delete"))])}]),{tableState:z,tableMethods:G}=C({fetchDataApi:async()=>({list:(await D()).data.list})}),{dataList:J}=z,{getList:B,getElTableExpose:K}=G,X=t({name:"",url:"",method:"GET",contentType:"raw",data:"",state:!0}),Y=t({dirScanNotification:!0,portScanNotification:!0,sensitiveNotification:!0,subdomainNotification:!0,subdomainTakeoverNotification:!0,pageMonNotification:!0,vulNotification:!0});(async()=>{const e=await R();Y.dirScanNotification=e.data.dirScanNotification,Y.portScanNotification=e.data.portScanNotification,Y.sensitiveNotification=e.data.sensitiveNotification,Y.subdomainNotification=e.data.subdomainNotification,Y.subdomainTakeoverNotification=e.data.subdomainTakeoverNotification,Y.pageMonNotification=e.data.pageMonNotification,Y.vulNotification=e.data.vulNotification})();const q=l(!1),Q=l(!1),Z=async()=>{$.value="",X.name="",X.url="",X.method="GET",X.contentType="raw",X.data="",X.state=!0,Q.value=!0},$=l(""),ee=l(!1),te=e=>{$.value=e.id,X.name=e.name,X.url=e.url,X.method=e.method,X.contentType=e.contentType,X.data=e.data,X.state=e.state,Q.value=!0},ae=l(!1),oe=async e=>{ae.value=!0;try{await M([e.id]);ae.value=!1,B()}catch(t){ae.value=!1,B()}},ie=l([]),le=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await ne()},ne=async()=>{const e=await K(),t=(null==e?void 0:e.getSelectionRows())||[];ie.value=t.map((e=>e.id)),ae.value=!0;try{await M(ie.value);ae.value=!1,B()}catch(a){ae.value=!1,B()}};return(e,t)=>(n(),m(y,null,[d(c(I),{shadow:"never",class:"mb-20px"},{header:s((()=>[d(c(g),null,{default:s((()=>[d(c(N),{span:3,style:{height:"100%"}},{default:s((()=>[u("span",null,r(c(x)("configuration.noticeConfig")),1)])),_:1})])),_:1})])),default:s((()=>[d(c(g),null,{default:s((()=>[d(c(N),{style:{position:"relative",top:"16px"}},{default:s((()=>[u("div",F,[d(c(i),{type:"primary",onClick:Z},{default:s((()=>[p(r(c(x)("configuration.newWebhookConfig")),1)])),_:1}),d(c(i),{type:"danger",loading:ae.value,onClick:le},{default:s((()=>[p(r(c(x)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),u("div",H,[d(c(E),{data:c(J),columns:L,stripe:"",border:!0,resizable:!0,maxHeight:"200",style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["data","columns"])]),d(c(U)),d(c(w),{model:Y,"label-width":"auto","status-icon":"",ref:"ruleFormRef",style:{position:"relative",top:"1rem"}},{default:s((()=>[d(c(g),null,{default:s((()=>[d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("subdomain.subdomainName")},{default:s((()=>[d(c(k),{modelValue:Y.subdomainNotification,"onUpdate:modelValue":t[0]||(t[0]=e=>Y.subdomainNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("task.subdomainTakeover")},{default:s((()=>[d(c(k),{modelValue:Y.subdomainTakeoverNotification,"onUpdate:modelValue":t[1]||(t[1]=e=>Y.subdomainTakeoverNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("dirScan.dirScanName")},{default:s((()=>[d(c(k),{modelValue:Y.dirScanNotification,"onUpdate:modelValue":t[2]||(t[2]=e=>Y.dirScanNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),d(c(g),null,{default:s((()=>[d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("task.portScan")},{default:s((()=>[d(c(k),{modelValue:Y.portScanNotification,"onUpdate:modelValue":t[3]||(t[3]=e=>Y.portScanNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("sensitiveInformation.sensitiveInformationName")},{default:s((()=>[d(c(k),{modelValue:Y.sensitiveNotification,"onUpdate:modelValue":t[4]||(t[4]=e=>Y.sensitiveNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("PageMonitoring.pageMonitoringName")},{default:s((()=>[d(c(k),{modelValue:Y.pageMonNotification,"onUpdate:modelValue":t[5]||(t[5]=e=>Y.pageMonNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),d(c(g),null,{default:s((()=>[d(c(N),{span:5},{default:s((()=>[d(c(V),{label:c(x)("vulnerability.vulnerabilityName")},{default:s((()=>[d(c(k),{modelValue:Y.vulNotification,"onUpdate:modelValue":t[6]||(t[6]=e=>Y.vulNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),d(c(g),null,{default:s((()=>[d(c(N),{span:2,offset:8},{default:s((()=>[d(c(V),null,{default:s((()=>[d(c(f),{type:"primary",onClick:t[7]||(t[7]=e=>(async()=>{q.value=!0,await O(Y.dirScanNotification,Y.portScanNotification,Y.sensitiveNotification,Y.subdomainNotification,Y.subdomainTakeoverNotification,Y.pageMonNotification,Y.vulNotification),q.value=!1})()),loading:q.value},{default:s((()=>[p(r(c(x)("common.submit")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),d(c(A),{modelValue:Q.value,"onUpdate:modelValue":t[15]||(t[15]=e=>Q.value=e),title:c(x)("configuration.newWebhookConfig"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:"100"},{default:s((()=>[d(c(S),{class:"mx-2",type:"danger",size:"small",style:{position:"relative",left:"2rem"}},{default:s((()=>[p(r(c(x)("configuration.noticeHelp")),1)])),_:1}),d(c(w),{model:X,"label-width":"auto","status-icon":"",ref:"ruleFormRef",style:{position:"relative",top:"1rem"}},{default:s((()=>[d(c(V),{label:"Name",prop:"name"},{default:s((()=>[d(c(v),{modelValue:X.name,"onUpdate:modelValue":t[8]||(t[8]=e=>X.name=e),placeholder:"Input name."},null,8,["modelValue"])])),_:1}),d(c(V),{label:"Method",prop:"method"},{default:s((()=>[d(c(j),{modelValue:X.method,"onUpdate:modelValue":t[9]||(t[9]=e=>X.method=e)},{default:s((()=>[d(c(T),{value:"GET"},{default:s((()=>[p("GET")])),_:1}),d(c(T),{value:"POST"},{default:s((()=>[p("POST")])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(c(V),{label:"URL",prop:"url"},{default:s((()=>[d(c(v),{modelValue:X.url,"onUpdate:modelValue":t[10]||(t[10]=e=>X.url=e),placeholder:"Input URL."},null,8,["modelValue"])])),_:1}),"POST"==X.method?(n(),b(c(V),{key:0,label:"Data Type",prop:"contentType"},{default:s((()=>[d(c(j),{modelValue:X.contentType,"onUpdate:modelValue":t[11]||(t[11]=e=>X.contentType=e)},{default:s((()=>[d(c(T),{value:"raw"},{default:s((()=>[p("Raw")])),_:1}),d(c(T),{value:"json"},{default:s((()=>[p("Json")])),_:1})])),_:1},8,["modelValue"])])),_:1})):_("",!0),"POST"==X.method?(n(),b(c(V),{key:1,label:"Data",prop:"Data"},{default:s((()=>[d(c(v),{modelValue:X.data,"onUpdate:modelValue":t[12]||(t[12]=e=>X.data=e),placeholder:"Input POST Data."},null,8,["modelValue"])])),_:1})):_("",!0),d(c(V),{label:c(x)("common.state")},{default:s((()=>[d(c(k),{modelValue:X.state,"onUpdate:modelValue":t[13]||(t[13]=e=>X.state=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),d(c(g),null,{default:s((()=>[d(c(N),{span:2,offset:8},{default:s((()=>[d(c(V),null,{default:s((()=>[d(c(f),{type:"primary",onClick:t[14]||(t[14]=e=>(async()=>{ee.value=!0,""==$.value?await P(X.name,X.url,X.method,X.contentType,X.data,X.state):await W($.value,X.name,X.url,X.method,X.contentType,X.data,X.state),B(),ee.value=!1,Q.value=!1})()),loading:ee.value},{default:s((()=>[p(r(c(x)("common.submit")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-00fd9ad3"]]);export{L as default};
