import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { addAuthor } from '../../api/apiAuthors'
import './CreateAuthorPage.css'

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  birthDate: yup.date()
})

const AuthorForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      data.birthDate = new Date(data.birthDate).toISOString()
      await addAuthor(data)
      navigate('/authors')
    } catch (error) {
      console.error('Error creating author:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='create-author-page-form'>
      <h1 className='create-author-page-welcome'>Add Author</h1>
      <div className='create-author-page-name'>
        <label>Name:</label>
        <input type="text" {...register('name')} />
        <p>{errors.title?.message}</p>
      </div>
      <div className='create-author-page-birth'>
        <label>Year:</label>
        <input type="date" {...register('birthDate')} />
        <p>{errors.year?.message}</p>
      </div>
      <button type="submit" className=''>Create Author</button>
    </form>
  )
}

export default AuthorForm