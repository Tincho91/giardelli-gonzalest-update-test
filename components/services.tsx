"use client";
import React from 'react';
import Container from './ui/container';
import CustomAccordion from './ui/customAccordion';

const Services: React.FC = () => {
  const items = [
    {
      title: 'Desarrollo Frontend',
      iconInactive: '/images/1.png',
      iconActive: '/images/1n.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Desarrollo Backend',
      iconInactive: '/images/2.png',
      iconActive: '/images/2n.png',
      content: 'Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
      title: 'Base de Datos',
      iconInactive: '/images/3.png',
      iconActive: '/images/3n.png',
      content: 'Curabitur aliquet quam id dui posuere blandit.'
    },
    {
      title: 'Desarrollo Frontend',
      iconInactive: '/images/4.png',
      iconActive: '/images/4n.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Desarrollo Backend',
      iconInactive: '/images/5.png',
      iconActive: '/images/5n.png',
      content: 'Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
      title: 'Base de Datos',
      iconInactive: '/images/6.png',
      iconActive: '/images/6n.png',
      content: 'Curabitur aliquet quam id dui posuere blandit.'
    },
    {
      title: 'Base de Datos',
      iconInactive: '/images/7.png',
      iconActive: '/images/7n.png',
      content: 'Curabitur aliquet quam id dui posuere blandit.'
    }
  ];

  return (
    <div className='bg-customBlue relative' id="servicios">
      <Container>
        <div className="flex justify-center items-center pt-10">
          <div className="bg-white w-full flex justify-center">
            <p className="font-[900] text-[7vw] md:text-[4vw] xl:text-[55px] text-customBlue p-2">
              ¿QUÉ HACEMOS?
            </p>
          </div>
        </div>

        <CustomAccordion items={items} />
      </Container>
    </div>
  );
};

export default Services;
