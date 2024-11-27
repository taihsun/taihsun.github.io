import{_ as S}from"./ProjectPanel.vue_vue_type_script_setup_true_lang-2e0947cd.js";import{p as A}from"./formSchema-c055c88b.js";import{d as w,r as i,s as f,D as F,e as O,h as g,o as I,c as P,j as l,a as n,w as j,l as p,F as V,K as M}from"./index-bda4bfce.js";import{O as R}from"./OrganizationService-9a94549e.js";import"./ProjectSource-66fc82ed.js";var m=(t=>(t.APPROVED="APPROVED",t.REJECTED="REJECTED",t.MODIFIED="MODIFIED",t))(m||{});const k=n("h4",{class:"fw-bold py-3 mb-4"},"審查新計畫",-1),z={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-2"},K=w({__name:"ExpApplicationReviewProject",props:{id:{}},async setup(t){let s,o;const C=R.getInstance(),u=M.getInstance(),d=t,b=i(),v=i();[s,o]=f(()=>C.fetchOrganizations().then(a=>{b.value=a.map(e=>({id:e.id.toString(),name:e.name,value:e.id.toString()}))})),await s,o();const h=F(),E=i();try{E.value=([s,o]=f(()=>u.fetchProjectByExpCaseId(d.id)),s=await s,o(),s)}catch(a){console.error(a)}const{values:x,handleSubmit:y}=O({initialValues:E.value,validationSchema:A}),_=a=>{y(async e=>{const r={status:a,project:e};await u.approveProject(d.id,r).then(()=>{h.toMain()}).catch(c=>{v.value=c.errors})})()};return(a,e)=>{const r=g("AppFloatingMessages"),c=g("AppCard");return I(),P(V,null,[l(r,{messages:v.value},null,8,["messages"]),k,n("form",null,[l(c,{class:"mt-2"},{body:j(()=>[l(S,{values:p(x)},null,8,["values"])]),_:1}),n("div",z,[n("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=D=>_(p(m).APPROVED))}," 通過 "),n("button",{type:"button",class:"btn btn-outline-secondary",onClick:e[1]||(e[1]=D=>_(p(m).REJECTED))}," 退件 ")])])],64)}}});export{K as default};