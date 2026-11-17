# Sikku AI — Tools & Features List

Single-file web app (`index.html`) — Sikku AI private companion + smart tools suite, with an AI Social module and a Master Control Panel (Admin).

## 🤖 AI
- AI Chat (text) with memory, smart intent, global system-prompt override from Admin
- AI Voice Call ("Call Sikku AI")
- AI Image understanding/allow toggle
- Companion / Care mode (key-protected)
- AI Guard — safety checks & diagnostics

## 🧰 Free Smart Tools
- QR Code Generator (text, link, file)
- Password Generator
- Calculator
- Age Calculator
- BMI Calculator
- Code Generator / helper
- Encryption / Decryption tool
- Notes
- To-do list
- Focus timer
- Habit tracker
- Water intake tracker
- Vault (secure notes)
- Timer
- Wallet / coins & rewards

## 🧩 Extended Tools (AdSense-monetized set)
1. PDF Reader
2. PDF Converter
3. Social Media Video Downloader
4. Image Background Remover
5. Plagiarism Checker
6. YouTube Thumbnail Downloader
7. Text-to-Speech Converter
8. Hashtag Generator
9. Domain Availability Checker
10. JSON to XML Converter
11. Currency Converter
12. String Length Calculator
13. Lorem Ipsum Generator

Each of these can be switched Free / Prime / Coin-gated, or turned off entirely, from **Admin → 🎚️ Tool Access**.

## 📱 Sikku Social (Instagram-style module)
- Feed: posts, like, comment, share, flag/report
- Reels: vertical full-screen video feed
- Stories/Status (24h expiry)
- One-to-one Chats
- Instagram-style Profile: DP, @handle, bio, external link, stats, 3-column post grid
- Social Settings: Edit Profile, Account Privacy, Notifications, Security & Support

## 👑 Membership & Economy
- Prime membership (request/approve flow)
- Coins & daily rewards, missions
- Referral/share system

## 🛠️ Admin — Master Control Panel
- 🖼️ Photos (AI/user photos, names)
- 📲 App & Icon (download link, app icon/name)
- 🎛️ App Control (feature on/off switches, coins, announcements, maintenance mode)
- 🎚️ Tool Access (Free/Prime/Coin per tool, incl. the 13 extended tools)
- 🎁 Rewards (daily rewards, missions)
- ⚙️ Config (feature flags)
- 🤖 AI Control (system prompt, image/voice permissions)
- 🎙️ Voice & Core
- 💞 Companion Key
- 🛡️ AI Guard (safety/diagnostics)
- 👥 Users (search, grant/revoke Prime, ban/unban)
- 💬 Chats (live support chat with users)
- 🕵️ User Activity / Device Tracker (per-device history, not per-person surveillance)
- 📊 Overview, 📈 Analytics (visits, DAU, feature usage, top users)
- 🌐 **Visitors & Health** *(this update)*
  - Device/OS/Browser/Screen breakdown, visit counts, session length
  - **Traffic Source & Location**: referrer, campaign/UTM channel classification, approximate country/city (IP-based, no GPS prompt)
  - Auto Health & Fix: periodic self-check of the site (network, storage, Firebase, speech, images, stuck AI, etc.) with one-tap "Check & Fix"
  - CSV export of visitor/device data
  - Weekly Drops scheduler (home-screen announcement cards)
- 🔒 **Security — Block List** *(this update)*: block a country code or a specific device ID; checked on each visit (app-level soft block — real network/IP-level blocking needs host/CDN-level firewalling, e.g. Cloudflare)
- 🛠️ Problems / 📋 Logs / ⚠️ Danger (reset/delete)

## 🔐 Privacy & Compliance *(this update)*
- Consent banner (opt in/out) before any analytics is recorded, with a one-tap "turn off" always available from the home screen
- In-app Privacy Policy explaining exactly what is and is not collected
- What's collected (only after consent): device model/OS/browser, screen size, language, time spent, which page/site sent the visitor (referrer/UTM), approximate country/city from IP
- What's never collected: phone number, exact GPS, clipboard/typed content, mouse/keystroke tracking, fingerprint-based covert identifiers

## ⬇️ Install
- "Install as app" / PWA prompt from the Home tab
- manifest.webmanifest + service worker

## 📄 Setup notes for GitHub
- Firebase Realtime Database powers login, chat, prime/coins sync, analytics and the block list — update `FIREBASE_DB_URL` in `index.html` if you fork this to a new Firebase project, and make sure your Firebase Rules allow read/write on `analytics/*`, `config/*`, `users/*`, `support/*`.
- Google AdSense client id is already wired in `<head>` — replace `ca-pub-8641821521954282` with your own if this isn't your account.
- Country-level geolocation uses the free `ipapi.co` endpoint (no key required, rate-limited) — swap it for a paid provider if you expect high traffic.
