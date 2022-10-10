import Breadcrumbs from "../components/Breadcrumbs";
import { DecisionModal, Modal, ModalHeader, ModalBody} from "../components/Modals";
import Button from "../components/Button";
import { useState } from "react";

 export default{
    title: 'Cards/Modals',
    component: {DecisionModal, Modal, ModalHeader, ModalBody},
 }

export const DecisionModalExample = (args) => {
const [showDecisionModal, setShowDecisionModal] = useState(false);
const toggleModal = () => setShowDecisionModal((value) => !value);
return(
  <div>
 <Button primary onClick={toggleModal}>
              Modal de decisión
            </Button>
<DecisionModal  show={showDecisionModal}
              onAcceptClick={toggleModal}
              onDeclineClick={toggleModal}
              acceptLabel={"Rescindir"}
              declineLabel={"Aceptar"}
              title={"¡Cuidado!"}
              description={
                "Estás a punto de rescindir tu postulación. Esto se puede revertir únicamente si vuelves a postular el proyecto."
              }/>
</div>); } 

export const NotificationModalExample = (args) =>{
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const toggleNoticeModal = () => setShowNoticeModal((value) => !value);

 return(
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
 )
}