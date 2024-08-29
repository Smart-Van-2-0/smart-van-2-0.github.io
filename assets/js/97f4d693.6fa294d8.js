"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[7331],{4404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>c,specs_group_name:()=>d,specs_group_path:()=>p,specs_group_pillars:()=>u,toc:()=>h});var s=n(4848),a=n(8453),i=n(4773);const l={title:"Internet",hide_title:!0,sidebar_position:2},r=void 0,c={id:"specs/iot/internet",title:"Internet",description:"\x3c!--",source:"@site/docs/specs/iot/internet.mdx",sourceDirName:"specs/iot",slug:"/specs/iot/internet",permalink:"/docs/specs/iot/internet",draft:!1,unlisted:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/specs/iot/internet.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Internet",hide_title:!0,sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Battery",permalink:"/docs/specs/iot/battery"},next:{title:"AccessPoint",permalink:"/docs/specs/iot/accesspoint"}},o={},d="IoT Internet",p="IoT > Internet",u=[{name:"Status",pillarType:"Boolean",pillarDir:"State",descr:"Internet's connection status (true is Connected, false is NOT Connected)",aliasTrue:"Connected",aliasFalse:"NOT Connected"},{name:"SIM Status",pillarType:"Boolean",pillarDir:"State",descr:"Sim's status (true is Working, false is NOT Working)",aliasTrue:"Working",aliasFalse:"NOT Working"},{name:"Percentage",pillarType:"Range",pillarDir:"State",descr:"Internet signal quality in Percent",min:"0",max:"100",step:"1",unit:"Percent"},{name:"Max Download",pillarType:"Range",pillarDir:"State",descr:"Internet MAX download speed in MB/s",min:"0",max:"2048",step:"0.1",unit:"MegaBytes/Second"},{name:"Download",pillarType:"Range",pillarDir:"State",descr:"Internet download speed in MB/s",min:"0",max:"2048",step:"0.1",unit:"MegaBytes/Second"},{name:"Downloaded",pillarType:"Range",pillarDir:"State",descr:"Data downloaded in GB",min:"0",max:"1000",step:"0.1",unit:"MegaBytes/Second"},{name:"Upload",pillarType:"Range",pillarDir:"State",descr:"Internet upload speed in MB/s",min:"0",max:"2048",step:"0.1",unit:"MegaBytes/Second"},{name:"Uploaded",pillarType:"Range",pillarDir:"State",descr:"Data uploaded in GB",min:"0",max:"1000",step:"0.1",unit:"MegaBytes/Second"},{name:"Power Module",pillarType:"Boolean",pillarDir:"Action",descr:"Power on/off the SIM module to save energy"}],h=[{value:"Specs details",id:"specs-details",level:2}];function x(e){const t={code:"code",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Ix,{name:d}),"\n",(0,s.jsx)(i.zu,{name:d,pillars:u,children:(0,s.jsxs)(t.p,{children:["The IoT module has a ",(0,s.jsx)("b",{children:"mobile modem for internet connectivity"}),". This section\nprovides information about the connection status, SIM card status, and network\ncommunication measurements (download and upload rate, total data uploaded or\ndownloaded, and maximum download speed with periodic tests)."]})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Max Download"})," represents the maximum download speed measured during a periodic\ntest, while ",(0,s.jsx)(t.code,{children:"Download"})," reflects the current download rate based on user and\nsystem activity."]}),"\n",(0,s.jsx)(t.h2,{id:"specs-details",children:"Specs details"}),"\n",(0,s.jsx)(i.Co,{name:d,group_path:p,pillars:u})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},7109:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);const s={container:"container_mzDT",h1:"h1_n6cG"};var a=n(4848);function i(e){return(0,a.jsx)("div",{className:s.container,children:(0,a.jsxs)("h1",{className:s.h1,children:[e.section," - ",e.subsection]})})}},4773:(e,t,n)=>{n.d(t,{Co:()=>j,zu:()=>o,Ix:()=>r});n(6540);const s={specs_table:"specs_table_m89V",spec_details:"spec_details_Be0n",spec_details_single:"spec_details_single_XvVy",spec_details_title_path:"spec_details_title_path_XLhA",spec_details_title_type:"spec_details_title_type_zbUO",pillar_table:"pillar_table_Ff6Z"};var a=n(7109),i=n(778),l=n(4848);function r(e){return(0,l.jsx)(a.A,{section:"Specification",subsection:e.name})}function c(e){return(0,l.jsxs)("table",{className:s.specs_table,children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Type"})]}),Object.keys(e.pillars).map(((t,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("a",{href:"#"+e.pillars[t].name,children:e.pillars[t].name})}),(0,l.jsxs)("td",{children:[e.pillars[t].pillarType,e.pillars[t].pillarDir]})]},n)))]})}function o(e){return(0,l.jsxs)("div",{className:s.tmpl_container,children:[e.children,(0,l.jsx)(c,{pillars:e.pillars})]})}function d(e){return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.isAction?"Action":"State"}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:e.code})}),(0,l.jsx)("td",{children:e.value?e.value:e.fallback})]})}function p(e){const t=e.pillar;return null==t.unit?(0,l.jsx)("p",{children:"Not defined"}):Array.isArray(t.unit)?(0,l.jsxs)("table",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Value"}),(0,l.jsx)("th",{children:"Key"})]}),Object.keys(t.unit).map(((e,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:t.unit[e].key}),(0,l.jsx)("td",{children:t.unit[e].val})]},e)))]}):(0,l.jsx)("p",{children:t.unit})}function u(e){const t=e.pillar;return(0,l.jsx)("p",{children:t.descr})}function h(e){const t=e.pillar;return(0,l.jsxs)("table",{children:[(0,l.jsx)(d,{code:"TRUE",value:t.aliasTrue,fallback:"On"}),(0,l.jsx)(d,{code:"FALSE",value:t.aliasFalse,fallback:"Off"}),"Action"==t.pillarDir?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{isAction:"true",code:"SwitchTrue()",value:t.aliasSwitchTrue,fallback:"Switch On"}),(0,l.jsx)(d,{isAction:"true",code:"SwitchFalse()",value:t.aliasSwitchFalse,fallback:"Switch Off"})]}):null]})}function x(e){const t=e.pillar;return(0,l.jsxs)("table",{children:[(0,l.jsx)(d,{code:"MIN",value:t.min,fallback:"0"}),(0,l.jsx)(d,{code:"MAX",value:t.max,fallback:"100"}),(0,l.jsx)(d,{code:"STEP",value:t.step,fallback:"5"}),"Action"==t.pillarDir?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{isAction:"true",code:"Increase()",value:t.aliasIncrease,fallback:"Increase"}),(0,l.jsx)(d,{isAction:"true",code:"Decrease()",value:t.aliasDecrease,fallback:"Decrease"}),(0,l.jsx)(d,{isAction:"true",code:"SetMin()",value:t.aliasSetMin,fallback:"Set to Min"}),(0,l.jsx)(d,{isAction:"true",code:"SetMax()",value:t.aliasSetMax,fallback:"Set to Max"})]}):null]})}function m(e){const t=e.pillar,n=(0,l.jsx)(u,{pillar:t});let a=null,r=null;switch(t.pillarType){case"Boolean":r=(0,l.jsx)(h,{pillar:t});break;case"Range":a=(0,l.jsx)(p,{pillar:t}),r=(0,l.jsx)(x,{pillar:t});break;default:return(0,l.jsxs)("p",{children:["Unknow ",t.pillarType," type"]})}return(0,l.jsx)(i.A,{sx:{minWidth:"200px",maxWidth:"500px",marginLeft:"16px"},children:(0,l.jsxs)("table",{className:s.pillar_table,children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Description"}),(0,l.jsx)("td",{width:"100%",children:n})]}),a?(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Unit"}),(0,l.jsx)("td",{children:a})]}):null,(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Alias"}),(0,l.jsx)("td",{children:r})]})]})})}function j(e){const t=e.group_path,n=e.pillars;return(0,l.jsx)("div",{className:s.spec_details,children:Object.keys(n).map(((e,a)=>(0,l.jsxs)("div",{className:s.spec_details_single,children:[(0,l.jsx)("a",{class:"anchor",name:n[e].name}),(0,l.jsx)("p",{className:s.spec_details_title_path,children:t}),(0,l.jsxs)("h3",{children:[n[e].name,(0,l.jsxs)("span",{className:s.spec_details_title_type,children:[":\xa0",n[e].pillarType,n[e].pillarDir]})]}),(0,l.jsx)(m,{pillar:n[e]})]},a)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(6540);const a={},i=s.createContext(a);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);