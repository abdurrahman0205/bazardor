import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import BazarDorProvider from "@/lib/context/BazarDorContext";
import { hindiSilguri } from "@/lib/font";


export const metadata: Metadata = {
  title: "Bazardor",
  description: "Know real bazardor",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme = "light"
      className={`${hindiSilguri.className} h-full antialiased`}
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
