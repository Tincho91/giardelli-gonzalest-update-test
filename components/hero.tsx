"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

import FadeInFromTop from './animations/fadeInFromTop';

const Hero = () => {
  return (
    <div className='bg-[#143241]'>
      <div className='md:py-7 xl:px-0 md:px-12 relative max-w-[1200px] mx-auto'>
        <div className="relative">
          <Swiper
            effect={'fade'}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            modules={[EffectFade, Autoplay, Pagination]}
            className='hero-swiper'
          >
            {[
              {
                large: '/images/banner1.png',
                small: '/images/banner1s.png',
                text: 'El ',
                highlightedText: 'pensamiento',
                restText: ' es el motor del cambio',
                position: 'bottom-10 left-0 md:top-10',
                translate: '-translate-x-0 translate-y-0'
              },
              {
                large: '/images/banner2.png',
                small: '/images/banner2s.png',
                text: 'Consultoría ',
                highlightedText: 'profesional',
                restText: ' para organizaciones',
                position: 'bottom-0 left-1/2',
                translate: '-translate-x-1/2 translate-y-0'
              },
              {
                large: '/images/banner3.png',
                small: '/images/banner3s.png',
                text: 'Procesos de transformación gestados por sus ',
                highlightedText: 'protagonistas',
                restText: '',
                position: 'bottom-10 right-0',
                translate: '-translate-x-0 translate-y-0'
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
                  className="sm:hidden absolute inset-0 bg-cover"
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

                <div className={`absolute ${slide.position} ${slide.translate} z-20 w-11/12 text-center md:text-left`}>
                  <FadeInFromTop>
                    <h1 className={`text-white text-3xl sm:text-4xl md:text-5xl bg-[#143241] p-3`}>
                      {slide.text}<span className="italic font-[700] inline-block">{slide.highlightedText}</span>{slide.restText}
                    </h1>
                  </FadeInFromTop>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination"></div> {/* Contenedor de la paginación */}
        </div>
      </div>
    </div>
  )
}

export default Hero;
