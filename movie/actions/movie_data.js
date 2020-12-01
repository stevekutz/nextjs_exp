// without getMovies function to emualate API GET requesdt
// export const MOVIE_DATA

import { get } from "http"
import { resolve } from "path"

const MOVIE_DATA = [
  {
    id: '1',
    name: 'The Shawshank Redemption',
    releaseYear: 1994,
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    longDesc: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.",
    rating: 4.8,
    genre: 'drama',
    image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg',
    cover: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1640&q=80',
  },
  {
    id: '2',
    name: 'The Dark Knight',
    releaseYear: 2008,
    description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    longDesc: "Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse.",
    rating: 4.7,
    genre: 'action, crime, drama',
    image: 'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600',
    cover: 'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
  },
  {
    id: '3',
    name: 'Lord of the Rings',
    releaseYear: 2004,
    description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    longDesc: "Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies.",
    rating: 4.9,
    genre: 'adventure, drama, fantasy',
    image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600',
    cover: 'https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80',
  }
]

 const CATEGORY_DATA = [
  {id: 1, name: 'action'},
  {id: 2, name: 'romance'},
  {id: 3, name: 'comedy'},
  {id: 4, name: 'crime-drama'},
 
 ]


export const getMovies = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(MOVIE_DATA)
            reject('Cannot connect to data')
        }, 50)
    })
}

export const getMovieById = (id) => {

  return new Promise( (resolve, reject) => {
    const movieIndex  = MOVIE_DATA.findIndex( (movie) => {
      return  movie.id === id
    })
    const movie = MOVIE_DATA[movieIndex]

    console.log('getbyId ->', movie);



    setTimeout( () => {
      resolve(movie, 50)
    
    }, 50) 
  
  })
}

export const getCategories = () => {
  return new Promise( (res, rej) => {
    setTimeout(() => {
      res(CATEGORY_DATA)
      rej('Cannot get category')
    }, 20)

  })

}

export const createMovie = (movie) => {
    return new Promise( (resolve, reject) => {

        // // get a unique id 
        do {
          movie.id = Math.random().toString(36).substr(2,7)
          // console.log('NOT YET >> ',  MOVIE_DATA.some(elem => elem.id === (getMovieById(movie.id)).toString() ))
          // console.log('exists', MOVIE_DATA.some(elem => elem.id === '1' ))
        
            // if id exists, try again to get a unique id
        } while ( MOVIE_DATA.some(elem => elem.id === (getMovieById(movie.id)).toString()) === true)


        // movie.id = Math.random().toString(36).substr(2,7)

        MOVIE_DATA.push(movie)

        setTimeout( () => {
            resolve(MOVIE_DATA)
            reject('Cannot connect to data')
        }, 50)
    })
}