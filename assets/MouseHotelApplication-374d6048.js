var b=Object.defineProperty;var y=(s,e,a)=>e in s?b(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var n=(s,e,a)=>(y(s,typeof e!="symbol"?e+"":e,a),a);import{s as w,x as _,d as v,y as M,a as A,H as C,L as g,e as x,o as H,D as I,w as m,h as F,j as i,g as r}from"./index-a622a1bc.js";import{c as L}from"./MouseHotelDbSimulator-6cd9a27a.js";import{_ as S}from"./LivingForm.vue_vue_type_script_setup_true_lang-95b1dec9.js";import{l as B}from"./formSchema-7b1d3a15.js";import"./SelectedIhcCommissionedItemPanel-c7142da0.js";import"./LocationService-a2e3e2da.js";const R={apiApplyMouseHotel:function(s,e){return L(s,e),Promise.resolve(`TACRH-${Math.floor(Math.random()*1e3)}`)}},k="http://localhost:8080/Ratatouille";w.create({baseURL:k+"/api/mouseHotel",headers:_()});const t=class t{constructor(e){n(this,"api");this.api=e}static getInstance(){return t.instance||(t.instance=new t(R)),t.instance}async applyMouseHotel(e,a){return await this.api.apiApplyMouseHotel(e,a)}};n(t,"instance");let l=t;const T=r("h5",{class:"mb-0"},"填寫動物入室資料",-1),V={class:"mb-2 d-flex justify-content-between flex-row-reverse mt-2"},W=v({__name:"MouseHotelApplication",props:{labType:{}},setup(s){const{toMainWithMessage:e}=M(),{handleSubmit:a,values:u}=A({initialValues:{formSource:"new",deliveries:[{}],showMedicationInfoFrom:!1,showCellLineInfoFrom:!1},validationSchema:B}),f=l.getInstance();C(async()=>{});const c=a(async p=>{await f.applyMouseHotel(g.AIF,p).then(o=>{e(o,"true")}).catch(o=>{e(o.messages,"false")})});return(p,o)=>{const d=x("AppCard");return H(),I(d,null,{header:m(()=>[T]),body:m(()=>[F(S,{"binding-cage-number":!1,"show-cell-line-info-from":!1,"show-medication-info-from":!1,values:i(u)},null,8,["values"]),r("div",V,[r("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=(...h)=>i(c)&&i(c)(...h))},"送出申請")])]),_:1})}}});export{W as default};