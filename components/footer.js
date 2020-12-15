import React from "react";
import {  FaTwitter, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import NavBottom from "../components/NavBottom.js";
export default function Footer() {
  return (
  <>
      <footer className="py-10 bg-hijau">
        {/* <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blue-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div> */}



        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full  px-4 mb-10 lg:mb-0 text-center">
              <strong className="text-white">Alamat Kantor</strong>
              <h5 className="text-sm mt-0 mb-2 text-white">
                Jl. Ra Kartini No.41 Kota Palu  
              </h5>
              <div className="mt-2 text-white">
              <a href="https://www.facebook.com/kolektifsampah" className="inline mr-5 w-10 hover:text-blue-600"><FaFacebookF className="inline" /></a>
              <a href="https://www.youtube.com/channel/UCac-PhQx7EQWLkUpkqso-Rg" className="inline mr-5 w-10 hover:text-red-600"><FaYoutube className="inline" /></a>
              <a href="https://www.instagram.com/kios.id_/" className="inline mr-5 w-10 hover:text-pink-700"><FaInstagram className="inline" /></a>
              {/* <a href="#" className="inline mr-5 w-10 hover:text-indigo-500"><FaTwitter className="inline" /></a> */}
 
              </div>

              <div className="text-sm font-light text-white py-1">
               Kios.id - Kolektif Sampah Palu 2020 &copy; All Rights Reserved
              </div> 
            </div>

            

          </div>
          {/* <hr className="my-2 md:my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 py-1">
                Alamat Kantor<br />
                Dinas Perindustrian dan Perdagangan Provinsi Sulawesi Tengah<br />
                2020 &copy; All Rights Reserved
              </div>
              <p className="text-xs text-gray-600 py-1">
              dikembangkan oleh <a href="https://sibangstudio.com" title="Sibang Studio">www.sibangstudio.com</a>
              </p>
            </div>
          </div> */}
        </div>
      </footer>
      <NavBottom />
    </>
  );
}