import{L as I}from"./LocationService-50134e46.js";import{m as k}from"./LocationSchema-12ca9448.js";import{d as B,r as l,z as C,a as M,e as d,o as _,f as S,D as A,B as V,g as e,j as p,h as b,w as N,C as F,F as j,l as z}from"./index-aa4c4465.js";const D=e("h4",{class:"fw-bold py-3 mb-3"},"修改入室前所在地",-1),E={class:"row"},R={class:"col-xxl"},T={class:"card"},q={class:"card-body"},G={class:"row mb-3"},H=e("label",{for:"name",class:"col-sm-3 col-form-label red-star"},"名稱 ",-1),J={class:"col-sm-4"},K={class:"mt-2 d-flex justify-content-between flex-row-reverse"},O=e("button",{type:"submit",class:"btn btn-primary"},"修改",-1),P=e("button",{type:"button",class:"btn btn-danger mx-1","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," 刪除 ",-1),Q=e("div",{class:"modal-body"},"確定刪除?",-1),U=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),ee=B({__name:"LocationModification",props:{locationId:{}},async setup(v){let n,i;const r=v,c=I.getInstance(),h=z();let m=l();const s=l(""),a=l(!1);try{const t=([n,i]=C(()=>c.fetchLocationById(r.locationId)),n=await n,i(),n);m.value=t}catch(t){a.value=!1,s.value=t.message}const{handleSubmit:f,values:W,errors:X}=M({initialValues:m.value,validationSchema:k}),u=f(async t=>{c.updateLocation(t).then(o=>{console.log("ss"),a.value=!0,s.value=o}).catch(o=>{a.value=!1,s.value="更新失敗"})}),y=()=>{c.deleteLocationById(r.locationId).then(t=>{a.value=!0,h.push({name:"LocationManagement",params:{message:t}})}).catch(t=>{a.value=!1,s.value="刪除失敗"})};return(t,o)=>{const g=d("AppMessage"),x=d("AppInput"),L=d("router-link");return _(),S(j,null,[D,s.value?(_(),A(g,{key:0,message:s.value,success:a.value},null,8,["message","success"])):V("",!0),e("div",E,[e("form",{onSubmit:o[0]||(o[0]=(...w)=>p(u)&&p(u)(...w))},[e("div",R,[e("div",T,[e("div",q,[e("div",G,[H,e("div",J,[b(x,{name:"name"})])])])])]),e("div",K,[O,P,b(L,{to:"/location/management",class:"btn btn-outline-secondary"},{default:N(()=>[F("回入室前所在地管理")]),_:1})])],32)]),e("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",{class:"modal-dialog"},[e("div",{class:"modal-content"},[Q,e("div",{class:"modal-footer"},[U,e("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:y}," 確定 ")])])])])],64)}}});export{ee as default};
