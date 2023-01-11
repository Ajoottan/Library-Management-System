import { useState } from "react"
import "../styles/addBook.css"
import { useNavigate } from "react-router-dom"
const AddBook = () => {
    //title,categories,authors,shortDescription,longDescription,thumbnailUrl,pageCount
    let [title, setTitle] = useState("")
    let [categories, setCategory] = useState("")
    let [authors, setAuthors] = useState("")
    let [pageCount, setPageCount] = useState("")
    let [shortDescription, setShortDescription] = useState("")
    let [longDescription, setLongDescription] = useState("")
    let [thumbnailUrl, setUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();
        let bookData = { title, categories, authors, shortDescription, longDescription, thumbnailUrl, pageCount }

        fetch('http://localhost:4000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        })
        alert('Book has been added')
        navigate('/admin/book-list')
    }
    return (
        <div className="ab_body">
            <div className="addBook">
                <div className="bookheading">
                    <h1>Add a Book</h1>
                </div>
                <div className="ab_content">
                    <div className="ab_img">
                        <img src="/images/addbook.png" alt="" />
                    </div>
                    <div className="formBook">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="title">
                                <label htmlFor="">Title: </label>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title of the book" />
                            </div>
                            <div className="categories" >
                                <label htmlFor="">Categories: </label>
                                <input value={categories} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Category of the book" />
                            </div>
                            <div className="authors">
                                <label htmlFor="">Authors: </label>
                                <input value={authors} onChange={(e) => setAuthors(e.target.value)} type="text" placeholder="Authors of the book" />
                            </div>
                            <div className="shortDescription">
                                <label htmlFor="">ShortDescription: </label>
                                <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} cols="30" rows="10" placeholder="Short Description of the book"></textarea>
                            </div>
                            <div className="longDescription">
                                <label htmlFor="">LongDescription: </label>
                                <textarea value={longDescription} onChange={(e) => setLongDescription(e.target.value)} cols="30" rows="10" placeholder="Long Description of the book"></textarea>
                            </div>
                            <div className="thumbnailUrl">
                                <label htmlFor="">Image Url: </label>
                                <input value={thumbnailUrl} onChange={(e) => setUrl(e.target.value)} type="text" placeholder="Thumbnail-Url of the book" />
                            </div>
                            <div className="pageCount">
                                <label htmlFor="">PageCount: </label>
                                <input value={pageCount} onChange={(e) => setPageCount(e.target.value)} type="number" placeholder="pageCount of the book" />
                            </div>
                            <button>Add Book</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddBook;