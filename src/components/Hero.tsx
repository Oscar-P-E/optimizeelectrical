import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-10 w-full h-full object-cover"
        onCanPlayThrough={() => setVideoLoaded(true)}
      >
        <source
          src="/video/optimize-electrical-no-audio.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content of hero section */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center h-screen ${
          videoLoaded ? "bg-oe-blue bg-opacity-50" : "bg-oe-blue"
        } pb-16`}
      >
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight px-4 max-w-screen-lg">
          Need A Reliable Electrician on the Sunshine Coast?
        </h1>

        <ul className="flex flex-col gap-2 sm:gap-3 pt-8 sm:pt-10 pb-14">
          <li className="text-white text-xl sm:text-2xl text-center">
            <FontAwesomeIcon
              className="text-oe-orange pr-2 sm:pr-3"
              icon={faCheck}
            />
            Lifetime Workmanship Guarantee
          </li>
          <li className="text-white text-xl sm:text-2xl text-center">
            <FontAwesomeIcon
              className="text-oe-orange pr-2 sm:pr-3"
              icon={faCheck}
            />
            No Call Out Charges or Travel Costs
          </li>
          <li className="text-white text-xl sm:text-2xl text-center">
            <FontAwesomeIcon
              className="text-oe-orange pr-2 sm:pr-3"
              icon={faCheck}
            />
            All Types of Electrical Work
          </li>
        </ul>

        <button className="bg-oe-orange text-white py-2 px-6 sm:px-8 rounded-2xl text-xl sm:text-2xl">
          Contact Us
        </button>
      </div>
    </div>
  );
};
