import styled from 'styled-components';

export const Container = styled.div`
  > span {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;

    animation-name: dots;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  > span + span {
    background-color: #ffff;
    animation-delay: 0.4s;
  }
  > span + span + span {
    background-color: #fff;
    animation-delay: 0.8s;
  }

  @keyframes dots {
    50% {
      opacity: 0;
      transform: scale(0.7) translateY(10px);
    }
  }
`;
