var pe=Object.defineProperty;var _e=(u,c,n)=>c in u?pe(u,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[c]=n;var D=(u,c,n)=>(_e(u,typeof c!="symbol"?c+"":c,n),n);import{d as Z,ab as he,o as m,f as h,h as a,a6 as be,j as y,k as ge,b3 as ye,H as fe,b2 as Se,r as _,c as A,a as Ce,a9 as z,e as b,D as J,B as Q,g as e,w,C as O,i as S,v as P,F as M,A as $,t as k,K as W,l as Ie,ai as xe}from"./index-aa4c4465.js";import{a as we,S as ke}from"./ServiceItemService-e6183766.js";import{u as Fe}from"./FormSchemaStore-6fa13dc8.js";import{a as Be}from"./SampleCategory-297f54b4.js";const Te=Z({__name:"AppSelectUser",props:{name:{},options:{default:()=>[]}},setup(u){const c=u,{value:n,errorMessage:N,handleBlur:i,handleChange:U}=he(()=>c.name,void 0),V=r=>{U(r.map(d=>d.value))};return(r,d)=>(m(),h("div",null,[a(y(ye),be({class:["form-control",{"is-invalid":y(N)?"is-invalid":""}],options:r.options,placeholder:"請選擇",label:"name",reduce:p=>p.id,onBlur:y(i),"onOption:selected":V},r.$attrs,{modelValue:y(n),"onUpdate:modelValue":d[0]||(d[0]=p=>ge(n)?n.value=p:null),multiple:""}),null,16,["class","options","reduce","onBlur","modelValue"])]))}}),g=class g{constructor(c){D(this,"api");this.api=c}static getInstance(){return g.instance||(g.instance=new g(we)),g.instance}async fetchUsersByLabType(c){return await this.api.apiFetchUsersByLabType(c)}};D(g,"instance");let q=g;const Ae={class:"row mb-2"},Me=e("label",{for:"labType",class:"col-sm-2 col-form-label red-star"},"單位 ",-1),Ne={class:"col-sm-4"},Ue={class:"row mb-2"},Ve=e("label",{for:"code",class:"col-sm-2 col-form-label red-star"},"Service Item Code ",-1),Le={class:"col-sm-4"},je={class:"row mb-2"},Re=e("label",{for:"name",class:"col-sm-2 col-form-label red-star"},"Service Item Name ",-1),De={class:"col-sm-9"},Oe={class:"row mb-2"},Pe=e("label",{for:"note",class:"col-sm-2 col-form-label"},"Note",-1),$e={class:"col-sm-9"},qe={class:"row mb-2"},Ee=e("label",{for:"type",class:"col-sm-2 col-form-label red-star"},"服務項目類別",-1),Ye={class:"col-sm-4",id:"type"},He={class:"input-group"},Ke=e("label",{class:"input-group-text",for:"serviceCategory"},"大類",-1),Xe={class:"col-sm-4"},ze={class:"input-group"},Je=e("label",{class:"input-group-text",for:"serviceSubCategory"},"小類",-1),Qe={class:"row mb-2"},We=e("label",{for:"owner",class:"col-sm-2 col-form-label red-star"},"負責人",-1),Ze={class:"col-sm-9"},Ge={class:"row mb-2"},et=e("label",{for:"firstItemUnit",class:"col-sm-2 col-form-label red-star"},"Sample amount 之單位 ",-1),tt={class:"col-3"},st={class:"col-3"},at={class:"row mb-2"},ot=e("label",{for:"sampleCategory",class:"col-sm-2 col-form-label red-star"},"樣本種類",-1),lt={class:"col-sm-8"},nt={class:"row mb-2"},ct=e("label",{for:"externalCharge",class:"col-sm-2 col-form-label"},"外界單位收費(產)",-1),it={class:"col-sm-9"},rt={class:"row mb-2"},dt=e("label",{for:"exchangeRate",class:"col-sm-2 col-form-label"},"匯率",-1),mt={class:"col-sm-9"},ut={class:"row mb-2"},vt=e("label",{for:"academicServiceItemFee",class:"col-sm-2 col-form-label red-star"},"學術費用",-1),pt={class:"col-sm-4"},_t={class:"row mb-2"},ht=e("label",{for:"industryServiceItemFee",class:"col-sm-2 col-form-label red-star"},"產業界費用",-1),bt={class:"col-sm-4"},gt={class:"row mb-2"},yt=e("legend",{class:"col-form-label col-sm-2 pt-0 red-star"},"是否允許扣除餘額",-1),ft={class:"col-sm-9"},St={class:"row mb-2"},Ct=e("legend",{class:"col-form-label col-sm-2 pt-0 red-star","red-star":""},"是否可自行填寫金額",-1),It={class:"col-sm-9"},xt={class:"d-flex justify-content-between"},wt=e("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#modalCenter"}," 設定儀器 ",-1),kt={class:"table table-borderless"},Ft={class:"mt-2 d-flex justify-content-between flex-row-reverse"},Bt=["disabled"],Tt={key:0,type:"button",class:"btn btn-danger mx-1","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},At={class:"modal fade",id:"modalCenter",tabindex:"-1","aria-hidden":"true"},Mt={class:"modal-dialog modal-dialog-centered",role:"document"},Nt={class:"modal-content"},Ut=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"modalCenterTitle"},"選擇儀器"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Vt={class:"modal-body"},Lt={class:"input-group my-2"},jt=e("span",{class:"input-group-text",id:"basic-addon1"},"Search",-1),Rt={class:"list-group"},Dt=e("li",{style:{"list-style-type":"none"}},[e("small",{class:"text-danger d-flex justify-content-end"},"最多小數點第二位")],-1),Ot={class:"row"},Pt={class:"col-1"},$t=["onUpdate:modelValue"],qt={class:"col-7"},Et={class:"text-wrap instrumentName"},Yt={class:"col-4"},Ht={class:"input-group input-group-sm input-group-merge"},Kt=["onUpdate:modelValue"],Xt=e("span",{class:"input-group-text"},"%",-1),zt=e("div",{class:"modal-body"},"確定刪除?",-1),Jt=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),ss=Z({__name:"ServiceItemComponent",props:{initialServiceItem:{type:Object,required:!1,default:()=>{}},initialInstruments:{type:Array,required:!1,default:()=>[]}},setup(u){const c=Ie(),n=ke.getInstance(),N=q.getInstance(),i=u;fe(async()=>{var t;(t=i.initialServiceItem)!=null&&t.labType&&(await n.fetchServiceCategoriesByLabType(i.initialServiceItem.labType).then(s=>{p.value=s.map(o=>({id:o.id,name:o.chineseName,value:o.id}))}),await n.fetchServiceSubCategoriesByServiceCategoryId(i.initialServiceItem.serviceCategory).then(s=>{C.value=s.map(o=>({id:o.id,name:o.chineseName,value:o.id}))}),await N.fetchUsersByLabType(i.initialServiceItem.labType).then(s=>{F.value=s.map(o=>({id:o.id,name:o.name,value:o.id}))}))});const{serviceItemCreationFormSchema:U}=Fe(),V=Se().map(t=>({id:t.id,name:t.name,value:t.id})),r=_(""),d=_(!1),p=_([]),C=_([]),G=_(Be()),I=_(i.initialInstruments),F=_([]),B=_(""),E=A(()=>I.value.filter(t=>t.checked).reduce((t,s)=>t+Number(s.percentage),0)),f=A(()=>I.value.filter(t=>t.checked)),ee=A(()=>I.value.filter(t=>B.value?t.name.includes(B.value):!0)),L=A(()=>f.value.length===0?!0:f.value.length!==0&&de()),{handleSubmit:te,values:Y,errors:Qt,defineField:T,resetForm:se}=Ce({validationSchema:U,initialValues:i.initialServiceItem}),[ae]=T("checkServiceSubCategory"),[oe]=T("serviceSubCategory"),[le]=T("labType"),[ne]=T("serviceCategory");z(le,(t,s)=>{t&&t!==s&&ce()}),z(ne,(t,s)=>{t&&t!==s&&(ie(),oe.value=void 0)});const ce=()=>{n.fetchServiceCategoriesAndInstrumentsByLabType(Y.labType).then(t=>{var s;p.value=(s=t[0])==null?void 0:s.map(o=>({id:o.id,name:o.chineseName,value:o.id})),I.value=t[1],F.value=t[2].map(o=>({id:o.id,name:o.name,value:o.id}))}).catch(t=>{p.value.length=0})},ie=()=>{n.fetchServiceSubCategoriesByServiceCategoryId(Y.serviceCategory).then(t=>{C.value=t.map(s=>({id:s.id,name:s.chineseName,value:s.id})),ae.value=t.length!==0}).catch(t=>{C.value.length=0})},re=()=>`比例總和為${E.value}%，少於或超過100%，請重新調整比例`,de=()=>E.value==100,H=te(async t=>{if(L.value)if(i.initialServiceItem)try{const s=await n.updateServiceItem(t,f.value);d.value=!0,r.value=s}catch(s){d.value=!1,r.value=s.message}else try{const s=await n.createServiceItem(t,f.value);d.value=!0,r.value=s,se(),F.value.length=0,I.value.length=0}catch(s){d.value=!1,r.value=s.response.data}}),me=()=>{n.deleteServiceItemById(i.initialServiceItem.id).then(t=>{d.value=!0,c.push({name:"ServiceItemManagement",params:{message:t}})}).catch(t=>{d.value=!1,r.value="刪除失敗"})};return(t,s)=>{var X;const o=b("AppMessage"),j=b("AppSelect"),v=b("AppInput"),ue=b("AppTextarea"),x=b("AppRadio"),K=b("AppCard"),ve=b("router-link");return m(),h(M,null,[r.value?(m(),J(o,{key:0,message:r.value,success:d.value},null,8,["message","success"])):Q("",!0),e("form",{onSubmit:s[0]||(s[0]=(...l)=>y(H)&&y(H)(...l))},[a(K,null,{header:w(()=>[O(" 服務項目 ")]),body:w(()=>[e("div",Ae,[Me,e("div",Ne,[a(j,{id:"labType",name:"labType",options:y(V)},null,8,["options"])])]),e("div",Ue,[Ve,e("div",Le,[a(v,{name:"code"})])]),e("div",je,[Re,e("div",De,[a(v,{name:"name"})])]),e("div",Oe,[Pe,e("div",$e,[a(ue,{name:"note"})])]),e("div",qe,[Ee,e("div",Ye,[e("div",He,[Ke,a(j,{id:"serviceCategory",name:"serviceCategory",options:p.value},null,8,["options"])])]),S(e("div",Xe,[e("div",ze,[Je,a(v,{name:"checkServiceSubCategory",type:"hidden"}),a(j,{id:"serviceSubCategory",name:"serviceSubCategory",options:C.value},null,8,["options"])])],512),[[P,C.value.length]])]),e("div",Qe,[We,e("div",Ze,[a(Te,{name:"owners",options:F.value},null,8,["options"])])]),e("div",Ge,[et,e("div",tt,[a(v,{name:"firstItemUnit"})]),O(" * "),e("div",st,[a(v,{name:"secondItemUnit"})])]),e("div",at,[ot,e("div",lt,[(m(!0),h(M,null,$(G.value,l=>(m(),J(x,{id:l.name,name:"sampleCategory",label:l.description,"checked-value":l.name,key:l},null,8,["id","label","checked-value"]))),128))])]),e("div",nt,[ct,e("div",it,[a(v,{type:"number",min:"0",name:"externalCharge"})])]),e("div",rt,[dt,e("div",mt,[a(v,{type:"number",min:"0",name:"exchangeRate"})])]),e("div",ut,[vt,e("div",pt,[a(v,{type:"number",min:"0",name:"academicServiceItemFee"})])]),e("div",_t,[ht,e("div",bt,[a(v,{type:"number",min:"0",name:"industryServiceItemFee"})])]),e("fieldset",gt,[yt,e("div",ft,[a(x,{id:"deductionFromBalanceY",name:"deductionFromBalance",label:"是","checked-value":!0}),a(x,{id:"deductionFromBalanceN",name:"deductionFromBalance",label:"否","checked-value":!1})])]),e("fieldset",St,[Ct,e("div",It,[a(x,{id:"fillFeeManuallyY",name:"fillFeeManually",label:"是","checked-value":!0}),a(x,{id:"fillFeeManuallyN",name:"fillFeeManually",label:"否","checked-value":!1})])])]),_:1}),a(K,{class:"mt-3"},{header:w(()=>[e("div",xt,[wt,S(e("span",{class:"text-danger"},k(re()),513),[[P,!L.value]])])]),body:w(()=>[S(e("table",kt,[e("tbody",null,[(m(!0),h(M,null,$(f.value,l=>(m(),h("tr",{key:l.id},[e("td",null,k(l.name),1),e("td",null,k(l.percentage)+"%",1)]))),128))])],512),[[P,f.value.length]])]),_:1}),e("div",Ft,[e("button",{type:"submit",class:"btn btn-primary",disabled:!L.value},k(i.initialServiceItem?"更新":"建立"),9,Bt),(X=i.initialServiceItem)!=null&&X.deletable?(m(),h("button",Tt," 刪除 ")):Q("",!0),a(ve,{to:{name:"ServiceItemManagement"},class:"btn btn-outline-secondary"},{default:w(()=>[O("回到服務項目管理")]),_:1})])],32),e("div",At,[e("div",Mt,[e("div",Nt,[Ut,e("div",Vt,[e("div",Lt,[jt,S(e("input",{id:"filter",type:"text",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=l=>B.value=l)},null,512),[[W,B.value]])]),e("ul",Rt,[Dt,(m(!0),h(M,null,$(ee.value,l=>(m(),h("li",{class:"list-group-item instrument",key:l.id},[e("div",Ot,[e("div",Pt,[S(e("input",{type:"checkbox","onUpdate:modelValue":R=>l.checked=R},null,8,$t),[[xe,l.checked]])]),e("div",qt,[e("span",Et,k(l.name),1)]),e("div",Yt,[e("div",Ht,[S(e("input",{type:"number",min:"0",max:"100",step:"0.01",class:"form-control",onblur:"this.value=Number.parseFloat(this.value).toFixed(2);","onUpdate:modelValue":R=>l.percentage=R},null,8,Kt),[[W,l.percentage]]),Xt])])])]))),128))])])])])]),e("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",{class:"modal-dialog"},[e("div",{class:"modal-content"},[zt,e("div",{class:"modal-footer"},[Jt,e("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:me}," 確定 ")])])])])],64)}}});export{ss as _};
