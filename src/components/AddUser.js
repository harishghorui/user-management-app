import React from 'react';
import { useState } from 'react';

// AddUser component for displaying a form to add a new user
function AddUser({ addUser }) {
    // State to manage the visibility of the add user form
    const [showAddUser, setShowAddUser] = useState(false);

    // Handler function for form submission
    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        // Create a new user object from form input values
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        };

        // Call the addUser function passed as a prop
        addUser(newUser.name, newUser.email, newUser.phone);

        // Hide the form after submission
        setShowAddUser(false);
    };

    return (
        <div>
            {/* Button to show the add user form */}
            <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                onClick={() => setShowAddUser(true)}
            >
                Add User
            </button>

            {/* Conditionally render the add user form */}
            {showAddUser && (
                <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                    <div className='bg-white rounded-md p-5'>
                        <h2 className='text-center text-2xl font-bold text-slate-700'>Add User</h2>

                        {/* Form for adding a new user */}
                        <form onSubmit={handleOnSubmit}>
                            
                            {/* Name input field */}
                            <label className='text-slate-500'>Name:</label>
                            <input 
                                required 
                                type="text" 
                                name="name" 
                                placeholder='John Doe' 
                                className='block bg-slate-100 text-slate-700 w-full px-4 py-2 mt-2'
                            />

                            {/* Email input field */}
                            <label className='text-slate-500'>Email:</label>
                            <input 
                                required 
                                type="email" 
                                name="email" 
                                placeholder='john.doe@example.com' 
                                className='block bg-slate-100 text-slate-700 w-full px-4 py-2 mt-2'
                            />

                            {/* Phone input field */}
                            <label className='text-slate-500'>Phone:</label>
                            <input 
                                required 
                                type="number" 
                                name="phone" 
                                placeholder='1-770-736-8031' 
                                className='block bg-slate-100 text-slate-700 w-full px-4 py-2 mt-2'
                            />

                            {/* Buttons for form submission and cancellation */}
                            <div className='flex gap-2 mt-4'>
                                <button 
                                    type="submit" 
                                    className='bg-blue-500 text-white px-4 py-2 rounded-md'
                                >
                                    Add
                                </button>

                                <button
                                    onClick={() => setShowAddUser(false)}
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

export default AddUser;
