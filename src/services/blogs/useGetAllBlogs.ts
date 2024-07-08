import { getAllBlogs } from "@/features/blogApi"
import { useQuery } from "@tanstack/react-query"

const useGetAllBlogs = () => {
    const { data, isPending } = useQuery({
        queryKey: ['allBlogs'],
        queryFn: getAllBlogs
    });

    return {
        data,
        isPending
    };
};

export default useGetAllBlogs;