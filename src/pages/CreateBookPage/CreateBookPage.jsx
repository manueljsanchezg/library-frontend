import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { addBook } from '../../api/apiBooks'
import './CreateBookPage.css'

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string(),
  year: yup.number().required('Year is required').integer('Year must be an integer'),
  genre: yup.string().required('Genre is required'),
  authorName: yup.string().required('Author name is required'),
});

const BookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await addBook(data)
      navigate('/books')
    } catch (error) {
      console.error('Error creating book:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='create-book-page-form'>
      <h1 className='create-book-page-welcome'>Add Book</h1>
      <div className='create-book-page-title'>
        <label>Title:</label>
        <input type="text" {...register('title')} />
        <p>{errors.title?.message}</p>
      </div>
      <div className='create-book-page-year'>
        <label>Year:</label>
        <input type="number" {...register('year')} />
        <p>{errors.year?.message}</p>
      </div>
      <div className='create-book-page-genre'>
        <label>Genre:</label>
        <input type="text" {...register('genre')} />
        <p>{errors.genre?.message}</p>
      </div>
      <div className='create-book-page-author'>
        <label>Author Name:</label>
        <input type="text" {...register('authorName')} />
        <p>{errors.authorName?.message}</p>
      </div>
      <button type="submit" className=''>Create Book</button>
    </form>
  )
}

export default BookForm

