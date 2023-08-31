import React from 'react'
import './features.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const Features = () => {
  return (
    <div id="Features">
        <div className="featuresWrapper">
            <div className="featCard">
                <LocalShippingIcon className='featIcon'/> Only genuine and original design
            </div>
            <div className="featCard">
            <LocalShippingIcon className='featIcon'/> Fast and safe delivery

            </div>
            <div className="featCard">
            <LocalShippingIcon className='featIcon' /> Worldwide shipping to over 180 countries

            </div>
        </div>
    </div>
  )
}

export default Features