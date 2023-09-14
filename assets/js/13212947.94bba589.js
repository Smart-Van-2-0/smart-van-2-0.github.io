"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[5962],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return r?a.createElement(d,i(i({ref:t},m),{},{components:r})):a.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},168:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const n={img_container:"img_container_ABGT",img_link:"img_link_Hl3U",img_tag:"img_tag_oucX"};function o(e){return a.createElement("div",{className:n.img_container},a.createElement("a",{href:e.link?e.link:e.src,className:n.img_link},a.createElement("img",{src:e.src,alt:e.alt,width:e.width?e.width:"100%",className:n.img_tag})))}},5303:(e,t,r)=>{r.d(t,{OQ:()=>m,d9:()=>o,Td:()=>i,zk:()=>l,zP:()=>p,yu:()=>s,ZP:()=>u});var a=r(7294);const n={web_site_map:"web_site_map_qmuZ"};function o(){return a.createElement("a",{href:"/docs"},"DOCS")}function i(){return a.createElement("a",{href:"/docs/features"},"FEATURES")}function l(){return a.createElement("a",{href:"/docs/hardware"},"HARDWARE")}function s(){return a.createElement("a",{href:"/docs/software"},"SOFTWARE")}function c(){return a.createElement("a",{href:"/about"},"ABOUT")}function m(){return a.createElement("a",{href:"/collaborate"},"COLLABORATE")}function p(){return a.createElement("a",{href:"/roadmap"},"ROADMAP")}function u(){return a.createElement("div",{className:n.web_site_map},a.createElement(i,null),"|",a.createElement(l,null),"|",a.createElement(s,null),"|",a.createElement(c,null),"|",a.createElement(m,null),"|",a.createElement(p,null))}},9147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(168),i=r(5303);const l={title:"Software",sidebar_position:4},s="Smart Van's Software",c={unversionedId:"software/index",id:"software/index",title:"Software",description:"The other piece to compose a SmartVan is the software. Unfortunately, things",source:"@site/docs/software/index.md",sourceDirName:"software",slug:"/software/",permalink:"/docs/software/",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/software/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Software",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Resources",permalink:"/docs/hardware/panel_prototype/resources"},next:{title:"JOD Smart Van Image",permalink:"/docs/software/images/jod_smart_van_image/"}},m={},p=[{value:"Mobile Apps &amp; Firmwares",id:"mobile-apps--firmwares",level:2},{value:"Firmwares Sources and Repositories",id:"firmwares-sources-and-repositories",level:2}],u={toc:p},f="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"smart-vans-software"},"Smart Van's Software"),(0,n.kt)("p",null,"The other piece to compose a SmartVan is the software. Unfortunately, things\nget a little more complicated here \ud83c\udff4\u200d\u2620\ufe0f, as you are trying to assemble an IoT\ndevice from scratch \ud83d\ude09. But don't worry, let's start with the generic stuff."),(0,n.kt)("p",null,"The SmartVan is composed by two main components: (1, on the left) a Mobile App\nand (2, on the right) a set of devices placed into the Van (see ",(0,n.kt)("a",{parentName:"p",href:"hardware"},"Hardware"),"\nmodels). Both require software that must be installed on a SmartPhone and\nDevices, respectively."),(0,n.kt)(o.Z,{src:"/img/software/smartvan_diagram_for_software.png",alt:"SmartVan's Software diagram",mdxType:"ImageClickable"}),(0,n.kt)("p",null,"Almost all of us know how to ",(0,n.kt)("strong",{parentName:"p"},"install a smartphone application")," from the official\nstores. Therefore, just search for ",(0,n.kt)("code",null,"SmartVan")," in the most popular\napp stores and install the application found (at the moment no application has\nbeen published yet, therefore you will not find the right app in the results).",(0,n.kt)("br",null),"\nBut, if you want to install a specific version or the very latest available,\nyou can ",(0,n.kt)("a",{parentName:"p",href:"MOBILE_APP/Downloads"},"download the installation file")," from your SmartPhone and proceed\nwith the 'installation from file' procedure corresponding to your SmartPhone."),(0,n.kt)("p",null,"On the other hand, the hardware one, ",(0,n.kt)("strong",{parentName:"p"},"the software to be loaded on the devices\nis called Firmware"),". For each device, assembled following the tutorials in the\nHardware section, the corresponding firmware must be loaded.",(0,n.kt)("br",null),"\nEven if all the firmware supplied by the project are listed in these pages, it\nis advisable to follow the guides in the Hardware section, as they contain\nlinks and references to the correct firmware to use according to the model/device\nchosen."),(0,n.kt)("p",null,"Going into more detail, the device firmware are complete images (files) that can\nbe loaded directly on the assembled devices. Depending on the type of device,\nthey can be entire operating systems (e.g. RaspberryPi) or small portions of\nbinary code (e.g. Arduino).",(0,n.kt)("br",null),"\nIn case you want to customize or modify the Mobile App or the firmware, the\nSmartVan project makes ",(0,n.kt)("a",{href:"https://github.com/orgs/Smart-Van-2-0/repositories"},"\nall the source code repositories available"),". Don't forget to post your\nchanges to help the community. Read more on the ",(0,n.kt)("a",{parentName:"p",href:"/collaborate"},"Collaborate"),"\npage."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NB:")," ",(0,n.kt)("em",{parentName:"p"},"This is a draft list of the Smart Van software. Please see\nthe ",(0,n.kt)(i.zP,{mdxType:"MapRoadmap"})," to know when it will be updated")),(0,n.kt)("h2",{id:"mobile-apps--firmwares"},"Mobile Apps & Firmwares"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,(0,n.kt)("img",{src:"/img/software/software_mobile_app.png"})),(0,n.kt)("th",null,(0,n.kt)("img",{src:"/img/software/software_firmware.png"})))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"software/mobile_app/android"},"SmartVan 4 Android")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"software/mobile_app/ios"},"SmartVan 4 iOS")))),(0,n.kt)("td",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"software/images/jod_smart_van_image"},"SmartVan JOD Image")),(0,n.kt)("li",null,"Other devices images")))))),(0,n.kt)("h2",{id:"firmwares-sources-and-repositories"},"Firmwares Sources and Repositories"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"software/firmware/jod_smart_van"},"SmartVan JOD Distribution")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"software/firmware/fw_victron"},"FW Victron")),(0,n.kt)("li",{parentName:"ul"},"Other firmware sources...")))}d.isMDXComponent=!0}}]);