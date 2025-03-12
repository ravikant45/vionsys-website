import cloudinaryUpload from "@/helper/cloudinaryUpload";
import { fileToBase64 } from "@/utils/quicker";
import axios from "axios";

export const addCaseStudy = async (values: any) => {
  try {
    const { secure_url: image_url } = await cloudinaryUpload(
      await fileToBase64(values?.image[0]?.originFileObj),
      "vionsysCaseStudies"
    );
    const { secure_url: imageMid_url } = await cloudinaryUpload(
      await fileToBase64(values?.imageMid[0]?.originFileObj),
      "vionsysCaseStudies"
    );
    const { secure_url: caseStudyFile_url } = await cloudinaryUpload(
      await fileToBase64(values?.caseStudyFile[0]?.originFileObj),
      "vionsysCaseStudies"
    );

    const response = await axios.post("/api/caseStudies/add", {
      ...values,
      image: image_url,
      imageMid: imageMid_url,
      caseStudyFile: caseStudyFile_url,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllCaseStudies = async () => {
  const response = await axios.get("/api/caseStudies/getAll");
  return response.data;
};

export const getCaseStudy = async (keyWord: string | string[]) => {
  const response = await axios.get(`/api/caseStudies/get?keyWord=${keyWord}`);
  return response.data;
};

export const updateCaseStudy = async (values: any) => {
  if (values.image) {
    const { secure_url: image_url } = await cloudinaryUpload(
      await fileToBase64(values?.image[0]?.originFileObj),
      "vionsysCaseStudies"
    );
    values.image = image_url;
  }
  if (values.imageMid) {
    const { secure_url: imageMid_url } = await cloudinaryUpload(
      await fileToBase64(values?.imageMid[0]?.originFileObj),
      "vionsysCaseStudies"
    );
    values.imageMid = imageMid_url;
  }
  if (values.caseStudyFile) {
    const { secure_url: caseStudyFile_url } = await cloudinaryUpload(
      await fileToBase64(values?.caseStudyFile[0]?.originFileObj),
      "vionsysCaseStudies"
    );
    values.caseStudyFile = caseStudyFile_url;
  }
  const response = await axios.put(`/api/caseStudies/update`, values);
  return response.data;
};

export const deleteCaseStudy = async (id: string) => {
  const response = await axios.delete(`/api/caseStudies/delete?id=${id}`);
  return response.data;
};

export const sendCaseStudy = async (values: any) => {
  const response = await axios.post(`/api/email/caseStudy`, values);
  return response.data;
};
