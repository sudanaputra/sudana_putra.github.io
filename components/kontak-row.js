import React from "react"; 
import { FaRegEnvelope, FaRegBuilding, FaHeadset,FaUser,FaMobile,FaIn,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
export default function RowKontak(props) {
  return (
    <div className="grid lg:grid-cols-3 gap-4">

		<div className="bg-gray-100 shadow-lg rounded-lg px-5 py-5">
			<div className="flex">
				<div className="flex-shrink-0">
					<FaRegBuilding className="text-5xl" /> 
				</div>
				<div className="mt-0 ml-6">
					<a href="#" className="block leading-tight font-semibold text-gray-900 hover:underline">Alamat Kantor</a>
					<p className="mt-2 text-gray-600">Jl. Ra Kartini No.41 Kota Palu</p>
				</div>
			</div>
		</div>

		<div className="bg-gray-100 shadow-lg rounded-lg px-5 py-5">
			<div className="flex">
				<div className="flex-shrink-0">
					<FaHeadset className="text-5xl" /> 
				</div>
				<div className="mt-0 ml-6">
					<a href="#" className="block leading-tight font-semibold text-gray-900 hover:underline">Telepon</a>
					<p className="mt-2 text-gray-600">081523725636</p>
				</div>
			</div>
		</div>
    
		<div className="bg-gray-100 shadow-lg rounded-lg px-5 py-5">
			<div className="flex">
				<div className="flex-shrink-0">
					<FaRegEnvelope className="text-5xl" /> 
				</div>
				<div className="mt-0 ml-6">
					<a href="#" className="block leading-tight font-semibold text-gray-900 hover:underline">Email</a>
					<p className="mt-2 text-gray-600">kios.id20@gmail.com</p>
				</div>
			</div>
		</div>
	</div>
       
    
  );
}