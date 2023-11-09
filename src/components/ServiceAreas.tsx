import { motion } from "framer-motion";

export const ServiceAreas = () => {
  const suburbs = [
    { name: "Beerwah", image: "/img/suburbs/beerwah.jpg" },
    { name: "Caloundra", image: "/img/suburbs/caloundra.jpg" },
    { name: "Maleny", image: "/img/suburbs/maleny.jpg" },
    {
      name: "Glass House Mountains",
      image: "/img/suburbs/glass-house-mountains.jpg",
    },
    { name: "Glenview", image: "/img/suburbs/glenview.jpg" },
    { name: "Sippy Downs", image: "/img/suburbs/sippy-downs.jpg" },
    { name: "Mooloolaba", image: "/img/suburbs/mooloolaba.jpg" },
    { name: "Nambour", image: "/img/suburbs/nambour.jpg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      id="service-areas"
      className="min-h-screen py-12 bg-white flex flex-col justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-14 md:mb-20"
          variants={itemVariants}
        >
          Areas We Service
        </motion.h2>
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4 lg:gap-16 px-8">
          {suburbs.map((suburb, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={suburb.image}
                  alt={suburb.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold">{suburb.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
