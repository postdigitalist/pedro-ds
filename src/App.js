import { PlusCircle, Trash, MoreHorizontal, X } from "react-feather";
import { RoundedIcon, SquareIcon } from "./components/UserIcons";
function App() {
  return (
    <div className="App bg-black-10 p-14">
      <h1>Librería de componentes</h1>
      <h2>Botones</h2>
      <hr className="border-black-20 mb-6"/>
      <div className="grid grid-cols-3 gap-4 justify-center items-center mb-12">
     <button className="primaryButton">
      Comienza ahora
     </button>
     <button className="primaryButton buttonSM">
      Postula un nuevo proyecto
     </button>
     <button className="primaryButton buttonSM">
      <PlusCircle className="mr-1 w-4"/>
      Postula un nuevo proyecto
     </button>
     <button className="secondaryButton">
      Revisa la documentación
     </button>
     <button className="secondaryButton buttonSM">
   Invita a tus amigues
     </button>
     <button className="secondaryButton buttonSM">
      <Trash className="mr-1 w-4"/>Elimina el borrador
     </button>
     <a href="#">Comienza ahora</a>
     <a href="#" className="no-underline">Aprende más <span className="text-sm">↗</span></a>
     <a href="#" className="no-underline">Volver</a>
     <button className="secondaryButton squareButton">
      <MoreHorizontal/>
     </button>
     <button className="primaryButton squareButton">
      <MoreHorizontal/>
     </button>
     <button className="secondaryButton disabledButton">
      Revisa la documentación
     </button>
     <button className="primaryButton disabledButton">
      Comienza ahora
     </button>
     <button className="primaryButton squareButton disabledButton">
     <MoreHorizontal/>
     </button>
    </div>
      <h2>Tags</h2>
      <hr className="border-black-20 mb-6"/>
      <div className="grid grid-cols-3 gap-4 justify-center items-center mb-12">
        <div className="tagBlue">Cabeza del equipo</div>
        <div className="tagGray">Borrador</div>
        <div className="tagOrange">En revisión</div>
        <div className="tagGreen">Aprobado</div>
        <div className="tagRed">Denegado</div>
        <div className="tagBlue"><X className="mr-1 w-3"/>Proyectos en curso</div>
      </div>
      <h2>Imagenes de perfil</h2>
      <hr className="border-black-20 mb-6"/>
      <div className="grid grid-cols-3 gap-4 justify-center items-center mb-12">
      <RoundedIcon imageUrl={"https://picsum.photos/200/300"} />
      </div>
      <h2>Listas</h2>
      <hr className="border-black-20 mb-6"/>
      <div className="grid grid-cols-3 gap-4 justify-center items-center mb-12">
        <ul>
          <li>Buen día</li>
          <li>Buenas tardes</li>
          <li>Buenas noches</li>
        </ul>
        <ol>
        <li>Buen día</li>
        <li>Buenas tardes</li>
        <li>Buenas noches</li>
        </ol>
        </div>
    </div>
  );
}

export default App;
