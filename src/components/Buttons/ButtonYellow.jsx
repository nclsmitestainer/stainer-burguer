import { NavLink } from 'react-router-dom';

const ButtonYellow = ({ href, sm, right, left, icon, children }) => {
  return (
    <NavLink
      to={href}
      className={`inline-block mt-4 text-white bg-primary rounded-3xl mr-3 px-6 py-4 text-xl relative shadow-lg hover:bg-primary active:bg-primary ${
        sm && '!py-2 !px-4 !rounded-2xl !text-lg'
      } ${right && '!pr-16'} ${left && '!pl-16'}`}
    >
      {icon && (
        <span className="inline-block text-white bg-primary w-11 h-11 absolute -ml-14 -mt-2 rounded-2xl text-center pt-2">
          {icon}
        </span>
      )}
      {children}
    </NavLink>
  );
};

export default ButtonYellow;
