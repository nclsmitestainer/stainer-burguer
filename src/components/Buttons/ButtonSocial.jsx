import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const ButtonSocial = ({ href, children, target, ...rest }) => {
  return (
    <a
      href={href}
      className={twMerge(
        'mt-4 mr-3 inline-block text-center bg-white text-black shadow-lg px-4 py-2 rounded-2xl text-lg w-12 hover:bg-primary cursor-pointer',
        rest.className,
      )}
      target={target}
    >
      {children}
    </a>
  );
};

export default ButtonSocial;
