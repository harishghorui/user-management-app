import React from 'react'
import EditUser from './EditUser'

// User component to display user details and provide actions for editing and deleting
function User({ id, deleteUser, updateUser, user }) {

    return (
        <div className='md:flex w-full items-center mb-2 bg-slate-600 p-2 px-3 rounded'>

            {/* Container for user details */}
            <ul className='md:w-10/12 text-center md:text-left md:flex justify-between pr-4'>
                <li className='lg:w-1/4 truncate'>{user.name}</li>
                <li className='lg:w-1/4 truncate'>{user.email}</li>
                <li className='lg:w-1/4 truncate'>{user.phone.split(" ")[0]}</li>
            </ul>

            {/* Container for action buttons */}
            <div className='flex gap-2 lg:w-2/12 lg:justify-end justify-center'>
                
                {/* Edit user button */}
                <EditUser id={id} user={user} updateUser={updateUser} />

                {/* Delete user button */}
                <button 
                  onClick={() => deleteUser(id)}
                  className='bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded'>
                  Delete
                </button>
            </div>
        </div>
    )
}

export default User
