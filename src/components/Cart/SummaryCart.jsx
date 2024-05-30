import ItemResumo from '../ItemResumo';
import TitleStages from '../TitleStages';
import Address from './Address';

const SummaryCart = () => {
  return (
    <div id="resumoCarrinho" className="row mx-0">
      <TitleStages title="Itens do pedido:" />

      <div className="col-12">
        <div className="row">
          <ItemResumo />
          <ItemResumo />
          <ItemResumo />
        </div>
      </div>

      <TitleStages title="Local da entrega:" />

      <Address />
    </div>
  );
};

export default SummaryCart;
