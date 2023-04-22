import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './components/SharedLayout'
import Home from './components/Home'
import About from './components/About'
import Newpost from './components/Newpost'
import Postpage from './components/Postpage'
import UpdatedPost from './components/UpdatedPost'
import api from './api/posts'

const App = () => {
  const [posts, setPosts] = useState([])

  const [search, setSearch] = useState('')
  const [searchResult, setSearchresult] = useState('')
  const [newTitle, setNewtitle] = useState('')
  const [postBody, setPostbody] = useState('')
  const [editTitle, setEdittitle] = useState('')
  const [editBody, setEditbody] = useState('')

  const HandleSubmmit = async (e) => {
    e.preventDefault()
    if (postBody && newTitle) {
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1
      const listItems = {
        id,
        dateTime: format(new Date(), 'dd MMMM,yyyy pp'),
        body: postBody,
        title: newTitle.toUpperCase(),
      }
      const response = await api.post('posts', listItems)
      const newList = [...posts, response.data]
      setPosts(newList)

      setNewtitle('')
      setPostbody('')
    } else {
      return
    }
  }

  const handleEdit = async (id) => {
    const updatedPost = {
      dateTime: format(new Date(), 'dd MMMM,yyyy pp'),
      body: editBody,
      title: editTitle.toUpperCase(),
    }
    try {
      const response = await api.put(`/posts/${id}`, updatedPost)
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      )
      setEditbody('')
      setEdittitle('')
    } catch (err) {
      console.log(`Error${err.message}`)
    }
  }

  const HandleDelete = async (id) => {
    await api.delete(`/posts/${id}`)
    const deletedItem = posts.filter((post) => post.id !== id)

    setPosts(deletedItem)
  }

  useEffect(() => {
    const searching = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.dateTime.toLowerCase().includes(search.toLowerCase())
    )
    setSearchresult(searching.reverse())
  }, [posts, search])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/posts')
        setPosts(response.data)
      } catch (err) {
        console.log(`Err:${err.message}`)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <main className='main'>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<SharedLayout search={search} setSearch={setSearch} />}
            >
              <Route index element={<Home posts={searchResult} />} />
              <Route path='/about' element={<About />} />
              <Route
                path='/post'
                element={
                  <Newpost
                    newTitle={newTitle}
                    setNewtitle={setNewtitle}
                    postBody={postBody}
                    setPostbody={setPostbody}
                    HandleSubmmit={HandleSubmmit}
                  />
                }
              />
              <Route
                path='/post/:id'
                element={<Postpage posts={posts} HandleDelete={HandleDelete} />}
              />
              <Route
                path='/posts/:id'
                element={
                  <UpdatedPost
                    posts={posts}
                    handleEdit={handleEdit}
                    editTitle={editTitle}
                    setEdittitle={setEdittitle}
                    editBody={editBody}
                    setEditbody={setEditbody}
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
