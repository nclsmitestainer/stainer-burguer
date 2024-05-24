import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardRating = (props) => {
  return (
    <div className="depoimento mt-16" id="depoimento-1">
      <div className="container-dados-depoimento flex">
        <div className="imagem-depoimento w-16 h-16 bg-white mr-4">
          <img
            src={`/${props.nome}.jpg`}
            className="w-16 h-16 rounded-full object-cover"
            alt={props.nome}
          />
        </div>
        <div>
          <p className="nome-depoimento text-black text-2xl mb-1 capitalize">
            <b>{props.nome}</b>
          </p>
          <p className="nota-depoimento text-primary">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
            &nbsp; <span className="text-black">{props.note}</span>
          </p>
        </div>
      </div>
      <p className="texto-depoimento flex text-base text-black">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="text-primary min-w-9 min-h-9 pl-[10px] pr-[35px]"
        />
        <span>{props.description}</span>
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="text-primary min-w-9 min-h-9 pl-[45px] flex self-end"
        />
      </p>
    </div>
  );
};

export default CardRating;
