import{d as h,a as b,r as i,e as a,o as g,f as w,i as x,v as y,h as n,g as e,j as l,w as S,C,F as L}from"./index-aa4c4465.js";import{L as k}from"./LocationService-50134e46.js";import{c as A}from"./LocationSchema-12ca9448.js";const F=e("h4",{class:"fw-bold py-3 mb-4"},"新增入室前所在地",-1),B={class:"row"},I={class:"col-xxl"},N={class:"card mb-4"},V={class:"card-body"},j={class:"row mb-3"},M=e("label",{for:"name",class:"col-sm-3 col-form-label red-star"},"所在地名稱 ",-1),D={class:"col-sm-4"},E={class:"d-flex justify-content-between flex-row-reverse"},T=e("button",{type:"submit",class:"btn btn-primary"},"新增",-1),J=h({__name:"LocationCreation",setup(q){const{handleSubmit:m,resetForm:_}=b({validationSchema:A}),d=k.getInstance(),t=i(""),o=i(!1),c=m(async r=>{d.createLocation(r.name).then(s=>{o.value=!0,t.value=s,_({})}).catch(function(s){o.value=!1,t.value="建立失敗，請再試一次。"})});return(r,s)=>{const u=a("AppMessage"),p=a("AppInput"),v=a("router-link");return g(),w(L,null,[F,x(n(u,{message:t.value,success:o.value},null,8,["message","success"]),[[y,t.value]]),e("div",B,[e("form",{onSubmit:s[0]||(s[0]=(...f)=>l(c)&&l(c)(...f))},[e("div",I,[e("div",N,[e("div",V,[e("div",j,[M,e("div",D,[n(p,{id:"name",name:"name"})])])])])]),e("div",E,[T,n(v,{to:"/location/management",class:"btn btn-outline-primary"},{default:S(()=>[C("回入室前所在地管理")]),_:1})])],32)])],64)}}});export{J as default};
