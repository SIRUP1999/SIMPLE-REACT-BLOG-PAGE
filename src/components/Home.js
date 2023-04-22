import Feed from './Feed'
const Home = ({ posts }) => {
  return (
    <div className='home'>
      {posts && <Feed posts={posts} />}
      {!posts && <p>provide a post</p>}
    </div>
  )
}

export default Home
