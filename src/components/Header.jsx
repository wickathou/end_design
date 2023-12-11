import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import endDesignLogo from "../assets/logo.svg";

function Header() {
  return (
    <header className="md:container">
      <div className=" bg-slate-500 flex justify-between items-center">
        <img
          src={endDesignLogo}
          alt="End Design logo"
          width="100px"
          height="100px"
        />
        <div className="rounded-full h-24 w-24 bg-slate-200">
        </div>
      </div>
    </header>
  );
}

export default Header;
