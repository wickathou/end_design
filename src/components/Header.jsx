import React, { useEffect, useRef } from "react";
import endDesignLogo from "../assets/logo.svg";
import { gsap } from "gsap";

function Header() {
  const navMenuBtn = useRef(null);

  useEffect(() => {
    gsap.to(navMenuBtn.current, { rotation: 360, duration: 16, repeat: -1 });
  }, []);

  return (
    <header className="md:container">
      <div className=" bg-slate-500 flex justify-between items-center">
        <img
          src={endDesignLogo}
          alt="End Design logo"
          width="100px"
          height="100px"
        />
        <div ref={navMenuBtn} className="rounded h-24 w-24 bg-slate-200"></div>
      </div>
    </header>
  );
}

export default Header;
