import React, {Component} from 'react'
import {getPosts, getImages} from '../actions'
import '../styles/index.scss'



class Posts extends Component {

    // // legacy method does not render prosp
    // static async getIntialProps(context) {
    //     const posts = await getPosts()
    //     return {posts}
    // }


    render() {

        const {posts, images} = this.props        
        console.log('posts ', posts)
        console.log(' props ', this.props )

        return (
               

                    <div className = "post-container">
                        {posts.map((post) => {
                            return (
                                <div  key = {post.id}> 
                                        <div className = "info-card">
                                        {/* <img src = {`${comic_info.data.results[0].thumbnail.path}.${comic_info.data.results[0].thumbnail.extension}`}/> */}
                                            <div style = {{width: "200px"}}>
                                                <img className = "image-form"  src = {`${images.message[`${post.id}`]}`} />
                                            </div>
                                            <h5>{post.id}{post.title}</h5>
                                            <p>{post.description}</p>
                                        </div>                                                        
                                </div>                
                            )                        
                        })}                              
                    </div>                
               
                    
        )       
    }

}

export default Posts


// use getStaticProps to pre-render
export async function getStaticProps(context) {
    const posts = await getPosts()
    const images = await getImages()

    return {
        props: {posts, images}
    }

}

// use Next.js hook for fetch data from client side

