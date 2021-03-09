import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  padding: 10px 77px 0 120px;

  z-index: 10;

  background: var(--background);
  color: var(--text);

  display: flex;

  > img {
    display: none;
    width: 60px;

    @media (max-width: 768px) {
      display: block;
    }

    @media (max-width: 430px) {
      width: 40px;
    }
  }

  @media (max-width: 430px) {
    padding: 10px 20px 0 20px;
    max-height: 80px;
  }

  > div {
    display: flex;

    height: 70px;
    justify-content: flex-end;
    align-items: center;
    max-width: 1620px;
    margin: auto;
    width: 100%;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;

      @media (max-width: 430px) {
        margin-left: 20px;
      }
    }

    span {
      margin: 0 20px;
      font-weight: 300;

      @media (max-width: 430px) {
        display: none;
      }
    }

    > section {
      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;

        @media (max-width: 430px) {
          margin-right: 30px;
        }
      }
    }

    > button {
      background: transparent;
      border: 0;
      color: var(--icons);
      margin-left: 10px;

      & + button {
        margin-left: 15px;
      }

      &:hover {
        color: var(--orange);
      }
    }

    .MyAccount {
      position: relative;
    }
  }
`;
