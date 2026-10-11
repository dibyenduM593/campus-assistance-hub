import React from "react"

// Simple functional component for the top navigation bar.
// It just displays branding - it doesn't need its own state,
// so a function component is enough here.
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">🎓</span>
        <div>
          <h1>VIT Vellore</h1>
          <p>Campus Assistance Hub</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
