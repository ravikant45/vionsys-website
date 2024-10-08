import { addBlog } from "@/features/blogApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

const useAddBlog = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: (formData: FormData) => addBlog(formData),
        onSuccess: (res: any) => {
            // Invalidate the get all blogs section 
            queryClient.invalidateQueries({
                queryKey: ['allBlogs']
            })
            message.success(res?.message);
        },
        onError: (err: any) => {
            console.log(err);
            message.error(err?.response?.data?.error);
        }
    });

    return {
        mutate,
        isPending
    };
};


export default useAddBlog;