"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';
import Container from './ui/container';

const Clients = () => {

  const clientImages = [
    "/images/clients/aguero.png",
    "/images/clients/aire srl.webp",
    "/images/clients/antares.png",
    "/images/clients/cabrales.png",
    "/images/clients/consca.png",
    "/images/clients/constructora del mar.png",
    "/images/clients/cutaneo.png",
    "/images/clients/del cerro patagonia.png",
    "/images/clients/electroterma.jpg",
    "/images/clients/footer-logo-redbox-range.png",
    "/images/clients/fotos nino.png",
    "/images/clients/frio polar.jpg",
    "/images/clients/granjaLaPiedra.png",
    "/images/clients/hanna.png",
    "/images/clients/logo kahl.png",
    "/images/clients/LOGOISOTIPO CONSCA+.webp",
    "/images/clients/Mc Cain.png",
    "/images/clients/municipalidad tandil.png",
    "/images/clients/nuevologo-tecnioptica.png",
    "/images/clients/Ogham.png",
    "/images/clients/pepsico.png",
    "/images/clients/pizzolo.png",
  ];

  return (
    <div id='clientes' className="client-carousel bg-customGrey py-10">
        <p className="text-[8vw] md:text-[4.4vw] xl:text-[60px] font-extrabold mt-10 pb-16 text-customBlue text-center">ALGUNOS DE NUESTROS CLIENTES</p>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          spaceBetween={50}
          loop={true}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
          breakpoints={{
            576: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {clientImages.map((imageSrc, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center w-full h-full place-content-center">
              <img src={imageSrc} alt={`client-${index}`} className="client-image w-full h-full object-center object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Clients;