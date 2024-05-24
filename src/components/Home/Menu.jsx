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
import ButtonWhiteLink from '../Buttons/ButtonWhiteLink';

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
            <ButtonWhiteLink sm className="active">
              <FontAwesomeIcon icon={faHamburger} />
              &nbsp; Burguers
            </ButtonWhiteLink>
            <ButtonWhiteLink sm>
              <FontAwesomeIcon icon={faPizzaSlice} />
              &nbsp; Pizzas
            </ButtonWhiteLink>
            <ButtonWhiteLink sm>
              <FontAwesomeIcon icon={faDrumstickBite} />
              &nbsp; Churrasco
            </ButtonWhiteLink>
            <ButtonWhiteLink sm>
              <FontAwesomeIcon icon={faBacon} />
              &nbsp; Steaks
            </ButtonWhiteLink>
            <ButtonWhiteLink sm>
              <FontAwesomeIcon icon={faIceCream} />
              &nbsp; Sobremesas
            </ButtonWhiteLink>
            <ButtonWhiteLink sm>
              <FontAwesomeIcon icon={faCocktail} />
              &nbsp; Bebidas
            </ButtonWhiteLink>
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
            <ButtonWhiteLink sm>Ver mais</ButtonWhiteLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
