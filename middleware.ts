import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/:path*', '/cv/:path*', '/positions/:path*' ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
