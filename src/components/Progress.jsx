import React from "react";

const ProgressBar = (props) =>{
    return(
        <div className="w-full h-2 bg-blue-20 rounded-full">
          <div className={`bg-blue-50 h-full rounded-full ${ props.progress }`}>      
      </div>
      </div>
    )
}
export default ProgressBar