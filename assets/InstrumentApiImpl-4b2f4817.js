import{s as n,x as s}from"./index-cc3b5264.js";const t=n.create({baseURL:"http://localhost:8080/Ratatouille/api/instrument",headers:s()}),i={apiFetchInstrumentById:async function(e){return await t.get("/fetch",{params:{id:e}})},apiFilterInstruments:async function(e,a){return(await t.get("/filterInstruments",{params:{labType:e,name:a}})).data},apiFetchInstrumentsByLabType:async function(e){return(await t.get(`/fetch/${e}`,{headers:s()})).data},apiCreateInstrument:async function(e){return(await t.post("/create",e,{headers:s()})).data},apiUpdateInstrument:async function(e){return(await t.post("/update",e,{headers:s()})).data},apiDeleteInstrumentById:async function(e){return(await t.delete(`/delete/${e}`,{headers:s()})).data}};export{i as a};
