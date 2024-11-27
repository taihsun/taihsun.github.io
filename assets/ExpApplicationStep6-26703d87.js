import{d as D,r as P,g as V,h as y,o as n,c as l,B as m,w as $,A as z,a as t,F as h,y as b,z as u,t as e,l as p,S as L,U as M,D as T,s as G,j as k,a2 as U,a1 as A,K as W,ai as K,aj as O,ad as R}from"./index-bda4bfce.js";import{_ as q}from"./ExpApplicationStep6LivingFormPreview.vue_vue_type_script_setup_true_lang-02898254.js";import{_ as H}from"./ExpApplicationStep6NonLivingFormPreview.vue_vue_type_script_setup_true_lang-d8c7b8fe.js";import{g as J}from"./ProjectSource-66fc82ed.js";import"./LivingFormPreview.vue_vue_type_script_setup_true_lang-49fc4c5d.js";import"./AnimalType-4489de17.js";import"./SelectedIhcCommissionedItemPanel-2aa313b6.js";import"./LocationService-bdb053d0.js";import"./LocationDbSimulator-9ddd7f89.js";const Q={class:"vstack"},X={class:"p-2"},Y={class:"col-2 my-1"},Z={class:"mx-2"},tt={class:"col-2 my-1"},et={class:"mx-2"},ot={class:"col-2 my-1"},st={class:"mx-2"},nt={class:"col-2 my-1"},lt={class:"mx-2"},at={key:1,class:"table table-bordered caption-top"},it=t("caption",null," 計畫資訊 ",-1),ct=t("td",null,"計畫主持人帳號",-1),dt=t("td",null,"計畫共同負責人帳號",-1),rt=t("td",null,"主要聯絡人帳號",-1),pt=t("td",null,"主要聯絡人電話",-1),ut=t("td",null,"計畫編號",-1),_t=t("td",null,"計畫名稱",-1),mt=t("td",null,"計畫核銷機構(收據抬頭)",-1),ht=t("td",null,"計畫所屬部門",-1),vt=t("td",null,"產學合作",-1),gt=t("td",null,"計畫經費來源",-1),ft=t("td",null,"計畫描述",-1),jt=t("td",null,"有無計畫執行期限",-1),yt=D({inheritAttrs:!1,__name:"ExpApplicationStep6ProjectBalanceDeduction",props:{id:{},projectBalanceDeductions:{default:()=>[]},project:{},totalExperimentalCost:{}},setup(a){const i=P(a.projectBalanceDeductions);return V(()=>i.value?i.value.reduce((o,c)=>o+c.balance,0):0),(o,c)=>{const d=y("AppBlock");return n(),l("div",L(M(o.$attrs)),[o.projectBalanceDeductions.length!==0?(n(),m(d,{key:0,id:"balanceDeductionBlock",class:"my-1"},{title:$(()=>[z("已選擇的計畫餘額 ")]),content:$(()=>[t("div",Q,[t("div",X,[(n(!0),l(h,null,b(o.projectBalanceDeductions,s=>(n(),l("div",{class:"row",key:s.tacProjectId},[t("div",Y,[t("span",Z,e(s.tacProjectId),1)]),t("div",tt,[t("span",et,e(s.pi),1)]),t("div",ot,[t("span",st,e(s.organization),1)]),t("div",nt,[t("span",lt,e(s.balance)+"元",1)])]))),128))])])]),_:1})):u("",!0),o.project?(n(),l("table",at,[it,t("tbody",null,[t("tr",null,[ct,t("td",null,e(o.project.piEmail),1)]),t("tr",null,[dt,t("td",null,e(o.project.coPiEmail),1)]),t("tr",null,[rt,t("td",null,e(o.project.contactEmail),1)]),t("tr",null,[pt,t("td",null,e(o.project.contactPhone),1)]),t("tr",null,[ut,t("td",null,e(o.project.code),1)]),t("tr",null,[_t,t("td",null,e(o.project.name),1)]),t("tr",null,[mt,t("td",null,e(o.project.organization),1)]),t("tr",null,[ht,t("td",null,e(o.project.department),1)]),t("tr",null,[vt,t("td",null,e(o.project.cooperate?"是":"否"),1)]),t("tr",null,[gt,t("td",null,e(p(J)(o.project.projectSource)),1)]),t("tr",null,[ft,t("td",null,e(o.project.description),1)]),t("tr",null,[jt,t("td",null,e(o.project.executionPeriod?`${o.project.executionPeriodFrom} ~ ${o.project.executionPeriodTo}`:"無"),1)])])])):u("",!0)],16)}}}),v=a=>(K("data-v-63d467c6"),a=a(),O(),a),$t=v(()=>t("h4",{class:"fw-bold py-3 mb-4"},"預覽",-1)),bt={class:"row"},Ct={class:"mb-4 mb-xl-0"},St={class:"mt-3"},xt={class:"row"},Bt={class:"col-12 mb-3 mb-md-0"},wt={class:"list-group list-group-horizontal-md"},Et=v(()=>t("a",{class:"list-group-item list-group-item-action active",id:"exp-service-item-list","data-bs-toggle":"list",href:"#exp-service-item"},"服務項目",-1)),kt={class:"list-group-item list-group-item-action",id:"application-form-list","data-bs-toggle":"list",href:"#application-form"},At=v(()=>t("a",{class:"list-group-item list-group-item-action",id:"deduction-list","data-bs-toggle":"list",href:"#deduction"},"扣款計畫",-1)),Dt={class:"col-12"},Pt={class:"tab-content p-0 font"},It={class:"tab-pane fade show active",id:"exp-service-item"},Nt={class:"row"},Ft={class:"card"},Vt={class:"card-body"},zt={class:"mb-4"},Lt={class:"mb-4"},Mt={class:"table table-sm my-1"},Tt=v(()=>t("thead",null,[t("tr",null,[t("th",null,"Number"),t("th",null,"Service Items"),t("th",null,"Sample amount"),t("th",null,"Comment")])],-1)),Gt={class:"tab-pane fade",id:"application-form"},Ut={class:"tab-pane fade",id:"deduction"},Wt={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-2"},Kt=D({__name:"ExpApplicationStep6",props:{id:{}},async setup(a){let g,i;const o=a,c=W.getInstance(),d=T(),s=P();[g,i]=G(()=>c.fetchStep6DataByExpCaseId(o.id).then(_=>{s.value=_}).catch(()=>{d.toMainWithMessage("資料載入失敗")})),await g,i();const I=async()=>{await c.applyExpCaseApplication(o.id).then(async _=>{await d.toMainWithMessage("實驗申請已送出",!0)})};return(_,C)=>{const N=y("AppCard"),F=y("AppConfirmButton");return n(),l(h,null,[$t,k(N,null,{body:$(()=>{var f,S,x,B,w,E;return[t("div",bt,[t("div",Ct,[t("div",St,[t("div",xt,[t("div",Bt,[t("div",wt,[Et,t("a",kt,e(p(U)(s.value.sampleCategory))+"表單 ",1),At])]),t("div",Dt,[t("div",Pt,[t("div",It,[t("div",Nt,[t("div",Ft,[t("div",Vt,[t("div",zt," 已安排之實驗日期區間: "+e(s.value.expDateStart)+" ~ "+e(s.value.expDateEnd),1),t("div",Lt,"TAC聯絡窗口/SD: "+e(s.value.liaison),1),t("table",Mt,[Tt,t("tbody",null,[(n(!0),l(h,null,b((f=s.value)==null?void 0:f.expServiceItems,r=>(n(),l("tr",{key:r.id},[t("td",null,e(r.code),1),t("td",null,e(r.name),1),t("td",null,[(n(!0),l(h,null,b(r.expServiceItemUnits,j=>(n(),l("span",{key:j.id},e(`${j.amount} (${j.name})`),1))),128))]),t("td",null,e(r.comment),1)]))),128))])])])])])]),t("div",Gt,[((S=s.value)==null?void 0:S.sampleCategory)===p(A).LIVING&&s.value.livingFormsPreview?(n(),m(q,{key:0,class:"font",livingForms:s.value.livingFormsPreview},null,8,["livingForms"])):u("",!0),((x=s.value)==null?void 0:x.sampleCategory)===p(A).NON_LIVING&&s.value.nonLivingFormPreview?(n(),m(H,{key:1,class:"font",form:s.value.nonLivingFormPreview},null,8,["form"])):u("",!0)]),t("div",Ut,[(B=s.value)!=null&&B.projectBalanceDeductions?(n(),m(yt,{key:0,class:"font",id:"props.id",projectBalanceDeductions:(w=s.value)==null?void 0:w.projectBalanceDeductions,project:(E=s.value)==null?void 0:E.deductionProject,totalExperimentalCost:s.value.totalExpCaseAmount},null,8,["projectBalanceDeductions","project","totalExperimentalCost"])):u("",!0)])])])])])])])]}),_:1}),t("div",Wt,[k(F,{text:"送出",handler:I}),t("button",{class:"btn btn-outline-secondary",onClick:C[0]||(C[0]=f=>p(d).proceedToStep4(_.id))}," 回上一步 ")])],64)}}});const te=R(Kt,[["__scopeId","data-v-63d467c6"]]);export{te as default};