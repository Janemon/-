const Http = require('http')
const Url = require('url')
const Fs = require('fs')


let server = Http.createServer((req, res)=>{
  let pathname = Url.parse(req.url).pathname.substring(1)
  Fs.readFile(pathname, (err, data)=>{
    if(err){
      res.writeHead(404, {"Content-Type": "text/html"})
    }else{
      res.writeHead(200, {"Content-Type": "text/html"})
      res.write(data.toString())
    }
    res.end()
  })
}).listen(8080, '127.0.0.1', ()=>{
  console.log(`Click http://127.0.0.1:8080/index.html`)
})
