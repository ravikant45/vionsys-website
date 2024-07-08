import { updateBlog } from "@/features/blogApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

const useUpdateBlog = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: (formData: FormData) => updateBlog(formData),
        onSuccess: (res: any) => {
            queryClient.invalidateQueries({
                queryKey: ['blog']
            });
            queryClient.invalidateQueries(
                {
                    queryKey: ['allBlogs']
                }
            )
            message.success(res?.message);
        },
        onError: (err: any) => {
            message.error(err?.response?.data?.error);
        }
    });

    return {
        mutate,
        isPending
    };
};

export default useUpdateBlog;