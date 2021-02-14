import React from 'react'
import Link from 'gatsby-link'
import '../styles/mystyle.css'

export default function Nav() {
    return (
      <nav className="navbar">
          <div className="flex">
              <Link to="/" className="brand">Alyajouri</Link>
            <div className="flex">
              <Link to="/blog">Posts</Link>
            </div>
          </div>
      </nav>
    )
  }