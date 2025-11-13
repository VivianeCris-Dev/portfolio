import { useEffect, useState } from "react";
function Header({ wasClicked, setWasClicked, menuItems }) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between fixed w-full h-[80px] top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-gray-700 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="ml-10 max-[596px]:ml-6">
        <a
          href="#home"
          className="text-xl font-bold text-[#1471f3d6] max-[630px]:text-lg max-[460px]:text-sm"
        >
          {"<Dev />"}
          <span className="text-white ml-2 max-[736px]:text-lg max-[460px]:text-sm max-[410px]:text-xs">
            Viviane{" "}
            <span className="text-[#1471f3d6] text-[28px] font-bold max-[736px]:text-[20px] max-[410px]:text-[16px]">
              *
            </span>
          </span>
        </a>
      </div>
      <div className="flex items-center justify-center text-gray-300 mr-10 max-[596px]:mr-4">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              setWasClicked(item.href);
            }}
            className={`font-medium m-2 hover:text-[#1471f3d6] transition-colors duration-300 max-[530px]:text-sm max-[530px]:m-1 max-[460px]:text-xs ${
              wasClicked === item.href ? "text-[#1471f3d6]" : "text-gray-300"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Header;
