import { ReactNode, createContext, useContext } from "react";

interface IUseTodo {
  value: string;
}

const useTodoContext = createContext<IUseTodo>({} as IUseTodo);

export const UseTodoProvider = ({ children }: { children: ReactNode }) => {
  let value = "a";
  return (
    <useTodoContext.Provider value={{ value }}>
      {children}
    </useTodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(useTodoContext);
};
