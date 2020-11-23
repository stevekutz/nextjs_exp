import React from 'react';
import {useRouter} from 'next/router';


const Movie = (props) => {

    const router = useRouter();
    const {id} = router.query



    return  (
        <div>
            <h1> Movie with id: {id} </h1>
        
        </div>
    
    )
}

export default Movie;