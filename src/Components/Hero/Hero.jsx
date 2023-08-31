import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <div id="Hero">
      <div className="heroWrapper">
        <div className="heroLeft">
          <img src="https://images.pexels.com/photos/5825575/pexels-photo-5825575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="hlText">
            <sub>ALL PRODUCTS</sub>
            <h2>HOUSE DECOR SALE </h2>
            <p>25% DISCOUNT</p>
          </div>
        </div>
        <div className="heroRight">
          <div className="heroTop">
            <img src="https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="hrText">
            <sub>ALL PRODUCTS</sub>
            <h2>HOUSE DECOR SALE </h2>
            <p>25% DISCOUNT</p>
          </div>
          </div>
          <div className="heroBottom">
            <img src="https://images.pexels.com/photos/7193649/pexels-photo-7193649.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="hrText">
            <sub>ALL PRODUCTS</sub>
            <h2>HOUSE DECOR SALE </h2>
            <p>25% DISCOUNT</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero