import React from "react";

const AcordionTabs = (props) =>{
    return(
        <div className="flex flex-col items-center">
        <div className="mb-4 text-sm text-black-60 font-normal bg-black-00 rounded-xl flex items-center p-2 max-w-fit">
        <div className="p-3 text-black-80 font-semibold shadow-sm rounded-lg mr-4">Información general</div>
        <div className="p-3 rounded-lg mr-4 hover:shadow-sm hover:text-black-80 hover:font-semibold hover:rounded-lg cursor-pointer">Equipo</div>
        <div className="p-3 rounded-lg hover:shadow-sm hover:text-black-80 hover:font-semibold hover:rounded-lg cursor-pointer">Presupuesto</div>
        </div>
        </div>
    )
}
export default AcordionTabs