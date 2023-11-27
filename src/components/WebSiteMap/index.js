import React from 'react';
import styles from './styles.module.css';

export function MapDocs() {
  return (<a href="/docs">DOCS</a>);
}

export function MapFeatures() {
  return (<a href="/docs/features">FEATURES</a>);
}

export function MapSpecs() {
  return (<a href="/docs/specs">SPECIFICATIONS</a>);
}

export function MapHardware() {
  return (<a href="/docs/hardware">HARDWARE</a>);
}

export function MapSoftware() {
  return (<a href="/docs/software">SOFTWARE</a>);
}

export function MapAbout() {
  return (<a href="/about">ABOUT</a>);
}

export function MapCollaborate() {
  return (<a href="/collaborate">COLLABORATE</a>);
}

export function MapRoadmap() {
  return (<a href="/roadmap">ROADMAP</a>);
}


export default function WebSiteMap() {
  return (
    <div className={styles.web_site_map}>
      <MapFeatures />
      |
      <MapHardware />
      |
      <MapSoftware />
      |
      <MapSpecs />
      |
      <MapAbout />
      |
      <MapCollaborate />
    </div>
  )
}