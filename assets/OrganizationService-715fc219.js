var e=Object.defineProperty;var c=(i,t,n)=>t in i?e(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var s=(i,t,n)=>(c(i,typeof t!="symbol"?t+"":t,n),n);import{p as o,A as p}from"./index-72e9df21.js";const h=(await o(()=>import(p+"OrganizationApiImpl"),[],import.meta.url)).default,a=class a{constructor(t){s(this,"api");this.api=t}static getInstance(){return a.instance||(a.instance=new a(h)),a.instance}async fetchOrganizationsExcludingOther(){return await this.api.apiFetchOrganizationsExcludingOther()}async fetchOrganizations(){return await this.api.apiFetchOrganizations()}};s(a,"instance");let r=a;export{r as O};
