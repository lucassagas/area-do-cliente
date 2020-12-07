import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1630px;
  width: 100%;
  margin: auto;
  border: solid 1px var(--lightgray);
  border-radius: 15px;
  padding: 20px;

  @media (max-width: 1440px) {
    max-width: 1100px;
  }

  > div {
    display: flex;
    .skeleton-row {
      width: 100%;
      height: 35px;
      margin: 10px 5px;
      border-radius: 10px;
    }
  }

  .skeleton-row {
    width: 100%;
    height: 35px;
    margin: 10px 5px;
    border-radius: 10px;
    height: 100px;
  }

  > div:nth-child(1) {
    .skeleton-row:nth-child(1) {
      width: 60%;
    }

    .skeleton-row:nth-child(2) {
      width: 20%;
    }
  }

  > div:nth-child(2) {
    .skeleton-row:nth-child(1) {
      width: 20%;
    }

    .skeleton-row:nth-child(2) {
      width: 20%;
    }

    .skeleton-row:nth-child(3) {
      width: 20%;
    }
  }

  > div:nth-child(3) {
    .skeleton-row:nth-child(1) {
      width: 20%;
    }

    .skeleton-row:nth-child(2) {
      width: 30%;
    }

    .skeleton-row:nth-child(3) {
      width: 50%;
    }
  }

  > div:nth-child(5) {
    .skeleton-row:nth-child(1) {
      width: 20%;
    }

    .skeleton-row:nth-child(2) {
      width: 60%;
    }

    .skeleton-row:nth-child(3) {
      width: 20%;
    }
  }

  > div:nth-child(6) {
    .skeleton-row:nth-child(1) {
      width: 60%;
    }

    .skeleton-row:nth-child(2) {
      width: 20%;
    }
  }

  > div:nth-child(7) {
    .skeleton-row:nth-child(1) {
      width: 50%;
    }

    .skeleton-row:nth-child(2) {
      width: 10%;
    }

    .skeleton-row:nth-child(3) {
      width: 40%;
    }
  }
`;
export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: var(--lightgray);
  margin: 10px 0;
`;
