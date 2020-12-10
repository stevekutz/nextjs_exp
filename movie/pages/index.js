import React, {useState, useEffect} from 'react'
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';


// JSON data represents API response
import {getMovies, getCategories} from '../actions/movie_data';


const Home = (props) => {

    const {categories, movies, message, images} = props;

    
    console.log('index.js Home >> ', props)

    return (
        <div>

            
            <div className = "home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SideMenu
                                categories = {categories}
                            />
                        </div>
                        <div className="col-lg-9">
                            <Carousel images = {images}/>
                            <div className="row justify-content-center">
                                {/* 
                                {(errorMessage.length) 
                                    ?
                                        <h1 className = "alert alert-warning rounded-pill"> {errorMessage}</h1>
                                    :
                                        <MovieList 
                                            movies = {movies}        
                                        />
                                }
                                */}

                                                                
                                <MovieList 
                                    movies = {movies || []}        
                                />


                            </div>
                        </div>
                    </div>
                </div>
                <h3>{message}</h3>



            </div>

        </div>
    
    
    
    )
    
    
    


    
}

// newer way instead of using getInitialProps
// including context obj parameter provides useful info

export async function getStaticProps(context) {
    const movies = await getMovies();
    const categories = await getCategories();
    const message = 'Data Not Returned from Promise';

    console.log(' getStaticProps in pages/index.js')

    const images = movies.map( (movie) => {
        return {
            id: `image-${movie.id}`,
            // url: movie.image,
            url: movie.cover,
            name:  movie.name,
        }
    })

    if (movies === null) {
        return {
            notFound: true,
        }
    
    }


    return {
        props: {
            movies,
            message,
            images,
            categories,
        },
    }
}


// legacy way to do this
// Home.getInitialProps = async () => {
//     const movies = await getMovies();
//     const categories = await getCategories();
//     const message = 'Static props passed in again';

//     const images = movies.map( (movie) => {
//         return {
//             id: `image-${movie.id}`,
//             url: movie.image,
//             // url: movie.cover,
//             // name:  movie.name,
//         }
//     })


//     return {
//         movies,
//         images,
//         categories, 
//         message,
//     }

// }

export default Home