import { NavVerticalDesktop, NavVerticalMobile } from "../components/NavVertical";

export default{
    title: 'Navigation/VerticalNav',
    component: {NavVerticalDesktop, NavVerticalMobile},
}

export const NavVerticalDesktopExample = () => (        <div className="App bg-black-10  lg:grid lg:grid-cols-5"><NavVerticalDesktop/></div>);
export const NavVerticalMobileExample = () => (<NavVerticalMobile/>);