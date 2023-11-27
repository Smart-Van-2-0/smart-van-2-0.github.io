import React from 'react';
import styles from './styles.module.css';

import ImageClickable from '@site/src/components/ImageClickable';
import TitleSubSection from '@site/src/components/TitleSubSection';
import { MapSpecs } from '@site/src/components/WebSiteMap';


/**
  <SoftwareTitle
    name={software_name}
    status={software_status} />         Proposed, Development, Beta, Stable

Since version 1.1.0.
 */
export function SoftwareTitle(props) {
  return (
     <TitleSubSection
       section="Software"
       subsection={props.name} />
  );
}


/**
<SoftwareHeader
  name={software_name}
  code={software_code}
  category={software_category}
  language={software_language}
  current_status={software_status}      Proposed, Development, Beta, Stable
  current_version={software_version}
  url_logo="/img/software/firmware/fw_victron/fw_victron_image.png"
  url_repo="https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/"
  url_downloads="https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/tags/"
  url_support="https://github.com/Smart-Van-2-0/com.robypomper.smartvan.fw.victron/issues/" >

{DESCRIPTION IN MARKDOWN}

</SoftwareHeader>

Since version 1.1.0.
*/
export function SoftwareHeader(props) {
  return (
    <div className={styles.head_container}>
      <div className={styles.lists_container}>
        {props.url_logo ?
            <div>
              <ImageClickable
                src={props.url_logo}
                width="200px" />
              <hr />
            </div>
          : null }
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
      <div className={styles.descr}>
        {props.children}
      </div>
    </div>
  );
}


/**
<SoftwareSpecsProvidedText />

Since version 1.1.0.
*/
export function SoftwareSpecsProvidedText() {
  return (
    <p>
      The following table lists all Smart Van <MapSpecs /> that can be provided
      by this firmware. Then, you can use this info to customize the `struct.jod`
      file of the <a href="/docs/software/jod_smart_van/jod_smart_van">JOD Smart
      Van</a> distribution.
    </p>
  );
}


/**
<SoftwareSpecsProvidedTable
  specs_provided={specs_provided} />

Since version 1.1.0.
*/
export function SoftwareSpecsProvidedTable(props) {
  return (
    <table className={styles.specs_table}>
      <tr>
        <th>Property Name</th>
        <th>Specification</th>
      </tr>
      {Object.keys(props.specs_provided).map((key_spec, index_spec) => {
        const fw_value = props.specs_provided[key_spec].fw_value
        const group = props.specs_provided[key_spec].group
        const sub_group = props.specs_provided[key_spec].sub_group
        const spec = props.specs_provided[key_spec].spec
        return (
          <tr key={index_spec}>
            <td><code>{fw_value}</code></td>
            <td>
              <a href={"/docs/specs/" + group + "/" + sub_group + "#" + spec}>
                {group} > {sub_group} > {spec}
              </a>
            </td>
           </tr>
        );
      })}
    </table>
  );
}
