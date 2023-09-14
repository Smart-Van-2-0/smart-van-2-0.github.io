import React from 'react';
import styles from './styles.module.css';

import TitleSubSectionPage from '@site/src/components/TitleSubSectionPage';

/**
  <PageHardwareGuides
    name="Panel Prototype"
    code="panel_prototype" >

    _Device description using normal markdown._

  </PageHardware>
 */
export default function PageHardwareGuides(props) {
  return (
    <div className={styles.tmpl_container}>
       <TitleSubSectionPage
         section="Hardware"
         subsection={props.name}
         page="Guides" />
          {props.children}
    </div>
  );
}
