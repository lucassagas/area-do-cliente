import React from 'react';

import Iframe from 'react-iframe';
import { Container } from './styles';

const SpeedTest: React.FC = () => {
  return (
    <Container>
      <Iframe
        width="100%"
        height="650px"
        position="relative"
        frameBorder={0}
        display="block"
        url="http://neorede.speedtestcustom.com"
        title="speedtest"
      />
    </Container>
  );
};

export default SpeedTest;
