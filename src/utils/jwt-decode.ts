import { jwtDecode } from "jwt-decode";
interface TokenPayload {
    id: string;
    role: string;
}
export const jwtdecode = (token: string) => {
    if (!token) {
        console.error("token is not a valid or expired");
    }
    const decoded = jwtDecode<TokenPayload>(token);
    if (!decoded) {
        console.error("token is not a valid or expired");
    }
    const { id, role } = decoded;
    return { id, role };
};
