import{a as b}from"./LivingFormPreview.vue_vue_type_script_setup_true_lang-49fc4c5d.js";import{d as I,r as _,s as w,e as C,h as s,o as k,c as y,j as o,w as n,a as e,l as x,F as g}from"./index-bda4bfce.js";import{m as A}from"./ExpCaseFormSchema-8c95e99d.js";import{M as B}from"./MouseHotelService-759eb230.js";import"./AnimalType-4489de17.js";import"./SelectedIhcCommissionedItemPanel-2aa313b6.js";import"./LocationService-bdb053d0.js";import"./LocationDbSimulator-9ddd7f89.js";import"./formSchema-c055c88b.js";const F=e("h5",null,"填寫入室資料",-1),H={class:"row mb-2"},M=e("label",{for:"",class:"col-sm-3 col-md-2 col-form-label red-star"},"實際入住日期",-1),D={class:"col-7"},S={class:"row mb-2"},V=e("label",{for:"",class:"col-sm-3 col-md-2 col-form-label red-star"},"實際入室籠數",-1),j={class:"col-7"},E={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-4"},Q=I({__name:"ExpMhCheckIn",props:{mouseHotelId:{}},async setup(u){let a,c;const r=u,l=B.getInstance(),m=_({}),i=_();[a,c]=w(()=>l.fetchLivingFormByMouseHotelId(r.mouseHotelId).then(t=>{m.value=t.applicationForm,i.value=t.checkInDate})),await a,c();const{handleSubmit:h,values:N}=C({validationSchema:A,initialValues:{checkInDate:i.value}}),f=h(async t=>{await l.updateMhCheckInResult(r.mouseHotelId,t)});return(t,L)=>{const p=s("AppCard"),d=s("AppInput"),v=s("AppConfirmButton");return k(),y(g,null,[o(p,{class:"mb-2"},{body:n(()=>[o(b,{form:m.value},null,8,["form"])]),_:1}),o(p,null,{header:n(()=>[F]),body:n(()=>[e("div",H,[M,e("div",D,[o(d,{name:"checkInDate",type:"date","show-error-message":!0})])]),e("div",S,[V,e("div",j,[o(d,{name:"cage",type:"number",min:"1","show-error-message":!0})])])]),_:1}),e("div",E,[o(v,{text:"確定",handler:x(f)},null,8,["handler"])])],64)}}});export{Q as default};
