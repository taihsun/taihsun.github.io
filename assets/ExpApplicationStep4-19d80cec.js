import{d as L,K as $,M as G,q as H,r,s as J,c as w,a as Q,D as W,I as X,ac as Z,e as u,o as v,f as S,h as e,w as h,g as s,F as T,x as ss,z as b,t as _,n as es,i as j,ad as D,B as os,v as ts,y as as,j as cs}from"./index-501cd1c4.js";import{g as ls}from"./ProjectSource-b760b0a5.js";import{p as ns}from"./formSchema-64a74bbf.js";const is=s("p",{class:"text-danger"},"餘額充足時才會進入此頁面",-1),ds=s("h4",{class:"fw-bold py-3 mb-4"},"計畫餘額",-1),rs=s("h5",{class:"mb-0"},"計畫餘額",-1),_s={class:"vstack"},ms={class:"p-2"},ps=s("div",{class:"row"},[s("div",{class:"col-1 my-1"}),s("div",{class:"col-3 my-1"},[s("span",{class:"mx-2 fw-bold"},"TAC Project ID")]),s("div",{class:"col-3 my-1"},[s("span",{class:"mx-2 fw-bold"},"PI")]),s("div",{class:"col-3 my-1"},[s("span",{class:"mx-2 fw-bold"},"機構")]),s("div",{class:"col-2 my-1"},[s("span",{class:"mx-2 fw-bold"},"餘額")])],-1),us={class:"col-1 my-1"},vs=["value"],hs={class:"col-2 my-1"},bs={class:"mx-2"},fs={class:"col-4 my-1"},xs={class:"mx-2"},ys={class:"col-3 my-1"},gs={class:"mx-2"},ws={class:"col-2 my-1"},Ss={class:"mx-2"},js={class:"d-flex flex-row justify-content-end"},Ps={class:"p-0"},ks={class:"d-flex flex-column"},Cs={class:"p-2"},Bs=s("b",null,"實驗總費用",-1),As={class:"badge text-bg-info"},Es=s("div",{class:"text-danger"}," (因會依可申請之服務單價計算來扣除餘額，故所需繳金額，最終以同意單上之金額為主) ",-1),Is=s("hr",null,null,-1),Ts={class:"form-check"},Ds=s("label",{class:"form-check-label",for:"createProject"},[s("span",null,"是否需建立新計畫")],-1),Fs={class:"row mb-3"},Vs=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫主持人帳號",-1),zs={class:"col-sm-10"},Ns={class:"row mb-3"},Us=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫共同負責人帳號",-1),Ms={class:"col-sm-10"},Os={class:"row mb-3"},Rs=s("label",{class:"col-sm-2 col-form-label red-star"},"主要聯絡人帳號",-1),Ys={class:"col-sm-10"},qs={class:"input-group input-group-merge"},Ks={class:"row mb-3"},Ls=s("label",{class:"col-sm-2 col-form-label red-star"},"主要聯絡人電話",-1),$s={class:"col-sm-10"},Gs={class:"input-group input-group-merge"},Hs={class:"row mb-3"},Js=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫編號",-1),Qs={class:"col-sm-10"},Ws={class:"row mb-3"},Xs=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫名稱",-1),Zs={class:"col-sm-10"},se={class:"row mb-3"},ee=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫核銷機構(收據抬頭)",-1),oe={class:"col-sm-10"},te={class:"row mb-3"},ae=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫所屬部門",-1),ce={class:"col-sm-10"},le={class:"row mb-3"},ne=s("label",{class:"col-sm-2 col-form-label red-star"},"產學合作",-1),ie={class:"col-sm-10"},de={class:"row mb-3"},re=s("label",{class:"col-sm-2 col-form-label red-star"},"計畫經費來源",-1),_e={class:"col-sm-10"},me={class:"row mb-3"},pe=s("label",{class:"col-sm-2 col-form-label"},"計畫描述",-1),ue={class:"col-sm-10"},ve={class:"row mb-3"},he=s("label",{class:"col-sm-2 col-form-label red-star"},"有無計畫執行期限",-1),be={class:"col-sm-4"},fe={class:"row mb-3"},xe=s("label",{class:"col-sm-2 col-form-label",for:""},"計畫執行期限",-1),ye={class:"col-sm-4"},ge={class:"input-group mb-3"},we=s("span",{class:"input-group-text"},"起",-1),Se={class:"col-sm-4"},je={class:"input-group"},Pe=s("span",{class:"input-group-text"},"迄",-1),ke={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-4"},Ce=["disabled"],Ie=L({__name:"ExpApplicationStep4",props:{id:{}},async setup(F){let m,P;const V=$(),{loggedInUser:k}=G(V),c=F,n=H(),C=r([]),f=r(0),{fetchTotalExpCaseAmounts:z,fetchProjectBalances:N,fetchProjectBalanceDeductions:U}=n,i=r(!1),d=r(([m,P]=J(()=>U(c.id)),m=await m,P(),m)),x=w(()=>d.value.reduce((o,l)=>o+l.balance,0)),M=w(()=>x.value===0&&i.value===!1),{values:B,meta:O,validate:R,setValues:A}=Q({validationSchema:ns}),y=r([]),g=r([]),Y=w(()=>B.deadline==="yes"),q=async()=>{await R(),i.value?O.value.valid&&(n.saveStep4(c.id,B,d.value),n.proceedToStep6(c.id)):(n.saveStep4(c.id,void 0,d.value),n.proceedToStep6(c.id))};return W(async()=>{n.loadDataForStep4(c.id).then(async o=>{o.selectedProjectBalances&&(d.value=o.selectedProjectBalances),o.project?(i.value=!0,A(o.project)):A({contactEmail:k.value?.username,contactPhone:k.value?.phone}),C.value=await N(c.id),f.value=await z(c.id)})}),X(async()=>{i.value&&(y.value.length===0&&(y.value=Z().map(o=>({id:o.id.toString(),name:o.name,value:o.id.toString()}))),g.value.length===0&&(g.value=ls()))}),(o,l)=>{const E=u("AppCard"),t=u("AppInput"),I=u("AppSelect"),p=u("AppRadio");return v(),S(T,null,[is,ds,e(E,{class:"mt-2"},{header:h(()=>[rs]),body:h(()=>[s("div",_s,[s("div",ms,[ps,(v(!0),S(T,null,ss(C.value,a=>(v(),S("div",{class:"row",key:a.tacProjectId},[s("div",us,[j(s("input",{type:"checkbox",class:"form-check-input",value:a,"onUpdate:modelValue":l[0]||(l[0]=K=>d.value=K)},null,8,vs),[[D,d.value]])]),s("div",hs,[s("span",bs,_(a.tacProjectId),1)]),s("div",fs,[s("span",xs,_(a.pi),1)]),s("div",ys,[s("span",gs,_(a.organization),1)]),s("div",ws,[s("span",Ss,_(a.balance)+"元",1)])]))),128))]),s("div",js,[s("div",Ps,[s("div",ks,[s("div",Cs,[Bs,b(": "),s("span",As,_(f.value),1),b(" 元, 擬使用餘額約為(粗估): "),s("span",{class:es(["badge text-bg-success",{"text-bg-danger":f.value>x.value}])},_(x.value),3),b(" 元 ")])]),Es])]),Is,s("div",Ts,[j(s("input",{id:"createProject",name:"createProject",type:"checkbox",class:"form-check-input","onUpdate:modelValue":l[1]||(l[1]=a=>i.value=a)},null,512),[[D,i.value]]),Ds])])]),_:1}),i.value?(v(),os(E,{key:0},{header:h(()=>[b(" 建立計畫 ")]),body:h(()=>[s("div",Fs,[Vs,s("div",zs,[e(t,{placeholder:"Email",type:"email",name:"piEmail"})])]),s("div",Ns,[Us,s("div",Ms,[e(t,{placeholder:"Email",type:"email",name:"coPiEmail"})])]),s("div",Os,[Rs,s("div",Ys,[s("div",qs,[e(t,{placeholder:"Email",type:"email",name:"contactEmail"})])])]),s("div",Ks,[Ls,s("div",$s,[s("div",Gs,[e(t,{name:"contactPhone"})])])]),s("div",Hs,[Js,s("div",Qs,[e(t,{name:"code"})])]),s("div",Ws,[Xs,s("div",Zs,[e(t,{name:"name"})])]),s("div",se,[ee,s("div",oe,[e(I,{name:"organization",options:y.value},null,8,["options"])])]),s("div",te,[ae,s("div",ce,[e(t,{name:"department"})])]),s("div",le,[ne,s("div",ie,[e(p,{label:"是",id:"cooperateY",name:"cooperate","checked-value":"yes"}),e(p,{label:"否",id:"cooperateN",name:"cooperate","checked-value":"no"})])]),s("div",de,[re,s("div",_e,[e(I,{name:"projectSource",options:g.value},null,8,["options"])])]),s("div",me,[pe,s("div",ue,[e(t,{name:"description"})])]),s("div",ve,[he,s("div",be,[e(p,{label:"有",id:"deadlineY",name:"deadline","checked-value":"yes"}),e(p,{label:"無",id:"deadlineN",name:"deadline","checked-value":"no"})])]),j(s("div",fe,[xe,s("div",ye,[s("div",ge,[e(t,{type:"date",name:"executionPeriodFrom"}),we])]),s("div",Se,[s("div",je,[e(t,{type:"date",name:"executionPeriodTo"}),Pe])])],512),[[ts,Y.value]])]),_:1})):as("",!0),s("div",ke,[s("button",{class:"btn btn-primary",onClick:q,disabled:M.value},"下一步",8,Ce),s("button",{class:"btn btn-outline-secondary",onClick:l[2]||(l[2]=a=>cs(n).proceedToStep3(o.id))}," 回上一步 ")])],64)}}});export{Ie as default};
