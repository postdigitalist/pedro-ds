import { NavHorizontal, NavHorizontalMenu, NavHorizontalMenuItem} from "../components/NavHorizontal";
import Button from "../components/Button";
import Link from "../components/Link";

export default{
    title: 'Navigation/HorizontalNav',
    component: NavHorizontal,
}

export const NavHorizontalExample = () =>{

    return(
        <NavHorizontal logoUrl={"logo.png"}>
        <NavHorizontalMenu>
          <NavHorizontalMenuItem>
            <Link nounderline href={"#"}>
              Inicio
            </Link>
          </NavHorizontalMenuItem>
          <NavHorizontalMenuItem>
            <Link nounderline href={"#"}>
              Preguntas Frecuentes
            </Link>
          </NavHorizontalMenuItem>
          <NavHorizontalMenuItem>
            <Link nounderline href={"#"}>
              <Button primary>Home</Button>
            </Link>
          </NavHorizontalMenuItem>
        </NavHorizontalMenu>

      </NavHorizontal>
    )
}