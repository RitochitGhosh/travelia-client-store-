import { Package } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/packages`;

interface Query {
  categoryId?: string;
  durationId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getPackages = async (query: Query): Promise<Package[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isFeatured: query.isFeatured,
      categoryId: query.categoryId,
      durationId: query.durationId,
      sizeId: query.sizeId,
    },
  });
  console.log("Fetching packages from URL:", url);
  const res = await fetch(url);
  const data = await res.json();
  console.log("Fetched packages:", data);
  return data;
};

export default getPackages;
