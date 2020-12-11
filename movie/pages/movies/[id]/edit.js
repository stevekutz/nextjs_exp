import React from 'react'
import MovieCreateForm from '../../../components/MovieCreateForm';
import {getMovieById} from '../../../actions/movie_data'

class EditMovie extends React.Component {


    render() {
    
    
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

// const movie = await getMovieById(context.query.id)

    return {
        props: {
            movie,
        },


    }
}
