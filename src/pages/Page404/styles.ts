import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;

  > img {
    margin: 7% 0 5% 0;
  }

  > div img {
    width: 50%;
  }

  flex-direction: column;
  align-items: center;
  > div {
    display: flex;
    width: 100%;
    height: 100%;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    > section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      color: var(--text);

      > span {
        margin: 20px;
        font-size: 3.2rem;
      }

      > a {
        display: block;
        background: var(--orange);
        padding: 10px 20px;
        border-radius: 9px;
        text-decoration: none;
        color: var(--lighttext);
      }
    }
  }

  @media (max-width: 768px) {
    > img {
      margin: 15% 0 5% 0;
    }
    > div img {
      width: 80%;
      margin: 10%;
    }
  }

  @media (max-width: 430px) {
    > div section span {
      font-size: 2rem;
      text-align: center;
    }
  }

  > section {
    margin: 5% 0;
  }
`;
