"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[6053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9583:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const a={container:"container_mzDT",h1:"h1_n6cG"};function o(e){return r.createElement("div",{className:a.container},r.createElement("h1",{className:a.h1},e.section," - ",e.subsection))}},5303:(e,t,n)=>{n.d(t,{OQ:()=>m,d9:()=>o,Td:()=>i,zk:()=>l,yu:()=>s,eH:()=>c,ZP:()=>p});var r=n(7294);const a={web_site_map:"web_site_map_qmuZ"};function o(){return r.createElement("a",{href:"/docs"},"DOCS")}function i(){return r.createElement("a",{href:"/docs/features"},"FEATURES")}function c(){return r.createElement("a",{href:"/docs/specs"},"SPECIFICATIONS")}function l(){return r.createElement("a",{href:"/docs/hardware"},"HARDWARE")}function s(){return r.createElement("a",{href:"/docs/software"},"SOFTWARE")}function u(){return r.createElement("a",{href:"/about"},"ABOUT")}function m(){return r.createElement("a",{href:"/collaborate"},"COLLABORATE")}function p(){return r.createElement("div",{className:a.web_site_map},r.createElement(i,null),"|",r.createElement(l,null),"|",r.createElement(s,null),"|",r.createElement(c,null),"|",r.createElement(u,null),"|",r.createElement(m,null))}},5106:(e,t,n)=>{n.d(t,{SO:()=>s,uH:()=>l,Gz:()=>c});var r=n(7294);const a={tmpl_container:"tmpl_container_owqq",head_container1:"head_container1_eVdU",descr:"descr_IERI",lists_container:"lists_container_b_fo",list:"list_c4bu",list_item:"list_item_TO8j"};var o=n(9583),i=n(5303);function c(e){return r.createElement(o.Z,{section:"Feature",subsection:e.name})}function l(){return r.createElement("p",null,"The following table lists the ",r.createElement(i.eH,null)," for the current Smart Van's feature. To verify if your SmartVan Box supports this feature, your SmartVan Box must meet the following specifications.")}function s(e){return r.createElement("table",{className:a.specs_table},r.createElement("tr",null,r.createElement("th",null,"Group"),r.createElement("th",null,"SubGroup"),r.createElement("th",null,"Purpose")),Object.keys(e.specs_required).map(((t,n)=>{const a=e.specs_required[t].group,o=e.specs_required[t].sub_group,i=e.specs_required[t].desc;return r.createElement("tr",{key:n},r.createElement("td",null,a),r.createElement("td",null,r.createElement("a",{href:"/docs/specs/"+a+"/"+o},o)),r.createElement("td",null,i))})))}},5140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>y,feature_name:()=>m,feature_status:()=>p,frontMatter:()=>i,metadata:()=>l,specs_required:()=>d,toc:()=>u});var r=n(3117),a=(n(7294),n(3905)),o=n(5106);const i={title:"Engine",hide_title:!0,sidebar_position:6},c=void 0,l={unversionedId:"features/monitor/vehicle_engine",id:"features/monitor/vehicle_engine",title:"Engine",description:"\x3c!--",source:"@site/docs/features/monitor/vehicle_engine.mdx",sourceDirName:"features/monitor",slug:"/features/monitor/vehicle_engine",permalink:"/docs/features/monitor/vehicle_engine",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/features/monitor/vehicle_engine.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Engine",hide_title:!0,sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Indoor",permalink:"/docs/features/monitor/indoor"},next:{title:"GNSS",permalink:"/docs/features/monitor/vehicle_gnss"}},s={},u=[{value:"Specs required",id:"specs-required",level:2}],m="Vehicle engine Monitoring",p="Development",d=[{group:"Sensors",sub_group:"Engine",desc:"Information to monitor the vehicle status."}],f={toc:u,feature_name:m},h="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Gz,{name:m,status:p,mdxType:"FeatureTitle"}),(0,a.kt)("p",null,"SmartVan uses the OBD-II port to monitor the engine status of your vehicle. This\ninformation can be used to keep track of various engine parameters, such as\ntemperature, speed, fuel level, and error codes."),(0,a.kt)("p",null,"SmartVan can also alert you in case of problems, such as a low fuel level or a\ndetected error code. This can help you avoid unexpected breakdowns and keep\nyour vehicle running smoothly."),(0,a.kt)("p",null,"Here some benefits of vehicle engine monitoring with SmartVan"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Peace of mind: SmartVan can help you travel more peacefully and serenely,\nknowing that your vehicle is being monitored."),(0,a.kt)("li",{parentName:"ul"},"Preventive maintenance: SmartVan can help you identify potential problems\nearly, so you can take steps to prevent them from becoming major issues."),(0,a.kt)("li",{parentName:"ul"},"Cost savings: SmartVan can help you save money on repairs and maintenance by\nidentifying and addressing problems early.")),(0,a.kt)("h2",{id:"specs-required"},"Specs required"),(0,a.kt)(o.uH,{mdxType:"FeatureSpecsRequiredText"}),(0,a.kt)(o.SO,{specs_required:d,mdxType:"FeatureSpecsRequiredTable"}))}y.isMDXComponent=!0}}]);