import{aq as B,au as W,at as Y,ax as $,ap as Z,d as ee,r as te,s as oe,e as ce,O as se,g as v,h as u,o as p,c as g,j as o,w as m,a as e,F as D,y as N,l as f,X as H,k as O,v as A,A as C,t as d,I as ne}from"./index-8fed8339.js";import{_ as ae}from"./ExpServiceItemTable.vue_vue_type_script_setup_true_lang-c2c618b4.js";import{M as le}from"./MouseHotelService-231e34c7.js";const re=B().shape({deductionProject:W().required("請選擇扣款專案"),accommodations:Y().of(B().shape({checkInDate:$().required("請填寫入住日期"),checkOutDate:$().required("請填寫出室日期"),cage:Z().required("請填寫籠數").min(1,"籠數最少為1")}))}),T=(r,l)=>{const s=new Date(r),i=new Date(l);if(isNaN(s.getTime())||isNaN(i.getTime()))throw new Error("Invalid date format or nonexistent date");if(s.toISOString().slice(0,10)!==r||i.toISOString().slice(0,10)!==l)throw new Error("Invalid date format or nonexistent date");const k=Math.abs(i.getTime()-s.getTime());return Math.ceil(k/(1e3*60*60*24))},q=(r=0,l=0,s=0)=>Math.ceil(s/7)*7*l*r,E=(r=0,l=0,s=!1)=>s?r*l:0,ie=e("h5",null,"服務項目",-1),de=e("span",{class:"text-danger"},"大鼠和小鼠同時申請嗎？ ",-1),ue=e("h5",null,"Check out",-1),me={class:"row mb-2"},he=e("label",{for:"deductionProject",class:"col-sm-2 col-form-label red-star",title:"預設帶出申請時選擇的扣款計畫"},"扣款計畫",-1),_e={class:"col-8"},ve={class:"row mb-2"},pe=e("div",{class:"col-sm-2 col-form-label red-star"},"實際出入室日期與籠數",-1),ge={class:"col-10"},ke={class:"col-lg-4 col-md-12"},be={class:"col-lg-4 col-md-12"},fe={class:"col-lg-2 col-md-12"},Ie={class:"d-flex flex-row-reverse my-2"},ye={class:"row mb-2"},we=e("label",{for:"deductionProject",class:"col-sm-2 col-form-label red-star"},"入室是否為急件",-1),xe={class:"col-8"},De={class:"row mb-2"},Oe=e("label",{for:"deductionProject",class:"col-sm-2 col-form-label red-star"},"出室是否為急件",-1),Ae={class:"col-8"},Ce=e("h5",null,"預覽動物房費用",-1),Fe=e("div",{class:"row"},[e("div",{class:"col-3"},[e("b",null,"入住日期")]),e("div",{class:"col-3"},[e("b",null,"出室日期")]),e("div",{class:"col-3"},[e("b",null,"籠數")]),e("div",{class:"col-3"},[e("b",null,"金額")])],-1),Me={class:"col-3"},Se={class:"col-3"},Ue={class:"col-3"},je={class:"col-3"},Pe={class:"d-flex flex-row justify-content-end mt-2"},Be={class:"p-0"},$e={class:"d-flex flex-column"},Ne={class:"p-2"},He=e("b",null,"動物房總費用",-1),Te={class:"badge text-bg-info"},qe=e("span",null," + ",-1),Ee={class:"badge text-bg-info"},Ve=e("span",null," + ",-1),Le={class:"badge text-bg-info"},Re={class:"badge text-bg-success"},Xe={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-4"},Qe=ee({__name:"ExpMhCheckOut",props:{mouseHotelId:{}},async setup(r){let l,s;const i=r,k=le.getInstance(),c=te({});[l,s]=oe(()=>k.fetchMhCheckOutInitData(i.mouseHotelId).then(t=>{c.value=t})),await l,s();const{handleSubmit:V,values:F,errors:ze}=ce({initialValues:{deductionProjectId:c.value.deductionProjectId,accommodations:c.value.accommodations,checkInUrgent:c.value.checkInUrgent,checkOutUrgent:c.value.checkInUrgent},validationSchema:re}),{fields:h,push:L,remove:R}=se("accommodations"),M=v(()=>h.value.filter(t=>t.value.checkInDate&&t.value.checkOutDate&&t.value.cage).map(t=>({key:ne(),...t.value,fee:j(t.value.cage,t.value.checkInDate,t.value.checkOutDate)}))),S=v(()=>h.value.reduce((t,n)=>t+n.value.cage,0)),I=v(()=>E(c.value.urgentFee,S.value,F.checkOutUrgent)),y=v(()=>E(c.value.urgentFee,S.value,F.checkInUrgent)),U=v(()=>M.value.reduce((t,n)=>t+q(c.value.item.fee,n.cage,T(n.checkInDate,n.checkOutDate)),0)),X=V(async t=>{await k.updateMhCheckOutResult(i.mouseHotelId,t)}),z=()=>{L({checkInDate:"",checkOutDate:"",cage:0})},G=t=>{R(t)},j=(t,n,_)=>{try{const b=T(n,_);return q(c.value.item.fee,t,b)}catch{return 0}};return(t,n)=>{const _=u("AppCard"),b=u("AppSelect"),w=u("AppLabelInput"),J=u("AppPlusButton"),K=u("AppMinusButton"),P=u("AppCheckbox2"),Q=u("AppConfirmButton");return p(),g(D,null,[o(_,{class:"my-1"},{header:m(()=>[ie]),body:m(()=>[de,o(ae,{items:[c.value.item]},null,8,["items"])]),_:1}),o(_,{class:"my-1"},{header:m(()=>[ue]),body:m(()=>[e("div",me,[he,e("div",_e,[o(b,{name:"deductionProjectId",options:c.value.deductionProjects},null,8,["options"])])]),e("div",ve,[pe,e("div",ge,[(p(!0),g(D,null,N(f(h),(a,x)=>(p(),g("div",{class:"row my-1",key:a.key},[e("div",ke,[o(w,{name:`accommodations[${x}].checkInDate`,type:"date",label:"入住日期"},null,8,["name"])]),e("div",be,[o(w,{name:`accommodations[${x}].checkOutDate`,type:"date",label:"出室日期"},null,8,["name"])]),e("div",fe,[o(w,{name:`accommodations[${x}].cage`,type:"number",label:"籠數"},null,8,["name"])])]))),128)),e("div",Ie,[o(J,{onClick:H(z,["prevent"]),class:"mx-1"}),O(o(K,{onClick:n[0]||(n[0]=H(a=>G(f(h).length-1),["prevent"]))},null,512),[[A,f(h).length>1]])])])]),e("div",ye,[we,e("div",xe,[o(P,{id:"checkInUrgent",name:"checkInUrgent"})])]),e("div",De,[Oe,e("div",Ae,[o(P,{id:"checkOutUrgent",name:"checkOutUrgent"})])])]),_:1}),o(_,null,{header:m(()=>[Ce]),body:m(()=>[Fe,(p(!0),g(D,null,N(M.value,a=>(p(),g("div",{class:"row",key:a.key},[e("div",Me,d(a.checkInDate),1),e("div",Se,d(a.checkOutDate),1),e("div",Ue,d(a.cage)+" 籠",1),e("div",je,d(j(a.cage,a.checkInDate,a.checkOutDate))+" 元",1)]))),128)),e("div",Pe,[e("div",Be,[e("div",$e,[e("div",Ne,[He,C(": "),O(e("span",null,[e("span",Te,"入住急件費用:"+d(y.value)+"元",1),C(),qe],512),[[A,y.value]]),e("span",Ee,"動物房費用: "+d(U.value)+"元",1),O(e("span",null,[Ve,e("span",Le,"出室急件費用:"+d(I.value)+"元",1)],512),[[A,I.value]]),C(" = "),e("span",Re,d(y.value+U.value+I.value)+"元",1)])])])])]),_:1}),e("div",Xe,[o(Q,{text:"確定",handler:f(X)},null,8,["handler"])])],64)}}});export{Qe as default};
