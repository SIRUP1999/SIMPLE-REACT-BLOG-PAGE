import { Link } from 'react-router-dom'
const Post = ({ post }) => {
  return (
    <div className='postes'>
      {post && (
        <>
          <Link to={`/post/${post.id}`}>
            <p className='para'>{post.title}</p>
            <p className='para'>{post.dateTime}</p>
          </Link>
          <p>{post.body <= 30 ? post.body : `${post.body.slice(0, 30)}...`}</p>
        </>
      )}
      {!post && <p>no post at the moment</p>}
    </div>
  )
}

export default Post
