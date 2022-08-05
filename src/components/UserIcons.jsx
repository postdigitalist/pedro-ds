import React from "react";

const Icon = ({ imageUrl, className }) => {
  return (
    <div
    className="w-8 h-8 rounded-full"
      style={{
        
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "contain",
      }}
    ></div>
  );
}
function RoundedIcon({ imageUrl, className }) {
  return <Icon className={`${className} rounded-full`}/>;
}

function SquareIcon({ imageUrl, className }) {
  return <Icon className={`${className} rounded-sm`}/>;
}

export { RoundedIcon, SquareIcon };