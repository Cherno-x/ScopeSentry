import{Y as e,d as l,a6 as a,a7 as t,v as s,a8 as r,r as n,b9 as i,a4 as u,a2 as c,e as o,dF as p,J as d,z as f,Z as y,a3 as v,ca as h,dG as S,dH as m,ag as g}from"./index-KRGk12nW.js";const x=l({name:"ElSpaceItem",props:e({prefixCls:{type:String}}),setup(e,{slots:l}){const n=a("space"),i=t((()=>`${e.prefixCls||n.b()}__item`));return()=>s("div",{class:i.value},r(l,"default"))}}),E={small:8,default:12,large:16};const b=g(l({name:"ElSpace",props:e({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:y([String,Object,Array]),default:""},style:{type:y([String,Array,Object]),default:""},alignment:{type:y(String),default:"center"},prefixCls:{type:String},spacer:{type:y([Object,String,Number,Array]),default:null,validator:e=>d(e)||c(e)||v(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:h,validator:e=>c(e)||u(e)&&2===e.length&&e.every(c)}}),setup(e,{slots:l}){const{classes:s,containerStyle:y,itemStyle:v}=function(e){const l=a("space"),s=t((()=>[l.b(),l.m(e.direction),e.class])),r=n(0),o=n(0),p=t((()=>[e.wrap||e.fill?{flexWrap:"wrap"}:{},{alignItems:e.alignment},{rowGap:`${o.value}px`,columnGap:`${r.value}px`},e.style])),d=t((()=>e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{}));return i((()=>{const{size:l="small",wrap:a,direction:t,fill:s}=e;if(u(l)){const[e=0,a=0]=l;r.value=e,o.value=a}else{let e;e=c(l)?l:E[l||"small"]||E.small,(a||s)&&"horizontal"===t?r.value=o.value=e:"horizontal"===t?(r.value=e,o.value=0):(o.value=e,r.value=0)}})),{classes:s,containerStyle:p,itemStyle:d}}(e);function h(l,a="",t=[]){const{prefixCls:s}=e;return l.forEach(((e,l)=>{S(e)?u(e.children)&&e.children.forEach(((e,l)=>{S(e)&&u(e.children)?h(e.children,`${a+l}-`,t):t.push(o(x,{style:v.value,prefixCls:s,key:`nested-${a+l}`},{default:()=>[e]},p.PROPS|p.STYLE,["style","prefixCls"]))})):m(e)&&t.push(o(x,{style:v.value,prefixCls:s,key:`LoopKey${a+l}`},{default:()=>[e]},p.PROPS|p.STYLE,["style","prefixCls"]))})),t}return()=>{var a;const{spacer:t,direction:n}=e,i=r(l,"default",{key:0},(()=>[]));if(0===(null!=(a=i.children)?a:[]).length)return null;if(u(i.children)){let e=h(i.children);if(t){const l=e.length-1;e=e.reduce(((e,a,s)=>{const r=[...e,a];return s!==l&&r.push(o("span",{style:[v.value,"vertical"===n?"width: 100%":null],key:s},[d(t)?t:f(t,p.TEXT)],p.STYLE)),r}),[])}return o("div",{class:s.value,style:y.value},e,p.STYLE|p.CLASS)}return i.children}}}));export{b as E};
