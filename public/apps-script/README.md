# Portfolio webhook — Google Apps Script

The `/portfolio` page POSTs two kinds of events to a Google Apps Script web app,
which forwards each as an email to `thephotographerfromkrakow@gmail.com`:

1. **`access_request`** — someone filled the gate form (handle + email + link +
   declared type) and their email is not yet in `approvedEmails`. The email you
   receive includes the verification checklist and the exact approval steps.
2. **`favorites`** — an approved person saved their favorites. The email lists
   the favorited photos with direct Drive links.

Zero cost, uses your existing GW Business Standard account.

## The approval loop

```
visitor fills form ──► ACCESS REQUEST email to you
                          │  verify follow + tag on IG
                          ▼
        share Drive folder with their email (Viewer)
        add email to approvedEmails in the person's .md
        git push (site rebuilds ~1 min)
                          │
                          ▼
visitor taps "check again" ──► collage unlocks ──► picks favorites
                          │
                          ▼
                FAVORITES email to you ──► you DM the originals
```

## 1. Create the script

1. Open <https://script.google.com/> logged in as `thephotographerfromkrakow@gmail.com`.
2. Click **New project**. Name it `justincase-portfolio-webhook`.
3. Replace the default `Code.gs` contents with the contents of `Code.gs` in this
   folder.
4. Save (⌘/Ctrl-S).

## 2. Deploy as a web app

1. In the Apps Script editor: **Deploy → New deployment**.
2. Type: **Web app**.
3. Description: `portfolio-favorites v1`.
4. Execute as: **Me (thephotographerfromkrakow@gmail.com)**.
5. Who has access: **Anyone** (this is required so the browser can POST without
   auth; the payload has no secrets).
6. Click **Deploy**. Authorize the scopes when Google asks (needs
   `MailApp.sendEmail` and no other scopes).
7. Copy the **Web app URL** — it looks like
   `https://script.google.com/macros/s/AKfycb.../exec`.

## 3. Wire the site

Open `src/components/pages/PortfolioComp.astro` and replace the constant near the
top of the frontmatter:

```ts
const WEBHOOK_URL = 'REPLACE_WITH_APPS_SCRIPT_WEBHOOK_URL';
```

…with the URL you copied. Commit and push. Cloudflare Pages auto-deploys.

## 4. Test

1. Visit `https://justincase.photo/en/portfolio`.
2. Enter `marta.example` as the handle, any email, paste any URL, select `Post`.
3. Since the email is not approved, you should receive an **ACCESS REQUEST**
   email at `thephotographerfromkrakow@gmail.com` within ~10 seconds, and the
   page shows the "Request sent" pending screen.
4. Add that email to `approvedEmails` in
   `src/content/portfolios/example-marta.md`, push, wait for the rebuild, then
   tap **"I have access — check again"** on the pending screen → the collage
   unlocks. Pick favorites, save → you receive the **FAVORITES** email.

## Notes on privacy & abuse

- The script only accepts a plain JSON payload; the body length is capped per
  field (see `safe()` in `Code.gs`).
- The email includes the browser user-agent for diagnostics.
- Google Workspace daily quota for `MailApp.sendEmail` is 1500 recipients/day —
  more than enough.
- If you ever get spam POSTs, add a shared secret: include a fixed token in the
  payload (e.g. `token: 'X'`) and reject in `doPost` if it doesn't match.

## Redeploying after changes

If you edit `Code.gs`, you must **Deploy → Manage deployments → pencil icon →
New version** and re-copy the URL only if you chose "Version" (URL changes with
each numbered version). To keep the same URL, deploy under the same deployment
by selecting **New version** for the existing deployment.
