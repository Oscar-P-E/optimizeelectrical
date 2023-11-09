export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row min-h-screen text-gray-800 bg-oe-blue-10"
    >
      <div
        className="w-full h-64 md:h-auto md:w-1/2 flex justify-center items-center bg-no-repeat bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url('/img/Electrical-image.jpg')` }}
      ></div>
      <div className="w-full md:w-1/2 flex flex-col text-center md:text-left justify-center items-center md:items-start  p-6 md:p-16">
        <h2 className="pt-8 md:pt-0 text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-14 text-oe-blue">
          Contact Us
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-gray-500 flex gap-2 flex-col">
          Phone:
          <br />
          <a
            href="tel:+61477838648"
            className="text-oe-orange hover:text-oe-blue transition-colors whitespace-nowrap"
          >
            0477 838 648
          </a>
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-500 flex flex-col gap-2">
          Email:
          <br />
          <a
            href="mailto:optimizeelectrical@gmail.com"
            className="text-oe-orange hover:text-oe-blue transition-colors whitespace-nowrap"
          >
            optimizeelectrical@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};
