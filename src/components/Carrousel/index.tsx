/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useEffect, useState } from 'react';

import { Container, Slides, Navigation } from './styles';
import SignInBackground from '../../assets/bg_signin.jpg';
import SignInBackground2 from '../../assets/bg_signin2.jpg';
import SignInBackground3 from '../../assets/bg_signin3.jpg';
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
  const [radio3, setRadio3] = useState(false);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setRadio1(true);

    setTimeout(() => {
      setRadio1(true);
      setRadio2(false);
      setRadio3(false);
    }, 10000);

    setTimeout(() => {
      setRadio1(false);
      setRadio2(true);
      setRadio3(false);
    }, 20000);

    setTimeout(() => {
      setRadio1(false);
      setRadio2(false);
      setRadio3(true);

      setCount(count + 1);
    }, 30000);
  }, [count]);

  const selectRadio1 = useCallback(() => {
    setRadio1(true);
    setRadio2(false);
    setRadio3(false);
  }, []);

  const selectRadio2 = useCallback(() => {
    setRadio1(false);
    setRadio2(true);
    setRadio3(false);
  }, []);

  const selectRadio3 = useCallback(() => {
    setRadio1(false);
    setRadio2(false);
    setRadio3(true);
  }, []);

  return (
    <Container>
      <Slides>
        <input
          readOnly
          type="radio"
          name="radio-btn"
          id="radio1"
          checked={radio1}
        />

        <input
          readOnly
          checked={radio2}
          type="radio"
          name="radio-btn"
          id="radio2"
        />

        <input
          readOnly
          checked={radio3}
          type="radio"
          name="radio-btn"
          id="radio3"
        />

        <div className="slide first">
          <img src={SignInBackground} alt="" />
        </div>

        <div className="slide">
          <img src={SignInBackground2} alt="" />
        </div>

        <div className="slide">
          <img src={SignInBackground3} alt="" />
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
            <label
              onClick={selectRadio1}
              htmlFor="radio1"
              className="btn-carrousel btn1"
            />
            <label
              onClick={selectRadio2}
              htmlFor="radio2"
              className="btn-carrousel btn2"
            />

            <label
              onClick={selectRadio3}
              htmlFor="radio3"
              className="btn-carrousel btn3"
            />
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
