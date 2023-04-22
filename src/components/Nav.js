import Home from './Home'
import About from './About'
import Newpost from './Newpost'

import { NavLink } from 'react-router-dom'
const Nav = ({ search, setSearch }) => {
  return (
    <>
      <section className='nav-styles'>
        <main>
          <NavLink className='nav1' to='/' element={<Home />}>
            Home
          </NavLink>
          <NavLink className='nav1' to='/about' element={<About />}>
            About
          </NavLink>
          <NavLink className='nav1' to='/post' element={<Newpost />}>
            Post
          </NavLink>
        </main>

        <form>
          <input
            type='search'
            id='search'
            placeholder='search item'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </section>
    </>
  )
}

export default Nav
