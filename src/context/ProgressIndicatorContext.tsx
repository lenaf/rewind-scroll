import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

type ProgressIndicatorContextType = {
  activeIndex?: number;
  setActiveIndex?: Dispatch<SetStateAction<number>>;
};

const ProgressIndicatorContext = createContext<ProgressIndicatorContextType>({});

const ProgressIndicatorProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ProgressIndicatorContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </ProgressIndicatorContext.Provider>
  );
};

export { ProgressIndicatorProvider, ProgressIndicatorContext };
