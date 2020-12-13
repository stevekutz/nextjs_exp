import React, {Component} from 'react'
import {getPosts} from '../actions'


class Posts extends Component {

    // // legacy method does not render prosp
    // static async getIntialProps(context) {
    //     const posts = await getPosts()
    //     return {posts}
    // }


    render() {

        const {posts} = this.props        
        console.log('posts ', posts)
        console.log(' props ', this.props )

        return (
            
            <div className="row row-cols-1 row-cols-md-3 g-4">   

                
                {posts.map( (post) => {
                    return (
                    
                        <div class="col" key = {post.id}>
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{post.title}</h5>
                                    <p class="card-text">{post.body}</p>
                                </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
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
    return {
        props: {posts}
    }

}

// use Next.js hook for fetch data from client side

