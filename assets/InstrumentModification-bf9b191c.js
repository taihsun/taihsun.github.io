import{u as A,r as d,ag as F,q as C,ak as D,c as N,al as V,e as i,o as m,f as h,B as O,x as f,g as s,k as u,h as t,i as T,F as L,am as j,z as q}from"./index-dfa148fa.js";import{u as z}from"./FormSchemaStore-a42f2925.js";import{O as E}from"./Option-3450003d.js";import"./index.esm-77e4e4df.js";const R=s("h4",{class:"fw-bold py-3 mb-3"},"修改儀器",-1),U={class:"row"},G={class:"col-xxl"},H={class:"card"},J={class:"card-body"},K={class:"row mb-3"},P=s("label",{for:"labType",class:"col-sm-3 col-form-label red-star"},"單位 ",-1),Q={class:"col-sm-4"},W={class:"row mb-3"},X=s("label",{for:"no",class:"col-sm-3 col-form-label red-star"},"NO. ",-1),Y={class:"col-sm-4"},Z={class:"row mb-3"},$=s("label",{for:"name",class:"col-sm-3 col-form-label red-star"},"名稱 ",-1),ss={class:"col-sm-4"},es={class:"row mb-3"},ts=s("label",{for:"officialServiceBeginDate",class:"col-sm-3 col-form-label"},"Official service begin date",-1),os={class:"col-sm-4"},as={class:"row mb-3"},ns=s("label",{for:"functionDescription",class:"col-sm-3 col-form-label red-star"},"Function description ",-1),cs={class:"col-sm-4"},ls={class:"mt-2 d-flex justify-content-between flex-row-reverse"},is=s("button",{type:"submit",class:"btn btn-primary"},"修改",-1),rs={key:0,type:"button",class:"btn btn-danger mx-1","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},ds=s("div",{class:"modal-body"},"確定刪除?",-1),ms=s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),hs={__name:"InstrumentModification",props:["instrumentId"],async setup(v){let c,_;const g=A(),p=v,o=d(""),a=d(!1),y=F().map(e=>new E(e.id,e.name,e.id)),r=d(null),{instrumentModificationFormSchema:w}=z();try{r.value=([c,_]=C(()=>D(p.instrumentId)),c=await c,_(),c)}catch(e){console.log(e)}const{handleSubmit:x}=N({validationSchema:w,initialValues:r.value}),b=x(async e=>{V(e).then(n=>{a.value=!0,o.value=n}).catch(n=>{a.value=!1,o.value="更新失敗"})}),I=()=>{j(p.instrumentId).then(e=>{a.value=!0,g.push({name:"InstrumentManagement",params:{message:e}})}).catch(e=>{a.value=!1,o.value="刪除失敗"})};return(e,n)=>{const S=i("AppMessage"),k=i("AppSelect"),l=i("AppInput"),B=i("router-link");return m(),h(L,null,[R,o.value?(m(),O(S,{key:0,message:o.value,success:a.value},null,8,["message","success"])):f("",!0),s("div",U,[s("form",{onSubmit:n[0]||(n[0]=(...M)=>u(b)&&u(b)(...M))},[s("div",G,[s("div",H,[s("div",J,[s("div",K,[P,s("div",Q,[t(k,{options:u(y),name:"labType","show-error-message":!0},null,8,["options"])])]),s("div",W,[X,s("div",Y,[t(l,{name:"no","show-error-message":!0})])]),s("div",Z,[$,s("div",ss,[t(l,{name:"name","show-error-message":!0})])]),s("div",es,[ts,s("div",os,[t(l,{name:"officialServiceBeginDate",type:"date"})])]),s("div",as,[ns,s("div",cs,[t(l,{name:"functionDescription","show-error-message":!0})])])])])]),s("div",ls,[is,r.value.deletable?(m(),h("button",rs," 刪除 ")):f("",!0),t(B,{to:"/instrument/management",class:"btn btn-outline-secondary"},{default:T(()=>[q("回儀器管理")]),_:1})])],32),s("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[s("div",{class:"modal-dialog"},[s("div",{class:"modal-content"},[ds,s("div",{class:"modal-footer"},[ms,s("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:I}," 確定 ")])])])])])],64)}}};export{hs as default};
