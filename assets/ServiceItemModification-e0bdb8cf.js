import{_ as m}from"./ServiceItemComponent.vue_vue_type_script_setup_true_lang-f0ddaa51.js";import{S as l}from"./ServiceItemService-a5b6ed95.js";import{C as i,s as p,r as _,o as I,f,h as u,j as v,F as d,g as h}from"./index-501cd1c4.js";import"./FormSchemaStore-f2d56775.js";import"./SampleCategory-297f54b4.js";import"./InstrumentApi-8a0ec2a1.js";const S=h("h4",{class:"fw-bold py-3 mb-4"},"修改服務項目",-1),C={__name:"ServiceItemModification",props:["serviceItemId"],async setup(a){let e,r;const c=a,n=l.getInstance();let t=i({});try{t=i(([e,r]=p(()=>n.fetchServiceItemById(c.serviceItemId)),e=await e,r(),e))}catch(s){console.error(s)}const o=_(t.instrumentDtoList);return(s,y)=>(I(),f(d,null,[S,u(m,{initialInstruments:o.value,initialServiceItem:v(t)},null,8,["initialInstruments","initialServiceItem"])],64))}};export{C as default};
