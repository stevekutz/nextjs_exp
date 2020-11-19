import React from 'react';

class MovieList extends React.Component {

    // state  = {
    //     count: 0,
    
    // }


    //  increment = () => {

        

    //     // better way
    //     this.setState( prevState => {
    //         return {count: prevState.count + 1}
    //     })

    //     // not good if React batches mutliple changes together    
    //     // const {count} = this.state;
    //     // this.setState({count: count + 1})

    //  }

    // // this is not bound as with arrow function
    // // notice how onClick is setup with anonymous function
    // decrement () {
    //     // better way
    //     this.setState( prevState => {
    //         return {count: prevState.count - 1}
    //     })
    
    //     // not good if React batches mutliple changes together 
    //     // const {count} = this.state;
    //     // this.setState({count: count - 1})


    // }   


    render () {

        {/*  destructure movie data    */}
        const {movies} = this.props
        // console.log(movies);    

        return (
            <React.Fragment>
                {/*
                <div>
                    <button onClick = {this.increment} className = "btn btn-primary m-2"> Increment Number</button>
                    <button onClick = {() => this.decrement()} className = "btn btn-primary m-2" > Decrement Number </button>
                    <h1 className = "w-25"> {this.state.count} </h1>
                </div>
                */}

                {movies.map((movie, key) => {
                
                    return (
                        <div key = {movie.id}   className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src={movie.image} alt="Movie pic" height = "150px"/></a>
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
                 })}
           
            </React.Fragment>   
        )

    }
}

export default MovieList;