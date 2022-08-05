import React from "react";
import { Loader, Download } from "react-feather";
const SavingProgress = ({content}) =>{
    return (
        <div className="flex items-center">
            <Loader className="text-black-70 w-4 mr-1 animate-spin"/>
<span className="font-medium text-black-70">{content}</span>
        </div>
    )
}

const SavedProgress = ({content}) =>{
    return (
        <div className="flex items-center">
            <Download className="text-black-70 w-4 mr-1"/>
<span className="font-medium text-black-70">{content}</span>
        </div>
    )
}
const GenericWheel = (props) =>{
    return (
        <div className="flex items-center justify-center">
            <Loader className="text-black-50 w-16 animate-spin"/>
        </div>
    )
}

export {SavingProgress, SavedProgress, GenericWheel}