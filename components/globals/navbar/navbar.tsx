import React from "react";
interface NavbarProps {
  navbarTitle: string;
  navbarDescription: string;
}
function Navbar({ navbarTitle, navbarDescription }: NavbarProps) {
  return (
    <div>
      {navbarTitle}
      <p>{navbarDescription}</p>
    </div>
  );
}

export default Navbar;
