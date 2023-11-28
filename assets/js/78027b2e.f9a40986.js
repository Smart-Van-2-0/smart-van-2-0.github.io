"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9583:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a={container:"container_mzDT",h1:"h1_n6cG"};function o(e){return n.createElement("div",{className:a.container},n.createElement("h1",{className:a.h1},e.section," - ",e.subsection))}},5303:(e,t,r)=>{r.d(t,{OQ:()=>m,d9:()=>o,Td:()=>i,zk:()=>u,yu:()=>s,eH:()=>c,ZP:()=>p});var n=r(7294);const a={web_site_map:"web_site_map_qmuZ"};function o(){return n.createElement("a",{href:"/docs"},"DOCS")}function i(){return n.createElement("a",{href:"/docs/features"},"FEATURES")}function c(){return n.createElement("a",{href:"/docs/specs"},"SPECIFICATIONS")}function u(){return n.createElement("a",{href:"/docs/hardware"},"HARDWARE")}function s(){return n.createElement("a",{href:"/docs/software"},"SOFTWARE")}function l(){return n.createElement("a",{href:"/about"},"ABOUT")}function m(){return n.createElement("a",{href:"/collaborate"},"COLLABORATE")}function p(){return n.createElement("div",{className:a.web_site_map},n.createElement(i,null),"|",n.createElement(u,null),"|",n.createElement(s,null),"|",n.createElement(c,null),"|",n.createElement(l,null),"|",n.createElement(m,null))}},5106:(e,t,r)=>{r.d(t,{SO:()=>s,uH:()=>u,Gz:()=>c});var n=r(7294);const a={tmpl_container:"tmpl_container_owqq",head_container1:"head_container1_eVdU",descr:"descr_IERI",lists_container:"lists_container_b_fo",list:"list_c4bu",list_item:"list_item_TO8j"};var o=r(9583),i=r(5303);function c(e){return n.createElement(o.Z,{section:"Feature",subsection:e.name})}function u(){return n.createElement("p",null,"The following table lists the ",n.createElement(i.eH,null)," for the current Smart Van's feature. To verify if your SmartVan Box supports this feature, your SmartVan Box must meet the following specifications.")}function s(e){return n.createElement("table",{className:a.specs_table},n.createElement("tr",null,n.createElement("th",null,"Group"),n.createElement("th",null,"SubGroup"),n.createElement("th",null,"Purpose")),Object.keys(e.specs_required).map(((t,r)=>{const a=e.specs_required[t].group,o=e.specs_required[t].sub_group,i=e.specs_required[t].desc;return n.createElement("tr",{key:r},n.createElement("td",null,a),n.createElement("td",null,n.createElement("a",{href:"/docs/specs/"+a+"/"+o},o)),n.createElement("td",null,i))})))}},6477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,feature_name:()=>m,feature_status:()=>p,frontMatter:()=>i,metadata:()=>u,specs_required:()=>d,toc:()=>l});var n=r(3117),a=(r(7294),r(3905)),o=r(5106);const i={title:"Energy",hide_title:!0,sidebar_position:1},c=void 0,u={unversionedId:"features/monitor/energy",id:"features/monitor/energy",title:"Energy",description:"\x3c!--",source:"@site/docs/features/monitor/energy.mdx",sourceDirName:"features/monitor",slug:"/features/monitor/energy",permalink:"/docs/features/monitor/energy",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/features/monitor/energy.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Energy",hide_title:!0,sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Monitoring",permalink:"/docs/features/monitor/"},next:{title:"Waters",permalink:"/docs/features/monitor/waters"}},s={},l=[{value:"Specs required",id:"specs-required",level:2}],m="Energy Monitoring",p="Development",d=[{group:"Energy",sub_group:"Storage",desc:"Information needed to monitor the battery, create charts and analyze its performance."},{group:"Energy",sub_group:"Generation",desc:"Information on battery charging to create charts and analyze user behaviour."},{group:"Energy",sub_group:"Consumption",desc:"Information on battery consumption to create charts and analyze user behaviour."}],f={toc:l,feature_name:m},y="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Gz,{name:m,status:p,mdxType:"FeatureTitle"}),(0,a.kt)("p",null,"SmartVan Box allows you to monitor the entire energy flow of your camper, from\ngeneration through solar panels to consumption by the services. In this way,\nyou can optimize your camper's range without changing your habits."),(0,a.kt)("p",null,"In addition to real-time data and its history, you can view points on the map\nwhere the solar panels have charged the service battery the best, or where it\nis possible to connect to an electric column."),(0,a.kt)("p",null,"This feature allows you to plan your trips and ensure that you always have\nenough energy to meet your needs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are about to stop in an area with little sunlight, you can reduce your\nenergy consumption to conserve the service battery."),(0,a.kt)("li",{parentName:"ul"},"If you are about to arrive in an area with many electric columns, you can\nschedule service battery charging to save time."),(0,a.kt)("li",{parentName:"ul"},"If you are planning a long trip, you can calculate the energy consumption\nrequired to ensure that you have enough energy to reach your destination.")),(0,a.kt)("h2",{id:"specs-required"},"Specs required"),(0,a.kt)(o.uH,{mdxType:"FeatureSpecsRequiredText"}),(0,a.kt)(o.SO,{specs_required:d,mdxType:"FeatureSpecsRequiredTable"}))}h.isMDXComponent=!0}}]);