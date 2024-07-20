"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[8687],{1197:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>_,feature_name:()=>l,feature_status:()=>h,frontMatter:()=>i,metadata:()=>u,specs_required:()=>m,toc:()=>f});var n=s(4848),r=s(8453),o=s(6380),a=s(3161);const i={title:"Events automations",hide_title:!0,sidebar_position:6},c=void 0,u={id:"features/control/automations_events",title:"Events automations",description:"\x3c!--",source:"@site/docs/features/control/automations_events.mdx",sourceDirName:"features/control",slug:"/features/control/automations_events",permalink:"/docs/features/control/automations_events",draft:!1,unlisted:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/features/control/automations_events.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Events automations",hide_title:!0,sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Scheduled automations",permalink:"/docs/features/control/automations_sheduled"},next:{title:"Threshold automations",permalink:"/docs/features/control/automations_threshold"}},d={},l="Automations based on events",h="Proposed",m=[{group:"Sensors",sub_group:"Living",desc:"Sensors designed to detect the environment, used as data for event triggering."},{group:"Sensors",sub_group:"Engine",desc:"Info from vehicle engine, used as data for event triggering."},{group:"Services",sub_group:"Actuators",desc:"On/off and dimming device's control as event's action."}],f=[{value:"Specs required",id:"specs-required",level:2}];function p(e){const t={a:"a",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.zh,{name:l,status:h}),"\n",(0,n.jsxs)(t.p,{children:["SmartVan Box allows users to create automations based on events generated by\nthe camper's services and other functions. For example, you can set an\nautomation to close the gas solenoid valve when the van changes mode from\nPARKED to DRIVING (see feature ",(0,n.jsx)(t.a,{href:"/docs/features/smart/modes",children:"Smart Mode Detector"}),").\nFor more details on available events, consult the Smart Van ",(0,n.jsx)(a.A,{}),"\nlist."]}),"\n",(0,n.jsx)(t.h2,{id:"specs-required",children:"Specs required"}),"\n",(0,n.jsx)(o.d,{}),"\n",(0,n.jsx)(o._b,{specs_required:m})]})}function _(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},7109:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);const n={container:"container_mzDT",h1:"h1_n6cG"};var r=s(4848);function o(e){return(0,r.jsx)("div",{className:n.container,children:(0,r.jsxs)("h1",{className:n.h1,children:[e.section," - ",e.subsection]})})}},3161:(e,t,s)=>{s.d(t,{r0:()=>l,Wx:()=>o,A:()=>a,PD:()=>c,OM:()=>u,hB:()=>i,Ay:()=>h});s(6540);const n={web_site_map:"web_site_map_qmuZ"};var r=s(4848);function o(){return(0,r.jsx)("a",{href:"/docs",children:"DOCS"})}function a(){return(0,r.jsx)("a",{href:"/docs/features",children:"FEATURES"})}function i(){return(0,r.jsx)("a",{href:"/docs/specs",children:"SPECIFICATIONS"})}function c(){return(0,r.jsx)("a",{href:"/docs/hardware",children:"HARDWARE"})}function u(){return(0,r.jsx)("a",{href:"/docs/software",children:"SOFTWARE"})}function d(){return(0,r.jsx)("a",{href:"/about",children:"ABOUT"})}function l(){return(0,r.jsx)("a",{href:"/collaborate",children:"COLLABORATE"})}function h(){return(0,r.jsxs)("div",{className:n.web_site_map,children:[(0,r.jsx)(a,{}),"|",(0,r.jsx)(c,{}),"|",(0,r.jsx)(u,{}),"|",(0,r.jsx)(i,{}),"|",(0,r.jsx)(d,{}),"|",(0,r.jsx)(l,{})]})}},6380:(e,t,s)=>{s.d(t,{_b:()=>u,d:()=>c,zh:()=>i});s(6540);const n={tmpl_container:"tmpl_container_owqq",head_container1:"head_container1_eVdU",descr:"descr_IERI",lists_container:"lists_container_b_fo",list:"list_c4bu",list_item:"list_item_TO8j"};var r=s(7109),o=s(3161),a=s(4848);function i(e){return(0,a.jsx)(r.A,{section:"Feature",subsection:e.name})}function c(){return(0,a.jsxs)("p",{children:["The following table lists the ",(0,a.jsx)(o.hB,{})," for the current Smart Van's feature. To verify if your SmartVan Box supports this feature, your SmartVan Box must meet the following specifications."]})}function u(e){return(0,a.jsxs)("table",{className:n.specs_table,children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Group"}),(0,a.jsx)("th",{children:"SubGroup"}),(0,a.jsx)("th",{children:"Purpose"})]}),Object.keys(e.specs_required).map(((t,s)=>{const n=e.specs_required[t].group,r=e.specs_required[t].sub_group,o=e.specs_required[t].desc;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:n}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"/docs/specs/"+n+"/"+r,children:r})}),(0,a.jsx)("td",{children:o})]},s)}))]})}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(6540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);