import{d as p,r as N,x as T,o as i,c as n,a as e,ao as A,t as l,ad as v,F as $,y as x,a3 as I,j as u,k as b,v as y,X as k,z as C,ai as S,aj as B}from"./index-668b5f53.js";const L={id:"lightText"},G=p({__name:"RedGreenLight",props:{text:{},condition:{type:Boolean,default:!1}},setup(o){const c=o,a=N("");return T(()=>{c.condition?a.value="green":a.value="red"}),(d,s)=>(i(),n("div",null,[e("div",{id:"light",style:A({backgroundColor:a.value})},null,4),e("span",L,l(d.text),1)]))}});const h=v(G,[["__scopeId","data-v-b7cf4f16"]]),w=o=>(S("data-v-b6e626fb"),o=o(),B(),o),R={class:"flex-container"},V={class:"item",style:{width:"350px"}},j={class:"item flex-container"},z={class:"item"},D={class:"mb-1"},E={class:"item"},F={class:"item"},H={class:"item flex-container"},M={class:"item"},O={class:"item"},X={class:"item"},q={class:"item flex-container"},J={class:"item"},K={class:"input-group input-group-sm my-1"},Q=w(()=>e("span",{class:"input-group-text"},"Blank",-1)),U=["value"],W={class:"item"},Y={class:"input-group input-group-sm my-1"},Z={class:"input-group-text"},ee=["value"],te={key:0,style:{width:"20px",position:"static",transform:"translate(2px, 35%)"}},se=["onClick"],oe=w(()=>e("i",{class:"bi bi-trash"},null,-1)),ie=[oe],ne=p({inheritAttrs:!1,__name:"SelectedTissueSectionCommissionedItemPanel",props:{organItems:{},deletable:{type:Boolean,default:!0}},emits:["removeItem"],setup(o,{emit:c}){const a=c,d=s=>{a("removeItem",s)};return(s,P)=>(i(),n("ul",I({class:"list-group"},s.$attrs),[(i(!0),n($,null,x(s.organItems,(t,_)=>{var m,f,g;return i(),n("li",{class:"list-group-item p-1",key:t.index},[e("div",R,[e("div",V,[e("div",j,[e("div",z,[e("strong",D,"#"+l(_+1)+" "+l(t.item.tissueBlockNumber?"Already have tissue block":t.item.name),1)]),e("div",E,[e("strong",null,"數量: "+l(t.item.tissueBlockNumber?t.item.tissueBlockNumber:t.item.no),1)]),e("div",F,[e("strong",null,"Section type: "+l(t.item.sectionType),1)])]),e("div",H,[e("div",M,[u(h,{condition:(m=t.item.method)==null?void 0:m.includes("tissueTrimming"),text:"修剪"},null,8,["condition"])]),e("div",O,[u(h,{condition:(f=t.item.method)==null?void 0:f.includes("decalcification"),text:"脫鈣"},null,8,["condition"])]),e("div",X,[u(h,{condition:(g=t.item.method)==null?void 0:g.includes("tpae"),text:"包埋"},null,8,["condition"])])]),e("div",q,[e("div",J,[e("div",K,[Q,e("input",{type:"text",class:"form-control",value:t.item.blank,disabled:"true"},null,8,U)])]),e("div",W,[e("div",Y,[b(e("span",Z,"HE    ",512),[[y,t.item.he]]),b(e("input",{type:"text",class:"form-control",value:t.item.he,disabled:"true"},null,8,ee),[[y,t.item.he]])])])])]),s.deletable?(i(),n("div",te,[e("a",{href:"#",class:"link-danger",onClick:k(je=>d(_),["prevent"])},ie,8,se)])):C("",!0)])])}),128))],16))}});const De=v(ne,[["__scopeId","data-v-b6e626fb"]]),r=o=>(S("data-v-ba25c0a2"),o=o(),B(),o),le={class:"flex-container"},ae={class:"item",style:{width:"360px"}},ce={class:"item flex-container"},de={class:"item"},_e={class:"text-primary-emphasis"},re={class:"item"},me={class:"item"},ue={class:"item"},he={class:"item flex-container"},pe={class:"item"},ve={class:"form-floating"},fe=["value"],ge=r(()=>e("label",{for:"organ"},"Organ",-1)),be={class:"item"},ye={class:"form-floating"},$e=["value"],xe=r(()=>e("label",{for:"host"},"Host",-1)),Ie={class:"item flex-container"},ke={class:"item"},Ce={class:"form-floating"},Se=["value"],Be=r(()=>e("label",{for:"organ"},"Positive Ctrl",-1)),we={class:"item"},Pe={class:"form-floating"},Ne=["value"],Te=r(()=>e("label",{for:"host"},"Negative Ctrl",-1)),Ae={key:0,style:{width:"20px",position:"static",transform:"translate(2px, 35%)"}},Le=["onClick"],Ge=r(()=>e("i",{class:"bi bi-trash"},null,-1)),Re=[Ge],Ve=p({inheritAttrs:!1,__name:"SelectedIhcCommissionedItemPanel",props:{organItems:{},deletable:{type:Boolean,default:!0}},emits:["removeItem"],setup(o,{emit:c}){const a=c,d=s=>{a("removeItem",s)};return(s,P)=>(i(),n("ul",I({class:"list-group"},s.$attrs),[(i(!0),n($,null,x(s.organItems,(t,_)=>(i(),n("li",{class:"list-group-item p-1",key:t.index},[e("div",le,[e("div",ae,[e("div",ce,[e("div",de,[e("strong",_e,"#"+l(_+1),1)]),e("div",re,[e("b",null,l(t.item.primaryAntibody),1)]),e("div",me,[e("b",null,l(t.item.secondaryAntibody),1)]),e("div",ue,[e("strong",null,"數量:"+l(t.item.no),1)])]),e("div",he,[e("div",pe,[e("div",ve,[e("input",{type:"text",class:"form-control",id:"organ",value:t.item.organ,disabled:"true"},null,8,fe),ge])]),e("div",be,[e("div",ye,[e("input",{type:"text",class:"form-control",id:"host",value:t.item.host,disabled:"true"},null,8,$e),xe])])]),e("div",Ie,[e("div",ke,[e("div",Ce,[e("input",{type:"text",class:"form-control",id:"organ",value:t.item.positiveCtrl,disabled:"true"},null,8,Se),Be])]),e("div",we,[e("div",Pe,[e("input",{type:"text",class:"form-control",id:"host",value:t.item.negativeCtrl,disabled:"true"},null,8,Ne),Te])])])]),s.deletable?(i(),n("div",Ae,[e("a",{href:"#",class:"link-danger",onClick:k(m=>d(_),["prevent"])},Re,8,Le)])):C("",!0)])]))),128))],16))}});const Ee=v(Ve,[["__scopeId","data-v-ba25c0a2"]]);export{De as S,Ee as a};
