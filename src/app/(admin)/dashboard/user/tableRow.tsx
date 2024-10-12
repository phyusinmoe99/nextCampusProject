"use client";

export default function TableRow({ User, onSave }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  return (
    <tr key={user.id} className="border-b hover:bg-orange-100 bg-gray-100">
      <td className="p-3 px-5">
        <input
          type="text"
          value={user.name}
          onChange={() => {
            allUser.find;
          }}
          className="bg-transparent border-0  py-2"
        />
      </td>
      <td className="p-3 px-5">
        <input
          type="text"
          value={user.email}
          className="bg-transparent border-0  py-2"
        />
      </td>
      <td className="p-3 px-5">
        <select
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          className="bg-transparent border-b-2 border-gray-300 py-2"
        >
          <option value="" disabled selected>
            Select Role
          </option>

          <option value="1">Admin</option>
          <option value="2">Faculty</option>
          <option value="3">User</option>
        </select>
      </td>
      <td className="p-3 px-5 flex justify-end">
        <button
          type="button"
          className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          onClick={onSave}
        >
          Save
        </button>
        <button
          type="button"
          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
