import getPackage from "@/actions/get-package";
import getPackages from "@/actions/get-packages";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import PackageList from "@/components/product-list";
import Container from "@/components/ui/container";

interface PackagePageProps {
  params: {
    packageId: string;
  };
}
const PackagePage: React.FC<PackagePageProps> = async ({ params }) => {
  const packagee = await getPackage(params.packageId);
//   console.log("=========", packagee.category.name); // passed 
  
  const categoryId = packagee?.category?.id;
//   console.log("=======++++", categoryId); // passed 
  

  const suggestedProducts = await getPackages({ categoryId });

  
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={packagee.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 ">
              <Info data={packagee} />
            </div>
          </div>
          <hr className="my-10" />
          <PackageList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default PackagePage;
