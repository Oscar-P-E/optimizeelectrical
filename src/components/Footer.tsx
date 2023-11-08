export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/img/logo-stacked.png"
            alt="Optimize Electrical Logo"
            className="h-12 md:h-24 mr-4"
          />
          <div className="flex flex-col text-sm md:text-base mt-4 md:mt-0">
            <span className="whitespace-nowrap">
              Phone:{" "}
              <a
                href="tel:+61477838648"
                className="text-oe-orange hover:text-orange-300 transition-colors"
              >
                0477 838 648
              </a>
            </span>
            <span className="whitespace-nowrap">
              Email:{" "}
              <a
                href="mailto:optimizeelectrical@gmail.com"
                className="text-oe-orange hover:text-orange-300 transition-colors"
              >
                optimizeelectrical@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Optimize Electrical. All rights
            reserved.
          </p>
          <p>Licence no: 91512</p>
        </div>
      </div>
    </footer>
  );
};
