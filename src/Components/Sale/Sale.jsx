import React from 'react'
import './sale.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css/bundle';
const Sale = () => {
  return (
    <div id="NewProducts">
        <div className="npWrapper">
            <h4>NEW ARRIVALS</h4>
            <div className="npCarousel">
            <Swiper
      spaceBetween={20}
      slidesPerView={4}
      modules={[Navigation, A11y]}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://media.fds.fi/product_image/500/433Fredericia.jpg" alt="" />
        <div className="swiperText">
          <h4>Table</h4>
          <p>$40</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://media.fds.fi/product_image/500/870Artek_iso19_TH.jpg" alt="" />
      <div className="swiperText">
          <h4>Table</h4>
          <p>$40</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://media.fds.fi/product_image/500/41SantaCole_iso_HV.jpg" alt="" />
        <div className="swiperText">
          <h4>Table</h4>
          <p>$40</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://media.fds.fi/product_image/500/639AndTradition_iso19_TH.jpg" alt="" />
        <div className="swiperText">
          <h4>Table</h4>
          <p>$40</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://media.fds.fi/product_image/500/78_AndTradition_21_TH.jpg" alt="" />
        <div className="swiperText">
          <h4>Table</h4>
          <p>$40</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://media.fds.fi/product_image/500/6_Lundia_21_th.jpg" alt="" />
        <div className="swiperText">
          <h4>Table</h4>
          <p>$40</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://media.fds.fi/product_image/500/59Vitranew_iso_HV.jpg" alt="" />
        <div className="swiperText">
          <h4>Table</h4>
          <p>$40</p>
        </div>
      </SwiperSlide>
    </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Sale