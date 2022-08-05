import React from "react";
import { RoundedIcon } from "./UserIcons";
import { User, Users, Target } from "react-feather";
const NavVertical = (props) =>{
    return(
        <nav className="w-full h-full bg-black-00  top-0 left-0 z-10  py-8  col-span-1">
           <div className="fixed flex flex-col justify-between h-full"><div>
                <div className="flex items-center justify-between px-8">
                <img src="logo.png" className="w-6"/>
                <RoundedIcon className="h-12 w-12" imageUrl="https://picsum.photos/200" />
            </div>
            <ul className="mt-12 flex flex-col px-5">
                <li className="list-none mb-1">
                    <a href="#" className="no-underline text-black-70 p-3 flex items-center rounded-lg hover:text-blue-50 hover:bg-black-10">
                        <User className="w-4 mr-2"/>Perfil</a>
                </li>
                <li className="list-none mb-1">
                    <a href="#" className="no-underline text-black-70 p-3 flex items-center rounded-lg hover:text-blue-50 hover:bg-black-10">
                        <Users className="w-4 mr-2"/>Organización</a>
                </li>
                <li className="list-none mb-1">
                    <a href="#" className="no-underline text-black-70 p-3 flex items-center rounded-lg hover:text-blue-50 hover:bg-black-10">
                        <Target className="w-4 mr-2"/>Postulaciones</a>
                </li>
                
            </ul>
            </div>
            <div className="flex justify-between px-8">
                <a href="#" className="no-underline text-sm">¿Necesitas ayuda?</a>
                <a href="#" className="no-underline text-sm">Salir</a>
            </div>
            </div> 
        </nav>
    )
}
export default NavVertical