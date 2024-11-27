import{_ as F}from"./ExpServiceItemTable.vue_vue_type_script_setup_true_lang-5066ebd3.js";import{d as $,o as r,c as i,a as e,t as o,D as B,r as p,e as D,g as k,h as a,j as s,w as l,A as u,z as x,l as T,F as j,K as E}from"./index-bda4bfce.js";import{c as L}from"./ExpCaseFormSchema-8c95e99d.js";import"./formSchema-c055c88b.js";const V={class:"formtable",width:"400px"},Y=e("th",{style:{width:"40%"}},"同意書編號",-1),P=e("th",{style:{width:"40%"}},"計畫名稱",-1),z=e("th",null,"計畫主持人",-1),K=e("th",null,"計畫主持人電話",-1),O=e("th",null,"計畫主持人手機",-1),W=e("th",null,"計畫主持人所屬單位",-1),q=e("th",null,"計畫主持人所屬系所",-1),G=e("th",null,"計畫經費來源",-1),H=e("th",null,"計畫編號",-1),J=$({__name:"PurchaseCreditRecordDetail",props:{detail:{}},setup(_){return(t,h)=>(r(),i("table",V,[e("tr",null,[Y,e("td",null,o(t.detail.consentCertificateNumber),1)]),e("tr",null,[P,e("td",null,o(t.detail.projectName),1)]),e("tr",null,[z,e("td",null,o(t.detail.pi),1)]),e("tr",null,[K,e("td",null,o(t.detail.piPhone),1)]),e("tr",null,[O,e("td",null,o(t.detail.piMobile),1)]),e("tr",null,[W,e("td",null,o(t.detail.piOrg),1)]),e("tr",null,[q,e("td",null,o(t.detail.piDept),1)]),e("tr",null,[G,e("td",null,o(t.detail.source),1)]),e("tr",null,[H,e("td",null,o(t.detail.externalProjectId),1)])]))}}),Q={class:"row"},U=e("label",{for:"statusY",class:"col-1 col-form-label red-star"},"審查狀態",-1),X={class:"col-8"},Z={key:0,class:"row"},ee=e("label",{for:"statusY",class:"col-1 col-form-label red-star"},"入帳證明",-1),te={class:"col-8"},se={key:1,class:"row"},oe=e("label",{for:"statusY",class:"col-1 col-form-label red-star"},"入帳證明",-1),ae={class:"col-8"},le={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-4"},pe=$({__name:"ExpTacMgrCheckInvoice",props:{expCaseId:{}},setup(_){const t=_,h=B(),m=p({}),v=p([]),b=E.getInstance(),{values:f,errors:ne,handleSubmit:I}=D({validationSchema:L}),C=p(""),w=k(()=>f.status==="Approved"),y=k(()=>f.status==="Revoked");b.fetchTacMgrCheckInvoiceData(t.expCaseId).then(n=>{m.value=n.detail,v.value=n.items});const N=I(async n=>{b.updateCheckingInvoiceResult(t.expCaseId,n).then(c=>{h.toMainWithMessage(c,!0)}).catch(c=>{C.value=c})});return(n,c)=>{const S=a("AppFloatingMessage"),d=a("AppCard"),g=a("AppRadio"),A=a("AppLabelInput"),M=a("AppTextarea"),R=a("AppConfirmButton");return r(),i(j,null,[s(S,{message:C.value},null,8,["message"]),s(d,{class:"mb-2"},{header:l(()=>[u(" 購買明細 ")]),body:l(()=>[s(J,{detail:m.value},null,8,["detail"])]),_:1}),s(d,{class:"mb-2"},{header:l(()=>[u(" 服務項目細節 ")]),body:l(()=>[s(F,{items:v.value},null,8,["items"])]),_:1}),s(d,{class:"mb-2"},{header:l(()=>[u(" 審核購買申請 ")]),body:l(()=>[e("div",Q,[U,e("div",X,[s(g,{id:"statusY",name:"status","checked-value":"Approved",label:"同意"}),s(g,{id:"statusN",name:"status","checked-value":"Revoked",label:"拒絕"})])]),w.value?(r(),i("div",Z,[ee,e("div",te,[s(A,{name:"recieptNoFirst",postfixLabel:"字"}),s(A,{name:"recieptNoSecond",label:"第",postfixLabel:"號"})])])):x("",!0),y.value?(r(),i("div",se,[oe,e("div",ae,[s(M,{name:"reason"})])])):x("",!0)]),_:1}),e("div",le,[s(R,{text:"同意",handler:T(N)},null,8,["handler"])])],64)}}});export{pe as default};
