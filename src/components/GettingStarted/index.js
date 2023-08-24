import React from 'react';
import styles from './styles.module.css';

import LinkHardwareModel from '@site/src/components/LinkHardwareModel';

export default function GettingStarted(props) {
  return (
      <div className="container">
        {props.notitle ? "" : <h1>Getting Started</h1>}
        <GettingStartedStep1 />
        <GettingStartedStep2 />
        <GettingStartedStep3 />
      </div>
  );
}

export function GettingStartedStep1() {
  return (
    <div>
      <h2>1. Get the Hardware</h2>
      <p>
        The easiest way to get started is to re-create one of the official
        prototype. With each development cycle, a new reference prototype is
        released.
      </p>
      <p>
        Actually there are 2 prototypes under development:
      </p>
      <ul>
        <li> <LinkHardwareModel code="panel_prototype" label="Panel Prototype" /></li>
        <li> <LinkHardwareModel code="box_prototype" label="Box Prototype" /></li>
      </ul>
      <p>
        For any prototype, you can find the BOM lists, wiring diagrams, case
        specs & 3D models; but also the assembly guides and the installation
        tutorials.
      </p>
    </div>
  );
}

export function GettingStartedStep2() {
  return (
    <div>
      <h2>2. Setup everything</h2>
      <p>
        Once the hardware is ready, we can proceed with the installation of the
        firmware and the configuration of the services.
      </p>
      <p>
        Directly <a href="/docs/software#mobile-apps--firmwares">downloads images</a>
        to flash on IoT devices, or get and compile their source code directly
        from <a href="/docs/software#firmwares-sources-and-repositories">git repositories</a>.
      </p>
      <p>
        Once all firmware have been loaded on the devices, then you can proceed
        mounting the hardware into your camper. You can follow the "Mounting
        instructions" from the chosen hardware. Finally, power up the box.<br />
        <b>REMEMBER!</b> first, connect the service battery, then the services
        and finally the solar panels.
      </p>
      <p>
        Now, your Smart Van box is active and broadcasting its own WiFi network.
      </p>
      {/*
      <p>
        ??Pairing ext boxes??<br />
        ??Insert SIM Card??
      </p>
      */}
    </div>
  );
}

export function GettingStartedStep3() {
  return (
    <div>
      <h2>3. Connect the Smart Phone</h2>
      <p>
        Get the mobile app from the app stores (not yet available),<br/>
        <a href="/docs/software#mobile-apps--firmwares">download it</a> or
        compile from <a href="/docs/software#firmwares-sources-and-repositories">his sources</a>.
      </p>
      <p>
        Then, lunch the installed app and follow next steps:
      </p>
      <ol>
        <li>Tap on "Setup new Van"</li>
        <li>Login or register to the IoT platform</li>
        <li>Wait for Smart Van box WiFi scanning</li>
        <li>Connect to the Smart Box WiFi</li>
        <li>Change the Smart Box 's WiFi default password</li>
      </ol>
      <p>
        <b>Now you can access to the Smart Van box from your smartphone!</b>
      </p>
      {/*
      <p>
        ??Pairing ext boxes??<br />
        ??Configure SIM Card??
      </p>
      */}
    </div>
  );
}
