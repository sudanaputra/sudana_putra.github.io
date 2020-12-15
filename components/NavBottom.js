import React from "react";
import {   FaAddressBook, FaHome, FaNewspaper } from "react-icons/fa";
import { 
  Link 
} from "react-router-dom";
export default function NavBottom() {
  return (
  
    <nav className="z-10 fixed bottom-0 w-screen px-4 py-2 flex flex-row justify-center items-baseline bg-white lg:hidden" style={{
      boxShadow:'0 -8px 24px 0 rgba(0,0,0,.1)'
    }}><div className="navbar-items w-full max-w-2xl flex flex-row justify-center items-center">

 
<Link className="mx-3 sm:mx-5 block px-2 py-1 text-center text-gray-600 hover:text-gray-700 no-underline" to={'/'}>
<FaHome className="mx-auto" /> <label className="block:320 pointer-events-none text-sm">Home</label>
</Link>

<Link className="mx-3 sm:mx-5 block px-2 py-1 text-center text-gray-600 hover:text-gray-700 no-underline" to={'/layanan'}>
<FaNewspaper className="mx-auto" /> <label className="block:320 pointer-events-none text-sm">Layanan</label>
</Link>

<Link className="mx-3 sm:mx-5 block px-2 py-1 text-center text-gray-600 hover:text-gray-700 no-underline" to={'/hubungi-kami'}>
<FaAddressBook className="mx-auto" /> <label className="block:320 pointer-events-none text-sm">Kontak</label>
</Link>
            
       
   </div></nav>
    
  );
}