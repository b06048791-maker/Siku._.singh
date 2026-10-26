const C='sikku-v41';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./offline-kb.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET'||new URL(req.url).origin!==location.origin)return;
  e.respondWith(fetch(req).then(r=>{
    if(r&&r.ok&&r.status===200){const c=r.clone();caches.open(C).then(x=>x.put(req,c))}
    return r;
  }).catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))));
});
