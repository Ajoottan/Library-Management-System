import {useState} from "react"
import "../styles/addBook.css"
import {useNavigate} from "react-router-dom"
const AddBook = () => {
    //title,categories,authors,shortDescription,longDescription,thumbnailUrl,pageCount
    let [title,setTitle] = useState("")
    let [categories,setCategory] = useState("")
    let [authors,setAuthors] = useState("")
    let [pageCount,setPageCount] = useState("")
    let [shortDescription,setShortDescription] = useState("")
    let [longDescription,setLongDescription] = useState("")
    let [thumbnailUrl,setUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();
        let bookData = {title,categories,authors,shortDescription,longDescription,thumbnailUrl,pageCount}
    
        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('Book has been added')
        navigate('/admin/book-list')
    }
    return ( 
        <div className="addBook">
            <h1>Add a Book</h1>
            <div className="formBook">
            <form action="" onSubmit={handleSubmit}>
                <div className="title">
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="title of the book" />
                </div>
                <div className="categories" >
                    <input value={categories} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="category of the book"/>
                </div>
                <div className="authors">
                    <input value={authors} onChange={(e)=>setAuthors(e.target.value)} type="text" placeholder="Authors of the book"/>
                </div>
                <div className="shortDescription">
                    <textarea value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} cols="30" rows="10" placeholder="Short Description of the book"></textarea>
                </div>
                <div className="longDescription">
                    <textarea value={longDescription} onChange={(e)=>setLongDescription(e.target.value)} cols="30" rows="10" placeholder="Long Description of the book"></textarea>
                </div>
                <div className="thumbnailUrl">
                    <input value={thumbnailUrl} onChange={(e)=>setUrl(e.target.value)} type="text" placeholder="Thumbnail-Url of the book" />
                </div>
                <div className="pageCount">
                    <input value={pageCount} onChange={(e)=>setPageCount(e.target.value)} type="number" placeholder="pageCount of the book" />
                </div>
                <button>Add Book</button>
            </form>

            </div>
        </div>
     );
}
 
export default AddBook;