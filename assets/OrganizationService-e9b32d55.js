var c=Object.defineProperty;var p=(a,i,e)=>i in a?c(a,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[i]=e;var n=(a,i,e)=>(p(a,typeof i!="symbol"?i+"":i,e),e);import{Q as l,R as r}from"./index-8fed8339.js";const h={apiFetchOrganizationsExcludingOther:function(){const a=[];return a.push({id:1,name:"其它",isSpecial:!0}),a.push({id:2,name:"ABNOVA",isSpecial:!1}),a.push({id:3,name:"三軍總醫院",isSpecial:!1}),a.push({id:4,name:"中原大學",isSpecial:!1}),a.push({id:5,name:"中國醫藥大學",isSpecial:!1}),a.push({id:6,name:"中國醫藥大學附設醫院",isSpecial:!1}),a.push({id:7,name:"中央研究院",isSpecial:!1}),Promise.resolve(a)},apiFetchOrganizations:function(){const a=[];return a.push({id:1,name:"其它",isSpecial:!0}),a.push({id:2,name:"ABNOVA",isSpecial:!1}),a.push({id:3,name:"三軍總醫院",isSpecial:!1}),a.push({id:4,name:"中原大學",isSpecial:!1}),a.push({id:5,name:"中國醫藥大學",isSpecial:!1}),a.push({id:6,name:"中國醫藥大學附設醫院",isSpecial:!1}),a.push({id:7,name:"中央研究院",isSpecial:!1}),Promise.resolve(a)}},u="http://localhost:8080/<tac_api_url>";l.create({baseURL:u+"/api/organization",headers:r()});const s=class s{constructor(i){n(this,"api");this.api=i}static getInstance(){return s.instance||(s.instance=new s(h)),s.instance}async fetchOrganizationsExcludingOther(){return await this.api.apiFetchOrganizationsExcludingOther()}async fetchOrganizations(){return await this.api.apiFetchOrganizations()}};n(s,"instance");let t=s;export{t as O};
