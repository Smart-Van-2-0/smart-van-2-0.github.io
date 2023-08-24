import React from 'react';
import styles from './styles.module.css';

/**
 <TitleSubSection
   section="Hardware"
   subsection="Panel prototype" />
 */
export default function TitleSubSection(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{props.section} - {props.subsection}</h1>
    </div>
  );
}
