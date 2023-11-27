import React from 'react';
import styles from './styles.module.css';

import ImageClickable from '@site/src/components/ImageClickable';
import TitleSubSection from '@site/src/components/TitleSubSection';
import { MapFeatures, MapSpecs } from '@site/src/components/WebSiteMap';


/********************************************************************
  * All pages
  ********************************************************************/

/**
```js
<HardwareTitle
  name={hardware_name}
  status={hardware_status} />         Proposed, Development, Beta, Stable
```

This component is used to display the title of a hardware page.

Since version 1.1.0.
*/
export function HardwareTitle(props) {
  return (
     <TitleSubSection
       section="Hardware"
       subsection={props.name} />
  );
}


/********************************************************************
  * Main page
  ********************************************************************/

/**
```js
<HardwareHeader
  code={hardware_code}>

{DESCRIPTION IN MARKDOWN}

</HardwareHeader>
```

This component is used to display the header of a hardware page.

Since version 1.1.0.
*/
export function HardwareHeader(props) {
  return (
    <div className={styles.head_container}>
      <div className={styles.list_container}>
        <ImageClickable
          src={"/img/hardware/" + props.code + "/dev_img.jpg"}
          width="200px" />
        <hr />
        <h3>Links</h3>
        <ul className={styles.list}>
          <li className={styles.list_item}><a href={props.code + "/specs"}>Specifications</a></li>
          <li className={styles.list_item}><a href={props.code + "/guides"}>Guides</a></li>
          <li className={styles.list_item}><a href={props.code + "/resources"}>Resources</a></li>
        </ul>
      </div>
      <div className={styles.descr}>
        {props.children}
        <i>Follow instructions below to build your own {props.name}.</i>
      </div>
    </div>
  );
}


/********************************************************************
  * Specs page
  ********************************************************************/

/**
```js
<HardwareSpecsProvidedText />
```

This component is used to display the text that introduces the table of
specifications provided by a Smart Van Box.

Since version 1.1.0.
*/
export function HardwareSpecsProvidedText() {
  return (
    <>
      <p>
        The following tables list the implemented Smart Van <MapSpecs /> by this
        Smart Van Box. This allows you to verify that this box provides the
        specifications required by the <MapFeatures /> that interest you before
        you embark on building your own box.
      </p>
      <p>
        For each specification, the corresponding firmwares are also listed. This
        makes it easy to understand the dependencies between the specifications
        provided by the Smart Van Box and the hardware it contains.
      </p>
      <p>
        Remember that if you modify the configurations of the <a href="/docs/software/jod_smart_van/jod_smart_van">JOD Smart Van</a>,
        specifically the <code>struct.jod</code> file, then the specifications
        provided by your Smart Van Box will change accordingly.
      </p>
    </>
  );
}


/**
<HardwareSpecsProvidedTable
  specs_implemented={specs_implemented} />

This component is used to display the specs implemented by a hardware.
Returns a table with the following fields: Group, SubGroup, Firmware or Device,
Description.

The specs_implemented object is a list of specs with the following format:
```js
specs_implemented = {
   "spec_name": {
      "group": "group_name",
      "sub_group": "sub_group_name",
      "fw": ["fw_name1", "fw_name2"],
      "desc": "description"
    }
}

Since version 1.1.0.
```
*/
export function HardwareSpecsProvidedTable(props) {
  return (
    <div>
      <table className={styles.specs_table}>
        <tr>
          <th>Group</th>
          <th>SubGroup</th>
          <th>Firmware or Device</th>
          <th>Description</th>
        </tr>
        {Object.keys(props.specs_implemented).map((key_spec, index_spec) => {
          const spec = props.specs_implemented[key_spec]
          const group_name = spec.group
          // if fw is not defined, set it to an empty list
          if (spec.fw === undefined) { spec.fw = [] }
          // return a row for each subgroup
          const sub_group = spec.sub_group
          const fw = spec.fw
          const desc = spec.desc
          return (
            <tr key={index_spec}>
              <td><a href={"/docs/specs/" + group_name}>{group_name}</a></td>
              <td><a href={"/docs/specs/" + group_name + "/" + sub_group}>{sub_group}</a></td>
              <td>{fw.map((fw_item, index_fw) => {
                // return a link for each firmware
                const fw_code = fw_item.toLowerCase().replace(/fw /g, "fw_").replace(/ /g, "")
                return (
                  <a href={"/docs/software/firmware/" + fw_code}>{fw_item}<br/></a>
                );
              })}</td>
              <td>{desc}</td>
             </tr>
          );
        })}
      </table>
    </div>
  );
}

/**
<HardwareSpecsProvidedTable
  specs_implemented={specs_implemented} />

This component is used to display the specs implemented by a hardware.
Generate a table with the following format:
+-----------+---------------------+---------------------+
| SubGroup  | Firmware or Device  | Purpose             |
+===========+=====================+=====================+
| sub_group | fw_name             | description         |
+-----------+---------------------+---------------------+

The specs_implemented object is a list of specs with the following format:
```js
specs_implemented = {
   "spec_name": {
      "group": "group_name",
      "sub_group": "sub_group_name",
      "fw": ["fw_name1", "fw_name2"],
      "desc": "description"
    }
}
```

Since version 1.1.0.
*/
export function HardwareSpecsProvidedTable_ByGroup(props) {
  // convert specs_implemented to a list of lists with the 'group' as key
  const specs_implemented_list = []
  var i = 3/0
  Object.keys(props.specs_implemented).map((key_spec, index_spec) => {
    const group = props.specs_implemented[key_spec].group
    if (specs_implemented_list[group] === undefined) {
      specs_implemented_list[group] = []
    }
    specs_implemented_list[group].push(props.specs_implemented[key_spec])
  })

  // return a list of group names
  const group_names = Object.keys(specs_implemented_list)
  return (
    <div>
      {group_names.map((group_name, index_group) => {
        // return a title and a table for each group
        const group_list = specs_implemented_list[group_name]
        return (
          <div>
            <h2
              class="anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module"
              id={group_name}>
              {group_name}
              <a href={"#" + group_name} class="hash-link">​</a></h2>
            <table className={styles.specs_table}>
              <tr>
                <th>SubGroup</th>
                <th>Firmware or Device</th>
                <th>Purpose</th>
              </tr>
              {group_list.map((spec, index_spec) => {
                // if fw is not defined, set it to an empty list
                if (spec.fw === undefined) { spec.fw = [] }
                // return a row for each subgroup
                const sub_group = spec.sub_group
                const fw = spec.fw
                const desc = spec.desc
                return (
                  <tr key={index_spec}>
                    <td><a href={"/docs/specs/" + group_name + "/" + sub_group}>{sub_group}</a></td>
                    <td>{fw.map((fw_item, index_fw) => {
                      // return a link for each firmware
                      const fw_code = fw_item.toLowerCase().replace(/fw /g, "fw_").replace(/ /g, "")
                      return (
                        <a href={"/docs/software/firmware/" + fw_code}>{fw_item}<br/></a>
                      );
                    })}</td>
                    <td>{desc}</td>
                   </tr>
                );
              })}
            </table>
          </div>
        )
      })}
    </div>
  );
}
