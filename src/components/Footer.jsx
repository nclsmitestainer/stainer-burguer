import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-secundary">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-3 container-logo-footer flex items-center justify-start">
            <img
              className="logo-footer w-36 h-36"
              src="/logo.svg"
              alt="logo stainer"
            />
          </div>
          <div className="col-6 container-texto-footer flex items-center justify-center text-absolute-black">
            <p>
              <b>Stainer Burguer</b> © Todos os direitos reservados
            </p>
          </div>
          <div className="col-3 container-redes-footer flex items-center justify-end">
            <a
              className="btn-base btn-white btn-small btn-social mr-3 mt-0"
              href="https://instagram.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="btn-base btn-white btn-small btn-social mr-3 mt-0"
              href="https://facebook.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className="btn-base btn-white btn-small btn-social mt-0"
              href="https://whatsapp.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
