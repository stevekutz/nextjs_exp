import React, {useState} from 'react';
import Modal from './modal';
import MovieCreateForm from './MovieCreateForm';

const SideMenu = (props) => {

    const {categories} = props
    // console.log('categories >>: ', props.categories);

    return (
        <div>
            <Modal>
                <MovieCreateForm
                    categories = {categories} 
                 />
            </Modal>

            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">

                {categories.map((category) => {
                    return (
                        <a key = {category.id}   href="#" className="list-group-item">{category.name}</a>               
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