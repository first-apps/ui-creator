import type { Metadata } from "next";
import { Header, Sidebar } from "./components";

export const metadata: Metadata = {
  title: "Creator App",
  description: "Stream creator role login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/core.css" />
      </head>
      <body>
        <Sidebar />
        <div>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
