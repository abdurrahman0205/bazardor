import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import BazarDorProvider from "@/lib/context/BazarDorContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bazardor",
  description: "Know real bazardor",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme = "light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-[#F0F5F0]">
        <BazarDorProvider>

        <div className="min-h-screen flex flex-col">

          <NavBar />
          <main className="mb-10 flex-1">
            {children}
          </main>
          
          <Footer />

          </div>
        </BazarDorProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
