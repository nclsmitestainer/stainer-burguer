import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from './Form/Input';
import Select from './Form/Select';

const FormDelivery = () => {
  return (
    <>
      <div className="col-4">
        <Input
          label="CEP"
          name="cep"
          icon={<FontAwesomeIcon icon={faSearch} />}
        />
      </div>

      <div className="col-8"></div>

      <div className="col-6">
        <Input label="Endereço" name="address" />
      </div>

      <div className="col-4">
        <Input label="Bairro" name="district" />
      </div>

      <div className="col-2">
        <Input label="Número" name="number" />
      </div>

      <div className="col-6">
        <Input label="Cidade" name="city" />
      </div>

      <div className="col-4">
        <Input label="Complemento" name="complement" />
      </div>

      <div className="col-2">
        <Select label="UF" name="uf" />
      </div>
    </>
  );
};

export default FormDelivery;
