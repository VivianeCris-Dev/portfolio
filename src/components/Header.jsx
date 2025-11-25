import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Header({ wasClicked, setWasClicked, menuItems }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between fixed w-full h-[80px] top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-gray-700 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="ml-10 max-[596px]:ml-6">
        <a
          href="#home"
          className="text-xl font-bold text-[#1471f3d6] max-[630px]:text-lg "
        >
          {"<Dev />"}
          <span className="text-white ml-2 max-[736px]:text-lg ">
            Viviane{" "}
            <span className="text-[#1471f3d6] text-[28px] font-bold max-[736px]:text-[20px]">
              *
            </span>
          </span>
        </a>
      </div>

      <div className="hidden md:flex items-center justify-center text-gray-300 mr-10">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              setWasClicked(item.href);
            }}
            className={`font-medium m-2 hover:text-[#1471f3d6] transition-colors duration-300 ${
              wasClicked === item.href ? "text-[#1471f3d6]" : "text-gray-300"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
      <button
        className="md:hidden text-white mr-2 absolute right-4"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[80px] left-0 w-full bg-[#021632d5] backdrop-blur-lg border-t border-gray-700 p-6 z-50">
          <div className="flex flex-col gap-4 items-start pl-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setWasClicked(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className={`font-medium text-lg hover:text-[#1471f3d6] transition-colors duration-300 ${
                  wasClicked === item.href
                    ? "text-[#1471f3d6]"
                    : "text-gray-300"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
