import Container from '@/components/ui/container';
import Billboard from '@/components/ui/billboard';
import PositionCard from '@/components/ui/position-card';
import NoResults from '@/components/ui/no-results';

import getPositions from "@/actions/get-positions";
import getModalities from '@/actions/get-modalities';

import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';
import getAreasOfInterest from '@/actions/get-areasOfInterest';

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
    <div className=""> 
      <Container>
        <h1 className="text-center mb-4 border text-3xl md:text-4xl lg:text-5xl rounded-md p-5 my-5">BÚSQUEDAS ACTIVAS</h1>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters modalities={modalities} areasOfInterest={areasOfInterest} />
            <div className="hidden lg:block">
              <Filter
                valueKey="areaOfInterestId" 
                name="Áreas de Interés"
                data={areasOfInterest}
              />
              <Filter
                valueKey="modalityId" 
                name="Modalidades" 
                data={modalities}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {Positions.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Positions.map((item) => (
                  <PositionCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PositionsPage;
