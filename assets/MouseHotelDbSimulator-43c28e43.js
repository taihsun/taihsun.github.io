import{I as a,J as r}from"./index-224d4b7d.js";var s=(e=>(e.VETERINARY_REVIEW="VETERINARY_REVIEW",e.IN_HOTEL="IN_HOTEL",e.CHECK_OUT="CHECK_OUT",e))(s||{});const E="mouseHotels",o=new r(E),u=async(e,t)=>{const n={id:a(),caseId:`MouseHotelCaseId_${a().toString()}`,labType:e,mouseHotelStage:s.VETERINARY_REVIEW,applicant:"陳xx",form:t,applicationDate:new Date};o.createObject(n)},I=e=>o.getObjects().filter(t=>e.includes(t.mouseHotelStage));export{s as M,u as c,I as f};
