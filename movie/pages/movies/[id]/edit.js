import React from 'react'
import MovieCreateForm from '../../../components/MovieCreateForm';
import {getMovieById, getCategories} from '../../../actions/movie_data'

class EditMovie extends React.Component {


    render() {
    
    console.log(' EditMovie props ', this.props)
    
        return(
            <div className = 'container'>
                <h1> Edit the Movie</h1>
                {JSON.stringify(this.props.movie)}
                <MovieCreateForm />
            
            </div>
        )
    
    }


}


export default EditMovie;

export async function getServerSideProps(context) {
    const {id} = context.query
    const movie = await getMovieById(id)
    const categories = await getCategories();

// const movie = await getMovieById(context.query.id)

    return {
        props: {
            movie,
            categories
        },


    }
}

// // need getStatic Paths with this
// export async function getStaticProps(context) {
//     const movies = await getMovies();
//     const categories = await getCategories();
//     const message = 'Data Not Returned from Promise';

//     console.log(' getStaticProps in pages/index.js')

//     const images = movies.map( (movie) => {
//         return {
//             id: `image-${movie.id}`,
//             // url: movie.image,
//             url: movie.cover,
//             name:  movie.name,
//         }
//     })

//     // if (movies === null) {
//     //     return {
//     //         notFound: true,
//     //     }
    
//     // }


//     return {
//         props: {
//             movies,
//             message,
//             images,
//             categories,
//         },
//     }
// }