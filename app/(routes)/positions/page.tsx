import Container from '@/components/ui/container';

import getPositions from "@/actions/get-positions";
import getModalities from '@/actions/get-modalities';
import getAreasOfInterest from '@/actions/get-areasOfInterest';

import FilterComponent from './components/filterComponent';


export const revalidate = 0;

interface PositionsPageProps {
  searchParams: {
    areaOfInterestId: string;
    modalityId: string;
  }
}

const PositionsPage: React.FC<PositionsPageProps> = async ({
  searchParams
}) => {

  const Positions = await getPositions({
    areaOfInterestId: searchParams.areaOfInterestId,
    modalityId: searchParams.modalityId,
  });

  const areasOfInterest = await getAreasOfInterest();
  const modalities = await getModalities();

  return (
    <div className="bg-white pt-[75px] relative min-h-full">
      <div className="absolute top-[60px] sm:top-[-1%] md:top-[-2%] lg:top-[-10%] xl:top-[-20%] left-0 right-0 z-[0]">
        <img src="/images/positionsVector.png" className="w-full" />
      </div>
      <div className='z-40 relative'>
        <Container>
          <p className="text-center text-4xl font-extrabold my-10 text-customBlue">BÚSQUEDAS ACTIVAS</p>
          <div className="px-4 sm:px-6 lg:px-8 pb-24">
            <div>
              <FilterComponent initialPositions={Positions} areasOfInterest={areasOfInterest} modalities={modalities} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PositionsPage;
