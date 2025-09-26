import React from 'react';
import Border from "../assets/Border.svg"; 
import Headerpatternleft from '../assets/Headerpatternleft.svg';
import CircleIcon from "../assets/circle.png"; // avatar circle
import aboutusbutton3 from '../assets/eventbutton.svg';

const stories = [
  {
    id: 1,
    title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    image: "/story.png",
    author: "Oliver Bennett",
    date: "18 Aug 2025"
  },
  {
    id: 2,
    title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    image: "/story2.png",
    author: "Oliver Bennett",
    date: "18 Aug 2025"
  },
  {
    id: 3,
    title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    image: "/story3.png",
    author: "Oliver Bennett",
    date: "18 Aug 2025"
  }
];

const Stories = () => {
  return (
    <section className="relative bg-[#2c1810] overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full">
        <img src={Border} alt="Top Border" className="w-full block" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-5 py-20 z-10">
        {/* Heading Section */}
        <div className="flex items-start justify-between mb-16">
          <div className="flex-1">
            <h1 className="text-[20px] text-orange-500 font-[Aclonica] uppercase tracking-[0.2em] mb-4">
              STORIES
            </h1>
            <h2 className="text-[32px] text-white font-[Aclonica] mb-4">
              We find perfect events for you
            </h2>
            <div className="flex items-center gap-2 mb-5">
              <img 
                src={Headerpatternleft} 
                alt="Header Pattern" 
                className="w-[550px] h-20"
              />
            </div>
          </div>

          <div className="flex-shrink-0 mt-16">
              <img
                src={aboutusbutton3}
                alt="See more"
                className="w-[180px] h-10 -ml-3"
              />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className=" rounded-2xl overflow-hidden  transition-transform duration-300 hover:-translate-y-2  flex flex-col h-[400px]"
            >
              {/* Card Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                {/* Author Row */}
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={CircleIcon} 
                    alt="Author Avatar" 
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <span className="font-semibold text-gray-800 text-sm">
                      {story.author}
                    </span>
                    <span className="block text-xs text-gray-500">
                      • {story.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-base text-gray-800 leading-snug line-clamp-3">
                  {story.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full">
        <img src={Border} alt="Bottom Border" className="w-full block" />
      </div>
    </section>
  );
};

export default Stories;
