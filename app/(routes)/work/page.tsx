import Container from '@/components/ui/container';
import Billboard from '@/components/ui/billboard';
import WorkCard from '@/components/ui/work-card';
import NoResults from '@/components/ui/no-results';

import getWorks from "@/actions/get-works";
import getModalities from '@/actions/get-modalities';
import getTechnologies from '@/actions/get-technologies';

import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';
import getCategories from '@/actions/get-categories';

export const revalidate = 0;

interface WorksPageProps {
  searchParams: {
    categotyId: string;
    technologyId: string;
    modalityId: string;
  }
}

const WorksPage: React.FC<WorksPageProps> = async ({ 
  searchParams
}) => {
  const works = await getWorks({
    categoryId: searchParams.categotyId,
    technologyId: searchParams.technologyId,
    modalityId: searchParams.modalityId,
  });

  const categories = await getCategories();
  const modalities = await getModalities();
  const technologies = await getTechnologies();

  return (
    <div className="bg-white"> 
      <Container>
        <Billboard />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters modalities={modalities} technologies={technologies} categories={categories} />
            <div className="hidden lg:block">
              <Filter
                valueKey="categoryId" 
                name="Categorías"
                data={categories}
              />
              <Filter
                valueKey="modalityId" 
                name="Modalidades" 
                data={modalities}
              />
              <Filter 
                valueKey="technologyId" 
                name="Tecnologías"
                data={technologies}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {works.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {works.map((item) => (
                  <WorkCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorksPage;
