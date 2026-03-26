import { useState, useEffect } from "react";

const images = [
  "https://d39e6chxflpvuj.cloudfront.net/media/SPW%20ICONSIAM%2028.jpg",
  "https://www.nexigroup.com/content/dam/corp/img/business/retailers-and-merchants/e-commerce/e-commerce-hero-d.webp",
  "https://ledhouse.ee/images/pages/1542579960_0_7.jpg"
];

const captions = [
  "Vibrant Shopping Starts Here",
  "Xiaomi Photography Excellence",
  "Xiaomi Watch vs Band"
];

// New array for the main text blocks, matching your image's style
const mainTexts = [
  {

    mainHeading: "Shopping Starts Here",
    description: "Brings energy to online shopping, fast performance, and a seamless experience. Discover trending products and enjoy a colorful, modern way to shop",
    buttonText: "Shop now"
  },
  {

    mainHeading: "Elevate Your Shopping",
    description: "Step into Ecomerge, where vibrant visuals meet premium functionality. Shop with confidence on a platform built for speed, trust, and style.",
    buttonText: "Shop now"
  },
  {

    mainHeading: "Your Style Your Store",
    description: "Ecomerge transforms everyday shopping into a vibrant digital experience. With modern design and powerful performance, everything you need is just a click away.",
    buttonText: "Shop now"
  }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentMainText = mainTexts[index]; // Get the current main text object

  return (
    <div className="relative w-90% h-[600px] overflow-hidden mt-24 max-w-[100%]">
      {/* Images */}
      <div
        className="flex transition-transform duration-1200 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full h-[600px] relative flex-shrink-0">
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* The old caption has been removed:
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 
                          bg-black/50 text-white px-4 py-2 rounded-lg text-lg">
              {captions[i]}
            </p>
            */}
          </div>
        ))}
      </div>

      {/* New Main Text Block - positioned absolutely over the carousel */}
      <div className="absolute inset-0 flex items-center p-16 z-10 pointer-events-none">
        <div className="text-white text-left max-w-2xl pointer-events-auto">

          {/* Small label */}
          {currentMainText.coEngineered && (
            <p className="text-sm uppercase tracking-widest text-gray-300 mb-3">
              {currentMainText.coEngineered}
            </p>
          )}

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {currentMainText.mainHeading}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            {currentMainText.description}
          </p>

          {/* Button */}
          <button className="bg-white text-black px-6 py-3 cursor-pointer rounded-md text-lg font-semibold hover:bg-gray-200 transition duration-300">
            {currentMainText.buttonText}
          </button>

        </div>
      </div>

    </div>
  );
}