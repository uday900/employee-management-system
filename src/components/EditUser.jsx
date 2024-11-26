import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUser } from "../slices/usersSlice";

const EditUser = ({ user, setisEditUserModalOpen }) => {
    const dispatch = useDispatch();
    console.log(user, "user details here")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      role: user?.role || "",
      phone: user?.phone || "",
      status: user?.status || "",
    },
  });

  const onSubmit = (data) => {
    // onSave(data); // Save the updated user data

    dispatch(updateUser({...data, id: user.id}));
    setisEditUserModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="border p-2 rounded w-full"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="border p-2 rounded w-full"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Role</label>
            <select
              {...register("role")}
              className="border p-2 rounded w-full"
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
            {/* {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>} */}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Phone Number (Optional)</label>
            <input
              type="tel"
              {...register("phone")}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Status</label>
            <select
              {...register("status")}
              className="border p-2 rounded w-full"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={()=> setisEditUserModalOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
