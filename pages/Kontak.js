import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js"; 
import RowKontak from "../components/kontak-row.js";

// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default class Kontak extends Component {
    render() {
  
        return (
            <>
<Navbar />
<main> 

<section className="py-20 bg-gray-200">
	<div className="container mx-auto  px-4">
        <div class="grid lg:grid-cols-3 gap-4">

            <a href="https://www.instagram.com/kios.id_/" title="visit Kios.id on Instagram" className="bg-gray-100 shadow-lg rounded-lg px-5 py-5">
                <div className="flex flex-wrap items-center">
                    <div className="flex-shrink-0">
                        <img className="w-16" src={require("../img/socmed/ig.png")} />
                    </div>
                    <div className="ml-6 font-bold"> 
                        @KIOS.ID_
                    </div>
                </div>
            </a>

            <a href="https://kolektifsampah.id" className="bg-gray-100 shadow-lg rounded-lg px-5 py-5">
                <div className="flex items-center">
                <div className="flex-shrink-0">
                <img className="w-16" src={require("../img/socmed/web.png")} />
                </div>
                <div className="ml-6 font-bold">
                www.kolektifsampah.id
                </div>
                </div>
            </a>

            <a href="#" className="bg-gray-100 shadow-lg rounded-lg px-5 py-5">
                <div className="flex items-center">
                <div className="flex-shrink-0">
                <img className="w-16" src={require("../img/socmed/wa.png")} />
                </div>
                <div className="ml-6 font-bold">
                081523725636 
                </div>
                </div>
            </a>

            <a href="https://www.youtube.com/channel/UCac-PhQx7EQWLkUpkqso-Rg" className="bg-gray-100 shadow-lg rounded-lg px-5 py-5">
                <div className="flex flex-wrap items-center">
                <div className="flex-shrink-0">
                <img className="w-16" src={require("../img/socmed/youtube.png")} />
                </div>
                <div className="ml-6">
                KIOS ID 
                </div>
                </div>
            </a>

            <a href="https://www.facebook.com/kolektifsampah" className="bg-gray-100 shadow-lg rounded-lg px-5 py-5">
                <div className="flex items-center">
                <div className="flex-shrink-0">
                <img className="w-16" src={require("../img/socmed/fb.png")} />
                </div>
                <div className="ml-6 font-bold">
                KIOS.ID 
                </div>
                </div>
            </a>


            


            <a href="#" className="bg-gray-100 shadow-lg rounded-lg px-5 py-5">
                <div className="flex items-center">
                <div className="flex-shrink-0">
                <img className="w-16" src={require("../img/socmed/tw.png")} />
                </div>
                <div className="ml-6 font-bold">
                @kios_id
                </div>
                </div>
            </a>

            
        </div>
	</div> 
</section>

 {/** kontak row */}
<section className="py-20  bg-gray-200">
	<div className="container mx-auto  px-4">
    <RowKontak />
	</div> 
</section>


{/* <section className="pb-20 -mt-24 bg-gray-100">
  <div className="container mx-auto md:px-4"> 
    <div className="flex flex-wrap">
      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
			<TwitterTimelineEmbed sourceType="profile" screenName="kios_id" options={{height: 400}} />
        </div>
      </div>
      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
		<TwitterTimelineEmbed sourceType="profile" screenName="mastrayasa" options={{height: 400}} />
        </div>
      </div>
      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"> 
		<TwitterTimelineEmbed sourceType="profile" screenName="riaricis" options={{height: 400}} />
        </div>
      </div>
    </div>
</div>
</section> */}

  
 


  

                    




                </main>
                <Footer />
            </>
        );
    }
}