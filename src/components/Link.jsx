const Link = ({ nounderline, small, children, ...aTagProps }) => {
  const noUnderlineClassName = "no-underline";
  const smallClassName = "text-sm";
  return (
    <a
      {...aTagProps}
      className={`${small && smallClassName} ${
        nounderline && noUnderlineClassName
      }`}
    >
      {children}
    </a>
  );
};
export default Link;
