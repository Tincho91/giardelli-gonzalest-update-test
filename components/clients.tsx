"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';
import Container from './ui/container';

const Clients = () => {

  return (
    <div id='clientes' className="client-carousel bg-customGrey py-10">
      <p className="text-4xl font-extrabold my-10 text-customBlue text-center">ALGUNOS DE NUESTROS CLIENTES</p>

      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        spaceBetween={50}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="flex items-center justify-center w-full h-full place-content-center">
          <img src="/images/clients/aguero.png" alt="aguero" className="client-image w-full h-full" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full h-full place-content-center">
          <img src="/images/clients/aire srl.webp" alt="aire srl" className="client-image items-center justify-center h-full" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/antares.png" alt="antares" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/cabrales.png" alt="cabrales" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/consca.png" alt="consca" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/constructora del mar.png" alt="constructora del mar" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/cutaneo.png" alt="cutaneo" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/del cerro patagonia.png" alt="del cerro patagonia" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/electroterma.jpg" alt="electroterma" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/footer-logo-redbox-range.png" alt="footer-logo-redbox-range" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/fotos nino.png" alt="fotos nino" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/frio polar.jpg" alt="frio polar" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/granjaLaPiedra.png" alt="granjaLaPiedra" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/hanna.png" alt="hanna" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/logo kahl.png" alt="logo kahl" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/LOGOISOTIPO CONSCA+.webp" alt="LOGOISOTIPO CONSCA+" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/Mc Cain.png" alt="Mc Cain" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/municipalidad tandil.png" alt="municipalidad tandil" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/nuevologo-tecnioptica.png" alt="nuevologo-tecnioptica" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/Ogham.png" alt="Ogham" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/pepsico.png" alt="pepsico" className="client-image" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/images/clients/pizzolo.png" alt="pizzolo" className="client-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Clients;