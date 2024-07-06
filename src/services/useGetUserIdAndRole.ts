import jwt from "jsonwebtoken"

const useGetUserIdAndRole = async (token: string) => {
    if (token) {
        const decodedToken = await jwt.verify(
            token,
            process.env.NEXT_PUBLIC_JWT_SECRET || ""
        );

        if (!decodedToken) {
            throw new Error("Token is expired!!");
        }

        const { id, role } = decodedToken as { id: string, role: string };
        return { id, role };
    }

    return { id: undefined, role: undefined };
}

export default useGetUserIdAndRole;