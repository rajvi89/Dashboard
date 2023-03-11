import React from 'react'
import './navbar.css'
import './main.css';

const Navbar = () => {
  return (
    <div className='navbar-div text-black-50'>
        <nav className="navbar navbar-expand-lg  py-3">
  <div className="container-fluid">
    <a className="navbar-brand text-dark" href="/" >Dashboard</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/weather">Weather App</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/financial">News Feed</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/user">User Profile</a>
        </li>
       
      </ul>
      <span className='icon'>i</span>
     
    </div>
  </div>
</nav>

      
    </div>
  )
}

export default Navbar
