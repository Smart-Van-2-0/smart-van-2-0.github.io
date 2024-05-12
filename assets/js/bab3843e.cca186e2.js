"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[1844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(3117),r=(n(7294),n(3905));const a={title:"\ud83d\ude80 Introducing the New SVBox IoT 1.0",authors:"robypomper",tags:["release","svbox"]},i=void 0,s={permalink:"/blog/2024/05/06/published-new-svbox-iot-10",editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/blog/2024-05-06-published-new-svbox-iot-10.mdx",source:"@site/blog/2024-05-06-published-new-svbox-iot-10.mdx",title:"\ud83d\ude80 Introducing the New SVBox IoT 1.0",description:"We are thrilled to announce the release of our latest model, the SVBox IoT 1.0.",date:"2024-05-06T00:00:00.000Z",formattedDate:"May 6, 2024",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"svbox",permalink:"/blog/tags/svbox"}],readingTime:1.535,hasTruncateMarker:!1,authors:[{name:"Roberto Pompermaier",title:"Senior Software Architect",url:"https://www.robypomper.org",imageURL:"https://github.com/robypomper.png",key:"robypomper"}],frontMatter:{title:"\ud83d\ude80 Introducing the New SVBox IoT 1.0",authors:"robypomper",tags:["release","svbox"]},nextItem:{title:"\ud83d\ude80 Released JOD Smart Van v.1.0.0",permalink:"/blog/2023/12/05/released-jod-smart-van"}},l={authorsImageUrls:[void 0]},c=[{value:"Assembly and Configuration",id:"assembly-and-configuration",level:2},{value:"Specifications and Features",id:"specifications-and-features",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are thrilled to announce the release of our latest model, the SVBox IoT 1.0.\nThis new model is a significant upgrade from our previous versions, focusing on\nthe Internet of Things (IoT) and the 'brain' of the Smart Van Box."),(0,r.kt)("img",{src:"/img/hardware/svbox_10/dev_img.jpg",alt:"JOD Smart Van logo",width:"500"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"SVBox IoT 1.0 is designed for daily use within your vehicles"),". It is a\ncompact, efficient, and powerful device that can seamlessly integrate with your\nexisting vehicle systems."),(0,r.kt)("h2",{id:"assembly-and-configuration"},"Assembly and Configuration"),(0,r.kt)("p",null,"We have made the assembly process as simple and intuitive as possible. The SVBox\nIoT 1.0 uses HAT modules, which are designed to be stacked one on top of the other,\nmuch like LEGO bricks. This design allows for easy assembly and disassembly,\nproviding flexibility and convenience."),(0,r.kt)("p",null,"In addition to the main HAT modules, there are three other boards (2x gas sensors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"relays) that need to be connected via cables to the main block of the device,\nwhich also houses the Raspberry Pi. Once you have received all the components,\nyou can proceed with the assembly.")),(0,r.kt)("h2",{id:"specifications-and-features"},"Specifications and Features"),(0,r.kt)("p",null,"The SVBox IoT 1.0 comes with a host of features and specifications. It can provide\nGNSS info from various systems (GPS/Beidou/GLONASS/GALILEO/QZSS), detect movement,\norientation, and the magnetic field, provide environment-related data, and much more."),(0,r.kt)("p",null,"With the AW9523B, the IO Expansion board can listen up to 16 buttons (8 by default)\nand control up to 16 relays (8 by default). Victron's SmartSolar/BlueSolar series\ndevices can provide info about the service's battery status, solar panel charge,\nand load consumption."),(0,r.kt)("p",null,"The UPS Pack with its own battery for the IoT block provides info about the\nbattery status. The SIM7600 module can provide mobile connectivity and its\nstatus. You can use the onboard RPi WiFi to provide a local WiFi network and\nkeep track of the RPi load status."))}d.isMDXComponent=!0}}]);