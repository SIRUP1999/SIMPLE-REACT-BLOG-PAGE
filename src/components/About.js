import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='about'>
      <p className='content'>
        this project is made by sirup,an example of a blog page to be coded in
        no time.
        <p>
          <Link to='/'>back home</Link>
        </p>
      </p>
    </div>
  )
}

export default About
