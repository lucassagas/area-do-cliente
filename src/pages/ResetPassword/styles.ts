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
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: transformX(0);
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

  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px gray;
    border-radius: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--orangeicons);
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--orangeicons);
  }

  animation: ${appearFromLeft} 1s;

  img {
    width: 120px;
  }

  form {
    margin: 40px 0 20px;
    width: 340px;

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

      > strong {
        color: var(--text);
      }
    }

    > main {
      > p {
        margin-bottom: 20px;
        color: var(--text);
      }

      > div {
        margin-top: 10px;
        margin-bottom: 10px;
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
