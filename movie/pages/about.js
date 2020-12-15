import React from 'react';
import forceIpsum  from '../data/text-data'

const About = () => {
    
    
    return (
        <div style = {{ paddingBottom: "150px"}}>
            <h1> About Page </h1>
            <p> {forceIpsum} </p>

        </div>
    
    )
}

// const About = () => {
//     const message = 'message text';

//     return React.createElement('h1', null, 'Creating using createElement')

// }

// class About extends React.Component {
//   render() {
//     return (
//       <h1>Hello I am class component</h1>
//     )
//   }
// }






export default About;