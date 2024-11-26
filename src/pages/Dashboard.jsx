import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddUser from "../components/AddUser";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const users = useSelector((state) => state.users); // Accessing users from Redux store
  const roles = useSelector((state)=> state.roles)

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All"); // State for selected role
  const [isAddUserModalOpen, setisAddUserModalOpen] = useState(false);
  const navigate = useNavigate()
  // console.log(users);

  // Filter users based on search term and selected role
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "All" || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="md:p-4">

  {/* Header */}
  <div className="flex flex-col sm:flex-row justify-start space-y-3 sm:space-y-0 sm:space-x-5 mb-4">
    <h2 className="text-2xl font-bold">Members</h2>
    <div className="flex space-x-2">
      <button
        className="px-4 py-2 bg-[#03A9F4] rounded text-white"
        onClick={() => setisAddUserModalOpen(true)}
      >
        Add
      </button>
      <button className="px-4 py-2 bg-[#03A9F4] rounded text-white"
      onClick={()=>navigate('/roles')}>
        Edit Roles
      </button>
    </div>
  </div>

  {/* Search and Filter */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
    <input
      type="text"
      placeholder="Search users by name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border focus:outline-sky-700 p-2 rounded w-full sm:w-auto"
    />
    <select
      value={selectedRole}
      onChange={(e) => setSelectedRole(e.target.value)}
      className="border focus:outline-sky-700 p-2 rounded w-full sm:w-auto"
    >
      <option value="All">All</option>
      { roles.map((role)=>{return <option value={role.name}>{role.name}</option>})}
      {/* <option value="All">All Roles</option>
      <option value="Admin">Admin</option>
      <option value="User">User</option>
      <option value="Editor">Editor</option>
      <option value="Viewer">Viewer</option> */}
    </select>
  </div>

  {/* User Table */}
  <div className="bg-white shadow rounded overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-300 border-b">
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Email</th>
          <th className="py-2 px-4">Role</th>
          <th className="py-2 px-4">Status</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">{user.status}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center py-4">
              No users found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

  {/* Add User Modal */}
  {isAddUserModalOpen && <AddUser setisAddUserModalOpen={setisAddUserModalOpen} />}
</div>

  );
};

export default Dashboard;
