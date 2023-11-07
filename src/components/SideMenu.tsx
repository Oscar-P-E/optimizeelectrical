import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SideMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const SideMenu = ({ isOpen, setIsOpen }: SideMenuProps) => {
  return (
    <>
      {/* Side menu */}
      <div
        className={`fixed top-0 right-0 w-64 bg-oe-orange p-6 h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="text-white text-xl" onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="flex flex-col pt-8">
          <a
            href="pages/index.html"
            className="text-white block pt-4 text-lg hover:text-oe-blue transition-all duration-300"
          >
            HOME
          </a>
          <a
            href="pages/residential.html"
            className="text-white block pt-4 text-lg hover:text-oe-blue transition-all duration-300"
          >
            RESIDENTIAL
          </a>
          <a
            href="pages/commercial.html"
            className="text-white block pt-4 text-lg hover:text-oe-blue transition-all duration-300"
          >
            COMMERCIAL
          </a>
          <a
            href="pages/areas.html"
            className="text-white block pt-4 text-lg hover:text-oe-blue transition-all duration-300"
          >
            FIND AN ELECTRICIAN NEAR YOU
          </a>
          <a
            href="pages/contact.html"
            className="text-white block pt-4 text-lg hover:text-oe-blue transition-all duration-300"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </>
  );
};
