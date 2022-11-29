import React from "react";
const Tag = ({ icon, color = "gray", children }) => {
  const Icon = icon;
  const capitalizedColor = color[0].toUpperCase() + color.slice(1);
  return (
    <div className={`tag${capitalizedColor}`}>
      {icon && <Icon className="mr-1 w-3" />}
      {children}
    </div>
  );
};

export default Tag;
