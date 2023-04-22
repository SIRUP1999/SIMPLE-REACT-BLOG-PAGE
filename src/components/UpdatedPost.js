import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const UpdatedPost = ({
  posts,
  handleEdit,
  editTitle,
  setEdittitle,
  editBody,
  setEditbody,
}) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id.toString() === id)

  useEffect(() => {
    setEditbody(post.body)
    setEdittitle(post.title)
    setEditbody('')
    setEdittitle('')
  }, [post, setEditbody, setEdittitle])

  return (
    <div className='newpost'>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className='posts' htmlFor='posts'>
          Edit title
        </label>
        <input
          className='aqaya'
          type='text'
          id='posts'
          required
          value={editTitle}
          onChange={(e) => setEdittitle(e.target.value)}
          placeholder='Add Item'
        />

        <label htmlFor='body'>Edit post</label>
        <textarea
          className='aqaya'
          type='text'
          placeholder='Add text'
          id='body'
          required
          value={editBody}
          onChange={(e) => setEditbody(e.target.value)}
        />
      </form>
      <button className='btn' type='button' onClick={() => handleEdit(post.id)}>
        submmit
      </button>
    </div>
  )
}

export default UpdatedPost
