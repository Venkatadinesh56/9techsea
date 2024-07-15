import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Link to="/"></Link><br></br>
        <Link to="/About"></Link><br></br>
        <Link to="/Services"></Link>
        <Link to="/Contact"></Link>

        
    </div>
  )
}

export default Navbar
