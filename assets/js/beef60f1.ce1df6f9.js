"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[3311],{9583:(e,t,l)=>{l.d(t,{Z:()=>i});var a=l(7294);const n={container:"container_mzDT",h1:"h1_n6cG"};function i(e){return a.createElement("div",{className:n.container},a.createElement("h1",{className:n.h1},e.section," - ",e.subsection))}},2982:(e,t,l)=>{l.d(t,{HS:()=>h,iw:()=>o,US:()=>r});var a=l(7294);const n={specs_table:"specs_table_m89V",spec_details:"spec_details_Be0n",spec_details_single:"spec_details_single_XvVy",spec_details_title_path:"spec_details_title_path_XLhA",spec_details_title_type:"spec_details_title_type_zbUO",pillar_table:"pillar_table_Ff6Z"};var i=l(9583),c=l(8659);function r(e){return a.createElement(i.Z,{section:"Specification",subsection:e.name})}function s(e){return a.createElement("table",{className:n.specs_table},a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type")),Object.keys(e.pillars).map(((t,l)=>a.createElement("tr",{key:l},a.createElement("td",null,a.createElement("a",{href:"#"+e.pillars[t].name},e.pillars[t].name)),a.createElement("td",null,e.pillars[t].pillarType,e.pillars[t].pillarDir)))))}function o(e){return a.createElement("div",{className:n.tmpl_container},e.children,a.createElement(s,{pillars:e.pillars}))}function m(e){return a.createElement("tr",null,a.createElement("td",null,e.isAction?"Action":"State"),a.createElement("td",null,a.createElement("code",null,e.code)),a.createElement("td",null,e.value?e.value:e.fallback))}function p(e){const t=e.pillar;return null==t.unit?a.createElement("p",null,"Not defined"):Array.isArray(t.unit)?a.createElement("table",null,a.createElement("tr",null,a.createElement("th",null,"Value"),a.createElement("th",null,"Key")),Object.keys(t.unit).map(((e,l)=>a.createElement("tr",{key:e},a.createElement("td",null,t.unit[e].key),a.createElement("td",null,t.unit[e].val))))):a.createElement("p",null,t.unit)}function u(e){const t=e.pillar;return a.createElement("p",null,t.descr)}function d(e){const t=e.pillar;return a.createElement("table",null,a.createElement(m,{code:"TRUE",value:t.aliasTrue,fallback:"On"}),a.createElement(m,{code:"FALSE",value:t.aliasFalse,fallback:"Off"}),"Action"==t.pillarDir?a.createElement(a.Fragment,null,a.createElement(m,{isAction:"true",code:"SwitchTrue()",value:t.aliasSwitchTrue,fallback:"Switch On"}),a.createElement(m,{isAction:"true",code:"SwitchFalse()",value:t.aliasSwitchFalse,fallback:"Switch Off"})):null)}function E(e){const t=e.pillar;return a.createElement("table",null,a.createElement(m,{code:"MIN",value:t.min,fallback:"0"}),a.createElement(m,{code:"MAX",value:t.max,fallback:"100"}),a.createElement(m,{code:"STEP",value:t.step,fallback:"5"}),"Action"==t.pillarDir?a.createElement(a.Fragment,null,a.createElement(m,{isAction:"true",code:"Increase()",value:t.aliasIncrease,fallback:"Increase"}),a.createElement(m,{isAction:"true",code:"Decrease()",value:t.aliasDecrease,fallback:"Decrease"}),a.createElement(m,{isAction:"true",code:"SetMin()",value:t.aliasSetMin,fallback:"Set to Min"}),a.createElement(m,{isAction:"true",code:"SetMax()",value:t.aliasSetMax,fallback:"Set to Max"})):null)}function _(e){const t=e.pillar,l=a.createElement(u,{pillar:t});let i=null,r=null;switch(t.pillarType){case"Boolean":r=a.createElement(d,{pillar:t});break;case"Range":i=a.createElement(p,{pillar:t}),r=a.createElement(E,{pillar:t});break;default:return a.createElement("p",null,"Unknow ",t.pillarType," type")}return a.createElement(c.Z,{sx:{minWidth:"200px",maxWidth:"500px",marginLeft:"16px"}},a.createElement("table",{className:n.pillar_table},a.createElement("tr",null,a.createElement("th",null,"Description"),a.createElement("td",{width:"100%"},l)),i?a.createElement("tr",null,a.createElement("th",null,"Unit"),a.createElement("td",null,i)):null,a.createElement("tr",null,a.createElement("th",null,"Alias"),a.createElement("td",null,r))))}function h(e){const t=e.group_path,l=e.pillars;return a.createElement("div",{className:n.spec_details},Object.keys(l).map(((e,i)=>a.createElement("div",{key:i,className:n.spec_details_single},a.createElement("a",{class:"anchor",name:l[e].name}),a.createElement("p",{className:n.spec_details_title_path},t),a.createElement("h3",null,l[e].name,a.createElement("span",{className:n.spec_details_title_type},":\xa0",l[e].pillarType,l[e].pillarDir)),a.createElement(_,{pillar:l[e]})))))}},745:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,specs_group_name:()=>p,specs_group_path:()=>u,specs_group_pillars:()=>d,toc:()=>m});var a=l(3117),n=(l(7294),l(3905)),i=l(2982);const c={title:"Media",hide_title:!0,sidebar_position:4},r=void 0,s={unversionedId:"specs/iot/media",id:"specs/iot/media",title:"Media",description:"\x3c!--",source:"@site/docs/specs/iot/media.mdx",sourceDirName:"specs/iot",slug:"/specs/iot/media",permalink:"/docs/specs/iot/media",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/specs/iot/media.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Media",hide_title:!0,sidebar_position:4},sidebar:"docsSidebar",previous:{title:"AccessPoint",permalink:"/docs/specs/iot/accesspoint"},next:{title:"Monitor",permalink:"/docs/specs/iot/monitor"}},o={},m=[{value:"Specs details",id:"specs-details",level:2}],p="IoT Media",u="IoT > Media",d=[],E={toc:m,specs_group_name:p},_="wrapper";function h(e){let{components:t,...l}=e;return(0,n.kt)(_,(0,a.Z)({},E,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.US,{name:p,mdxType:"SpecificationTitle"}),(0,n.kt)(i.iw,{name:p,pillars:d,mdxType:"SpecificationHeader"},(0,n.kt)("p",null,"The IoT module can integrate a variety of multimedia devices, including\nBluetooth speakers, infotainment systems, and user smartphones and tablets. This\nsection provides information on how to ",(0,n.kt)("b",null,"access and control these media\ndevices"),".")),(0,n.kt)("p",null,"TODO: ToBeDefined"),(0,n.kt)("h2",{id:"specs-details"},"Specs details"),(0,n.kt)(i.HS,{name:p,group_path:u,pillars:d,mdxType:"SpecificationDetails"}))}h.isMDXComponent=!0}}]);