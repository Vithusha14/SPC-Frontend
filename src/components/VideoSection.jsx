import React from 'react';
import VideoThumbnail from "../assets/video1.svg";
import vdesigntop from "../assets/vdesigntop.svg";
import DecorativeBorderTop from "../assets/vdesign.svg";
import DecorativeBorderBottom from "../assets/vdesign2.svg";
import v2Image from "../assets/v2.svg";

const VideoSection = () => {
  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-5">
        {/* Top Decorative Border */}
        <div className="flex justify-center items-center mb-8">
          <img 
            src={vdesigntop} 
            alt="vdesigntop" 
            className="w-[703px] h-[54px] object-contain" 
          />
        </div>
        
        {/* Video Section with Adjacent Image */}
        <div className="flex justify-center items-start gap-4 my-10">
          {/* Main Video Thumbnail */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition cursor-pointer">
            <img 
              src={VideoThumbnail} 
              alt="Store Video Thumbnail" 
              className="w-[813px] h-[528px] object-cover" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-6 flex justify-between items-end">
              <div className="text-white text-lg font-semibold text-left">A Vibrant Look Inside Our Stores & Food Court</div>
              <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center ml-6 hover:bg-gray-100 transition-all duration-300">
                <span className="text-2xl text-gray-800 ml-1">▶</span>
              </button>
            </div>
          </div>
          
          {/* Adjacent v2 Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition cursor-pointer">
            <img 
              src={v2Image} 
              alt="Additional Content" 
              className="w-[200px] h-[528px] object-cover" 
            />
          </div>
        </div>
        

                {/* Bottom Decorative Border */}
        <div className="flex justify-center items-center">
          <img 
            src={DecorativeBorderBottom} 
            alt="Decorative Border Bottom" 
            className="w-[703px] h-[54px] object-contain" 
          />
        </div>

        
        {/* Diamond Decorative Elements */}
        <div className="flex justify-center items-center gap-4 my-8">
          <img 
            src={DecorativeBorderTop} 
            alt="Decorative Border Top" 
            className="w-[703px] h-[54px] object-contain" 
          />
        </div>
        

      </div>
    </section>
  );
};

export default VideoSection;