"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[1452],{8163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,hardware_name:()=>l,hardware_status:()=>h,metadata:()=>c,toc:()=>p});var s=t(4848),r=t(8453),a=t(4630);const o={title:"Guides",hide_title:!0,sidebar_position:2},i=void 0,c={id:"hardware/panel_prototype/guides",title:"Guides",description:"\x3c!--",source:"@site/docs/hardware/panel_prototype/guides.mdx",sourceDirName:"hardware/panel_prototype",slug:"/hardware/panel_prototype/guides",permalink:"/docs/hardware/panel_prototype/guides",draft:!1,unlisted:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/hardware/panel_prototype/guides.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Guides",hide_title:!0,sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Specs",permalink:"/docs/hardware/panel_prototype/specs"},next:{title:"Resources",permalink:"/docs/hardware/panel_prototype/resources"}},d={},l="Panel Prototype",h="Available",p=[{value:"Guides",id:"guides",level:2},{value:"Assembly hardware",id:"assembly-hardware",level:2},{value:"Install Software",id:"install-software",level:2},{value:"A. Flash the SD Card",id:"a-flash-the-sd-card",level:3},{value:"B. Download and install",id:"b-download-and-install",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.fh,{name:l,status:h}),"\n",(0,s.jsx)(n.h2,{id:"guides",children:"Guides"}),"\n",(0,s.jsxs)(n.p,{children:["The prototype panel is divided into ",(0,s.jsx)(n.strong,{children:"three blocks mounted on the main panel"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the Power Box"}),"\n",(0,s.jsx)(n.li,{children:"The Integration Box"}),"\n",(0,s.jsx)(n.li,{children:"and the IoT Box"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"That allows independent work on each block to simplify the construction of the\nSmart Van Box. Specifically, the Integration and IoT blocks come with a\ndedicated case that can be easily mounted and dismounted from the main panel.\nIn contrast, the devices in the Power block are individually fixed to the main\npanel."}),"\n",(0,s.jsxs)(n.p,{children:["Before starting, it is advisable to ",(0,s.jsx)(n.strong,{children:"review the device list"})," from\nthe ",(0,s.jsx)(n.a,{href:"/docs/hardware/panel_prototype/resources#hardware-requirements",children:"Hardware Requirements"}),".\nAfter that, understand how and where to position the Smart Van Box inside your\nvan. Finally, ",(0,s.jsxs)(n.strong,{children:["proceed with the ",(0,s.jsx)(n.a,{href:"#assembly-hardware",children:"assembly guides"}),", adapting\nthem to your needs"]}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To complete the construction of your Smart Van Box, you need\nto ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"#install-software",children:"install the object's software"})," on the Raspberry Pi"]})," in\nthe IoT block. There are two methods: the first method provides the complete OS\nimage: ",(0,s.jsx)(n.a,{href:"/docs/software/jod_smart_van/jod_smart_van_image",children:"JOD Smart Van image"}),",\nto be flashed onto the Raspberry Pi's SD card; while the second method allows\nyou to download and run ",(0,s.jsx)(n.a,{href:"/docs/software/jod_smart_van/jod_smart_van",children:"JOD Smart Van"}),"\non an existing system."]}),"\n",(0,s.jsxs)(n.p,{children:["Now, all that's left is to mount the main panel onto your vehicle and\nconnect ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(3727).A+"",children:"external devices"}),"\nsuch as the service battery, solar panel, and other services. Once\neverything is connected, switch on the switches in the following order:\n1st service battery, 2nd vehicle battery, and 3rd solar panels"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Once your Smart Van Box is powered on, you can launch\nthe ",(0,s.jsx)(n.a,{href:"/docs/software/sv_mobile_app/android",children:"SV Mobile App"})]})," from your smart phone and\ninitiate the first configuration procedure."]}),"\n",(0,s.jsx)(n.h2,{id:"assembly-hardware",children:"Assembly hardware"}),"\n",(0,s.jsx)(n.p,{children:"The prototype's main panel contains the Power blocks devices plus the IoT and\nIntegration blocks cases. The main panel is the base of the Smart Van Box and\nit's the first thing to build."}),"\n",(0,s.jsx)(n.p,{children:"As previously suggested, the main panel shape and sizes can be changed\naccording to your needs. The only requirement is to have enough space to\naccommodate all devices and to allow the passage of the cables."}),"\n",(0,s.jsxs)(n.p,{children:["The panel prototype, as other Smart Van Boxes, must be connected to some\nexternal device, such as a batteries, solar panels and other camper's\nservices at your discretion (\nsee ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(3727).A+"",children:"External HW and Devices requirements"}),")."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Shape Your Panel:"}),(0,s.jsx)("br",{}),"\nCheck the list of devices from the Power block to add to the main panel and\ndecide on their placement. Also, find a location for the cases of the\nIntegration and IoT blocks. You can find an example in\nthe ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(5871).A+"",children:"Main Panel shape and sizes"}),"\ndiagram.",(0,s.jsx)("br",{}),"\nAlways remember some simple rules: there should be sufficient air circulation;\nif present, the inverter should be positioned as close as possible to the\nfuses, and the service battery (external) should be placed as close as\npossible to the main panel."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Place Power devices on the panel:"}),(0,s.jsx)("br",{}),"\nArrange all ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(6701).A+"",children:"Power block devices"}),"\non the panel in their final positions. Feel free to take inspiration from\nthe ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(9090).A+"",children:"Power block's wiring diagram"}),"\nor arrange them to best fit your van. This will help you to determine the\nlength of the cables and the shape of the conduits."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prepare Power cables:"}),(0,s.jsx)("br",{}),"\nCut the cables of the appropriate size using conduits (order matters). Then,\nsolder the terminals or lugs according to where the cable needs to be\nconnected."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Always use cables of the right size according to your system's power.",(0,s.jsx)("br",{}),"\nAdditionally, ensure robust connections as damaged cables or poorly made\nterminals could lead to short circuits or fires."]})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fix and Connect Power devices:"}),(0,s.jsx)("br",{}),"\nSecure the Power block's devices on the panel using screws. Then, bend the\ncables to give them the desired shape and connect them to the devices."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Assemble Integration block:"}),(0,s.jsx)("br",{}),"\nEnsure that the dimensions of your devices match\nthe ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(3971).A+"",children:"3D model of the Integration block"}),"\ncase and proceed with printing. In case your devices differ from those\nspecified in the ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(108).A+"",children:"BOMs Integration Box"}),",\nyou can customize the ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(289).A+"",children:"Blender file of the 3D model"}),".",(0,s.jsx)("br",{}),"\nAfter 3D printing the case, place the devices in their slots and proceed with\nthe wiring following the ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(8131).A+"",children:"Integration Box wiring diagram"}),".",(0,s.jsx)("br",{}),"\nWhen installing fuses, remember to use fuses with the correct power rating\naccording to the service you will connect to the corresponding service's port."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Assemble the IoT block:"}),(0,s.jsx)("br",{}),"\nLike for the Integration block, ensure that the dimensions of\nyour ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(6278).A+"",children:"IoT devices"}),"\nmatch the 3D model of\nthe ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(2878).A+"",children:"IoT block case"}),"\nand proceed with printing. To edit the model, you can use\nthe ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(2808).A+"",children:"IoT block Case (Blender)"}),"\nfile.",(0,s.jsx)("br",{}),"\nFor ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(7305).A+"",children:"cabling the IoT block"}),",\nit use a ribbon cable to connect the Raspberry Pi to all devices with a 40-PIN\nheader and also a small custom PCB board. All other devices within the IoT\nblock are interconnected and connected to the Raspberry Pi using the ports on\nthe custom PCB board.",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The IoT block requires a small PCB made from\na ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(578).A+"",children:"perfboard and wires and connectors"}),".\nThis board houses the ports to connect the other devices in the block to\nthe ribbon cable and thus to the Raspberry Pi. Although this board involves\nsoldering a PCB, don't worry, it's perfect for practice. With a few\ncomponents, its cost is very low, but remember to order a few extra pieces.\nYou can find the ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(863).A+"",children:"electrical scheme of the board"}),"\nand the ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(7060).A+"",children:"Raspberry and Boards Pin-outs"}),"\nin the resources section.",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Finish assembling the main panel:"}),(0,s.jsx)("br",{}),"\nPosition and connect the two Integration and IoT blocks to the main panel,\nthen link them together.",(0,s.jsx)("br",{}),"\nThe Integration block receives its power directly from the solar charger in\nthe Power block; its outputs are connected to the camper's services (such as\nlights, fans, fridge, etc.). Finally, its communication port is connected to\nthe IoT block.",(0,s.jsx)("br",{}),"\nThe IoT block uses an uncontrolled output from the Integration block as a\n12V power source. For communication with the Power block, a Serial to USB\ncable is used, connected to the Solar Charger and the USB port of the\nRaspberry Pi. Lastly, the external sensors of the IoT block are connected\nthrough their respective communication ports."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"install-software",children:"Install Software"}),"\n",(0,s.jsx)(n.h3,{id:"a-flash-the-sd-card",children:"A. Flash the SD Card"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Download JOD Smart Van Image:"}),(0,s.jsx)("br",{}),"\nEnsure you have downloaded the\nlatest ",(0,s.jsx)(n.a,{href:"/docs/software/jod_smart_van/jod_smart_van_image",children:"JOD Smart Van image"})," from the\nofficial page and store it on your computer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prepare SD Card:"}),(0,s.jsx)("br",{}),"\nInsert the SD card into your computer and use a tool\nlike ",(0,s.jsx)(n.a,{href:"https://www.raspberrypi.com/software/",children:"RPi Imager"}),",\n",(0,s.jsx)(n.a,{href:"https://www.balena.io/etcher/",children:"Etcher"})," or ",(0,s.jsx)(n.a,{href:"https://rufus.ie/",children:"Rufus"})," to\nflash the JOD Smart Van image onto the SD card. Make sure to select the\ncorrect drive and confirm the process."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Customize the JOD Smart Van:"})," (optional)",(0,s.jsx)("br",{}),"\nOnce the flashing process is complete, you can mount the SD card partitions\nfrom your computer and customize the JOD Smart Van configuration files.\nConfigs files are located in the ",(0,s.jsx)(n.code,{children:"root"})," partition of the SD card into the\n",(0,s.jsx)(n.code,{children:"/opt/jod_smart_van"})," folder."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Insert SD Card into Raspberry Pi:"}),(0,s.jsx)("br",{}),"\nOnce the flashing process is complete, safely eject the SD card from your\ncomputer and insert it into the Raspberry Pi."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Power Up Raspberry Pi:"}),(0,s.jsx)("br",{}),"\nAfter ensuring that you have connected the power supply of the IoT box to\nthe corresponding output of the Integration box, you can power up the\nRaspberry Pi using the switch located on the UPS Pack_V3.",(0,s.jsx)("br",{}),"\nAlternatively, you have the option to charge the UPS Pack_V3 battery and\ndirectly power your Raspberry Pi with it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Connect the SV Mobile App:"}),(0,s.jsx)("br",{}),"\nA few moments after powering up, launch\nthe ",(0,s.jsx)(n.a,{href:"/docs/software/sv_mobile_app/android",children:"SV Mobile App"})," on your smartphone and open\nthe 'first setup' function for your Smart Van Box. Wait for the new Smart Van\nBox to be detected (via the emitted WiFi network), then follow the guided\nsetup procedure."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Note: Always refer to the official JOD Smart Van and SV Mobile App\ndocumentation for detailed instructions and troubleshooting tips during the\nflashing and connection process."})}),"\n",(0,s.jsx)(n.h3,{id:"b-download-and-install",children:"B. Download and install"}),"\n",(0,s.jsx)(n.p,{children:"Here are the manual installation steps for the JOD Smart Van software on the\nRaspberry Pi. These steps are useful if you want to install the software on an\nexisting system. Make sure that the Raspberry Pi is configured to allows an SSH\nconnection."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Connect to your Raspberry Pi using SSH:"}),(0,s.jsx)("br",{}),"\nUse a tool like ",(0,s.jsx)(n.a,{href:"https://www.putty.org/",children:"PuTTY"})," or the terminal to connect to\nyour Raspberry Pi using SSH. Then, navigate to the desired installation\ndirectory on your Raspberry Pi."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ ssh pi@<Raspberry_Pi_IP_Address>\nrpi$ mkdir -p /opt/jod_smart_van\nrpi$ cd /opt/jod_smart_van\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Ensure that you replace ",(0,s.jsx)(n.code,{children:"<Raspberry_Pi_IP_Address>"})," with the actual IP\naddress of your Raspberry Pi, and to have the necessary credentials to log in.\n2. ",(0,s.jsx)(n.strong,{children:"Configure RaspberryPi communication ports:"}),(0,s.jsx)("br",{}),"\nEnable the communication ports by adding the following line to the\n",(0,s.jsx)(n.code,{children:"/boot/config.txt"})," file, then reboot."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rpi$ sudo nano /boot/config.txt\nrpi$ sudo reboot\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"enable_uart=1\n... missing lines, check the JOD Smart Van Image repository as reference\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Download JOD Smart Van:"}),(0,s.jsx)("br",{}),"\nUsing ",(0,s.jsx)(n.code,{children:"wget"}),", download the latest JOD Smart Van release from the official and\nextract it.\n",(0,s.jsx)(n.a,{href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.jod_smart_van/releases/",children:"GitHub repository"}),".","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rpi$ wget https://github.com/Smart-Van-2-0/com.robypomper.smartvan.jod_smart_van/releases/download/0.1.0/JOD_Smart_Van-0.1.0.tar.xz\nrpi$ tar -xf JOD_Smart_Van-0.1.0.tar.xz\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Run the JOD Smart Van daemon:"}),(0,s.jsx)("br",{}),"\nAfter changing directory to the JOD Smart Van folder, you can run the JOS\nSmart Van as a background daemon or a command line application (useful for\ndebugging purpose).","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rpi$ cd JOD_Smart_Van-0.1.0\nrpi$ bash start.sh TRUE     # run it as a command line application\nrpi$ bash start.sh          # run it as a background daemon\nrpi$ bash stop.sh           # halt the background daemon\n"})}),"\n","The JOD Smart Van can be installed as a system service and executed at\nstartup. To do so, you can use the provided installation script.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rpi$ sudo bash install.sh\n"})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9683:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);const s={img_container:"img_container_ABGT",img_link:"img_link_Hl3U",img_tag:"img_tag_oucX"};var r=t(4848);function a(e){return(0,r.jsx)("div",{className:s.img_container,children:(0,r.jsx)("a",{href:e.link?e.link:e.src,className:s.img_link,children:(0,r.jsx)("img",{src:e.src,alt:e.alt,width:e.width?e.width:"100%",className:s.img_tag})})})}},7109:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);const s={container:"container_mzDT",h1:"h1_n6cG"};var r=t(4848);function a(e){return(0,r.jsx)("div",{className:s.container,children:(0,r.jsxs)("h1",{className:s.h1,children:[e.section," - ",e.subsection]})})}},3161:(e,n,t)=>{t.d(n,{r0:()=>h,Wx:()=>a,A:()=>o,PD:()=>c,OM:()=>d,hB:()=>i,Ay:()=>p});t(6540);const s={web_site_map:"web_site_map_qmuZ"};var r=t(4848);function a(){return(0,r.jsx)("a",{href:"/docs",children:"DOCS"})}function o(){return(0,r.jsx)("a",{href:"/docs/features",children:"FEATURES"})}function i(){return(0,r.jsx)("a",{href:"/docs/specs",children:"SPECIFICATIONS"})}function c(){return(0,r.jsx)("a",{href:"/docs/hardware",children:"HARDWARE"})}function d(){return(0,r.jsx)("a",{href:"/docs/software",children:"SOFTWARE"})}function l(){return(0,r.jsx)("a",{href:"/about",children:"ABOUT"})}function h(){return(0,r.jsx)("a",{href:"/collaborate",children:"COLLABORATE"})}function p(){return(0,r.jsxs)("div",{className:s.web_site_map,children:[(0,r.jsx)(o,{}),"|",(0,r.jsx)(c,{}),"|",(0,r.jsx)(d,{}),"|",(0,r.jsx)(i,{}),"|",(0,r.jsx)(l,{}),"|",(0,r.jsx)(h,{})]})}},4630:(e,n,t)=>{t.d(n,{OY:()=>d,wL:()=>h,VL:()=>l,fh:()=>c});t(6540);const s={tmpl_container:"tmpl_container_R_7C",head_container:"head_container_PufX",descr:"descr_x0wp",list_container:"list_container_KPRs",list:"list_TMLh",list_item:"list_item_QCGu"};var r=t(9683),a=t(7109),o=t(3161),i=t(4848);function c(e){return(0,i.jsx)(a.A,{section:"Hardware",subsection:e.name})}function d(e){return(0,i.jsxs)("div",{className:s.head_container,children:[(0,i.jsxs)("div",{className:s.list_container,children:[(0,i.jsx)(r.A,{src:"/img/hardware/"+e.code+"/dev_img.jpg",width:"200px"}),(0,i.jsx)("hr",{}),(0,i.jsx)("h3",{children:"Links"}),(0,i.jsxs)("ul",{className:s.list,children:[(0,i.jsx)("li",{className:s.list_item,children:(0,i.jsx)("a",{href:e.code+"/specs",children:"Specifications"})}),(0,i.jsx)("li",{className:s.list_item,children:(0,i.jsx)("a",{href:e.code+"/guides",children:"Guides"})}),(0,i.jsx)("li",{className:s.list_item,children:(0,i.jsx)("a",{href:e.code+"/resources",children:"Resources"})})]})]}),(0,i.jsxs)("div",{className:s.descr,children:[e.children,(0,i.jsxs)("i",{children:["Follow instructions below to build your own ",e.name,"."]})]})]})}function l(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["The following tables list the implemented Smart Van ",(0,i.jsx)(o.hB,{})," by this Smart Van Box. This allows you to verify that this box provides the specifications required by the ",(0,i.jsx)(o.A,{})," that interest you before you embark on building your own box."]}),(0,i.jsx)("p",{children:"For each specification, the corresponding firmwares are also listed. This makes it easy to understand the dependencies between the specifications provided by the Smart Van Box and the hardware it contains."}),(0,i.jsxs)("p",{children:["Remember that if you modify the configurations of the ",(0,i.jsx)("a",{href:"/docs/software/jod_smart_van/jod_smart_van",children:"JOD Smart Van"}),", specifically the ",(0,i.jsx)("code",{children:"struct.jod"})," file, then the specifications provided by your Smart Van Box will change accordingly."]})]})}function h(e){return(0,i.jsx)("div",{children:(0,i.jsxs)("table",{className:s.specs_table,children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Group"}),(0,i.jsx)("th",{children:"SubGroup"}),(0,i.jsx)("th",{children:"Firmware or Device"}),(0,i.jsx)("th",{children:"Description"})]}),Object.keys(e.specs_implemented).map(((n,t)=>{const s=e.specs_implemented[n],r=s.group;void 0===s.fw&&(s.fw=[]);const a=s.sub_group,o=s.fw,c=s.desc;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"/docs/specs/"+r,children:r})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"/docs/specs/"+r+"/"+a,children:a})}),(0,i.jsx)("td",{children:o.map(((e,n)=>{const t=e.toLowerCase().replace(/fw /g,"fw_").replace(/ /g,"");return(0,i.jsxs)("a",{href:"/docs/software/firmware/"+t,children:[e,(0,i.jsx)("br",{})]})}))}),(0,i.jsx)("td",{children:c})]},t)}))]})})}},3727:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/BOMs-BlockExternal-56c2b99f5bd452d6cc56efdc6ba72488.pdf"},108:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/BOMs-BlockIntegration-905cfbef20a37609348064afe95d9e46.pdf"},6278:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/BOMs-BlockIoT-ba06a57bc41ff079904241474a42c1b6.pdf"},6701:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/BOMs-BlockPower-db2b55ef75f40bc47f5415d21a399834.pdf"},578:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/BOMs-CustomBoard-18d6778c8cc1f60b07fa9906c0ff6d40.pdf"},863:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/Design Panel Prototype-Custom Board Electrical Scheme (Hand-Made)-308ab5993c917aea3fcfe1b17ea58832.png"},8131:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/Design Panel Prototype-Integration Block Wiring Schema-67f3157bc42a08abbf15eaa9d469d134.png"},7305:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/Design Panel Prototype-IoT Block Wiring Schema-7ce18c5e281b64275d79bee4fddc915e.png"},5871:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/Design Panel Prototype-Main Panel Schema-da37689d655f49812ae575cc0cccd1ce.png"},9090:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/Design Panel Prototype-Power Block Wiring Schema-da5fc198d6b21b0362cd230cf589b429.png"},289:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/IntegrationBlock_001-f708b34895df3359d577a5ecb759813a.blend"},3971:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/IntegrationBlock_001-8f9a1af61bf7c9a8692295e19562ecae.stl"},2808:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/IoTBlock_002-8bd69dfb7fe3df81ec7444911cfe7e43.blend"},2878:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/IoTBlock_002-a4aff1bc0de6a10b81f798f1e423fd7e.stl"},7060:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/RaspberryPi 2 Boards Pinout-debe71f66f338935d64d8731c03230dd.ods"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(6540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);