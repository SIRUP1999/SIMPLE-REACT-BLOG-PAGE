import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
function SharedLayout({ search, setSearch }) {
  return (
    <>
      <Header />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />

      <Footer />
    </>
  )
}

export default SharedLayout
