import React, { useEffect, useState } from 'react';

import { Container, Slides, Navigation } from './styles';
import SignInBackground from '../../assets/bg_signin.svg';
import SignInBackground2 from '../../assets/bg_signin2.svg';
import logoImg from '../../assets/logo_branca.svg';
import {
  FaFacebookF,
  IoLogoWhatsapp,
  FaTwitter,
  GrInstagram,
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
            <FaFacebookF size={27} color="var(--background)" />
            <IoLogoWhatsapp size={27} color="var(--background)" />
            <FaTwitter size={27} color="var(--background)" />
            <GrInstagram size={27} color="var(--background)" />
          </section>
        </Navigation>
      </Slides>
    </Container>
  );
};

export default Carrousel;
