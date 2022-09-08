const Toast = ({ title, icon, children }) => {
  const Icon = icon;

  return (
    <div className="bg-black-00 rounded-lg border border-black-00 shadow-md p-6 my-4 lg:my-8 ">
      <div className="flex  items-center">
        <Icon className="text-blue-50 mr-2" />
        <h4>{title}</h4>
      </div>
      {children}
    </div>
  );
};
export default Toast;
