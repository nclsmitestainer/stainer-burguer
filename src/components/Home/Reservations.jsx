import Title from '../Title';
import { NavLink } from 'react-router-dom';

const Reservations = () => {
  return (
    <section className="pt-28 pb-28">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12">
            <div className="bg-secundary rounded-[70px] p-28">
              <div className="row">
                <div className="col-7">
                  <Title
                    title="Reserva"
                    subtitle="Quer reservar um horário?"
                    align="left"
                  />
                  <p className="pr-5 mb-4 text-black">
                    Mande uma mensagem clicando no botão abaixo
                    <br />
                    Reserve sua data e horário de forma simples e rápida.
                  </p>
                  <NavLink
                    to="/reservations"
                    className="btn-base btn-yellow mt-3"
                  >
                    Fazer reserva
                  </NavLink>
                </div>
                <div className="col-5">
                  <div className="card-reserva h-[320px] w-[320px] rounded-[120px] bg-white absolute right-0 -top-6"></div>
                  <div className="flex img-banner">
                    <img
                      className="absolute w-full top-7 right-4"
                      src="/icone-reserva.svg"
                      alt="reserva"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
