import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const aboutCards = [
  {
    title: "About US",
    description:
      "Amod Griha is a next-generation apartment management solution crafted to simplify day-to-day operations and enrich community living.",
    image: "/images/card1.jpeg",
  },
  {
    title: "Simple Installation",
    description:
      "Our platform enables real-time visitor tracking, gate pass approvals, and secure community access for enhanced safety.",
    image: "/images/card2.jpeg",
  },
  {
    title: "Easy Management",
    description:
      "Easily manage monthly maintenance fees, bill payments, and financial transactions, reducing manual effort and errors.",
    image: "/images/card3.jpeg",
  },
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === aboutCards.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === aboutCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? aboutCards.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${aboutCards.length * 100}%`,
              }}
            >
              {aboutCards.map((card, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  style={{ height: "200px" }} // Increased height
                >
                  {/* Image Section */}
                  <img
                    className="object-cover w-full rounded-t-lg h-48 md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
                    src={card.image}
                    alt={card.title}
                  />

                  {/* Text Section */}
                  <div className="flex flex-col justify-between p-4 leading-normal w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {card.title}
                    </h5>
                    <div className="flex flex-row justify-between p-4 leading-normal w-1/6 h-full overflow-hidden">

                      {card.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6">
            {aboutCards.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 mx-1 rounded-full cursor-pointer transition-all ${
                  index === currentIndex ? "bg-blue-600 scale-110" : "bg-gray-400"
                }`}
                onClick={() => {
                  setIsAutoScrolling(false);
                  setCurrentIndex(index);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;