"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[7142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(3117),a=(r(7294),r(3905));const o={title:"\ud83d\ude80 FW Victron Release v1.0.2",authors:"robypomper",tags:["release","firmware"]},i=void 0,l={permalink:"/blog/2023/11/06/released-fw-victron",editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/blog/2023-11-06-released-fw-victron.mdx",source:"@site/blog/2023-11-06-released-fw-victron.mdx",title:"\ud83d\ude80 FW Victron Release v1.0.2",description:"We're thrilled to announce the release of FW Victron version 1.0.2, packed with",date:"2023-11-06T00:00:00.000Z",formattedDate:"November 6, 2023",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"firmware",permalink:"/blog/tags/firmware"}],readingTime:.735,hasTruncateMarker:!1,authors:[{name:"Roberto Pompermaier",title:"Senior Software Architect",url:"https://www.robypomper.org",imageURL:"https://github.com/robypomper.png",key:"robypomper"}],frontMatter:{title:"\ud83d\ude80 FW Victron Release v1.0.2",authors:"robypomper",tags:["release","firmware"]},prevItem:{title:"\ud83c\udf1f Smart Van Project at Maker Faire Rome 2023!",permalink:"/blog/2023/11/20/makerfaire-rome"},nextItem:{title:"\ud83d\ude80 Released the Panel Prototype",permalink:"/blog/2023/09/18/released-panel-prototype"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're thrilled to announce the release of FW Victron version 1.0.2, packed with\nexciting updates and improvements. Here's a rundown of the key changes:"),(0,a.kt)("img",{src:"/img/software/firmware/fw_victron/fw_victron_image.png",alt:"FW Victron logo",width:"300"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Enhanced Performance:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implemented property cache on run.py for optimized runtime efficiency."),(0,a.kt)("li",{parentName:"ul"},"CaFlculated properties now seamlessly integrated into dbus_definitions.py.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"VESimulator Upgrades:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Updated the VESimulator with the latest values for improved simulation accuracy.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Code Synchronization:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Achieved code synchronization across various firmware repositories, ensuring consistency and compatibility.")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Exception Handling:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improved exception handling mechanisms, enhancing overall system robustness.")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Documentation Additions:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Introduced new documentation pages:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"supported_devices.md: A comprehensive guide to supported devices."),(0,a.kt)("li",{parentName:"ul"},"values_mapping.md: Detailed mapping of property values for reference.")))),(0,a.kt)("p",null,"We encourage users to explore these updates and provide feedback. Check out the\nlatest release on\nour ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/releases/tag/1.0.2"},"GitHub repository"),"."),(0,a.kt)("p",null,"Thank you for your continued support, and happy coding! \ud83d\ude80\ud83d\udd27"))}u.isMDXComponent=!0}}]);