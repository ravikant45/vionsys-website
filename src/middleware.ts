import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === "/login" || path === "/SignUp";
    const protectedPath = path.startsWith("/admin");

    const token = request.cookies.get("token")?.value || "";

    // Redirect authenticated users trying to access public paths to the admin dashboard
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/admin", request.url));
    }

    // Redirect unauthenticated users trying to access protected paths to the SignIn page
    if (protectedPath && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/SignUp", "/login", "/admin/:path*"],
};
