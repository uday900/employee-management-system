import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateRole } from "../slices/rolesSlice";

const EditRole = ({ setisEditRoleModalOpen, role }) => {
  const dispatch = useDispatch();

  const [roleName, setRoleName] = useState(role.name);
  const [roleDescription, setRoleDescription] = useState(role.description);
  const [permissions, setPermissions] = useState(role.permissions || []);
  console.log(role.permissions);

  const permissionOptions = [
    "Read",
    "Write",
    "Edit",
    "Delete",
    "Admin",
  ];

  const handleEditRole = () => {
    if (roleName.trim()) {
      dispatch(
        updateRole({
          id: role.id,
          name: roleName,
          description: roleDescription,
          permissions,
        })
      );
      setisEditRoleModalOpen(false);
    }
  };

  const handlePermissionChange = (permission) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((perm) => perm !== permission)
        : [...prev, permission]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Edit Role</h2>
        <div className="mb-4">
          <label className="block mb-2">Role Name</label>
          <input
            type="text"
            className="border p-2 rounded w-full"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            className="border p-2 rounded w-full"
            value={roleDescription}
            onChange={(e) => setRoleDescription(e.target.value)}
          />
        </div>
        {/* <div className="mb-4">
          <label className="block mb-2">Permissions</label>
          <div>

            {permissionOptions.map((permission) => (
              <div key={permission} className="mb-1">
                <label>
                  <input
                    type="checkbox"
                    value={permission}
                    checked={permissions.includes(permission)}
                    onChange={() => handlePermissionChange(permission)}
                  />
                  <span className="ml-2">{permission}</span>
                </label>
              </div>
            ))}
          </div>
        </div> */}
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-gray-300 rounded mr-2"
            onClick={() => setisEditRoleModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleEditRole}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRole;
