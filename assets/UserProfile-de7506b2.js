import{a as F,r as p,q as g,C as x,D as O,E as k,c as B,G as P,e as d,o as w,f as U,g as e,t as a,B as V,x as D,h as r,i as N,F as E,z as y,k as u}from"./index-82a1c74a.js";import{u as I}from"./FormSchemaStore-d2a49c97.js";import{O as M}from"./Option-dce9943e.js";import"./index.esm-6aa8dcb8.js";const q={class:"fw-bold py-3 mb-4"},G={class:"row"},T={class:"mb-1 col-md-6"},j={for:"title",class:"form-label"},H={id:"title"},J={class:"mb-1 col-md-6"},K={for:"username",class:"form-label"},L={id:"username"},Q={class:"mb-1 col-md-12"},R={for:"address",class:"form-label red-star"},W={class:"mb-1 col-md-6"},X={class:"form-label red-star",for:"phone"},Y={class:"mb-1 col-md-6"},Z={class:"form-label",for:"mobile"},ee={class:"mb-1 col-md-6"},se={for:"organization",class:"form-label red-star"},te={class:"mb-1 col-md-6"},ae={class:"form-label red-star",for:"department"},oe={class:"mt-2"},ne={type:"submit",class:"btn btn-primary me-2"},de={__name:"UserProfile",async setup(le){let o,c;const{t:_}=F(),{userProfileFormSchema:S}=I(),l=p(""),i=p(!1),h=p([]);try{h.value=([o,c]=g(()=>x().then(s=>s.map(t=>new M(t.id,t.name,t.id)))),o=await o,c(),o)}catch{i.value=!1,l.value=_("message.fetchOrganizations.failure")}let f=O({});try{f=([o,c]=g(()=>k()),o=await o,c(),o)}catch{i.value=!1,l.value=_("message.fetchUserProfile.failure")}const{values:b,handleSubmit:A}=B({initialValues:f,validationSchema:S}),v=A(s=>{P(s).then(t=>{i.value=!0,l.value=t==null?void 0:t.data}).catch(function(t){var m,n;i.value=((m=t.response)==null?void 0:m.status)===200,l.value=(n=t.response)==null?void 0:n.data})});return(s,t)=>{const m=d("AppMessage"),n=d("AppInput"),$=d("AppSelect"),z=d("AppCard");return w(),U(E,null,[e("h4",q,a(s.$t("text.profileDetails")),1),l.value?(w(),V(m,{key:0,message:l.value,success:i.value},null,8,["message","success"])):D("",!0),r(z,null,{body:N(()=>[e("form",{onSubmit:t[0]||(t[0]=(...C)=>u(v)&&u(v)(...C))},[e("div",G,[e("div",T,[e("label",j,a(s.$t("text.name")),1),y(": "),e("span",H,a(u(b).title),1)]),e("div",J,[e("label",K,a(s.$t("text.email")),1),y(": "),e("span",L,a(u(b).username),1)]),e("div",Q,[e("label",R,a(s.$t("text.address")),1),r(n,{name:"address","show-error-message":!0})]),e("div",W,[e("label",X,a(s.$t("text.tel")),1),r(n,{name:"phone","show-error-message":!0})]),e("div",Y,[e("label",Z,a(s.$t("text.mobile")),1),r(n,{name:"mobile","show-error-message":!0})]),e("div",ee,[e("label",se,a(s.$t("text.organization")),1),r($,{name:"organization",options:h.value,defaultOption:!1,"show-error-message":!0},null,8,["options"])]),e("div",te,[e("label",ae,a(s.$t("text.department")),1),r(n,{name:"department","show-error-message":!0})])]),e("div",oe,[e("button",ne,a(s.$t("button.update")),1)])],32)]),_:1})],64)}}};export{de as default};
