import { Package } from "@/types";
import NoResults from "@/components/ui/no-results";
import PackageCard from "@/components/ui/package-card";

interface PackageListProps {
    title: string;
    items: Package[];
}
const PackageList: React.FC<PackageListProps> = ({
    title,
    items
}) => {
    return ( 
        <div className="space-y-4 ">
            <h3 className="font-bold text-3xl">{title}</h3>
            {
                items.length === 0 && <NoResults />
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {
                    items.map((item) => (
                        <div
                            key={item.id}
                            className=""
                        >
                            <PackageCard key={item.id} data={item} />
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default PackageList;