"use strict";(self.webpackChunksmart_van_2_0_github_io=self.webpackChunksmart_van_2_0_github_io||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/09/11/released-fw-victron","metadata":{"permalink":"/blog/2023/09/11/released-fw-victron","editUrl":"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/blog/2023-09-11-released-fw-victron.md","source":"@site/blog/2023-09-11-released-fw-victron.md","title":"Released FW Victron v.1.0.1","description":"Updated the FW Victron.","date":"2023-09-11T00:00:00.000Z","formattedDate":"September 11, 2023","tags":[{"label":"release","permalink":"/blog/tags/release"},{"label":"firmware","permalink":"/blog/tags/firmware"}],"readingTime":0.275,"hasTruncateMarker":false,"authors":[{"name":"Roberto Pompermaier","title":"Senior Software Architect","url":"https://www.robypomper.org","imageURL":"https://github.com/robypomper.png","key":"robypomper"}],"frontMatter":{"title":"Released FW Victron v.1.0.1","authors":"robypomper","tags":["release","firmware"]},"nextItem":{"title":"Released JOD Smart Van v.0.1.0","permalink":"/blog/2023/09/11/released-jod-smart-van"}},"content":"Updated the FW Victron.\\n\\nAdded the `--simulate` cmdLine arg that initialize a `VEDeviceSimulator` instead\\na normal `VEDevice`. That become usefull for testing purpose when no VE.Device\\nis phisically connected to the testing machine.\\n\\nImproved also script compatibility with OS adding sig INT and TERM handlers.\\n\\nHere you can download the\\n[FW Victron - v1.0.1](https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/releases/tag/1.0.1)\\nrelease."},{"id":"/2023/09/11/released-jod-smart-van","metadata":{"permalink":"/blog/2023/09/11/released-jod-smart-van","editUrl":"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/blog/2023-09-11-released-jod-smart-van.md","source":"@site/blog/2023-09-11-released-jod-smart-van.md","title":"Released JOD Smart Van v.0.1.0","description":"The first version of the JOD Smart Van distribution is available online via the","date":"2023-09-11T00:00:00.000Z","formattedDate":"September 11, 2023","tags":[{"label":"release","permalink":"/blog/tags/release"},{"label":"jod_smart_van","permalink":"/blog/tags/jod-smart-van"}],"readingTime":0.58,"hasTruncateMarker":false,"authors":[{"name":"Roberto Pompermaier","title":"Senior Software Architect","url":"https://www.robypomper.org","imageURL":"https://github.com/robypomper.png","key":"robypomper"}],"frontMatter":{"title":"Released JOD Smart Van v.0.1.0","authors":"robypomper","tags":["release","jod_smart_van"]},"prevItem":{"title":"Released FW Victron v.1.0.1","permalink":"/blog/2023/09/11/released-fw-victron"},"nextItem":{"title":"Released FW Victron v.1.0.0","permalink":"/blog/2023/09/04/released-fw-victron"}},"content":"The first version of the JOD Smart Van distribution is available online via the\\nsource code repository.\\n\\nThis distribution is based on the 2.2.4-DEV version of the [JOD daemon](https://github.com/johnosproject/com.robypomper.josp.jod).\\nIn this way it is possible to exploit the new workers for DBus and optimize\\nglobal performance.\\n\\nIncluded in this version, we find the firmware for integrating [Victron](https://www.victronenergy.com/)\\nsolar chargers. This firmware reads the data published by the device through the\\nVE.Direct serial cable, after which it transmits it to the JOD daemon via DBus.\\nActually it supports SmartSolar and BlueSolar series devices with the VE.Direct\\nport. More info about this firmware on [his](https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/)\\nrepository.\\n\\nHere you can download the\\n[JOD Smart Van distribution - v0.1.0](https://github.com/Smart-Van-2-0/com.robypomper.smartvan.jod_smart_van/releases/tag/0.1.0)\\nrelease."},{"id":"/2023/09/04/released-fw-victron","metadata":{"permalink":"/blog/2023/09/04/released-fw-victron","editUrl":"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/blog/2023-09-04-released-fw-victron.md","source":"@site/blog/2023-09-04-released-fw-victron.md","title":"Released FW Victron v.1.0.0","description":"Published the first version of the FW Victron.","date":"2023-09-04T00:00:00.000Z","formattedDate":"September 4, 2023","tags":[{"label":"release","permalink":"/blog/tags/release"},{"label":"firmware","permalink":"/blog/tags/firmware"}],"readingTime":0.34,"hasTruncateMarker":false,"authors":[{"name":"Roberto Pompermaier","title":"Senior Software Architect","url":"https://www.robypomper.org","imageURL":"https://github.com/robypomper.png","key":"robypomper"}],"frontMatter":{"title":"Released FW Victron v.1.0.0","authors":"robypomper","tags":["release","firmware"]},"prevItem":{"title":"Released JOD Smart Van v.0.1.0","permalink":"/blog/2023/09/11/released-jod-smart-van"},"nextItem":{"title":"We are online!","permalink":"/blog/2023/08/04/we-are-online"}},"content":"Published the first version of the FW Victron.\\n\\nThe v1.0.0 can connect to a [Victron](https://www.victronenergy.com/) device\\n(SmartSolar or BlueSolar series) via serial (VE.Direct) and listen for\\npublished data. Once a value has been updated, then the FW Victron, send an\\nupdate message on the DBUS.\\n\\nThis firmware has been developed based on following specifications:\\n* [VE.Direct Protocol 3.33](https://www.victronenergy.com/upload/documents/VE.Direct-Protocol-3.33.pdf)\\n\\nHere you can download the\\n[FW Victron - v1.0.0](https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/releases/tag/1.0.0)\\nrelease."},{"id":"/2023/08/04/we-are-online","metadata":{"permalink":"/blog/2023/08/04/we-are-online","editUrl":"https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main/blog/2023-08-04-we-are-online.md","source":"@site/blog/2023-08-04-we-are-online.md","title":"We are online!","description":"Finally online the Smart Van project website!","date":"2023-08-04T00:00:00.000Z","formattedDate":"August 4, 2023","tags":[{"label":"website","permalink":"/blog/tags/website"}],"readingTime":0.395,"hasTruncateMarker":false,"authors":[{"name":"Roberto Pompermaier","title":"Senior Software Architect","url":"https://www.robypomper.org","imageURL":"https://github.com/robypomper.png","key":"robypomper"}],"frontMatter":{"title":"We are online!","authors":"robypomper","tags":["website"]},"prevItem":{"title":"Released FW Victron v.1.0.0","permalink":"/blog/2023/09/04/released-fw-victron"}},"content":"Finally online the Smart Van project website!\\n\\nthe main purpose of this website is to collect and organize, in one place, all\\nthe information and tricks to build your own Smart Van independently.\\n\\nIt is structured into the following 3 sections, plus a Blog:\\n\\n* [Features](docs/features): what the Smart Van can do for you\\n* [Hardware](docs/hardware): specs and guides to create your own SmartVan boxes\\n* [Software](docs/software): downloads and sources of all the software used by the SmartVan project"}]}')}}]);