import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  padding: 30px 60px 0 60px;

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
  }

  div {
    display: flex;
    height: 70px;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    span {
      margin: 0 20px;
      font-weight: 300;
    }

    button {
      background: transparent;
      border: 0;
      color: var(--icons);

      & + button {
        margin-left: 15px;
      }

      &:hover {
        color: var(--orange);
      }
    }
  }
`;
