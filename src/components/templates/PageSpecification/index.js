import React from 'react';
import styles from './styles.module.css';

import TitleSubSection from '@site/src/components/TitleSubSection';
import Card from '@mui/material/Card';


/**
<SpecificationTitle
  name={specs_group_name}
  status={specs_group_status} />        Proposed, Development, Beta, Stable

Since version 1.1.0.
 */
export function SpecificationTitle(props) {
  return (
     <TitleSubSection
       section="Specification"
       subsection={props.name} />
  );
}


function SpecificationTable(props) {
  return (
    <table className={styles.specs_table}>
      <tr>
        <th>Name</th>
        <th>Type</th>
      </tr>
      {Object.keys(props.pillars).map((key_pillar, index_pillar) => {
        return (
          <tr key={index_pillar}>
            <td><a href={"#" + props.pillars[key_pillar].name}>{props.pillars[key_pillar].name}</a></td>
            <td>{props.pillars[key_pillar].pillarType}{props.pillars[key_pillar].pillarDir}</td>
           </tr>
        );
      })}
    </table>
  );
}

/**
<SpecificationHeader
  name={specs_group_name}
  pillars={pillars} >

{DESCRIPTION IN MARKDOWN}

</SpecificationHeader>

Since version 1.1.0.
 */
export function SpecificationHeader(props) {
  return (
    <div className={styles.tmpl_container}>
      {props.children}
      <SpecificationTable
        pillars={props.pillars} />
    </div>
  );
}


function PillarTableLine(props) {
    return (
      <tr><td>
        {props.isAction ? "Action" : "State"}
      </td><td>
        <code>{props.code}</code>
      </td><td>
        {props.value ? props.value : props.fallback}
      </td></tr>
    );
}

function PillarUnitRange(props) {
  const item = props.pillar

  if (item.unit == null)
    return (
      <p>Not defined</p>
    );

  if (Array.isArray(item.unit)) {
    return (
      <table>
        <tr>
          <th>Value</th>
          <th>Key</th>
        </tr>
        {Object.keys(item.unit).map((key, index) => {
          return (
            <tr key={key}>
              <td>{item.unit[key].key}</td>
              <td>{item.unit[key].val}</td>
            </tr>
          );
        })}
      </table>
    );
  }

  return (
    <p>
      {item.unit}
    </p>
  );
}

function PillarDescr(props) {
  const item = props.pillar
  return (
    <p>
      {item.descr}
    </p>
  );
}

function PillarTableBoolean(props) {
  const item = props.pillar
  return (
    <table>
      <PillarTableLine code="TRUE" value={item.aliasTrue} fallback="On" />
      <PillarTableLine code="FALSE" value={item.aliasFalse} fallback="Off" />
      {item.pillarDir == "Action" ?
        <>
          <PillarTableLine isAction="true" code="SwitchTrue()" value={item.aliasSwitchTrue} fallback="Switch On" />
          <PillarTableLine isAction="true" code="SwitchFalse()" value={item.aliasSwitchFalse} fallback="Switch Off" />
        </>
      :
        null
      }
    </table>
  );
}

function PillarTableRange(props) {
  const item = props.pillar
  return (
    <table>
      <PillarTableLine code="MIN" value={item.min} fallback="0" />
      <PillarTableLine code="MAX" value={item.max} fallback="100" />
      <PillarTableLine code="STEP" value={item.step} fallback="5" />
      {item.pillarDir == "Action" ?
        <>
          <PillarTableLine isAction="true" code="Increase()" value={item.aliasIncrease} fallback="Increase" />
          <PillarTableLine isAction="true" code="Decrease()" value={item.aliasDecrease} fallback="Decrease" />
          <PillarTableLine isAction="true" code="SetMin()" value={item.aliasSetMin} fallback="Set to Min" />
          <PillarTableLine isAction="true" code="SetMax()" value={item.aliasSetMax} fallback="Set to Max" />
        </>
      :
        null
      }
    </table>
  );
}

function Pillar(props) {
  const item = props.pillar
  const descr = <PillarDescr pillar={item} />;
  let unit = null;
  let table = null;
  switch (item.pillarType) {
      case 'Boolean':
        table = <PillarTableBoolean pillar={item} />;
        break;
      case 'Range':
        unit = <PillarUnitRange pillar={item} />;
        table = <PillarTableRange pillar={item} />;
        break;
      default:
        return <p>Unknow {item.pillarType} type</p>;
    }

  return (
    <Card sx={{ minWidth: "200px", maxWidth: "500px", marginLeft: "16px" }}>
      <table className={styles.pillar_table}>
        <tr>
          <th>Description</th>
          <td width="100%">{descr}</td>
        </tr>
        {unit ?
          <tr>
            <th>Unit</th>
            <td>{unit}</td>
          </tr>
          : null
        }
        <tr>
          <th>Alias</th>
          <td>{table}</td>
        </tr>
      </table>
    </Card>
  );
}

/**
<SpecificationDetails
  name={specs_group_name}
  group_path={specs_group_path}
  pillars={specs_group_pillars} />

Since version 1.1.0.
 */
export function SpecificationDetails(props) {
  // clean input data
  const group_path = props.group_path
  const pillars = props.pillars

  return (
    <div className={styles.spec_details}>
      {Object.keys(pillars).map((key_pillar, index_pillar) => {
        return (
          <div key={index_pillar} className={styles.spec_details_single}>
            <a class="anchor" name={pillars[key_pillar].name}></a>
            <p className={styles.spec_details_title_path}>{group_path}</p>
            <h3>
              {pillars[key_pillar].name}
              <span className={styles.spec_details_title_type}>
                :&nbsp;
                {pillars[key_pillar].pillarType}
                {pillars[key_pillar].pillarDir}
              </span>
            </h3>
            <Pillar
              pillar={pillars[key_pillar]} />
          </div>
        );
      })}
    </div>
  );
}
