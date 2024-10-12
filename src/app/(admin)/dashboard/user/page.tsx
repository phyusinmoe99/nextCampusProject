"use client";
import axios from "@/app/provider/api.provider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserCreate, { userProps } from "@/adminComponents/user/UserCreate";



export default function User() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getAllUsers = async () => {
    const response = await axios.get("/teachers");
    return response.data.data;
  };

  const getUser = async () => {
    const response = await axios.get("");
    return response.data;
  };

  const updateUser = async ({ name, email, role }:userProps) => {
    const response = await axios.post("", { name, email, role });
    return response.data;
    };
    const deleteUser = async (id: string) => {
        const response = await axios.post('');
        return response.data;
    }

  const { data: allUser } = useQuery({
    queryKey: ["allUser"],
    queryFn: getAllUsers,
  });

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const { mutate: updateUserMutation } = useMutation({
    mutationKey: ["updateUser"],
    mutationFn: updateUser,
  });
    
    const {mutate:deleteMutation} = useMutation({
        mutationKey: ['deleteUser'],
        mutationFn:deleteUser
    })

    const handleUpdate = () => {

    }
    const handleDelete = () => {
        
    }
  const save = (user) => {
      //callapi
    }
  
  return (
    <div>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-3xl">Users</h1>
          <button
            type="button"
            onClick={openModal}
            className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            <svg
              className="h-3.5 w-3.5 mr-2"
              fill="currentColor"
              viewbox="0 0 20 20"
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
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4 border-collapse">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Role</th>
                <th className="text-left p-3 px-5">Actions</th>
              </tr>
              {allUser?.map((user, key) => (
                <user, onSave = {save}
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <UserCreate isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
