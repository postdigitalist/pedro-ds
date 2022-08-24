import React from "react";

const Icon = ({ imageUrl, className, size }) => {
  return (
    <div
      className={className}
      style={{
        height: `${size}em`,
        width: `${size}em`,
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    ></div>
  );
};
function RoundedIcon({ imageUrl, size = 12 }) {
  return <Icon imageUrl={imageUrl} size={size} className={`rounded-full`} />;
}

function SquareIcon({ imageUrl, size = 12 }) {
  return <Icon imageUrl={imageUrl} size={size} className={`rounded-sm`} />;
}

export { RoundedIcon, SquareIcon };
