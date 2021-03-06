import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Modal from './modal'
import MovieCreateForm from './MovieCreateForm'
import {createMovie} from '../actions'
// import ModalFC from './modalFC'

const SideMenu = (props) => {

    const {categories} = props
    const router = useRouter()
    // console.log('categories >>: ', props.categories);


    let modal = null;

    const handleCreateMovie = (movie) => {
        createMovie(movie)
            .then( (movies) => {
                console.log(' ***** HandleCreateMovie ', JSON.stringify(movies))
                modal.closeModal()
                router.push('/')
            }) 
    
    }


    return (
        <div>
            <Modal ref = {ele => modal = ele} hasSubmit = {false}>
                <MovieCreateForm
                    categories = {categories}
                    hasSubmit = {false}
                    handleFormSubmit = {handleCreateMovie} 
                 />
            </Modal>

            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">

                {categories.map((category) => {
                    return (
                        <a  
                            onClick = { () => props.changeCategory(category.name)}
                            key = {category.id}   
                            href="#" 
                            className={`list-group-item ${props.activeCategory === category.name ? 'active' : ''}`}>{category.name}</a>               
                    )
                })} 

            </div>
            {/*    <button onClick = {increment} className = "btn btn-info m-2"> Increment Number</button>
                <button onClick = {decrement} className = "btn btn-info m-2" > Decrement Number </button>
            
                <div className = "w-25 mx-auto">
                    <h1> {props.count} </h1>    
                </div>
            */}    
            
            
        </div>
    )


}

export default SideMenu;