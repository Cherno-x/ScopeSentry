import{d as a,b as o,r as e,o as s,i as l,n,a as c,k as t,_ as r,al as i,am as m,an as d,ao as u,ap as p,aq as g,ar as _,a7 as f,y as v,w as h,e as w,c as j,R as L,F as C,z as b,t as I}from"./index-KRGk12nW.js";import{E as k}from"./el-switch-74D2zXON.js";import{u as E}from"./useIcon-C2iD-PC_.js";import{E as D,b as V,a as x}from"./el-dropdown-item-DmNiz-ql.js";import"./el-popper-wh2PzFWh.js";const y="var(--el-color-black)",z=r(a({__name:"ThemeSwitch",setup(a){const{getPrefixCls:r}=t(),i=r("theme-switch"),m=E({icon:"emojione-monotone:sun",color:"#fde047"}),d=E({icon:"emojione-monotone:crescent-moon",color:"#fde047"}),u=o(),p=e(u.getIsDark),g=a=>{u.setIsDark(a)};return(a,o)=>(s(),l(c(k),{class:n(c(i)),modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=a=>p.value=a),"inline-prompt":"","border-color":y,"inactive-color":y,"active-color":y,"active-icon":c(m),"inactive-icon":c(d),onChange:g},null,8,["class","modelValue","active-icon","inactive-icon"]))}}),[["__scopeId","data-v-27848ee9"]]),P=()=>({changeLocale:async a=>{const o=i.global,e=await m(Object.assign({"../../locales/en.ts":()=>d((()=>import("./en-DCcrG3QT.js")),__vite__mapDeps([])),"../../locales/zh-CN.ts":()=>d((()=>import("./zh-CN-DUCQ4iIQ.js")),__vite__mapDeps([]))}),`../../locales/${a}.ts`);o.setLocaleMessage(a,e.default),(a=>{const o=u();"legacy"===i.mode?i.global.locale=a:i.global.locale.value=a,o.setCurrentLocale({lang:a}),p(a)})(a)}}),T=a({__name:"LocaleDropdown",props:{color:g.string.def("")},setup(a){const{getPrefixCls:o}=t(),e=o("locale-dropdown"),r=_(),i=f((()=>r.getLocaleMap)),m=f((()=>r.getCurrentLocale)),d=a=>{if(a===c(m).lang)return;window.location.reload(),r.setCurrentLocale({lang:a});const{changeLocale:o}=P();o(a)};return(o,t)=>{const r=v("Icon");return s(),l(c(V),{class:n(c(e)),trigger:"click",onCommand:d},{dropdown:h((()=>[w(c(D),null,{default:h((()=>[(s(!0),j(C,null,L(i.value,(a=>(s(),l(c(x),{key:a.lang,command:a.lang},{default:h((()=>[b(I(a.name),1)])),_:2},1032,["command"])))),128))])),_:1})])),default:h((()=>[w(r,{size:18,icon:"ion:language-sharp",class:n(["cursor-pointer !p-0",o.$attrs.class]),color:a.color},null,8,["class","color"])])),_:1},8,["class"])}}});export{z as T,T as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}