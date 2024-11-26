import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteRole } from "../slices/rolesSlice";
import AddRole from "../components/AddRole";
import EditRole from "../components/EditRole";
import DeleteRole from "../popups/DeleteRole";

const RoleManagement = () => {
  const roles = useSelector((state) => state.roles);
  const dispatch = useDispatch();

  const [isAddRoleModalOpen, setisAddRoleModalOpen] = useState(false);
  const [isEditRoleModalOpen, setisEditRoleModalOpen] = useState(false);
  const [isDeleteRoleModalOpen, setisDeleteRoleModalOpen] = useState(false)


  const [currentRole, setCurrentRole] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="md:p-6 ">
      {  isDeleteRoleModalOpen && <DeleteRole roleId = {currentRole.id} setisDeleteRoleModalOpen={setisDeleteRoleModalOpen} />}
      {isAddRoleModalOpen && <AddRole setisAddRoleModalOpen={setisAddRoleModalOpen} />}

      {isEditRoleModalOpen && (
        <EditRole setisEditRoleModalOpen={setisEditRoleModalOpen} role={currentRole} />
      )}

      <h2 className="text-2xl font-bold mb-4">Role Management</h2>

      {/* Search and Add Role */}
      <div className="flex items-center mb-4">
        
        <input
          type="text"
          placeholder="Search roles..."
          className="border p-2 rounded flex-grow focus:border-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="px-3 py-2 bg-blue-500 text-white rounded ml-3 "
          onClick={() => setisAddRoleModalOpen(true)}
        >
          Add 
          <i class="fa-solid fa-plus hidden md:visible"></i> 
        </button>
      </div>

      <div className="overflow-x-scroll">
        {/* Roles Table */}
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Permissions</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoles.map((role) => (
            <tr key={role.id}>
              <td className="border border-gray-300 px-4 py-2">{role.name}</td>
              <td className="border border-gray-300 px-4 py-2">{role.description}</td>
              <td className="border border-gray-300 px-4 py-2">
                {role.permissions.length > 0
                  ? role.permissions.join(", ")
                  : "No Permissions Assigned"}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex">
                {/* edit role */}
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => {
                    setisEditRoleModalOpen(true);
                    setCurrentRole(role);
                  }}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    setisDeleteRoleModalOpen(true)
                    setCurrentRole(role)
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

export default RoleManagement;
