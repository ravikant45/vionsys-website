import { getOneBlog } from "@/features/blogApi";
import { useQuery } from "@tanstack/react-query";

const useGetBlog = (keyWord: string | string[]) => {
  const { data, isPending } = useQuery({
    queryKey: ["blog"],
    queryFn: () => getOneBlog(keyWord),
  });

  return {
    data,
    isPending,
  };
};

export default useGetBlog;
