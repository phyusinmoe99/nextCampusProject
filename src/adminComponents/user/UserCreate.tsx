"use client";
import axios from "@/app/provider/api.provider";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface LoginModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
export interface userProps {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  role?: string;
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
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const createUser = async ({
    name,
    email,
    password,
    phone,
    address,
    role,
  }: userProps) => {
    console.log("request", { name, email, password, phone, address, role });
    const response = await axios.post("/users/register", {
      name,
      email,
      password,
      phone,
      address,
      role,
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
  });

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  console.log("Selected Role:", role);
      
    createUserMutation({ name, email, password, role, phone, address });
  };

    
  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative p-4 w-full max-w-xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700 overflow-scroll"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                User Register
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 md:p-5 " >
              {isError && (
                <div className="max-w-sm mx-auto border border-gray-400 rounded-lg text-center text-red-700 py-2 mb-4 break-all">
                  {error}
                </div>
              )}
              <form className="space-y-4 ">
                <div className="grid grid-cols-2 ">
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="name"
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Role
                    </label>
                    <select
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                      className="bg-transparent border-b-2 border-gray-300 py-2"
                                      >
                      <option value="" disabled selected>Select Role</option>
                                          
                      <option value="1">Admin</option>
                      <option value="2">Faculty</option>
                      <option value="3">User</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      PhoneNumber
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="pnone number"
                      required
                    />
                  </div>
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Address"
                    required
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
