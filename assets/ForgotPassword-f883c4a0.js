import{d as S,a as C,r as m,c as F,aP as P,h as u,o as $,i as B,k as c,w as l,j as e,t,p as E,m as o,_ as V,aQ as j}from"./index-c3923e02.js";import{u as z}from"./FormSchemaStore-2dcac12c.js";const I={style:{height:"100vh"},class:"d-flex flex-column justify-content-center align-items-center"},N=e("div",{class:"offset-3 col-5"},[e("img",{src:j})],-1),T={class:"mb-2"},D=e("div",{class:"mb-3"},[e("span",{"th:object":"${msg}","th:class":"*{success ? 'text-success' : 'text-danger'}"})],-1),Q={class:"mb-3"},J={for:"email",class:"form-label"},L={class:"mb-3"},H={class:"d-flex justify-content-between"},K={class:"form-label",for:"reCAPTCHA"},R={class:"input-group input-group-merge"},Y={class:"mb-3"},Z={class:"btn btn-primary d-grid w-100",type:"submit"},O=S({__name:"ForgotPassword",setup(q){const p="6LeNpBkTAAAAAAVJZDRzygxuBAxJ2Ak0D-AztSx5",{userForgotPasswordFormSchema:_}=z(),{locale:h,t:f}=C(),r=m(""),{handleSubmit:g}=F({validationSchema:_}),a=m(""),i=m(),d=g(s=>{r.value?P(s.email,r.value).then(function(n){i.value=!0,a.value=n.data}).catch(()=>{i.value=!1,a.value=f("message.forgotPassword.failure")}):a.value="驗證碼失敗"});function b(s){r.value=s}function v(){console.log("驗證過期啦QAQ")}function A(){console.log("failed")}return(s,n)=>{const x=u("router-link"),w=u("AppInput"),y=u("AppCard");return $(),B("div",I,[c(y,null,{header:l(()=>[c(x,{to:{name:"Login"},tabindex:"-1",class:"gap-2"},{default:l(()=>[N]),_:1})]),title:l(()=>[e("h4",T,t(s.$t("text.forgotPassword")),1),e("span",{class:E(i.value?"text-success":"text-danger")},t(a.value),3)]),body:l(()=>[e("form",{class:"mb-3",onSubmit:n[0]||(n[0]=(...k)=>o(d)&&o(d)(...k))},[D,e("div",Q,[e("label",J,t(s.$t("text.email")),1),c(w,{name:"email","show-error-message":!0})]),e("div",L,[e("div",H,[e("label",K,t(s.$t("text.reCaptcha")),1)]),e("div",R,[c(o(V),{sitekey:o(p),size:"normal",theme:"light",hl:o(h),onVerify:b,onExpire:v,onFail:A},null,8,["sitekey","hl"])])]),e("div",Y,[e("button",Z,t(s.$t("button.generateNewPassword")),1)])],32)]),_:1})])}}});export{O as default};
