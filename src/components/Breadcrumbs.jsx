import React from "react";

const Breadcrumbs = ({ links }) => {
  let last = { href: "#", title: "" };
  let previous;

  if (links.length > 1) {
    previous = links.slice(0, -1);
    last = links[links.length - 1];
  } else if (links.length == 1) {
    previous = [];
    last = links[0];
  }

  return (
    <div className="mb-4 text-sm text-black-60 font-normal">
      {previous.map(({ href, title }) => (
        <>
          <a href={href} className="text-black-40 no-underline">
            {title}
          </a>{" "}
          /{" "}
        </>
      ))}
      <a
        href={last.href}
        className="text-black-50 no-underline hover:text-blue-60"
      >
        {last.title}
      </a>
    </div>
  );
};
export default Breadcrumbs;
