import React, { useEffect, useState } from 'react';

import { Container, Slides, Navigation } from './styles';
import SignInBackground from '../../assets/bg_signin.jpg';
import SignInBackground2 from '../../assets/bg_signin2.jpg';
import logoImg from '../../assets/logo_branca.svg';
import {
  FaFacebookF,
  IoLogoWhatsapp,
  FaTwitter,
  GrInstagram,
  RiGlobalLine,
} from '../../styles/icon';

const Carrousel: React.FC = () => {
  const [radio1, setRadio1] = useState(false);
  const [radio2, setRadio2] = useState(false);

  useEffect(() => {
    setRadio1(true);

    setInterval(() => {
      setRadio1(false);
      setRadio2(true);
    }, 10000);

    setInterval(() => {
      setRadio1(true);
      setRadio2(false);
    }, 20000);
  }, []);

  return (
    <Container>
      <Slides>
        <input checked={radio1} type="radio" name="radio-btn" id="radio1" />

        <input checked={radio2} type="radio" name="radio-btn" id="radio2" />

        <div className="slide first">
          <img src={SignInBackground} alt="" />
        </div>

        <div className="slide">
          <img src={SignInBackground2} alt="" />
        </div>

        <div className="slide">
          <img src={SignInBackground} alt="" />
        </div>

        <div className="slide">
          <img src={SignInBackground} alt="" />
        </div>

        <div className="slide">
          <img src={SignInBackground} alt="" />
        </div>

        <Navigation>
          <img src={logoImg} alt="Neorede Telecom" />
          <h1>Conectando você ao mundo.</h1>
          <nav>
            <label htmlFor="radio1" className="btn-carrousel btn1" />
            <label htmlFor="radio2" className="btn-carrousel btn2" />
          </nav>

          <section>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Neorede"
            >
              <FaFacebookF size={27} color="var(--lighttext)" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=554830398888&text=Oi"
            >
              <IoLogoWhatsapp size={27} color="var(--lighttext)" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/neorede"
            >
              <FaTwitter size={27} color="var(--lighttext)" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/neoredetelecom/"
            >
              <GrInstagram size={27} color="var(--lighttext)" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.neorede.com.br"
            >
              <RiGlobalLine
                style={{ marginBottom: -1.5 }}
                size={30}
                color="var(--lighttext)"
              />
            </a>
          </section>
        </Navigation>
      </Slides>
    </Container>
  );
};

export default Carrousel;
