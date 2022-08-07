import React from "react";
import { RoundedIcon } from "./UserIcons";
import { User, Users, Target, Menu  } from "react-feather";
import { useState } from "react";

const MenuItems = (props) =>{
    return (
        <ul className="lg:mt-12 flex flex-col w-56">
                <li className="list-none mb-1 w-56">
                    <a href="#" className="no-underline text-black-70 p-3 flex items-center rounded-lg hover:text-blue-50 hover:bg-black-10">
                        <User className="w-4 mr-2"/>Perfil</a>
                </li>
                <li className="list-none mb-1 w-56">
                    <a href="#" className="no-underline text-black-70 p-3 flex items-center rounded-lg hover:text-blue-50 hover:bg-black-10">
                        <Users className="w-4 mr-2"/>Organización</a>
                </li>
                <li className="list-none mb-1 w-56">
                    <a href="#" className="no-underline text-black-70 p-3 flex items-center rounded-lg hover:text-blue-50 hover:bg-black-10">
                        <Target className="w-4 mr-2"/>Postulaciones</a>
                </li>
                
            </ul>
    )
}

const NavVerticalDesktop = (props) =>{
    return(
        <nav className="col-span-1 h-full w-full py-8 bg-black-00 top-0 left-0 z-10 hidden lg:block">
           <div className="fixed flex flex-col justify-between w-72 h-[92%]"><div>
                <div className="flex items-center justify-between pl-12">
                <img src="logo.png" className="w-6"/>
                <RoundedIcon className="h-12 w-12" imageUrl="https://picsum.photos/200" />
            </div>
            <div className="pl-8">
            <MenuItems/>
            </div>
            </div>
            <div className="px-12 flex">
                <a href="#" className="no-underline text-sm mr-4">¿Necesitas ayuda?</a>
                <a href="#" className="no-underline text-sm">Salir</a>
            </div>
            </div> 
        </nav>
    )
}

const NavVerticalMobile = (props) =>{
    return(
        <nav className="bg-black-00 p-4 flex justify-between items-center lg:hidden">
            <img src="logo.png" className="w-8"/>
            <div>
                <Menu className="w-6 text-black-70 hover:text-blue-50 cursor-pointer"/>
                <div className="absolute right-4 p-6 bg-black-00 shadow-lg rounded-xl">
                    <MenuItems/>
                    <div className="flex mt-4 justify-end  pt-2">
                <a href="#" className="no-underline text-sm mr-4">¿Necesitas ayuda?</a>
                <a href="#" className="no-underline text-sm">Salir</a>
            </div>
                </div>

            </div>
        </nav>
    )
}
export {NavVerticalDesktop, NavVerticalMobile}