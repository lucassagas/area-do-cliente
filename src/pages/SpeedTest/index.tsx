import React from 'react';

import Iframe from 'react-iframe';
import { useTheme } from '../../hooks/themes';
import { Container } from './styles';

const SpeedTest: React.FC = () => {
  const { themeName } = useTheme();
  return (
    <Container>
      {themeName === 'dark' ? (
        <Iframe
          width="100%"
          height="650px"
          position="relative"
          frameBorder={0}
          display="block"
          url="https://darkneorede.speedtestcustom.com"
          title="speedtest"
        />
      ) : (
        <Iframe
          width="100%"
          height="650px"
          position="relative"
          frameBorder={0}
          display="block"
          url="https://neorede.speedtestcustom.com"
          title="speedtest"
        />
      )}
    </Container>
  );
};

export default SpeedTest;
