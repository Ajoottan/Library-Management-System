import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/bookList.css"
import ReadBook from "./raedBook";

const BookList = () => {
    let navigate = useNavigate()
    let [books,setBooks] = useState([])
    useEffect(()=>{
        let fetchData = async() =>{
            let response = await fetch('http://localhost:4000/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchData()   
    },[books])
    let handleDelete = (id,title) =>{
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE'
        });
        alert(`${title} will be deleted permenently`)
    }
    let read = (id) =>{
        navigate(`/admin/book-list/${id}`)
        console.log(`${id}`);
    } 
    return ( 
        <div className="booklist">
            <h1>Book List : {books.length}</h1>
            <div className="books_section">
                {
                    books.map(data => (
                    <div className="book_card">
                        <div className="thumbnail">
                            <img height="200px" width="150px"src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="desc">
                            <h3>{data.title}</h3>
                            <h5>Authors : {data.authors}</h5>
                            <h5>Categories : {data.categories}</h5>
                            <h5>PageCount : {data.pageCount}</h5>
                            <button onClick={()=>read(data.id)}>Read more</button>
                            <button onClick={()=>handleDelete(data.id,data.title)}>Delete</button>
                            </div>
                        <ReadBook fn={read}/>
                    </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default BookList;