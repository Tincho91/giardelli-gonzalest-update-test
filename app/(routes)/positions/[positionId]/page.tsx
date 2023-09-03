import PositionList from '@/components/position-list'
import Info from '@/components/info';
import getPosition from '@/actions/get-position';
import getPositions from '@/actions/get-positions';
import Container from '@/components/ui/container';

export const revalidate = 0;

interface PositionPageProps {
  params: {
    positionId: string;
  },
}

const PositionPage: React.FC<PositionPageProps> = async ({ 
  params
 }) => {
  const position = await getPosition(params.positionId);
  const suggestedPositions = await getPositions({ 
    areaOfInterestId: position?.areaOfInterest?.id
  });

  if (!position) {
    return null;
  }

  return (
    <div>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={position} isShortDescription={false}/>
            </div>
          </div>
          <hr className="my-10" />
          <PositionList title="Trabajos Relacionados" items={suggestedPositions} />
        </div>
      </Container>
    </div>  
  )
}

export default PositionPage;
