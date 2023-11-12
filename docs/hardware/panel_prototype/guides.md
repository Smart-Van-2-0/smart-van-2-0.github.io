---
title: Guides
hide_title: true
sidebar_position: 2
---

import PageHardwareGuides from '@site/src/components/templates/PageHardwareGuides';

<PageHardwareGuides
  name="Panel Prototype"
  code="panel_prototype" >

The Panel Prototype is parted in 3 main boxes (or areas):
* the Power Box
* The Integration Box
* and the IoT Box

Once assembled, all those boxes will be placed on to the prototype's Main Panel
(a simple wood panel). So, in order to assemble this device, you must first
assemble the 3 boxes.

In the Panel Prototype's [Resources](resources) page, you can find the lists of
required material, all schematics, but also all 3D files to print device's cases.

Finally, when the Panel Prototype is assembled, you can flash the latest [SmartVan image](/docs/software/images/jod_smart_van_image)
into the Raspberry Pi's SD Card. Insert the SD Card, turn on all switches and
you are ready to connect to your Smart Van!


### Assembly

#### Panel Prototpye

The panel prototpye, in order to work properly, must be connected to some
external device, such as a batteryes, solar panels and various camper's services.
All those devices are listed into the [External HW and Devices requirements](/img/hardware/panel_prototype/resources/BOMs-BoxExternal.pdf)
list.

1. Cut out the Main Panel following the [Main Panel shape and sizes](/img/hardware/panel_prototype/resources/Design%20Panel%20Prototype-Main%20Panel%20Schema.png)
   and *Main Panel cover shape and sizes* schematics
1. Assemble the [IoT Box](#iot-box)
1. Assemble the [Integration Box](#integration-box)
1. Assemble the [Power Box](#power-box)
1. Turn on al switches (1st Service battery, 2nd Loads and then 3rd Solar Panels)

#### Power Box

1. Get the material listd into [BOMs Power Box](/img/hardware/panel_prototype/resources/BOMs-BoxPower.pdf)
1. Place all power's devices to the panel
1. Prepare all wires and cable the box as defined into [Wiring Power Box](/img/hardware/panel_prototype/resources/Design%20Panel%20Prototype-Power%20Box%20Wiring%20Schema.png)

#### Integration Box

1. Get the material listd into [BOMs Integration Box](/img/hardware/panel_prototype/resources/BOMs-BoxIntegration.pdf)
1. Print the box's cases *Integration Box Case*
1. Prepare all wires and cable the box as defined into [Wiring Integration Box](/img/hardware/panel_prototype/resources/Design%20Panel%20Prototype-Integration%20Box%20Wiring%20Schema.png)

#### IoT Box

1. Get the material listd into [BOMs IoT Box](/img/hardware/panel_prototype/resources/BOMs-BoxIoT.pdf)
1. Print the box's cases [IoT Box Case](/img/hardware/panel_prototype/resources/CustomBoard_002_Extraction.stl)
1. Assemble the [Custom Board](#custom-board)
1. Prepare all wires and cable the box as defined into [Wiring IoT Box](/img/hardware/panel_prototype/resources/Design%20Panel%20Prototype-IoT%20Box%20Wiring%20Schema.png)

##### Custom Board

1. Get the material listd into [BOMs Custom Borard](/img/hardware/panel_prototype/resources/BOMs-CustomBoard.pdf)
...[Electrical scheme Custom Board](/img/hardware/panel_prototype/resources/Design%20Panel%20Prototype-Custom%20Board%20Electrical%20Scheme%20\(Hand-Made\).png)
...[Raspberry Pinout](/img/hardware/panel_prototype/resources/RaspberryPi%202%20Boards%20Pinout.pdf)

### Flash Smart Van Image

TODO: write how to upload the image into the RaspberryPi SD Card 

### Troubleshooting

* Serial connection: from the IoT Box it's available a serial port.
  It's possibile use that port to debug the internal RaspberryPi
* Others...


</PageHardwareGuides>
