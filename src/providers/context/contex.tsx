import type { PropsWithChildren } from "react";
import React, { createContext, useContext, useMemo, useState } from "react";

interface IFees {
  tax: number;
  extra: number;
  job: number;
}

interface AppState {
  actions: {
    setFees: (fees: IFees | null) => void;
  };
  state: {
    fees: IFees | null;
  };
}

const AppContext = createContext<AppState | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export const AppContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [fees, setFees] = useState<IFees | null>(null);

  const appContextValue = useMemo(
    () => ({
      actions: { setFees },
      state: { fees },
    }),
    [fees]
  );

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
