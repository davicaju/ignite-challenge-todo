import { Header } from "./components/Header";
import { InputGroup } from "./components/InputGroup";
import { TaskList } from "./components/TaskList";

import { UseTodoProvider } from "./hooks/useTodo";

export function App() {
  return (
    <>
      <UseTodoProvider>
        <Header />
        <InputGroup />
        <TaskList />
      </UseTodoProvider>
    </>
  );
}
