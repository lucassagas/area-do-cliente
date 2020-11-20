import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1620px;
  width: 100%;
  margin: auto;
  border: solid 1px var(--lightgray);
  border-radius: 15px;
  padding: 20px;

  label {
    > section {
      width: 100%;
      height: 100px;
      border: solid 1px var(--lightgray);
      border-radius: 10px;
      padding: 10px;
    }
  }
`;

export const InputsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  #cep {
    width: 23%;
    margin-right: 10px;
  }

  #nickname {
    width: 29%;
  }

  #address,
  #neighborhood {
    width: 60%;
    margin-right: 10px;
  }

  #number {
    width: 15%;
  }

  #dateofbirth {
    width: 19%;
    margin-right: 10px;
  }
  #complement {
    width: 19%;
    margin-left: 10px;
  }

  #reference,
  #name {
    width: 50%;
    margin-right: 10px;
  }

  #state {
    width: 10%;
    margin-right: 10px;
  }

  #city {
    width: 38%;
  }

  #phone,
  #optionalphone,
  #celphone,
  #optionalcelphone {
    width: 24.5%;
    margin-right: 10px;
  }

  #email {
    width: 49%;
  }

  @media (max-width: 768px) {
    #phone,
    #optionalphone,
    #dateofbirth {
      width: 30%;
    }

    #nickname {
      width: 40%;
    }
  }
`;

export const SeeMore = styled.button`
  background: var(--green);
  max-width: 110px;
  padding: 5px 10px;
  border-radius: 7px;
  margin: 10px 0;
  color: var(--background);
  float: right;
  border: 0;
  margin-right: 5px;

  @media (max-width: 430px) {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 0;
  background: var(--lightgray);
`;
