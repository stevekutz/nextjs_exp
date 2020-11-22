import React, {useState, useEffect} from 'react'
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';


// JSON data represents API response
import {getMovies} from '../actions/movie_data';


const Home = (props) => {

    const {movies, message} = props;

    
    // console.log(props)

    return (
        <div>

            
            <div className = "home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SideMenu
                                appName = {"Movie DB"} 
                                // count = {count}
                            />
                        </div>
                        <div className="col-lg-9">
                            <Carousel />
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
                                    movies = {props.movies || []}        
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
    const message = 'Data Not Returned from Promise';

    if (movies === null) {
        return {
            notFound: true,
        }
    
    }


    return {
        props: {
            movies,
            message,
        },
    }
}


// legacy way to do this
// Home.getInitialProps = async () => {
//     const movies = await getMovies();
//     const message = 'Static props passed in again';

//     return {
//         movies
//     }

// }

export default Home