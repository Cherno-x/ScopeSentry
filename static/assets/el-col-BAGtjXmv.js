import{Y as t,d as e,a6 as a,a7 as s,a5 as u,o as l,i as r,w as p,a8 as n,n as o,a as f,aH as d,aI as i,a9 as c,ag as g,Z as b,$ as y,aa as m,a2 as $,bq as h}from"./index-KRGk12nW.js";const j=Symbol("rowContextKey"),v=t({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"]}}),N=e({name:"ElRow"});const x=g(c(e({...N,props:v,setup(t){const e=t,c=a("row"),g=s((()=>e.gutter));u(j,{gutter:g});const b=s((()=>{const t={};return e.gutter?(t.marginRight=t.marginLeft=`-${e.gutter/2}px`,t):t})),y=s((()=>[c.b(),c.is(`justify-${e.justify}`,"start"!==e.justify),c.is(`align-${e.align}`,!!e.align)]));return(t,e)=>(l(),r(i(t.tag),{class:o(f(y)),style:d(f(b))},{default:p((()=>[n(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","row.vue"]])),w=t({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:b([Number,Object]),default:()=>y({})},sm:{type:b([Number,Object]),default:()=>y({})},md:{type:b([Number,Object]),default:()=>y({})},lg:{type:b([Number,Object]),default:()=>y({})},xl:{type:b([Number,Object]),default:()=>y({})}}),E=e({name:"ElCol"});const O=g(c(e({...E,props:w,setup(t){const e=t,{gutter:u}=m(j,{gutter:s((()=>0))}),c=a("col"),g=s((()=>{const t={};return u.value&&(t.paddingLeft=t.paddingRight=u.value/2+"px"),t})),b=s((()=>{const t=[];["span","offset","pull","push"].forEach((a=>{const s=e[a];$(s)&&("span"===a?t.push(c.b(`${e[a]}`)):s>0&&t.push(c.b(`${a}-${e[a]}`)))}));return["xs","sm","md","lg","xl"].forEach((a=>{$(e[a])?t.push(c.b(`${a}-${e[a]}`)):h(e[a])&&Object.entries(e[a]).forEach((([e,s])=>{t.push("span"!==e?c.b(`${a}-${e}-${s}`):c.b(`${a}-${s}`))}))})),u.value&&t.push(c.is("guttered")),[c.b(),t]}));return(t,e)=>(l(),r(i(t.tag),{class:o(f(b)),style:d(f(g))},{default:p((()=>[n(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","col.vue"]]));export{O as E,x as a};
