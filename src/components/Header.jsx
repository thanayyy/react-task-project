import React from 'react'
import '../css/Header.css'
const Header = () => {
  return (
    <header>
        <div className="logo">
            <span>Task Management App</span>
        </div>
        <div className='theme-container'>
            <span>Dark Mode</span>
            <span className="icon">Switch</span>
        </div>
    </header>
  )
}

export default Header