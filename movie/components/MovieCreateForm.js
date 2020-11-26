import React, {useState} from 'react';



const MovieCreateForm = (props) => {

    const {categories} = props

    console.log('>:>  cat', categories)

    const [form, setForm] = useState({
        name: "Add movie name",
        description: "Your description"
    
    })

    const handleChange = (e) => {
        const target = e.target
        const name = target.name

        setForm({
            ...form,
            [name]: target.value
        })

    }

    const handleGenreChange = (e) => {
        const {options} = e.target
        const optionsLength = options.length
        
        let  value = []

        for(let i  = 0; i < optionsLength; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }        
        } 

        setForm({
            ...form,
            genre: value.toString(),     
        })
   
    }


    const submitForm = () => {
        props.handleFormSubmit({...form})
    
    }


    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    value = {form.name}
                    type="text" 
                    className="form-control"
                    name = "name" 
                    id="name" 
                    aria-describedby="emailHelp" 
                    placeholder="Lord of the Rings" 
                    onChange = {handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input 
                    value = {form.description}
                    type="text" 
                    className="form-control" 
                    name = "description"
                    id="description" 
                    placeholder="Somewhere in Middle-earth..." 
                    onChange = {handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Rating</label>
                <input 
                    value = {form.rating}
                    type="number" 
                    max="5" 
                    min="0" 
                    className="form-control" 
                    name = "rating"
                    id="rating" 
                    placeholder="3" 
                    onChange = {handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input 
                    value = {form.image}
                    type="text" 
                    className="form-control" 
                    name = "image"
                    id="image" 
                    placeholder="http://....." 
                    onChange = {handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input 
                    value = {form.cover}
                    type="text" 
                    className="form-control" 
                    name = "cover"
                    id="cover" 
                    placeholder="http://......" 
                    onChange = {handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea 
                    value = {form.longDesc}
                    className="form-control" 
                    name = "longDesc"
                    id="longDesc" 
                    rows="3"
                    onChange = {handleChange}
                >
                    
                </textarea>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select 
                    multiple 
                    className="form-control" 
                    name = "genre"
                    id="genre"
                    onChange = {handleGenreChange}
                >
                {/*
                <option>drama</option>
                <option>music</option>
                <option>adventure</option>
                <option>historical</option>
                <option>action</option>
                */}

                {categories.map((cat) => {
                    return (
                       <option key = {cat.id}>{cat.name}</option> 
                    
                    )
                
                
                })}

                </select>
            </div>
            <button onClick = {submitForm} type="button" className="btn btn-primary">Save changes</button>
        </form>
    )

}

export default MovieCreateForm;