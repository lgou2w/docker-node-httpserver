const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>docker-node-httpserver</title>
    </head>
    <body>
      <h1>docker-node-httpserver</h1>
      <p>Links:</p>
      <ul>
        <li><a href="https://github.com/lgou2w/docker-node-httpserver" target="_blank">GitHub</a></li>
        <li><a href="https://hub.docker.com/repository/docker/lgou2w/docker-node-httpserver" target="_blank">Docker</a></li>
      </ul>
    </body>
    </html>
  `)
})

app.listen(8080)
console.info('Server listening on http://0.0.0.0:8080')
