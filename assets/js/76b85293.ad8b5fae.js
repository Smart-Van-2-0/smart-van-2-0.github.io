"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[3350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>_});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,_=u["".concat(c,".").concat(d)]||u[d]||p[d]||s;return r?a.createElement(_,o(o({ref:t},m),{},{components:r})):a.createElement(_,o({ref:t},m))}));function _(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var i=2;i<s;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},168:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294);const n={img_container:"img_container_ABGT",img_link:"img_link_Hl3U",img_tag:"img_tag_oucX"};function s(e){return a.createElement("div",{className:n.img_container},a.createElement("a",{href:e.link?e.link:e.src,className:n.img_link},a.createElement("img",{src:e.src,alt:e.alt,width:e.width?e.width:"100%",className:n.img_tag})))}},9583:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294);const n={container:"container_mzDT",h1:"h1_n6cG"};function s(e){return a.createElement("div",{className:n.container},a.createElement("h1",{className:n.h1},e.section," - ",e.subsection))}},5303:(e,t,r)=>{r.d(t,{OQ:()=>u,d9:()=>s,Td:()=>o,zk:()=>c,yu:()=>i,eH:()=>l,ZP:()=>p});var a=r(7294);const n={web_site_map:"web_site_map_qmuZ"};function s(){return a.createElement("a",{href:"/docs"},"DOCS")}function o(){return a.createElement("a",{href:"/docs/features"},"FEATURES")}function l(){return a.createElement("a",{href:"/docs/specs"},"SPECIFICATIONS")}function c(){return a.createElement("a",{href:"/docs/hardware"},"HARDWARE")}function i(){return a.createElement("a",{href:"/docs/software"},"SOFTWARE")}function m(){return a.createElement("a",{href:"/about"},"ABOUT")}function u(){return a.createElement("a",{href:"/collaborate"},"COLLABORATE")}function p(){return a.createElement("div",{className:n.web_site_map},a.createElement(o,null),"|",a.createElement(c,null),"|",a.createElement(i,null),"|",a.createElement(l,null),"|",a.createElement(m,null),"|",a.createElement(u,null))}},8651:(e,t,r)=>{r.d(t,{TL:()=>i,Ow:()=>u,f6:()=>m,aN:()=>c});var a=r(7294);const n={tmpl_container:"tmpl_container_A9hk",specs_table:"specs_table_BWcA",head_container:"head_container_KR7S",descr:"descr_CuXp",lists_container:"lists_container_Qejd",logo:"logo_Y7bK",list:"list_tLdV",list_item:"list_item_WUvh"};var s=r(168),o=r(9583),l=r(5303);function c(e){return a.createElement(o.Z,{section:"Software",subsection:e.name})}function i(e){return a.createElement("div",{className:n.head_container},a.createElement("div",{className:n.lists_container},e.url_logo?a.createElement("div",null,a.createElement(s.Z,{src:e.url_logo,width:"200px"}),a.createElement("hr",null)):null,a.createElement("h3",null,"Status"),a.createElement("ul",{className:n.list},a.createElement("li",{className:n.list_item},a.createElement("b",null,"Status:")," ",e.current_status),a.createElement("li",{className:n.list_item},a.createElement("b",null,"Version:")," ",e.current_version),a.createElement("li",{className:n.list_item},a.createElement("b",null,"Category:")," ",e.category),a.createElement("li",{className:n.list_item},a.createElement("b",null,"Language:")," ",e.language),a.createElement("li",{className:n.list_item},a.createElement("b",null,"Code:")," ",e.code)),a.createElement("hr",null),a.createElement("h3",null,"Links"),a.createElement("ul",{className:n.list},e.url_repo?a.createElement("li",{className:n.list_item},a.createElement("a",{href:e.url_repo+""},"Git Repo")):"",e.url_docs?a.createElement("li",{className:n.list_item},a.createElement("a",{href:e.url_docs+""},"Docs")):"",e.url_downloads?a.createElement("li",{className:n.list_item},a.createElement("a",{href:e.url_downloads+""},"Downloads")):"",e.url_support?a.createElement("li",{className:n.list_item},a.createElement("a",{href:e.url_support+""},"Support")):"")),a.createElement("div",{className:n.descr},e.children))}function m(){return a.createElement("p",null,"The following table lists all Smart Van ",a.createElement(l.eH,null)," that can be provided by this firmware. Then, you can use this info to customize the `struct.jod` file of the ",a.createElement("a",{href:"/docs/software/jod_smart_van/jod_smart_van"},"JOD Smart Van")," distribution.")}function u(e){return a.createElement("table",{className:n.specs_table},a.createElement("tr",null,a.createElement("th",null,"Property Name"),a.createElement("th",null,"Specification")),Object.keys(e.specs_provided).map(((t,r)=>{const n=e.specs_provided[t].fw_value,s=e.specs_provided[t].group,o=e.specs_provided[t].sub_group,l=e.specs_provided[t].spec;return a.createElement("tr",{key:r},a.createElement("td",null,a.createElement("code",null,n)),a.createElement("td",null,a.createElement("a",{href:"/docs/specs/"+s+"/"+o+"#"+l},s," > ",o," > ",l)))})))}},2215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>E,frontMatter:()=>o,metadata:()=>c,software_category:()=>f,software_code:()=>d,software_language:()=>v,software_name:()=>u,software_status:()=>p,software_version:()=>_,specs_provided:()=>g,toc:()=>m});var a=r(3117),n=(r(7294),r(3905)),s=r(8651);const o={title:"FW UPS Pack_V3",hide_title:!0,sidebar_position:3},l=void 0,c={unversionedId:"software/firmware/fw_upspack_v3/index",id:"software/firmware/fw_upspack_v3/index",title:"FW UPS Pack_V3",description:"\x3c!--",source:"@site/docs/software/firmware/fw_upspack_v3/index.mdx",sourceDirName:"software/firmware/fw_upspack_v3",slug:"/software/firmware/fw_upspack_v3/",permalink:"/docs/software/firmware/fw_upspack_v3/",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/software/firmware/fw_upspack_v3/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"FW UPS Pack_V3",hide_title:!0,sidebar_position:3},sidebar:"docsSidebar",previous:{title:"FW SIM7600",permalink:"/docs/software/firmware/fw_sim7600/"},next:{title:"FW Sense HAT",permalink:"/docs/software/firmware/fw_sensehat/"}},i={},m=[{value:"Specs provided",id:"specs-provided",level:2},{value:"Usage",id:"usage",level:2}],u="FW UPS Pack_V3",p="Development",d="fw_upspack_v3",_="1.0.0",f="Firmware",v="Python",g=[{fw_value:"battery_voltage",group:"Energy",sub_group:"Storage",spec:"Voltage"},{fw_value:"battery_voltage_percentage",group:"Energy",sub_group:"Storage",spec:"Percentage"},{fw_value:"battery_voltage_min",group:"Energy",sub_group:"Storage",spec:"Min"},{fw_value:"battery_voltage_mxa",group:"Energy",sub_group:"Storage",spec:"Max"}],h={toc:m,software_name:u},w="wrapper";function E(e){let{components:t,...r}=e;return(0,n.kt)(w,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.aN,{name:u,status:p,mdxType:"SoftwareTitle"}),(0,n.kt)(s.TL,{name:u,code:d,category:f,language:v,current_status:p,current_version:_,url_logo:"/img/software/firmware/fw_upspack_v3/fw_upspack_v3_image.jpeg",url_repo:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.upspack_v3/",url_downloads:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.upspack_v3/tags/",url_support:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.upspack_v3/issues/",mdxType:"SoftwareHeader"},(0,n.kt)("p",null,"Simple Python module that read data from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rcdrones/UPSPACK_V3/blob/master/README_en.md"},"UPS Pack_V3"),"\ndevice and share them on the local DBus.",(0,n.kt)("br",null),"\nThis repository is part of the ",(0,n.kt)("a",{parentName:"p",href:"https://smartvan.johnosproject.org/"},"Smart Van Project"),"."),(0,n.kt)("p",null,"Once ran, this script ",(0,n.kt)("strong",{parentName:"p"},"reads data from the serial specified port then notify\nthe DBus with updated values"),". The DBus service and his properties depends on\nthe version get from the device (",(0,n.kt)("inlineCode",{parentName:"p"},"SmartUPS")," field). More info on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.upspack_v3/#supported-devices-and-value-mapping"},"Supported\ndevices and value mapping"),".")),(0,n.kt)("h2",{id:"specs-provided"},"Specs provided"),(0,n.kt)(s.f6,{mdxType:"SoftwareSpecsProvidedText"}),(0,n.kt)(s.Ow,{specs_provided:g,mdxType:"SoftwareSpecsProvidedTable"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"TODO: write the usage section for Firmware/UPS Pack_V3"))}E.isMDXComponent=!0}}]);