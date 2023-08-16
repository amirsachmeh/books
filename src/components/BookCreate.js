import { useState , useContext} from "react";
import BooksContext from "../context/books";

function BookCreate() {
    const  [Title,setTitle] = useState('');
    const {createBooksa} =useContext(BooksContext);

    const handleChange = (e)=>{
        setTitle(e.target.value);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        createBooksa(Title);
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