import React from 'react'
import './footer.css'
import sendIcon from '../../Assets/Images/sendIcon.png'
import { Facebook, Instagram, Pinterest } from '@mui/icons-material'
const Footer = () => {
  return (
    <div id="Footer">
      <div className="Email">
        <div className="emailLeft">
          <img src={sendIcon} alt="" />
          <div className='emailText'>
            <h4>Email SignUp</h4>
            <p>Enter a monthly gift card prize draw and jump the queue to enjoy the latest offers by subscribing to our newsletter!</p>
          </div>
        </div>
        <div className="emailRight">
          <input type="text" placeholder='Enter Email Address...' />
          <button>Sign Up</button>
        </div>
      </div>
      <div className="footMenus">
        <div className="footLeft">
          <div className="footCol">
            <ul>
              <h5>Customer Service</h5>
              <li>Contact Us</li>
              <li>Shipping Information</li>
              <li>Returns & Exchanges</li>
              <li>FAQ</li>
              <li>Collaborations</li>
            </ul>
          </div>
          <div className="footCol">
          <ul>
              <h5>Company Info</h5>
              <li>Our Story and Values</li>
              <li>Sustainability</li>
              <li>Terms of Use</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footCol">
          <ul>
              <h5>Get Inspired</h5>
              <li>Design Stories</li>
              <li>Shop the look</li>
              <li>Gift Cards</li>
              
            </ul>
          </div>
        </div>
        <div className="footRight">
          <h2>Connect With Us</h2>
          <span><Facebook style={{fontSize:"50px"}}/> <Instagram style={{fontSize:"50px"}}/> <Pinterest style={{fontSize:"50px"}}/> </span>
          <p>234.3K Followers</p>
        </div>
      </div>
    </div>
  )
}

export default Footer