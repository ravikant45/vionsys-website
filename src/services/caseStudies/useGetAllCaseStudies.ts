import { getAllCaseStudies } from "@/features/caseStudiesApi"
import { useQuery } from "@tanstack/react-query"

const useGetAllCaseStudies = () => {
    const { data, isPending } = useQuery({
        queryKey: ['allCaseStudies'],
        queryFn: getAllCaseStudies
    });

    return {
        data,
        isPending
    };
};

export default useGetAllCaseStudies;