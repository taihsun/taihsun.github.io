var r=Object.defineProperty;var p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var s=(e,t,a)=>(p(e,typeof t!="symbol"?t+"":t,a),a);import{a as c}from"./InstrumentApiImpl-695594c2.js";const n=class n{constructor(t){s(this,"api");this.api=t}static getInstance(){return n.instance||(n.instance=new n(c)),n.instance}async fetchInstrumentById(t){return await this.api.apiFetchInstrumentById(t)}async filterInstruments(t,a){return await this.api.apiFilterInstruments(t,a)}async createInstrument(t){return await this.api.apiCreateInstrument(t)}async updateInstrument(t){return await this.api.apiUpdateInstrument(t)}async deleteInstrumentById(t){return await this.api.apiDeleteInstrumentById(t)}};s(n,"instance");let i=n;export{i as I};
