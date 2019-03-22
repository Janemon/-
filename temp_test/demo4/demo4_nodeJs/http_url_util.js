const Http = require('http')
const Url = require('url')
const Util = require('util')


let server = Http.createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write(`hello You\n`)
  res.write(`url: ${req.url}\n`)  // cause no enter url, so show the root
  res.write(`parse_url: ${Url.parse(req.url)}\n`)  // turn into object
  res.write(`inspect_url: ${Util.inspect(Url.parse(req.url))}\n`)  // using string type to show the url's obj
  res.end(`ByeBye\n`)
}).listen(8080, '127.0.0.1', ()=>{
  console.log(`The server is running, please enter http://127.0.0.1:8080/ in browser to open it.`)
})
// 1. host and port are set in "listen"
// 2. response.write and response.end both could write response's text
// 3. util.inspect just let debug become more easier
