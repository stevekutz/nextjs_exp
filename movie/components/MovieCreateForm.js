import React, {useState} from 'react';



const MovieCreateForm = (props) => {


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

    return (
        <form>
            <div className="form-group">
                <label for="name">Name</label>
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
                <label for="description">Description</label>
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
                <label for="description">Rating</label>
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
                <label for="image">Image</label>
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
                <label for="cover">Cover</label>
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
                <label for="longDesc">Long Description</label>
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
                <label for="genre">Genre</label>
                <select 
                    multiple 
                    className="form-control" 
                    name = "genre"
                    id="genre"
                    onChange = {handleChange}
                >
                <option>drama</option>
                <option>music</option>
                <option>adventure</option>
                <option>historical</option>
                <option>action</option>
                </select>
            </div>
        </form>
    )

}

export default MovieCreateForm;