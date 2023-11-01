"use client";

import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  const heroRef = useRef(null);
  const [slideHeight, setSlideHeight] = useState('100vh');
  const [marginTop, setMarginTop] = useState('0px');

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar && heroRef.current) {
      // @ts-ignore
      const newHeight = window.innerHeight - navbar.offsetHeight - 20;
      setSlideHeight(`${newHeight}px`);
      // @ts-ignore
      setMarginTop(`${navbar.offsetHeight}px`);
    }
  }, []);

  return (
    <div ref={heroRef} style={{ marginTop: marginTop }}>
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
      >
        <SwiperSlide
          style={{
            backgroundImage: "url('/images/heroBanner1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: slideHeight,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            position: 'relative'
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-[30%] z-10 bg-gradient-to-t from-[#143241] to-transparent">
            {/* Gradient overlay */}
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-11/12 text-center">
            <h1 className="text-white font-extrabold text-3xl sm:text-6xl md:text-7xl">
              El <span className="hero-text-border inline-block">pensamiento</span> es el motor del cambio
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url('/images/heroBanner2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: slideHeight,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            position: 'relative'
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-[30%] z-10 bg-gradient-to-t from-[#143241] to-transparent">
            {/* Gradient overlay */}
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-11/12 text-center">
            <h1 className="text-white font-extrabold text-3xl sm:text-6xl md:text-7xl">
              Consultoría <span className="hero-text-border inline-block">profesional</span> para organizaciones
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url('/images/heroBanner3.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: slideHeight,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            position: 'relative'
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-[30%] z-10 bg-gradient-to-t from-[#143241] to-transparent">
            {/* Gradient overlay */}
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-11/12 text-center">
            <h1 className="text-white font-extrabold text-3xl sm:text-6xl md:text-7xl">
              Procesos de transformación gestados por sus <span className="hero-text-border inline-block">protagonistas</span>
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero;
