import React from 'react'
import { FaHome, FaUser } from "react-icons/fa"
import Navbar from './Navbar'

function Sidebar({ sidebarToggle, setSidebarToggle }) {
    return (
        <div className='flex'>
            <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
                <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
            </div>
            <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2 ml-0 mt-0`}>
                <div className='my-2 mb-4'>
                    <h1 className='text-2xl text-white font-bold'>Admin Dashboard</h1>
                </div>
                <hr />
                <ul className='mt-3 text-white font-bold'>
                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="" className='px-3'>
                            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                            Home
                        </a>
                    </li>
                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="/users" className='px-3'>
                            <FaUser className='inline-block w-6 h-6 mr-2 -mt-2'></FaUser>
                            Users
                        </a>
                    </li>
                    {/* <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="/singers" className='px-3'>
                            <FaUser className='inline-block w-6 h-6 mr-2 -mt-2'></FaUser>
                            Singers
                        </a>
                    </li> */}

                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="/pending-singers" className='px-3'>
                            <FaUser className='inline-block w-6 h-6 mr-2 -mt-2'></FaUser>
                             Pending Singers
                        </a>
                    </li>

                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="/approve-singers" className='px-3'>
                            <FaUser className='inline-block w-6 h-6 mr-2 -mt-2'></FaUser>
                              Approve Singers
                        </a>
                    </li>

                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="/reject-singers" className='px-3'>
                            <FaUser className='inline-block w-6 h-6 mr-2 -mt-2'></FaUser>
                              reject Singers
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar