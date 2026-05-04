$root = "D:\Dropbox\Britten Aerial Services\WEBSITE_REBUILD_ASSETS"
$folders = @(
  "01_Homepage_Hero",
  "02_Service_Images",
  "03_Portfolio_Projects",
  "04_About_Page",
  "05_Logos_Branding",
  "06_Testimonials_Social_Proof",
  "07_Video_Backgrounds",
  "08_Ad_Reel_Assets",
  "09_Squarespace_Upload_Ready"
)
foreach ($folder in $folders) {
  New-Item -ItemType Directory -Path (Join-Path $root $folder) -Force | Out-Null
}
Write-Host "Website asset folders created at $root" -ForegroundColor Green
