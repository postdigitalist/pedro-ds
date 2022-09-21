import React from "react";
import Tag from "./Tag";

const Task = ({id,title,description,tag}) => {
    return(
        <div className="bg-black-00 rounded-lg border border-black-00 shadow-md p-6">
        <div className="flex items-center">
          <input type="checkbox" id="taskCheckbox" />
          <label
            htmlFor="{id}"
            className="ml-2 text-black-70 font-semibold h3"
          >
            {title}
          </label>
        </div>
        <p className="my-4 text-black-50 text-sm">
          {description}
        </p>
        <Tag color="blue">{tag}</Tag>
      </div>
    )
}

export default Task