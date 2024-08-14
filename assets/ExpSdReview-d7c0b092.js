import{_ as P,a as Q}from"./ExpApplicationStep6NonLivingFormPreview.vue_vue_type_script_setup_true_lang-6410bebe.js";import{d as q,y as H,r as l,z as R,aO as J,a as K,aP as W,aQ as X,e as s,o as a,f as m,h as t,w as c,g as e,t as d,D as y,B as x,F as f,A as B,j as u,C as Y}from"./index-224d4b7d.js";import{U as Z}from"./UserService-90764168.js";import{s as ee}from"./ExpCaseFormSchema-10f5e789.js";import"./SelectedIhcCommissionedItemPanel-07fdbe27.js";import"./LocationService-83028c48.js";import"./ProjectChargeType-415a59f1.js";const ne=e("h4",{class:"fw-bold py-3 mb-4"},"審查實驗申請",-1),te={class:"my-1"},ae={class:"my-1"},oe=e("h5",null,"修改日期/服務項目",-1),le={id:"livingFormSection",class:"mb-4"},ie={key:0,class:"input-group flex-nowrap"},se=e("span",{class:"input-group-text",id:"預計運送動物日期"},"預計運送動物時間",-1),ce={class:"form-control"},re={id:"expServiceItemSection",class:"my-2"},pe={class:"table"},me=e("thead",{class:"table-dark"},[e("tr",null,[e("th",null,"Number"),e("th",null,"Service Item"),e("th",null,"總數"),e("th",null,"備註"),e("th",null,"實驗人員")])],-1),de={id:"section3"},ue={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-2"},ge=q({__name:"ExpSdReview",props:{id:{}},async setup(N){let v,_;const S=N,V=Z.getInstance(),g=H(),r=l(),A=l(),k=l([]),w=l([]),I=l(""),C=l(""),T=l([]),F=l();[v,_]=R(()=>J(S.id).then(n=>{r.value=n.livingForms,A.value=n.nonLivingForm,k.value=n.expServiceItems,I.value=n.period,C.value=n.liaison,F.value=n.labType}).catch(n=>{console.error(n)})),await v,_(),[v,_]=R(()=>V.fetchExpTeamMembers(F.value).then(n=>{n.map(o=>{w.value.push({label:o.title,value:o.id}),T.value.push({id:o.id,name:o.title,value:o.id.toString()})})}).catch(n=>{console.error(n)})),await v,_();const{handleSubmit:$,values:h,errors:ve}=K({initialValues:{expServiceItems:k.value},validationSchema:ee}),D=$(async n=>{n.action==="change"?W(S.id,n.liaison).then(async()=>{await g.toMain()}):X(S.id,n).then(async()=>{await g.toMain()})});return(n,o)=>{const b=s("AppCard"),E=s("AppLabelInput"),p=s("AppRadio"),U=s("AppInputGroup"),j=s("AppSelect2"),G=s("AppSelect"),z=s("AppTextarea");return a(),m(f,null,[ne,t(b,{class:"my-1"},{body:c(()=>[e("div",te,"已安排之實驗日期區間: "+d(I.value),1),e("div",ae,"TAC聯絡窗口/SD: "+d(C.value),1)]),_:1}),t(b,null,{header:c(()=>[e("h5",null,d(r.value?"活體入室申請表":"非活體入室申請表"),1)]),body:c(()=>[r.value?(a(),y(P,{key:0,livingForms:r.value},null,8,["livingForms"])):(a(),y(Q,{key:1,form:A.value},null,8,["form"]))]),_:1}),t(b,{class:"my-1"},{header:c(()=>[oe]),body:c(()=>[e("div",le,[t(E,{name:"arrivalDate",label:r.value?"預計運送動物日期":"約定的送件日期",type:"date"},null,8,["label"]),r.value?(a(),m("div",ie,[se,e("div",ce,[t(p,{id:"animalArrivalTimeMorning",name:"arrivalTime","checked-value":"morning",label:"上午9:00~12:00"}),t(p,{id:"animalArrivalTimeAfternoon",name:"arrivalTime","checked-value":"afternoon",label:"下午13:30~16:30"})])])):x("",!0)]),e("div",re,[e("table",pe,[me,e("tbody",null,[(a(!0),m(f,null,B(u(h).expServiceItems,(i,L)=>(a(),m("tr",{key:i.id},[e("td",null,d(i.code),1),e("td",null,d(i.name),1),e("td",null,[(a(!0),m(f,null,B(i.expServiceItemUnits,(M,O)=>(a(),m("div",{key:M.index},[t(U,{name:`expServiceItems[${L}].expServiceItemUnits[${O}].amount`,label:M.name,type:"number",min:"0"},null,8,["name","label"])]))),128))]),e("td",null,d(i.comment),1),e("td",null,[t(j,{name:`expServiceItems[${L}].expTeamMembers`,options:w.value,multiple:!0},null,8,["name","options"])])]))),128))])])])]),_:1}),t(b,{class:"my-1"},{title:c(()=>[Y(" 核查結果 ")]),body:c(()=>[e("div",de,[t(p,{id:"approve",name:"action","checked-value":"approve",label:"同意"}),t(p,{id:"cancel",name:"action","checked-value":"cancel",label:"取消"}),t(p,{id:"revise",name:"action","checked-value":"revise",label:"修改"}),t(p,{id:"change",name:"action","checked-value":"change",label:"更換SD"}),["change"].includes(u(h).action)?(a(),y(G,{key:0,id:"liaison",name:"liaison",options:T.value,"default-option":!0},null,8,["options"])):x("",!0),["revise","cancel"].includes(u(h).action)?(a(),y(z,{key:1,name:"reason",placeholder:u(h).action==="cancel"?"請填寫取消原因":"請填寫修改建議"},null,8,["placeholder"])):x("",!0)])]),_:1}),e("div",ue,[e("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=(...i)=>u(D)&&u(D)(...i))},"確定")])],64)}}});export{ge as default};
