import { PlusCircle, Trash, MoreHorizontal } from "react-feather";
function App() {
  return (
    <div className="App bg-black-10 h-screen p-14">
      <div className="grid grid-cols-3 gap-4 justify-center items-center">
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
    </div>
    </div>
  );
}

export default App;
