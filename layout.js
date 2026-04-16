import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata = {
  title: "Welcome Page",
  description: "Modern web design template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/svg/logo.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" /> */}
      </head>

      <body suppressHydrationWarning={true}>
        <BootstrapClient />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
