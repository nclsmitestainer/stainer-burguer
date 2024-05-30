const ItemResumo = () => {
  return (
    <div className="col-12 pt-2 pb-2 flex items-center justify-center border-b border-separete last:border-b-0">
      <div className="img-produto">
        <img
          className="w-12 rounded-xl"
          src="/cardapio/burguers/burguer-1.jpg"
          alt=""
        />
      </div>

      <div className="dados-produto flex-1 px-6">
        <p className="title-produto-resumo text-black text-lg text-ellipsis whitespace-nowrap overflow-hidden mb-0">
          <b>Nome do produto</b>
        </p>

        <p className="price-produto-resumo text-primary text-base mb-0">
          <b>R$ 100,00</b>
        </p>
      </div>
      <p className="quantidade text-black text-xl mb-0">
        x <b>3</b>
      </p>
    </div>
  );
};

export default ItemResumo;
