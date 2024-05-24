import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="!bg-transparent">
            <img src="/logo.svg" width={80} height={80} alt="logo" />
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
                  className="text-black mx-5 font-medium"
                  to="/reservations"
                >
                  Reservas
                </NavLink>
              </li>
              <li>
                <NavLink className="text-black mx-5 font-medium" to="/services">
                  Serviços
                </NavLink>
              </li>
              <li>
                <NavLink className="text-black mx-5 font-medium" to="/menu">
                  Cardápio
                </NavLink>
              </li>
              <li>
                <NavLink className="text-black mx-5 font-medium" to="/ratings">
                  Avaliações
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            className="bg-white text-black rounded-2xl text-xl shadow-lg flex justify-evenly items-center px-2 py-2 hover:bg-primary w-60"
            onClick={() => document.getElementById('my_modal_2').showModal()}
          >
            <span id="shopping-bag-text">Meu carrinho </span>
            <span className="icon text-black bg-primary w-[45px] h-[45px] rounded-2xl flex items-center justify-center ml-2">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
