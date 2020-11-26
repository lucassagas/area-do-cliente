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

  > div {
    max-width: 270px;
    width: 100%;
    padding: 20px;

    border: solid 1px var(--lightgray);
    border-radius: 10px;

    .skeleton-row {
      width: 40%;
      height: 20px;
      border-radius: 4px;
    }
    .skeleton-row:nth-child(2) {
      width: 60%;
      margin: 15px 0;
    }
    .skeleton-row:nth-child(3) {
      width: 80%;
    }
  }
`;
