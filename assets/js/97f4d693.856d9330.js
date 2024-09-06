"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[7331],{4404:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,specs_group_name:()=>d,specs_group_path:()=>p,specs_group_pillars:()=>u,toc:()=>h});var n=a(4848),i=a(8453),s=a(4773);const r={title:"Internet",hide_title:!0,sidebar_position:2},l=void 0,o={id:"specs/iot/internet",title:"Internet",description:"\x3c!--",source:"@site/docs/specs/iot/internet.mdx",sourceDirName:"specs/iot",slug:"/specs/iot/internet",permalink:"/docs/specs/iot/internet",draft:!1,unlisted:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/specs/iot/internet.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Internet",hide_title:!0,sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Battery",permalink:"/docs/specs/iot/battery"},next:{title:"AccessPoint",permalink:"/docs/specs/iot/accesspoint"}},c={},d="IoT Internet",p="IoT > Internet",u=[{name:"Status",pillarType:"Boolean",pillarDir:"State",descr:"Internet's connection status (true is Connected, false is NOT Connected)",aliasTrue:"Connected",aliasFalse:"NOT Connected"},{name:"SIM Status",pillarType:"Boolean",pillarDir:"State",descr:"Sim's status (true is Working, false is NOT Working)",aliasTrue:"Working",aliasFalse:"NOT Working"},{name:"Percentage",pillarType:"Range",pillarDir:"State",descr:"Internet signal quality in Percent",min:"0",max:"100",step:"1",unit:"Percent"},{name:"Max Download",pillarType:"Range",pillarDir:"State",descr:"Internet MAX download speed in MB/s",min:"0",max:"2048",step:"0.1",unit:"MegaBytes/Second"},{name:"Download",pillarType:"Range",pillarDir:"State",descr:"Internet download speed in MB/s",min:"0",max:"2048",step:"0.1",unit:"MegaBytes/Second"},{name:"Downloaded",pillarType:"Range",pillarDir:"State",descr:"Data downloaded in GB",min:"0",max:"1000",step:"0.1",unit:"MegaBytes/Second"},{name:"Upload",pillarType:"Range",pillarDir:"State",descr:"Internet upload speed in MB/s",min:"0",max:"2048",step:"0.1",unit:"MegaBytes/Second"},{name:"Uploaded",pillarType:"Range",pillarDir:"State",descr:"Data uploaded in GB",min:"0",max:"1000",step:"0.1",unit:"MegaBytes/Second"},{name:"Power Module",pillarType:"Boolean",pillarDir:"Action",descr:"Power on/off the SIM module to save energy"}],h=[{value:"Specs details",id:"specs-details",level:2}];function x(e){const t={code:"code",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Ix,{name:d}),"\n",(0,n.jsx)(s.zu,{name:d,pillars:u,children:(0,n.jsxs)(t.p,{children:["The IoT module has a ",(0,n.jsx)("b",{children:"mobile modem for internet connectivity"}),". This section\nprovides information about the connection status, SIM card status, and network\ncommunication measurements (download and upload rate, total data uploaded or\ndownloaded, and maximum download speed with periodic tests)."]})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Max Download"})," represents the maximum download speed measured during a periodic\ntest, while ",(0,n.jsx)(t.code,{children:"Download"})," reflects the current download rate based on user and\nsystem activity."]}),"\n",(0,n.jsx)(t.h2,{id:"specs-details",children:"Specs details"}),"\n",(0,n.jsx)(s.Co,{name:d,group_path:p,pillars:u})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},3796:(e,t,a)=>{a.d(t,{A:()=>y});var n=a(9668),i=a(1367),s=a(6540),r=a(4164),l=a(5659),o=a(456),c=a(6126),d=a(771);const p=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var u=a(8413),h=a(7936);function x(e){return(0,h.Ay)("MuiPaper",e)}(0,u.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=a(4848);const v=["className","component","elevation","square","variant"],j=(0,o.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!a.square&&t.rounded,"elevation"===a.variant&&t[`elevation${a.elevation}`]]}})((({theme:e,ownerState:t})=>{var a;return(0,n.A)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,n.A)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,d.X4)("#fff",p(t.elevation))}, ${(0,d.X4)("#fff",p(t.elevation))})`},e.vars&&{backgroundImage:null==(a=e.vars.overlays)?void 0:a[t.elevation]}))})),f=s.forwardRef((function(e,t){const a=(0,c.b)({props:e,name:"MuiPaper"}),{className:s,component:o="div",elevation:d=1,square:p=!1,variant:u="elevation"}=a,h=(0,i.A)(a,v),f=(0,n.A)({},a,{component:o,elevation:d,square:p,variant:u}),_=(e=>{const{square:t,elevation:a,variant:n,classes:i}=e,s={root:["root",n,!t&&"rounded","elevation"===n&&`elevation${a}`]};return(0,l.A)(s,x,i)})(f);return(0,m.jsx)(j,(0,n.A)({as:o,ownerState:f,className:(0,r.A)(_.root,s),ref:t},h))}));function _(e){return(0,h.Ay)("MuiCard",e)}(0,u.A)("MuiCard",["root"]);const b=["className","raised"],g=(0,o.Ay)(f,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),y=s.forwardRef((function(e,t){const a=(0,c.b)({props:e,name:"MuiCard"}),{className:s,raised:o=!1}=a,d=(0,i.A)(a,b),p=(0,n.A)({},a,{raised:o}),u=(e=>{const{classes:t}=e;return(0,l.A)({root:["root"]},_,t)})(p);return(0,m.jsx)(g,(0,n.A)({className:(0,r.A)(u.root,s),elevation:o?8:void 0,ref:t,ownerState:p},d))}))},7109:(e,t,a)=>{a.d(t,{A:()=>s});a(6540);const n={container:"container_mzDT",h1:"h1_n6cG"};var i=a(4848);function s(e){return(0,i.jsx)("div",{className:n.container,children:(0,i.jsxs)("h1",{className:n.h1,children:[e.section," - ",e.subsection]})})}},4773:(e,t,a)=>{a.d(t,{Co:()=>v,zu:()=>c,Ix:()=>l});a(6540);const n={specs_table:"specs_table_m89V",spec_details:"spec_details_Be0n",spec_details_single:"spec_details_single_XvVy",spec_details_title_path:"spec_details_title_path_XLhA",spec_details_title_type:"spec_details_title_type_zbUO",pillar_table:"pillar_table_Ff6Z"};var i=a(7109),s=a(3796),r=a(4848);function l(e){return(0,r.jsx)(i.A,{section:"Specification",subsection:e.name})}function o(e){return(0,r.jsxs)("table",{className:n.specs_table,children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Type"})]}),Object.keys(e.pillars).map(((t,a)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#"+e.pillars[t].name,children:e.pillars[t].name})}),(0,r.jsxs)("td",{children:[e.pillars[t].pillarType,e.pillars[t].pillarDir]})]},a)))]})}function c(e){return(0,r.jsxs)("div",{className:n.tmpl_container,children:[e.children,(0,r.jsx)(o,{pillars:e.pillars})]})}function d(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.isAction?"Action":"State"}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:e.code})}),(0,r.jsx)("td",{children:e.value?e.value:e.fallback})]})}function p(e){const t=e.pillar;return null==t.unit?(0,r.jsx)("p",{children:"Not defined"}):Array.isArray(t.unit)?(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Value"}),(0,r.jsx)("th",{children:"Key"})]}),Object.keys(t.unit).map(((e,a)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:t.unit[e].key}),(0,r.jsx)("td",{children:t.unit[e].val})]},e)))]}):(0,r.jsx)("p",{children:t.unit})}function u(e){const t=e.pillar;return(0,r.jsx)("p",{children:t.descr})}function h(e){const t=e.pillar;return(0,r.jsxs)("table",{children:[(0,r.jsx)(d,{code:"TRUE",value:t.aliasTrue,fallback:"On"}),(0,r.jsx)(d,{code:"FALSE",value:t.aliasFalse,fallback:"Off"}),"Action"==t.pillarDir?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{isAction:"true",code:"SwitchTrue()",value:t.aliasSwitchTrue,fallback:"Switch On"}),(0,r.jsx)(d,{isAction:"true",code:"SwitchFalse()",value:t.aliasSwitchFalse,fallback:"Switch Off"})]}):null]})}function x(e){const t=e.pillar;return(0,r.jsxs)("table",{children:[(0,r.jsx)(d,{code:"MIN",value:t.min,fallback:"0"}),(0,r.jsx)(d,{code:"MAX",value:t.max,fallback:"100"}),(0,r.jsx)(d,{code:"STEP",value:t.step,fallback:"5"}),"Action"==t.pillarDir?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{isAction:"true",code:"Increase()",value:t.aliasIncrease,fallback:"Increase"}),(0,r.jsx)(d,{isAction:"true",code:"Decrease()",value:t.aliasDecrease,fallback:"Decrease"}),(0,r.jsx)(d,{isAction:"true",code:"SetMin()",value:t.aliasSetMin,fallback:"Set to Min"}),(0,r.jsx)(d,{isAction:"true",code:"SetMax()",value:t.aliasSetMax,fallback:"Set to Max"})]}):null]})}function m(e){const t=e.pillar,a=(0,r.jsx)(u,{pillar:t});let i=null,l=null;switch(t.pillarType){case"Boolean":l=(0,r.jsx)(h,{pillar:t});break;case"Range":i=(0,r.jsx)(p,{pillar:t}),l=(0,r.jsx)(x,{pillar:t});break;default:return(0,r.jsxs)("p",{children:["Unknow ",t.pillarType," type"]})}return(0,r.jsx)(s.A,{sx:{minWidth:"200px",maxWidth:"500px",marginLeft:"16px"},children:(0,r.jsxs)("table",{className:n.pillar_table,children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("td",{width:"100%",children:a})]}),i?(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Unit"}),(0,r.jsx)("td",{children:i})]}):null,(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Alias"}),(0,r.jsx)("td",{children:l})]})]})})}function v(e){const t=e.group_path,a=e.pillars;return(0,r.jsx)("div",{className:n.spec_details,children:Object.keys(a).map(((e,i)=>(0,r.jsxs)("div",{className:n.spec_details_single,children:[(0,r.jsx)("a",{class:"anchor",name:a[e].name}),(0,r.jsx)("p",{className:n.spec_details_title_path,children:t}),(0,r.jsxs)("h3",{children:[a[e].name,(0,r.jsxs)("span",{className:n.spec_details_title_type,children:[":\xa0",a[e].pillarType,a[e].pillarDir]})]}),(0,r.jsx)(m,{pillar:a[e]})]},i)))})}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>l});var n=a(6540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);