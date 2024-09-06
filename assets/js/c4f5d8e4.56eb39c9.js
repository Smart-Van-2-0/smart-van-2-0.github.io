"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[2634],{3796:(e,t,a)=>{a.d(t,{A:()=>w});var s=a(9668),r=a(1367),n=a(6540),o=a(4164),i=a(5659),l=a(456),c=a(6126),d=a(771);const h=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var m=a(8413),u=a(7936);function x(e){return(0,u.Ay)("MuiPaper",e)}(0,m.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=a(4848);const v=["className","component","elevation","square","variant"],f=(0,l.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!a.square&&t.rounded,"elevation"===a.variant&&t[`elevation${a.elevation}`]]}})((({theme:e,ownerState:t})=>{var a;return(0,s.A)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,s.A)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,d.X4)("#fff",h(t.elevation))}, ${(0,d.X4)("#fff",h(t.elevation))})`},e.vars&&{backgroundImage:null==(a=e.vars.overlays)?void 0:a[t.elevation]}))})),j=n.forwardRef((function(e,t){const a=(0,c.b)({props:e,name:"MuiPaper"}),{className:n,component:l="div",elevation:d=1,square:h=!1,variant:m="elevation"}=a,u=(0,r.A)(a,v),j=(0,s.A)({},a,{component:l,elevation:d,square:h,variant:m}),_=(e=>{const{square:t,elevation:a,variant:s,classes:r}=e,n={root:["root",s,!t&&"rounded","elevation"===s&&`elevation${a}`]};return(0,i.A)(n,x,r)})(j);return(0,p.jsx)(f,(0,s.A)({as:l,ownerState:j,className:(0,o.A)(_.root,n),ref:t},u))}));function _(e){return(0,u.Ay)("MuiCard",e)}(0,m.A)("MuiCard",["root"]);const g=["className","raised"],b=(0,l.Ay)(j,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),w=n.forwardRef((function(e,t){const a=(0,c.b)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=a,d=(0,r.A)(a,g),h=(0,s.A)({},a,{raised:l}),m=(e=>{const{classes:t}=e;return(0,i.A)({root:["root"]},_,t)})(h);return(0,p.jsx)(b,(0,s.A)({className:(0,o.A)(m.root,n),elevation:l?8:void 0,ref:t,ownerState:h},d))}))},262:(e,t,a)=>{a.d(t,{Ay:()=>o});a(6540);const s={img_left:"img_left_Yjq6"};var r=a(4848);function n(e){return(0,r.jsx)("a",{href:"/docs/hardware/"+(e.code?e.code:"panel_prototype"),children:e.label?e.label:"Panel Prototype"})}function o(e){return(0,r.jsxs)("div",{className:"container",children:[e.notitle?"":(0,r.jsx)("h1",{children:"Getting Started"}),(0,r.jsx)(i,{}),(0,r.jsx)(l,{}),(0,r.jsx)(c,{})]})}function i(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"1. Get the Hardware"}),(0,r.jsx)("img",{class:s.img_left,src:"img/components/getting_started_1_order.png",alt:"Order the hardware",width:"100px"}),(0,r.jsx)("p",{children:"The quickest way to get started is to build your own device. Nothing scary, if you've ever played with LEGO, then you'll have no trouble assembling the Smart Van Box. Check the shopping list, order the necessary components, and put everything together."}),(0,r.jsxs)("p",{children:["Go to the page of the ",(0,r.jsx)(n,{code:"svbox_10",label:"latest"})," available Smart Van Box, or visit the ",(0,r.jsx)("a",{href:"docs/hardware",children:"Hardware"})," section where you can find other models or upload your own."]})]})}function l(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"2. Setup everything"}),(0,r.jsx)("img",{class:s.img_left,src:"img/components/getting_started_2_install.png",alt:"Order the hardware",width:"100px"}),(0,r.jsx)("p",{children:"Once the hardware is ready, you can install the firmware and configure the services."}),(0,r.jsxs)("p",{children:["You can directly ",(0,r.jsx)("a",{href:"/docs/software#mobile-apps--firmwares",children:"downloads images"})," to flash on the IoT devices, or get and compile the source code directly from the ",(0,r.jsx)("a",{href:"/docs/software#firmwares-sources-and-repositories",children:"Git repositories"}),". Once all firmware has been loaded on the devices, you can mount the hardware in your camper. Follow the instructions for the chosen hardware."]}),(0,r.jsxs)("p",{children:["Finally, power up the box.",(0,r.jsx)("br",{}),"Now, your Smart Van box is now active and broadcasting its own WiFi network."]})]})}function c(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"3. Connect the Smart Phone"}),(0,r.jsx)("img",{class:s.img_left,src:"img/components/getting_started_3_connect.png",alt:"Order the hardware",width:"100px"}),(0,r.jsxs)("p",{children:["Get the mobile app from the app stores (not yet available), ",(0,r.jsx)("a",{href:"/docs/software/sv_mobile_app/android/guides/get_and_install_the_smartvan_mobile_app",children:"download it"})," or compile from ",(0,r.jsx)("a",{href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.app.android",children:"his sources"}),"."]}),(0,r.jsx)("p",{children:"Then, lunch the installed app and follow these steps:"}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:'Tap on "Setup new Van"'}),(0,r.jsx)("li",{children:"Login or register to the IoT platform"}),(0,r.jsx)("li",{children:"Wait for Smart Van box WiFi scanning"}),(0,r.jsx)("li",{children:"Connect to the Smart Box WiFi"}),(0,r.jsx)("li",{children:"Change the Smart Box 's WiFi default password"})]}),(0,r.jsx)("p",{children:(0,r.jsx)("b",{children:"\ud83c\udf89 Compliments! Now you can access to the Smart Van box from your smartphone! \ud83c\udf89"})})]})}},9683:(e,t,a)=>{a.d(t,{A:()=>n});a(6540);const s={img_container:"img_container_ABGT",img_link:"img_link_Hl3U",img_tag:"img_tag_oucX"};var r=a(4848);function n(e){return(0,r.jsx)("div",{className:s.img_container,children:(0,r.jsx)("a",{href:e.link?e.link:e.src,className:s.img_link,children:(0,r.jsx)("img",{src:e.src,alt:e.alt,width:e.width?e.width:"100%",className:s.img_tag})})})}},3182:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var s=a(4848);function r(e){return(0,s.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100095337571720",target:"_blank",children:e.label?e.label:"SmartVan's Facebook Page"})}},3161:(e,t,a)=>{a.d(t,{r0:()=>h,Wx:()=>n,A:()=>o,PD:()=>l,OM:()=>c,hB:()=>i,Ay:()=>m});a(6540);const s={web_site_map:"web_site_map_qmuZ"};var r=a(4848);function n(){return(0,r.jsx)("a",{href:"/docs",children:"DOCS"})}function o(){return(0,r.jsx)("a",{href:"/docs/features",children:"FEATURES"})}function i(){return(0,r.jsx)("a",{href:"/docs/specs",children:"SPECIFICATIONS"})}function l(){return(0,r.jsx)("a",{href:"/docs/hardware",children:"HARDWARE"})}function c(){return(0,r.jsx)("a",{href:"/docs/software",children:"SOFTWARE"})}function d(){return(0,r.jsx)("a",{href:"/about",children:"ABOUT"})}function h(){return(0,r.jsx)("a",{href:"/collaborate",children:"COLLABORATE"})}function m(){return(0,r.jsxs)("div",{className:s.web_site_map,children:[(0,r.jsx)(o,{}),"|",(0,r.jsx)(l,{}),"|",(0,r.jsx)(c,{}),"|",(0,r.jsx)(i,{}),"|",(0,r.jsx)(d,{}),"|",(0,r.jsx)(h,{})]})}},7455:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});a(6540);var s=a(4164),r=(a(8774),a(4586)),n=a(781);const o={heroBanner:"heroBanner_qdFl",home_collaborate:"home_collaborate_wcgK",home_collaborate_handsake:"home_collaborate_handsake_EN2E",header_img:"header_img_wYee",header_titles:"header_titles_MCSo",home_section:"home_section_o0U_",home_section_sub_right:"home_section_sub_right_z2_l",intro_text:"intro_text_vWGf",question:"question_AdoH",cards_div_style:"cards_div_style_CdMf"};var i=a(9683),l=a(3161),c=a(262),d=a(3182);const h={container:"container_BelW",list_item:"list_item_fuSe"};var m=a(4848),u=[{id:1,title:"\ud83e\uddf0 Workshop Make Your SmartVanBox at BITZ!",url:"/blog/2024/09/05/workshop-make-your-smartvanbox-at-bitz"},{id:2,title:"\ud83d\udc77 Make your SVBox Workshop @ BITZ Fab Lab, Bolzano",url:"/blog/2024/08/28/make-your-svbox-workshop-bitz"},{id:3,title:"\ud83d\ude80 Released the SVBox 1.0's BOM List 1.0.1s",url:"/blog/2024/08/25/released-svbox-10-BOM"},{id:4,title:"\ud83c\udf1f Introducing the New SVBox IoT 1.0",url:"/blog/2024/05/06/published-new-svbox-iot-10"},{id:5,title:"\ud83d\ude80 Released JOD Smart Van v.1.0.0",url:"/blog/2023/12/05/released-jod-smart-van"},{id:99,title:"More...",url:"/blog"}],x=[{id:1,title:"\ud83e\uddf0 SVBox IoT - v1.0.0",url:"/docs/hardware/svbox_10"},{id:2,title:"\ud83d\udcf1 SmartVan Mobile App - v1.0.0",url:"/docs/software/sv_mobile_app/android"},{id:3,title:"\ud83d\udcbf JOD SmartVan Dist. - v1.0.0",url:"/docs/software/jod_smart_van/jod_smart_van"},{id:4,title:"\ud83d\udce6 FW Victron - v1.0.2",url:"/docs/software/firmware/fw_victron"},{id:5,title:"\ud83d\udce6 FW Victron - v1.0.1",url:"/docs/software/firmware/fw_victron"},{id:99,title:"More...",url:"/docs/software"}],p="sidebarItemTitle_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module margin-bottom--md",v="sidebarItemList_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module clean-list",f="sidebarItemLink_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module";function j(){return(0,m.jsxs)("section",{className:h.container,children:[(0,m.jsx)(_,{title:"Recent posts"}),(0,m.jsx)(g,{list:u}),(0,m.jsx)(_,{title:"Latest releases"}),(0,m.jsx)(g,{list:x})]})}function _(e){return(0,m.jsx)("div",{class:p,children:e.title})}function g(e){return(0,m.jsx)("ul",{class:v,children:e.list.map((e=>(0,m.jsx)("li",{className:h.list_item,children:(0,m.jsx)("a",{class:f,href:e.url,children:e.title})},e.id)))})}var b=a(3796);function w(){const{siteConfig:e}=(0,r.A)();return(0,m.jsx)("header",{className:(0,s.A)("hero hero--primary",o.heroBanner,o.header_img),children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("p",{className:(0,s.A)("hero__subtitle",o.header_titles),children:[(0,m.jsx)("h1",{className:(0,s.A)("hero__title",o.header_titles),children:"Smart Van"}),"The open source project for building your own intelligent van."]})})})}function y(){return(0,m.jsx)("section",{className:o.home_section,children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)(l.Ay,{}),(0,m.jsx)("p",{className:o.intro_text,children:"As the official Smart Van's web site here you can find all project's resources like docs, schemes, source code, assets, tutorials, etc... and create your own SmartVan."})]})})}function S(){return(0,m.jsx)("section",{className:o.home_section,children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"With Smart Van, you can connect a van that is tailored to your specific needs and requirements."})," Whether you want a van for camping, road trips, or work, Smart Van can help you make it happen."]}),(0,m.jsx)(i.A,{src:"/img/home/svbox_solution.png",alt:"Hardware Functional Schema",width:"70%"}),(0,m.jsxs)("p",{children:["Smart Van ",(0,m.jsx)("b",{children:"is open source"}),", which means that anyone can contribute to its development. This makes Smart Van a powerful and versatile platform for building intelligent vans."]}),(0,m.jsxs)("p",{children:["If you are interested in building your own intelligent van, then Smart Van is the perfect starting-point for you. Visit the Smart Van's ",(0,m.jsx)(l.Wx,{})," today to learn more and to get started."]})]})})}function A(){return(0,m.jsx)("section",{className:o.home_section,children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h1",{children:"What is it?"}),(0,m.jsx)("p",{children:(0,m.jsx)("b",{children:"The Smart Van is an DIY solution to smartize campers and vans easily and safely."})}),(0,m.jsx)(i.A,{src:"/img/home/installation_schema.png",alt:"Hardware Installation Schema",width:"70%"}),(0,m.jsxs)("p",{children:[(0,m.jsx)("i",{className:o.question,children:'What does "smartize" mean?'}),"In the IT world, it means connecting a physical object to an application or the web so that it can be monitored and controlled remotely."]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("i",{className:o.question,children:"What does it mean to smartize a camper?"}),"It means connecting the camper's resources (energy, water, location, etc.) and services (lights, fans, awning, fridge, etc.) to a smart system that can monitor and control them."]}),(0,m.jsx)("p",{children:'Each camper is unique in terms of its resources and services. This is why we started with the most common resources and services, and we will add more "exotic" features in the future.'}),(0,m.jsxs)("p",{children:["You can find a list of the current features on the SmartVan ",(0,m.jsx)(l.A,{})," page. These lists are defined at the beginning of the development of each release so that they can be integrated and updated according to the needs of the community."]})]})})}function k(){const e={minWidth:"200px",maxWidth:"500px",height:"650px",display:"table-cell",padding:"1em var(--ifm-leading)",textAlign:"center"};return(0,m.jsx)("section",{className:o.home_section,children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:o.cards_div_style,children:[(0,m.jsxs)(b.A,{sx:e,children:[(0,m.jsx)("h1",{children:"The SmartVanBox"}),(0,m.jsxs)("p",{children:["The ",(0,m.jsx)("a",{href:"/docs/hardware/svbox_10",children:"Smart Van Box"})," is a small and powerful computer that is designed to be installed in a van. It is the brain of the Smart Van system, and it connects to the van's resources and services to make them smart."]}),(0,m.jsx)("img",{src:"/img/hardware/svbox_10/dev_img.jpg",alt:"Smart Van Box",width:"325px"})]}),(0,m.jsxs)(b.A,{sx:e,children:[(0,m.jsx)("h1",{children:"SmartVan Mobile App"}),(0,m.jsxs)("p",{children:["The ",(0,m.jsx)("a",{href:"/docs/software/sv_mobile_app/android",children:"Smart Van App"})," is a mobile application that allows you to monitor and control your van from anywhere in the world. It connects to the SmartVanBox over the internet, so you can check on your van even when you are not nearby."]}),(0,m.jsx)("video",{className:o.splitter_right_,height:"400px",controls:!0,children:(0,m.jsx)("source",{src:"/img/home/smartvan_mobile_app_intro.webm",type:"video/mp4"})})]})]})})})}function N(){return(0,m.jsx)("section",{className:o.home_section,children:(0,m.jsx)(c.Ay,{})})}function V(){return(0,m.jsx)("section",{className:o.home_section,children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h1",{children:"What's next?"}),(0,m.jsxs)("p",{children:["Do it, play with it, and share your experience. If you need help, ask for it on our official ",(0,m.jsx)(d.A,{label:"Facebook Page"}),". You can also use the page to ",(0,m.jsx)("b",{children:"share your projects and ideas"}),"."]}),(0,m.jsxs)("div",{className:o.home_collaborate,children:[(0,m.jsx)("img",{className:o.home_collaborate_handsake,src:"img/home/handsjake.png"}),(0,m.jsxs)("p",{children:["Since this is an open project, don't be afraid to offer your ideas, whether they're suggestions or criticisms. With so many different fields and knowledge required, no one is an expert in everything, so it's easy to collaborate on even small things. Let's start on the ",(0,m.jsx)(l.r0,{})," page to know how to submit an idea or suggestion."]})]})]})})}function B(){const{siteConfig:e}=(0,r.A)();return(0,m.jsxs)(n.A,{description:"Smart Van official web site",children:[(0,m.jsx)(w,{}),(0,m.jsxs)("main",{children:[(0,m.jsx)(y,{}),(0,m.jsx)(j,{}),(0,m.jsx)(S,{}),(0,m.jsx)(A,{}),(0,m.jsx)(k,{}),(0,m.jsx)(N,{}),(0,m.jsx)(V,{})]})]})}}}]);