import { Link } from 'react-router-dom'
import { deleteBook } from '../../api/apiBooks'
import './BookCard.css'
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'

const BookCard = ({ book, onDelete }) => {

    const removeBook = async () => {
        try {
            await deleteBook(book.id)
            onDelete(book.id)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="book-card">
            <h2 className="book-title">{book.title}</h2>
            <div className="book-info">
                <p className="book-year">Year: {book.year}</p>
                <p className="book-genre"> Genre: {book.genre}</p>
                <p className="book-autor">Author: {book.author_name}</p>
            </div>
            <div className='book-card-buttons'>
                <Link to={`/edit-book/${book.id}`}>
                    <button className='book-card-edit-button'>
                        <MdEdit size={40} />
                    </button>
                </Link>
                <button className='book-card-delete-button' onClick={removeBook}>
                    <MdDelete size={40} />
                </button>
            </div>
        </div>
    )

}

export default BookCard