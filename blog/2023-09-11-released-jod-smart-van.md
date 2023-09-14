---
title: Released JOD Smart Van v.0.1.0
authors: robypomper
tags: [release, jod_smart_van]
---

The first version of the JOD Smart Van distribution is available online via the
source code repository.

This distribution is based on the 2.2.4-DEV version of the [JOD daemon](https://github.com/johnosproject/com.robypomper.josp.jod).
In this way it is possible to exploit the new workers for DBus and optimize
global performance.

Included in this version, we find the firmware for integrating [Victron](https://www.victronenergy.com/)
solar chargers. This firmware reads the data published by the device through the
VE.Direct serial cable, after which it transmits it to the JOD daemon via DBus.
Actually it supports SmartSolar and BlueSolar series devices with the VE.Direct
port. More info about this firmware on [his](https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/)
repository.

Here you can download the
[JOD Smart Van distribution - v0.1.0](https://github.com/Smart-Van-2-0/com.robypomper.smartvan.jod_smart_van/releases/tag/0.1.0)
release.
