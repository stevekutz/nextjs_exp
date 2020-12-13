// const { createServer } = require('http')
// const { parse } = require('url')
const next = require('next')  // import next framework
const express = require('express');   // import express framework

const dev = process.env.NODE_ENV !== 'production'  // set env to dev
const app = next({ dev })   // set app to be in dev environment
const handle = app.getRequestHandler()   // set handler to serve pages from pages folder
const bodyParser = require('body-parser')  

const fs = require('fs')
const path = require('path')
const filePath = './data.json'

const moviesData  = require(filePath)

// set up express server
app.prepare().then(() => {       // prepares application to run

  const server = express();      // set up express server

  // // manage requests coming from the server
  // server.get('*', (req, res) => {
  //   return handle(req, res)
  // })



  // use middleware
  server.use(bodyParser.json())  

  // create some pracice custom endpoints
  server.get('/api/v1/movies', (req, res) => {
    return res.json(moviesData)
  })  

  // define endpoints
  server.get('/api/v1/movies/:id', (req, res) => {
    const {id} = req.params
    
    // const movieIndex  = moviesData.findIndex( (movie) => {
    //   return  movie.id === id
    // })
    // const movie = moviesData[movieIndex]
    
    const movie = moviesData.find(movieIndex => movieIndex.id === id)

    return res.json(movie)

    // res.json({message: `updating post with id: ${id}`})
  }) 

  server.post('/api/v1/movies', (req, res) => {
    
    // need to add id
    const movie = req.body
    
    moviesData.push(movie)
    
    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if(err) {
        return res.status(422).send(err)
      }

      return res.json('Movie has been successfully added!')
    })

    // console.log(JSON.stringify(movie))
    // res.json({message: 'Saving Post'})
    // return res.json({...movie, created: 'now', author: 'me', rating: 'good'})
  }) 


  server.delete('/api/v1/movies/:id', (req, res) => {
    const {id} = req.params
    const movieIndex = moviesData.findIndex(movieIndex => movieIndex.id === id)

    moviesData.splice(movieIndex, 1)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)


    // Adding timeout here resolve ERR_HTTP_HEADER_SENT error
    // similar issue ? [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client #19004
    // setTimeout( () => { 
    //   console.log('TIMEOUT in DELETE')
    // }, 1000)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if(err) {
        return res.status(422).send(err)
      }

      return res.json('Movie has been DELETED!')
    })
    
    // res.json({message: `Deleting post with id: ${id}`})
  }) 

  server.patch('/api/v1/movies/:id', (req, res) => {
    const {id} = req.params
    const movie = req.body
    const movieIndex = moviesData.findIndex(m => m.id === id)

    moviesData[movieIndex] = movie

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)


    // Adding timeout here resolve ERR_HTTP_HEADER_SENT error
    // similar issue ? [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client #19004
    // setTimeout( () => { 
    //   console.log('TIMEOUT in DELETE')
    // }, 1000)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if(err) {
        return res.status(422).send(err)
      }

      return res.json(movie)
    })
    
    // res.json({message: `Deleting post with id: ${id}`})
  }) 





  // generic test endpoint
  server.get('/faq', (req, res) => 
    res.send(`
        <html><head></head><body><h3> Something from the faq </h3></body></html>
    
    `)
  )
  // using  *  grabs all endpoints

  // server.get('*', (req, res) => {    // handle ALL requests to server
  //   //     next.js handles requests in pages folder for what pages to serve in browser
  //   return handle(req, res)       // next.js handles requests in pages folder for what pages to serve in browser
  //  }) 

     



  const PORT = process.env.PORT || 3000;   // see if PORT set up env variables, else use 3000

    // use server middleware to serve pages
  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})