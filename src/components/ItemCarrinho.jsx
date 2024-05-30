import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemCarrinho = () => {
  return (
    <>
      <div className="col-12 flex justify-center items-center py-5 border-b border-separete last:border-b-0">
        <div className="img-produto">
          <img
            className="w-[100px] rounded-xl"
            src="/cardapio/burguers/burguer-1.jpg"
            alt=""
          />
        </div>

        <div className="dados-produto flex-1 px-6">
          <p className="title-produto text-black text-xl text-ellipsis whitespace-nowrap overflow-hidden mb-0">
            <b>Nome do produto</b>
          </p>
          <p className="price-produto text-primary text-2xl mb-0">
            <b>R$ 154,90</b>
          </p>
        </div>

        <div className="add-carrinho flex text-center h-7 justify-center items-center m-4">
          <button className="btn-menos text-absolute-black py-1 px-2 border-2 border-absolute-black rounded-tl-lg rounded-bl-lg text-sm cursor-pointer hover:bg-absolute-black hover:text-white">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="add-numero-itens text-absolute-black py-[2px] px-4 border-t-2 border-b-2 border-absolute-black text-lg/6">
            0
          </span>
          <button className="btn-mais text-absolute-black py-1 px-2 border-2 border-absolute-black rounded-tr-lg rounded-br-lg text-sm cursor-pointer hover:bg-absolute-black hover:text-white">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className="btn-remove border-2 border-red text-base py-1 px-2 rounded-lg text-white bg-red ml-4 inline-block hover:border-white">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCarrinho;
