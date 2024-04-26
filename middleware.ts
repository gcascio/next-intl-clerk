import createMiddleware from 'next-intl/middleware';
import {
  clerkMiddleware,
  createRouteMatcher,
} from '@clerk/nextjs/server';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'de'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});

const isProtectedRoute = createRouteMatcher([
  '/:locale/dashboard(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();

  return intlMiddleware(req);
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*'],
};