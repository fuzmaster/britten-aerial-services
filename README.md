# Britten Aerial Services

This is a reconstruction of the old Britten Aerial Services website I had. The original site was built on Squarespace and has since been taken down. This version is rebuilt from scratch using Next.js, Tailwind CSS, and real brand assets — same business, cleaner codebase, fully owned.

Britten Aerial Services is an FAA-licensed drone photography and real estate media company based in Peabody, MA, serving the North Shore and surrounding Massachusetts communities.

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

## Launch checklist

- Verify all image files exist
- Compress showreel MP4
- Replace About fallback image with real operator portrait
- Connect Formspree or backend contact form
- Add real testimonials
- Test mobile
- Run `npm run build`
- Deploy to Vercel
- Add Google Search Console
- Add analytics
- Submit sitemap if added later

Suggested production asset folder:

```txt
D:\Dropbox\Britten Aerial Services\WEBSITE_REBUILD_ASSETS\09_Squarespace_Upload_Ready
```
