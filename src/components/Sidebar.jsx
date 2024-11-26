import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({setIsSidebarOpen}) {
  return (
   
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            // onClick={() => setIsSidebarOpen(false)}
            className="block hover:text-[#FD7E00] text-lg text-center"
          >
            Home 
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            onClick={() => setIsSidebarOpen(false)}
            className="block hover:text-[#FD7E00] text-lg text-center"
          >
            User Management
          </Link>
        </li>
        <li>
          <Link
            to="/roles"
            onClick={() => setIsSidebarOpen(false)}
            className="block hover:text-[#FD7E00] text-lg text-center"
          >
            Role Management
          </Link>
        </li>
        <li>
          <Link
            to="/permissions"
            onClick={() => setIsSidebarOpen(false)}
            className="block hover:text-[#FD7E00] text-lg text-center"
          >
            Permissions
          </Link>
        </li>
       
        <li>
          <Link
            to="/privacy-policy"
            onClick={() => setIsSidebarOpen(false)}
            className="block hover:text-[#FD7E00] text-lg text-center"
          >
            Privacy & Policy
          </Link>
        </li>
      </ul>

       
    // </aside>
   
  )
}

export default Sidebar