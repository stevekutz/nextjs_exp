// const { createServer } = require('http')
// const { parse } = require('url')
const next = require('next')  // import next framework
const express = require('express');   // import express framework

const dev = process.env.NODE_ENV !== 'production'  // set env to dev
const app = next({ dev })   // set app top be in dev environment
const handle = app.getRequestHandler()   // set handler to serve pages
  

app.prepare().then(() => {       // prepares application to run

  const server = express();      // set up express server
  server.get('*', (req, res) => {    // handle ALL requests to server
//     next.js handles requests in pages folder for what pages to serve in browser
    return handle(req, res)       // next.js handles requests in pages folder for what pages to serve in browser
   }) 

  const PORT = process.env.PORT || 3000;   // see if PORT set up env variables, else use 3000

    // use server middleware to serve pages
  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})