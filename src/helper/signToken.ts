import jwt from "jsonwebtoken";
const signToken = (id: string, role: string) => {
    return jwt.sign({ id, role }, process.env.NEXT_PUBLIC_JWT_SECRET || "", {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

export default signToken;