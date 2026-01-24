import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CSRF_COOKIE_NAME = "__csrf";
const CSRF_TOKEN_LENGTH = 32;

function generateCsrfToken(): string {
  const array = new Uint8Array(CSRF_TOKEN_LENGTH);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function middleware(request: NextRequest) {
  // Generate a random nonce for CSP
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // Build CSP header with nonce
  const cspHeader = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://cdn-cookieyes.com https://cookieyes.com`,
    "style-src 'self' 'unsafe-inline'", // Tailwind requires unsafe-inline for styles
    "img-src 'self' data: blob: https://images.unsplash.com https://www.google-analytics.com https://www.googletagmanager.com https://www.figma.com https://cdn-cookieyes.com",
    "media-src 'self'",
    "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://images.unsplash.com https://www.figma.com https://www.google.com/recaptcha/ https://cdn-cookieyes.com https://log.cookieyes.com https://cookieyes.com",
    "frame-src 'self' https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://cdn-cookieyes.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

  // Clone the request headers and set CSP nonce for use in components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  // Create response with security headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set security headers on response
  response.headers.set("Content-Security-Policy", cspHeader);
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "geolocation=(), microphone=(), camera=(), autoplay=(), payment=()"
  );
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  // Cross-Origin-Opener-Policy for origin isolation
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin-allow-popups");

  // Set CSRF cookie if not present
  const existingCsrf = request.cookies.get(CSRF_COOKIE_NAME);
  if (!existingCsrf) {
    const csrfToken = generateCsrfToken();
    response.cookies.set(CSRF_COOKIE_NAME, csrfToken, {
      httpOnly: false, // Must be readable by JavaScript
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    });
  }

  // Security logging for API routes (3.4)
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    console.log(
      JSON.stringify({
        type: "api_request",
        timestamp: new Date().toISOString(),
        method: request.method,
        path: request.nextUrl.pathname,
        ip,
        userAgent: request.headers.get("user-agent")?.slice(0, 100) || "unknown",
      })
    );
  }

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes that don't need CSP
    {
      source: "/((?!_next/static|_next/image|favicon.ico|images/).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
