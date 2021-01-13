import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Slides = styled.div`
  width: 500%;
  display: flex;
  .slide {
    width: 20%;
    height: 100vh;
    transition: 2s;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  input {
    display: none;
  }

  #radio1 {
    &:checked ~ div nav .btn1 {
      background: var(--lighttext);
    }
    &:checked ~ .first {
      margin-left: 0;
    }
  }

  #radio2 {
    &:checked ~ div nav .btn2 {
      background: var(--lighttext);
    }
    &:checked ~ .first {
      margin-left: -20%;
    }
  }

  #radio3 {
    &:checked ~ div nav .btn3 {
      background: var(--lighttext);
    }
    &:checked ~ .first {
      margin-left: -40%;
    }
  }
`;

export const Navigation = styled.div`
  position: absolute;
  bottom: 60px;
  left: 40px;

  h1 {
    color: var(--lighttext);
    font-size: 3.2rem;
    margin-left: 8px;
  }

  img {
    width: 120px;
  }
  nav {
    display: flex;
    margin: 15px 0 15px 10px;
    .btn-carrousel {
      display: block;
      width: 60px;
      height: 4px;
      cursor: pointer;
      border-radius: 10px;
      transition: 1s;
      background: var(--lightgray);

      & + label {
        margin-left: 10px;
      }
    }
  }

  section {
    margin-left: 3px;
    a + a {
      margin-left: 10px;
    }

    a svg {
      transition: fill 0.4s;
      cursor: pointer;
      &:hover {
        fill: var(--orange);
        transition: fill 0.4s;
      }
    }
  }
`;
