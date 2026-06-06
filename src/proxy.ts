import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/', '/shop(.*)', '/product(.*)', '/about', '/blog', '/contact', '/pricing', '/studio(.*)']);

const clerk = clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const proxy = clerk;
export default clerk;

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|musl)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
