ITMAM EXPO - website
=====================

Open index.html in a browser to preview. To publish, upload this whole folder to any web host.
Keep the folder structure as it is (index.html, css/, js/, assets/).

Files
  index.html        page structure
  css/style.css     design (colours and fonts are the variables at the top of the :root block)
  js/app.js         animations, countdown, language switcher, and ALL texts in 3 languages (AR / FR / EN)
  assets/           Tamima (transparent), 4 pose avatars, favicon

Common edits
  Texts / translations  js/app.js, the big "var D = { ar: {...}, fr: {...}, en: {...} }" block
  Countdown date        js/app.js, search for OPEN and CLOSE
  Registration form     js/app.js, set FORM_ENDPOINT to your form URL (for example a Formspree endpoint).
                        While it is empty the form tells visitors registration has not opened yet.
  Fonts                 loaded from Google Fonts in index.html (needs internet)
