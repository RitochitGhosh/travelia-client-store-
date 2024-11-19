import getCategory from "@/actions/get-category";
import getDurations from "@/actions/get-durations";
import getPackages from "@/actions/get-packages";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import PackageCard from "@/components/ui/package-card";
import MobileFilters from "./components/mobile-filter";

export const revalidate = 0; // for not storing any cache

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    durationId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const packages = await getPackages({
    categoryId: params.categoryId,
    durationId: searchParams.durationId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const durations = await getDurations();
  const category = await getCategory(params.categoryId);
  //  console.log("===========", category); // passed
  // console.log("==========", sizes); // passed

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} durations={durations} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />

              <Filter valueKey="durationId" name="Durations" data={durations} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
                {
                    packages.length === 0 && <NoResults />
                }
                <div className="grid gid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    {packages.map((item) => (
                        <PackageCard 
                            key={item.id}
                            data={item}
                        />
                    ))}
                </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
