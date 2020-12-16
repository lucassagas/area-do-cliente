import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 500px;

  position: relative;

  section {
    position: absolute;
    bottom: 30px;
    display: none;

    a + a {
      margin-left: 10px;
    }

    @media (max-width: 768px) {
      display: block;
    }
  }

  > button {
    background: var(--orange);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 7px;
    border-radius: 0 8px 8px 0;
    position: absolute;

    left: 0;
    top: 40px;
  }

  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  img {
    width: 120px;
  }

  form {
    margin: 40px 0 20px;
    width: 340px;

    @media (max-width: 320px) {
      width: 300px;
    }

    h1 {
      font-size: 2rem;
      align-self: left;
      margin: 20px;
    }
  }

  a {
    color: var(--orange);
    display: block;
    text-decoration: none;
    font-weight: 500;

    & + a {
      font-weight: 300;
      margin-top: 5px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
