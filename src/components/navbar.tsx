"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faTableColumns,faBorderAll,faRightFromBracket,faIdCardClip,faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Login from "@/template/login/Login";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authName, setAuthName] = useState('');
  const [role, setRole] = useState<string | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const router = useRouter();

  const auth = localStorage.getItem("auth");

  useEffect(() => {
    if (auth) {
      const parseAuth = JSON.parse(auth);
      setIsLogin(parseAuth.isLogin);
      setRole(parseAuth.userData.role);
      setAuthName(parseAuth.userData.name)
    }
  }, [auth]);

  const logout = () => {
    localStorage.removeItem("auth");
    setIsLogin(false);
    router.push("/");
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-[#EF9B11] shadow-md z-40">
        <div className="w-3/4 flex items-center justify-between h-10 px-4 mx-auto">
          {/* Logo */}
          <div className="flex items-center mt-4">
            <div className="">
              <Image
                src="/logo.png"
                alt="Talent Logo"
                width={100}
                height={100}
                // className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-4xl font-bold text-[#206088]">
              TA<span className="text-4xl font-bold text-[#f7f1ef]">LENT</span>
            </h1>
          </div>

          {/* Social Icons and Login/Logout */}
          <div className="flex items-center gap-4">
            {/* <FontAwesomeIcon
              icon={faFacebook}
              className="text-[#918e8d] w-5 h-5 hover:text-[#206088] cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faDiscord}
              className="text-[#918e8d] w-7 h-7 hover:text-[#206088] cursor-pointer"
            /> */}
            <div className="flex mt-4">
              {isLogin ? (
                <div className="flex items-center">
                  <div>
                    {role === "admin" && (
                      <div className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                        
                        <Link
                          href="/dashboard"
                          className="font-semibold text-[#206088]"
                        >
                          <FontAwesomeIcon
                          icon={faBorderAll}
                          className="w-5 h-5 text-[#206088] transition duration-75"
                        />
                          Dashbord
                        </Link>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center">

                    <div className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                    <Link
                      href="/profile"
                      className="ml-2 font-semibold text-[#206088]  p-2 "
                    >
                      <FontAwesomeIcon
                          icon={faIdCardClip}
                          className="w-5 h-5 text-[#206088] transition duration-75 "
                      />
                      <span className="ml-1">{authName}</span>
                      
                    </Link>
                      
                   </div>
                    
                    <button
                      onClick={logout}
                      className="ml-2 font-semibold text-[#206088] cursor-pointer p-2 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      <FontAwesomeIcon icon={faRightFromBracket} />
                      <span className="ml-1">
                      LogOut
                      </span>
                      
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={openModal}
                  className="text-white bg-[#206088] hover:bg-[#206088]  font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    <FontAwesomeIcon
                          icon={faRightToBracket}
                          className="w-5 h-5 text-gray-100 transition duration-75"
                    />
                    <span className="ml-1">Login</span>
                  
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Navbar Links */}
        <div className=" bg-gray-800 z-50 w-3/4 mx-auto mt-3 rounded-tl-2xl rounded-tr-2xl">
          {isLogin ? (
            <div className="flex justify-around p-2">
              <Link
                href="/"
                className="hover:border-b border-[#206088] text-[#EF9B11]"
              >
                Home
              </Link>
              <Link
                href="/post"
                className="hover:border-b border-[#206088] text-[#EF9B11]"
              >
                Post
              </Link>
              <Link
                href="/event"
                className="hover:border-b border-[#206088] text-[#EF9B11]"
              >
                Events
              </Link>
            </div>
          ) : (
            <div className="flex justify-around p-2">
              <Link
                href="/"
                className="hover:border-b border-[#206088] text-[#EF9B11]"
              >
                Home
              </Link>
              <Link
                href="#events"
                className="hover:border-b border-[#206088] text-[#EF9B11]"
              >
                Events
              </Link>
              <Link
                href="#programs"
                className="hover:border-b border-[#206088] text-[#EF9B11]"
              >
                Program
              </Link>
              <Link
                href="#instructors"
                className="hover:border-b border-[#206088] text-[#EF9B11]"
              >
                Instructors
              </Link>
              <Link
                href="#about"
                className="hover:border-b border-[#206088] text-[#EF9B11]"
              >
                About Us
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Login Modal */}
      <Login isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
