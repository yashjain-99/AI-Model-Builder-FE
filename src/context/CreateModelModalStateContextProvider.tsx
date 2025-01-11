import { createContext, ReactNode, useContext, useState } from "react";

interface ModalStateContextType {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const ModalContext = createContext<ModalStateContextType | undefined>(
  undefined
);

const CreateModelModalStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useCreateModelModalStateContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useCreateModelModalStateContext must be used within a CreateModelModalStateProvider"
    );
  }
  return context;
};

export default CreateModelModalStateProvider;
