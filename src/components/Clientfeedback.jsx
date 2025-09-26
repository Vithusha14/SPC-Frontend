import React from 'react';
import HeaderPattern from '../assets/Header pattern.svg';

const testimonials = [
  {
    id: 1,
    date: "16th Aug 2025",
    rating: 5,
    text: "நான்குபேர்போட்டுக்கள் எங்கள்போட்டும் எங்கள்போட்டு இருக்கும் என் தமிழ் இல் தமிழ் கடைமாறி!",
    author: {
      name: "Gerrit R",
      role: "Customer",
      avatar: "/profile3.png",
    },
  },
  {
    id: 2,
    date: "16th Sept 2025",
    rating: 5,
    text: "నేను ఈ సేవలను వాడుకున్న తర్వాత, నిజంగా చాలా మంచి అనుభవం వచ్చింది. వారి సేవలు చాలా బాగున్నాయి మరియు వేగంగా పనిచేస్తున్నాయి.",
    author: {
      name: "సురేష్ K",
      role: "గురువు",
      avatar: "/profile2.png",
    },
  },
  {
    id: 3,
    date: "16th Sept 2025",
    rating: 5,
    text: "ഇവരുടെ സേവനം ഉപയോഗിച്ചതിന് ശേഷം എനിക്ക് വളരെ നല്ല അനുഭവം ലഭിച്ചു. അവരുടെ സേവനങ്ങൾ വളരെ മികച്ചതാണ്.",
    author: {
      name: "അഞ്ജലി M",
      role: "വീട്ടമ്മ",
      avatar: "/profile.png",
    },
  },
]

// Star component
const Star = ({ filled = true }) => (
  <svg 
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} 
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function ClientFeedback() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-[20px] text-orange-500 font-[Aclonica] uppercase tracking-[0.4em] mb-3">
            CLIENT FEEDBACK
          </h2>
          <h3 className="text-black font-[Aclonica] mb-6 text-balance text-[32px] leading-tight">
            What they say after using our product & the services
          </h3>

          {/* Header Pattern SVG */}
          <div className="flex justify-center mb-8">
            <img 
              src={HeaderPattern} 
              alt="Decorative Pattern" 
              className="h-8 w-auto"
            />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-none">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg border-0 h-full flex flex-col rounded-2xl p-8"
              style={{
                minHeight: "316px",
              }}
            >
              <div className="flex flex-col h-full gap-6">
                {/* Header with Date and Rating */}
                <div className="flex justify-between items-start">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} filled={true} />
                    ))}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{testimonial.date}</div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1">
                  <p className="text-gray-800 text-base leading-relaxed">{testimonial.text}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  {testimonial.author.avatar ? (
                    <img
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold text-sm">
                        {testimonial.author.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.author.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
