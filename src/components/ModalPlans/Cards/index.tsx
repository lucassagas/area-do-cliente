import React, { useCallback } from 'react';
import { usePlans } from '../../../hooks/plans';

import {
  AiOutlineCloudDownload,
  AiOutlineCloudUpload,
  TiArrowLoop,
  CgScreen,
  BiCloud,
  BiCameraMovie,
  MdChildCare,
  FiWifi,
} from '../../../styles/icon';

import Button from '../../Button';

import { Container, Body, Line } from './styles';

interface CardsProps {
  title: string;
  price: string;
  download: number;
  upload: number;
  router: string;
  tv?: boolean;
  drive: string;
  paramount?: boolean;
  noggin?: boolean;
  receivedValue: string;
}

const Cards: React.FC<CardsProps> = ({
  title,
  price,
  download,
  upload,
  router,
  tv = false,
  drive,
  paramount = false,
  noggin = false,
  receivedValue,
}) => {
  const { setSelectedPlan, setDisplayModalPlans } = usePlans();

  const handleSelectPlan = useCallback(() => {
    setSelectedPlan(receivedValue);
    setDisplayModalPlans(false);
  }, [receivedValue, setDisplayModalPlans, setSelectedPlan]);

  return (
    <Container>
      <header>
        <h1>{title}</h1>
        <strong style={{ display: 'flex', color: 'var(--lighttext)' }}>
          R$<h3>{price}</h3>/mês
        </strong>
      </header>
      <Body>
        <Line>
          <AiOutlineCloudDownload size={24} />
          <p>{download} Megas de Download</p>
        </Line>
        <Line>
          <AiOutlineCloudUpload size={24} />
          <p>{upload} Megas de Upload</p>
        </Line>
        <Line>
          <TiArrowLoop size={24} />
          <p>Acesso Ilimitado</p>
        </Line>
        <Line>
          <FiWifi size={24} />
          <p>{router}</p>
        </Line>
        {tv && (
          <Line>
            <CgScreen size={24} />
            <p>Neorede TV</p>
          </Line>
        )}
        <Line>
          <BiCloud size={24} />
          <p>NeoredeDrive | {drive}</p>
        </Line>
        {paramount && (
          <Line>
            <BiCameraMovie size={24} />
            <p>Paramount+</p>
          </Line>
        )}
        {noggin && (
          <Line>
            <MdChildCare size={24} />
            <p>Noggin</p>
          </Line>
        )}
        <Button onClick={handleSelectPlan} type="button">
          Contratar agora mesmo
        </Button>
      </Body>
    </Container>
  );
};

export default Cards;
