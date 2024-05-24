import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const ButtonWhiteLink = ({
  href,
  sm,
  right,
  left,
  icon,
  children,
  ...rest
}) => {
  return (
    <Link
      to={href}
      className={twMerge(
        `inline-block mt-4 text-black bg-white rounded-3xl mr-3 px-6 py-4 text-xl relative shadow-lg hover:bg-primary active:bg-primary ${
          sm ? '!py-2 !px-4 !rounded-2xl !text-lg' : ''
        } ${right ? '!pr-16' : ''} ${left ? '!pl-16' : ''}`,
        rest.className,
      )}
    >
      {icon && (
        <span
          className={`inline-block text-white bg-primary w-11 h-11 absolute -ml-14 -mt-2 rounded-2xl text-center pt-2 ${
            right ? 'right-[10px]' : ''
          }`}
        >
          {icon}
        </span>
      )}
      {children}
    </Link>
  );
};

export default ButtonWhiteLink;
