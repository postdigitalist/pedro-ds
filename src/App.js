import { X, Info } from "react-feather";
import Breadcrumbs from "./components/Breadcrumbs";
import Tabs from "./components/Tabs";
import NavHorizontal from "./components/NavHorizontal";
import {
  NavVerticalDesktop,
  NavVerticalMobile,
} from "./components/NavVertical";
import Button from "./components/Button";
import Tag from "./components/Tag";
import {
  DecisionModal,
  Modal,
  ModalBody,
  ModalHeader,
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
  
        <h2>Listas</h2>
        <hr className="border-black-20 mb-6" />
        <div className="grid grid-cols-2 gap-4 justify-center items-center mb-12">
          
          <ol>
            <li>Buen día</li>
            <li>Buenas tardes</li>
            <li>Buenas noches</li>
          </ol>
        </div>
        <h2>Tablas</h2>
        <hr className="border-black-20 mb-6" />
        <div className=" mb-12 overflow-x-auto">
  
        </div>
  
        <h2>Modals & toasts</h2>
        <hr className="border-black-20 mb-6" />
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:justify-center lg:items-center mb-12">
          <div>
            <Button primary onClick={toggleModal}>
              Modal de decisión
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
          </div>

          <div>
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
              <ModalBody
                buttonText={"Cerrar"}
                onButtonClick={toggleNoticeModal}
              >
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
          </div>
        </div>
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
         
          

    
      </div>
      </div>
    </div>
  );
}

export default App;
