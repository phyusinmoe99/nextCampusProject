'use client';
import type { Metadata } from "next";
import "./globals.css";
import ReactQuery from "./provider/reactQuery.provider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body>
        <ReactQuery>
          
          {children}         
          
        </ReactQuery>
      </body>
    </html>
  );
}
