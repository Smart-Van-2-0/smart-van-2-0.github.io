---
title: FW Victron
hide_title: true
sidebar_position: 1
---

import PageSoftware from '@site/src/components/templates/PageSoftware';

<PageSoftware
  name="FW Victron"
  code="fw_victron"
  category="Firmware"
  language="Python"
  current_status="Active"
  current_version="1.0.1"
  url_repo="https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/"
  url_downloads="https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/tags/"
  url_support="https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/issues/" >

Simple Python module that read data from Victron devices and share them on the
local DBus.

Once ran, this script **reads data from the serial specified port then notify
the DBus with updated values**. The DBus service and his properties depends on
the PID get from the device. More info on [Supported devices and value mapping](https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/#supported-devices-and-value-mapping).

</PageSoftware>
