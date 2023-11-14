"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  return (
    <div>
      <Swiper
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 300000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className='hero-swiper mt-[64px]'
      >
        {[
          { 
            large: '/images/herobanner1.png', 
            small: '/images/herobanner1_small.png', 
            text: 'El ',
            highlightedText: 'pensamiento',
            restText: ' es el motor del cambio'
          },
          { 
            large: '/images/heroBanner2.png', 
            small: '/images/heroBanner2_small.png', 
            text: 'Consultoría ',
            highlightedText: 'profesional',
            restText: ' para organizaciones'
          },
          { 
            large: '/images/heroBanner3.png', 
            small: '/images/heroBanner3_small.png', 
            text: 'Procesos de transformación gestados por sus ',
            highlightedText: 'protagonistas',
            restText: ''
          },
        ].map((slide, index) => (
          <SwiperSlide key={index}
            style={{
              display: 'flex',
              height: "100%",
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              position: 'relative'
            }}
          >
            <div 
              className="sm:hidden absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.small}')` }}
            >
              {/* Small screen image */}
            </div>
            <div 
              className="hidden sm:block absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.large}')` }}
            >
              {/* Large screen image */}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[30%] z-10 bg-gradient-to-t from-[#143241] to-transparent">
              {/* Gradient overlay */}
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-11/12 text-center">
              <h1 className="text-white font-extrabold text-3xl sm:text-6xl md:text-7xl">
                {slide.text}<span className="hero-text-border inline-block">{slide.highlightedText}</span>{slide.restText}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero;
