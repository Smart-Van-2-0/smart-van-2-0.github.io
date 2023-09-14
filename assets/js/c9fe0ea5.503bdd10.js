"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[4460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Released JOD Smart Van v.0.1.0",authors:"robypomper",tags:["release","jod_smart_van"]},i=void 0,s={permalink:"/blog/2023/09/11/released-jod-smart-van",editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/blog/2023-09-11-released-jod-smart-van.md",source:"@site/blog/2023-09-11-released-jod-smart-van.md",title:"Released JOD Smart Van v.0.1.0",description:"The first version of the JOD Smart Van distribution is available online via the",date:"2023-09-11T00:00:00.000Z",formattedDate:"September 11, 2023",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"jod_smart_van",permalink:"/blog/tags/jod-smart-van"}],readingTime:.58,hasTruncateMarker:!1,authors:[{name:"Roberto Pompermaier",title:"Senior Software Architect",url:"https://www.robypomper.org",imageURL:"https://github.com/robypomper.png",key:"robypomper"}],frontMatter:{title:"Released JOD Smart Van v.0.1.0",authors:"robypomper",tags:["release","jod_smart_van"]},prevItem:{title:"Released FW Victron v.1.0.1",permalink:"/blog/2023/09/11/released-fw-victron"},nextItem:{title:"Released FW Victron v.1.0.0",permalink:"/blog/2023/09/04/released-fw-victron"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The first version of the JOD Smart Van distribution is available online via the\nsource code repository."),(0,a.kt)("p",null,"This distribution is based on the 2.2.4-DEV version of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/johnosproject/com.robypomper.josp.jod"},"JOD daemon"),".\nIn this way it is possible to exploit the new workers for DBus and optimize\nglobal performance."),(0,a.kt)("p",null,"Included in this version, we find the firmware for integrating ",(0,a.kt)("a",{parentName:"p",href:"https://www.victronenergy.com/"},"Victron"),"\nsolar chargers. This firmware reads the data published by the device through the\nVE.Direct serial cable, after which it transmits it to the JOD daemon via DBus.\nActually it supports SmartSolar and BlueSolar series devices with the VE.Direct\nport. More info about this firmware on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/"},"his"),"\nrepository."),(0,a.kt)("p",null,"Here you can download the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.jod_smart_van/releases/tag/0.1.0"},"JOD Smart Van distribution - v0.1.0"),"\nrelease."))}u.isMDXComponent=!0}}]);