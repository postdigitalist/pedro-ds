import React from "react";

const RadioField = ({label, id}) =>
{
    return(
        <div className="pb-1"> 
        <input type="radio" id="{id}"/>
        <label for="{id}" className="ml-2 text-black-80">{label}</label>
    </div>
    )
}

const CheckboxField = ({label,id }) =>
{
    return(
        <div className="pb-1"> 
        <input type="checkbox"/>
        <label for="{id}" className="ml-2 text-black-80">{label}</label>
    </div>
    )
}

export {RadioField,CheckboxField}