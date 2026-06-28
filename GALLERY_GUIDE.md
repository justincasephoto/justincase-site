# How to Add a New Gallery

This guide walks through adding a new photo gallery to Justin Case (justincase.photo).

## 1. Create the gallery markdown file

Create a new file in `src/content/galleries/`:
```
src/content/galleries/YOUR-SLUG.md
```

Example: `src/content/galleries/desert-series.md`

## 2. Define the gallery frontmatter

Copy this template and fill in:

```yaml
---
title: "Your Gallery Title"
titlePl: "Tytuł w języku polskim"
description: "Brief description of the gallery."
descriptionPl: "Krótki opis galerii."
order: 5
coverColor: "#1a1a1a"
photos: []
---
```

**Explanation:**
- `title` / `titlePl`: Gallery name in English and Polish
- `description` / `descriptionPl`: One-line description shown in the Work index
- `order`: Position in the Work gallery grid (1=first, 5=fifth, etc.)
- `coverColor`: Hex color for the gallery card background (dark theme recommended)
- `photos`: Array of photo objects (see below)

## 3. Add photos to the gallery

Once you have Google Drive photos ready, update the `photos` array:

```yaml
photos:
  - id: 1
    src: "https://drive.google.com/uc?export=view&id=1A2B3C4D5E6F7G8H9I0J"
    caption: "Photo caption in English"
    captionPl: "Opis zdjęcia w języku polskim"
    width: 1200
    height: 800

  - id: 2
    src: "https://drive.google.com/uc?export=view&id=2B3C4D5E6F7G8H9I0J1K"
    caption: "Another photo"
    captionPl: "Inne zdjęcie"
    width: 1200
    height: 900
```

**Fields:**
- `id`: Unique number within the gallery (1, 2, 3, ...)
- `src`: Direct Google Drive embed URL (see below)
- `caption` / `captionPl`: Optional captions
- `width` / `height`: Optional; improves layout stability

## 4. Get Google Drive URLs

1. Upload your photo to Google Drive in the Justin Case account (`thephotographerfromkrakow@gmail.com`)
2. Right-click → **Share** → set to **Anyone with the link can view**
3. Copy the shareable link: `https://drive.google.com/file/d/FILE_ID/view`
4. Extract the `FILE_ID` and format as:
   ```
   https://drive.google.com/uc?export=view&id=FILE_ID
   ```

**Example:**
- Share link: `https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J/view`
- Direct embed: `https://drive.google.com/uc?export=view&id=1A2B3C4D5E6F7G8H9I0J`

## 5. Deploy

1. Commit the new gallery file:
   ```bash
   git add src/content/galleries/YOUR-SLUG.md
   git commit -m "add: YOUR-SLUG gallery"
   git push
   ```

2. Cloudflare Pages auto-deploys within ~30 seconds

3. Visit: `https://justincase.photo/en/work/YOUR-SLUG`

## 6. Reordering galleries

To change the display order, update the `order` field in each gallery's frontmatter and commit.

## Example: Complete gallery file

`src/content/galleries/krakow-streets.md`

```yaml
---
title: "Kraków Streets"
titlePl: "Ulice Krakowa"
description: "Street photography from Kraków old town and surrounding districts."
descriptionPl: "Fotografia uliczna ze Starego Miasta i okolicy."
order: 2
coverColor: "#08080e"
photos:
  - id: 1
    src: "https://drive.google.com/uc?export=view&id=ABC123DEF456"
    caption: "Rynek Główny at dusk"
    captionPl: "Rynek Główny o zmroku"
    width: 1200
    height: 800
  - id: 2
    src: "https://drive.google.com/uc?export=view&id=GHI789JKL012"
    caption: "Nowa Huta morning light"
    captionPl: "Światło poranku w Nowej Hucie"
    width: 1200
    height: 900
---

Street photography exploring the texture and light of Kraków.
```

## Notes

- The markdown body (after `---`) is currently not displayed but can be used for extended descriptions
- Photos display in a CSS masonry layout
- Captions are optional
- Images are served directly from Google Drive (no CDN caching)
- Make sure Drive files are set to **public sharing**
