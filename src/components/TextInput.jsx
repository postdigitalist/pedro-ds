import React from "react";

const TextInput = ({id, label}) => {
    return (
        <div className="mb-4">
        <label htmlFor="{id}" className="block mb-1  text-black-70">
         {label}
        </label>
        <input
          type="text"
          className="border-2 border-black-15 text-blue-50 rounded-lg p-1 max-w-full" id={id}
        />
      </div>
    )
}


const TextInputError =({id,label, warning}) =>{
  return(
    <div className="mb-4">
            <label htmlFor="{id}" className="block mb-1  text-black-70">
              {label}
            </label>
            <input
              type="text"
              className="border-2 border-red-50 rounded-lg p-1 max-w-full" id="{id}"
            />
            <span className="block text-sm text-red-50 mt-1">
              {warning}
            </span>
          </div>
  )
}

export {TextInput, TextInputError}