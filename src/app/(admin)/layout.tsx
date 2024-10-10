'use client';


import Sidebar from "@/adminComponents/sideBar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <div className="flex">
    <Sidebar />
    <div className="ml-64 w-full">
      {children}
    </div>
  </div>
  );
}
