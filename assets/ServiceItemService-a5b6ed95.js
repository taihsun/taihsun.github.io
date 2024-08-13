import{p as r,A as s}from"./index-501cd1c4.js";import{I as p}from"./InstrumentApi-8a0ec2a1.js";const c=(await r(()=>import(s+"ServiceItemApiImpl"),[],import.meta.url)).default,o=(await r(()=>import(s+"GroupApiImpl"),[],import.meta.url)).default;class a{static instance;api;instrumentApi;groupApi;constructor(e,t,i){this.api=e,this.instrumentApi=t,this.groupApi=i}static getInstance(){return a.instance||(a.instance=new a(c,p,o)),a.instance}async createServiceItem(e,t){return await this.api.apiCreateServiceItem(e,t)}async updateServiceItem(e,t){return await this.api.apiUpdateServiceItem(e,t)}async deleteServiceItemById(e){return await this.api.apiDeleteServiceItemById(e)}async fetchServiceItemById(e){return await this.api.apiFetchServiceItemById(e)}async filterServiceItems(e,t,i){return await this.api.apiFilterServiceItems(e,t,i)}async enableServiceItem(e,t){return await this.api.apiEnableServiceItem(e,t)}async fetchServiceSubCategoriesByServiceCategoryId(e){return await this.api.apiFetchServiceSubCategoriesByServiceCategoryId(e)}async fetchServiceCategoriesByLabType(e){return await this.api.apiFetchServiceCategoriesByLabType(e)}async fetchServiceCategoriesAndInstrumentsByLabType(e){const t=await this.api.apiFetchServiceCategoriesByLabType(e),i=await this.instrumentApi.apiFetchInstrumentsByLabType(e),n=await this.groupApi.apiFetchUsersByLabType(e);return[t,i,n]}}export{o as G,a as S};
