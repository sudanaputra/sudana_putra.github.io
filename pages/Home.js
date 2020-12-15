import React, { Component } from 'react';

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RowKontak from "../components/kontak-row.js";
import People from "../components/People.js";
import IconList from "../components/icon-list.js";
import { FaRegEnvelope, FaRegBuilding, FaHeadset,FaCheck,FaMobile,FaIn,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import Background from '../img/bg.jpg';

import LazyLoad from 'react-lazy-load';

export default class Home extends Component {
  render() {

    let galeri = [ 
      { 
        image:require("../img/galeri/galeri1.jpg")
    },{ 
      image:require("../img/galeri/galeri2.jpg")
    },{ 
      image:require("../img/galeri/galeri3.jpg")
    },{ 
      image:require("../img/galeri/galeri4.jpg")
    } ,{ 
      image:require("../img/galeri/galeri5.jpg")
    } ,{ 
      image:require("../img/galeri/galeri6.jpg")
    } 
  ]

   



    return (
      <>
        <Navbar transparent />

        

        <main>
          <div className="relative flex content-center items-center justify-center py-32 md:py-64"
            >
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('"+ Background +"')"
              }}>
              <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-hijau"></span>
            </div>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="">
                    <h1 className="text-white font-semibold text-2xl md:text-5xl">
                    KOLEKTIF SAMPAH INDONESIA
                    </h1>
                    <p className="mt-4 md:text-lg text-gray-300">
                    Selamatkan lingkungan mu, mulai dari dirimu sendiri
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div
              className="top-auto -mb-1 bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px", transform: "translateZ(0)" }}
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
                  className="text-gray-100 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>


          





		  

          


<section className="pb-20 -mt-24 bg-gray-100">
  <div className="container mx-auto md:px-4">


    <div className="flex flex-wrap">
      <div className="lg:pt-12 md:pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-4 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-10 h-10 mb-0 md:w-12 md:h-12 md:mb-5 shadow-lg rounded-full bg-green-600"> 
            <FaCheck className="mx-auto text-5xl" /> 
            </div>
            <h6 className="md:text-xl font-bold text-green-800">
            Jemput Sampah
            </h6>
            <p className="mt-2 mb-4 text-gray-600 text-sm lg:text-base">
            Menyediakan Jasa pengangkutan sampah dengan bekerjasama dengan pengepul untuk pengangkutan dan penjualan sampah
          </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-4 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
          <div className="text-white p-3 text-center inline-flex items-center justify-center w-10 h-10 mb-0 md:w-12 md:h-12 md:mb-5 shadow-lg rounded-full bg-green-600">
            <FaCheck className="mx-auto text-5xl" /> 
            </div>
            <h6 className="md:text-xl font-bold text-green-800">
              Pemberdayaan
            </h6>
            <p className="mt-2 mb-4 text-gray-600 text-sm lg:text-base">
            Bekerja sama dengan organisasi atau aktivis lingkungan yang membutuhkan dan menggunakan sampah untuk didaur ulang dan merubahnya menjadi sesuatu yang bernilai ekonomis (ex; tas dari baliho, keranjang dari bungkus snack, dll)
          </p>
          </div>
        </div>
      </div>

      <div className="md:pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
			
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-10 h-10 mb-0 md:w-12 md:h-12 md:mb-5 shadow-lg rounded-full bg-green-600">
            <FaCheck className="mx-auto text-5xl" /> 
            </div>
            <h6 className="md:text-xl font-bold text-green-800">
              Edukasi
          </h6>
            <p className="mt-2 mb-4 text-gray-600 text-sm lg:text-base">
            Mengajak dan mengedukasi masyarakat terhadap pentingnya memilah sampah (melalui sosial media maupun kampanye secara langsung)
          </p>
          </div>
        </div>
      </div>
    </div>
</div>
</section>


{/* 
<section className="py-20  bg-green-100">
  <div className="container mx-auto px-4">
  <div className="flex flex-wrap justify-center text-center mb-12">
                <div className="w-full lg:w-6/12 px-4">
                  <h2 className="text-4xl font-semibold">
                  What we do?
                </h2>
                   
                </div>
              </div>
    <div className="flex flex-wrap">
      <div className="w-full md:w-4/12 px-4 md:text-center">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-4 shadow-lg rounded-lg bg-yellow-200">
          <div className="px-4 py-4 flex-auto">
            <p>
            Menyediakan Jasa pengangkutan sampah dengan bekerjasama dengan pengepul untuk pengangkutan dan penjualan sampah
          </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/12 px-4 md:text-center">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-4 shadow-lg rounded-lg bg-yellow-200">
          <div className="px-4 py-4 flex-auto"> 
            <p>
            Bekerja sama dengan organisasi atau aktivis lingkungan yang membutuhkan dan menggunakan sampah untuk didaur ulang dan merubahnya menjadi sesuatu yang bernilai ekonomis (ex; tas dari baliho, keranjang dari bungkus snack, dll)
          </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/12 px-4 md:text-center">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-yellow-200">
          <div className="px-4 py-4 flex-auto"> 
            <p className="">
            Mengajak dan mengedukasi masyarakat terhadap pentingnya memilah sampah (melalui sosial media maupun kampanye secara langsung)
          </p>
          </div>
        </div>
      </div>
    </div>
</div>
</section> */}





<section className="pb-20  bg-gray-100">
    <div className="container mx-auto px-4">
    	<div className="flex flex-wrap items-center">
          <div className="w-full md:w-7/12 lg:w-6/12 px-4 mr-auto ml-auto">
            <h3 className="text-xl md:text-3xl mb-2 font-bold leading-normal">
                Masalah
            </h3>
            <ol className="list-inside list-disc text-sm md:text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              <li>kota   palu   tiap   harinya menghasilkan   sampah   sebanyak   480   kubik   dengan presentase jumlah sampah plastik sebesar 30 %</li>
              <li>Pengelolaan  yang  tidak baik mengakibatkan  meningkatnya debit  sampah  yang masukke TPA</li> 
              <li>Lingkungan terlihat semakin kumuh dan Kotor</li> 
            </ol> 
          </div>

          <div className="w-full md:w-5/12 lg:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-800">
                  <img alt="..."
                    src={require("../img/masalah.jpg")}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-4 mb-4">
          
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-green-800 fill-current"
                      ></polygon>
                    </svg>
                    
                    <p className="text-sm font-light mt-2 text-white">
                      Sampah terlihat menggunungan di tengah pusat kota Palu, Kondisi ini sangat memprihatinkan  
                  </p>
                  </blockquote>
                </div>
          </div>
        </div>
	</div>
</section>



<section className="pb-20   -mt-24">
    <div className="container mx-auto px-4">
    	<div className="flex flex-wrap md:flex-row-reverse items-center mt-32">
            <div className="w-full md:w-7/12 lg:w-6/12 px-4 mr-auto ml-auto">
                <h3 className="text-xl md:text-3xl mb-2 font-bold leading-normal">
                    Solusi
                </h3>
				<ol className="list-inside list-disc text-sm md:text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
					<li>Pengangkutan sampah yang terjadwal</li>
					<li>Pemilahandan pengolahan sampah berdasarkan jenisnya</li>
					<li>Melakukan sosialisasi kepada masyarakat</li> 
					<li>Melakukan kampanye “Save Earth”</li> 
				</ol> 
            </div> 
            <div className="w-full md:w-5/12 lg:w-4/12 px-4 mr-auto ml-auto">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-800">
                    <img
                      alt="..."
                      src={require("../img/angkut.jpg")}
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-4 mb-4">
						
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block"
                        style={{
                          height: "95px",
                          top: "-94px"
                        }}
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-green-800 fill-current"
                        ></polygon>
                      </svg>
                      
                      <p className="text-sm font-light mt-2 text-white">
                      Truk Sampah terlihat mengangkut sampah dengan rutin dan terjadwal sehingga mengurangi tumpukan sampah  
                    </p>
                    </blockquote>
                  </div>
            </div>
        </div>
	</div>
</section>


<section className="pb-20  pt-20">
    <div className="container mx-auto md:px-20">
        <div className="flex flex-wrap">

        <div className="w-full md:w-12/12 px-4 my-auto text-center">
                <h2 className="text-xl md:text-4xl font-bold">Cara Kerja</h2>
                <p className="text-lg text-gray-200"> </p>
            </div>

            <div className="w-full md:w-12/12 px-4 my-auto">
                  <img
                    alt="..."
                    src={require("../img/cara-kerja.png")}
                    className=" mx-auto" />
            </div>
            
        </div>
    </div>
</section>


<section className="pb-20  bg-hijau  pt-20">
    <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 my-auto">
                  <img
                    alt="..."
                    src={require("../img/logo2.jpg")}
                    className="shadow-lg rounded-full w-40 md:w-64 mx-auto" />
            </div>
            <div className="w-full md:w-7/12 px-4 my-auto text-white text-center md:text-left">
                <h2 className="text-lg md:text-4xl font-bold mt-5 mt-0">Tentang Kami</h2>
                <p className="text-sm md:text-lg text-gray-200">Kios.id atau kolektif sampah adalah platform yang dibentuk pada bulan maret tahun 2020 yang bertujuan untuk menghubungkan antara masyarakat dan pengepul kecil/pemulung terdekat sehingga dapat lebih mudah dalam menjual dan mengelola sampah dengan cepat.</p>
            </div>
        </div>
    </div>
</section>



<section className="py-10 bg-gray-300">
	<div className="container mx-auto px-4"> 
	<div className="flex flex-wrap justify-center text-center mb-12">
		<div className="w-full lg:w-6/12 px-4">
			<h2 className="text-2xl md:text-4xl font-semibold">Dampak Sosial</h2> 
		</div>
		</div>
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
		<IconList title="Peningkatan pemasukan untuk pengepul kecil" />
		<IconList title="Pengurangan sampah yang masuk ke TPA" />
		<IconList title="Pengelolaan persampahan yang baik dan berdampak baik bagi lingkungan" /> 
		</div>
	</div>
</section>


<section className="py-10 bg-gray-300">
	<div className="container mx-auto px-4"> 
	<div className="flex flex-wrap justify-center text-center mb-12">
		<div className="w-full lg:w-6/12 px-4">
			<h2 className="text-2xl md:text-4xl font-semibold">Nilai Produk</h2> 
		</div>
		</div>
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
		<IconList title="Angkut Sampah" des="Pengangkutan persampahan yang terjadwal" /> 
		<IconList title="Pelatihan" des="Training Pemilihan sampah secara tidak langsung" /> 
		<IconList title="Tukar Sampah" des="Menyediakan system point berdasarkan jumlah pengangkutan yang dimana pointnya dapat di tukar dengan hasil dari sampah organic (pupuk kompos) dan produk ramah lingkungan (botol air minum, sedotan dll)" /> 
		<IconList title="Low Cost" des="Harga yang terjangkau (20-35rb tergantung jumlah pengangkutan)" /> 
		<IconList title="Komunitas" des="Mendapatkan sampah anorganik lebih banyak dan tidak memakan waktu" /> 
		</div>
	</div>
</section>


   

 
      


          

          




<section className="pb-20  bg-hijau text-white pt-20">
<div className="container mx-auto px-4">
	<div className="flex flex-wrap">
		
	<div className="w-6/12 md:w-3/12 px-4 text-center pb-10 md:pb-0">
		<FaRegEnvelope className="mx-auto text-5xl mb-2"/>
		<h1 className="text-xl md:text-3xl">100+</h1>
		<p className="font-light">Pelanggan</p>
	</div>

	<div className="w-6/12 md:w-3/12 px-4 text-center pb-10 md:pb-0">
		<FaRegBuilding className="mx-auto text-5xl mb-2"/>
		<h1 className="text-xl md:text-3xl">10+</h1>
		<p className="font-light">Mitra</p>
	</div>

	<div className="w-6/12 md:w-3/12 px-4 text-center pb-10 md:pb-0">
	<FaHeadset className="mx-auto text-5xl mb-2"/>
	<h1 className="text-xl md:text-3xl">350+</h1>
		<p className="font-light">Volunteer</p>
	</div>

	<div className="w-6/12 md:w-3/12 px-4 text-center pb-10 md:pb-0">
	<FaRegEnvelope className="mx-auto text-5xl mb-2"/>
	<h1 className="text-xl md:text-3xl">150+</h1>
		<p className="font-light">Dukungan</p>
	</div>

	</div>
</div>
</section>

 


<section className="pb-20 bg-gray-300 pt-24">
  <div className="container mx-auto px-4">
       
    <div className="flex flex-wrap"> 
    {galeri.map((value, index) => {
      return (
      <div key={index} className="w-full md:w-12/12 lg:w-3/12">
        <div className="relative flex min-w-0 w-full mb-2">
          <div className="px-4 py-5 sm:pb-0 flex-auto">
		  <LazyLoad height={280} offsetTop={200}><img
              alt="..."
              src={value.image}
              className="w-full align-middle rounded-lg"
            /></LazyLoad>
          </div>
        </div>
      </div>
      )
    })} 
      
    </div> 
  </div>
</section>



 


<section className="pt-20 pb-48">
	<div className="container mx-auto md:px-4">

		<div className="flex flex-wrap justify-center text-center mb-12">
			<div className="w-full lg:w-6/12 px-4">
				<h2 className="text-2xl md:text-4xl font-semibold">Super Team</h2>
				<p className="text-sm md:text-lg leading-relaxed m-4 text-gray-600">
					Berikut adalah kakak-kakak keren yang bergabung menjadi tim kami
				</p>
			</div>
		</div>

		<div className="flex flex-wrap">
			<People img={require("../img/team/rafid.jpg")} title="Rafid Mahful, S.T, M.Eng, IAP" des="CEO" />
			<People img={require("../img/team/ekho.jpg")} title="Rahmat Ekho Saputra" des="Direktur Creative and Marketing" />
			<People img={require("../img/team/nanda.jpg")} title="Nanda Virginia K, S.P.W.K" des="Direktur Public Relation Internal" />
			<People img={require("../img/team/tri.jpg")} title="Tri Wahyuni, S.P.W.K" des="Direktur Public Relation Eksternal" />
			<People img={require("../img/team/andika.jpg")} title="Andika Jaya, S.P.W.K" des="Divisi Hubungan Kerjasama" />
			<People img={require("../img/team/laviola.jpg")} title="Laviola Israwati" des="Divisi pengelolaan Produk" />
			<People img={require("../img/team/lila.jpg")} title="Lila Hafitzha, S.Pd" des="Wakil DIrektur Public Relation Eksternal" />
			<People img={require("../img/team/assy.jpg")} title="Muhammad Assy_ary Gunarif, S.P.W.K" des="Divisi Pemanfaatan Produk" />
			<People img={require("../img/team/budi.jpg")} title="Prasetyo Budi Lesmono" des="Divisi Hubungan Pemerintah" />
			<People img={require("../img/team/ragil.jpg")} title="Ragil Cahya Ningrum" des="Divisi Hubungan NGO" />
			<People img={require("../img/team/reina.jpg")} title="Reina Anggita Ramadhany" des="wakil direktur creative dan marketting" />
			<People img={require("../img/team/shafa.jpg")} title="Shafa Lisyahada Maulidyah" des="Divisi Marketing" />  
		</div>
	</div>
	</section>

 
          


		  
{/** kontak row */}
<section className="py-20  bg-gray-300">
	<div className="container mx-auto  px-4">
  <RowKontak />
		
	</div> 
</section>


        </main>
        <Footer />
      </>
    );
  }
}