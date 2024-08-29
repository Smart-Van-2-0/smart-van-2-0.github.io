"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[5834],{2165:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>j,frontMatter:()=>a,metadata:()=>c,specs_group_name:()=>d,specs_group_path:()=>p,specs_group_pillars:()=>u,toc:()=>h});var t=i(4848),n=i(8453),l=i(4773);const a={title:"Monitor",hide_title:!0,sidebar_position:5},r=void 0,c={id:"specs/iot/monitor",title:"Monitor",description:"\x3c!--",source:"@site/docs/specs/iot/monitor.mdx",sourceDirName:"specs/iot",slug:"/specs/iot/monitor",permalink:"/docs/specs/iot/monitor",draft:!1,unlisted:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/specs/iot/monitor.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Monitor",hide_title:!0,sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Media",permalink:"/docs/specs/iot/media"}},o={},d="IoT Monitor",p="IoT > Monitor",u=[],h=[{value:"Specs details",id:"specs-details",level:2}];function x(e){const s={h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Ix,{name:d}),"\n",(0,t.jsx)(l.zu,{name:d,pillars:u,children:(0,t.jsx)(s.p,{children:"The IoT module is a fully functional PC, and this section provides information\non its monitoring, including CPU and RAM usage, the number of running processes,\nand more. This information is useful for diagnosing problems."})}),"\n",(0,t.jsx)(s.p,{children:"TODO: ToBeDefined"}),"\n",(0,t.jsx)(s.h2,{id:"specs-details",children:"Specs details"}),"\n",(0,t.jsx)(l.Co,{name:d,group_path:p,pillars:u})]})}function j(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},7109:(e,s,i)=>{i.d(s,{A:()=>l});i(6540);const t={container:"container_mzDT",h1:"h1_n6cG"};var n=i(4848);function l(e){return(0,n.jsx)("div",{className:t.container,children:(0,n.jsxs)("h1",{className:t.h1,children:[e.section," - ",e.subsection]})})}},4773:(e,s,i)=>{i.d(s,{Co:()=>m,zu:()=>o,Ix:()=>r});i(6540);const t={specs_table:"specs_table_m89V",spec_details:"spec_details_Be0n",spec_details_single:"spec_details_single_XvVy",spec_details_title_path:"spec_details_title_path_XLhA",spec_details_title_type:"spec_details_title_type_zbUO",pillar_table:"pillar_table_Ff6Z"};var n=i(7109),l=i(778),a=i(4848);function r(e){return(0,a.jsx)(n.A,{section:"Specification",subsection:e.name})}function c(e){return(0,a.jsxs)("table",{className:t.specs_table,children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Type"})]}),Object.keys(e.pillars).map(((s,i)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#"+e.pillars[s].name,children:e.pillars[s].name})}),(0,a.jsxs)("td",{children:[e.pillars[s].pillarType,e.pillars[s].pillarDir]})]},i)))]})}function o(e){return(0,a.jsxs)("div",{className:t.tmpl_container,children:[e.children,(0,a.jsx)(c,{pillars:e.pillars})]})}function d(e){return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.isAction?"Action":"State"}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:e.code})}),(0,a.jsx)("td",{children:e.value?e.value:e.fallback})]})}function p(e){const s=e.pillar;return null==s.unit?(0,a.jsx)("p",{children:"Not defined"}):Array.isArray(s.unit)?(0,a.jsxs)("table",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Value"}),(0,a.jsx)("th",{children:"Key"})]}),Object.keys(s.unit).map(((e,i)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:s.unit[e].key}),(0,a.jsx)("td",{children:s.unit[e].val})]},e)))]}):(0,a.jsx)("p",{children:s.unit})}function u(e){const s=e.pillar;return(0,a.jsx)("p",{children:s.descr})}function h(e){const s=e.pillar;return(0,a.jsxs)("table",{children:[(0,a.jsx)(d,{code:"TRUE",value:s.aliasTrue,fallback:"On"}),(0,a.jsx)(d,{code:"FALSE",value:s.aliasFalse,fallback:"Off"}),"Action"==s.pillarDir?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{isAction:"true",code:"SwitchTrue()",value:s.aliasSwitchTrue,fallback:"Switch On"}),(0,a.jsx)(d,{isAction:"true",code:"SwitchFalse()",value:s.aliasSwitchFalse,fallback:"Switch Off"})]}):null]})}function x(e){const s=e.pillar;return(0,a.jsxs)("table",{children:[(0,a.jsx)(d,{code:"MIN",value:s.min,fallback:"0"}),(0,a.jsx)(d,{code:"MAX",value:s.max,fallback:"100"}),(0,a.jsx)(d,{code:"STEP",value:s.step,fallback:"5"}),"Action"==s.pillarDir?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{isAction:"true",code:"Increase()",value:s.aliasIncrease,fallback:"Increase"}),(0,a.jsx)(d,{isAction:"true",code:"Decrease()",value:s.aliasDecrease,fallback:"Decrease"}),(0,a.jsx)(d,{isAction:"true",code:"SetMin()",value:s.aliasSetMin,fallback:"Set to Min"}),(0,a.jsx)(d,{isAction:"true",code:"SetMax()",value:s.aliasSetMax,fallback:"Set to Max"})]}):null]})}function j(e){const s=e.pillar,i=(0,a.jsx)(u,{pillar:s});let n=null,r=null;switch(s.pillarType){case"Boolean":r=(0,a.jsx)(h,{pillar:s});break;case"Range":n=(0,a.jsx)(p,{pillar:s}),r=(0,a.jsx)(x,{pillar:s});break;default:return(0,a.jsxs)("p",{children:["Unknow ",s.pillarType," type"]})}return(0,a.jsx)(l.A,{sx:{minWidth:"200px",maxWidth:"500px",marginLeft:"16px"},children:(0,a.jsxs)("table",{className:t.pillar_table,children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Description"}),(0,a.jsx)("td",{width:"100%",children:i})]}),n?(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Unit"}),(0,a.jsx)("td",{children:n})]}):null,(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Alias"}),(0,a.jsx)("td",{children:r})]})]})})}function m(e){const s=e.group_path,i=e.pillars;return(0,a.jsx)("div",{className:t.spec_details,children:Object.keys(i).map(((e,n)=>(0,a.jsxs)("div",{className:t.spec_details_single,children:[(0,a.jsx)("a",{class:"anchor",name:i[e].name}),(0,a.jsx)("p",{className:t.spec_details_title_path,children:s}),(0,a.jsxs)("h3",{children:[i[e].name,(0,a.jsxs)("span",{className:t.spec_details_title_type,children:[":\xa0",i[e].pillarType,i[e].pillarDir]})]}),(0,a.jsx)(j,{pillar:i[e]})]},n)))})}},8453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>r});var t=i(6540);const n={},l=t.createContext(n);function a(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);