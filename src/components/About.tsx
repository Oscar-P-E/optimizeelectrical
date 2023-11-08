import { motion } from "framer-motion";

export const About = () => {
  // Initial and animate states for the motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-oe-blue bg-opacity-10 text-oe-blue text-center py-8 px-4 sm:py-36 sm:px-8 flex flex-col items-center justify-center gap-6 sm:gap-12">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold xl:w-[70%] px-1 md:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Welcome to Optimize Electrical
      </motion.h1>
      <motion.p
        className="text-md sm:text-lg md:text-xl lg:text-2xl xl:w-[70%] px-1 md:px-12 sm:leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Optimize Electrical is your local family owned and operated Electrician.
        We can help you with any size electrical job, from changing a light
        globe, to a full re-wire. Whether it be for your home, office, business,
        shop, or outdoor entertainment areas – we can help you with all your
        electrical needs.
      </motion.p>
    </div>
  );
};
