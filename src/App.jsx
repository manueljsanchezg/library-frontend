import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BooksPage from './pages/BooksPage/BooksPage.jsx'
import CreateBookPage from './pages/CreateBookPage/CreateBookPage.jsx'
import EditBookPage from './pages/UpdateBookPage/EditBookPage.jsx'
import Header from './components/Header/Header.jsx'
import AuthorsPage from './pages/AuthorsPage/AuthorsPage.jsx'
import CreateAuthorsPage from './pages/CreateAuthorPage/CreateAuthorPage.jsx'
import EditAuthorPage from './pages/UpdateAuthorPage/EditAuthorPage.jsx'

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<BooksPage />} />
          <Route path='/add-book' element={<CreateBookPage />} />
          <Route path='/edit-book/:id' element={<EditBookPage />} />
          <Route path='/authors' element={<AuthorsPage />} />
          <Route path='/add-author' element={<CreateAuthorsPage />} />
          <Route path='/edit-author/:id' element={<EditAuthorPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
