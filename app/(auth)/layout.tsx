"use client";

import Container from "@/components/ui/container";
import FadeInFromTop from "@/components/animations/fadeInFromTop";
import FadeIn from "@/components/animations/fadeIn";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white relative flex-column items-center justify-center w-full min-h-screen">
      <div className="absolute sm:top-[-1%] md:top-[-2%] lg:top-[-10%] xl:top-[-20%] left-0 right-0 z-[0]">
        <img src="/images/positionsVector.png" className="w-full" />
      </div>
      <Container>
        <div className="relative flex flex-col justify-center py-10">
          <FadeInFromTop>
            <p className="text-center text-customBlue mb-4 text-sm md:text-lg lg:text-xl pb-10">
              Nuestra consultora se ocupa de realizar <span className='font-bold'> procesos de selección de personas </span> para ocupar mandos medios y gerenciales dentro de la jerarquía de distintas entidades tales como, gestor organizacional, profesional en gestión, CEO, gerente, director y project manager, entre otros.
              <br />
              <br />
              <span className='font-bold'> Si tu trayectoria es acorde a dichos puestos, te invitamos a cargar tu CV. </span>
            </p>
          </FadeInFromTop>
          <FadeIn>
            <div className="flex items-center justify-center">
              {children}
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
};

