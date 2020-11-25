import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 60px;
  height: 100vh;
  border-right: 1px solid var(--lightgray);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 40px;
    margin-top: 30px;
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .selected {
      border-color: var(--orange);
      color: var(--orange);
      transition: border 0.5s;
    }

    ul {
      list-style: none;

      li {
        width: 100%;
        margin: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        a {
          text-decoration: none;
          color: var(--icon);
          display: block;
          padding: 10px 17px;
          border-right: solid 3px transparent;
        }
      }
    }
  }
`;
