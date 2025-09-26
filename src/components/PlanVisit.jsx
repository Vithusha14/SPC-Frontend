import React from 'react';
import mapImage from '../assets/MAP.svg';
import LocationIcon from '../assets/location.svg';
import PhoneIcon from '../assets/phonelogo.svg';
import ButtonView from '../assets/ButtonView.svg';
import Headerpatternleft from '../assets/Headerpatternleft.svg';

// Import Google Font Aclonica
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Aclonica&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const PlanVisit = () => {
  return (
    <section className="bg-white py-20 font-[Aclonica]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Info Section */}
          <div className="lg:w-[45%]">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-[#FF6B00] text-[20px] tracking-[0.4em] mb-2 uppercase">
                PLAN YOUR VISIT
              </h2>
              <h2 className="text-[32px] text-gray-900 mb-3">
                Find Us & Park with Ease
              </h2>
              <img 
                src={Headerpatternleft} 
                alt="Header Pattern" 
                className="w-[300px] h-30 "
              />
            </div>

            {/* Main Store Parking */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-3">
                <img src={LocationIcon} alt="Location Icon" className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg mb-2 text-black">Main Store Parking</h4>
                  <p className="text-gray-700">Directly behind Sydney Pazhamuthir Cholai</p>
                  <p className="text-gray-700">140 Pendle Way,</p>
                  <p className="text-gray-700">Pendle Hill NSW 2145</p>
                </div>
              </div>
              <div className="ml-10 space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Capacity:</span> 50+ vehicles</p>
                <p><span className="font-medium">Best For:</span> Quick grocery shopping & direct store access</p>
              </div>
            </div>

            {/* Food Court Parking */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-3">
                <img src={LocationIcon} alt="Location Icon" className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg mb-2 text-black">Food Court & Overflow Parking</h4>
                  <p className="text-gray-700">Across the street, adjacent to the shop</p>
                </div>
              </div>
              <div className="ml-10 space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Capacity:</span> 50+ vehicles</p>
                <p><span className="font-medium">Best For:</span> Quick grocery shopping & direct store access</p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-4 mb-10">
              <img src={PhoneIcon} alt="Phone Icon" className="w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg mb-3 text-black">PHONE</h4>
                <div className="flex gap-6">
                  <p><span className="font-medium">0298717076</span> </p>
                  <a href="tel:0484044550" className="text-[#02987107] underline">0484044550</a>
                  <a href="tel:0296817076" className="text-[#02987107] underline">0296817076</a>
                </div>
              </div>
            </div>

            {/* Get Direction Button */}
            <div>
              <button className="relative transition-transform hover:-translate-y-1">
                <img src={ButtonView} alt="ButtonView" className="h-12" />
                <span className="absolute inset-0 flex items-center justify-center text-white text-sm">
                  
                </span>
              </button>
            </div>
          </div>

          {/* Right Map Section */}
          <div 
            className="lg:w-[55%] relative flex-shrink-0"
            style={{
              width: "802px",
              height: "606px",
              borderRadius: "21.81px",
              opacity: 1,
            }}
          >
            <img 
              src={mapImage} 
              alt="Store Location Map" 
              className="w-full h-full object-cover rounded-[21.81px]"
            />
            {/* Store Card Overlay */}
            <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg mb-2 text-black">Sydney Pazhamuthir Cholai (SPC)</h3>
              <p className="text-gray-600 text-sm">140 Pendle Way, Pendle Hill NSW 2145</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlanVisit;
