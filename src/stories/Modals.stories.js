import Breadcrumbs from "../components/Breadcrumbs";
import { DecisionModal, Modal, ModalHeader, ModalBody} from "../components/Modals";

 export default{
    title: 'Cards/Modals',
    component: {DecisionModal, Modal, ModalHeader, ModalBody},
 }

export const DecisionModalExample = (args) =>  <DecisionModal {...args}/>;

 
DecisionModalExample.args ={
    acceptLabel: 'Rescindir',
    declineLabel: 'Cancelar',
    title: 'Cuidado',
    description: 'Estás a punto de rescindir tu postulación.'
}

export const NoticeModalExample = (args) => (
    <div>

            <Modal>
              <ModalHeader>
                <Breadcrumbs
                  links={[
                    { href: "#", title: "Cooperativa la Hermandad" },
                    { href: "#", title: "Guía de agricultura Solarpunk 2022" },
                  ]}
                />
              </ModalHeader>
              <ModalBody
                buttonText={"Cerrar"}>
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
);