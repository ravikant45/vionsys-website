import { useQuery } from "@tanstack/react-query";
import { getStatApi } from "@/features/authApi";

const useGetStat = () => {
  const { data: fetchStat, isPending } = useQuery({
    queryKey: ["stat"],
    queryFn: getStatApi,
  });
  return {
    fetchStat,
    isPending,
  };
};

export default useGetStat;
