import useGetUserIdAndRole from "@/services/useGetUserIdAndRole";
import { NextRequest } from "next/server";

const isAdmin = async (req: NextRequest) => {
    const token = req.cookies.get("token")?.value || "";
    const { role } = await useGetUserIdAndRole(token);

    if (role !== "admin") {
        throw new Error("Unauthorized access, you cann't perform this action!!");
    }

    return role;
}

export default isAdmin;