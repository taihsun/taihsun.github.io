import{d as y,e as x,r as b,b4 as B,h as m,o as v,c as D,H as F,D as I,a as e,l as p,j as n,w as k,G as A,F as C}from"./index-b61f44e7.js";import{I as N}from"./InstrumentService-d5e02f07.js";import{u as T}from"./FormSchemaStore-c769df41.js";import"./InstrumentApiImpl-14e5db4e.js";class h{constructor(a,s,d,_,t,c,u){this.id=a,this.labType=s,this.no=d,this.name=_,this.officialServiceBeginDate=t,this.functionDescription=c,this.deletable=u}static create(a){const s=new h;return Object.assign(s,a),s}}const V=e("h4",{class:"fw-bold py-3 mb-4"},"新增儀器",-1),j={class:"row"},O={class:"col-xxl"},M={class:"card mb-4"},E={class:"card-body"},G={class:"row mb-3"},H=e("label",{for:"labType",class:"col-sm-3 col-form-label red-star"},"單位 ",-1),L={class:"col-sm-4"},q={class:"row mb-3"},z=e("label",{for:"no",class:"col-sm-3 col-form-label red-star"},"NO. ",-1),J={class:"col-sm-4"},K={class:"row mb-3"},P=e("label",{for:"name",class:"col-sm-3 col-form-label red-star"},"名稱 ",-1),Q={class:"col-sm-4"},R={class:"row mb-3"},U=e("label",{for:"officialServiceBeginDate",class:"col-sm-3 col-form-label"},"Official service begin date",-1),W={class:"col-sm-4"},X={class:"row mb-3"},Y=e("label",{for:"functionDescription",class:"col-sm-3 col-form-label red-star"},"Function description ",-1),Z={class:"col-sm-4"},$={class:"d-flex justify-content-between flex-row-reverse"},ee=e("button",{type:"submit",class:"btn btn-primary"},"新增",-1),ce=y({__name:"InstrumentCreation",setup(se){const{instrumentCreationFormSchema:a}=T(),{handleSubmit:s,resetForm:d}=x({validationSchema:a}),_=N.getInstance(),t=b(""),c=b(!1),u=B().map(o=>({id:o.id,name:o.name,value:o.id.toString()})),f=s(async o=>{const i=h.create(o);await _.createInstrument(i).then(r=>{c.value=!0,t.value=r,d({})}).catch(function(r){c.value=!1,t.value=r.message})});return(o,i)=>{const r=m("AppMessage"),g=m("AppSelect"),l=m("AppInput"),w=m("router-link");return v(),D(C,null,[V,t.value?(v(),F(r,{key:0,message:t.value,success:c.value},null,8,["message","success"])):I("",!0),e("div",j,[e("form",{onSubmit:i[0]||(i[0]=(...S)=>p(f)&&p(f)(...S))},[e("div",O,[e("div",M,[e("div",E,[e("div",G,[H,e("div",L,[n(g,{options:p(u),name:"labType","show-error-message":!0},null,8,["options"])])]),e("div",q,[z,e("div",J,[n(l,{name:"no","show-error-message":!0})])]),e("div",K,[P,e("div",Q,[n(l,{name:"name","show-error-message":!0})])]),e("div",R,[U,e("div",W,[n(l,{name:"officialServiceBeginDate",type:"date"})])]),e("div",X,[Y,e("div",Z,[n(l,{name:"functionDescription","show-error-message":!0})])])])])]),e("div",$,[ee,n(w,{to:"/instrument/management",class:"btn btn-outline-primary"},{default:k(()=>[A("回儀器管理")]),_:1})])],32)])],64)}}});export{ce as default};
