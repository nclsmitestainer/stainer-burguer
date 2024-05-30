import ItemCarrinho from '../ItemCarrinho';

const ItensCart = () => {
  return (
    <div id="itensCarrinho" className="row mx-0 !hidden">
      <ItemCarrinho />
      <ItemCarrinho />
      <ItemCarrinho />
    </div>
  );
};

export default ItensCart;
