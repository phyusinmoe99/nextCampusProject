"use client";
import axios from "@/app/provider/api.provider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserCreate, { userProps } from "@/adminComponents/user/UserCreate";
import TableRow from "./tableRow";



export default function User() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getAllUsers = async () => {
    const response = await axios.get("/user");
    return response.data.data;
  };

  // const getUser = async () => {
  //   const response = await axios.get("");
  //   return response.data;
  // };

  const updateUser = async ({ name, email, role_id,phone,address }:userProps) => {
    const response = await axios.post("", { name, email, role,phone,address });
    return response.data;
  };
  
    // const deleteUser = async (id: string) => {
    //     const response = await axios.post('');
    //     return response.data;
    // }

  const { data: allUser } = useQuery({
    queryKey: ["allUser"],
    queryFn: getAllUsers,
  });

  // const { data: user } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: getUser,
  // });

  const { mutate: updateUserMutation } = useMutation({
    mutationKey: ["updateUser"],
    mutationFn: updateUser,
  });
    
    // const {mutate:deleteMutation} = useMutation({
    //     mutationKey: ['deleteUser'],
    //     mutationFn:deleteUser
    // })

    
  
  
  return (
<div className="bg-gray-50 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
   
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-semibold text-gray-800">Users</h1>

      
      <button
        type="button"
        onClick={openModal}
        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-6 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
      >
        <svg
          className="h-5 w-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          />
        </svg>
        Add User
      </button>
    </div>

    
    <div className="overflow-x-auto bg-white shadow-xl rounded-lg">
      <table className="min-w-full text-center text-sm text-gray-600">
        <thead className="bg-gray-100 text-center">
          <tr>
            <th className="p-4 text-sm font-bold text-gray-700">Name</th>
            <th className="p-4 text-sm font-bold text-gray-700">Email</th>
            <th className="p-4 text-sm font-bold text-gray-700">Address</th>
            <th className="p-4 text-sm font-bold text-gray-700">Phone</th>
            <th className="p-4 text-sm font-bold text-gray-700">Role</th>
            <th className="p-4 text-sm font-bold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUser?.map((user) => (
            <TableRow key={user.id} user={user} update={updateUserMutation} />
          ))}
        </tbody>
      </table>
    </div>
  </div>

  
  <UserCreate isModalOpen={isModalOpen} closeModal={closeModal} />
</div>

  );
}
