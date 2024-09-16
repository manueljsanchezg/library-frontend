import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchAuthorById, updateAuthor } from '../../api/apiAuthors'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import'./EditAuthorPage.css'

const schema = yup.object().shape({
  name: yup.string().required('name is required'),
  birthDate: yup.date()
})

const EditAuthorPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [author, setAuthor] = useState(null)
  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const fetchedAuthor = await fetchAuthorById(id)
        setAuthor(fetchedAuthor)
        
        const formattedDate = fetchedAuthor.birthDate 
        ? fetchedAuthor.birthDate.split('T')[0]
        : ''

        setValue('name', fetchedAuthor.name)
        setValue('birthDate', formattedDate)
      } catch (error) {
        console.error('Error fetching author:', error)
      }
    }
    getAuthor()
  }, [id, setValue])

  const onSubmit = async (data) => {
    try {
      await updateAuthor(id, data)
      navigate('/authors')
    } catch (error) {
      console.error('Error updating author:', error)
    }
  }

  if (!author) return <p>Loading...</p>

  return (
      <form onSubmit={handleSubmit(onSubmit)} className='edit-author-page-form'>
        <h1 className='edit-author-page-welcome'>Edit Author</h1>
        <div className='edit-author-page-name'>
          <label>Name</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <input type='text'{...field} />}
          />
        </div>
        <div className='edit-author-page-birth'>
          <label>birth</label>
          <Controller
            name="birthDate"
            control={control}
            defaultValue=""
            render={({ field }) => <input type="date" {...field} />}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
  )
}

export default EditAuthorPage
