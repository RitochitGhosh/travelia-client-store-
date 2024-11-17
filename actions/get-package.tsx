import { Package } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/packages`;

const getPackage = async (id: string): Promise<Package> => {
  try {
    const res = await fetch(`${URL}/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch package with ID: ${id}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching package:", error);
    throw error;
  }
};

export default getPackage;


// http://localhost:3000/api/7dbd39c1-8c29-476d-b93c-3602c363921d/packages/99e1dbd7-8fc8-4fda-aecc-d49b9b842474