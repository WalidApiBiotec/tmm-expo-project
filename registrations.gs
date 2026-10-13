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
// TMM EXPO — Enregistrement des inscriptions dans Google Sheets

var SHEET_ID = "10eJT2iXRtREk6Whyzhh4wJNGlQpdOscDGUhzxLxrb_U";
var NOTIFY = true;

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

// Protection contre les formules injectées dans les cellules
function safe(value) {
  var v = String(value == null ? "" : value).slice(0, 2000);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

// Réponse textuelle
function response(message) {
  return ContentService.createTextOutput(message).setMimeType(
    ContentService.MimeType.TEXT,
  );
}

// Réception des inscriptions du site web
function doPost(e) {
  var p = (e && e.parameter) || {};

  if (!p.name || (!p.phone && !p.email)) {
    return response("ERROR: Informations obligatoires manquantes");
  }

  var lock = LockService.getScriptLock();

  try {
    lock.waitLock(15000);

    var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    var sheet = spreadsheet.getSheets()[0];

    // Créer les en-têtes si la feuille est vide
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }

    // Enregistrer l'inscription
    sheet.appendRow([
      new Date(),
      safe(p.name),
      safe(p.organisation),
      safe(p.phone),
      safe(p.email),
      safe(p.type),
      safe(p.description),
      safe(p.needs),
      p.sponsor_contact === "true" ? "oui" : "non",
      safe(p.lang),
    ]);

    SpreadsheetApp.flush();

    // La notification ne doit pas annuler l'enregistrement
    if (NOTIFY) {
      try {
        var ownerEmail = Session.getEffectiveUser().getEmail();

        if (ownerEmail) {
          MailApp.sendEmail({
            to: ownerEmail,
            subject: "TMM EXPO - Nouvelle inscription",
            body:
              "Nouvelle inscription reçue.\n\n" +
              "Nom : " +
              safe(p.name) +
              "\n" +
              "Entreprise : " +
              safe(p.organisation) +
              "\n" +
              "Téléphone : " +
              safe(p.phone) +
              "\n" +
              "E-mail : " +
              safe(p.email) +
              "\n" +
              "Type : " +
              safe(p.type),
          });
        }
      } catch (emailError) {
        console.error("Erreur de notification : " + emailError);
      }
    }

    return response("OK");
  } catch (error) {
    console.error("Erreur d'inscription : " + error);
    return response("ERROR: " + error.message);
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

// Test manuel : vérifier l'accès au Google Sheets
function testSheetAccess() {
  var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  Logger.log("Nom du tableau : " + spreadsheet.getName());
  Logger.log("URL : " + spreadsheet.getUrl());
}
