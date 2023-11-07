import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeaderProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export const Header = ({ setIsOpen }: HeaderProps) => {
  return (
    <div className="shadow-md pb-5 pt-8 px-4 sm:pb-8 sm:pt-8 sm:px-8 relative">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex align-bottom justify-center w-full md:w-auto md:justify-start pb-4 md:py-0">
          <img
            src="src/assets/img/logo-long.png"
            alt="logo"
            className="h-12 md:h-11 lg:h-12"
          />
        </div>

        <div className="text-3xl md:text-2xl lg:text-3xl text-oe-orange whitespace-nowrap mx-auto md:pr-10 md:absolute md:right-8 md:top-10">
          <FontAwesomeIcon className="pr-4" icon={faPhone} />
          0477 838 648
        </div>

        <button
          className="text-4xl md:text-3xl lg:text-4xl text-oe-orange w-full md:w-auto md:absolute md:right-4 md:top-10 md:mt-0 mx-auto md:mx-0 pt-5 md:pt-0"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
};
