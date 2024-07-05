import { addBlog } from "@/features/blogApi";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";

const useAddBlog = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: (formData: FormData) => addBlog(formData),
        onSuccess: (res: any) => {
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


export default useAddBlog;