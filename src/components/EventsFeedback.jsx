import React from 'react';
import HeaderPattern from '../assets/Header pattern.svg';
import aboutusbutton3 from '../assets/eventbutton.svg';
import event1 from '../assets/event1.svg';
import event2 from '../assets/event2.svg';
import event3 from '../assets/event3.svg';

const EventsFeedback = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Events Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
          {/* Left Side - Images with exact positioning */}
          <div className="flex-1 relative">
            {/* Event 1 - Top Left */}
            <img
              src={event1}
              alt="Event 1"
              className="absolute w-[155px] h-[187px] rounded-[11.65px] object-cover shadow-lg"
              style={{ top: '7.36px', left: '0px' }}
            />
            
            {/* Event 2 - Bottom Left */}
            <img
              src={event2}
              alt="Event 2"
              className="absolute w-[155px] h-[185px] rounded-[11.65px] object-cover shadow-lg"
              style={{ top: '233px', left: '0px' }}
            />
            
            {/* Event 3 - Large Right Image */}
            <img
              src={event3}
              alt="Event 3"
              className="absolute w-[437px] h-[364px] rounded-[16.35px] object-cover shadow-lg"
              style={{ top: '53.94px', left: '164.25px' }}
            />
            
            {/* Container height to accommodate all images */}
            <div className="h-[550px] w-[600px]"></div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-[20px] text-orange-500 font-[Aclonica] uppercase tracking-[0.4em] mb-3">
              EVENTS
            </h2>
            <h1 className="text-[32px] text-gray-900 font-bold font-[Aclonica] mb-6 leading-snug">
              We find perfect events for you
            </h1>
            <div className="flex items-center mb-6">
              <img src={HeaderPattern} alt="HeaderPattern" className="h-10 mr-3" />
              
            </div>
            <p className="text-[16px] text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla nunc in molestie feugiat. Nunc auctor consectetur elit,
              quis pulvinar.
            </p>
            <p className="text-[16px] text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla nunc in molestie feugiat. Nunc auctor consectetur elit,
              quis pulvinar.
            </p>
            <button className="relative inline-block transition-transform hover:-translate-y-1">
              <img
                src={aboutusbutton3}
                alt="See more"
                className="w-[180px] h-10 -ml-3"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Aclonica] text-[14px] text-[#310000] pointer-events-none">
             
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsFeedback;
