'use client'
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export interface BazarDorContextType {
  sortBy: 'default' | 'HighToLow' | 'LowToHigh',
  setSortBy: Dispatch<SetStateAction<'default' | 'HighToLow' | 'LowToHigh'>>
}

export const BazarDorContext = createContext<BazarDorContextType>(
  {   
    sortBy: 'default',
    setSortBy: () => { },
  }
);

const BazarDorProvider = ({ children }: { children: ReactNode }) => {


  const [sortBy, setSortBy] = useState<'default' | 'HighToLow' | 'LowToHigh'>('default');


  const sharedData = {
    sortBy,
    setSortBy
  }

  return (<BazarDorContext.Provider value={sharedData}>{children}</BazarDorContext.Provider>
  );
};

export default BazarDorProvider;