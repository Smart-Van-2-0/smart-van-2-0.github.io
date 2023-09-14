"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[1764],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=o,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7354:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const o={container:"container_Me6f",h1:"h1_PSdY",h2:"h2_xB3B"};function a(e){return n.createElement("div",{className:o.container},n.createElement("h1",{className:o.h1},e.section," - ",e.subsection),n.createElement("h2",{className:o.h2},e.page))}},2286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>w,frontMatter:()=>p,metadata:()=>d,toc:()=>f});var n=r(7462),o=r(7294),a=r(3905);const c={tmpl_container:"tmpl_container_zDws",head_container:"head_container_apVm",descr:"descr_YZAH",list_container:"list_container_zPoR",list:"list_tBUk",list_item:"list_item_NxKe"};var l=r(7354);function i(e){return o.createElement("div",null,Object.keys(e.specs_list).map(((t,r)=>o.createElement("div",{key:r},Object.keys(e.specs_list[t]).map(((r,n)=>o.createElement("div",{key:n},o.createElement("h4",null,t," - ",r),o.createElement("table",null,o.createElement("tr",null,o.createElement("th",null,"Specs"),o.createElement("th",null,"Firmware"),o.createElement("th",null,"Device")),Object.keys(e.specs_list[t][r]).map(((n,a)=>o.createElement("tr",{key:a},o.createElement("td",null,e.specs_list[t][r][n].name),o.createElement("td",null,o.createElement("a",{href:"/docs/software/firmware/"+e.specs_list[t][r][n].fw_code},e.specs_list[t][r][n].fw_code)),o.createElement("td",null,e.specs_list[t][r][n].device))))))))))))}function s(e){return o.createElement("div",{className:c.tmpl_container},o.createElement(l.Z,{section:"Hardware",subsection:e.name,page:"Provided Smart Van Specifications"}),o.createElement(i,{specs_list:e.specs_list}))}const p={title:"Specs",hide_title:!0,sidebar_position:1},m=void 0,d={unversionedId:"hardware/panel_prototype/specs",id:"hardware/panel_prototype/specs",title:"Specs",description:"<PageHardwareSpecs",source:"@site/docs/hardware/panel_prototype/specs.md",sourceDirName:"hardware/panel_prototype",slug:"/hardware/panel_prototype/specs",permalink:"/docs/hardware/panel_prototype/specs",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/hardware/panel_prototype/specs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Specs",hide_title:!0,sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Panel Prototype",permalink:"/docs/hardware/panel_prototype/"},next:{title:"Guides",permalink:"/docs/hardware/panel_prototype/guides"}},u={},f=[],_={toc:f},v="wrapper";function w(e){let{components:t,...r}=e;return(0,a.kt)(v,(0,n.Z)({},_,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s,{name:"Panel Prototype",code:"panel_prototype",specs_list:{Energy:{Battery:[{name:"Recharging Current",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Current Voltage",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Current Percentage",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Min Voltage Allowed",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Max Voltage Allowed",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Current Temperature",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"}],"All services":[{name:"Consumption Current",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Consumption Voltage",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Consumption Power",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Consumption Percentage",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Max Consumed Power",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"}],"Solar Panels":[{name:"Generated Current",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Generated Voltage",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Generated Power",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Generated Power Percentage",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"},{name:"Max Generated Power",fw_code:"fw_victron",device:"Victron SmartSolar or BlueSolar"}]}},mdxType:"PageHardwareSpecs"},(0,a.kt)("p",null,"  This is the ...")))}w.isMDXComponent=!0}}]);