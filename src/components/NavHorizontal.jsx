import React from "react";
const NavHorizontal = (props) => { return(
    <nav className="flex justify-between items-center w-full  py-6 mb-6">
        <img src="logo.png" className="w-8"/>
        <ul className="flex justify-between items-center list-none">
            <li className="border-0">
                <a href="#" className="no-underline mr-4">Inicio</a> 
            </li>
            <li className="border-0">
            <a href="#" className="no-underline mr-4">Preguntas frecuentes</a>
            </li>
            <li className="border-0">
            <a href="#" className="primaryButton no-underline inline-block hover:text-black-00">Home</a>
            </li>
        </ul>
    </nav>
)
}

export default NavHorizontal