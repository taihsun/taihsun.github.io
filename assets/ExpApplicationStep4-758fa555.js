import{a6 as M,u as q,D as j,a7 as S,r as u,a8 as L,a9 as O,aa as Y,ab as $,a1 as G,q as H,M as J,$ as w,e as K,o as m,f as y,h as Q,i as E,g as s,F as k,s as D,j as b,ac as F,t as a,k as i,ad as T,v as A,z as r,n as N,ae as W}from"./index-dfa148fa.js";const X=M("ExpCaseStoreTs",()=>{q();let n=j(new S);const _=u({academic:[],industry:[]}),p=u(0),v=u(0),h=()=>n.getProjectBalanceDeductions()||[],x=async o=>{_.value=L(),await O().then(e=>{p.value=e[0],v.value=e[1]}),await l(o)},f=async(o,e)=>{Y(o,e),await l(o)},l=async o=>{g(),await $(o).then(e=>{n=j(e)})},g=()=>{n=j(new S)};return{expCase:n,projectBalances:_,academicFee:p,industryFee:v,loadExpCaseById:l,deductProjectBalances:f,initStep4:x,getProjectBalances:h}},{persist:!0}),Z=s("p",{class:"text-danger"},"餘額充足時才會進入此頁面",-1),ss=s("h4",{class:"fw-bold py-3 mb-4"},"計畫餘額",-1),es=s("h5",{class:"mb-0"},"計畫餘額",-1),ts={class:"vstack"},as=s("div",{class:"p-2"},[s("strong",null," 學術界 ")],-1),os={class:"p-2"},cs={class:"col-1 my-1"},ns=["value"],ls={class:"col-7 my-1"},ds={class:"mx-2"},is={class:"col-2 my-1"},rs={class:"mx-2"},us={class:"col-2 my-1"},_s={class:"mx-2"},ps={class:"vstack"},vs=s("div",{class:"p-2"},[s("strong",null,"產業界 ")],-1),hs={class:"p-2"},ms={class:"col-1 my-1"},ys=["value"],xs={class:"col-7 my-1"},fs={class:"mx-2"},bs={class:"col-2 my-1"},gs={class:"mx-2"},Bs={class:"col-2 my-1"},Cs={class:"mx-2"},js={class:"d-flex flex-row justify-content-end"},ws=s("div",{class:"p-3"},[s("b",null,"實驗總費用")],-1),ks={class:"p-2"},Ps={class:"d-flex flex-column"},Ss={class:"p-2"},Es={class:"badge text-bg-info"},Ds={class:"p-2"},Fs={class:"badge text-bg-info"},Ts={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-2"},As=["disabled"],Ns=s("button",{class:"btn btn-primary"},"建立計畫",-1),Is=G({__name:"ExpApplicationStep4",props:["id"],async setup(n){let _,p;const v=n,h=X();[_,p]=H(()=>h.initStep4(v.id)),await _,p();const{projectBalances:x,academicFee:f,industryFee:l}=J(h),{deductProjectBalances:g,getProjectBalances:o}=h,e=u(o()),V=u(x.value.academic),I=u(x.value.industry),d=w(()=>e.value.reduce((B,c)=>B+c.balance,0)),P=w(()=>e.value.find(c=>c.type===W.INDUSTRY)!==void 0),R=w(()=>d.value===0),U=async()=>{g(v.id,e.value)};return(B,c)=>{const z=K("AppCard");return m(),y(k,null,[Z,ss,Q(z,{class:"mt-2"},{header:E(()=>[es]),body:E(()=>[s("div",ts,[as,s("div",os,[(m(!0),y(k,null,D(V.value,t=>(m(),y("div",{class:"row",key:t.name},[s("div",cs,[b(s("input",{type:"checkbox",class:"form-check-input",value:t,"onUpdate:modelValue":c[0]||(c[0]=C=>e.value=C)},null,8,ns),[[F,e.value]])]),s("div",ls,[s("span",ds,a(t.name),1)]),s("div",is,[s("span",rs,a(i(T)(t.type)),1)]),s("div",us,[s("span",_s,a(t.balance)+"元",1)])]))),128))])]),s("div",ps,[vs,s("div",hs,[(m(!0),y(k,null,D(I.value,t=>(m(),y("div",{class:"row",key:t.name},[s("div",ms,[b(s("input",{type:"checkbox",class:"form-check-input",value:t,"onUpdate:modelValue":c[1]||(c[1]=C=>e.value=C)},null,8,ys),[[F,e.value]])]),s("div",xs,[s("span",fs,a(t.name),1)]),s("div",bs,[s("span",gs,a(i(T)(t.type)),1)]),s("div",Bs,[s("span",Cs,a(t.balance)+"元",1)])]))),128))])]),s("div",js,[ws,s("div",ks,[s("div",Ps,[b(s("div",Ss,[r(" 學術界: "),s("span",Es,a(i(f)),1),r(" 元, 扣除金額: "),s("span",{class:N(["badge text-bg-success",{"text-bg-danger":i(f)>d.value}])},a(d.value),3),r(" 元 ")],512),[[A,!P.value]]),b(s("div",Ds,[r(" 產業界: "),s("span",Fs,a(i(l)),1),r(" 元, 扣除金額: "),s("span",{class:N(["badge text-bg-success",{"text-bg-danger":i(l)>d.value}])},a(d.value),3),r(" 元 ")],512),[[A,P.value||d.value===0]])])])])]),_:1}),s("div",Ts,[s("button",{class:"btn btn-primary",onClick:U,disabled:R.value}," 扣除餘額 ",8,As),Ns])],64)}}});export{Is as default};