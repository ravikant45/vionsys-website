import axios from "axios";

export const signInApi = async (values: any) => {
    const response = await axios.post("/api/auth/signin", values);
    return response.data;
}

export const signUpApi = async (values: any) => {
    const response = await axios.post("/api/auth/signup", values);
    return response.data;
}

export const logOutApi = async () => {
    const response = await axios.post("/api/auth/logout");
    return response.data;
}