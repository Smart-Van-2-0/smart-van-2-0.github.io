import React from 'react';

/**
 <LinkHardwareModel />

 <LinkHardwareModel
   code="box_prototype"
   label="Box Prototype" />
 */
export default function LinkHardwareModel(props) {
  return (
    <a href={"/docs/hardware/" + (props.code ? props.code : "panel_prototype")}>
      {props.label ? props.label : "Panel Prototype"}
    </a>
  );
}
