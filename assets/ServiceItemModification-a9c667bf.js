import{l as c}from"./api-9f51bc32.js";import{_ as m}from"./ServiceItemComponent.vue_vue_type_script_setup_true_lang-4f0d0c47.js";import{D as i,x as l,r as _,o as p,i as u,k as I,m as f,F as d,j as v}from"./index-c3923e02.js";import"./FormSchemaStore-2dcac12c.js";const h=v("h4",{class:"fw-bold py-3 mb-4"},"修改服務項目",-1),w={__name:"ServiceItemModification",props:["serviceItemId"],async setup(a){let e,r;const n=a;let t=i({});try{t=i(([e,r]=l(()=>c(n.serviceItemId)),e=await e,r(),e))}catch(s){console.error(s)}const o=_(t.instrumentDtoList);return(s,y)=>(p(),u(d,null,[h,I(m,{initialInstruments:o.value,initialServiceItem:f(t)},null,8,["initialInstruments","initialServiceItem"])],64))}};export{w as default};
