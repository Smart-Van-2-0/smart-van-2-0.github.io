import React from 'react';
import styles from './styles.module.css';

import TitleSubSectionPage from '@site/src/components/TitleSubSectionPage';

function HardwareSpecs(props) {
  return (
    <div>
      {Object.keys(props.specs_list).map((key_cat, index_cat) => {
        return (
          <div key={index_cat}>

            {Object.keys(props.specs_list[key_cat]).map((key_sub, index_sub) => {
              return (
                <div key={index_sub}>
                  <h4>{key_cat} - {key_sub}</h4>
                  <table>
                    <tr>
                      <th>Specs</th>
                      <th>Firmware</th>
                      <th>Device</th>
                     </tr>

                  {Object.keys(props.specs_list[key_cat][key_sub]).map((key_spec, index_spec) => {
                    return (
                      <tr key={index_spec}>
                        <td>{props.specs_list[key_cat][key_sub][key_spec].name}</td>
                        <td><a href={"/docs/software/firmware/" + props.specs_list[key_cat][key_sub][key_spec].fw_code}>{props.specs_list[key_cat][key_sub][key_spec].fw_code}</a></td>
                        <td>{props.specs_list[key_cat][key_sub][key_spec].device}</td>
                       </tr>
                    );
                  })}

                  </table>
                </div>
              );
            })}

          </div>
        );
      })}
    </div>
  );
}


/**
  <PageHardwareSpecs
    name="Panel Prototype"
    code="panel_prototype"
    specs_list={{
        Energy: {
          Battery: [
            {
              name: "Recharging Current",
              fw_code: "fw_victron",
              device: "Victron SmartSolar or BlueSolar"
            },
            {
              name: "Current Voltage",
              fw_code: "fw_victron",
              device: "Victron SmartSolar or BlueSolar"
            },
          ]
        }
      }} >

    _Device description using normal markdown._

  </PageHardware>
 */
export default function PageHardwareSpecs(props) {
  return (
    <div className={styles.tmpl_container}>
       <TitleSubSectionPage
         section="Hardware"
         subsection={props.name}
         page="Provided Smart Van Specifications" />

           <HardwareSpecs
             specs_list={props.specs_list} />

    </div>
  );
}
