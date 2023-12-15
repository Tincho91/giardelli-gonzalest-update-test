import Apply from '@/components/apply';
import getPosition from '@/actions/get-position';
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

  if (!position) {
    return null;
  }

  return (
    <div className='pt-[120px] min-h-[85vh] bg-white'>
      <Container>
        <div
          className="group cursor-pointer bg-[#E8E8E8] rounded-xl p-4 space-y-4 w-full flex place-content-between items-center"
        >
          <div>
            <div>
              <p className="font-semibold text-lg uppercase text-customOrange pb-3 ">{position.name}</p>
            </div>
            <div>
              <p className="font-semibold text-customOrange pb-2">{position.company.name}  |   {position.location.name}   |   {position.modality.name}   |   {position.availability.name}</p>
            </div>
            <div>
              <p className="font-semibold text-customBlue">{position.shortDescription}</p>
            </div>
          </div>

          <div className='inline-block align-middle'>
            <Apply data={position} />
          </div>

        </div>


        <div className="py-10">
          <div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <p className='text-customBlue'>
                {position.longDescription}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PositionPage;
