import{D as a,q as o,aw as m,r as l,o as _,f as p,h as u,k as I,F as f,g as d}from"./index-6e351f0c.js";import{_ as v}from"./ServiceItemComponent-1d39b521.js";import"./FormSchemaStore-64925bf0.js";import"./Option-3450003d.js";const h=d("h4",{class:"fw-bold py-3 mb-4"},"修改服務項目",-1),x={__name:"ServiceItemModification",props:["serviceItemId"],async setup(i){let e,r;const n=i;let t=a({});try{t=a(([e,r]=o(()=>m(n.serviceItemId)),e=await e,r(),e))}catch(s){console.error(s)}const c=l(t.instrumentDtoList);return(s,y)=>(_(),p(f,null,[h,u(v,{initialInstruments:c.value,initialServiceItem:I(t)},null,8,["initialInstruments","initialServiceItem"])],64))}};export{x as default};