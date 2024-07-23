import { getCaseStudy } from "@/features/caseStudiesApi";
import { useQuery } from "@tanstack/react-query";

const useGetCaseStudy = (keyWord: string | string[]) => {
  const { data, isPending } = useQuery({
    queryKey: ["caseStudy"],
    queryFn: () => getCaseStudy(keyWord),
  });

  return {
    data,
    isPending,
  };
};

export default useGetCaseStudy;
