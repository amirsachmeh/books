import { useState } from "react";
import useBooksContext from "../hooks/use-books-ontext";

function BookCreate() {
    const  [Title,setTitle] = useState('');
    const {createBooks} = useBooksContext();

    const handleChange = (e)=>{
        setTitle(e.target.value);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
               createBooks(Title);
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