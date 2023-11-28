"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[4897],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),p=a,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9583:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a={container:"container_mzDT",h1:"h1_n6cG"};function o(e){return n.createElement("div",{className:a.container},n.createElement("h1",{className:a.h1},e.section," - ",e.subsection))}},5303:(e,t,r)=>{r.d(t,{OQ:()=>m,d9:()=>o,Td:()=>s,zk:()=>i,yu:()=>u,eH:()=>c,ZP:()=>d});var n=r(7294);const a={web_site_map:"web_site_map_qmuZ"};function o(){return n.createElement("a",{href:"/docs"},"DOCS")}function s(){return n.createElement("a",{href:"/docs/features"},"FEATURES")}function c(){return n.createElement("a",{href:"/docs/specs"},"SPECIFICATIONS")}function i(){return n.createElement("a",{href:"/docs/hardware"},"HARDWARE")}function u(){return n.createElement("a",{href:"/docs/software"},"SOFTWARE")}function l(){return n.createElement("a",{href:"/about"},"ABOUT")}function m(){return n.createElement("a",{href:"/collaborate"},"COLLABORATE")}function d(){return n.createElement("div",{className:a.web_site_map},n.createElement(s,null),"|",n.createElement(i,null),"|",n.createElement(u,null),"|",n.createElement(c,null),"|",n.createElement(l,null),"|",n.createElement(m,null))}},5106:(e,t,r)=>{r.d(t,{SO:()=>u,uH:()=>i,Gz:()=>c});var n=r(7294);const a={tmpl_container:"tmpl_container_owqq",head_container1:"head_container1_eVdU",descr:"descr_IERI",lists_container:"lists_container_b_fo",list:"list_c4bu",list_item:"list_item_TO8j"};var o=r(9583),s=r(5303);function c(e){return n.createElement(o.Z,{section:"Feature",subsection:e.name})}function i(){return n.createElement("p",null,"The following table lists the ",n.createElement(s.eH,null)," for the current Smart Van's feature. To verify if your SmartVan Box supports this feature, your SmartVan Box must meet the following specifications.")}function u(e){return n.createElement("table",{className:a.specs_table},n.createElement("tr",null,n.createElement("th",null,"Group"),n.createElement("th",null,"SubGroup"),n.createElement("th",null,"Purpose")),Object.keys(e.specs_required).map(((t,r)=>{const a=e.specs_required[t].group,o=e.specs_required[t].sub_group,s=e.specs_required[t].desc;return n.createElement("tr",{key:r},n.createElement("td",null,a),n.createElement("td",null,n.createElement("a",{href:"/docs/specs/"+a+"/"+o},o)),n.createElement("td",null,s))})))}},2287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>_,feature_name:()=>d,feature_status:()=>p,frontMatter:()=>c,metadata:()=>u,specs_required:()=>f,toc:()=>m});var n=r(3117),a=(r(7294),r(3905)),o=r(5106),s=r(5303);const c={title:"Events automations",hide_title:!0,sidebar_position:6},i=void 0,u={unversionedId:"features/control/automations_events",id:"features/control/automations_events",title:"Events automations",description:"\x3c!--",source:"@site/docs/features/control/automations_events.mdx",sourceDirName:"features/control",slug:"/features/control/automations_events",permalink:"/docs/features/control/automations_events",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/features/control/automations_events.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Events automations",hide_title:!0,sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Scheduled automations",permalink:"/docs/features/control/automations_sheduled"},next:{title:"Threshold automations",permalink:"/docs/features/control/automations_threshold"}},l={},m=[{value:"Specs required",id:"specs-required",level:2}],d="Automations based on events",p="Proposed",f=[{group:"Sensors",sub_group:"Living",desc:"Sensors designed to detect the environment, used as data for event triggering."},{group:"Sensors",sub_group:"Engine",desc:"Info from vehicle engine, used as data for event triggering."},{group:"Services",sub_group:"Actuators",desc:"On/off and dimming device's control as event's action."}],v={toc:m,feature_name:d},h="wrapper";function _(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Gz,{name:d,status:p,mdxType:"FeatureTitle"}),(0,a.kt)("p",null,"SmartVan Box allows users to create automations based on events generated by\nthe camper's services and other functions. For example, you can set an\nautomation to close the gas solenoid valve when the van changes mode from\nPARKED to DRIVING (see feature ",(0,a.kt)("a",{parentName:"p",href:"/docs/features/smart/modes"},"Smart Mode Detector"),").\nFor more details on available events, consult the Smart Van ",(0,a.kt)(s.Td,{mdxType:"MapFeatures"}),"\nlist."),(0,a.kt)("h2",{id:"specs-required"},"Specs required"),(0,a.kt)(o.uH,{mdxType:"FeatureSpecsRequiredText"}),(0,a.kt)(o.SO,{specs_required:f,mdxType:"FeatureSpecsRequiredTable"}))}_.isMDXComponent=!0}}]);