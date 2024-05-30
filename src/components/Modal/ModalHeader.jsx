const ModalHeader = () => {
  return (
    <div className="pb-5">
      <div className="container mx-auto">
        <form method="dialog">
          <button className="inline-block text-center whitespace-nowrap align-middle !float-right shadow-lg text-black bg-white text-lg rounded-2xl px-4 py-2 cursor-pointer hover:bg-primary">
            Fechar
          </button>
        </form>
        <div className="etapas flex">
          <div className="etapa before:content-[''] before:w-5 before:bg-separete before:absolute before:h-1 before:ml-14 w-9 h-9 bg-white rounded-full shadow-lg text-black flex justify-center items-center mr-5 etapa1 active">
            1
          </div>
          <div className="etapa before:content-[''] before:w-5 before:bg-separete before:absolute before:h-1 before:ml-14 w-9 h-9 bg-white rounded-full shadow-lg text-black flex justify-center items-center mr-5 etapa2">
            2
          </div>
          <div className="etapa w-9 h-9 bg-white rounded-full shadow-lg text-black flex justify-center items-center mr-5 etapa3">
            3
          </div>
        </div>
        <p className="title-carrinho mt-4 text-xl text-black">
          <b id="lblTituloEtapa">Seu carrinho:</b>
        </p>
      </div>
    </div>
  );
};

export default ModalHeader;
