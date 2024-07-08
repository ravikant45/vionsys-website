import { getCaseStudy } from "@/features/caseStudiesApi"
import { useQuery } from "@tanstack/react-query"

const useGetCaseStudy = (id: any) => {
    const { data, isPending } = useQuery({
        queryKey: ['caseStudy'],
        queryFn: () => getCaseStudy(id)
    });

    return {
        data,
        isPending
    };
};

export default useGetCaseStudy;