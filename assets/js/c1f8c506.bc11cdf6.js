"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[247],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},168:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a={img_container:"img_container_ABGT",img_link:"img_link_Hl3U",img_tag:"img_tag_oucX"};function o(e){return n.createElement("div",{className:a.img_container},n.createElement("a",{href:e.link?e.link:e.src,className:a.img_link},n.createElement("img",{src:e.src,alt:e.alt,width:e.width?e.width:"100%",className:a.img_tag})))}},9583:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a={container:"container_mzDT",h1:"h1_n6cG"};function o(e){return n.createElement("div",{className:a.container},n.createElement("h1",{className:a.h1},e.section," - ",e.subsection))}},5303:(e,t,r)=>{r.d(t,{OQ:()=>u,d9:()=>o,Td:()=>i,zk:()=>l,yu:()=>c,eH:()=>s,ZP:()=>m});var n=r(7294);const a={web_site_map:"web_site_map_qmuZ"};function o(){return n.createElement("a",{href:"/docs"},"DOCS")}function i(){return n.createElement("a",{href:"/docs/features"},"FEATURES")}function s(){return n.createElement("a",{href:"/docs/specs"},"SPECIFICATIONS")}function l(){return n.createElement("a",{href:"/docs/hardware"},"HARDWARE")}function c(){return n.createElement("a",{href:"/docs/software"},"SOFTWARE")}function p(){return n.createElement("a",{href:"/about"},"ABOUT")}function u(){return n.createElement("a",{href:"/collaborate"},"COLLABORATE")}function m(){return n.createElement("div",{className:a.web_site_map},n.createElement(i,null),"|",n.createElement(l,null),"|",n.createElement(c,null),"|",n.createElement(s,null),"|",n.createElement(p,null),"|",n.createElement(u,null))}},8651:(e,t,r)=>{r.d(t,{TL:()=>c,Ow:()=>u,f6:()=>p,aN:()=>l});var n=r(7294);const a={tmpl_container:"tmpl_container_A9hk",specs_table:"specs_table_BWcA",head_container:"head_container_KR7S",descr:"descr_CuXp",lists_container:"lists_container_Qejd",logo:"logo_Y7bK",list:"list_tLdV",list_item:"list_item_WUvh"};var o=r(168),i=r(9583),s=r(5303);function l(e){return n.createElement(i.Z,{section:"Software",subsection:e.name})}function c(e){return n.createElement("div",{className:a.head_container},n.createElement("div",{className:a.lists_container},e.url_logo?n.createElement("div",null,n.createElement(o.Z,{src:e.url_logo,width:"200px"}),n.createElement("hr",null)):null,n.createElement("h3",null,"Status"),n.createElement("ul",{className:a.list},n.createElement("li",{className:a.list_item},n.createElement("b",null,"Status:")," ",e.current_status),n.createElement("li",{className:a.list_item},n.createElement("b",null,"Version:")," ",e.current_version),n.createElement("li",{className:a.list_item},n.createElement("b",null,"Category:")," ",e.category),n.createElement("li",{className:a.list_item},n.createElement("b",null,"Language:")," ",e.language),n.createElement("li",{className:a.list_item},n.createElement("b",null,"Code:")," ",e.code)),n.createElement("hr",null),n.createElement("h3",null,"Links"),n.createElement("ul",{className:a.list},e.url_repo?n.createElement("li",{className:a.list_item},n.createElement("a",{href:e.url_repo+""},"Git Repo")):"",e.url_docs?n.createElement("li",{className:a.list_item},n.createElement("a",{href:e.url_docs+""},"Docs")):"",e.url_downloads?n.createElement("li",{className:a.list_item},n.createElement("a",{href:e.url_downloads+""},"Downloads")):"",e.url_support?n.createElement("li",{className:a.list_item},n.createElement("a",{href:e.url_support+""},"Support")):"")),n.createElement("div",{className:a.descr},e.children))}function p(){return n.createElement("p",null,"The following table lists all Smart Van ",n.createElement(s.eH,null)," that can be provided by this firmware. Then, you can use this info to customize the `struct.jod` file of the ",n.createElement("a",{href:"/docs/software/jod_smart_van/jod_smart_van"},"JOD Smart Van")," distribution.")}function u(e){return n.createElement("table",{className:a.specs_table},n.createElement("tr",null,n.createElement("th",null,"Property Name"),n.createElement("th",null,"Specification")),Object.keys(e.specs_provided).map(((t,r)=>{const a=e.specs_provided[t].fw_value,o=e.specs_provided[t].group,i=e.specs_provided[t].sub_group,s=e.specs_provided[t].spec;return n.createElement("tr",{key:r},n.createElement("td",null,n.createElement("code",null,a)),n.createElement("td",null,n.createElement("a",{href:"/docs/specs/"+o+"/"+i+"#"+s},o," > ",i," > ",s)))})))}},9214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,software_category:()=>g,software_code:()=>d,software_language:()=>_,software_name:()=>u,software_status:()=>m,software_version:()=>f,specs_provided:()=>v,toc:()=>p});var n=r(3117),a=(r(7294),r(3905)),o=r(8651);const i={title:"FW Victron",hide_title:!0,sidebar_position:1},s=void 0,l={unversionedId:"software/firmware/fw_victron/index",id:"software/firmware/fw_victron/index",title:"FW Victron",description:"\x3c!--",source:"@site/docs/software/firmware/fw_victron/index.mdx",sourceDirName:"software/firmware/fw_victron",slug:"/software/firmware/fw_victron/",permalink:"/docs/software/firmware/fw_victron/",draft:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/software/firmware/fw_victron/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"FW Victron",hide_title:!0,sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Downloads",permalink:"/docs/software/sv_mobile_app/downloads"},next:{title:"FW SIM7600",permalink:"/docs/software/firmware/fw_sim7600/"}},c={},p=[{value:"Specs provided",id:"specs-provided",level:2},{value:"Usage",id:"usage",level:2}],u="FW Victron",m="Development",d="fw_victron",f="1.0.2",g="Firmware",_="Python",v=[{fw_value:"battery_voltage",group:"Energy",sub_group:"Storage",spec:"Voltage"},{fw_value:"battery_voltage_percentage",group:"Energy",sub_group:"Storage",spec:"Percentage"},{fw_value:"battery_voltage_min",group:"Energy",sub_group:"Storage",spec:"Min"},{fw_value:"battery_voltage_max",group:"Energy",sub_group:"Storage",spec:"Max"},{fw_value:"battery_current",group:"Energy",sub_group:"Generation",spec:"Current"},{fw_value:"panel_voltage",group:"Energy",sub_group:"Generation",spec:"Voltage"},{fw_value:"panel_power",group:"Energy",sub_group:"Generation",spec:"Power"},{fw_value:"panel_power_percent",group:"Energy",sub_group:"Generation",spec:"Percentage"},{fw_value:"panel_power_max",group:"Energy",sub_group:"Generation",spec:"Max Power"},{fw_value:"load_current",group:"Energy",sub_group:"Consumption",spec:"Current"},{fw_value:"load_voltage",group:"Energy",sub_group:"Consumption",spec:"Voltage"},{fw_value:"load_power",group:"Energy",sub_group:"Consumption",spec:"Power"},{fw_value:"load_power_percent",group:"Energy",sub_group:"Consumption",spec:"Percentage"},{fw_value:"load_power_max",group:"Energy",sub_group:"Consumption",spec:"Max Power"}],h={toc:p,software_name:u},w="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(w,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.aN,{name:u,status:m,mdxType:"SoftwareTitle"}),(0,a.kt)(o.TL,{name:u,code:d,category:g,language:_,current_status:m,current_version:f,url_logo:"/img/software/firmware/fw_victron/fw_victron_image.png",url_repo:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/",url_downloads:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/tags/",url_support:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/issues/",mdxType:"SoftwareHeader"},(0,a.kt)("p",null,"Introducing our Python module designed for seamless ",(0,a.kt)("strong",{parentName:"p"},"data retrieval\nfrom ",(0,a.kt)("a",{parentName:"strong",href:"https://www.victronenergy.com/"},"Victron")," devices")," with VE.Direct\nsupport, delivering real-time updates on the local DBus. Aligned with the JOD\nSmart Vans specifications, this script caters specifically ",(0,a.kt)("strong",{parentName:"p"},"to the\nEnergy's ",(0,a.kt)("a",{parentName:"strong",href:"/docs/specs/energy/storage"},"Storage"),", ",(0,a.kt)("a",{parentName:"strong",href:"/docs/specs/energy/generation"},"Generation"),"\nand ",(0,a.kt)("a",{parentName:"strong",href:"/docs/specs/energy/consumption"},"Consumption")," specification")," sub-groups,\nproviding essential values."),(0,a.kt)("p",null,"Once activated, the script effortlessly reads data from the specified serial\nport and promptly updates the DBus with the latest values. The DBus service and\nits properties dynamically adapt to the PID retrieved from the device. To\ndetermine if your Victron device is compatible with this firmware, explore the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/blob/main/docs/supported_devices.md#devices-by-pid"},"Devices by ID"),"\nsection and discover the available data mappings on\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/blob/main/docs/values_mapping.md"},"Value mapping"),"\npage.")),(0,a.kt)("h2",{id:"specs-provided"},"Specs provided"),(0,a.kt)(o.f6,{mdxType:"SoftwareSpecsProvidedText"}),(0,a.kt)(o.Ow,{specs_provided:v,mdxType:"SoftwareSpecsProvidedTable"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Effortlessly gather data from your Victron device by following these\nstraightforward steps. Physically connect the Victron device to your PC using a\nSerial To USB cable. Download the firmware (a Python script) and execute it on\nthe connected PC, compatible with USB-equipped PCs or embedded devices like the\nRaspberry Pi."),(0,a.kt)("p",null,"Before running the firmware, (1) verify the serial port name and (2) install the\nnecessary software prerequisites. Upon connection, a virtual device is generated,\nand you can confirm the port name in your PC's resource center or via\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"ls /dev/tty*")," command, defaulting to ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/ttyUSB0"),"."),(0,a.kt)("p",null,"For software prerequisites, install a ",(0,a.kt)("a",{parentName:"p",href:"https://www.python.org"},"Python"),"\ninterpreter and project dependencies using the ",(0,a.kt)("inlineCode",{parentName:"p"},"python -r requirements.txt"),"\ncommand."),(0,a.kt)("p",null,"Now, you're ready to execute the firmware with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ python run.py -p {PORT_NAME}\n")),(0,a.kt)("p",null,"For detailed insights into running the firmware, consult\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron#readme"},"README.md"),"\nin the source code or visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/blob/main/docs/remote_usage.md"},"Remote Usage"),"\npage."))}y.isMDXComponent=!0}}]);