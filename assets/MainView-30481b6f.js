import{d as f,r as y,s as k,x as w,h,o as t,c as a,j as b,a as e,F as d,y as u,z as A,T as C,n as g,A as T,t as o,w as V,l as x}from"./index-bda4bfce.js";const B=e("h4",{class:"fw-bold py-3 mb-4"},"待辦事項",-1),M={key:0,class:"nav-align-top mb-4"},N={class:"nav nav-pills mb-3 nav-fill",role:"tablist"},D=["data-bs-target"],I={class:"badge rounded-pill badge-center h-px-20 w-px-20 bg-danger"},z={class:"tab-content"},F=["id"],L={class:"table-responsive"},S={class:"table table-borderless table-hover"},$=e("thead",null,[e("tr",null,[e("th",null,"Case ID"),e("th",null,"實驗單位"),e("th",null,"申請人"),e("th",null,"建立日期"),e("th")])],-1),j=e("i",{class:"bi bi-pencil-square"},null,-1),G=f({__name:"MainView",props:{message:{default:""},flag:{type:Boolean,default:!1}},async setup(q){let _,p;const i=C.getInstance(),r=y([]);return[_,p]=k(()=>i.fetchTodoListArray().then(n=>{r.value=n})),await _,p(),w(async()=>{await i.fetchTodoListArray().then(n=>{r.value=n})}),(n,E)=>{const v=h("AppMessage"),m=h("router-link");return t(),a(d,null,[B,b(v,{message:n.message,success:n.flag},null,8,["message","success"]),r.value.length?(t(),a("div",M,[e("ul",N,[(t(!0),a(d,null,u(r.value,(l,c)=>(t(),a("li",{class:"nav-item",key:l.name},[e("button",{type:"button",class:g(c===0?"nav-link active":"nav-link"),role:"tab","data-bs-toggle":"tab","data-bs-target":`#todolist${c}`},[T(o(l.name)+" ",1),e("span",I,o(l.items.length),1)],10,D)]))),128))]),e("div",z,[(t(!0),a(d,null,u(r.value,(l,c)=>(t(),a("div",{class:g(c===0?"tab-pane fade show active":"tab-pane fade"),id:`todolist${c}`,role:"tabpanel",key:l.name},[e("div",L,[e("table",S,[$,e("tbody",null,[(t(!0),a(d,null,u(l.items,s=>(t(),a("tr",{key:s.id},[e("td",null,o(s.caseId),1),e("td",null,o(s.labType),1),e("td",null,o(s.applicant),1),e("td",null,o(s.creationDate),1),e("td",null,[b(m,{class:"dropdown-item",to:x(i).getRoute(s.id,s.stage)},{default:V(()=>[j]),_:2},1032,["to"])])]))),128))])])])],10,F))),128))])])):A("",!0)],64)}}});export{G as default};
