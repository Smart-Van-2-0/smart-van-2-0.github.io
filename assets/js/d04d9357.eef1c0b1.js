"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[1078],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,p=u["".concat(i,".").concat(d)]||u[d]||_[d]||l;return r?a.createElement(p,o(o({ref:t},m),{},{components:r})):a.createElement(p,o({ref:t},m))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},168:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294);const n={img_container:"img_container_ABGT",img_link:"img_link_Hl3U",img_tag:"img_tag_oucX"};function l(e){return a.createElement("div",{className:n.img_container},a.createElement("a",{href:e.link?e.link:e.src,className:n.img_link},a.createElement("img",{src:e.src,alt:e.alt,width:e.width?e.width:"100%",className:n.img_tag})))}},9583:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294);const n={container:"container_mzDT",h1:"h1_n6cG"};function l(e){return a.createElement("div",{className:n.container},a.createElement("h1",{className:n.h1},e.section," - ",e.subsection))}},5303:(e,t,r)=>{r.d(t,{OQ:()=>u,d9:()=>l,Td:()=>o,zk:()=>i,yu:()=>c,eH:()=>s,ZP:()=>_});var a=r(7294);const n={web_site_map:"web_site_map_qmuZ"};function l(){return a.createElement("a",{href:"/docs"},"DOCS")}function o(){return a.createElement("a",{href:"/docs/features"},"FEATURES")}function s(){return a.createElement("a",{href:"/docs/specs"},"SPECIFICATIONS")}function i(){return a.createElement("a",{href:"/docs/hardware"},"HARDWARE")}function c(){return a.createElement("a",{href:"/docs/software"},"SOFTWARE")}function m(){return a.createElement("a",{href:"/about"},"ABOUT")}function u(){return a.createElement("a",{href:"/collaborate"},"COLLABORATE")}function _(){return a.createElement("div",{className:n.web_site_map},a.createElement(o,null),"|",a.createElement(i,null),"|",a.createElement(c,null),"|",a.createElement(s,null),"|",a.createElement(m,null),"|",a.createElement(u,null))}},8651:(e,t,r)=>{r.d(t,{TL:()=>c,Ow:()=>u,f6:()=>m,aN:()=>i});var a=r(7294);const n={tmpl_container:"tmpl_container_A9hk",specs_table:"specs_table_BWcA",head_container:"head_container_KR7S",descr:"descr_CuXp",lists_container:"lists_container_Qejd",logo:"logo_Y7bK",list:"list_tLdV",list_item:"list_item_WUvh"};var l=r(168),o=r(9583),s=r(5303);function i(e){return a.createElement(o.Z,{section:"Software",subsection:e.name})}function c(e){return a.createElement("div",{className:n.head_container},a.createElement("div",{className:n.lists_container},e.url_logo?a.createElement("div",null,a.createElement(l.Z,{src:e.url_logo,width:"200px"}),a.createElement("hr",null)):null,a.createElement("h3",null,"Status"),a.createElement("ul",{className:n.list},a.createElement("li",{className:n.list_item},a.createElement("b",null,"Status:")," ",e.current_status),a.createElement("li",{className:n.list_item},a.createElement("b",null,"Version:")," ",e.current_version),a.createElement("li",{className:n.list_item},a.createElement("b",null,"Category:")," ",e.category),a.createElement("li",{className:n.list_item},a.createElement("b",null,"Language:")," ",e.language),a.createElement("li",{className:n.list_item},a.createElement("b",null,"Code:")," ",e.code)),a.createElement("hr",null),a.createElement("h3",null,"Links"),a.createElement("ul",{className:n.list},e.url_repo?a.createElement("li",{className:n.list_item},a.createElement("a",{href:e.url_repo+""},"Git Repo")):"",e.url_docs?a.createElement("li",{className:n.list_item},a.createElement("a",{href:e.url_docs+""},"Docs")):"",e.url_downloads?a.createElement("li",{className:n.list_item},a.createElement("a",{href:e.url_downloads+""},"Downloads")):"",e.url_support?a.createElement("li",{className:n.list_item},a.createElement("a",{href:e.url_support+""},"Support")):"")),a.createElement("div",{className:n.descr},e.children))}function m(){return a.createElement("p",null,"The following table lists all Smart Van ",a.createElement(s.eH,null)," that can be provided by this firmware. Then, you can use this info to customize the `struct.jod` file of the ",a.createElement("a",{href:"/docs/software/jod_smart_van/jod_smart_van"},"JOD Smart Van")," distribution.")}function u(e){return a.createElement("table",{className:n.specs_table},a.createElement("tr",null,a.createElement("th",null,"Property Name"),a.createElement("th",null,"Specification")),Object.keys(e.specs_provided).map(((t,r)=>{const n=e.specs_provided[t].fw_value,l=e.specs_provided[t].group,o=e.specs_provided[t].sub_group,s=e.specs_provided[t].spec;return a.createElement("tr",{key:r},a.createElement("td",null,a.createElement("code",null,n)),a.createElement("td",null,a.createElement("a",{href:"/docs/specs/"+l+"/"+o+"#"+s},l," > ",o," > ",s)))})))}},9664:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,software_category:()=>f,software_code:()=>d,software_language:()=>g,software_name:()=>u,software_status:()=>_,software_version:()=>p,toc:()=>m});var a=r(3117),n=(r(7294),r(3905)),l=r(8651);const o={title:"JOD Smart Van Image",hide_title:!0,sidebar_position:2},s=void 0,i={unversionedId:"software/jod_smart_van/jod_smart_van_image/index",id:"software/jod_smart_van/jod_smart_van_image/index",title:"JOD Smart Van Image",description:"\x3c!--",source:"@site/docs/software/jod_smart_van/jod_smart_van_image/index.mdx",sourceDirName:"software/jod_smart_van/jod_smart_van_image",slug:"/software/jod_smart_van/jod_smart_van_image/",permalink:"/docs/software/jod_smart_van/jod_smart_van_image/",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/software/jod_smart_van/jod_smart_van_image/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"JOD Smart Van Image",hide_title:!0,sidebar_position:2},sidebar:"docsSidebar",previous:{title:"JOD Smart Van",permalink:"/docs/software/jod_smart_van/jod_smart_van/"},next:{title:"Downloads",permalink:"/docs/software/jod_smart_van/downloads"}},c={},m=[],u="JOD Smart Van Image",_="Proposed",d="jod_smart_van_image",p="?.?.?",f="Object Image",g="???",v={toc:m,software_name:u},E="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(E,(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.aN,{name:u,status:_,mdxType:"SoftwareTitle"}),(0,n.kt)(l.TL,{name:u,code:d,category:f,language:g,current_status:_,current_version:p,url_logo:"/img/software/jod_smart_van_image/jod_smart_van_image_logo_200.png",mdxType:"SoftwareHeader"},(0,n.kt)("p",null,"This image represent the firmware to flash on the main Raspberry into the IoT Box.\nIt a minimal RaspbianOS distribution plus the ",(0,n.kt)("a",{parentName:"p",href:"/docs/software/jod_smart_van/jod_smart_van"},"JOD Smart Van Distribution"),"."),(0,n.kt)("p",null,"In order to flash it on your RaspberryPi, please download latest image; then\nuse the ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/news/raspberry-pi-imager-imaging-utility/"},"RaspberryPi Imager Utility"),"\nto flash it on the SD Card for your RaspberryPi.")))}h.isMDXComponent=!0}}]);