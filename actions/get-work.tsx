import { Work } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/works`;

const getWork = async (id: string): Promise<Work> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getWork;
