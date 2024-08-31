import axios from "axios"

const API_URL = 'http://localhost:8080/api'

const fetchBooks = async () => {
    try {
        const response = await axios.get(`${API_URL}/books`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const fetchBookById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/books/${id}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const addBook = async (book) => {
    try {
        const response = await axios.post(`${API_URL}/books`, book)
    } catch (error) {
        console.error(error)
        throw error
    }
}

const updateBook = async (id, updatedBook) => {
    try {
        const response = await axios.put(`${API_URL}/books/${id}`, updatedBook)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const deleteBook = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/books/${id}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export { fetchBooks, fetchBookById, addBook, updateBook, deleteBook }
