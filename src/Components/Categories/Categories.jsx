import React from 'react'
import './categories.css'
//Do shtohet teksti 
const Categories = () => {
  return (
    <div id="Categories">
      <div className="catWrapper">
        <div className="catLeft">
          <div className="catLeftTop">
            <img className='catImg' src="https://images.pexels.com/photos/4917122/pexels-photo-4917122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="catTextBig">
              <h2>HOMEWARE</h2>
              <p>Best Deals</p>
            </div>
          </div>
          <div className="catLeftBottom">
          <div className="catLeftBottom1">
          <img className='catImg' src="https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="catText">
              <h3>HOMEWARE</h3>
              <p>Best Deals</p>
            </div>
          </div>
          <div className="catLeftBottom2">
          <img className='catImg' src="https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="catText">
              <h3>HOMEWARE</h3>
              <p>Best Deals</p>
            </div>
          </div>
          </div>
        </div>
        <div className="catRight">
          <div className="catRightTop">
          <img className='catImg' src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="catText">
              <h3>HOMEWARE</h3>
              <p>Best Deals</p>
            </div>
          </div>
          <div className="catRightBottom">
          <img className='catImg' src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="catText">
              <h3>HOMEWARE</h3>
              <p>Best Deals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories