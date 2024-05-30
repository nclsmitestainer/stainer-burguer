import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Address = () => {
  return (
    <div className="col-12 pt-2 pb-2 flex items-center justify-center">
      <div className="img-map w-12 h-12 bg-secundary text-black text-2xl flex items-center justify-center rounded-xl">
        <FontAwesomeIcon icon={faMapMarkedAlt} />
      </div>

      <div className="flex-1 px-6">
        <p className="text-endereço mb-0 text-black">
          <b className="resumo-endereço">Rua Logo Ali, 200, Alpha</b>
        </p>

        <p className="cidade-endereço mb-0 text-black">Cidade-Sp / 13905-526</p>
      </div>
    </div>
  );
};

export default Address;
