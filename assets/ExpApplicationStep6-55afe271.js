import{g as L,S as I}from"./SampleCategory-297f54b4.js";import{_ as T,a as M}from"./ExpApplicationStep6NonLivingFormPreview.vue_vue_type_script_setup_true_lang-55a73cd7.js";import{d as N,y as F,z,r as V,c as G,e as S,o as n,f as l,D as y,w as B,C as j,g as t,F as $,A as w,t as e,j as p,n as O,B as v,Z as R,$ as W,h as E,aj as q,ak as U,al as Z}from"./index-a622a1bc.js";import{a as H}from"./ProjectSource-b760b0a5.js";import"./SelectedIhcCommissionedItemPanel-c7142da0.js";import"./LocationService-a2e3e2da.js";const J={class:"vstack"},K={class:"p-2"},Q={class:"col-2 my-1"},X={class:"mx-2"},Y={class:"col-2 my-1"},tt={class:"mx-2"},et={class:"col-2 my-1"},st={class:"mx-2"},ot={class:"col-2 my-1"},nt={class:"mx-2"},lt={class:"d-flex flex-row justify-content-end"},at={class:"p-2"},ct={class:"d-flex flex-column"},it={class:"p-2"},dt=t("b",null,"實驗總費用",-1),rt={class:"badge text-bg-info"},pt={key:1,class:"table table-bordered caption-top"},ut=t("caption",null," 計畫資訊 ",-1),_t=t("td",null,"計畫主持人帳號",-1),mt=t("td",null,"計畫共同負責人帳號",-1),ht=t("td",null,"主要聯絡人帳號",-1),vt=t("td",null,"主要聯絡人電話",-1),ft=t("td",null,"計畫編號",-1),gt=t("td",null,"計畫名稱",-1),bt=t("td",null,"計畫核銷機構(收據抬頭)",-1),jt=t("td",null,"計畫所屬部門",-1),yt=t("td",null,"產學合作",-1),$t=t("td",null,"計畫經費來源",-1),Ct=t("td",null,"計畫描述",-1),xt=t("td",null,"有無計畫執行期限",-1),St=N({inheritAttrs:!1,__name:"ExpApplicationStep6ProjectBalanceDeduction",props:{id:{},projectBalanceDeductions:{default:()=>[]},project:{}},async setup(d){let r,u;const f=F(),a=d,o=a.id,g=([r,u]=z(()=>f.fetchTotalExpCaseAmounts(o)),r=await r,u(),r),c=V(a.projectBalanceDeductions),_=G(()=>c.value?c.value.reduce((s,b)=>s+b.balance,0):0);return(s,b)=>{const m=S("AppBlock");return n(),l("div",R(W(s.$attrs)),[s.projectBalanceDeductions.length!==0?(n(),y(m,{key:0,id:"balanceDeductionBlock",class:"my-1"},{header:B(()=>[j("餘額扣除計畫 ")]),content:B(()=>[t("div",J,[t("div",K,[(n(!0),l($,null,w(s.projectBalanceDeductions,i=>(n(),l("div",{class:"row",key:i.tacProjectId},[t("div",Q,[t("span",X,e(i.tacProjectId),1)]),t("div",Y,[t("span",tt,e(i.pi),1)]),t("div",et,[t("span",st,e(i.organization),1)]),t("div",ot,[t("span",nt,e(i.balance)+"元",1)])]))),128))])]),t("div",lt,[t("div",at,[t("div",ct,[t("div",it,[dt,j(": "),t("span",rt,e(p(g)),1),j(" 元, 扣除金額: "),t("span",{class:O(["badge text-bg-success",{"text-bg-danger":p(g)>_.value}])},e(_.value),3),j(" 元 ")])])])])]),_:1})):v("",!0),s.project?(n(),l("table",pt,[ut,t("tbody",null,[t("tr",null,[_t,t("td",null,e(s.project.piEmail),1)]),t("tr",null,[mt,t("td",null,e(s.project.coPiEmail),1)]),t("tr",null,[ht,t("td",null,e(s.project.contactEmail),1)]),t("tr",null,[vt,t("td",null,e(s.project.contactPhone),1)]),t("tr",null,[ft,t("td",null,e(s.project.code),1)]),t("tr",null,[gt,t("td",null,e(s.project.name),1)]),t("tr",null,[bt,t("td",null,e(s.project.organization),1)]),t("tr",null,[jt,t("td",null,e(s.project.department),1)]),t("tr",null,[yt,t("td",null,e(s.project.cooperate==="yes"?"是":"否"),1)]),t("tr",null,[$t,t("td",null,e(p(H)(s.project.projectSource)),1)]),t("tr",null,[Ct,t("td",null,e(s.project.description),1)]),t("tr",null,[xt,t("td",null,e(s.project.deadline==="yes"?`${s.project.executionPeriodFrom} ~ ${s.project.executionPeriodTo}`:"無"),1)])])])):v("",!0)],16)}}}),C=d=>(q("data-v-c550c709"),d=d(),U(),d),Bt=C(()=>t("h4",{class:"fw-bold py-3 mb-4"},"預覽",-1)),wt={class:"row"},kt={class:"mb-4 mb-xl-0"},Dt={class:"mt-3"},At={class:"row"},Pt={class:"col-12 mb-3 mb-md-0"},It={class:"list-group list-group-horizontal-md"},Et=C(()=>t("a",{class:"list-group-item list-group-item-action active",id:"exp-service-item-list","data-bs-toggle":"list",href:"#exp-service-item"},"服務項目",-1)),Nt={class:"list-group-item list-group-item-action",id:"application-form-list","data-bs-toggle":"list",href:"#application-form"},Ft=C(()=>t("a",{class:"list-group-item list-group-item-action",id:"deduction-list","data-bs-toggle":"list",href:"#deduction"},"扣款計畫",-1)),zt={class:"col-12"},Vt={class:"tab-content p-0 font"},Lt={class:"tab-pane fade show active",id:"exp-service-item"},Tt={class:"row"},Mt={class:"card"},Gt={class:"card-body"},Ot={class:"mb-4"},Rt={class:"mb-4"},Wt={class:"table table-sm my-1"},qt=C(()=>t("thead",null,[t("tr",null,[t("th",null,"Number"),t("th",null,"Service Items"),t("th",null,"Sample amount"),t("th",null,"Comment")])],-1)),Ut={class:"tab-pane fade",id:"application-form"},Zt={class:"tab-pane fade",id:"deduction"},Ht={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-2"},Jt=N({__name:"ExpApplicationStep6",props:{id:{}},async setup(d){let r,u;const f=d,a=F(),o=V();[r,u]=z(()=>a.loadDataForStep6(f.id).then(c=>{o.value=c}).catch(()=>{a.toMainWithMessage("資料載入失敗")})),await r,u();const g=async()=>{a.applyExpCaseApplication(f.id).then(c=>{a.toMainWithMessage(`實驗申請已送出，Service Request ID: ${c}`)})};return(c,_)=>{const s=S("AppCard"),b=S("AppConfirmButton");return n(),l($,null,[Bt,E(s,null,{body:B(()=>{var m,i,k,D,A,P;return[t("div",wt,[t("div",kt,[t("div",Dt,[t("div",At,[t("div",Pt,[t("div",It,[Et,t("a",Nt,e(p(L)(o.value.sampleCategory))+"表單 ",1),Ft])]),t("div",zt,[t("div",Vt,[t("div",Lt,[t("div",Tt,[t("div",Mt,[t("div",Gt,[t("div",Ot," 已安排之實驗日期區間: "+e(o.value.expDateStart)+" ~ "+e(o.value.expDateEnd),1),t("div",Rt,"TAC聯絡窗口/SD: "+e(o.value.liaison),1),t("table",Wt,[qt,t("tbody",null,[(n(!0),l($,null,w((m=o.value)==null?void 0:m.expServiceItems,h=>(n(),l("tr",{key:h.id},[t("td",null,e(h.code),1),t("td",null,e(h.name),1),t("td",null,[(n(!0),l($,null,w(h.expServiceItemUnits,x=>(n(),l("span",{key:x.id},e(`${x.amount} (${x.name})`),1))),128))]),t("td",null,e(h.comment),1)]))),128))])])])])])]),t("div",Ut,[((i=o.value)==null?void 0:i.sampleCategory)===p(I).LIVING&&o.value.livingFormsPreview?(n(),y(T,{key:0,class:"font",livingForms:o.value.livingFormsPreview},null,8,["livingForms"])):v("",!0),((k=o.value)==null?void 0:k.sampleCategory)===p(I).NON_LIVING&&o.value.nonLivingFormPreview?(n(),y(M,{key:1,class:"font",form:o.value.nonLivingFormPreview},null,8,["form"])):v("",!0)]),t("div",Zt,[(D=o.value)!=null&&D.projectBalanceDeductions?(n(),y(St,{key:0,class:"font",id:"props.id",projectBalanceDeductions:(A=o.value)==null?void 0:A.projectBalanceDeductions,project:(P=o.value)==null?void 0:P.deductionProject},null,8,["projectBalanceDeductions","project"])):v("",!0)])])])])])])])]}),_:1}),t("div",Ht,[E(b,{text:"送出",handler:g}),t("button",{class:"btn btn-outline-secondary",onClick:_[0]||(_[0]=m=>p(a).proceedToStep4(c.id))}," 回上一步 ")])],64)}}});const se=Z(Jt,[["__scopeId","data-v-c550c709"]]);export{se as default};
