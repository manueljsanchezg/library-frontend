import { Link } from 'react-router-dom'
import { deleteAuthor } from '../../api/apiAuthors'
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import './AuthorCard.css'

const AuthorCard = ({ author, onDelete }) => {

    const removeAuthor = async () => {
        try {
            await deleteAuthor(author.id)
            onDelete(author.id)
        } catch (error) {
            console.error(error)
        }
    }

    const formattedDate = author.birthDate 
                            ? new Date(author.birthDate).toLocaleDateString()
                            : ''

    return (
        <div className="author-card">
            <h2 className="author-name">{author.name}</h2>
            <div className="author-info">
                <p className="author-birth">birth: {formattedDate}</p>
            </div>
            <div className='author-card-buttons'>
                <Link to={`/authors/edit/${author.id}`}>
                    <button className='author-card-edit-button'>
                        <MdEdit size={40} />
                    </button>
                </Link>
                <button className='author-card-delete-button' onClick={removeAuthor}>
                    <MdDelete size={40} />
                </button>
            </div>
        </div>
    )

}

export default AuthorCard