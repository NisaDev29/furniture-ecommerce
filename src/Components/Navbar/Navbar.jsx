import React from 'react'
import './navbar.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Navbar = () => {
  return (
    <div id="Navbar">
      <nav className="navbarWrapper">
        <div className="navLeft">
          <h1>HOME DECOR</h1>
        </div>
        <div className="navCenter">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>New</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className='navRight'>
          <span><PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon></span>
          <span><FavoriteBorderOutlinedIcon/></span>
          <span><ShoppingCartOutlinedIcon/></span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar