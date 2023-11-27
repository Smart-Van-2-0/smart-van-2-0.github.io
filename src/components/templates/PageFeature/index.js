import React from 'react';
import styles from './styles.module.css';

import TitleSubSection from '@site/src/components/TitleSubSection';
import { MapSpecs } from '@site/src/components/WebSiteMap';


/**
<FeatureTitle
  name={feature_name
  status={feature_status} />    Proposed, Development, Beta, Stable

Since version 1.1.0.
 */
export function FeatureTitle(props) {
  return (
     <TitleSubSection
       section="Feature"
       subsection={props.name} />
  );
}


/**
<FeatureSpecsRequiredText />

Since version 1.1.0.
*/
export function FeatureSpecsRequiredText() {
  return (
    <p>
      The following table lists the <MapSpecs /> for the current Smart Van's
      feature. To verify if your SmartVan Box supports this feature, your
      SmartVan Box must meet the following specifications.
    </p>
  );
}


/**
<FeatureSpecsRequiredTable
  specs_required={specs_required} />

Since version 1.1.0.
*/
export function FeatureSpecsRequiredTable(props) {
  return (
    <table className={styles.specs_table}>
      <tr>
        <th>Group</th>
        <th>SubGroup</th>
        <th>Purpose</th>
      </tr>
      {Object.keys(props.specs_required).map((key_spec, index_spec) => {
        const group = props.specs_required[key_spec].group
        const sub_group = props.specs_required[key_spec].sub_group
        const desc = props.specs_required[key_spec].desc
        return (
          <tr key={index_spec}>
            <td>{group}</td>
            <td><a href={"/docs/specs/" + group + "/" + sub_group}>{sub_group}</a></td>
            <td>{desc}</td>
           </tr>
        );
      })}
    </table>
  );
}
