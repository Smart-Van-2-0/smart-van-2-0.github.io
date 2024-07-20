"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[2019],{7270:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,hardware_code:()=>p,hardware_name:()=>d,hardware_status:()=>h,metadata:()=>c,toc:()=>f});var t=s(4848),r=s(8453),a=s(4630);const o={title:"Panel Prototype",hide_title:!0,sidebar_position:1},i=void 0,c={id:"hardware/panel_prototype/index",title:"Panel Prototype",description:"\x3c!--",source:"@site/docs/hardware/panel_prototype/index.mdx",sourceDirName:"hardware/panel_prototype",slug:"/hardware/panel_prototype/",permalink:"/docs/hardware/panel_prototype/",draft:!1,unlisted:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/hardware/panel_prototype/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Panel Prototype",hide_title:!0,sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Resources",permalink:"/docs/hardware/svbox_10/resources"},next:{title:"Specs",permalink:"/docs/hardware/panel_prototype/specs"}},l={},d="Panel Prototype",h="Available",p="panel_prototype",f=[{value:"Build your Smart Van Box",id:"build-your-smart-van-box",level:2},{value:"Panel&#39;s blocks",id:"panels-blocks",level:2},{value:"Power Block",id:"power-block",level:3},{value:"Integration Block",id:"integration-block",level:3},{value:"IoT Box",id:"iot-box",level:3}];function u(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.fh,{name:d,status:h}),"\n",(0,t.jsxs)(a.OY,{code:p,children:[(0,t.jsxs)(n.p,{children:["This is ",(0,t.jsx)(n.strong,{children:"the first prototype of the Smart Van project"}),", used for the\ndevelopment of the ",(0,t.jsx)(n.a,{href:"/docs/software/jod_smart_van/jod_smart_van",children:"JOD Smart Van"}),".\nThis panel is designed to provide convenient access to integrated devices,\nfacilitating development and testing. However, ",(0,t.jsx)(n.strong,{children:"this prototype can be easily\nadapted to another form and used as a control unit for your camper"}),"."]}),(0,t.jsxs)(n.p,{children:["Currently, this panel includes all devices for electrical management with\ncharging from solar panels and a 200V power column. It provides mobile internet\nconnectivity through the 4G module, environmental monitoring with sensors, and\nthe ability to connect 8 camper services with as many physical buttons.",(0,t.jsx)("br",{}),"\nFurthermore, this prototype is equipped with a GNSS module and a buffer battery\nfor IoT components. This way, your van will stay connected even when the vehicle\nbatteries are completely discharged or not plugged."]})]}),"\n",(0,t.jsx)(n.h2,{id:"build-your-smart-van-box",children:"Build your Smart Van Box"}),"\n",(0,t.jsxs)(n.p,{children:["Explore the documentation of this prototype to get an idea of how to adapt it to\nyour needs. We recommend looking at the list of ",(0,t.jsx)(n.a,{href:"/docs/hardware/panel_prototype/resources#hardware-requirements",children:"required materials"}),"\nand ",(0,t.jsx)(n.a,{href:"/docs/hardware/panel_prototype/resources#cases",children:"case 3D models"})," to\nunderstand which devices need to be included in this prototype and where you can\nposition them."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("h3",{children:"Prepare all the necessary materials"}),"\nCheck the ",(0,t.jsx)(n.a,{href:"/docs/hardware/panel_prototype/resources#hardware-requirements",children:"Hardware Requirements"}),"\nand ensure you have everything needed to start. Note that many devices can be\nreplaced with equivalent ones. More information can be found in\nthe ",(0,t.jsx)(n.a,{href:"/docs/software#other-sources-and-repositories",children:"Software/Firmwares"})," pages\nrelated to the devices to be replaced."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("h3",{children:"Assemble the Smart Van Box's blocks and connect them"}),"\nBuild each block following the ",(0,t.jsx)(n.a,{href:"/docs/hardware/panel_prototype/guides#assembly",children:"assembly guides"}),".\nAfter that, position them on the panel and connect them together. If you\nprefer, you are free to change the arrangement and adapt it to the shape of\nyour van."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("h3",{children:"Load the JOD Smart Van image and power everything on"}),"\nFlash the ",(0,t.jsx)(n.a,{href:"/docs/software/jod_smart_van/jod_smart_van",children:"JOD Smart Van"})," image\nonto the SD card to be inserted into the IoT block's Raspberry Pi. After that,\ninsert it into the Raspberry Pi and power it on."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"panels-blocks",children:"Panel's blocks"}),"\n",(0,t.jsxs)(n.p,{children:["The devices in this prototype are streamlined into ",(0,t.jsx)(n.strong,{children:"three distinct blocks"})," for\nease of understanding: Power, Integration, and IoT."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"IoT block"})," serves as the brain and, leveraging its Raspberry Pi, can\nseamlessly expose the capabilities of the Smart Van Box to the SV Mobile App.\nAdditionally, this block houses a variety of environmental sensors and GPS and\nGNSS modules."]}),"\n",(0,t.jsxs)(n.p,{children:["In the remaining two blocks, you'll find the ",(0,t.jsx)(n.strong,{children:"Power"})," electronics, featuring a\nsolar charger, inverter, fuses, etc., alongside the ",(0,t.jsx)(n.strong,{children:"Integration"})," section for\ncamper services, encompassing relays, dimmers, and buttons."]}),"\n",(0,t.jsx)(n.h3,{id:"power-block",children:"Power Block"}),"\n",(0,t.jsx)(n.p,{children:"The Power Block houses all devices for managing electrical energy, including the\nSolar Charger, inverter, as well as fuses and switches for system and user\nprotection. Check out the BOM for a full list of the devices."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(6701).A+"",children:"BOMs Power Block"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(9090).A+"",children:"Wiring Power Block"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(5871).A+"",children:"Main Panel shape and sizes"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"integration-block",children:"Integration Block"}),"\n",(0,t.jsx)(n.p,{children:"Within the Integration block, you'll find the actuators and their respective fuses\nto control various camper services, moreover, the block houses some physical\nbuttons."}),"\n",(0,t.jsx)(n.p,{children:"Remember to connect the services according to their power requirements. Each\n12V output of the Integration Box has a maximum capacity, so ensure that the\nconnected service requires lower power."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(108).A+"",children:"BOMs Integration Box"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(8131).A+"",children:"Wiring Integration Box"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(3971).A+"",children:"Integration Box Case"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(289).A+"",children:"Integration Box Case (Blender)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"iot-box",children:"IoT Box"}),"\n",(0,t.jsxs)(n.p,{children:["The IoT block serves as the brain of the Smart Van Box. It's an IoT device based\non Raspberry Pi that, with ",(0,t.jsx)(n.a,{href:"/docs/software/jod_smart_van/jod_smart_van",children:"JOD Smart Van"}),",\nenables monitoring and controlling all devices connected to the Raspberry Pi\nand, consequently, the Smart Van Box."]}),"\n",(0,t.jsx)(n.p,{children:"Within this block, various sensors are integrated, such as environmental\nsensors, gas detection sensors, but also GPS and GSM modules. Additionally, the\nblock houses a buffer battery (UPS) that provides power to the IoT component\neven when the service battery is disconnected or depleted."}),"\n",(0,t.jsxs)(n.p,{children:["The IoT block use a ribbon cable to connect the Raspberry Pi to all devices\nwith a 40-PIN header like the ",(0,t.jsx)(n.a,{href:"/docs/software/firmware/fw_sensehat",children:"Sense Hat"}),",\nthe ",(0,t.jsx)(n.a,{href:"/docs/software/firmware/fw_sim7600",children:"SIM7600"})," and also a small custom\nPCB board. This custom board houses the ports to connect the other devices in\nthe IoT block to the ribbon cable and thus to the Raspberry Pi."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(6278).A+"",children:"BOMs IoT Box"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(578).A+"",children:"BOMs Custom Board"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(7305).A+"",children:"Wiring IoT Box"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(863).A+"",children:"Electrical scheme Custom Board"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(2214).A+"",children:"Raspberry Pinout"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(7060).A+"",children:"Raspberry and Boards Pin-outs"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(2878).A+"",children:"IoT Box Case"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(2808).A+"",children:"IoT Box Case (Blender)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(8708).A+"",children:"IoT Box Case Render A"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(8708).A+"",children:"IoT Box Case Render B"})}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9683:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);const t={img_container:"img_container_ABGT",img_link:"img_link_Hl3U",img_tag:"img_tag_oucX"};var r=s(4848);function a(e){return(0,r.jsx)("div",{className:t.img_container,children:(0,r.jsx)("a",{href:e.link?e.link:e.src,className:t.img_link,children:(0,r.jsx)("img",{src:e.src,alt:e.alt,width:e.width?e.width:"100%",className:t.img_tag})})})}},7109:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);const t={container:"container_mzDT",h1:"h1_n6cG"};var r=s(4848);function a(e){return(0,r.jsx)("div",{className:t.container,children:(0,r.jsxs)("h1",{className:t.h1,children:[e.section," - ",e.subsection]})})}},3161:(e,n,s)=>{s.d(n,{r0:()=>h,Wx:()=>a,A:()=>o,PD:()=>c,OM:()=>l,hB:()=>i,Ay:()=>p});s(6540);const t={web_site_map:"web_site_map_qmuZ"};var r=s(4848);function a(){return(0,r.jsx)("a",{href:"/docs",children:"DOCS"})}function o(){return(0,r.jsx)("a",{href:"/docs/features",children:"FEATURES"})}function i(){return(0,r.jsx)("a",{href:"/docs/specs",children:"SPECIFICATIONS"})}function c(){return(0,r.jsx)("a",{href:"/docs/hardware",children:"HARDWARE"})}function l(){return(0,r.jsx)("a",{href:"/docs/software",children:"SOFTWARE"})}function d(){return(0,r.jsx)("a",{href:"/about",children:"ABOUT"})}function h(){return(0,r.jsx)("a",{href:"/collaborate",children:"COLLABORATE"})}function p(){return(0,r.jsxs)("div",{className:t.web_site_map,children:[(0,r.jsx)(o,{}),"|",(0,r.jsx)(c,{}),"|",(0,r.jsx)(l,{}),"|",(0,r.jsx)(i,{}),"|",(0,r.jsx)(d,{}),"|",(0,r.jsx)(h,{})]})}},4630:(e,n,s)=>{s.d(n,{OY:()=>l,wL:()=>h,VL:()=>d,fh:()=>c});s(6540);const t={tmpl_container:"tmpl_container_R_7C",head_container:"head_container_PufX",descr:"descr_x0wp",list_container:"list_container_KPRs",list:"list_TMLh",list_item:"list_item_QCGu"};var r=s(9683),a=s(7109),o=s(3161),i=s(4848);function c(e){return(0,i.jsx)(a.A,{section:"Hardware",subsection:e.name})}function l(e){return(0,i.jsxs)("div",{className:t.head_container,children:[(0,i.jsxs)("div",{className:t.list_container,children:[(0,i.jsx)(r.A,{src:"/img/hardware/"+e.code+"/dev_img.jpg",width:"200px"}),(0,i.jsx)("hr",{}),(0,i.jsx)("h3",{children:"Links"}),(0,i.jsxs)("ul",{className:t.list,children:[(0,i.jsx)("li",{className:t.list_item,children:(0,i.jsx)("a",{href:e.code+"/specs",children:"Specifications"})}),(0,i.jsx)("li",{className:t.list_item,children:(0,i.jsx)("a",{href:e.code+"/guides",children:"Guides"})}),(0,i.jsx)("li",{className:t.list_item,children:(0,i.jsx)("a",{href:e.code+"/resources",children:"Resources"})})]})]}),(0,i.jsxs)("div",{className:t.descr,children:[e.children,(0,i.jsxs)("i",{children:["Follow instructions below to build your own ",e.name,"."]})]})]})}function d(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["The following tables list the implemented Smart Van ",(0,i.jsx)(o.hB,{})," by this Smart Van Box. This allows you to verify that this box provides the specifications required by the ",(0,i.jsx)(o.A,{})," that interest you before you embark on building your own box."]}),(0,i.jsx)("p",{children:"For each specification, the corresponding firmwares are also listed. This makes it easy to understand the dependencies between the specifications provided by the Smart Van Box and the hardware it contains."}),(0,i.jsxs)("p",{children:["Remember that if you modify the configurations of the ",(0,i.jsx)("a",{href:"/docs/software/jod_smart_van/jod_smart_van",children:"JOD Smart Van"}),", specifically the ",(0,i.jsx)("code",{children:"struct.jod"})," file, then the specifications provided by your Smart Van Box will change accordingly."]})]})}function h(e){return(0,i.jsx)("div",{children:(0,i.jsxs)("table",{className:t.specs_table,children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Group"}),(0,i.jsx)("th",{children:"SubGroup"}),(0,i.jsx)("th",{children:"Firmware or Device"}),(0,i.jsx)("th",{children:"Description"})]}),Object.keys(e.specs_implemented).map(((n,s)=>{const t=e.specs_implemented[n],r=t.group;void 0===t.fw&&(t.fw=[]);const a=t.sub_group,o=t.fw,c=t.desc;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"/docs/specs/"+r,children:r})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"/docs/specs/"+r+"/"+a,children:a})}),(0,i.jsx)("td",{children:o.map(((e,n)=>{const s=e.toLowerCase().replace(/fw /g,"fw_").replace(/ /g,"");return(0,i.jsxs)("a",{href:"/docs/software/firmware/"+s,children:[e,(0,i.jsx)("br",{})]})}))}),(0,i.jsx)("td",{children:c})]},s)}))]})})}},108:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/BOMs-BlockIntegration-905cfbef20a37609348064afe95d9e46.pdf"},6278:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/BOMs-BlockIoT-ba06a57bc41ff079904241474a42c1b6.pdf"},6701:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/BOMs-BlockPower-db2b55ef75f40bc47f5415d21a399834.pdf"},578:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/BOMs-CustomBoard-18d6778c8cc1f60b07fa9906c0ff6d40.pdf"},863:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/Design Panel Prototype-Custom Board Electrical Scheme (Hand-Made)-308ab5993c917aea3fcfe1b17ea58832.png"},8131:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/Design Panel Prototype-Integration Block Wiring Schema-67f3157bc42a08abbf15eaa9d469d134.png"},7305:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/Design Panel Prototype-IoT Block Wiring Schema-7ce18c5e281b64275d79bee4fddc915e.png"},5871:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/Design Panel Prototype-Main Panel Schema-da37689d655f49812ae575cc0cccd1ce.png"},9090:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/Design Panel Prototype-Power Block Wiring Schema-da5fc198d6b21b0362cd230cf589b429.png"},289:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/IntegrationBlock_001-f708b34895df3359d577a5ecb759813a.blend"},3971:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/IntegrationBlock_001-8f9a1af61bf7c9a8692295e19562ecae.stl"},2808:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/IoTBlock_002-8bd69dfb7fe3df81ec7444911cfe7e43.blend"},2878:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/IoTBlock_002-a4aff1bc0de6a10b81f798f1e423fd7e.stl"},8708:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/IoTBlock_002_A-feb72a0e6aa77db7beaf34586536b7f7.png"},7060:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/RaspberryPi 2 Boards Pinout-debe71f66f338935d64d8731c03230dd.ods"},2214:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/RaspberryPi 2 Boards Pinout-275954a76d842923040c064656294d11.pdf"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(6540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);