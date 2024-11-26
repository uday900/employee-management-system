import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { set } from "react-hook-form";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
  <div className="flex h-screen ">
    
   

    {/* Sidebar */}
    <aside className="w-1/4 bg-[#415059] text-white p-6 hidden md:flex" >

    <Sidebar setIsSidebarOpen={setIsSidebarOpen}/>

    </aside>
    
    {/* Main Content */}
    <main className="w-full md:w-3/4 p-6 bg-gray-100">{children}</main>
    </div>)
};

export default Layout;
