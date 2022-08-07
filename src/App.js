import { PlusCircle, Trash, MoreHorizontal, X, Info } from "react-feather";
import { RoundedIcon, SquareIcon } from "./components/UserIcons";
import Breadcrumbs from "./components/Breadcrumbs";
import Tabs from "./components/Tabs";
import {ProgressBar12, ProgressBar24, ProgressBar36, ProgressBar48, ProgressBar56, ProgressBar72, ProgressBar92, ProgressBar120, ProgressBar242, ProgressBarFull} from "./components/Progress";
import {SavingProgress, SavedProgress, GenericWheel} from "./components/Loaders";
import Dropdown from "./components/Dropdown";
import NavHorizontal from "./components/NavHorizontal";
import {NavVerticalDesktop, NavVerticalMobile} from "./components/NavVertical";
function App() {
  return (
    <div className="App bg-black-10  lg:grid lg:grid-cols-6">
            <NavVerticalDesktop/>
            <NavVerticalMobile/>
            <div className="lg:col-span-5 lg:px-16 px-6">
      <NavHorizontal/>
      <h1>Librería de componentes</h1>
      <h2>Botones</h2>
      <hr className="border-black-20 mb-6"/>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:justify-center lg:items-center mb-12">
     <button className="primaryButton my-4">
      Comienza ahora
     </button>
     <button className="primaryButton buttonSM my-4 lg:my-0">
      Postula un nuevo proyecto
     </button>
     <button className="primaryButton buttonSM my-4 lg:my-0">
      <PlusCircle className="mr-1 w-4"/>
      Postula un nuevo proyecto
     </button>
     <button className="secondaryButton my-4 lg:my-0">
      Revisa la documentación
     </button>
     <button className="secondaryButton buttonSM my-4 lg:my-0">
   Invita a tus amigues
     </button>
     <button className="secondaryButton buttonSM my-4 lg:my-0">
      <Trash className="mr-1 w-4"/>Elimina el borrador
     </button>
     <a href="#">Comienza ahora</a>
     <a href="#" className="no-underline ml-4 lg:ml-0">Aprende más <span className="text-sm">↗</span></a>
     <a href="#" className="no-underline ml-4 lg:ml-0">Volver</a>
     <button className="secondaryButton squareButton my-4 lg:my-0">
      <MoreHorizontal/>
     </button>
     <button className="primaryButton squareButton my-4 lg:my-0">
      <MoreHorizontal/>
     </button>
     <button className="secondaryButton disabledButton my-4 lg:my-0">
      Revisa la documentación
     </button>
     <button className="primaryButton disabledButton my-4 lg:my-0">
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
      <div className="grid grid-cols-2 gap-4 justify-center items-center mb-12">
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
        <h2>Tablas</h2>
        <hr className="border-black-20 mb-6"/>
        <div className=" mb-12">
        <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
          </div>
          <h2>Modals & toasts</h2>
      <hr className="border-black-20 mb-6"/>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:justify-center lg:items-center mb-12">
        <div className="bg-black-00  grid grid-cols-4 rounded-lg border border-black-00 shadow-md my-4 lg:my-0">
          <div className="col-span-3 p-6 pr-4">
          <h4>¡Cuidado!</h4>
          <p className="text-black-60 mt-2 text-sm">
          Estás a punto de rescindir tu postulación. 
Esto se puede revertir únicamente si vuelves a postular el proyecto.
          </p>
          </div>
          <div className="flex flex-col justify-between text-sm">
            <button className="w-full h-full border-b border-l border-black-15 hover:bg-red-60 rounded-tr-lg">
            <a href="#" className="no-underline text-red-60 hover:text-black-00">Rescindir</a>
            </button>
            <button className="w-full h-full border-l border-black-15 hover:bg-black-50 rounded-br-lg">
            <a href="#" className="no-underline text-black-50 hover:text-black-00">Cancelar</a>
            </button>
          </div>
        </div>
        <div className="bg-black-00 rounded-lg border border-black-00 shadow-md p-6 my-4 lg:my-0">
         <div className="flex  items-center">
         <Info className="text-blue-50 mr-2"/>
         <h4>Presupuesto total</h4>
          </div>
          <p className="text-black-60 mt-4 text-sm">
          Para el proyecto <span className="font-semibold text-blue-50">Guía de agricultura Solarpunk 2022</span>, <span className="font-semibold text-blue-50">Cooperativa Hermandad</span> pidió <span className="font-semibold text-blue-50">100,000 ARS</span>. A continuación, el detalle de cómo se asignarán esos recursos:
          </p>
        </div>
        <div className="bg-black-00 rounded-2xl border border-black-00 shadow-md p-6 col-span-2">
          <div className="flex justify-between flex-col-reverse lg:flex-row gap-2">
          <Breadcrumbs/>
          <X className="w-6 text-black-60"/>
          </div>
          <hr className="border-black-20 my-2"/>
          <div className="mt-6">
         <h2>Denunciar irregularidad</h2>
         <div>
          <h3>¡Gracias!</h3>
          <p className="mt-2 mb-4">
          Tu reporte será evaluado. Estaremos en contacto contigo a la brevedad.
          </p>
          <button className="primaryButton">
            Cerrar
          </button>
          </div>
         </div>
        </div>
        </div>
        <h2>Tabs</h2>
        <hr className="border-black-20 mb-6"/>
      <div className="mb-12">
        <Tabs/>
        
        </div>
        <h2>Task</h2>
        <hr className="border-black-20 mb-6"/>
      <div className="mb-12">
      <div className="bg-black-00 rounded-lg border border-black-00 shadow-md p-6">
        <div className="flex items-center">
        <input type="checkbox" id="taskCheckbox"/>
        <label for="taskCheckbox" className="ml-2 text-black-70 font-semibold h3">Crea o únete a tu organización</label>
        </div>
        <p className="my-4 text-black-50 text-sm">
        Suma tu organización a nuestra base. Así, podrás postular tu proyecto y 
podremos acompañarte con material de ayuda personalizado. 
        </p>
        <div className="tagBlue">Gran proyecto</div>
        </div>
        </div>
        <h2>Formulario</h2>
        <hr className="border-black-20 mb-6"/>
      <div className="mb-12">
        <div className="mb-4">
          <label for="input1" className="block mb-1  text-black-70">
            Nombre*
          </label>
          <input type="text" className="border-2 border-black-15 text-blue-50 rounded-lg p-1"/>
        </div>
        <div className="mb-4">
          <label for="input1" className="block mb-1  text-black-70">
            Nombre*
          </label>
          <input type="text" className="border-2 border-red-50 rounded-lg p-1"/>
          <span className="block text-sm text-red-50 mt-1">Recordá completar este campo.</span>
        </div>
        </div>
        <h2>Progreso</h2>
        <hr className="border-black-20 mb-6"/>
      <div className="mb-12">
       <div className="mb-4">
       <ProgressBar12/>
       </div>
       <div className="mb-4">
       <ProgressBar24/>
       </div>
       <div className="mb-4">
       <ProgressBar36/>
       </div>
       <div className="mb-4">
       <ProgressBar48/>
       </div>
       <div className="mb-4">
       <ProgressBar56/>
       </div>
       <div className="mb-4">
       <ProgressBar72/>
       </div>
       <div className="mb-4">
       <ProgressBar92/>
       </div>
       <div className="mb-4">
       <ProgressBar120/>
       </div>
       <div className="mb-4">
       <ProgressBar242/>
       </div>
       <div className="mb-4">
       <ProgressBarFull/>
       </div>
        </div>
        <h2>Indicadores de carga</h2>
        <hr className="border-black-20 mb-6"/>
      <div className="mb-12">
        <SavingProgress content="Tu progreso se está guardando"/>
        <SavedProgress content="Tu progreso fue guardado por última vez a las 11:15"/>
        <GenericWheel/>
        </div>
        <h2>Dropdown</h2>
        <hr className="border-black-20 mb-6"/>
      <div className="mb-12">
        <Dropdown/>
        </div>
        </div>
    </div>
  );
}

export default App;
