import React from 'react';
import {useRouter} from 'next/router';
import {getMovieById} from '../../actions/movie_data';

const Movie = (props) => {

    const router = useRouter();
    const {id} = router.query
    const {name, description, longDesc, genre} = props.movie

    console.log('===> Movie props ', props)

    return  (
        <div className = "container">
            <div className="jumbotron">
                <h1 className="display-4">{name}</h1>
                <p className="lead">{description}</p>
                <hr className="my-4"/>
                <p>{genre}</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
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

Movie.getInitialProps = async ({query}) => {
    // const {id} = context.query.id
    const movie = await getMovieById(query.id)
    return {movie}
}



// export async function getStaticPaths(context) {
//     const {id} = context.query.id
//     const movie = await getMovieById(id)

//     return {
//         props: {
//             movie,
//         },
//     }
// }