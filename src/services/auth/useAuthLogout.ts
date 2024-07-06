import { logOutApi } from "@/features/authApi"
import { useMutation } from "@tanstack/react-query"
import { message } from "antd";
import { useRouter } from "next/navigation";

const useAuthLogout = () => {
    const router = useRouter();
    const { mutate, isPending } = useMutation({
        mutationFn: () => logOutApi(),
        onSuccess: (res: any) => {
            localStorage.removeItem("token");
            router.push("/login");
            message.success(res?.message);
        },
        onError: (err: any) => {
            message.error(err?.response?.data?.error || "Something went wrong, Please try again later!!");
        }
    });

    return {
        mutate,
        isPending
    }
};


export default useAuthLogout;
