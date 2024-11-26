import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className="bg-[#243e4b] text-white px-2 md:px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* menu btn for mobiles */}
        <div className="bg-transparent text-white p-4 md:hidden">
          <button className="text-lg hover:text-[#FD7E00] focus:outline-none"
            onClick={() => setIsSidebarOpen(true)}>
            ☰ Menu
          </button>
        </div>

        {/* displaying side bar for mobiles */}



        { isSidebarOpen && (
          <>
          <div className="fixed top-0 left-0 bg-[#415059] p-6 h-full translate-x-0">
          <button
          onClick={()=> setIsSidebarOpen(false)}
          className="absolute right-0 top-0 rounded-full px-2 text-white bg-red-400">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <Sidebar setIsSidebarOpen={setIsSidebarOpen}/>
           
          </div>
          </>
        )}
        {/* <div className="bg-[#415059] text-white p-6 fixed top-0 left-0  translate-x-0 md:static md:translate-x-0">
         
            <Sidebar />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-sm mt-6 md:hidden block text-gray-400 hover:text-[#FD7E00]"
            >
              Close
            </button>
          


        </div> */}


        <h1 className="text-2xl font-bold">RBAC Dashboard</h1>
        <ul className="flex space-x-4 hidden md:flex ">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/users" className="hover:text-gray-400">
              User Management
            </Link>
          </li>
          <li>
            <Link to="/roles" className="hover:text-gray-400">
              Role Management
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
