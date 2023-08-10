import { useState } from "react";

function BookCreate({onCreate}) {
    const  [Title,setTitle] = useState('');

    const handleChange = (e)=>{
        setTitle(e.target.value);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        onCreate(Title);
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>Add a Book </h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={Title} onChange={handleChange}/>
            <button className="button">create!</button>
        </form>
        </div>
        );
}



export default BookCreate;