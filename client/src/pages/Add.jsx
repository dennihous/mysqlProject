import React from 'react'
import { useState } from 'react'

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: ""
  })

  const handleChange = (e) => {
    setBook(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='form' >
      <h1>Add New Book</h1>
      <input type="text" placeholder="title" onChange={handleChange} name="title" />
      <input type="text" placeholder="description" onChange={handleChange} name="description" />
      <input type="number" placeholder="price" onChange={handleChange} name="price" />
      <input type="text" placeholder="cover" onChange={handleChange} name="cover" />
    </div>
  )
}

export default Add