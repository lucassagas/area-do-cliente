import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import Input from '../Input';

import { Container, InputsGroup, SeeMore, Separator } from './styles';

interface DisplayProps {
  display?: boolean;
}

const CustomerData: React.FC<DisplayProps> = ({ display = false }) => {
  const handleSubmit = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <InputsGroup>
            <label id="name" htmlFor="name">
              Nome
              <Input className="menor" id="name" name="name" />
            </label>

            <label id="nickname" htmlFor="nickname">
              Apelido
              <Input id="nickname" name="nickname" />
            </label>
          </InputsGroup>

          <InputsGroup>
            <label id="dateofbirth" htmlFor="name">
              Data de Nascimento
              <Input id="dateofbirth" name="dateofbirth" />
            </label>

            <label id="phone" htmlFor="name">
              Telefone
              <Input id="phone" name="phone" />
            </label>

            <label id="optionalphone" htmlFor="name">
              Telefone Opcional
              <Input id="optionalphone" name="optionalphone" />
            </label>
          </InputsGroup>

          <InputsGroup>
            <label id="celphone" htmlFor="name">
              Celular
              <Input id="celphone" name="celphone" />
            </label>

            <label id="optionalcelphone" htmlFor="name">
              Celular Opcional
              <Input id="optionalcelphone" name="optionalcelphone" />
            </label>

            <label id="email" htmlFor="name">
              Email
              <Input id="email" name="email" />
            </label>
          </InputsGroup>

          {display && (
            <>
              <Separator />
              <InputsGroup>
                <label id="cep" htmlFor="cep">
                  CEP
                  <Input id="cep" name="cep" />
                </label>

                <label id="address" htmlFor="address">
                  Endereço
                  <Input id="address" name="address" />
                </label>

                <label id="number" htmlFor="number">
                  Número
                  <Input id="number" name="number" />
                </label>
              </InputsGroup>

              <InputsGroup style={{ justifyContent: 'flex-start' }}>
                <label id="neighborhood" htmlFor="neighborhood">
                  Bairro
                  <Input id="neighborhood" name="neighborhood" />
                </label>

                <label id="complement" htmlFor="complement">
                  Complemento
                  <Input id="complement" name="complement" />
                </label>
              </InputsGroup>

              <InputsGroup>
                <label id="reference" htmlFor="reference">
                  Referência
                  <Input id="reference" name="reference" />
                </label>

                <label id="state" htmlFor="state">
                  Estado
                  <Input id="state" name="state" />
                </label>

                <label id="city" htmlFor="city">
                  Cidade
                  <Input id="city" name="city" />
                </label>
              </InputsGroup>

              <label>
                Observções
                <section>Descrição</section>
              </label>
            </>
          )}
        </Form>
      </Container>
      {display ? null : <SeeMore type="button">Ver mais</SeeMore>}
    </>
  );
};

export default CustomerData;
