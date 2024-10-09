"use client";
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
    router.push('/');
  }

 

 
  
  return <div>{children}</div>;
}
