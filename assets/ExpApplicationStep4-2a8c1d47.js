import{d as Q,Q as $,R as q,y as G,r,z as J,c as S,a as K,H as W,O as X,ah as Z,e as h,o as v,f as j,h as e,w as b,g as s,F as D,A as ss,C as f,t as _,n as es,i as P,ai as F,D as os,v as ts,B as as,j as cs}from"./index-040fc8c0.js";import{g as ls}from"./ProjectSource-b760b0a5.js";import{p as ns}from"./formSchema-b60d08e0.js";const is=s("p",{class:"text-danger"},"餘額充足時才會進入此頁面",-1),ds=s("h4",{class:"fw-bold py-3 mb-4"},"計畫餘額",-1),rs=s("h5",{class:"mb-0"},"計畫餘額",-1),_s={class:"vstack"},ms={class:"p-2"},ps=s("div",{class:"row"},[s("div",{class:"col-1 my-1"}),s("div",{class:"col-3 my-1"},[s("span",{class:"mx-2 fw-bold"},"TAC Project ID")]),s("div",{class:"col-3 my-1"},[s("span",{class:"mx-2 fw-bold"},"PI")]),s("div",{class:"col-3 my-1"},[s("span",{class:"mx-2 fw-bold"},"機構")]),s("div",{class:"col-2 my-1"},[s("span",{class:"mx-2 fw-bold"},"餘額")])],-1),us={class:"col-1 my-1"},hs=["value"],vs={class:"col-2 my-1"},bs={class:"mx-2"},fs={class:"col-4 my-1"},ys={class:"mx-2"},xs={class:"col-3 my-1"},gs={class:"mx-2"},ws={class:"col-2 my-1"},Ss={class:"mx-2"},js={class:"d-flex flex-row justify-content-end"},Ps={class:"p-0"},ks={class:"d-flex flex-column"},Cs={class:"p-2"},As=s("b",null,"實驗總費用",-1),Bs={class:"badge text-bg-info"},Es=s("div",{class:"text-danger"}," (因會依可申請之服務單價計算來扣除餘額，故所需繳金額，最終以同意單上之金額為主) ",-1),Ts=s("hr",null,null,-1),Ds={class:"form-check"},Fs=s("label",{class:"form-check-label",for:"createProject"},[s("span",null,"是否需建立新計畫")],-1),Is={class:"row mb-3"},Vs=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫主持人帳號",-1),zs={class:"col-sm-10"},Ns={class:"row mb-3"},Us=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫共同負責人帳號",-1),Os={class:"col-sm-10"},Rs={class:"row mb-3"},Ms=s("label",{class:"col-sm-2 col-form-label red-star"},"主要聯絡人帳號",-1),Ys={class:"col-sm-10"},Hs={class:"input-group input-group-merge"},Ls={class:"row mb-3"},Qs=s("label",{class:"col-sm-2 col-form-label red-star"},"主要聯絡人電話",-1),$s={class:"col-sm-10"},qs={class:"input-group input-group-merge"},Gs={class:"row mb-3"},Js=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫編號",-1),Ks={class:"col-sm-10"},Ws={class:"row mb-3"},Xs=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫名稱",-1),Zs={class:"col-sm-10"},se={class:"row mb-3"},ee=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫核銷機構(收據抬頭)",-1),oe={class:"col-sm-10"},te={class:"row mb-3"},ae=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫所屬部門",-1),ce={class:"col-sm-10"},le={class:"row mb-3"},ne=s("label",{class:"col-sm-2 col-form-label red-star"},"產學合作",-1),ie={class:"col-sm-10"},de={class:"row mb-3"},re=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫經費來源",-1),_e={class:"col-sm-10"},me={class:"row mb-3"},pe=s("label",{class:"col-sm-2 col-form-label"},"計畫描述",-1),ue={class:"col-sm-10"},he={class:"row mb-3"},ve=s("label",{class:"col-sm-2 col-form-label red-star"},"有無計畫執行期限",-1),be={class:"col-sm-4"},fe={class:"row mb-3"},ye=s("label",{class:"col-sm-2 col-form-label",for:""},"計畫執行期限",-1),xe={class:"col-sm-4"},ge={class:"input-group mb-3"},we=s("span",{class:"input-group-text"},"起",-1),Se={class:"col-sm-4"},je={class:"input-group"},Pe=s("span",{class:"input-group-text"},"迄",-1),ke={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-4"},Ce=["disabled"],Te=Q({__name:"ExpApplicationStep4",props:{id:{}},async setup(I){let p,k;const V=$(),{loggedInUser:C}=q(V),l=I,n=G(),A=r([]),y=r(0),{fetchTotalExpCaseAmounts:z,fetchProjectBalances:N,fetchProjectBalanceDeductions:U}=n,i=r(!1),d=r(([p,k]=J(()=>U(l.id)),p=await p,k(),p)),x=S(()=>d.value.reduce((o,t)=>o+t.balance,0)),O=S(()=>x.value===0&&i.value===!1),{values:B,meta:R,validate:M,setValues:E}=K({validationSchema:ns}),g=r([]),w=r([]),Y=S(()=>B.deadline==="yes"),H=async()=>{await M(),i.value?R.value.valid&&(n.saveStep4(l.id,B,d.value),n.proceedToStep6(l.id)):(n.saveStep4(l.id,void 0,d.value),n.proceedToStep6(l.id))};return W(async()=>{n.loadDataForStep4(l.id).then(async o=>{var t,m;o.selectedProjectBalances&&(d.value=o.selectedProjectBalances),o.project?(i.value=!0,E(o.project)):E({contactEmail:(t=C.value)==null?void 0:t.username,contactPhone:(m=C.value)==null?void 0:m.phone}),A.value=await N(l.id),y.value=await z(l.id)})}),X(async()=>{i.value&&(g.value.length===0&&(g.value=Z().map(o=>({id:o.id.toString(),name:o.name,value:o.id.toString()}))),w.value.length===0&&(w.value=ls()))}),(o,t)=>{const m=h("AppCard"),a=h("AppInput"),T=h("AppSelect"),u=h("AppRadio");return v(),j(D,null,[is,ds,e(m,{class:"mt-2"},{header:b(()=>[rs]),body:b(()=>[s("div",_s,[s("div",ms,[ps,(v(!0),j(D,null,ss(A.value,c=>(v(),j("div",{class:"row",key:c.tacProjectId},[s("div",us,[P(s("input",{type:"checkbox",class:"form-check-input",value:c,"onUpdate:modelValue":t[0]||(t[0]=L=>d.value=L)},null,8,hs),[[F,d.value]])]),s("div",vs,[s("span",bs,_(c.tacProjectId),1)]),s("div",fs,[s("span",ys,_(c.pi),1)]),s("div",xs,[s("span",gs,_(c.organization),1)]),s("div",ws,[s("span",Ss,_(c.balance)+"元",1)])]))),128))]),s("div",js,[s("div",Ps,[s("div",ks,[s("div",Cs,[As,f(": "),s("span",Bs,_(y.value),1),f(" 元, 擬使用餘額約為(粗估): "),s("span",{class:es(["badge text-bg-success",{"text-bg-danger":y.value>x.value}])},_(x.value),3),f(" 元 ")])]),Es])]),Ts,s("div",Ds,[P(s("input",{id:"createProject",name:"createProject",type:"checkbox",class:"form-check-input","onUpdate:modelValue":t[1]||(t[1]=c=>i.value=c)},null,512),[[F,i.value]]),Fs])])]),_:1}),i.value?(v(),os(m,{key:0},{header:b(()=>[f(" 建立計畫 ")]),body:b(()=>[s("div",Is,[Vs,s("div",zs,[e(a,{placeholder:"Email",type:"email",name:"piEmail"})])]),s("div",Ns,[Us,s("div",Os,[e(a,{placeholder:"Email",type:"email",name:"coPiEmail"})])]),s("div",Rs,[Ms,s("div",Ys,[s("div",Hs,[e(a,{placeholder:"Email",type:"email",name:"contactEmail"})])])]),s("div",Ls,[Qs,s("div",$s,[s("div",qs,[e(a,{name:"contactPhone"})])])]),s("div",Gs,[Js,s("div",Ks,[e(a,{name:"code"})])]),s("div",Ws,[Xs,s("div",Zs,[e(a,{name:"name"})])]),s("div",se,[ee,s("div",oe,[e(T,{name:"organization",options:g.value},null,8,["options"])])]),s("div",te,[ae,s("div",ce,[e(a,{name:"department"})])]),s("div",le,[ne,s("div",ie,[e(u,{label:"是",id:"cooperateY",name:"cooperate","checked-value":"yes"}),e(u,{label:"否",id:"cooperateN",name:"cooperate","checked-value":"no"})])]),s("div",de,[re,s("div",_e,[e(T,{name:"projectSource",options:w.value},null,8,["options"])])]),s("div",me,[pe,s("div",ue,[e(a,{name:"description"})])]),s("div",he,[ve,s("div",be,[e(u,{label:"有",id:"deadlineY",name:"deadline","checked-value":"yes"}),e(u,{label:"無",id:"deadlineN",name:"deadline","checked-value":"no"})])]),P(s("div",fe,[ye,s("div",xe,[s("div",ge,[e(a,{type:"date",name:"executionPeriodFrom"}),we])]),s("div",Se,[s("div",je,[e(a,{type:"date",name:"executionPeriodTo"}),Pe])])],512),[[ts,Y.value]])]),_:1})):as("",!0),s("div",ke,[s("button",{class:"btn btn-primary",onClick:H,disabled:O.value},"下一步",8,Ce),s("button",{class:"btn btn-outline-secondary",onClick:t[2]||(t[2]=c=>cs(n).proceedToStep3(o.id))}," 回上一步 ")])],64)}}});export{Te as default};
