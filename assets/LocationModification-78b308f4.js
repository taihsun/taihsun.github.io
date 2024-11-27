import{L as S}from"./LocationService-6e2d4a94.js";import{m as k}from"./LocationSchema-6771cdbd.js";import{d as B,r as l,s as M,e as A,h as i,o as _,c as C,B as V,z as N,a as e,l as p,j as b,w as F,A as T,F as j,T as z,p as E}from"./index-668b5f53.js";import"./LocationDbSimulator-4e1c5fba.js";const P=e("h4",{class:"fw-bold py-3 mb-3"},"修改入室前所在地",-1),R={class:"row"},q={class:"col-xxl"},D={class:"card"},G={class:"card-body"},H={class:"row mb-3"},J=e("label",{for:"name",class:"col-sm-3 col-form-label red-star"},"名稱 ",-1),K={class:"col-sm-4"},O={class:"mt-2 d-flex justify-content-between flex-row-reverse"},Q=e("button",{type:"submit",class:"btn btn-primary"},"修改",-1),U=e("button",{type:"button",class:"btn btn-danger mx-1","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," 刪除 ",-1),W=e("div",{class:"modal-body"},"確定刪除?",-1),X=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),oe=B({__name:"LocationModification",props:{locationId:{}},async setup(v){let n,d;const r=v,c=S.getInstance(),h=z.getInstance(),f=E();let m=l();const s=l(""),o=l(!1);try{const t=([n,d]=M(()=>c.fetchLocationById(r.locationId)),n=await n,d(),n);m.value=t}catch(t){o.value=!1,s.value=t.message}const{handleSubmit:y,values:Y,errors:Z}=A({initialValues:m.value,validationSchema:k}),u=y(async t=>{c.updateLocation(t).then(a=>{console.log("ss"),o.value=!0,s.value=a}).catch(a=>{o.value=!1,s.value="更新失敗"})}),g=()=>{c.deleteLocationById(r.locationId).then(t=>{o.value=!0,f.push(h.getLocationManagementPath(t))}).catch(t=>{o.value=!1,s.value="刪除失敗"})};return(t,a)=>{const x=i("AppMessage"),L=i("AppInput"),w=i("router-link");return _(),C(j,null,[P,s.value?(_(),V(x,{key:0,message:s.value,success:o.value},null,8,["message","success"])):N("",!0),e("div",R,[e("form",{onSubmit:a[0]||(a[0]=(...I)=>p(u)&&p(u)(...I))},[e("div",q,[e("div",D,[e("div",G,[e("div",H,[J,e("div",K,[b(L,{name:"name"})])])])])]),e("div",O,[Q,U,b(w,{to:"/location/management",class:"btn btn-outline-secondary"},{default:F(()=>[T("回入室前所在地管理")]),_:1})])],32)]),e("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",{class:"modal-dialog"},[e("div",{class:"modal-content"},[W,e("div",{class:"modal-footer"},[X,e("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:g}," 確定 ")])])])])],64)}}});export{oe as default};
