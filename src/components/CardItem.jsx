import {
  faCartShopping,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const CardItem = () => {
  return (
    <div className="col-3 mb-5">
      <NavLink
        to="/menu"
        className="card-item bg-white rounded-2xl py-4 px-5 text-xl shadow-lg !border-nonbe h-[400px] inline-block hover:bg-primary"
      >
        <div className="img-product">
          <img
            src="/cardapio/burguers/burguer-1.jpg"
            alt=""
            className="w-full rounded-xl"
          />
        </div>
        <p className="text-center mt-4 text-black overflow-ellipsis whitespace-nowrap overflow-hidden h-10 mb-0">
          <b>Nome do produto</b>
        </p>
        <p className="product-price text-center text-primary text-2xl">
          <b>R$ 154,90</b>
        </p>
        <div className="add-carrinho hidden text-center h-7 justify-center items-center m-4 hover:flex">
          <button className="btn-menos text-absolute-black py-1 px-2 border-2 border-absolute-black rounded-tl-lg rounded-bl-lg text-sm cursor-pointer hover:bg-absolute-black hover:text-white">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="add-numero-itens text-absolute-black py-[2px] px-4 border-t-2 border-b-2 border-absolute-black text-lg/6">
            0
          </span>
          <button className="btn-mais text-absolute-black py-1 px-2 border-2 border-absolute-black rounded-tr-lg rounded-br-lg text-sm cursor-pointer hover:bg-absolute-black hover:text-white">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className="btn-add border-2 border-absolute-black text-base py-1 px-2 rounded-lg text-white bg-absolute-black ml-4 inline-block hover:border-white">
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </NavLink>
    </div>
  );
};

export default CardItem;
