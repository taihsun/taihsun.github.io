import{d as n,M as r,l as a,o as i,c,a as t,t as d,z as _}from"./index-8fed8339.js";var m=(e=>(e.EXP_CASE="EXP_CASE",e.OTHER="OTHER",e.MOUSE_HOTEL="MOUSE_HOTEL",e))(m||{});const l={key:0,class:"bg-warning-subtle my-2 rounded border border-warning-subtle border-end-0 text-dark p-2"},p={class:"p-2 d-flex flex-column position-static"},u=t("strong",{class:"d-inline-block text-primary-emphasis mb-1"}," 系統訊息 ",-1),E={class:"text-body"},g=n({__name:"SystemNotificationMessage",props:{entityId:{},notificationType:{}},setup(e){const o=e,s=r();return s.readMessage(o.notificationType,o.entityId),(y,b)=>a(s).message?(i(),c("div",l,[t("div",p,[u,t("div",E,d(a(s).message),1)])])):_("",!0)}});export{m as N,g as _};
