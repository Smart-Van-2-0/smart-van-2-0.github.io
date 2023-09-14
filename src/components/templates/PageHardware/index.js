import React from 'react';
import styles from './styles.module.css';

import ImageClickable from '@site/src/components/ImageClickable';

function HardwareHeader(props) {
  return (
    <div className={styles.head_container}>
      <p className={styles.descr}>
        <h3>Description</h3>
        {props.children}
        <i>Follow instructions below to build your own {props.name}.</i>
      </p>
      <div className={styles.list_container}>
        <h3>Photo</h3>
        <ImageClickable
          src={"/img/hardware/" + props.code + "/dev_img.jpg"}
          alt="Panel Prototype's blocks Schema"
          width="200px" />

        <h3>Links</h3>
        <ul className={styles.list}>
          <li className={styles.list_item}><a href={props.code + "/specs"}>Specifications</a></li>
          <li className={styles.list_item}><a href={props.code + "/guides"}>Guides</a></li>
          <li className={styles.list_item}><a href={props.code + "/resources"}>Resources</a></li>
        </ul>
      </div>
    </div>
  );
}

function HardwareImage(props) {
  return (
    <div>
      <h3>Block schema</h3>
      <ImageClickable
        src={"/img/hardware/" + props.code + "/hw_blocks_schema.png"}
        alt="Panel Prototype's blocks Schema"
        width="50%" />
    </div>
  );
}

function HardwareBuilds(props) {
  return (
    <div>
      <h3>Build your device</h3>
      <h4>1. Get the hardware</h4>
      <p>
        Check the <a href={props.code + "/bom"}>BOM</a> lists and make sure you have everything before you start.
      </p>
      <h4>2. Assembly your device</h4>
      <p>
        Follow the prototype's <a href={props.code + "/assembly"}>Assembly</a> tutorial.
      </p>
      <h4>2. Flash the JOD Smart Van Image on RaspberryPi SD Card</h4>
      <p>
        Follow the documentation on <a href="/docs/software/image/jod_smart_van_image">JOD Smart Van</a> page.
      </p>
    </div>
  );
}

function HardwareDetails(props) {
  return (
    <div>
      {/* <h3>Device's details</h3> */}
    </div>
  );
}

import TitleSubSection from '@site/src/components/TitleSubSection';
/**
  <PageHardware
    name="Panel Prototype"
    code="panel_prototype" >

    _Device description using normal markdown._

  </PageHardware>
 */
export default function PageHardware(props) {
  return (
    <div className={styles.tmpl_container}>
       <TitleSubSection
         section="Hardware"
         subsection={props.name} />

      <HardwareHeader
        code={props.code}>
        {props.children}
      </HardwareHeader>

      <HardwareImage
        code={props.code} />

      <HardwareBuilds
        code={props.code} />

      <HardwareDetails
        code={props.code} />

    </div>
  );
}
