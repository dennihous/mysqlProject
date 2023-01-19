import React from 'react'
import { useState } from 'react'

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: ""
  })
  
  return (
    <div className='form' >
      <h1>Add New Book</h1>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="description" />
      <input type="number" placeholder="price" />
      <input type="text" placeholder="cover" />
    </div>
  )
}

export default Add