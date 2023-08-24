import React from 'react';
import styles from './styles.module.css';

/**
 <TitleSubSectionPage
   section="Hardware"
   subsection="Panel prototype"
   page="Assembly" />
 */
export default function TitleSubSectionPage(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{props.section} - {props.subsection}</h1>
      <h2 className={styles.h2}>{props.page}</h2>
    </div>
  );
}
