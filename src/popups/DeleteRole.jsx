import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteRole } from '../slices/rolesSlice';

function DeleteRole({roleId, setisDeleteRoleModalOpen}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch( deleteRole({id: roleId }) );
        setisDeleteRoleModalOpen(false);
    }
  return (
    <div>
         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-96">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Are you sure you want to delete this user?
                        </h3>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-900 rounded hover:bg-gray-400"
                                onClick={() => setisDeleteRoleModalOpen(false)}
                            >
                                No
                            </button>
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                onClick={()=>handleDelete()}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default DeleteRole