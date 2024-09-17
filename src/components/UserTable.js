import React from "react";
import EditUser from "./EditUser";
import { MdDelete } from "react-icons/md";

const UserTable = ({user, deleteUser, updateUser}) => {
    return (
        <tr key={user.id} className="bg-slate-600 text-white shadow-lg rounded-lg mb-4">
            <td className="p-4">{user.name}</td>
            <td className="p-4">{user.email}</td>
            <td className="p-4">{user.phone.split(" ")[0]}</td>
            <td className="flex justify-center content-center m-2 gap-2">
                {/* Edit user button */}
                <EditUser id={user.id} user={user} updateUser={updateUser} />

                {/* Delete user button */}
                <button 
                    onClick={() => deleteUser(user.id)}
                    className='bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded'
                >
                    {/* Show text on larger screens and icon on smaller screens */}
                    <span className="hidden sm:block">Delete</span>
                    <MdDelete className="block sm:hidden" />
                </button>
            </td>
        </tr>
    );
}

export default UserTable;
