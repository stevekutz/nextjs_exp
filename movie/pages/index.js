import React, {useState, useEffect} from 'react'
import Head from 'next/head'   // example of importing from node_modules
import Navbar from '../components/navbar';
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';
import Footer from '../components/footer';

// JSON data represents API response
import {getMovies} from '../actions/movie_data';


// const Home = () => {

//     // initialize state to empty array and then update from Promise
//     const [movies, setMovies] = useState([]);
//     const [count, setCount] = useState(0);



//     // simulate API call from movie_data Promise
//     useEffect ( () => {
//         console.log('UseEffect called')
        
//         // method 1 to handle simulated async call
//         // getMovies()
//         //     .then( (movies) => {
//         //         setMovies(movies)    
//         // })

//         // method 2 to handle simulated async call
//         //      add async before calling a function withinin useEffect
//         const asyncFetch = async () => {
//             const fetchMovies = await getMovies()
//             setMovies(fetchMovies)
//         }
//         asyncFetch();
    
//     }, [count])


//     return (
//         <div>
//             <Head>
//                 <title>Home</title>
//                 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
//                 <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
//                 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
//                 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
//             </Head>

//             <Navbar />

//             <div className = "home-page">
//                 <div className="container">
//                     {/*
//                     <button onClick = {increment} className = "btn btn-info m-2"> Increment Number</button>
//                     <button onClick = {decrement} className = "btn btn-info m-2" > Decrement Number </button>
//                     */}    

//                     <button onClick = {() => setCount(count + 1)}> Update count {count}</button>
//                     <div className="row">
//                         <div className="col-lg-3">
//                             <SideMenu
//                                 appName = {"Movie DB"} 
//                                 // count = {count}
//                             />
//                         </div>
//                         <div className="col-lg-9">
//                             <Carousel />
//                             <div className="row">
//                                 <MovieList 
//                                     movies = {movies}        
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <Footer />



//                 {/* example of using styled-jsx */}        
//                 <style jsx> {`
//                     .home-page {
//                         padding-top: 80px;
//                     }
//                 `}</style>        


//             </div>

//         </div>
    
    
    
//     )
    
// }

class Home extends React.Component {
    // // legacy way with constuctor
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         movies: [],
    //         count: 0,
    //         errorMessage: 'Data not available',
    //     }
    
    // }
    
    // modern way without constuctor
    state = {
        movies: [],
        count: 0,
        errorMessage: '',
    }

    // like useEffect
    async componentDidMount () {
        await getMovies()
            .then( (movies) => 
                {
                    // like useState
                    this.setState({movies}) // same as ({movies: movies})
                }            
            )
            .catch( (error) => {
                console.log('ERRROR')
                alert(error)
                this.setState({errorMessage: error})
            })
    }



    render() {
        // desctructure movies
        const {movies, errorMessage} = this.state

        return (
            <div>
                <Head>
                    <title>Home</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </Head>

                <Navbar />

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
                                    
                                    {(errorMessage.length) 
                                        ?
                                            <h1 className = "alert alert-warning rounded-pill"> {errorMessage}</h1>
                                        :
                                            <MovieList 
                                                movies = {movies}        
                                            />
                                    }
                                    


                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />



                    {/* example of using styled-jsx */}        
                    <style jsx> {`
                        .home-page {
                            padding-top: 80px;
                        }
                    `}</style>        


                </div>

            </div>
        
        
        
        )
    
    
    
    }

    
}



export default Home