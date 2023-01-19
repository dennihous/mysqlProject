import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../style.css"

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/books", book)
      navigate("/")
    } catch(err){
      console.log(err)
    }
  }

  console.log(book)

  return (
    <div className='form' >
      <h1>Update Book</h1>
      <input type="text" placeholder="title" onChange={handleChange} name="title" />
      <input type="text" placeholder="description" onChange={handleChange} name="description" />
      <input type="number" placeholder="price" onChange={handleChange} name="price" />
      <input type="text" placeholder="cover" onChange={handleChange} name="cover" />
      <button className='formButton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update