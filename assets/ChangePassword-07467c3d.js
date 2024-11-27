import{r as i,e as v,h as d,o as p,c as g,a as s,t as a,B as y,z as S,j as l,w as $,F as C,l as u}from"./index-bda4bfce.js";import{u as A}from"./FormSchemaStore-d0ac150a.js";import{U as F}from"./UserService-df50b955.js";import"./ProjectChargeType-415a59f1.js";const N={class:"fw-bold py-3 mb-4"},B={class:"col-xl-6 offset-xl-3 col-lg-12"},k={class:"row mb-4"},E={for:"currentPasswordLabel",class:"col-sm-3 col-form-label form-label"},I={class:"col-sm-9"},V={class:"row mb-4"},j={for:"newPassword",class:"col-sm-3 col-form-label form-label"},x={class:"col-sm-9"},L={class:"row mb-4"},M={for:"confirmNewPasswordLabel",class:"col-sm-3 col-form-label form-label"},U={class:"col-sm-9"},z={class:"mb-3"},D={class:"d-flex justify-content-end"},q={type:"submit",class:"btn btn-primary"},Q={__name:"ChangePassword",setup(G){const w=F.getInstance(),{changePasswordFormSchema:h}=A(),r=i(""),c=i(!1),{handleSubmit:_,resetForm:f}=v({validationSchema:h}),m=_(e=>{w.changePassword(e.currentPassword,e.newPassword,e.confirmNewPassword).then(o=>{c.value=!0,r.value=o==null?void 0:o.data,f({})}).catch(function(o){var t;c.value=((t=o.response)==null?void 0:t.status)===200,r.value=o.message})});return(e,o)=>{const t=d("AppMessage"),n=d("AppInput"),b=d("AppCard");return p(),g(C,null,[s("h4",N,a(e.$t("text.changePassword")),1),r.value?(p(),y(t,{key:0,message:r.value,success:c.value},null,8,["message","success"])):S("",!0),s("div",B,[l(b,null,{body:$(()=>[s("form",{onSubmit:o[0]||(o[0]=(...P)=>u(m)&&u(m)(...P))},[s("div",k,[s("label",E,a(e.$t("text.currentPassword")),1),s("div",I,[l(n,{type:"password",name:"currentPassword",placeholder:e.$t("placeholder.currentPassword"),"aria-label":"Enter current password","show-error-message":!0},null,8,["placeholder"])])]),s("div",V,[s("label",j,a(e.$t("text.newPassword")),1),s("div",x,[l(n,{type:"password",name:"newPassword",placeholder:e.$t("placeholder.newPassword"),"aria-label":"Enter new password","show-error-message":!0},null,8,["placeholder"])])]),s("div",L,[s("label",M,a(e.$t("text.confirmPassword")),1),s("div",U,[s("div",z,[l(n,{type:"password",name:"confirmNewPassword",placeholder:e.$t("placeholder.confirmPassword"),"aria-label":"Confirm your new password","show-error-message":!0},null,8,["placeholder"])])])]),s("div",D,[s("button",q,a(e.$t("button.update")),1)])],32)]),_:1})])],64)}}};export{Q as default};