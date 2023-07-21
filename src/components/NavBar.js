import React from "react";

function NavBar() {
  const links = ["home", "about", "contact"]; // Array of link strings

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>{link}</a>
      ))}
    </nav>
  );
}

export default NavBar;
