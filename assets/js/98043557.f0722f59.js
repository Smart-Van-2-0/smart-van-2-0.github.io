"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[3220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,p=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(p,s(s({ref:t},d),{},{components:r})):n.createElement(p,s({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},168:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a={img_container:"img_container_ABGT",img_link:"img_link_Hl3U",img_tag:"img_tag_oucX"};function o(e){return n.createElement("div",{className:a.img_container},n.createElement("a",{href:e.link?e.link:e.src,className:a.img_link},n.createElement("img",{src:e.src,alt:e.alt,width:e.width?e.width:"100%",className:a.img_tag})))}},9583:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a={container:"container_mzDT",h1:"h1_n6cG"};function o(e){return n.createElement("div",{className:a.container},n.createElement("h1",{className:a.h1},e.section," - ",e.subsection))}},5303:(e,t,r)=>{r.d(t,{OQ:()=>m,d9:()=>o,Td:()=>s,zk:()=>l,yu:()=>c,eH:()=>i,ZP:()=>u});var n=r(7294);const a={web_site_map:"web_site_map_qmuZ"};function o(){return n.createElement("a",{href:"/docs"},"DOCS")}function s(){return n.createElement("a",{href:"/docs/features"},"FEATURES")}function i(){return n.createElement("a",{href:"/docs/specs"},"SPECIFICATIONS")}function l(){return n.createElement("a",{href:"/docs/hardware"},"HARDWARE")}function c(){return n.createElement("a",{href:"/docs/software"},"SOFTWARE")}function d(){return n.createElement("a",{href:"/about"},"ABOUT")}function m(){return n.createElement("a",{href:"/collaborate"},"COLLABORATE")}function u(){return n.createElement("div",{className:a.web_site_map},n.createElement(s,null),"|",n.createElement(l,null),"|",n.createElement(c,null),"|",n.createElement(i,null),"|",n.createElement(d,null),"|",n.createElement(m,null))}},6204:(e,t,r)=>{r.d(t,{ZY:()=>c,i9:()=>m,PC:()=>d,IZ:()=>l});var n=r(7294);const a={tmpl_container:"tmpl_container_R_7C",head_container:"head_container_PufX",descr:"descr_x0wp",list_container:"list_container_KPRs",list:"list_TMLh",list_item:"list_item_QCGu"};var o=r(168),s=r(9583),i=r(5303);function l(e){return n.createElement(s.Z,{section:"Hardware",subsection:e.name})}function c(e){return n.createElement("div",{className:a.head_container},n.createElement("div",{className:a.list_container},n.createElement(o.Z,{src:"/img/hardware/"+e.code+"/dev_img.jpg",width:"200px"}),n.createElement("hr",null),n.createElement("h3",null,"Links"),n.createElement("ul",{className:a.list},n.createElement("li",{className:a.list_item},n.createElement("a",{href:e.code+"/specs"},"Specifications")),n.createElement("li",{className:a.list_item},n.createElement("a",{href:e.code+"/guides"},"Guides")),n.createElement("li",{className:a.list_item},n.createElement("a",{href:e.code+"/resources"},"Resources")))),n.createElement("div",{className:a.descr},e.children,n.createElement("i",null,"Follow instructions below to build your own ",e.name,".")))}function d(){return n.createElement(n.Fragment,null,n.createElement("p",null,"The following tables list the implemented Smart Van ",n.createElement(i.eH,null)," by this Smart Van Box. This allows you to verify that this box provides the specifications required by the ",n.createElement(i.Td,null)," that interest you before you embark on building your own box."),n.createElement("p",null,"For each specification, the corresponding firmwares are also listed. This makes it easy to understand the dependencies between the specifications provided by the Smart Van Box and the hardware it contains."),n.createElement("p",null,"Remember that if you modify the configurations of the ",n.createElement("a",{href:"/docs/software/jod_smart_van/jod_smart_van"},"JOD Smart Van"),", specifically the ",n.createElement("code",null,"struct.jod")," file, then the specifications provided by your Smart Van Box will change accordingly."))}function m(e){return n.createElement("div",null,n.createElement("table",{className:a.specs_table},n.createElement("tr",null,n.createElement("th",null,"Group"),n.createElement("th",null,"SubGroup"),n.createElement("th",null,"Firmware or Device"),n.createElement("th",null,"Description")),Object.keys(e.specs_implemented).map(((t,r)=>{const a=e.specs_implemented[t],o=a.group;void 0===a.fw&&(a.fw=[]);const s=a.sub_group,i=a.fw,l=a.desc;return n.createElement("tr",{key:r},n.createElement("td",null,n.createElement("a",{href:"/docs/specs/"+o},o)),n.createElement("td",null,n.createElement("a",{href:"/docs/specs/"+o+"/"+s},s)),n.createElement("td",null,i.map(((e,t)=>{const r=e.toLowerCase().replace(/fw /g,"fw_").replace(/ /g,"");return n.createElement("a",{href:"/docs/software/firmware/"+r},e,n.createElement("br",null))}))),n.createElement("td",null,l))}))))}},2505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,hardware_code:()=>h,hardware_name:()=>m,hardware_status:()=>u,metadata:()=>l,toc:()=>d});var n=r(3117),a=(r(7294),r(3905)),o=r(6204);const s={title:"SVBox IoT 1.0",hide_title:!0,sidebar_position:1},i=void 0,l={unversionedId:"hardware/svbox_10/index",id:"hardware/svbox_10/index",title:"SVBox IoT 1.0",description:"\x3c!--",source:"@site/docs/hardware/svbox_10/index.mdx",sourceDirName:"hardware/svbox_10",slug:"/hardware/svbox_10/",permalink:"/docs/hardware/svbox_10/",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/hardware/svbox_10/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"SVBox IoT 1.0",hide_title:!0,sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Hardware",permalink:"/docs/hardware/"},next:{title:"Specs",permalink:"/docs/hardware/svbox_10/specs"}},c={},d=[{value:"Build your Smart Van Box",id:"build-your-smart-van-box",level:2},{value:"Model&#39;s resources",id:"models-resources",level:2}],m="SVBox IoT",u="Available",h="svbox_10",p={toc:d,hardware_name:m},f="wrapper";function b(e){let{components:t,...s}=e;return(0,a.kt)(f,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.IZ,{name:m,status:u,mdxType:"HardwareTitle"}),(0,a.kt)(o.ZY,{code:h,mdxType:"HardwareHeader"},(0,a.kt)("p",null,"This model of the Smart Van Box is designed ",(0,a.kt)("strong",{parentName:"p"},"to be used daily within your own\nvehicles"),"."),(0,a.kt)("p",null,"This model can provide mobile internet connectivity through the 4G module\nenvironmental monitoring with sensors, and the ability to connect up to 8 camper's\nservices with as many physical buttons.",(0,a.kt)("br",null),"\nFurthermore, this prototype is equipped with a GNSS module and a buffer battery\nfor IoT components. This way, your van will stay connected even when the vehicle\nbatteries are completely discharged or not plugged.")),(0,a.kt)("h2",{id:"build-your-smart-van-box"},"Build your Smart Van Box"),(0,a.kt)("p",null,"Explore the documentation of this prototype to get an idea of how to adapt it to\nyour needs. We recommend looking at the list of ",(0,a.kt)("a",{parentName:"p",href:"/docs/hardware/svbox_10/resources#hardware-requirements"},"required materials"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/docs/hardware/svbox_10/resources#cases"},"case 3D models")," to\nunderstand which devices need to be included in this prototype and where you can\nposition them."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("h3",null,"Prepare all the necessary materials"),"Check the [Hardware Requirements](/docs/hardware/svbox_10/resources#hardware-requirements) and ensure you have everything needed to start."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("h3",null,"Assemble your own Smart Van Box"),"Build your device following the [assembly guides](/docs/hardware/svbox_10/guides#assembly)."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("h3",null,"Load the JOD Smart Van image and power everything on"),"Flash the [JOD Smart Van](/docs/software/jod_smart_van/jod_smart_van) image onto the SD card to be inserted into the 4Raspberry Pi. After that, insert it into the Raspberry Pi and power it on.")),(0,a.kt)("h2",{id:"models-resources"},"Model's resources"),(0,a.kt)("p",null,"The SVBox IoT's an IoT device based on Raspberry Pi that, with ",(0,a.kt)("a",{parentName:"p",href:"/docs/software/jod_smart_van/jod_smart_van"},"JOD Smart Van"),",\nenables monitoring and controlling all services/systems connected to the Raspberry Pi\nand, consequently, the Smart Van Box."),(0,a.kt)("p",null,"Within this device, various sensors are integrated, such as environmental\nsensors, gas detection sensors, but also GPS and GSM modules. Additionally, the\nblock houses a buffer battery (UPS) that provides power to the IoT component\neven when the service battery is disconnected or depleted."),(0,a.kt)("p",null,"The IoT block use a ribbon cable to connect the Raspberry Pi to all devices\nwith a 40-PIN header like the ",(0,a.kt)("a",{parentName:"p",href:"/docs/software/firmware/fw_sensehat"},"Sense Hat"),",\nthe ",(0,a.kt)("a",{parentName:"p",href:"/docs/software/firmware/fw_sim7600"},"SIM7600")," and also a small custom\nPCB board. This custom board houses the ports to connect the other devices in\nthe IoT block to the ribbon cable and thus to the Raspberry Pi."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{target:"_blank",href:r(1382).Z},"BOMs IoT Box")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/img/hardware/svbox_10/resources/Design%20Panel%20Prototype-IoT%20Block%20Wiring%20Schema.png"},"Wiring IoT Box"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{target:"_blank",href:r(9533).Z},"Raspberry Pinout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{target:"_blank",href:r(5687).Z},"Raspberry and Boards Pin-outs"))))))}b.isMDXComponent=!0},1382:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/BOMs-BlockIoT-ba06a57bc41ff079904241474a42c1b6.pdf"},5687:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/RaspberryPi 2 Boards Pinout-debe71f66f338935d64d8731c03230dd.ods"},9533:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/RaspberryPi 2 Boards Pinout-275954a76d842923040c064656294d11.pdf"}}]);