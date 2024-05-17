import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="navbar-brand">
            <img
              src="/logo.svg"
              width={80}
              height={80}
              className="img-logo"
              alt=""
            />
          </NavLink>

          <button
            className="flex lg:hidden"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
          >
            <span>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>

          <div className="flex" id="navbarNavDropdown">
            <ul className="flex gap-5 items-center list-none">
              <li>
                <NavLink
                  className="color-black mx-5 font-medium"
                  to="/reservations"
                >
                  Reservas
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="color-black mx-5 font-medium"
                  to="/services"
                >
                  Serviços
                </NavLink>
              </li>
              <li>
                <NavLink className="color-black mx-5 font-medium" to="/menu">
                  Cardápio
                </NavLink>
              </li>
              <li>
                <NavLink className="color-black mx-5 font-medium" to="/ratings">
                  Avaliações
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            href=""
            className="text-black bg-white rounded-3xl pl-6 pr-20 py-3 text-xl relative shadow-lg"
          >
            Meu carrinho
            <span className="icon inline-block text-black bg-primary w-11 h-11 absolute right-[10px] -mt-2 rounded-2xl text-center pt-2">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
