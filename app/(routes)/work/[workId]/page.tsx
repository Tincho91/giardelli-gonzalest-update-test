import WorkList from '@/components/work-list'
import Info from '@/components/info';
import getWork from '@/actions/get-work';
import getWorks from '@/actions/get-works';
import Container from '@/components/ui/container';

export const revalidate = 0;

interface WorkPageProps {
  params: {
    workId: string;
  },
}

const WorkPage: React.FC<WorkPageProps> = async ({ 
  params
 }) => {
  const work = await getWork(params.workId);
  const suggestedWorks = await getWorks({ 
    categoryId: work?.category?.id
  });

  if (!work) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={work} />
            </div>
          </div>
          <hr className="my-10" />
          <WorkList title="Trabajos Relacionados" items={suggestedWorks} />
        </div>
      </Container>
    </div>  
  )
}

export default WorkPage;
