import { motion } from "framer-motion";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type HeroProps = {
  scrollToContact: () => void;
};

export const Hero = ({ scrollToContact }: HeroProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3 + 0.3, duration: 0.5 },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.5 } },
  };

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
        {/* <div className="pt-2"></div> */}

        <motion.h1
          className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight px-4 max-w-screen-lg"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          Need A Reliable Electrician on the Sunshine Coast?
        </motion.h1>

        <ul className="flex flex-col gap-2 sm:gap-3 pt-8 sm:pt-10 pb-10">
          {[
            "Lifetime Workmanship Guarantee",
            "No Call Out Charges or Travel Costs",
            "All Types of Electrical Work",
          ].map((item, i) => (
            <motion.li
              key={item}
              className="text-white text-xl sm:text-2xl text-center"
              variants={listItemVariants}
              custom={i} // custom prop to set delay
              initial="hidden"
              animate="visible"
            >
              <FontAwesomeIcon
                className="text-oe-orange pr-2 sm:pr-3"
                icon={faCheck}
              />
              {item}
            </motion.li>
          ))}
        </ul>
        <div className="pt-1"></div>
        <motion.button
          className="bg-oe-orange text-white py-2 px-6 sm:px-8 rounded-xl text-xl sm:text-2xl transform transition duration-300 hover:scale-105 relative z-10"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          onClick={scrollToContact}
        >
          Contact Us
        </motion.button>
        <div className="pb-4"></div>
      </div>
    </div>
  );
};
