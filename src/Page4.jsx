import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Page4.css' // Corrected path to lowercase 'css'

export default function Page4() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">My Website</div>
          <div
            className={`menu-icon${menuOpen ? ' open' : ''}`} // Fixed template literal
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            tabIndex={0}
            onKeyPress={e => { if (e.key === 'Enter') setMenuOpen(!menuOpen) }}
          >
            <span />
            <span />
            <span />
          </div>
          <ul className={`navlist${menuOpen ? ' show' : ''}`}> {/* Fixed template literal */}
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          </ul>
        </nav>
      </header>

      <section>
        <h1>Welcome to Responsive Webpage</h1>
        <p>This is an example which can adapt to any screen size.</p>
      </section>

      <footer>
        Copyright &copy; 2025. All rights reserved.
      </footer>
    </div>
  )
}