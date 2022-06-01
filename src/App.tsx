import React, { createContext, useState } from "react";
import { Router } from "react-router-dom";
import history from "utils/history";
import Routes from "routes";
import "assets/css/App.scss";

export const ReferenceDataContext = createContext({
  language: {},
  setLanguage: () => {},
});

export const ReferenceDataContextProvider = ({ children }) => {
  const [language, setLanguage] = useState<any>({});
  const value: any = { language, setLanguage };

  return (
    <ReferenceDataContext.Provider value={value}>
      {children}
    </ReferenceDataContext.Provider>
  );
};

const App: React.FC = () => {
  return (
    <ReferenceDataContextProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </ReferenceDataContextProvider>
  );
};

export default App;
