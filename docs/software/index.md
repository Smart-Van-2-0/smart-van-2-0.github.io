---
title: Software
sidebar_position: 4
---

# Smart Van's Software

import ImageClickable from '@site/src/components/ImageClickable';
import {MapRoadmap} from '@site/src/components/WebSiteMap';

The other piece to compose a SmartVan is the software. Unfortunately, things
get a little more complicated here 🏴‍☠️, as you are trying to assemble an IoT
device from scratch 😉. But don't worry, let's start with the generic stuff.

The SmartVan is composed by two main components: (1, on the left) a Mobile App
and (2, on the right) a set of devices placed into the Van (see [Hardware](hardware)
models). Both require software that must be installed on a SmartPhone and
Devices, respectively.

<ImageClickable
  src="/img/software/smartvan_diagram_for_software.png"
  alt="SmartVan's Software diagram" />

Almost all of us know how to **install a smartphone application** from the official
stores. Therefore, just search for <code>SmartVan</code> in the most popular
app stores and install the application found (at the moment no application has
been published yet, therefore you will not find the right app in the results).<br/>
But, if you want to install a specific version or the very latest available,
you can [download the installation file](MOBILE_APP/Downloads) from your SmartPhone and proceed
with the 'installation from file' procedure corresponding to your SmartPhone.

On the other hand, the hardware one, **the software to be loaded on the devices
is called Firmware**. For each device, assembled following the tutorials in the
Hardware section, the corresponding firmware must be loaded.<br />
Even if all the firmware supplied by the project are listed in these pages, it
is advisable to follow the guides in the Hardware section, as they contain
links and references to the correct firmware to use according to the model/device
chosen.

Going into more detail, the device firmware are complete images (files) that can
be loaded directly on the assembled devices. Depending on the type of device,
they can be entire operating systems (e.g. RaspberryPi) or small portions of
binary code (e.g. Arduino).<br />
In case you want to customize or modify the Mobile App or the firmware, the
SmartVan project makes <a href="https://github.com/orgs/Smart-Van-2-0/repositories">
all the source code repositories available</a>. Don't forget to post your
changes to help the community. Read more on the [Collaborate](/collaborate)
page.

**NB:** *This is a draft list of the Smart Van software. Please see
the <MapRoadmap /> to know when it will be updated*

## Mobile Apps & Firmwares

<table>
<thead><tr>
<th>
  <img src="/img/software/software_mobile_app.png" />
</th>
<th>
  <img src="/img/software/software_firmware.png" />
</th>
</tr></thead>
<tbody><tr>
<td>
  <ul>
    <li><a href="software/mobile_app/android">SmartVan 4 Android</a></li>
    <li><a href="software/mobile_app/ios">SmartVan 4 iOS</a></li>
  </ul>
</td>
<td>
  <ul>
    <li><a href="software/images/smartvan_jod_image">SmartVan JOD Image</a></li>
    <li>Other devices images</li>
  </ul>
</td>
</tr></tbody>
</table>


## Firmwares Sources and Repositories
* [SmartVan JOD Distribution](software/firmware/smartvan_jod)
* [SV Relays Controller](software/firmware/sv_relays_controller)
* [SV Environment Sensors](software/firmware/sv_environment_sensors)
* Other firmware sources...
