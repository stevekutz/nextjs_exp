import React from 'react';
import Link from 'next/link';


class MovieList extends React.Component {

    shortenText = (text, maxLength) => {
        if(text && text.length >= maxLength) {
            return text.substr(0, maxLength) + '...';
        }
    
    }


    renderMovies() {

        {/*  destructure movie data    */}
        const {movies} = this.props
        // console.log(movies);    

        return movies.map((movie) => 
                
            (
                <div key = {movie.id}   className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        {/* <Link href={`/movies/${movie.id}`}> */}
                        {/* <Link href = {'/movies/' + movie.id}> */}
                        <Link href = "/movies/[id]" as = {`/movies/${movie.id}`}>
                            <a >
                                <img 
                                    className="card-img-top" 
                                    src={movie.image} 
                                    alt="Movie pic" 
                                    height = "150px"/>
                            </a>
                        
                        </Link>
                        <div className="card-body">
                            <h4 className="card-title">
                                {/* <Link href={`/movies/${movie.id}`}> */}
                                <Link href = "/movies/[id]" as = {`/movies/${movie.id}`}>
                                    <a >{movie.name}</a>
                                </Link>    
                            
                            </h4>
                            <h5>{movie.releaseYear}</h5>
                            <p className="card-text">{this.shortenText(movie.description, 100)}</p>
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