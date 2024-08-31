import axios from "axios"

const API_URL = 'http://localhost:8080/api'

const fetchAuthors = async () => {
    try {
        const response = await axios.get(`${API_URL}/authors`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const fetchAuthorById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/authors/${id}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const fetchBooksByAuthorId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/authors/${id}/books`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const addAuthor = async (author) => {
    try {
        const response = await axios.post(`${API_URL}/authors`, author)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const updateAuthor = async (id, updatedAuthor) => {
    try {
        const response = await axios.put(`${API_URL}/authors/${id}`, updatedAuthor)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const deleteAuthor = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/authors/${id}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export { fetchAuthors, fetchAuthorById, fetchBooksByAuthorId, addAuthor, updateAuthor, deleteAuthor }
