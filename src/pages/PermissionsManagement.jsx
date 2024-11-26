import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRole } from "../slices/rolesSlice";

function PermissionsManagement() {
  const allPermissions = ["Read", "Write", "Edit", "Delete", "Manage Users"];
  const roles = useSelector((state) => state.roles);

  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState("");
  const [rolePermissions, setRolePermissions] = useState([]);

  const handleRoleChange = (roleName) => {
    const role = roles.find((role) => role.name === roleName);
    setSelectedRole(roleName);
    setRolePermissions(role.permissions);
  };

  const handlePermissionChange = (permission) => {
    setRolePermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((perm) => perm !== permission)
        : [...prev, permission]
    );
  };

  const handleSavePermissions = () => {
    const newRole = roles.find((role) => role.name === selectedRole);
    dispatch(updateRole({ ...newRole, permissions: rolePermissions }));
    alert("Permissions saved successfully");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Permissions Management
      </h2>

      {/* Role Selection */}
      <div className="mb-6">
        <label
          htmlFor="chooseRole"
          className="block text-lg font-semibold text-gray-700 mb-2"
        >
          Select Role:
        </label>
        <select
          name="chooseRole"
          id="chooseRole"
          onChange={(e) => handleRoleChange(e.target.value)}
          className=" px-4 py-2 bg-blue-500 text-white rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="select">Select a Role</option>
          {roles.map((role) => (
            <option
              key={role.id}
              value={role.name}
              className="bg-white text-gray-700"
            >
              {role.name}
            </option>
          ))}
        </select>
      </div>

      {/* Permissions List */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Permissions for <span className="text-blue-500">{selectedRole}</span>:
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {allPermissions.map((perm, index) => (
            <div
              key={index}
              className="flex items-center bg-white px-4 py-2 rounded shadow-sm hover:shadow-md"
            >
              <input
                type="checkbox"
                id={perm}
                name={perm}
                value={perm}
                onChange={(e) => handlePermissionChange(e.target.value)}
                checked={rolePermissions.includes(perm)}
                className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-400"
              />
              <label
                htmlFor={perm}
                className="text-gray-800 font-medium cursor-pointer"
              >
                {perm}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="text-center">
        <button
          onClick={handleSavePermissions}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default PermissionsManagement;
