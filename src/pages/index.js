import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

import ImageClickable from '@site/src/components/ImageClickable';
import WebSiteMap from '@site/src/components/WebSiteMap';
import { MapRoadmap, MapFeatures, MapCollaborate } from '@site/src/components/WebSiteMap';
import GettingStarted from '@site/src/components/GettingStarted';
import LinkFacebookPage from '@site/src/components/LinkFacebookPage';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.header_img)}>
      <div className="container">
        <p className={clsx('hero__subtitle', styles.header_titles)}>
          The <h1 className={clsx('hero__title', styles.header_titles)}>{siteConfig.title}</h1>
          allows anybody convert a van, camper or caravan into a SMART van, camper or caravan.
        </p>
      </div>
    </header>
  );
}

function HomePageIntro() {
  return (
    <section className={styles.home_section}>
      <div className="container">
        <WebSiteMap />
        <p className={styles.intro_text}>
          As the official Smart Van's web site here are collected all project's
          resources like docs, schemes, source code, assets, tutorials, etc...
        </p>
      </div>
    </section>
  );
}

function HomePageWelcome() {
  return (
    <section className={styles.home_section}>
      <div className="container">
        <h1>Welcome</h1>
        <p>
          The <b>SmartVan project</b> would provide the known-how and all required
          tools to create a DIY camper system including: resources management,
          services control and smart features.
        </p>
        <ImageClickable
          src="/img/home/functional_schema.png"
            alt="Hardware Functional Schema" />
        <p>
          It will be possible to monitor the classic resources of a camper such
          as electricity and water tanks. But also control the camper's
          services, e.g. lights, heating, fridge, fans, awnings.... Everything,
          always accessible from a smartphone application, even remotely. More
          info on the <MapFeatures /> page.
        </p>
        <p>
          <b>This is an Open Source project</b>, so everything from sensors to the
          mobile application can be customized and re-shared with the community.
          Go to <MapCollaborate /> page for more information on how to
          customize and collaborate on the project.
        </p>
      </div>
    </section>
  );
}

function HomePageWhatIsIt() {
  return (
    <section className={styles.home_section}>
      <div className="container">
        <h1>What is it?</h1>
        <p>
          <b>The Smart Van is an DIY solution to smartize campers and vans
          easily and safely.</b>
        </p>
        <ImageClickable
          src="/img/home/installation_schema.png"
          alt="Hardware Installation Schema" />
        <p>
          <i>What does Smartize mean?</i><br/>
          In the IT world, it means connecting a physical object to an
          application or the web. This makes it possible to monitor and control
          the object via software.
        </p>
        <p>
          So, in our case, we want to smartize a camper. By doing so, we can
          monitor its resources (energy, water, location...) and control its
          services (lights, fans, awning, fridge...).<br/>
          Given that each camper or van is unique and the resources and services
          to manage also vary from vehicle to vehicle. For this reason we
          decided to start with the most common resources and services, and
          then add more "exotic" features in the feature releases.
        </p>
        <p>
          For now, you can find the list of the SmartVan's <MapFeatures />.
          This lists are defined at the beginning of the development of each
          release, so that they can be integrated and updated according to the
          needs of the community. More about release cycles on <MapRoadmap /> page.
        </p>
      </div>
    </section>
  );
}

function HomePageGettingStarted() {
  return (
    <section className={styles.home_section}>
      <GettingStarted />
    </section>
  );
}

function HomePageWhatsNext() {
  return (
    <section className={styles.home_section}>
      <div className="container">
        <h1>What's next?</h1>
        <p>
          Do it, play it and share your experience. If you need help, ask for
          help on our official <LinkFacebookPage label="Facebook Page" />.
          You can use it also <b>sharing your projects and ideas</b>.
        </p>
        <div className={styles.home_collaborate}>
          <img
             className={styles.home_collaborate_handsake}
             src="img/home/handsjake.png" />
          <p>
            Since this is an open project in which anyone can participate, don't
            be afraid to offer your ideas, whether they are suggestions or
            criticisms. Given the variety of fields and knowledge required by
            this project, no one is an expert in everything, so it will be easy
            to <MapCollaborate /> even small things.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Smart Van official web site">
      <HomepageHeader />
      <main>
        <HomePageIntro />
        <HomePageWelcome />
        <HomePageWhatIsIt />
        <HomePageGettingStarted />
        <HomePageWhatsNext />
      </main>
    </Layout>
  );
}
