const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.json':'application/json; charset=utf-8','.csv':'text/csv; charset=utf-8','.js':'text/javascript; charset=utf-8'};
http.createServer((req,res)=>{
  const pathname = req.url === '/' ? '/enterprise-permission-prototype-v3.html' : decodeURIComponent(req.url.split('?')[0]);
  const target = path.normalize(path.join(root, pathname));
  if (!target.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(target,(error,data)=>{ if(error){res.writeHead(404);return res.end('Not found');}res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream'});res.end(data); });
}).listen(8080,()=>console.log('Prototype: http://localhost:8080'));
