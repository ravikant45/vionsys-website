import { signInApi } from "@/features/authApi";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";

const useAuthSignin = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: (values: any) => signInApi(values),
        onSuccess: (res: any) => {
            message.success(res?.message);
            localStorage.setItem("token", res?.token || "");
        },
        onError: (err: any) => {
            message.error(err?.response?.data?.error);
        }
    });

    return {
        mutate,
        isPending
    }
};

export default useAuthSignin;