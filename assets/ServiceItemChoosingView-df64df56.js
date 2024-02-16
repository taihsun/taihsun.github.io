import{D as x,o,f as s,g as e,t as d,F as p,s as b,j as S,H as T,m as k,I as w,J as I,e as f,B as h,k as y,x as g,K as $,q as A,h as v,i as C,L as N}from"./index-dfa148fa.js";const B={class:"input-group mb-3"},V=["onUpdate:modelValue"],E={class:"input-group-text"},j={__name:"ServiceItemCategoryItem",props:{item:{type:Object,required:!0,validator:t=>t!==null}},emits:["addToCart"],setup(t){const r=t,c=x([]);r.item.units.forEach(n=>{c.push({amount:n.amount,name:n.name,index:n.index})});function l(){return k.map(c,n=>({index:n.index,amount:n.amount}))}function i(){c.forEach(n=>{n.amount=0})}return(n,u)=>(o(),s("tr",null,[e("td",null,d(t.item.number),1),e("td",null,d(t.item.name),1),e("td",null,d(t.item.note),1),e("td",null,[(o(!0),s(p,null,b(c,a=>(o(),s("div",{key:a.index},[e("div",B,[S(e("input",{type:"number",min:"0",step:"1",class:"form-control","onUpdate:modelValue":m=>a.amount=m,onkeydown:"javascript: return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code) ? true : !isNaN(Number(event.key)) && event.code!=='Space'"},null,8,V),[[T,a.amount]]),e("span",E,d(a.name),1)])]))),128))]),e("td",null,[e("button",{class:"btn btn-success",onClick:u[0]||(u[0]=a=>(n.$emit("addToCart",l()),i()))}," Add ")])]))}},q={class:"accordion",id:"accordionPanelsStayOpenExample"},D={class:"accordion-item"},L={class:"accordion-header"},O=["data-bs-target"],R={class:"fw-bold"},F={class:"accordion-body"},U={key:0,class:"table-responsive"},H={class:"table table-striped"},J=e("thead",null,[e("tr",null,[e("th",null,"Number"),e("th",null,"Service item"),e("th",null,"Note"),e("th",null,"Sample amount"),e("th")])],-1),K={__name:"ServiceItemCategory",props:{category:{type:Object,required:!0},labType:{type:String,required:!0}},setup(t){const r=w(),l="panelsStayOpen-collapse"+I();return(i,n)=>{const u=f("ServiceItemCategory",!0);return o(),s("div",q,[e("div",D,[e("h2",L,[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+l,"aria-expanded":"false","aria-controls":l},[e("span",R,d(t.category.category),1)],8,O)]),e("div",{id:l,class:"accordion-collapse collapse"},[e("div",F,[t.category.items?(o(),s("div",U,[e("table",H,[J,e("tbody",null,[(o(!0),s(p,null,b(t.category.items,a=>(o(),h(j,{key:a.number,item:a,onAddToCart:m=>y(r).addItems(m,a,t.labType)},null,8,["item","onAddToCart"]))),128))])])])):g("",!0),(o(!0),s(p,null,b(t.category.subCategories,a=>(o(),s("div",{class:"mb-2",key:a.name},[a.items?(o(),h(u,{key:0,category:a,labType:t.labType},null,8,["category","labType"])):g("",!0)]))),128))])])])])}}},M=e("h4",{class:"fw-bold py-3 mb-4"},"選擇服務項目",-1),P={class:"mb-0"},G={__name:"ServiceItemChoosingView",async setup(t){let r,c;const i=$().params.labType,n=([r,c]=A(()=>N(i)),r=await r,c(),r);return(u,a)=>{const m=f("AppCard");return o(),s(p,null,[M,v(m,null,{header:C(()=>[e("h5",P,d(y(i))+"服務項目",1)]),body:C(()=>[(o(!0),s(p,null,b(y(n),_=>(o(),s("div",{class:"mb-2",key:_.name},[v(K,{category:_,labType:y(i)},null,8,["category","labType"])]))),128))]),_:1})],64)}}};export{G as default};
