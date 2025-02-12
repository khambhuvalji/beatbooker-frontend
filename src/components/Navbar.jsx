import React from 'react'
import { FaBars, FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar({ sidebarToggle, setSidebarToggle }) {
    
    const navigate = useNavigate()

    return (
        <div className='bg-gray-800 px-4 py-3 flex justify-between'>
            <div className='flex items-center text-xl'>
                <FaBars className='text-white me-4 cursor-pointer' onClick={() => setSidebarToggle(!sidebarToggle)} />
                <span className='text-white font-semibold'>Beatbooker</span>
            </div>

            <div className='relative'>
                <button className='text-white group'>
                    <FaUserCircle className='w-6 h-6 mt-1 cursor-pointer' />
                    <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
                        <div className='py-2 text-sm text-gray-950 cursor-pointer' onClick={() => {
                            localStorage.clear();
                            navigate("/login")
                        }}><Link to="/login">Logout</Link></div>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default Navbar