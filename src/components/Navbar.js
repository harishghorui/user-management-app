import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex lg:flex-col lg:w-1/6 lg:h-screen bg-slate-800 p-4 text-slate-300'>
            <NavLink 
                to="/" 
                className={({ isActive }) => 
                    isActive ? 'bg-slate-700 p-2 rounded text-white' : 'p-2 text-slate-300'
                }
            >
                Home
            </NavLink>
            <NavLink 
                to="/users" 
                className={({ isActive }) => 
                    isActive ? 'bg-slate-700 p-2 rounded text-white' : 'p-2 text-slate-300'
                }
            >
                Users
            </NavLink>
        </div>
    )
}

export default Navbar;
