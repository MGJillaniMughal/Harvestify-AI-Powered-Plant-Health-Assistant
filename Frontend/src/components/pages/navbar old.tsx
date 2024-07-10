import * as React from "react";
import { useState, useEffect } from "react";
import ScrolledNav from "../usefull/scroll_nav";

function Navbar() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 20) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <div></div>
      <div>
        {/* Only Appear when scrolled */}
        {showNav && <ScrolledNav />}
      </div>
    </div>
  );
}

export default Navbar;
