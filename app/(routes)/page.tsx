import getBillboards from "@/actions/get-billboard";
import getPackages from "@/actions/get-packages";
import Billboard from "@/components/billboard";
import PackageList from "@/components/product-list";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const packages = await getPackages({ isFeatured: true });
  const billboard = await getBillboards("b1854a9c-6b33-4019-a790-1ee5d2ac7eee");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <PackageList title="Featured Products" items={packages} />
      </div>
    </Container>
  );
};

export default HomePage;
