import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import BookList from "./bookList";

const ReadBook = () => {

    let [book,setBook] = useState([])
    let params = useParams()
    useEffect(()=>{
        let fetchData = async() =>{
            let response = await fetch(`http://localhost:4000/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()   
    })

    return ( 
        <div className="readBook">
            <div className="card">
                <h2>{book.title}</h2>   
                <div className="read_desc">
                    <p>{book.shortDescription}</p>
                    <p>{book.longDescription}</p>
                </div>
            </div>
        </div>
     );
}
 
export default ReadBook;