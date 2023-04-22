import Post from './Post'
const Feed = ({ posts }) => {
  return (
    <div>
      {posts &&
        posts.map((post) => {
          return <Post post={post} key={post.id} />
        })}
    </div>
  )
}

export default Feed
