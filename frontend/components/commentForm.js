import { useEffect, useState } from 'react'
import {FaComment} from "react-icons/fa"
import {FiShare} from "react-icons/fi"

export default function CommentForm({ postId, comments, title }) {


  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [form, setForm] = useState(false)
  const [err, setErr] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const showForm = (e)=>{
    e.preventDefault()
    setForm(!form)
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try{
      
      const response = await fetch('/api/createComment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          postId: postId,
        }),
      })
      setHasSubmitted(true)
  
      setIsSubmitting(false)
      setFormData({ name: '', email: '', comment: '' })
    } catch (err) {
      setErr(err)
    }
    }

 

  return (
    <div className="mt-28">

    <form onSubmit={handleSubmit} className="w-[20rem]">
      {hasSubmitted ? 
        <p className="bg-green-100 text-green-800 px-4 py-2 rounded-md mb-4">
          Comment Submitted!
        </p>
      : err && <p className="bg-red-500 text-red-300 px-4 py-2 rounded-md mb-4">Failed to Submit</p>  
      }
    
        <div className="form-display flex justify-between w-[20rem] py-3 px-3 mb-10 bg-slate-100 rounded-md">
          <button>
            
          <div className="flex items-center gap-x-2">
        
          <FaComment onClick={showForm} className="text-[18px] text-slate-700"/> <span className="text-slate-500 text-[0.89rem]">{comments.length}</span>
          </div>
          </button>
          <div className="pointer-events-auto">
          

            <FiShare  className="text-[18px] pointer-events-auto"/>
        
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
