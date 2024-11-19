import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
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

export default getCategory;