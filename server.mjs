import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
http.createServer((req,res)=>{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=path.join(root,pathname==='/'?'index.html':pathname);if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404).end('Not found');return}if(pathname==='/public/sw.js')res.setHeader('Service-Worker-Allowed','/');res.setHeader('Content-Type',({'html':'text/html','js':'text/javascript','css':'text/css','json':'application/json','svg':'image/svg+xml','webmanifest':'application/manifest+json'})[file.split('.').pop()]||'text/plain');res.end(data)})}).listen(process.env.PORT||5173,'127.0.0.1',()=>console.log('Rise to Stardom · http://localhost:5173'));
