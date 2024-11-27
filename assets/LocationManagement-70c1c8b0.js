import{d as C,r as u,e as S,x as M,h as f,o as r,c as d,B as I,z as N,j as o,w as a,A as b,a as e,aa as V,l as y,F as k,y as F,p as A,t as j}from"./index-8fed8339.js";import{L as q}from"./LayoutManagement-3c263d8e.js";import{L as z}from"./LocationService-438c0953.js";import"./LocationDbSimulator-1334c689.js";const D=e("h4",{class:"fw-bold py-3 mb-4"},"入室前所在地管理",-1),E={class:"mb-2"},R=e("label",{for:"name",class:"form-label"},"入室前所在地名稱",-1),T={class:"d-flex flex-row-reverse"},$={class:"table display",id:"instrument"},G=e("thead",null,[e("tr",null,[e("th",null,"狀態"),e("th",null,"Name"),e("th")])],-1),H={class:"form-check form-switch"},J=["checked","onInput"],K=e("i",{class:"bi bi-pencil-square"},null,-1),W=C({__name:"LocationManagement",props:{success:{type:Boolean}},setup(v){const g=v,m=z.getInstance(),w=A(),p=u(g.success||!0),n=u(""),_=u([]),{handleSubmit:x}=S({initialValues:{name:""}});M(async()=>{n.value=w.options.history.state.message});const h=x(async c=>{try{const t=await m.filterLocations(c.name);_.value=t}catch(t){p.value=!1,n.value=t.message}}),L=async(c,t)=>{const i=c.target;try{await m.enableLocation(t,i.checked)}catch{}};return(c,t)=>{const i=f("AppMessage"),l=f("router-link");return r(),d(k,null,[D,n.value?(r(),I(i,{key:0,message:n.value,success:p.value},null,8,["message","success"])):N("",!0),o(q,null,{addButtonSm:a(()=>[o(l,{to:"/location/create",class:"form-control btn btn-secondary"},{default:a(()=>[b("新增入室前所在地")]),_:1})]),addButton:a(()=>[o(l,{to:"/location/create",class:"form-control btn btn-secondary"},{default:a(()=>[b("新增入室前所在地")]),_:1})]),filterForm:a(()=>[e("form",null,[e("div",E,[R,o(V,{id:"name",name:"name"})]),e("div",T,[e("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=(...s)=>y(h)&&y(h)(...s))},"Search")])])]),table:a(()=>[e("table",$,[G,e("tbody",null,[(r(!0),d(k,null,F(_.value,s=>(r(),d("tr",{key:s.id},[e("td",null,[e("div",H,[e("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked",checked:s.status,onInput:B=>L(B,s.id)},null,40,J)])]),e("td",null,j(s.name),1),e("td",null,[o(l,{to:{name:"LocationModification",params:{locationId:s.id}}},{default:a(()=>[K]),_:2},1032,["to"])])]))),128))])])]),_:1})],64)}}});export{W as default};
