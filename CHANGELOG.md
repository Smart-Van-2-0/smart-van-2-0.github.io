# Changelog

[README](README.md) | [TODOs](TODOs.md) | [LICENCE](LICENCE.md)


## WebSite

### Version 1.0.2

* Added Software subsections and template
* Updated Hardware template to a more light structure but including the SV Specs
* Updated Features template to include the SV Specs
* Other mionr fixes

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
    * Configured Layout::Footer with the 3 columns: 'SmartVan @ JohnOSProject.org', 'Other Web Sites' and 'Social'
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

### Version 20230904

* Fixed social banner
* Added SV Logo with transparent spaces

### Version 00000000

* Default Docusaurus contents
