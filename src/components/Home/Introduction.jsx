import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebookF,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import ButtonYellow from '../Buttons/ButtonYellow';
import ButtonWhiteAnchor from '../Buttons/ButtonWhiteAnchor';
import ButtonSocial from '../Buttons/ButtonSocial';

const Introduction = () => {
  return (
    <section className="pt-28 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="relative min-h-px w-full px-4 flex-50% max-w-50%">
            <div className="flex flex-col mb-14">
              <h1 className="text-black text-6xl/[1.2] font-semibold">
                Escolha sua comida
                <span className="text-primary"> favorita.</span>
              </h1>
              <p className="my-4 text-black">
                Aproveite nosso cardápio! Escolha o que desejar e recebe em sua
                casa de forma rápida e segura.
              </p>
              <div>
                <ButtonYellow href="/menu" className="mr-3">
                  Ver cardápio
                </ButtonYellow>
                <ButtonWhiteAnchor
                  href="tel:5519998554441"
                  left
                  icon={
                    <FontAwesomeIcon
                      icon={faPhoneFlip}
                      className="text-white"
                    />
                  }
                  target="_self"
                >
                  (19) 99855-4441
                </ButtonWhiteAnchor>
              </div>
            </div>
            <ButtonSocial href="https://instagram.com" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </ButtonSocial>
            <ButtonSocial href="https://facebook.com" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} />
            </ButtonSocial>
            <ButtonSocial href="https://whatsapp.com" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} />
            </ButtonSocial>
          </div>
          <div className="relative min-h-px w-full px-4 flex-50% max-w-50%">
            <div className="card-banner h-[450px] w-[450px] rounded-[170px] bg-[#f4c949] absolute right-0 -top-20"></div>
            <div className="flex img-banner">
              <img
                src="/burguer.png"
                className="absolute w-[570px] top-7 right-4"
                alt="Burguer"
              />
            </div>
            <div className="card card-case rounded-2xl py-4 px-5 text-sm shadow-lg w-[350px] absolute right-0 -bottom-[120px] bg-white text-black">
              <p>
                "Entrega rápida e funcionários simpáticos.
                <br />
                A comida chegou quente e<br />
                muito saborosa!"
              </p>
              <span className="card-case-name absolute text-xs text-primary right-5 bottom-2 font-medium">
                Thiago Lopes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
