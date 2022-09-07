import { PlusCircle, Trash, MoreHorizontal, X, Info } from "react-feather";
import { RoundedIcon, SquareIcon } from "./components/UserIcons";
import Breadcrumbs from "./components/Breadcrumbs";
import Tabs from "./components/Tabs";
import ProgressBar from "./components/Progress";
import {
  SavingProgress,
  SavedProgress,
  GenericWheel,
} from "./components/Loaders";
import Dropdown from "./components/Dropdown";
import NavHorizontal from "./components/NavHorizontal";
import {
  NavVerticalDesktop,
  NavVerticalMobile,
} from "./components/NavVertical";
import { RadioField, CheckboxField } from "./components/RadiosCheckboxes";
import Button from "./components/Button";
import Link from "./components/Link";
import Tag from "./components/Tag";
import {
  DecisionModal,
  Modal,
  ModalBody,
  ModalHeader,
  NoticeModal,
} from "./components/Modals";
import { useState } from "react";
import Toast from "./components/Toast";
function App() {
  const [showDecisionModal, setShowDecisionModal] = useState(false);
  const toggleModal = () => setShowDecisionModal((value) => !value);

  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const toggleNoticeModal = () => setShowNoticeModal((value) => !value);
  return (
    <div className="App bg-black-10  lg:grid lg:grid-cols-5">
      <NavVerticalDesktop />
      <NavVerticalMobile />
      <div className="lg:col-span-4 lg:px-16 px-6">
        <NavHorizontal />
        <h1>Librería de componentes</h1>
        <h2>Botones</h2>
        <hr className="border-black-20 mb-6" />
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:justify-center lg:items-center mb-12">
          <Button primary>Comienza ahora</Button>
          <Button primary small>
            Postula un nuevo proyecto
          </Button>
          <Button primary small icon={PlusCircle}>
            Postula un nuevo proyecto
          </Button>
          <Button secondary>Revisa la documentación</Button>
          <Button secondary small>
            Invita a tus amigues
          </Button>
          <Button secondary small icon={Trash}>
            Elimina el borrador
          </Button>

          <Link href="#">Comienza ahora</Link>
          <Link noUnderline href="#">
            Aprende más <span className="text-sm">↗</span>
          </Link>
          <Link noUnderline href="#">
            Volver
          </Link>

          <Button secondary square icon={MoreHorizontal} />
          <Button primary square icon={MoreHorizontal} />

          <Button secondary disabled>
            Revisa la documentación
          </Button>
          <Button primary disabled>
            Comienza ahora
          </Button>
          <Button primary square disabled icon={MoreHorizontal} />
        </div>
        <h2>Tags</h2>
        <hr className="border-black-20 mb-6" />
        <div className="grid grid-cols-3 gap-4 justify-center items-center mb-12">
          <Tag color="blue">Cabeza del equipo</Tag>
          <Tag color="blue">Cabeza del equipo</Tag>
          <Tag color="gray">Borrador</Tag>
          <Tag color="orange">En revisión</Tag>
          <Tag color="green">Aprobado</Tag>
          <Tag color="red">Denegado</Tag>
          <Tag color="blue" icon={X}>
            Proyectos en curso
          </Tag>
        </div>
        <h2>Imagenes de perfil</h2>
        <hr className="border-black-20 mb-6" />
        <div className="grid grid-cols-3 gap-4 justify-center items-center mb-12">
          <RoundedIcon size={20} imageUrl={"https://picsum.photos/300"} />
        </div>
        <h2>Listas</h2>
        <hr className="border-black-20 mb-6" />
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
        <hr className="border-black-20 mb-6" />
        <div className=" mb-12 overflow-x-auto">
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
        <h2>Dropdown</h2>
        <hr className="border-black-20 mb-6" />
        <div className="mb-12">
          <Dropdown
            title={"My Options"}
            options={[
              { title: "Home", url: "https://google.com" },
              { title: "Hello, good morning", url: "https://facebook.com" },
              { title: "Goodbye dude", url: "https://quora.com" },
            ]}
          />
        </div>
        <h2>Modals & toasts</h2>
        <hr className="border-black-20 mb-6" />
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:justify-center lg:items-center mb-12">
          <Button primary onClick={toggleModal}>
            Modal con decisiones
          </Button>
          <DecisionModal
            show={showDecisionModal}
            onAcceptClick={toggleModal}
            onDeclineClick={toggleModal}
            acceptLabel={"Rescindir"}
            declineLabel={"Aceptar"}
            title={"¡Cuidado!"}
            description={
              "Estás a punto de rescindir tu postulación. Esto se puede revertir únicamente si vuelves a postular el proyecto."
            }
          />
          <Toast title="Presupuesto total" icon={Info}>
            <p className="text-black-60 mt-4 text-sm">
              Para el proyecto{" "}
              <span className="font-semibold text-blue-50">
                Guía de agricultura Solarpunk 2022
              </span>
              ,{" "}
              <span className="font-semibold text-blue-50">
                Cooperativa Hermandad
              </span>{" "}
              pidió{" "}
              <span className="font-semibold text-blue-50">100,000 ARS</span>. A
              continuación, el detalle de cómo se asignarán esos recursos:
            </p>
          </Toast>

          <Button primary onClick={toggleNoticeModal}>
            Modal de aviso
          </Button>

          <Modal show={showNoticeModal}>
            <ModalHeader onCloseClick={toggleNoticeModal}>
              <Breadcrumbs
                links={[
                  { href: "#", title: "Cooperativa la Hermandad" },
                  { href: "#", title: "Guía de agricultura Solarpunk 2022" },
                ]}
              />
            </ModalHeader>
            <ModalBody buttonText={"Cerrar"} onButtonClick={toggleNoticeModal}>
              <h2>Denunciar irregularidad</h2>
              <div>
                <h3>¡Gracias!</h3>
                <p className="mt-2 mb-4">
                  Tu reporte será evaluado. Estaremos en contacto contigo a la
                  brevedad.
                </p>
              </div>
            </ModalBody>
          </Modal>

          <div className="bg-black-00 rounded-2xl border border-black-00 shadow-md p-6 col-span-2">
            <div className="flex justify-between flex-col-reverse lg:flex-row gap-2">
              <Breadcrumbs
                links={[
                  { href: "#", title: "Cooperativa la Hermandad" },
                  { href: "#", title: "Guía de agricultura Solarpunk 2022" },
                ]}
              />
              <X className="w-6 text-black-60" />
            </div>
            <hr className="border-black-20 my-2" />
            <div className="mt-6">
              <h2>Denunciar irregularidad</h2>
              <div>
                <h3>¡Gracias!</h3>
                <p className="mt-2 mb-4">
                  Tu reporte será evaluado. Estaremos en contacto contigo a la
                  brevedad.
                </p>
              </div>
              <div>
                <button className="primaryButton">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
        <h2>Tabs</h2>
        <hr className="border-black-20 mb-6" />
        <div className="mb-12">
          <Tabs />
        </div>
        <h2>Task</h2>
        <hr className="border-black-20 mb-6" />
        <div className="mb-12">
          <div className="bg-black-00 rounded-lg border border-black-00 shadow-md p-6">
            <div className="flex items-center">
              <input type="checkbox" id="taskCheckbox" />
              <label
                htmlFor="taskCheckbox"
                className="ml-2 text-black-70 font-semibold h3"
              >
                Crea o únete a tu organización
              </label>
            </div>
            <p className="my-4 text-black-50 text-sm">
              Suma tu organización a nuestra base. Así, podrás postular tu
              proyecto y podremos acompañarte con material de ayuda
              personalizado.
            </p>
            <div className="tagBlue">Gran proyecto</div>
          </div>
        </div>
        <h2>Inputs</h2>
        <hr className="border-black-20 mb-6" />
        <div className="mb-12">
          <div className="mb-4">
            <label htmlFor="input1" className="block mb-1  text-black-70">
              Nombre*
            </label>
            <input
              type="text"
              className="border-2 border-black-15 text-blue-50 rounded-lg p-1 max-w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input1" className="block mb-1  text-black-70">
              Nombre*
            </label>
            <input
              type="text"
              className="border-2 border-red-50 rounded-lg p-1 max-w-full"
            />
            <span className="block text-sm text-red-50 mt-1">
              Recordá completar este campo.
            </span>
          </div>
          <RadioField label="No posee" id="RadioExample" />
          <CheckboxField
            label="Acepto los términos y condiciones"
            id="CheckboxExample"
          />
        </div>
        <h2>Progreso</h2>
        <hr className="border-black-20 mb-6" />
        <div className="mb-12">
          <div className="mb-4">
            <ProgressBar progress="w-full" />
          </div>
          <div className="mb-4">
            <ProgressBar progress="w-[80%]" />
          </div>
          <div className="mb-4">
            <ProgressBar progress="w-24" />
          </div>
          <div className="mb-4">
            <ProgressBar progress="w-12" />
          </div>
          <div className="mb-4">
            <ProgressBar progress="w-34" />
          </div>
          <div className="mb-4">
            <ProgressBar progress="w-[50%]" />
          </div>
        </div>
        <h2>Indicadores de carga</h2>
        <hr className="border-black-20 mb-6" />
        <div className="mb-12">
          <SavingProgress content="Tu progreso se está guardando" />
          <SavedProgress content="Tu progreso fue guardado por última vez a las 11:15" />
          <GenericWheel />
        </div>
      </div>
    </div>
  );
}

export default App;
