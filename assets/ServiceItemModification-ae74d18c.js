import{_ as m}from"./ServiceItemComponent.vue_vue_type_script_setup_true_lang-3eab5501.js";import{S as l}from"./ServiceItemService-eab5e3f8.js";import{G as i,z as p,r as _,o as I,f,h as u,j as v,F as d,g as h}from"./index-cc3b5264.js";import"./FormSchemaStore-7d3e88fd.js";import"./SampleCategory-297f54b4.js";import"./InstrumentApiImpl-4b2f4817.js";const S=h("h4",{class:"fw-bold py-3 mb-4"},"修改服務項目",-1),F={__name:"ServiceItemModification",props:["serviceItemId"],async setup(a){let e,r;const c=a,n=l.getInstance();let t=i({});try{t=i(([e,r]=p(()=>n.fetchServiceItemById(c.serviceItemId)),e=await e,r(),e))}catch(s){console.error(s)}const o=_(t.instrumentDtoList);return(s,y)=>(I(),f(d,null,[S,u(m,{initialInstruments:o.value,initialServiceItem:v(t)},null,8,["initialInstruments","initialServiceItem"])],64))}};export{F as default};
