import React from 'react';
import styles from './styles.module.css';

/**
 <ImageClickable
   src="img/home/hwd_inst_schema.png"
   alt="Hardware Installation Schema" />
 */
export default function ImageClickable(props) {
  return (
    <div
      className={styles.img_container}>
      <a
        href={props.link ? props.link : props.src}
        className={styles.img_link}>
        <img
          src={props.src}
          alt={props.alt}
          width={props.width ? props.width : "100%"}
          className={styles.img_tag}
          />
      </a>
    </div>
  );
}
