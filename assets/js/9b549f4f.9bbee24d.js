"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[8578],{135:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>c,specs_group_name:()=>d,specs_group_path:()=>p,specs_group_pillars:()=>u,toc:()=>h});var i=n(4848),t=n(8453),a=n(4773);const l={title:"Living",hide_title:!0,sidebar_position:1},r=void 0,c={id:"specs/sensors/living",title:"Living",description:"\x3c!--",source:"@site/docs/specs/sensors/living.mdx",sourceDirName:"specs/sensors",slug:"/specs/sensors/living",permalink:"/docs/specs/sensors/living",draft:!1,unlisted:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/specs/sensors/living.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Living",hide_title:!0,sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Sensors",permalink:"/docs/category/sensors"},next:{title:"Engine",permalink:"/docs/specs/sensors/engine"}},o={},d="Sensors Living",p="Sensors > Living",u=[{name:"Pressure",pillarType:"Range",pillarDir:"State",descr:"Environmental pressure in Pascal",min:"200",max:"1260",step:"1",unit:"Pascal"},{name:"Temperature",pillarType:"Range",pillarDir:"State",descr:"Environmental temperature in degrees celsius",min:"-30",max:"100",step:"1",unit:"Celsius"},{name:"Humidity",pillarType:"Range",pillarDir:"State",descr:"Environmental humidity percentage",min:"0",max:"100",step:"1",unit:"Percent"},{name:"Lux",pillarType:"Range",pillarDir:"State",descr:"Environmental lux in lumen",min:"???",max:"???",step:"???",unit:"Lumen"},{name:"Analog 1-N",pillarType:"Range",pillarDir:"State",descr:"Multiple customizable analog sensors (0-100%)",min:"0",max:"100",step:"1",unit:"Percent"}],h=[{value:"Specs details",id:"specs-details",level:2}];function x(e){const s={h2:"h2",p:"p",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Ix,{name:d}),"\n",(0,i.jsx)(a.zu,{name:d,pillars:u,children:(0,i.jsxs)(s.p,{children:["The living area of a camper or van is where we spend most of our time and\nactivities. This section will discuss the ",(0,i.jsx)("b",{children:"different types of sensors that can\nbe found in the living area"})," of a camper or van."]})}),"\n",(0,i.jsx)(s.p,{children:"The choice of sensors to install in the living area of a camper or van depends\non the needs and desires of the owner. Sensors can be used to improve the\nsafety, comfort, entertainment, and energy efficiency of your camper or van."}),"\n",(0,i.jsx)(s.h2,{id:"specs-details",children:"Specs details"}),"\n",(0,i.jsx)(a.Co,{name:d,group_path:p,pillars:u})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},7109:(e,s,n)=>{n.d(s,{A:()=>a});n(6540);const i={container:"container_mzDT",h1:"h1_n6cG"};var t=n(4848);function a(e){return(0,t.jsx)("div",{className:i.container,children:(0,t.jsxs)("h1",{className:i.h1,children:[e.section," - ",e.subsection]})})}},4773:(e,s,n)=>{n.d(s,{Co:()=>j,zu:()=>o,Ix:()=>r});n(6540);const i={specs_table:"specs_table_m89V",spec_details:"spec_details_Be0n",spec_details_single:"spec_details_single_XvVy",spec_details_title_path:"spec_details_title_path_XLhA",spec_details_title_type:"spec_details_title_type_zbUO",pillar_table:"pillar_table_Ff6Z"};var t=n(7109),a=n(778),l=n(4848);function r(e){return(0,l.jsx)(t.A,{section:"Specification",subsection:e.name})}function c(e){return(0,l.jsxs)("table",{className:i.specs_table,children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Type"})]}),Object.keys(e.pillars).map(((s,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("a",{href:"#"+e.pillars[s].name,children:e.pillars[s].name})}),(0,l.jsxs)("td",{children:[e.pillars[s].pillarType,e.pillars[s].pillarDir]})]},n)))]})}function o(e){return(0,l.jsxs)("div",{className:i.tmpl_container,children:[e.children,(0,l.jsx)(c,{pillars:e.pillars})]})}function d(e){return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.isAction?"Action":"State"}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:e.code})}),(0,l.jsx)("td",{children:e.value?e.value:e.fallback})]})}function p(e){const s=e.pillar;return null==s.unit?(0,l.jsx)("p",{children:"Not defined"}):Array.isArray(s.unit)?(0,l.jsxs)("table",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Value"}),(0,l.jsx)("th",{children:"Key"})]}),Object.keys(s.unit).map(((e,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:s.unit[e].key}),(0,l.jsx)("td",{children:s.unit[e].val})]},e)))]}):(0,l.jsx)("p",{children:s.unit})}function u(e){const s=e.pillar;return(0,l.jsx)("p",{children:s.descr})}function h(e){const s=e.pillar;return(0,l.jsxs)("table",{children:[(0,l.jsx)(d,{code:"TRUE",value:s.aliasTrue,fallback:"On"}),(0,l.jsx)(d,{code:"FALSE",value:s.aliasFalse,fallback:"Off"}),"Action"==s.pillarDir?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{isAction:"true",code:"SwitchTrue()",value:s.aliasSwitchTrue,fallback:"Switch On"}),(0,l.jsx)(d,{isAction:"true",code:"SwitchFalse()",value:s.aliasSwitchFalse,fallback:"Switch Off"})]}):null]})}function x(e){const s=e.pillar;return(0,l.jsxs)("table",{children:[(0,l.jsx)(d,{code:"MIN",value:s.min,fallback:"0"}),(0,l.jsx)(d,{code:"MAX",value:s.max,fallback:"100"}),(0,l.jsx)(d,{code:"STEP",value:s.step,fallback:"5"}),"Action"==s.pillarDir?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{isAction:"true",code:"Increase()",value:s.aliasIncrease,fallback:"Increase"}),(0,l.jsx)(d,{isAction:"true",code:"Decrease()",value:s.aliasDecrease,fallback:"Decrease"}),(0,l.jsx)(d,{isAction:"true",code:"SetMin()",value:s.aliasSetMin,fallback:"Set to Min"}),(0,l.jsx)(d,{isAction:"true",code:"SetMax()",value:s.aliasSetMax,fallback:"Set to Max"})]}):null]})}function m(e){const s=e.pillar,n=(0,l.jsx)(u,{pillar:s});let t=null,r=null;switch(s.pillarType){case"Boolean":r=(0,l.jsx)(h,{pillar:s});break;case"Range":t=(0,l.jsx)(p,{pillar:s}),r=(0,l.jsx)(x,{pillar:s});break;default:return(0,l.jsxs)("p",{children:["Unknow ",s.pillarType," type"]})}return(0,l.jsx)(a.A,{sx:{minWidth:"200px",maxWidth:"500px",marginLeft:"16px"},children:(0,l.jsxs)("table",{className:i.pillar_table,children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Description"}),(0,l.jsx)("td",{width:"100%",children:n})]}),t?(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Unit"}),(0,l.jsx)("td",{children:t})]}):null,(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Alias"}),(0,l.jsx)("td",{children:r})]})]})})}function j(e){const s=e.group_path,n=e.pillars;return(0,l.jsx)("div",{className:i.spec_details,children:Object.keys(n).map(((e,t)=>(0,l.jsxs)("div",{className:i.spec_details_single,children:[(0,l.jsx)("a",{class:"anchor",name:n[e].name}),(0,l.jsx)("p",{className:i.spec_details_title_path,children:s}),(0,l.jsxs)("h3",{children:[n[e].name,(0,l.jsxs)("span",{className:i.spec_details_title_type,children:[":\xa0",n[e].pillarType,n[e].pillarDir]})]}),(0,l.jsx)(m,{pillar:n[e]})]},t)))})}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>r});var i=n(6540);const t={},a=i.createContext(t);function l(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);