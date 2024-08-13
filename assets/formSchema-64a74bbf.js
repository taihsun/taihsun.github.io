import{ah as r,ai as t,aj as i,ak as o,al as a,am as c,an as h,ao as I,ap as p,aq as s,ar as P,as as l,at as b,au as y,av as v,aw as d,ax as g,ay as u,az as L,aA as B,aB as S,aC as F,aD as x,aE as Q,aF as $,aG as V,aH as A,aI as z}from"./index-501cd1c4.js";const O=r().required().of(t().shape({itemName:i,sampleNo:o,duplicate:o})),w=e=>e!==void 0&&e.includes("pathology"),f=r().of(t().shape({item:a(),amount:a().when("item",{is:e=>e!==void 0&&e!==""&&e!=="twatc",then:e=>o,otherwise:e=>a().notRequired()}),otherItem:c("item","other")})).when((e,n)=>{const q=e[0]?.filter(T=>T.item!==void 0);return q&&q.length===0?n.innerType.fields.item=a().required():n.innerType.fields.item=a(),n}),H=t().shape({animalSpecies:i,animalSpeciesOther:c("animalSpecies","other"),specimen:f,deliveryStatus:i}),K=t().shape({animalSpecies:i,animalSpeciesOther:c("animalSpecies","other"),specimen:f,deliveryStatus:i,testItems:r().of(t().shape({amount:h().when("item",{is:e=>e!==void 0&&e!=="",then:e=>e.concat(o.min(1))}),otherItemName:I("item","other",i)})).when((e,n)=>(e[0].filter(T=>T.item!==void 0).length===0?n.innerType.fields.item=a().required():delete n.innerType.fields.item,n))}),M=t().shape({animalSpecies:p,animalSpeciesOther:c("animalSpecies","other"),deliveryStatus:i,noOfSpecies:o}),Y=t().shape({animalSpecies:i,animalSpeciesOther:c("animalSpecies","other"),specimen:f,deliveryStatus:i,testItems:O}),j=t().shape({animalSpecies:i,animalSpeciesOther:c("animalSpecies","other"),specimen:f,deliveryStatus:i,testItems:O}),G=t().shape({animalSpecies:i,animalSpeciesOther:c("animalSpecies","other"),specimen:f,testItems:r().of(t().shape({method:i,drug:i,amount:o}))}),N=t().shape({inspectionItems:p,cbc:s("inspectionItems","cbc",H),bloodChemistry:s("inspectionItems","bloodChemistry",K),urineAssay:s("inspectionItems","urineAssay",M),luminex:s("inspectionItems","luminex",j),elisa:s("inspectionItems","elisa",Y),plateletAggregation:s("inspectionItems","plateletAggregation",G)}),D=t().shape({organs:r().required().min(1)}),C=t().shape({animalSpecies:p,animalSpeciesOther:c("animalSpecies","other"),tissueType:P,staining:p,psrskNo:l("staining","picroSiriusRedStainKit"),tskNo:l("staining","trichromeStrainKit"),oroskNo:l("staining","oilRedOStainKit"),abskNo:l("staining","alcianBlueStainKit"),tunelNo:l("staining","tunel"),otherStainingInput:c("staining","other"),otherStainingNo:l("staining","other"),ihcOrganItems:b("staining",["ihc"]),ifOrganItems:b("staining",["if"])}),R=t().shape({type:i,magnification:y("type","可見光",i,a()),quantity:v("type",["可見光","螢光"],o,h()),channel:y("type","螢光",p,r())}),k=t().shape({species:i,strain:i,age:o,gender:i,specimenDescription:i,terms:i}),J=t().shape({sampleNumber:o,sampleId:i,sampleType:i,otherSampleTypeInput:a().when("sampleType",{is:"other",then:e=>e.required()})}),U=t().shape({sampleNumber:o,sampleId:i,sampleType:i,otherSampleTypeInput:a().when("sampleType",{is:"other",then:e=>e.required()})}),ae=t().shape({contact:i,contactTel:i,contactEmail:d,scheduledDeliveryDate:g().required(),experimentType:p,radiology:s("experimentType","radiology",J),other:s("experimentType","other",U),uploadedSampleSheetFile:u().when("experimentType",{is:e=>w(e),then:e=>e.required()}),pathologicalExpType:r().when("experimentType",{is:e=>w(e),then:e=>e.of(i).required().min(1)}),blood:s("pathologicalExpType","Blood",N),tissueSection:s("pathologicalExpType","TissueSection",D),ihc:s("pathologicalExpType","ihc",C),slideScanning:s("pathologicalExpType","SlideScanning",R),histopathology:s("pathologicalExpType","Histopathology",k)}),se=u().test("sampleSheetFile","請上傳 CSV 檔",function(e){return e&&L(e)}),re=u().test("sampleSheetFile","請上傳 PDF 檔",function(e){return e&&B(e)}),W=t().shape({organs:p,otherOrganInput:a().when("organs",{is:e=>e!==void 0&&e.includes("Other"),then:e=>e.required()})}),oe=t().shape({organ:i,otherOrganName:y("organ","Other",i,a()),no:o,items:r().of(t().shape({primaryAntibody:i,hostOther:S("host","other")}))}),ce=t().shape({fixativeTime:i,sectionType:i,organs:F("sectionType",r().of(t().shape({tissueBlockNumber:y("haveTissueBlock","yes",i,a()),name:x("haveTissueBlock","yes",i,a()),otherOrgan:y("name","Other",i,a()),no:Q("haveTissueBlock","yes",o,h()),method:x("haveTissueBlock","yes",p,r())})).required(),r()),blank:F("sectionType",i,a()),he:F("sectionType",i,a())}),E=e=>e!==void 0&&(e.includes("IHC")||e.includes("IF"));t().shape({staining:r().test("staining","Staining and Slide Scanning are mutually exclusive, choose one is required.",function(e,n){const{slideScanning:m}=n.parent;return m!==void 0&&m.length!==0||e!==void 0&&e.length!==0}),otherStainingInput:a().when("staining",{is:e=>e!==void 0&&e.includes("other"),then:e=>e.required()}),slideScanning:r().test("slideScanning","Staining and Slide Scanning are mutually exclusive, choose one is required.",function(e,n){const{staining:m}=n.parent;return m!==void 0&&m.length!==0||e!==void 0&&e.length!==0}),primaryAntibody:a().when("staining",{is:E,then:e=>e.required()}),primaryAntibodySpecies:r().when("staining",{is:E,then:e=>e.concat(p)}),otherPrimaryAntibodySpeciesInput:a().when("primaryAntibodySpecies",{is:e=>e!==void 0&&e.includes("other"),then:e=>e.required()}),secondaryAntibody:a().test("secondaryAntibody","Secondary Antibody is required when Primary Antibody is filled.",function(e){const{secondaryAntibodySpecies:n}=this.parent;return!(n!==void 0&&n.length!==0&&!e)}),secondaryAntibodySpecies:r().test("secondaryAntibodySpecies","Secondary Antibody Species is required when Secondary Antibody is filled.",function(e){const{secondaryAntibody:n}=this.parent;return!(n!==void 0&&n!==""&&(!e||e.length===0))}),otherSecondaryAntibodySpeciesInput:a().when("secondaryAntibodySpecies",{is:e=>e!==void 0&&e.includes("other"),then:e=>e.required()})}).concat(W);const X=t().shape({administratedSubstance:i,compounds:i,otherCompounds:c("compounds","commercial"),otherCompoundsFile:$("compounds","commercial"),compoundSterile:c("compounds","novel"),hazardous:i,hazardousDescription:S("hazardous","yes"),anticipatedSymptoms:i,anticipatedSymptomsDescription:S("anticipatedSymptoms","yes"),viralVector:i,viralVectorDescription:S("viralVector","yes")}),Z=t().shape({cellLineName:i,cellLineType:i,cellLineSource:p,otherCellLineSource:c("cellLineSource","others"),consistentSheddingVirus:i}),_=t().shape({description:i,euthanasia:i,organStudy:p,otherOrganStudy:a().when("organStudy",{is:e=>V("other",e),then:e=>e.concat(i)}),terms:i}),ee=r().of(t().shape({strain:i,ratOtherStrain:c("strain","ratOther"),miceOtherStrain:a().when("strain",{is:"miceOther",then:e=>e.required()}),special:a().when("strain",{is:e=>["ratOther","miceOther"].includes(e),then:e=>e.required()}),specialExplain:a().when("special",{is:"Y",then:e=>e.required()}),age:i,maleQty:h().test("maleQty","required",function(e,n){return!(e===void 0||e<=0)|!(n.parent.femaleQty===void 0||n.parent.femaleQty<=0)}),femaleQty:h().test("femaleQty","required",function(e,n){return!(e===void 0||e<=0)|!(n.parent.maleQty===void 0||n.parent.maleQty<=0)}),sendingCagesQty:h().min(1).required(),expCage:h().min(1).required()})),ie=t().shape({entrustedPi:i,contact:i,contactTel:i,contactEmail:d,animalType:i,deliveries:ee,animalArrivalDate:g().required().min(new Date,"Date must be greater than today"),animalArrivalTime:i,mouseSource:i,iacucNo:i,iacucDate:g().required(),iacucEmail:d,iacucProtocol:u().required(),healthMonitoringReport:u().required(),foodType:i,foodTypeDescription:A("foodType","normal"),waterType:i,waterTypeDescription:A("waterType","normal"),animalNo:i,alone:i,medicationInfo:I("showMedicationInfoFrom",!0,X),cellLineInfo:I("showCellLineInfoFrom",!0,Z),pathologicalExp:i,identificationMethod:i,imf:u().when("identificationMethod",{is:"Y",then:e=>e.required()}),pathologicalExpType:r().when("pathologicalExp",{is:"Y",then:e=>e.concat(p)}),blood:s("pathologicalExpType","Blood",N),tissueSection:s("pathologicalExpType","TissueSection",D),ihc:s("pathologicalExpType","ihc",C),slideScanning:s("pathologicalExpType","SlideScanning",R),histopathology:s("pathologicalExpType","Histopathology",k),necropsy:I("necropsyApplication","Y",_)}),te=r().required().of(ie);t().shape({livingForms:te});const pe=t().shape({expDateStart:g().required("必填"),expDateEnd:g().required("必填").when("expDateStart",{is:e=>e!==void 0,then:e=>e.test("is-after-start-exp-date","結束日期早於起始日期",function(n){const m=this.resolve(z("expDateStart"));return m?n&&n>m:!0})}),liaison:o,drugScreening:i,terms:i}),me=t().shape({drugScreening:i}),he=t().shape({piEmail:d,coPiEmail:d,contactEmail:d,contactPhone:i,code:i,name:i,organization:i,department:i,cooperate:i,projectSource:i,deadline:i,executionPeriodFrom:S("deadline","yes"),executionPeriodTo:S("deadline","yes")});export{me as A,pe as T,re as a,oe as i,ie as l,ae as n,he as p,se as s,ce as t};
