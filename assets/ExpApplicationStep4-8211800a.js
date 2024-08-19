import{d as J,S as L,T as Q,A as $,r,B as q,g as S,e as K,J as W,Q as X,aj as Z,h as v,o as h,c as j,j as e,w as b,a as s,F as D,C as ss,G as f,t as _,n as es,k,ak as F,H as os,v as ts,D as as,l as cs}from"./index-69085551.js";import{g as ls}from"./ProjectSource-b760b0a5.js";import{p as ns}from"./formSchema-e3197880.js";const is=s("p",{class:"text-danger"},"餘額充足時才會進入此頁面",-1),ds=s("h4",{class:"fw-bold py-3 mb-4"},"計畫餘額",-1),rs=s("h5",{class:"mb-0"},"計畫餘額",-1),_s={class:"vstack"},ms={class:"p-2"},ps=s("div",{class:"row"},[s("div",{class:"col-1 my-1"}),s("div",{class:"col-3 my-1"},[s("span",{class:"mx-2 fw-bold"},"TAC Project ID")]),s("div",{class:"col-3 my-1"},[s("span",{class:"mx-2 fw-bold"},"PI")]),s("div",{class:"col-3 my-1"},[s("span",{class:"mx-2 fw-bold"},"機構")]),s("div",{class:"col-2 my-1"},[s("span",{class:"mx-2 fw-bold"},"餘額")])],-1),us={class:"col-1 my-1"},vs=["value"],hs={class:"col-2 my-1"},bs={class:"mx-2"},fs={class:"col-4 my-1"},xs={class:"mx-2"},ys={class:"col-3 my-1"},gs={class:"mx-2"},ws={class:"col-2 my-1"},Ss={class:"mx-2"},js={class:"d-flex flex-row justify-content-end"},ks={class:"p-0"},Ps={class:"d-flex flex-column"},Cs={class:"p-2"},As=s("b",null,"實驗總費用",-1),Bs={class:"badge text-bg-info"},Es=s("div",{class:"text-danger"}," (因會依可申請之服務單價計算來扣除餘額，故所需繳金額，最終以同意單上之金額為主) ",-1),Ts=s("hr",null,null,-1),Ds={class:"form-check"},Fs=s("label",{class:"form-check-label",for:"createProject"},[s("span",null,"是否需建立新計畫")],-1),Is={class:"row mb-3"},Vs=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫主持人帳號",-1),Ns={class:"col-sm-10"},zs={class:"row mb-3"},Us=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫共同負責人帳號",-1),Os={class:"col-sm-10"},Rs={class:"row mb-3"},Ms=s("label",{class:"col-sm-2 col-form-label red-star"},"主要聯絡人帳號",-1),Ys={class:"col-sm-10"},Gs={class:"input-group input-group-merge"},Hs={class:"row mb-3"},Js=s("label",{class:"col-sm-2 col-form-label red-star"},"主要聯絡人電話",-1),Ls={class:"col-sm-10"},Qs={class:"input-group input-group-merge"},$s={class:"row mb-3"},qs=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫編號",-1),Ks={class:"col-sm-10"},Ws={class:"row mb-3"},Xs=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫名稱",-1),Zs={class:"col-sm-10"},se={class:"row mb-3"},ee=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫核銷機構(收據抬頭)",-1),oe={class:"col-sm-10"},te={class:"row mb-3"},ae=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫所屬部門",-1),ce={class:"col-sm-10"},le={class:"row mb-3"},ne=s("label",{class:"col-sm-2 col-form-label red-star"},"產學合作",-1),ie={class:"col-sm-10"},de={class:"row mb-3"},re=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫經費來源",-1),_e={class:"col-sm-10"},me={class:"row mb-3"},pe=s("label",{class:"col-sm-2 col-form-label"},"計畫描述",-1),ue={class:"col-sm-10"},ve={class:"row mb-3"},he=s("label",{class:"col-sm-2 col-form-label red-star"},"有無計畫執行期限",-1),be={class:"col-sm-4"},fe={class:"row mb-3"},xe=s("label",{class:"col-sm-2 col-form-label",for:""},"計畫執行期限",-1),ye={class:"col-sm-4"},ge={class:"input-group mb-3"},we=s("span",{class:"input-group-text"},"起",-1),Se={class:"col-sm-4"},je={class:"input-group"},ke=s("span",{class:"input-group-text"},"迄",-1),Pe={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-4"},Ce=["disabled"],Te=J({__name:"ExpApplicationStep4",props:{id:{}},async setup(I){let p,P;const V=L(),{loggedInUser:C}=Q(V),l=I,n=$(),A=r([]),x=r(0),{fetchTotalExpCaseAmounts:N,fetchProjectBalances:z,fetchProjectBalanceDeductions:U}=n,i=r(!1),d=r(([p,P]=q(()=>U(l.id)),p=await p,P(),p)),y=S(()=>d.value.reduce((o,t)=>o+t.balance,0)),O=S(()=>y.value===0&&i.value===!1),{values:B,meta:R,validate:M,setValues:E}=K({validationSchema:ns}),g=r([]),w=r([]),Y=S(()=>B.deadline==="yes"),G=async()=>{await M(),i.value?R.value.valid&&(n.saveStep4(l.id,B,d.value),n.proceedToStep6(l.id)):(n.saveStep4(l.id,void 0,d.value),n.proceedToStep6(l.id))};return W(async()=>{n.loadDataForStep4(l.id).then(async o=>{var t,m;o.selectedProjectBalances&&(d.value=o.selectedProjectBalances),o.project?(i.value=!0,E(o.project)):E({contactEmail:(t=C.value)==null?void 0:t.username,contactPhone:(m=C.value)==null?void 0:m.phone}),A.value=await z(l.id),x.value=await N(l.id)})}),X(async()=>{i.value&&(g.value.length===0&&(g.value=Z().map(o=>({id:o.id.toString(),name:o.name,value:o.id.toString()}))),w.value.length===0&&(w.value=ls()))}),(o,t)=>{const m=v("AppCard"),a=v("AppInput"),T=v("AppSelect"),u=v("AppRadio");return h(),j(D,null,[is,ds,e(m,{class:"mt-2"},{header:b(()=>[rs]),body:b(()=>[s("div",_s,[s("div",ms,[ps,(h(!0),j(D,null,ss(A.value,c=>(h(),j("div",{class:"row",key:c.tacProjectId},[s("div",us,[k(s("input",{type:"checkbox",class:"form-check-input",value:c,"onUpdate:modelValue":t[0]||(t[0]=H=>d.value=H)},null,8,vs),[[F,d.value]])]),s("div",hs,[s("span",bs,_(c.tacProjectId),1)]),s("div",fs,[s("span",xs,_(c.pi),1)]),s("div",ys,[s("span",gs,_(c.organization),1)]),s("div",ws,[s("span",Ss,_(c.balance)+"元",1)])]))),128))]),s("div",js,[s("div",ks,[s("div",Ps,[s("div",Cs,[As,f(": "),s("span",Bs,_(x.value),1),f(" 元, 擬使用餘額約為(粗估): "),s("span",{class:es(["badge text-bg-success",{"text-bg-danger":x.value>y.value}])},_(y.value),3),f(" 元 ")])]),Es])]),Ts,s("div",Ds,[k(s("input",{id:"createProject",name:"createProject",type:"checkbox",class:"form-check-input","onUpdate:modelValue":t[1]||(t[1]=c=>i.value=c)},null,512),[[F,i.value]]),Fs])])]),_:1}),i.value?(h(),os(m,{key:0},{header:b(()=>[f(" 建立計畫 ")]),body:b(()=>[s("div",Is,[Vs,s("div",Ns,[e(a,{placeholder:"Email",type:"email",name:"piEmail"})])]),s("div",zs,[Us,s("div",Os,[e(a,{placeholder:"Email",type:"email",name:"coPiEmail"})])]),s("div",Rs,[Ms,s("div",Ys,[s("div",Gs,[e(a,{placeholder:"Email",type:"email",name:"contactEmail"})])])]),s("div",Hs,[Js,s("div",Ls,[s("div",Qs,[e(a,{name:"contactPhone"})])])]),s("div",$s,[qs,s("div",Ks,[e(a,{name:"code"})])]),s("div",Ws,[Xs,s("div",Zs,[e(a,{name:"name"})])]),s("div",se,[ee,s("div",oe,[e(T,{name:"organization",options:g.value},null,8,["options"])])]),s("div",te,[ae,s("div",ce,[e(a,{name:"department"})])]),s("div",le,[ne,s("div",ie,[e(u,{label:"是",id:"cooperateY",name:"cooperate","checked-value":"yes"}),e(u,{label:"否",id:"cooperateN",name:"cooperate","checked-value":"no"})])]),s("div",de,[re,s("div",_e,[e(T,{name:"projectSource",options:w.value},null,8,["options"])])]),s("div",me,[pe,s("div",ue,[e(a,{name:"description"})])]),s("div",ve,[he,s("div",be,[e(u,{label:"有",id:"deadlineY",name:"deadline","checked-value":"yes"}),e(u,{label:"無",id:"deadlineN",name:"deadline","checked-value":"no"})])]),k(s("div",fe,[xe,s("div",ye,[s("div",ge,[e(a,{type:"date",name:"executionPeriodFrom"}),we])]),s("div",Se,[s("div",je,[e(a,{type:"date",name:"executionPeriodTo"}),ke])])],512),[[ts,Y.value]])]),_:1})):as("",!0),s("div",Pe,[s("button",{class:"btn btn-primary",onClick:G,disabled:O.value},"下一步",8,Ce),s("button",{class:"btn btn-outline-secondary",onClick:t[2]||(t[2]=c=>cs(n).proceedToStep3(o.id))}," 回上一步 ")])],64)}}});export{Te as default};
