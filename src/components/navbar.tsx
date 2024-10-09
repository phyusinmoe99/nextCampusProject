"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Login from "@/template/login/Login";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const router = useRouter();

  const auth = localStorage.getItem("auth");

  useEffect(() => {
    if (auth) {
      const parseAuth = JSON.parse(auth);
      setIsLogin(parseAuth.isLogin);
    }
  }, [auth]);

  const logout = () => {
    localStorage.removeItem("auth");
    setIsLogin(false);
    router.push("/");
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 ">
        <div className="flex items-center justify-between h-16 px-4 bg-[#EF9B11] shadow-md">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="Talent Logo"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-4xl font-bold text-[#206088]">
              TA<span className="text-4xl font-bold text-[#f7f1ef]">LENT</span>
            </h1>
          </div>

          {/* Social Icons and Login/Logout */}
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-[#918e8d] w-5 h-5 hover:text-[#206088] cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faDiscord}
              className="text-[#918e8d] w-7 h-7 hover:text-[#206088] cursor-pointer"
            />
            <div className="flex border rounded-2xl border-[#206088] p-2 ml-2">
              {isLogin ? (
                <div>
                  <span
                    onClick={logout}
                    className="ml-2 font-semibold text-[#206088] cursor-pointer"
                  >
                    LogOut
                  </span>
                  <span className="ml-2 font-semibold text-[#206088] cursor-pointer">
                    Profile
                  </span>
                </div>
              ) : (
                <button
                  onClick={openModal}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Navbar Links */}
        <div className="flex justify-around py-2 mt-2 ">
          <Link href="#" className="hover:border-b border-[#206088] text-[#EF9B11]">
            Home
          </Link>
          <Link href="#events" className="hover:border-b border-[#206088] text-[#EF9B11]">
            Events
          </Link>
          <Link href="#programs" className="hover:border-b border-[#206088] text-[#EF9B11]">
            Program
          </Link>
          <Link href="#instructors" className="hover:border-b border-[#206088] text-[#EF9B11]">
            Instructors
          </Link>
          <Link href="#" className="hover:border-b border-[#206088] text-[#EF9B11]">
            About Us
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-24">
        {/* Your page content goes here */}
      </div>

      {/* Login Modal */}
      <Login isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
