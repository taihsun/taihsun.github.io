import{u as R,a as B,r as d,b as C,c as I,d as D,w as j,e as h,o as N,f as P,g as e,h as n,i as g,t,j as v,v as w,k as r,l as T,_ as U,n as J,m as L}from"./index-dfa148fa.js";import{u as M}from"./FormSchemaStore-a42f2925.js";import{O as Q}from"./Option-3450003d.js";import"./index.esm-77e4e4df.js";const q={class:"content-wrapper"},K={class:"container-xxl flex-grow-1 container-p-y"},Y={class:"row d-flex justify-content-center"},Z={class:"col-md-7"},G=e("a",{class:"d-flex justify-content-center mb-4","th:href":"@{/auth/login}"},[e("img",{"th:src":"@{/images/logo_tac.png}"})],-1),H={class:"d-flex align-items-start align-items-sm-center"},W={class:"alert alert-warning"},X={class:"fw-bold mb-1 text-dark"},ee={class:"mb-0 text-dark"},se={class:"mb-0 text-dark"},te={class:"mb-0 text-dark"},oe={class:"mb-0 text-danger"},ae=e("hr",{class:"my-2"},null,-1),ne={class:"row"},re={class:"mb-1 col-md-6"},le={for:"title",class:"form-label red-star"},ie={class:"mb-1 col-md-6"},ce={for:"username",class:"form-label red-star"},de={class:"mb-1 col-md-12"},me={for:"address",class:"form-label red-star"},he={class:"mb-1 col-md-6"},ue={class:"form-label red-star",for:"phone"},_e={class:"mb-1 col-md-6"},pe={class:"form-label",for:"mobile"},fe={class:"mb-1 col-md-6"},be={for:"organization",class:"form-label red-star"},ge={class:"mt-2"},ve={class:"mb-1 col-md-6"},we={class:"form-label red-star",for:"department"},xe={class:"mb-1 col-md-6"},$e={class:"form-label red-star",for:"password"},Ae={class:"mb-1 col-md-6"},ze={class:"form-label red-star",for:"confirmPwd"},ye={class:"mb-1 col-md-12"},Se=e("div",{class:"invalid-feedback"},"Recaptch Error",-1),ke={class:"mt-2"},Ve={type:"submit",class:"btn btn-primary me-2"},Ce={__name:"UserRegistration",setup(Ee){const{userRegistraionFormSchema:x}=M(),$="6LeNpBkTAAAAAAVJZDRzygxuBAxJ2Ak0D-AztSx5",A=R(),{locale:z}=B(),u=d(""),_=C().map(s=>new Q(s.id,s.name,s.id)),{handleSubmit:y,values:p,defineField:S}=I({validationSchema:x}),[i]=S("organizationOther");function k(s){u.value=s}function V(){console.log("驗證過期啦QAQ")}function E(){console.log("failed")}const F=d(!1),l=d(""),f=y(s=>{D(s,u.value).then(function(o){A.push({name:"Login",params:{message:o.data}})}).catch(function(o){console.log(o),o.response?l.value=o.response.data.errors[0].defaultMessage:o.request?l.value="Server side error":l.value=o.message})}),b=d(!1);return j(p,(s,o)=>{b.value=s.organization!==void 0&&L.findIndex(_,function(a){const c=a.id===p.organization&&a.name==="其它";return c||(i.value=void 0),c})===0}),(s,o)=>{const a=h("AppInput"),c=h("AppSelect"),O=h("AppCard");return N(),P("div",q,[e("div",K,[e("div",Y,[e("div",Z,[G,n(O,null,{header:g(()=>[e("h5",null,t(s.$t("text.registration")),1)]),body:g(()=>[e("div",H,[e("div",W,[e("h6",X,t(s.$t("text.note.title")),1),e("ul",null,[e("li",ee,t(s.$t("text.note.first")),1),e("li",se,t(s.$t("text.note.second")),1),e("li",te,t(s.$t("text.note.third")),1),e("li",oe,t(s.$t("text.note.forth")),1)])])]),v(e("span",{class:"text-danger"},t(l.value),513),[[w,l.value]]),ae,e("form",{onSubmit:o[1]||(o[1]=(...m)=>r(f)&&r(f)(...m))},[e("div",ne,[e("div",re,[e("label",le,t(s.$t("text.name")),1),n(a,{name:"title","show-error-message":!0})]),e("div",ie,[e("label",ce,t(s.$t("text.email")),1),n(a,{name:"username","show-error-message":!0})]),e("div",de,[e("label",me,t(s.$t("text.address")),1),n(a,{name:"address","show-error-message":!0})]),e("div",he,[e("label",ue,t(s.$t("text.tel")),1),n(a,{name:"phone","show-error-message":!0})]),e("div",_e,[e("label",pe,t(s.$t("text.mobile")),1),n(a,{name:"mobile","show-error-message":!0})]),e("div",fe,[e("label",be,t(s.$t("text.organization")),1),n(c,{name:"organization",options:r(_),"show-error-message":!0},null,8,["options"]),v(e("div",ge,[n(a,{name:"organizationOther",placeholder:s.$t("placeholder.customOrganization"),"show-error-message":!0,modelValue:r(i),"onUpdate:modelValue":o[0]||(o[0]=m=>T(i)?i.value=m:null)},null,8,["placeholder","modelValue"])],512),[[w,b.value]])]),e("div",ve,[e("label",we,t(s.$t("text.department")),1),n(a,{name:"department","show-error-message":!0})]),e("div",xe,[e("label",$e,t(s.$t("text.password")),1),n(a,{name:"pwd",type:"password",autocomplete:"off","show-error-message":!0})]),e("div",Ae,[e("label",ze,t(s.$t("text.confirmPassword")),1),n(a,{name:"confirmPwd",type:"password","show-error-message":!0})]),e("div",ye,[n(r(U),{sitekey:r($),size:"normal",theme:"light",hl:r(z),onVerify:k,onExpire:V,onFail:E,class:J({"is-invalid":F.value})},null,8,["sitekey","hl","class"]),Se])]),e("div",ke,[e("button",Ve,t(s.$t("button.register")),1)])],32)]),_:1})])])])])}}};export{Ce as default};
