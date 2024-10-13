"use client";
import axios from "@/app/provider/api.provider";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTableColumns,
  faClapperboard,
  faBookOpenReader,
  faNewspaper,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const getPrograms = async () => {
    const programResponse = await axios.get("/faculties/courses");
    return programResponse.data.data;
  };

  const { data: programs } = useQuery({
    queryKey: ["programs"],
    queryFn: getPrograms,
  });

  const getAllPosts = async () => {
    const responseData = await axios.get("/posts");
    return responseData.data.data;
  };

  const { data: allPostData } = useQuery({
    queryKey: ["allPostDashboard"],
    queryFn: getAllPosts,
  });

  const totalPrograms = programs?.length || 0;
  const totalPost = allPostData?.length || 0;
  return (
    <div className="py-6 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-lg rounded-3xl bg-clip-border">
          <div className="flex-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-600 font-semibold text-xl">
                  Total Users
                </p>
                <p className="text-gray-400 text-sm">
                  Number of registered users
                </p>
              </div>
              <div className="inline-block p-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out">
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-6 h-6 text-white transition-colors duration-300 transform hover:text-gray-100 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-3xl font-bold text-gray-800">12,345</div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-lg rounded-3xl bg-clip-border">
          <div className="flex-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-600 font-semibold text-xl">
                  Total Programs
                </p>
                <p className="text-gray-400 text-sm">
                  Number of active programs
                </p>
              </div>
              <div className="inline-block p-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out">
              <FontAwesomeIcon
                icon={faBookOpenReader}
                className="w-6 h-6 text-white transition-colors duration-300 transform hover:text-gray-100 cursor-pointer"
              />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-3xl font-bold text-gray-800">
                {totalPrograms}
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-lg rounded-3xl bg-clip-border">
          <div className="flex-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-600 font-semibold text-xl">
                  Total Post
                </p>
                <p className="text-gray-400 text-sm">Revenue generated today</p>
              </div>
              <div className="inline-block p-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out">
              <FontAwesomeIcon
                icon={faNewspaper}
                className="w-6 h-6 text-white transition-colors duration-300 transform hover:text-gray-100 cursor-pointer"
              />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-3xl font-bold text-gray-800">
                {totalPost}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
