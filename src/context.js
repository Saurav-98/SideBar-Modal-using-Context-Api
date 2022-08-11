import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openSideBar = () => {
    setSideBarOpen(true);
  };
  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        sidebarOpen,
        openModal,
        openSideBar,
        closeModal,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
