"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9583:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const o={container:"container_mzDT",h1:"h1_n6cG"};function a(e){return n.createElement("div",{className:o.container},n.createElement("h1",{className:o.h1},e.section," - ",e.subsection))}},5303:(e,t,r)=>{r.d(t,{OQ:()=>m,d9:()=>a,Td:()=>i,zk:()=>s,yu:()=>u,eH:()=>c,ZP:()=>p});var n=r(7294);const o={web_site_map:"web_site_map_qmuZ"};function a(){return n.createElement("a",{href:"/docs"},"DOCS")}function i(){return n.createElement("a",{href:"/docs/features"},"FEATURES")}function c(){return n.createElement("a",{href:"/docs/specs"},"SPECIFICATIONS")}function s(){return n.createElement("a",{href:"/docs/hardware"},"HARDWARE")}function u(){return n.createElement("a",{href:"/docs/software"},"SOFTWARE")}function l(){return n.createElement("a",{href:"/about"},"ABOUT")}function m(){return n.createElement("a",{href:"/collaborate"},"COLLABORATE")}function p(){return n.createElement("div",{className:o.web_site_map},n.createElement(i,null),"|",n.createElement(s,null),"|",n.createElement(u,null),"|",n.createElement(c,null),"|",n.createElement(l,null),"|",n.createElement(m,null))}},5106:(e,t,r)=>{r.d(t,{SO:()=>u,uH:()=>s,Gz:()=>c});var n=r(7294);const o={tmpl_container:"tmpl_container_owqq",head_container1:"head_container1_eVdU",descr:"descr_IERI",lists_container:"lists_container_b_fo",list:"list_c4bu",list_item:"list_item_TO8j"};var a=r(9583),i=r(5303);function c(e){return n.createElement(a.Z,{section:"Feature",subsection:e.name})}function s(){return n.createElement("p",null,"The following table lists the ",n.createElement(i.eH,null)," for the current Smart Van's feature. To verify if your SmartVan Box supports this feature, your SmartVan Box must meet the following specifications.")}function u(e){return n.createElement("table",{className:o.specs_table},n.createElement("tr",null,n.createElement("th",null,"Group"),n.createElement("th",null,"SubGroup"),n.createElement("th",null,"Purpose")),Object.keys(e.specs_required).map(((t,r)=>{const o=e.specs_required[t].group,a=e.specs_required[t].sub_group,i=e.specs_required[t].desc;return n.createElement("tr",{key:r},n.createElement("td",null,o),n.createElement("td",null,n.createElement("a",{href:"/docs/specs/"+o+"/"+a},a)),n.createElement("td",null,i))})))}},6396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,feature_name:()=>m,feature_status:()=>p,frontMatter:()=>i,metadata:()=>s,specs_required:()=>f,toc:()=>l});var n=r(3117),o=(r(7294),r(3905)),a=r(5106);const i={title:"Internet",hide_title:!0,sidebar_position:3},c=void 0,s={unversionedId:"features/monitor/internet",id:"features/monitor/internet",title:"Internet",description:"\x3c!--",source:"@site/docs/features/monitor/internet.mdx",sourceDirName:"features/monitor",slug:"/features/monitor/internet",permalink:"/docs/features/monitor/internet",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/features/monitor/internet.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Internet",hide_title:!0,sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Waters",permalink:"/docs/features/monitor/waters"},next:{title:"Air",permalink:"/docs/features/monitor/air"}},u={},l=[{value:"Specs required",id:"specs-required",level:2}],m="Internet Monitoring",p="Development",f=[{group:"IoT",sub_group:"Internet",desc:"Information needed to monitor the signal quality."},{group:"IoT",sub_group:"AccessPoint",desc:"Information needed to monitor the connected devices."}],d={toc:l,feature_name:m},h="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Gz,{name:m,status:p,mdxType:"FeatureTitle"}),(0,o.kt)("p",null,"Remote work is becoming increasingly popular, but it can be difficult to maintain\na reliable internet connection when you're working in mobility. SmartVan can help\nyou improve your remote office internet by providing you with a heatmap of the\nquality of internet in your area."),(0,o.kt)("p",null,"SmartVan uses a variety of sensors to monitor the signal strength and speed of\ninternet connections in your area. This information is then used to create a\nheatmap that shows you where the best internet is located."),(0,o.kt)("p",null,"With SmartVan, you can always know where to go when you need a strong internet\nconnection for a call or to upload your work."),(0,o.kt)("h2",{id:"specs-required"},"Specs required"),(0,o.kt)(a.uH,{mdxType:"FeatureSpecsRequiredText"}),(0,o.kt)(a.SO,{specs_required:f,mdxType:"FeatureSpecsRequiredTable"}))}y.isMDXComponent=!0}}]);