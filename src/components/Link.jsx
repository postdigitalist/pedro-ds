const Link = ({ noUnderline, children, ...aTagProps }) => {
  const noUnderlineClassName = "no-underline";
  return (
    <a {...aTagProps} className={`${noUnderline && noUnderlineClassName}`}>
      {children}
    </a>
  );
};
export default Link;
