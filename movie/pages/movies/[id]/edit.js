import React from 'react'
import MovieCreateForm from '../../../components/MovieCreateForm';
import {getMovieById, getCategories, updateMovie} from '../../../actions/movie_data'
import Router from 'next/router'

class EditMovie extends React.Component {

    // static async getInitialProps({query}) {
    //     const movie = await getMovieById(query.id)
    //     const categories = await getCategories();

    //     return { movie, categories }
    // }

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((updatedMovie) => {
        // router.push('/')
        // Router.push(`/movies/${movie.id}`)
        Router.push('/movies/[id', `/movies/${movie.id}`)
        })
    }



    render() {
    
        console.log(' EditMovie props ', this.props)
        

        return(
            <div className = 'container'>
                <h1> Edit the Movie</h1>
                
                {/* {JSON.stringify(this.props.categories)} */}
                <MovieCreateForm 
                    categories = {this.props.categories}  
                    movie = {this.props.movie}
                    submitButton = "Update"
                    handleFormSubmit = {this.handleUpdateMovie}    
                />
            
            </div>
        )
    
    }


}


export default EditMovie;

export async function getServerSideProps(context) {
    const categories = await getCategories();

    const movie = await getMovieById(context.query.id)

    return {
        props: {
            categories, 
            movie
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