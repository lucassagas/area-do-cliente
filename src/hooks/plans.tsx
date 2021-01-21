import React, { createContext, useContext, useState } from 'react';
import ModalPlans from '../components/ModalPlans';

interface PlansContextData {
  displayModalPlans: boolean;
  setDisplayModalPlans(data: boolean): void;
  selectedPlan: string | undefined;
  setSelectedPlan(data: string): void;
}

const PlansContext = createContext({} as PlansContextData);

const PlansProvider: React.FC = ({ children }) => {
  const [displayModalPlans, setDisplayModalPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>();
  return (
    <PlansContext.Provider
      value={{
        displayModalPlans,
        selectedPlan,
        setDisplayModalPlans,
        setSelectedPlan,
      }}
    >
      {children}
      <ModalPlans />
    </PlansContext.Provider>
  );
};

function usePlans(): PlansContextData {
  const context = useContext(PlansContext);

  if (!context) {
    throw new Error('usePlans must be used within an PlansProvider');
  }

  return context;
}

export { PlansProvider, usePlans };
