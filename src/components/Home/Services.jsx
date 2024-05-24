import React from 'react';
import Title from '../Title';

const Services = () => {
  return (
    <section className="pt-28">
      <div className="absolute right-0 left-0 h-[500px] bg-detail-2"></div>
      <div className="container mx-auto">
        <div className="row">
          <Title
            title="Serviços"
            subtitle="Como são nossos serviços?"
            col="12"
            align="center"
          />

          <div className="col-4 mb-5">
            <div className="h-[150px] mx-auto my-0 mb-7 flex justify-center items-center text-center">
              <img src="/icone-pedido.svg" width="150" />
            </div>
            <div className="card-text text-center mt-3">
              <p className="text-2xl text-black mb-2">
                <b>Fácil de pedir</b>
              </p>
              <span className="text-text-secundary text-base px-7 py-0">
                Você só precisa de alguns passos para pedir sua comida.
              </span>
            </div>
          </div>

          <div className="col-4 mb-5">
            <div className="h-[150px] mx-auto my-0 mb-7 flex justify-center items-center text-center">
              <img src="/icone-delivery.svg" width="150" />
            </div>
            <div className="card-text text-center mt-3 px-7 py-0">
              <p className="text-2xl text-black mb-2">
                <b>Entrega rápida</b>
              </p>
              <span className="text-text-secundary text-base">
                Nossa entrega é sempre pontual, rápida e segura.
              </span>
            </div>
          </div>

          <div className="col-4 mb-5">
            <div className="h-[150px] mx-auto my-0 mb-7 flex justify-center items-center text-center">
              <img src="/icone-qualidade.svg" width="150" />
            </div>
            <div className="card-text text-center mt-3">
              <p className="text-2xl text-black mb-2">
                <b>Melhor qualidade</b>
              </p>
              <span className="text-text-secundary text-base px-7 py-0">
                Não só a rapidez na entrega, a qualidade também é o nosso forte.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
