import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Postpage = ({ posts, HandleDelete }) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id.toString() === id)

  return (
    <div className='postpage'>
      <div>
        {post && (
          <>
            <p className='post-title'>{post.title}</p>
            <p className='dateTime'>{post.dateTime}</p>
            <p className='post-body'>{post.body}</p>
            <button
              type='button'
              className='delete-btn'
              onClick={() => HandleDelete(post.id)}
            >
              Delete
            </button>
            <Link to={`/posts/${id}`}>
              <button className='edit-btn'>Edit Post</button>
            </Link>
          </>
        )}
        {!post && (
          <>
            <p style={{ textTransform: 'capitalize' }}>no post to display</p>
            <p>
              <Link to='/'>back home</Link>
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Postpage
