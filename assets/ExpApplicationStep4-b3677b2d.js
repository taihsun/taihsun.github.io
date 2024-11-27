import{d as z,D as L,r,g as A,s as O,e as R,O as U,h as p,o as c,c as f,j as l,l as a,B as b,w as u,a as e,F as B,y as $,z as x,K as G,a1 as K,k as q,ak as H,t as m}from"./index-8fed8339.js";import{_ as J}from"./ProjectPanel.vue_vue_type_script_setup_true_lang-f924452d.js";import{s as Q}from"./ExpCaseFormSchema-d7aa9de3.js";import"./ProjectSource-66fc82ed.js";import"./OrganizationService-e9b32d55.js";import"./formSchema-ea7f1a00.js";const W=e("h4",{class:"fw-bold py-3 mb-4"},"建立/選擇計畫",-1),X=e("h5",{class:"mb-0"},"所有計畫餘額",-1),Y={class:"vstack"},Z={id:"balanceBlock"},ee={class:"p-2"},se=e("div",{class:"row"},[e("div",{class:"col-1 my-1"}),e("div",{class:"col-3 my-1"},[e("span",{class:"mx-2 fw-bold"},"TAC Project ID")]),e("div",{class:"col-3 my-1"},[e("span",{class:"mx-2 fw-bold"},"PI")]),e("div",{class:"col-3 my-1"},[e("span",{class:"mx-2 fw-bold"},"機構")]),e("div",{class:"col-2 my-1"},[e("span",{class:"mx-2 fw-bold"},"餘額")])],-1),te={class:"col-1 my-1"},oe=["onUpdate:modelValue"],ae={class:"col-2 my-1"},ce={class:"mx-2"},ne={class:"col-4 my-1"},le={class:"mx-2"},de={class:"col-3 my-1"},ie={class:"mx-2"},re={class:"col-2 my-1"},pe={class:"mx-2"},ue=e("h5",{class:"mb-4"},"選擇/建立新計晝",-1),me={class:"form-check"},_e={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-4"},ve=["disabled"],Se=z({__name:"ExpApplicationStep4",props:{id:{}},async setup(T){let j,k;const _=T,v=L(),C=G.getInstance(),D=r(0),h=r(),S=r([]),I=A(()=>d.value.length?d.value.reduce((t,i)=>i.value.selected?t+i.value.balance:t,0):0),V=A(()=>I.value===0&&n.deductionProjectType==="none"),w=r();[j,k]=O(()=>C.fetchStep4DataByExpCaseId(_.id).then(s=>{D.value=s.totalExpCaseAmount,w.value=s,S.value=s.deductionProjects})),await j,k();const{values:n,handleSubmit:E,errors:he}=R({validationSchema:Q,initialValues:w.value}),{fields:d,update:ye}=U("paymentDeductionProjects"),g=E(async s=>{await C.saveStep4(_.id,s).then(async()=>{try{v.toStep6(_.id)}catch(t){h.value=t}}).catch(t=>{h.value=t.errors})}),F=async s=>{n.sampleCategory===K.LIVING?v.proceedToStep3(s):v.proceedToStep2(s)};return(s,t)=>{const i=p("AppFloatingMessages"),P=p("AppCard"),y=p("AppRadio"),N=p("AppSelect");return c(),f(B,null,[l(i,{messages:h.value},null,8,["messages"]),W,a(d).length?(c(),b(P,{key:0,class:"mt-2"},{header:u(()=>[X]),body:u(()=>[e("div",Y,[e("div",Z,[e("div",ee,[se,(c(!0),f(B,null,$(a(d),o=>(c(),f("div",{class:"row",key:o.value.tacProjectId},[e("div",te,[q(e("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":M=>o.value.selected=M},null,8,oe),[[H,o.value.selected]])]),e("div",ae,[e("span",ce,m(o.value.tacProjectId),1)]),e("div",ne,[e("span",le,m(o.value.pi),1)]),e("div",de,[e("span",ie,m(o.value.organization),1)]),e("div",re,[e("span",pe,m(o.value.balance)+"元",1)])]))),128))])])])]),_:1})):x("",!0),l(P,{class:"my-1"},{header:u(()=>[ue,e("div",me,[l(y,{id:"none",name:"deductionProjectType",label:"無","checked-value":"none"}),l(y,{id:"choosingDeductionProject",name:"deductionProjectType",label:"選擇扣款計畫","checked-value":"deduction"}),l(y,{id:"newProject",name:"deductionProjectType",label:"建立新計畫","checked-value":"new"})])]),body:u(()=>[a(n).deductionProjectType==="deduction"?(c(),b(N,{key:0,options:S.value,name:"deductionProject"},null,8,["options"])):x("",!0),a(n).deductionProjectType==="new"?(c(),b(J,{key:1,prefix:"project",values:a(n).project},null,8,["values"])):x("",!0)]),_:1}),e("div",_e,[e("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=(...o)=>a(g)&&a(g)(...o)),disabled:V.value}," 下一步 ",8,ve),e("button",{class:"btn btn-outline-secondary",onClick:t[1]||(t[1]=o=>F(s.id))},"回上一步")])],64)}}});export{Se as default};
