"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[8163],{9705:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>c,software_category:()=>_,software_code:()=>m,software_language:()=>p,software_name:()=>d,software_status:()=>h,software_version:()=>u,toc:()=>j});var r=s(4848),n=s(8453),i=s(2349);const a={title:"JOD Smart Van",hide_title:!0,sidebar_position:1},o=void 0,c={id:"software/jod_smart_van/jod_smart_van/index",title:"JOD Smart Van",description:"\x3c!--",source:"@site/docs/software/jod_smart_van/jod_smart_van/index.mdx",sourceDirName:"software/jod_smart_van/jod_smart_van",slug:"/software/jod_smart_van/jod_smart_van/",permalink:"/docs/software/jod_smart_van/jod_smart_van/",draft:!1,unlisted:!1,editUrl:"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/docs/software/jod_smart_van/jod_smart_van/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"JOD Smart Van",hide_title:!0,sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Software",permalink:"/docs/software/"},next:{title:"Guides",permalink:"/docs/software/jod_smart_van/jod_smart_van/guides/"}},l={},d="JOD Smart Van",h="Development",m="jod_smart_van",u="1.0.0",_="Object Agent",p="JOD Distribution",j=[{value:"System requirements",id:"system-requirements",level:2}];function f(e){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Uo,{name:d,status:h}),"\n",(0,r.jsxs)(i.VG,{name:d,code:m,category:_,language:p,current_status:h,current_version:u,url_logo:"/img/software/jod_smart_van/jod_smart_van_logo_200.png",url_repo:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.jod_smart_van/",url_downloads:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.jod_smart_van/releases/",url_support:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.jod_smart_van/issues",children:[(0,r.jsx)(t.p,{children:"The core software driving the intelligence of the SmartVan.org project,\nspecifically embedded within the Smart Van Box. As the project's principal\nsoftware, the object agent defines the Smart Van Box's specifications, dynamically\nadjusting capabilities based on its configuration."}),(0,r.jsxs)(t.p,{children:["This versatile agent incorporates additional software components, known as\nfirmwares, facilitating seamless communication with the underlying hardware.\nLeveraging the ",(0,r.jsx)(t.a,{href:"https://github.com/johnosproject/com.robypomper.josp.jod.template",children:"JODDistTMPL"}),"\nproject architecture, the IoT Agent is built upon the robust foundation of\nthe ",(0,r.jsx)(t.a,{href:"https://github.com/johnosproject/com.robypomper.josp.jod",children:"John Object Daemon"}),"\nfrom the John OS Project platform."]}),(0,r.jsx)(t.p,{children:"With the IoT Agent at the helm, the Smart Van Box becomes a sophisticated and\nadaptive hub, delivering tailored functionalities according to its configuration."}),(0,r.jsxs)(t.p,{children:["Actually, the first version contains only the support to the solar charger\n(e.g. the Victron SmartSolar or BlueSolar via Serial2USB). Checkout the\n",(0,r.jsx)(t.a,{href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/",children:"FW Victron"}),"\nrepository for more info on supported devices and which data are provided."]})]}),"\n",(0,r.jsx)(t.h2,{id:"system-requirements",children:"System requirements"}),"\n",(0,r.jsx)(t.p,{children:"To run the JOD Smart Van distribution successfully, it's essential to have the\nfollowing software installed: Java and Python."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Java 8 or higher: for JOD execution"}),"\n",(0,r.jsx)(t.li,{children:"python3: for firmware execution"}),"\n",(0,r.jsx)(t.li,{children:"python3-venv: for venv option on firmware execution"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Additionally, depending on the enabled firmwares, it may be necessary to fulfill\ntheir requirements. Here is the list of firmwares included in the JOD Smart Van\ndistribution:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/software/firmware/fw_victron",children:"FW Victron"}),": v 1.0.2 ",(0,r.jsx)(t.a,{href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/",children:"Sources"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/software/firmware/fw_sim7600",children:"FW SIM 7600"}),": v 1.0.0 ",(0,r.jsx)(t.a,{href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.sim7600/",children:"Sources"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/software/firmware/fw_upspack_v3",children:"FW UPS Pack_V3"}),": v 1.0.0 ",(0,r.jsx)(t.a,{href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.upspack_v3/",children:"Sources"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/software/firmware/fw_sensehat",children:"FW Sense Hat"}),": v 1.0.0 ",(0,r.jsx)(t.a,{href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.sensehat/",children:"Sources"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/software/firmware/fw_ioexp",children:"FW IO Exp"}),": v 1.0.0 ",(0,r.jsx)(t.a,{href:"https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.ioexp/",children:"Sources"})]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Both the JOD Smart Van distribution and the firmwares are developed and tested\nusing linux. Therefore, it is recommended to use a linux system to run the JOD\nSmart Van distribution."})})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},9683:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);const r={img_container:"img_container_ABGT",img_link:"img_link_Hl3U",img_tag:"img_tag_oucX"};var n=s(4848);function i(e){return(0,n.jsx)("div",{className:r.img_container,children:(0,n.jsx)("a",{href:e.link?e.link:e.src,className:r.img_link,children:(0,n.jsx)("img",{src:e.src,alt:e.alt,width:e.width?e.width:"100%",className:r.img_tag})})})}},7109:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);const r={container:"container_mzDT",h1:"h1_n6cG"};var n=s(4848);function i(e){return(0,n.jsx)("div",{className:r.container,children:(0,n.jsxs)("h1",{className:r.h1,children:[e.section," - ",e.subsection]})})}},3161:(e,t,s)=>{s.d(t,{r0:()=>h,Wx:()=>i,A:()=>a,PD:()=>c,OM:()=>l,hB:()=>o,Ay:()=>m});s(6540);const r={web_site_map:"web_site_map_qmuZ"};var n=s(4848);function i(){return(0,n.jsx)("a",{href:"/docs",children:"DOCS"})}function a(){return(0,n.jsx)("a",{href:"/docs/features",children:"FEATURES"})}function o(){return(0,n.jsx)("a",{href:"/docs/specs",children:"SPECIFICATIONS"})}function c(){return(0,n.jsx)("a",{href:"/docs/hardware",children:"HARDWARE"})}function l(){return(0,n.jsx)("a",{href:"/docs/software",children:"SOFTWARE"})}function d(){return(0,n.jsx)("a",{href:"/about",children:"ABOUT"})}function h(){return(0,n.jsx)("a",{href:"/collaborate",children:"COLLABORATE"})}function m(){return(0,n.jsxs)("div",{className:r.web_site_map,children:[(0,n.jsx)(a,{}),"|",(0,n.jsx)(c,{}),"|",(0,n.jsx)(l,{}),"|",(0,n.jsx)(o,{}),"|",(0,n.jsx)(d,{}),"|",(0,n.jsx)(h,{})]})}},2349:(e,t,s)=>{s.d(t,{VG:()=>l,N8:()=>h,e0:()=>d,Uo:()=>c});s(6540);const r={tmpl_container:"tmpl_container_A9hk",specs_table:"specs_table_BWcA",head_container:"head_container_KR7S",descr:"descr_CuXp",lists_container:"lists_container_Qejd",logo:"logo_Y7bK",list:"list_tLdV",list_item:"list_item_WUvh"};var n=s(9683),i=s(7109),a=s(3161),o=s(4848);function c(e){return(0,o.jsx)(i.A,{section:"Software",subsection:e.name})}function l(e){return(0,o.jsxs)("div",{className:r.head_container,children:[(0,o.jsxs)("div",{className:r.lists_container,children:[e.url_logo?(0,o.jsxs)("div",{children:[(0,o.jsx)(n.A,{src:e.url_logo,width:"200px"}),(0,o.jsx)("hr",{})]}):null,(0,o.jsx)("h3",{children:"Status"}),(0,o.jsxs)("ul",{className:r.list,children:[(0,o.jsxs)("li",{className:r.list_item,children:[(0,o.jsx)("b",{children:"Status:"})," ",e.current_status]}),(0,o.jsxs)("li",{className:r.list_item,children:[(0,o.jsx)("b",{children:"Version:"})," ",e.current_version]}),(0,o.jsxs)("li",{className:r.list_item,children:[(0,o.jsx)("b",{children:"Category:"})," ",e.category]}),(0,o.jsxs)("li",{className:r.list_item,children:[(0,o.jsx)("b",{children:"Language:"})," ",e.language]}),(0,o.jsxs)("li",{className:r.list_item,children:[(0,o.jsx)("b",{children:"Code:"})," ",e.code]})]}),(0,o.jsx)("hr",{}),(0,o.jsx)("h3",{children:"Links"}),(0,o.jsxs)("ul",{className:r.list,children:[e.url_repo?(0,o.jsx)("li",{className:r.list_item,children:(0,o.jsx)("a",{href:e.url_repo+"",children:"Git Repo"})}):"",e.url_docs?(0,o.jsx)("li",{className:r.list_item,children:(0,o.jsx)("a",{href:e.url_docs+"",children:"Docs"})}):"",e.url_downloads?(0,o.jsx)("li",{className:r.list_item,children:(0,o.jsx)("a",{href:e.url_downloads+"",children:"Downloads"})}):"",e.url_support?(0,o.jsx)("li",{className:r.list_item,children:(0,o.jsx)("a",{href:e.url_support+"",children:"Support"})}):""]})]}),(0,o.jsx)("div",{className:r.descr,children:e.children})]})}function d(){return(0,o.jsxs)("p",{children:["The following table lists all Smart Van ",(0,o.jsx)(a.hB,{})," that can be provided by this firmware. Then, you can use this info to customize the `struct.jod` file of the ",(0,o.jsx)("a",{href:"/docs/software/jod_smart_van/jod_smart_van",children:"JOD Smart Van"})," distribution."]})}function h(e){return(0,o.jsxs)("table",{className:r.specs_table,children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Property Name"}),(0,o.jsx)("th",{children:"Specification"})]}),Object.keys(e.specs_provided).map(((t,s)=>{const r=e.specs_provided[t].fw_value,n=e.specs_provided[t].group,i=e.specs_provided[t].sub_group,a=e.specs_provided[t].spec;return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:r})}),(0,o.jsx)("td",{children:(0,o.jsxs)("a",{href:"/docs/specs/"+n+"/"+i+"#"+a,children:[n," > ",i," > ",a]})})]},s)}))]})}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var r=s(6540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);