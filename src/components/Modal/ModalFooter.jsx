import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalFooter = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="container-total text-right mb-4 pt-5 border-t border-separete">
          <p className="mb-0 text-black">
            <span>Subtotal: </span>
            <span id="lblSubTotal">R$ 10,00</span>
          </p>

          <p className="mb-0 texto-entrega text-separete">
            <span>
              <FontAwesomeIcon icon={faMotorcycle} /> Entrega:
            </span>
            <span id="lblValorEntrega"> R$ 5,00</span>
          </p>

          <p className="mb-0 text-total text-black text-xl mt-2">
            <span>
              <b>Total: </b>
            </span>
            <span className="text-primary text-2xl" id="lblValorTotal">
              <b>R$ 15,00</b>
            </span>
          </p>
        </div>

        <button className="btn-base btn-yellow float-right m-0">
          Continuar
        </button>
        <button className="btn-base btn-yellow float-right m-0 hidden">
          Revisar pedido
        </button>
        <button className="btn-base btn-yellow float-right m-0 hidden">
          Enviar pedido
        </button>

        <button className="btn-base btn-white float-right hidden">
          Voltar
        </button>
      </div>
    </div>
  );
};

export default ModalFooter;
