const Link = ({ nounderline, children, ...aTagProps }) => {
  const noUnderlineClassName = "no-underline";
  return (
    <a {...aTagProps} className={`${nounderline && noUnderlineClassName}`}>
      {children}
    </a>
  );
};
export default Link;
