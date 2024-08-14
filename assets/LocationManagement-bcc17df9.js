import{d as B,r as u,a as C,e as b,o as l,f as m,D as S,B as I,h as n,w as a,C as y,g as e,X as M,j as g,F as k,A as N,t as V}from"./index-224d4b7d.js";import{L as F}from"./LayoutManagement-bf643839.js";import{L as A}from"./LocationService-83028c48.js";const D=e("h4",{class:"fw-bold py-3 mb-4"},"入室前所在地管理",-1),j={class:"mb-2"},q=e("label",{for:"name",class:"form-label"},"入室前所在地名稱",-1),E={class:"d-flex flex-row-reverse"},T={class:"table display",id:"instrument"},X=e("thead",null,[e("tr",null,[e("th",null,"狀態"),e("th",null,"Name"),e("th")])],-1),$={class:"form-check form-switch"},z=["checked","onInput"],G=e("i",{class:"bi bi-pencil-square"},null,-1),O=B({__name:"LocationManagement",props:{message:{},success:{type:Boolean}},setup(v){const d=v,_=A.getInstance(),h=u(d.success||!0),r=u(d.message||""),p=u([]),{handleSubmit:w}=C({initialValues:{name:""}}),f=w(async o=>{try{const t=await _.filterLocations(o.name);p.value=t}catch(t){h.value=!1,r.value=t.message}}),L=async(o,t)=>{const i=o.target;try{await _.enableLocation(t,i.checked)}catch{}};return(o,t)=>{const i=b("AppMessage"),c=b("router-link");return l(),m(k,null,[D,r.value?(l(),S(i,{key:0,message:r.value,success:h.value},null,8,["message","success"])):I("",!0),n(F,null,{addButtonSm:a(()=>[n(c,{to:"/location/create",class:"form-control btn btn-secondary"},{default:a(()=>[y("新增入室前所在地")]),_:1})]),addButton:a(()=>[n(c,{to:"/location/create",class:"form-control btn btn-secondary"},{default:a(()=>[y("新增入室前所在地")]),_:1})]),filterForm:a(()=>[e("form",null,[e("div",j,[q,n(M,{id:"name",name:"name"})]),e("div",E,[e("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=(...s)=>g(f)&&g(f)(...s))},"Search")])])]),table:a(()=>[e("table",T,[X,e("tbody",null,[(l(!0),m(k,null,N(p.value,s=>(l(),m("tr",{key:s.id},[e("td",null,[e("div",$,[e("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked",checked:s.status,onInput:x=>L(x,s.id)},null,40,z)])]),e("td",null,V(s.name),1),e("td",null,[n(c,{to:{name:"LocationModification",params:{locationId:s.id}}},{default:a(()=>[G]),_:2},1032,["to"])])]))),128))])])]),_:1})],64)}}});export{O as default};
