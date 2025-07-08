import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLoggedInUser } from "./lib/actions/user.actions";

// This function can be marked `async` if using `await` inside
const authRoutes = ["/sign-in", "/sign-up", "/sentry-example-page"];
export async function middleware(request: NextRequest) {
  const loggedInUser = await getLoggedInUser();

  const isAuthRoute = authRoutes.includes(request.nextUrl.pathname);
  if (!loggedInUser && !isAuthRoute) {
    // If the user is not logged in and trying to access a protected route, redirect to sign-in
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  if (loggedInUser && isAuthRoute) {
    // If the user is logged in and trying to access an auth route, redirect to home
    return NextResponse.redirect(new URL("/", request.url));
  }
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|icons|favicon.ico).*)",
  ],
};
