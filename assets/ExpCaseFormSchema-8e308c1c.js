import{ap as u,aq as a,ar as n,as as o,at as s,au as t,a1 as c,av as p,aw as m,ax as E}from"./index-668b5f53.js";import{p as d}from"./formSchema-b94cdea0.js";var r=(e=>(e.APPROVE="APPROVE",e.REVOKE="REVOKE",e.REVISE="REVISE",e.REPLACE_SD="REPLACE_SD",e))(r||{}),h=(e=>(e.APPROVE="APPROVE",e.REVISE="REVISE",e.REVOKE="REVOKE",e))(h||{});const S=u().required().min(1),P=a().shape({action:n,reason:o("action",[h.REVISE,h.REVOKE])}),V=a().shape({expServiceItems:s().when("status",{is:e=>e===r.APPROVE,then:()=>s().of(a().shape({expServiceItemUnits:s().of(a().shape({amount:S})),expTeamMembers:s().required().min(1)}))}),scheduledDeliveryDate:t().when(["sampleCategory","status"],{is:(e,i)=>e===c.NON_LIVING&&i===r.APPROVE,then:()=>t().required("Scheduled Delivery Date is required"),otherwise:()=>t()}),arrivalDate:t().when(["sampleCategory","status"],{is:(e,i)=>e===c.LIVING&&i===r.APPROVE,then:()=>t().required("Arrival Date is required"),otherwise:()=>t()}),arrivalTime:t().when(["sampleCategory","status"],{is:(e,i)=>e===c.LIVING&&i===r.APPROVE,then:()=>t().required("Arrival Time is required"),otherwise:()=>t()}),status:n,reason:o("status",[r.REVISE,r.REVOKE]),liaison:p("status",r.REPLACE_SD)}),l=a().shape({waitingToStartItems:s().of(a().shape({receivedUnits:s().when("started",{is:e=>e,then:()=>s().of(a().shape({amount:m}))})}))}),q=a().shape({waitingToCompleteItems:s().of(a().shape({completedUnits:s().when("completed",{is:e=>e===!0,then:()=>s().of(a().shape({amount:m}))})}))}),v=a().shape({project:a().when("deductionProjectType",{is:e=>e==="new",then:()=>d,otherwise:()=>a()}),deductionProject:t().when("deductionProjectType",{is:e=>e==="deduction",then:()=>n})}),w=a().shape({status:n,recieptNoFirst:o("status",["Approved"]),recieptNoSecond:o("status",["Approved"]),reason:o("status",["Revoked"])}),O=a().shape({checkInDate:E().required("實際入住日期為必填"),cage:u().required("實際入室籠數為必填").min(1,"實際入室籠數最少為1籠")});export{r as S,h as V,V as a,l as b,w as c,O as m,v as s,P as v,q as w};
