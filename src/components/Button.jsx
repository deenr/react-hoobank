/* eslint-disable react/prop-types */
function Button(props) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
