import{r as l,h,o as n,c as o,H as D,D as S,j as c,w as s,F as p,a as e,G as y,k as g,b3 as T,C as k,l as x,N as V,b4 as C,t as a,s as F}from"./index-69085551.js";import{L}from"./LayoutManagement-c85c7f32.js";import{I as A}from"./InstrumentService-52ace417.js";import"./InstrumentApiImpl-9a103832.js";const O=e("h4",{class:"fw-bold py-3 mb-4"},"儀器管理",-1),U={class:"mb-2"},j=e("label",{for:"labType",class:"form-label"},"單位",-1),q=e("option",{value:""},"請選擇",-1),E=["value"],G={class:"mb-2"},H=e("label",{for:"name",class:"form-label"},"名稱",-1),z={class:"table display",id:"instrument"},J=e("thead",null,[e("tr",null,[e("th",null,"單位"),e("th",null,"NO."),e("th",null,"Name"),e("th",null,"Official service begin date"),e("th",null,"Function description"),e("th")])],-1),K={class:"d-inline-block text-truncate",style:{"max-width":"100px"}},P=e("i",{class:"bi bi-pencil-square"},null,-1),Y={__name:"InstrumentManagement",props:["message","success"],setup(w){const f=w,B=A.getInstance(),u=l(""),i=l(""),d=l(f.message||""),_=l(f.success||!0),b=l([]),I=C();async function M(){try{b.value=await B.filterInstruments(u.value,i.value)}catch(v){_.value=!1,d.value=v.message}}return(v,r)=>{const N=h("AppMessage"),m=h("router-link");return n(),o(p,null,[O,d.value?(n(),D(N,{key:0,message:d.value,success:_.value},null,8,["message","success"])):S("",!0),c(L,null,{addButtonSm:s(()=>[c(m,{to:"/instrument/create",class:"form-control btn btn-secondary"},{default:s(()=>[y("新增儀器")]),_:1})]),addButton:s(()=>[c(m,{to:"/instrument/create",class:"form-control btn btn-secondary"},{default:s(()=>[y("新增儀器")]),_:1})]),filterForm:s(()=>[e("form",null,[e("div",U,[j,g(e("select",{class:"form-select",id:"labType","onUpdate:modelValue":r[0]||(r[0]=t=>u.value=t)},[q,(n(!0),o(p,null,k(x(I),t=>(n(),o("option",{key:t.id,value:t.id},a(t.name),9,E))),128))],512),[[T,u.value]])]),e("div",G,[H,g(e("input",{type:"text",class:"form-control","onUpdate:modelValue":r[1]||(r[1]=t=>i.value=t)},null,512),[[V,i.value]])]),e("div",{class:"d-flex flex-row-reverse"},[e("button",{type:"button",class:"btn btn-primary",onClick:M},"Search")])])]),table:s(()=>[e("table",z,[J,e("tbody",null,[(n(!0),o(p,null,k(b.value,t=>(n(),o("tr",{key:t.id},[e("td",null,a(t.labType),1),e("td",null,a(t.no),1),e("td",null,a(t.name),1),e("td",null,a(x(F)(t.officialServiceBeginDate)),1),e("td",null,[e("span",K,a(t.functionDescription),1)]),e("td",null,[c(m,{to:{name:"InstrumentModification",params:{instrumentId:t.id}}},{default:s(()=>[P]),_:2},1032,["to"])])]))),128))])])]),_:1})],64)}}};export{Y as default};
