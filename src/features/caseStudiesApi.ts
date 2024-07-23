import axios from "axios";

export const addCaseStudy = async (formData: FormData) => {
  const response = await axios.post("/api/caseStudies/add", formData);
  return response.data;
};

export const getAllCaseStudies = async () => {
  const response = await axios.get("/api/caseStudies/getAll");
  return response.data;
};

export const getCaseStudy = async (keyWord: string | string[]) => {
  const response = await axios.get(`/api/caseStudies/get?keyWord=${keyWord}`);
  return response.data;
};

export const updateCaseStudy = async (formData: FormData) => {
  const response = await axios.put(`/api/caseStudies/update`, formData);
  return response.data;
};

export const deleteCaseStudy = async (id: string) => {
  const response = await axios.delete(`/api/caseStudies/delete?id=${id}`);
  return response.data;
};
