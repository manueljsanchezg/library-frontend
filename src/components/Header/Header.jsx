import { Link } from "react-router-dom"
import { IoLibrary } from "react-icons/io5"
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <div className="icon-h1">
                    <IoLibrary size={60}/>
                    <h1>Library Manager</h1>
                </div>
                <Link to="/books" className="link">Books</Link>
                <Link to="/authors" className="link">Authors</Link>
            </nav>
        </div>
    )
}

export default Header