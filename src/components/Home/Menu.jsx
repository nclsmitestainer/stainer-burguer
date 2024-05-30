import Title from '../Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBacon,
  faCocktail,
  faDrumstickBite,
  faHamburger,
  faIceCream,
  faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';
import CardItem from '../CardItem';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <section className="pt-28 pb-20">
      <div className="absolute left-0 right-0 h-[500px] bg-detail-1"></div>
      <div className="container mx-auto">
        <div className="row">
          <Title
            title="Cardápio"
            subtitle="Conheça o nosso cardápio"
            col="12"
            align="center"
          />

          <div className="col-12 mb-7">
            <Link className="btn-base btn-white btn-small mr-3 active">
              <FontAwesomeIcon icon={faHamburger} />
              &nbsp; Burguers
            </Link>
            <Link className="btn-base btn-white btn-small mr-3">
              <FontAwesomeIcon icon={faPizzaSlice} />
              &nbsp; Pizzas
            </Link>
            <Link className="btn-base btn-white btn-small mr-3">
              <FontAwesomeIcon icon={faDrumstickBite} />
              &nbsp; Churrasco
            </Link>
            <Link className="btn-base btn-white btn-small mr-3">
              <FontAwesomeIcon icon={faBacon} />
              &nbsp; Steaks
            </Link>
            <Link className="btn-base btn-white btn-small mr-3">
              <FontAwesomeIcon icon={faIceCream} />
              &nbsp; Sobremesas
            </Link>
            <Link className="btn-base btn-white btn-small">
              <FontAwesomeIcon icon={faCocktail} />
              &nbsp; Bebidas
            </Link>
          </div>

          <div className="col-12">
            <div className="row">
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
          </div>

          <div className="col-12 text-center">
            <Link className="btn-base btn-white btn-small">Ver mais</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
