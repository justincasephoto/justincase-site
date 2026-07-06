/**
 * Justin Case — Portfolio webhook (access requests + favorites)
 *
 * Receives POST from the /portfolio page. Two payload kinds:
 *   kind: 'access_request' → { handle, email, link, declaredType, lang, ts, ua }
 *   kind: 'favorites'      → { handle, email, link, type, limit, favorites[], lang, ts, ua }
 * Each is forwarded as an email to NOTIFY_EMAIL.
 *
 * Deploy: see README.md next to this file.
 */

// ==== CONFIG ================================================================
const NOTIFY_EMAIL = 'thephotographerfromkrakow@gmail.com';
const SUBJECT_PREFIX = '[Justin Case]';
// ============================================================================

function doPost(e) {
  try {
    const raw = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    const data = JSON.parse(raw);
    const kind = safe(data.kind) || 'favorites';

    if (kind === 'access_request') {
      sendAccessRequestEmail(data);
    } else {
      sendFavoritesEmail(data);
    }

    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: String(err) });
  }
}

function sendAccessRequestEmail(data) {
  const handle = safe(data.handle);
  const email  = safe(data.email);
  const link   = safe(data.link);
  const dtype  = safe(data.declaredType);
  const lang   = safe(data.lang);
  const ts     = safe(data.ts);
  const ua     = safe(data.ua);

  const subject = SUBJECT_PREFIX + ' ACCESS REQUEST — @' + handle + ' (' + dtype + ')';

  const body = [
    'New portfolio access request from justincase.photo/' + lang + '/portfolio',
    '',
    'Handle:         @' + handle,
    'Google email:   ' + email,
    'Content link:   ' + link,
    'Declared type:  ' + dtype,
    'Timestamp:      ' + ts,
    '',
    '— Verification checklist —',
    '  [ ] @' + handle + ' is following @justin.case.photo on IG',
    '  [ ] @justin.case.photo is tagged in the linked content',
    '  [ ] Content type matches what they declared (' + dtype + ')',
    '',
    '— If everything checks out —',
    '  1. Share the person\'s Drive folder with ' + email + ' as Viewer',
    '     (Drive web UI → folder → Share → add email → Viewer).',
    '  2. Edit src/content/portfolios/<person>.md:',
    '       type: ' + dtype,
    '       approvedEmails:',
    '         - ' + email,
    '  3. git add + commit + push  → site rebuilds in ~1 min.',
    '  4. Optionally DM @' + handle + ': "approved, go back to the page".',
    '',
    '— Diagnostics —',
    'User-agent:  ' + ua,
  ].join('\n');

  MailApp.sendEmail({ to: NOTIFY_EMAIL, subject: subject, body: body });
}

function sendFavoritesEmail(data) {
  const handle    = safe(data.handle);
  const email     = safe(data.email);
  const link      = safe(data.link);
  const type      = safe(data.type);
  const limit     = safe(data.limit);
  const lang      = safe(data.lang);
  const ts        = safe(data.ts);
  const ua        = safe(data.ua);
  const favorites = Array.isArray(data.favorites) ? data.favorites : [];

  const subject = SUBJECT_PREFIX + ' FAVORITES — @' + handle + ' (' + type + ', ' + favorites.length + '/' + limit + ')';

  const favLines = favorites.map(function (f) {
    const id = f && f.id != null ? f.id : '?';
    const driveId = f && f.driveId ? f.driveId : '';
    const driveLink = driveId
      ? 'https://drive.google.com/file/d/' + driveId + '/view'
      : '(no Drive ID)';
    return '  #' + id + '  ' + driveLink;
  }).join('\n');

  const body = [
    'Favorites saved from justincase.photo/' + lang + '/portfolio',
    '',
    'Handle:       @' + handle,
    'Google email: ' + email,
    'Content:      ' + link,
    'Type:         ' + type + '  (limit ' + limit + ')',
    'Count:        ' + favorites.length,
    'Timestamp:    ' + ts,
    '',
    '— Favorites —',
    favLines || '  (none)',
    '',
    '— Next step —',
    '  Send @' + handle + ' the originals of the favorited photos (DM or email).',
    '',
    '— Diagnostics —',
    'User-agent:  ' + ua,
  ].join('\n');

  MailApp.sendEmail({ to: NOTIFY_EMAIL, subject: subject, body: body });
}

// Optional health-check (GET)
function doGet() {
  return json({ ok: true, service: 'portfolio-webhook' });
}

function json(obj) {
  const out = ContentService.createTextOutput(JSON.stringify(obj));
  out.setMimeType(ContentService.MimeType.JSON);
  return out;
}

function safe(v) {
  if (v == null) return '';
  return String(v).replace(/[\r\n]+/g, ' ').slice(0, 500);
}
