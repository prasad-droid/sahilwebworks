/**
 * PRIME ROUTE AGENCIES - Enquiry Email Notifier
 * ------------------------------------------------
 * Emails you whenever a new product inquiry row appears in this sheet
 * (rows are added by SheetsDB when someone submits the website form).
 *
 * SETUP (one time):
 * 1. In your Google Sheet: Extensions -> Apps Script
 * 2. Delete any code there, paste ALL of this code, press Save (Ctrl+S)
 * 3. In the toolbar select "setupTriggers" and click Run.
 *    - Approve the permission prompts (choose your Google account,
 *      click Advanced -> Go to project (unsafe) -> Allow).
 * 4. Optional: select "testEmail" and click Run to confirm emails arrive.
 *
 * Done! Every new form submission will now email you within seconds.
 */

// Where notifications are sent. Change this if you want a different inbox.
var NOTIFY_EMAIL = 'info@primerouteagencies.com';

// Column order in your sheet (index 0 = column A)
// A: Sr. no | B: name | C: email | D: phone | E: company | F: country | G: message | H: submitted at

function onSheetChange() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0]; // first sheet (the one SheetsDB writes to)
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return; // nothing but the header row

  var props = PropertiesService.getScriptProperties();

  // Remember which submissions were already emailed (by their timestamp),
  // so deleted rows or repeated triggers never cause missed/duplicate mails.
  var processed = [];
  try { processed = JSON.parse(props.getProperty('processedTimestamps') || '[]'); } catch (err) { processed = []; }
  var seen = {};
  processed.forEach(function (ts) { seen[ts] = true; });

  var data = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();

  var newRows = [];
  data.forEach(function (row) {
    var ts = String(row[7] || '');
    if (ts && !seen[ts]) {
      seen[ts] = true;
      newRows.push(row);
    }
  });

  if (newRows.length === 0) return;

  newRows.forEach(sendEnquiryEmail);

  // Keep only the latest 200 timestamps to stay small
  var allTimestamps = Object.keys(seen).slice(-200);
  props.setProperty('processedTimestamps', JSON.stringify(allTimestamps));
}

function sendEnquiryEmail(row) {
  var srNo       = row[0];
  var name       = row[1];
  var email      = row[2];
  var phone      = row[3];
  var company    = row[4];
  var country    = row[5];
  var message    = row[6];
  var submittedAt = row[7];

  if (!name && !email) return; // skip empty rows

  var subject = 'New Product Inquiry' +
    (srNo ? ' #' + srNo : '') +
    ' from ' + (company || name);

  var html =
    '<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #ddd;border-radius:8px;overflow:hidden">' +
      '<div style="background:#0b1b36;color:#fff;padding:16px 24px">' +
        '<h2 style="margin:0">New Product Enquiry</h2>' +
      '</div>' +
      '<div style="padding:24px;color:#222;line-height:1.7">' +
        '<p><strong>Sr. No:</strong> ' + (srNo || '-') + '</p>' +
        '<p><strong>Name:</strong> ' + name + '</p>' +
        '<p><strong>Email:</strong> ' + email + '</p>' +
        '<p><strong>Phone:</strong> ' + (phone || '-') + '</p>' +
        '<p><strong>Company:</strong> ' + (company || '-') + '</p>' +
        '<p><strong>Country:</strong> ' + (country || '-') + '</p>' +
        '<p><strong>Message:</strong></p>' +
        '<p style="background:#f6f6f6;padding:12px;border-radius:6px">' + String(message || '').replace(/\n/g, '<br>') + '</p>' +
        '<p style="color:#888;font-size:13px">Submitted at: ' + (submittedAt || '-') + '</p>' +
      '</div>' +
    '</div>';

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    htmlBody: html,
    replyTo: email || undefined
  });
}

/** Run ONCE to install the automatic watchers. */
function setupTriggers() {
  // Remove old copies of our triggers if re-running
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'onSheetChange') {
      ScriptApp.deleteTrigger(t);
    }
  });

  // Instant notification when the sheet changes (SheetsDB adds a row)
  ScriptApp.newTrigger('onSheetChange')
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onChange()
    .create();

  // Safety net: also scan every 5 minutes in case the instant one is missed
  ScriptApp.newTrigger('onSheetChange')
    .timeBased()
    .everyMinutes(5)
    .create();
}

/** Run once to verify email delivery works. */
function testEmail() {
  sendEnquiryEmail([
    'TEST', 'Test Customer', 'test@example.com', '0000000000',
    'Test Company', 'India', 'This is a test enquiry email from your website notifier.',
    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  ]);
}
