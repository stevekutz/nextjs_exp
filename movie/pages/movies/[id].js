import React from 'react';
import {useRouter} from 'next/router';
import {getMovieById, deleteMovie} from '../../actions/movie_data';

const Movie = (props) => {

    const router = useRouter();
    const {id} = router.query
    const {name, description, longDesc, genre} = props.movie

    console.log('===> Movie props ', props)

    const handleDeleteMovie = (id) => {
        deleteMovie(id)
            .then( () => {
                router.push('/')
            })
    
    }


    return  (
        <div className = "container">
            <div className="jumbotron">
                <h1 className="display-4">{name}</h1>
                <p className="lead">{description}</p>
                <hr className="my-4"/>
                <p>{genre}</p>
                <a className="btn btn-primary btn-lg mr-1" href="#" role="button">Learn More</a>
                <button 
                    className="btn btn-danger btn-lg" 
                    onClick = {() => handleDeleteMovie(id)}
                    role="button">Delete
                </button>
            </div>        
            <p className = "desc-text">
                {longDesc}
            </p>
            <style jsx>{`
                .desc-text {
                    font-size: 12px;
                }
            
            `}
            </style>

        </div>
    
    )
}

export default Movie;

// Movie.getInitialProps = async ({query}) => {
//     // const {id} = context.query.id
//     const movie = await getMovieById(query.id)
//     return {movie}
// }



export async function getServerSideProps(context) {
    const {id} = context.query
    const movie = await getMovieById(id)
    
    // const movie = await getMovieById(context.query.id)
    
    return {
        props: {
            movie,
        },


    }
}