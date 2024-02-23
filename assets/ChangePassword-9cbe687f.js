import{r as i,c as P,A as g,e as d,o as p,f as v,g as s,t as r,B as y,x as C,h as n,i as S,F as $,k as u}from"./index-6e351f0c.js";import{u as A}from"./FormSchemaStore-64925bf0.js";const F={class:"fw-bold py-3 mb-4"},N={class:"col-xl-6 offset-xl-3 col-lg-12"},k={class:"row mb-4"},B={for:"currentPasswordLabel",class:"col-sm-3 col-form-label form-label"},x={class:"col-sm-9"},E={class:"row mb-4"},V={for:"newPassword",class:"col-sm-3 col-form-label form-label"},I={class:"col-sm-9"},L={class:"row mb-4"},M={for:"confirmNewPasswordLabel",class:"col-sm-3 col-form-label form-label"},j={class:"col-sm-9"},D={class:"mb-3"},q={class:"d-flex justify-content-end"},z={type:"submit",class:"btn btn-primary"},K={__name:"ChangePassword",setup(G){const{changePasswordFormSchema:w}=A(),t=i(""),c=i(!1),{handleSubmit:h,resetForm:_}=P({validationSchema:w}),m=h(e=>{g(e.currentPassword,e.newPassword,e.confirmNewPassword).then(o=>{c.value=!0,t.value=o==null?void 0:o.data,_({})}).catch(function(o){var l,a;c.value=((l=o.response)==null?void 0:l.status)===200,t.value=(a=o.response)==null?void 0:a.data})});return(e,o)=>{const l=d("AppMessage"),a=d("AppInput"),f=d("AppCard");return p(),v($,null,[s("h4",F,r(e.$t("text.changePassword")),1),t.value?(p(),y(l,{key:0,message:t.value,success:c.value},null,8,["message","success"])):C("",!0),s("div",N,[n(f,null,{body:S(()=>[s("form",{onSubmit:o[0]||(o[0]=(...b)=>u(m)&&u(m)(...b))},[s("div",k,[s("label",B,r(e.$t("text.currentPassword")),1),s("div",x,[n(a,{type:"password",name:"currentPassword",placeholder:e.$t("placeholder.currentPassword"),"aria-label":"Enter current password","show-error-message":!0},null,8,["placeholder"])])]),s("div",E,[s("label",V,r(e.$t("text.newPassword")),1),s("div",I,[n(a,{type:"password",name:"newPassword",placeholder:e.$t("placeholder.newPassword"),"aria-label":"Enter new password","show-error-message":!0},null,8,["placeholder"])])]),s("div",L,[s("label",M,r(e.$t("text.confirmPassword")),1),s("div",j,[s("div",D,[n(a,{type:"password",name:"confirmNewPassword",placeholder:e.$t("placeholder.confirmPassword"),"aria-label":"Confirm your new password","show-error-message":!0},null,8,["placeholder"])])])]),s("div",q,[s("button",z,r(e.$t("button.update")),1)])],32)]),_:1})])],64)}}};export{K as default};