import React from "react"; 
import LazyLoad from 'react-lazy-load';
export default function People(props) {
  return (
     

<div className="w-6/12 lg:w-3/12 lg:mb-0 mb-12 md:px-4">
<div className="px-6">
<LazyLoad height={120} offsetTop={200}>
    <img
    alt="..."
    src={(props.img ? props.img : null)}
    className="shadow-lg rounded-full max-w-full mx-auto"
    style={{ maxWidth: "120px" }}
/></LazyLoad>
<div className="pt-6 text-center">
    <h5 className="md:text-xl font-bold">
    {(props.title ? props.title : "lorem ipsum")}
</h5>
    <p className="mt-1 text-sm text-gray-500 uppercase">
    {(props.des ? props.des : "lorem ipsum")}
</p>
{/* <div className="mt-6">
    <button
        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
        type="button"
    >
        <FaTwitter className="mx-auto" /> 
    </button>
    <button
        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
        type="button"
    >
        <FaFacebook className="mx-auto" /> 
    </button>
    <button
        className="bg-pink-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
        type="button"
    >
        <FaInstagram className="mx-auto" /> 
    </button>
</div> */}
</div>
</div>
</div>
       
    
  );
}