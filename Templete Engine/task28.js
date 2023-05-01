const port = 3000
const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

const server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' })

    const jsonData = JSON.parse(fs.readFileSync('./users.json', 'utf-8'))

    const data = ejs.render(fs.readFileSync('./index.ejs', 'utf-8'), {
      mydata: jsonData.mydata
    })

    res.end(data)
  }
})

server.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
})
