"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[9984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,h=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return r?n.createElement(h,l(l({ref:t},m),{},{components:r})):n.createElement(h,l({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},168:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a={img_container:"img_container_ABGT",img_link:"img_link_Hl3U",img_tag:"img_tag_oucX"};function o(e){return n.createElement("div",{className:a.img_container},n.createElement("a",{href:e.link?e.link:e.src,className:a.img_link},n.createElement("img",{src:e.src,alt:e.alt,width:e.width?e.width:"100%",className:a.img_tag})))}},9583:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a={container:"container_mzDT",h1:"h1_n6cG"};function o(e){return n.createElement("div",{className:a.container},n.createElement("h1",{className:a.h1},e.section," - ",e.subsection))}},8669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>_,contentTitle:()=>f,default:()=>w,frontMatter:()=>h,metadata:()=>y,toc:()=>b});var n=r(7462),a=r(7294),o=r(3905);const l={tmpl_container:"tmpl_container_R_7C",head_container:"head_container_PufX",descr:"descr_x0wp",list_container:"list_container_KPRs",list:"list_TMLh",list_item:"list_item_QCGu"};var c=r(168),i=r(9583);function s(e){return a.createElement("div",{className:l.head_container},a.createElement("p",{className:l.descr},a.createElement("h3",null,"Description"),e.children,a.createElement("i",null,"Follow instructions below to build your own ",e.name,".")),a.createElement("div",{className:l.list_container},a.createElement("h3",null,"Photo"),a.createElement(c.Z,{src:"/img/hardware/"+e.code+"/dev_img.jpg",alt:"Panel Prototype's blocks Schema",width:"200px"}),a.createElement("h3",null,"Links"),a.createElement("ul",{className:l.list},a.createElement("li",{className:l.list_item},a.createElement("a",{href:e.code+"/specs"},"Specifications")),a.createElement("li",{className:l.list_item},a.createElement("a",{href:e.code+"/guides"},"Guides")),a.createElement("li",{className:l.list_item},a.createElement("a",{href:e.code+"/resources"},"Resources")))))}function m(e){return a.createElement("div",null,a.createElement("h3",null,"Block schema"),a.createElement(c.Z,{src:"/img/hardware/"+e.code+"/hw_blocks_schema.png",alt:"Panel Prototype's blocks Schema",width:"50%"}))}function d(e){return a.createElement("div",null,a.createElement("h3",null,"Build your device"),a.createElement("h4",null,"1. Get the hardware"),a.createElement("p",null,"Check the ",a.createElement("a",{href:e.code+"/bom"},"BOM")," lists and make sure you have everything before you start."),a.createElement("h4",null,"2. Assembly your device"),a.createElement("p",null,"Follow the prototype's ",a.createElement("a",{href:e.code+"/assembly"},"Assembly")," tutorial."),a.createElement("h4",null,"2. Flash the JOD Smart Van Image on RaspberryPi SD Card"),a.createElement("p",null,"Follow the documentation on ",a.createElement("a",{href:"/docs/software/image/jod_smart_van_image"},"JOD Smart Van")," page."))}function p(e){return a.createElement("div",null)}function u(e){return a.createElement("div",{className:l.tmpl_container},a.createElement(i.Z,{section:"Hardware",subsection:e.name}),a.createElement(s,{code:e.code},e.children),a.createElement(m,{code:e.code}),a.createElement(d,{code:e.code}),a.createElement(p,{code:e.code}))}const h={title:"Panel Prototype",hide_title:!0,sidebar_position:1},f=void 0,y={unversionedId:"hardware/panel_prototype/index",id:"hardware/panel_prototype/index",title:"Panel Prototype",description:"<PageHardware",source:"@site/docs/hardware/panel_prototype/index.md",sourceDirName:"hardware/panel_prototype",slug:"/hardware/panel_prototype/",permalink:"/docs/hardware/panel_prototype/",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/hardware/panel_prototype/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Panel Prototype",hide_title:!0,sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Hardware",permalink:"/docs/hardware/"},next:{title:"Specs",permalink:"/docs/hardware/panel_prototype/specs"}},_={},b=[],g={toc:b},v="wrapper";function w(e){let{components:t,...r}=e;return(0,o.kt)(v,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{name:"Panel Prototype",code:"panel_prototype",mdxType:"PageHardware"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Panel Prototype is the first Smart Van Box's version"),", used to implement the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/software/firmware/jod_smart_van"},"JOD Smart Van Distribution"),".",(0,o.kt)("br",null),"\nThis prototype is designed to be easily moved IN and OUT the van, but also to\nbe easily accessed to updated or change devices and wires."),(0,o.kt)("p",null,"This panel includes the devices for all three Boxes.",(0,o.kt)("br",null),"\nThe ",(0,o.kt)("strong",{parentName:"p"},"Power Box")," is based on the SmartSolar charger from Victron and includes also\nan inverter, a power charger (from 220V) and a DC/DC charger to the vehicle battery.",(0,o.kt)("br",null),"\nInto the ",(0,o.kt)("strong",{parentName:"p"},"Integration Box")," we can find all fuses for the camper's services but also\nthe relays module used to control those services.",(0,o.kt)("br",null),"\nFinally, the ",(0,o.kt)("strong",{parentName:"p"},"IoT Box")," is based on a Raspberry Pi plus: a SIM7600H-E, a Sense hat (c),\na UPS PowerPack, an 8 buttons box and other sensors.")))}w.isMDXComponent=!0}}]);