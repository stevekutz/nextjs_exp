// const { createServer } = require('http')
// const { parse } = require('url')
const next = require('next')  // import next framework
const express = require('express');   // import express framework

const dev = process.env.NODE_ENV !== 'production'  // set env to dev
const app = next({ dev })   // set app top be in dev environment
const handle = app.getRequestHandler()   // set handler to serve pages
const bodyParser = require('body-parser')  

app.prepare().then(() => {       // prepares application to run

  const server = express();      // set up express server
    

  // use middleware
  server.use(bodyParser.json())  

  // create some pracice custom endpoints
  server.get('/api/v1/movies', (req, res) => {
    res.json({message: 'Hello World'})
  })  

  server.post('/api/v1/movies', (req, res) => {
    const movie = req.body
    console.log(JSON.stringify(movie))
    // res.json({message: 'Saving Post'})
    return res.json({...movie, created: 'now', author: 'me', rating: 'good'})
  }) 

    server.patch('/api/v1/movies', (req, res) => {
    const {id} = req.params
    res.json({message: `updating post with id: ${id}`})
  }) 

  server.delete('/api/v1/movies', (req, res) => {
    const {id} = req.params
    res.json({message: `Deleting post with id: ${id}`})
  }) 








   server.get('/faq', (req, res) => 
    res.send(`
        <html><head></head><body><h3> Something from the faq </h3></body></html>
    
    `)
   )

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