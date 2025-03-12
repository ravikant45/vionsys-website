import { sendCaseStudy } from "@/features/caseStudiesApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

const useSendCaseStudy = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: any) => sendCaseStudy(values),
    onSuccess: (res: any) => {
      queryClient.invalidateQueries({ queryKey: ["allCaseStudies"] });
      message.success(res?.message);
    },
    onError: (err: any) => {
      message.error(err?.response?.data?.error || "An error occurred");
    },
  });

  return { mutate, isPending };
};

export default useSendCaseStudy;
