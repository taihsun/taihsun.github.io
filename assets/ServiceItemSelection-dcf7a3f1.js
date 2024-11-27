import{d as y,r as g,o as n,c as l,a as e,t as d,F as u,y as m,k as T,G as C,H as k,I as w,h as f,B as b,l as B,z as h,E as I,J as $,j as _,w as v,K as N}from"./index-8fed8339.js";const A={class:"input-group mb-3"},E=["onUpdate:modelValue"],U={class:"input-group-text"},V=y({__name:"ServiceItemCategoryItem",props:{item:{}},emits:["addToCart"],setup(p){const i=p,s=g([]);i.item.expServiceItemUnits.forEach(t=>{s.value.push({id:t.id,amount:t.amount,name:t.name,index:t.index})});function o(){const t=[];return s.value.forEach(a=>{t.push({id:a.id,amount:a.amount,name:a.name,index:a.index})}),t}function c(){s.value.forEach(t=>{t.amount=0})}return(t,a)=>(n(),l("tr",null,[e("td",null,d(t.item.code),1),e("td",null,d(t.item.name),1),e("td",null,d(t.item.note),1),e("td",null,[(n(!0),l(u,null,m(s.value,r=>(n(),l("div",{key:r.index},[e("div",A,[T(e("input",{type:"number",min:"0",step:"1",class:"form-control","onUpdate:modelValue":S=>r.amount=S,onkeydown:"javascript: return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code) ? true : !isNaN(Number(event.key)) && event.code!=='Space'"},null,8,E),[[C,r.amount]]),e("span",U,d(r.name),1)])]))),128))]),e("td",null,[e("button",{class:"btn btn-success",onClick:a[0]||(a[0]=r=>(t.$emit("addToCart",o()),c()))}," Add ")])]))}}),x={class:"accordion",id:"accordionPanelsStayOpenExample"},L={class:"accordion-item"},D={class:"accordion-header"},R=["data-bs-target"],j={class:"fw-bold"},F={class:"accordion-body"},M={key:0,class:"table-responsive"},O={class:"table table-striped"},z=e("thead",null,[e("tr",null,[e("th",null,"Number"),e("th",null,"Service item"),e("th",null,"Note"),e("th",null,"Sample amount"),e("th")])],-1),G=y({__name:"ServiceItemCategory",props:{category:{},labType:{}},setup(p){const i=k(),s="panelsStayOpen-collapse"+w();return(o,c)=>{const t=f("ServiceItemCategory",!0);return n(),l("div",x,[e("div",L,[e("h2",D,[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+s,"aria-expanded":"false","aria-controls":s},[e("span",j,d(o.category.category),1)],8,R)]),e("div",{id:s,class:"accordion-collapse collapse"},[e("div",F,[o.category.items?(n(),l("div",M,[e("table",O,[z,e("tbody",null,[(n(!0),l(u,null,m(o.category.items,a=>(n(),b(V,{key:a.code,item:a,onAddToCart:r=>B(i).addItems(r,a,o.labType)},null,8,["item","onAddToCart"]))),128))])])])):h("",!0),(n(!0),l(u,null,m(o.category.subCategories,a=>(n(),l("div",{class:"mb-2",key:a.category},[a.items?(n(),b(t,{key:0,category:a,labType:o.labType},null,8,["category","labType"])):h("",!0)]))),128))])])])])}}}),H=e("h4",{class:"fw-bold py-3 mb-4"},"選擇服務項目",-1),J={class:"mb-0"},P=y({__name:"ServiceItemSelection",props:{labType:{}},setup(p){const i=p,s=N.getInstance(),o=g([]);return I(async()=>{await s.fetchServiceItemsByLabType(i.labType).then(c=>{o.value=c})}),$(async()=>{await s.fetchServiceItemsByLabType(i.labType).then(c=>{o.value=c})}),(c,t)=>{const a=f("AppCard");return n(),l(u,null,[H,_(a,null,{header:v(()=>[e("h5",J,d(c.labType)+"服務項目",1)]),body:v(()=>[(n(!0),l(u,null,m(o.value,r=>(n(),l("div",{class:"mb-2",key:r.category},[_(G,{category:r,labType:c.labType},null,8,["category","labType"])]))),128))]),_:1})],64)}}});export{P as default};
