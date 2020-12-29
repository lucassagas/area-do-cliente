import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1630px;
  width: 100%;
  margin: auto;
  border: solid 1px var(--lightgray);
  border-radius: 15px;
  padding: 20px;
  color: var(--text);

  label {
    > section {
      width: 100%;
      height: 100px;
      border: solid 1px var(--lightgray);
      border-radius: 10px;
      padding: 10px;
    }
  }

  @media (max-width: 1440px) {
    max-width: 1100px;
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
    width: 25%;
  }

  #dateofbirth {
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
    width: 20%;
    margin-right: 10px;
  }

  #city {
    width: 38%;
  }

  #phone,
  #optionalphone,
  #celphone,
  #optionalcelphone {
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

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 10px;

    #cep {
      width: 100%;
    }

    #nickname {
      width: 100%;
    }

    #address,
    #neighborhood {
      width: 100%;
      margin-right: 0;
    }

    #number {
      width: 40%;
    }

    #dateofbirth {
      width: 80%;
      margin-right: 0;
    }
    #complement {
      width: 100%;
      margin-left: 0;
    }

    #reference,
    #name {
      width: 100%;
      margin-right: 0;
    }

    #state {
      width: 30%;
      margin-right: 0;
    }

    #city {
      width: 100%;
    }

    #phone,
    #optionalphone,
    #celphone,
    #optionalcelphone {
      width: 70%;
      margin-right: 0;
    }

    #email {
      width: 100%;
    }
  }
`;

export const SeeMore = styled.button`
  background: var(--purple);
  max-width: 110px;
  padding: 5px 10px;
  border-radius: 7px;
  margin: 10px 0;
  color: var(--lighttext);
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
