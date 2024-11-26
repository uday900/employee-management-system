import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "../slices/usersSlice";
import { useState } from "react";
import AddUser from "../components/AddUser";
import EditUser from "../components/EditUser";
import DeleteUser from "../popups/DeleteUser";

const UserManagement = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [isAddUserModalOpen, setisAddUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setisEditUserModalOpen] = useState(false);
  const [isDeleteUserModalOpen, setisDeleteUserModalOpen] = useState(false);

  const [currentUser, setcurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]); // Selected roles
  const [selectedStatus, setSelectedStatus] = useState(""); // Selected status
  const [isFilterOpen, setisFilterOpen] = useState(false); // Toggle filter menu
  


  // Filtered users based on search, roles, and status
  const filteredUsers = users.filter((user) => {
    
    const matchesSearchQuery =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRoles =
      selectedRoles.length > 0
        ? selectedRoles.includes(user.role.toLowerCase())
        : true;

    const matchesStatus = selectedStatus
      ? user.status.toLowerCase() === selectedStatus.toLowerCase()
      : true;

    return matchesSearchQuery && matchesRoles && matchesStatus;
  });

  // Handle role selection (toggle)
  const handleRoleChange = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role)
        ? prev.filter((r) => r !== role) // Remove role
        : [...prev, role] // Add role
    );
  };

  return (
    <div className="md:p-6">
      { isDeleteUserModalOpen && <DeleteUser 
      userId={currentUser.id} setisDeleteUserModalOpen={setisDeleteUserModalOpen} /> } 
      {isEditUserModalOpen && (
        <EditUser
          setisEditUserModalOpen={setisEditUserModalOpen}
          user={currentUser}
        />
      )}
      {isAddUserModalOpen && <AddUser setisAddUserModalOpen={setisAddUserModalOpen} />}

      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      <div className="flex flex-col md:flex-row md:items-center mb-4">
        {/* Add Button */}
        <button
          className="px-4 py-2 w-1/4 md:w-auto bg-[#03A9F4] rounded text-white mr-4
          mb-1"
          onClick={() => setisAddUserModalOpen(true)}
        >
          Add
        </button>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search users..."
          className="border p-2 rounded flex-grow focus:border-sky-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Filter Button */}
        <div className="">
          <button
            className="px-4 py-2 bg-gray-200 rounded text-black md:ml-4"
            onClick={() => setisFilterOpen(!isFilterOpen)}
          >
            <i class="fa-solid fa-filter"></i>
          </button>

          {isFilterOpen && (
            <div className="absolute top-12 right-0 bg-white border shadow-lg rounded w-64 p-4 z-10">
              {/* Role Selection */}
              <h3 className="font-semibold mb-2">Roles</h3>

              <div className="flex flex-col mb-4">

                {["admin", "user", "editor"].map((role) => (
                  <label key={role} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      value={role}
                      checked={selectedRoles.includes(role)}
                      onChange={() => handleRoleChange(role)}
                      className="mr-2"
                    />
                    {role}
                  </label>
                ))}
              </div>

              {/* Status Selection */}
              <h3 className="font-semibold mb-2">Status</h3>
              <div className="flex flex-col">
                {["active", "inactive"].map((status) => (
                  <label key={status} className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="status"
                      value={status}
                      checked={selectedStatus === status}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="mr-2"
                    />
                    {status}
                  </label>
                ))}
              </div>

              {/* Clear Filter Button */}
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => {
                  setSelectedRoles([]);
                  setSelectedStatus("");
                }}
              >
                Clear Filters
              </button>
              <button 
              onClick={()=> setisFilterOpen(false)}
              className="mt-4 mx-2 px-4 py-2 bg-blue-500 text-white rounded">
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-scroll">
        {/* User Table */}
      <table className="w-full table-auto border-collapse border border-gray-300 ">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.role}</td>
              <td className="border border-gray-300 px-4 py-2">{user.status}</td>
              <td className="border border-gray-300 px-4 py-2 flex">
                
                {/* edit user */}
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    setisEditUserModalOpen(true);
                    setcurrentUser(user);
                  }}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                {/* Delete User */}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                  onClick={() => {setisDeleteUserModalOpen(true)
                    setcurrentUser(user)
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserManagement;
