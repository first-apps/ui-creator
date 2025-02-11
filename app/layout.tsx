import type { Metadata } from "next";
import { Header, Sidebar } from "./components";
import "./globals.css";

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
