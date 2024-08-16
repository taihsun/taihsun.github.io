import{a as K,S as Q,g as j}from"./SelectedIhcCommissionedItemPanel-e1d7a662.js";import{d as f,c as y,o as l,f as a,g as e,t as s,F as S,A as k,e as A,C as N,D as b,B as c,a0 as w,aU as z,h as m,a6 as I,w as C,Z as O,$ as M,j as g,N as H,z as Z,n as V,a4 as Y}from"./index-088406c1.js";import{L as W}from"./LocationService-e858122a.js";const G={class:"table table-bordered caption-top"},J=e("caption",null," 細胞植入 ",-1),X=e("td",null,"細胞名稱",-1),x=e("td",null,"細胞來源",-1),ee=e("td",null,"是否會持續產生病毒?",-1),te=f({inheritAttrs:!1,__name:"ExpCaseLivingFomrCellLineInfoPreview",props:{cellLineInfo:{}},setup(u){const t=u,r=y(()=>t.cellLineInfo.cellLineSource.map(n=>{switch(n){case"commercialize":return"商品化";case"humanSpecimen":return"人類檢體";case"novelCellLine":return"自備";case"others":return t.cellLineInfo.otherCellLineSource}}));return(n,o)=>(l(),a("table",G,[J,e("tbody",null,[e("tr",null,[X,e("td",null,s(n.cellLineInfo.cellLineName)+" ("+s(n.cellLineInfo.cellLineType==="human"?"人類":"動物")+") ",1)]),e("tr",null,[x,e("td",null,[(l(!0),a(S,null,k(r.value,i=>(l(),a("span",{class:"badge text-bg-dark mx-1",key:i},s(i),1))),128))])]),e("tr",null,[ee,e("td",null,s(n.cellLineInfo.consistentSheddingVirus==="yes"?"是":"否"),1)])])]))}}),ne={class:"table table-bordered caption-top"},le=e("caption",null," 藥物處理 ",-1),oe=e("td",null,"給予物質名稱",-1),se=e("td",null,"種類",-1),ae=e("td",null,"是否可能具生物危害性",-1),ie=e("td",null,"動物是否有可預期之症狀",-1),re=e("td",null,"是否為病毒載體",-1),ue=f({__name:"ExpCaseLivingFomrMedicationInfoPreview",props:{medicationInfo:{}},setup(u){const t=u,r=y(()=>{switch(t.medicationInfo.compounds){case"pharmaceutical":return"藥物級化合物";case"commercial":return`商品化化合物(${t.medicationInfo.otherCompounds})`;case"novel":return`自行合成試驗物質(${t.medicationInfo.compoundSterile==="sterile"?"無菌":"無法無菌"})`;default:return""}}),n=y(()=>t.medicationInfo.hazardous==="yes"?`是(${t.medicationInfo.hazardousDescription})`:"否"),o=y(()=>t.medicationInfo.anticipatedSymptoms==="yes"?`是(${t.medicationInfo.anticipatedSymptomsDescription})`:"否"),i=y(()=>t.medicationInfo.viralVector==="yes"?`是(${t.medicationInfo.viralVectorDescription})`:"否"),d=y(()=>t.medicationInfo.otherCompoundsFile?w(t.medicationInfo.otherCompoundsFile):void 0);return(h,_)=>{const $=A("AppDownloadLink");return l(),a("table",ne,[le,e("tbody",null,[e("tr",null,[oe,e("td",null,s(h.medicationInfo.administratedSubstance),1)]),e("tr",null,[se,e("td",null,[N(s(r.value)+" ",1),d.value?(l(),b($,{key:0,name:d.value.name,value:d.value.value},null,8,["name","value"])):c("",!0)])]),e("tr",null,[ae,e("td",null,s(n.value),1)]),e("tr",null,[ie,e("td",null,s(o.value),1)]),e("tr",null,[re,e("td",null,s(i.value),1)])])])}}}),ce=e("td",null,"Animal Species",-1),B=f({__name:"AnimalSpeciesPreview",props:{animalSpecies:{},animalSpeciesOther:{}},setup(u){const t=u,r=y(()=>t.animalSpecies==="other"?t.animalSpeciesOther:z(t.animalSpecies));return(n,o)=>(l(),a("tr",null,[ce,e("td",null,s(r.value),1)]))}}),de=e("td",null,"Delivery status",-1),F=f({__name:"DeliveryStatusPreview",props:{deliveryStatus:{}},setup(u){const t=u,r=y(()=>{switch(t.deliveryStatus){case"roomTemperature":return"Room Temperature";case"iceBath":return"Ice Bath";case"dryIceBath":return"Dry Ice Bath";default:return""}});return(n,o)=>(l(),a("tr",null,[de,e("td",null,s(r.value),1)]))}}),me=e("td",null,"Specimen",-1),P=f({__name:"SpecimenPreview",props:{specimens:{}},setup(u){const t=u,r=y(()=>t.specimens.map(n=>{switch(n.item){case"wholeBlood":return`Whole blood * ${n.amount}`;case"serum":return`Serum * ${n.amount}`;case"plasma":return`Plasma * ${n.amount}`;case"otherSpecimen":case"other":return`${n.otherItem} * ${n.amount}`;case"twatc":return"TMC was authorized to collect"}}));return(n,o)=>(l(),a("tr",null,[me,e("td",null,[(l(!0),a(S,null,k(r.value,i=>(l(),a("span",{class:"badge text-bg-dark mx-1",key:i},s(i),1))),128))])]))}}),pe=e("caption",null," Blood chemistry ",-1),he=e("td",null,"檢測項目",-1),_e=f({inheritAttrs:!1,__name:"BloodChemistryFormPriview",props:{bloodChemistry:{}},setup(u){const t=u,r=y(()=>t.bloodChemistry.testItems.filter(n=>n.item));return(n,o)=>(l(),a("table",I({class:"table table-bordered caption-top"},n.$attrs),[pe,e("tbody",null,[m(B,{"animal-species":n.bloodChemistry.animalSpecies,"animal-species-other":n.bloodChemistry.animalSpeciesOther},null,8,["animal-species","animal-species-other"]),m(P,{specimens:n.bloodChemistry.specimen},null,8,["specimens"]),m(F,{"delivery-status":n.bloodChemistry.deliveryStatus},null,8,["delivery-status"]),e("tr",null,[he,e("td",null,[(l(!0),a(S,null,k(r.value,i=>(l(),a("span",{class:"badge text-bg-dark mx-1",key:i.item},s(i.item!=="other"?`${i.item} * ${i.amount}`:`${i.otherItemName} * ${i.amount}`),1))),128))])])])],16))}}),ye=e("caption",null," Complete Blood Count ",-1),fe=f({inheritAttrs:!1,__name:"CompleteBloodCountFormPreview",props:{completeBloodCount:{}},setup(u){return(t,r)=>(l(),a("table",I({class:"table table-bordered caption-top"},t.$attrs),[ye,e("tbody",null,[m(B,{"animal-species":t.completeBloodCount.animalSpecies,"animal-species-other":t.completeBloodCount.animalSpeciesOther},null,8,["animal-species","animal-species-other"]),m(P,{specimens:t.completeBloodCount.specimen},null,8,["specimens"]),m(F,{"delivery-status":t.completeBloodCount.deliveryStatus},null,8,["delivery-status"])])],16))}}),be=e("td",null,"委託項目",-1),ve=e("span",null," * ",-1),ge=e("span",null," * ",-1),$e=e("span",null," = ",-1),q=f({__name:"BloodCommissionedItemPreview",props:{testItems:{default:()=>[]}},setup(u){return(t,r)=>(l(),a("tr",null,[be,e("td",null,[(l(!0),a(S,null,k(t.testItems,n=>(l(),a("div",{class:"badge text-bg-dark mx-1",key:n.itemName},[e("span",null,s(n.itemName),1),ve,e("span",null,s(n.sampleNo),1),ge,e("span",null,s(n.duplicate),1),$e,e("span",null,s(n.sampleNo*n.duplicate),1)]))),128))])]))}}),Se=e("caption",null," ELISA ",-1),ke={key:0},Ie=e("td",null,"備註",-1),Ae=f({__name:"ElisaFormPreview",props:{elisa:{}},setup(u){return(t,r)=>(l(),a("table",I({class:"table table-bordered caption-top"},t.$attrs),[Se,e("tbody",null,[m(B,{"animal-species":t.elisa.animalSpecies,"animal-species-other":t.elisa.animalSpeciesOther},null,8,["animal-species","animal-species-other"]),m(P,{specimens:t.elisa.specimen},null,8,["specimens"]),m(F,{"delivery-status":t.elisa.deliveryStatus},null,8,["delivery-status"]),m(q,{"test-items":t.elisa.testItems},null,8,["test-items"]),t.elisa.note?(l(),a("tr",ke,[Ie,e("td",null,s(t.elisa.note),1)])):c("",!0)])],16))}}),Ce=e("caption",null," Luminex ",-1),we=e("td",null,"備註",-1),Le=f({__name:"LuminexFormPreview",props:{luminex:{}},setup(u){return(t,r)=>(l(),a("table",I({class:"table table-bordered caption-top"},t.$attrs),[Ce,e("tbody",null,[m(B,{"animal-species":t.luminex.animalSpecies,"animal-species-other":t.luminex.animalSpeciesOther},null,8,["animal-species","animal-species-other"]),m(P,{specimens:t.luminex.specimen},null,8,["specimens"]),m(F,{"delivery-status":t.luminex.deliveryStatus},null,8,["delivery-status"]),m(q,{"test-items":t.luminex.testItems},null,8,["test-items"]),e("tr",null,[we,e("td",null,s(t.luminex.note),1)])])],16))}}),Te=e("caption",null," Urine Assay ",-1),Be=e("td",null,"Animal Species",-1),Fe=e("td",null,"Number of Specimen",-1),Pe=f({inheritAttrs:!1,__name:"UrineAssayFormPreview",props:{urineAssay:{}},setup(u){const t=u,r=y(()=>{const n=[];return t.urineAssay.animalSpecies.forEach(o=>{n.push(o==="other"?t.urineAssay.animalSpeciesOther:z(o))}),n});return(n,o)=>(l(),a("table",I({class:"table table-bordered caption-top"},n.$attrs),[Te,e("tbody",null,[e("tr",null,[Be,e("td",null,[(l(!0),a(S,null,k(r.value,i=>(l(),a("span",{class:"badge text-bg-dark mx-1",key:i},s(i),1))),128))])]),m(F,{"delivery-status":n.urineAssay.deliveryStatus},null,8,["delivery-status"]),e("tr",null,[Fe,e("td",null,s(n.urineAssay.noOfSpecies),1)])])],16))}}),De=e("caption",null," Platelet Aggregation ",-1),Ee=e("td",null,"檢測項目",-1),Ne=f({inheritAttrs:!1,__name:"PlateletAggregationFormPreview",props:{plateletAggregation:{}},setup(u){return(t,r)=>(l(),a("table",I({class:"table table-bordered caption-top"},t.$attrs),[De,e("tbody",null,[m(B,{"animal-species":t.plateletAggregation.animalSpecies,"animal-species-other":t.plateletAggregation.animalSpeciesOther},null,8,["animal-species","animal-species-other"]),m(P,{specimens:t.plateletAggregation.specimen},null,8,["specimens"]),e("tr",null,[Ee,e("td",null,[(l(!0),a(S,null,k(t.plateletAggregation.testItems,(n,o)=>(l(),a("span",{class:"badge text-bg-dark mx-1",key:o},s(n.method)+" * "+s(n.drug)+" * "+s(n.amount),1))),128))])])])],16))}}),Oe=e("h5",null,"血液/血清/尿液/組織均質液/其他體液",-1),Me={class:"row"},Re={class:"col-12"},ze={class:"row"},Ke={class:"col-12"},Ve={class:"row"},qe={class:"col-12"},Ue={class:"row"},Qe={class:"col-12 my-1"},je={class:"col-12 my-1"},He={class:"col-12 my-1"},Ze=f({inheritAttrs:!1,__name:"BloodFormPreview",props:{blood:{}},setup(u){return(t,r)=>{const n=A("AppBlock");return l(),b(n,O(M(t.$attrs)),{title:C(()=>[Oe]),content:C(()=>[e("div",Me,[e("div",Re,[t.blood.cbc&&t.blood.inspectionItems.includes("cbc")?(l(),b(fe,{key:0,completeBloodCount:t.blood.cbc},null,8,["completeBloodCount"])):c("",!0)])]),e("div",ze,[e("div",Ke,[t.blood.bloodChemistry&&t.blood.inspectionItems.includes("bloodChemistry")?(l(),b(_e,{key:0,bloodChemistry:t.blood.bloodChemistry},null,8,["bloodChemistry"])):c("",!0)])]),e("div",Ve,[e("div",qe,[t.blood.urineAssay&&t.blood.inspectionItems.includes("urineAssay")?(l(),b(Pe,{key:0,urineAssay:t.blood.urineAssay},null,8,["urineAssay"])):c("",!0)])]),e("div",Ue,[e("div",Qe,[t.blood.elisa&&t.blood.inspectionItems.includes("elisa")?(l(),b(Ae,{key:0,elisa:t.blood.elisa},null,8,["elisa"])):c("",!0)]),e("div",je,[t.blood.luminex&&t.blood.inspectionItems.includes("luminex")?(l(),b(Le,{key:0,luminex:t.blood.luminex},null,8,["luminex"])):c("",!0)]),e("div",He,[t.blood.plateletAggregation&&t.blood.inspectionItems.includes("plateletAggregation")?(l(),b(Ne,{key:0,plateletAggregation:t.blood.plateletAggregation},null,8,["plateletAggregation"])):c("",!0)])])]),_:1},16)}}}),Ye=e("caption",null," 病理切片判讀 ",-1),We=e("td",null,"物種",-1),Ge=e("td",null,"品系",-1),Je=e("td",null,"週齡",-1),Xe=e("td",null,"性別",-1),xe=e("td",null,"檢體描述",-1),et=f({__name:"HistopathologyFormPreview",props:{histopathology:{}},setup(u){return(t,r)=>(l(),a("table",I({class:"table table-bordered caption-top"},t.$attrs),[Ye,e("tbody",null,[e("tr",null,[We,e("td",null,s(t.histopathology.species==="rat"?"大鼠":"小鼠"),1)]),e("tr",null,[Ge,e("td",null,s(t.histopathology.strain),1)]),e("tr",null,[Je,e("td",null,s(t.histopathology.age)+"週",1)]),e("tr",null,[Xe,e("td",null,s(t.histopathology.gender==="male"?"公":"母"),1)]),e("tr",null,[xe,e("td",null,s(t.histopathology.specimenDescription),1)])])],16))}}),tt=e("caption",null," 組織染色 ",-1),nt=e("td",null,"Animal Species",-1),lt=e("td",null,"Tissue Type",-1),ot=e("td",null,"Staining Type",-1),st={key:0,id:"selectedIhcCommissionedItemBlock",class:"my-2"},at=e("h6",null,"IHC委託項目",-1),it={key:1,id:"selectedIfCommissionedItemBlock",class:"my-2"},rt=e("h6",null,"IF委託項目",-1),ut=f({inheritAttrs:!1,__name:"IhcFormPreview",props:{ihc:{}},setup(u){const t=u,r=y(()=>t.ihc.animalSpecies.map(d=>{switch(d){case"other":return t.ihc.animalSpeciesOther;case"radiology":return"影像學";case"mouse":return"Mouse"}}).join(", ")),n=y(()=>t.ihc.staining.map(d=>{switch(d){case"picroSiriusRedStainKit":return`Picro-sirius Red Stain Kit (for collagen) * ${t.ihc.psrskNo}`;case"trichromeStrainKit":return`Trichrome Strain Kit(Modified Masson’s) * ${t.ihc.tskNo}`;case"oilRedOStainKit":return`Oil Red O Stain Kit (for fat /only for frozen tissue section) * ${t.ihc.oroskNo}`;case"alcianBlueStainKit":return`Alcian Blue Stain Kit (for cartilage) * ${t.ihc.abskNo}`;case"tunel":return`Tunel * ${t.ihc.tunelNo}`;case"other":return`${t.ihc.otherStainingInput} * ${t.ihc.otherStainingNo}`}})),o=y(()=>t.ihc.ihcOrganItems?t.ihc.ihcOrganItems.map((d,h)=>({index:h,item:d})):[]),i=y(()=>t.ihc.ifOrganItems?t.ihc.ifOrganItems.map((d,h)=>({index:h,item:d})):[]);return(d,h)=>(l(),a(S,null,[e("table",I({class:"table table-bordered caption-top"},d.$attrs),[tt,e("tbody",null,[e("tr",null,[nt,e("td",null,s(r.value),1)]),e("tr",null,[lt,e("td",null,s(g(z)(d.ihc.tissueType)),1)]),e("tr",null,[ot,e("td",null,[(l(!0),a(S,null,k(n.value,_=>(l(),a("span",{class:"badge text-bg-dark mx-1",key:_},s(_),1))),128))])])])],16),o.value.length?(l(),a("div",st,[at,m(K,{organItems:o.value,deletable:!1},null,8,["organItems"])])):c("",!0),i.value.length?(l(),a("div",it,[rt,m(K,{organItems:i.value,deletable:!1},null,8,["organItems"])])):c("",!0)],64))}}),ct=e("caption",null," 玻片掃描 ",-1),dt=e("td",null,"種類",-1),mt={key:0},pt=e("td",null,"倍率",-1),ht=e("td",null,"數量",-1),_t={key:1},yt=e("td",null,"通道",-1),ft=f({inheritAttrs:!1,__name:"SlideScanningFormPreview",props:{slideScanning:{}},setup(u){return(t,r)=>(l(),a("table",I({class:"table table-bordered caption-top"},t.$attrs),[ct,e("tbody",null,[e("tr",null,[dt,e("td",null,s(t.slideScanning.type),1)]),t.slideScanning.magnification?(l(),a("tr",mt,[pt,e("td",null,s(t.slideScanning.magnification),1)])):c("",!0),e("tr",null,[ht,e("td",null,s(t.slideScanning.quantity),1)]),t.slideScanning.channel?(l(),a("tr",_t,[yt,e("td",null,[(l(!0),a(S,null,k(t.slideScanning.channel,n=>(l(),a("span",{class:"badge text-bg-dark mx-1",key:n},s(n),1))),128))])])):c("",!0)])],16))}}),bt=e("h5",null,"組織切片",-1),vt={class:"row"},gt={class:"col-12"},$t=f({inheritAttrs:!1,__name:"TissueSectionFormPreview",props:{tissueSection:{}},setup(u){const t=u,r=y(()=>t.tissueSection.organs?t.tissueSection.organs.map((n,o)=>({index:o,item:n})):[]);return(n,o)=>{const i=A("AppBlock");return l(),b(i,O(M(n.$attrs)),{title:C(()=>[bt]),content:C(()=>[e("div",vt,[e("div",gt,[m(Q,{organItems:r.value,deletable:!1},null,8,["organItems"])])])]),_:1},16)}}}),St={class:"col-12"},U=f({__name:"PathologicalExperimentPreview",props:{values:{},visible:{type:Boolean,default:!1}},setup(u){const t=u,r=y(()=>{var o;return(o=t.values)!=null&&o.uploadedSampleSheetFile?w(t.values.uploadedSampleSheetFile):void 0}),n=`pathologicalExperiment${H()}`;return(o,i)=>{const d=A("AppDownloadLink"),h=A("AppCard");return o.visible?(l(),b(h,{key:0,id:n},{title:C(()=>[N(" 病理學 ")]),body:C(()=>{var _,$,L,p,R,T,D,v,E;return[e("div",St,[N(" 已上傳檢體編號表: "),r.value?(l(),b(d,{key:0,name:r.value.name,value:r.value.value},null,8,["name","value"])):c("",!0)]),(_=o.values)!=null&&_.blood&&((L=($=o.values)==null?void 0:$.pathologicalExpType)!=null&&L.includes("Blood"))?(l(),b(Ze,{key:0,class:"mt-4",blood:o.values.blood},null,8,["blood"])):c("",!0),(p=o.values)!=null&&p.tissueSection&&((T=(R=o.values)==null?void 0:R.pathologicalExpType)!=null&&T.includes("TissueSection"))?(l(),b($t,{key:1,class:"mt-4",tissueSection:o.values.tissueSection},null,8,["tissueSection"])):c("",!0),(D=o.values)!=null&&D.ihc?(l(),b(ut,{key:2,class:"mt-4",ihc:o.values.ihc},null,8,["ihc"])):c("",!0),(v=o.values)!=null&&v.slideScanning?(l(),b(ft,{key:3,class:"mt-4",slideScanning:o.values.slideScanning},null,8,["slideScanning"])):c("",!0),(E=o.values)!=null&&E.histopathology?(l(),b(et,{key:4,class:"mt-4",histopathology:o.values.histopathology},null,8,["histopathology"])):c("",!0)]}),_:1})):c("",!0)}}}),kt={class:"table table-bordered caption-top"},It=e("thead",{class:"table-dark"},[e("tr",null,[e("td",null,"品系"),e("td",null,"週齡"),e("td",null,"入室隻數"),e("td",null,"送來的籠數"),e("td",null,"實驗籠數"),e("td",null,"是否需要特殊照顧或觀察?")])],-1),At={key:0},Ct={key:1},wt={class:"table table-bordered"},Lt=e("td",null,"委託之PI姓名",-1),Tt=e("td",null,"申請者姓名",-1),Bt=e("td",null,"申請者電話",-1),Ft=e("td",null,"申請者信箱",-1),Pt=e("td",null,"預計運送動物日期",-1),Dt=e("td",null,"預計運送動物時間",-1),Et=e("td",null,"入室前所在地",-1),Nt=e("td",null,"IACUC Number",-1),Ot=e("td",null,"IACUC 到期日",-1),Mt=e("td",null,"所屬機構 IACUC 管理者 E- mail",-1),Rt=e("td",null,"IACUC Protocol",-1),zt=e("td",null,"動物健康監測報告檔",-1),Kt=e("td",null,"飼料",-1),Vt=e("td",null,"飲水",-1),qt=e("td",null,"動物編號",-1),Ut=e("td",null,"標示方式，是否已自行標示",-1),Qt={key:1},jt={key:0},Ht=e("td",null,"Note",-1),Zt={key:1},Yt=e("td",null,"動物單獨飼養",-1),Wt=e("td",null,"是",-1),Gt=[Yt,Wt],Jt={key:2},Xt=e("td",null,"動物單獨飼養",-1),xt=e("td",null,"否",-1),en=[Xt,xt],tn={key:0,class:"row my-1"},nn=f({inheritAttrs:!1,__name:"ExpApplicationStep6LivingFormDisplay",props:{form:{}},async setup(u){let t,r;const n=u,o=W.getInstance(),i=y(()=>{switch(n.form.foodType){case"normal":return"一般飼料";case"special":return`特殊飼料(${n.form.foodTypeDescription})`;case"restricted":return`限制飲食(${n.form.foodTypeDescription})`;default:return""}}),d=y(()=>{switch(n.form.waterType){case"normal":return"一般飼料";case"special":return`特殊飼料(${n.form.waterTypeDescription})`;case"restricted":return`限制飲食(${n.form.waterTypeDescription})`;default:return""}}),h=([t,r]=Z(()=>o.fetchLocationById(n.form.mouseSource)),t=await t,r(),t),_=w(n.form.iacucProtocol),$=n.form.healthMonitoringReport?w(n.form.healthMonitoringReport):void 0,L=n.form.identificationMethod==="Y"?w(n.form.imf):void 0;return(p,R)=>{const T=A("AppDownloadLink"),D=A("AppCard");return l(),a("div",null,[e("table",kt,[e("caption",null,[e("h5",null,"物種: "+s(g(j)(p.form.animalType)),1)]),It,e("tbody",null,[(l(!0),a(S,null,k(p.form.deliveries,(v,E)=>(l(),a("tr",{key:E},[e("td",null,s(v.strain==="ratOther"?v.ratOtherStrain:v.strain==="miceOther"?v.miceOtherStrain:v.strain),1),e("td",null,s(v.age),1),e("td",null,[v.maleQty?(l(),a("span",At,"公: "+s(v.maleQty||0),1)):c("",!0),v.femaleQty?(l(),a("span",Ct,"母: "+s(v.femaleQty||0),1)):c("",!0)]),e("td",null,s(v.sendingCagesQty),1),e("td",null,s(v.expCage),1),e("td",null,s(v.specialExplain),1)]))),128))])]),e("table",wt,[e("tbody",null,[e("tr",null,[Lt,e("td",null,s(p.form.entrustedPi),1)]),e("tr",null,[Tt,e("td",null,s(p.form.contact),1)]),e("tr",null,[Bt,e("td",null,s(p.form.contactTel),1)]),e("tr",null,[Ft,e("td",null,s(p.form.contactEmail),1)]),e("tr",null,[Pt,e("td",null,s(p.form.animalArrivalDate),1)]),e("tr",null,[Dt,e("td",null,s(p.form.animalArrivalTime==="morning"?"上午9:00~12:00":"下午13:30~16:30"),1)]),e("tr",null,[Et,e("td",null,s(g(h).name),1)]),e("tr",null,[Nt,e("td",null,s(p.form.iacucNo),1)]),e("tr",null,[Ot,e("td",null,s(p.form.iacucDate),1)]),e("tr",null,[Mt,e("td",null,s(p.form.iacucEmail),1)]),e("tr",null,[Rt,e("td",null,[g(_)?(l(),b(T,{key:0,name:g(_).name,value:g(_).value},null,8,["name","value"])):c("",!0)])]),e("tr",null,[zt,e("td",null,[g($)?(l(),b(T,{key:0,name:g($).name,value:g($).value},null,8,["name","value"])):c("",!0)])]),e("tr",null,[Kt,e("td",null,s(i.value),1)]),e("tr",null,[Vt,e("td",null,s(d.value),1)]),e("tr",null,[qt,e("td",null,s(p.form.animalNo),1)]),e("tr",null,[Ut,e("td",null,[g(L)?(l(),b(T,{key:0,name:g(L).name,value:g(L).value},null,8,["name","value"])):(l(),a("span",Qt,"否"))])]),p.form.note?(l(),a("tr",jt,[Ht,e("td",null,s(p.form.note),1)])):c("",!0),p.form.alone==="1"?(l(),a("tr",Zt,Gt)):(l(),a("tr",Jt,en))])]),p.form.medicationInfo||p.form.cellLineInfo?(l(),a("div",tn,[m(D,{class:"p-0"},{title:C(()=>[N("實驗資料")]),body:C(()=>[m(ue,{class:"my-1","medication-info":p.form.medicationInfo},null,8,["medication-info"]),p.form.cellLineInfo?(l(),b(te,{key:0,class:"my-1","cell-line-info":p.form.cellLineInfo},null,8,["cell-line-info"])):c("",!0)]),_:1})])):c("",!0),m(U,{class:"my-1",values:p.form,visible:p.form.pathologicalExp==="Y"},null,8,["values","visible"])])}}}),ln=["id"],on={class:"accordion-item"},sn={class:"accordion-header",id:"headingOne"},an=["data-bs-target","aria-controls"],rn={class:"mb-0"},un=["id","data-bs-parent"],cn={class:"accordion-body"},Nn=f({inheritAttrs:!1,__name:"ExpApplicationStep6LivingFormPreview",props:{livingForms:{}},setup(u){const t=()=>{const r=document.getElementsByName("expApplicationStep6LivingFormDisplay");if(r)for(let n of r){n.querySelectorAll("input, textarea, select, a").forEach(h=>{h instanceof HTMLAnchorElement?h.style.display="none":h.disabled=!0});const i=n.querySelectorAll('[name="organSelector"]');i&&i.forEach(h=>{h.style.display="none"});const d=n.querySelectorAll(".app-minus-btn, .app-plus-btn");d&&d.forEach(h=>{h.style.display="none"})}};return(r,n)=>(l(),a("div",O(M(r.$attrs)),[(l(!0),a(S,null,k(r.livingForms,(o,i)=>(l(),a("div",{key:o.id},[e("div",{class:"accordion my-2",id:`slideScanningAccordion${i}`},[e("div",on,[e("h2",sn,[e("button",{class:V(["accordion-button",i===0?"active":"collapsed"]),type:"button","data-bs-toggle":"collapse","data-bs-target":`#collapse${i}`,"aria-expanded":"false","aria-controls":`collapse${i}`,onClick:t},[e("h5",rn,"# "+s(i+1),1)],10,an)]),e("div",{id:`collapse${i}`,class:V(["accordion-collapse collapse",{show:i===0}]),"aria-labelledby":"headingOne","data-bs-parent":`#slideScanningAccordion${i}`},[e("div",cn,[m(nn,{name:"expApplicationStep6LivingFormDisplay",form:o},null,8,["form"])])],10,un)])],8,ln)]))),128))],16))}}),dn={class:"table table-bordered caption-top"},mn=e("td",null,"申請者姓名",-1),pn=e("td",null,"申請者電話",-1),hn=e("td",null,"申請者信箱",-1),_n=e("td",null,"約定的送件日期",-1),yn={key:0,class:"table table-bordered caption-top",id:"radiologyRelated"},fn=e("caption",null," 影像學 ",-1),bn=e("td",null,"樣品數量",-1),vn=e("td",null,"樣品ID",-1),gn=e("td",null,"樣品類型",-1),$n={key:0},Sn=e("td",null,"相關附件上傳",-1),kn=e("td",null,"備註",-1),In={key:1,class:"table table-bordered caption-top",id:"radiologyRelated"},An=e("caption",null," 其他 ",-1),Cn=e("td",null,"樣品數量",-1),wn=e("td",null,"樣品ID",-1),Ln=e("td",null,"樣品類型",-1),Tn={key:0},Bn=e("td",null,"相關附件上傳",-1),Fn=e("td",null,"備註",-1),On=f({inheritAttrs:!1,__name:"ExpApplicationStep6NonLivingFormPreview",props:{form:{}},setup(u){const t=u,r=y(()=>{var o,i;return(i=(o=t.form)==null?void 0:o.radiology)!=null&&i.attachment?w(t.form.radiology.attachment):void 0}),n=y(()=>{var o,i;return(i=(o=t.form)==null?void 0:o.other)!=null&&i.attachment?w(t.form.other.attachment):void 0});return Y(()=>{const o=document.getElementById("nonLivingFormEditingZone");if(o){o.querySelectorAll("input, textarea, select, a").forEach(_=>{_ instanceof HTMLAnchorElement?_.style.display="none":_.disabled=!0});const d=o.querySelectorAll('[name="organSelector"]');d&&d.forEach(_=>{_.style.display="none"});const h=o.querySelectorAll(".app-minus-btn, .app-plus-btn");h&&h.forEach(_=>{_.style.display="none"})}}),(o,i)=>{var h,_,$;const d=A("AppDownloadLink");return l(),a("div",O(M(o.$attrs)),[e("table",dn,[e("tbody",null,[e("tr",null,[mn,e("td",null,s(o.form.contact),1)]),e("tr",null,[pn,e("td",null,s(o.form.contactTel),1)]),e("tr",null,[hn,e("td",null,s(o.form.contactEmail),1)]),e("tr",null,[_n,e("td",null,s(o.form.scheduledDeliveryDate),1)])])]),(h=o.form.experimentType)!=null&&h.includes("radiology")?(l(),a("table",yn,[fn,e("tbody",null,[e("tr",null,[bn,e("td",null,s(o.form.radiology.sampleNumber),1)]),e("tr",null,[vn,e("td",null,s(o.form.radiology.sampleId),1)]),e("tr",null,[gn,e("td",null,s(o.form.radiology.sampleType==="animal"?"動物":o.form.radiology.otherSampleTypeInput),1)]),r.value?(l(),a("tr",$n,[Sn,e("td",null,[m(d,{name:r.value.name,value:r.value.value},null,8,["name","value"])])])):c("",!0),e("tr",null,[kn,e("td",null,s(o.form.radiology.note),1)])])])):c("",!0),(_=o.form.experimentType)!=null&&_.includes("other")?(l(),a("table",In,[An,e("tbody",null,[e("tr",null,[Cn,e("td",null,s(o.form.other.sampleNumber),1)]),e("tr",null,[wn,e("td",null,s(o.form.other.sampleId),1)]),e("tr",null,[Ln,e("td",null,s(o.form.other.sampleType==="animal"?"動物":o.form.other.otherSampleTypeInput),1)]),n.value?(l(),a("tr",Tn,[Bn,e("td",null,[m(d,{name:n.value.name,value:n.value.value},null,8,["name","value"])])])):c("",!0),e("tr",null,[Fn,e("td",null,s(o.form.other.note),1)])])])):c("",!0),m(U,{values:o.form,visible:($=o.form.experimentType)==null?void 0:$.includes("pathology")},null,8,["values","visible"])],16)}}});export{Nn as _,On as a};
