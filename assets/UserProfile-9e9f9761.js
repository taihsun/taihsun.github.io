import{U}from"./UserService-26a869a2.js";import{O as B}from"./OrganizationService-5f86d863.js";import{d as F,u as I,r as p,z as w,G as P,a as V,e as d,o as S,f as k,g as e,t as a,D,B as N,h as l,w as j,C as y,j as u,F as E}from"./index-a622a1bc.js";import{u as M}from"./FormSchemaStore-87d001f5.js";import"./ProjectChargeType-415a59f1.js";const G={class:"fw-bold py-3 mb-4"},T={class:"row"},q={class:"mb-1 col-md-6"},H={for:"title",class:"form-label"},J={id:"title"},K={class:"mb-1 col-md-6"},L={for:"username",class:"form-label"},Q={id:"username"},R={class:"mb-1 col-md-12"},W={for:"address",class:"form-label red-star"},X={class:"mb-1 col-md-6"},Y={class:"form-label red-star",for:"phone"},Z={class:"mb-1 col-md-6"},ee={class:"form-label",for:"mobile"},se={class:"mb-1 col-md-6"},te={for:"organization",class:"form-label red-star"},ae={class:"mb-1 col-md-6"},oe={class:"form-label red-star",for:"department"},ne={class:"mb-2 d-flex justify-content-between flex-row-reverse"},re={type:"submit",class:"btn btn-primary me-2"},pe=F({__name:"UserProfile",async setup(le){let o,c;const _=U.getInstance(),z=B.getInstance(),{t:f}=I(),{userProfileFormSchema:A}=M(),r=p(""),i=p(!1),h=p([]);try{h.value=([o,c]=w(()=>z.fetchOrganizationsExcludingOther().then(s=>s.map(t=>({id:t.id,name:t.name,value:t.id})))),o=await o,c(),o)}catch{i.value=!1,r.value=f("message.fetchOrganizations.failure")}let b=P({});try{b=([o,c]=w(()=>_.fetchUserProfile()),o=await o,c(),o)}catch{i.value=!1,r.value=f("message.fetchUserProfile.failure")}const{values:v,handleSubmit:$}=V({initialValues:b,validationSchema:A}),g=$(s=>{_.updateUserProfile(s).then(t=>{i.value=!0,r.value=t==null?void 0:t.data}).catch(function(t){var m,n;i.value=((m=t.response)==null?void 0:m.status)===200,r.value=(n=t.response)==null?void 0:n.data})});return(s,t)=>{const m=d("AppMessage"),n=d("AppInput"),C=d("AppSelect"),x=d("AppCard");return S(),k(E,null,[e("h4",G,a(s.$t("text.profileDetails")),1),r.value?(S(),D(m,{key:0,message:r.value,success:i.value},null,8,["message","success"])):N("",!0),l(x,null,{body:j(()=>[e("form",{onSubmit:t[0]||(t[0]=(...O)=>u(g)&&u(g)(...O))},[e("div",T,[e("div",q,[e("label",H,a(s.$t("text.name")),1),y(": "),e("span",J,a(u(v).title),1)]),e("div",K,[e("label",L,a(s.$t("text.email")),1),y(": "),e("span",Q,a(u(v).username),1)]),e("div",R,[e("label",W,a(s.$t("text.address")),1),l(n,{name:"address","show-error-message":!0})]),e("div",X,[e("label",Y,a(s.$t("text.tel")),1),l(n,{name:"phone","show-error-message":!0})]),e("div",Z,[e("label",ee,a(s.$t("text.mobile")),1),l(n,{name:"mobile","show-error-message":!0})]),e("div",se,[e("label",te,a(s.$t("text.organization")),1),l(C,{name:"organization",options:h.value,defaultOption:!1,"show-error-message":!0},null,8,["options"])]),e("div",ae,[e("label",oe,a(s.$t("text.department")),1),l(n,{name:"department","show-error-message":!0})])]),e("div",ne,[e("button",re,a(s.$t("button.update")),1)])],32)]),_:1})],64)}}});export{pe as default};
