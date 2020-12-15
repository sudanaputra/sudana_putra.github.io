import React, { Component } from 'react';

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js"; 

export default class Layanan extends Component {
    render() {

        let layanan = [ 
            {
                title: 'PAKET 1', 
                des: '8x Angkut per bulan',
                des1: 'Pengangkutan 2 Kali seminggu',
                price: "Rp. 20.000"
            },

            {
                title: 'PAKET 2', 
                des: '12x Angkut per bulan',
                des1: 'Pengangkutan 3 Kali seminggu',
                price: "Rp. 30.000"
            },

            {
                title: 'PAKET 3', 
                des: '16x Angkut per bulan',
                des1: 'Pengangkutan 4 Kali seminggu',
                price: "Rp. 40.000"
            }, 
        ]

        let bank = [ 
            {
                title: 'BNI', 
                nomor: '0779789644', 
                nama: 'SHAFA LISYAHADA', 
                image:require("../img/bank/bni.png")
            },

            {
                title: 'BTN', 
                nomor: '0779789644', 
                nama: 'SHAFA LISYAHADA', 
                image:require("../img/bank/btn.png")
            },

            {
                title: 'BRI', 
                nomor: '0779789644', 
                nama: 'SHAFA LISYAHADA', 
                image:require("../img/bank/bri.png")
            }, 
        ]

        


        return (
            <>
<Navbar />
<main> 

<section className="pb-20 bg-gray-200">
    <div className="container mx-auto px-4 pt-5">

        <h1 className="text-5xl font-bold text-center pt-10">PAKET LAYANAN</h1>
        <p className="text-gray-600 text-center pb-10">SILAHKAN PILIH PAKET YANG KAMU MAU</p>
        <div class="grid sm:grid-cols-3 lg:grid-cols-3 gap-8">
        {layanan.map((value, index) => {
            return (
            <div className="bg-white shadow-lg rounded-lg text-center py-10"> 
                <h3 className="text-3xl font-bold mb-1">{value.title}</h3>
                <p className="px-5 text-gray-700 mb-1">{value.des}</p>
                <p className="px-5 text-gray-700 mb-1">{value.des1}</p>
                <p className="px-5 mb-5 text-red-600 text-xl font-bold">{value.price}</p>

                <a href="#" className=" bg-green-500 text-white hover:bg-green-700 active:bg-pink-600 text-md px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none " >Langganan</a>
            </div>)
        })} 
        </div> 
    </div>
</section>


<section className="pb-20 bg-gray-100">
    <div className="container mx-auto px-4 pt-5">

        <h1 className="text-5xl font-bold text-center pt-10">Pembayaran</h1>
        <p className="text-gray-600 text-center pb-10">SILAHKAN LAKUKAN PEMBAYARAN DALAM WAKTU 24 JAM</p>
        <div class="mb-10 grid sm:grid-cols-3 lg:grid-cols-3 gap-8">
        {bank.map((value, index) => {
            return (
            <div className="bg-white shadow-lg rounded-lg text-center py-10"> 
            <img
                alt="..."
                src={value.image}
                className="mx-auto  w-24 mb-2" />
                
                <p className="px-5 text-gray-700 mb-1">Nomor Rekening {value.nomor}</p>
                <p className="px-5 text-gray-700 mb-1">A.N {value.nama}</p>  
            </div>)
        })} 
        </div> 

        <p className="text-gray-600 text-center pb-10">JIKA SUDAH MEMBAYAR, SILAHKAN KIRIM BUKTI PEMBAYARAN MELALUI WHATSAPP 081523725636</p>
    </div>
</section>

{/* 
<section className="pb-20 bg-gray-100">
    <div className="container mx-auto px-4 pt-5">
        <h1 className="text-5xl font-bold text-center py-10">KETRING ACARA</h1>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {layanan.map((value, index) => {
            return (
            <div className="relative  bg-white shadow-lg rounded-lg text-center pb-8">
                <img
                alt="..."
                src={value.image}
                className="mx-auto  w-full mb-2" />
                <div className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white mt-2 mr-2 rounded" >{value.day}</div>
                <h3 className="text-xl font-bold">{value.title}</h3> 
                <p className="px-5 mb-3 text-gray-500">Mulai dari <span className="text-red-500 font-bold">{value.price}</span></p> 
                <p>
                    <a href="#" className=" bg-red-500 text-white hover:bg-red-700 active:bg-pink-600 text-md px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none " >Pesan Sekarang</a>
                </p>
            </div>)
        })} 
        </div> 
    </div>
</section>  */}
 

 



{/*  
 
<section className="py-10  bg-gray-200">
    <div className="container mx-auto">
        <h1 className="text-5xl font-medium px-5 pt-5">Pelayanan Unggulan Rumah Kemasan</h1>
        <div className="flex flex-wrap">  
            <div className="w-full md:w-4/12 px-5">
                    <img
                    alt="..."
                    src={require("../img/angkut.jpg")}
                    className="shadow-lg rounded-lg max-w-full"
                />
                <h6 className="text-xl font-semibold mt-5">Desain Kemasan</h6>
                <p className="text-sm text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 2015</p>
                <p className="mt-2"><strong>Rp. 340.000</strong> - <span className="text-gray-600">Pertemuan</span></p>
            </div>
            <div className="w-full md:w-4/12 px-5">
                    <img
                    alt="..."
                    src={require("../img/angkut.jpg")}
                    className="shadow-lg rounded-lg max-w-full"
                />
                <h6 className="text-xl font-semibold mt-5">Konsultasi Kemasan</h6>
                <p className="text-sm text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 2015</p>
                <p className="mt-2"><strong>Rp. 400.000</strong> - <span className="text-gray-600">Pertemuan</span></p>
            </div>
            <div className="w-full md:w-4/12 px-5">
                    <img
                    alt="..."
                    src={require("../img/angkut.jpg")}
                    className="shadow-lg rounded-lg max-w-full"
                />
               <h6 className="text-xl font-semibold mt-5">Produksi Cetak Kemasan</h6>
                <p className="text-sm text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 2015</p>
                <p className="mt-2"><strong>Rp. 230.000</strong> - <span className="text-gray-600">Pertemuan</span></p>
            </div>
                
        </div>
    </div>
</section>   */}

  
 


  

                    




                </main>
                <Footer />
            </>
        );
    }
}