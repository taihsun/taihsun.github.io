import{d as f,D as u,e as d,E as _,L as h,h as b,o as v,B as w,w as r,j as y,l as o,a as s}from"./index-8fed8339.js";import{M as C}from"./MouseHotelService-231e34c7.js";import{_ as M}from"./LivingForm.vue_vue_type_script_setup_true_lang-8e2b8b22.js";import{l as S}from"./formSchema-ea7f1a00.js";import"./AnimalType-4489de17.js";import"./SelectedIhcCommissionedItemPanel-70429422.js";import"./LocationService-438c0953.js";import"./LocationDbSimulator-1334c689.js";const g=s("h5",{class:"mb-0"},"填寫動物入室資料",-1),x={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-2"},E=f({__name:"MouseHotelApplication",props:{labType:{}},setup(B){const{toMainWithMessage:a}=u(),{handleSubmit:i,values:l}=d({initialValues:{formSource:"new",deliveries:[{}],showMedicationInfoFrom:!1,showCellLineInfoFrom:!1},validationSchema:S}),m=C.getInstance();_(async()=>{});const t=i(async n=>{await m.applyMouseHotel(h.AIF,n).then(e=>{a(e,"true")}).catch(e=>{a(e.messages,"false")})});return(n,e)=>{const c=b("AppCard");return v(),w(c,null,{header:r(()=>[g]),body:r(()=>[y(M,{"binding-cage-number":!1,"show-cell-line-info-from":!1,"show-medication-info-from":!1,values:o(l)},null,8,["values"]),s("div",x,[s("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...p)=>o(t)&&o(t)(...p))},"送出申請")])]),_:1})}}});export{E as default};