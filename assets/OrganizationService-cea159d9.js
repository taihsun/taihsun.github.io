import{p as i,A as n}from"./index-501cd1c4.js";const s=(await i(()=>import(n+"OrganizationApiImpl"),[],import.meta.url)).default;class t{static instance;api;constructor(a){this.api=a}static getInstance(){return t.instance||(t.instance=new t(s)),t.instance}async fetchOrganizationsExcludingOther(){return await this.api.apiFetchOrganizationsExcludingOther()}async fetchOrganizations(){return await this.api.apiFetchOrganizations()}}export{t as O};
