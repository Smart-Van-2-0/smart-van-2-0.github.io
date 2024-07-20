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
