import React from "react";

const Toast = ({ title, icon, children }) => {
  const Icon = icon;

  return (
    <div className="bg-black-00 rounded-lg border border-black-00 shadow-md p-6 my-4 lg:my-8 ">
      <div className="lg:flex lg: items-center">
        <Icon className="text-blue-50 mb-2 lg:mr-2" />
        <h4>{title}</h4>
      </div>
      <div className="text-black-60 mt-4 lg:ml-8 text-sm">
      {children}
      </div>
    </div>
  );
};
export default Toast;
