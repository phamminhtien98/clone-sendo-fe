import { useRef } from "react";
import HeaderTop from "./HeaderTop";
import NavBar from "./NavBar";
const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const changeFixedNav = () => {
    if (window.scrollY >= 32) {
      headerRef.current?.classList.add(
        "fixed",
        "z-50",
        "w-full",
        "top-[-3.2rem]"
      );
    }
    if (window.scrollY < 32) {
      headerRef.current?.classList.remove(
        "fixed",
        "z-50",
        "w-full",
        "top-[-3.2rem]"
      );
    }
  };

  window.addEventListener("scroll", changeFixedNav);
  return (
    <div className="min-h-[9.6rem]">
      <div ref={headerRef}>
        <HeaderTop />
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
