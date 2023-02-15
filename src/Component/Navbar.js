import React from 'react'
import search from '../asset/img/search.png'
import userpic from '../asset/img/user.png'
import bellicon from '../asset/img/bellicon.png'
import line from '../asset/img/Line 129.png'
import { Link} from 'react-router-dom'
// import { Link,NavLink } from 'react-router-dom'

import '../asset/css/Navbar.css'
export default function Navbar() {
  return (
   <> 
    <nav className="navbar navbar-expand-lg mainnavbar" >
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbarleftcontent'>
        <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link  to="/dashboard" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link  to="/leaderboard"  className="nav-link" href="/leaderboard">Leaderboards</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/browse ">Community</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="amkmm">Tools</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/community">Browse</Link>
        </li>
      </ul>
    <div className='d-flex align-items-center'>
    <ul  className="navbar-nav me-auto mb-2 mb-lg-0" id='navbarrightbutton'>
      <li className="nav-item me-3">
          <a className="nav-link active" aria-current="page" href="#">Byu/Sell</a>
        </li>
        <li className="nav-item me-3">
          <a className="nav-link active" aria-current="page" href="#">My Store</a>
        </li>
      </ul>
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0" id='navprofile-info'>
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><img src={search} alt="" /></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#"><img src={bellicon} alt="" /></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#"><img src={line} alt="" /></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#"><img src={userpic} alt="" /></a>
        </li>
      </ul>
    </div>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
   </>
  )
}
