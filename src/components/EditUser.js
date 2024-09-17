import React from 'react';
import { useState } from 'react';
import { CiEdit } from "react-icons/ci";

// EditUser component for displaying a form to edit an existing user
function EditUser({ id, user, updateUser }) {
    // State to manage the visibility of the edit user form
    const [showEditUser, setShowEditUser] = useState(false);

    // Handler function for form submission
    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        // Call the updateUser function passed as a prop with updated user details
        updateUser(id, e.target.name.value, e.target.email.value, e.target.phone.value);

        // Hide the form after submission
        setShowEditUser(false);
    };

    return (
        <div>
            {/* Button to show the edit user form */}
            <button 
                className='bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded' 
                onClick={() => setShowEditUser(true)}
            >
                <span className="hidden sm:block">Edit</span>
                <CiEdit className="block sm:hidden" />
            </button>

            {/* Conditionally render the edit user form */}
            {showEditUser && (
                <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                    <div className='bg-white rounded-md p-5'>
                        <h2 className='text-center text-2xl font-bold text-slate-700'>Edit User</h2>

                        {/* Form for editing the user */}
                        <form onSubmit={handleOnSubmit}>
                            
                            {/* Name input field */}
                            <label className='text-slate-500'>Name:</label>
                            <input 
                                required 
                                type="text" 
                                name="name" 
                                placeholder='John Doe' 
                                defaultValue={user.name} 
                                className='block bg-slate-100 text-slate-700 w-full px-4 py-2 mt-2'
                            />

                            {/* Email input field */}
                            <label className='text-slate-500'>Email:</label>
                            <input 
                                required 
                                type="email" 
                                name="email" 
                                placeholder='john.doe@example.com' 
                                defaultValue={user.email} 
                                className='block bg-slate-100 text-slate-700 w-full px-4 py-2 mt-2'
                            />

                            {/* Phone input field */}
                            <label className='text-slate-500'>Phone:</label>
                            <input 
                                required 
                                type="text" 
                                name="phone" 
                                placeholder='1-770-736-8031' 
                                defaultValue={user.phone.split(" ")[0]} 
                                className='block bg-slate-100 text-slate-700 w-full px-4 py-2 mt-2'
                            />

                            {/* Buttons for form submission and cancellation */}
                            <div className='flex gap-2 mt-4'>
                                <button 
                                    type="submit" 
                                    className='bg-blue-500 text-white px-4 py-2 rounded-md'
                                >
                                    Update
                                </button>

                                <button
                                    onClick={() => setShowEditUser(false)}
                                    className='bg-slate-200 text-blue-500 px-4 py-2 rounded-md'
                                >
                                    Cancel
                                </button>
                            </div>
                                
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EditUser;
