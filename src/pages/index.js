import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

import ImageClickable from '@site/src/components/ImageClickable';
import WebSiteMap from '@site/src/components/WebSiteMap';
import { MapDocs, MapFeatures, MapCollaborate } from '@site/src/components/WebSiteMap';
import GettingStarted from '@site/src/components/GettingStarted';
import LinkFacebookPage from '@site/src/components/LinkFacebookPage';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.header_img)}>
      <div className="container">
        <p className={clsx('hero__subtitle', styles.header_titles)}>
          <h1 className={clsx('hero__title', styles.header_titles)}>Smart Van</h1>
          The open source project for building your own intelligent van.
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
          As the official Smart Van's web site here you can find all project's
          resources like docs, schemes, source code, assets, tutorials, etc... and create your own SmartVan.
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
            <b>With Smart Van, you can create a van that is tailored to your
            specific needs and requirements.</b> Whether you want a van for
            camping, road trips, or work, Smart Van can help you make it happen.
        </p>
        <ImageClickable
          src="/img/home/functional_schema.png"
            alt="Hardware Functional Schema"
          width="70%" />
        <p>
            Smart Van <b>is open source</b>, which means that anyone can
            contribute to its development. This makes Smart Van a powerful and
            versatile platform for building intelligent vans.
        </p>
        <p>
            If you are interested in building your own intelligent van, then
            Smart Van is the perfect starting-point for you. Visit the Smart
            Van's <MapDocs /> today to learn more and to get started.
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
          alt="Hardware Installation Schema"
          width="70%" />
        <p>
            <i className={styles.question}>What does "smartize" mean?</i>
            In the IT world, it means connecting a physical object to an application or the web so
            that it can be monitored and controlled remotely.
        </p>
        <p>
            <i className={styles.question}>What does it mean to smartize a camper?</i>
            It means connecting the camper's resources (energy, water, location, etc.) and services
            (lights, fans, awning, fridge, etc.) to a smart system that can monitor and control them.
        </p>
        <p>
            Each camper is unique in terms of its resources and services. This is why we started with
            the most common resources and services, and we will add more "exotic" features in the future.
        </p>
        <p>
            You can find a list of the current features on the SmartVan <MapFeatures /> page. These
            lists are defined at the beginning of the development of each release so that they can
            be integrated and updated according to the needs of the community.
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
          Do it, play with it, and share your experience. If you need help, ask for
          it on our official <LinkFacebookPage label="Facebook Page" />. You can
          also use the page to <b>share your projects and ideas</b>.
        </p>
        <div className={styles.home_collaborate}>
          <img
             className={styles.home_collaborate_handsake}
             src="img/home/handsjake.png" />
          <p>
            Since this is an open project, don't be afraid to offer your ideas, whether
            they're suggestions or criticisms. With so many different fields and
            knowledge required, no one is an expert in everything, so it's easy
            to collaborate on even small things. Let's start on the <MapCollaborate /> page
            to know how to submit an idea or suggestion.
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
