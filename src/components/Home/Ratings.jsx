import Title from '../Title';
import CardRating from '../CardRating';
import { Link } from 'react-router-dom';

const Ratings = () => {
  return (
    <section className="pt-28 pb-20">
      <div className="absolute left-0 right-0 h-[500px] bg-detail-1"></div>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-5 text-center">
            <div className="card-depoimentos w-[390px] h-[390px] rounded-[120px] bg-secundary absolute left-0"></div>
            <div className="flex img-banner">
              <img
                className="absolute max-w-[570px] top-7 right-4"
                src="/pizzas.png"
                alt="pizza"
              />
            </div>
          </div>
          <div className="col-7">
            <Title
              col="12"
              align="left"
              title="Depoimentos"
              subtitle="O que dizem sobre nós ?"
            />

            <div className="mb-5">
              <CardRating
                nome="diego"
                note="4.5"
                description="Muito bom, recomendo demais! Comida muito bem feita pelo chefe, atendimento dentro dos parâmetros e boa comunicação com o cliente."
              />
              {/* <CardRating
                nome="ana"
                note="5.0"
                description="Um jantar perfeito do começo ao fim. Comida, experiência, serviço... foi tão maravilhoso que fomos dois dias seguidos - fato inédito para mim em uma viagem."
              />
              <CardRating
                nome="joão"
                note="4.5"
                description="A comida estava excelente e o serviço gentil nos surpreendeu! Dica: reserve umas 3 horas para ter uma experiência incrível."
              /> */}
            </div>

            <Link className="btn-base btn-white btn-small btn-social mr-3 active">
              1
            </Link>
            <Link className="btn-base btn-white btn-small btn-social mr-3">
              2
            </Link>
            <Link className="btn-base btn-white btn-small btn-social">3</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ratings;
