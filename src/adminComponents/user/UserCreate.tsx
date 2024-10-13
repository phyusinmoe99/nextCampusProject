"use client";
import axios from "@/app/provider/api.provider";
import {useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
interface LoginModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
export interface userProps {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  role_id?: string;
}

export default function UserCreate({
  isModalOpen,
  closeModal,
}: LoginModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role_id, setRole] = useState("");
  const [error, setError] = useState("");
  const queryClient = useQueryClient();

  const createUser = async ({
    name,
    email,
    password,
    phone,
    address,
    role_id,
  }: userProps) => {
    const response = await axios.post("/register", {
      name,
      email,
      password,
      phone,
      address,
      role_id,
    });
    return response.data;
  };

  const { mutate: createUserMutation, isError } = useMutation({
    mutationKey: ["register"],
    mutationFn: createUser,
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message || "Registration Error";
      setError(errorMessage);
    },
    onSuccess: () => {
      closeModal();
      queryClient.invalidateQueries({
        queryKey:['allUser']
      })
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createUserMutation({ name, email, password, phone, address, role_id });
  };


  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative p-8 w-full max-w-xl bg-white rounded-xl shadow-lg dark:bg-gray-800 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                User Registration
              </h3>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
                onClick={closeModal}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div>
              {isError && (
                <div className="mb-4 p-4 text-red-700 border border-red-400 rounded-lg bg-red-50">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full p-3 text-gray-900 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full p-3 text-gray-900 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full p-3 text-gray-900 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* Role Selector */}
                <div>
                  <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={role_id}
                    onChange={(e) => setRole(e.target.value)}
                    className="block w-full p-3 text-gray-900 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="" disabled>
                      Select Role
                    </option>
                    <option value="1">Admin</option>
                    <option value="2">Faculty</option>
                    <option value="3">User</option>
                  </select>
                </div>

                {/* Phone & Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="block w-full p-3 text-gray-900 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your phone"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="block w-full p-3 text-gray-900 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your address"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
