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
        The quickest way to get started is to build your own device. Nothing scary, if you've
        ever played with LEGO, then you'll have no trouble assembling the Smart Van Box. Check
        the shopping list, order the necessary components, and put everything together.
      </p>
      <p>
        Go to the page of the <LinkHardwareModel code="svbox_10" label="latest" /> available
        Smart Van Box, or visit the <a href="docs/hardware">Hardware</a> section
        where you can find other models or upload your own.
      </p>
    </div>
  );
}

export function GettingStartedStep2() {
  return (
    <div>
      <h2>2. Setup everything</h2>
      <p>
        Once the hardware is ready, you can install the firmware and
        configure the services.
      </p>
      <p>
        You can directly <a href="/docs/software#mobile-apps--firmwares">downloads images</a> to
        flash on the IoT devices, or get and compile the source code directly from
        the <a href="/docs/software#firmwares-sources-and-repositories">Git repositories</a>.
      </p>
      <p>
        Once all firmware has been loaded on the devices, you can mount the hardware in
        your camper. Follow the "Mounting instructions" for the chosen hardware. Finally,
        power up the box.<br/>
        <b>REMEMBER!</b> first, connect the service battery, then the services
        and finally the solar panels.
      </p>
      <p>
        Now, your Smart Van box is now active and broadcasting its own WiFi network.
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
        Get the mobile app from the app stores (not yet available), <a href="/docs/software#mobile-apps--firmwares">download it</a> or
        compile from <a href="/docs/software#firmwares-sources-and-repositories">his sources</a>.
      </p>
      <p>
        Then, lunch the installed app and follow these steps:
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
