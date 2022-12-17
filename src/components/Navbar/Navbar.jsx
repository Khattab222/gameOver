
import logo from '../../assets/images/logo.png'
import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar({userdata,logOut}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
  <div className="container">
  <div className="navbar-brand">
  <img className='nav-item logo'  src={logo} alt="" />
    <Link className="navbar-brand" to="">
       Game over</Link>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      {userdata? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="all">All</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Platform
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='/platforms/pc'>Pc</Link></li>
            <li><Link className="dropdown-item" to='/platforms/browser'>browser</Link></li>
         
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            sort-by
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/sort-by/release-date">release-date</Link></li>
            <li><Link className="dropdown-item" to="/sort-by/popularity">popularity</Link></li>
            <li><Link className="dropdown-item" to="/sort-by/alphabetical">alphabetical </Link></li>
            <li><Link className="dropdown-item" to="/sort-by/relevance">relevance</Link></li>
         
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Category
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`category/racing`}>racing</Link></li>
            <li><Link className="dropdown-item" to={`category/shooter`}>shooter</Link></li>
            <li><Link className="dropdown-item" to={`category/strategy`}>strategy</Link></li>
            <li><Link className="dropdown-item" to={`category/sports`}>sports</Link></li>
            <li><Link className="dropdown-item" to={`category/fantasy`}>fantasy</Link></li>
            <li><Link className="dropdown-item" to={`category/action`}>action</Link></li>
            <li><Link className="dropdown-item" to={`category/zombie`}>zombie</Link></li>
            <li><Link className="dropdown-item" to={`category/military`}>military</Link></li>
            <li><Link className="dropdown-item" to={`category/survival`}>survival</Link></li>
            <li><Link className="dropdown-item" to={`category/pvp`}>pvp</Link></li>
            <li><Link className="dropdown-item" to={`category/mmorpg`}>mmorpg</Link></li>
         
          </ul>
        </li>
        
       
      </ul>:null}
      

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       {userdata? null : <> <li className="nav-item">
        <Link className="nav-link" to="login">Log In</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/">Join Free</Link>
        </li></>}
        {userdata?<li className="nav-item">
          <a onClick={logOut} className="nav-link" href='' >Logout</a>
        </li>:null }
        
  
      </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}
