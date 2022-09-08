import { X } from "react-feather";
import Button from "./Button";

const DecisionModal = ({
  show,
  title,
  description,
  acceptLabel,
  declineLabel,
  onAcceptClick,
  onDeclineClick,
}) => {
  if (show) {
    return (
      <div className="fixed w-full  h-full z-50 top-0 left-0 flex items-center justify-center">
        <div className="absolute w-full h-full bg-black-70 opacity-50"></div>
        <div className="p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 bg-black-00 grid grid-cols-4 rounded-lg border border-black-00 shadow-md my-4 lg:my-0">
            <div className="col-span-3 p-6 pr-4">
              <h4>{title}</h4>
              <p className="text-black-60 mt-2 text-sm">{description}</p>
            </div>
            <div className="flex flex-col justify-between text-sm">
              <button
                onClick={onAcceptClick}
                className="w-full h-full border-b border-l text-red-60  hover:text-black-00 border-black-15 hover:bg-red-60 rounded-tr-lg"
              >
                <span
                  //   href="#"
                  className="no-underline hover:text-black-100"
                >
                  {acceptLabel}
                </span>
              </button>
              <button
                onClick={onDeclineClick}
                className="w-full h-full border-l border-black-15 hover:bg-black-50 rounded-br-lg  text-black-50 hover:text-black-00"
              >
                <span className="no-underline">{declineLabel}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const Modal = ({ children, show }) => {
  if (show) {
    return (
      <div className="fixed w-full  h-full z-50 top-0 left-0 flex items-center justify-center">
        <div className="absolute w-full h-full bg-black-70 opacity-50"></div>
        <div className="p-4 w-full max-w-2xl h-full md:h-auto z-40">
          <div className="bg-black-00 rounded-2xl border border-black-00 shadow-md p-6 col-span-2">
            {children}
          </div>
        </div>
      </div>
    );
  }
};
const ModalHeader = ({ children, onCloseClick }) => {
  return (
    <>
      <div className="flex justify-between flex-col-reverse lg:flex-row gap-2">
        {children}
        <X
          onClick={onCloseClick}
          className="w-6 text-black-60 cursor-pointer hover:bg-black-30 hover:rounded-lg"
        />
      </div>

      <hr className="border-black-20 my-2" />
    </>
  );
};
const ModalBody = ({ children, onButtonClick, buttonText }) => {
  return (
    <div className="mt-6">
      {children}
      {onButtonClick && buttonText && (
        <div>
          <Button onClick={onButtonClick} primary>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export { DecisionModal, Modal, ModalHeader, ModalBody };
