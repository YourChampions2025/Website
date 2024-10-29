import React from "react";
interface NavbarProps {
  navbarTitle: string;
}
function Navbar({ navbarTitle }: NavbarProps) {
  return <div>{navbarTitle}</div>;
}

export default Navbar;
