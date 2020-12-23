import React, { useCallback } from 'react';
import addNotification from 'react-push-notification';

const AddNotification: React.FC = () => {
  const handleNotification = useCallback(() => {
    addNotification({
      title: 'Warning',
      subtitle: 'This is a subtitle',
      message: 'MARCELINHO É MUITO BOM',
      theme: 'darkblue',
      native: true,
    });

    console.log('chegou');
  }, []);
  return (
    <div>
      <button type="button" onClick={handleNotification}>
        Testando
      </button>
    </div>
  );
};

export default AddNotification;
