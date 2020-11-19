import React from 'react';

class MovieList extends React.Component {


    renderMovies() {

        {/*  destructure movie data    */}
        const {movies} = this.props
        // console.log(movies);    

        return movies.map((movie, key) => 
                
            (
                <div key = {movie.id}   className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#">
                            <img 
                                className="card-img-top" 
                                src={movie.image} 
                                alt="Movie pic" 
                                height = "150px"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{movie.name}</a>
                            </h4>
                            <h5>{movie.releaseYear}</h5>
                            <p className="card-text">{movie.description}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Rating:{movie.rating}</small>
                        </div>
                    </div>
                </div>
            )
        )
    }

    render () {


        return (
            <React.Fragment>

                {this.renderMovies()} 

            </React.Fragment>   
        )

    }
}

export default MovieList;