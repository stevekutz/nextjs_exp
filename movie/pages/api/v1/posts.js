import axios from 'axios'

export default async (req, res) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // return res.json(response.data)
    
    const posts = response.data

    return res.json(posts.slice(0, 20))
}



// export default (req, res) => {
//     const posts = [
//         {id: '1', name: 'Some post 1', description: 'Some First Post description'},
//         {id: '2', name: 'Some post 2', description: 'Some Second Post description'},
//         {id: '3', name: 'Some post 3', description: 'Some Third Post description'}, 
//         {id: '4', name: 'Some post 4', description: 'Some Fourth Post description'},   
    
//     ]

//     return res.json(posts)

// }
