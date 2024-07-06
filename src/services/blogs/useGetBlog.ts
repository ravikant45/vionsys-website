import { getOneBlog } from "@/features/blogApi";
import { useQuery } from "@tanstack/react-query";

const useGetBlog = (id: any) => {
    const { data, isPending } = useQuery({
        queryKey: ['blog'],
        queryFn: () => getOneBlog(id)
    });

    return {
        data,
        isPending
    };
};

export default useGetBlog;