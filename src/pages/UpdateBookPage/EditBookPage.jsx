import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchBookById, updateBook } from '../../api/apiBooks'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import'./EditBookPage.css'

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string(),
  year: yup.number().required('Year is required').integer().positive(),
  genre: yup.string().required('Genre is required'),
  authorName: yup.string().required('Author name is required')
})

const EditBookPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)
  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    const getBook = async () => {
      try {
        const fetchedBook = await fetchBookById(id)
        setBook(fetchedBook)
        setValue('title', fetchedBook.title)
        setValue('description', fetchedBook.description)
        setValue('year', fetchedBook.year)
        setValue('genre', fetchedBook.genre)
        setValue('authorName', fetchedBook.author_name)
      } catch (error) {
        console.error('Error fetching book:', error)
      }
    }
    getBook()
  }, [id, setValue])

  const onSubmit = async (data) => {
    try {
      await updateBook(id, data)
      navigate('/')
    } catch (error) {
      console.error('Error updating book:', error)
    }
  }

  if (!book) return <p>Loading...</p>

  return (
      <form onSubmit={handleSubmit(onSubmit)} className='edit-book-page-form'>
        <h1 className='edit-book-page-welcome'>Edit Book</h1>
        <div className='edit-book-page-title'>
          <label>Title</label>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => <input type='text'{...field} />}
          />
        </div>
        <div className='edit-book-page-year'>
          <label>Year</label>
          <Controller
            name="year"
            control={control}
            defaultValue=""
            render={({ field }) => <input type="number" {...field} />}
          />
        </div>
        <div className='edit-book-page-genre'>
          <label>Genre</label>
          <Controller
            name="genre"
            control={control}
            defaultValue=""
            render={({ field }) => <input type='text'{...field} />}
          />
        </div>
        <div className='edit-book-page-genre'>
          <label>Author</label>
          <Controller
            name="authorName"
            control={control}
            defaultValue=""
            render={({ field }) => <input type='text'{...field} />}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
  )
}

export default EditBookPage
