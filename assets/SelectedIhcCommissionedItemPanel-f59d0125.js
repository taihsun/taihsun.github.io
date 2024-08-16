import{d as p,r as N,a4 as P,o as i,f as n,g as e,aV as T,t as l,al as v,F as $,A as x,a6 as I,h as u,i as y,v as b,a2 as C,B as k,aj as S,ak as B}from"./index-040fc8c0.js";var R=(s=>(s.MICE="MICE",s.RAT="RAT",s))(R||{});const Fe=s=>{switch(s){case"MICE":return"小鼠";case"RAT":return"大鼠";default:return""}},E={id:"lightText"},M=p({__name:"RedGreenLight",props:{text:{},condition:{type:Boolean,default:!1}},setup(s){const c=s,a=N("");return P(()=>{c.condition?a.value="green":a.value="red"}),(d,o)=>(i(),n("div",null,[e("div",{id:"light",style:T({backgroundColor:a.value})},null,4),e("span",E,l(d.text),1)]))}});const h=v(M,[["__scopeId","data-v-b7cf4f16"]]),w=s=>(S("data-v-e517b610"),s=s(),B(),s),L={class:"flex-container"},V={class:"item",style:{width:"350px"}},G={class:"item flex-container"},D={class:"item"},F={class:"mb-1"},H={class:"item"},j={class:"item"},z={class:"item flex-container"},O={class:"item"},q={class:"item"},J={class:"item"},K={class:"item flex-container"},Q={class:"item"},U={class:"input-group input-group-sm my-1"},W=w(()=>e("span",{class:"input-group-text"},"Blank",-1)),X=["value"],Y={class:"item"},Z={class:"input-group input-group-sm my-1"},ee={class:"input-group-text"},te=["value"],se={key:0,style:{width:"20px",position:"static",transform:"translate(2px, 35%)"}},oe=["onClick"],ie=w(()=>e("i",{class:"bi bi-trash"},null,-1)),ne=[ie],le=p({inheritAttrs:!1,__name:"SelectedTissueSectionCommissionedItemPanel",props:{organItems:{},deletable:{type:Boolean,default:!0}},emits:["removeItem"],setup(s,{emit:c}){const a=c,d=o=>{a("removeItem",o)};return(o,A)=>(i(),n("ul",I({class:"list-group"},o.$attrs),[(i(!0),n($,null,x(o.organItems,(t,r)=>{var m,f,g;return i(),n("li",{class:"list-group-item p-1",key:t.index},[e("div",L,[e("div",V,[e("div",G,[e("div",D,[e("strong",F,"#"+l(r+1)+" "+l(t.item.tissueBlockNumber?"Already have tissue block":t.item.name),1)]),e("div",H,[e("strong",null,"數量: "+l(t.item.tissueBlockNumber?t.item.tissueBlockNumber:t.item.no),1)]),e("div",j,[e("strong",null,"Section type: "+l(t.item.sectionType),1)])]),e("div",z,[e("div",O,[u(h,{condition:(m=t.item.method)==null?void 0:m.includes("tissueTrimming"),text:"修剪"},null,8,["condition"])]),e("div",q,[u(h,{condition:(f=t.item.method)==null?void 0:f.includes("decalcification"),text:"脫鈣"},null,8,["condition"])]),e("div",J,[u(h,{condition:(g=t.item.method)==null?void 0:g.includes("tpae"),text:"包埋"},null,8,["condition"])])]),e("div",K,[e("div",Q,[e("div",U,[W,e("input",{type:"text",class:"form-control",value:t.item.blank,disabled:"true"},null,8,X)])]),e("div",Y,[e("div",Z,[y(e("span",ee,"HE    ",512),[[b,t.item.he]]),y(e("input",{type:"text",class:"form-control",value:t.item.he,disabled:"true"},null,8,te),[[b,t.item.he]])])])])]),o.deletable?(i(),n("div",se,[e("a",{href:"#",class:"link-danger",onClick:C(Ge=>d(r),["prevent"])},ne,8,oe)])):k("",!0)])])}),128))],16))}});const He=v(le,[["__scopeId","data-v-e517b610"]]),_=s=>(S("data-v-25cc2f69"),s=s(),B(),s),ae={class:"flex-container"},ce={class:"item",style:{width:"360px"}},de={class:"item flex-container"},re={class:"item"},_e={class:"text-primary-emphasis"},me={class:"item"},ue={class:"item"},he={class:"item"},pe={class:"item flex-container"},ve={class:"item"},fe={class:"form-floating"},ge=["value"],ye=_(()=>e("label",{for:"organ"},"Organ",-1)),be={class:"item"},$e={class:"form-floating"},xe=["value"],Ie=_(()=>e("label",{for:"host"},"Host",-1)),Ce={class:"item flex-container"},ke={class:"item"},Se={class:"form-floating"},Be=["value"],we=_(()=>e("label",{for:"organ"},"Positive Ctrl",-1)),Ae={class:"item"},Ne={class:"form-floating"},Pe=["value"],Te=_(()=>e("label",{for:"host"},"Negative Ctrl",-1)),Re={key:0,style:{width:"20px",position:"static",transform:"translate(2px, 35%)"}},Ee=["onClick"],Me=_(()=>e("i",{class:"bi bi-trash"},null,-1)),Le=[Me],Ve=p({inheritAttrs:!1,__name:"SelectedIhcCommissionedItemPanel",props:{organItems:{},deletable:{type:Boolean,default:!0}},emits:["removeItem"],setup(s,{emit:c}){const a=c,d=o=>{a("removeItem",o)};return(o,A)=>(i(),n("ul",I({class:"list-group"},o.$attrs),[(i(!0),n($,null,x(o.organItems,(t,r)=>(i(),n("li",{class:"list-group-item p-1",key:t.index},[e("div",ae,[e("div",ce,[e("div",de,[e("div",re,[e("strong",_e,"#"+l(r+1),1)]),e("div",me,[e("b",null,l(t.item.primaryAntibody),1)]),e("div",ue,[e("b",null,l(t.item.secondaryAntibody),1)]),e("div",he,[e("strong",null,"數量:"+l(t.item.no),1)])]),e("div",pe,[e("div",ve,[e("div",fe,[e("input",{type:"text",class:"form-control",id:"organ",value:t.item.organ,disabled:"true"},null,8,ge),ye])]),e("div",be,[e("div",$e,[e("input",{type:"text",class:"form-control",id:"host",value:t.item.host,disabled:"true"},null,8,xe),Ie])])]),e("div",Ce,[e("div",ke,[e("div",Se,[e("input",{type:"text",class:"form-control",id:"organ",value:t.item.positiveCtrl,disabled:"true"},null,8,Be),we])]),e("div",Ae,[e("div",Ne,[e("input",{type:"text",class:"form-control",id:"host",value:t.item.negativeCtrl,disabled:"true"},null,8,Pe),Te])])])]),o.deletable?(i(),n("div",Re,[e("a",{href:"#",class:"link-danger",onClick:C(m=>d(r),["prevent"])},Le,8,Ee)])):k("",!0)])]))),128))],16))}});const je=v(Ve,[["__scopeId","data-v-25cc2f69"]]);export{R as A,He as S,je as a,Fe as g};
