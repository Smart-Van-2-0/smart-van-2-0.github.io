"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[103],{6374:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>a,hardware_code:()=>x,hardware_name:()=>h,hardware_status:()=>p,metadata:()=>c,toc:()=>u});var t=r(4848),s=r(8453),i=r(9683),o=r(4630);const a={title:"Prepare the SD Card",hide_title:!0,sidebar_position:2},d=void 0,c={id:"hardware/svbox_10/guides/prepare_sdcard",title:"Prepare the SD Card",description:"\x3c!--",source:"@site/docs/hardware/svbox_10/guides/prepare_sdcard.mdx",sourceDirName:"hardware/svbox_10/guides",slug:"/hardware/svbox_10/guides/prepare_sdcard",permalink:"/docs/hardware/svbox_10/guides/prepare_sdcard",draft:!1,unlisted:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/hardware/svbox_10/guides/prepare_sdcard.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Prepare the SD Card",hide_title:!0,sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Print SmartVanBox Case",permalink:"/docs/hardware/svbox_10/guides/print_smartvanbox_case"},next:{title:"Prepare the SD Card (Bullseye)",permalink:"/docs/hardware/svbox_10/guides/prepare_sdcard_bullseye"}},l={},h="SVBox IoT 1.0",p="Available",x="svbox_10",u=[{value:"Prepare the SD Card",id:"prepare-the-sd-card",level:2},{value:"Install the Operating System",id:"install-the-operating-system",level:2},{value:"Configure the Operating System",id:"configure-the-operating-system",level:2},{value:"Enabling I2C",id:"enabling-i2c",level:3},{value:"Enabling UART Ports",id:"enabling-uart-ports",level:3},{value:"Enabling Console on UART",id:"enabling-console-on-uart",level:3}];function j(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.fh,{name:h,status:p}),"\n",(0,t.jsx)(n.h2,{id:"prepare-the-sd-card",children:"Prepare the SD Card"}),"\n",(0,t.jsx)(n.p,{children:"Install and configure the main OS and the JOD Smart Van distribution on the SD\ncard that will be inserted into the Raspberry Pi."}),"\n",(0,t.jsxs)(n.p,{children:["Currently, the JOD SmartVan Distribution OS image is not yet available. Therefore,\nafter flashing the ",(0,t.jsx)(n.a,{href:"https://www.raspberrypi.com/software/operating-systems/",children:"Raspberry Pi OS (Lite/64bit)"}),"\nonto the SD card, you'll need to configure a few files on the SD card before the\nfirst boot of the Raspberry Pi. Once the SmartVanBox is assembled and powered on,\nyou can proceed with the manual ",(0,t.jsx)(n.a,{href:"/docs/software/jod_smart_van/jod_smart_van/guides/install_jod_sv_dist_remote_device",children:"installation of the JOD Smart Van Distribution"}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"Raspberry Pi OS Version = Bookworm",type:"note",children:(0,t.jsxs)(n.p,{children:["This page is based on the Raspberry Pi OS ",(0,t.jsx)(n.strong,{children:"Bookworm"})," and later versions.\nIf you are using the ",(0,t.jsx)(n.strong,{children:"Bullseye"})," version or earlier, please refer to the specific\n",(0,t.jsx)(n.a,{href:"/docs/hardware/svbox_10/guides/prepare_sdcard_bullseye",children:"Prepare the SD Card Bullseye"}),"\npage."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Shorts-Steps"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Install Raspberry Pi Imager"}),"\n",(0,t.jsxs)(n.li,{children:["Select SD card and Operating System: ",(0,t.jsx)(n.code,{children:"Raspberry Pi OS Lite (64-bit)"})," at least version ",(0,t.jsx)(n.code,{children:"Bookworm"})]}),"\n",(0,t.jsx)(n.li,{children:"Edit OS customisation settings"}),"\n",(0,t.jsx)(n.li,{children:"Write the SD Card"}),"\n",(0,t.jsxs)(n.li,{children:["Enable I2C ports via ",(0,t.jsx)(n.code,{children:"configs.txt"})," ",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),"\n",(0,t.jsxs)(n.li,{children:["Enable extra serial/UART ports via ",(0,t.jsx)(n.code,{children:"configs.txt"})," ",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-6",id:"user-content-fnref-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),"\n",(0,t.jsxs)(n.li,{children:["Enable console on UART2 (",(0,t.jsx)(n.code,{children:"/dev/ttyAMA2"}),") via ",(0,t.jsx)(n.code,{children:"cmdline.txt"})," ",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-7",id:"user-content-fnref-7","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-the-operating-system",children:"Install the Operating System"}),"\n",(0,t.jsxs)(n.p,{children:['First, you need to install the operating system, commonly referred to as\n"flashing the SD card". In short, after inserting the SD card into a PC, you use\nsoftware like ',(0,t.jsx)(n.a,{href:"https://www.raspberrypi.com/software/",children:"Raspberry Pi Imager"}),' to\n"copy" the operating system onto the SD card.']}),"\n",(0,t.jsxs)(n.p,{children:["After installing it on your working machine, launch the Raspberry Pi Imager and\nchoose your device: a ",(0,t.jsx)(n.code,{children:"Raspberry Pi 4"}),". Then, choose the OS: ",(0,t.jsx)(n.code,{children:"Raspberry Pi OS (Others) > Raspberry Pi OS Lite (64-bit)"}),". This is a system without a desktop,\nwhich is not necessary for an IoT  device. Now, check that your SD card is\ninserted into the computer and click the choose Storage button and select the\nright SD card."]}),"\n",(0,t.jsx)(i.A,{alt:"Raspberry Pi Imager",src:"/img/hardware/svbox_10/guides/prepare_sdcard/raspberry-pi-imager.png",width:"400px"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note!"})," At the time of writing, the latest version of Raspberry Pi OS is\n",(0,t.jsx)(n.code,{children:"Bookworm"}),". If you are using an older version, you must follow the steps\ndescribed in the ",(0,t.jsx)(n.a,{href:"prepare_sdcard_bullseye",children:"Raspberry Pi Configs - DEPRECATED"}),'.\nIf you are using the "Bookworm" version or later, you can proceed with the\nfollowing steps.']}),"\n",(0,t.jsx)(n.p,{children:'Once you\'ve selected the SD card and the operating system, proceed by clicking\nthe "Next" button. Now a new window will appear, asking you to configure the\noperating system. Here you can set the SSH, hostname, user, WiFi and locales\nsettings. Click on the "Edit settings" button and configure the following options:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"General"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['Enable the "Set hostname" option and set the hostname to ',(0,t.jsx)(n.code,{children:"svbox"})]}),"\n",(0,t.jsx)(n.li,{children:'Enable the "Set username and password", note those credentials for remote access'}),"\n",(0,t.jsx)(n.li,{children:'Enable the "Configure wireless LAN" option and set the SSID, password and country code of your WiFi network'}),"\n",(0,t.jsx)(n.li,{children:'Enable the "Set locale" option and set the locale according to your location'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.A,{alt:"Raspberry Pi Imager - General tab",src:"/img/hardware/svbox_10/guides/prepare_sdcard/raspberry-pi-imager-general.png",width:"400px"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Services"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Enable the "Enable SSH" option and select the "Use password authentication"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.A,{alt:"Raspberry Pi Imager - Services tab",src:"/img/hardware/svbox_10/guides/prepare_sdcard/raspberry-pi-imager-services.png",width:"400px"}),"\n",(0,t.jsx)(n.p,{children:'Save and close the settings window, then click the "Yes" button to start the\nwriting process. Once the process is complete, remove the SD card and reinsert it\ninto the computer to terminate the OS configuration.'}),"\n",(0,t.jsx)(n.h2,{id:"configure-the-operating-system",children:"Configure the Operating System"}),"\n",(0,t.jsxs)(n.p,{children:["After writing the SD card, we need to proceed with some detailed configurations.\nIn this case, reinsert the SD card into the computer and open its ",(0,t.jsx)(n.code,{children:"boot"}),"\npartition. Inside this folder, you'll find the files to configure the operating\nsystem of our Raspberry Pi, such as the ",(0,t.jsx)(n.code,{children:"configs.txt"})," or the ",(0,t.jsx)(n.code,{children:"cmdline.txt"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ cd /media/{CURRENT_MACHINE_USER}/bootfs/\n$ nano configs.txt\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once these configurations are complete, you can remove the SD card and insert it\ninto the Raspberry Pi of the SmartVanBox."}),"\n",(0,t.jsx)(n.h3,{id:"enabling-i2c",children:"Enabling I2C"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note!"})," With the introduction of the Raspberry Pi OS ",(0,t.jsx)(n.code,{children:"Bookworm"})," version, this\nprocedure is no longer valid. In order to enable the I2C protocol, you need to\nexecute the following command after the first Raspberry Pi's boot:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo raspi-config nonint do_i2c 0\nsudo reboot -n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"enabling-uart-ports",children:"Enabling UART Ports"}),"\n",(0,t.jsxs)(n.p,{children:["Several hardware modules communicate with the Raspberry Pi using UART ports. In\nthe SmartVanBox, the several UART ports are used.",(0,t.jsx)("br",{}),"\nTo enable these ports, add the following lines to the ",(0,t.jsx)(n.code,{children:"configs.txt"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Raspberry PI OS (Bookworm) and later\n# uart0    > Bluetooth\n# uart1    > SIM7600  > /dev/ttyS0   - GPIOs 14/15 - Pins 8/10\n# --       > --       > /dev/ttyAMA1 - Do Not Exist\n# uart2    > Console  > /dev/ttyAMA2 - GPIOs 0/1 - Pins 27/28\n# uart3    > --       > /dev/ttyAMA3 - GPIOs 4/5 - Pins 7/29\n# uart4    > UPS Pack > /dev/ttyAMA4 - GPIOs 8/9 - Pins 24/21\n# uart5    > --       > /dev/ttyAMA5 - GPIOs 4/5 - Pins 7/29\n\nenable_uart=1\ndtoverlay=uart2\ndtoverlay=uart3\ndtoverlay=uart4\ndtoverlay=uart5\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Usage"}),(0,t.jsx)(n.th,{children:"UART"}),(0,t.jsx)(n.th,{children:"File"}),(0,t.jsx)(n.th,{children:"TX\tGPIO"}),(0,t.jsx)(n.th,{children:"TX Pin"}),(0,t.jsx)(n.th,{children:"RX GPIO"}),(0,t.jsx)(n.th,{children:"RX Pin"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Bluetooth"}),(0,t.jsx)(n.td,{children:"uart0"}),(0,t.jsx)(n.td,{children:"N/A"}),(0,t.jsx)(n.td,{children:"?"}),(0,t.jsx)(n.td,{children:"?"}),(0,t.jsx)(n.td,{children:"?"}),(0,t.jsx)(n.td,{children:"?"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SIM7600"}),(0,t.jsx)(n.td,{children:"uart1"}),(0,t.jsx)(n.td,{children:"ttyS0"}),(0,t.jsx)(n.td,{children:"14"}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"15"}),(0,t.jsx)(n.td,{children:"10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Debug/Console"}),(0,t.jsx)(n.td,{children:"uart2"}),(0,t.jsx)(n.td,{children:"ttyAMA2"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"27"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"28"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"NotUsed"}),(0,t.jsx)(n.td,{children:"uart3"}),(0,t.jsx)(n.td,{children:"ttyAMA3"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"29"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"UPS Pack V3"}),(0,t.jsx)(n.td,{children:"uart4"}),(0,t.jsx)(n.td,{children:"ttyAMA4"}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"24"}),(0,t.jsx)(n.td,{children:"9"}),(0,t.jsx)(n.td,{children:"21"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"NotUsed"}),(0,t.jsx)(n.td,{children:"uart5"}),(0,t.jsx)(n.td,{children:"ttyAMA5"}),(0,t.jsx)(n.td,{children:"12"}),(0,t.jsx)(n.td,{children:"32"}),(0,t.jsx)(n.td,{children:"13"}),(0,t.jsx)(n.td,{children:"33"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on UART configuration, refer to ",(0,t.jsx)(n.a,{href:"https://www.raspberrypi.com/documentation/computers/configuration.html#configure-uarts",children:"Raspberry Pi's UART documentation"}),"\nor check the following links:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://forums.raspberrypi.com/viewtopic.php?t=244827",children:"Pi-4 Activating additional UART ports"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hackaday.com/2022/02/01/did-you-know-that-the-raspberry-pi-4-has-more-spi-i2c-uart-ports/",children:"DID YOU KNOW THAT THE RASPBERRY PI 4 HAS MORE SPI, I2C, UART PORTS?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://jason19970210.medium.com/raspberry-pi-4-with-multiple-uart-interface-4eac75f74d7c",children:"Raspberry Pi 4 with Multiple UART Interfaces"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.raspberrypi.com/documentation/computers/configuration.html#configuring-uarts",children:"Raspberry OS - Configuring UARTs"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"enabling-console-on-uart",children:"Enabling Console on UART"}),"\n",(0,t.jsxs)(n.p,{children:["The UART2 (",(0,t.jsx)(n.code,{children:"/dev/ttyAMA2"}),") port is used as a debug port. By connecting a ",(0,t.jsx)(n.a,{href:"https://www.amazon.it/10Gtek-PL2303TA-Programming-Support-Raspberry/dp/B09KGQCZ58",children:"USB-to-TTL"}),"\ncable from a computer to the pins of this port, you can access the Raspberry Pi's\nshell. This allows you to perform the initial configuration of the SmartVanBox,\naccess files, install software, and more. Unlike traditional SSH connection, no\nWiFi network is needed."]}),"\n",(0,t.jsxs)(n.p,{children:["To configure the UART2 port as a console, add the parameter ",(0,t.jsx)(n.code,{children:"console=ttyAMA2,115200"}),"\nto the first line of the ",(0,t.jsx)(n.code,{children:"cmdline.txt"})," file. The ",(0,t.jsx)(n.code,{children:"cmdline.txt"})," file should look\nlike this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"console=tty1 console=ttyAMA2,115200 root=PARTUUID=556a8c7f-02 rootfstype=ext4 fsck.repair=yes rootwait\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more information on ",(0,t.jsx)(n.a,{href:"https://www.raspberrypi.com/documentation/computers/configuration.html#kernel-command-line-cmdline-txt",children:"kernel command line"}),",\nrefer to ",(0,t.jsx)(n.a,{href:"https://learn.adafruit.com/adafruits-raspberry-pi-lesson-5-using-a-console-cable/enabling-serial-console",children:"Adafruit's Raspberry Pi Lesson 5"}),"."]}),"\n","\n",(0,t.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{id:"user-content-fn-5",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.raspberrypi.com/documentation/computers/configuration.html#configure-i2c",children:"RaspberryPi - Configure I2C"})," ",(0,t.jsx)(n.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{id:"user-content-fn-6",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.raspberrypi.com/documentation/computers/configuration.html#configure-uarts",children:"RaspberryPi - Configure UARTs"})," ",(0,t.jsx)(n.a,{href:"#user-content-fnref-6","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{id:"user-content-fn-7",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.raspberrypi.com/documentation/computers/configuration.html#command-line-options",children:"RaspberryPi - Command line options"})," ",(0,t.jsx)(n.a,{href:"#user-content-fnref-7","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},9683:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);const t={img_container:"img_container_ABGT",img_link:"img_link_Hl3U",img_tag:"img_tag_oucX"};var s=r(4848);function i(e){return(0,s.jsx)("div",{className:t.img_container,children:(0,s.jsx)("a",{href:e.link?e.link:e.src,className:t.img_link,children:(0,s.jsx)("img",{src:e.src,alt:e.alt,width:e.width?e.width:"100%",className:t.img_tag})})})}},7109:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);const t={container:"container_mzDT",h1:"h1_n6cG"};var s=r(4848);function i(e){return(0,s.jsx)("div",{className:t.container,children:(0,s.jsxs)("h1",{className:t.h1,children:[e.section," - ",e.subsection]})})}},3161:(e,n,r)=>{r.d(n,{r0:()=>h,Wx:()=>i,A:()=>o,PD:()=>d,OM:()=>c,hB:()=>a,Ay:()=>p});r(6540);const t={web_site_map:"web_site_map_qmuZ"};var s=r(4848);function i(){return(0,s.jsx)("a",{href:"/docs",children:"DOCS"})}function o(){return(0,s.jsx)("a",{href:"/docs/features",children:"FEATURES"})}function a(){return(0,s.jsx)("a",{href:"/docs/specs",children:"SPECIFICATIONS"})}function d(){return(0,s.jsx)("a",{href:"/docs/hardware",children:"HARDWARE"})}function c(){return(0,s.jsx)("a",{href:"/docs/software",children:"SOFTWARE"})}function l(){return(0,s.jsx)("a",{href:"/about",children:"ABOUT"})}function h(){return(0,s.jsx)("a",{href:"/collaborate",children:"COLLABORATE"})}function p(){return(0,s.jsxs)("div",{className:t.web_site_map,children:[(0,s.jsx)(o,{}),"|",(0,s.jsx)(d,{}),"|",(0,s.jsx)(c,{}),"|",(0,s.jsx)(a,{}),"|",(0,s.jsx)(l,{}),"|",(0,s.jsx)(h,{})]})}},4630:(e,n,r)=>{r.d(n,{OY:()=>c,wL:()=>h,VL:()=>l,fh:()=>d});r(6540);const t={tmpl_container:"tmpl_container_R_7C",head_container:"head_container_PufX",descr:"descr_x0wp",list_container:"list_container_KPRs",list:"list_TMLh",list_item:"list_item_QCGu"};var s=r(9683),i=r(7109),o=r(3161),a=r(4848);function d(e){return(0,a.jsx)(i.A,{section:"Hardware",subsection:e.name})}function c(e){return(0,a.jsxs)("div",{className:t.head_container,children:[(0,a.jsxs)("div",{className:t.list_container,children:[(0,a.jsx)(s.A,{src:"/img/hardware/"+e.code+"/dev_img.jpg",width:"200px"}),(0,a.jsx)("hr",{}),(0,a.jsx)("h3",{children:"Links"}),(0,a.jsxs)("ul",{className:t.list,children:[(0,a.jsx)("li",{className:t.list_item,children:(0,a.jsx)("a",{href:e.code+"/specs",children:"Specifications"})}),(0,a.jsx)("li",{className:t.list_item,children:(0,a.jsx)("a",{href:e.code+"/guides",children:"Guides"})}),(0,a.jsx)("li",{className:t.list_item,children:(0,a.jsx)("a",{href:e.code+"/resources",children:"Resources"})})]})]}),(0,a.jsxs)("div",{className:t.descr,children:[e.children,(0,a.jsxs)("i",{children:["Follow instructions below to build your own ",e.name,"."]})]})]})}function l(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["The following tables list the implemented Smart Van ",(0,a.jsx)(o.hB,{})," by this Smart Van Box. This allows you to verify that this box provides the specifications required by the ",(0,a.jsx)(o.A,{})," that interest you before you embark on building your own box."]}),(0,a.jsx)("p",{children:"For each specification, the corresponding firmwares are also listed. This makes it easy to understand the dependencies between the specifications provided by the Smart Van Box and the hardware it contains."}),(0,a.jsxs)("p",{children:["Remember that if you modify the configurations of the ",(0,a.jsx)("a",{href:"/docs/software/jod_smart_van/jod_smart_van",children:"JOD Smart Van"}),", specifically the ",(0,a.jsx)("code",{children:"struct.jod"})," file, then the specifications provided by your Smart Van Box will change accordingly."]})]})}function h(e){return(0,a.jsx)("div",{children:(0,a.jsxs)("table",{className:t.specs_table,children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Group"}),(0,a.jsx)("th",{children:"SubGroup"}),(0,a.jsx)("th",{children:"Firmware or Device"}),(0,a.jsx)("th",{children:"Description"})]}),Object.keys(e.specs_implemented).map(((n,r)=>{const t=e.specs_implemented[n],s=t.group;void 0===t.fw&&(t.fw=[]);const i=t.sub_group,o=t.fw,d=t.desc;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"/docs/specs/"+s,children:s})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"/docs/specs/"+s+"/"+i,children:i})}),(0,a.jsx)("td",{children:o.map(((e,n)=>{const r=e.toLowerCase().replace(/fw /g,"fw_").replace(/ /g,"");return(0,a.jsxs)("a",{href:"/docs/software/firmware/"+r,children:[e,(0,a.jsx)("br",{})]})}))}),(0,a.jsx)("td",{children:d})]},r)}))]})})}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);