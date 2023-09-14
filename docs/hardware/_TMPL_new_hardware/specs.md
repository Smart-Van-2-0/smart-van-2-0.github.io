---
title: Specs
hide_title: true
sidebar_position: 1
---

import PageHardwareSpecs from '@site/src/components/templates/PageHardwareSpecs';

<PageHardwareSpecs
  name="Panel Prototype"
  code="panel_prototype"
  specs_list={{
    Energy: {
      Battery: [
        {
          name: "Recharging Current",
          fw_code: "fw_victron",
          device: "Victron SmartSolar or BlueSolar"
        },
        {
          name: "Current Voltage",
          fw_code: "fw_victron",
          device: "Victron SmartSolar or BlueSolar"
        },
      ]
    }
  }} >

This is the ...

</PageHardwareSpecs>
