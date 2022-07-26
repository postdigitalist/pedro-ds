import React from "react";

function RoundedIcon(props) {
  return (
    <div
    className="w-8 h-8 rounded-full"
      style={{
        
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}

const SquareIcon = (props) => {
  return (
    <div className="rounded-sm w-12 h-12"
      style={{
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export { RoundedIcon, SquareIcon };