import React from 'react';
import styles from './styles.module.css';

import ImageClickable from '@site/src/components/ImageClickable';

function SoftwareHeader(props) {
  return (
    <div className={styles.head_container}>
      <p className={styles.descr}>
        <h3>Description</h3>
        {props.children}
      </p>
      <div className={styles.list_container}>
        <h3>Status</h3>
        <ul className={styles.list}>
          <li className={styles.list_item}><b>Status:</b> {props.current_status}</li>
          <li className={styles.list_item}><b>Version:</b> {props.current_version}</li>
          <li className={styles.list_item}><b>Category:</b> {props.category}</li>
          <li className={styles.list_item}><b>Language:</b> {props.language}</li>
          <li className={styles.list_item}><b>Code:</b> {props.code}</li>
        </ul>
        <hr />
        <h3>Links</h3>
        <ul className={styles.list}>
          {props.url_repo ? <li className={styles.list_item}><a href={props.url_repo + ""}>Git Repo</a></li> : "" }
          {props.url_docs ? <li className={styles.list_item}><a href={props.url_docs + ""}>Docs</a></li> : "" }
          {props.url_downloads ? <li className={styles.list_item}><a href={props.url_downloads + ""}>Downloads</a></li> : "" }
          {props.url_support ? <li className={styles.list_item}><a href={props.url_support + ""}>Support</a></li> : "" }
        </ul>
      </div>
    </div>
  );
}

import TitleSubSection from '@site/src/components/TitleSubSection';
/**
<PageSoftware
  name="FW Victron"
  code="fw_victron"
  category="Firmware"
  language="Python"
  current_status="Active"
  current_version="1.0.1"
  url_repo="https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/"
  url_docs="https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/wiki/"
  url_downloads="https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/tags/"
  url_support="https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/issues/" >

_Software description using normal markdown._

  </PageSoftware>
 */
export default function PageSoftware(props) {
  return (
    <div className={styles.tmpl_container}>
       <TitleSubSection
         section="Software"
         subsection={props.name} />

      <SoftwareHeader
        code={props.code}
        category={props.category}
        language={props.language}
        current_status={props.current_status}
        current_version={props.current_version}
        url_repo={props.url_repo}
        url_docs={props.url_docs}
        url_downloads={props.url_downloads}
        url_support={props.url_support} >
        {props.children}
      </SoftwareHeader>

    </div>
  );
}
