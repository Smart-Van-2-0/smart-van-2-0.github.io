# Changelog

[README](README.md) | [TODOs](TODOs.md) | [LICENCE](LICENCE.md)


## WebSite

### Version 1.1.1

* Updated project's dependencies (Docusaurus -> 3.4.0, React -> 18.3.1, Mui/Material -> 5.16.4)

### Version 1.1.0

* Added Specs subsections and page components
* Added Features subsections and page components
* Updated Software subsections and template to page components
* Updated Hardware subsections and template to page components

### Version 1.0.2

* Added Software subsections and template
* Updated Hardware template to a more light structure but including the SV Specs
* Updated Features template to include the SV Specs
* Other minor fixes

### Version 1.0.1

* Fixed CNAME wrong position for GHActions
* Fixed wrong links to README.md
* Updated versions info on package.json file

### Version 1.0.0

* Customized Docusaurus on `docusuarus.config.js`
  * Setup generic configs in `docusuarus.config.js`
  * Setup favicon and logo images on `docusuarus.config.js` with `img/logos/logo_32.ico` and  `img/logos/logo_200.png` files (added `img/logos/logo_SIZE.EXT` and `graphics/logos/*` masters)
  * Configured `docs` with source dir into `section` and `editUrl`
  * Configured `blog` with `editUrl`
  * Configured Layout::NavBar: title, logo, and items
  * Configured Layout::Footer with the 3 columns: 'SmartVan @ JohnOSProject.org', 'Other WebSites' and 'Social'
  * Configured colorMode and tableOfContents
  * Configured social card as `img/logos/social_banner.png`
  * Set onBrokenLinks as `warn`
* Customized `sidebars.js` according to `docusuarus.config.js`
  * Cleaned `sidebars.js` and updated `docsSidebar` name.
* Customized``src/css/custom.css`
  * Updated default 'light theme' colors on src/css/custom.css`
* Customized `blog/authors.yml` file
  * Added `robypomper` as blog author
  * Removed example authors
* Customized Homepage on `src/pages/index.js`and `index.module.css`
  * Updated HomepageHeader component with a background image `static/img/home/head_img.png` and some styles
  * Removed HomepageFeatures component from `src/components/HomepageFeatures/`
  * Customized the HomePage content
* Arranged content main structure
  * created Features section, subsections and template
  * created Hardware section and models template
  * created Software section


## Content

### Version 20241029

* Added link to the crowdfunding page

### Version 20241016

* Removed "Specifications" link from index page's main menu
* Updated Features to 2nd series
* Removed component PageFeature
* Landing pages
  * Mobile App
* Updated SVBox logo to version 2
* Fixed header image resizing
* Updated all **Note: into ":::note Title"
* Blog posts
  * Added "Published the new features list" blog's post

### Version 20240906

* Landing pages
  * DoItYourself
  * Workshops
  * CrowdFunding
* Blog posts
  * Added "Make your SVBox Workshop @ BITZ Fab Lab, Bolzano" blog's post

### Version 20240829

* Blog posts
  * Added "Make your SVBox Workshop @ BITZ Fab Lab, Bolzano" blog's post robypomper 2 minutes ago 8e5999bc
  * Added "Released the SVBox 1.0's BOM List 1.0.1" blog's post robypomper 2 minutes ago fa607536
  * Minor updates to "Introducing the New SVBox IoT 1.0" blog's post robypomper 3 minutes ago a6c1352b

### Version 20240825

* SVBox 1.0
  * Updated BOM's list to 1.0.1
  * Updated 'Prepare the SD Card' guide to support Bookworm
  * Updated 'Assembly guide' with new images and missing steps. Added also the Panel Relays' variant
* Fixed various broken links

### Version 20240720

* Updated SVBox IoT 1.0 model's image
* Added resources and guides for SVBox IoT 1.0
* Added guides for JOD SV Dist
* Added guides for SV Mobile App
* Updated home page with LatestSquare and Box+Mobile App Cards
* Added steps icons to GettingStarted component
* Updated Hardware list with "collaborate email" link
* Cleaned latest johnosproject.org domain references
* Added "Build" landing page

### Version 20240512

* Added SVBox IoT 1.0 model
* Added a Blog post for SVBox IoT 1.0 publication

### Version 20231205

* Updated various Specifications details
* Updated JOD Smart Van docs
* Added a Blog posts for JOD Smart Van 1.0.0 release
* Various fixes and text refectories

### Version 20231128

* Updated Software and Hardware pages to WebSite version 1.1.0
* Enabled the announcement bar on the homepage
* Added Specifications, Features pages
* Updated Software adn Hardware pages
* Added firmwares to Software pages
* Various fixes and text refectories
* Added a Blog posts for FW Victron v 1.0.2, Maker Faire Rome and Website update

### Version 20230918

* Added missing Energy Monitoring feature files
* Updated Panel Prototype device in Hardware
* Added a Blog post for the Panel prototype

### Version 20230914

* Removed Feature's placeholders
* Added Energy Monitoring Feature (incomplete)
* Added Panel Prototype device in Hardware (incomplete)
* Added Software subsections and an initial list of software

### Version 20230904

* Fixed social banner
* Added SV Logo with transparent spaces

### Version 00000000

* Default Docusaurus contents
