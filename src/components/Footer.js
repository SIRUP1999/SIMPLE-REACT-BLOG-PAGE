import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <code>
        copyright &copy; <span>SIRUP</span> ({' '}
        <span>{new Date().getFullYear()}</span>)
      </code>
    </div>
  )
}

export default Footer
