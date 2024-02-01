import{c as w,r as _,a5 as y,a7 as S,a8 as x,e as r,o as d,f as k,B,x as F,g as s,k as i,h as o,i as A,F as C,z as I}from"./index-6fec12ad.js";import{u as N}from"./FormSchemaStore-039f1104.js";import{O as D}from"./Option-dce9943e.js";import"./index.esm-5d6fa6e9.js";const O=s("h4",{class:"fw-bold py-3 mb-4"},"新增儀器",-1),V={class:"row"},T={class:"col-xxl"},M={class:"card mb-4"},j={class:"card-body"},z={class:"row mb-3"},E=s("label",{for:"labType",class:"col-sm-3 col-form-label red-star"},"單位 ",-1),L={class:"col-sm-4"},q={class:"row mb-3"},G=s("label",{for:"no",class:"col-sm-3 col-form-label red-star"},"NO. ",-1),H={class:"col-sm-4"},J={class:"row mb-3"},K=s("label",{for:"name",class:"col-sm-3 col-form-label red-star"},"名稱 ",-1),P={class:"col-sm-4"},Q={class:"row mb-3"},R=s("label",{for:"officialServiceBeginDate",class:"col-sm-3 col-form-label"},"Official service begin date",-1),U={class:"col-sm-4"},W={class:"row mb-3"},X=s("label",{for:"functionDescription",class:"col-sm-3 col-form-label red-star"},"Function description ",-1),Y={class:"col-sm-4"},Z={class:"d-flex justify-content-between flex-row-reverse"},$=s("button",{type:"submit",class:"btn btn-primary"},"新增",-1),ns={__name:"InstrumentCreation",setup(ss){const{instrumentCreationFormSchema:u}=N(),{handleSubmit:p,resetForm:f}=w({validationSchema:u}),a=_(""),l=_(!1),h=y().map(e=>new D(e.id,e.name,e.id)),m=p(async e=>{const n=S.create(e);await x(n).then(t=>{l.value=!0,a.value=t,f({})}).catch(function(t){l.value=!1,a.value=t.message})});return(e,n)=>{const t=r("AppMessage"),b=r("AppSelect"),c=r("AppInput"),v=r("router-link");return d(),k(C,null,[O,a.value?(d(),B(t,{key:0,message:a.value,success:l.value},null,8,["message","success"])):F("",!0),s("div",V,[s("form",{onSubmit:n[0]||(n[0]=(...g)=>i(m)&&i(m)(...g))},[s("div",T,[s("div",M,[s("div",j,[s("div",z,[E,s("div",L,[o(b,{options:i(h),name:"labType","show-error-message":!0},null,8,["options"])])]),s("div",q,[G,s("div",H,[o(c,{name:"no","show-error-message":!0})])]),s("div",J,[K,s("div",P,[o(c,{name:"name","show-error-message":!0})])]),s("div",Q,[R,s("div",U,[o(c,{name:"officialServiceBeginDate",type:"date"})])]),s("div",W,[X,s("div",Y,[o(c,{name:"functionDescription","show-error-message":!0})])])])])]),s("div",Z,[$,o(v,{to:"/instrument/management",class:"btn btn-outline-primary"},{default:A(()=>[I("回儀器管理")]),_:1})])],32)])],64)}}};export{ns as default};
