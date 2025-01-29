import "./globals.css";
import { CookiesProvider } from "next-client-cookies/server";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CookiesProvider>
        <body className="w-screen h-screen">{children}</body>
      </CookiesProvider>
    </html>
  );
}
