"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTableColumns,
  faClapperboard,
  faNewspaper,
  faBookOpenReader,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
    localStorage.removeItem("auth");
    router.push("/");
  }
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform ">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-400 ">
        <div className="">
          <Link href="/" className={`flex items-center ps-2.5 mb-5 `}>
            <img src="/logo1.png" className="h-14 w-14" alt="Logo" />
            <span className="self-center text-[#206088] text-xl font-semibold whitespace-nowrap">
              TA<span className="text-gray-100">LENT</span>
            </span>
          </Link>
        </div>

        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center p-2 text-gray-900 rounded-lg text-lg hover:bg-[#EF9B11] [&.active]:bg-[#EF9B11] ${
                pathname === "/dashboard" ? "active" : ""
              }`}
            >
              <FontAwesomeIcon
                icon={faTableColumns}
                className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />

              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user"
              className={`flex items-center text-lg p-2 text-gray-900 rounded-lg  hover:bg-[#EF9B11]  [&.active]:bg-[#EF9B11] ${
                pathname === "/dashboard/user" ? "active" : ""
              }`}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900  cursor-pointer"
              />

              <span className="flex-1 ms-3 whitespace-nowrap">User</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/post"
              className={`flex items-center p-2 text-gray-900 rounded-lg text-lg hover:bg-[#EF9B11]  [&.active]:bg-[#EF9B11] [&.active]:text-gray-100 ${
                pathname === "/dashboard/post" ? "active" : ""
              }`}
            >
              <FontAwesomeIcon
                icon={faNewspaper}
                className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Post</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/program"
              className={`flex items-center p-2 text-lg text-gray-900 rounded-lg  hover:bg-[#EF9B11] [&.active]:bg-[#EF9B11] ${
                pathname === "/dashboard/program" ? "active" : ""
              }`}
            >
              <FontAwesomeIcon
                icon={faBookOpenReader}
                className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Program</span>
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
