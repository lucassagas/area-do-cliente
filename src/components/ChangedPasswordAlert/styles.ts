import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 15;

  background: var(--whiteopacity);
`;

const appearFromTop = keyframes`
  from {
    top: -600px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: 450px;
  width: 100%;

  border-radius: 10px;
  background: var(--background);
  padding: 20px;

  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  animation: ${appearFromTop} 0.6s;

  > h1 {
    color: var(--orange);
    font-size: 4rem;
  }

  > svg {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;

    &:hover {
      color: var(--error) !important;
      transition: 0.2s;
    }
  }

  > strong {
    margin-top: 10px;
    color: var(--text);
  }

  > p {
    margin-bottom: 20px;
    color: var(--text);
  }
`;

export const Services = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    width: 110px;
  }
`;
