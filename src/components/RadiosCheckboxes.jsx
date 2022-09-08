import React from "react";

const RadioField = ({ label, id, ...rest }) => {
  return (
    <div className="pb-1">
      <input type="radio" id={id} {...rest} />
      <label htmlFor={id} className="ml-2 text-black-80">
        {label}
      </label>
    </div>
  );
};

const CheckboxField = ({ label, id, ...rest }) => {
  return (
    <div className="pb-1">
      <input type="checkbox" id={id} {...rest} />
      <label htmlFor={id} className="ml-2 text-black-80">
        {label}
      </label>
    </div>
  );
};

export { RadioField, CheckboxField };
