import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AuthorCard from "../../components/AuthorCard/AuthorCard.jsx"
import './AuthorsPage.css'
import { MdPostAdd } from "react-icons/md";
import { fetchAuthors } from "../../api/apiAuthors.js"

const AuthorsPage = () => {
    const [authors, setAuthors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAuthors = async () => {
            try {
                const authorsData = await fetchAuthors()
                console.log('authors data in component:', authorsData)
                setAuthors(authorsData)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching authors "+ error)
            }
        }
        getAuthors()
    }, [])

    const handleDelete = (authorId) => {
        setAuthors(authors.filter(author => author.id !== authorId))
    }

    return (
        <div className="author-page">
            <h1 className="author-page-welcome">Welcome to your authors</h1>
            <div className="authors-list">
            {loading ? 
                (<p>Cargando...</p> ) : 
                (authors.map((author) => 
                    (<AuthorCard key={author.id} author={author} onDelete={handleDelete} />)))
            }
            </div>
            <div className="add-author-container">
                <Link to="/add-author">
                    <button className="add-author-button">
                        <MdPostAdd  size={40} />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default AuthorsPage