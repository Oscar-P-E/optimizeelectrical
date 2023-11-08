export const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen text-gray-800">
      <div
        className="w-full h-64 md:h-auto md:w-1/2 flex justify-center items-center bg-no-repeat bg-cover bg-center opacity-95"
        style={{ backgroundImage: `url('/img/Electrical-image.jpg')` }}
      ></div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start bg-oe-blue-10 p-6 md:p-16">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-oe-blue">
          Contact Us
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 text-gray-500">
          Phone:{" "}
          <a
            href="tel:+61477838648"
            className="text-oe-orange hover:text-oe-blue transition-colors whitespace-nowrap"
          >
            0477 838 648
          </a>
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-500 ">
          Email:{" "}
          <a
            href="mailto:opelm1@gmail.com"
            className="text-oe-orange hover:text-oe-blue transition-colors whitespace-nowrap"
          >
            optimizeelectrical@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};
