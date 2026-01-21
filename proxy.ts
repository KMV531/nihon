import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;

  // 1. Get the User-Agent to detect mobile
  const userAgent = request.headers.get("user-agent") || "";
  const isMobile = /android|iphone|ipad|iemobile|opera mini/i.test(
    userAgent.toLowerCase(),
  );

  // 2. Check if they have our "Secret Pass" cookie
  const hasPass = request.cookies.has("passed_troll");

  // 3. Logic: If mobile, no pass, and not already on the troll pages -> Redirect
  if (isMobile && !hasPass) {
    if (pathname !== "/abort" && pathname !== "/suspicious") {
      url.pathname = "/abort";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Only run this on the homepage to avoid infinite loops or blocking assets
export const config = {
  matcher: ["/"],
};

/* 
1. How does it know? (The "User-Agent")
Instead of checking window.innerWidth (which only exists in the browser after the page loads), the Middleware looks at the User-Agent.

Every time a browser asks for a website, it sends a "passport" called a User-Agent string. It looks something like this:

Mobile: ...iPhone; CPU iPhone OS 14_4...

Desktop: ...Windows NT 10.0; Win64; x64...

The code const isMobile = /android|iphone|ipad.../i.test(userAgent) scans that passport. If it sees "iPhone" or "Android," it knows exactly what device they are holding before a single pixel is even rendered.

2. Can the user "Cheat" by changing the URL?
Nope. That’s the beauty of Middleware.

If a mobile user tries to type your-site.com/ directly into the bar, the Middleware intercepts the request before it reaches your Home Page.

It checks for that "Secret Pass" (the cookie). If they don't have it, it forces them back to /abort.

They are effectively "trapped" in your troll loop until they play your game and click the buttons to get the cookie.
*/
