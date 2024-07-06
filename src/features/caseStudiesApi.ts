import axios from "axios"

export const addCaseStudy = async (formData: FormData) => {
    const response = await axios.post("/api/caseStudies/add", formData);
    return response.data;
}

export const getAllCaseStudies = async () => {
    const response = await axios.get("/api/caseStudies/getAll");
    return response.data;
}

export const getCaseStudy = async (id: string) => {
    const response = await axios.get(`/api/caseStudies/get?id=${id}`);
    return response.data;
}