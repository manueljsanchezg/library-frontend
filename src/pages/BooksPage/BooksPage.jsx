import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchBooks } from '../../api/apiBooks.js'
import BookCard from "../../components/BookCard/BookCard.jsx"
import './BooksPage.css'
import { BiBookAdd } from "react-icons/bi"

const BooksPage = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getBooks = async () => {
            try {
                const booksData = await fetchBooks()
                console.log('Books data in component:', booksData)
                setBooks(booksData)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching books "+ error)
            }
        }
        getBooks()
    }, [])

    const handleDelete = (bookId) => {
        setBooks(books.filter(book => book.id !== bookId))
    }

    return (
        <div className="book-page">
            <h1 className="book-page-welcome">Welcome to your books</h1>
            <div className="books-list">
            {loading ? 
                (<p>Cargando...</p> ) : 
                (books.map((book) => 
                    (<BookCard key={book.id} book={book} onDelete={handleDelete} />)))
            }
            </div>
            <div className="add-book-container">
                <Link to="/books/add">
                    <button className="add-book-button">
                        <BiBookAdd   size={40} />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default BooksPage