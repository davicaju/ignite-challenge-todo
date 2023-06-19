import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

interface IUseTodo {
  tasks: Task[];
  onCreateTask: (value: string) => void;
  onDeleteTask: (id: number) => void;
  onCompleteTask: (id: number) => void;
}

const useTodoContext = createContext<IUseTodo>({} as IUseTodo);

export const UseTodoProvider = ({ children }: { children: ReactNode }) => {
  const mockedTasks = [
    {
      id: 1,
      title: "Do something",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Do something",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Do something",
      isCompleted: false,
    },
  ];

  const [tasks, setTasks] = useState(mockedTasks);

  console.log(tasks);

  const onCreateTask = useCallback(
    (value: string) => {
      const task = {
        id: tasks.length + 1,
        title: value,
        isCompleted: false,
      };

      setTasks((oldState) => [...oldState, task]);
    },
    [tasks]
  );

  const onDeleteTask = useCallback(
    (id: number) => {
      const noDeletedTask = tasks.filter((task) => task.id !== id);

      setTasks(noDeletedTask);
    },
    [tasks]
  );

  const onCompleteTask = useCallback(
    (id: number) => {
      const completeTasks = tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isCompleted: !task.isCompleted,
            }
          : task
      );

      setTasks(completeTasks);
    },
    [tasks]
  );

  return (
    <useTodoContext.Provider
      value={{ tasks, onCreateTask, onDeleteTask, onCompleteTask }}
    >
      {children}
    </useTodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(useTodoContext);
};
