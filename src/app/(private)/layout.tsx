"use client";
import ReactQuery from "../provider/reactQuery.provider";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const data = localStorage.getItem("auth");

  if (!data) {
    router.push("/");
  }

  return (
    <html lang="en">
      <body>
        
          <Navbar/>
          {children}
          <Footer />
        
      </body>
    </html>
  );
}
