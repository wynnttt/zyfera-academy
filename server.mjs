import http from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {readFile} from 'node:fs/promises';
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'web');
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript'};
http.createServer(async(req,res)=>{
  try{
    const name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const file=path.resolve(root,'.'+(name==='/'?'/index.html':name));
    if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden');}
    const data=await readFile(file);
    res.writeHead(200,{'Content-Type':(types[path.extname(file)]||'application/octet-stream')+'; charset=utf-8'});
    res.end(req.method==='HEAD'?undefined:data);
  }catch{res.writeHead(404);res.end('Not found');}
}).listen(8765,'127.0.0.1',()=>console.log('Zyfera Academy: http://127.0.0.1:8765'));
