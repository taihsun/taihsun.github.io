var m=Object.defineProperty;var u=(i,e,t)=>e in i?m(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var n=(i,e,t)=>(u(i,typeof e!="symbol"?e+"":e,t),t);import{Q as c,R as s,b0 as h}from"./index-bda4bfce.js";import{a as y}from"./InstrumentApiImpl-4615dd5c.js";c.create({baseURL:"http://localhost:8080/<tac_api_url>/api/serviceItem",headers:s()});const I={apiDeleteServiceItemById:function(i){throw new Error("Function not implemented.")},apiFetchServiceItemById:function(i){throw new Error("Function not implemented.")},apiEnableServiceItem:function(i,e){throw new Error("Function not implemented.")},apiFilterServiceItems:function(i,e,t){throw new Error("Function not implemented.")},apiCreateServiceItem:function(i,e){throw new Error("Function not implemented.")},apiUpdateServiceItem:function(i,e){throw new Error("Function not implemented.")}},d="http://localhost:8080/<tac_api_url>";c.create({baseURL:d+"/api/serviceItem",headers:s()});const l="http://localhost:8080/<tac_api_url>",v=c.create({baseURL:l+"/api/group",headers:s()}),w={apiFetchUsersByLabType:async function(i){const e=await v.get("/fetchUsers",{params:{labType:i},headers:s()}),t=[];return e.data.forEach(a=>{t.push(h(a,"title","name"))}),Promise.resolve(t)}},r=class r{constructor(e,t,a){n(this,"api");n(this,"instrumentApi");n(this,"groupApi");this.api=e,this.instrumentApi=t,this.groupApi=a}static getInstance(){return r.instance||(r.instance=new r(I,y,w)),r.instance}async createServiceItem(e,t){return await this.api.apiCreateServiceItem(e,t)}async updateServiceItem(e,t){return await this.api.apiUpdateServiceItem(e,t)}async deleteServiceItemById(e){return await this.api.apiDeleteServiceItemById(e)}async fetchServiceItemById(e){return await this.api.apiFetchServiceItemById(e)}async filterServiceItems(e,t,a){return await this.api.apiFilterServiceItems(e,t,a)}async enableServiceItem(e,t){return await this.api.apiEnableServiceItem(e,t)}async fetchServiceSubCategoriesByServiceCategoryId(e){return await this.api.apiFetchServiceSubCategoriesByServiceCategoryId(e)}async fetchServiceCategoriesByLabType(e){return await this.api.apiFetchServiceCategoriesByLabType(e)}async fetchServiceCategoriesAndInstrumentsByLabType(e){const t=await this.api.apiFetchServiceCategoriesByLabType(e),a=await this.instrumentApi.apiFetchInstrumentsByLabType(e),p=await this.groupApi.apiFetchUsersByLabType(e);return[t,a,p]}};n(r,"instance");let o=r;export{o as S,w as a};
