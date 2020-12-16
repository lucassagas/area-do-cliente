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

  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px 30px 30px;
  width: 100%;
  height: 100%;

  animation: ${appearFromLeft} 1s;

  img {
    width: 120px;
  }

  form {
    margin: 40px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;

    > header {
      > h1 {
        font-size: 7.6rem;
        color: var(--orange);
        font-weight: 800;
      }
    }

    > main {
      > p {
        margin-bottom: 20px;
        color: var(--text);
      }
    }

    @media (max-width: 320px) {
      width: 300px;
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
