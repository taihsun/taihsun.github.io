import{d as h,r as C,h as u,o as w,c as x,j as o,w as a,A as n,a as e,X as l,l as v,F as y,K as b,am as d}from"./index-8fed8339.js";import{_ as g}from"./ExpServiceItemTable.vue_vue_type_script_setup_true_lang-c2c618b4.js";const k=e("span",{class:"text-danger"}," (小鼠診所使用者必填)",-1),A=e("li",null,"列印『使用同意證明單』四份以及『實驗室使用合約書』兩份並且簽名",-1),I={style:{"font-size":"medium",color:"red"}},B=e("b",null,"付款→",-1),E=["href"],N=e("li",null,"寄回 『115台北市南港區研究院路一段130巷99號 國家生技研究園區A棟7樓A788 台灣動物設施聯盟』 收",-1),j=h({__name:"ExpGeneratingConsentCertificate",props:{expCaseId:{}},setup(p){const c=p,s=b.getInstance(),_="https://tac.biotrec.sinica.edu.tw/tac_pay.html",r=C([]);s.fetchConsentCertificateData(c.expCaseId).then(t=>{r.value=t});const f=async()=>{s.downloadConsentCertificate(c.expCaseId).then(t=>{d("consent_certificate.pdf",t)})},m=async()=>{await s.downloadTmcContract().then(t=>{d("consent_certificate.pdf",t)})};return(t,T)=>{const i=u("AppCard");return w(),x(y,null,[o(i,{class:"mb-2"},{header:a(()=>[n(" 申請內容已完成核對，請依下列步驟填寫同意證明單、合約書和繳納費用 ")]),body:a(()=>[e("ol",null,[e("li",null,[n("請下載『 "),e("a",{href:"#",onClick:l(f,["prevent"])},"使用同意證明單"),n("』和『 "),e("a",{href:"#",onClick:l(m,["prevent"])},"台灣小鼠診所實驗室使用合約書"),n("』 "),k]),A,e("li",I,[B,e("a",{href:v(_),target:"_new"},"前往瞭解付費流程",8,E)]),N])]),_:1}),o(i,{class:"mb-2"},{header:a(()=>[n(" 服務項目細節 ")]),body:a(()=>[o(g,{items:r.value},null,8,["items"])]),_:1})],64)}}});export{j as default};
