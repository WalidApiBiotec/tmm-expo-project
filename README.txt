TMM EXPO - website
===================

Open index.html in a browser to preview. To publish, upload this whole folder to any web host.
Keep the folder structure as it is (index.html, css/, js/, assets/).

Files
  index.html                 page structure
  css/style.css              design; brand colours, gradients and fonts are variables at the top of :root
  js/app.js                  animations, countdown, language switcher, and ALL texts in 3 languages (AR / FR / EN)
  assets/tmm-logo-light.svg  the TMM EXPO logo as a vector (light grey, for dark backgrounds)
  assets/tmm-logo-blue.svg   same logo in brand blue (for light backgrounds)
  assets/hero-arch.webp      the hero picture (arch + TMM EXPO logo)
  assets/favicon.svg         browser tab icon

Brand colours used
  Blue #0E4798   Orange #FF6B2C   Light grey #E2E5E8   Dark #1B2A3A   Teal #3EBDAD

Common edits
  Texts / translations  js/app.js, the big "var D = { ar: {...}, fr: {...}, en: {...} }" block
  Dates                 the date texts in js/app.js (chip_date, day1_* .. day4_*, ft_line, the Object.assign overrides)
                        and the countdown: search for OPEN and CLOSE in js/app.js
  Registration form     js/app.js, set FORM_ENDPOINT to your form URL (for example a Formspree endpoint).
                        While it is empty the form tells visitors registration has not opened yet.
  Fonts                 loaded from Google Fonts in index.html (needs internet)
