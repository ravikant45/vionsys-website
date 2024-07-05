import axios from "axios"

export const addBlog = async (formData: FormData) => {
    const response = await axios.post("/api/blogs/add", formData);
    return response.data;
};


