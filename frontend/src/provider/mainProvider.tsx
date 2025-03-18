import { createContext, useState } from "react";

export const MainContext = createContext<MainContextI | null>(null);

export const MainProvider = ({ children }: PropsI) => {
  const [errorAlert, setErrorAlert] = useState("");

  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const changeShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <MainContext.Provider
      value={{
        errorAlert,
        showSettings,
        showAbout,
        showCalendar,
        setErrorAlert,
        setShowSettings,
        setShowAbout,
        changeShowCalendar,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
