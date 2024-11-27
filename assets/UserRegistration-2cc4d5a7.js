import{d as R,u as F,r as c,e as I,f as B,g as D,h,o as N,c as P,a as e,j as a,w as b,t as o,k as v,v as w,l as n,m as U,_ as q,n as J,p as L,q as M}from"./index-8fed8339.js";import{u as Q}from"./FormSchemaStore-83c66384.js";import{O as K}from"./OrganizationService-e9b32d55.js";import{g as Y}from"./ProjectChargeType-415a59f1.js";const Z={class:"content-wrapper"},G={class:"container-xxl flex-grow-1 container-p-y"},H={class:"row d-flex justify-content-center"},W={class:"col-md-7"},X=e("a",{class:"d-flex justify-content-center mb-4","th:href":"@{/auth/login}"},[e("img",{"th:src":"@{/images/logo_tac.png}"})],-1),ee={class:"d-flex align-items-start align-items-sm-center"},se={class:"alert alert-warning"},te={class:"fw-bold mb-1 text-dark"},oe={class:"mb-0 text-dark"},ae={class:"mb-0 text-dark"},re={class:"mb-0 text-dark"},ne={class:"mb-0 text-danger"},le=e("hr",{class:"my-2"},null,-1),ie={class:"row"},ce={class:"mb-1 col-md-6"},de={for:"title",class:"form-label red-star"},me={class:"mb-1 col-md-6"},he={for:"username",class:"form-label red-star"},pe={class:"mb-1 col-md-12"},ue={for:"address",class:"form-label red-star"},_e={class:"mb-1 col-md-6"},fe={class:"form-label red-star",for:"phone"},ge={class:"mb-1 col-md-6"},be={class:"form-label",for:"mobile"},ve={class:"mb-1 col-md-6"},we={for:"projectChargeType",class:"form-label red-star"},xe={class:"mb-1 col-md-6"},ye={for:"organization",class:"form-label red-star"},$e={class:"mt-2"},ze={class:"mb-1 col-md-6"},Ae={class:"form-label red-star",for:"department"},Se={class:"mb-1 col-md-6"},ke={class:"form-label red-star",for:"password"},Ce={class:"mb-1 col-md-6"},je={class:"form-label red-star",for:"confirmPwd"},Te={class:"mb-1 col-md-12"},Ee=e("div",{class:"invalid-feedback"},"Recaptch Error",-1),Oe={class:"mt-2 d-flex justify-content-between flex-row-reverse"},Ve={type:"submit",class:"btn btn-primary me-2"},Pe=R({__name:"UserRegistration",setup(Re){const{userRegistraionFormSchema:x}=Q(),y="6LeNpBkTAAAAAAVJZDRzygxuBAxJ2Ak0D-AztSx5",$=L(),{locale:z}=F(),A=K.getInstance(),p=c(""),S=Y(),d=c([]);A.fetchOrganizations().then(s=>{d.value=s.map(t=>({id:t.id,name:t.name,value:t.id.toString()}))});const{handleSubmit:k,values:Fe,defineField:u}=I({validationSchema:x}),[_]=u("organization"),[i]=u("customOrganization");function C(s){p.value=s}function j(){console.log("驗證過期啦QAQ")}function T(){console.log("failed")}const E=c(!1),l=c(""),f=k(s=>{B(s,p.value).then(function(t){$.push({name:"Login",params:{message:t.data}})}).catch(function(t){t.response?l.value=t.response.data.errors[0].defaultMessage:t.request?l.value="Server side error":l.value=t.message})}),O=D(()=>_.value!==void 0&&M.findIndex(d,function(s){const t=s.id==_.value&&s.name==="其它";return t||(i.value=void 0),t})===0);return(s,t)=>{const r=h("AppInput"),g=h("AppSelect"),V=h("AppCard");return N(),P("div",Z,[e("div",G,[e("div",H,[e("div",W,[X,a(V,null,{header:b(()=>[e("h5",null,o(s.$t("text.registration")),1)]),body:b(()=>[e("div",ee,[e("div",se,[e("h6",te,o(s.$t("text.note.title")),1),e("ul",null,[e("li",oe,o(s.$t("text.note.first")),1),e("li",ae,o(s.$t("text.note.second")),1),e("li",re,o(s.$t("text.note.third")),1),e("li",ne,o(s.$t("text.note.forth")),1)])])]),v(e("span",{class:"text-danger"},o(l.value),513),[[w,l.value]]),le,e("form",{onSubmit:t[1]||(t[1]=(...m)=>n(f)&&n(f)(...m))},[e("div",ie,[e("div",ce,[e("label",de,o(s.$t("text.name")),1),a(r,{name:"title","show-error-message":!0})]),e("div",me,[e("label",he,o(s.$t("text.email")),1),a(r,{name:"username","show-error-message":!0})]),e("div",pe,[e("label",ue,o(s.$t("text.address")),1),a(r,{name:"address","show-error-message":!0})]),e("div",_e,[e("label",fe,o(s.$t("text.tel")),1),a(r,{name:"phone","show-error-message":!0})]),e("div",ge,[e("label",be,o(s.$t("text.mobile")),1),a(r,{name:"mobile","show-error-message":!0})]),e("div",ve,[e("label",we,o(s.$t("text.projectChargeType")),1),a(g,{id:"projectChargeType",name:"projectChargeType",options:n(S)},null,8,["options"])]),e("div",xe,[e("label",ye,o(s.$t("text.organization")),1),a(g,{name:"organization",options:d.value,"show-error-message":!0},null,8,["options"]),v(e("div",$e,[a(r,{name:"customOrganization",placeholder:s.$t("placeholder.customOrganization"),"show-error-message":!0,modelValue:n(i),"onUpdate:modelValue":t[0]||(t[0]=m=>U(i)?i.value=m:null)},null,8,["placeholder","modelValue"])],512),[[w,O.value]])]),e("div",ze,[e("label",Ae,o(s.$t("text.department")),1),a(r,{name:"department","show-error-message":!0})]),e("div",Se,[e("label",ke,o(s.$t("text.password")),1),a(r,{name:"pwd",type:"password",autocomplete:"off","show-error-message":!0})]),e("div",Ce,[e("label",je,o(s.$t("text.confirmPassword")),1),a(r,{name:"confirmPwd",type:"password","show-error-message":!0})]),e("div",Te,[a(n(q),{sitekey:n(y),size:"normal",theme:"light",hl:n(z),onVerify:C,onExpire:j,onFail:T,class:J({"is-invalid":E.value})},null,8,["sitekey","hl","class"]),Ee])]),e("div",Oe,[e("button",Ve,o(s.$t("button.register")),1)])],32)]),_:1})])])])])}}});export{Pe as default};