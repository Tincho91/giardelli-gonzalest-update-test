import { Technology } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/technologies`;

const getTechnologies = async (): Promise<Technology[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getTechnologies;
