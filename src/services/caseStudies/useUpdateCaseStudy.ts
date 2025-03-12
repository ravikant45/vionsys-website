import { updateCaseStudy } from "@/features/caseStudiesApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

const useUpdateCaseStudy = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (formData: any) => updateCaseStudy(formData),
    onSuccess: (res: any) => {
      // Invalidate the get all case studies section
      queryClient.invalidateQueries({
        queryKey: ["allCaseStudies"],
      });

      // Invalidate individual case study
      queryClient.invalidateQueries({
        queryKey: ["caseStudy"],
      });
      message.success(res?.message);
    },
    onError: (err: any) => {
      message.error(err?.response?.data?.error);
    },
  });

  return {
    mutate,
    isPending,
  };
};

export default useUpdateCaseStudy;
