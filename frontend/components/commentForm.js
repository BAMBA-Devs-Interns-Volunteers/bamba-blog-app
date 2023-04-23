import { Container } from 'postcss'
import { useEffect, useState } from 'react'
import {FaComment} from "react-icons/fa"
import {FiShare} from "react-icons/fi"

export default function CommentForm({ postId, comments }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [form, setForm] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const showForm = ()=>{
    setForm(!form)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const response = await fetch('/api/createComment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        postId,
      }),
    })

    setIsSubmitting(false)
    setHasSubmitted(true)
    setFormData({ name: '', email: '', comment: '' })
  }

  setTimeout(()=>{
    setHasSubmitted(false)
  }, 3000)




  return (
    <div className="mt-28">

    
    <form onSubmit={handleSubmit} className="w-[20rem]">
      {hasSubmitted ? 
        <p className="bg-green-100 text-green-800 px-4 py-2 rounded-md mb-4">
          Thank you for your comment!
        </p>
      :""  
      }
    
        <div className="form-display flex justify-between w-[20rem] py-3 px-3 mb-10 bg-slate-100 rounded-md">
          <div className="flex items-center gap-x-2">
          <FaComment className="text-[18px] "/> <span>{comments.length}</span>
          </div>
          <div className="pointer-events-auto">
          

            <FiShare onClick={showForm} className="text-[18px] pointer-events-auto" style={{pointerEvents: "auto"}}/ >
        
          </div>
          </div>
        {form ? (
          <>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="comment"
              className="block text-gray-700 font-medium mb-2"
            >
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#8D75FD] hover:bg-purple-500 text-white px-4 py-2 rounded-md shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          </>
        ) : (
          <>
          
          </>
        )}
       
      
    </form>
    </div>
  )
}
