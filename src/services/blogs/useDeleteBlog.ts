import { deleteBlog } from "@/features/blogApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { message } from "antd";

const useDeleteBlog = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: (id: string) => deleteBlog(id),
        onSuccess: (res: any) => {
            // Invalidate the get all blogs section
            queryClient.invalidateQueries({
                queryKey: ['allBlogs']
            });
            message.success(res?.message);
        },
        onError: (res: any) => {
            message.error(res?.response?.data?.error);
        }
    });

    return {
        mutate,
        isPending
    }
};

export default useDeleteBlog;