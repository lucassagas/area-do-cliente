import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1630px;
  padding: 30px;
  border-radius: 10px;
  border: solid 1px var(--lightgray);
  margin: auto auto 20px;
  color: var(--text);

  display: flex;
  flex-wrap: nowrap;

  overflow-x: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px gray;
    border-radius: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--greenopacity);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--greenopacity);
  }

  @media (max-width: 1440px) {
    max-width: 1100px;
  }

  @media (max-width: 430px) {
    margin-top: 40px;
  }

  .skeleton-container {
    position: relative;
    min-width: 280px;
    width: 280px;
    padding: 10px;

    border-radius: 10px;
    border: 1px solid var(--lightgray);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    & + .skeleton-container {
      margin-left: 10px;
    }
  }

  .skeleton-row {
    height: 20px;
    margin: 10px;
    border-radius: 4px;
    width: 40%;
  }
  .skeleton-row:nth-child(2) {
    width: 60%;
  }
  .skeleton-row:nth-child(3) {
    height: 30px;
    width: 80%;
  }

  .skeleton-icon {
    position: absolute;
    width: 25px;
    height: 25px;

    right: 10px;
    bottom: -12px;

    border-radius: 6px;
  }
`;
