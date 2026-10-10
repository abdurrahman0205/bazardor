'use client'
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export interface BazarDorContextType {
  sortBy: string  
  setSortBy: Dispatch<SetStateAction<string>>
}

export const BazarDorContext = createContext<BazarDorContextType>(
  {   
    sortBy: 'duration',
    setSortBy: () => { },
  }
);

const BazarDorProvider = ({ children }: { children: ReactNode }) => {


  const [sortBy, setSortBy] = useState<string>('');


  const sharedData = {
    sortBy,
    setSortBy
  }

  return (<BazarDorContext.Provider value={sharedData}>{children}</BazarDorContext.Provider>
  );
};

export default BazarDorProvider;