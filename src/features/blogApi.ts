import axios from "axios"

export const addBlog = async (formData: FormData) => {
    const response = await axios.post("/api/blogs/add", formData);
    return response.data;
};


export const getAllBlogs = async () => {
    const response = await axios.get("/api/blogs/get");
    return response.data;
}

export const getOneBlog = async (id: any) => {
    const response = await axios.get(`/api/blogs/getOne?id=${id}`);
    return response.data;
}


export const updateBlog = async (formData: FormData) => {
    const response = await axios.put('/api/blogs/update', formData);
    return response.data;
}