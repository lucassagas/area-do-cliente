import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1630px;
  margin: auto auto 20px;
  color: var(--text);

  padding: 10px 20px 20px 0;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  overflow-x: auto;

  @media (max-width: 1920px) {
    max-width: 1630px;
  }

  @media (max-width: 1440px) {
    max-width: 1230px;
  }

  @media (max-width: 1366px) {
    max-width: 1100px;
  }

  .active {
    background: var(--lightgreen);
    border-left: 4px solid var(--green);
    border-radius: 0 10px 10px 0;
  }

  h2 {
    margin-bottom: 10px;
  }

  section {
    display: flex;
  }

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

  @media (max-width: 768px) {
    max-width: 600px;

    padding-left: 0;
    margin: 10px 0 0;
  }
`;

export const Title = styled.div`
  color: var(--lighttext);
  background: var(--green);
  max-width: 141px;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
`;

export const Card = styled.button`
  min-width: 270px;
  padding: 10px;

  border: solid 1px var(--lightgray);
  border-radius: 10px;

  transition: background 0.5s;
  transition: border 0.4s;
  color: var(--text);

  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
  flex-direction: column;
  text-align: left;

  & + button {
    margin-left: 30px;
  }
`;
