import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (id: string): Promise<Billboard> => {
  try {
    const res = await fetch(`${URL}/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch billboard with ID: ${id}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching billboard:", error);
    throw error;
  }
};

export default getBillboards;
