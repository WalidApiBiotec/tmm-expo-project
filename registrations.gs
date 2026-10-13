// TMM EXPO - saves each website registration as a new row in the Google Sheet.
var SHEET_ID = "10eJT2iXRtREk6Whyzhh4wJNGlQpdOscDGUhzxLxrb_U";
var NOTIFY = true; // true = also email the sheet owner for every registration

var HEADERS = [
  "Date",
  "Nom et prénom",
  "Entreprise / projet",
  "Téléphone",
  "E-mail",
  "Type",
  "Description",
  "Besoins exposant",
  "Contact sponsoring",
  "Langue",
];

function safe(v) {
  // stops "=..." "+213..." from being read as a formula
  v = String(v == null ? "" : v).slice(0, 2000);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function doPost(e) {
  var p = (e && e.parameter) || {};
  if (!p.name || (!p.phone && !p.email))
    return ContentService.createTextOutput("invalid");
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var sh = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.setFrozenRows(1);
    }
    sh.appendRow([
      new Date(),
      safe(p.name),
      safe(p.organisation),
      safe(p.phone),
      safe(p.email),
      safe(p.type),
      safe(p.description),
      safe(p.needs),
      p.sponsor_contact === "true" ? "oui" : "",
      safe(p.lang),
    ]);
    if (NOTIFY) {
      MailApp.sendEmail(
        Session.getEffectiveUser().getEmail(),
        "TMM Expo - nouvelle inscription (" + safe(p.type) + ")",
        "Nom: " +
          p.name +
          "\nEntreprise: " +
          (p.organisation || "") +
          "\nTél: " +
          (p.phone || "") +
          "\nE-mail: " +
          (p.email || "") +
          "\nType: " +
          p.type,
      );
    }
    return ContentService.createTextOutput("ok");
  } finally {
    lock.releaseLock();
  }
}
