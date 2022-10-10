import { 
    NavVerticalDesktop, 
    NavVerticalDesktopHeader,
    NavVerticalDesktopMenu, 
    NavVerticalDesktopMenuItem, 
    NavVerticalDesktopBody, 
    NavVerticalDesktopFooter,
    NavVerticalMobile,
    NavVerticalMobileMenu,
    NavVerticalMobileBody,
    NavVerticalMobileMenuFooter
    } from "../components/NavVertical";
import { RoundedIcon } from "../components/UserIcons";
import Link from "../components/Link";
import { useState } from "react";
import {
    User,
    Target,
    Menu
  } from "react-feather";


export default{
    title: 'Navigation/VerticalNav',
    component: {NavVerticalDesktop, NavVerticalMobile},
}

export const NavVerticalDesktopExample = () => (<div> <NavVerticalDesktop>
    <NavVerticalDesktopBody>
      <NavVerticalDesktopHeader>
        <img src="logo.png" className="w-6" />
        <RoundedIcon size={3} imageUrl="https://picsum.photos/200" />
      </NavVerticalDesktopHeader>
      <NavVerticalDesktopMenu>
        <NavVerticalDesktopMenuItem icon={User} href="#">
          Perfil
        </NavVerticalDesktopMenuItem>
        <NavVerticalDesktopMenuItem icon={User} href="#">
          Organización
        </NavVerticalDesktopMenuItem>
        <NavVerticalDesktopMenuItem icon={Target} href="#">
          Organización
        </NavVerticalDesktopMenuItem>
      </NavVerticalDesktopMenu>
    </NavVerticalDesktopBody>
    <NavVerticalDesktopFooter>
      <Link href="#" small nounderline>
        ¿Necesitas ayuda?
      </Link>
      <Link href="#" small nounderline>
        Salir
      </Link>
    </NavVerticalDesktopFooter>
  </NavVerticalDesktop></div>);


export const NavVerticalMobileExample = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu((value) => !value);
    
    return(
      <NavVerticalMobile logoUrl={"logo.png"}>
      <NavVerticalMobileBody
        showMenu={showMenu}
        onToggleMenuClick={toggleMenu}
        icon={Menu}
      >
        <NavVerticalMobileMenu>
          <NavVerticalDesktopMenuItem icon={User} href="#">
            Perfil
          </NavVerticalDesktopMenuItem>
          <NavVerticalDesktopMenuItem icon={User} href="#">
            Organización
          </NavVerticalDesktopMenuItem>
          <NavVerticalDesktopMenuItem icon={Target} href="#">
            Organización
          </NavVerticalDesktopMenuItem>
        </NavVerticalMobileMenu>
        <NavVerticalMobileMenuFooter>
          <Link href="#" small nounderline>
            ¿Necesitas ayuda?
          </Link>
          <Link href="#" small nounderline>
            Salir
          </Link>
        </NavVerticalMobileMenuFooter>
      </NavVerticalMobileBody>
    </NavVerticalMobile>);
}