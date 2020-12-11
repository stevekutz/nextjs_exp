### Setup

1) From target project folder, run either:

    ~~~ bash
    yarn create next-app movie
    ~~~

    or

    ~~~ bash
    npx create-next-app
    ~~~


   - the following file setup will be  created

        <img src = "orig_setup.png" width = "25%" >


2) Launch the default  `Next.js` app using  either:
   
   ~~~ bash
   npm run dev
   ~~~

    or 

    ~~~ bash
    yarn dev
    ~~~


    - the default app will launch in `localhost:3000`

        <img src = 'default_app.png' width = '50%'/>



3) Styling in `Next.js` can be applied in a variety of ways:
   - Global stylesheets (require importing the CSS file from within `pages/_app.js`)
   - Importing styles from `node_modules`
   - CSS modules
   - `styled jsx`

4) Pages created in the `pages` folder can be accessed as a route (e.g. /pages/about)

5) After creating -apps.js, Functional Components as well as props called in from `getStaticProps` can be inserted

   - the pageProps obj passed in :
   <img src = "pageProps__app.png"  width =  "50%" alt = "pageProps obj" />


   ~~~ js
   class MovieApp extends App {

      render() {

         console.log(">>> props", this.props)

         // Component holds page delivered in route
         const {Component, pageProps} = this.props;
         
         return (
            <div>
               <Head>
                  <title>Home</title>
                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                  </Head>

                  <Navbar />
               <div className = "base-page">
                  <Component {...pageProps}/>
               </div>	
               
               <Footer />
               {/* example of using styled-jsx */}        
                  <style jsx> {`
                     .base-page {
                           padding-top: 80px;
                     }
                  `}</style> 
            
            </div>
         )
      }

   }
   ~~~

6) `Next.js` supports `dynamic routing`. This is allows a single file that can be used to render multiple movie detail pages based on the `id` of the movie using square brackets (e.g.  [id].js ).   







##### Setting up Server

1) Install express   `yarn add express`   or `npm install --save express`

2) Create /server/index.js

   ~~~ js
   const { createServer } = require('http')
   const { parse } = require('url')
   const next = require('next')
   const express = require('express');

   const dev = process.env.NODE_ENV !== 'production'
   const app = next({ dev })
   const handle = app.getRequestHandler()

   app.prepare().then(() => {

   const server = express();
   server.get('*', (req, res) => {
      return handle(req, res)
   })

   const PORT = process.env.PORT || 3000;

   server.use(handle).listen(PORT, (err) => {
      if (err) throw err
      console.log('> Ready on port ' + PORT)
   })
   })

   ~~~

3) Install nodemon to allow server restart after modifying files
   ~~~ json
   "scripts": {
      "dev": "nodemon server/index",

   ~~~

4) Create some test endpoints and verify in Postman

   ~~~ js
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

   ~~~


   <img src = "Postman_1.png "  width = "30%"  alt = "postman-1">

5) Create /server/data.json :

   ~~~ json
   [
   {
      "id": "1",
      "name": "The Shawshank Redemption",
      "releaseYear": 1994,
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "longDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque non nobis, impedit veritatis quia, consectetur velit ea error ducimus totam ipsam, nisi dolorem voluptatum ut perspiciatis ex quidem nesciunt assumenda.",
      "rating": 4.8,
      "genre": "drama",
      "cover": "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      "image" : "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg"
   },
   {
      "id": "2",
      "name": "The Dark Knight",
      "releaseYear": 2008,
      "description": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "longDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad itaque excepturi dignissimos laudantium obcaecati quam blanditiis earum veniam, dicta, velit, quo tenetur dolore ducimus repellat neque, architecto magni in cum.",
      "rating": 4.7,
      "genre": "action, crime, drama",
      "cover": "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      "image": "https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600"
   },
   {
      "id": "3",
      "name": "Lord of the Rings",
      "releaseYear": 2004,
      "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      "longDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, beatae aliquid excepturi! Distinctio temporibus modi eos in facere eum, eligendi incidunt? Eligendi, ea, explicabo. Repellat laboriosam suscipit natus totam dolores?",
      "rating": 4.9,
      "genre": "adventure, drama, fantasy",
      "cover": "https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80",
      "image": "https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600"
   }
   ]
   ~~~

6) Modify server/index.js   

   ~~~ js
   const moviesData  = require('./data.json')

   ...

   server.get('/api/v1/movies', (req, res) => {
   return res.json(moviesData)
   })

   ~~~

7) Add axios  `yarn add axios` and import into `actions/movie-data`

....


movies/[id].js used for dynamic routes

Within movies, create movies/[id]/index.js to create a dynamic editing page for a specific movie from an id

moved contents of original [id].js to movies/[id]/index.js