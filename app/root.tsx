import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import { Footer, Header } from "./components";
import { TwSizeIndicator } from "./utils";

export const links: Route.LinksFunction = () => [
  // { rel: "preconnect", href: "https://fonts.googleapis.com" },
  // {
  //   rel: "preconnect",
  //   href: "https://fonts.gstatic.com",
  //   crossOrigin: "anonymous",
  // },
  // {
  //   rel: "stylesheet",
  //   href: "https://fonts.googleapis.com/css2?family=Gudea&family=Old+Standard+TT:wght@700&display=swap"
  // },
  { rel: "stylesheet", href: stylesheet },
  { rel: "manifest", href: "/site.webmanifest" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#ffb6c1" />
        <Meta />
        <Links />
      </head>
      <body>
        <TwSizeIndicator />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="col-span-full row-span-full flex h-dvh flex-col items-center justify-center">
      <h1 className="font-bold">Error {message}</h1>
      <p className=" ">{details}</p>

      <Link to="/" className="text-grey">
        Go back home
      </Link>

      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((err) => {
      console.error("Service Worker registration failed:", err);
    });
  });
}
