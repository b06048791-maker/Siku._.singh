# Sikku AI — Phase 1 Update Notes

Ye file GitHub repo ke saath rakhne ke liye hai — isme is update mein kya naya aaya, Firebase mein kya naya data save hota hai, aur kaise test/setup karna hai, sab likha hai. **Koi purana feature delete nahi kiya gaya — sab kuch existing code ke upar add kiya gaya hai.**

## 1. Is update mein kya naya hai

| Feature | Kahan milega |
|---|---|
| Cookie Consent Banner (Accept / Only Essential) | Site load hote hi bottom par (pehli visit par) |
| Privacy Policy (admin-editable) | Consent banner ke link se, ya Admin → 📜 Privacy |
| Real Visitor Telemetry + CSV export | Admin → 📈 Analytics (niche "Visitor Telemetry" card) |
| IP / Country Blocking | Admin → 🛡️ Security |
| Leads / Enquiry Form (floating button) | Site par bottom-right 📝 button; data Admin → 📝 Leads |
| WhatsApp floating contact button | Site par bottom-right 💬 button (number admin set karega) |
| Personal Message to a specific Device | Admin → 👥 Users & Support → Device Tracker ke neeche "✨ Personal Message bhejein" |
| Accent Color — Gold add kiya | Wallet tab → ⚙️ Aur settings → 🎨 Theme & UI (pehle se maujood cyan/pink/green/orange/purple ke saath) |
| Text Size (Small/Normal/Large) | Wallet tab → ⚙️ Aur settings → 🎨 Theme & UI |

Dark/Light/Amoled mode, Animation on/off, aur 5 purane accent colors — ye sab **pehle se hi** bane hue the, maine inhe dobara nahi banaya, sirf Gold color aur Text Size add kiya hai usi jagah.

## 1b. Control Panel — Navigation + Look (follow-up request se)

- **Persistent Quick-Nav Rail:** admin panel ke andar top par ab ek hamesha-dikhne-wali horizontal strip hai (saare 25 sections ke icons) — kisi bhi section ke andar rehte hue bhi ek tap mein kisi doosre section mein jump kar sakte ho, wapas menu par jaane ki zaroorat nahi.
- **Hacker-terminal look:** poore control panel par glowing scanline background, pulsing neon borders, aur monospace "> " terminal-style headings laga diye gaye hain (sirf admin panel ke andar — baaki app waisi hi hai).
- **Full Info lookup:** Device Tracker mein Device ID daal kar "🔎 Is Device ki Full Info" dabane par ID, location, network, screen aur behavior — sab ek hi jagah (ek box mein) dikh jaata hai.

## 2. Tracking mein jaan-bujh kar KYA SHAAMIL NAHI kiya gaya, aur kyun

Original request mein kuch cheezein aisi thi jinka kaam hi ye hota hai ki wo kisi user ki privacy choice (incognito, VPN, cookies clear karna) ko defeat kar dein. Inhe implement nahi kiya:

- Canvas/AudioContext fingerprinting se ek "permanent" device ID (jo incognito/VPN/cookie-clear ke baad bhi wahi rahe)
- Incognito / Private browsing detect karna
- Ad-blocker detect karna
- Installed fonts/plugins ki poori list
- Site par copy kiya gaya text padhna (clipboard content)
- VPN/proxy ke peeche se asli IP nikalna (WebRTC local-IP leak)
- Device motion sensors (gyroscope/accelerometer) — koi functional use nahi hai isme

Baaki sab (device/browser/screen/network/IP-location/traffic-source/behavior analytics) normal, standard analytics hai jo har website use karti hai, aur poora implement kiya gaya hai.

**VPN/Proxy detection:** free/client-side tareeke se reliable VPN detection possible nahi hai. Admin → Security mein ek optional field hai jahan IPQualityScore ya ipapi.co jaisi kisi paid fraud-detection service ki API key daal sakte ho — tab visitors "flagged" dikhenge. Key ke bina ye feature simply off rehta hai.

## 3. Firebase Realtime Database mein naye nodes

Sab `siku-singh` project ke under, koi naya Firebase project/setup nahi chahiye:

```
global/
  consent_on, privacy_text, blocklist {ip:[], country:[]},
  leads_on, wa_on, wa_number, vpn_key
telemetry/<deviceId>       → device/browser/screen/network/geo/behavior data
consent_log/<deviceId_ts>  → {choice: "accepted"|"essential", time}
leads/<id>                 → {name, phone, email, msg, time, dev}
creator_msg/<deviceId>     → {msg, time, seen, seenTime, clicked, clickedTime}
blocked_attempts/<id>      → {ip, country, reason, time}
```

`telemetry/` jaan-bujh kar DEVTRK ke `devices/` node se alag rakha gaya hai, taaki purana Device Tracker bilkul waisa hi chalta rahe jaisa pehle chalta tha — kuch overlap hoga (jaise screen size dono jagah), par ye safer hai.

## 4. Setup / Test karne ke steps

1. **Consent banner test karein:** site ko incognito/naye browser mein kholein, bottom par banner dikhega. Accept karne par hi behavior-analytics (scroll/click/geo) collect hona shuru hoga.
2. **IP Geolocation:** `ipapi.co` free public API use ho rahi hai (~1000 requests/day free, bina key ke). Zyada traffic hone par koi paid IP-geolocation service lagegi — Admin → Security card mein VPN key field use karke extend kiya ja sakta hai.
3. **WhatsApp button:** Admin → 📝 Leads → apna number `91XXXXXXXXXX` format mein daalein aur toggle ON karein.
4. **Personal Message:** Admin → Device Tracker mein kisi device ka ID copy karein → neeche paste karke message likhein → Bhejein. Us device par agli baar home screen khulte hi glass card dikhega.
5. **Security Blocking:** apna khud ka country/IP kabhi mat block karna. Agar galti se ho bhi jaaye, master key se admin panel unlock karte hi is device ke liye blocking apne aap hat jaati hai (safety built-in hai).

## 5. GitHub par upload

Sirf `index.html` (aur ye `README.md`) upload karein — sab kuch ek hi file mein hai jaisa chaha gaya tha. GitHub Pages already is URL par live hai: `https://b06048791-maker.github.io/Siku._.singh/`.

## 6. Phase 2 (agli baari banega)

- Poore app (home, AI chat, social feed/reels, call screens) ka #080B14 glassmorphism visual overhaul, slide-fade transitions, spring-bounce button press
- Desktop: left glass sidebar + 3-column widescreen dashboard (abhi mobile-style single column hi hai)
- Shimmer skeleton loaders ko sab loading-spots par lagana (CSS class `.sk-shimmer` already is update mein add ho chuki hai, use sirf aur jagah apply karna hai)
- Creator-message deeper analytics (seconds-read tracking)
- Dwell-time-per-section aur "most-liked feature" summary
