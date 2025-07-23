import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuClosed, MenuOpen } from "./ui/icons";
import { menuItems } from "@/data/menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 gap-4">
            <div className="flex gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary/50 transition-colors"
              >
                {isMenuOpen ? <MenuClosed className="h-6 w-6" /> : <MenuOpen className="h-6 w-6" />}
              </button>

              {/* Logo */}
              <img src="/Logo.png" alt="Z-TECH" className="w-[71px] h-[39px]" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 w-full">
              <div className="flex items-center">
                {menuItems.map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setSelectedItemIndex(index)}
                    className={`text-center px-4 flex flex-row justify-center rounded-full  font-medium text-sm items-center w-20 h-10 px-[18px] py-2 transition-colors duration-200 ${index === selectedItemIndex
                      ? "bg-[#383A42] text-z-yellow "
                      : "text-foreground"
                      }`}
                  >
                    {item}  
                  </a>
                ))}
              </div>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ztech" size="sm" className="italic font-black">
                SIGN UP
              </Button>
              <Button variant="ztech-outline" size="sm" className="italic font-black">
                LOG IN
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[80px] z-50 md:hidden">
          <div className="fixed inset-y-0 left-0 top-[80px] right-0 z-50 flex flex-col bg-background shadow-xl">
            <nav className="flex-1 px-6 py-8 space-y-2 bg-[#1F2023]">
              {menuItems.map((item, index) => (
                <div key={item} className={`${index === selectedItemIndex ? 'bg-z-yellow/20 rounded-full' : ''}`}>
                  <a
                    href="#"
                    className={`block text-[24px] sm:text-xl font-medium py-4 px-6 rounded-full transition-colors duration-200 text-center ${index === selectedItemIndex
                      ? 'bg-[#383A42] text-z-yellow'
                      : 'text-foreground'
                      }`}
                    onClick={() => setSelectedItemIndex(index)}
                  >
                    {item}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;