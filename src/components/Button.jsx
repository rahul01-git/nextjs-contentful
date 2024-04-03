const Button = ({ title }) => {
  return (
    <button className="px-4 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600">
      {title}
    </button>
  );
};

export default Button;
