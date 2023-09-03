import { AreaOfInterest } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/areasOfInterest`;

const getAreaOfInterest = async (id: string): Promise<AreaOfInterest> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getAreaOfInterest;
