var p=Object.defineProperty;var c=(t,e,a)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var n=(t,e,a)=>(c(t,typeof e!="symbol"?e+"":e,a),a);import{P as i}from"./ProjectChargeType-415a59f1.js";import{s as d,x as m}from"./index-088406c1.js";const h={apiFetchExpTeamMembers:function(t){const e={id:2,title:"andy",username:"andy@dummy.org",address:"address",phone:"0912111111",projectChargeType:i.ACADEMIC,organization:"xxx",department:"yyy"},a={id:3,title:"bob",username:"bob@dummy.org",address:"address",phone:"0912222222",projectChargeType:i.ACADEMIC,organization:"xxx",department:"yyy"};return Promise.resolve([e,a])},apiUpdateUserProfile:function(t){throw new Error("Function not implemented.")},apiFetchUserProfile:function(){throw new Error("Function not implemented.")},apiChangePassword:function(t,e,a){throw new Error("Function not implemented.")}};d.create({baseURL:"http://localhost:8080/Ratatouille/api/user",headers:m()});const r=class r{constructor(e){n(this,"api");this.api=e}static getInstance(){return r.instance||(r.instance=new r(h)),r.instance}async fetchExpTeamMembers(e){return await this.api.apiFetchExpTeamMembers(e)}async updateUserProfile(e){return await this.api.apiUpdateUserProfile(e)}async fetchUserProfile(){return await this.api.apiFetchUserProfile()}async changePassword(e,a,o){return await this.api.apiChangePassword(e,a,o)}};n(r,"instance");let s=r;export{s as U};
