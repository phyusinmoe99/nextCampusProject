"use client";

import { userProps } from "@/adminComponents/user/UserCreate";
import { useState } from "react";

export default function TableRow({ user, update }: { user: userProps; update: (user: userProps) => void }) {
  const { id, name, email, phone, address, role } = user;
  
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editPhone, setEditPhone] = useState(phone);
  const [editAddress, setEditAddress] = useState(address);
  const [editRole, setEditRole] = useState(role);

  const handleUpdate = () => {
    update({
      id,
      name: editName,
      email: editEmail,
      phone: editPhone,
      address: editAddress,
      role: editRole
    });
  };

  return (
    <tr key={id} className="border-b hover:bg-orange-100 bg-gray-100">
      <td className="p-3 px-5">
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className="bg-transparent border-0 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Edit name"
        />
      </td>

      <td className="p-3 px-5">
        <input
          type="email"
          value={editEmail}
          onChange={(e) => setEditEmail(e.target.value)}
          className="bg-transparent border-0 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Edit email"
        />
      </td>

      <td className="p-3 px-5">
        <input
          type="text"
          value={editAddress}
          onChange={(e) => setEditAddress(e.target.value)}
          className="bg-transparent border-0 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Edit address"
        />
      </td>

      <td className="p-3 px-5">
        <input
          type="text"
          value={editPhone}
          onChange={(e) => setEditPhone(e.target.value)}
          className="bg-transparent border-0 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Edit phone number"
        />
      </td>

      <td className="p-3 px-5">
        <select
          value={editRole}
          onChange={(e) => setEditRole(e.target.value)}
          className="bg-transparent border-b-2 border-gray-300 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Edit role"
        >
          <option value="" disabled>Select Role</option>
          <option value="1">Admin</option>
          <option value="2">Faculty</option>
          <option value="3">User</option>
        </select>
      </td>

      <td className="p-3 px-5 flex justify-end space-x-2">
        {/* Save Button */}
        <button
          type="button"
          onClick={handleUpdate}
          className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Save user changes"
        >
          Save
        </button>

        {/* Delete Button */}
        <button
          type="button"
          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
          aria-label="Delete user"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
