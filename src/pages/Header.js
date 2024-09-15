import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false) // Track if nav is open
  const [navItems, setNavItems] = useState([]) // Nav items

  // Simulate fetching navigation items dynamically
  const fetchNavItems = () => {
    setNavItems(prev => {
      return localStorage.getItem('login')
        ? [
            { name: 'SignUp', path: '/' },
            { name: 'Login', path: '/login' },
            { name: 'Main', path: '/main' },
          ]
        : [
            { name: 'SignUp', path: '/' },
            { name: 'Login', path: '/login' },
          ]
    })
  }

  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen) // Toggle the navbar open state
    if (!isNavOpen) {
      fetchNavItems() // Fetch nav items only when opening
    }
  }
  const navigate = useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand" onClick={() => navigate('/*')}>
          Geeksynergy
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleClick} // Handle click
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
