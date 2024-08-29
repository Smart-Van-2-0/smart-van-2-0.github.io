"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[4367],{1864:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>c,specs_group_name:()=>p,specs_group_path:()=>d,specs_group_pillars:()=>u,toc:()=>h});var t=s(4848),i=s(8453),a=s(4773);const l={title:"Consumption",hide_title:!0,sidebar_position:3},r=void 0,c={id:"specs/energy/consumption",title:"Consumption",description:"\x3c!--",source:"@site/docs/specs/energy/consumption.mdx",sourceDirName:"specs/energy",slug:"/specs/energy/consumption",permalink:"/docs/specs/energy/consumption",draft:!1,unlisted:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/specs/energy/consumption.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Consumption",hide_title:!0,sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Generation",permalink:"/docs/specs/energy/generation"},next:{title:"IoT",permalink:"/docs/category/iot"}},o={},p="Energy Consumption",d="Energy > Consumption",u=[{name:"Current",pillarType:"Range",pillarDir:"State",descr:"Current absorbed by all services in Ampere",min:"0",max:"110",step:"0.1",unit:"Ampere"},{name:"Voltage",pillarType:"Range",pillarDir:"State",descr:"Voltage provided to all services in Volts",min:"0",max:"55",step:"0.1",unit:"Volts"},{name:"Power",pillarType:"Range",pillarDir:"State",descr:"Power absorbed by all services in Watt",min:"0",max:"6050",step:"0.1",unit:"Watts"},{name:"Percentage",pillarType:"Range",pillarDir:"State",descr:"Power absorbed by all services in Percent",min:"0",max:"100",step:"1",unit:"Percent"},{name:"Max Power",pillarType:"Range",pillarDir:"State",descr:"Maximum power absorbed by all services in Watt",min:"0",max:"6050",step:"0.1",unit:"Watt"}],h=[{value:"Specs details",id:"specs-details",level:2}];function x(e){const n={h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Ix,{name:"Energy Consumption"}),"\n",(0,t.jsx)(a.zu,{name:"Energy Consumption",pillars:u,children:(0,t.jsxs)(n.p,{children:["Information about energy consumption. Details are provided for both the ",(0,t.jsx)("b",{children:"\noverall consumption and the consumption of individual services"}),". In this case,\nwhen the consumption of the individual service is not known, then it can be\nestimated."]})}),"\n",(0,t.jsx)(n.p,{children:"The Smart Van Box provides detailed information about the energy consumption of\nyour camper or van. You can get the overall consumption, as well as the\nconsumption of individual services."}),"\n",(0,t.jsx)(n.p,{children:"If the consumption of an individual service is not known, then it can be\nestimated. The Smart Box provides a tool that can help you to do this."}),"\n",(0,t.jsx)(n.h2,{id:"specs-details",children:"Specs details"}),"\n",(0,t.jsx)(a.Co,{name:"Energy Consumption",group_path:"Energy > Consumption",pillars:u})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},7109:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);const t={container:"container_mzDT",h1:"h1_n6cG"};var i=s(4848);function a(e){return(0,i.jsx)("div",{className:t.container,children:(0,i.jsxs)("h1",{className:t.h1,children:[e.section," - ",e.subsection]})})}},4773:(e,n,s)=>{s.d(n,{Co:()=>j,zu:()=>o,Ix:()=>r});s(6540);const t={specs_table:"specs_table_m89V",spec_details:"spec_details_Be0n",spec_details_single:"spec_details_single_XvVy",spec_details_title_path:"spec_details_title_path_XLhA",spec_details_title_type:"spec_details_title_type_zbUO",pillar_table:"pillar_table_Ff6Z"};var i=s(7109),a=s(778),l=s(4848);function r(e){return(0,l.jsx)(i.A,{section:"Specification",subsection:e.name})}function c(e){return(0,l.jsxs)("table",{className:t.specs_table,children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Type"})]}),Object.keys(e.pillars).map(((n,s)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("a",{href:"#"+e.pillars[n].name,children:e.pillars[n].name})}),(0,l.jsxs)("td",{children:[e.pillars[n].pillarType,e.pillars[n].pillarDir]})]},s)))]})}function o(e){return(0,l.jsxs)("div",{className:t.tmpl_container,children:[e.children,(0,l.jsx)(c,{pillars:e.pillars})]})}function p(e){return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.isAction?"Action":"State"}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:e.code})}),(0,l.jsx)("td",{children:e.value?e.value:e.fallback})]})}function d(e){const n=e.pillar;return null==n.unit?(0,l.jsx)("p",{children:"Not defined"}):Array.isArray(n.unit)?(0,l.jsxs)("table",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Value"}),(0,l.jsx)("th",{children:"Key"})]}),Object.keys(n.unit).map(((e,s)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:n.unit[e].key}),(0,l.jsx)("td",{children:n.unit[e].val})]},e)))]}):(0,l.jsx)("p",{children:n.unit})}function u(e){const n=e.pillar;return(0,l.jsx)("p",{children:n.descr})}function h(e){const n=e.pillar;return(0,l.jsxs)("table",{children:[(0,l.jsx)(p,{code:"TRUE",value:n.aliasTrue,fallback:"On"}),(0,l.jsx)(p,{code:"FALSE",value:n.aliasFalse,fallback:"Off"}),"Action"==n.pillarDir?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{isAction:"true",code:"SwitchTrue()",value:n.aliasSwitchTrue,fallback:"Switch On"}),(0,l.jsx)(p,{isAction:"true",code:"SwitchFalse()",value:n.aliasSwitchFalse,fallback:"Switch Off"})]}):null]})}function x(e){const n=e.pillar;return(0,l.jsxs)("table",{children:[(0,l.jsx)(p,{code:"MIN",value:n.min,fallback:"0"}),(0,l.jsx)(p,{code:"MAX",value:n.max,fallback:"100"}),(0,l.jsx)(p,{code:"STEP",value:n.step,fallback:"5"}),"Action"==n.pillarDir?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{isAction:"true",code:"Increase()",value:n.aliasIncrease,fallback:"Increase"}),(0,l.jsx)(p,{isAction:"true",code:"Decrease()",value:n.aliasDecrease,fallback:"Decrease"}),(0,l.jsx)(p,{isAction:"true",code:"SetMin()",value:n.aliasSetMin,fallback:"Set to Min"}),(0,l.jsx)(p,{isAction:"true",code:"SetMax()",value:n.aliasSetMax,fallback:"Set to Max"})]}):null]})}function m(e){const n=e.pillar,s=(0,l.jsx)(u,{pillar:n});let i=null,r=null;switch(n.pillarType){case"Boolean":r=(0,l.jsx)(h,{pillar:n});break;case"Range":i=(0,l.jsx)(d,{pillar:n}),r=(0,l.jsx)(x,{pillar:n});break;default:return(0,l.jsxs)("p",{children:["Unknow ",n.pillarType," type"]})}return(0,l.jsx)(a.A,{sx:{minWidth:"200px",maxWidth:"500px",marginLeft:"16px"},children:(0,l.jsxs)("table",{className:t.pillar_table,children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Description"}),(0,l.jsx)("td",{width:"100%",children:s})]}),i?(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Unit"}),(0,l.jsx)("td",{children:i})]}):null,(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Alias"}),(0,l.jsx)("td",{children:r})]})]})})}function j(e){const n=e.group_path,s=e.pillars;return(0,l.jsx)("div",{className:t.spec_details,children:Object.keys(s).map(((e,i)=>(0,l.jsxs)("div",{className:t.spec_details_single,children:[(0,l.jsx)("a",{class:"anchor",name:s[e].name}),(0,l.jsx)("p",{className:t.spec_details_title_path,children:n}),(0,l.jsxs)("h3",{children:[s[e].name,(0,l.jsxs)("span",{className:t.spec_details_title_type,children:[":\xa0",s[e].pillarType,s[e].pillarDir]})]}),(0,l.jsx)(m,{pillar:s[e]})]},i)))})}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var t=s(6540);const i={},a=t.createContext(i);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);