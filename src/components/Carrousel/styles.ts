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
      background: var(--background);
    }
    &:checked ~ .first {
      margin-left: 0;
    }
  }

  #radio2 {
    &:checked ~ div nav .btn2 {
      background: var(--background);
    }
    &:checked ~ .first {
      margin-left: -20%;
    }
  }
`;

export const Navigation = styled.div`
  position: absolute;
  bottom: 60px;
  left: 40px;

  h1 {
    color: var(--background);
  }

  img {
    width: 120px;
  }
  nav {
    display: flex;
    margin: 15px 0;
    .btn-carrousel {
      display: block;
      width: 60px;
      height: 4px;
      cursor: pointer;
      transition: 1s;
      background: var(--lightgray);

      & + label {
        margin-left: 10px;
      }
    }
  }

  section {
    svg {
      cursor: pointer;
      &:hover {
        fill: var(--orange);
      }
    }
    svg + svg {
      margin-left: 10px;
    }
  }
`;
