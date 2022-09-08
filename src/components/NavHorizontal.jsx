import React from "react";

const NavHorizontalMenuItem = ({ children }) => {
  return <li className="border-0 py-1">{children}</li>;
};
const NavHorizontalMenu = ({ children }) => {
  return (
    <ul className="md:flex md:justify-between md:items-center list-none gap-4">
      {children}
    </ul>
  );
};

const NavHorizontal = ({ children, logoUrl }) => {
  return (
    <nav className="md:flex md:justify-between md:items-center w-full  py-6 mb-6">
      <img src={logoUrl} className="w-8" />
      {children}
    </nav>
  );
};
const _NavHorizontal = (props) => {
  return (
    <nav className="md:flex md:justify-between md:items-center w-full  py-6 mb-6">
      <img src="logo.png" className="w-8" />
      <ul className="md:flex md:justify-between md:items-center list-none">
        <li className="border-0 py-1">
          <a href="#" className="no-underline mr-4">
            Inicio
          </a>
        </li>
        <li className="border-0 py-1">
          <a href="#" className="no-underline mr-4">
            Preguntas frecuentes
          </a>
        </li>
        <li className="border-0 py-1">
          <a
            href="#"
            className="primaryButton no-underline inline-block hover:text-black-00"
          >
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export {
  _NavHorizontal,
  NavHorizontal,
  NavHorizontalMenu,
  NavHorizontalMenuItem,
};
