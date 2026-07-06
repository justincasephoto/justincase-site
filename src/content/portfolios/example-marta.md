---
handle: marta.example
type: post
approvedEmails: []
sessionDate: "2026-05-09"
location: "Kraków, Rynek Główny"
photos:
  - id: 1
    driveId: "REPLACE_WITH_DRIVE_FILE_ID_1"
  - id: 2
    driveId: "REPLACE_WITH_DRIVE_FILE_ID_2"
  - id: 3
    driveId: "REPLACE_WITH_DRIVE_FILE_ID_3"
  - id: 4
    driveId: "REPLACE_WITH_DRIVE_FILE_ID_4"
  - id: 5
    driveId: "REPLACE_WITH_DRIVE_FILE_ID_5"
  - id: 6
    driveId: "REPLACE_WITH_DRIVE_FILE_ID_6"
---

Example portfolio entry.

- `handle`: the person's Instagram username WITHOUT the leading `@`. Case-insensitive when matched.
- `type`: story (up to 3 favorites) · post (up to 5) · colab (up to 10). YOU set this at approval time based on the actual content they published — the limit shown in the collage comes from here, not from what the visitor declared.
- `approvedEmails`: empty until you verify follow + tag. Add the person's Google email here to unlock the collage for them (and share the Drive folder with the same email so the thumbnails render).
- `photos[].driveId`: the Google Drive FILE_ID. Keep files PRIVATE (shared only with approvedEmails) — the page renders thumbs via `https://drive.google.com/thumbnail?id=FILE_ID&sz=w600`, which works when the visitor's browser has a Google session with an email the file is shared with.
- One file per person. Filename slug doesn't matter — matching is done by the `handle` field.

Approval workflow when an ACCESS REQUEST email arrives:
1. Verify on IG: follow + tag in the linked content.
2. Share the Drive folder with their email (Viewer).
3. Add their email to `approvedEmails` here, set the correct `type`, push.
4. Site rebuilds → they tap "check again" on the pending screen → collage unlocks.
