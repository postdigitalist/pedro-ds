const Link = ({ noUnderline, children, ...aTagProps }) => {
  const noUnderlineClassName = "no-underline";
  return (
    <a
      {...aTagProps}
      className={`${noUnderline && noUnderlineClassName} ml-4 lg:ml-0`}
    >
      {children}
    </a>
  );
};
export default Link;
