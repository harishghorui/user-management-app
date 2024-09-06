import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';
import AddUser from './AddUser';

function Users() {
    const [users, setUsers] = useState([]); // State to store users
    const [loading, setLoading] = useState(false); // State to manage loading status
    const [error, setError] = useState(''); // State to manage error messages

    // Fetch users data on component mount
    useEffect(() => {
        usersData();
    }, []);

    // Function to fetch users from the API
    const usersData = async () => {
        setLoading(true); // Set loading to true while fetching data
        setError(''); // Clear any previous errors

        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(res.data); // Set users data from the response
            console.log(res.data); // Optional: log the fetched data
        } catch (err) {
            setError('Failed to fetch users.'); // Set error message if request fails
            console.log(err); // Log error for debugging
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    };

    // Function to add a new user
    const addUser = async (name, email, phone) => {
        setError(''); // Clear any previous errors

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify({ name, email, phone }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to add user.'); // Throw error if response is not ok
            }
            const newUser = await response.json(); // Parse response JSON
            setUsers([...users, newUser]); // Update state with the new user
        } catch (err) {
            setError(err.message); // Set error message if request fails
            console.log(err); // Log error for debugging
        }
    };

    // Function to delete a user by id
    const deleteUser = async (id) => {
        setError(''); // Clear any previous errors

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete user.'); // Throw error if response is not ok
            }
            setUsers(users.filter(user => user.id !== id)); // Update state to remove deleted user
        } catch (err) {
            setError(err.message); // Set error message if request fails
            console.log("User delete failed", err); // Log error for debugging
        }
    };

    // Function to update a user by id
    const updateUser = async (id, name, email, phone) => {
        setError(''); // Clear any previous errors

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
                method: 'PUT',
                body: JSON.stringify({ name, email, phone }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to update user.'); // Throw error if response is not ok
            }
            const updatedUser = await response.json(); // Parse response JSON
            setUsers(users.map(user => user.id === id ? { ...user, name: updatedUser.name, email: updatedUser.email, phone: updatedUser.phone } : user)); // Update state with the modified user
        } catch (err) {
            setError(err.message); // Set error message if request fails
            console.log(err); // Log error for debugging
        }
    };

    return (
        <div className='bg-slate-800 p-4 lg:p-10 rounded-md shadow-md'>

            {/* Header */}
            <div>
                <h2 className='text-4xl font-bold text-slate-50'>User management</h2>
                <p className='text-slate-400 mt-2'>Manage your team members here and their details</p>
            </div>

            {/* Main content */}
            <div className='mt-10'>
                <div className='flex justify-between items-center'>
                    <p className='ml-2 font-bold text-xl'>
                        All users
                        <span className='text-slate-500 font-bold'> {users.length}</span> {/* Display number of users */}
                    </p>

                    <div className='flex gap-5'>
                        {/* Search input is commented out, but can be used for future enhancements */}
                        {/* <input type="text" placeholder='Search' 
                            className='border-slate-500 py-2 px-5 outline-none focus:outline-blue-500 rounded-sm'
                        /> */}

                        {/* Component to add a new user */}
                        <AddUser addUser={addUser} />
                    </div>
                </div>

                {/* User list container */}
                <div className='w-full h-full overflow-y-auto mt-5'>
                    <ul className='p-1 lg:p-5 overflow-y-auto'>
                        {
                            loading ? (
                                <div className='flex justify-center items-center gap-5'>
                                    <p className='text-slate-400'>Loading...</p>
                                    {/* Spinner component for loading state */}
                                    <div className='spinner'></div>
                                </div>
                            ) : error ? (
                                <div className='flex justify-center items-center gap-5'>
                                    <p className='text-red-500'>{error}</p> {/* Display error message if there's an error */}
                                </div>
                            ) : (
                                <div>
                                    {/* Table header, hidden on small screens */}
                                    <div className='hidden md:flex items-center mb-5 bg-slate-400 border-b-2 border-slate-600 py-2 px-5 rounded-sm'>
                                        <h4 className='w-1/3 font-semibold'>Name</h4>
                                        <h4 className='w-1/3 font-semibold'>Email</h4>
                                        <h4 className='w-1/3 font-semibold'>Phone</h4>
                                    </div>
                                    {/* Render user list */}
                                    {
                                        users.map(user => (
                                            <User key={user.id} id={user.id} deleteUser={deleteUser} updateUser={updateUser} user={user} />
                                        ))
                                    }
                                </div>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Users;
