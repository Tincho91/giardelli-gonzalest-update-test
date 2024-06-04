"use client";
import React from 'react';
import Container from './ui/container';
import CustomAccordion from './ui/customAccordion';

const Services: React.FC = () => {
  const items = [
    {
      title: 'Gestionamos procesos de cambio organizacional',
      iconInactive: '/images/1.png',
      iconActive: '/images/1n.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Facilitamos el traspaso generacional en empresas familiares',
      iconInactive: '/images/2.png',
      iconActive: '/images/2n.png',
      content: 'Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
      title: 'Intervenimos para la mejora de conflictos laborales',
      iconInactive: '/images/3.png',
      iconActive: '/images/3n.png',
      content: 'Curabitur aliquet quam id dui posuere blandit.'
    },
    {
      title: 'Construimos y desarrollamos áreas de recursos humanos',
      iconInactive: '/images/4.png',
      iconActive: '/images/4n.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Seleccionamos mandos medios y cargos gerenciales',
      iconInactive: '/images/5.png',
      iconActive: '/images/5n.png',
      content: 'Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
      title: 'Realizamos capacitaciones para gestar transformaciones',
      iconInactive: '/images/6.png',
      iconActive: '/images/6n.png',
      content: 'Curabitur aliquet quam id dui posuere blandit.'
    },
    {
      title: 'Desarrollamos nuevas dinámicas en los sistemas de comercialización',
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
