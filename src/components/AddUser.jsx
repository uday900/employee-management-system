import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../slices/usersSlice";

const AddUser = ({ setisAddUserModalOpen }) => {

  const { register,handleSubmit,formState: { errors },} = useForm();
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.users);
  const roles = useSelector((state)=> state.roles)
  // console.log(users);

  const onSubmit = (data) => {
    dispatch(addUser(data));
    console.log("New User Data:", data);
    
    setisAddUserModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white rounded p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full border p-2 rounded ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Ex: Uday Kiran"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`w-full border p-2 rounded ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Ex: uday.d@example.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Role</label>
            <select
              {...register("role", { required: "Role is required" })}
              className={`w-full border p-2 rounded ${
                errors.role ? "border-red-500" : ""
              }`}
            >
              <option value="">Select Role</option>

              { roles.map((role) => ( <option key={role.id} value={role.name}>{role.name}</option> ))}  

              <option value="No Role">Not Assigned</option>
              
            </select>
            {errors.role && (
              <span className="text-red-500 text-sm">{errors.role.message}</span>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              {...register("phone")}
              className="w-full border p-2 rounded"
              placeholder="+91 99999 3444"
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Status</label>
            <select
              {...register("status")}
              className="w-full border p-2 rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-[#03A9F4] text-white rounded"
            >
              Add User
            </button>
            <button
              type="button"
              onClick={()=> setisAddUserModalOpen(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
