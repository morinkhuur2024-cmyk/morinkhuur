// Энгийн service worker: аппыг суулгах боломжтой болгоно. Өгөгдөл кэшлэхгүй (бүх зүйл шууд серверээс).
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){});
