import { addCaseStudy } from "@/features/caseStudiesApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

const useAddCaseStudy = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: (values: any) => addCaseStudy(values),
        onSuccess: (res: any) => {
            // invalide 
            queryClient.invalidateQueries({
                queryKey: ['allCaseStudies']
            })
            // Show success message 1 second after mutation success
            message.success(res?.message);
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

export default useAddCaseStudy;