import  {useState,useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";



function App(){

    const [books,setBooks] = useState([]);

    const fetchBooks = async ()=>{
      const response = await axios.get('http://127.0.0.1:3001/books');

      setBooks(response.data);
    };  

    useEffect(()=>{
        fetchBooks();
    },[]);

    
    const editBookById = async (id,newTitle) =>{
      const response = await axios.put(`http://127.0.0.1:3001/books/${id}`,{
        title: newTitle
      });

      console.log(response)
       const updatedBooks = books.map((book)=>{
        if (book.id === id){
            return {...book,...response.data};
        }

        return book ;
       });
       setBooks(updatedBooks);        

    };

    const deletBookById = async (id)=>{
      await axios.delete(`http://127.0.0.1:3001/books/${id}`)
      const updatedBooks =books.filter((book)=>{
        return book.id !== id
      });
      setBooks(updatedBooks);        

    };


    const createBooks = async (title)=> {

       const response = await axios.post('http://127.0.0.1:3001/books',{
            title
        });
        
        const updatedBooks = [
            ...books,
         response.data
        ];
        setBooks(updatedBooks);        
    };

    return ( 
    <div className="app"> 
    <h1> Reading List</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deletBookById}/>
        <BookCreate  onCreate={createBooks}/>
    </div>
    );

};

export default App;