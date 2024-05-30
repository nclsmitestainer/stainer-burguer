const Input = ({ name, label, icon }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="inline-block mb-2">
        {label}:
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className="form-control pr-[75px]"
      />
      {icon && (
        <button className="btn-base btn-yellow btn-small absolute right-[25px] top-[38px]">
          {icon}
        </button>
      )}
    </div>
  );
};

export default Input;
