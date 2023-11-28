"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[9797],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),p=a,d=m["".concat(s,".").concat(p)]||m[p]||f[p]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9583:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a={container:"container_mzDT",h1:"h1_n6cG"};function o(e){return n.createElement("div",{className:a.container},n.createElement("h1",{className:a.h1},e.section," - ",e.subsection))}},5303:(e,t,r)=>{r.d(t,{OQ:()=>m,d9:()=>o,Td:()=>i,zk:()=>s,yu:()=>l,eH:()=>c,ZP:()=>f});var n=r(7294);const a={web_site_map:"web_site_map_qmuZ"};function o(){return n.createElement("a",{href:"/docs"},"DOCS")}function i(){return n.createElement("a",{href:"/docs/features"},"FEATURES")}function c(){return n.createElement("a",{href:"/docs/specs"},"SPECIFICATIONS")}function s(){return n.createElement("a",{href:"/docs/hardware"},"HARDWARE")}function l(){return n.createElement("a",{href:"/docs/software"},"SOFTWARE")}function u(){return n.createElement("a",{href:"/about"},"ABOUT")}function m(){return n.createElement("a",{href:"/collaborate"},"COLLABORATE")}function f(){return n.createElement("div",{className:a.web_site_map},n.createElement(i,null),"|",n.createElement(s,null),"|",n.createElement(l,null),"|",n.createElement(c,null),"|",n.createElement(u,null),"|",n.createElement(m,null))}},5106:(e,t,r)=>{r.d(t,{SO:()=>l,uH:()=>s,Gz:()=>c});var n=r(7294);const a={tmpl_container:"tmpl_container_owqq",head_container1:"head_container1_eVdU",descr:"descr_IERI",lists_container:"lists_container_b_fo",list:"list_c4bu",list_item:"list_item_TO8j"};var o=r(9583),i=r(5303);function c(e){return n.createElement(o.Z,{section:"Feature",subsection:e.name})}function s(){return n.createElement("p",null,"The following table lists the ",n.createElement(i.eH,null)," for the current Smart Van's feature. To verify if your SmartVan Box supports this feature, your SmartVan Box must meet the following specifications.")}function l(e){return n.createElement("table",{className:a.specs_table},n.createElement("tr",null,n.createElement("th",null,"Group"),n.createElement("th",null,"SubGroup"),n.createElement("th",null,"Purpose")),Object.keys(e.specs_required).map(((t,r)=>{const a=e.specs_required[t].group,o=e.specs_required[t].sub_group,i=e.specs_required[t].desc;return n.createElement("tr",{key:r},n.createElement("td",null,a),n.createElement("td",null,n.createElement("a",{href:"/docs/specs/"+a+"/"+o},o)),n.createElement("td",null,i))})))}},4202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>_,feature_name:()=>m,feature_status:()=>f,frontMatter:()=>i,metadata:()=>s,specs_required:()=>p,toc:()=>u});var n=r(3117),a=(r(7294),r(3905)),o=r(5106);const i={title:"Internet sharing",hide_title:!0,sidebar_position:1},c=void 0,s={unversionedId:"features/remote_office/internet",id:"features/remote_office/internet",title:"Internet sharing",description:"\x3c!--",source:"@site/docs/features/remote_office/internet.mdx",sourceDirName:"features/remote_office",slug:"/features/remote_office/internet",permalink:"/docs/features/remote_office/internet",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/features/remote_office/internet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Internet sharing",hide_title:!0,sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Remote Office",permalink:"/docs/features/remote_office/"},next:{title:"Agenda",permalink:"/docs/features/remote_office/agenda"}},l={},u=[{value:"Specs required",id:"specs-required",level:2}],m="Internet Sharing",f="Development",p=[{group:"IoT",sub_group:"Internet",desc:"Accessing both internet connectivity and signal quality information."},{group:"IoT",sub_group:"AccessPoint",desc:"Controls and statistics for the WiFi network provided by the SV box."}],d={toc:u,feature_name:m},b="wrapper";function _(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Gz,{name:m,status:f,mdxType:"FeatureTitle"}),(0,a.kt)("p",null,"The integrated modem provides a WiFi signal to which all your devices can\nconnect and access the internet. Additionally, the same modem keeps your Smart\nVan connected to the Cloud, making it reachable by the Smart Van's Mobile App."),(0,a.kt)("h2",{id:"specs-required"},"Specs required"),(0,a.kt)(o.uH,{mdxType:"FeatureSpecsRequiredText"}),(0,a.kt)(o.SO,{specs_required:p,mdxType:"FeatureSpecsRequiredTable"}))}_.isMDXComponent=!0}}]);