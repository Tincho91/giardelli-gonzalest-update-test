import Apply from '@/components/apply';
import getPosition from '@/actions/get-position';
import Container from '@/components/ui/container';
import ReactMarkdown from 'react-markdown';

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
        <div className="group cursor-pointer bg-[#E8E8E8] rounded-xl p-4 space-y-4 w-full flex flex-col sm:flex-row items-center h-full">
        <div
          className="group cursor-pointer bg-[#E8E8E8] rounded-xl p-4 space-y-4 w-full overflow-hidden flex flex-col transition-all duration-300"
        >
          <div>
            <p className="font-semibold text-lg uppercase text-customOrange e pb-3 ">{position.name}</p>
          </div>
          <div>
            <p className="font-semibold text-customOrange pb-2">{position.company.name}  |   {position.location.name}   |   {position.modality.name}   |   {position.availability.name}</p>
          </div>
          <div>
            <p className="font-semibold text-customBlue truncate">{position.shortDescription}</p>
          </div>
        </div>

          <div className="inline-block items-center sm:ml-auto">
            <Apply data={position} />
          </div>
        </div>


        


        <div className="py-10">
          <div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <p className='text-customBlue'>
                <ReactMarkdown>{position.longDescription}</ReactMarkdown>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PositionPage;
