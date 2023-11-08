import { motion } from "framer-motion";

export const ServicesList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    "Renovations",
    "Rewires",
    "Additions",
    "Safety Switch installs",
    "Switchboard upgrades",
    "Appliance outlets",
    "Fan installation",
    "Outlets & Wiring",
    "Outdoor weatherproof electrical",
    "LED lighting",
    "Circuit Identification",
    "Circuit Breaker Replacement",
    "Coloured Lighting",
    "Deck lighting and outlets",
    "Dedicated outlets for electric cars",
    "Electrical home inspections",
    "Electrical Switchboard replacement and repairs",
    "Electrical repairs & service upgrades",
    "Exhaust fan and range hood installation (Bath & Kitchen)",
    "Exterior Lights & Motion Sensors",
    "Meter box replacement and repairs",
    "Garage Door Opener Outlets",
    "Home Office Electrical Upgrades",
    "Hot tub and spa electrical installs",
    "Incoming mains upgrade and replacement",
    "Kitchen lighting",
    "Lamp Posts & Entry Lighting",
    "Landscape Lighting",
    "Light Switches & Dimmers",
    "Lighting Design & Installation",
    "Motion Sensor Lighting",
    "New socket outlet installations",
    "Old and vintage home electrical updates",
    "Outdoor and security lighting",
    "Recessed lighting installation",
    "Security Camera Installation",
    "Service Cable Replacement",
    "Fault finding and Troubleshooting",
    "Emergency electrical and generator power",
    "Under Cabinet LED Lighting",
    "USB Outlets",
    "Whole house rewiring",
    "Whole-house surge protection",
    "Whole house rewires",
    "Circuit repairs and replacement",
    "and more...",
  ];

  const columnSize = Math.ceil(services.length / 3);

  const columns = Array.from({ length: 3 }, (_, i) =>
    services.slice(i * columnSize, (i + 1) * columnSize)
  );

  return (
    <div className="relative py-12  bg-white">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/img/electric-948208_1920.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Services list heading */}
      <div className="relative sm:max-w-[90%] lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-20">
          Some Of Our Most Popular Electrical Services...
        </h1>

        {/* Services list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {columns.map((column, index) => (
            <motion.ul
              key={index}
              className="space-y-2"
              variants={containerVariants}
            >
              {column.map((service, serviceIndex) => (
                <motion.li
                  key={serviceIndex}
                  className="text-gray-700 text-lg"
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          ))}
        </motion.div>
      </div>
    </div>
  );
};