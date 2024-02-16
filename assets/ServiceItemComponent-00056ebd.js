import{ar as de,o as c,f as i,j as h,a3 as me,k as x,g as e,F as w,s as N,t as g,R as ue,l as pe,u as _e,N as ve,as as he,at as Y,au as be,ag as ye,r as p,$ as M,c as ge,w as H,av as fe,aw as Se,e as v,B as G,x as J,h as a,i as I,z as q,v as $,H as K,ac as Ce,ax as Ie,ay as we,az as xe}from"./index-dfa148fa.js";import{u as ke}from"./FormSchemaStore-a42f2925.js";import{O as y}from"./Option-3450003d.js";const Fe=["value"],Be={__name:"AppSelectUser",props:{name:{type:String,required:!0},options:{type:Array,required:!0,default:()=>[]}},setup(k){const F=k,{value:n,errorMessage:U,handleBlur:V,handleInput:r}=de(()=>F.name,void 0),d={name:F.name,onBlur:V,onInput:r};return(f,u)=>(c(),i("div",null,[h(e("select",ue({multiple:"","onUpdate:modelValue":u[0]||(u[0]=_=>pe(n)?n.value=_:null)},d,{class:["form-select",{"is-invalid":x(U)}]}),[(c(!0),i(w,null,N(k.options,_=>(c(),i("option",{value:_.id,key:_.id},g(_.name),9,Fe))),128))],16),[[me,x(n)]])]))}},Te={class:"row mb-2"},Ae=e("label",{for:"labType",class:"col-sm-2 col-form-label red-star"},"單位 ",-1),Me={class:"col-sm-4"},Ne={class:"row mb-2"},Ue=e("label",{for:"code",class:"col-sm-2 col-form-label red-star"},"Service Item Code ",-1),Ve={class:"col-sm-4"},Re={class:"row mb-2"},Le=e("label",{for:"name",class:"col-sm-2 col-form-label red-star"},"Service Item Name ",-1),je={class:"col-sm-9"},qe={class:"row mb-2"},$e=e("label",{for:"note",class:"col-sm-2 col-form-label"},"Note",-1),De={class:"col-sm-9"},Oe={class:"row mb-2"},Pe=e("label",{for:"type",class:"col-sm-2 col-form-label red-star"},"服務項目類別",-1),ze={class:"col-sm-4",id:"type"},Ee={class:"input-group"},Ye=e("label",{class:"input-group-text",for:"serviceCategory"},"大類",-1),He={class:"col-sm-4"},Ge={class:"input-group"},Je=e("label",{class:"input-group-text",for:"serviceSubCategory"},"小類",-1),Ke={class:"row mb-2"},Qe=e("label",{for:"owner",class:"col-sm-2 col-form-label red-star"},"負責人",-1),We={class:"col-sm-9"},Xe={class:"row mb-2"},Ze=e("label",{for:"firstItemUnit",class:"col-sm-2 col-form-label red-star"},"Sample amount 之單位 ",-1),et={class:"col-3"},tt={class:"col-3"},st={class:"row mb-2"},at=e("label",{for:"sampleCategory",class:"col-sm-2 col-form-label red-star"},"樣本種類",-1),ot={class:"col-sm-8"},lt={class:"row mb-2"},nt=e("label",{for:"externalCharge",class:"col-sm-2 col-form-label"},"外界單位收費(產)",-1),ct={class:"col-sm-9"},it={class:"row mb-2"},rt=e("label",{for:"exchangeRate",class:"col-sm-2 col-form-label"},"匯率",-1),dt={class:"col-sm-9"},mt={class:"row mb-2"},ut=e("label",{for:"academicServiceItemFee",class:"col-sm-2 col-form-label red-star"},"學術費用",-1),pt={class:"col-sm-4"},_t={class:"row mb-2"},vt=e("label",{for:"industryServiceItemFee",class:"col-sm-2 col-form-label red-star"},"產業界費用",-1),ht={class:"col-sm-4"},bt={class:"row mb-2"},yt=e("legend",{class:"col-form-label col-sm-2 pt-0"},"是否允許扣除餘額",-1),gt={class:"col-sm-9"},ft={class:"row mb-2"},St=e("legend",{class:"col-form-label col-sm-2 pt-0"},"是否可自行填寫金額",-1),Ct={class:"col-sm-9"},It={class:"d-flex justify-content-between"},wt=e("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#modalCenter"}," 設定儀器 ",-1),xt={class:"table table-borderless"},kt={class:"mt-2 d-flex justify-content-between flex-row-reverse"},Ft=["disabled"],Bt={key:0,type:"button",class:"btn btn-danger mx-1","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},Tt={class:"modal fade",id:"modalCenter",tabindex:"-1","aria-hidden":"true"},At={class:"modal-dialog modal-dialog-centered",role:"document"},Mt={class:"modal-content"},Nt=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"modalCenterTitle"},"選擇儀器"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ut={class:"modal-body"},Vt={class:"input-group my-2"},Rt=e("span",{class:"input-group-text",id:"basic-addon1"},"Search",-1),Lt={class:"list-group"},jt=e("li",{style:{"list-style-type":"none"}},[e("small",{class:"text-danger d-flex justify-content-end"},"最多小數點第二位")],-1),qt={class:"row"},$t={class:"col-1"},Dt=["onUpdate:modelValue"],Ot={class:"col-7"},Pt={class:"text-wrap instrumentName"},zt={class:"col-4"},Et={class:"input-group input-group-sm input-group-merge"},Yt=["onUpdate:modelValue"],Ht=e("span",{class:"input-group-text"},"%",-1),Gt=e("div",{class:"modal-body"},"確定刪除?",-1),Jt=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),Zt={__name:"ServiceItemComponent",props:{initialServiceItem:{type:Object,required:!1,default:()=>{}},initialInstruments:{type:Array,required:!1,default:()=>[]}},setup(k){const F=_e(),n=k;ve(async()=>{var t;(t=n.initialServiceItem)!=null&&t.labType&&(f.value=await he(n.initialServiceItem.labType).then(s=>s.map(l=>new y(l.id,l.chineseName,l.id))),u.value=await Y(n.initialServiceItem.serviceCategory).then(s=>s.map(l=>new y(l.id,l.chineseName,l.id))),B.value=await be(n.initialServiceItem.labType))});const{serviceItemCreationFormSchema:U}=ke(),V=ye().map(t=>new y(t.id,t.name,t.id)),r=p(""),d=p(!1),f=p([]),u=p([]),_=p(Ie()),S=p(n.initialInstruments),B=p([]),T=p(""),D=M(()=>S.value.filter(t=>t.checked).reduce((t,s)=>t+Number(s.percentage),0)),b=M(()=>S.value.filter(t=>t.checked)),Q=M(()=>S.value.filter(t=>T.value?t.name.includes(T.value):!0)),R=M(()=>b.value.length===0?!0:b.value.length!==0&&ne()),{handleSubmit:W,values:O,errors:Kt,defineField:A,resetForm:X}=ge({validationSchema:U,initialValues:n.initialServiceItem}),[Z]=A("checkServiceSubCategory"),[ee]=A("serviceSubCategory"),[te]=A("labType"),[se]=A("serviceCategory");H(te,(t,s)=>{t&&t!==s&&ae()}),H(se,(t,s)=>{t&&t!==s&&(oe(),ee.value=void 0)});const ae=()=>{we(O.labType).then(t=>{var s;f.value=(s=t[0])==null?void 0:s.map(l=>(console.log(l),new y(l.id,l.chineseName,l.id))),S.value=t[1],B.value=t[2].map(l=>new y(l.id,l.name,l.id))}).catch(t=>{f.value.length=0})},oe=()=>{Y(O.serviceCategory).then(t=>{u.value=t.map(s=>new y(s.id,s.chineseName,s.id)),Z.value=t.length!==0}).catch(t=>{u.value.length=0})},le=()=>`比例總和為${D.value}%，少於或超過100%，請重新調整比例`,ne=()=>D.value==100,P=W(async t=>{if(R.value)if(n.initialServiceItem)try{const s=await Se(t,b.value);d.value=!0,r.value=s}catch(s){d.value=!1,r.value=s.message}else try{const s=await fe(t,b.value);d.value=!0,r.value=s,X(),B.value.length=0,S.value.length=0}catch(s){d.value=!1,r.value=s.message}}),ce=()=>{xe(n.initialServiceItem.id).then(t=>{d.value=!0,F.push({name:"ServiceItemManagement",params:{message:t}})}).catch(t=>{d.value=!1,r.value="刪除失敗"})};return(t,s)=>{var E;const l=v("AppMessage"),L=v("AppSelect"),m=v("AppInput"),ie=v("AppTextarea"),C=v("AppRadio"),z=v("AppCard"),re=v("router-link");return c(),i(w,null,[r.value?(c(),G(l,{key:0,message:r.value,success:d.value},null,8,["message","success"])):J("",!0),e("form",{onSubmit:s[0]||(s[0]=(...o)=>x(P)&&x(P)(...o))},[a(z,null,{header:I(()=>[q(" 服務項目 ")]),body:I(()=>[e("div",Te,[Ae,e("div",Me,[a(L,{id:"labType",name:"labType",options:x(V)},null,8,["options"])])]),e("div",Ne,[Ue,e("div",Ve,[a(m,{name:"code"})])]),e("div",Re,[Le,e("div",je,[a(m,{name:"name"})])]),e("div",qe,[$e,e("div",De,[a(ie,{name:"note"})])]),e("div",Oe,[Pe,e("div",ze,[e("div",Ee,[Ye,a(L,{id:"serviceCategory",name:"serviceCategory",options:f.value},null,8,["options"])])]),h(e("div",He,[e("div",Ge,[Je,a(m,{name:"checkServiceSubCategory",type:"hidden"}),a(L,{id:"serviceSubCategory",name:"serviceSubCategory",options:u.value},null,8,["options"])])],512),[[$,u.value.length]])]),e("div",Ke,[Qe,e("div",We,[a(Be,{name:"owners",options:B.value},null,8,["options"])])]),e("div",Xe,[Ze,e("div",et,[a(m,{name:"firstItemUnit"})]),q(" * "),e("div",tt,[a(m,{name:"secondItemUnit"})])]),e("div",st,[at,e("div",ot,[(c(!0),i(w,null,N(_.value,o=>(c(),G(C,{id:o.name,name:"sampleCategory",label:o.description,"checked-value":o.name,key:o},null,8,["id","label","checked-value"]))),128))])]),e("div",lt,[nt,e("div",ct,[a(m,{type:"number",min:"0",name:"externalCharge"})])]),e("div",it,[rt,e("div",dt,[a(m,{type:"number",min:"0",name:"exchangeRate"})])]),e("div",mt,[ut,e("div",pt,[a(m,{type:"number",min:"0",name:"academicServiceItemFee"})])]),e("div",_t,[vt,e("div",ht,[a(m,{type:"number",min:"0",name:"industryServiceItemFee"})])]),e("fieldset",bt,[yt,e("div",gt,[a(C,{id:"deductionFromBalanceY",name:"deductionFromBalance",label:"是","checked-value":!0}),a(C,{id:"deductionFromBalanceN",name:"deductionFromBalance",label:"否","checked-value":!1})])]),e("fieldset",ft,[St,e("div",Ct,[a(C,{id:"fillFeeManuallyY",name:"fillFeeManually",label:"是","checked-value":!0}),a(C,{id:"fillFeeManuallyN",name:"fillFeeManually",label:"否","checked-value":!1})])])]),_:1}),a(z,{class:"mt-3"},{header:I(()=>[e("div",It,[wt,h(e("span",{class:"text-danger"},g(le()),513),[[$,!R.value]])])]),body:I(()=>[h(e("table",xt,[e("tbody",null,[(c(!0),i(w,null,N(b.value,o=>(c(),i("tr",{key:o.id},[e("td",null,g(o.name),1),e("td",null,g(o.percentage)+"%",1)]))),128))])],512),[[$,b.value.length]])]),_:1}),e("div",kt,[e("button",{type:"submit",class:"btn btn-primary",disabled:!R.value},g(n.initialServiceItem?"更新":"建立"),9,Ft),(E=n.initialServiceItem)!=null&&E.deletable?(c(),i("button",Bt," 刪除 ")):J("",!0),a(re,{to:{name:"ServiceItemManagement"},class:"btn btn-outline-secondary"},{default:I(()=>[q("回到服務項目管理")]),_:1})])],32),e("div",Tt,[e("div",At,[e("div",Mt,[Nt,e("div",Ut,[e("div",Vt,[Rt,h(e("input",{id:"filter",type:"text",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=o=>T.value=o)},null,512),[[K,T.value]])]),e("ul",Lt,[jt,(c(!0),i(w,null,N(Q.value,o=>(c(),i("li",{class:"list-group-item instrument",key:o.id},[e("div",qt,[e("div",$t,[h(e("input",{type:"checkbox","onUpdate:modelValue":j=>o.checked=j},null,8,Dt),[[Ce,o.checked]])]),e("div",Ot,[e("span",Pt,g(o.name),1)]),e("div",zt,[e("div",Et,[h(e("input",{type:"number",min:"0",max:"100",step:"0.01",class:"form-control",onblur:"this.value=Number.parseFloat(this.value).toFixed(2);","onUpdate:modelValue":j=>o.percentage=j},null,8,Yt),[[K,o.percentage]]),Ht])])])]))),128))])])])])]),e("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",{class:"modal-dialog"},[e("div",{class:"modal-content"},[Gt,e("div",{class:"modal-footer"},[Jt,e("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:ce}," 確定 ")])])])])],64)}}};export{Zt as _};
