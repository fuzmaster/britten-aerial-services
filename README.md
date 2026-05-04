# Britten Aerial Services Website Starter

A clean Next.js starter website for rebuilding Britten Aerial Services as a professional real estate media, drone photography, inspection, and marketing video website.

## Run locally

```powershell
cd "C:\Sites\bas-website-starter"
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content locations

Most copy and repeated data lives in:

```txt
lib/site-data.ts
```

Primary app routes live in:

```txt
app/
```

Reusable UI components live in:

```txt
components/
```

## Images

Place selected website-ready images in:

```txt
public/assets/
```

Current image folders include:

```txt
public/assets/homepage
public/assets/services
public/assets/portfolio
public/assets/contact
public/assets/faq
public/assets/prints
```

## Showreel video

The homepage and portfolio showreel use:

```txt
public/assets/videos/bas-showreel-2024.mp4
```

To replace the showreel, overwrite that file with a new MP4 and keep the same filename, or update the path in:

```txt
lib/site-data.ts
```

Suggested copy command:

```powershell
Copy-Item -Path "D:\Dropbox\Britten Aerial Services\Projects\Showreel\BAS Showreel 2024.mp4" -Destination "C:\Sites\bas-website-starter\public\assets\videos\bas-showreel-2024.mp4" -Force
```

Large MP4 files can hurt page speed. Before deployment, export a web version around 1080p H.264 with a reasonable bitrate and keep the file size as low as possible.

Suggested production asset folder:

```txt
D:\Dropbox\Britten Aerial Services\WEBSITE_REBUILD_ASSETS\09_Squarespace_Upload_Ready
```
